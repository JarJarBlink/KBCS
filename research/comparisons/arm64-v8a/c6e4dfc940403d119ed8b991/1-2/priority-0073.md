# v16.0.2 → v16.0.3 · 最優先の変更候補 (73)

[一覧の目次](README.md)

<a id="compare-40dd6c9c535b180ac9328f303ad22c67"></a>

### [`00a69414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69414.md) → [`00a6a408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a408.md) FUN_00a6a408

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a69450",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00a6a444",
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
- 00a69430 ["INT_ADD", "register:40f0:8", ["const:a69430:8", "const:4:8"]]
- 00a69430 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a6a424 ["INT_ADD", "register:40f0:8", ["const:a6a424:8", "const:4:8"]]
+ 00a6a424 ["CALL", null, ["callee:00c54d90:8"]]
- 00a6944c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:10:8"]]
- 00a6944c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a69450 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a69450 ["INT_ADD", "register:40f0:8", ["const:a69450:8", "const:4:8"]]
- 00a69450 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-948681496779b4396787a70af54dff63"></a>

### [`00a69464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69464.md) → [`00a6a458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a458.md) FUN_00a6a458

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2e5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2e5bc.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a2f5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2f/00a2f5b0.md) · 呼出先 1件 [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6a480",
      "incomplete_value": true,
      "site": "00a6a484",
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
      "definition_site": "00a6a47c",
      "incomplete_value": true,
      "site": "00a6a484",
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
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 00a69490 ["INT_ADD", "register:40f0:8", ["const:a69490:8", "const:4:8"]]
- 00a69490 ["CALL", null, ["callee:00481188:8"]]
+ 00a6a484 ["INT_ADD", "register:40f0:8", ["const:a6a484:8", "const:4:8"]]
+ 00a6a484 ["CALL", null, ["callee:00481188:8"]]
- 00a69484 ["INT_ADD", "register:40f0:8", ["const:a69484:8", "const:4:8"]]
- 00a69484 ["CALL", null, ["callee:00481188:8"]]
+ 00a6a478 ["INT_ADD", "register:40f0:8", ["const:a6a478:8", "const:4:8"]]
+ 00a6a478 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-947612b09749ec320f260556bc144041"></a>

### [`00a69598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69598.md) → [`00a6a58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a58c.md) FUN_00a6a58c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`007ca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca580.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`007cb4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb4e4.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.23% / 新版 91.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6a5f4",
      "incomplete_value": false,
      "site": "00a6a5f8",
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
      "definition_site": "00a69600",
      "incomplete_value": false,
      "site": "00a69604",
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
      "unmatched:00a695dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6a5f0"
      ]
    ],
    [
      "00a6a5e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a69608"
      ]
    ],
    [
      "00a6a5f4",
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
      "00a6a5d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6a5f0"
      ]
    ],
    [
      "00a6a5e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6a5fc"
      ]
    ],
    [
      "00a6a5f4",
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
- 00a69604 ["INT_ADD", "register:40f0:8", ["const:a69604:8", "const:4:8"]]
- 00a69604 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6a5f8 ["INT_ADD", "register:40f0:8", ["const:a6a5f8:8", "const:4:8"]]
+ 00a6a5f8 ["CALL", null, ["callee:00442c90:8"]]
- 00a695a4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a695a4 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00a6a598 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a6a598 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 00a695b8 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00a695b8 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00a6a5ac ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00a6a5ac ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
~~~


<a id="compare-d9f32b775c221bca3b906445ede7cd16"></a>

### [`00a6967c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a6967c.md) → [`00a6a670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a670.md) FUN_00a6a670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`009390b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/009390b0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6a6cc",
      "incomplete_value": false,
      "site": "00a6a6d0",
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
      "definition_site": "00a696d8",
      "incomplete_value": false,
      "site": "00a696dc",
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
      "00a6a6cc",
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
      "00a6a6cc",
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
- 00a696dc ["INT_ADD", "register:40f0:8", ["const:a696dc:8", "const:4:8"]]
- 00a696dc ["CALL", null, ["callee:00442c90:8"]]
+ 00a6a6d0 ["INT_ADD", "register:40f0:8", ["const:a6a6d0:8", "const:4:8"]]
+ 00a6a6d0 ["CALL", null, ["callee:00442c90:8"]]
- 00a696d8 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a696d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a696d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a696d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6a6cc ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6a6cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6a6cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6a6cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-259c4cf3abf6ef07646bbe6f5ba61821"></a>

### [`00a696fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a696fc.md) → [`00a6a6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a6f0.md) FUN_00a6a6f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a6af9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6af9c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00a69800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69800.md)
- 新版 呼出元 1件 [`00a6bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bf90.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00a6a7f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a7f4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6a758",
      "incomplete_value": false,
      "site": "00a6a75c",
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
      "definition_site": "00a69764",
      "incomplete_value": false,
      "site": "00a69768",
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
      "00a6a758",
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
      "00a6a758",
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
- 00a69768 ["INT_ADD", "register:40f0:8", ["const:a69768:8", "const:4:8"]]
- 00a69768 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6a75c ["INT_ADD", "register:40f0:8", ["const:a6a75c:8", "const:4:8"]]
+ 00a6a75c ["CALL", null, ["callee:00442c90:8"]]
- 00a69764 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a69764 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a69764 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a69764 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6a758 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6a758 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6a758 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6a758 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4291ecbbf4fe453e6e7a1ba75fa3daf7"></a>

### [`00a69800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69800.md) → [`00a6a7f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a7f4.md) FUN_00a6a7f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0071d254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d254.md) [`00a696fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a696fc.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0071d604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d604.md) [`00a6a6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a6f0.md) · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.26% / 新版 98.26%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6a86c",
      "incomplete_value": false,
      "site": "00a6a870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a69878",
      "incomplete_value": false,
      "site": "00a6987c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6aa64",
      "incomplete_value": false,
      "site": "00a6aa68",
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
      "definition_site": "00a69a70",
      "incomplete_value": false,
      "site": "00a69a74",
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
      "00a6a870",
      "DATA",
      [
        "storage",
        "00c8b9d0",
        null,
        "pointer"
      ]
    ],
    [
      "00a6aa64",
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
      "00a6a870",
      "DATA",
      [
        "storage",
        "00c8c9a0",
        null,
        "pointer"
      ]
    ],
    [
      "00a6aa64",
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
- 00a69a74 ["INT_ADD", "register:40f0:8", ["const:a69a74:8", "const:4:8"]]
- 00a69a74 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6aa68 ["INT_ADD", "register:40f0:8", ["const:a6aa68:8", "const:4:8"]]
+ 00a6aa68 ["CALL", null, ["callee:00442c90:8"]]
- 00a6986c ["INT_ADD", "register:40f0:8", ["const:a6986c:8", "const:4:8"]]
- 00a6986c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a6a860 ["INT_ADD", "register:40f0:8", ["const:a6a860:8", "const:4:8"]]
+ 00a6a860 ["CALL", null, ["callee:00c58f30:8"]]
- 00a69874 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6a868 ["COPY", "register:4040:8", ["const:c8c000:8"]]
~~~


<a id="compare-33483de03940d7189fc0cfc7b92d9494"></a>

### [`00a69ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69ad4.md) → [`00a6aac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6aac8.md) FUN_00a6aac8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00a68c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68c58.md)
- 新版 呼出元 3件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00a69c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69c4c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6ab34",
      "incomplete_value": false,
      "site": "00a6ab38",
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
      "definition_site": "00a69b40",
      "incomplete_value": false,
      "site": "00a69b44",
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
      "00a6ab34",
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
      "00a6ab34",
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
- 00a69b44 ["INT_ADD", "register:40f0:8", ["const:a69b44:8", "const:4:8"]]
- 00a69b44 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6ab38 ["INT_ADD", "register:40f0:8", ["const:a6ab38:8", "const:4:8"]]
+ 00a6ab38 ["CALL", null, ["callee:00442c90:8"]]
- 00a69b40 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a69b40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a69b40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a69b40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6ab34 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6ab34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ab34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ab34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-071bde8df828d5ecd6f7377184a3739f"></a>

### [`00a69bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69bb8.md) → [`00a6abac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6abac.md) FUN_00a6abac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a6af9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6af9c.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00a68d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68d58.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a6bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bf90.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00a69d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69d4c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.86% / 新版 97.86%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6ac30",
      "incomplete_value": false,
      "site": "00a6ac34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a69c3c",
      "incomplete_value": false,
      "site": "00a69c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6ad90",
      "incomplete_value": false,
      "site": "00a6ad94",
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
      "definition_site": "00a69d9c",
      "incomplete_value": false,
      "site": "00a69da0",
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
      "00a6ac34",
      "DATA",
      [
        "storage",
        "00c8b9d0",
        null,
        "pointer"
      ]
    ],
    [
      "00a6ad90",
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
      "00a6ac34",
      "DATA",
      [
        "storage",
        "00c8c9a0",
        null,
        "pointer"
      ]
    ],
    [
      "00a6ad90",
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
- 00a69da0 ["INT_ADD", "register:40f0:8", ["const:a69da0:8", "const:4:8"]]
- 00a69da0 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6ad94 ["INT_ADD", "register:40f0:8", ["const:a6ad94:8", "const:4:8"]]
+ 00a6ad94 ["CALL", null, ["callee:00442c90:8"]]
- 00a69c30 ["INT_ADD", "register:40f0:8", ["const:a69c30:8", "const:4:8"]]
- 00a69c30 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a6ac24 ["INT_ADD", "register:40f0:8", ["const:a6ac24:8", "const:4:8"]]
+ 00a6ac24 ["CALL", null, ["callee:00c58f30:8"]]
- 00a69c38 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6ac2c ["COPY", "register:4040:8", ["const:c8c000:8"]]
~~~


<a id="compare-7351bdf9553621adf8648721d1bad834"></a>

### [`00a69e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69e40.md) → [`00a6ae34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6ae34.md) FUN_00a6ae34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a69e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69e1c.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00a6ae10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6ae10.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, store_destination, store_value, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 92.70% / 新版 92.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件, `store_value` 4件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6ae70",
      "incomplete_value": false,
      "site": "00a6ae74",
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
      "definition_site": "00a69e7c",
      "incomplete_value": false,
      "site": "00a69e80",
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
      "definition_site": "00a6b1a0",
      "incomplete_value": true,
      "site": "00a6b1a4",
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
      "definition_site": "00a6a1ac",
      "incomplete_value": true,
      "site": "00a6a1b0",
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
    "kind": "store_value",
    "new": {
      "definition_site": "00a6b19c",
      "incomplete_value": true,
      "site": "00a6b1a8",
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
      "definition_site": "00a6a1a8",
      "incomplete_value": true,
      "site": "00a6a1b4",
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
      "00a6ae74",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a6ae7c",
      "PARAM",
      [
        "storage",
        "01123ff0",
        null,
        null
      ]
    ],
    [
      "00a6af0c",
      "PARAM",
      [
        "storage",
        "01124028",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00a6ae74",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a6ae7c",
      "PARAM",
      [
        "storage",
        "01124fb0",
        null,
        null
      ]
    ],
    [
      "00a6af0c",
      "PARAM",
      [
        "storage",
        "01124fe8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a69e98 ["INT_ADD", "register:40f0:8", ["const:a69e98:8", "const:4:8"]]
- 00a69e98 ["CALL", null, ["callee:00b1217c:8"]]
+ 00a6ae8c ["INT_ADD", "register:40f0:8", ["const:a6ae8c:8", "const:4:8"]]
+ 00a6ae8c ["CALL", null, ["callee:00b1217c:8"]]
- 00a69f20 ["INT_ADD", "register:40f0:8", ["const:a69f20:8", "const:4:8"]]
- 00a69f20 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6af14 ["INT_ADD", "register:40f0:8", ["const:a6af14:8", "const:4:8"]]
+ 00a6af14 ["CALL", null, ["callee:004413ec:8"]]
- 00a69fa4 ["INT_ADD", "register:40f0:8", ["const:a69fa4:8", "const:4:8"]]
- 00a69fa4 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6af98 ["INT_ADD", "register:40f0:8", ["const:a6af98:8", "const:4:8"]]
+ 00a6af98 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-95ee899ccf69a875236497cebbf9089f"></a>

### [`00a6a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a310.md) → [`00a6b304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6b304.md) FUN_00a6b304

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a69e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69e1c.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00493b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493b60.md)
- 新版 呼出元 1件 [`00a6ae10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6ae10.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`00493e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493e80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6b340",
      "incomplete_value": false,
      "site": "00a6b344",
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
      "definition_site": "00a6a34c",
      "incomplete_value": false,
      "site": "00a6a350",
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
      "definition_site": "00a6b5c8",
      "incomplete_value": true,
      "site": "00a6b5cc",
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
      "definition_site": "00a6a5d4",
      "incomplete_value": true,
      "site": "00a6a5d8",
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
      "definition_site": "00a6b34c",
      "incomplete_value": false,
      "site": "00a6b35c",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6a358",
      "incomplete_value": false,
      "site": "00a6a368",
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
      "00a6b344",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a6b34c",
      "PARAM",
      [
        "storage",
        "01124010",
        null,
        null
      ]
    ],
    [
      "00a6b3d4",
      "PARAM",
      [
        "storage",
        "01124040",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00a6b344",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a6b34c",
      "PARAM",
      [
        "storage",
        "01124fd0",
        null,
        null
      ]
    ],
    [
      "00a6b3d4",
      "PARAM",
      [
        "storage",
        "01125000",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6a368 ["INT_ADD", "register:40f0:8", ["const:a6a368:8", "const:4:8"]]
- 00a6a368 ["CALL", null, ["callee:00b1217c:8"]]
+ 00a6b35c ["INT_ADD", "register:40f0:8", ["const:a6b35c:8", "const:4:8"]]
+ 00a6b35c ["CALL", null, ["callee:00b1217c:8"]]
- 00a6a3e8 ["INT_ADD", "register:40f0:8", ["const:a6a3e8:8", "const:4:8"]]
- 00a6a3e8 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6b3dc ["INT_ADD", "register:40f0:8", ["const:a6b3dc:8", "const:4:8"]]
+ 00a6b3dc ["CALL", null, ["callee:004413ec:8"]]
- 00a6a5ec ["INT_ADD", "register:40f0:8", ["const:a6a5ec:8", "const:4:8"]]
- 00a6a5ec ["CALL", null, ["callee:00c59040:8"]]
+ 00a6b5e0 ["INT_ADD", "register:40f0:8", ["const:a6b5e0:8", "const:4:8"]]
+ 00a6b5e0 ["CALL", null, ["callee:00c59040:8"]]
~~~


<a id="compare-7a793663d2a230a69508f9435c0e9286"></a>

### [`00a6a9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a9a8.md) → [`00a6b99c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6b99c.md) FUN_00a6b99c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`009d8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8b7c.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6ba14",
      "incomplete_value": false,
      "site": "00a6ba18",
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
      "definition_site": "00a6aa20",
      "incomplete_value": false,
      "site": "00a6aa24",
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
      "00a6ba14",
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
      "00a6ba14",
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
- 00a6aa24 ["INT_ADD", "register:40f0:8", ["const:a6aa24:8", "const:4:8"]]
- 00a6aa24 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6ba18 ["INT_ADD", "register:40f0:8", ["const:a6ba18:8", "const:4:8"]]
+ 00a6ba18 ["CALL", null, ["callee:00442c90:8"]]
- 00a6aa20 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a6aa20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a6aa20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a6aa20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba14 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6ba14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2870ec680b12b09b95e015abfb2c800f"></a>

### [`00a6aa38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6aa38.md) → [`00a6ba2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6ba2c.md) FUN_00a6ba2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`007ca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca580.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007dd3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd3bc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 6件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`007cb4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb4e4.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007de320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de320.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6ba94",
      "incomplete_value": false,
      "site": "00a6ba98",
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
      "definition_site": "00a6aaa0",
      "incomplete_value": false,
      "site": "00a6aaa4",
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
      "00a6ba94",
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
      "00a6ba94",
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
- 00a6aaa4 ["INT_ADD", "register:40f0:8", ["const:a6aaa4:8", "const:4:8"]]
- 00a6aaa4 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6ba98 ["INT_ADD", "register:40f0:8", ["const:a6ba98:8", "const:4:8"]]
+ 00a6ba98 ["CALL", null, ["callee:00442c90:8"]]
- 00a6aaa0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a6aaa0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a6aaa0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a6aaa0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba94 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6ba94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6ba94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7ce6dbbd06967cf54f7b628d4facb6bb"></a>

### [`00a6aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6aac0.md) → [`00a6bab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bab4.md) FUN_00a6bab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`009390b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/009390b0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.97% / 新版 70.97%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6bb10",
      "incomplete_value": false,
      "site": "00a6bb14",
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
      "definition_site": "00a6ab1c",
      "incomplete_value": false,
      "site": "00a6ab20",
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
      "unmatched:00a6aac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a6aacc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bb18"
      ]
    ],
    [
      "00a6baf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a6ab18"
      ]
    ]
  ],
  "added": [
    [
      "00a6bab4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a6bac0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bb18"
      ]
    ],
    [
      "00a6baf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bb0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6ab20 ["INT_ADD", "register:40f0:8", ["const:a6ab20:8", "const:4:8"]]
- 00a6ab20 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6bb14 ["INT_ADD", "register:40f0:8", ["const:a6bb14:8", "const:4:8"]]
+ 00a6bb14 ["CALL", null, ["callee:00442c90:8"]]
- 00a6aac0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a6aac0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a6aac0 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00a6aac0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a6aac4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-58655491d3c1f1e3b11bb8c03d083690"></a>

### [`00a6ad0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ad0c.md) → [`00a6bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bd00.md) FUN_00a6bd00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a6af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6af00.md) · 呼出先 9件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00a6b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b780.md) [`00a6b788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b788.md) [`00a6c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c280.md) [`00a6c4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c4f8.md)
- 新版 呼出元 1件 [`00a6bef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bef4.md) · 呼出先 9件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00a6c774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c774.md) [`00a6c77c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c77c.md) [`00a6d274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d274.md) [`00a6d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d4ec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 87.04% / 新版 87.04%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a6ad48",
      "incomplete_value": true,
      "site": "00a6ad50",
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
                "const:70:8"
              ]
            ]
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
      "definition_site": "00a6adb0",
      "incomplete_value": true,
      "site": "00a6adb8",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00a6adb4",
      "incomplete_value": true,
      "site": "00a6adb8",
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
      "unmatched:00a6ad74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6be94"
      ]
    ],
    [
      "unmatched:00a6adcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bd90"
      ]
    ],
    [
      "unmatched:00a6ae80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bef0"
      ]
    ]
  ],
  "added": [
    [
      "00a6bd68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6be94"
      ]
    ],
    [
      "00a6bdc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bd90"
      ]
    ],
    [
      "00a6be74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6bef0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6ad50 ["INT_ADD", "register:40f0:8", ["const:a6ad50:8", "const:4:8"]]
- 00a6ad50 ["CALL", null, ["callee:00a6d4ec:8"]]
+ 00a6bd44 ["INT_ADD", "register:40f0:8", ["const:a6bd44:8", "const:4:8"]]
+ 00a6bd44 ["CALL", null, ["callee:00a6d4ec:8"]]
- 00a6adb8 ["INT_ADD", "register:40f0:8", ["const:a6adb8:8", "const:4:8"]]
- 00a6adb8 ["CALL", null, ["callee:00a6c77c:8"]]
+ 00a6bdac ["INT_ADD", "register:40f0:8", ["const:a6bdac:8", "const:4:8"]]
+ 00a6bdac ["CALL", null, ["callee:00a6c77c:8"]]
- 00a6adf0 ["INT_ADD", "register:40f0:8", ["const:a6adf0:8", "const:4:8"]]
- 00a6adf0 ["CALL", null, ["callee:00a6c774:8"]]
+ 00a6bde4 ["INT_ADD", "register:40f0:8", ["const:a6bde4:8", "const:4:8"]]
+ 00a6bde4 ["CALL", null, ["callee:00a6c774:8"]]
~~~


<a id="compare-451f6eb1181948cc624201e6a949be7d"></a>

### [`00a6af9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6af9c.md) → [`00a6bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bf90.md) FUN_00a6bf90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00a696fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a696fc.md) [`00a69bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69bb8.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00a6a6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a6f0.md) [`00a6abac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6abac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6c004",
      "incomplete_value": false,
      "site": "00a6c008",
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
      "definition_site": "00a6b010",
      "incomplete_value": false,
      "site": "00a6b014",
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
      "00a6c004",
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
      "00a6c004",
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
- 00a6b014 ["INT_ADD", "register:40f0:8", ["const:a6b014:8", "const:4:8"]]
- 00a6b014 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6c008 ["INT_ADD", "register:40f0:8", ["const:a6c008:8", "const:4:8"]]
+ 00a6c008 ["CALL", null, ["callee:00442c90:8"]]
- 00a6afac ["INT_ADD", "register:40f0:8", ["const:a6afac:8", "const:4:8"]]
- 00a6afac ["CALL", null, ["callee:00a6a6f0:8"]]
+ 00a6bfa0 ["INT_ADD", "register:40f0:8", ["const:a6bfa0:8", "const:4:8"]]
+ 00a6bfa0 ["CALL", null, ["callee:00a6a6f0:8"]]
- 00a6b010 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a6b010 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a6b010 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a6b010 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6c004 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6c004 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6c004 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6c004 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9b9c51af947a3b74dbb9fd4d7ef2b606"></a>

### [`00a6b040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b040.md) → [`00a6c034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c034.md) FUN_00a6c034

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
      "definition_site": "00a6c038",
      "incomplete_value": false,
      "site": "00a6c03c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6b044",
      "incomplete_value": false,
      "site": "00a6b048",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
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
      "00a6c03c",
      "DATA",
      [
        "storage",
        "00c8b9d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a6c03c",
      "DATA",
      [
        "storage",
        "00c8c9a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6b040 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6c034 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a6b044 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 00a6b044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a6b044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a6b044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a6c038 ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 00a6c038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6c038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6c038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9088310b5670603576f203c66cb28dc8"></a>

### [`00a6b050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b050.md) → [`00a6c044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c044.md) FUN_00a6c044

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
      "definition_site": "00a6c054",
      "incomplete_value": false,
      "site": "00a6c05c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6b060",
      "incomplete_value": false,
      "site": "00a6b068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
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
      "00a6c05c",
      "DATA",
      [
        "storage",
        "00c8b9d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a6c05c",
      "DATA",
      [
        "storage",
        "00c8c9a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6b05c ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6c050 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a6b060 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 00a6b060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a6b060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a6b060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a6c054 ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 00a6c054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6c054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6c054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a6b06c ["INT_ADD", "register:40f0:8", ["const:a6b06c:8", "const:4:8"]]
- 00a6b06c ["CALL", null, ["callee:00c58f40:8"]]
+ 00a6c060 ["INT_ADD", "register:40f0:8", ["const:a6c060:8", "const:4:8"]]
+ 00a6c060 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-075d1adda5d929a59259d92e1dba8b1d"></a>

### [`00a6b090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b090.md) → [`00a6c084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c084.md) FUN_00a6c084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a69520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69520.md) · 呼出先 4件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a6a514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a514.md) · 呼出先 4件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6b11c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6c100"
      ]
    ]
  ],
  "added": [
    [
      "00a6c110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6c100"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6b09c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00a6b09c ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 00a6c090 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00a6c090 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
- 00a6b0c4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a6b0c4 ["COPY", "tmp:1:8", ["register:4058:8"]]
- 00a6b0c4 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00a6b0c4 ["COPY", "tmp:1:8", ["register:4060:8"]]
- 00a6b0cc ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
- 00a6b0cc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00a6c0c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
+ 00a6c0c0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-2d381f4a1b7d8b012703c4e4ca8a4ec3"></a>

### [`00a6b18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b18c.md) → [`00a6c180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c180.md) _INIT_222

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.70% / 新版 65.70%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 28件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6c2cc",
      "incomplete_value": true,
      "site": "00a6c2e0",
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
      "definition_site": "00a6c2d4",
      "incomplete_value": true,
      "site": "00a6c2e0",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a6b2f0",
      "incomplete_value": true,
      "site": "00a6b300",
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
      "unmatched:00a6b190",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a6b194",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a6b198",
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
      "00a6c184",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a6c188",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a6c18c",
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
- 00a6b2ec ["INT_ADD", "register:40f0:8", ["const:a6b2ec:8", "const:4:8"]]
- 00a6b2ec ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6c2e0 ["INT_ADD", "register:40f0:8", ["const:a6c2e0:8", "const:4:8"]]
+ 00a6c2e0 ["CALL", null, ["callee:0043bb58:8"]]
- 00a6b300 ["INT_ADD", "register:40f0:8", ["const:a6b300:8", "const:4:8"]]
- 00a6b300 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6c2f4 ["INT_ADD", "register:40f0:8", ["const:a6c2f4:8", "const:4:8"]]
+ 00a6c2f4 ["CALL", null, ["callee:0043bb58:8"]]
- 00a6b350 ["INT_ADD", "register:40f0:8", ["const:a6b350:8", "const:4:8"]]
- 00a6b350 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6c344 ["INT_ADD", "register:40f0:8", ["const:a6c344:8", "const:4:8"]]
+ 00a6c344 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-fe11f10b1b562c3692bdcfd35259ed42"></a>

### [`00a6b878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b878.md) → [`00a6c86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c86c.md) FUN_00a6c86c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a6c288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c288.md) · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`00a6d27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d27c.md) · 呼出先 12件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.86% / 新版 90.86%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6cecc",
      "incomplete_value": false,
      "site": "00a6cecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6bed8",
      "incomplete_value": false,
      "site": "00a6bed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a20:8"
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6cef4",
      "incomplete_value": false,
      "site": "00a6cef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6bf00",
      "incomplete_value": false,
      "site": "00a6bf00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a60:8"
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6c8a8",
      "incomplete_value": false,
      "site": "00a6c8b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6b8b4",
      "incomplete_value": false,
      "site": "00a6b8bc",
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
            "const:70:8"
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
      "00a6c8a8",
      "PARAM",
      [
        "storage",
        "01124070",
        null,
        "undefined1"
      ]
    ],
    [
      "00a6c8e0",
      "PARAM",
      [
        "storage",
        "01124088",
        null,
        "undefined1"
      ]
    ],
    [
      "00a6c93c",
      "PARAM",
      [
        "storage",
        "011240a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00a6c8a8",
      "PARAM",
      [
        "storage",
        "01125030",
        null,
        "undefined1"
      ]
    ],
    [
      "00a6c8e0",
      "PARAM",
      [
        "storage",
        "01125048",
        null,
        "undefined1"
      ]
    ],
    [
      "00a6c93c",
      "PARAM",
      [
        "storage",
        "01125060",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6b8bc ["INT_ADD", "register:40f0:8", ["const:a6b8bc:8", "const:4:8"]]
- 00a6b8bc ["CALL", null, ["callee:004413ec:8"]]
+ 00a6c8b0 ["INT_ADD", "register:40f0:8", ["const:a6c8b0:8", "const:4:8"]]
+ 00a6c8b0 ["CALL", null, ["callee:004413ec:8"]]
- 00a6b8f4 ["INT_ADD", "register:40f0:8", ["const:a6b8f4:8", "const:4:8"]]
- 00a6b8f4 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6c8e8 ["INT_ADD", "register:40f0:8", ["const:a6c8e8:8", "const:4:8"]]
+ 00a6c8e8 ["CALL", null, ["callee:004413ec:8"]]
- 00a6b960 ["INT_ADD", "register:40f0:8", ["const:a6b960:8", "const:4:8"]]
- 00a6b960 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6c954 ["INT_ADD", "register:40f0:8", ["const:a6c954:8", "const:4:8"]]
+ 00a6c954 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-ad2d5fa334c8246022d781e35b16b7f6"></a>

### [`00a6c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c100.md) → [`00a6d0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d0f4.md) FUN_00a6d0f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6d114",
      "incomplete_value": false,
      "site": "00a6d11c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6c120",
      "incomplete_value": false,
      "site": "00a6c128",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00a6d11c",
      "DATA",
      [
        "storage",
        "00c8ba20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a6d11c",
      "DATA",
      [
        "storage",
        "00c8c9f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6c11c ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6d110 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a6c120 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00a6c120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a6c120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a6c120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a6d114 ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 00a6d114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6d114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6d114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a6c12c ["INT_ADD", "register:40f0:8", ["const:a6c12c:8", "const:4:8"]]
- 00a6c12c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a6d120 ["INT_ADD", "register:40f0:8", ["const:a6d120:8", "const:4:8"]]
+ 00a6d120 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-c0a38e5956251933b403326b4f6bd3c4"></a>

### [`00a6c154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c154.md) → [`00a6d148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d148.md) FUN_00a6d148

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a6ab3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ab3c.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 1件 [`00a6bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bb30.md) · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00a6c15c ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
- 00a6c15c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00a6c15c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00a6c15c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00a6d150 ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
+ 00a6d150 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00a6d150 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00a6d150 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00a6c168 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a6c168 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
+ 00a6d15c ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 00a6d15c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
~~~


<a id="compare-a0b899ea64b50931adad8c868dff324c"></a>

### [`00a6c1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c1a8.md) → [`00a6d19c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d19c.md) FUN_00a6d19c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00a6ab3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ab3c.md) · 呼出先 1件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md)
- 新版 呼出元 1件 [`00a6bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bb30.md) · 呼出先 1件 [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 60.00% / 新版 60.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6c1cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ],
  "added": [
    [
      "00a6d1c0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ]
}
~~~


<a id="compare-ba2bfb0edc0472349e87a32546bf1cfb"></a>

### [`00a6c258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c258.md) → [`00a6d24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d24c.md) FUN_00a6d24c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00a6ab3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ab3c.md) · 呼出先 1件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md)
- 新版 呼出元 1件 [`00a6bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bb30.md) · 呼出先 1件 [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 80.00% / 新版 80.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6c27c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ],
  "added": [
    [
      "00a6d270",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ]
}
~~~


<a id="compare-9a0f8948cdf6b3fe10e3a0afd90b8a88"></a>

### [`00a6c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c280.md) → [`00a6d274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d274.md) FUN_00a6d274

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`00a6ac78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ac78.md) [`00a6ad0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ad0c.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00a6bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bc6c.md) [`00a6bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bd00.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-6c1942dd55918700d3aa1db8956cf0f1"></a>

### [`00a6c288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c288.md) → [`00a6d27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d27c.md) FUN_00a6d27c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a6a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a310.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00493b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493b60.md) [`0086bcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bcac.md) [`00a6b878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6b/00a6b878.md)
- 新版 呼出元 1件 [`00a6b304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6b304.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00493e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493e80.md) [`0086cc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cc58.md) [`00a6c86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6c/00a6c86c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.24% / 新版 99.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6d2bc",
      "incomplete_value": false,
      "site": "00a6d2c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6c2c8",
      "incomplete_value": false,
      "site": "00a6c2d0",
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
            "const:118:8"
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
      "00a6d2bc",
      "PARAM",
      [
        "storage",
        "01124118",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00a6d2bc",
      "PARAM",
      [
        "storage",
        "011250d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6c2d0 ["INT_ADD", "register:40f0:8", ["const:a6c2d0:8", "const:4:8"]]
- 00a6c2d0 ["CALL", null, ["callee:004413ec:8"]]
+ 00a6d2c4 ["INT_ADD", "register:40f0:8", ["const:a6d2c4:8", "const:4:8"]]
+ 00a6d2c4 ["CALL", null, ["callee:004413ec:8"]]
- 00a6c2c4 ["COPY", "register:4008:8", ["const:1124000:8"]]
+ 00a6d2b8 ["COPY", "register:4008:8", ["const:1125000:8"]]
- 00a6c2c8 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00a6c2c8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00a6c2c8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00a6c2c8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00a6d2bc ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 00a6d2bc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00a6d2bc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00a6d2bc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-018fcbfa58c84dcc2a16d02c8f51b8e6"></a>

### [`00a6c4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c4f8.md) → [`00a6d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d4ec.md) FUN_00a6d4ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`00a68fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68fc4.md) [`00a68ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68ff8.md) [`00a6ab3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ab3c.md) [`00a6ac78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ac78.md) [`00a6ad0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6ad0c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 6件 [`00a69fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69fb8.md) [`00a69fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69fec.md) [`00a6bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bb30.md) [`00a6bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bc6c.md) [`00a6bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6bd00.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6d594",
      "incomplete_value": false,
      "site": "00a6d598",
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
      "definition_site": "00a6c5a0",
      "incomplete_value": false,
      "site": "00a6c5a4",
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
      "00a6d594",
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
      "00a6d594",
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
- 00a6c5a4 ["INT_ADD", "register:40f0:8", ["const:a6c5a4:8", "const:4:8"]]
- 00a6c5a4 ["CALL", null, ["callee:00442c90:8"]]
+ 00a6d598 ["INT_ADD", "register:40f0:8", ["const:a6d598:8", "const:4:8"]]
+ 00a6d598 ["CALL", null, ["callee:00442c90:8"]]
- 00a6c5a0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a6c5a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a6c5a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a6c5a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a6d594 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00a6d594 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6d594 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a6d594 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-999d78e6f7996690bd323eb57490a4ea"></a>

### [`00a6c5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c5e4.md) → [`00a6d5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d5d8.md) FUN_00a6d5d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6d5f4",
      "incomplete_value": false,
      "site": "00a6d5fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6c600",
      "incomplete_value": false,
      "site": "00a6c608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00a6d5fc",
      "DATA",
      [
        "storage",
        "00c8ba20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a6d5fc",
      "DATA",
      [
        "storage",
        "00c8c9f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6c5fc ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a6d5f0 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a6c600 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00a6c600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a6c600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a6c600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a6d5f4 ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 00a6d5f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6d5f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a6d5f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a6c60c ["INT_ADD", "register:40f0:8", ["const:a6c60c:8", "const:4:8"]]
- 00a6c60c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a6d600 ["INT_ADD", "register:40f0:8", ["const:a6d600:8", "const:4:8"]]
+ 00a6d600 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-1d9c08a6c621ab0c80d466d8c3466fba"></a>

### [`00a6cbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6cbbc.md) → [`00a6dbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6dbb0.md) _INIT_224

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6dd34",
      "incomplete_value": true,
      "site": "00a6dd38",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00a6dd28",
      "incomplete_value": true,
      "site": "00a6dd38",
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
      "definition_site": "00a6dd2c",
      "incomplete_value": true,
      "site": "00a6dd38",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6cbec",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a6cbf8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a6cc14",
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
      "00a6dbe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a6dbec",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a6dc08",
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
- 00a6cd44 ["INT_ADD", "register:40f0:8", ["const:a6cd44:8", "const:4:8"]]
- 00a6cd44 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6dd38 ["INT_ADD", "register:40f0:8", ["const:a6dd38:8", "const:4:8"]]
+ 00a6dd38 ["CALL", null, ["callee:0043bb58:8"]]
- 00a6cd58 ["INT_ADD", "register:40f0:8", ["const:a6cd58:8", "const:4:8"]]
- 00a6cd58 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6dd4c ["INT_ADD", "register:40f0:8", ["const:a6dd4c:8", "const:4:8"]]
+ 00a6dd4c ["CALL", null, ["callee:0043bb58:8"]]
- 00a6cd94 ["INT_ADD", "register:40f0:8", ["const:a6cd94:8", "const:4:8"]]
- 00a6cd94 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a6dd88 ["INT_ADD", "register:40f0:8", ["const:a6dd88:8", "const:4:8"]]
+ 00a6dd88 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-10296db9453e802ba59036e43e6e0a83"></a>

### [`00a6cf4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6cf4c.md) → [`00a6df40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6df40.md) FUN_00a6df40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a6dd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6d/00a6dd44.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md)
- 新版 呼出元 1件 [`00a6ed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6e/00a6ed38.md) · 呼出先 13件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0067e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e58c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 46.86% / 新版 46.86%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 2件, `unresolved_branch_alignment` 32件, `unresolved_call_alignment` 45件, `unresolved_store_alignment` 104件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6e654",
      "incomplete_value": true,
      "site": "00a6e660",
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
                "const:419:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6d660",
      "incomplete_value": true,
      "site": "00a6d66c",
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
                "const:3cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 101,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6e690",
      "incomplete_value": true,
      "site": "00a6e6a4",
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
                "const:e35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6d69c",
      "incomplete_value": true,
      "site": "00a6d6b0",
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 104,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6e024",
      "incomplete_value": false,
      "site": "00a6e02c",
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
      "definition_site": "00a6d030",
      "incomplete_value": false,
      "site": "00a6d038",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6cf90",
      "DATA",
      [
        "storage",
        "00c8bab0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00a6cfcc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00a6cfd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6e944"
      ]
    ]
  ],
  "added": [
    [
      "00a6df84",
      "DATA",
      [
        "storage",
        "00c8ca80",
        null,
        "pointer"
      ]
    ],
    [
      "00a6dfc0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00a6dfc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a6e944"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6d038 ["INT_ADD", "register:40f0:8", ["const:a6d038:8", "const:4:8"]]
- 00a6d038 ["CALL", null, ["callee:0047e96c:8"]]
+ 00a6e02c ["INT_ADD", "register:40f0:8", ["const:a6e02c:8", "const:4:8"]]
+ 00a6e02c ["CALL", null, ["callee:0047e96c:8"]]
- 00a6d4ec ["INT_ADD", "register:40f0:8", ["const:a6d4ec:8", "const:4:8"]]
- 00a6d4ec ["CALL", null, ["callee:0047e96c:8"]]
+ 00a6e4e0 ["INT_ADD", "register:40f0:8", ["const:a6e4e0:8", "const:4:8"]]
+ 00a6e4e0 ["CALL", null, ["callee:0047e96c:8"]]
- 00a6d5d4 ["INT_ADD", "register:40f0:8", ["const:a6d5d4:8", "const:4:8"]]
- 00a6d5d4 ["CALL", null, ["callee:0047e96c:8"]]
+ 00a6e5c8 ["INT_ADD", "register:40f0:8", ["const:a6e5c8:8", "const:4:8"]]
+ 00a6e5c8 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-39a2b67f95a28dde97a35da42423bc4f"></a>

### [`00a6dd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6d/00a6dd44.md) → [`00a6ed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6e/00a6ed38.md) FUN_00a6ed38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 15件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00752c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/00752c28.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 15件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00752fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752fd8.md) [`009cdb7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cdb7c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.77% / 新版 50.77%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 16件, `store_destination` 3件, `store_value` 2件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 26件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a6ed7c",
      "incomplete_value": false,
      "site": "00a6ed7c",
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
      "definition_site": "00a6dd88",
      "incomplete_value": false,
      "site": "00a6dd88",
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
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a6ed74",
      "incomplete_value": true,
      "site": "00a6ed7c",
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
      "definition_site": "00a6dd80",
      "incomplete_value": true,
      "site": "00a6dd88",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a6ed80",
      "incomplete_value": false,
      "site": "00a6ed80",
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
      "definition_site": "00a6dd8c",
      "incomplete_value": false,
      "site": "00a6dd8c",
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
      "00a6ed74",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6ed78",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6ed7c",
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
      "00a6ed74",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6ed78",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6ed7c",
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
- 00a6dd88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 00a6dd88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00a6ed7c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 00a6ed7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00a6dd8c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 00a6dd8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00a6ed80 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 00a6ed80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 00a6ddcc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 00a6ddcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 00a6edc0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 00a6edc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-ec2176686eb56df7c639bffdaa8ec33d"></a>

### [`00a6e378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6e/00a6e378.md) → [`00a6f36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6f/00a6f36c.md) FUN_00a6f36c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 10件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 10件 [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a6f3a8",
      "incomplete_value": true,
      "site": "00a6f3ac",
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
    "old": {
      "definition_site": "00a6e3b4",
      "incomplete_value": true,
      "site": "00a6e3b8",
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
            "const:c240:8"
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
      "definition_site": "00a6e544",
      "incomplete_value": true,
      "site": "00a6e54c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a6f72c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a6e738",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 17,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a6e3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00a6e4b0",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6f4b8",
      "READ",
      [
        "storage",
        "002c4400",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a6f3f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a6f4a4",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6f4b8",
      "READ",
      [
        "storage",
        "002c4450",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6e3b8 ["INT_ADD", "register:40f0:8", ["const:a6e3b8:8", "const:4:8"]]
- 00a6e3b8 ["CALL", null, ["callee:0046f0ec:8"]]
+ 00a6f3ac ["INT_ADD", "register:40f0:8", ["const:a6f3ac:8", "const:4:8"]]
+ 00a6f3ac ["CALL", null, ["callee:0046f0ec:8"]]
- 00a6e54c ["INT_ADD", "register:40f0:8", ["const:a6e54c:8", "const:4:8"]]
- 00a6e54c ["CALL", null, ["callee:0085ab50:8"]]
+ 00a6f540 ["INT_ADD", "register:40f0:8", ["const:a6f540:8", "const:4:8"]]
+ 00a6f540 ["CALL", null, ["callee:0085ab50:8"]]
- 00a6e738 ["INT_ADD", "register:40f0:8", ["const:a6e738:8", "const:4:8"]]
- 00a6e738 ["CALL", null, ["ram:47ad34:8"]]
+ 00a6f72c ["INT_ADD", "register:40f0:8", ["const:a6f72c:8", "const:4:8"]]
+ 00a6f72c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-41e439da38d905945d0c549126c6c82c"></a>

### [`00a6e908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6e/00a6e908.md) → [`00a6f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6f/00a6f8fc.md) FUN_00a6f8fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 20件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 20件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.54% / 新版 99.54%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a6f938",
      "incomplete_value": true,
      "site": "00a6f938",
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
      "definition_site": "00a6e944",
      "incomplete_value": true,
      "site": "00a6e944",
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
      "definition_site": "00a6f948",
      "incomplete_value": false,
      "site": "00a6f95c",
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
      "definition_site": "00a6e954",
      "incomplete_value": false,
      "site": "00a6e968",
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
      "definition_site": "00a6f950",
      "incomplete_value": false,
      "site": "00a6f95c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6e95c",
      "incomplete_value": false,
      "site": "00a6e968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a8:8"
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
      "00a6f934",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6f948",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a6f950",
      "PARAM",
      [
        "storage",
        "00c880a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a6f934",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a6f948",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a6f950",
      "PARAM",
      [
        "storage",
        "00c89078",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6e968 ["INT_ADD", "register:40f0:8", ["const:a6e968:8", "const:4:8"]]
- 00a6e968 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a6f95c ["INT_ADD", "register:40f0:8", ["const:a6f95c:8", "const:4:8"]]
+ 00a6f95c ["CALL", null, ["callee:00c596b0:8"]]
- 00a6e93c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00a6f930 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00a6e940 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 00a6e940 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00a6f934 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 00a6f934 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cc78d432ce841409465e99b8ea12004e"></a>

### [`00a6f6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6f6a4.md) → [`00a70698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70698.md) FUN_00a70698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a6f7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6f7c4.md) · 呼出先 4件 [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a707b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a707b8.md) · 呼出先 4件 [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a706b4",
      "incomplete_value": false,
      "site": "00a706b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6f6c0",
      "incomplete_value": false,
      "site": "00a6f6c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "definition_site": "00a70770",
      "incomplete_value": false,
      "site": "00a70774",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6f77c",
      "incomplete_value": false,
      "site": "00a6f780",
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
            "const:8e0:8"
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
      "00a706b8",
      "DATA",
      [
        "storage",
        "00c8bab0",
        null,
        "pointer"
      ]
    ],
    [
      "00a70774",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a706b8",
      "DATA",
      [
        "storage",
        "00c8ca80",
        null,
        "pointer"
      ]
    ],
    [
      "00a70774",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6f6bc ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a706b0 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a6f6c0 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 00a6f6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a6f6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a6f6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a706b4 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 00a706b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a706b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a706b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a6f6d4 ["INT_ADD", "register:40f0:8", ["const:a6f6d4:8", "const:4:8"]]
- 00a6f6d4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a706c8 ["INT_ADD", "register:40f0:8", ["const:a706c8:8", "const:4:8"]]
+ 00a706c8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-c896a6fa4dde47d5bf50c8a77f763716"></a>

### [`00a6f7e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6f7e8.md) → [`00a707dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a707dc.md) _INIT_225

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a6f934",
      "incomplete_value": true,
      "site": "00a6f948",
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
      "definition_site": "00a6f93c",
      "incomplete_value": true,
      "site": "00a6f948",
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
    "new": {
      "definition_site": "00a7097c",
      "incomplete_value": true,
      "site": "00a7098c",
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
      "unmatched:00a6f818",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a6f824",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a6f840",
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
      "00a7080c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a70818",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a70834",
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
- 00a6f948 ["INT_ADD", "register:40f0:8", ["const:a6f948:8", "const:4:8"]]
- 00a6f948 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a7093c ["INT_ADD", "register:40f0:8", ["const:a7093c:8", "const:4:8"]]
+ 00a7093c ["CALL", null, ["callee:0043bb58:8"]]
- 00a6f998 ["INT_ADD", "register:40f0:8", ["const:a6f998:8", "const:4:8"]]
- 00a6f998 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a7098c ["INT_ADD", "register:40f0:8", ["const:a7098c:8", "const:4:8"]]
+ 00a7098c ["CALL", null, ["callee:0043bb58:8"]]
- 00a6f9c0 ["INT_ADD", "register:40f0:8", ["const:a6f9c0:8", "const:4:8"]]
- 00a6f9c0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a709b4 ["INT_ADD", "register:40f0:8", ["const:a709b4:8", "const:4:8"]]
+ 00a709b4 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-2154c24a30fb5e40c5eccf60adf4c406"></a>

### [`00a6fb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fb78.md) → [`00a70b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70b6c.md) FUN_00a70b6c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 7件 [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) [`00a834bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a834bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md)
- 新版 呼出元 1件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) · 呼出先 7件 [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md) [`00a844b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a844b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a70c38",
      "incomplete_value": false,
      "site": "00a70c40",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6fc44",
      "incomplete_value": false,
      "site": "00a6fc4c",
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
            "const:881:8"
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
      "00a70bac",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "qword"
      ]
    ],
    [
      "00a70c38",
      "PARAM",
      [
        "storage",
        "002b6881",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a70bac",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "uleb128"
      ]
    ],
    [
      "00a70c38",
      "PARAM",
      [
        "storage",
        "002b6950",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6fc4c ["INT_ADD", "register:40f0:8", ["const:a6fc4c:8", "const:4:8"]]
- 00a6fc4c ["CALL", null, ["callee:00c59010:8"]]
+ 00a70c40 ["INT_ADD", "register:40f0:8", ["const:a70c40:8", "const:4:8"]]
+ 00a70c40 ["CALL", null, ["callee:00c59010:8"]]
- 00a6fba8 ["INT_ADD", "register:40f0:8", ["const:a6fba8:8", "const:4:8"]]
- 00a6fba8 ["CALL", null, ["callee:00a842c4:8"]]
+ 00a70b9c ["INT_ADD", "register:40f0:8", ["const:a70b9c:8", "const:4:8"]]
+ 00a70b9c ["CALL", null, ["callee:00a842c4:8"]]
- 00a6fc3c ["INT_ADD", "register:40f0:8", ["const:a6fc3c:8", "const:4:8"]]
- 00a6fc3c ["CALL", null, ["callee:00c58ff0:8"]]
+ 00a70c30 ["INT_ADD", "register:40f0:8", ["const:a70c30:8", "const:4:8"]]
+ 00a70c30 ["CALL", null, ["callee:00c58ff0:8"]]
~~~


<a id="compare-a96db72936a7616b2afe58adf59465ed"></a>

### [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) → [`00a70dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70dec.md) FUN_00a70dec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 51件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)
- 新版 呼出元 1件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) · 呼出先 51件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 51.36% / 新版 51.36%

優先判定に残った影響 `call_argument_candidate` 20件, `call_target` 1件, `store_value` 17件, `unresolved_branch_alignment` 100件, `unresolved_call_alignment` 161件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 172件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a70ee4",
      "incomplete_value": true,
      "site": "00a70ee8",
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
                "const:370:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6fef0",
      "incomplete_value": true,
      "site": "00a6fef4",
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
                "const:320:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00a70efc",
      "incomplete_value": true,
      "site": "00a70f20",
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
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:e40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6ff08",
      "incomplete_value": true,
      "site": "00a6ff2c",
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
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:df0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a70f04",
      "incomplete_value": true,
      "site": "00a70f24",
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
                "const:220:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a6ff10",
      "incomplete_value": true,
      "site": "00a6ff30",
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
                "const:1d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a70e34",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a70e48",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a70e50",
      "PARAM",
      [
        "storage",
        "00c750a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a70e34",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a70e48",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a70e50",
      "PARAM",
      [
        "storage",
        "00c76078",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a6fe64 ["INT_ADD", "register:40f0:8", ["const:a6fe64:8", "const:4:8"]]
- 00a6fe64 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a70e58 ["INT_ADD", "register:40f0:8", ["const:a70e58:8", "const:4:8"]]
+ 00a70e58 ["CALL", null, ["callee:00c596b0:8"]]
- 00a7001c ["INT_ADD", "register:40f0:8", ["const:a7001c:8", "const:4:8"]]
- 00a7001c ["CALL", null, ["ram:811220:8"]]
+ 00a71010 ["INT_ADD", "register:40f0:8", ["const:a71010:8", "const:4:8"]]
+ 00a71010 ["CALL", null, ["ram:812184:8"]]
- 00a702d0 ["INT_ADD", "register:40f0:8", ["const:a702d0:8", "const:4:8"]]
- 00a702d0 ["CALL", null, ["callee:0047e96c:8"]]
+ 00a712c4 ["INT_ADD", "register:40f0:8", ["const:a712c4:8", "const:4:8"]]
+ 00a712c4 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-29ca57025868a4806c6a0c7af419ffff"></a>

### [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) → [`00a735f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a73/00a735f8.md) FUN_00a735f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 8件 [`006934b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006934b0.md) [`00696328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696328.md) [`00698e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e2c.md) [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) · 呼出先 35件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md)
- 新版 呼出元 8件 [`00693860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00693/00693860.md) [`006966d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/006966d8.md) [`006991dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/006991dc.md) [`00a70dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70dec.md) [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) · 呼出先 35件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`006162d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/006162d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.41% / 新版 60.41%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_branch_alignment` 45件, `unresolved_call_alignment` 39件, `unresolved_store_alignment` 62件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a736d4",
      "value": [
        "leaf",
        "ram:812184:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a726e0",
      "value": [
        "leaf",
        "ram:811220:8"
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
      "site": "00a739e0",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a729ec",
      "value": [
        "leaf",
        "ram:8116c8:8"
      ]
    },
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a73434",
      "incomplete_value": true,
      "site": "00a73438",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 97,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a73638",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "qword"
      ]
    ],
    [
      "00a73670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a726a8"
      ]
    ],
    [
      "unmatched:00a72684",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a72694"
      ]
    ]
  ],
  "added": [
    [
      "00a73638",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "uleb128"
      ]
    ],
    [
      "00a73670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7369c"
      ]
    ],
    [
      "00a73678",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00a73688"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a726e0 ["INT_ADD", "register:40f0:8", ["const:a726e0:8", "const:4:8"]]
- 00a726e0 ["CALL", null, ["ram:811220:8"]]
+ 00a736d4 ["INT_ADD", "register:40f0:8", ["const:a736d4:8", "const:4:8"]]
+ 00a736d4 ["CALL", null, ["ram:812184:8"]]
- 00a729ec ["INT_ADD", "register:40f0:8", ["const:a729ec:8", "const:4:8"]]
- 00a729ec ["CALL", null, ["ram:8116c8:8"]]
+ 00a739e0 ["INT_ADD", "register:40f0:8", ["const:a739e0:8", "const:4:8"]]
+ 00a739e0 ["CALL", null, ["ram:81262c:8"]]
- 00a73438 ["INT_ADD", "register:40f0:8", ["const:a73438:8", "const:4:8"]]
- 00a73438 ["CALL", null, ["callee:00470ba0:8"]]
+ 00a7442c ["INT_ADD", "register:40f0:8", ["const:a7442c:8", "const:4:8"]]
+ 00a7442c ["CALL", null, ["callee:00470ba0:8"]]
~~~


<a id="compare-b4dd5e0c0779cebf74f0f0a1b1a1732a"></a>

### [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) → [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) FUN_00a74594

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 69件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 69件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.95% / 新版 61.95%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 28件, `store_condition` 2件, `store_destination` 3件, `store_value` 15件, `unresolved_branch_alignment` 77件, `unresolved_call_alignment` 121件, `unresolved_store_alignment` 152件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a745e8",
      "incomplete_value": false,
      "site": "00a745e8",
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
      "definition_site": "00a735f4",
      "incomplete_value": false,
      "site": "00a735f4",
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
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a745e0",
      "incomplete_value": true,
      "site": "00a745e8",
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
      "definition_site": "00a735ec",
      "incomplete_value": true,
      "site": "00a735f4",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a745ec",
      "incomplete_value": false,
      "site": "00a745ec",
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
      "definition_site": "00a735f8",
      "incomplete_value": false,
      "site": "00a735f8",
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
      "00a745e0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a745e4",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00a745e8",
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
      "00a745e0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a745e4",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00a745e8",
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
- 00a735f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 00a735f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00a745e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 00a745e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00a735f8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 00a735f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00a745ec ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 00a745ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 00a73620 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 00a73620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 00a74614 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 00a74614 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-86e0041dd7bc6d5990b41ca0f765ec79"></a>

### [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) → [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) FUN_00a76e10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 94件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 94件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.96% / 新版 87.96%

優先判定に残った影響 `call_argument_candidate` 94件, `call_target` 8件, `store_condition` 8件, `store_value` 1件, `unresolved_branch_alignment` 49件, `unresolved_call_alignment` 52件, `unresolved_store_alignment` 44件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a784c4",
      "incomplete_value": true,
      "site": "00a784c4",
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
                "const:2ed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a774d0",
      "incomplete_value": true,
      "site": "00a774d0",
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
                "const:20f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 180,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a78468",
      "incomplete_value": true,
      "site": "00a78468",
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
      "definition_site": "00a77474",
      "incomplete_value": true,
      "site": "00a77474",
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
    "ordinal": 196,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a76fd8",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a75fe4",
      "value": [
        "leaf",
        "ram:8116c8:8"
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
      "00a76e90",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "qword"
      ]
    ],
    [
      "00a76fbc",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "qword"
      ]
    ],
    [
      "00a76fd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008116c8"
      ]
    ]
  ],
  "added": [
    [
      "00a76e90",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "uleb128"
      ]
    ],
    [
      "00a76fbc",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "uleb128"
      ]
    ],
    [
      "00a76fd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081262c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a75fe4 ["INT_ADD", "register:40f0:8", ["const:a75fe4:8", "const:4:8"]]
- 00a75fe4 ["CALL", null, ["ram:8116c8:8"]]
+ 00a76fd8 ["INT_ADD", "register:40f0:8", ["const:a76fd8:8", "const:4:8"]]
+ 00a76fd8 ["CALL", null, ["ram:81262c:8"]]
- 00a77474 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00a77474 ["CBRANCH", null, ["local:b287:8", "tmp:0:1"]]
+ 00a78468 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00a78468 ["CBRANCH", null, ["local:b286:8", "tmp:0:1"]]
- 00a77490 ["INT_ADD", "register:40f0:8", ["const:a77490:8", "const:4:8"]]
- 00a77490 ["CALL", null, ["callee:0044ebd0:8"]]
+ 00a78484 ["INT_ADD", "register:40f0:8", ["const:a78484:8", "const:4:8"]]
+ 00a78484 ["CALL", null, ["callee:0044ebd0:8"]]
~~~


<a id="compare-0023eeb054eb4d6ce3765485f702369f"></a>

### [`00a79b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79b04.md) → [`00a7aaf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7a/00a7aaf8.md) FUN_00a7aaf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a7e8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e8a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a7f898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f898.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.52% / 新版 88.52%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7ab68",
      "incomplete_value": true,
      "site": "00a7ab74",
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
      "definition_site": "00a7ab6c",
      "incomplete_value": true,
      "site": "00a7ab74",
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
      "definition_site": "00a7ab60",
      "incomplete_value": true,
      "site": "00a7ab74",
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
      "unmatched:00a79b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a79b28",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a79b8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7ab54"
      ]
    ]
  ],
  "added": [
    [
      "00a7ab08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7ab1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00a7ab80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7ab54"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a79b80 ["INT_ADD", "register:40f0:8", ["const:a79b80:8", "const:4:8"]]
- 00a79b80 ["CALL", null, ["callee:00a7f898:8"]]
+ 00a7ab74 ["INT_ADD", "register:40f0:8", ["const:a7ab74:8", "const:4:8"]]
+ 00a7ab74 ["CALL", null, ["callee:00a7f898:8"]]
- 00a79b14 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a79b14 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a79b14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00a79b14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a79b18 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00a79b18 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a79b18 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a79b18 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-92d031d55f7765e377065cdb8ab76416"></a>

### [`00a79c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79c20.md) → [`00a7ac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7a/00a7ac14.md) FUN_00a7ac14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a79c60",
      "incomplete_value": false,
      "site": "00a79c64",
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
      "unmatched:00a79c48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7ac2c"
      ]
    ],
    [
      "unmatched:00a79c60",
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
      "00a7ac3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7ac2c"
      ]
    ],
    [
      "00a7ac54",
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
- 00a79c64 ["INT_ADD", "register:40f0:8", ["const:a79c64:8", "const:4:8"]]
- 00a79c64 ["CALL", null, ["callee:00442c90:8"]]
+ 00a7ac58 ["INT_ADD", "register:40f0:8", ["const:a7ac58:8", "const:4:8"]]
+ 00a7ac58 ["CALL", null, ["callee:00442c90:8"]]
- 00a79c2c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a79c2c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00a7ac20 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a7ac20 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00a79c3c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a79c3c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00a7ac30 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a7ac30 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-199f6765bf99ffede93c9b90a532f454"></a>

### [`00a7bb94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bb94.md) → [`00a7cb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cb88.md) FUN_00a7cb88

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
      "unmatched:00a7bbb8",
      "DATA",
      [
        "storage",
        "00c8bad0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7bbbc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7bbc0",
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
      "00a7cbac",
      "DATA",
      [
        "storage",
        "00c8caa0",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7cbb0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7cbb4",
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
- 00a7bba8 ["INT_ADD", "register:40f0:8", ["const:a7bba8:8", "const:4:8"]]
- 00a7bba8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7cb9c ["INT_ADD", "register:40f0:8", ["const:a7cb9c:8", "const:4:8"]]
+ 00a7cb9c ["CALL", null, ["callee:00c58f30:8"]]
- 00a7bbb0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7cba4 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7bbb4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 00a7bbb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7bbb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7bbb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c0af65829e449a4eb6875e212b1e5d89"></a>

### [`00a7bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bbc8.md) → [`00a7cbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cbbc.md) FUN_00a7cbbc

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
      "unmatched:00a7bbd4",
      "DATA",
      [
        "storage",
        "00c8bad0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7cbc8",
      "DATA",
      [
        "storage",
        "00c8caa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7bbc8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00a7bbc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a7bbcc ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a7bbd0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 00a7bbd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7bbd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7bbd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-453e3f7b128cf5ede1b8865e1d777d67"></a>

### [`00a7bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bbe4.md) → [`00a7cbd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cbd8.md) FUN_00a7cbd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7cc24",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7bc30",
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
      "definition_site": "00a7bd20",
      "incomplete_value": true,
      "site": "00a7bd38",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a7bd24",
      "incomplete_value": true,
      "site": "00a7bd38",
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
      "unmatched:00a7bbe8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7bbec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7bbf0",
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
      "00a7cbdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a7cbe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a7cbe4",
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
- 00a7bc30 ["INT_ADD", "register:40f0:8", ["const:a7bc30:8", "const:4:8"]]
- 00a7bc30 ["CALL", null, ["ram:47ad34:8"]]
+ 00a7cc24 ["INT_ADD", "register:40f0:8", ["const:a7cc24:8", "const:4:8"]]
+ 00a7cc24 ["CALL", null, ["ram:47b054:8"]]
- 00a7bd38 ["INT_ADD", "register:40f0:8", ["const:a7bd38:8", "const:4:8"]]
- 00a7bd38 ["CALL", null, ["callee:008bb86c:8"]]
+ 00a7cd2c ["INT_ADD", "register:40f0:8", ["const:a7cd2c:8", "const:4:8"]]
+ 00a7cd2c ["CALL", null, ["callee:008bb86c:8"]]
- 00a7bd74 ["INT_ADD", "register:40f0:8", ["const:a7bd74:8", "const:4:8"]]
- 00a7bd74 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a7cd68 ["INT_ADD", "register:40f0:8", ["const:a7cd68:8", "const:4:8"]]
+ 00a7cd68 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a93e0dc6f78bf174eaab14190068e939"></a>

### [`00a7be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7be6c.md) → [`00a7ce60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7ce60.md) FUN_00a7ce60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7be84",
      "DATA",
      [
        "storage",
        "00c8bb40",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7be88",
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
      "00a7ce78",
      "DATA",
      [
        "storage",
        "00c8cb10",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7ce7c",
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
- 00a7be78 ["INT_ADD", "register:40f0:8", ["const:a7be78:8", "const:4:8"]]
- 00a7be78 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7ce6c ["INT_ADD", "register:40f0:8", ["const:a7ce6c:8", "const:4:8"]]
+ 00a7ce6c ["CALL", null, ["callee:00c58f30:8"]]
- 00a7be7c ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7ce70 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7be80 ["COPY", "tmp:0:8", ["const:b40:8"]]
- 00a7be80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7be80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7be80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-92ce0f07c294886fc171a038d3963d45"></a>

### [`00a7be90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7be90.md) → [`00a7ce84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7ce84.md) FUN_00a7ce84

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
      "unmatched:00a7be98",
      "DATA",
      [
        "storage",
        "00c8bb40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ce8c",
      "DATA",
      [
        "storage",
        "00c8cb10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7be90 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a7be94 ["COPY", "tmp:0:8", ["const:b40:8"]]
- 00a7be94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7be94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7be94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7be98 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00a7be98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-5ceaf4eb81dc983ede1a1f8be8919d45"></a>

### [`00a7bea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bea8.md) → [`00a7ce9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7ce9c.md) FUN_00a7ce9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a7beb0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a7beb0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00a7cea4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a7cea4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-b8ed9ca214731884f906981374f68b55"></a>

### [`00a7beec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7beec.md) → [`00a7cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cee0.md) FUN_00a7cee0

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
    "new": {
      "definition_site": "00a7cef0",
      "incomplete_value": false,
      "site": "00a7cef4",
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
      "unmatched:00a7beec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7bef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7bf10",
      "DATA",
      [
        "storage",
        "00c8bbd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7cee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a7cee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7cf04",
      "DATA",
      [
        "storage",
        "00c8cba0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7bf00 ["INT_ADD", "register:40f0:8", ["const:a7bf00:8", "const:4:8"]]
- 00a7bf00 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7cef4 ["INT_ADD", "register:40f0:8", ["const:a7cef4:8", "const:4:8"]]
+ 00a7cef4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7beec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a7beec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a7beec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a7beec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a7bef0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a7bef0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-a72610897e1c3f947685c56573ca8be7"></a>

### [`00a7bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bf20.md) → [`00a7cf14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cf14.md) FUN_00a7cf14

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
      "definition_site": "00a7cf20",
      "incomplete_value": false,
      "site": "00a7cf20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7bf2c",
      "incomplete_value": false,
      "site": "00a7bf2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:bd0:8"
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
      "00a7cf20",
      "DATA",
      [
        "storage",
        "00c8bbd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7cf20",
      "DATA",
      [
        "storage",
        "00c8cba0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7bf24 ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a7cf18 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a7bf28 ["COPY", "tmp:0:8", ["const:bd0:8"]]
- 00a7bf28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7bf28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7bf28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7cf1c ["COPY", "tmp:0:8", ["const:ba0:8"]]
+ 00a7cf1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7cf1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7cf1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a9d97dbd29f8a5e639071f9453294f06"></a>

### [`00a7bf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7b/00a7bf3c.md) → [`00a7cf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7c/00a7cf30.md) FUN_00a7cf30

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.22% / 新版 85.22%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7cf7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7bf88",
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
      "definition_site": "00a7d06c",
      "incomplete_value": true,
      "site": "00a7d084",
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
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7d070",
      "incomplete_value": true,
      "site": "00a7d084",
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
      "unmatched:00a7bf58",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a7cf7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00a7bfac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a7cf4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a7cf7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7cfa0",
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
- 00a7bf88 ["INT_ADD", "register:40f0:8", ["const:a7bf88:8", "const:4:8"]]
- 00a7bf88 ["CALL", null, ["ram:47ad34:8"]]
+ 00a7cf7c ["INT_ADD", "register:40f0:8", ["const:a7cf7c:8", "const:4:8"]]
+ 00a7cf7c ["CALL", null, ["ram:47b054:8"]]
- 00a7c090 ["INT_ADD", "register:40f0:8", ["const:a7c090:8", "const:4:8"]]
- 00a7c090 ["CALL", null, ["callee:008bb86c:8"]]
+ 00a7d084 ["INT_ADD", "register:40f0:8", ["const:a7d084:8", "const:4:8"]]
+ 00a7d084 ["CALL", null, ["callee:008bb86c:8"]]
- 00a7c0dc ["INT_ADD", "register:40f0:8", ["const:a7c0dc:8", "const:4:8"]]
- 00a7c0dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00a7d0d0 ["INT_ADD", "register:40f0:8", ["const:a7d0d0:8", "const:4:8"]]
+ 00a7d0d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-be7f788b5002f2ea367d77a78c4b4d46"></a>

### [`00a7c1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c1c4.md) → [`00a7d1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d1b8.md) FUN_00a7d1b8

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
      "definition_site": "00a7d1cc",
      "incomplete_value": false,
      "site": "00a7d1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7c1d8",
      "incomplete_value": false,
      "site": "00a7c1dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:c40:8"
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
      "00a7d1d0",
      "DATA",
      [
        "storage",
        "00c8bc40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7d1d0",
      "DATA",
      [
        "storage",
        "00c8cc10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c1d0 ["INT_ADD", "register:40f0:8", ["const:a7c1d0:8", "const:4:8"]]
- 00a7c1d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7d1c4 ["INT_ADD", "register:40f0:8", ["const:a7d1c4:8", "const:4:8"]]
+ 00a7d1c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7c1d4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7d1c8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7c1d8 ["COPY", "tmp:0:8", ["const:c40:8"]]
- 00a7c1d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c1d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c1d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1cc ["COPY", "tmp:0:8", ["const:c10:8"]]
+ 00a7d1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3aff8efaab4833317f0eded8c000c521"></a>

### [`00a7c1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c1e8.md) → [`00a7d1dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d1dc.md) FUN_00a7d1dc

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
      "definition_site": "00a7d1e0",
      "incomplete_value": false,
      "site": "00a7d1e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7c1ec",
      "incomplete_value": false,
      "site": "00a7c1f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:c40:8"
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
      "00a7d1e4",
      "DATA",
      [
        "storage",
        "00c8bc40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7d1e4",
      "DATA",
      [
        "storage",
        "00c8cc10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c1e8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7d1dc ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7c1ec ["COPY", "tmp:0:8", ["const:c40:8"]]
- 00a7c1ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c1ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c1ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1e0 ["COPY", "tmp:0:8", ["const:c10:8"]]
+ 00a7d1e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7d1e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-148bd22d996d21baa25cf64ff91dce43"></a>

### [`00a7c244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c244.md) → [`00a7d238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d238.md) FUN_00a7d238

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7c268",
      "DATA",
      [
        "storage",
        "00c8bcd0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7c26c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c270",
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
      "00a7d25c",
      "DATA",
      [
        "storage",
        "00c8cca0",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7d260",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7d264",
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
- 00a7c258 ["INT_ADD", "register:40f0:8", ["const:a7c258:8", "const:4:8"]]
- 00a7c258 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7d24c ["INT_ADD", "register:40f0:8", ["const:a7d24c:8", "const:4:8"]]
+ 00a7d24c ["CALL", null, ["callee:00c58f30:8"]]
- 00a7c260 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7d254 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7c264 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 00a7c264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7c264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c1a9558054799df7044ac580ac9f1ee"></a>

### [`00a7c278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c278.md) → [`00a7d26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d26c.md) FUN_00a7d26c

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
      "unmatched:00a7c284",
      "DATA",
      [
        "storage",
        "00c8bcd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7d278",
      "DATA",
      [
        "storage",
        "00c8cca0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c278 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00a7c278 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a7c27c ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a7c280 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 00a7c280 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7c280 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7c280 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e692291d1754d3cc8f435b3a8f958590"></a>

### [`00a7c294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c294.md) → [`00a7d288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d288.md) FUN_00a7d288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.43% / 新版 78.43%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a7c2f4",
      "incomplete_value": false,
      "site": "00a7c2f8",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00a7c2b8"
      ],
      [
        "CONDITIONAL_JUMP",
        "00a7d2ac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a7d2a4",
      "incomplete_value": true,
      "site": "00a7d2d8",
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
                "const:3:4"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7c2e4",
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
        "CONDITIONAL_JUMP",
        "00a7c2b8"
      ],
      [
        "CONDITIONAL_JUMP",
        "00a7d2ac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a7d2a4",
      "incomplete_value": true,
      "site": "00a7d2dc",
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
                "const:3:4"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7c2e8",
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
      "unmatched:00a7c294",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c298",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c2b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7d2d4"
      ]
    ]
  ],
  "added": [
    [
      "00a7d288",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a7d28c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7d2ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7d2d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c2f8 ["INT_ADD", "register:40f0:8", ["const:a7c2f8:8", "const:4:8"]]
- 00a7c2f8 ["CALL", null, ["callee:0047d134:8"]]
+ 00a7d2ec ["INT_ADD", "register:40f0:8", ["const:a7d2ec:8", "const:4:8"]]
+ 00a7d2ec ["CALL", null, ["callee:0047d134:8"]]
- 00a7c294 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a7c294 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a7c294 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a7c294 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a7c298 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a7c298 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a7c298 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00a7c298 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f48bc37d1fabf6ee4cb2f7747fd1d4da"></a>

### [`00a7c38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c38c.md) → [`00a7d380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d380.md) FUN_00a7d380

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 46.15% / 新版 46.15%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7c38c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c390",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c3b0",
      "DATA",
      [
        "storage",
        "00c8bd50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7d380",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a7d384",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7d3a4",
      "DATA",
      [
        "storage",
        "00c8cd20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c38c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a7c38c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a7c38c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a7c38c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a7c390 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a7c390 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00a7c394 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-638b7883749b7b64148c7f837d21f6ad"></a>

### [`00a7c3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c3c0.md) → [`00a7d3b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d3b4.md) FUN_00a7d3b4

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
      "unmatched:00a7c3cc",
      "DATA",
      [
        "storage",
        "00c8bd50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7d3c0",
      "DATA",
      [
        "storage",
        "00c8cd20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c3c0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00a7c3c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a7c3c4 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a7c3c8 ["COPY", "tmp:0:8", ["const:d50:8"]]
- 00a7c3c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7c3c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7c3c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-901e15f0102f1530a856b1e783b83f79"></a>

### [`00a7c3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c3dc.md) → [`00a7d3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d3d0.md) FUN_00a7d3d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068ae88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068ae88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ac8ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac8ccc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0068b238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068b/0068b238.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00ac9cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac9/00ac9cc0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.35% / 新版 68.35%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7d474",
      "incomplete_value": true,
      "site": "00a7d488",
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
      "definition_site": "00a7c480",
      "incomplete_value": true,
      "site": "00a7c494",
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
      "definition_site": "00a7d470",
      "incomplete_value": false,
      "site": "00a7d488",
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
      "definition_site": "00a7c47c",
      "incomplete_value": false,
      "site": "00a7c494",
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
      "definition_site": "00a7d47c",
      "incomplete_value": false,
      "site": "00a7d488",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7c488",
      "incomplete_value": false,
      "site": "00a7c494",
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
            "const:a8:8"
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
      "unmatched:00a7c3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c3e8",
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
      "00a7d3d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a7d3d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a7d3dc",
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
- 00a7c494 ["INT_ADD", "register:40f0:8", ["const:a7c494:8", "const:4:8"]]
- 00a7c494 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a7d488 ["INT_ADD", "register:40f0:8", ["const:a7d488:8", "const:4:8"]]
+ 00a7d488 ["CALL", null, ["callee:00c596b0:8"]]
- 00a7c3dc ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00a7c3e0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a7c3e0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a7c3e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a7c3e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-72dd494f174ba6b3dd1839ad9a8b4342"></a>

### [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) → [`00a7d558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d558.md) FUN_00a7d558

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) · 呼出先 23件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)
- 新版 呼出元 1件 [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) · 呼出先 23件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 45.64% / 新版 45.64%

優先判定に残った影響 `call_argument_candidate` 28件, `call_target` 1件, `store_value` 3件, `unresolved_branch_alignment` 58件, `unresolved_call_alignment` 87件, `unresolved_store_alignment` 146件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7e628",
      "incomplete_value": true,
      "site": "00a7e628",
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
                "const:28a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7d634",
      "incomplete_value": true,
      "site": "00a7d634",
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
                "const:1bb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 175,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7e640",
      "incomplete_value": true,
      "site": "00a7e640",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:c99:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7d64c",
      "incomplete_value": true,
      "site": "00a7d64c",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:bbb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 177,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7e644",
      "incomplete_value": true,
      "site": "00a7e644",
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
      "definition_site": "00a7d650",
      "incomplete_value": true,
      "site": "00a7d650",
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
    "ordinal": 178,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7c5b4",
      "DATA",
      [
        "storage",
        "00c8bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00a7c5c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x168]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7c5d0",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00a7d5a8",
      "DATA",
      [
        "storage",
        "00c8cda0",
        null,
        "pointer"
      ]
    ],
    [
      "00a7d5bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x168]",
        null,
        null
      ]
    ],
    [
      "00a7d5c4",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7c63c ["INT_ADD", "register:40f0:8", ["const:a7c63c:8", "const:4:8"]]
- 00a7c63c ["CALL", null, ["callee:0047e96c:8"]]
+ 00a7d630 ["INT_ADD", "register:40f0:8", ["const:a7d630:8", "const:4:8"]]
+ 00a7d630 ["CALL", null, ["callee:0047e96c:8"]]
- 00a7c65c ["INT_ADD", "register:40f0:8", ["const:a7c65c:8", "const:4:8"]]
- 00a7c65c ["CALL", null, ["callee:00c54d90:8"]]
+ 00a7d650 ["INT_ADD", "register:40f0:8", ["const:a7d650:8", "const:4:8"]]
+ 00a7d650 ["CALL", null, ["callee:00c54d90:8"]]
- 00a7c698 ["INT_ADD", "register:40f0:8", ["const:a7c698:8", "const:4:8"]]
- 00a7c698 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a7d68c ["INT_ADD", "register:40f0:8", ["const:a7d68c:8", "const:4:8"]]
+ 00a7d68c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e2d6fe502a8873b6bed3930ecfaca999"></a>

### [`00a7dbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dbd0.md) → [`00a7ebc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ebc4.md) FUN_00a7ebc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00920f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00920/00920f5c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7ebdc",
      "incomplete_value": false,
      "site": "00a7ebe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7dbe8",
      "incomplete_value": false,
      "site": "00a7dbec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:dd0:8"
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
      "00a7ebe0",
      "DATA",
      [
        "storage",
        "00c8bdd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a7ebe0",
      "DATA",
      [
        "storage",
        "00c8cda0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7dbe4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7ebd8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7dbe8 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 00a7dbe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dbe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dbe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7ebdc ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00a7ebdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ebdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ebdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7dbfc ["INT_ADD", "register:40f0:8", ["const:a7dbfc:8", "const:4:8"]]
- 00a7dbfc ["CALL", null, ["callee:00c54d90:8"]]
+ 00a7ebf0 ["INT_ADD", "register:40f0:8", ["const:a7ebf0:8", "const:4:8"]]
+ 00a7ebf0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-1884d2d894ec447394d0a156bb44dd50"></a>

### [`00a7dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dc5c.md) → [`00a7ec50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ec50.md) FUN_00a7ec50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00920f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00920/00920f5c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7ec68",
      "incomplete_value": false,
      "site": "00a7ec6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7dc74",
      "incomplete_value": false,
      "site": "00a7dc78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:dd0:8"
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
      "00a7ec6c",
      "DATA",
      [
        "storage",
        "00c8bdd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a7ec6c",
      "DATA",
      [
        "storage",
        "00c8cda0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7dc70 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7ec64 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7dc74 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 00a7dc74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dc74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dc74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7ec68 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00a7ec68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ec68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ec68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7dc88 ["INT_ADD", "register:40f0:8", ["const:a7dc88:8", "const:4:8"]]
- 00a7dc88 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a7ec7c ["INT_ADD", "register:40f0:8", ["const:a7ec7c:8", "const:4:8"]]
+ 00a7ec7c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-fe94b7ed3b23a83e569cd891541b2ca4"></a>

### [`00a7dcf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dcf4.md) → [`00a7ece8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ece8.md) FUN_00a7ece8

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
      "definition_site": "00a7ed0c",
      "incomplete_value": false,
      "site": "00a7ed0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7dd18",
      "incomplete_value": false,
      "site": "00a7dd18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:df0:8"
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
      "00a7ed0c",
      "DATA",
      [
        "storage",
        "00c8bdf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ed0c",
      "DATA",
      [
        "storage",
        "00c8cdc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7dd08 ["INT_ADD", "register:40f0:8", ["const:a7dd08:8", "const:4:8"]]
- 00a7dd08 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7ecfc ["INT_ADD", "register:40f0:8", ["const:a7ecfc:8", "const:4:8"]]
+ 00a7ecfc ["CALL", null, ["callee:00c58f30:8"]]
- 00a7dd10 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7ed04 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7dd14 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 00a7dd14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dd14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7dd14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7ed08 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 00a7ed08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ed08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ed08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-21a8b59254ef9fd374f29bec39198efb"></a>

### [`00a7dd28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dd28.md) → [`00a7ed1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ed1c.md) FUN_00a7ed1c

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
      "definition_site": "00a7ed28",
      "incomplete_value": false,
      "site": "00a7ed28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7dd34",
      "incomplete_value": false,
      "site": "00a7dd34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:df0:8"
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
      "00a7ed28",
      "DATA",
      [
        "storage",
        "00c8bdf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ed28",
      "DATA",
      [
        "storage",
        "00c8cdc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7dd2c ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a7ed20 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a7dd30 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 00a7dd30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7dd30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7dd30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7ed24 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 00a7ed24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ed24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ed24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b113a403cda68dcc9186c629bb4c4abd"></a>

### [`00a7de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7de30.md) → [`00a7ee24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ee24.md) FUN_00a7ee24

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
      "definition_site": "00a7ee48",
      "incomplete_value": false,
      "site": "00a7ee48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7de54",
      "incomplete_value": false,
      "site": "00a7de54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "00a7ee48",
      "DATA",
      [
        "storage",
        "00c8be70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ee48",
      "DATA",
      [
        "storage",
        "00c8ce40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7de44 ["INT_ADD", "register:40f0:8", ["const:a7de44:8", "const:4:8"]]
- 00a7de44 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7ee38 ["INT_ADD", "register:40f0:8", ["const:a7ee38:8", "const:4:8"]]
+ 00a7ee38 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7de4c ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7ee40 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7de50 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a7de50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7de50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7de50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7ee44 ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a7ee44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ee44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7ee44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-681ddf8b6f456172380cd8ac396a60c0"></a>

### [`00a7de64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7de64.md) → [`00a7ee58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ee58.md) FUN_00a7ee58

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
      "definition_site": "00a7ee64",
      "incomplete_value": false,
      "site": "00a7ee64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7de70",
      "incomplete_value": false,
      "site": "00a7de70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "00a7ee64",
      "DATA",
      [
        "storage",
        "00c8be70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ee64",
      "DATA",
      [
        "storage",
        "00c8ce40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7de68 ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a7ee5c ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a7de6c ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a7de6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7de6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7de6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7ee60 ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a7ee60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ee60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ee60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-101481a70563b56998cf47df504a3e60"></a>

### [`00a7dee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dee4.md) → [`00a7eed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7eed8.md) FUN_00a7eed8

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
      "definition_site": "00a7eefc",
      "incomplete_value": false,
      "site": "00a7eefc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7df08",
      "incomplete_value": false,
      "site": "00a7df08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ef0:8"
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
      "00a7eefc",
      "DATA",
      [
        "storage",
        "00c8bef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7eefc",
      "DATA",
      [
        "storage",
        "00c8cec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7def8 ["INT_ADD", "register:40f0:8", ["const:a7def8:8", "const:4:8"]]
- 00a7def8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7eeec ["INT_ADD", "register:40f0:8", ["const:a7eeec:8", "const:4:8"]]
+ 00a7eeec ["CALL", null, ["callee:00c58f30:8"]]
- 00a7df00 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7eef4 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7df04 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 00a7df04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7df04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7df04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7eef8 ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 00a7eef8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7eef8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7eef8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d45cdf0c806544ef8711db7897ed6074"></a>

### [`00a7df18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7df18.md) → [`00a7ef0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ef0c.md) FUN_00a7ef0c

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
      "definition_site": "00a7ef18",
      "incomplete_value": false,
      "site": "00a7ef18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7df24",
      "incomplete_value": false,
      "site": "00a7df24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ef0:8"
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
      "00a7ef18",
      "DATA",
      [
        "storage",
        "00c8bef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7ef18",
      "DATA",
      [
        "storage",
        "00c8cec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7df1c ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a7ef10 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a7df20 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 00a7df20 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7df20 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7df20 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7ef14 ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 00a7ef14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ef14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7ef14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4a473e50fec6272ff746da458079b536"></a>

### [`00a7df34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7df34.md) → [`00a7ef28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ef28.md) FUN_00a7ef28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7f01c",
      "incomplete_value": true,
      "site": "00a7f030",
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
                "const:cb9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e028",
      "incomplete_value": true,
      "site": "00a7e03c",
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
                "const:bdb:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7f048",
      "incomplete_value": false,
      "site": "00a7f050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e054",
      "incomplete_value": false,
      "site": "00a7e05c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7ef74",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7df80",
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
      "00a7ef74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7ef90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7efdc",
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
      "00a7ef74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7ef90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7efdc",
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
- 00a7df80 ["INT_ADD", "register:40f0:8", ["const:a7df80:8", "const:4:8"]]
- 00a7df80 ["CALL", null, ["ram:47ad34:8"]]
+ 00a7ef74 ["INT_ADD", "register:40f0:8", ["const:a7ef74:8", "const:4:8"]]
+ 00a7ef74 ["CALL", null, ["ram:47b054:8"]]
- 00a7df9c ["INT_ADD", "register:40f0:8", ["const:a7df9c:8", "const:4:8"]]
- 00a7df9c ["CALL", null, ["ram:47ad34:8"]]
+ 00a7ef90 ["INT_ADD", "register:40f0:8", ["const:a7ef90:8", "const:4:8"]]
+ 00a7ef90 ["CALL", null, ["ram:47b054:8"]]
- 00a7dfcc ["INT_ADD", "register:40f0:8", ["const:a7dfcc:8", "const:4:8"]]
- 00a7dfcc ["CALL", null, ["callee:0048d1b0:8"]]
+ 00a7efc0 ["INT_ADD", "register:40f0:8", ["const:a7efc0:8", "const:4:8"]]
+ 00a7efc0 ["CALL", null, ["callee:0048d1b0:8"]]
~~~


<a id="compare-ba6544ebc46c804f7ca5b889cbf5d200"></a>

### [`00a7e1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e1b4.md) → [`00a7f1a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f1a8.md) FUN_00a7f1a8

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
      "definition_site": "00a7f1bc",
      "incomplete_value": false,
      "site": "00a7f1c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e1c8",
      "incomplete_value": false,
      "site": "00a7e1cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
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
      "00a7f1c0",
      "DATA",
      [
        "storage",
        "00c8bf60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f1c0",
      "DATA",
      [
        "storage",
        "00c8cf30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e1c0 ["INT_ADD", "register:40f0:8", ["const:a7e1c0:8", "const:4:8"]]
- 00a7e1c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7f1b4 ["INT_ADD", "register:40f0:8", ["const:a7f1b4:8", "const:4:8"]]
+ 00a7f1b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7e1c4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7f1b8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7e1c8 ["COPY", "tmp:0:8", ["const:f60:8"]]
- 00a7e1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1bc ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 00a7f1bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c2fdc5f42e4916e6e0c2ab01d0d02ecc"></a>

### [`00a7e1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e1d8.md) → [`00a7f1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f1cc.md) FUN_00a7f1cc

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
      "definition_site": "00a7f1d0",
      "incomplete_value": false,
      "site": "00a7f1d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e1dc",
      "incomplete_value": false,
      "site": "00a7e1e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
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
      "00a7f1d4",
      "DATA",
      [
        "storage",
        "00c8bf60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f1d4",
      "DATA",
      [
        "storage",
        "00c8cf30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e1d8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7f1cc ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7e1dc ["COPY", "tmp:0:8", ["const:f60:8"]]
- 00a7e1dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1d0 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 00a7f1d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f1d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9676312ffca06a91e45ecd55397c24bf"></a>

### [`00a7e234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e234.md) → [`00a7f228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f228.md) FUN_00a7f228

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
      "definition_site": "00a7f24c",
      "incomplete_value": false,
      "site": "00a7f24c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e258",
      "incomplete_value": false,
      "site": "00a7e258",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
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
      "00a7f24c",
      "DATA",
      [
        "storage",
        "00c8bff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f24c",
      "DATA",
      [
        "storage",
        "00c8cfc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e248 ["INT_ADD", "register:40f0:8", ["const:a7e248:8", "const:4:8"]]
- 00a7e248 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7f23c ["INT_ADD", "register:40f0:8", ["const:a7f23c:8", "const:4:8"]]
+ 00a7f23c ["CALL", null, ["callee:00c58f30:8"]]
- 00a7e250 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7f244 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7e254 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 00a7e254 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e254 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e254 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f248 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 00a7f248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30f20d3c4bf982f7d97fade56a2d2385"></a>

### [`00a7e268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e268.md) → [`00a7f25c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f25c.md) FUN_00a7f25c

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
      "definition_site": "00a7f268",
      "incomplete_value": false,
      "site": "00a7f268",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e274",
      "incomplete_value": false,
      "site": "00a7e274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
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
      "00a7f268",
      "DATA",
      [
        "storage",
        "00c8bff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f268",
      "DATA",
      [
        "storage",
        "00c8cfc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e26c ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a7f260 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a7e270 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 00a7e270 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e270 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e270 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7f264 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 00a7f264 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f264 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f264 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d85c95284a256712ba2c85e2f779acc0"></a>

### [`00a7e284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e284.md) → [`00a7f278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f278.md) FUN_00a7f278

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7f36c",
      "incomplete_value": true,
      "site": "00a7f380",
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
                "const:cb9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e378",
      "incomplete_value": true,
      "site": "00a7e38c",
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
                "const:bdb:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7f398",
      "incomplete_value": false,
      "site": "00a7f3a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e3a4",
      "incomplete_value": false,
      "site": "00a7e3ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7f2c4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e2d0",
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
      "00a7f2c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7f2e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7f32c",
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
      "00a7f2c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7f2e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7f32c",
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
- 00a7e2d0 ["INT_ADD", "register:40f0:8", ["const:a7e2d0:8", "const:4:8"]]
- 00a7e2d0 ["CALL", null, ["ram:47ad34:8"]]
+ 00a7f2c4 ["INT_ADD", "register:40f0:8", ["const:a7f2c4:8", "const:4:8"]]
+ 00a7f2c4 ["CALL", null, ["ram:47b054:8"]]
- 00a7e2ec ["INT_ADD", "register:40f0:8", ["const:a7e2ec:8", "const:4:8"]]
- 00a7e2ec ["CALL", null, ["ram:47ad34:8"]]
+ 00a7f2e0 ["INT_ADD", "register:40f0:8", ["const:a7f2e0:8", "const:4:8"]]
+ 00a7f2e0 ["CALL", null, ["ram:47b054:8"]]
- 00a7e31c ["INT_ADD", "register:40f0:8", ["const:a7e31c:8", "const:4:8"]]
- 00a7e31c ["CALL", null, ["callee:0048d1b0:8"]]
+ 00a7f310 ["INT_ADD", "register:40f0:8", ["const:a7f310:8", "const:4:8"]]
+ 00a7f310 ["CALL", null, ["callee:0048d1b0:8"]]
~~~


<a id="compare-8ae9c5379dc1edef5a0920a6ba6c500d"></a>

### [`00a7e504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e504.md) → [`00a7f4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f4f8.md) FUN_00a7f4f8

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
      "definition_site": "00a7f50c",
      "incomplete_value": false,
      "site": "00a7f510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e518",
      "incomplete_value": false,
      "site": "00a7e51c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "00a7f510",
      "DATA",
      [
        "storage",
        "00c8c060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f510",
      "DATA",
      [
        "storage",
        "00c8d030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e510 ["INT_ADD", "register:40f0:8", ["const:a7e510:8", "const:4:8"]]
- 00a7e510 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7f504 ["INT_ADD", "register:40f0:8", ["const:a7f504:8", "const:4:8"]]
+ 00a7f504 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7e514 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7f508 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7e518 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00a7e518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f50c ["COPY", "tmp:0:8", ["const:30:8"]]
+ 00a7f50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cc9b8246d53fba371a08672047427316"></a>

### [`00a7e528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e528.md) → [`00a7f51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f51c.md) FUN_00a7f51c

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
      "definition_site": "00a7f520",
      "incomplete_value": false,
      "site": "00a7f524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e52c",
      "incomplete_value": false,
      "site": "00a7e530",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "00a7f524",
      "DATA",
      [
        "storage",
        "00c8c060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f524",
      "DATA",
      [
        "storage",
        "00c8d030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e528 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7f51c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7e52c ["COPY", "tmp:0:8", ["const:60:8"]]
- 00a7e52c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e52c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e52c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f520 ["COPY", "tmp:0:8", ["const:30:8"]]
+ 00a7f520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3480e015bf112c374f01db38c2033bce"></a>

### [`00a7e584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e584.md) → [`00a7f578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f578.md) FUN_00a7f578

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
      "definition_site": "00a7f59c",
      "incomplete_value": false,
      "site": "00a7f59c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e5a8",
      "incomplete_value": false,
      "site": "00a7e5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "00a7f59c",
      "DATA",
      [
        "storage",
        "00c8c0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f59c",
      "DATA",
      [
        "storage",
        "00c8d0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e598 ["INT_ADD", "register:40f0:8", ["const:a7e598:8", "const:4:8"]]
- 00a7e598 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7f58c ["INT_ADD", "register:40f0:8", ["const:a7f58c:8", "const:4:8"]]
+ 00a7f58c ["CALL", null, ["callee:00c58f30:8"]]
- 00a7e5a0 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7f594 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7e5a4 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00a7e5a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e5a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e5a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f598 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 00a7f598 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f598 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f598 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4848edd1dc2033c3382c8d79d1d93780"></a>

### [`00a7e5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e5b8.md) → [`00a7f5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f5ac.md) FUN_00a7f5ac

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
      "definition_site": "00a7f5b8",
      "incomplete_value": false,
      "site": "00a7f5b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e5c4",
      "incomplete_value": false,
      "site": "00a7e5c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "00a7f5b8",
      "DATA",
      [
        "storage",
        "00c8c0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f5b8",
      "DATA",
      [
        "storage",
        "00c8d0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e5bc ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a7f5b0 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a7e5c0 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00a7e5c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e5c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e5c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7f5b4 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 00a7f5b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f5b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f5b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-24a188d598ea68be8ad28afc0f6d81be"></a>

### [`00a7e5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e5d4.md) → [`00a7f5c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f5c8.md) FUN_00a7f5c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7f5fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e608",
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
      "site": "00a7f620",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e62c",
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
      "00a7f5fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7f620",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a7f5fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7f620",
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
- 00a7e608 ["INT_ADD", "register:40f0:8", ["const:a7e608:8", "const:4:8"]]
- 00a7e608 ["CALL", null, ["ram:47ad34:8"]]
+ 00a7f5fc ["INT_ADD", "register:40f0:8", ["const:a7f5fc:8", "const:4:8"]]
+ 00a7f5fc ["CALL", null, ["ram:47b054:8"]]
- 00a7e62c ["INT_ADD", "register:40f0:8", ["const:a7e62c:8", "const:4:8"]]
- 00a7e62c ["CALL", null, ["ram:47ad34:8"]]
+ 00a7f620 ["INT_ADD", "register:40f0:8", ["const:a7f620:8", "const:4:8"]]
+ 00a7f620 ["CALL", null, ["ram:47b054:8"]]
- 00a7e5fc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00a7e5fc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00a7f5f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00a7f5f0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-d8e560266c95b668ba8f1b61378a5768"></a>

### [`00a7e6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e6cc.md) → [`00a7f6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f6c0.md) FUN_00a7f6c0

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
      "definition_site": "00a7f6e4",
      "incomplete_value": false,
      "site": "00a7f6e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e6f0",
      "incomplete_value": false,
      "site": "00a7e6f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:170:8"
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
      "00a7f6e4",
      "DATA",
      [
        "storage",
        "00c8c170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f6e4",
      "DATA",
      [
        "storage",
        "00c8d140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e6e0 ["INT_ADD", "register:40f0:8", ["const:a7e6e0:8", "const:4:8"]]
- 00a7e6e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7f6d4 ["INT_ADD", "register:40f0:8", ["const:a7f6d4:8", "const:4:8"]]
+ 00a7f6d4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7e6e8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7f6dc ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7e6ec ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a7e6ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e6ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e6ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f6e0 ["COPY", "tmp:0:8", ["const:140:8"]]
+ 00a7f6e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f6e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f6e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-536bd92bfa5814b352c67612a484f304"></a>

### [`00a7e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e700.md) → [`00a7f6f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f6f4.md) FUN_00a7f6f4

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
      "definition_site": "00a7f700",
      "incomplete_value": false,
      "site": "00a7f700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e70c",
      "incomplete_value": false,
      "site": "00a7e70c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:170:8"
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
      "00a7f700",
      "DATA",
      [
        "storage",
        "00c8c170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f700",
      "DATA",
      [
        "storage",
        "00c8d140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e704 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a7f6f8 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a7e708 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a7e708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7f6fc ["COPY", "tmp:0:8", ["const:140:8"]]
+ 00a7f6fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f6fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f6fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0a3353bbd26124a971f15ad6cca1353d"></a>

### [`00a7e71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e71c.md) → [`00a7f710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f710.md) FUN_00a7f710

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068ae88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068ae88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ac8ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac8ccc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0068b238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068b/0068b238.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00ac9cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac9/00ac9cc0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 91.14% / 新版 91.14%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7f750",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e75c",
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
      "definition_site": "00a7e7c0",
      "incomplete_value": true,
      "site": "00a7e7d4",
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
    "new": null,
    "old": {
      "definition_site": "00a7e7bc",
      "incomplete_value": false,
      "site": "00a7e7d4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a7f750",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00a7e794",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00a7e7bc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a7f750",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7f788",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a7f7b0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e75c ["INT_ADD", "register:40f0:8", ["const:a7e75c:8", "const:4:8"]]
- 00a7e75c ["CALL", null, ["ram:47ad34:8"]]
+ 00a7f750 ["INT_ADD", "register:40f0:8", ["const:a7f750:8", "const:4:8"]]
+ 00a7f750 ["CALL", null, ["ram:47b054:8"]]
- 00a7e7d4 ["INT_ADD", "register:40f0:8", ["const:a7e7d4:8", "const:4:8"]]
- 00a7e7d4 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a7f7c8 ["INT_ADD", "register:40f0:8", ["const:a7f7c8:8", "const:4:8"]]
+ 00a7f7c8 ["CALL", null, ["callee:00c596b0:8"]]
- 00a7e7fc ["INT_ADD", "register:40f0:8", ["const:a7e7fc:8", "const:4:8"]]
- 00a7e7fc ["CALL", null, ["ram:68ae88:8"]]
+ 00a7f7f0 ["INT_ADD", "register:40f0:8", ["const:a7f7f0:8", "const:4:8"]]
+ 00a7f7f0 ["CALL", null, ["ram:68b238:8"]]
~~~


<a id="compare-63f6cfbb115e21eca785a8df3096d84a"></a>

### [`00a7e8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e8a4.md) → [`00a7f898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7f898.md) FUN_00a7f898

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a79b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79b04.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00a7aaf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7a/00a7aaf8.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.11% / 新版 98.11%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7e980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f984"
      ]
    ],
    [
      "unmatched:00a7ea0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7fa28"
      ]
    ]
  ],
  "added": [
    [
      "00a7f974",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f984"
      ]
    ],
    [
      "00a7fa00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7fa28"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e914 ["BRANCH", null, ["local:b16:8"]]
+ 00a7f908 ["BRANCH", null, ["local:b17:8"]]
- 00a7e93c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a7e93c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00a7f930 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a7f930 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
- 00a7e954 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 00a7e954 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 00a7f948 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 00a7f948 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
~~~


<a id="compare-80f725d07e89ef8fa3034220049ca1fa"></a>

### [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) → [`00a7fa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fa40.md) FUN_00a7fa40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) · 呼出先 2件 [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) [`00a7fa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fa40.md) · 呼出先 2件 [`00a7fa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fa40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7fa5c",
      "incomplete_value": true,
      "site": "00a7fa60",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00a7ea68",
      "incomplete_value": true,
      "site": "00a7ea6c",
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
  }
]
~~~


~~~diff
- 00a7ea6c ["INT_ADD", "register:40f0:8", ["const:a7ea6c:8", "const:4:8"]]
- 00a7ea6c ["CALL", null, ["local:b0:8"]]
+ 00a7fa60 ["INT_ADD", "register:40f0:8", ["const:a7fa60:8", "const:4:8"]]
+ 00a7fa60 ["CALL", null, ["local:b0:8"]]
- 00a7ea4c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00a7ea4c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00a7fa40 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00a7fa40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00a7ea68 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-8d9ec3aaf6303dfcb00aec823518d072"></a>

### [`00a7ea94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea94.md) → [`00a7fa88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fa88.md) FUN_00a7fa88

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
      "unmatched:00a7eaac",
      "DATA",
      [
        "storage",
        "00c8c1f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7eab0",
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
      "00a7faa0",
      "DATA",
      [
        "storage",
        "00c8d1c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7faa4",
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
- 00a7eaa0 ["INT_ADD", "register:40f0:8", ["const:a7eaa0:8", "const:4:8"]]
- 00a7eaa0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7fa94 ["INT_ADD", "register:40f0:8", ["const:a7fa94:8", "const:4:8"]]
+ 00a7fa94 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7eaa4 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7fa98 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7eaa8 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00a7eaa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eaa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eaa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-feebc591d69df4596ba91505e8b25698"></a>

### [`00a7eab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eab8.md) → [`00a7faac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7faac.md) FUN_00a7faac

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
      "definition_site": "00a7fab0",
      "incomplete_value": false,
      "site": "00a7fab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7eabc",
      "incomplete_value": false,
      "site": "00a7eac0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
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
      "00a7fab4",
      "DATA",
      [
        "storage",
        "00c8c1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7fab4",
      "DATA",
      [
        "storage",
        "00c8d1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7eab8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7faac ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7eabc ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00a7eabc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eabc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eabc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7fab0 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00a7fab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7fab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7fab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c95634d76227d2e3bea9e93f55893989"></a>

### [`00a7ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ead0.md) → [`00a7fac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fac4.md) FUN_00a7fac4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a7ead8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a7ead8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00a7facc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a7facc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-93fc801bffde1f7690a794d8f986b7a7"></a>

### [`00a7eb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb14.md) → [`00a7fb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb08.md) FUN_00a7fb08

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
      "unmatched:00a7eb2c",
      "DATA",
      [
        "storage",
        "00c8c270",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7eb30",
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
      "00a7fb20",
      "DATA",
      [
        "storage",
        "00c8d240",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7fb24",
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
- 00a7eb20 ["INT_ADD", "register:40f0:8", ["const:a7eb20:8", "const:4:8"]]
- 00a7eb20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a7fb14 ["INT_ADD", "register:40f0:8", ["const:a7fb14:8", "const:4:8"]]
+ 00a7fb14 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7eb24 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7fb18 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7eb28 ["COPY", "tmp:0:8", ["const:270:8"]]
- 00a7eb28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eb28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eb28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-64ea716f1e19964a28c2fc529cf91e05"></a>

### [`00a7eb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb38.md) → [`00a7fb2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb2c.md) FUN_00a7fb2c

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
      "definition_site": "00a7fb30",
      "incomplete_value": false,
      "site": "00a7fb34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7eb3c",
      "incomplete_value": false,
      "site": "00a7eb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:270:8"
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
      "00a7fb34",
      "DATA",
      [
        "storage",
        "00c8c270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7fb34",
      "DATA",
      [
        "storage",
        "00c8d240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7eb38 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a7fb2c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7eb3c ["COPY", "tmp:0:8", ["const:270:8"]]
- 00a7eb3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eb3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eb3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7fb30 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00a7fb30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7fb30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7fb30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-614a03bdccc275b12c5069e1fec01927"></a>

### [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) → [`00a7fb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb84.md) FUN_00a7fb84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) · 呼出先 4件 [`0081142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/0081142c.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) [`00a7f1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f1d0.md)
- 新版 呼出元 3件 [`00a735f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a73/00a735f8.md) [`00a7fb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb84.md) [`00a7fec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fec4.md) · 呼出先 4件 [`00812390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/00812390.md) [`00a7fb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb84.md) [`00a7fec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fec4.md) [`00a801c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a801c4.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.02% / 新版 87.02%

優先判定に残った影響 `call_target` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7fbcc",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7ebd8",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "site": "00a7fbdc",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7ebe8",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "site": "00a7fc80",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7ec8c",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "unmatched:00a7eb90",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7eb94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7eb98",
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
      "00a7fb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a7fb88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a7fb8c",
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
- 00a7ebd8 ["INT_ADD", "register:40f0:8", ["const:a7ebd8:8", "const:4:8"]]
- 00a7ebd8 ["CALL", null, ["ram:81142c:8"]]
+ 00a7fbcc ["INT_ADD", "register:40f0:8", ["const:a7fbcc:8", "const:4:8"]]
+ 00a7fbcc ["CALL", null, ["ram:812390:8"]]
- 00a7ebe8 ["INT_ADD", "register:40f0:8", ["const:a7ebe8:8", "const:4:8"]]
- 00a7ebe8 ["CALL", null, ["ram:81142c:8"]]
+ 00a7fbdc ["INT_ADD", "register:40f0:8", ["const:a7fbdc:8", "const:4:8"]]
+ 00a7fbdc ["CALL", null, ["ram:812390:8"]]
- 00a7ec8c ["INT_ADD", "register:40f0:8", ["const:a7ec8c:8", "const:4:8"]]
- 00a7ec8c ["CALL", null, ["ram:81142c:8"]]
+ 00a7fc80 ["INT_ADD", "register:40f0:8", ["const:a7fc80:8", "const:4:8"]]
+ 00a7fc80 ["CALL", null, ["ram:812390:8"]]
~~~


<a id="compare-7a724447aa08e74a926e54ea399f5bfd"></a>

### [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) → [`00a7fec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fec4.md) FUN_00a7fec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) · 呼出先 2件 [`0081142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/0081142c.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md)
- 新版 呼出元 1件 [`00a7fb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb84.md) · 呼出先 2件 [`00812390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/00812390.md) [`00a7fb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7f/00a7fb84.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.42% / 新版 85.42%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7ff9c",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7efa8",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "site": "00a7ffac",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7efb8",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "site": "00a7ffdc",
      "value": [
        "leaf",
        "ram:812390:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7efe8",
      "value": [
        "leaf",
        "ram:81142c:8"
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
      "unmatched:00a7ef10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081142c"
      ]
    ],
    [
      "unmatched:00a7ef20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081142c"
      ]
    ],
    [
      "unmatched:00a7ef60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8000c"
      ]
    ]
  ],
  "added": [
    [
      "00a7ff04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00812390"
      ]
    ],
    [
      "00a7ff14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00812390"
      ]
    ],
    [
      "00a7ff54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8000c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7efa8 ["INT_ADD", "register:40f0:8", ["const:a7efa8:8", "const:4:8"]]
- 00a7efa8 ["CALL", null, ["ram:81142c:8"]]
+ 00a7ff9c ["INT_ADD", "register:40f0:8", ["const:a7ff9c:8", "const:4:8"]]
+ 00a7ff9c ["CALL", null, ["ram:812390:8"]]
- 00a7efb8 ["INT_ADD", "register:40f0:8", ["const:a7efb8:8", "const:4:8"]]
- 00a7efb8 ["CALL", null, ["ram:81142c:8"]]
+ 00a7ffac ["INT_ADD", "register:40f0:8", ["const:a7ffac:8", "const:4:8"]]
+ 00a7ffac ["CALL", null, ["ram:812390:8"]]
- 00a7efe8 ["INT_ADD", "register:40f0:8", ["const:a7efe8:8", "const:4:8"]]
- 00a7efe8 ["CALL", null, ["ram:81142c:8"]]
+ 00a7ffdc ["INT_ADD", "register:40f0:8", ["const:a7ffdc:8", "const:4:8"]]
+ 00a7ffdc ["CALL", null, ["ram:812390:8"]]
~~~


<a id="compare-01a20ba5f794735fdc2d2e8999d12012"></a>

### [`00a7f828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f828.md) → [`00a8081c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a8081c.md) FUN_00a8081c

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
      "definition_site": "00a80840",
      "incomplete_value": false,
      "site": "00a80840",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7f84c",
      "incomplete_value": false,
      "site": "00a7f84c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "00a80840",
      "DATA",
      [
        "storage",
        "00c8c2f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a80840",
      "DATA",
      [
        "storage",
        "00c8d2c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7f83c ["INT_ADD", "register:40f0:8", ["const:a7f83c:8", "const:4:8"]]
- 00a7f83c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a80830 ["INT_ADD", "register:40f0:8", ["const:a80830:8", "const:4:8"]]
+ 00a80830 ["CALL", null, ["callee:00c58f30:8"]]
- 00a7f844 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a80838 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a7f848 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 00a7f848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7f848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7f848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a8083c ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00a8083c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8083c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8083c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ace213178cb95d5ddee80472472ab45c"></a>

### [`00a7f85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f85c.md) → [`00a80850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80850.md) FUN_00a80850

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
      "definition_site": "00a8085c",
      "incomplete_value": false,
      "site": "00a8085c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7f868",
      "incomplete_value": false,
      "site": "00a7f868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "00a8085c",
      "DATA",
      [
        "storage",
        "00c8c2f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a8085c",
      "DATA",
      [
        "storage",
        "00c8d2c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7f860 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a80854 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a7f864 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 00a7f864 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7f864 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7f864 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a80858 ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00a80858 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a80858 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a80858 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e3e90c3307dd307f65980e7886c7885d"></a>

### [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) → [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) FUN_00a80898

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) · 呼出先 5件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`00a735f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a73/00a735f8.md) [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) [`00a80cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80cf4.md) · 呼出先 5件 [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) [`00a80c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80c14.md) [`00a80cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80cf4.md) [`00a80fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80fe4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.13% / 新版 77.13%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 12件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80918",
      "incomplete_value": true,
      "site": "00a8091c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00a80914",
      "incomplete_value": true,
      "site": "00a8091c",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00a7fa98",
      "incomplete_value": true,
      "site": "00a7faac",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:00a7f8d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7f8d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a808fc"
      ]
    ],
    [
      "unmatched:00a7f8dc",
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
      "00a808c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00a808c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a808fc"
      ]
    ],
    [
      "00a808d0",
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
- 00a7f928 ["INT_ADD", "register:40f0:8", ["const:a7f928:8", "const:4:8"]]
- 00a7f928 ["CALL", null, ["callee:00a80c14:8"]]
+ 00a8091c ["INT_ADD", "register:40f0:8", ["const:a8091c:8", "const:4:8"]]
+ 00a8091c ["CALL", null, ["callee:00a80c14:8"]]
- 00a7faac ["INT_ADD", "register:40f0:8", ["const:a7faac:8", "const:4:8"]]
- 00a7faac ["CALL", null, ["callee:00a80cf4:8"]]
+ 00a80aa0 ["INT_ADD", "register:40f0:8", ["const:a80aa0:8", "const:4:8"]]
+ 00a80aa0 ["CALL", null, ["callee:00a80cf4:8"]]
- 00a7f8c8 ["INT_ADD", "tmp:0:8", ["register:40e0:8", "const:28:8"]]
- 00a7f8c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6583e5865848dabacf849c147c710fdf"></a>

### [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) → [`00a80c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80c14.md) FUN_00a80c14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) · 呼出先 1件 [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)
- 新版 呼出元 3件 [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) [`00a80cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80cf4.md) [`00a80fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80fe4.md) · 呼出先 1件 [`00687a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687a18.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.07% / 新版 91.07%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80c3c",
      "incomplete_value": true,
      "site": "00a80c40",
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
            "const:1648:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7fc48",
      "incomplete_value": true,
      "site": "00a7fc4c",
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
                "register:4000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1648:8"
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
      "definition_site": "00a7fc68",
      "incomplete_value": true,
      "site": "00a7fc6c",
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
            "register:40b0:8"
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
    "new": {
      "definition_site": "00a80cb0",
      "incomplete_value": true,
      "site": "00a80cb4",
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
            "register:40b0:8"
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
      "unmatched:00a7fc78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80cac"
      ]
    ],
    [
      "unmatched:00a7fc84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00687a18"
      ]
    ],
    [
      "00a80c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80c70"
      ]
    ]
  ],
  "added": [
    [
      "00a80c6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80cac"
      ]
    ],
    [
      "00a80c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80cc8"
      ]
    ],
    [
      "00a80cd0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00687a18"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7fc4c ["INT_ADD", "register:40f0:8", ["const:a7fc4c:8", "const:4:8"]]
- 00a7fc4c ["CALL", null, ["callee:00687a18:8"]]
+ 00a80c40 ["INT_ADD", "register:40f0:8", ["const:a80c40:8", "const:4:8"]]
+ 00a80c40 ["CALL", null, ["callee:00687a18:8"]]
- 00a7fc6c ["INT_ADD", "register:40f0:8", ["const:a7fc6c:8", "const:4:8"]]
- 00a7fc6c ["CALL", null, ["callee:00687a18:8"]]
+ 00a80c60 ["INT_ADD", "register:40f0:8", ["const:a80c60:8", "const:4:8"]]
+ 00a80c60 ["CALL", null, ["callee:00687a18:8"]]
- 00a7fcc0 ["INT_ADD", "register:40f0:8", ["const:a7fcc0:8", "const:4:8"]]
- 00a7fcc0 ["CALL", null, ["callee:00687a18:8"]]
+ 00a80cb4 ["INT_ADD", "register:40f0:8", ["const:a80cb4:8", "const:4:8"]]
+ 00a80cb4 ["CALL", null, ["callee:00687a18:8"]]
~~~


<a id="compare-6b8925ef888c6d4e990b282474fb8b4c"></a>

### [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) → [`00a80cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80cf4.md) FUN_00a80cf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) · 呼出先 2件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md)
- 新版 呼出元 1件 [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) · 呼出先 2件 [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) [`00a80c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80c14.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.09% / 新版 93.09%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a7fe3c",
      "incomplete_value": true,
      "site": "00a7fe60",
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
    "new": {
      "definition_site": "00a80e50",
      "incomplete_value": true,
      "site": "00a80e54",
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
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7fe5c",
      "incomplete_value": true,
      "site": "00a7fe60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:2:8"
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
      "definition_site": "00a7fe40",
      "incomplete_value": true,
      "site": "00a7fe60",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00a7fe00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80db0"
      ]
    ],
    [
      "unmatched:00a7fed4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80e84"
      ]
    ]
  ],
  "added": [
    [
      "00a80df4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80db0"
      ]
    ],
    [
      "00a80ec8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80e84"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7fe60 ["INT_ADD", "register:40f0:8", ["const:a7fe60:8", "const:4:8"]]
- 00a7fe60 ["CALL", null, ["callee:00a80898:8"]]
+ 00a80e54 ["INT_ADD", "register:40f0:8", ["const:a80e54:8", "const:4:8"]]
+ 00a80e54 ["CALL", null, ["callee:00a80898:8"]]
- 00a7fea8 ["INT_ADD", "register:40f0:8", ["const:a7fea8:8", "const:4:8"]]
- 00a7fea8 ["CALL", null, ["callee:00a80c14:8"]]
+ 00a80e9c ["INT_ADD", "register:40f0:8", ["const:a80e9c:8", "const:4:8"]]
+ 00a80e9c ["CALL", null, ["callee:00a80c14:8"]]
- 00a7fd00 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 00a7fd00 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00a80cf4 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 00a80cf4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-907271fac343256415611eb91d8d4379"></a>

### [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) → [`00a80fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80fe4.md) FUN_00a80fe4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) · 呼出先 4件 [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00a80898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80898.md) [`00a80fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80fe4.md) · 呼出先 4件 [`00a80c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80c14.md) [`00a80fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a80/00a80fe4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.18% / 新版 87.18%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 12件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a804f0",
      "incomplete_value": true,
      "site": "00a804fc",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00a804f4",
      "incomplete_value": true,
      "site": "00a804fc",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "00a804f8",
      "incomplete_value": true,
      "site": "00a804fc",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00a80048",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a813c8"
      ]
    ],
    [
      "unmatched:00a8009c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a81180"
      ]
    ],
    [
      "00a81184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a80534"
      ]
    ]
  ],
  "added": [
    [
      "00a8103c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a813c8"
      ]
    ],
    [
      "00a81090",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a81180"
      ]
    ],
    [
      "00a81184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a81528"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a804fc ["INT_ADD", "register:40f0:8", ["const:a804fc:8", "const:4:8"]]
- 00a804fc ["CALL", null, ["callee:00a80c14:8"]]
+ 00a814f0 ["INT_ADD", "register:40f0:8", ["const:a814f0:8", "const:4:8"]]
+ 00a814f0 ["CALL", null, ["callee:00a80c14:8"]]
- 00a80024 ["INT_EQUAL", "tmp:0:1", ["register:4028:8", "const:0:8"]]
- 00a80024 ["CBRANCH", null, ["local:b102:8", "tmp:0:1"]]
+ 00a81018 ["INT_EQUAL", "tmp:0:1", ["register:4028:8", "const:0:8"]]
+ 00a81018 ["CBRANCH", null, ["local:b101:8", "tmp:0:1"]]
- 00a80048 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a80048 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00a80048 ["CBRANCH", null, ["local:b51:8", "tmp:1:1"]]
~~~


<a id="compare-484dc483a09eeb8808107836a9fe9b53"></a>

### [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) → [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md) FUN_00a81698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) · 呼出先 3件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md)
- 新版 呼出元 3件 [`00a735f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a73/00a735f8.md) [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md) [`00a81978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81978.md) · 呼出先 3件 [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md) [`00a81978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81978.md) [`00a81c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81c20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a806c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a816d0"
      ]
    ],
    [
      "unmatched:00a806c4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a806c8",
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
      "00a816b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a816d0"
      ]
    ],
    [
      "00a816b8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a816bc",
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
- 00a806c0 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
- 00a806c4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:40:8"]]
- 00a806c4 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00a806c4 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00a806c4 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 00a806c8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a806c8 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b5eb66e9cf217e71bdf24e3500618179"></a>

### [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) → [`00a81978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81978.md) FUN_00a81978

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) · 呼出先 1件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md)
- 新版 呼出元 1件 [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md) · 呼出先 1件 [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.71% / 新版 84.71%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a81a9c",
      "incomplete_value": true,
      "site": "00a81aa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a80aa8",
      "incomplete_value": true,
      "site": "00a80aac",
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
            "register:40c0:8"
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
        "CONDITIONAL_JUMP",
        "00a80a3c"
      ],
      [
        "CONDITIONAL_JUMP",
        "00a81a30"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a81a30",
      "incomplete_value": true,
      "site": "00a81a0c",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "live",
            "register:101:1"
          ],
          [
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
        ]
      ]
    },
    "old": {
      "definition_site": "00a80a3c",
      "incomplete_value": true,
      "site": "00a80a18",
      "value": [
        "BOOL_OR",
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
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a80a3c"
      ],
      [
        "FALL_THROUGH",
        "00a81a30"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a81a30",
      "incomplete_value": true,
      "site": "00a81a38",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "live",
            "register:101:1"
          ],
          [
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
        ]
      ]
    },
    "old": {
      "definition_site": "00a80a3c",
      "incomplete_value": true,
      "site": "00a80a44",
      "value": [
        "BOOL_OR",
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
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
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
      "unmatched:00a80984",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80988",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8098c",
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
      "00a81978",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a8197c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a81980",
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
- 00a80aac ["INT_ADD", "register:40f0:8", ["const:a80aac:8", "const:4:8"]]
- 00a80aac ["CALL", null, ["callee:00a81698:8"]]
+ 00a81aa0 ["INT_ADD", "register:40f0:8", ["const:a81aa0:8", "const:4:8"]]
+ 00a81aa0 ["CALL", null, ["callee:00a81698:8"]]
- 00a80984 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a80984 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a80984 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00a80984 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a80988 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a80988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
~~~


<a id="compare-5382b595a5e818b6606f8104963ab051"></a>

### [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) → [`00a81c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81c20.md) FUN_00a81c20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) · 呼出先 2件 [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00a81698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81698.md) [`00a81c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81c20.md) · 呼出先 2件 [`00a81c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a81/00a81c20.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.93% / 新版 86.93%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 4件, `unresolved_branch_alignment` 15件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a80df8",
      "incomplete_value": true,
      "site": "00a80e0c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00a80f20",
      "incomplete_value": true,
      "site": "00a80f48",
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
            "register:40d0:8"
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
      "definition_site": "00a80f28",
      "incomplete_value": true,
      "site": "00a80f48",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00a80c30",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80c38",
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
      "00a81c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a81c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a81c2c",
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
- 00a80e0c ["INT_ADD", "register:40f0:8", ["const:a80e0c:8", "const:4:8"]]
- 00a80e0c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00a81e00 ["INT_ADD", "register:40f0:8", ["const:a81e00:8", "const:4:8"]]
+ 00a81e00 ["CALL", null, ["callee:00c58fe0:8"]]
- 00a80f48 ["INT_ADD", "register:40f0:8", ["const:a80f48:8", "const:4:8"]]
- 00a80f48 ["CALL", null, ["local:b0:8"]]
+ 00a81f3c ["INT_ADD", "register:40f0:8", ["const:a81f3c:8", "const:4:8"]]
+ 00a81f3c ["CALL", null, ["local:b0:8"]]
- 00a80c2c ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


