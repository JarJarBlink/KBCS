# v16.0.2 → v16.0.3 · 最優先の変更候補 (53)

[一覧の目次](README.md)

<a id="compare-cc1c6dbaa59f4de3b6dd269a12d5f7b6"></a>

### [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) → [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) FUN_00866114

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`008a6a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a1c.md) [`008a6c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c84.md) [`008a7628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7628.md) [`008a77b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a77b0.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 4件 [`008a79c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a79c8.md) [`008a7c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7c30.md) [`008a85d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a85d4.md) [`008a875c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a875c.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.16% / 新版 65.16%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008651cc",
      "incomplete_value": true,
      "site": "008651d4",
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
                "const:10:8"
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
      "definition_site": "008651d0",
      "incomplete_value": true,
      "site": "008651d4",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008652a0",
      "incomplete_value": true,
      "site": "008652a8",
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
      "unmatched:00865194",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008651a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008661e0"
      ]
    ],
    [
      "00866174",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008651e8"
      ]
    ]
  ],
  "added": [
    [
      "00866140",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00866150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008661e0"
      ]
    ],
    [
      "00866174",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00866194"
      ]
    ]
  ]
}
~~~


~~~diff
- 008651d4 ["INT_ADD", "register:40f0:8", ["const:8651d4:8", "const:4:8"]]
- 008651d4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00866180 ["INT_ADD", "register:40f0:8", ["const:866180:8", "const:4:8"]]
+ 00866180 ["CALL", null, ["callee:00c590f0:8"]]
- 008652a8 ["INT_ADD", "register:40f0:8", ["const:8652a8:8", "const:4:8"]]
- 008652a8 ["CALL", null, ["callee:0043be80:8"]]
+ 00866254 ["INT_ADD", "register:40f0:8", ["const:866254:8", "const:4:8"]]
+ 00866254 ["CALL", null, ["callee:0043be80:8"]]
- 008652e8 ["INT_ADD", "register:40f0:8", ["const:8652e8:8", "const:4:8"]]
- 008652e8 ["CALL", null, ["callee:0043be80:8"]]
+ 00866294 ["INT_ADD", "register:40f0:8", ["const:866294:8", "const:4:8"]]
+ 00866294 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-a4822ae5f02a3bd5dde41a5faec92844"></a>

### [`008655c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008655c0.md) → [`0086656c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/0086656c.md) FUN_0086656c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 0件 
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 008655e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008655e0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086658c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0086658c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0086564c ["COPY", "tmp:0:1", ["register:101:1"]]
- 0086564c ["COPY", "tmp:1:1", ["const:0:1"]]
- 0086564c ["INT_AND", "tmp:2:1", ["tmp:1:1", "const:8:1"]]
- 0086564c ["INT_EQUAL", "register:100:1", ["tmp:2:1", "const:8:1"]]
+ 008665f8 ["COPY", "tmp:0:1", ["register:101:1"]]
+ 008665f8 ["COPY", "tmp:1:1", ["const:0:1"]]
+ 008665f8 ["INT_AND", "tmp:2:1", ["tmp:1:1", "const:8:1"]]
+ 008665f8 ["INT_EQUAL", "register:100:1", ["tmp:2:1", "const:8:1"]]
- 00865650 ["INT_ZEXT", "register:4000:8", ["register:101:1"]]
~~~


<a id="compare-feb07421cbbbeac3496d12e08d873024"></a>

### [`00865660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865660.md) → [`0086660c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/0086660c.md) FUN_0086660c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00865660",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00865664",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086569c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0086660c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00866610",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00866648",
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
- 00865660 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00865660 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00865660 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00865660 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00865664 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00865664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00865670 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00865670 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086661c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0086661c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-c61c65dc032d5a8c567c7a7db634cd65"></a>

### [`008656b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008656b0.md) → [`0086665c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/0086665c.md) FUN_0086665c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00866674",
      "incomplete_value": false,
      "site": "00866678",
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
      "definition_site": "00866670",
      "incomplete_value": true,
      "site": "00866678",
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
      "unmatched:008656ec",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00866698",
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
- 008656cc ["INT_ADD", "register:40f0:8", ["const:8656cc:8", "const:4:8"]]
- 008656cc ["CALL", null, ["callee:00c54d90:8"]]
+ 00866678 ["INT_ADD", "register:40f0:8", ["const:866678:8", "const:4:8"]]
+ 00866678 ["CALL", null, ["callee:00c54d90:8"]]
- 008656c0 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 008656c0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086666c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0086666c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 008656d0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008656d0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0086667c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0086667c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-608fda42fd95f0ffe8ab1e7335c81606"></a>

### [`00865700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865700.md) → [`008666ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/008666ac.md) FUN_008666ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 13件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md) [`008658e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008658e4.md) [`008659a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008659a8.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) · 呼出先 13件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00728124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728124.md) [`00866890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866890.md) [`00866954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866954.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.18% / 新版 81.18%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00865764",
      "incomplete_value": true,
      "site": "0086576c",
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
      "definition_site": "0086579c",
      "incomplete_value": true,
      "site": "008657a0",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "008657b8",
      "incomplete_value": true,
      "site": "008657d0",
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
            "register:40a8:8"
          ]
        ]
      ]
    },
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
      "unmatched:00865704",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00865708",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086570c",
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
      "008666b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008666b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008666b8",
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
- 0086576c ["INT_ADD", "register:40f0:8", ["const:86576c:8", "const:4:8"]]
- 0086576c ["CALL", null, ["callee:00a1b6a4:8"]]
+ 00866718 ["INT_ADD", "register:40f0:8", ["const:866718:8", "const:4:8"]]
+ 00866718 ["CALL", null, ["callee:00a1b6a4:8"]]
- 008657a0 ["INT_ADD", "register:40f0:8", ["const:8657a0:8", "const:4:8"]]
- 008657a0 ["CALL", null, ["callee:0048d1b4:8"]]
+ 0086674c ["INT_ADD", "register:40f0:8", ["const:86674c:8", "const:4:8"]]
+ 0086674c ["CALL", null, ["callee:0048d1b4:8"]]
- 008657d0 ["INT_ADD", "register:40f0:8", ["const:8657d0:8", "const:4:8"]]
- 008657d0 ["CALL", null, ["callee:008bc0f0:8"]]
+ 0086677c ["INT_ADD", "register:40f0:8", ["const:86677c:8", "const:4:8"]]
+ 0086677c ["CALL", null, ["callee:008bc0f0:8"]]
~~~


<a id="compare-bfcf188c36dcd5dca7350d35d55bb66b"></a>

### [`008658e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008658e4.md) → [`00866890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866890.md) FUN_00866890

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00865700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865700.md) · 呼出先 9件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00a346a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346a4.md) [`00a346ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346ac.md) [`00a346e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346e0.md) [`00a346e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346e8.md)
- 新版 呼出元 1件 [`008666ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/008666ac.md) · 呼出先 9件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00a35698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a35698.md) [`00a356a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a356a0.md) [`00a356d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a356d4.md) [`00a356dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a356dc.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.88% / 新版 93.88%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086593c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866940"
      ]
    ]
  ],
  "added": [
    [
      "008668e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866940"
      ]
    ]
  ]
}
~~~


~~~diff
- 008658f4 ["INT_ADD", "register:40f0:8", ["const:8658f4:8", "const:4:8"]]
- 008658f4 ["CALL", null, ["callee:00a36be0:8"]]
+ 008668a0 ["INT_ADD", "register:40f0:8", ["const:8668a0:8", "const:4:8"]]
+ 008668a0 ["CALL", null, ["callee:00a36be0:8"]]
- 008658f8 ["INT_ADD", "register:40f0:8", ["const:8658f8:8", "const:4:8"]]
- 008658f8 ["CALL", null, ["callee:00a39bb4:8"]]
+ 008668a4 ["INT_ADD", "register:40f0:8", ["const:8668a4:8", "const:4:8"]]
+ 008668a4 ["CALL", null, ["callee:00a39bb4:8"]]
- 00865900 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00865900 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 008668ac ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008668ac ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-0369ea362738b85b514861e28017bc42"></a>

### [`008659a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008659a8.md) → [`00866954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866954.md) FUN_00866954

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00865700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865700.md) · 呼出先 6件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008666ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/008666ac.md) · 呼出先 6件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008659f0",
      "READ",
      [
        "storage",
        "002c2cf0",
        null,
        null
      ]
    ],
    [
      "unmatched:008659fc",
      "READ",
      [
        "storage",
        "002b1129",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008659fc",
      "READ",
      [
        "storage",
        "002b1139",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086699c",
      "READ",
      [
        "storage",
        "002c2d40",
        null,
        null
      ]
    ],
    [
      "008669a8",
      "READ",
      [
        "storage",
        "002b1200",
        null,
        "string"
      ]
    ],
    [
      "008669a8",
      "READ",
      [
        "storage",
        "002b1210",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008659d0 ["INT_ADD", "register:40f0:8", ["const:8659d0:8", "const:4:8"]]
- 008659d0 ["CALL", null, ["callee:0048d1e4:8"]]
+ 0086697c ["INT_ADD", "register:40f0:8", ["const:86697c:8", "const:4:8"]]
+ 0086697c ["CALL", null, ["callee:0048d1e4:8"]]
- 008659e0 ["INT_ADD", "register:40f0:8", ["const:8659e0:8", "const:4:8"]]
- 008659e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086698c ["INT_ADD", "register:40f0:8", ["const:86698c:8", "const:4:8"]]
+ 0086698c ["CALL", null, ["callee:00c58f30:8"]]
- 008659f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cf0:8"]]
- 008659f0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 008659f0 ["COPY", "register:5010:8", ["const:0:8"]]
- 008659f0 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-69ba28bbb007d788aa82ff1cc3c8901a"></a>

### [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) → [`00866a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866a88.md) FUN_00866a88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 2件 [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00866a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866a88.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) · 呼出先 2件 [`00866a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866a88.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00866aac",
      "incomplete_value": true,
      "site": "00866ab0",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00865b0c"
      ],
      [
        "FALL_THROUGH",
        "00866ab8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00866ab8",
      "incomplete_value": true,
      "site": "00866abc",
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
      "definition_site": "00865b0c",
      "incomplete_value": true,
      "site": "00865b10",
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
      "unmatched:00865b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866ac4"
      ]
    ]
  ],
  "added": [
    [
      "00866ab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866ac4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00865b04 ["INT_ADD", "register:40f0:8", ["const:865b04:8", "const:4:8"]]
- 00865b04 ["CALL", null, ["local:b0:8"]]
+ 00866ab0 ["INT_ADD", "register:40f0:8", ["const:866ab0:8", "const:4:8"]]
+ 00866ab0 ["CALL", null, ["local:b0:8"]]
- 00865adc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00865adc ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00866a88 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00866a88 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 00865af8 ["INT_ADD", "register:40f0:8", ["const:865af8:8", "const:4:8"]]
- 00865af8 ["CALL", null, ["local:b0:8"]]
+ 00866aa4 ["INT_ADD", "register:40f0:8", ["const:866aa4:8", "const:4:8"]]
+ 00866aa4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-a13267f96230d48ac53e39feb88b3514"></a>

### [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) → [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) FUN_00866af8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) [`008d3644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3644.md) [`008d5ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ad0.md) [`008da7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7f8.md) [`008daefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008daefc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 5件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) [`008d45f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d45f0.md) [`008d6a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6a7c.md) [`008db7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db7a4.md) [`008dbea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbea8.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 74.19% / 新版 74.19%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00866b48",
      "incomplete_value": true,
      "site": "00866b50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:c:8"
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
      "definition_site": "00866b4c",
      "incomplete_value": true,
      "site": "00866b50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00865bb0",
      "incomplete_value": true,
      "site": "00865bb4",
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
      "unmatched:00865b4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00865b50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00865b54",
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
      "00866af8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00866afc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00866b00",
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
- 00865ba4 ["INT_ADD", "register:40f0:8", ["const:865ba4:8", "const:4:8"]]
- 00865ba4 ["CALL", null, ["callee:00c59440:8"]]
+ 00866b50 ["INT_ADD", "register:40f0:8", ["const:866b50:8", "const:4:8"]]
+ 00866b50 ["CALL", null, ["callee:00c59440:8"]]
- 00865bb4 ["INT_ADD", "register:40f0:8", ["const:865bb4:8", "const:4:8"]]
- 00865bb4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00866b60 ["INT_ADD", "register:40f0:8", ["const:866b60:8", "const:4:8"]]
+ 00866b60 ["CALL", null, ["callee:00c58f50:8"]]
- 00865c20 ["INT_ADD", "register:40f0:8", ["const:865c20:8", "const:4:8"]]
- 00865c20 ["CALL", null, ["callee:0046de60:8"]]
+ 00866bcc ["INT_ADD", "register:40f0:8", ["const:866bcc:8", "const:4:8"]]
+ 00866bcc ["CALL", null, ["callee:0046de60:8"]]
~~~


<a id="compare-e896642b42fc20d101c93465b834a155"></a>

### [`00865d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865d00.md) → [`00866cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866cac.md) FUN_00866cac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) · 呼出先 5件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00630be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00630/00630be4.md) [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00848afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848afc.md) · 呼出先 5件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00630f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00630/00630f94.md) [`006530bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006530bc.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.65% / 新版 93.65%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00866d28",
      "incomplete_value": true,
      "site": "00866d30",
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
                "const:98:8"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "00865d94",
      "incomplete_value": true,
      "site": "00865d9c",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00865da4"
      ],
      [
        "FALL_THROUGH",
        "00866d50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00866d50",
      "incomplete_value": true,
      "site": "00866d54",
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
      "definition_site": "00865da4",
      "incomplete_value": true,
      "site": "00865da8",
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
      "unmatched:00865d58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866d1c"
      ]
    ],
    [
      "unmatched:00865da4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866d5c"
      ]
    ],
    [
      "unmatched:00865dcc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ],
  "added": [
    [
      "00866d04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866d1c"
      ]
    ],
    [
      "00866d50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866d5c"
      ]
    ],
    [
      "00866d68",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f50"
      ]
    ]
  ]
}
~~~


~~~diff
- 00865d84 ["INT_ADD", "register:40f0:8", ["const:865d84:8", "const:4:8"]]
- 00865d84 ["CALL", null, ["callee:006530bc:8"]]
+ 00866d30 ["INT_ADD", "register:40f0:8", ["const:866d30:8", "const:4:8"]]
+ 00866d30 ["CALL", null, ["callee:006530bc:8"]]
- 00865d9c ["INT_ADD", "register:40f0:8", ["const:865d9c:8", "const:4:8"]]
- 00865d9c ["CALL", null, ["callee:00676e50:8"]]
+ 00866d48 ["INT_ADD", "register:40f0:8", ["const:866d48:8", "const:4:8"]]
+ 00866d48 ["CALL", null, ["callee:00676e50:8"]]
- 00865d18 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00865d18 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00865d18 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00865d18 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00866cc4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00866cc4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00866cc4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00866cc4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-ceb3667285e13984b4b41f1a03dfdf7c"></a>

