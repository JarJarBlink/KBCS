# v16.0.1 → v16.0.2 · 最優先の変更候補 (37)

[一覧の目次](README.md)

<a id="compare-69e8dac5356110f72a8222f6de9c5832"></a>

### [`00738414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/00738414.md) → [`0073846c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073846c.md) FUN_0073846c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007384a0",
      "incomplete_value": true,
      "site": "007384a4",
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
              [
                "leaf",
                "const:40:8"
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
      "definition_site": "00738448",
      "incomplete_value": true,
      "site": "0073844c",
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
                "register:40d0:8"
              ],
              [
                "leaf",
                "const:40:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738498",
      "incomplete_value": true,
      "site": "007384a4",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00738440",
      "incomplete_value": true,
      "site": "0073844c",
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
                "register:40d0:8"
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
      "unmatched:00738424",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00738428",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073842c",
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
      "0073847c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00738480",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00738484",
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
- 0073844c ["INT_ADD", "register:40f0:8", ["const:73844c:8", "const:4:8"]]
- 0073844c ["CALL", null, ["callee:00676aa0:8"]]
+ 007384a4 ["INT_ADD", "register:40f0:8", ["const:7384a4:8", "const:4:8"]]
+ 007384a4 ["CALL", null, ["callee:00676aa0:8"]]
- 007384a4 ["INT_ADD", "register:40f0:8", ["const:7384a4:8", "const:4:8"]]
- 007384a4 ["CALL", null, ["callee:00480430:8"]]
+ 007384fc ["INT_ADD", "register:40f0:8", ["const:7384fc:8", "const:4:8"]]
+ 007384fc ["CALL", null, ["callee:00480430:8"]]
- 00738424 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00738424 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00738424 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00738424 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5b21406d18818503ad1cf5fefe32d96d"></a>

### [`00738594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/00738594.md) → [`007385ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/007385ec.md) FUN_007385ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 2件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md)
- 新版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007385ac ["INT_ADD", "register:40f0:8", ["const:7385ac:8", "const:4:8"]]
- 007385ac ["CALL", null, ["callee:00480338:8"]]
+ 00738604 ["INT_ADD", "register:40f0:8", ["const:738604:8", "const:4:8"]]
+ 00738604 ["CALL", null, ["callee:00480338:8"]]
- 007385bc ["INT_ADD", "register:40f0:8", ["const:7385bc:8", "const:4:8"]]
- 007385bc ["CALL", null, ["callee:00480784:8"]]
+ 00738614 ["INT_ADD", "register:40f0:8", ["const:738614:8", "const:4:8"]]
+ 00738614 ["CALL", null, ["callee:00480784:8"]]
~~~


<a id="compare-3b3b2828ba3390abb354303585a677b8"></a>

### [`007385d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/007385d0.md) → [`00738628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738628.md) FUN_00738628

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 7件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md) [`00480cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480cf0.md) [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 7件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d30.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 86.55% / 新版 86.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738714",
      "incomplete_value": true,
      "site": "0073871c",
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
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00738680",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738768"
      ]
    ],
    [
      "unmatched:0073869c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007387bc"
      ]
    ],
    [
      "00738730",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007386ec"
      ]
    ]
  ],
  "added": [
    [
      "007386d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738768"
      ]
    ],
    [
      "007386f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007387bc"
      ]
    ],
    [
      "00738730",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738744"
      ]
    ]
  ]
}
~~~


~~~diff
- 007386c4 ["INT_ADD", "register:40f0:8", ["const:7386c4:8", "const:4:8"]]
- 007386c4 ["CALL", null, ["callee:00480c28:8"]]
+ 0073871c ["INT_ADD", "register:40f0:8", ["const:73871c:8", "const:4:8"]]
+ 0073871c ["CALL", null, ["callee:00480c28:8"]]
- 007385f4 ["INT_ADD", "register:40f0:8", ["const:7385f4:8", "const:4:8"]]
- 007385f4 ["CALL", null, ["callee:00480d88:8"]]
+ 0073864c ["INT_ADD", "register:40f0:8", ["const:73864c:8", "const:4:8"]]
+ 0073864c ["CALL", null, ["callee:00480d88:8"]]
- 00738600 ["INT_ADD", "register:40f0:8", ["const:738600:8", "const:4:8"]]
- 00738600 ["CALL", null, ["callee:004810d8:8"]]
+ 00738658 ["INT_ADD", "register:40f0:8", ["const:738658:8", "const:4:8"]]
+ 00738658 ["CALL", null, ["callee:004810d8:8"]]
~~~


<a id="compare-e0649b39990226dbe5a71e05dc3debf8"></a>

### [`007387ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/007387ac.md) → [`00738804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738804.md) FUN_00738804

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.95% / 新版 95.95%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007387d0",
      "incomplete_value": true,
      "site": "007387dc",
      "value": [
        "live",
        "register:4008:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073883c",
      "incomplete_value": true,
      "site": "00738844",
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
      "definition_site": "007388f8",
      "incomplete_value": true,
      "site": "007388fc",
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
                "const:70:8"
              ]
            ]
          ]
        ]
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
      "unmatched:007388c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007389bc"
      ]
    ],
    [
      "unmatched:00738a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738bc0"
      ]
    ],
    [
      "00738afc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00738acc"
      ]
    ]
  ],
  "added": [
    [
      "00738920",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007389bc"
      ]
    ],
    [
      "00738af4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738bc0"
      ]
    ],
    [
      "00738afc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00738b24"
      ]
    ]
  ]
}
~~~


~~~diff
- 007387dc ["INT_ADD", "register:40f0:8", ["const:7387dc:8", "const:4:8"]]
- 007387dc ["CALL", null, ["callee:00480338:8"]]
+ 00738834 ["INT_ADD", "register:40f0:8", ["const:738834:8", "const:4:8"]]
+ 00738834 ["CALL", null, ["callee:00480338:8"]]
- 007387ec ["INT_ADD", "register:40f0:8", ["const:7387ec:8", "const:4:8"]]
- 007387ec ["CALL", null, ["callee:00480784:8"]]
+ 00738844 ["INT_ADD", "register:40f0:8", ["const:738844:8", "const:4:8"]]
+ 00738844 ["CALL", null, ["callee:00480784:8"]]
- 007388a4 ["INT_ADD", "register:40f0:8", ["const:7388a4:8", "const:4:8"]]
- 007388a4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 007388fc ["INT_ADD", "register:40f0:8", ["const:7388fc:8", "const:4:8"]]
+ 007388fc ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-fd7802f138249d17cd02bbfde1173f8c"></a>

### [`00738b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/00738b88.md) → [`00738be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738be0.md) FUN_00738be0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00736c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00736/00736c1c.md) [`0073a304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a304.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00736c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736c74.md) [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.79% / 新版 88.79%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00738c08",
      "incomplete_value": false,
      "site": "00738c10",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738d84",
      "incomplete_value": true,
      "site": "00738d88",
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
                "register:40a0:8"
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
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738d80",
      "incomplete_value": true,
      "site": "00738d88",
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
                "const:30:8"
              ]
            ]
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
      "unmatched:00738bcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738c3c"
      ]
    ],
    [
      "unmatched:00738c3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738ca0"
      ]
    ],
    [
      "unmatched:00738cb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738cf0"
      ]
    ]
  ],
  "added": [
    [
      "00738c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738c3c"
      ]
    ],
    [
      "00738c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738ca0"
      ]
    ],
    [
      "00738d0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738cf0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00738c10 ["INT_ADD", "register:40f0:8", ["const:738c10:8", "const:4:8"]]
- 00738c10 ["CALL", null, ["callee:00c57f60:8"]]
+ 00738c68 ["INT_ADD", "register:40f0:8", ["const:738c68:8", "const:4:8"]]
+ 00738c68 ["CALL", null, ["callee:00c57f60:8"]]
+ 00738c10 ["COPY", "register:5020:8", ["register:4040:8"]]
+ 00738c10 ["COPY", "register:5028:8", ["const:0:8"]]
+ 00738c10 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00738c10 ["COPY", "register:5038:8", ["const:0:8"]]
- 00738cac ["CBRANCH", null, ["local:b41:8", "register:101:1"]]
+ 00738d04 ["CBRANCH", null, ["local:b38:8", "register:101:1"]]
~~~


<a id="compare-ee0249671361c9ffa21463c8abdb9c75"></a>

### [`00738d60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00738/00738d60.md) → [`00738db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738db8.md) FUN_00738db8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`00737c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737c74.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738eac",
      "incomplete_value": true,
      "site": "00738eb0",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738ea4",
      "incomplete_value": true,
      "site": "00738eb0",
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00739004",
      "incomplete_value": false,
      "site": "00739008",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00738fac",
      "incomplete_value": false,
      "site": "00738fb0",
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
            "const:d74:8"
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
      "unmatched:00738de0",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:00738e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738e9c"
      ]
    ],
    [
      "unmatched:00738efc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "00738e38",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00738e84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00738e9c"
      ]
    ],
    [
      "00738f54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ]
  ]
}
~~~


~~~diff
+ 00738e38 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
+ 00738e38 ["LOAD", "register:4068:8", ["const:1b1:8", "tmp:0:8"]]
+ 00738e3c ["INT_ADD", "tmp:0:8", ["register:4058:8", "const:8:8"]]
+ 00738e3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4068:8"]]
- 00738e58 ["INT_ADD", "register:40f0:8", ["const:738e58:8", "const:4:8"]]
- 00738e58 ["CALL", null, ["callee:005c17dc:8"]]
+ 00738eb0 ["INT_ADD", "register:40f0:8", ["const:738eb0:8", "const:4:8"]]
+ 00738eb0 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-ecefdf6fc6c6a0815fcc9dcbf0095435"></a>