### [`00865dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865dfc.md) → [`00866da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866da8.md) FUN_00866da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00865e10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866e30"
      ]
    ]
  ],
  "added": [
    [
      "00866dbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00866e30"
      ]
    ]
  ]
}
~~~


~~~diff
- 00865e10 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00865e10 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
- 00865e28 ["BRANCH", null, ["local:b13:8"]]
+ 00866dd4 ["BRANCH", null, ["local:b12:8"]]
- 00865e34 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 00866de0 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
~~~


<a id="compare-0be22f094a84baf6e86ed1da92553e7f"></a>

### [`00865e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865e94.md) → [`00866e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866e40.md) FUN_00866e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.58% / 新版 72.58%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00865f40",
      "incomplete_value": true,
      "site": "00865f44",
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
            "const:378:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  }
]
~~~


~~~diff
- 00865f44 ["INT_ADD", "register:40f0:8", ["const:865f44:8", "const:4:8"]]
- 00865f44 ["CALL", null, ["callee:0046eb24:8"]]
+ 00866ef0 ["INT_ADD", "register:40f0:8", ["const:866ef0:8", "const:4:8"]]
+ 00866ef0 ["CALL", null, ["callee:0046eb24:8"]]
- 00865eac ["COPY", "register:40e8:8", ["register:8:8"]]
- 00865ec0 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00865ec0 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00865ec0 ["INT_ADD", "register:40b8:8", ["register:40b8:8", "const:18:8"]]
- 00865ec0 ["STORE", null, ["const:1b1:8", "register:40b8:8", "tmp:1:8"]]
~~~


<a id="compare-d80fcd4a15106b7db68b48a9188b06ab"></a>

### [`0086602c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/0086602c.md) → [`00866fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866fd8.md) FUN_00866fd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086602c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866030",
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
      "00866fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00866fdc",
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
- 0086602c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086602c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086602c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086602c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00866030 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00866030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00866034 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-88a7de60361975b56db11044c781a0b7"></a>

### [`00866064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866064.md) → [`00867010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867010.md) FUN_00867010

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008660dc",
      "incomplete_value": true,
      "site": "008660e4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00866064",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866068",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866088",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00867050"
      ]
    ]
  ],
  "added": [
    [
      "00867010",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00867014",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00867034",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00867050"
      ]
    ]
  ]
}
~~~


~~~diff
- 008660e4 ["INT_ADD", "register:40f0:8", ["const:8660e4:8", "const:4:8"]]
- 008660e4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00867090 ["INT_ADD", "register:40f0:8", ["const:867090:8", "const:4:8"]]
+ 00867090 ["CALL", null, ["callee:00c54d90:8"]]
- 00866064 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00866064 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00866064 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00866064 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00866068 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00866068 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00866068 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00866068 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-83f57f9ac50f8bed900b9a4cde803243"></a>

### [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) → [`00867100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867100.md) FUN_00867100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 5件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md) [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 5件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`00868718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868718.md) [`008688f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/008688f0.md) [`00868a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868a0c.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.35% / 新版 85.35%

アドレスに依存する影響 `call_argument_candidate` 13件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 80件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008661b0",
      "incomplete_value": true,
      "site": "008661b4",
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
            "const:188:8"
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
      "definition_site": "008661c8",
      "incomplete_value": true,
      "site": "008661cc",
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
            "const:2d8:8"
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
      "definition_site": "008661e0",
      "incomplete_value": true,
      "site": "008661e4",
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
            "const:428:8"
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
      "unmatched:00866158",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086615c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866160",
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
      "00867104",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00867108",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0086710c",
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
- 008661b4 ["INT_ADD", "register:40f0:8", ["const:8661b4:8", "const:4:8"]]
- 008661b4 ["CALL", null, ["callee:0046f258:8"]]
+ 00867160 ["INT_ADD", "register:40f0:8", ["const:867160:8", "const:4:8"]]
+ 00867160 ["CALL", null, ["callee:0046f258:8"]]
- 008661cc ["INT_ADD", "register:40f0:8", ["const:8661cc:8", "const:4:8"]]
- 008661cc ["CALL", null, ["callee:0046f258:8"]]
+ 00867178 ["INT_ADD", "register:40f0:8", ["const:867178:8", "const:4:8"]]
+ 00867178 ["CALL", null, ["callee:0046f258:8"]]
- 008661e4 ["INT_ADD", "register:40f0:8", ["const:8661e4:8", "const:4:8"]]
- 008661e4 ["CALL", null, ["callee:0046f258:8"]]
+ 00867190 ["INT_ADD", "register:40f0:8", ["const:867190:8", "const:4:8"]]
+ 00867190 ["CALL", null, ["callee:0046f258:8"]]
~~~


<a id="compare-3ec692d9fa15a102451ea958c40f5dae"></a>

### [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) → [`00867a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867a70.md) FUN_00867a70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 4件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) [`00867fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867fb4.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 4件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`00868718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868718.md) [`00868f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868f60.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 58.22% / 新版 58.22%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 66件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00867bf4",
      "incomplete_value": true,
      "site": "00867bf8",
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
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00866c48",
      "incomplete_value": true,
      "site": "00866c4c",
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
            "const:1880:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00866c4c ["INT_ADD", "register:40f0:8", ["const:866c4c:8", "const:4:8"]]
- 00866c4c ["CALL", null, ["callee:0046f258:8"]]
+ 00867bf8 ["INT_ADD", "register:40f0:8", ["const:867bf8:8", "const:4:8"]]
+ 00867bf8 ["CALL", null, ["callee:0046f258:8"]]
- 00866ae8 ["COPY", "register:5008:8", ["register:5000:8"]]
- 00866ae8 ["COPY", "register:5010:8", ["const:0:8"]]
- 00866ae8 ["COPY", "register:5018:8", ["const:0:8"]]
- 00866aec ["INT_ADD", "register:40b8:8", ["register:40b8:8", "const:68:8"]]
- 00866aec ["STORE", null, ["const:1b1:8", "register:40b8:8", "register:5000:16"]]
~~~


<a id="compare-519712c7a8cd1f12136fbe229c20a664"></a>

### [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) → [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) FUN_00867d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 17件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)
- 新版 呼出元 1件 [`00847c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847c54.md) · 呼出先 17件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`005ba2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005ba2d4.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.00% / 新版 72.00%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00867d5c",
      "incomplete_value": true,
      "site": "00867d6c",
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
                "const:1b30:8"
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
    "new": null,
    "old": {
      "definition_site": "00866dcc",
      "incomplete_value": true,
      "site": "00866dd4",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00866e00",
      "incomplete_value": false,
      "site": "00866e04",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:00866da0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866da4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00866da8",
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
      "00867d4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00867d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00867d54",
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
- 00866dc0 ["INT_ADD", "register:40f0:8", ["const:866dc0:8", "const:4:8"]]
- 00866dc0 ["CALL", null, ["callee:005c426c:8"]]
+ 00867d6c ["INT_ADD", "register:40f0:8", ["const:867d6c:8", "const:4:8"]]
+ 00867d6c ["CALL", null, ["callee:005c426c:8"]]
- 00866dd4 ["INT_ADD", "register:40f0:8", ["const:866dd4:8", "const:4:8"]]
- 00866dd4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00867f74 ["INT_ADD", "register:40f0:8", ["const:867f74:8", "const:4:8"]]
+ 00867f74 ["CALL", null, ["callee:00c54d90:8"]]
- 00866e04 ["INT_ADD", "register:40f0:8", ["const:866e04:8", "const:4:8"]]
- 00866e04 ["CALL", null, ["callee:00c54d90:8"]]
+ 00867db0 ["INT_ADD", "register:40f0:8", ["const:867db0:8", "const:4:8"]]
+ 00867db0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-824521b173c7a549e1fbcc1f14475187"></a>

### [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) → [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) FUN_0086806c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 17件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 1件 [`00847c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847c54.md) · 呼出先 17件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 77.99% / 新版 77.99%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008680cc",
      "incomplete_value": true,
      "site": "008680d0",
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
            "const:57a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00867120",
      "incomplete_value": true,
      "site": "00867124",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008680c4",
      "incomplete_value": true,
      "site": "008680d0",
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
                "const:57b0:8"
              ]
            ]
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
      "definition_site": "00868194",
      "incomplete_value": true,
      "site": "00868198",
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
            "const:4670:8"
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
      "unmatched:008670d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868090"
      ]
    ],
    [
      "unmatched:008670fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008680c4"
      ]
    ],
    [
      "unmatched:008671a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008671b4"
      ]
    ]
  ],
  "added": [
    [
      "00868084",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868090"
      ]
    ],
    [
      "008680a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008680c4"
      ]
    ],
    [
      "00868150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868160"
      ]
    ]
  ]
}
~~~


~~~diff
- 00867124 ["INT_ADD", "register:40f0:8", ["const:867124:8", "const:4:8"]]
- 00867124 ["CALL", null, ["callee:005c1b8c:8"]]
+ 008680d0 ["INT_ADD", "register:40f0:8", ["const:8680d0:8", "const:4:8"]]
+ 008680d0 ["CALL", null, ["callee:005c1b8c:8"]]
- 008671ec ["INT_ADD", "register:40f0:8", ["const:8671ec:8", "const:4:8"]]
- 008671ec ["CALL", null, ["callee:00868b5c:8"]]
+ 00868198 ["INT_ADD", "register:40f0:8", ["const:868198:8", "const:4:8"]]
+ 00868198 ["CALL", null, ["callee:00868b5c:8"]]
- 0086741c ["INT_ADD", "register:40f0:8", ["const:86741c:8", "const:4:8"]]
- 0086741c ["CALL", null, ["callee:0067e9d8:8"]]
+ 008683c8 ["INT_ADD", "register:40f0:8", ["const:8683c8:8", "const:4:8"]]
+ 008683c8 ["CALL", null, ["callee:0067e9d8:8"]]
~~~


<a id="compare-cc81eb44c3b7885b219e8f4068fe079b"></a>