### [`00739028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739028.md) → [`00739080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739080.md) FUN_00739080

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`00737c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737c74.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.07% / 新版 93.07%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00739114",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007390bc",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "00739114",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "unmatched:007391a0",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:007391a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00739244"
      ]
    ]
  ],
  "added": [
    [
      "00739114",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "007391f8",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00739200",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00739244"
      ]
    ]
  ]
}
~~~


~~~diff
- 00739064 ["INT_ADD", "register:40f0:8", ["const:739064:8", "const:4:8"]]
- 00739064 ["CALL", null, ["callee:00737ccc:8"]]
+ 007390bc ["INT_ADD", "register:40f0:8", ["const:7390bc:8", "const:4:8"]]
+ 007390bc ["CALL", null, ["callee:00737ccc:8"]]
- 007390bc ["INT_ADD", "register:40f0:8", ["const:7390bc:8", "const:4:8"]]
- 007390bc ["CALL", null, ["ram:71bed8:8"]]
+ 00739114 ["INT_ADD", "register:40f0:8", ["const:739114:8", "const:4:8"]]
+ 00739114 ["CALL", null, ["ram:71bf30:8"]]
- 0073908c ["INT_ADD", "register:40f0:8", ["const:73908c:8", "const:4:8"]]
- 0073908c ["CALL", null, ["callee:0043bbe4:8"]]
+ 007390e4 ["INT_ADD", "register:40f0:8", ["const:7390e4:8", "const:4:8"]]
+ 007390e4 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-c114a6a0701e690f471552f29932acb1"></a>

### [`007391f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/007391f0.md) → [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) FUN_00739248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007728e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00772/007728e0.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0073b428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b428.md) [`0073b4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b4a0.md) [`0073b534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b534.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 2件 [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0073b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b480.md) [`0073b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b4f8.md) [`0073b58c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b58c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007392f0",
      "incomplete_value": true,
      "site": "00739300",
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
      "definition_site": "007392f4",
      "incomplete_value": true,
      "site": "00739300",
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
      "definition_site": "007392fc",
      "incomplete_value": true,
      "site": "00739300",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "old": {
      "definition_site": "007392a4",
      "incomplete_value": true,
      "site": "007392a8",
      "value": [
        "live",
        "register:40c0:8"
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
      "00739348",
      "PARAM",
      [
        "storage",
        "002b3d74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00739348",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007392a8 ["INT_ADD", "register:40f0:8", ["const:7392a8:8", "const:4:8"]]
- 007392a8 ["CALL", null, ["callee:0073b58c:8"]]
+ 00739300 ["INT_ADD", "register:40f0:8", ["const:739300:8", "const:4:8"]]
+ 00739300 ["CALL", null, ["callee:0073b58c:8"]]
- 007392f4 ["INT_ADD", "register:40f0:8", ["const:7392f4:8", "const:4:8"]]
- 007392f4 ["CALL", null, ["callee:00442970:8"]]
+ 0073934c ["INT_ADD", "register:40f0:8", ["const:73934c:8", "const:4:8"]]
+ 0073934c ["CALL", null, ["callee:00442970:8"]]
- 00739284 ["INT_ADD", "register:40f0:8", ["const:739284:8", "const:4:8"]]
- 00739284 ["CALL", null, ["callee:00c57f60:8"]]
+ 007392dc ["INT_ADD", "register:40f0:8", ["const:7392dc:8", "const:4:8"]]
+ 007392dc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-99f8380fcdd0007986791ef05e472d98"></a>

### [`00739344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739344.md) → [`0073939c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/0073939c.md) FUN_0073939c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007728e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00772/007728e0.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00739370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739370.md)
- 新版 呼出元 2件 [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`007393c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007393c8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007393c0",
      "incomplete_value": false,
      "site": "007393c4",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00739368",
      "incomplete_value": false,
      "site": "0073936c",
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
            "const:d74:8"
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
      "007393c0",
      "PARAM",
      [
        "storage",
        "002b3d74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007393c0",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073936c ["INT_ADD", "register:40f0:8", ["const:73936c:8", "const:4:8"]]
- 0073936c ["CALL", null, ["callee:00442970:8"]]
+ 007393c4 ["INT_ADD", "register:40f0:8", ["const:7393c4:8", "const:4:8"]]
+ 007393c4 ["CALL", null, ["callee:00442970:8"]]
- 00739368 ["COPY", "tmp:0:8", ["const:d74:8"]]
- 00739368 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00739368 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00739368 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007393c0 ["COPY", "tmp:0:8", ["const:da5:8"]]
+ 007393c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007393c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007393c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-323b320a35229861a26a044b61fb2662"></a>

### [`00739370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739370.md) → [`007393c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007393c8.md) FUN_007393c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00739344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739344.md) · 呼出先 1件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 1件 [`0073939c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/0073939c.md) · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.22% / 新版 79.22%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_condition` 5件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073946c",
      "incomplete_value": true,
      "site": "00739474",
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00739470",
      "incomplete_value": true,
      "site": "00739474",
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
                "const:28:8"
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
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "007394e0",
      "incomplete_value": true,
      "site": "007394f8",
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
      "unmatched:00739370",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00739374",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00739378",
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
      "007393c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007393cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007393d0",
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
- 0073941c ["INT_ADD", "register:40f0:8", ["const:73941c:8", "const:4:8"]]
- 0073941c ["CALL", null, ["callee:005c17dc:8"]]
+ 00739474 ["INT_ADD", "register:40f0:8", ["const:739474:8", "const:4:8"]]
+ 00739474 ["CALL", null, ["callee:005c17dc:8"]]
- 00739474 ["INT_ADD", "register:40f0:8", ["const:739474:8", "const:4:8"]]
- 00739474 ["CALL", null, ["callee:005c17dc:8"]]
+ 007394cc ["INT_ADD", "register:40f0:8", ["const:7394cc:8", "const:4:8"]]
+ 007394cc ["CALL", null, ["callee:005c17dc:8"]]
- 00739370 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00739370 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00739370 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00739370 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-c34202418e69d44ad4890eb0de166b9d"></a>

### [`007394a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/007394a4.md) → [`007394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007394fc.md) FUN_007394fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) · 呼出先 24件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00597e38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e38.md) [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) · 呼出先 24件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00597e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e78.md) [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 99.13% / 新版 99.13%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00739724",
      "incomplete_value": true,
      "site": "00739728",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00739800"
      ],
      [
        "FALL_THROUGH",
        "00739858"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00739864",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "007397fc",
      "incomplete_value": true,
      "site": "0073980c",
      "value": [
        "INT_LESSEQUAL",
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
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00739800"
      ],
      [
        "FALL_THROUGH",
        "00739858"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00739864",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "007397fc",
      "incomplete_value": true,
      "site": "0073980c",
      "value": [
        "INT_LESSEQUAL",
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
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 50,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007395fc",
      "READ",
      [
        "storage",
        "002c4308",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007395f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007396b8"
      ]
    ],
    [
      "unmatched:00739734",
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
      "007395fc",
      "READ",
      [
        "storage",
        "002c4348",
        null,
        "undefined8"
      ]
    ],
    [
      "00739650",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007396b8"
      ]
    ],
    [
      "0073978c",
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
- 00739728 ["INT_ADD", "register:40f0:8", ["const:739728:8", "const:4:8"]]
- 00739728 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00739780 ["INT_ADD", "register:40f0:8", ["const:739780:8", "const:4:8"]]
+ 00739780 ["CALL", null, ["callee:0043bbe4:8"]]
- 007394e8 ["INT_ADD", "register:40f0:8", ["const:7394e8:8", "const:4:8"]]
- 007394e8 ["CALL", null, ["callee:0048cec4:8"]]
+ 00739540 ["INT_ADD", "register:40f0:8", ["const:739540:8", "const:4:8"]]
+ 00739540 ["CALL", null, ["callee:0048cec4:8"]]
- 00739504 ["INT_ADD", "register:40f0:8", ["const:739504:8", "const:4:8"]]
- 00739504 ["CALL", null, ["callee:00727d74:8"]]
+ 0073955c ["INT_ADD", "register:40f0:8", ["const:73955c:8", "const:4:8"]]
+ 0073955c ["CALL", null, ["callee:00727d74:8"]]
~~~


<a id="compare-4362779a0b22d8d6962234ef69217a8f"></a>

### [`00739e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739e44.md) → [`00739e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739e9c.md) FUN_00739e9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) · 呼出先 1件 [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md)
- 新版 呼出元 1件 [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 1件 [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00739e4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00739e4c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 00739e4c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 00739e4c ["CBRANCH", null, ["local:b4:8", "tmp:2:1"]]
+ 00739ea4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00739ea4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 00739ea4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 00739ea4 ["CBRANCH", null, ["local:b5:8", "tmp:2:1"]]
- 00739e60 ["INT_ADD", "register:40f0:8", ["const:739e60:8", "const:4:8"]]
- 00739e60 ["CALL", null, ["callee:00727d74:8"]]
+ 00739eb8 ["INT_ADD", "register:40f0:8", ["const:739eb8:8", "const:4:8"]]
+ 00739eb8 ["CALL", null, ["callee:00727d74:8"]]
- 00739e68 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00739e68 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00739ec0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00739ec0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-448e8951d810609694b3a20bca755fdc"></a>

### [`00739e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739e84.md) → [`00739edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739edc.md) FUN_00739edc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00733708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00733/00733708.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00739f34",
      "incomplete_value": true,
      "site": "00739f38",
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
            "register:40b0:8"
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
      "definition_site": "00739f30",
      "incomplete_value": true,
      "site": "00739f38",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00739e84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00739e88",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00739e8c",
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
      "00739edc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00739ee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00739ee4",
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
- 00739ee0 ["INT_ADD", "register:40f0:8", ["const:739ee0:8", "const:4:8"]]
- 00739ee0 ["CALL", null, ["callee:00733760:8"]]
+ 00739f38 ["INT_ADD", "register:40f0:8", ["const:739f38:8", "const:4:8"]]
+ 00739f38 ["CALL", null, ["callee:00733760:8"]]
- 00739e84 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00739e84 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
- 00739e88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00739e88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00739e88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 00739e88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ca75755ac6ee4881c46b5b271cba9d04"></a>

### [`00739f3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739f3c.md) → [`00739f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739f94.md) FUN_00739f94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00737e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737e8c.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0073a068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a068.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00737ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ee4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0073a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a0c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00739fdc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0073a014"
      ]
    ],
    [
      "unmatched:0073a018",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073a020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0073a0bc"
      ]
    ]
  ],
  "added": [
    [
      "00739fdc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0073a06c"
      ]
    ],
    [
      "0073a070",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0073a078",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0073a0bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00739f74 ["INT_ADD", "register:40f0:8", ["const:739f74:8", "const:4:8"]]
- 00739f74 ["CALL", null, ["callee:0073a0c0:8"]]
+ 00739fcc ["INT_ADD", "register:40f0:8", ["const:739fcc:8", "const:4:8"]]
+ 00739fcc ["CALL", null, ["callee:0073a0c0:8"]]
- 00739f84 ["BRANCH", null, ["local:b8:8"]]
+ 00739fdc ["BRANCH", null, ["local:b9:8"]]
- 00739f94 ["INT_ADD", "register:40f0:8", ["const:739f94:8", "const:4:8"]]
- 00739f94 ["CALL", null, ["callee:00c57f60:8"]]
+ 00739fec ["INT_ADD", "register:40f0:8", ["const:739fec:8", "const:4:8"]]
+ 00739fec ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-966416cc9ec5faa3e66acc8f78045b59"></a>

### [`0073a068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a068.md) → [`0073a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a0c0.md) FUN_0073a0c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00739f3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/00739f3c.md) · 呼出先 2件 [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00739f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739f94.md) · 呼出先 2件 [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.25% / 新版 77.25%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0073a06c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073a070",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073a074",
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
      "0073a0c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0073a0c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0073a0cc",
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
- 0073a068 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 0073a06c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0073a06c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0073a06c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0073a06c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0073a070 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 0073a070 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 0073a070 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0073a070 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-01ed84044b61dbf7ada235dbd0b2f981"></a>

### [`0073a354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a354.md) → [`0073a3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a3ac.md) FUN_0073a3ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0073417c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00734/0073417c.md) [`0073a354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a354.md) [`008ade98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ade98.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`007341d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007341d4.md) [`0073a3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a3ac.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.66% / 新版 87.66%

優先判定に残った影響 `call_argument_candidate` 22件, `store_condition` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073a508",
      "incomplete_value": false,
      "site": "0073a510",
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
    "old": {
      "definition_site": "0073a4b0",
      "incomplete_value": false,
      "site": "0073a4b8",
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
            "const:f53:8"
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
      "definition_site": "0073a5c4",
      "incomplete_value": false,
      "site": "0073a5cc",
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
    "old": {
      "definition_site": "0073a56c",
      "incomplete_value": false,
      "site": "0073a574",
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
            "const:de7:8"
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
      "definition_site": "0073a5dc",
      "incomplete_value": false,
      "site": "0073a5e8",
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
    "old": {
      "definition_site": "0073a584",
      "incomplete_value": false,
      "site": "0073a590",
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
            "const:ee9:8"
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
      "unmatched:0073a358",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073a35c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073a360",
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
      "0073a3b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0073a3b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0073a3b8",
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
+ 0073a3c8 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 0073a3c8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 0073a3c8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 0073a3c8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 0073a4b8 ["INT_ADD", "register:40f0:8", ["const:73a4b8:8", "const:4:8"]]
- 0073a4b8 ["CALL", null, ["callee:00441ed4:8"]]
+ 0073a510 ["INT_ADD", "register:40f0:8", ["const:73a510:8", "const:4:8"]]
+ 0073a510 ["CALL", null, ["callee:00441ed4:8"]]
- 0073a538 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0073a538 ["CBRANCH", null, ["local:b142:8", "tmp:0:1"]]
+ 0073a590 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0073a590 ["CBRANCH", null, ["local:b143:8", "tmp:0:1"]]
~~~


<a id="compare-3efb1db7c3b6e5c470dcd65b2f4e0013"></a>

### [`0073af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073af20.md) → [`0073af78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af78.md) FUN_0073af78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007350f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00735/007350f4.md) [`00737c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737c74.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`0073514c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073514c.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073af84",
      "incomplete_value": false,
      "site": "0073af88",
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
    "old": {
      "definition_site": "0073af2c",
      "incomplete_value": false,
      "site": "0073af30",
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
            "const:f4c:8"
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
      "0073af84",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073af84",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073af30 ["INT_ADD", "register:40f0:8", ["const:73af30:8", "const:4:8"]]
- 0073af30 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0073af88 ["INT_ADD", "register:40f0:8", ["const:73af88:8", "const:4:8"]]
+ 0073af88 ["CALL", null, ["callee:0043b7b8:8"]]
- 0073af2c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0073af2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073af2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073af2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073af84 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0073af84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073af84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073af84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-aeb80fd2f4b84f9b563a44f9e3a1b94e"></a>

### [`0073af34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073af34.md) → [`0073af8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af8c.md) FUN_0073af8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 9件 [`007343c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00734/007343c8.md) [`00735964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00735/00735964.md) [`00735cdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00735/00735cdc.md) [`0073601c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00736/0073601c.md) [`0073734c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/0073734c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 9件 [`00734420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/00734420.md) [`007359bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/007359bc.md) [`00735d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735d34.md) [`00736074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736074.md) [`007373a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/007373a4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073af98",
      "incomplete_value": false,
      "site": "0073af9c",
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
    "old": {
      "definition_site": "0073af40",
      "incomplete_value": false,
      "site": "0073af44",
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
            "const:f4c:8"
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
      "0073af98",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073af98",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073af44 ["INT_ADD", "register:40f0:8", ["const:73af44:8", "const:4:8"]]
- 0073af44 ["CALL", null, ["callee:00442970:8"]]
+ 0073af9c ["INT_ADD", "register:40f0:8", ["const:73af9c:8", "const:4:8"]]
+ 0073af9c ["CALL", null, ["callee:00442970:8"]]
- 0073af40 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0073af40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073af40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073af40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073af98 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0073af98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073af98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073af98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dbf812b08f9a64ff7c1b26ce71802fb6"></a>

### [`0073af48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073af48.md) → [`0073afa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073afa0.md) FUN_0073afa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00735744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00735/00735744.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0073579c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073579c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073afac",
      "incomplete_value": false,
      "site": "0073afb0",
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
    "old": {
      "definition_site": "0073af54",
      "incomplete_value": false,
      "site": "0073af58",
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
            "const:f4c:8"
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
      "0073afac",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073afac",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073af58 ["INT_ADD", "register:40f0:8", ["const:73af58:8", "const:4:8"]]
- 0073af58 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0073afb0 ["INT_ADD", "register:40f0:8", ["const:73afb0:8", "const:4:8"]]
+ 0073afb0 ["CALL", null, ["callee:0043b7b8:8"]]
- 0073af54 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0073af54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073af54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073af54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073afac ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0073afac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073afac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073afac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bb9bb7314a4fb0cadc49860a3aaaf757"></a>

### [`0073b428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b428.md) → [`0073b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b480.md) FUN_0073b480

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007391f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00739/007391f0.md) [`0073b034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b034.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) [`0073b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b08c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b48c",
      "incomplete_value": false,
      "site": "0073b490",
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
    "old": {
      "definition_site": "0073b434",
      "incomplete_value": false,
      "site": "0073b438",
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
            "const:f4c:8"
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
      "0073b48c",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073b48c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073b438 ["INT_ADD", "register:40f0:8", ["const:73b438:8", "const:4:8"]]
- 0073b438 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0073b490 ["INT_ADD", "register:40f0:8", ["const:73b490:8", "const:4:8"]]
+ 0073b490 ["CALL", null, ["callee:0043b7b8:8"]]
- 0073b434 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0073b434 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073b434 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073b434 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073b48c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0073b48c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b48c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b48c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f0aaeb54e61475e4f75fff67d60e8004"></a>

### [`0073b66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b66c.md) → [`0073b6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b6c4.md) _INIT_127

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b810",
      "incomplete_value": true,
      "site": "0073b824",
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
      "definition_site": "0073b818",
      "incomplete_value": true,
      "site": "0073b824",
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
      "definition_site": "0073b8d8",
      "incomplete_value": true,
      "site": "0073b8dc",
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
                "const:20:8"
              ]
            ]
          ]
        ]
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
      "unmatched:0073b69c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073b6a8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0073b6c4",
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
      "0073b6f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0073b700",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0073b71c",
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
- 0073b7cc ["INT_ADD", "register:40f0:8", ["const:73b7cc:8", "const:4:8"]]
- 0073b7cc ["CALL", null, ["callee:0043b838:8"]]
+ 0073b824 ["INT_ADD", "register:40f0:8", ["const:73b824:8", "const:4:8"]]
+ 0073b824 ["CALL", null, ["callee:0043b838:8"]]
- 0073b884 ["INT_ADD", "register:40f0:8", ["const:73b884:8", "const:4:8"]]
- 0073b884 ["CALL", null, ["callee:00c57f80:8"]]
+ 0073b8dc ["INT_ADD", "register:40f0:8", ["const:73b8dc:8", "const:4:8"]]
+ 0073b8dc ["CALL", null, ["callee:00c57f80:8"]]
- 0073b8a0 ["INT_ADD", "register:40f0:8", ["const:73b8a0:8", "const:4:8"]]
- 0073b8a0 ["CALL", null, ["callee:00c57f00:8"]]
+ 0073b8f8 ["INT_ADD", "register:40f0:8", ["const:73b8f8:8", "const:4:8"]]
+ 0073b8f8 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-961405929d417d646047ef136b2c3802"></a>

### [`0073b9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b9fc.md) → [`0073ba54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073ba54.md) FUN_0073ba54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) · 呼出先 12件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`0067e19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e19c.md) [`008636dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00863/008636dc.md) [`00864538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864538.md)
- 新版 呼出元 1件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) [`00863734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00863/00863734.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 31.61% / 新版 31.61%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 6件, `unresolved_branch_alignment` 70件, `unresolved_call_alignment` 76件, `unresolved_store_alignment` 108件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073c30c",
      "incomplete_value": true,
      "site": "0073c30c",
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
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073c2b4",
      "incomplete_value": true,
      "site": "0073c2b4",
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
                "const:557:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0073c324",
      "incomplete_value": true,
      "site": "0073c324",
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
                "const:bc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073c2cc",
      "incomplete_value": true,
      "site": "0073c2cc",
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
                "const:c1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 106,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073c328",
      "incomplete_value": true,
      "site": "0073c328",
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
      "definition_site": "0073c2d0",
      "incomplete_value": true,
      "site": "0073c2d0",
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
    "ordinal": 107,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0073ba28",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073ba2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0067e1dc"
      ]
    ],
    [
      "unmatched:0073ba3c",
      "DATA",
      [
        "storage",
        "00c77a78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0073ba80",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "0073ba84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0067e1dc"
      ]
    ],
    [
      "0073ba94",
      "DATA",
      [
        "storage",
        "00c77b48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073bac4 ["INT_ADD", "register:40f0:8", ["const:73bac4:8", "const:4:8"]]
- 0073bac4 ["CALL", null, ["callee:006333b4:8"]]
+ 0073bb1c ["INT_ADD", "register:40f0:8", ["const:73bb1c:8", "const:4:8"]]
+ 0073bb1c ["CALL", null, ["callee:006333b4:8"]]
+ 0073bac4 ["COPY", "tmp:0:4", ["register:4040:4"]]
+ 0073bac4 ["INT_ADD", "tmp:1:8", ["register:8:8", "const:20:8"]]
+ 0073bac4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0073bb1c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 0073bb1c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0073bb1c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-1c9caf1c0cbcad19017b6b4cd70150e6"></a>

### [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) → [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) FUN_0073c990

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007415d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415d0.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 47件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md)
- 新版 呼出元 2件 [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 47件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.90% / 新版 88.90%

優先判定に残った影響 `call_argument_candidate` 15件, `call_target` 2件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0073d1ac",
      "incomplete_value": false,
      "site": "0073d1b0",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073d154",
      "incomplete_value": false,
      "site": "0073d158",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "ordinal": 118,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073d2bc",
      "incomplete_value": true,
      "site": "0073d2cc",
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
    "old": {
      "definition_site": "0073d264",
      "incomplete_value": true,
      "site": "0073d274",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 130,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073ca20",
      "incomplete_value": false,
      "site": "0073ca34",
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
    "old": {
      "definition_site": "0073c9c8",
      "incomplete_value": false,
      "site": "0073c9dc",
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
            "const:e58:8"
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
      "unmatched:0073c980",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0073c984",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0073c988",
      "WRITE",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0073c9d8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0073c9dc",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "0073c9e0",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073c9dc ["INT_ADD", "register:40f0:8", ["const:73c9dc:8", "const:4:8"]]
- 0073c9dc ["CALL", null, ["callee:00c586e0:8"]]
+ 0073ca34 ["INT_ADD", "register:40f0:8", ["const:73ca34:8", "const:4:8"]]
+ 0073ca34 ["CALL", null, ["callee:00c586e0:8"]]
+ 0073c9dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 0073c9dc ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 0073ccc0 ["INT_ADD", "register:40f0:8", ["const:73ccc0:8", "const:4:8"]]
- 0073ccc0 ["CALL", null, ["callee:0074107c:8"]]
+ 0073cd18 ["INT_ADD", "register:40f0:8", ["const:73cd18:8", "const:4:8"]]
+ 0073cd18 ["CALL", null, ["callee:0074107c:8"]]
~~~


<a id="compare-939c3bba221739fc7985a63d6a40562f"></a>

### [`0073d7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073d/0073d7a4.md) → [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) FUN_0073d7fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 46件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 46件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.34% / 新版 78.34%

優先判定に残った影響 `call_argument_candidate` 17件, `call_target` 7件, `store_condition` 7件, `store_value` 1件, `unresolved_branch_alignment` 33件, `unresolved_call_alignment` 32件, `unresolved_store_alignment` 33件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073d8ac",
      "incomplete_value": true,
      "site": "0073d8b0",
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
      "definition_site": "0073d854",
      "incomplete_value": true,
      "site": "0073d858",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0073dd58",
      "incomplete_value": true,
      "site": "0073dd58",
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
      "definition_site": "0073dd00",
      "incomplete_value": true,
      "site": "0073dd00",
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
    "ordinal": 63,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073d850",
      "incomplete_value": false,
      "site": "0073d860",
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
      "0073d83c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0073d7f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0073d86c"
      ]
    ],
    [
      "unmatched:0073d7f8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0073d83c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0073d848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0073d86c"
      ]
    ],
    [
      "0073d850",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073d808 ["INT_ADD", "register:40f0:8", ["const:73d808:8", "const:4:8"]]
- 0073d808 ["CALL", null, ["callee:00c586e0:8"]]
+ 0073d860 ["INT_ADD", "register:40f0:8", ["const:73d860:8", "const:4:8"]]
+ 0073d860 ["CALL", null, ["callee:00c586e0:8"]]
+ 0073d858 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 0073d858 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 0073d858 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 0073d858 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 0073da70 ["INT_ADD", "register:40f0:8", ["const:73da70:8", "const:4:8"]]
- 0073da70 ["CALL", null, ["ram:47acf4:8"]]
+ 0073dac8 ["INT_ADD", "register:40f0:8", ["const:73dac8:8", "const:4:8"]]
+ 0073dac8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-2c30d81eb13350ebf46d4df25ddbbd6d"></a>

### [`0073ee34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073e/0073ee34.md) → [`0073ee8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073e/0073ee8c.md) FUN_0073ee8c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 41件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 41件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.64% / 新版 79.64%

優先判定に残った影響 `call_argument_candidate` 59件, `store_condition` 5件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 14件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 32件

アドレスに依存する影響 `branch_value` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073f830",
      "incomplete_value": true,
      "site": "0073f838",
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
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:1e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073f7d8",
      "incomplete_value": true,
      "site": "0073f7e0",
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
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:1a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 55,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0073eee8",
      "incomplete_value": true,
      "site": "0073eee8",
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
      "definition_site": "0073ee90",
      "incomplete_value": true,
      "site": "0073ee90",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0073eef8",
      "incomplete_value": true,
      "site": "0073eef8",
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
      "definition_site": "0073eea0",
      "incomplete_value": true,
      "site": "0073eea0",
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
      "unmatched:0073ee7c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0073ee80",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "0073eee4",
      "READ",
      [
        "storage",
        "00ca4f30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0073eed4",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "0073eed8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0073eee4",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073eeb8 ["INT_ADD", "register:40f0:8", ["const:73eeb8:8", "const:4:8"]]
- 0073eeb8 ["CALL", null, ["callee:00c586e0:8"]]
+ 0073ef10 ["INT_ADD", "register:40f0:8", ["const:73ef10:8", "const:4:8"]]
+ 0073ef10 ["CALL", null, ["callee:00c586e0:8"]]
- 0073eee8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0073eee8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0073eee8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0073eee8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 0073eef8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:38:8"]]
- 0073eef8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
~~~


<a id="compare-f923295bee996a09f6e70c71d361dbf4"></a>

### [`00740e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00740/00740e68.md) → [`00740ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00740/00740ec0.md) FUN_00740ec0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00741000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741000.md) · 呼出先 4件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00741058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741058.md) · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.29% / 新版 85.29%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741010",
      "incomplete_value": false,
      "site": "00741014",
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
    "old": {
      "definition_site": "00740fb8",
      "incomplete_value": false,
      "site": "00740fbc",
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
            "const:810:8"
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
    "new": null,
    "old": {
      "definition_site": "00740f7c",
      "incomplete_value": false,
      "site": "00740f80",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00740f78",
      "incomplete_value": true,
      "site": "00740f80",
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
      "unmatched:00740e88",
      "DATA",
      [
        "storage",
        "00c77a78",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00740e8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00740f10"
      ]
    ],
    [
      "unmatched:00740e98",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ]
  ],
  "added": [
    [
      "00740ee0",
      "DATA",
      [
        "storage",
        "00c77b48",
        null,
        "pointer"
      ]
    ],
    [
      "00740ee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00740f10"
      ]
    ],
    [
      "00740ef0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00740f28 ["INT_ADD", "register:40f0:8", ["const:740f28:8", "const:4:8"]]
- 00740f28 ["CALL", null, ["callee:00c53da0:8"]]
+ 00740f80 ["INT_ADD", "register:40f0:8", ["const:740f80:8", "const:4:8"]]
+ 00740f80 ["CALL", null, ["callee:00c53da0:8"]]
- 00740f80 ["INT_ADD", "register:40f0:8", ["const:740f80:8", "const:4:8"]]
- 00740f80 ["CALL", null, ["callee:00c53da0:8"]]
+ 00740fd8 ["INT_ADD", "register:40f0:8", ["const:740fd8:8", "const:4:8"]]
+ 00740fd8 ["CALL", null, ["callee:00c53da0:8"]]
- 00740f9c ["INT_ADD", "register:40f0:8", ["const:740f9c:8", "const:4:8"]]
- 00740f9c ["CALL", null, ["callee:00c57f50:8"]]
+ 00740ff4 ["INT_ADD", "register:40f0:8", ["const:740ff4:8", "const:4:8"]]
+ 00740ff4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-bfedb86ae34ba35f6dda0673836d4112"></a>

### [`00741024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741024.md) → [`0074107c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074107c.md) FUN_0074107c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) [`0073d7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073d/0073d7a4.md) [`0073ee34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073e/0073ee34.md) [`007415d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415d0.md) [`00742038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/00742038.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 8件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) [`0073ee8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073e/0073ee8c.md) [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) [`00742090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742090.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.59% / 新版 86.59%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007410e0",
      "incomplete_value": true,
      "site": "007410e4",
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
            "const:34:8"
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
      "definition_site": "00741110",
      "incomplete_value": true,
      "site": "00741118",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00741114",
      "incomplete_value": true,
      "site": "00741118",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00741054",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00741064",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007410f8"
      ]
    ],
    [
      "unmatched:00741104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00741168"
      ]
    ]
  ],
  "added": [
    [
      "007410ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007410bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007410f8"
      ]
    ],
    [
      "0074115c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00741168"
      ]
    ]
  ]
}
~~~