### [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) → [`00868718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868718.md) FUN_00868718

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 2件 [`00867100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867100.md) [`00867a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867a70.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868748",
      "incomplete_value": true,
      "site": "0086874c",
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
            "const:120:8"
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
      "definition_site": "008677c0",
      "incomplete_value": true,
      "site": "008677c4",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 008677a0 ["INT_ADD", "register:40f0:8", ["const:8677a0:8", "const:4:8"]]
- 008677a0 ["CALL", null, ["callee:0046eb24:8"]]
+ 0086874c ["INT_ADD", "register:40f0:8", ["const:86874c:8", "const:4:8"]]
+ 0086874c ["CALL", null, ["callee:0046eb24:8"]]
- 008677c4 ["INT_ADD", "register:40f0:8", ["const:8677c4:8", "const:4:8"]]
- 008677c4 ["CALL", null, ["callee:0046eb24:8"]]
+ 00868770 ["INT_ADD", "register:40f0:8", ["const:868770:8", "const:4:8"]]
+ 00868770 ["CALL", null, ["callee:0046eb24:8"]]
- 00867798 ["INT_ADD", "register:40f0:8", ["const:867798:8", "const:4:8"]]
- 00867798 ["CALL", null, ["callee:0046f258:8"]]
+ 00868744 ["INT_ADD", "register:40f0:8", ["const:868744:8", "const:4:8"]]
+ 00868744 ["CALL", null, ["callee:0046f258:8"]]
~~~


<a id="compare-9a5b8459694e1cb9190e8e6a5781b2ad"></a>

### [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md) → [`008688f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/008688f0.md) FUN_008688f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 2件 [`00867100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867100.md) [`00868a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868a0c.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.47% / 新版 73.47%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868918",
      "incomplete_value": true,
      "site": "0086891c",
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
    "old": {
      "definition_site": "0086796c",
      "incomplete_value": true,
      "site": "00867970",
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
                "const:48:8"
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
      "definition_site": "008679c8",
      "incomplete_value": true,
      "site": "008679cc",
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
            "const:2a8:8"
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
      "unmatched:00867948",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086794c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00867950",
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
      "008688f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008688f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008688fc",
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
- 00867970 ["INT_ADD", "register:40f0:8", ["const:867970:8", "const:4:8"]]
- 00867970 ["CALL", null, ["callee:0046f258:8"]]
+ 0086891c ["INT_ADD", "register:40f0:8", ["const:86891c:8", "const:4:8"]]
+ 0086891c ["CALL", null, ["callee:0046f258:8"]]
- 008679cc ["INT_ADD", "register:40f0:8", ["const:8679cc:8", "const:4:8"]]
- 008679cc ["CALL", null, ["callee:0046eb24:8"]]
+ 00868978 ["INT_ADD", "register:40f0:8", ["const:868978:8", "const:4:8"]]
+ 00868978 ["CALL", null, ["callee:0046eb24:8"]]
- 00867948 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00867948 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00867948 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00867948 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1a36e723a289b6135f39791feb09cdf4"></a>

### [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md) → [`00868a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868a0c.md) FUN_00868a0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) · 呼出先 3件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md)
- 新版 呼出元 1件 [`00867100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867100.md) · 呼出先 3件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`008688f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/008688f0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.33% / 新版 98.33%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00867ad0",
      "incomplete_value": true,
      "site": "00867ad4",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  }
]
~~~


~~~diff
- 00867ad4 ["INT_ADD", "register:40f0:8", ["const:867ad4:8", "const:4:8"]]
- 00867ad4 ["CALL", null, ["callee:0046eb24:8"]]
+ 00868a80 ["INT_ADD", "register:40f0:8", ["const:868a80:8", "const:4:8"]]
+ 00868a80 ["CALL", null, ["callee:0046eb24:8"]]
- 00867a78 ["INT_ADD", "register:40f0:8", ["const:867a78:8", "const:4:8"]]
- 00867a78 ["CALL", null, ["callee:008688f0:8"]]
+ 00868a24 ["INT_ADD", "register:40f0:8", ["const:868a24:8", "const:4:8"]]
+ 00868a24 ["CALL", null, ["callee:008688f0:8"]]
- 00867a90 ["INT_ADD", "register:40f0:8", ["const:867a90:8", "const:4:8"]]
- 00867a90 ["CALL", null, ["callee:0046f258:8"]]
+ 00868a3c ["INT_ADD", "register:40f0:8", ["const:868a3c:8", "const:4:8"]]
+ 00868a3c ["CALL", null, ["callee:0046f258:8"]]
~~~


<a id="compare-9ad87d444cfaf5fd40c5df16b8d84ed8"></a>

### [`00867bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867bb0.md) → [`00868b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868b5c.md) FUN_00868b5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 3件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) · 呼出先 3件 [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 53.25% / 新版 53.25%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868b9c",
      "incomplete_value": true,
      "site": "00868ba0",
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
            "const:ab8:8"
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
      "definition_site": "00868c0c",
      "incomplete_value": true,
      "site": "00868c10",
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
            "const:5f8:8"
          ]
        ]
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
      "unmatched:00867bcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00867bdc"
      ]
    ],
    [
      "unmatched:00867bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868b9c"
      ]
    ],
    [
      "unmatched:00867bd8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00867be4"
      ]
    ]
  ],
  "added": [
    [
      "00868b78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868b88"
      ]
    ],
    [
      "00868b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868b9c"
      ]
    ],
    [
      "00868b84",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00868b90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00867bf4 ["INT_ADD", "register:40f0:8", ["const:867bf4:8", "const:4:8"]]
- 00867bf4 ["CALL", null, ["callee:0067e9d8:8"]]
+ 00868ba0 ["INT_ADD", "register:40f0:8", ["const:868ba0:8", "const:4:8"]]
+ 00868ba0 ["CALL", null, ["callee:0067e9d8:8"]]
- 00867c64 ["INT_ADD", "register:40f0:8", ["const:867c64:8", "const:4:8"]]
- 00867c64 ["CALL", null, ["callee:0067e9d8:8"]]
+ 00868c10 ["INT_ADD", "register:40f0:8", ["const:868c10:8", "const:4:8"]]
+ 00868c10 ["CALL", null, ["callee:0067e9d8:8"]]
- 00867bc4 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 00867bc4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00867bc4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00867bc4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4a02c5b6c0459bb8888ef4f777dc96b3"></a>

### [`00867ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867ce4.md) → [`00868c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868c90.md) FUN_00868c90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00867e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867e50.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) · 呼出先 6件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00868dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868dfc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868cf0",
      "incomplete_value": true,
      "site": "00868cf4",
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
            "const:578:8"
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
      "definition_site": "00868d00",
      "incomplete_value": true,
      "site": "00868d04",
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
            "const:508:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00867da4",
      "incomplete_value": true,
      "site": "00867da8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
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
      "unmatched:00867d90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868d58"
      ]
    ],
    [
      "unmatched:00867df0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868db8"
      ]
    ],
    [
      "unmatched:00867dd0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00868d3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868d58"
      ]
    ],
    [
      "00868d9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00868db8"
      ]
    ],
    [
      "00868d7c",
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
- 00867d48 ["INT_ADD", "register:40f0:8", ["const:867d48:8", "const:4:8"]]
- 00867d48 ["CALL", null, ["callee:0046ec04:8"]]
+ 00868cf4 ["INT_ADD", "register:40f0:8", ["const:868cf4:8", "const:4:8"]]
+ 00868cf4 ["CALL", null, ["callee:0046ec04:8"]]
- 00867d58 ["INT_ADD", "register:40f0:8", ["const:867d58:8", "const:4:8"]]
- 00867d58 ["CALL", null, ["callee:0046ec04:8"]]
+ 00868d04 ["INT_ADD", "register:40f0:8", ["const:868d04:8", "const:4:8"]]
+ 00868d04 ["CALL", null, ["callee:0046ec04:8"]]
- 00867da8 ["INT_ADD", "register:40f0:8", ["const:867da8:8", "const:4:8"]]
- 00867da8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00868d54 ["INT_ADD", "register:40f0:8", ["const:868d54:8", "const:4:8"]]
+ 00868d54 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-c419d950a4dbd11cba0b3d8dfd320734"></a>

### [`00867e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867e50.md) → [`00868dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868dfc.md) FUN_00868dfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`00867ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867ce4.md) · 呼出先 4件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) [`00868c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868c90.md) · 呼出先 4件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00867f10",
      "incomplete_value": true,
      "site": "00867f18",
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
      "unmatched:00867f38",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00868ee4",
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
- 00867f18 ["INT_ADD", "register:40f0:8", ["const:867f18:8", "const:4:8"]]
- 00867f18 ["CALL", null, ["callee:00c54d90:8"]]
+ 00868ec4 ["INT_ADD", "register:40f0:8", ["const:868ec4:8", "const:4:8"]]
+ 00868ec4 ["CALL", null, ["callee:00c54d90:8"]]
- 00867e64 ["INT_ADD", "register:40f0:8", ["const:867e64:8", "const:4:8"]]
- 00867e64 ["CALL", null, ["callee:0046ec04:8"]]
+ 00868e10 ["INT_ADD", "register:40f0:8", ["const:868e10:8", "const:4:8"]]
+ 00868e10 ["CALL", null, ["callee:0046ec04:8"]]
- 00867e6c ["INT_ADD", "register:40f0:8", ["const:867e6c:8", "const:4:8"]]
- 00867e6c ["CALL", null, ["callee:0046ec04:8"]]
+ 00868e18 ["INT_ADD", "register:40f0:8", ["const:868e18:8", "const:4:8"]]
+ 00868e18 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-9de08b1a02ce4ab441f1c11e4a249988"></a>

### [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) → [`00868f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868f1c.md) FUN_00868f1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) [`00b130cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b130cc.md) · 呼出先 2件 [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) [`00868f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868f1c.md) [`00b140c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b140c0.md) · 呼出先 2件 [`00868f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868f1c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868f38",
      "incomplete_value": true,
      "site": "00868f3c",
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
    "old": {
      "definition_site": "00867f8c",
      "incomplete_value": true,
      "site": "00867f90",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00867f98",
      "incomplete_value": true,
      "site": "00867f9c",
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
      "definition_site": "00867f94",
      "incomplete_value": true,
      "site": "00867f9c",
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
- 00867f90 ["INT_ADD", "register:40f0:8", ["const:867f90:8", "const:4:8"]]
- 00867f90 ["CALL", null, ["local:b0:8"]]
+ 00868f3c ["INT_ADD", "register:40f0:8", ["const:868f3c:8", "const:4:8"]]
+ 00868f3c ["CALL", null, ["local:b0:8"]]
- 00867f9c ["INT_ADD", "register:40f0:8", ["const:867f9c:8", "const:4:8"]]
- 00867f9c ["CALL", null, ["local:b0:8"]]
+ 00868f48 ["INT_ADD", "register:40f0:8", ["const:868f48:8", "const:4:8"]]
+ 00868f48 ["CALL", null, ["local:b0:8"]]
- 00867f70 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00867f70 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00868f1c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00868f1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-ae62739281869c4f4437771e59212f0b"></a>

### [`00867fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867fb4.md) → [`00868f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/00868f60.md) FUN_00868f60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) · 呼出先 3件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)
- 新版 呼出元 1件 [`00867a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867a70.md) · 呼出先 3件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.04% / 新版 87.04%

アドレスに依存する影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00868f9c",
      "incomplete_value": true,
      "site": "00868fa0",
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
              [
                "leaf",
                "const:38:8"
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
    "old": {
      "definition_site": "00867ff0",
      "incomplete_value": true,
      "site": "00867ff4",
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
            "const:30:8"
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
      "definition_site": "0086801c",
      "incomplete_value": true,
      "site": "00868020",
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
            "const:1b8:8"
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
      "definition_site": "00868034",
      "incomplete_value": true,
      "site": "00868038",
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
            "const:228:8"
          ]
        ]
      ]
    },
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
      "unmatched:00867fb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00867fb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00867fbc",
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
      "00868f60",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00868f64",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00868f68",
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
- 00867ff4 ["INT_ADD", "register:40f0:8", ["const:867ff4:8", "const:4:8"]]
- 00867ff4 ["CALL", null, ["callee:0046f258:8"]]
+ 00868fa0 ["INT_ADD", "register:40f0:8", ["const:868fa0:8", "const:4:8"]]
+ 00868fa0 ["CALL", null, ["callee:0046f258:8"]]
- 00868020 ["INT_ADD", "register:40f0:8", ["const:868020:8", "const:4:8"]]
- 00868020 ["CALL", null, ["callee:0046eb24:8"]]
+ 00868fcc ["INT_ADD", "register:40f0:8", ["const:868fcc:8", "const:4:8"]]
+ 00868fcc ["CALL", null, ["callee:0046eb24:8"]]
- 00868038 ["INT_ADD", "register:40f0:8", ["const:868038:8", "const:4:8"]]
- 00868038 ["CALL", null, ["callee:0046eb24:8"]]
+ 00868fe4 ["INT_ADD", "register:40f0:8", ["const:868fe4:8", "const:4:8"]]
+ 00868fe4 ["CALL", null, ["callee:0046eb24:8"]]
~~~


<a id="compare-0b6578e377890e77542ddceeac54895d"></a>

### [`0086811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086811c.md) → [`008690c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008690c8.md) FUN_008690c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 3件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) · 呼出先 3件 [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 80.43% / 新版 80.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00869204",
      "incomplete_value": true,
      "site": "00869208",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:00868138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00868148"
      ]
    ],
    [
      "unmatched:0086813c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869108"
      ]
    ],
    [
      "unmatched:00868144",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008690fc"
      ]
    ]
  ],
  "added": [
    [
      "008690e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008690f4"
      ]
    ],
    [
      "008690e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869108"
      ]
    ],
    [
      "008690f0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008690fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086825c ["INT_ADD", "register:40f0:8", ["const:86825c:8", "const:4:8"]]
- 0086825c ["CALL", null, ["callee:00c58f20:8"]]
+ 00869208 ["INT_ADD", "register:40f0:8", ["const:869208:8", "const:4:8"]]
+ 00869208 ["CALL", null, ["callee:00c58f20:8"]]
- 00868134 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 00868134 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 00868134 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 00868134 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00868138 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-bb4f2c50c4551e029845ed120db47033"></a>

### [`0086828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086828c.md) → [`00869238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869238.md) FUN_00869238

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 3件 [`00868730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868730.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) · 呼出先 3件 [`008696dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008696dc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.82% / 新版 90.82%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008682a4",
      "incomplete_value": true,
      "site": "008682ac",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008692c4",
      "incomplete_value": true,
      "site": "008692cc",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "0086934c",
      "incomplete_value": false,
      "site": "00869350",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
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
      "unmatched:008682b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869278"
      ]
    ],
    [
      "unmatched:008683b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869370"
      ]
    ],
    [
      "unmatched:008682f0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0086925c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869278"
      ]
    ],
    [
      "0086935c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869370"
      ]
    ],
    [
      "0086929c",
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
- 008682ac ["INT_ADD", "register:40f0:8", ["const:8682ac:8", "const:4:8"]]
- 008682ac ["CALL", null, ["callee:00c54d90:8"]]
+ 00869258 ["INT_ADD", "register:40f0:8", ["const:869258:8", "const:4:8"]]
+ 00869258 ["CALL", null, ["callee:00c54d90:8"]]
- 00868320 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868320 ["INT_ADD", "register:40f0:8", ["const:868320:8", "const:4:8"]]
- 00868320 ["CALLIND", null, ["register:0:8"]]
+ 008692cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008692cc ["INT_ADD", "register:40f0:8", ["const:8692cc:8", "const:4:8"]]
+ 008692cc ["CALLIND", null, ["register:0:8"]]
- 008683a4 ["INT_ADD", "register:40f0:8", ["const:8683a4:8", "const:4:8"]]
- 008683a4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869350 ["INT_ADD", "register:40f0:8", ["const:869350:8", "const:4:8"]]
+ 00869350 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-5006cac3bec60d01d53b17729dc688f7"></a>

### [`00868414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868414.md) → [`008693c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008693c0.md) FUN_008693c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 5件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) · 呼出先 5件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.42% / 新版 84.42%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086842c",
      "incomplete_value": true,
      "site": "00868430",
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
            "const:308:8"
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
      "definition_site": "0086847c",
      "incomplete_value": true,
      "site": "00868480",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086946c",
      "incomplete_value": false,
      "site": "00869470",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:00868498",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869460"
      ]
    ],
    [
      "unmatched:008684c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869490"
      ]
    ],
    [
      "unmatched:008684a8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00869444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869460"
      ]
    ],
    [
      "00869474",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869490"
      ]
    ],
    [
      "00869454",
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
- 00868430 ["INT_ADD", "register:40f0:8", ["const:868430:8", "const:4:8"]]
- 00868430 ["CALL", null, ["callee:0046ec04:8"]]
+ 008693dc ["INT_ADD", "register:40f0:8", ["const:8693dc:8", "const:4:8"]]
+ 008693dc ["CALL", null, ["callee:0046ec04:8"]]
- 00868480 ["INT_ADD", "register:40f0:8", ["const:868480:8", "const:4:8"]]
- 00868480 ["CALL", null, ["callee:0046f33c:8"]]
+ 0086942c ["INT_ADD", "register:40f0:8", ["const:86942c:8", "const:4:8"]]
+ 0086942c ["CALL", null, ["callee:0046f33c:8"]]
- 008684c4 ["INT_ADD", "register:40f0:8", ["const:8684c4:8", "const:4:8"]]
- 008684c4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869470 ["INT_ADD", "register:40f0:8", ["const:869470:8", "const:4:8"]]
+ 00869470 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-e6ba8d8815226580bf92a98b4e173a87"></a>

### [`00868548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868548.md) → [`008694f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008694f4.md) FUN_008694f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 4件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) · 呼出先 4件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.52% / 新版 81.52%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086953c",
      "incomplete_value": true,
      "site": "00869540",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00869544",
      "incomplete_value": true,
      "site": "00869548",
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
            "const:3c0:8"
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
      "definition_site": "00869564",
      "incomplete_value": true,
      "site": "00869568",
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
            "const:2e0:8"
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
      "unmatched:00868548",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086854c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086857c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869544"
      ]
    ]
  ],
  "added": [
    [
      "008694f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008694f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00869528",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869544"
      ]
    ]
  ]
}
~~~


~~~diff
- 00868594 ["INT_ADD", "register:40f0:8", ["const:868594:8", "const:4:8"]]
- 00868594 ["CALL", null, ["callee:00c58f20:8"]]
+ 00869540 ["INT_ADD", "register:40f0:8", ["const:869540:8", "const:4:8"]]
+ 00869540 ["CALL", null, ["callee:00c58f20:8"]]
- 0086859c ["INT_ADD", "register:40f0:8", ["const:86859c:8", "const:4:8"]]
- 0086859c ["CALL", null, ["callee:0046ec04:8"]]
+ 00869548 ["INT_ADD", "register:40f0:8", ["const:869548:8", "const:4:8"]]
+ 00869548 ["CALL", null, ["callee:0046ec04:8"]]
- 008685bc ["INT_ADD", "register:40f0:8", ["const:8685bc:8", "const:4:8"]]
- 008685bc ["CALL", null, ["callee:0046ec04:8"]]
+ 00869568 ["INT_ADD", "register:40f0:8", ["const:869568:8", "const:4:8"]]
+ 00869568 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-92b4515fbf95604818b4834c25595f0c"></a>

### [`008686b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008686b8.md) → [`00869664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869664.md) FUN_00869664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008686f8"
      ],
      [
        "FALL_THROUGH",
        "008696a4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008696a4",
      "incomplete_value": true,
      "site": "008696a8",
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
      "definition_site": "008686f8",
      "incomplete_value": true,
      "site": "008686fc",
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
      "0086968c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008686f4"
      ]
    ],
    [
      "unmatched:008686f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008696b4"
      ]
    ],
    [
      "unmatched:008686f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869694"
      ]
    ]
  ],
  "added": [
    [
      "0086968c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008696a0"
      ]
    ],
    [
      "0086969c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008696b4"
      ]
    ],
    [
      "008696a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869694"
      ]
    ]
  ]
}
~~~


~~~diff
- 008686cc ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 008686cc ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00869678 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00869678 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 008686e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008686e0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0086968c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0086968c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008686e4 ["BRANCH", null, ["local:b10:8"]]
+ 00869690 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-911625e6aa9156a5a7b0f4cf0ba7d754"></a>

### [`00868730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868730.md) → [`008696dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008696dc.md) FUN_008696dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0086828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086828c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00869238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869238.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 76.67% / 新版 76.67%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008687e4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "unmatched:008687e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869774"
      ]
    ],
    [
      "unmatched:00868818",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869834"
      ]
    ]
  ],
  "added": [
    [
      "00869790",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "00869794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869774"
      ]
    ],
    [
      "008697c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869834"
      ]
    ]
  ]
}
~~~


~~~diff
- 00868748 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00868748 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 008696f4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 008696f4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 0086875c ["BRANCH", null, ["local:b8:8"]]
+ 00869708 ["BRANCH", null, ["local:b9:8"]]
- 00868768 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00869714 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-b14d9a59df68b06679bc9d20f50ecf1d"></a>

### [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) → [`00869844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869844.md) FUN_00869844

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) · 呼出先 2件 [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) [`00869844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869844.md) · 呼出先 2件 [`00869844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869844.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086889c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008688a0",
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
      "00869848",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086984c",
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
- 00868898 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00868898 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00869844 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00869844 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0086889c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086889c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086889c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086889c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008688a0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008688a0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008688a0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008688a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-73fb58e96d57c91bef497f5a64fcff90"></a>

### [`00868920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868920.md) → [`008698cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008698cc.md) FUN_008698cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00868920",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00868924",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00868928",
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
      "008698cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008698d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008698d4",
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
- 00868920 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00868920 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00868920 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00868920 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00868924 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00868924 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00868924 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00868924 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00868928 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00868928 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00868928 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00868928 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e188a7d13f8c39dd1a5cc0f4ac0a9af7"></a>

### [`008689b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008689b8.md) → [`00869964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869964.md) FUN_00869964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008469fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/008469fc.md) · 呼出先 7件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006fb0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb0cc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`008479a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/008479a8.md) · 呼出先 7件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`006fb47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb47c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008689ec",
      "incomplete_value": true,
      "site": "008689f0",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008689e8",
      "incomplete_value": true,
      "site": "008689f0",
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
      "unmatched:00868a18",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008699c4",
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
- 008689f0 ["INT_ADD", "register:40f0:8", ["const:8689f0:8", "const:4:8"]]
- 008689f0 ["CALL", null, ["callee:006fb47c:8"]]
+ 0086999c ["INT_ADD", "register:40f0:8", ["const:86999c:8", "const:4:8"]]
+ 0086999c ["CALL", null, ["callee:006fb47c:8"]]
- 008689d4 ["INT_ADD", "register:40f0:8", ["const:8689d4:8", "const:4:8"]]
- 008689d4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00869980 ["INT_ADD", "register:40f0:8", ["const:869980:8", "const:4:8"]]
+ 00869980 ["CALL", null, ["callee:00c58f50:8"]]
- 008689e4 ["INT_ADD", "register:40f0:8", ["const:8689e4:8", "const:4:8"]]
- 008689e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00869990 ["INT_ADD", "register:40f0:8", ["const:869990:8", "const:4:8"]]
+ 00869990 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8fe4b28865c66d2c05363f88213e8bd1"></a>

### [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) → [`008699fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008699fc.md) FUN_008699fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 8件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00868b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868b18.md) [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md)
- 新版 呼出元 1件 [`00847c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847c54.md) · 呼出先 8件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00869ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869ac4.md) [`00869c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c24.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00868aa0",
      "incomplete_value": true,
      "site": "00868aa4",
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
    "new": null,
    "old": {
      "definition_site": "00868ad4",
      "incomplete_value": false,
      "site": "00868ad8",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00868ad0",
      "incomplete_value": true,
      "site": "00868ad8",
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
    "ordinal": 9,
    "slot": 2
  }
]
~~~


~~~diff
- 00868aa4 ["INT_ADD", "register:40f0:8", ["const:868aa4:8", "const:4:8"]]
- 00868aa4 ["CALL", null, ["callee:00c58f20:8"]]
+ 00869a50 ["INT_ADD", "register:40f0:8", ["const:869a50:8", "const:4:8"]]
+ 00869a50 ["CALL", null, ["callee:00c58f20:8"]]
- 00868ad8 ["INT_ADD", "register:40f0:8", ["const:868ad8:8", "const:4:8"]]
- 00868ad8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869a84 ["INT_ADD", "register:40f0:8", ["const:869a84:8", "const:4:8"]]
+ 00869a84 ["CALL", null, ["callee:00c54d90:8"]]
- 00868b00 ["INT_ADD", "register:40f0:8", ["const:868b00:8", "const:4:8"]]
- 00868b00 ["CALL", null, ["callee:00869c24:8"]]
+ 00869aac ["INT_ADD", "register:40f0:8", ["const:869aac:8", "const:4:8"]]
+ 00869aac ["CALL", null, ["callee:00869c24:8"]]
~~~


<a id="compare-644123826f3abeac24da658c37fec5fd"></a>

### [`00868b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868b18.md) → [`00869ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869ac4.md) FUN_00869ac4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) [`008e3da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3da4.md) [`008e9614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9614.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`008699fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008699fc.md) [`008e4d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4d50.md) [`008ea5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea5c0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00868bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869bc0"
      ]
    ],
    [
      "unmatched:00868bf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869bb4"
      ]
    ],
    [
      "00869bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00868c3c"
      ]
    ]
  ],
  "added": [
    [
      "00869b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869bc0"
      ]
    ],
    [
      "00869b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869bb4"
      ]
    ],
    [
      "00869bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869be8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00868b60 ["INT_ADD", "register:40f0:8", ["const:868b60:8", "const:4:8"]]
- 00868b60 ["CALL", null, ["callee:00c58f50:8"]]
+ 00869b0c ["INT_ADD", "register:40f0:8", ["const:869b0c:8", "const:4:8"]]
+ 00869b0c ["CALL", null, ["callee:00c58f50:8"]]
- 00868b70 ["INT_ADD", "register:40f0:8", ["const:868b70:8", "const:4:8"]]
- 00868b70 ["CALL", null, ["callee:00c58f50:8"]]
+ 00869b1c ["INT_ADD", "register:40f0:8", ["const:869b1c:8", "const:4:8"]]
+ 00869b1c ["CALL", null, ["callee:00c58f50:8"]]
- 00868ba8 ["INT_ADD", "register:40f0:8", ["const:868ba8:8", "const:4:8"]]
- 00868ba8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00869b54 ["INT_ADD", "register:40f0:8", ["const:869b54:8", "const:4:8"]]
+ 00869b54 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d2b2ef9860d58a4970d31b6372a24462"></a>

### [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) → [`00869c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c24.md) FUN_00869c24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) [`008e1d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1d98.md) [`008e45b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45b4.md) · 呼出先 2件 [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`008699fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/008699fc.md) [`00869c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c24.md) [`008e2d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e2/008e2d44.md) [`008e5560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5560.md) · 呼出先 2件 [`00869c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c24.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00868c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00868c80",
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
      "00869c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00869c2c",
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
- 00868c78 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00868c78 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00869c24 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00869c24 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00868c7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00868c7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00868c7c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00868c7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00868c80 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00868c80 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00868c80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00868c80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1d1b55662f7857f48a775bdfc7068446"></a>

### [`00868cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868cbc.md) → [`00869c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c68.md) FUN_00869c68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008472f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008472f4.md) · 呼出先 5件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008482a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008482a0.md) · 呼出先 5件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00869fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869fb0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00869cac",
      "incomplete_value": true,
      "site": "00869cb4",
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
                "const:1d0:8"
              ]
            ]
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
      "unmatched:00868d38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869d14"
      ]
    ]
  ],
  "added": [
    [
      "00869ce4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869d14"
      ]
    ]
  ]
}
~~~


~~~diff
- 00868d08 ["INT_ADD", "register:40f0:8", ["const:868d08:8", "const:4:8"]]
- 00868d08 ["CALL", null, ["callee:00676e50:8"]]
+ 00869cb4 ["INT_ADD", "register:40f0:8", ["const:869cb4:8", "const:4:8"]]
+ 00869cb4 ["CALL", null, ["callee:00676e50:8"]]
- 00868ce0 ["INT_ADD", "register:40f0:8", ["const:868ce0:8", "const:4:8"]]
- 00868ce0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869c8c ["INT_ADD", "register:40f0:8", ["const:869c8c:8", "const:4:8"]]
+ 00869c8c ["CALL", null, ["callee:00c54d90:8"]]
- 00868cf4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868cf4 ["INT_ADD", "register:40f0:8", ["const:868cf4:8", "const:4:8"]]
- 00868cf4 ["CALLIND", null, ["register:0:8"]]
+ 00869ca0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00869ca0 ["INT_ADD", "register:40f0:8", ["const:869ca0:8", "const:4:8"]]
+ 00869ca0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a77caea58b519d2e9ca435de5a3d6e84"></a>

### [`00868da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868da4.md) → [`00869d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869d50.md) FUN_00869d50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008472f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008472f4.md) · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`008482a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008482a0.md) · 呼出先 7件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 74.34% / 新版 74.34%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00869d98",
      "incomplete_value": true,
      "site": "00869da0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00868ec4",
      "incomplete_value": true,
      "site": "00868ec8",
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
            "const:228:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00868fb0",
      "incomplete_value": false,
      "site": "00868fb4",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 35,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00868df8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869dc0"
      ]
    ],
    [
      "00869ea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869df0"
      ]
    ],
    [
      "00869df4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00868e74"
      ]
    ]
  ],
  "added": [
    [
      "00869da4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869dc0"
      ]
    ],
    [
      "00869dd0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "00869dd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00869df0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00868df4 ["INT_ADD", "register:40f0:8", ["const:868df4:8", "const:4:8"]]
- 00868df4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869da0 ["INT_ADD", "register:40f0:8", ["const:869da0:8", "const:4:8"]]
+ 00869da0 ["CALL", null, ["callee:00c54d90:8"]]
- 00868ec8 ["INT_ADD", "register:40f0:8", ["const:868ec8:8", "const:4:8"]]
- 00868ec8 ["CALL", null, ["callee:0046ec04:8"]]
+ 00869e74 ["INT_ADD", "register:40f0:8", ["const:869e74:8", "const:4:8"]]
+ 00869e74 ["CALL", null, ["callee:0046ec04:8"]]
- 00868fb4 ["INT_ADD", "register:40f0:8", ["const:868fb4:8", "const:4:8"]]
- 00868fb4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00869f60 ["INT_ADD", "register:40f0:8", ["const:869f60:8", "const:4:8"]]
+ 00869f60 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-dbf93b9471108b18a620b7ad9a360090"></a>

### [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) → [`00869fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869fb0.md) FUN_00869fb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00868cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868cbc.md) [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 3件 [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`00869050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869050.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`00869c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c68.md) [`00869fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869fb0.md) [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) · 呼出先 3件 [`00869fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869fb0.md) [`00869ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869ffc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 63.16% / 新版 63.16%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00869fcc",
      "incomplete_value": true,
      "site": "00869fd0",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00869020",
      "incomplete_value": true,
      "site": "00869024",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086902c",
      "incomplete_value": true,
      "site": "00869030",
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
      "definition_site": "00869028",
      "incomplete_value": true,
      "site": "00869030",
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
      "unmatched:00869008",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086900c",
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
      "00869fb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00869fb8",
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
- 00869024 ["INT_ADD", "register:40f0:8", ["const:869024:8", "const:4:8"]]
- 00869024 ["CALL", null, ["local:b0:8"]]
+ 00869fd0 ["INT_ADD", "register:40f0:8", ["const:869fd0:8", "const:4:8"]]
+ 00869fd0 ["CALL", null, ["local:b0:8"]]
- 00869030 ["INT_ADD", "register:40f0:8", ["const:869030:8", "const:4:8"]]
- 00869030 ["CALL", null, ["local:b0:8"]]
+ 00869fdc ["INT_ADD", "register:40f0:8", ["const:869fdc:8", "const:4:8"]]
+ 00869fdc ["CALL", null, ["local:b0:8"]]
- 00869004 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869004 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00869fb0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00869fb0 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-6e9d8e358032c7d7b39c6cd659c72143"></a>

### [`00869050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869050.md) → [`00869ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869ffc.md) FUN_00869ffc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`00869fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869fb0.md) [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) · 呼出先 3件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00869064",
      "incomplete_value": true,
      "site": "00869068",
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
            "const:d8:8"
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
      "definition_site": "0086905c",
      "incomplete_value": true,
      "site": "00869068",
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
                "const:e0:8"
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
    "new": {
      "definition_site": "0086a054",
      "incomplete_value": true,
      "site": "0086a05c",
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
      "unmatched:00869050",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869054",
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
      "00869ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086a000",
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
- 00869068 ["INT_ADD", "register:40f0:8", ["const:869068:8", "const:4:8"]]
- 00869068 ["CALL", null, ["callee:00676e50:8"]]
+ 0086a014 ["INT_ADD", "register:40f0:8", ["const:86a014:8", "const:4:8"]]
+ 0086a014 ["CALL", null, ["callee:00676e50:8"]]
- 008690b0 ["INT_ADD", "register:40f0:8", ["const:8690b0:8", "const:4:8"]]
- 008690b0 ["CALL", null, ["callee:00676e50:8"]]
+ 0086a05c ["INT_ADD", "register:40f0:8", ["const:86a05c:8", "const:4:8"]]
+ 0086a05c ["CALL", null, ["callee:00676e50:8"]]
- 008690d0 ["INT_ADD", "register:40f0:8", ["const:8690d0:8", "const:4:8"]]
- 008690d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0086a07c ["INT_ADD", "register:40f0:8", ["const:86a07c:8", "const:4:8"]]
+ 0086a07c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-75c0ecec9d0c5a04b3a90134ec5def7e"></a>

### [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) → [`0086a0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a0ec.md) FUN_0086a0ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00a64fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64fa8.md) · 呼出先 3件 [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086a0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a0ec.md) [`00a65f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65f9c.md) · 呼出先 3件 [`0086a0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a0ec.md) [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869140 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869140 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086a0ec ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086a0ec ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00869160 ["INT_ADD", "register:40f0:8", ["const:869160:8", "const:4:8"]]
- 00869160 ["CALL", null, ["local:b0:8"]]
+ 0086a10c ["INT_ADD", "register:40f0:8", ["const:86a10c:8", "const:4:8"]]
+ 0086a10c ["CALL", null, ["local:b0:8"]]
- 0086916c ["INT_ADD", "register:40f0:8", ["const:86916c:8", "const:4:8"]]
- 0086916c ["CALL", null, ["local:b0:8"]]
+ 0086a118 ["INT_ADD", "register:40f0:8", ["const:86a118:8", "const:4:8"]]
+ 0086a118 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-05986a4431ae01f3cc558cbd927cadba"></a>

### [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) → [`0086a18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a18c.md) FUN_0086a18c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a3804c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3804c.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) [`00a3a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a06c.md) [`00a3a2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a2bc.md) · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`008483e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008483e8.md) [`00a39040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39040.md) [`00a39150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39150.md) [`00a3b060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b060.md) [`00a3b2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b2b0.md) · 呼出先 2件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00869248"
      ],
      [
        "FALL_THROUGH",
        "0086a1f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086a1f4",
      "incomplete_value": true,
      "site": "0086a1f8",
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
      "definition_site": "00869248",
      "incomplete_value": true,
      "site": "0086924c",
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
      "unmatched:008691e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008691e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008691e8",
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
      "0086a18c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086a190",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086a194",
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
- 008691e0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008691e0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008691e0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008691e0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008691e4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008691e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 008691e8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008691e8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008691e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008691e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-40d870d5a8a6c28fe6be94a22b533183"></a>

### [`00869280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869280.md) → [`0086a22c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a22c.md) FUN_0086a22c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a380b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a380b8.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) [`00a39e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39e2c.md) · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`008483e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008483e8.md) [`00a390ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a390ac.md) [`00a39150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39150.md) [`00a3ae20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3ae20.md) · 呼出先 2件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a260",
      "incomplete_value": true,
      "site": "0086a264",
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
            "const:30:8"
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
      "definition_site": "0086a25c",
      "incomplete_value": true,
      "site": "0086a264",
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
                "const:38:8"
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
- 008692b8 ["INT_ADD", "register:40f0:8", ["const:8692b8:8", "const:4:8"]]
- 008692b8 ["CALL", null, ["callee:0046d7f0:8"]]
+ 0086a264 ["INT_ADD", "register:40f0:8", ["const:86a264:8", "const:4:8"]]
+ 0086a264 ["CALL", null, ["callee:0046d7f0:8"]]
- 00869298 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00869298 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 0086a244 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 0086a244 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008692a8 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 0086a254 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-5dac8c4cf78b9e918eef70f28d31fa22"></a>

### [`00869364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869364.md) → [`0086a310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a310.md) FUN_0086a310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a38120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38120.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`008483e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008483e8.md) [`00a39114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39114.md) [`00a39150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39150.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00869364",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869368",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086936c",
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
      "0086a310",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0086a314",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086a318",
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
- 00869364 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00869364 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00869364 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00869364 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00869368 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00869368 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 0086936c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0086936c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0086936c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0086936c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-38ff2e3f7d55c8b675a25e8e9ff807ea"></a>

### [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) → [`0086a3c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a3c4.md) FUN_0086a3c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847508.md) [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) · 呼出先 2件 [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008484b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008484b4.md) [`0086a3c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a3c4.md) · 呼出先 2件 [`0086a3c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a3c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a3e4",
      "incomplete_value": true,
      "site": "0086a3ec",
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a3f8",
      "incomplete_value": true,
      "site": "0086a3fc",
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
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00869440 ["INT_ADD", "register:40f0:8", ["const:869440:8", "const:4:8"]]
- 00869440 ["CALL", null, ["local:b0:8"]]
+ 0086a3ec ["INT_ADD", "register:40f0:8", ["const:86a3ec:8", "const:4:8"]]
+ 0086a3ec ["CALL", null, ["local:b0:8"]]
- 00869450 ["INT_ADD", "register:40f0:8", ["const:869450:8", "const:4:8"]]
- 00869450 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a3fc ["INT_ADD", "register:40f0:8", ["const:86a3fc:8", "const:4:8"]]
+ 0086a3fc ["CALL", null, ["callee:00c58f50:8"]]
- 00869418 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869418 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 0086a3c4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086a3c4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-861bb8377715ef23fbcbdf0b6ffaf3b9"></a>

### [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) → [`0086a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a508.md) FUN_0086a508

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`008478b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008478b8.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) · 呼出先 2件 [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`00848864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848864.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a508.md) · 呼出先 2件 [`0086a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a508.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a524",
      "incomplete_value": true,
      "site": "0086a528",
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
    "old": {
      "definition_site": "00869578",
      "incomplete_value": true,
      "site": "0086957c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 0086957c ["INT_ADD", "register:40f0:8", ["const:86957c:8", "const:4:8"]]
- 0086957c ["CALL", null, ["local:b0:8"]]
+ 0086a528 ["INT_ADD", "register:40f0:8", ["const:86a528:8", "const:4:8"]]
+ 0086a528 ["CALL", null, ["local:b0:8"]]
- 0086955c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086955c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086a508 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086a508 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00869578 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-98752eef74839bae7a6fac2078b76364"></a>

### [`008695a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008695a0.md) → [`0086a54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a54c.md) FUN_0086a54c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00848afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848afc.md) · 呼出先 6件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.12% / 新版 81.12%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a5f0",
      "incomplete_value": true,
      "site": "0086a5f8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086a684",
      "incomplete_value": true,
      "site": "0086a688",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00869794"
      ],
      [
        "FALL_THROUGH",
        "0086a740"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086a740",
      "incomplete_value": true,
      "site": "0086a744",
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
      "definition_site": "00869794",
      "incomplete_value": true,
      "site": "00869798",
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
      "unmatched:008695b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a5ac"
      ]
    ],
    [
      "unmatched:008695c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a5a4"
      ]
    ],
    [
      "0086a5d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00869658"
      ]
    ]
  ],
  "added": [
    [
      "0086a564",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a5ac"
      ]
    ],
    [
      "0086a574",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a5a4"
      ]
    ],
    [
      "0086a5d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a604"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086967c ["COPY", "register:0:8", ["register:4040:8"]]
- 0086967c ["INT_ADD", "register:40f0:8", ["const:86967c:8", "const:4:8"]]
- 0086967c ["CALLIND", null, ["register:0:8"]]
+ 0086a5f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086a5f8 ["INT_ADD", "register:40f0:8", ["const:86a5f8:8", "const:4:8"]]
+ 0086a5f8 ["CALLIND", null, ["register:0:8"]]
- 008696dc ["INT_ADD", "register:40f0:8", ["const:8696dc:8", "const:4:8"]]
- 008696dc ["CALL", null, ["callee:00c58f20:8"]]
+ 0086a688 ["INT_ADD", "register:40f0:8", ["const:86a688:8", "const:4:8"]]
+ 0086a688 ["CALL", null, ["callee:00c58f20:8"]]
- 008695b8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 008695b8 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-5f922a69f4c27aec629b718d00ca3fd9"></a>

### [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) → [`0086a788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a788.md) FUN_0086a788

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) · 呼出先 2件 [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00848afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848afc.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086a788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a788.md) · 呼出先 2件 [`0086a788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a788.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00869804",
      "incomplete_value": true,
      "site": "00869808",
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
      "definition_site": "00869800",
      "incomplete_value": true,
      "site": "00869808",
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
- 00869808 ["INT_ADD", "register:40f0:8", ["const:869808:8", "const:4:8"]]
- 00869808 ["CALL", null, ["local:b0:8"]]
+ 0086a7b4 ["INT_ADD", "register:40f0:8", ["const:86a7b4:8", "const:4:8"]]
+ 0086a7b4 ["CALL", null, ["local:b0:8"]]
- 008697dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 008697dc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0086a788 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086a788 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008697fc ["INT_ADD", "register:40f0:8", ["const:8697fc:8", "const:4:8"]]
- 008697fc ["CALL", null, ["local:b0:8"]]
+ 0086a7a8 ["INT_ADD", "register:40f0:8", ["const:86a7a8:8", "const:4:8"]]
+ 0086a7a8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-70d1d13078766d6272bae7c56f04ec60"></a>

### [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) → [`0086a7cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a7cc.md) FUN_0086a7cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b90.md) [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) [`009c1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1038.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00848b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848b3c.md) [`009bed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bed38.md) [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) [`009c1fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1fe4.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008698c0",
      "incomplete_value": true,
      "site": "008698c4",
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
                "const:60:8"
              ]
            ]
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
      "definition_site": "0086a8e0",
      "incomplete_value": false,
      "site": "0086a8e4",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "0086a8dc",
      "incomplete_value": true,
      "site": "0086a8e4",
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
      "unmatched:008698dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a8a4"
      ]
    ],
    [
      "unmatched:00869908",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "unmatched:0086990c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a8d4"
      ]
    ]
  ],
  "added": [
    [
      "0086a888",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a8a4"
      ]
    ],
    [
      "0086a8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a8d4"
      ]
    ],
    [
      "0086a8e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086a904"
      ]
    ]
  ]
}
~~~


~~~diff
- 008698c4 ["INT_ADD", "register:40f0:8", ["const:8698c4:8", "const:4:8"]]
- 008698c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a870 ["INT_ADD", "register:40f0:8", ["const:86a870:8", "const:4:8"]]
+ 0086a870 ["CALL", null, ["callee:00c58f50:8"]]
- 00869938 ["INT_ADD", "register:40f0:8", ["const:869938:8", "const:4:8"]]
- 00869938 ["CALL", null, ["callee:00c54d90:8"]]
+ 0086a8e4 ["INT_ADD", "register:40f0:8", ["const:86a8e4:8", "const:4:8"]]
+ 0086a8e4 ["CALL", null, ["callee:00c54d90:8"]]
- 00869868 ["INT_ADD", "register:40f0:8", ["const:869868:8", "const:4:8"]]
- 00869868 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a814 ["INT_ADD", "register:40f0:8", ["const:86a814:8", "const:4:8"]]
+ 0086a814 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6b6b55dd47112d8206478fbfd47d8981"></a>

### [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) → [`0086a98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a98c.md) FUN_0086a98c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) · 呼出先 4件 [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086a98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a98c.md) [`00a83f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83f90.md) · 呼出先 4件 [`0086a98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a98c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.53% / 新版 91.53%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008699f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869a5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086aa1c"
      ]
    ],
    [
      "unmatched:00869a74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086aa10"
      ]
    ]
  ],
  "added": [
    [
      "0086a99c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086aa08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086aa1c"
      ]
    ],
    [
      "0086aa20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086aa10"
      ]
    ]
  ]
}
~~~