~~~diff
- 007410e4 ["INT_ADD", "register:40f0:8", ["const:7410e4:8", "const:4:8"]]
- 007410e4 ["CALL", null, ["callee:005e81d8:8"]]
+ 0074113c ["INT_ADD", "register:40f0:8", ["const:74113c:8", "const:4:8"]]
+ 0074113c ["CALL", null, ["callee:005e81d8:8"]]
- 00741118 ["INT_ADD", "register:40f0:8", ["const:741118:8", "const:4:8"]]
- 00741118 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00741170 ["INT_ADD", "register:40f0:8", ["const:741170:8", "const:4:8"]]
+ 00741170 ["CALL", null, ["callee:0043bbe4:8"]]
- 0074104c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 0074104c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4f443f5008b7a909ee59b0582eb3775e"></a>

### [`007411e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007411e4.md) → [`0074123c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074123c.md) FUN_0074123c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741260",
      "incomplete_value": false,
      "site": "00741260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741208",
      "incomplete_value": false,
      "site": "00741208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "00741260",
      "DATA",
      [
        "storage",
        "00c77ab0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741260",
      "DATA",
      [
        "storage",
        "00c77b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007411f8 ["INT_ADD", "register:40f0:8", ["const:7411f8:8", "const:4:8"]]
- 007411f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00741250 ["INT_ADD", "register:40f0:8", ["const:741250:8", "const:4:8"]]
+ 00741250 ["CALL", null, ["callee:00c57f60:8"]]
- 00741204 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 00741204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074125c ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 0074125c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074125c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074125c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-670fd3a5604f5e5cb94bb00b97133694"></a>

### [`00741218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741218.md) → [`00741270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741270.md) FUN_00741270

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
      "definition_site": "0074127c",
      "incomplete_value": false,
      "site": "0074127c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741224",
      "incomplete_value": false,
      "site": "00741224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "0074127c",
      "DATA",
      [
        "storage",
        "00c77ab0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074127c",
      "DATA",
      [
        "storage",
        "00c77b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741220 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 00741220 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741220 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741220 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741278 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 00741278 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741278 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741278 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-883c1c3b0d48d50bd8bc18a2f494b2fc"></a>

### [`00741278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741278.md) → [`007412d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007412d0.md) FUN_007412d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0063674c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00636/0063674c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007412e0",
      "incomplete_value": true,
      "site": "007412e4",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:4:8"
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
      "definition_site": "007413a8",
      "incomplete_value": false,
      "site": "007413ac",
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
      "definition_site": "007413a4",
      "incomplete_value": true,
      "site": "007413ac",
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
      "unmatched:00741340",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007413d0"
      ]
    ]
  ],
  "added": [
    [
      "00741398",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007413d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 007412e4 ["INT_ADD", "register:40f0:8", ["const:7412e4:8", "const:4:8"]]
- 007412e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0074133c ["INT_ADD", "register:40f0:8", ["const:74133c:8", "const:4:8"]]
+ 0074133c ["CALL", null, ["callee:00c57f60:8"]]
- 00741354 ["INT_ADD", "register:40f0:8", ["const:741354:8", "const:4:8"]]
- 00741354 ["CALL", null, ["callee:00c53da0:8"]]
+ 007413ac ["INT_ADD", "register:40f0:8", ["const:7413ac:8", "const:4:8"]]
+ 007413ac ["CALL", null, ["callee:00c53da0:8"]]
- 007412a8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 007412a8 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 00741300 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00741300 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
~~~


<a id="compare-42aba7a46d5ba8a1b214d07d3f16c110"></a>

### [`007413bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007413bc.md) → [`00741414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741414.md) FUN_00741414

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007413e0",
      "DATA",
      [
        "storage",
        "00c77b30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007413e4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007413e8",
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
      "00741438",
      "DATA",
      [
        "storage",
        "00c77c00",
        null,
        "undefined *"
      ]
    ],
    [
      "0074143c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00741440",
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
- 007413d0 ["INT_ADD", "register:40f0:8", ["const:7413d0:8", "const:4:8"]]
- 007413d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00741428 ["INT_ADD", "register:40f0:8", ["const:741428:8", "const:4:8"]]
+ 00741428 ["CALL", null, ["callee:00c57f60:8"]]
- 007413dc ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007413dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007413dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007413dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007413e0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007413e0 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 007413e0 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 007413e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-809eb153f03f9497ffe9500e57197ad7"></a>

### [`007413f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007413f0.md) → [`00741448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741448.md) FUN_00741448

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
      "definition_site": "00741454",
      "incomplete_value": false,
      "site": "00741454",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007413fc",
      "incomplete_value": false,
      "site": "007413fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:b30:8"
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
      "00741454",
      "DATA",
      [
        "storage",
        "00c77b30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741454",
      "DATA",
      [
        "storage",
        "00c77c00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007413f8 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007413f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007413f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007413f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741450 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 00741450 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741450 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741450 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f3948682214e020d98844be315c399a3"></a>

### [`0074140c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/0074140c.md) → [`00741464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741464.md) FUN_00741464

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007415c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415c8.md) [`007415cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415cc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00741620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741620.md) [`00741624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741624.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007414e0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00741488",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007414f4",
      "incomplete_value": true,
      "site": "0074150c",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00741508",
      "incomplete_value": false,
      "site": "0074150c",
      "value": [
        "leaf",
        "const:3:8"
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
      "unmatched:00741424",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00741444",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00741460",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007415a8"
      ]
    ]
  ],
  "added": [
    [
      "0074147c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "0074149c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007414b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007415a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741488 ["INT_ADD", "register:40f0:8", ["const:741488:8", "const:4:8"]]
- 00741488 ["CALL", null, ["ram:47acf4:8"]]
+ 007414e0 ["INT_ADD", "register:40f0:8", ["const:7414e0:8", "const:4:8"]]
+ 007414e0 ["CALL", null, ["ram:47ad34:8"]]
- 007414b4 ["INT_ADD", "register:40f0:8", ["const:7414b4:8", "const:4:8"]]
- 007414b4 ["CALL", null, ["callee:00888480:8"]]
+ 0074150c ["INT_ADD", "register:40f0:8", ["const:74150c:8", "const:4:8"]]
+ 0074150c ["CALL", null, ["callee:00888480:8"]]
- 007414e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007414e0 ["INT_ADD", "register:40f0:8", ["const:7414e0:8", "const:4:8"]]
- 007414e0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-be8dc07c49b6d4d43e508c1f61490d91"></a>

### [`00741580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741580.md) → [`007415d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007415d8.md) FUN_007415d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007415fc",
      "incomplete_value": false,
      "site": "007415fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007415a4",
      "incomplete_value": false,
      "site": "007415a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "007415fc",
      "DATA",
      [
        "storage",
        "00c77ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007415fc",
      "DATA",
      [
        "storage",
        "00c77c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741594 ["INT_ADD", "register:40f0:8", ["const:741594:8", "const:4:8"]]
- 00741594 ["CALL", null, ["callee:00c57f60:8"]]
+ 007415ec ["INT_ADD", "register:40f0:8", ["const:7415ec:8", "const:4:8"]]
+ 007415ec ["CALL", null, ["callee:00c57f60:8"]]
- 007415a0 ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 007415a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007415a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007415a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007415f8 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 007415f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007415f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007415f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0828665285a1c21ced0528e5e97e764"></a>

### [`007415b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415b4.md) → [`0074160c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074160c.md) FUN_0074160c

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
      "definition_site": "00741618",
      "incomplete_value": false,
      "site": "00741618",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007415c0",
      "incomplete_value": false,
      "site": "007415c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "00741618",
      "DATA",
      [
        "storage",
        "00c77ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741618",
      "DATA",
      [
        "storage",
        "00c77c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007415bc ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 007415bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007415bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007415bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741614 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 00741614 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741614 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741614 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-848445c6c27c5552e6c477a79d648e51"></a>

### [`007415d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/007415d0.md) → [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) FUN_00741628

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.15% / 新版 86.15%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00741690",
      "incomplete_value": false,
      "site": "007416a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2e1000:8"
          ],
          [
            "leaf",
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741638",
      "incomplete_value": false,
      "site": "0074164c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2e1000:8"
          ],
          [
            "leaf",
            "const:f58:8"
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
      "definition_site": "00741694",
      "incomplete_value": false,
      "site": "007416a4",
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
    "old": {
      "definition_site": "0074163c",
      "incomplete_value": false,
      "site": "0074164c",
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
            "const:6f5:8"
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
      "definition_site": "007416fc",
      "incomplete_value": true,
      "site": "00741710",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b0:4"
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
      "unmatched:007415f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00741638",
      "PARAM",
      [
        "storage",
        "002e1f58",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:0074163c",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00741650",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00741690",
      "PARAM",
      [
        "storage",
        "002e1f98",
        null,
        "undefined4"
      ]
    ],
    [
      "00741694",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0074164c ["INT_ADD", "register:40f0:8", ["const:74164c:8", "const:4:8"]]
- 0074164c ["CALL", null, ["callee:0074107c:8"]]
+ 007416a4 ["INT_ADD", "register:40f0:8", ["const:7416a4:8", "const:4:8"]]
+ 007416a4 ["CALL", null, ["callee:0074107c:8"]]
+ 0074164c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
+ 0074164c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007416b8 ["INT_ADD", "register:40f0:8", ["const:7416b8:8", "const:4:8"]]
- 007416b8 ["CALL", null, ["callee:0071c4b8:8"]]
+ 00741710 ["INT_ADD", "register:40f0:8", ["const:741710:8", "const:4:8"]]
+ 00741710 ["CALL", null, ["callee:0071c4b8:8"]]
~~~


<a id="compare-ff0cca7a32d36977631883c691c8e048"></a>

### [`00741b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741b68.md) → [`00741bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741bc0.md) FUN_00741bc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741be4",
      "incomplete_value": false,
      "site": "00741be4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741b8c",
      "incomplete_value": false,
      "site": "00741b8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "00741be4",
      "DATA",
      [
        "storage",
        "00c77c10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741be4",
      "DATA",
      [
        "storage",
        "00c77ce0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741b7c ["INT_ADD", "register:40f0:8", ["const:741b7c:8", "const:4:8"]]
- 00741b7c ["CALL", null, ["callee:00c57f60:8"]]
+ 00741bd4 ["INT_ADD", "register:40f0:8", ["const:741bd4:8", "const:4:8"]]
+ 00741bd4 ["CALL", null, ["callee:00c57f60:8"]]
- 00741b88 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 00741b88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741b88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741b88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00741be0 ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 00741be0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00741be0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00741be0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aa317d554105d9b1d105c90e0a9a1bab"></a>

### [`00741b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741b9c.md) → [`00741bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741bf4.md) FUN_00741bf4

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
      "definition_site": "00741c00",
      "incomplete_value": false,
      "site": "00741c00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741ba8",
      "incomplete_value": false,
      "site": "00741ba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "00741c00",
      "DATA",
      [
        "storage",
        "00c77c10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741c00",
      "DATA",
      [
        "storage",
        "00c77ce0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741ba4 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 00741ba4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741ba4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741ba4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741bfc ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 00741bfc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741bfc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741bfc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9d99e863ead5ae7e6c06611f0b106b67"></a>

### [`00741bfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741bfc.md) → [`00741c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c54.md) FUN_00741c54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741c68",
      "incomplete_value": false,
      "site": "00741c6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741c10",
      "incomplete_value": false,
      "site": "00741c14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c90:8"
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
      "00741c6c",
      "DATA",
      [
        "storage",
        "00c77c90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741c6c",
      "DATA",
      [
        "storage",
        "00c77d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741c08 ["INT_ADD", "register:40f0:8", ["const:741c08:8", "const:4:8"]]
- 00741c08 ["CALL", null, ["callee:00c57f60:8"]]
+ 00741c60 ["INT_ADD", "register:40f0:8", ["const:741c60:8", "const:4:8"]]
+ 00741c60 ["CALL", null, ["callee:00c57f60:8"]]
- 00741c10 ["COPY", "tmp:0:8", ["const:c90:8"]]
- 00741c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00741c68 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00741c68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00741c68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00741c68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b12014ea884cc574b01fb82cf713c374"></a>

### [`00741c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741c20.md) → [`00741c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c78.md) FUN_00741c78

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
      "definition_site": "00741c7c",
      "incomplete_value": false,
      "site": "00741c80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741c24",
      "incomplete_value": false,
      "site": "00741c28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c90:8"
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
      "00741c80",
      "DATA",
      [
        "storage",
        "00c77c90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741c80",
      "DATA",
      [
        "storage",
        "00c77d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741c24 ["COPY", "tmp:0:8", ["const:c90:8"]]
- 00741c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00741c7c ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00741c7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00741c7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00741c7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7f848d8e6c90f06dbc00eaa03fea7e7"></a>

### [`00741c38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741c38.md) → [`00741c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c90.md) FUN_00741c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "00741cb4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00741c5c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00741cb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00741cb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741c5c ["INT_ADD", "register:40f0:8", ["const:741c5c:8", "const:4:8"]]
- 00741c5c ["CALL", null, ["ram:47acf4:8"]]
+ 00741cb4 ["INT_ADD", "register:40f0:8", ["const:741cb4:8", "const:4:8"]]
+ 00741cb4 ["CALL", null, ["ram:47ad34:8"]]
- 00741c68 ["INT_ADD", "register:40f0:8", ["const:741c68:8", "const:4:8"]]
- 00741c68 ["CALL", null, ["callee:0047ce14:8"]]
+ 00741cc0 ["INT_ADD", "register:40f0:8", ["const:741cc0:8", "const:4:8"]]
+ 00741cc0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-1d33e057ac373ec668c7bbf1224f849a"></a>

### [`00741ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741ca8.md) → [`00741d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741d00.md) _INIT_128

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00741d3c",
      "incomplete_value": true,
      "site": "00741d58",
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
    "old": {
      "definition_site": "00741ce4",
      "incomplete_value": true,
      "site": "00741d00",
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
                "const:f26:8"
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
      "definition_site": "00741d60",
      "incomplete_value": true,
      "site": "00741d7c",
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
    "old": {
      "definition_site": "00741d08",
      "incomplete_value": true,
      "site": "00741d24",
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
                "const:f39:8"
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
      "definition_site": "00741d80",
      "incomplete_value": true,
      "site": "00741d9c",
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
    "old": {
      "definition_site": "00741d28",
      "incomplete_value": true,
      "site": "00741d44",
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
                "const:dc2:8"
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
      "00741d3c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00741d60",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00741d80",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00741d3c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00741d60",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00741d80",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741d7c ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00741d7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741d7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741d7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741dd4 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00741dd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741dd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741dd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00741d9c ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00741d9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741d9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741d9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741df4 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00741df4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741df4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741df4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00741e08 ["INT_ADD", "register:40f0:8", ["const:741e08:8", "const:4:8"]]
- 00741e08 ["CALL", null, ["callee:0043b838:8"]]
+ 00741e60 ["INT_ADD", "register:40f0:8", ["const:741e60:8", "const:4:8"]]
+ 00741e60 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-2ebea92a3c55acd140e9ba6cf7876202"></a>

### [`00742200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/00742200.md) → [`00742258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742258.md) FUN_00742258

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) [`0073d7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073d/0073d7a4.md) · 呼出先 13件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00741024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/00741024.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) · 呼出先 13件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0074107c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074107c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.80% / 新版 76.80%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00742284",
      "incomplete_value": true,
      "site": "00742284",
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
      "definition_site": "0074222c",
      "incomplete_value": true,
      "site": "0074222c",
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
      "definition_site": "0074228c",
      "incomplete_value": false,
      "site": "0074229c",
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
    "old": {
      "definition_site": "00742234",
      "incomplete_value": false,
      "site": "00742244",
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
            "const:e58:8"
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
      "definition_site": "00742294",
      "incomplete_value": false,
      "site": "0074229c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074223c",
      "incomplete_value": false,
      "site": "00742244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "00742280",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0074228c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00742294",
      "PARAM",
      [
        "storage",
        "00c77a88",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00742280",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0074228c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00742294",
      "PARAM",
      [
        "storage",
        "00c77b58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00742244 ["INT_ADD", "register:40f0:8", ["const:742244:8", "const:4:8"]]
- 00742244 ["CALL", null, ["callee:00c586e0:8"]]
+ 0074229c ["INT_ADD", "register:40f0:8", ["const:74229c:8", "const:4:8"]]
+ 0074229c ["CALL", null, ["callee:00c586e0:8"]]
- 007422a8 ["INT_ADD", "register:40f0:8", ["const:7422a8:8", "const:4:8"]]
- 007422a8 ["CALL", null, ["callee:0074107c:8"]]
+ 00742300 ["INT_ADD", "register:40f0:8", ["const:742300:8", "const:4:8"]]
+ 00742300 ["CALL", null, ["callee:0074107c:8"]]
- 007422e0 ["INT_ADD", "register:40f0:8", ["const:7422e0:8", "const:4:8"]]
- 007422e0 ["CALL", null, ["callee:0047e91c:8"]]
+ 00742338 ["INT_ADD", "register:40f0:8", ["const:742338:8", "const:4:8"]]
+ 00742338 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-4db6140aec86a2fb7443ec6ba530f1da"></a>

### [`00742420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/00742420.md) → [`00742478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742478.md) _INIT_129

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0074269c",
      "incomplete_value": true,
      "site": "007426a0",
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
                "const:a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00742450",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007424b4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00742478",
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
      "007424a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007424b4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007424d0",
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
- 00742648 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 00742648 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00742648 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00742648 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007426a0 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 007426a0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007426a0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007426a0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007426a0 ["INT_ADD", "register:40f0:8", ["const:7426a0:8", "const:4:8"]]
- 007426a0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007426f8 ["INT_ADD", "register:40f0:8", ["const:7426f8:8", "const:4:8"]]
+ 007426f8 ["CALL", null, ["callee:00c57f80:8"]]
- 0074244c ["COPY", "tmp:0:8", ["const:d90:8"]]
- 0074244c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0074244c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0074244c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-479b41a7bf02b539bf7db4f3905f20b6"></a>

### [`007427b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/007427b0.md) → [`00742808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742808.md) FUN_00742808

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007457cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/007457cc.md) [`007473e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/007473e0.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 5件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`007429e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/007429e0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a33b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33b9c.md) [`00a33bf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33bf4.md)
- 新版 呼出元 3件 [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) [`00747438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747438.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 5件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00742a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742a38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a33bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33bf0.md) [`00a33c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c48.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007428b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:007428d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "007429fc",
      "DATA",
      [
        "storage",
        "00434834",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00742910",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "0074292c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "007429fc",
      "DATA",
      [
        "storage",
        "00434834",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 007427e8 ["INT_ADD", "register:40f0:8", ["const:7427e8:8", "const:4:8"]]
- 007427e8 ["CALL", null, ["callee:00676aa0:8"]]
+ 00742840 ["INT_ADD", "register:40f0:8", ["const:742840:8", "const:4:8"]]
+ 00742840 ["CALL", null, ["callee:00676aa0:8"]]
- 0074280c ["INT_ADD", "register:40f0:8", ["const:74280c:8", "const:4:8"]]
- 0074280c ["CALL", null, ["callee:00676aa0:8"]]
+ 00742864 ["INT_ADD", "register:40f0:8", ["const:742864:8", "const:4:8"]]
+ 00742864 ["CALL", null, ["callee:00676aa0:8"]]
- 00742820 ["INT_ADD", "register:40f0:8", ["const:742820:8", "const:4:8"]]
- 00742820 ["CALL", null, ["callee:00742a38:8"]]
+ 00742878 ["INT_ADD", "register:40f0:8", ["const:742878:8", "const:4:8"]]
+ 00742878 ["CALL", null, ["callee:00742a38:8"]]
~~~


<a id="compare-ee226faa8ff504d4b8271306f4f9c324"></a>

### [`007429e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/007429e0.md) → [`00742a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742a38.md) FUN_00742a38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007427b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/007427b0.md) [`007fa148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa148.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`00742808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742808.md) [`007fa1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa1a0.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00742a38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00742bc0"
      ]
    ],
    [
      "unmatched:00742a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00742ab4"
      ]
    ],
    [
      "unmatched:00742a4c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00742a7c"
      ]
    ]
  ],
  "added": [
    [
      "00742a90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00742bc0"
      ]
    ],
    [
      "00742aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00742ab4"
      ]
    ],
    [
      "00742aa4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00742ad4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00742a14 ["CBRANCH", null, ["local:b40:8", "register:101:1"]]
+ 00742a6c ["CBRANCH", null, ["local:b41:8", "register:101:1"]]
- 00742a2c ["CBRANCH", null, ["local:b40:8", "register:101:1"]]
+ 00742a84 ["CBRANCH", null, ["local:b41:8", "register:101:1"]]
- 00742a38 ["CBRANCH", null, ["local:b35:8", "register:101:1"]]
~~~


<a id="compare-56d0a8a36aae97c5a7310be5d71e81bb"></a>

### [`00742bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00742/00742bb8.md) → [`00742c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742c10.md) FUN_00742c10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.22% / 新版 81.22%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 21件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007432a4",
      "incomplete_value": true,
      "site": "007432a8",
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
      "definition_site": "0074324c",
      "incomplete_value": true,
      "site": "00743250",
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
    "ordinal": 106,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007432a0",
      "incomplete_value": true,
      "site": "007432ac",
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
      "definition_site": "00743248",
      "incomplete_value": true,
      "site": "00743254",
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
    "ordinal": 107,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "007432b8",
      "incomplete_value": true,
      "site": "007432b8",
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
      "definition_site": "00743260",
      "incomplete_value": true,
      "site": "00743260",
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
    "ordinal": 108,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00742be4",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00742bec",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00742bf0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ]
  ],
  "added": [
    [
      "00742c3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "00742c44",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00742c48",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ]
  ]
}
~~~


~~~diff
- 007432ac ["INT_ADD", "register:40f0:8", ["const:7432ac:8", "const:4:8"]]
- 007432ac ["CALL", null, ["callee:00c57f80:8"]]
+ 00743304 ["INT_ADD", "register:40f0:8", ["const:743304:8", "const:4:8"]]
+ 00743304 ["CALL", null, ["callee:00c57f80:8"]]
- 007432cc ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 007432cc ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 007432cc ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 007432cc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00743328 ["INT_ADD", "register:40f0:8", ["const:743328:8", "const:4:8"]]
- 00743328 ["CALL", null, ["callee:00470880:8"]]
+ 00743380 ["INT_ADD", "register:40f0:8", ["const:743380:8", "const:4:8"]]
+ 00743380 ["CALL", null, ["callee:00470880:8"]]
~~~


<a id="compare-79fcf45246d069771f5ffc2830fa2148"></a>

### [`007433bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/007433bc.md) → [`00743414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743414.md) FUN_00743414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00744478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744478.md) · 呼出先 13件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00743550",
      "incomplete_value": true,
      "site": "00743554",
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
      "definition_site": "007434f8",
      "incomplete_value": true,
      "site": "007434fc",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074354c",
      "incomplete_value": true,
      "site": "00743558",
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
      "definition_site": "007434f4",
      "incomplete_value": true,
      "site": "00743500",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00743564",
      "incomplete_value": true,
      "site": "00743564",
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
      "definition_site": "0074350c",
      "incomplete_value": true,
      "site": "0074350c",
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
    "ordinal": 17,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007433c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007433c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007433c8",
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
      "00743418",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0074341c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00743420",
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
- 0074348c ["INT_ADD", "register:40f0:8", ["const:74348c:8", "const:4:8"]]
- 0074348c ["CALL", null, ["callee:0048795c:8"]]
+ 007434e4 ["INT_ADD", "register:40f0:8", ["const:7434e4:8", "const:4:8"]]
+ 007434e4 ["CALL", null, ["callee:0048795c:8"]]
- 00743558 ["INT_ADD", "register:40f0:8", ["const:743558:8", "const:4:8"]]
- 00743558 ["CALL", null, ["callee:00c57f80:8"]]
+ 007435b0 ["INT_ADD", "register:40f0:8", ["const:7435b0:8", "const:4:8"]]
+ 007435b0 ["CALL", null, ["callee:00c57f80:8"]]
- 00743578 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00743578 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 007435d0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007435d0 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
~~~


<a id="compare-0e751f77f5eb2978944bc434fc58f1e8"></a>

### [`007435f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/007435f0.md) → [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) FUN_00743648

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007457cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/007457cc.md) · 呼出先 22件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.56% / 新版 86.56%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 6件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007436c4",
      "incomplete_value": true,
      "site": "007436d4",
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
            "const:a8:8"
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
      "definition_site": "007436c8",
      "incomplete_value": true,
      "site": "007436d4",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007436cc",
      "incomplete_value": false,
      "site": "007436d4",
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
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00743624",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00743628",
      "WRITE",
      [
        "storage",
        "Stack[-0x1438]",
        null,
        null
      ]
    ],
    [
      "unmatched:0074362c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1428]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0074367c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00743680",
      "WRITE",
      [
        "storage",
        "Stack[-0x1438]",
        null,
        null
      ]
    ],
    [
      "00743684",
      "WRITE",
      [
        "storage",
        "Stack[-0x1428]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0074367c ["INT_ADD", "register:40f0:8", ["const:74367c:8", "const:4:8"]]
- 0074367c ["CALL", null, ["callee:00b11188:8"]]
+ 007436d4 ["INT_ADD", "register:40f0:8", ["const:7436d4:8", "const:4:8"]]
+ 007436d4 ["CALL", null, ["callee:00b11188:8"]]
- 007436cc ["INT_ADD", "register:40f0:8", ["const:7436cc:8", "const:4:8"]]
- 007436cc ["CALL", null, ["callee:0048797c:8"]]
+ 00743724 ["INT_ADD", "register:40f0:8", ["const:743724:8", "const:4:8"]]
+ 00743724 ["CALL", null, ["callee:0048797c:8"]]
- 0074381c ["INT_ADD", "register:40f0:8", ["const:74381c:8", "const:4:8"]]
- 0074381c ["CALL", null, ["callee:00c58070:8"]]
+ 00743874 ["INT_ADD", "register:40f0:8", ["const:743874:8", "const:4:8"]]
+ 00743874 ["CALL", null, ["callee:00c58070:8"]]
~~~


<a id="compare-66cd6650074e4b9506f055bf324afacb"></a>

### [`00743f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/00743f2c.md) → [`00743f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743f84.md) FUN_00743f84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 8件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) [`005c0e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c0/005c0e8c.md) [`00ad6a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6a88.md) [`00ad6f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6f4c.md) [`00adf090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00adf/00adf090.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`00ad6af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) [`00adf100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf100.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00743f78 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00743f78 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00743fd0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00743fd0 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 00743f90 ["INT_ADD", "register:40f0:8", ["const:743f90:8", "const:4:8"]]
- 00743f90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00743fe8 ["INT_ADD", "register:40f0:8", ["const:743fe8:8", "const:4:8"]]
+ 00743fe8 ["CALL", null, ["callee:00c57f60:8"]]
- 00743fb8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00743fb8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00744010 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00744010 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-3a52a4baf59d72ef4236052aca927362"></a>

### [`00743ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/00743ff0.md) → [`00744048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744048.md) FUN_00744048

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) [`00aea354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aea/00aea354.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00aea3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aea/00aea3f0.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 69.81% / 新版 69.81%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00744144",
      "incomplete_value": true,
      "site": "00744148",
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
                "const:4f8:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "007440e0"
      ],
      [
        "FALL_THROUGH",
        "00744138"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00744138",
      "incomplete_value": true,
      "site": "0074413c",
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
      "definition_site": "007440e0",
      "incomplete_value": true,
      "site": "007440e4",
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
      "unmatched:00744000",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00744004",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007440e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00744144"
      ]
    ]
  ],
  "added": [
    [
      "00744058",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0074405c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00744138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00744144"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074408c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0074408c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 007440e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 007440e4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 007440f0 ["INT_ADD", "register:40f0:8", ["const:7440f0:8", "const:4:8"]]
- 007440f0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00744148 ["INT_ADD", "register:40f0:8", ["const:744148:8", "const:4:8"]]
+ 00744148 ["CALL", null, ["callee:0043bbe4:8"]]
- 0074413c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3:8"]]
- 0074413c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0074413c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-568a902190ea44797929d816b8fdc2c3"></a>

### [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md) → [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) FUN_00744260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 60件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) [`005c0e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c0/005c0e8c.md) [`005e46e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e46e0.md) [`005e47e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e47e4.md) [`005e4848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4848.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 60件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`005e4720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4720.md) [`005e4824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4824.md) [`005e4888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4888.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00744218 ["INT_ADD", "register:40f0:8", ["const:744218:8", "const:4:8"]]
- 00744218 ["CALL", null, ["callee:00851550:8"]]
+ 00744270 ["INT_ADD", "register:40f0:8", ["const:744270:8", "const:4:8"]]
+ 00744270 ["CALL", null, ["callee:00851550:8"]]
- 00744224 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00744224 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00744224 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00744224 ["INT_ADD", "tmp:2:8", ["register:4000:8", "tmp:1:8"]]
- 00744238 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00744238 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-607d88c7c284cdafe4348073b2f3f359"></a>

### [`00744478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744478.md) → [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) FUN_007444d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 15件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005c1844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1844.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.93% / 新版 79.93%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 4件, `store_value` 1件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00744b50",
      "incomplete_value": true,
      "site": "00744b58",
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
                "const:a50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00744af8",
      "incomplete_value": true,
      "site": "00744b00",
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 98,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00744c30",
      "incomplete_value": true,
      "site": "00744c34",
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
            "const:14:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00744ca0",
      "incomplete_value": true,
      "site": "00744ca4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007444a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1448]",
        null,
        null
      ]
    ],
    [
      "unmatched:007444b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:007444fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00744590"
      ]
    ]
  ],
  "added": [
    [
      "00744500",
      "WRITE",
      [
        "storage",
        "Stack[-0x1448]",
        null,
        null
      ]
    ],
    [
      "00744508",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00744554",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00744590"
      ]
    ]
  ]
}
~~~


~~~diff
- 00744ad0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00744ad0 ["CBRANCH", null, ["local:b94:8", "tmp:0:1"]]
+ 00744b28 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00744b28 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
- 00744c34 ["INT_ADD", "register:40f0:8", ["const:744c34:8", "const:4:8"]]
- 00744c34 ["CALL", null, ["callee:00c584a0:8"]]
+ 00744c8c ["INT_ADD", "register:40f0:8", ["const:744c8c:8", "const:4:8"]]
+ 00744c8c ["CALL", null, ["callee:00c584a0:8"]]
+ 00744c34 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00744c34 ["CBRANCH", null, ["local:b131:8", "tmp:0:1"]]
~~~


<a id="compare-9199accd3b2d81e61a54c7ccbf8710b8"></a>

### [`00744d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744d5c.md) → [`00744db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744db4.md) FUN_00744db4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.33% / 新版 84.33%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00744f48"
      ],
      [
        "FALL_THROUGH",
        "00744fa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00744fa0",
      "incomplete_value": true,
      "site": "00744fa4",
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
      "definition_site": "00744f48",
      "incomplete_value": true,
      "site": "00744f4c",
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
    "ordinal": 28,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00744d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00744d60",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00744d64",
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
      "00744db4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00744db8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00744dbc",
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
- 00744ef4 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00744ef4 ["CBRANCH", null, ["local:b49:8", "tmp:0:1"]]
+ 00744f4c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00744f4c ["CBRANCH", null, ["local:b47:8", "tmp:0:1"]]
- 00744d5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00744d5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00744d5c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00744d5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00744d60 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00744d60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-6864eef2f5b106bcbb7b64767510309b"></a>

### [`00744f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744f8c.md) → [`00744fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744fe4.md) FUN_00744fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.58% / 新版 86.58%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00745020",
      "incomplete_value": true,
      "site": "00745028",
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
    "new": null,
    "old": {
      "definition_site": "00745250",
      "incomplete_value": true,
      "site": "00745258",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007452c0",
      "incomplete_value": true,
      "site": "007452c8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "007451c8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0074519c"
      ]
    ],
    [
      "unmatched:00745198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00745280"
      ]
    ],
    [
      "unmatched:007451a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004801b8"
      ]
    ]
  ],
  "added": [
    [
      "007451c8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "007451f4"
      ]
    ],
    [
      "007451f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00745280"
      ]
    ],
    [
      "007451f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004801b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00744fd0 ["INT_ADD", "register:40f0:8", ["const:744fd0:8", "const:4:8"]]
- 00744fd0 ["CALL", null, ["callee:00480158:8"]]
+ 00745028 ["INT_ADD", "register:40f0:8", ["const:745028:8", "const:4:8"]]
+ 00745028 ["CALL", null, ["callee:00480158:8"]]
- 00745258 ["INT_ADD", "register:40f0:8", ["const:745258:8", "const:4:8"]]
- 00745258 ["CALL", null, ["callee:00a33bf0:8"]]
+ 007452b0 ["INT_ADD", "register:40f0:8", ["const:7452b0:8", "const:4:8"]]
+ 007452b0 ["CALL", null, ["callee:00a33bf0:8"]]
+ 00745258 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
+ 00745258 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d0:8"]]
~~~


<a id="compare-d61012bb20aa625cc30e89ecda5e5a5e"></a>

### [`00745a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745a24.md) → [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) FUN_00745a7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0078bfc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078b/0078bfc4.md) [`00a915a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a915a8.md) · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00747a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747a60.md) [`00747edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747edc.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009b4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4900.md)
- 新版 呼出元 2件 [`0078c01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c01c.md) [`00a91618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91618.md) · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00747ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747ab8.md) [`00747f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f34.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.42% / 新版 98.42%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00745bd8",
      "incomplete_value": false,
      "site": "00745bdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00745b80",
      "incomplete_value": false,
      "site": "00745b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00745c84",
      "incomplete_value": false,
      "site": "00745c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00745c2c",
      "incomplete_value": false,
      "site": "00745c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00745bdc",
      "DATA",
      [
        "storage",
        "00c77d30",
        null,
        "undefined *"
      ]
    ],
    [
      "00745c84",
      "DATA",
      [
        "storage",
        "00c77dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00745d04",
      "READ",
      [
        "storage",
        "00c77de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00745bdc",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ],
    [
      "00745c84",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ],
    [
      "00745d04",
      "READ",
      [
        "storage",
        "00c77eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00745c84 ["INT_ADD", "register:40f0:8", ["const:745c84:8", "const:4:8"]]
- 00745c84 ["CALL", null, ["callee:009b4954:8"]]
+ 00745cdc ["INT_ADD", "register:40f0:8", ["const:745cdc:8", "const:4:8"]]
+ 00745cdc ["CALL", null, ["callee:009b4954:8"]]
- 00745a94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00745a94 ["INT_ADD", "register:40f0:8", ["const:745a94:8", "const:4:8"]]
- 00745a94 ["CALLIND", null, ["register:0:8"]]
+ 00745aec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00745aec ["INT_ADD", "register:40f0:8", ["const:745aec:8", "const:4:8"]]
+ 00745aec ["CALLIND", null, ["register:0:8"]]
- 00745aa0 ["INT_ADD", "register:40f0:8", ["const:745aa0:8", "const:4:8"]]
- 00745aa0 ["CALL", null, ["callee:007522d8:8"]]
+ 00745af8 ["INT_ADD", "register:40f0:8", ["const:745af8:8", "const:4:8"]]
+ 00745af8 ["CALL", null, ["callee:007522d8:8"]]
~~~


<a id="compare-e6bcffd9c3123514419d2f546ece4d39"></a>

### [`00745fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745fb4.md) → [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) FUN_0074600c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`007465bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/007465bc.md) [`007466b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/007466b4.md) · 呼出先 10件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`007481bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007481bc.md) [`00748678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748678.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md)
- 新版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`00746614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746614.md) [`0074670c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074670c.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00748214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748214.md) [`007486d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007486d0.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007461c8",
      "incomplete_value": false,
      "site": "007461cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746170",
      "incomplete_value": false,
      "site": "00746174",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e40:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746280",
      "incomplete_value": false,
      "site": "00746284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746228",
      "incomplete_value": false,
      "site": "0074622c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007461cc",
      "DATA",
      [
        "storage",
        "00c77e40",
        null,
        "undefined *"
      ]
    ],
    [
      "00746284",
      "DATA",
      [
        "storage",
        "00c77ec0",
        null,
        "undefined *"
      ]
    ],
    [
      "0074630c",
      "READ",
      [
        "storage",
        "00c77ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007461cc",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ],
    [
      "00746284",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ],
    [
      "0074630c",
      "READ",
      [
        "storage",
        "00c77fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00745ffc ["INT_ADD", "register:40f0:8", ["const:745ffc:8", "const:4:8"]]
- 00745ffc ["CALL", null, ["callee:00851550:8"]]
+ 00746054 ["INT_ADD", "register:40f0:8", ["const:746054:8", "const:4:8"]]
+ 00746054 ["CALL", null, ["callee:00851550:8"]]
- 00746004 ["INT_ADD", "register:40f0:8", ["const:746004:8", "const:4:8"]]
- 00746004 ["CALL", null, ["callee:00764f38:8"]]
+ 0074605c ["INT_ADD", "register:40f0:8", ["const:74605c:8", "const:4:8"]]
+ 0074605c ["CALL", null, ["callee:00764f38:8"]]
- 00746024 ["INT_ADD", "register:40f0:8", ["const:746024:8", "const:4:8"]]
- 00746024 ["CALL", null, ["callee:00c57f80:8"]]
+ 0074607c ["INT_ADD", "register:40f0:8", ["const:74607c:8", "const:4:8"]]
+ 0074607c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-07889a5014341d8f6a2ecc7b48ac62a0"></a>

### [`007465bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/007465bc.md) → [`00746614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746614.md) FUN_00746614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 4件 [`00745fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745fb4.md) [`007487a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007487a4.md) [`007487a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007487a8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 4件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) [`007487fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487fc.md) [`00748800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748800.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746654",
      "incomplete_value": false,
      "site": "00746660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007465fc",
      "incomplete_value": false,
      "site": "00746608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f40:8"
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
      "00746660",
      "DATA",
      [
        "storage",
        "00c77f40",
        null,
        "undefined *"
      ]
    ],
    [
      "00746694",
      "READ",
      [
        "storage",
        "00c77f60",
        null,
        "pointer"
      ]
    ],
    [
      "00746694",
      "READ",
      [
        "storage",
        "00c77f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00746660",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ],
    [
      "00746694",
      "READ",
      [
        "storage",
        "00c78030",
        null,
        "pointer"
      ]
    ],
    [
      "00746694",
      "READ",
      [
        "storage",
        "00c78038",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007465f8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00746650 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 007465fc ["COPY", "tmp:0:8", ["const:f40:8"]]
- 007465fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007465fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007465fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00746654 ["COPY", "tmp:0:8", ["const:10:8"]]
+ 00746654 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00746654 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00746654 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00746614 ["INT_ADD", "register:40f0:8", ["const:746614:8", "const:4:8"]]
- 00746614 ["CALL", null, ["callee:0074600c:8"]]
+ 0074666c ["INT_ADD", "register:40f0:8", ["const:74666c:8", "const:4:8"]]
+ 0074666c ["CALL", null, ["callee:0074600c:8"]]
~~~


<a id="compare-3e403d71c361ef6704e66327aea8e437"></a>

### [`007466b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/007466b4.md) → [`0074670c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074670c.md) FUN_0074670c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`009bf6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf6d8.md) · 呼出先 11件 [`00745fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745fb4.md) [`00748810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748810.md) [`00748814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748814.md) [`00748894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748894.md) [`00748898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748898.md)
- 新版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`009bf72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf72c.md) · 呼出先 11件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) [`00748868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748868.md) [`0074886c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/0074886c.md) [`007488ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488ec.md) [`007488f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0074675c",
      "incomplete_value": false,
      "site": "0074675c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746704",
      "incomplete_value": false,
      "site": "00746704",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
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
      "definition_site": "007467a0",
      "incomplete_value": false,
      "site": "007467a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746748",
      "incomplete_value": false,
      "site": "00746748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:40:8"
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
      "definition_site": "007467b4",
      "incomplete_value": false,
      "site": "007467b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074675c",
      "incomplete_value": false,
      "site": "00746760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0074675c",
      "DATA",
      [
        "storage",
        "00c77fc0",
        null,
        "undefined *"
      ]
    ],
    [
      "007467a0",
      "DATA",
      [
        "storage",
        "00c78040",
        null,
        "undefined *"
      ]
    ],
    [
      "007467b8",
      "DATA",
      [
        "storage",
        "00c780c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074675c",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ],
    [
      "007467a0",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ],
    [
      "007467b8",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074675c ["COPY", "tmp:0:8", ["const:c0:8"]]
- 0074675c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074675c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074675c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007467b4 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 007467b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007467b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007467b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007466f4 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0074674c ["COPY", "register:4040:8", ["const:c78000:8"]]
- 007466f8 ["COPY", "tmp:0:8", ["const:fc0:8"]]
- 007466f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007466f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007466f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00746750 ["COPY", "tmp:0:8", ["const:90:8"]]
+ 00746750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00746750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00746750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-abda579f48ab8a379d62a90a67fa4751"></a>

### [`00746cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/00746cec.md) → [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) FUN_00746d44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 8件 [`00748b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748b30.md) [`00749984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/00749984.md) [`0074a57c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a57c.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 8件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`007499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007499dc.md) [`0074a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a5d4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746e8c",
      "incomplete_value": false,
      "site": "00746e8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746e34",
      "incomplete_value": false,
      "site": "00746e34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746f4c",
      "incomplete_value": false,
      "site": "00746f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746ef4",
      "incomplete_value": false,
      "site": "00746ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "00746e8c",
      "DATA",
      [
        "storage",
        "00c78140",
        null,
        "undefined *"
      ]
    ],
    [
      "00746f4c",
      "DATA",
      [
        "storage",
        "00c781c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00746fd8",
      "READ",
      [
        "storage",
        "00c781e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00746e8c",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ],
    [
      "00746f4c",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ],
    [
      "00746fd8",
      "READ",
      [
        "storage",
        "00c782b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00746d40 ["INT_ADD", "register:40f0:8", ["const:746d40:8", "const:4:8"]]
- 00746d40 ["CALL", null, ["callee:00748b88:8"]]
+ 00746d98 ["INT_ADD", "register:40f0:8", ["const:746d98:8", "const:4:8"]]
+ 00746d98 ["CALL", null, ["callee:00748b88:8"]]
- 00746d54 ["INT_ADD", "register:40f0:8", ["const:746d54:8", "const:4:8"]]
- 00746d54 ["CALL", null, ["callee:007522d8:8"]]
+ 00746dac ["INT_ADD", "register:40f0:8", ["const:746dac:8", "const:4:8"]]
+ 00746dac ["CALL", null, ["callee:007522d8:8"]]
- 00746d70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00746d70 ["INT_ADD", "register:40f0:8", ["const:746d70:8", "const:4:8"]]
- 00746d70 ["CALLIND", null, ["register:0:8"]]
+ 00746dc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00746dc8 ["INT_ADD", "register:40f0:8", ["const:746dc8:8", "const:4:8"]]
+ 00746dc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dc7101a698df56770b443d39e869842d"></a>

### [`007475f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/007475f0.md) → [`00747648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747648.md) FUN_00747648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`0060eb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060eb50.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f4c.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`0046da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da5c.md)
- 新版 呼出元 2件 [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.23% / 新版 93.23%

アドレスに依存する影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00747690",
      "incomplete_value": true,
      "site": "00747690",
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
                "register:1660:8"
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
    "old": {
      "definition_site": "00747638",
      "incomplete_value": true,
      "site": "00747638",
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
                "const:28:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00747668",
      "incomplete_value": true,
      "site": "00747670",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
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
      "definition_site": "007477a8",
      "incomplete_value": false,
      "site": "007477c8",
      "value": [
        "leaf",
        "const:6e:8"
      ]
    },
    "ordinal": 14,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0074761c",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747628",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:007477dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747858"
      ]
    ]
  ],
  "added": [
    [
      "00747674",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00747680",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00747834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747858"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747670 ["INT_ADD", "register:40f0:8", ["const:747670:8", "const:4:8"]]
- 00747670 ["CALL", null, ["callee:00805744:8"]]
+ 007476c8 ["INT_ADD", "register:40f0:8", ["const:7476c8:8", "const:4:8"]]
+ 007476c8 ["CALL", null, ["callee:00805744:8"]]
- 007477c8 ["INT_ADD", "register:40f0:8", ["const:7477c8:8", "const:4:8"]]
- 007477c8 ["CALL", null, ["callee:0046af4c:8"]]
+ 00747820 ["INT_ADD", "register:40f0:8", ["const:747820:8", "const:4:8"]]
+ 00747820 ["CALL", null, ["callee:0046af4c:8"]]
- 0074761c ["COPY", "tmp:0:8", ["register:4000:8"]]
- 0074761c ["COPY", "tmp:1:8", ["register:4010:8"]]
- 0074761c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 0074761c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-96c090f26181687cd86103a3a87c4abb"></a>

### [`00747864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747864.md) → [`007478bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007478bc.md) FUN_007478bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007435f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/007435f0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007478c8",
      "incomplete_value": false,
      "site": "007478cc",
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
    "old": {
      "definition_site": "00747870",
      "incomplete_value": false,
      "site": "00747874",
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
            "const:f4c:8"
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
      "007478c8",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007478c8",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747874 ["INT_ADD", "register:40f0:8", ["const:747874:8", "const:4:8"]]
- 00747874 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007478cc ["INT_ADD", "register:40f0:8", ["const:7478cc:8", "const:4:8"]]
+ 007478cc ["CALL", null, ["callee:0043b7b8:8"]]
- 00747870 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00747870 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00747870 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00747870 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007478c8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007478c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007478c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007478c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6d1eecec334271af01b50eb2637ecd5a"></a>

### [`00747878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747878.md) → [`007478d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007478d0.md) FUN_007478d0

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
      "unmatched:00747890",
      "DATA",
      [
        "storage",
        "00c77d30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00747894",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007478fc"
      ]
    ]
  ],
  "added": [
    [
      "007478e8",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ],
    [
      "007478ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007478fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747878 ["COPY", "register:4040:8", ["register:4000:8"]]
- 0074787c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:40:8"]]
- 0074787c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00747880 ["COPY", "register:4050:8", ["const:c77000:8"]]
~~~


<a id="compare-1d6e0179a4a6975878ef799ee321405f"></a>

### [`007478bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/007478bc.md) → [`00747914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747914.md) FUN_00747914

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0074792c",
      "incomplete_value": false,
      "site": "00747938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007478d4",
      "incomplete_value": false,
      "site": "007478e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:d30:8"
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
      "00747938",
      "DATA",
      [
        "storage",
        "00c77d30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747938",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007478d4 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 007478d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007478d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007478d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074792c ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 0074792c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074792c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074792c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00747904 ["COPY", "register:0:8", ["register:4040:8"]]
- 00747904 ["INT_ADD", "register:40f0:8", ["const:747904:8", "const:4:8"]]
- 00747904 ["CALLIND", null, ["register:0:8"]]
+ 0074795c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074795c ["INT_ADD", "register:40f0:8", ["const:74795c:8", "const:4:8"]]
+ 0074795c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e0bf2df162ea0a954621fbc8f44a9cbb"></a>

### [`00747918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747918.md) → [`00747970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747970.md) FUN_00747970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747944",
      "DATA",
      [
        "storage",
        "00c77d30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0074794c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007479c0"
      ]
    ]
  ],
  "added": [
    [
      "0074799c",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ],
    [
      "007479a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007479c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074792c ["INT_ADD", "register:40f0:8", ["const:74792c:8", "const:4:8"]]
- 0074792c ["CALL", null, ["callee:00c57f60:8"]]
+ 00747984 ["INT_ADD", "register:40f0:8", ["const:747984:8", "const:4:8"]]
+ 00747984 ["CALL", null, ["callee:00c57f60:8"]]
- 00747940 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 00747940 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00747940 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00747940 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00747944 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00747944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-5a6e49dfbb736a7732dba79f27fd9a61"></a>

### [`007479a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/007479a8.md) → [`00747a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747a00.md) FUN_00747a00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007479dc"
      ],
      [
        "FALL_THROUGH",
        "00747a34"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00747a30",
      "incomplete_value": true,
      "site": "00747a48",
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
      "definition_site": "007479d8",
      "incomplete_value": true,
      "site": "007479f0",
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
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "007479d0"
      ],
      [
        "CONDITIONAL_JUMP",
        "00747a28"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00747a28",
      "incomplete_value": true,
      "site": "00747a50",
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
      "definition_site": "007479d0",
      "incomplete_value": true,
      "site": "007479f8",
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
      "unmatched:007479c8",
      "DATA",
      [
        "storage",
        "00c77d30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007479d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747a50"
      ]
    ],
    [
      "unmatched:007479dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747a60"
      ]
    ]
  ],
  "added": [
    [
      "00747a20",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ],
    [
      "00747a28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747a50"
      ]
    ],
    [
      "00747a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747a60"
      ]
    ]
  ]
}
~~~


~~~diff
- 007479c4 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 007479c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007479c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007479c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007479c8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007479c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 007479cc ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:10:8"]]
- 007479cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-116e351c466502c461bb8e909a70f423"></a>

### [`00747ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747ab0.md) → [`00747b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747b08.md) FUN_00747b08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md) [`0071d134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.32% / 新版 96.32%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747c48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747d34"
      ]
    ],
    [
      "unmatched:00747c2c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00747ca0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747d34"
      ]
    ],
    [
      "00747c84",
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
- 00747b24 ["CBRANCH", null, ["local:b26:8", "register:102:1"]]
+ 00747b7c ["CBRANCH", null, ["local:b25:8", "register:102:1"]]
- 00747b2c ["INT_ADD", "register:40f0:8", ["const:747b2c:8", "const:4:8"]]
- 00747b2c ["CALL", null, ["callee:00c57f60:8"]]
+ 00747b84 ["INT_ADD", "register:40f0:8", ["const:747b84:8", "const:4:8"]]
+ 00747b84 ["CALL", null, ["callee:00c57f60:8"]]
- 00747b40 ["INT_ADD", "register:40f0:8", ["const:747b40:8", "const:4:8"]]
- 00747b40 ["CALL", null, ["callee:00c580d0:8"]]
+ 00747b98 ["INT_ADD", "register:40f0:8", ["const:747b98:8", "const:4:8"]]
+ 00747b98 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-39279507822acee733375d3b77cb9a26"></a>

### [`00747d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747d08.md) → [`00747d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747d60.md) FUN_00747d60

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
      "definition_site": "00747d6c",
      "incomplete_value": false,
      "site": "00747d78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747d14",
      "incomplete_value": false,
      "site": "00747d20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
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
      "00747d78",
      "DATA",
      [
        "storage",
        "00c77dc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747d78",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747d14 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00747d14 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00747d14 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00747d14 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00747d6c ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00747d6c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00747d6c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00747d6c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-b1149f0477c93ed749d920979605a84e"></a>

### [`00747d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747d4c.md) → [`00747da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747da4.md) FUN_00747da4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.17% / 新版 52.17%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747d4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747d70",
      "DATA",
      [
        "storage",
        "00c77dc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747da4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00747da8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00747dc8",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747d4c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00747d4c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00747d4c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00747d4c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00747d50 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00747d50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00747d54 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-f35c43ca24d5f42f131c590357bf40f2"></a>

### [`00747da8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747da8.md) → [`00747e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747e00.md) FUN_00747e00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.86% / 新版 75.86%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00747e10",
      "incomplete_value": false,
      "site": "00747e14",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00747de4"
      ],
      [
        "CONDITIONAL_JUMP",
        "00747e3c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00747e58",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00747de0",
      "incomplete_value": true,
      "site": "00747e00",
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
      "unmatched:00747dd4",
      "DATA",
      [
        "storage",
        "00c77dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00747dd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747e4c"
      ]
    ],
    [
      "unmatched:00747de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747e54"
      ]
    ]
  ],
  "added": [
    [
      "00747e2c",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ],
    [
      "00747e30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747e4c"
      ]
    ],
    [
      "00747e3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747e54"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747dbc ["INT_ADD", "register:40f0:8", ["const:747dbc:8", "const:4:8"]]
- 00747dbc ["CALL", null, ["callee:00c57f60:8"]]
+ 00747e14 ["INT_ADD", "register:40f0:8", ["const:747e14:8", "const:4:8"]]
+ 00747e14 ["CALL", null, ["callee:00c57f60:8"]]
- 00747dcc ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00747dcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00747dcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00747dcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00747dd0 ["COPY", "register:4008:8", ["register:4098:8"]]
~~~


<a id="compare-54f24502a5afa9531331dddbf2de4bde"></a>

### [`00747e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747e30.md) → [`00747e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747e88.md) FUN_00747e88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00747ea4",
      "incomplete_value": false,
      "site": "00747ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747e4c",
      "incomplete_value": false,
      "site": "00747e4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
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
        "00747e5c"
      ],
      [
        "FALL_THROUGH",
        "00747eb4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00747eb0",
      "incomplete_value": true,
      "site": "00747ec8",
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
      "definition_site": "00747e58",
      "incomplete_value": true,
      "site": "00747e70",
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00747e5c"
      ],
      [
        "CONDITIONAL_JUMP",
        "00747eb4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00747eb0",
      "incomplete_value": true,
      "site": "00747ee0",
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
      "definition_site": "00747e58",
      "incomplete_value": true,
      "site": "00747e88",
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
      "00747ea4",
      "DATA",
      [
        "storage",
        "00c77dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00747e5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747ee0"
      ]
    ]
  ],
  "added": [
    [
      "00747ea4",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ],
    [
      "00747eb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00747ee0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747e48 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00747e48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00747e48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00747e48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00747ea0 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00747ea0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00747ea0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00747ea0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00747e54 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00747e54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00747e54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00747e54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00747e58 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 00747e58 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 00747e58 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 00747e58 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-b7ad8390dae82c893896b540e15e8956"></a>

### [`00747edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747edc.md) → [`00747f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f34.md) FUN_00747f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00745a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745a24.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747edc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747ee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747f18",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00747f34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00747f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00747f70",
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
- 00747edc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00747edc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00747edc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00747edc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00747ee0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00747ee0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00747ee4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ef973d625aa842aa4ebd3683f54efbab"></a>

### [`00747f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747f2c.md) → [`00747f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f84.md) FUN_00747f84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 58.62% / 新版 58.62%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747f30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747f34",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00747f44",
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
      "00747f88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00747f8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00747f9c",
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
- 00747f2c ["INT_SUB", "register:8:8", ["register:8:8", "const:30:8"]]
- 00747f30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00747f30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00747f30 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00747f30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00747f34 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 00747f34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-0b02eae236f340ea9fa993d4164dc040"></a>

### [`00747fc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747fc8.md) → [`00748020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748020.md) FUN_00748020

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 41.18% / 新版 41.18%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00747fe0",
      "DATA",
      [
        "storage",
        "00c77e40",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00747fe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074804c"
      ]
    ]
  ],
  "added": [
    [
      "00748038",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ],
    [
      "0074803c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074804c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747fc8 ["COPY", "register:4040:8", ["register:4000:8"]]
- 00747fcc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:40:8"]]
- 00747fcc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00747fd0 ["COPY", "register:4050:8", ["const:c77000:8"]]
~~~


<a id="compare-0c398acbba7d680cc4607a68e9f4ae83"></a>

### [`0074800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/0074800c.md) → [`00748064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748064.md) FUN_00748064

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00748030",
      "DATA",
      [
        "storage",
        "00c77e40",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00748034",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074809c"
      ]
    ]
  ],
  "added": [
    [
      "00748088",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ],
    [
      "0074808c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074809c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748024 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00748024 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748024 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748024 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00748028 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00748028 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00748028 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00748028 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0074802c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0074802c ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0074802c ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0074802c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-78daea11bbfa7bf446951539e2f76f72"></a>

### [`00748068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748068.md) → [`007480c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007480c0.md) FUN_007480c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007480e8",
      "incomplete_value": false,
      "site": "007480ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748090",
      "incomplete_value": false,
      "site": "00748094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e40:8"
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
      "007480ec",
      "DATA",
      [
        "storage",
        "00c77e40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007480ec",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074807c ["INT_ADD", "register:40f0:8", ["const:74807c:8", "const:4:8"]]
- 0074807c ["CALL", null, ["callee:00c57f60:8"]]
+ 007480d4 ["INT_ADD", "register:40f0:8", ["const:7480d4:8", "const:4:8"]]
+ 007480d4 ["CALL", null, ["callee:00c57f60:8"]]
- 00748090 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00748090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00748090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00748090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007480e8 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 007480e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007480e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007480e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007480b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 007480b4 ["INT_ADD", "register:40f0:8", ["const:7480b4:8", "const:4:8"]]
- 007480b4 ["CALLIND", null, ["register:0:8"]]
+ 0074810c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074810c ["INT_ADD", "register:40f0:8", ["const:74810c:8", "const:4:8"]]
+ 0074810c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-191e8e3580262e133cee2229386fbe87"></a>

### [`00748100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748100.md) → [`00748158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748158.md) FUN_00748158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00748124",
      "DATA",
      [
        "storage",
        "00c77e40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074817c",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748120 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00748120 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00748120 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00748120 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00748124 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00748124 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 0074812c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0074812c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00748184 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00748184 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-a734ce5f2e10a48d81f368366467fe01"></a>

### [`00748490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748490.md) → [`007484e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007484e8.md) FUN_007484e8

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
      "definition_site": "007484f4",
      "incomplete_value": false,
      "site": "00748500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074849c",
      "incomplete_value": false,
      "site": "007484a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
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
      "00748500",
      "DATA",
      [
        "storage",
        "00c77ec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748500",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074849c ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 0074849c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0074849c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0074849c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007484f4 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 007484f4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007484f4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007484f4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-be835cdf20b64755470c76ebff9476ae"></a>

### [`007484d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007484d4.md) → [`0074852c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/0074852c.md) FUN_0074852c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748544",
      "incomplete_value": false,
      "site": "00748550",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007484ec",
      "incomplete_value": false,
      "site": "007484f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
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
      "00748550",
      "DATA",
      [
        "storage",
        "00c77ec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748550",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007484ec ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 007484ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007484ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007484ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748544 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 00748544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0074851c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074851c ["INT_ADD", "register:40f0:8", ["const:74851c:8", "const:4:8"]]
- 0074851c ["CALLIND", null, ["register:0:8"]]
+ 00748574 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748574 ["INT_ADD", "register:40f0:8", ["const:748574:8", "const:4:8"]]
+ 00748574 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fb0409b7e9440b2d7e916e69b79f90e1"></a>

### [`00748530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748530.md) → [`00748588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748588.md) FUN_00748588

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007485b0",
      "incomplete_value": false,
      "site": "007485b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748558",
      "incomplete_value": false,
      "site": "0074855c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
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
      "007485b4",
      "DATA",
      [
        "storage",
        "00c77ec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007485b4",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748544 ["INT_ADD", "register:40f0:8", ["const:748544:8", "const:4:8"]]
- 00748544 ["CALL", null, ["callee:00c57f60:8"]]
+ 0074859c ["INT_ADD", "register:40f0:8", ["const:74859c:8", "const:4:8"]]
+ 0074859c ["CALL", null, ["callee:00c57f60:8"]]
- 00748558 ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 00748558 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00748558 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00748558 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007485b0 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 007485b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007485b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007485b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0074857c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074857c ["INT_ADD", "register:40f0:8", ["const:74857c:8", "const:4:8"]]
- 0074857c ["CALLIND", null, ["register:0:8"]]
+ 007485d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007485d4 ["INT_ADD", "register:40f0:8", ["const:7485d4:8", "const:4:8"]]
+ 007485d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c8129ccd1341c0c91fcd7daa4cb6e25d"></a>

### [`007485c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007485c0.md) → [`00748618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748618.md) FUN_00748618

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748634",
      "incomplete_value": false,
      "site": "00748638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007485dc",
      "incomplete_value": false,
      "site": "007485e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
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
      "00748638",
      "DATA",
      [
        "storage",
        "00c77ec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748638",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007485dc ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 007485dc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007485dc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007485dc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00748634 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 00748634 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00748634 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00748634 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00748604 ["COPY", "register:0:8", ["register:4048:8"]]
- 00748604 ["INT_ADD", "register:40f0:8", ["const:748604:8", "const:4:8"]]
- 00748604 ["CALLIND", null, ["register:0:8"]]
+ 0074865c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0074865c ["INT_ADD", "register:40f0:8", ["const:74865c:8", "const:4:8"]]
+ 0074865c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bbfbf5958a89c2251ddce4da8a4669da"></a>

### [`00748770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748770.md) → [`007487c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487c8.md) FUN_007487c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007487dc",
      "incomplete_value": false,
      "site": "007487e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748784",
      "incomplete_value": false,
      "site": "00748788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f40:8"
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
      "007487e0",
      "DATA",
      [
        "storage",
        "00c77f40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007487e0",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074877c ["INT_ADD", "register:40f0:8", ["const:74877c:8", "const:4:8"]]
- 0074877c ["CALL", null, ["callee:00c57f60:8"]]
+ 007487d4 ["INT_ADD", "register:40f0:8", ["const:7487d4:8", "const:4:8"]]
+ 007487d4 ["CALL", null, ["callee:00c57f60:8"]]
- 00748780 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007487d8 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00748784 ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00748784 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748784 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748784 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007487dc ["COPY", "tmp:0:8", ["const:10:8"]]
+ 007487dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007487dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007487dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c33372194feeff5a65fbd0d2cbb5a68"></a>

### [`00748794`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748794.md) → [`007487ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487ec.md) FUN_007487ec

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
      "definition_site": "007487f0",
      "incomplete_value": false,
      "site": "007487f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748798",
      "incomplete_value": false,
      "site": "0074879c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:f40:8"
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
      "007487f4",
      "DATA",
      [
        "storage",
        "00c77f40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007487f4",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748794 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007487ec ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00748798 ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00748798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007487f0 ["COPY", "tmp:0:8", ["const:10:8"]]
+ 007487f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007487f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007487f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ce7d5ccf33200110b50d5e4a09231de"></a>

### [`007487dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/007487dc.md) → [`00748834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748834.md) FUN_00748834

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748848",
      "incomplete_value": false,
      "site": "0074884c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007487f0",
      "incomplete_value": false,
      "site": "007487f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
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
      "0074884c",
      "DATA",
      [
        "storage",
        "00c77fc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074884c",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007487e8 ["INT_ADD", "register:40f0:8", ["const:7487e8:8", "const:4:8"]]
- 007487e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00748840 ["INT_ADD", "register:40f0:8", ["const:748840:8", "const:4:8"]]
+ 00748840 ["CALL", null, ["callee:00c57f60:8"]]
- 007487ec ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00748844 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 007487f0 ["COPY", "tmp:0:8", ["const:fc0:8"]]
- 007487f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007487f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007487f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748848 ["COPY", "tmp:0:8", ["const:90:8"]]
+ 00748848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f2ad10a41443bf2a5ba1522e6455918b"></a>

### [`00748800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748800.md) → [`00748858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748858.md) FUN_00748858

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
      "definition_site": "0074885c",
      "incomplete_value": false,
      "site": "00748860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748804",
      "incomplete_value": false,
      "site": "00748808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
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
      "00748860",
      "DATA",
      [
        "storage",
        "00c77fc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748860",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748800 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00748858 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00748804 ["COPY", "tmp:0:8", ["const:fc0:8"]]
- 00748804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074885c ["COPY", "tmp:0:8", ["const:90:8"]]
+ 0074885c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074885c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074885c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e9940fce37ebb451eebbe67915c921ac"></a>

### [`0074884c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/0074884c.md) → [`007488a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488a4.md) FUN_007488a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007488c8",
      "incomplete_value": false,
      "site": "007488c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748870",
      "incomplete_value": false,
      "site": "00748870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:40:8"
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
      "007488c8",
      "DATA",
      [
        "storage",
        "00c78040",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007488c8",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748860 ["INT_ADD", "register:40f0:8", ["const:748860:8", "const:4:8"]]
- 00748860 ["CALL", null, ["callee:00c57f60:8"]]
+ 007488b8 ["INT_ADD", "register:40f0:8", ["const:7488b8:8", "const:4:8"]]
+ 007488b8 ["CALL", null, ["callee:00c57f60:8"]]
- 0074886c ["COPY", "tmp:0:8", ["const:40:8"]]
- 0074886c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074886c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074886c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007488c4 ["COPY", "tmp:0:8", ["const:110:8"]]
+ 007488c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007488c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007488c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2edec846d5f7a05b9a0a01e8111d9530"></a>

### [`00748880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748880.md) → [`007488d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488d8.md) FUN_007488d8

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
      "definition_site": "007488e4",
      "incomplete_value": false,
      "site": "007488e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074888c",
      "incomplete_value": false,
      "site": "0074888c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:40:8"
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
      "007488e4",
      "DATA",
      [
        "storage",
        "00c78040",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007488e4",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748888 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00748888 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00748888 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00748888 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007488e0 ["COPY", "tmp:0:8", ["const:110:8"]]
+ 007488e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007488e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007488e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f39107383e5399908ff9dee3c555a5c9"></a>

### [`00748ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748ac8.md) → [`00748b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b20.md) FUN_00748b20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748b34",
      "incomplete_value": false,
      "site": "00748b38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748adc",
      "incomplete_value": false,
      "site": "00748ae0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:c0:8"
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
      "00748b38",
      "DATA",
      [
        "storage",
        "00c780c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748b38",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748ad4 ["INT_ADD", "register:40f0:8", ["const:748ad4:8", "const:4:8"]]
- 00748ad4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00748b2c ["INT_ADD", "register:40f0:8", ["const:748b2c:8", "const:4:8"]]
+ 00748b2c ["CALL", null, ["callee:00c57f60:8"]]
- 00748adc ["COPY", "tmp:0:8", ["const:c0:8"]]
- 00748adc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748adc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748adc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748b34 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 00748b34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5adefc8d77f22e829603ea05b10c7f76"></a>

### [`00748aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748aec.md) → [`00748b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b44.md) FUN_00748b44

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
      "definition_site": "00748b48",
      "incomplete_value": false,
      "site": "00748b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748af0",
      "incomplete_value": false,
      "site": "00748af4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:c0:8"
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
      "00748b4c",
      "DATA",
      [
        "storage",
        "00c780c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748b4c",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748af0 ["COPY", "tmp:0:8", ["const:c0:8"]]
- 00748af0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748af0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748af0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748b48 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 00748b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-31f73abaec26e51515ea22e4d715fbe2"></a>

### [`00748f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748f48.md) → [`00748fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fa0.md) FUN_00748fa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0074725c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/0074725c.md) [`00748d24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748d24.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`007472b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007472b4.md) [`00748d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748d7c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00748fac",
      "incomplete_value": false,
      "site": "00748fb0",
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
    "old": {
      "definition_site": "00748f54",
      "incomplete_value": false,
      "site": "00748f58",
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
            "const:f4c:8"
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
      "00748fac",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00748fac",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748f58 ["INT_ADD", "register:40f0:8", ["const:748f58:8", "const:4:8"]]
- 00748f58 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00748fb0 ["INT_ADD", "register:40f0:8", ["const:748fb0:8", "const:4:8"]]
+ 00748fb0 ["CALL", null, ["callee:0043b7b8:8"]]
- 00748f54 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00748f54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00748f54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00748f54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00748fac ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00748fac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00748fac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00748fac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ab6ef0c1450ceee7ef77e120c79c7fbc"></a>

### [`00748fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748fb8.md) → [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md) FUN_00749010

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00748fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748fb8.md) [`007acacc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007acacc.md) [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md) [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.93% / 新版 96.93%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00749160",
      "incomplete_value": false,
      "site": "00749168",
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
    "old": {
      "definition_site": "00749108",
      "incomplete_value": false,
      "site": "00749110",
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
            "const:f53:8"
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
      "definition_site": "00749184",
      "incomplete_value": false,
      "site": "00749190",
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
    "old": {
      "definition_site": "0074912c",
      "incomplete_value": false,
      "site": "00749138",
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
            "const:ee9:8"
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
      "definition_site": "007492b8",
      "incomplete_value": false,
      "site": "007492c0",
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
    "old": {
      "definition_site": "00749260",
      "incomplete_value": false,
      "site": "00749268",
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
            "const:de7:8"
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
      "00749160",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00749184",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "007492b8",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00749160",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00749184",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "007492b8",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00749110 ["INT_ADD", "register:40f0:8", ["const:749110:8", "const:4:8"]]
- 00749110 ["CALL", null, ["callee:00441ed4:8"]]
+ 00749168 ["INT_ADD", "register:40f0:8", ["const:749168:8", "const:4:8"]]
+ 00749168 ["CALL", null, ["callee:00441ed4:8"]]
- 00749138 ["INT_ADD", "register:40f0:8", ["const:749138:8", "const:4:8"]]
- 00749138 ["CALL", null, ["callee:00442834:8"]]
+ 00749190 ["INT_ADD", "register:40f0:8", ["const:749190:8", "const:4:8"]]
+ 00749190 ["CALL", null, ["callee:00442834:8"]]
- 0074922c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0074922c ["CBRANCH", null, ["local:b89:8", "tmp:0:1"]]
+ 00749284 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00749284 ["CBRANCH", null, ["local:b91:8", "tmp:0:1"]]
~~~


<a id="compare-cc8c333c7c21b176502577b27c026a14"></a>

### [`007497a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/007497a4.md) → [`007497fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007497fc.md) FUN_007497fc

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
      "definition_site": "00749808",
      "incomplete_value": false,
      "site": "00749814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007497b0",
      "incomplete_value": false,
      "site": "007497bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:140:8"
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
      "00749814",
      "DATA",
      [
        "storage",
        "00c78140",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749814",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007497b0 ["COPY", "tmp:0:8", ["const:140:8"]]
- 007497b0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007497b0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007497b0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00749808 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 00749808 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00749808 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00749808 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-8c286587fbf5b36c3600eb0749798614"></a>

### [`007497e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/007497e8.md) → [`00749840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749840.md) FUN_00749840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00749858",
      "incomplete_value": false,
      "site": "00749864",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749800",
      "incomplete_value": false,
      "site": "0074980c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:140:8"
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
      "00749864",
      "DATA",
      [
        "storage",
        "00c78140",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749864",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00749800 ["COPY", "tmp:0:8", ["const:140:8"]]
- 00749800 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00749800 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00749800 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00749858 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 00749858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00749858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00749858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00749830 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749830 ["INT_ADD", "register:40f0:8", ["const:749830:8", "const:4:8"]]
- 00749830 ["CALLIND", null, ["register:0:8"]]
+ 00749888 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749888 ["INT_ADD", "register:40f0:8", ["const:749888:8", "const:4:8"]]
+ 00749888 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-38cf065c922df731c4066f57c9ec6d49"></a>

### [`00749844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/00749844.md) → [`0074989c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/0074989c.md) FUN_0074989c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.29% / 新版 61.29%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007498c8",
      "incomplete_value": false,
      "site": "007498c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749870",
      "incomplete_value": false,
      "site": "00749870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:140:8"
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
      "007498c8",
      "DATA",
      [
        "storage",
        "00c78140",
        null,
        "undefined *"
      ]
    ],
    [
      "007498ec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007498a8"
      ]
    ],
    [
      "unmatched:007498b4",
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
      "007498c8",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ],
    [
      "007498ec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00749900"
      ]
    ],
    [
      "0074990c",
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
- 00749858 ["INT_ADD", "register:40f0:8", ["const:749858:8", "const:4:8"]]
- 00749858 ["CALL", null, ["callee:00c57f60:8"]]
+ 007498b0 ["INT_ADD", "register:40f0:8", ["const:7498b0:8", "const:4:8"]]
+ 007498b0 ["CALL", null, ["callee:00c57f60:8"]]
- 00749868 ["COPY", "tmp:0:8", ["const:140:8"]]
- 00749868 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00749868 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00749868 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007498c0 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 007498c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007498c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007498c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00749874 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00749874 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007498cc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007498cc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-bba0fe3234661d5d69ff42291d30819c"></a>

### [`007498d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/007498d4.md) → [`0074992c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/0074992c.md) FUN_0074992c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0074994c",
      "incomplete_value": false,
      "site": "0074994c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007498f4",
      "incomplete_value": false,
      "site": "007498f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:140:8"
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
      "0074994c",
      "DATA",
      [
        "storage",
        "00c78140",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074994c",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007498f0 ["COPY", "tmp:0:8", ["const:140:8"]]
- 007498f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007498f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007498f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00749948 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 00749948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00749948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00749948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00749910 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749910 ["INT_ADD", "register:40f0:8", ["const:749910:8", "const:4:8"]]
- 00749910 ["CALLIND", null, ["register:0:8"]]
+ 00749968 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749968 ["INT_ADD", "register:40f0:8", ["const:749968:8", "const:4:8"]]
+ 00749968 ["CALLIND", null, ["register:0:8"]]
- 00749934 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749934 ["INT_ADD", "register:40f0:8", ["const:749934:8", "const:4:8"]]
- 00749934 ["CALLIND", null, ["register:0:8"]]
+ 0074998c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074998c ["INT_ADD", "register:40f0:8", ["const:74998c:8", "const:4:8"]]
+ 0074998c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5788745c00d30c4d24490b7af6761837"></a>

### [`00749984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/00749984.md) → [`007499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007499dc.md) FUN_007499dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00746cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/00746cec.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007499c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007499c0 ["INT_ADD", "register:40f0:8", ["const:7499c0:8", "const:4:8"]]
- 007499c0 ["CALLIND", null, ["register:0:8"]]
+ 00749a18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749a18 ["INT_ADD", "register:40f0:8", ["const:749a18:8", "const:4:8"]]
+ 00749a18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b637c0a8d1fc8c34689bd541fb09bac5"></a>

### [`007499d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00749/007499d4.md) → [`00749a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749a2c.md) FUN_00749a2c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`005a9d24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9d24.md) [`005a9f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9f54.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.40% / 新版 67.40%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 15件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 50件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00749a1c",
      "incomplete_value": true,
      "site": "00749a34",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00749a88",
      "incomplete_value": true,
      "site": "00749a8c",
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
      "definition_site": "00749a30",
      "incomplete_value": true,
      "site": "00749a34",
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
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:f0f1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00749ac0",
      "incomplete_value": true,
      "site": "00749ad4",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:007499d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007499d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007499dc",
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
      "00749a2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00749a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00749a34",
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
- 00749a34 ["INT_ADD", "register:40f0:8", ["const:749a34:8", "const:4:8"]]
- 00749a34 ["CALL", null, ["callee:005a9d64:8"]]
+ 00749a8c ["INT_ADD", "register:40f0:8", ["const:749a8c:8", "const:4:8"]]
+ 00749a8c ["CALL", null, ["callee:005a9d64:8"]]
+ 00749a34 ["COPY", "tmp:0:8", ["register:40d0:8"]]
+ 00749a34 ["COPY", "tmp:1:8", ["register:40c8:8"]]
+ 00749a34 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 00749a34 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00749a7c ["INT_ADD", "register:40f0:8", ["const:749a7c:8", "const:4:8"]]
- 00749a7c ["CALL", null, ["callee:005a9f94:8"]]
+ 00749ad4 ["INT_ADD", "register:40f0:8", ["const:749ad4:8", "const:4:8"]]
+ 00749ad4 ["CALL", null, ["callee:005a9f94:8"]]
~~~


<a id="compare-70430e6ade22336e35a0667d6010e674"></a>

### [`0074a3a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a3a8.md) → [`0074a400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a400.md) FUN_0074a400

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
      "definition_site": "0074a40c",
      "incomplete_value": false,
      "site": "0074a418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074a3b4",
      "incomplete_value": false,
      "site": "0074a3c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "0074a418",
      "DATA",
      [
        "storage",
        "00c781c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074a418",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074a3b4 ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 0074a3b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0074a3b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0074a3b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0074a40c ["COPY", "tmp:0:8", ["const:290:8"]]
+ 0074a40c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0074a40c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0074a40c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-8a989b85ed7e9f24514057d1ca2641fc"></a>

### [`0074a3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a3ec.md) → [`0074a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a444.md) FUN_0074a444

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0074a410",
      "DATA",
      [
        "storage",
        "00c781c0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0074a414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074a47c"
      ]
    ],
    [
      "unmatched:0074a434",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0074a468",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ],
    [
      "0074a46c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0074a47c"
      ]
    ],
    [
      "0074a48c",
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
- 0074a404 ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 0074a404 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074a404 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074a404 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0074a408 ["COPY", "tmp:0:8", ["const:10:8"]]
- 0074a408 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0074a408 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0074a408 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0074a40c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0074a40c ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0074a40c ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0074a40c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-499046d29bb22fcc82456031206ff370"></a>

### [`0074a448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a448.md) → [`0074a4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a4a0.md) FUN_0074a4a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0074a484"
      ],
      [
        "CONDITIONAL_JUMP",
        "0074a4dc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0074a4d8",
      "incomplete_value": true,
      "site": "0074a4f8",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "0074a4a0",
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
      "unmatched:0074a448",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0074a44c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0074a4cc",
      "DATA",
      [
        "storage",
        "00c781c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074a4a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0074a4a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0074a4cc",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
+ 0074a4a0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 0074a4a0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 0074a4a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
+ 0074a4a0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0074a448 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0074a448 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0074a448 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0074a448 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0074a44c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0074a44c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0074a44c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0074a44c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