~~~diff
- 008699e0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 008699e0 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0086a98c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086a98c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 008699f0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008699f0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008699f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 008699f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008699f4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-141ed22d9096010c945cec87bb9a7ddd"></a>

### [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) → [`0086aa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aa78.md) FUN_0086aa78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) · 呼出先 3件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086aa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aa78.md) [`008b8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8998.md) · 呼出先 3件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`0086aa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aa78.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ab14",
      "incomplete_value": true,
      "site": "0086ab14",
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
      "definition_site": "00869b68",
      "incomplete_value": true,
      "site": "00869b68",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00869b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ab2c"
      ]
    ],
    [
      "0086ab0c",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "0086ab14",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086aab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ab2c"
      ]
    ],
    [
      "0086ab0c",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "0086ab14",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00869acc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869acc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 0086aa78 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086aa78 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00869aec ["INT_ADD", "register:40f0:8", ["const:869aec:8", "const:4:8"]]
- 00869aec ["CALL", null, ["local:b0:8"]]
+ 0086aa98 ["INT_ADD", "register:40f0:8", ["const:86aa98:8", "const:4:8"]]
+ 0086aa98 ["CALL", null, ["local:b0:8"]]
- 00869af8 ["INT_ADD", "register:40f0:8", ["const:869af8:8", "const:4:8"]]
- 00869af8 ["CALL", null, ["local:b0:8"]]
+ 0086aaa4 ["INT_ADD", "register:40f0:8", ["const:86aaa4:8", "const:4:8"]]
+ 0086aaa4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-13fd64e9581c6d36c7de517e7bda0f43"></a>

### [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) → [`0086ab40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ab40.md) FUN_0086ab40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008482a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008482a8.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) [`008bbab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbab8.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849254.md) [`008bbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbc90.md) [`008bc540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc540.md) [`008bca64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bca64.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.11% / 新版 81.11%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086ab64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00869bc8"
      ]
    ],
    [
      "0086abc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00869bf8"
      ]
    ],
    [
      "0086abc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00869c0c"
      ]
    ]
  ],
  "added": [
    [
      "0086ab64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ab74"
      ]
    ],
    [
      "0086ab94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086aba4"
      ]
    ],
    [
      "0086ab98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086abb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00869bc8 ["COPY", "register:4040:8", ["const:20:8"]]
- 00869bd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00869bd8 ["INT_ADD", "register:40f0:8", ["const:869bd8:8", "const:4:8"]]
- 00869bd8 ["CALLIND", null, ["register:0:8"]]
+ 0086ab84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086ab84 ["INT_ADD", "register:40f0:8", ["const:86ab84:8", "const:4:8"]]
+ 0086ab84 ["CALLIND", null, ["register:0:8"]]
- 00869be8 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 0086abc4 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
~~~


<a id="compare-3e3761584855d3f68af92481f92d4117"></a>

### [`00869cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869cfc.md) → [`0086aca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aca8.md) FUN_0086aca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00869cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869d00",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869d04",
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
      "0086aca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0086acac",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0086acb0",
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
- 00869cfc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00869cfc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00869cfc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00869cfc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00869d00 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00869d00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00869d04 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00869d04 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00869d04 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00869d04 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ee19c8370242f4e92bd4c05b4b2f8b53"></a>

### [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) → [`0086ad80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ad80.md) FUN_0086ad80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848550.md) [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) · 呼出先 2件 [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008494fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008494fc.md) [`0086ad80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ad80.md) · 呼出先 2件 [`0086ad80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ad80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00869dd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00869ddc",
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
      "0086ad84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086ad88",
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
- 00869dd4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869dd4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086ad80 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086ad80 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00869dd8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00869dd8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00869dd8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00869dd8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00869ddc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00869ddc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00869ddc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00869ddc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6dc590d9583eb157d8f1818a753cb1de"></a>

### [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) → [`0086ae14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae14.md) FUN_0086ae14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) · 呼出先 2件 [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0086adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086adc4.md) [`0086ae14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae14.md) · 呼出先 2件 [`0086ae14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae14.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086ae30",
      "incomplete_value": true,
      "site": "0086ae34",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00869e84",
      "incomplete_value": true,
      "site": "00869e88",
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
- 00869e88 ["INT_ADD", "register:40f0:8", ["const:869e88:8", "const:4:8"]]
- 00869e88 ["CALL", null, ["local:b0:8"]]
+ 0086ae34 ["INT_ADD", "register:40f0:8", ["const:86ae34:8", "const:4:8"]]
+ 0086ae34 ["CALL", null, ["local:b0:8"]]
- 00869e68 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869e68 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0086ae14 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086ae14 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00869e84 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-3e30f59de0191f036595ed65da202fff"></a>

### [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) → [`0086ae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae58.md) FUN_0086ae58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) [`00a2f680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2f/00a2f680.md) · 呼出先 2件 [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086ae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae58.md) [`00a30674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a30/00a30674.md) · 呼出先 2件 [`0086ae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae58.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00869ec0",
      "incomplete_value": true,
      "site": "00869ec8",
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
- 00869ec8 ["INT_ADD", "register:40f0:8", ["const:869ec8:8", "const:4:8"]]
- 00869ec8 ["CALL", null, ["local:b0:8"]]
+ 0086ae74 ["INT_ADD", "register:40f0:8", ["const:86ae74:8", "const:4:8"]]
+ 0086ae74 ["CALL", null, ["local:b0:8"]]
- 00869eac ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00869eac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086ae58 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086ae58 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00869ed4 ["INT_ADD", "register:40f0:8", ["const:869ed4:8", "const:4:8"]]
- 00869ed4 ["CALL", null, ["local:b0:8"]]
+ 0086ae80 ["INT_ADD", "register:40f0:8", ["const:86ae80:8", "const:4:8"]]
+ 0086ae80 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-1a1bb4e5366e308fe5d88a047e2ef712"></a>

### [`0086a008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a008.md) → [`0086afb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086afb4.md) FUN_0086afb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848870.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) [`008e0a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a2c.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084981c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084981c.md) [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) [`008e15f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e15f4.md) [`008e19d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e19d8.md) · 呼出先 3件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a084",
      "incomplete_value": false,
      "site": "0086a088",
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
    "new": null,
    "old": {
      "definition_site": "0086a080",
      "incomplete_value": true,
      "site": "0086a088",
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
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086a0a8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0086b054",
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
- 0086a088 ["INT_ADD", "register:40f0:8", ["const:86a088:8", "const:4:8"]]
- 0086a088 ["CALL", null, ["callee:00c54d90:8"]]
+ 0086b034 ["INT_ADD", "register:40f0:8", ["const:86b034:8", "const:4:8"]]
+ 0086b034 ["CALL", null, ["callee:00c54d90:8"]]
- 0086a020 ["INT_ADD", "register:40f0:8", ["const:86a020:8", "const:4:8"]]
- 0086a020 ["CALL", null, ["callee:00676e50:8"]]
+ 0086afcc ["INT_ADD", "register:40f0:8", ["const:86afcc:8", "const:4:8"]]
+ 0086afcc ["CALL", null, ["callee:00676e50:8"]]
- 0086a02c ["INT_ADD", "register:40f0:8", ["const:86a02c:8", "const:4:8"]]
- 0086a02c ["CALL", null, ["callee:00676e50:8"]]
+ 0086afd8 ["INT_ADD", "register:40f0:8", ["const:86afd8:8", "const:4:8"]]
+ 0086afd8 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-fab1913e7869b122050828214e2923ef"></a>

### [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) → [`0086b068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b068.md) FUN_0086b068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848934.md) [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) · 呼出先 2件 [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008498e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008498e0.md) [`0086b068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b068.md) [`008d81f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d81f4.md) · 呼出先 2件 [`0086b068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b068.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0086a0ec"
      ],
      [
        "FALL_THROUGH",
        "0086b098"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086b098",
      "incomplete_value": true,
      "site": "0086b09c",
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
      "definition_site": "0086a0ec",
      "incomplete_value": true,
      "site": "0086a0f0",
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
      "unmatched:0086a0c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a0c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a0ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b0a4"
      ]
    ]
  ],
  "added": [
    [
      "0086b06c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b070",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086b098",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b0a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086a0bc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a0bc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086b068 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b068 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0086a0c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a0c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a0c0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086a0c0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086a0c4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0086a0c4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0086a0c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0086a0c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fa3a570cd54112f3d7fd3a5aaf19a91c"></a>

### [`0086a10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a10c.md) → [`0086b0b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b0b8.md) FUN_0086b0b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00848a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848a84.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00849a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849a30.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a17c",
      "incomplete_value": true,
      "site": "0086a180",
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
                "const:ffffffffffffffc8:8"
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
      "unmatched:0086a10c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a110",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a114",
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
      "0086b0b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0086b0bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086b0c0",
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
- 0086a180 ["INT_ADD", "register:40f0:8", ["const:86a180:8", "const:4:8"]]
- 0086a180 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b12c ["INT_ADD", "register:40f0:8", ["const:86b12c:8", "const:4:8"]]
+ 0086b12c ["CALL", null, ["callee:00c58f50:8"]]
- 0086a10c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a10c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a10c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0086a10c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086a110 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0086a110 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-0bfe6068639024eee5d6cb70a0ed9280"></a>

### [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) → [`0086b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b168.md) FUN_0086b168

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848b78.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008fd0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd0a8.md) · 呼出先 2件 [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849b24.md) [`0086b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b168.md) [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) [`008fe054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe054.md) · 呼出先 2件 [`0086b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b168.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "0086a1e0",
      "incomplete_value": true,
      "site": "0086a1e8",
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
- 0086a1e8 ["INT_ADD", "register:40f0:8", ["const:86a1e8:8", "const:4:8"]]
- 0086a1e8 ["CALL", null, ["local:b0:8"]]
+ 0086b194 ["INT_ADD", "register:40f0:8", ["const:86b194:8", "const:4:8"]]
+ 0086b194 ["CALL", null, ["local:b0:8"]]
- 0086a1bc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a1bc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0086b168 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b168 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0086a1dc ["INT_ADD", "register:40f0:8", ["const:86a1dc:8", "const:4:8"]]
- 0086a1dc ["CALL", null, ["local:b0:8"]]
+ 0086b188 ["INT_ADD", "register:40f0:8", ["const:86b188:8", "const:4:8"]]
+ 0086b188 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-53280dd7da045532fd2f8b379f590bb2"></a>

### [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) → [`0086b1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b1ac.md) FUN_0086b1ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bf0.md) [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) [`00a3b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3b8d8.md) · 呼出先 2件 [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849b9c.md) [`0086b1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b1ac.md) [`00a3bb10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3bb10.md) [`00a3c8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3c/00a3c8cc.md) · 呼出先 2件 [`0086b1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b1ac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 58.82% / 新版 58.82%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b1c8",
      "incomplete_value": true,
      "site": "0086b1cc",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b1d4",
      "incomplete_value": true,
      "site": "0086b1d8",
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
      "definition_site": "0086b1d0",
      "incomplete_value": true,
      "site": "0086b1d8",
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
      "unmatched:0086a204",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a208",
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
      "0086b1b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b1b4",
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
- 0086a220 ["INT_ADD", "register:40f0:8", ["const:86a220:8", "const:4:8"]]
- 0086a220 ["CALL", null, ["local:b0:8"]]
+ 0086b1cc ["INT_ADD", "register:40f0:8", ["const:86b1cc:8", "const:4:8"]]
+ 0086b1cc ["CALL", null, ["local:b0:8"]]
- 0086a22c ["INT_ADD", "register:40f0:8", ["const:86a22c:8", "const:4:8"]]
- 0086a22c ["CALL", null, ["local:b0:8"]]
+ 0086b1d8 ["INT_ADD", "register:40f0:8", ["const:86b1d8:8", "const:4:8"]]
+ 0086b1d8 ["CALL", null, ["local:b0:8"]]
- 0086a200 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a200 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0086b1ac ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b1ac ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-af7d6e6efd31a0103f358f3ac7e0e7a9"></a>

### [`0086a244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a244.md) → [`0086b1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b1f0.md) FUN_0086b1f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00848c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848c78.md) [`00abd8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abd/00abd8dc.md) [`00abd95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abd/00abd95c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`00849c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849c24.md) [`00abe8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00abe/00abe8d0.md) [`00abe950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00abe/00abe950.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a2ac",
      "incomplete_value": true,
      "site": "0086a2b0",
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
                "const:a8:8"
              ]
            ]
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
      "unmatched:0086a2c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b21c"
      ]
    ]
  ],
  "added": [
    [
      "0086b274",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b21c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086a2b0 ["INT_ADD", "register:40f0:8", ["const:86a2b0:8", "const:4:8"]]
- 0086a2b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b25c ["INT_ADD", "register:40f0:8", ["const:86b25c:8", "const:4:8"]]
+ 0086b25c ["CALL", null, ["callee:00c58f50:8"]]
- 0086a244 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a244 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0086b1f0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b1f0 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 0086a25c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0086a25c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0086a25c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0086a25c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0086b208 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0086b208 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0086b208 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0086b208 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-344bc97a42a04ed1124479d7e7761eda"></a>

### [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) → [`0086b27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b27c.md) FUN_0086b27c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848d54.md) [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 2件 [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849d00.md) [`0086b27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b27c.md) [`00929318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929318.md) · 呼出先 2件 [`0086b27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b27c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a2e4",
      "incomplete_value": true,
      "site": "0086a2ec",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a2f4",
      "incomplete_value": true,
      "site": "0086a2f8",
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
      "definition_site": "0086a2f0",
      "incomplete_value": true,
      "site": "0086a2f8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086a2d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a2d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a310",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b2c8"
      ]
    ]
  ],
  "added": [
    [
      "0086b280",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b284",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086b2bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b2c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086a2ec ["INT_ADD", "register:40f0:8", ["const:86a2ec:8", "const:4:8"]]
- 0086a2ec ["CALL", null, ["local:b0:8"]]
+ 0086b298 ["INT_ADD", "register:40f0:8", ["const:86b298:8", "const:4:8"]]
+ 0086b298 ["CALL", null, ["local:b0:8"]]
- 0086a2f8 ["INT_ADD", "register:40f0:8", ["const:86a2f8:8", "const:4:8"]]
- 0086a2f8 ["CALL", null, ["local:b0:8"]]
+ 0086b2a4 ["INT_ADD", "register:40f0:8", ["const:86b2a4:8", "const:4:8"]]
+ 0086b2a4 ["CALL", null, ["local:b0:8"]]
- 0086a2d0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a2d0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 0086b27c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b27c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-61ca0db7299c8d90d105a16b9fd7dff8"></a>

### [`0086a330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a330.md) → [`0086b2dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b2dc.md) FUN_0086b2dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00848fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848fec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00849f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849f98.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.91% / 新版 65.91%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b328",
      "incomplete_value": true,
      "site": "0086b32c",
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
                "const:fffffffffffffff8:8"
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
      "unmatched:0086a330",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a334",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a338",
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
      "0086b2dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0086b2e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086b2e4",
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
- 0086a380 ["INT_ADD", "register:40f0:8", ["const:86a380:8", "const:4:8"]]
- 0086a380 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b32c ["INT_ADD", "register:40f0:8", ["const:86b32c:8", "const:4:8"]]
+ 0086b32c ["CALL", null, ["callee:00c58f50:8"]]
- 0086a330 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a330 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a330 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0086a330 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086a334 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0086a334 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-da6575228262b99ad076f39e8f8a881a"></a>

### [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) → [`0086b38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b38c.md) FUN_0086b38c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084932c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084932c.md) [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) [`00aa2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2658.md) · 呼出先 2件 [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a2d8.md) [`0086b38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b38c.md) [`00aa364c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa3/00aa364c.md) · 呼出先 2件 [`0086b38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b38c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a404",
      "incomplete_value": true,
      "site": "0086a408",
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
      "definition_site": "0086a400",
      "incomplete_value": true,
      "site": "0086a408",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086a3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a3e8",
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
      "0086b390",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b394",
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
- 0086a408 ["INT_ADD", "register:40f0:8", ["const:86a408:8", "const:4:8"]]
- 0086a408 ["CALL", null, ["local:b0:8"]]
+ 0086b3b4 ["INT_ADD", "register:40f0:8", ["const:86b3b4:8", "const:4:8"]]
+ 0086b3b4 ["CALL", null, ["local:b0:8"]]
- 0086a3e0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a3e0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 0086b38c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b38c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 0086a3e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a3e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a3e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086a3e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-df78f6f80a26fef7ee84c377b5d3ca04"></a>

### [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) → [`0086b3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b3f0.md) FUN_0086b3f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084935c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084935c.md) [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) [`00b07a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a64.md) · 呼出先 2件 [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a308.md) [`0086b3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b3f0.md) [`00b08a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08a58.md) · 呼出先 2件 [`0086b3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b3f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086a478",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b450"
      ]
    ]
  ],
  "added": [
    [
      "0086b424",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b450"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086a444 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a444 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0086b3f0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b3f0 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 0086a460 ["INT_ADD", "register:40f0:8", ["const:86a460:8", "const:4:8"]]
- 0086a460 ["CALL", null, ["local:b0:8"]]
+ 0086b40c ["INT_ADD", "register:40f0:8", ["const:86b40c:8", "const:4:8"]]
+ 0086b40c ["CALL", null, ["local:b0:8"]]
- 0086a46c ["INT_ADD", "register:40f0:8", ["const:86a46c:8", "const:4:8"]]
- 0086a46c ["CALL", null, ["local:b0:8"]]
+ 0086b418 ["INT_ADD", "register:40f0:8", ["const:86b418:8", "const:4:8"]]
+ 0086b418 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-dd8bd513022f4c2fddbb0d5950eb4528"></a>

### [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) → [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md) FUN_0086b464

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 8件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00981494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981494.md) · 呼出先 2件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a404.md) [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md) [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) [`00982440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982440.md) · 呼出先 2件 [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b484",
      "incomplete_value": true,
      "site": "0086b48c",
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
      "unmatched:0086a4c0",
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
      "0086b46c",
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
- 0086a4e0 ["INT_ADD", "register:40f0:8", ["const:86a4e0:8", "const:4:8"]]
- 0086a4e0 ["CALL", null, ["local:b0:8"]]
+ 0086b48c ["INT_ADD", "register:40f0:8", ["const:86b48c:8", "const:4:8"]]
+ 0086b48c ["CALL", null, ["local:b0:8"]]
- 0086a4c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0086a4c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0086a4c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0086a4c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0086a4c4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-76b7194d077a128502f045ad88dc32ce"></a>

### [`0086a54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a54c.md) → [`0086b4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b4f8.md) FUN_0086b4f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a404.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.09% / 新版 84.09%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b544",
      "incomplete_value": true,
      "site": "0086b548",
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
                "const:ffffffffffffffc0:8"
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
      "unmatched:0086a54c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a550",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a554",
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
      "0086b4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0086b4fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086b500",
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
- 0086a59c ["INT_ADD", "register:40f0:8", ["const:86a59c:8", "const:4:8"]]
- 0086a59c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b548 ["INT_ADD", "register:40f0:8", ["const:86b548:8", "const:4:8"]]
+ 0086b548 ["CALL", null, ["callee:00c58f50:8"]]
- 0086a54c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a54c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a54c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0086a54c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086a550 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0086a550 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-0fc4ef9187ee29cbefb4d3da840b16fd"></a>

### [`0086a5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a5fc.md) → [`0086b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b5a8.md) FUN_0086b5a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008497d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008497d0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a77c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a77c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 84.09% / 新版 84.09%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086a618",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b644"
      ]
    ],
    [
      "unmatched:0086a62c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b5ec"
      ]
    ],
    [
      "0086b614",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b5fc"
      ]
    ]
  ],
  "added": [
    [
      "0086b5c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b644"
      ]
    ],
    [
      "0086b5d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b5ec"
      ]
    ],
    [
      "0086b5f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086b5fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086a618 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 0086a618 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
- 0086a61c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8:8"]]
- 0086a61c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
- 0086a620 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-e1f1998380f1b0ea6b84afda7a17d6de"></a>

### [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) → [`0086b658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b658.md) FUN_0086b658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008498d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008498d4.md) [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) · 呼出先 2件 [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a880.md) [`0086b658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b658.md) · 呼出先 2件 [`0086b658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b658.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a6ac ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a6ac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086b658 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b658 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0086a6c8 ["INT_ADD", "register:40f0:8", ["const:86a6c8:8", "const:4:8"]]
- 0086a6c8 ["CALL", null, ["local:b0:8"]]
+ 0086b674 ["INT_ADD", "register:40f0:8", ["const:86b674:8", "const:4:8"]]
+ 0086b674 ["CALL", null, ["local:b0:8"]]
- 0086a6d4 ["INT_ADD", "register:40f0:8", ["const:86a6d4:8", "const:4:8"]]
- 0086a6d4 ["CALL", null, ["local:b0:8"]]
+ 0086b680 ["INT_ADD", "register:40f0:8", ["const:86b680:8", "const:4:8"]]
+ 0086b680 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-c7642b373762c18c5b598e680f99fedc"></a>

### [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) → [`0086b6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b6a8.md) FUN_0086b6a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`00a31034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31034.md) · 呼出先 3件 [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086b6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b6a8.md) [`00a32028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32028.md) · 呼出先 3件 [`0086b6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b6a8.md) [`0086b714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b714.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b6e8",
      "incomplete_value": true,
      "site": "0086b6ec",
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
      "unmatched:0086a700",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a704",
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
      "0086b6ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b6b0",
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
- 0086a740 ["INT_ADD", "register:40f0:8", ["const:86a740:8", "const:4:8"]]
- 0086a740 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b6ec ["INT_ADD", "register:40f0:8", ["const:86b6ec:8", "const:4:8"]]
+ 0086b6ec ["CALL", null, ["callee:00c58f50:8"]]
- 0086a6fc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a6fc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 0086b6a8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b6a8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 0086a700 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a700 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a700 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086a700 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-82d7a5121a8b93a4c665740bfec873fc"></a>

### [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) → [`0086b764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b764.md) FUN_0086b764

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849aa0.md) [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) · 呼出先 2件 [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aa4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aa4c.md) [`0086b764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b764.md) · 呼出先 2件 [`0086b764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b764.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b780",
      "incomplete_value": true,
      "site": "0086b784",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 0086a7d8 ["INT_ADD", "register:40f0:8", ["const:86a7d8:8", "const:4:8"]]
- 0086a7d8 ["CALL", null, ["local:b0:8"]]
+ 0086b784 ["INT_ADD", "register:40f0:8", ["const:86b784:8", "const:4:8"]]
+ 0086b784 ["CALL", null, ["local:b0:8"]]
- 0086a7b8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a7b8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0086b764 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b764 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0086a7d4 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-958bc3c49a1754448ea0621c5e4580ce"></a>

### [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) → [`0086b7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b7a8.md) FUN_0086b7a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849afc.md) [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 2件 [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aaa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aaa8.md) [`0086b7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b7a8.md) [`00b0a694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a694.md) [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) · 呼出先 2件 [`0086b7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b7a8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.97% / 新版 72.97%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086a814",
      "incomplete_value": true,
      "site": "0086a81c",
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0086a85c"
      ],
      [
        "FALL_THROUGH",
        "0086b808"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086b808",
      "incomplete_value": true,
      "site": "0086b80c",
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
      "definition_site": "0086a85c",
      "incomplete_value": true,
      "site": "0086a860",
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
      "unmatched:0086a800",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a804",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086a808",
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
      "0086b7ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086b7b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086b7b4",
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
- 0086a81c ["INT_ADD", "register:40f0:8", ["const:86a81c:8", "const:4:8"]]
- 0086a81c ["CALL", null, ["local:b0:8"]]
+ 0086b7c8 ["INT_ADD", "register:40f0:8", ["const:86b7c8:8", "const:4:8"]]
+ 0086b7c8 ["CALL", null, ["local:b0:8"]]
- 0086a7fc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a7fc ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0086b7a8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b7a8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 0086a800 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086a800 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086a800 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0086a800 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-d36dd43feb0da93db2bf90bb02b52b1c"></a>

### [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) → [`0086b83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b83c.md) FUN_0086b83c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849afc.md) [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 2件 [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aaa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aaa8.md) [`0086b83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b83c.md) [`00b0a694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a694.md) [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) · 呼出先 2件 [`0086b83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b83c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b850",
      "incomplete_value": true,
      "site": "0086b858",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 0086a8ac ["INT_ADD", "register:40f0:8", ["const:86a8ac:8", "const:4:8"]]
- 0086a8ac ["CALL", null, ["local:b0:8"]]
+ 0086b858 ["INT_ADD", "register:40f0:8", ["const:86b858:8", "const:4:8"]]
+ 0086b858 ["CALL", null, ["local:b0:8"]]
- 0086a890 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a890 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 0086b83c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b83c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0086a8b8 ["INT_ADD", "register:40f0:8", ["const:86a8b8:8", "const:4:8"]]
- 0086a8b8 ["CALL", null, ["local:b0:8"]]
+ 0086b864 ["INT_ADD", "register:40f0:8", ["const:86b864:8", "const:4:8"]]
+ 0086b864 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-1b0f0f136152cd4d49bff9d76cd9c12b"></a>

### [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) → [`0086b88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b88c.md) FUN_0086b88c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) [`009c7e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7e10.md) · 呼出先 2件 [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aae8.md) [`0086b88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b88c.md) [`009c4350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4350.md) [`009c8dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8dbc.md) · 呼出先 2件 [`0086b88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b88c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b8a0",
      "incomplete_value": true,
      "site": "0086b8a8",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 0086a8fc ["INT_ADD", "register:40f0:8", ["const:86a8fc:8", "const:4:8"]]
- 0086a8fc ["CALL", null, ["local:b0:8"]]
+ 0086b8a8 ["INT_ADD", "register:40f0:8", ["const:86b8a8:8", "const:4:8"]]
+ 0086b8a8 ["CALL", null, ["local:b0:8"]]
- 0086a8e0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a8e0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0086b88c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b88c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0086a908 ["INT_ADD", "register:40f0:8", ["const:86a908:8", "const:4:8"]]
- 0086a908 ["CALL", null, ["local:b0:8"]]
+ 0086b8b4 ["INT_ADD", "register:40f0:8", ["const:86b8b4:8", "const:4:8"]]
+ 0086b8b4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-372b1dd5fd64a3f203f80370cb9cb22a"></a>

### [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) → [`0086b920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b920.md) FUN_0086b920

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bb0.md) [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) [`00936d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936d08.md) · 呼出先 3件 [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) [`0086a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ab5c.md) [`0086b920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b920.md) [`00937cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/00937cb4.md) · 呼出先 3件 [`0086b920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b920.md) [`0086b96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b96c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b93c",
      "incomplete_value": true,
      "site": "0086b940",
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
    "old": {
      "definition_site": "0086a990",
      "incomplete_value": true,
      "site": "0086a994",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086b950",
      "incomplete_value": true,
      "site": "0086b954",
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
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 0086a994 ["INT_ADD", "register:40f0:8", ["const:86a994:8", "const:4:8"]]
- 0086a994 ["CALL", null, ["local:b0:8"]]
+ 0086b940 ["INT_ADD", "register:40f0:8", ["const:86b940:8", "const:4:8"]]
+ 0086b940 ["CALL", null, ["local:b0:8"]]
- 0086a9a8 ["INT_ADD", "register:40f0:8", ["const:86a9a8:8", "const:4:8"]]
- 0086a9a8 ["CALL", null, ["callee:0086b96c:8"]]
+ 0086b954 ["INT_ADD", "register:40f0:8", ["const:86b954:8", "const:4:8"]]
+ 0086b954 ["CALL", null, ["callee:0086b96c:8"]]
- 0086a974 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086a974 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086b920 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b920 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-04d65b994d3ef0083429f856e0cc7643"></a>

### [`0086a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a9c0.md) → [`0086b96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b96c.md) FUN_0086b96c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0086b920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b920.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 0086a9f4 ["INT_ADD", "register:40f0:8", ["const:86a9f4:8", "const:4:8"]]
- 0086a9f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b9a0 ["INT_ADD", "register:40f0:8", ["const:86b9a0:8", "const:4:8"]]
+ 0086b9a0 ["CALL", null, ["callee:00c58f50:8"]]
- 0086aa14 ["INT_ADD", "register:40f0:8", ["const:86aa14:8", "const:4:8"]]
- 0086aa14 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b9c0 ["INT_ADD", "register:40f0:8", ["const:86b9c0:8", "const:4:8"]]
+ 0086b9c0 ["CALL", null, ["callee:00c58f50:8"]]
- 0086aa24 ["INT_ADD", "register:40f0:8", ["const:86aa24:8", "const:4:8"]]
- 0086aa24 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b9d0 ["INT_ADD", "register:40f0:8", ["const:86b9d0:8", "const:4:8"]]
+ 0086b9d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1a62fea8cc98e171bb9e7a6c2fd009c6"></a>

### [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) → [`0086b9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b9fc.md) FUN_0086b9fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bf0.md) [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) · 呼出先 2件 [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ab9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ab9c.md) [`0086b9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b9fc.md) [`0093a0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093a/0093a0b4.md) · 呼出先 2件 [`0086b9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b9fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086ba14",
      "incomplete_value": true,
      "site": "0086ba1c",
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
      "unmatched:0086aa94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ba54"
      ]
    ]
  ],
  "added": [
    [
      "0086ba40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ba54"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086aa70 ["INT_ADD", "register:40f0:8", ["const:86aa70:8", "const:4:8"]]
- 0086aa70 ["CALL", null, ["local:b0:8"]]
+ 0086ba1c ["INT_ADD", "register:40f0:8", ["const:86ba1c:8", "const:4:8"]]
+ 0086ba1c ["CALL", null, ["local:b0:8"]]
- 0086aa50 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086aa50 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0086b9fc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086b9fc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 0086aa7c ["INT_ADD", "register:40f0:8", ["const:86aa7c:8", "const:4:8"]]
- 0086aa7c ["CALL", null, ["local:b0:8"]]
+ 0086ba28 ["INT_ADD", "register:40f0:8", ["const:86ba28:8", "const:4:8"]]
+ 0086ba28 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-396c4fafb8322631f6755923acc77a13"></a>

### [`0086ac08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ac08.md) → [`0086bbb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bbb4.md) FUN_0086bbb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e23e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e23e0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0086bb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bb3c.md) [`009e2278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e2/009e2278.md) [`009e338c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e3/009e338c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086ac90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bc4c"
      ]
    ],
    [
      "unmatched:0086acc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bc44"
      ]
    ],
    [
      "unmatched:0086acf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bcc4"
      ]
    ]
  ],
  "added": [
    [
      "0086bc3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bc4c"
      ]
    ],
    [
      "0086bc6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bc44"
      ]
    ],
    [
      "0086bc9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bcc4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ac2c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 0086bbd8 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 0086ac58 ["INT_ZEXT", "tmp:0:16", ["register:4040:8"]]
- 0086ac58 ["INT_ZEXT", "tmp:1:16", ["register:4050:8"]]
- 0086ac58 ["INT_MULT", "tmp:2:16", ["tmp:0:16", "tmp:1:16"]]
- 0086ac58 ["SUBPIECE", "register:4050:8", ["tmp:2:16", "const:8:4"]]
- 0086ac5c ["INT_RIGHT", "register:4058:8", ["register:4058:8", "const:6:8"]]
~~~


<a id="compare-d164c6635371b8533f5d3ec2fc6dec8a"></a>

### [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) → [`0086bd54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bd54.md) FUN_0086bd54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c68.md) [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) [`009e03d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03d0.md) · 呼出先 2件 [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ac14.md) [`0086bd54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bd54.md) [`009e137c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e137c.md) · 呼出先 2件 [`0086bd54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bd54.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086adac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086adb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086adb4",
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
      "0086bd58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086bd5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086bd60",
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
- 0086ada8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086ada8 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 0086bd54 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086bd54 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 0086adac ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086adac ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086adac ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0086adac ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086adb0 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0086adb0 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0086adb0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0086adb0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1c90668d5367458be53c11ceb6e68721"></a>

### [`0086ae5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ae5c.md) → [`0086be08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086be08.md) FUN_0086be08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086be14",
      "incomplete_value": false,
      "site": "0086be18",
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
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ae68",
      "incomplete_value": false,
      "site": "0086ae6c",
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
            "const:a0:8"
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
      "0086be18",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086be18",
      "DATA",
      [
        "storage",
        "00c80070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ae64 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086be10 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086ae68 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 0086ae68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086be14 ["COPY", "tmp:0:8", ["const:70:8"]]
+ 0086be14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086be14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086be14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9fec16ed0585fe601d72e6b643c09e61"></a>

### [`0086ae7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ae7c.md) → [`0086be28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086be28.md) FUN_0086be28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086ae88",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086ae8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086be60"
      ]
    ],
    [
      "unmatched:0086ae90",
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
      "0086be34",
      "DATA",
      [
        "storage",
        "00c80070",
        null,
        "undefined *"
      ]
    ],
    [
      "0086be38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086be60"
      ]
    ],
    [
      "0086be3c",
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
- 0086ae7c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 0086ae7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086ae80 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086ae84 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 0086ae84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2291f45dd68967161b574c9fc72ecd0f"></a>

### [`0086aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aeb8.md) → [`0086be64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086be64.md) FUN_0086be64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086aec8",
      "incomplete_value": false,
      "site": "0086aecc",
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
      "unmatched:0086aedc",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086aee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bea8"
      ]
    ]
  ],
  "added": [
    [
      "0086be88",
      "DATA",
      [
        "storage",
        "00c80070",
        null,
        "undefined *"
      ]
    ],
    [
      "0086be90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bea8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086aecc ["INT_ADD", "register:40f0:8", ["const:86aecc:8", "const:4:8"]]
- 0086aecc ["CALL", null, ["callee:00c58f30:8"]]
+ 0086be78 ["INT_ADD", "register:40f0:8", ["const:86be78:8", "const:4:8"]]
+ 0086be78 ["CALL", null, ["callee:00c58f30:8"]]
- 0086aed4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086be80 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086aed8 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 0086aed8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086aed8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086aed8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4455432779f46e031aacd32276e6fbde"></a>

### [`0086af08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086af08.md) → [`0086beb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086beb4.md) FUN_0086beb4

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
      "unmatched:0086af14",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086af1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bee4"
      ]
    ],
    [
      "unmatched:0086af20",
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
      "0086bec0",
      "DATA",
      [
        "storage",
        "00c80070",
        null,
        "undefined *"
      ]
    ],
    [
      "0086bec8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bee4"
      ]
    ],
    [
      "0086becc",
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
- 0086af08 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0086af08 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 0086af08 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 0086af08 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 0086af0c ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086af10 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 0086af10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086af10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086af10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e1b187e64faaae547b0eb22e70622566"></a>

### [`0086afac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086afac.md) → [`0086bf58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bf58.md) FUN_0086bf58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0086af7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086af7c.md) · 呼出先 7件 [`004896dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004896dc.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0086bf28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bf28.md) · 呼出先 7件 [`004899fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/004899fc.md) [`00498a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498a44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.54% / 新版 82.54%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086bff4",
      "incomplete_value": true,
      "site": "0086bff8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0086afd8"
      ],
      [
        "FALL_THROUGH",
        "0086bf84"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086bf84",
      "incomplete_value": true,
      "site": "0086bf90",
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
      "definition_site": "0086afd8",
      "incomplete_value": true,
      "site": "0086afe4",
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
      "unmatched:0086afcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086afd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086afd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bffc"
      ]
    ]
  ],
  "added": [
    [
      "0086bf78",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0086bf80",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0086bf84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086bffc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b04c ["INT_ADD", "register:40f0:8", ["const:86b04c:8", "const:4:8"]]
- 0086b04c ["CALL", null, ["callee:00c58f20:8"]]
+ 0086bff8 ["INT_ADD", "register:40f0:8", ["const:86bff8:8", "const:4:8"]]
+ 0086bff8 ["CALL", null, ["callee:00c58f20:8"]]
- 0086afc8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 0086afc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086afcc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0086afcc ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0086afcc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-b9abf364c91f8efa900b3edebd423faa"></a>

### [`0086b0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b0dc.md) → [`0086c088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c088.md) FUN_0086c088

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c094",
      "incomplete_value": false,
      "site": "0086c098",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b0e8",
      "incomplete_value": false,
      "site": "0086b0ec",
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
            "const:120:8"
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
      "0086c098",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c098",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b0e4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c090 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b0e8 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b0e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b0e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b0e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086c094 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0086c094 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c094 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c094 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8491d46ce8de7d517126133f4a76c919"></a>

### [`0086b0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b0fc.md) → [`0086c0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c0a8.md) FUN_0086c0a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c0b0",
      "incomplete_value": false,
      "site": "0086c0b4",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b104",
      "incomplete_value": false,
      "site": "0086b108",
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
            "const:120:8"
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
      "0086c0b4",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c0b4",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b100 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c0ac ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b104 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b104 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b104 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b104 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086c0b0 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0086c0b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c0b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c0b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b124 ["INT_ADD", "register:40f0:8", ["const:86b124:8", "const:4:8"]]
- 0086b124 ["CALL", null, ["callee:00c58f20:8"]]
+ 0086c0d0 ["INT_ADD", "register:40f0:8", ["const:86c0d0:8", "const:4:8"]]
+ 0086c0d0 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-083b8738f0c0030a27180dfa310b35e3"></a>

### [`0086b138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b138.md) → [`0086c0e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c0e4.md) FUN_0086c0e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086b15c",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c108",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b14c ["INT_ADD", "register:40f0:8", ["const:86b14c:8", "const:4:8"]]
- 0086b14c ["CALL", null, ["callee:00c58f30:8"]]
+ 0086c0f8 ["INT_ADD", "register:40f0:8", ["const:86c0f8:8", "const:4:8"]]
+ 0086c0f8 ["CALL", null, ["callee:00c58f30:8"]]
- 0086b154 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c100 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b158 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b158 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b158 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b158 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-487375b94057a315a740d5a854d54080"></a>

### [`0086b188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b188.md) → [`0086c134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c134.md) FUN_0086c134

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
      "definition_site": "0086c140",
      "incomplete_value": false,
      "site": "0086c140",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b194",
      "incomplete_value": false,
      "site": "0086b194",
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
            "const:120:8"
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
      "0086c140",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c140",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b18c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c138 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b190 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b190 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b190 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b190 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086c13c ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0086c13c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c13c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c13c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b1b0 ["INT_ADD", "register:40f0:8", ["const:86b1b0:8", "const:4:8"]]
- 0086b1b0 ["CALL", null, ["callee:00c54d60:8"]]
+ 0086c15c ["INT_ADD", "register:40f0:8", ["const:86c15c:8", "const:4:8"]]
+ 0086c15c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-1723cf59ea3127d64d98161326746559"></a>

### [`0086b1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b1cc.md) → [`0086c178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c178.md) FUN_0086c178

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008546a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/008546a4.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b1d0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0086b1d0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086c17c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0086c17c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0086b1e8 ["INT_ADD", "register:40f0:8", ["const:86b1e8:8", "const:4:8"]]
- 0086b1e8 ["CALL", null, ["callee:00c58f20:8"]]
+ 0086c194 ["INT_ADD", "register:40f0:8", ["const:86c194:8", "const:4:8"]]
+ 0086c194 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-147a9752c2884c191f478b16ab6c8d17"></a>

### [`0086b22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b22c.md) → [`0086c1d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c1d8.md) FUN_0086c1d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0086b1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b1fc.md) · 呼出先 7件 [`0048aa90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048aa90.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0086c1a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c1a8.md) · 呼出先 7件 [`0048adb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048adb0.md) [`00498a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498a44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086b230",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086b234",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086b238",
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
      "0086c1dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086c1e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086c1e4",
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
- 0086b22c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 0086b230 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086b230 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086b230 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 0086b230 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0086b234 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0086b234 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0086b234 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0086b234 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c68242570862dad41e4138255a621dcd"></a>

### [`0086b35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b35c.md) → [`0086c308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c308.md) FUN_0086c308

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
      "definition_site": "0086c30c",
      "incomplete_value": false,
      "site": "0086c310",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b360",
      "incomplete_value": false,
      "site": "0086b364",
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
            "const:1a0:8"
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
      "0086c310",
      "DATA",
      [
        "storage",
        "00c7f1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c310",
      "DATA",
      [
        "storage",
        "00c80170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b35c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086c308 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086b360 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 0086b360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086b360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086b360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086c30c ["COPY", "tmp:0:8", ["const:170:8"]]
+ 0086c30c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086c30c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086c30c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-105343e0c3a51aed80ec81859869f283"></a>

### [`0086b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b36c.md) → [`0086c318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c318.md) FUN_0086c318

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
      "definition_site": "0086c328",
      "incomplete_value": false,
      "site": "0086c330",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b37c",
      "incomplete_value": false,
      "site": "0086b384",
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
            "const:1a0:8"
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
      "0086c330",
      "DATA",
      [
        "storage",
        "00c7f1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c330",
      "DATA",
      [
        "storage",
        "00c80170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b378 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086c324 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086b37c ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 0086b37c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086b37c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086b37c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086c328 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 0086c328 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086c328 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086c328 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086b388 ["INT_ADD", "register:40f0:8", ["const:86b388:8", "const:4:8"]]
- 0086b388 ["CALL", null, ["callee:00c58f40:8"]]
+ 0086c334 ["INT_ADD", "register:40f0:8", ["const:86c334:8", "const:4:8"]]
+ 0086c334 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-32e6e98a452d3ca552bd3dc33cd9a941"></a>

### [`0086b3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b3ac.md) → [`0086c358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c358.md) FUN_0086c358

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 3件 [`004988bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/004988bc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 1件 [`008546a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/008546a4.md) · 呼出先 3件 [`00498bdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498bdc.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086c3b4",
      "incomplete_value": true,
      "site": "0086c3bc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086c3d4",
      "incomplete_value": true,
      "site": "0086c3d8",
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
    "old": {
      "definition_site": "0086b428",
      "incomplete_value": true,
      "site": "0086b42c",
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
    "new": {
      "definition_site": "0086c3d0",
      "incomplete_value": false,
      "site": "0086c3d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ed000:8"
          ],
          [
            "leaf",
            "const:efe:8"
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
      "unmatched:0086b3cc",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086b424",
      "PARAM",
      [
        "storage",
        "002edebe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086c378",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086c3d0",
      "PARAM",
      [
        "storage",
        "002edefe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b410 ["INT_ADD", "register:40f0:8", ["const:86b410:8", "const:4:8"]]
- 0086b410 ["CALL", null, ["callee:00c54d60:8"]]
+ 0086c3bc ["INT_ADD", "register:40f0:8", ["const:86c3bc:8", "const:4:8"]]
+ 0086c3bc ["CALL", null, ["callee:00c54d60:8"]]
- 0086b42c ["INT_ADD", "register:40f0:8", ["const:86b42c:8", "const:4:8"]]
- 0086b42c ["CALL", null, ["callee:00c59230:8"]]
+ 0086c3d8 ["INT_ADD", "register:40f0:8", ["const:86c3d8:8", "const:4:8"]]
+ 0086c3d8 ["CALL", null, ["callee:00c59230:8"]]
- 0086b3bc ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086c368 ["COPY", "register:4040:8", ["const:c80000:8"]]
~~~


<a id="compare-2d86f065de284ccee6e27cd04c1a671a"></a>

### [`0086b478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b478.md) → [`0086c424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c424.md) FUN_0086c424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c43c",
      "incomplete_value": false,
      "site": "0086c440",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b490",
      "incomplete_value": false,
      "site": "0086b494",
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
            "const:1f0:8"
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
      "0086c440",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c440",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b48c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c438 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b490 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 0086b490 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b490 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b490 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086c43c ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 0086c43c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c43c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c43c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b4a0 ["INT_ADD", "register:40f0:8", ["const:86b4a0:8", "const:4:8"]]
- 0086b4a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086c44c ["INT_ADD", "register:40f0:8", ["const:86c44c:8", "const:4:8"]]
+ 0086c44c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f3168cc283895ff7a46c666c890c08c1"></a>

### [`0086b524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b524.md) → [`0086c4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c4d0.md) FUN_0086c4d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c4e8",
      "incomplete_value": false,
      "site": "0086c4ec",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b53c",
      "incomplete_value": false,
      "site": "0086b540",
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
            "const:1f0:8"
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
      "0086c4ec",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086c4ec",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b538 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086c4e4 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086b53c ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 0086b53c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b53c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b53c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086c4e8 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 0086c4e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c4e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086c4e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b54c ["INT_ADD", "register:40f0:8", ["const:86b54c:8", "const:4:8"]]
- 0086b54c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086c4f8 ["INT_ADD", "register:40f0:8", ["const:86c4f8:8", "const:4:8"]]
+ 0086c4f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-edc76074f47da2aa86413895c0e98965"></a>

### [`0086ba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086ba28.md) → [`0086c9d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c9d4.md) FUN_0086c9d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0085d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085d/0085d150.md) [`0086d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d044.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0086ba40"
      ],
      [
        "FALL_THROUGH",
        "0086c9ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0086c9ec",
      "incomplete_value": true,
      "site": "0086c9f0",
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
      "definition_site": "0086ba40",
      "incomplete_value": true,
      "site": "0086ba44",
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
      "unmatched:0086ba40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086c9f8"
      ]
    ],
    [
      "unmatched:0086ba60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ca90"
      ]
    ],
    [
      "0086ca0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086cad0"
      ]
    ]
  ],
  "added": [
    [
      "0086c9ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086c9f8"
      ]
    ],
    [
      "0086ca0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086ca90"
      ]
    ],
    [
      "0086ca2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086cad0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ba40 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0086ba40 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0086ba48 ["INT_ADD", "register:40f0:8", ["const:86ba48:8", "const:4:8"]]
- 0086ba48 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086c9f4 ["INT_ADD", "register:40f0:8", ["const:86c9f4:8", "const:4:8"]]
+ 0086c9f4 ["CALL", null, ["callee:00c58f50:8"]]
- 0086ba50 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0086ba50 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086c9fc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0086c9fc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-793cc394e38364bba1d139e4146f2695"></a>

### [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) → [`0086ce70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce70.md) FUN_0086ce70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084932c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084932c.md) [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) [`00aa2a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2a88.md) · 呼出先 2件 [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a2d8.md) [`0086ce70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce70.md) [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) [`00aa3a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa3/00aa3a7c.md) · 呼出先 2件 [`0086ce70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce70.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bec4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0086bec4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0086ce70 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0086ce70 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0086bee4 ["INT_ADD", "register:40f0:8", ["const:86bee4:8", "const:4:8"]]
- 0086bee4 ["CALL", null, ["local:b0:8"]]
+ 0086ce90 ["INT_ADD", "register:40f0:8", ["const:86ce90:8", "const:4:8"]]
+ 0086ce90 ["CALL", null, ["local:b0:8"]]
- 0086bef0 ["INT_ADD", "register:40f0:8", ["const:86bef0:8", "const:4:8"]]
- 0086bef0 ["CALL", null, ["local:b0:8"]]
+ 0086ce9c ["INT_ADD", "register:40f0:8", ["const:86ce9c:8", "const:4:8"]]
+ 0086ce9c ["CALL", null, ["local:b0:8"]]
~~~


