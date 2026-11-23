# v16.0.2 → v16.0.3 · 最優先の変更候補 (59)

[一覧の目次](README.md)

<a id="compare-e89c7ab8187f8de2b6c32df889b8a010"></a>

### [`008a4550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4550.md) → [`008a54fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a54fc.md) FUN_008a54fc

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
      "unmatched:008a4568",
      "DATA",
      [
        "storage",
        "00c82550",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a456c",
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
      "008a5514",
      "DATA",
      [
        "storage",
        "00c83520",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5518",
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
- 008a455c ["INT_ADD", "register:40f0:8", ["const:8a455c:8", "const:4:8"]]
- 008a455c ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5508 ["INT_ADD", "register:40f0:8", ["const:8a5508:8", "const:4:8"]]
+ 008a5508 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4560 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a550c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4564 ["COPY", "tmp:0:8", ["const:550:8"]]
- 008a4564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e0b129964c87f9c7309adbceedb7a44"></a>

### [`008a4574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4574.md) → [`008a5520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5520.md) FUN_008a5520

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
      "unmatched:008a457c",
      "DATA",
      [
        "storage",
        "00c82550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5528",
      "DATA",
      [
        "storage",
        "00c83520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4574 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a4578 ["COPY", "tmp:0:8", ["const:550:8"]]
- 008a4578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a457c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a457c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-170c8020499dfe1ec4c47f2afe7b29e4"></a>

### [`008a458c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a458c.md) → [`008a5538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5538.md) FUN_008a5538

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.66% / 新版 83.66%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a45cc",
      "incomplete_value": true,
      "site": "008a45e8",
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
                "const:22b0:8"
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
      "definition_site": "008a45d8",
      "incomplete_value": true,
      "site": "008a45e8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              "INT_AND",
              [
                "leaf",
                "const:980000:4"
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
      "definition_site": "008a45d4",
      "incomplete_value": true,
      "site": "008a45e8",
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
      "unmatched:008a4590",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a4594",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a4598",
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
      "008a553c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008a5540",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a5544",
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
- 008a45e8 ["INT_ADD", "register:40f0:8", ["const:8a45e8:8", "const:4:8"]]
- 008a45e8 ["CALL", null, ["callee:008793f4:8"]]
+ 008a5594 ["INT_ADD", "register:40f0:8", ["const:8a5594:8", "const:4:8"]]
+ 008a5594 ["CALL", null, ["callee:008793f4:8"]]
- 008a461c ["INT_ADD", "register:40f0:8", ["const:8a461c:8", "const:4:8"]]
- 008a461c ["CALL", null, ["callee:0048d1b4:8"]]
+ 008a55c8 ["INT_ADD", "register:40f0:8", ["const:8a55c8:8", "const:4:8"]]
+ 008a55c8 ["CALL", null, ["callee:0048d1b4:8"]]
- 008a4678 ["INT_ADD", "register:40f0:8", ["const:8a4678:8", "const:4:8"]]
- 008a4678 ["CALL", null, ["callee:00442e98:8"]]
+ 008a5624 ["INT_ADD", "register:40f0:8", ["const:8a5624:8", "const:4:8"]]
+ 008a5624 ["CALL", null, ["callee:00442e98:8"]]
~~~


<a id="compare-f6eb4b70f9ccb63dd17077771a1b08be"></a>

### [`008a4934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4934.md) → [`008a58e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a58e0.md) FUN_008a58e0

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
      "definition_site": "008a58f4",
      "incomplete_value": false,
      "site": "008a58f8",
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
            "const:590:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4948",
      "incomplete_value": false,
      "site": "008a494c",
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
            "const:5c0:8"
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
      "008a58f8",
      "DATA",
      [
        "storage",
        "00c825c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a58f8",
      "DATA",
      [
        "storage",
        "00c83590",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4940 ["INT_ADD", "register:40f0:8", ["const:8a4940:8", "const:4:8"]]
- 008a4940 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a58ec ["INT_ADD", "register:40f0:8", ["const:8a58ec:8", "const:4:8"]]
+ 008a58ec ["CALL", null, ["callee:00c58f30:8"]]
- 008a4944 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a58f0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4948 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 008a4948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a58f4 ["COPY", "tmp:0:8", ["const:590:8"]]
+ 008a58f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a58f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a58f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b32f39b73e04f3d4eeb0a7c9be36bf6a"></a>

### [`008a4958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4958.md) → [`008a5904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5904.md) FUN_008a5904

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
      "definition_site": "008a5908",
      "incomplete_value": false,
      "site": "008a590c",
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
            "const:590:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a495c",
      "incomplete_value": false,
      "site": "008a4960",
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
            "const:5c0:8"
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
      "008a590c",
      "DATA",
      [
        "storage",
        "00c825c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a590c",
      "DATA",
      [
        "storage",
        "00c83590",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4958 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5904 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a495c ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 008a495c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a495c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a495c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5908 ["COPY", "tmp:0:8", ["const:590:8"]]
+ 008a5908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-676927cbe969012bd309db816c51e962"></a>

### [`008a4970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4970.md) → [`008a591c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a591c.md) FUN_008a591c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a4998",
      "incomplete_value": false,
      "site": "008a49a0",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "008a499c",
      "incomplete_value": false,
      "site": "008a49a0",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:008a4994",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008a5940",
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
- 008a49a0 ["INT_ADD", "register:40f0:8", ["const:8a49a0:8", "const:4:8"]]
- 008a49a0 ["CALL", null, ["callee:0047d134:8"]]
+ 008a594c ["INT_ADD", "register:40f0:8", ["const:8a594c:8", "const:4:8"]]
+ 008a594c ["CALL", null, ["callee:0047d134:8"]]
- 008a4978 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008a4978 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008a5924 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008a5924 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008a4980 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008a4980 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008a592c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008a592c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-7f0de0989167bc764970e805d2755a6e"></a>

### [`008a49e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a49e4.md) → [`008a5990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5990.md) FUN_008a5990

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
      "definition_site": "008a59a4",
      "incomplete_value": false,
      "site": "008a59a8",
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
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a49f8",
      "incomplete_value": false,
      "site": "008a49fc",
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
            "const:670:8"
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
      "008a59a8",
      "DATA",
      [
        "storage",
        "00c82670",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a59a8",
      "DATA",
      [
        "storage",
        "00c83640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a49f0 ["INT_ADD", "register:40f0:8", ["const:8a49f0:8", "const:4:8"]]
- 008a49f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a599c ["INT_ADD", "register:40f0:8", ["const:8a599c:8", "const:4:8"]]
+ 008a599c ["CALL", null, ["callee:00c58f30:8"]]
- 008a49f4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a59a0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a49f8 ["COPY", "tmp:0:8", ["const:670:8"]]
- 008a49f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a49f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a49f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a59a4 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 008a59a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea261ef60bd2cc54f1b162da1f174979"></a>

### [`008a4a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4a08.md) → [`008a59b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a59b4.md) FUN_008a59b4

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
      "definition_site": "008a59b8",
      "incomplete_value": false,
      "site": "008a59bc",
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
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4a0c",
      "incomplete_value": false,
      "site": "008a4a10",
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
            "const:670:8"
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
      "008a59bc",
      "DATA",
      [
        "storage",
        "00c82670",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a59bc",
      "DATA",
      [
        "storage",
        "00c83640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4a08 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a59b4 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4a0c ["COPY", "tmp:0:8", ["const:670:8"]]
- 008a4a0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4a0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4a0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a59b8 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 008a59b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-273bd08ac544bd2d9f6c6b94c9956719"></a>

### [`008a4a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4a20.md) → [`008a59cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a59cc.md) FUN_008a59cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md) [`004939b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493288.md) [`00493cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cd0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.72% / 新版 78.72%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5a3c",
      "incomplete_value": true,
      "site": "008a5a40",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008a5a38",
      "incomplete_value": true,
      "site": "008a5a40",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a4ab0",
      "incomplete_value": true,
      "site": "008a4ab4",
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
      "unmatched:008a4a48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a4a50",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00493cd0"
      ]
    ],
    [
      "unmatched:008a4a54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "008a59f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a59fc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00493cd0"
      ]
    ],
    [
      "008a5a00",
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
- 008a4a94 ["INT_ADD", "register:40f0:8", ["const:8a4a94:8", "const:4:8"]]
- 008a4a94 ["CALL", null, ["callee:00493288:8"]]
+ 008a5a40 ["INT_ADD", "register:40f0:8", ["const:8a5a40:8", "const:4:8"]]
+ 008a5a40 ["CALL", null, ["callee:00493288:8"]]
- 008a4ab4 ["INT_ADD", "register:40f0:8", ["const:8a4ab4:8", "const:4:8"]]
- 008a4ab4 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a5a60 ["INT_ADD", "register:40f0:8", ["const:8a5a60:8", "const:4:8"]]
+ 008a5a60 ["CALL", null, ["callee:00c58f50:8"]]
- 008a4a40 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008a4a40 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008a4a40 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008a4a40 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008a59ec ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008a59ec ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008a59ec ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008a59ec ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-53c0e8fd3c2ec6bf01518cab1364d1ff"></a>

### [`008a4b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b4c.md) → [`008a5af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5af8.md) FUN_008a5af8

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
      "unmatched:008a4b64",
      "DATA",
      [
        "storage",
        "00c826f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a4b68",
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
      "008a5b10",
      "DATA",
      [
        "storage",
        "00c836c0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5b14",
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
- 008a4b58 ["INT_ADD", "register:40f0:8", ["const:8a4b58:8", "const:4:8"]]
- 008a4b58 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5b04 ["INT_ADD", "register:40f0:8", ["const:8a5b04:8", "const:4:8"]]
+ 008a5b04 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4b5c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5b08 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4b60 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 008a4b60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c05857c4c339d43be4bc7940561cac2"></a>

### [`008a4b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b70.md) → [`008a5b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5b1c.md) FUN_008a5b1c

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
      "unmatched:008a4b78",
      "DATA",
      [
        "storage",
        "00c826f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5b24",
      "DATA",
      [
        "storage",
        "00c836c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4b70 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a4b74 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 008a4b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a4b78 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a4b78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-f7796d87fb0128217fdf57e74d151e2c"></a>

### [`008a4b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b88.md) → [`008a5b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5b34.md) FUN_008a5b34

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
      "unmatched:008a4bac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008a5b58",
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
- 008a4b90 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008a4b90 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008a5b3c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008a5b3c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008a4b98 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008a4b98 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008a5b44 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008a5b44 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008a4bac ["INT_ADD", "register:40f0:8", ["const:8a4bac:8", "const:4:8"]]
- 008a4bac ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-a49ea265551b78a9e9fdbeeb8d29712d"></a>

### [`008a4bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4bfc.md) → [`008a5ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5ba8.md) FUN_008a5ba8

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
      "definition_site": "008a5bbc",
      "incomplete_value": false,
      "site": "008a5bc0",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4c10",
      "incomplete_value": false,
      "site": "008a4c14",
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
            "const:770:8"
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
      "008a5bc0",
      "DATA",
      [
        "storage",
        "00c82770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5bc0",
      "DATA",
      [
        "storage",
        "00c83740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4c08 ["INT_ADD", "register:40f0:8", ["const:8a4c08:8", "const:4:8"]]
- 008a4c08 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5bb4 ["INT_ADD", "register:40f0:8", ["const:8a5bb4:8", "const:4:8"]]
+ 008a5bb4 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4c0c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5bb8 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4c10 ["COPY", "tmp:0:8", ["const:770:8"]]
- 008a4c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5bbc ["COPY", "tmp:0:8", ["const:740:8"]]
+ 008a5bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4499692674eece9e6be61abaf768be23"></a>

### [`008a4c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c20.md) → [`008a5bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5bcc.md) FUN_008a5bcc

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
      "definition_site": "008a5bd0",
      "incomplete_value": false,
      "site": "008a5bd4",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4c24",
      "incomplete_value": false,
      "site": "008a4c28",
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
            "const:770:8"
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
      "008a5bd4",
      "DATA",
      [
        "storage",
        "00c82770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5bd4",
      "DATA",
      [
        "storage",
        "00c83740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4c20 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5bcc ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4c24 ["COPY", "tmp:0:8", ["const:770:8"]]
- 008a4c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5bd0 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 008a5bd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5bd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5bd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b67808fc8ac76d28ba2038563ff2b74"></a>

### [`008a4c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c6c.md) → [`008a5c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5c18.md) FUN_008a5c18

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
      "unmatched:008a4c84",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a4c88",
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
      "008a5c30",
      "DATA",
      [
        "storage",
        "00c837c0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5c34",
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
- 008a4c78 ["INT_ADD", "register:40f0:8", ["const:8a4c78:8", "const:4:8"]]
- 008a4c78 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5c24 ["INT_ADD", "register:40f0:8", ["const:8a5c24:8", "const:4:8"]]
+ 008a5c24 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4c7c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5c28 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4c80 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 008a4c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9ada9ad4ad300dd84d3973c1e0c7933c"></a>

### [`008a4c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c90.md) → [`008a5c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5c3c.md) FUN_008a5c3c

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
      "definition_site": "008a5c40",
      "incomplete_value": false,
      "site": "008a5c44",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4c94",
      "incomplete_value": false,
      "site": "008a4c98",
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
      "008a5c44",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5c44",
      "DATA",
      [
        "storage",
        "00c837c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4c90 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5c3c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4c94 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 008a4c94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5c40 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 008a5c40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5c40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5c40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a5a7873c6530adce23e7b8c7a05bcc00"></a>

### [`008a4ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4ca8.md) → [`008a5c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5c54.md) FUN_008a5c54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0044ed60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ed60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0044f080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f080.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5d34",
      "incomplete_value": true,
      "site": "008a5d38",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008a5d2c",
      "incomplete_value": true,
      "site": "008a5d38",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a5d30",
      "incomplete_value": true,
      "site": "008a5d38",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a4d44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a4d60",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008a4d68",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008a5cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a5d0c",
      "READ",
      [
        "storage",
        "002bb2ed",
        null,
        "string"
      ]
    ],
    [
      "008a5d14",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4d8c ["INT_ADD", "register:40f0:8", ["const:8a4d8c:8", "const:4:8"]]
- 008a4d8c ["CALL", null, ["callee:0048f250:8"]]
+ 008a5d38 ["INT_ADD", "register:40f0:8", ["const:8a5d38:8", "const:4:8"]]
+ 008a5d38 ["CALL", null, ["callee:0048f250:8"]]
- 008a4e10 ["INT_ADD", "register:40f0:8", ["const:8a4e10:8", "const:4:8"]]
- 008a4e10 ["CALL", null, ["callee:008bbccc:8"]]
+ 008a5dbc ["INT_ADD", "register:40f0:8", ["const:8a5dbc:8", "const:4:8"]]
+ 008a5dbc ["CALL", null, ["callee:008bbccc:8"]]
- 008a4e40 ["INT_ADD", "register:40f0:8", ["const:8a4e40:8", "const:4:8"]]
- 008a4e40 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a5dec ["INT_ADD", "register:40f0:8", ["const:8a5dec:8", "const:4:8"]]
+ 008a5dec ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2123a1acb89d44fc433b2ed238fa4bbe"></a>

### [`008a4fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4fbc.md) → [`008a5f68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5f68.md) FUN_008a5f68

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
      "unmatched:008a4fd4",
      "DATA",
      [
        "storage",
        "00c82860",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a4fd8",
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
      "008a5f80",
      "DATA",
      [
        "storage",
        "00c83830",
        null,
        "undefined *"
      ]
    ],
    [
      "008a5f84",
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
- 008a4fc8 ["INT_ADD", "register:40f0:8", ["const:8a4fc8:8", "const:4:8"]]
- 008a4fc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a5f74 ["INT_ADD", "register:40f0:8", ["const:8a5f74:8", "const:4:8"]]
+ 008a5f74 ["CALL", null, ["callee:00c58f30:8"]]
- 008a4fcc ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5f78 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4fd0 ["COPY", "tmp:0:8", ["const:860:8"]]
- 008a4fd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4fd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4fd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6c0c0575faf3aabb7b86f78b94bb12bb"></a>

### [`008a4fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4fe0.md) → [`008a5f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5f8c.md) FUN_008a5f8c

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
      "definition_site": "008a5f90",
      "incomplete_value": false,
      "site": "008a5f94",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4fe4",
      "incomplete_value": false,
      "site": "008a4fe8",
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
            "const:860:8"
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
      "008a5f94",
      "DATA",
      [
        "storage",
        "00c82860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5f94",
      "DATA",
      [
        "storage",
        "00c83830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4fe0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a5f8c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a4fe4 ["COPY", "tmp:0:8", ["const:860:8"]]
- 008a4fe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4fe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4fe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5f90 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 008a5f90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5f90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5f90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c1163b9e03d8d66614e09c68a75b1ff"></a>

### [`008a4ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4ff8.md) → [`008a5fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a5fa4.md) FUN_008a5fa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a5020",
      "incomplete_value": false,
      "site": "008a5028",
      "value": [
        "leaf",
        "const:b:8"
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
      "unmatched:008a501c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008a5fc8",
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
- 008a5028 ["INT_ADD", "register:40f0:8", ["const:8a5028:8", "const:4:8"]]
- 008a5028 ["CALL", null, ["callee:0047d134:8"]]
+ 008a5fd4 ["INT_ADD", "register:40f0:8", ["const:8a5fd4:8", "const:4:8"]]
+ 008a5fd4 ["CALL", null, ["callee:0047d134:8"]]
- 008a5000 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008a5000 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008a5fac ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008a5fac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008a5008 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008a5008 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008a5fb4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008a5fb4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-ffe5df46507a02fe980c3fe9ac0f1ffb"></a>

### [`008a506c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a506c.md) → [`008a6018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6018.md) FUN_008a6018

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
      "unmatched:008a5084",
      "DATA",
      [
        "storage",
        "00c828f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a5088",
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
      "008a6030",
      "DATA",
      [
        "storage",
        "00c838c0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a6034",
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
- 008a5078 ["INT_ADD", "register:40f0:8", ["const:8a5078:8", "const:4:8"]]
- 008a5078 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6024 ["INT_ADD", "register:40f0:8", ["const:8a6024:8", "const:4:8"]]
+ 008a6024 ["CALL", null, ["callee:00c58f30:8"]]
- 008a507c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6028 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5080 ["COPY", "tmp:0:8", ["const:8f0:8"]]
- 008a5080 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5080 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5080 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d25532be58535a392d4f0efd34b0b587"></a>

### [`008a5090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5090.md) → [`008a603c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a603c.md) FUN_008a603c

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
      "definition_site": "008a6040",
      "incomplete_value": false,
      "site": "008a6044",
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
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5094",
      "incomplete_value": false,
      "site": "008a5098",
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
            "const:8f0:8"
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
      "008a6044",
      "DATA",
      [
        "storage",
        "00c828f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6044",
      "DATA",
      [
        "storage",
        "00c838c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5090 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a603c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5094 ["COPY", "tmp:0:8", ["const:8f0:8"]]
- 008a5094 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5094 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5094 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6040 ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 008a6040 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6040 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6040 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59b860ad5ecadad1681c3227ee1a1732"></a>

### [`008a50a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a50a8.md) → [`008a6054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6054.md) FUN_008a6054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a50b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008a50b0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008a605c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008a605c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008a50b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008a50b8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008a6064 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008a6064 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-0ba9ff8be544fb5c82c0d3c5657d3fdf"></a>

### [`008a50f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a50f4.md) → [`008a60a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a60a0.md) FUN_008a60a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a50fc",
      "incomplete_value": false,
      "site": "008a5100",
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
      "unmatched:008a510c",
      "DATA",
      [
        "storage",
        "00c82970",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a5110",
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
      "008a60b8",
      "DATA",
      [
        "storage",
        "00c83940",
        null,
        "undefined *"
      ]
    ],
    [
      "008a60bc",
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
- 008a5100 ["INT_ADD", "register:40f0:8", ["const:8a5100:8", "const:4:8"]]
- 008a5100 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a60ac ["INT_ADD", "register:40f0:8", ["const:8a60ac:8", "const:4:8"]]
+ 008a60ac ["CALL", null, ["callee:00c58f30:8"]]
- 008a5104 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a60b0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5108 ["COPY", "tmp:0:8", ["const:970:8"]]
- 008a5108 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5108 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5108 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b41be8623c0b3c0b0256f9e077dea51a"></a>

### [`008a5118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5118.md) → [`008a60c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a60c4.md) FUN_008a60c4

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
      "unmatched:008a5120",
      "DATA",
      [
        "storage",
        "00c82970",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a60cc",
      "DATA",
      [
        "storage",
        "00c83940",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5118 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a511c ["COPY", "tmp:0:8", ["const:970:8"]]
- 008a511c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a511c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a511c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a5120 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a5120 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-8c6e1f5bb18f97db04af781562cc7877"></a>

### [`008a5130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5130.md) → [`008a60dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a60dc.md) FUN_008a60dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`0053f378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f378.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 53.10% / 新版 53.10%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a61d0",
      "incomplete_value": true,
      "site": "008a61d8",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a5264",
      "incomplete_value": true,
      "site": "008a527c",
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
                "const:ffffffffffffffe0:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a5264",
      "incomplete_value": true,
      "site": "008a527c",
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
    "ordinal": 11,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a514c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5154",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5158",
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
      "008a60f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008a6100",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008a6104",
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
- 008a522c ["INT_ADD", "register:40f0:8", ["const:8a522c:8", "const:4:8"]]
- 008a522c ["CALL", null, ["callee:00492c0c:8"]]
+ 008a61d8 ["INT_ADD", "register:40f0:8", ["const:8a61d8:8", "const:4:8"]]
+ 008a61d8 ["CALL", null, ["callee:00492c0c:8"]]
- 008a527c ["INT_ADD", "register:40f0:8", ["const:8a527c:8", "const:4:8"]]
- 008a527c ["CALL", null, ["callee:0053f378:8"]]
+ 008a6228 ["INT_ADD", "register:40f0:8", ["const:8a6228:8", "const:4:8"]]
+ 008a6228 ["CALL", null, ["callee:0053f378:8"]]
- 008a514c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008a514c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008a514c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-82ce1c3f9f202fd7e54200010293b7b3"></a>

### [`008a5378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5378.md) → [`008a6324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6324.md) FUN_008a6324

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
      "definition_site": "008a6338",
      "incomplete_value": false,
      "site": "008a633c",
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
            "const:9c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a538c",
      "incomplete_value": false,
      "site": "008a5390",
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
            "const:9f0:8"
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
      "008a633c",
      "DATA",
      [
        "storage",
        "00c829f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a633c",
      "DATA",
      [
        "storage",
        "00c839c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5384 ["INT_ADD", "register:40f0:8", ["const:8a5384:8", "const:4:8"]]
- 008a5384 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6330 ["INT_ADD", "register:40f0:8", ["const:8a6330:8", "const:4:8"]]
+ 008a6330 ["CALL", null, ["callee:00c58f30:8"]]
- 008a5388 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6334 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a538c ["COPY", "tmp:0:8", ["const:9f0:8"]]
- 008a538c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a538c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a538c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6338 ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 008a6338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4100c22bf7319e81a0d22f889704e845"></a>

### [`008a539c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a539c.md) → [`008a6348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6348.md) FUN_008a6348

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
      "definition_site": "008a634c",
      "incomplete_value": false,
      "site": "008a6350",
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
            "const:9c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a53a0",
      "incomplete_value": false,
      "site": "008a53a4",
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
            "const:9f0:8"
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
      "008a6350",
      "DATA",
      [
        "storage",
        "00c829f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6350",
      "DATA",
      [
        "storage",
        "00c839c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a539c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6348 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a53a0 ["COPY", "tmp:0:8", ["const:9f0:8"]]
- 008a53a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a53a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a53a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a634c ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 008a634c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a634c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a634c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f7b3baf5f6a3d4c3b80b2ba068ab9acd"></a>

### [`008a53b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a53b4.md) → [`008a6360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6360.md) FUN_008a6360

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.44% / 新版 67.44%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a53b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a53bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a53cc",
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
      "008a6364",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a6368",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a6378",
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
- 008a53b4 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 008a53b8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a53b8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a53b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008a53b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008a53bc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008a53bc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008a53bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008a53bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0b87d947826d31866db346ac5ac95189"></a>

### [`008a54d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a54d0.md) → [`008a647c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a647c.md) FUN_008a647c

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
      "definition_site": "008a6490",
      "incomplete_value": false,
      "site": "008a6494",
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
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a54e4",
      "incomplete_value": false,
      "site": "008a54e8",
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
            "const:a70:8"
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
      "008a6494",
      "DATA",
      [
        "storage",
        "00c82a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6494",
      "DATA",
      [
        "storage",
        "00c83a40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a54dc ["INT_ADD", "register:40f0:8", ["const:8a54dc:8", "const:4:8"]]
- 008a54dc ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6488 ["INT_ADD", "register:40f0:8", ["const:8a6488:8", "const:4:8"]]
+ 008a6488 ["CALL", null, ["callee:00c58f30:8"]]
- 008a54e0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a648c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a54e4 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 008a54e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a54e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a54e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6490 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 008a6490 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6490 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6490 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0ce8dd9ae49e34f3c25a38e7404a6dc"></a>

### [`008a54f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a54f4.md) → [`008a64a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a64a0.md) FUN_008a64a0

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
      "definition_site": "008a64a4",
      "incomplete_value": false,
      "site": "008a64a8",
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
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a54f8",
      "incomplete_value": false,
      "site": "008a54fc",
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
            "const:a70:8"
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
      "008a64a8",
      "DATA",
      [
        "storage",
        "00c82a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a64a8",
      "DATA",
      [
        "storage",
        "00c83a40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a54f4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a64a0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a54f8 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 008a54f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a54f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a54f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a64a4 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 008a64a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b9c9f80c9883beb1ed2382cfb60551a"></a>

### [`008a550c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a550c.md) → [`008a64b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a64b8.md) FUN_008a64b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a64e8",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a553c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6510",
      "incomplete_value": true,
      "site": "008a6518",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6510",
      "incomplete_value": true,
      "site": "008a6518",
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
      "008a64e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a5588",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a55a4",
      "READ",
      [
        "storage",
        "002b7992",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a64e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a6534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a6550",
      "READ",
      [
        "storage",
        "002b7a61",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a553c ["INT_ADD", "register:40f0:8", ["const:8a553c:8", "const:4:8"]]
- 008a553c ["CALL", null, ["ram:48cd38:8"]]
+ 008a64e8 ["INT_ADD", "register:40f0:8", ["const:8a64e8:8", "const:4:8"]]
+ 008a64e8 ["CALL", null, ["ram:48d058:8"]]
- 008a556c ["INT_ADD", "register:40f0:8", ["const:8a556c:8", "const:4:8"]]
- 008a556c ["CALL", null, ["callee:0043be80:8"]]
+ 008a6518 ["INT_ADD", "register:40f0:8", ["const:8a6518:8", "const:4:8"]]
+ 008a6518 ["CALL", null, ["callee:0043be80:8"]]
- 008a56e8 ["INT_ADD", "register:40f0:8", ["const:8a56e8:8", "const:4:8"]]
- 008a56e8 ["CALL", null, ["callee:0043be80:8"]]
+ 008a6694 ["INT_ADD", "register:40f0:8", ["const:8a6694:8", "const:4:8"]]
+ 008a6694 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-3931a80242afdb53aefca4cdfbbe02a1"></a>

### [`008a5830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5830.md) → [`008a67dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a67dc.md) FUN_008a67dc

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
      "definition_site": "008a67f0",
      "incomplete_value": false,
      "site": "008a67f4",
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
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5844",
      "incomplete_value": false,
      "site": "008a5848",
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
            "const:af0:8"
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
      "008a67f4",
      "DATA",
      [
        "storage",
        "00c82af0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a67f4",
      "DATA",
      [
        "storage",
        "00c83ac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a583c ["INT_ADD", "register:40f0:8", ["const:8a583c:8", "const:4:8"]]
- 008a583c ["CALL", null, ["callee:00c58f30:8"]]
+ 008a67e8 ["INT_ADD", "register:40f0:8", ["const:8a67e8:8", "const:4:8"]]
+ 008a67e8 ["CALL", null, ["callee:00c58f30:8"]]
- 008a5840 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a67ec ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5844 ["COPY", "tmp:0:8", ["const:af0:8"]]
- 008a5844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a67f0 ["COPY", "tmp:0:8", ["const:ac0:8"]]
+ 008a67f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a67f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a67f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-94050e024d27b64871609d6242a50862"></a>

### [`008a5854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5854.md) → [`008a6800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6800.md) FUN_008a6800

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
      "unmatched:008a585c",
      "DATA",
      [
        "storage",
        "00c82af0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6808",
      "DATA",
      [
        "storage",
        "00c83ac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5854 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a5858 ["COPY", "tmp:0:8", ["const:af0:8"]]
- 008a5858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a585c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a585c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-f9639fb8d7e2f0cf4b8bf56070f93e86"></a>

### [`008a586c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a586c.md) → [`008a6818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6818.md) FUN_008a6818

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.67% / 新版 76.67%

優先判定に残った影響 `call_target` 1件, `store_value` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a68ac",
      "incomplete_value": true,
      "site": "008a68c0",
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
      "definition_site": "008a5900",
      "incomplete_value": true,
      "site": "008a5914",
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
      "site": "008a689c",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a58f0",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "unmatched:008a5870",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5874",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5884",
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
      "008a681c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a6820",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a6830",
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
- 008a58f0 ["INT_ADD", "register:40f0:8", ["const:8a58f0:8", "const:4:8"]]
- 008a58f0 ["CALL", null, ["ram:48cd38:8"]]
+ 008a689c ["INT_ADD", "register:40f0:8", ["const:8a689c:8", "const:4:8"]]
+ 008a689c ["CALL", null, ["ram:48d058:8"]]
- 008a586c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 008a5870 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a5870 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a5870 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008a5870 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bfcc8b0a57aa60e83a633949a653a2bb"></a>

### [`008a59cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a59cc.md) → [`008a6978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6978.md) FUN_008a6978

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
      "definition_site": "008a698c",
      "incomplete_value": false,
      "site": "008a6990",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a59e0",
      "incomplete_value": false,
      "site": "008a59e4",
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
            "const:b70:8"
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
      "008a6990",
      "DATA",
      [
        "storage",
        "00c82b70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6990",
      "DATA",
      [
        "storage",
        "00c83b40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a59d8 ["INT_ADD", "register:40f0:8", ["const:8a59d8:8", "const:4:8"]]
- 008a59d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6984 ["INT_ADD", "register:40f0:8", ["const:8a6984:8", "const:4:8"]]
+ 008a6984 ["CALL", null, ["callee:00c58f30:8"]]
- 008a59dc ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6988 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a59e0 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 008a59e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a59e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a59e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a698c ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 008a698c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a698c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a698c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b56a1c18973fbc00a19cd0e865fc1396"></a>

### [`008a59f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a59f0.md) → [`008a699c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a699c.md) FUN_008a699c

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
      "unmatched:008a59f8",
      "DATA",
      [
        "storage",
        "00c82b70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a69a4",
      "DATA",
      [
        "storage",
        "00c83b40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a59f0 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a59f4 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 008a59f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a59f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a59f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a59f8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a59f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-5ffb38750a4be23f6b15e9f297e6338b"></a>

### [`008a5a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5a08.md) → [`008a69b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a69b4.md) FUN_008a69b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.38% / 新版 85.38%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a6a7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a6a28"
      ]
    ],
    [
      "unmatched:008a5ad0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a6a60"
      ]
    ],
    [
      "008a6a8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008a5b50"
      ]
    ]
  ],
  "added": [
    [
      "008a6a4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a6a28"
      ]
    ],
    [
      "008a6a7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a6a60"
      ]
    ],
    [
      "008a6a8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a6afc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5a2c ["INT_ADD", "register:40f0:8", ["const:8a5a2c:8", "const:4:8"]]
- 008a5a2c ["CALL", null, ["callee:008524fc:8"]]
+ 008a69d8 ["INT_ADD", "register:40f0:8", ["const:8a69d8:8", "const:4:8"]]
+ 008a69d8 ["CALL", null, ["callee:008524fc:8"]]
- 008a5a34 ["INT_ADD", "register:40f0:8", ["const:8a5a34:8", "const:4:8"]]
- 008a5a34 ["CALL", null, ["callee:008524fc:8"]]
+ 008a69e0 ["INT_ADD", "register:40f0:8", ["const:8a69e0:8", "const:4:8"]]
+ 008a69e0 ["CALL", null, ["callee:008524fc:8"]]
- 008a5a3c ["INT_ADD", "register:40f0:8", ["const:8a5a3c:8", "const:4:8"]]
- 008a5a3c ["CALL", null, ["callee:008524fc:8"]]
+ 008a69e8 ["INT_ADD", "register:40f0:8", ["const:8a69e8:8", "const:4:8"]]
+ 008a69e8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d0ddb99d687b6b998280531f4d6b1e71"></a>

### [`008a5c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5c90.md) → [`008a6c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6c3c.md) FUN_008a6c3c

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
      "definition_site": "008a6c50",
      "incomplete_value": false,
      "site": "008a6c54",
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
            "const:bc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5ca4",
      "incomplete_value": false,
      "site": "008a5ca8",
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
            "const:bf0:8"
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
      "008a6c54",
      "DATA",
      [
        "storage",
        "00c82bf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6c54",
      "DATA",
      [
        "storage",
        "00c83bc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5c9c ["INT_ADD", "register:40f0:8", ["const:8a5c9c:8", "const:4:8"]]
- 008a5c9c ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6c48 ["INT_ADD", "register:40f0:8", ["const:8a6c48:8", "const:4:8"]]
+ 008a6c48 ["CALL", null, ["callee:00c58f30:8"]]
- 008a5ca0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6c4c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5ca4 ["COPY", "tmp:0:8", ["const:bf0:8"]]
- 008a5ca4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5ca4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5ca4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6c50 ["COPY", "tmp:0:8", ["const:bc0:8"]]
+ 008a6c50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc8a74c695461bfc4fa7a36e03dcecb9"></a>

### [`008a5cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5cb4.md) → [`008a6c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6c60.md) FUN_008a6c60

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
      "definition_site": "008a6c64",
      "incomplete_value": false,
      "site": "008a6c68",
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
            "const:bc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5cb8",
      "incomplete_value": false,
      "site": "008a5cbc",
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
            "const:bf0:8"
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
      "008a6c68",
      "DATA",
      [
        "storage",
        "00c82bf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6c68",
      "DATA",
      [
        "storage",
        "00c83bc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5cb4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6c60 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5cb8 ["COPY", "tmp:0:8", ["const:bf0:8"]]
- 008a5cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6c64 ["COPY", "tmp:0:8", ["const:bc0:8"]]
+ 008a6c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-999329a52097c68f77683933a7a7b815"></a>

### [`008a5ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5ccc.md) → [`008a6c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6c78.md) FUN_008a6c78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.47% / 新版 74.47%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6ccc",
      "incomplete_value": true,
      "site": "008a6cd0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6ce8",
      "incomplete_value": true,
      "site": "008a6cec",
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
      "unmatched:008a5cd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5ce8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a5cec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ],
  "added": [
    [
      "008a6c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a6c94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a6c98",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5d24 ["INT_ADD", "register:40f0:8", ["const:8a5d24:8", "const:4:8"]]
- 008a5d24 ["CALL", null, ["callee:00493064:8"]]
+ 008a6cd0 ["INT_ADD", "register:40f0:8", ["const:8a6cd0:8", "const:4:8"]]
+ 008a6cd0 ["CALL", null, ["callee:00493064:8"]]
- 008a5d40 ["INT_ADD", "register:40f0:8", ["const:8a5d40:8", "const:4:8"]]
- 008a5d40 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a6cec ["INT_ADD", "register:40f0:8", ["const:8a6cec:8", "const:4:8"]]
+ 008a6cec ["CALL", null, ["callee:00c58f50:8"]]
- 008a5ccc ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-3dd043e0071fc53899f7c267dc2a6a88"></a>

### [`008a5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5df8.md) → [`008a6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6da4.md) FUN_008a6da4

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
      "unmatched:008a5e10",
      "DATA",
      [
        "storage",
        "00c82c70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a5e14",
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
      "008a6dbc",
      "DATA",
      [
        "storage",
        "00c83c40",
        null,
        "undefined *"
      ]
    ],
    [
      "008a6dc0",
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
- 008a5e04 ["INT_ADD", "register:40f0:8", ["const:8a5e04:8", "const:4:8"]]
- 008a5e04 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a6db0 ["INT_ADD", "register:40f0:8", ["const:8a6db0:8", "const:4:8"]]
+ 008a6db0 ["CALL", null, ["callee:00c58f30:8"]]
- 008a5e08 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6db4 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5e0c ["COPY", "tmp:0:8", ["const:c70:8"]]
- 008a5e0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5e0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5e0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-451647dc56bdfcbc4dd4c794f4e2b63c"></a>

### [`008a5e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5e1c.md) → [`008a6dc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6dc8.md) FUN_008a6dc8

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
      "definition_site": "008a6dcc",
      "incomplete_value": false,
      "site": "008a6dd0",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5e20",
      "incomplete_value": false,
      "site": "008a5e24",
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
            "const:c70:8"
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
      "008a6dd0",
      "DATA",
      [
        "storage",
        "00c82c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6dd0",
      "DATA",
      [
        "storage",
        "00c83c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5e1c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6dc8 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a5e20 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 008a5e20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5e20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5e20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6dcc ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 008a6dcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6dcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6dcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cb7622ef841b348b9c4f9892155ee7a3"></a>

### [`008a5e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5e34.md) → [`008a6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a6de0.md) FUN_008a6de0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`0082fafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fafc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.47% / 新版 73.47%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6e44",
      "incomplete_value": true,
      "site": "008a6e4c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a6f40",
      "incomplete_value": true,
      "site": "008a6f44",
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
      "unmatched:008a5e38",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a5e40",
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
      "008a6de4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008a6de8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008a6dec",
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
- 008a5ea0 ["INT_ADD", "register:40f0:8", ["const:8a5ea0:8", "const:4:8"]]
- 008a5ea0 ["CALL", null, ["callee:00c590f0:8"]]
+ 008a6e4c ["INT_ADD", "register:40f0:8", ["const:8a6e4c:8", "const:4:8"]]
+ 008a6e4c ["CALL", null, ["callee:00c590f0:8"]]
- 008a5f98 ["INT_ADD", "register:40f0:8", ["const:8a5f98:8", "const:4:8"]]
- 008a5f98 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a6f44 ["INT_ADD", "register:40f0:8", ["const:8a6f44:8", "const:4:8"]]
+ 008a6f44 ["CALL", null, ["callee:00c58f50:8"]]
- 008a5e34 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-9632423bf661d0960b81877d716d0489"></a>

### [`008a60f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a60f0.md) → [`008a709c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a709c.md) FUN_008a709c

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
      "definition_site": "008a70b0",
      "incomplete_value": false,
      "site": "008a70b4",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6104",
      "incomplete_value": false,
      "site": "008a6108",
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
            "const:cf0:8"
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
      "008a70b4",
      "DATA",
      [
        "storage",
        "00c82cf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a70b4",
      "DATA",
      [
        "storage",
        "00c83cc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a60fc ["INT_ADD", "register:40f0:8", ["const:8a60fc:8", "const:4:8"]]
- 008a60fc ["CALL", null, ["callee:00c58f30:8"]]
+ 008a70a8 ["INT_ADD", "register:40f0:8", ["const:8a70a8:8", "const:4:8"]]
+ 008a70a8 ["CALL", null, ["callee:00c58f30:8"]]
- 008a6100 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a70ac ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6104 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 008a6104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a70b0 ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 008a70b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a70b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a70b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3e8c8594ecb94d112419c08684caa351"></a>

### [`008a6114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6114.md) → [`008a70c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a70c0.md) FUN_008a70c0

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
      "definition_site": "008a70c4",
      "incomplete_value": false,
      "site": "008a70c8",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6118",
      "incomplete_value": false,
      "site": "008a611c",
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
            "const:cf0:8"
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
      "008a70c8",
      "DATA",
      [
        "storage",
        "00c82cf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a70c8",
      "DATA",
      [
        "storage",
        "00c83cc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6114 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a70c0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6118 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 008a6118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a70c4 ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 008a70c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a70c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a70c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d8ad1c069afde87c1404e5e482c5394"></a>

### [`008a612c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a612c.md) → [`008a70d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a70d8.md) FUN_008a70d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `call_target` 1件, `store_condition` 4件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a716c",
      "incomplete_value": true,
      "site": "008a7180",
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
      "definition_site": "008a61c0",
      "incomplete_value": true,
      "site": "008a61d4",
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
      "site": "008a715c",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a61b0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008a617c"
      ],
      [
        "CONDITIONAL_JUMP",
        "008a7128"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7178",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "008a6178",
      "incomplete_value": true,
      "site": "008a61cc",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:2:4"
          ],
          [
            "live",
            "register:4040:4"
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
      "unmatched:008a6130",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a6134",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a6144",
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
      "008a70dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a70e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a70f0",
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
- 008a61b0 ["INT_ADD", "register:40f0:8", ["const:8a61b0:8", "const:4:8"]]
- 008a61b0 ["CALL", null, ["ram:48cd38:8"]]
+ 008a715c ["INT_ADD", "register:40f0:8", ["const:8a715c:8", "const:4:8"]]
+ 008a715c ["CALL", null, ["ram:48d058:8"]]
- 008a612c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 008a6130 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a6130 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a6130 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008a6130 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1e65737b08220a86332bd31ebdfe609c"></a>

### [`008a628c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a628c.md) → [`008a7238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7238.md) FUN_008a7238

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
      "unmatched:008a62a4",
      "DATA",
      [
        "storage",
        "00c82d70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a62a8",
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
      "008a7250",
      "DATA",
      [
        "storage",
        "00c83d40",
        null,
        "undefined *"
      ]
    ],
    [
      "008a7254",
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
- 008a6298 ["INT_ADD", "register:40f0:8", ["const:8a6298:8", "const:4:8"]]
- 008a6298 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a7244 ["INT_ADD", "register:40f0:8", ["const:8a7244:8", "const:4:8"]]
+ 008a7244 ["CALL", null, ["callee:00c58f30:8"]]
- 008a629c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a7248 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a62a0 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 008a62a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a62a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a62a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-03bac48a4ba9d82b634af283cdf6b292"></a>

### [`008a62b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a62b0.md) → [`008a725c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a725c.md) FUN_008a725c

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
      "definition_site": "008a7260",
      "incomplete_value": false,
      "site": "008a7264",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a62b4",
      "incomplete_value": false,
      "site": "008a62b8",
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
            "const:d70:8"
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
      "008a7264",
      "DATA",
      [
        "storage",
        "00c82d70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7264",
      "DATA",
      [
        "storage",
        "00c83d40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a62b0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a725c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a62b4 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 008a62b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a62b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a62b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7260 ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 008a7260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a88330f4c77eca1331d4e9f6c6b99908"></a>

### [`008a62c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a62c8.md) → [`008a7274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7274.md) FUN_008a7274

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 83.51% / 新版 83.51%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a72a0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a62f4",
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
      "008a72a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a6324",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ],
    [
      "unmatched:008a6328",
      "READ",
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
      "008a72a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a72d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ],
    [
      "008a72d4",
      "READ",
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
- 008a62f4 ["INT_ADD", "register:40f0:8", ["const:8a62f4:8", "const:4:8"]]
- 008a62f4 ["CALL", null, ["ram:48cd38:8"]]
+ 008a72a0 ["INT_ADD", "register:40f0:8", ["const:8a72a0:8", "const:4:8"]]
+ 008a72a0 ["CALL", null, ["ram:48d058:8"]]
- 008a62f8 ["INT_ADD", "register:40f0:8", ["const:8a62f8:8", "const:4:8"]]
- 008a62f8 ["CALL", null, ["callee:0048eb40:8"]]
+ 008a72a4 ["INT_ADD", "register:40f0:8", ["const:8a72a4:8", "const:4:8"]]
+ 008a72a4 ["CALL", null, ["callee:0048eb40:8"]]
- 008a6318 ["INT_SUB", "register:4040:8", ["register:4010:8", "register:4008:8"]]
~~~


<a id="compare-b977339fcb680425f25cf21927aa614b"></a>

### [`008a64d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a64d0.md) → [`008a747c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a747c.md) FUN_008a747c

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
      "unmatched:008a64d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a64dc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008a64e8",
      "DATA",
      [
        "storage",
        "00c82df0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a747c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a7488",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008a7494",
      "DATA",
      [
        "storage",
        "00c83dc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a64d0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a64d0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a64d0 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008a64d0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008a64d4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008a64d8 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-526befacfbcbf9ec9a4ebe66bd4dca9a"></a>

### [`008a64f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a64f4.md) → [`008a74a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a74a0.md) FUN_008a74a0

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
      "definition_site": "008a74a4",
      "incomplete_value": false,
      "site": "008a74a8",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a64f8",
      "incomplete_value": false,
      "site": "008a64fc",
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
      "008a74a8",
      "DATA",
      [
        "storage",
        "00c82df0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a74a8",
      "DATA",
      [
        "storage",
        "00c83dc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a64f4 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a74a0 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a64f8 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 008a64f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a64f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a64f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a74a4 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 008a74a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1529c4e64e667a7e71ef388a075b6135"></a>

### [`008a650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a650c.md) → [`008a74b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a74b8.md) FUN_008a74b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.60% / 新版 76.60%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a656c",
      "incomplete_value": true,
      "site": "008a6570",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008a6568",
      "incomplete_value": true,
      "site": "008a6570",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a6524",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a6528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a652c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ],
  "added": [
    [
      "008a74d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "008a74d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a74d8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6570 ["INT_ADD", "register:40f0:8", ["const:8a6570:8", "const:4:8"]]
- 008a6570 ["CALL", null, ["callee:00492c0c:8"]]
+ 008a751c ["INT_ADD", "register:40f0:8", ["const:8a751c:8", "const:4:8"]]
+ 008a751c ["CALL", null, ["callee:00492c0c:8"]]
- 008a6520 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 008a6520 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008a6524 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008a6524 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008a6524 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-509b24e6e5210e94fe52fdea537da436"></a>

### [`008a6638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6638.md) → [`008a75e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a75e4.md) FUN_008a75e4

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
      "unmatched:008a6650",
      "DATA",
      [
        "storage",
        "00c82e70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a6654",
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
      "008a75fc",
      "DATA",
      [
        "storage",
        "00c83e40",
        null,
        "undefined *"
      ]
    ],
    [
      "008a7600",
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
- 008a6644 ["INT_ADD", "register:40f0:8", ["const:8a6644:8", "const:4:8"]]
- 008a6644 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a75f0 ["INT_ADD", "register:40f0:8", ["const:8a75f0:8", "const:4:8"]]
+ 008a75f0 ["CALL", null, ["callee:00c58f30:8"]]
- 008a6648 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a75f4 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a664c ["COPY", "tmp:0:8", ["const:e70:8"]]
- 008a664c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a664c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a664c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d57e7c22072957a14a9310bde08ea25b"></a>

### [`008a665c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a665c.md) → [`008a7608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7608.md) FUN_008a7608

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
      "definition_site": "008a760c",
      "incomplete_value": false,
      "site": "008a7610",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6660",
      "incomplete_value": false,
      "site": "008a6664",
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
      "008a7610",
      "DATA",
      [
        "storage",
        "00c82e70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7610",
      "DATA",
      [
        "storage",
        "00c83e40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a665c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a7608 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6660 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 008a6660 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6660 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6660 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a760c ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 008a760c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a760c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a760c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5d69426aeade7e4ae7e1091cc5d9279f"></a>

### [`008a6674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6674.md) → [`008a7620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7620.md) FUN_008a7620

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`0053f378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f378.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7714",
      "incomplete_value": true,
      "site": "008a7718",
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
    "old": {
      "definition_site": "008a6768",
      "incomplete_value": true,
      "site": "008a676c",
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
    "ordinal": 10,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a6698",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a66b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a66c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ],
  "added": [
    [
      "008a7644",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a7664",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008a7674",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00540abc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a676c ["INT_ADD", "register:40f0:8", ["const:8a676c:8", "const:4:8"]]
- 008a676c ["CALL", null, ["callee:0053f378:8"]]
+ 008a7718 ["INT_ADD", "register:40f0:8", ["const:8a7718:8", "const:4:8"]]
+ 008a7718 ["CALL", null, ["callee:0053f378:8"]]
- 008a6698 ["INT_ADD", "register:40f0:8", ["const:8a6698:8", "const:4:8"]]
- 008a6698 ["CALL", null, ["ram:48cd38:8"]]
- 008a669c ["INT_ADD", "register:40f0:8", ["const:8a669c:8", "const:4:8"]]
- 008a669c ["CALL", null, ["callee:0048eb40:8"]]
+ 008a7648 ["INT_ADD", "register:40f0:8", ["const:8a7648:8", "const:4:8"]]
+ 008a7648 ["CALL", null, ["callee:0048eb40:8"]]
~~~


<a id="compare-4a02d759a0a8fc9f3c0af7d7f126e4df"></a>

### [`008a6878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6878.md) → [`008a7824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7824.md) FUN_008a7824

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
      "definition_site": "008a7838",
      "incomplete_value": false,
      "site": "008a783c",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a688c",
      "incomplete_value": false,
      "site": "008a6890",
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
            "const:ef0:8"
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
      "008a783c",
      "DATA",
      [
        "storage",
        "00c82ef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a783c",
      "DATA",
      [
        "storage",
        "00c83ec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6884 ["INT_ADD", "register:40f0:8", ["const:8a6884:8", "const:4:8"]]
- 008a6884 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a7830 ["INT_ADD", "register:40f0:8", ["const:8a7830:8", "const:4:8"]]
+ 008a7830 ["CALL", null, ["callee:00c58f30:8"]]
- 008a6888 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a7834 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a688c ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 008a688c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a688c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a688c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7838 ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 008a7838 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7838 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7838 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-32a96fb6df0895545647a6e090b35f17"></a>

### [`008a689c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a689c.md) → [`008a7848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7848.md) FUN_008a7848

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
      "unmatched:008a68a4",
      "DATA",
      [
        "storage",
        "00c82ef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7850",
      "DATA",
      [
        "storage",
        "00c83ec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a689c ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a68a0 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 008a68a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a68a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a68a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a68a4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a68a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a9e2830b632a42c6cd3766fe666a9414"></a>

### [`008a68b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a68b4.md) → [`008a7860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7860.md) FUN_008a7860

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.21% / 新版 70.21%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a68d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a68d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "unmatched:008a68d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "008a787c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a7880",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "008a7884",
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
- 008a68d0 ["INT_ADD", "register:40f0:8", ["const:8a68d0:8", "const:4:8"]]
- 008a68d0 ["CALL", null, ["ram:48cd38:8"]]
- 008a68d4 ["INT_ADD", "register:40f0:8", ["const:8a68d4:8", "const:4:8"]]
- 008a68d4 ["CALL", null, ["callee:0048eb40:8"]]
- 008a68d8 ["INT_ADD", "register:40f0:8", ["const:8a68d8:8", "const:4:8"]]
- 008a68d8 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-591c85f23af30f5e61c6fdc89f3988d2"></a>

### [`008a69e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a69e0.md) → [`008a798c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a798c.md) FUN_008a798c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a69e8",
      "incomplete_value": false,
      "site": "008a69ec",
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
      "unmatched:008a69f8",
      "DATA",
      [
        "storage",
        "00c82f70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a69fc",
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
      "008a79a4",
      "DATA",
      [
        "storage",
        "00c83f40",
        null,
        "undefined *"
      ]
    ],
    [
      "008a79a8",
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
- 008a69ec ["INT_ADD", "register:40f0:8", ["const:8a69ec:8", "const:4:8"]]
- 008a69ec ["CALL", null, ["callee:00c58f30:8"]]
+ 008a7998 ["INT_ADD", "register:40f0:8", ["const:8a7998:8", "const:4:8"]]
+ 008a7998 ["CALL", null, ["callee:00c58f30:8"]]
- 008a69f0 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a799c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a69f4 ["COPY", "tmp:0:8", ["const:f70:8"]]
- 008a69f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a69f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a69f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d84a0a46c9e8d272ab3c75122aea23e"></a>

### [`008a6a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a04.md) → [`008a79b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a79b0.md) FUN_008a79b0

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
      "unmatched:008a6a0c",
      "DATA",
      [
        "storage",
        "00c82f70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a79b8",
      "DATA",
      [
        "storage",
        "00c83f40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6a04 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 008a6a08 ["COPY", "tmp:0:8", ["const:f70:8"]]
- 008a6a08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6a08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6a08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a6a0c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a6a0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-d81baf6417d4250da3736cf690636427"></a>

### [`008a6a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a1c.md) → [`008a79c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a79c8.md) FUN_008a79c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.53% / 新版 76.53%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7a80",
      "incomplete_value": true,
      "site": "008a7a84",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "008a7a88",
      "incomplete_value": true,
      "site": "008a7a90",
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
      "unmatched:008a6a8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008a6a90",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "unmatched:008a6a94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "008a7a38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a7a3c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "008a7a40",
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
- 008a6ad8 ["INT_ADD", "register:40f0:8", ["const:8a6ad8:8", "const:4:8"]]
- 008a6ad8 ["CALL", null, ["callee:00493064:8"]]
+ 008a7a84 ["INT_ADD", "register:40f0:8", ["const:8a7a84:8", "const:4:8"]]
+ 008a7a84 ["CALL", null, ["callee:00493064:8"]]
- 008a6ae4 ["INT_ADD", "register:40f0:8", ["const:8a6ae4:8", "const:4:8"]]
- 008a6ae4 ["CALL", null, ["callee:00492c0c:8"]]
+ 008a7a90 ["INT_ADD", "register:40f0:8", ["const:8a7a90:8", "const:4:8"]]
+ 008a7a90 ["CALL", null, ["callee:00492c0c:8"]]
- 008a6a70 ["INT_ADD", "register:40f0:8", ["const:8a6a70:8", "const:4:8"]]
- 008a6a70 ["CALL", null, ["callee:0043be80:8"]]
+ 008a7a1c ["INT_ADD", "register:40f0:8", ["const:8a7a1c:8", "const:4:8"]]
+ 008a7a1c ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-5ea70f75f6b9303b35e18ab6ac326c4d"></a>

### [`008a6c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c48.md) → [`008a7bf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7bf4.md) FUN_008a7bf4

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
      "definition_site": "008a7c08",
      "incomplete_value": false,
      "site": "008a7c0c",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6c5c",
      "incomplete_value": false,
      "site": "008a6c60",
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
            "const:ff0:8"
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
      "008a7c0c",
      "DATA",
      [
        "storage",
        "00c82ff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7c0c",
      "DATA",
      [
        "storage",
        "00c83fc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6c54 ["INT_ADD", "register:40f0:8", ["const:8a6c54:8", "const:4:8"]]
- 008a6c54 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a7c00 ["INT_ADD", "register:40f0:8", ["const:8a7c00:8", "const:4:8"]]
+ 008a7c00 ["CALL", null, ["callee:00c58f30:8"]]
- 008a6c58 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a7c04 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6c5c ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 008a6c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7c08 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 008a7c08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7c08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7c08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-81f4fae4ffc9269cd7a92515717b5a9a"></a>

### [`008a6c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c6c.md) → [`008a7c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7c18.md) FUN_008a7c18

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
      "definition_site": "008a7c1c",
      "incomplete_value": false,
      "site": "008a7c20",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6c70",
      "incomplete_value": false,
      "site": "008a6c74",
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
      "008a7c20",
      "DATA",
      [
        "storage",
        "00c82ff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7c20",
      "DATA",
      [
        "storage",
        "00c83fc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6c6c ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a7c18 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6c70 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 008a6c70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7c1c ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 008a7c1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7c1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7c1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16ce1af933c192c4c235d13606eef79d"></a>

### [`008a6c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c84.md) → [`008a7c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7c30.md) FUN_008a7c30

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.55% / 新版 79.55%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a6d34",
      "incomplete_value": true,
      "site": "008a6d38",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a6dc4",
      "incomplete_value": true,
      "site": "008a6dc8",
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
      "unmatched:008a6c9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a6ca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a7c80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008a6d78"
      ]
    ]
  ],
  "added": [
    [
      "008a7c48",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "008a7c50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a7c80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a7d24"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6d38 ["INT_ADD", "register:40f0:8", ["const:8a6d38:8", "const:4:8"]]
- 008a6d38 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a7ce4 ["INT_ADD", "register:40f0:8", ["const:8a7ce4:8", "const:4:8"]]
+ 008a7ce4 ["CALL", null, ["callee:00c58f50:8"]]
- 008a6dc8 ["INT_ADD", "register:40f0:8", ["const:8a6dc8:8", "const:4:8"]]
- 008a6dc8 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a7d74 ["INT_ADD", "register:40f0:8", ["const:8a7d74:8", "const:4:8"]]
+ 008a7d74 ["CALL", null, ["callee:00c58f50:8"]]
- 008a6c9c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008a6c9c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008a6c9c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-663754583d094949bac3c6de07b1f172"></a>

### [`008a6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6e68.md) → [`008a7e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7e14.md) FUN_008a7e14

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
      "definition_site": "008a7e28",
      "incomplete_value": false,
      "site": "008a7e2c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6e7c",
      "incomplete_value": false,
      "site": "008a6e80",
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
            "const:70:8"
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
      "008a7e2c",
      "DATA",
      [
        "storage",
        "00c83070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7e2c",
      "DATA",
      [
        "storage",
        "00c84040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6e74 ["INT_ADD", "register:40f0:8", ["const:8a6e74:8", "const:4:8"]]
- 008a6e74 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a7e20 ["INT_ADD", "register:40f0:8", ["const:8a7e20:8", "const:4:8"]]
+ 008a7e20 ["CALL", null, ["callee:00c58f30:8"]]
- 008a6e78 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a7e24 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a6e7c ["COPY", "tmp:0:8", ["const:70:8"]]
- 008a6e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7e28 ["COPY", "tmp:0:8", ["const:40:8"]]
+ 008a7e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-241a6c7365c6beabd0e4683638ce77d6"></a>

### [`008a6e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6e8c.md) → [`008a7e38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7e38.md) FUN_008a7e38

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
      "definition_site": "008a7e3c",
      "incomplete_value": false,
      "site": "008a7e40",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6e90",
      "incomplete_value": false,
      "site": "008a6e94",
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
      "008a7e40",
      "DATA",
      [
        "storage",
        "00c83070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7e40",
      "DATA",
      [
        "storage",
        "00c84040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6e8c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a7e38 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a6e90 ["COPY", "tmp:0:8", ["const:70:8"]]
- 008a6e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7e3c ["COPY", "tmp:0:8", ["const:40:8"]]
+ 008a7e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e287c6257d6531a2a354f5736799218"></a>

### [`008a6ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6ea4.md) → [`008a7e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7e50.md) FUN_008a7e50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0044fbf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fbf8.md) [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00452fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452fb4.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.52% / 新版 83.52%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7f54",
      "incomplete_value": true,
      "site": "008a7f58",
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7f50",
      "incomplete_value": true,
      "site": "008a7f58",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7f50",
      "incomplete_value": true,
      "site": "008a7f58",
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
                "const:18:8"
              ]
            ]
          ]
        ]
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
      "008a7edc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a7f1c"
      ]
    ],
    [
      "008a7f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a8038"
      ]
    ],
    [
      "008a7f10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a805c"
      ]
    ]
  ],
  "added": [
    [
      "008a7edc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a7f04"
      ]
    ],
    [
      "008a7f10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a8038"
      ]
    ],
    [
      "008a7f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a805c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6fac ["INT_ADD", "register:40f0:8", ["const:8a6fac:8", "const:4:8"]]
- 008a6fac ["CALL", null, ["callee:0043be80:8"]]
+ 008a7f58 ["INT_ADD", "register:40f0:8", ["const:8a7f58:8", "const:4:8"]]
+ 008a7f58 ["CALL", null, ["callee:0043be80:8"]]
- 008a7070 ["INT_ADD", "register:40f0:8", ["const:8a7070:8", "const:4:8"]]
- 008a7070 ["CALL", null, ["callee:00452fb4:8"]]
+ 008a801c ["INT_ADD", "register:40f0:8", ["const:8a801c:8", "const:4:8"]]
+ 008a801c ["CALL", null, ["callee:00452fb4:8"]]
- 008a7168 ["INT_ADD", "register:40f0:8", ["const:8a7168:8", "const:4:8"]]
- 008a7168 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a8114 ["INT_ADD", "register:40f0:8", ["const:8a8114:8", "const:4:8"]]
+ 008a8114 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-30e890ea683e644977ed9ca1b47bb0e0"></a>

### [`008a72c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a72c4.md) → [`008a8270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8270.md) FUN_008a8270

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
      "unmatched:008a72c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a72d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008a72dc",
      "DATA",
      [
        "storage",
        "00c830e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a8270",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a827c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008a8288",
      "DATA",
      [
        "storage",
        "00c840b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a72c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a72c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a72c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008a72c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008a72c8 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008a72cc ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-2da1f6a1e80031c486f3dfda0aa35076"></a>

### [`008a72e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a72e8.md) → [`008a8294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8294.md) FUN_008a8294

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
      "definition_site": "008a8298",
      "incomplete_value": false,
      "site": "008a829c",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a72ec",
      "incomplete_value": false,
      "site": "008a72f0",
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
            "const:e0:8"
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
      "008a829c",
      "DATA",
      [
        "storage",
        "00c830e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a829c",
      "DATA",
      [
        "storage",
        "00c840b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a72e8 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8294 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a72ec ["COPY", "tmp:0:8", ["const:e0:8"]]
- 008a72ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a72ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a72ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a8298 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 008a8298 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8298 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8298 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5cb56aa373d0163138f43c057fd8c669"></a>

### [`008a7300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7300.md) → [`008a82ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a82ac.md) FUN_008a82ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`005b2cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2cd0.md) [`005b2f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2f28.md) [`005b498c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b498c.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0044fbf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fbf8.md) [`005b3080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3080.md) [`005b32d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b32d8.md) [`005b4d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4d3c.md) [`007692c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/007692c4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.39% / 新版 74.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a8390",
      "incomplete_value": false,
      "site": "008a8394",
      "value": [
        "leaf",
        "const:5:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a7418",
      "incomplete_value": true,
      "site": "008a741c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:008a7304",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7308",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a730c",
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
      "008a82b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008a82b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a82b8",
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
- 008a73e8 ["INT_ADD", "register:40f0:8", ["const:8a73e8:8", "const:4:8"]]
- 008a73e8 ["CALL", null, ["callee:005b32d8:8"]]
+ 008a8394 ["INT_ADD", "register:40f0:8", ["const:8a8394:8", "const:4:8"]]
+ 008a8394 ["CALL", null, ["callee:005b32d8:8"]]
- 008a741c ["INT_ADD", "register:40f0:8", ["const:8a741c:8", "const:4:8"]]
- 008a741c ["CALL", null, ["callee:005b4d3c:8"]]
+ 008a83c8 ["INT_ADD", "register:40f0:8", ["const:8a83c8:8", "const:4:8"]]
+ 008a83c8 ["CALL", null, ["callee:005b4d3c:8"]]
- 008a7300 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-1b29b44abd2cb4dc7aefd510ae62dc9c"></a>

### [`008a74c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a74c4.md) → [`008a8470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8470.md) FUN_008a8470

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
      "unmatched:008a74dc",
      "DATA",
      [
        "storage",
        "00c83150",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a74e0",
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
      "008a8488",
      "DATA",
      [
        "storage",
        "00c84120",
        null,
        "undefined *"
      ]
    ],
    [
      "008a848c",
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
- 008a74d0 ["INT_ADD", "register:40f0:8", ["const:8a74d0:8", "const:4:8"]]
- 008a74d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a847c ["INT_ADD", "register:40f0:8", ["const:8a847c:8", "const:4:8"]]
+ 008a847c ["CALL", null, ["callee:00c58f30:8"]]
- 008a74d4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8480 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a74d8 ["COPY", "tmp:0:8", ["const:150:8"]]
- 008a74d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a74d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a74d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18c725d9a1069e522b5004ec29104083"></a>

### [`008a74e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a74e8.md) → [`008a8494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8494.md) FUN_008a8494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a74f0",
      "DATA",
      [
        "storage",
        "00c83150",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a849c",
      "DATA",
      [
        "storage",
        "00c84120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a74e8 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8494 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a74ec ["COPY", "tmp:0:8", ["const:150:8"]]
- 008a74ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a74ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a74ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a74f0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a74f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-7a5d60ba3100105baa9e2a335b8d4f08"></a>

### [`008a7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7564.md) → [`008a8510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8510.md) FUN_008a8510

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a756c",
      "incomplete_value": false,
      "site": "008a7570",
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
      "unmatched:008a757c",
      "DATA",
      [
        "storage",
        "00c831d0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a7580",
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
      "008a8528",
      "DATA",
      [
        "storage",
        "00c841a0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a852c",
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
- 008a7570 ["INT_ADD", "register:40f0:8", ["const:8a7570:8", "const:4:8"]]
- 008a7570 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a851c ["INT_ADD", "register:40f0:8", ["const:8a851c:8", "const:4:8"]]
+ 008a851c ["CALL", null, ["callee:00c58f30:8"]]
- 008a7574 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8520 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a7578 ["COPY", "tmp:0:8", ["const:1d0:8"]]
- 008a7578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cb161cafeca3a6793904e1f1bbb7134b"></a>

### [`008a7588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7588.md) → [`008a8534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8534.md) FUN_008a8534

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
      "unmatched:008a7590",
      "DATA",
      [
        "storage",
        "00c831d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a853c",
      "DATA",
      [
        "storage",
        "00c841a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7588 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a758c ["COPY", "tmp:0:8", ["const:1d0:8"]]
- 008a758c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a758c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a758c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008a7590 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008a7590 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-9e9a63bde0b4f2af65fba30699949515"></a>

### [`008a75a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a75a0.md) → [`008a854c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a854c.md) FUN_008a854c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0044fbf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fbf8.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 50.00% / 新版 50.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a75b8",
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
      "008a8564",
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
- 008a75a8 ["INT_ADD", "register:40f0:8", ["const:8a75a8:8", "const:4:8"]]
- 008a75a8 ["CALL", null, ["callee:0044fbf8:8"]]
+ 008a8554 ["INT_ADD", "register:40f0:8", ["const:8a8554:8", "const:4:8"]]
+ 008a8554 ["CALL", null, ["callee:0044fbf8:8"]]
- 008a75b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:38:8"]]
- 008a75b0 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 008a75b4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 008a75b4 ["INT_ZEXT", "register:4008:8", ["tmp:0:4"]]
~~~


<a id="compare-1238f4fc224bd5b822c33275b65459a5"></a>

### [`008a75ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a75ec.md) → [`008a8598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8598.md) FUN_008a8598

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
      "unmatched:008a75ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a75f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008a7604",
      "DATA",
      [
        "storage",
        "00c83270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a8598",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a85a4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008a85b0",
      "DATA",
      [
        "storage",
        "00c84240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a75ec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a75ec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a75ec ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008a75ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008a75f0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008a75f4 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-4821d0ed0e035ab89d252e49c0232faa"></a>

### [`008a7610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7610.md) → [`008a85bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a85bc.md) FUN_008a85bc

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
      "definition_site": "008a85c0",
      "incomplete_value": false,
      "site": "008a85c4",
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
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7614",
      "incomplete_value": false,
      "site": "008a7618",
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
      "008a85c4",
      "DATA",
      [
        "storage",
        "00c83270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a85c4",
      "DATA",
      [
        "storage",
        "00c84240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7610 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a85bc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a7614 ["COPY", "tmp:0:8", ["const:270:8"]]
- 008a7614 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7614 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7614 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a85c0 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 008a85c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a85c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a85c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-837bf0497eef0603295c800e7cc6cdb8"></a>

### [`008a7628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7628.md) → [`008a85d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a85d4.md) FUN_008a85d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 59.32% / 新版 59.32%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a7698",
      "incomplete_value": true,
      "site": "008a769c",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008a7694",
      "incomplete_value": true,
      "site": "008a769c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008a7658"
      ],
      [
        "FALL_THROUGH",
        "008a8604"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008a8604",
      "incomplete_value": true,
      "site": "008a861c",
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
      "definition_site": "008a7658",
      "incomplete_value": true,
      "site": "008a7670",
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
      "unmatched:008a762c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7630",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7640",
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
      "008a85d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a85dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a85ec",
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
- 008a769c ["INT_ADD", "register:40f0:8", ["const:8a769c:8", "const:4:8"]]
- 008a769c ["CALL", null, ["callee:00866114:8"]]
+ 008a8648 ["INT_ADD", "register:40f0:8", ["const:8a8648:8", "const:4:8"]]
+ 008a8648 ["CALL", null, ["callee:00866114:8"]]
- 008a7628 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 008a762c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a762c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a762c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008a762c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-56473ad7503d8c00cadfd6a810466f85"></a>

### [`008a7774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7774.md) → [`008a8720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8720.md) FUN_008a8720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a777c",
      "incomplete_value": false,
      "site": "008a7780",
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
      "unmatched:008a778c",
      "DATA",
      [
        "storage",
        "00c832f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a8738",
      "DATA",
      [
        "storage",
        "00c842c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7780 ["INT_ADD", "register:40f0:8", ["const:8a7780:8", "const:4:8"]]
- 008a7780 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a872c ["INT_ADD", "register:40f0:8", ["const:8a872c:8", "const:4:8"]]
+ 008a872c ["CALL", null, ["callee:00c58f30:8"]]
- 008a7784 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8730 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a7788 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 008a7788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-93a92f1d2f8d071e91edb7d10c70051a"></a>

### [`008a7798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7798.md) → [`008a8744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8744.md) FUN_008a8744

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
      "definition_site": "008a8748",
      "incomplete_value": false,
      "site": "008a874c",
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
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a779c",
      "incomplete_value": false,
      "site": "008a77a0",
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
      "008a874c",
      "DATA",
      [
        "storage",
        "00c832f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a874c",
      "DATA",
      [
        "storage",
        "00c842c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7798 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8744 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a779c ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 008a779c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a779c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a779c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a8748 ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 008a8748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0b46de97f30468bdb476d3b9d09ba5e"></a>

### [`008a77b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a77b0.md) → [`008a875c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a875c.md) FUN_008a875c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.09% / 新版 76.09%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008a77b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a77b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a77f4",
      "READ",
      [
        "storage",
        "002c2cf0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008a8760",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a8764",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008a87a0",
      "READ",
      [
        "storage",
        "002c2d40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008a77b0 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 008a77b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008a77b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008a77b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008a77b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008a77b8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008a77b8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008a77b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 008a77b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-165835fb5687e3aef72dc10d2cec3916"></a>

### [`008a78c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78c0.md) → [`008a886c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a886c.md) FUN_008a886c

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
      "unmatched:008a78d8",
      "DATA",
      [
        "storage",
        "00c83380",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a78dc",
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
      "008a8884",
      "DATA",
      [
        "storage",
        "00c84350",
        null,
        "undefined *"
      ]
    ],
    [
      "008a8888",
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
- 008a78cc ["INT_ADD", "register:40f0:8", ["const:8a78cc:8", "const:4:8"]]
- 008a78cc ["CALL", null, ["callee:00c58f30:8"]]
+ 008a8878 ["INT_ADD", "register:40f0:8", ["const:8a8878:8", "const:4:8"]]
+ 008a8878 ["CALL", null, ["callee:00c58f30:8"]]
- 008a78d0 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a887c ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a78d4 ["COPY", "tmp:0:8", ["const:380:8"]]
- 008a78d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a78d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a78d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ede733d5dce74fb659b91f27048c2157"></a>

### [`008a78e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78e4.md) → [`008a8890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8890.md) FUN_008a8890

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
      "definition_site": "008a8894",
      "incomplete_value": false,
      "site": "008a8898",
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
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a78e8",
      "incomplete_value": false,
      "site": "008a78ec",
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
            "const:380:8"
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
      "008a8898",
      "DATA",
      [
        "storage",
        "00c83380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a8898",
      "DATA",
      [
        "storage",
        "00c84350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a78e4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8890 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a78e8 ["COPY", "tmp:0:8", ["const:380:8"]]
- 008a78e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a78e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a78e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a8894 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 008a8894 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8894 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8894 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a96a1fb43464d0fc47f86210ce573566"></a>

### [`008a78fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78fc.md) → [`008a88a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a88a8.md) FUN_008a88a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044ef94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ef94.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0044f2b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f2b4.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.72% / 新版 58.72%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a7a38",
      "incomplete_value": true,
      "site": "008a7a3c",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a7a80",
      "incomplete_value": true,
      "site": "008a7a84",
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
      "unmatched:008a7900",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7904",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7908",
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
      "008a88ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008a88b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008a88b4",
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
- 008a7a3c ["INT_ADD", "register:40f0:8", ["const:8a7a3c:8", "const:4:8"]]
- 008a7a3c ["CALL", null, ["callee:00c58f50:8"]]
+ 008a89e8 ["INT_ADD", "register:40f0:8", ["const:8a89e8:8", "const:4:8"]]
+ 008a89e8 ["CALL", null, ["callee:00c58f50:8"]]
- 008a7a84 ["INT_ADD", "register:40f0:8", ["const:8a7a84:8", "const:4:8"]]
- 008a7a84 ["CALL", null, ["callee:00c58f50:8"]]
+ 008a8a30 ["INT_ADD", "register:40f0:8", ["const:8a8a30:8", "const:4:8"]]
+ 008a8a30 ["CALL", null, ["callee:00c58f50:8"]]
- 008a78fc ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-cb738b319530ab263fe29e39dc378f31"></a>

### [`008a7b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7b58.md) → [`008a8b04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8b04.md) FUN_008a8b04

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
      "unmatched:008a7b70",
      "DATA",
      [
        "storage",
        "00c83400",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008a7b74",
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
      "008a8b1c",
      "DATA",
      [
        "storage",
        "00c843d0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a8b20",
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
- 008a7b64 ["INT_ADD", "register:40f0:8", ["const:8a7b64:8", "const:4:8"]]
- 008a7b64 ["CALL", null, ["callee:00c58f30:8"]]
+ 008a8b10 ["INT_ADD", "register:40f0:8", ["const:8a8b10:8", "const:4:8"]]
+ 008a8b10 ["CALL", null, ["callee:00c58f30:8"]]
- 008a7b68 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8b14 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a7b6c ["COPY", "tmp:0:8", ["const:400:8"]]
- 008a7b6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-94c886ec8e4478d3e2efd86dfb4e5b6a"></a>

### [`008a7b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7b7c.md) → [`008a8b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8b28.md) FUN_008a8b28

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
      "definition_site": "008a8b2c",
      "incomplete_value": false,
      "site": "008a8b30",
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
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7b80",
      "incomplete_value": false,
      "site": "008a7b84",
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
            "const:400:8"
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
      "008a8b30",
      "DATA",
      [
        "storage",
        "00c83400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a8b30",
      "DATA",
      [
        "storage",
        "00c843d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7b7c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008a8b28 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008a7b80 ["COPY", "tmp:0:8", ["const:400:8"]]
- 008a7b80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a8b2c ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 008a8b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a8b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-885b544459accc31895ae681a12b65f5"></a>

### [`008a7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7b94.md) → [`008a8b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8b40.md) FUN_008a8b40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0044ef94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ef94.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0044f2b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f2b4.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.04% / 新版 89.04%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008a7ca8",
      "incomplete_value": true,
      "site": "008a7cac",
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
      "unmatched:008a7bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a8b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008a7c48"
      ]
    ],
    [
      "unmatched:008a7c14",
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
      "008a8b64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "008a8b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a8bf4"
      ]
    ],
    [
      "008a8bc0",
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
- 008a7cac ["INT_ADD", "register:40f0:8", ["const:8a7cac:8", "const:4:8"]]
- 008a7cac ["CALL", null, ["callee:00c58f50:8"]]
+ 008a8c58 ["INT_ADD", "register:40f0:8", ["const:8a8c58:8", "const:4:8"]]
+ 008a8c58 ["CALL", null, ["callee:00c58f50:8"]]
- 008a7bb8 ["INT_ADD", "register:40f0:8", ["const:8a7bb8:8", "const:4:8"]]
- 008a7bb8 ["CALL", null, ["ram:48cd38:8"]]
- 008a7bbc ["INT_ADD", "register:40f0:8", ["const:8a7bbc:8", "const:4:8"]]
- 008a7bbc ["CALL", null, ["callee:0048eb40:8"]]
+ 008a8b68 ["INT_ADD", "register:40f0:8", ["const:8a8b68:8", "const:4:8"]]
+ 008a8b68 ["CALL", null, ["callee:0048eb40:8"]]
~~~


<a id="compare-cecb9d20c633f5ce46193ea610e02299"></a>

### [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) → [`008a8cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8cd0.md) FUN_008a8cd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) [`008a8cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8cd0.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.86% / 新版 75.86%

優先判定に残った影響 `call_argument_candidate` 24件, `store_condition` 5件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a8e28",
      "incomplete_value": false,
      "site": "008a8e30",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7e7c",
      "incomplete_value": false,
      "site": "008a7e84",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a8f88",
      "incomplete_value": false,
      "site": "008a8f90",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7fdc",
      "incomplete_value": false,
      "site": "008a7fe4",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a9030",
      "incomplete_value": false,
      "site": "008a903c",
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
            "const:4e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a8084",
      "incomplete_value": false,
      "site": "008a8090",
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
            "const:38f:8"
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
      "unmatched:008a7d28",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7d2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a7d30",
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
      "008a8cd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008a8cd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008a8cdc",
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
- 008a7e84 ["INT_ADD", "register:40f0:8", ["const:8a7e84:8", "const:4:8"]]
- 008a7e84 ["CALL", null, ["callee:004421f4:8"]]
+ 008a8e30 ["INT_ADD", "register:40f0:8", ["const:8a8e30:8", "const:4:8"]]
+ 008a8e30 ["CALL", null, ["callee:004421f4:8"]]
- 008a7fe4 ["INT_ADD", "register:40f0:8", ["const:8a7fe4:8", "const:4:8"]]
- 008a7fe4 ["CALL", null, ["callee:004421f4:8"]]
+ 008a8f90 ["INT_ADD", "register:40f0:8", ["const:8a8f90:8", "const:4:8"]]
+ 008a8f90 ["CALL", null, ["callee:004421f4:8"]]
- 008a8090 ["INT_ADD", "register:40f0:8", ["const:8a8090:8", "const:4:8"]]
- 008a8090 ["CALL", null, ["callee:0044204c:8"]]
+ 008a903c ["INT_ADD", "register:40f0:8", ["const:8a903c:8", "const:4:8"]]
+ 008a903c ["CALL", null, ["callee:0044204c:8"]]
~~~


<a id="compare-ab07fdd89c6d9849a6354d46575b999b"></a>

### [`008a8530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8530.md) → [`008a94dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a94dc.md) FUN_008a94dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) [`008a8530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8530.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 4件 [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`008a8cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a8cd0.md) [`008a94dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a94dc.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.78% / 新版 79.78%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 3件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a962c",
      "incomplete_value": false,
      "site": "008a9634",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a8680",
      "incomplete_value": false,
      "site": "008a8688",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a9788",
      "incomplete_value": false,
      "site": "008a9790",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a87dc",
      "incomplete_value": false,
      "site": "008a87e4",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a982c",
      "incomplete_value": false,
      "site": "008a9838",
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
            "const:4e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a8880",
      "incomplete_value": false,
      "site": "008a888c",
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
            "const:38f:8"
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
      "unmatched:008a8598",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a96fc"
      ]
    ],
    [
      "unmatched:008a8648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a98c4"
      ]
    ],
    [
      "unmatched:008a8668",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a98c4"
      ]
    ]
  ],
  "added": [
    [
      "008a9544",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a96fc"
      ]
    ],
    [
      "008a95f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a98c4"
      ]
    ],
    [
      "008a9614",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008a98c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a8688 ["INT_ADD", "register:40f0:8", ["const:8a8688:8", "const:4:8"]]
- 008a8688 ["CALL", null, ["callee:004421f4:8"]]
+ 008a9634 ["INT_ADD", "register:40f0:8", ["const:8a9634:8", "const:4:8"]]
+ 008a9634 ["CALL", null, ["callee:004421f4:8"]]
- 008a87e4 ["INT_ADD", "register:40f0:8", ["const:8a87e4:8", "const:4:8"]]
- 008a87e4 ["CALL", null, ["callee:004421f4:8"]]
+ 008a9790 ["INT_ADD", "register:40f0:8", ["const:8a9790:8", "const:4:8"]]
+ 008a9790 ["CALL", null, ["callee:004421f4:8"]]
- 008a888c ["INT_ADD", "register:40f0:8", ["const:8a888c:8", "const:4:8"]]
- 008a888c ["CALL", null, ["callee:0044204c:8"]]
+ 008a9838 ["INT_ADD", "register:40f0:8", ["const:8a9838:8", "const:4:8"]]
+ 008a9838 ["CALL", null, ["callee:0044204c:8"]]
~~~


<a id="compare-e23a5906ef6fb4cb6867bb1945006cfc"></a>

### [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) → [`008a9cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9cc4.md) FUN_008a9cc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0089a46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089a/0089a46c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0089b418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089b/0089b418.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008a9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9e0c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a9d34",
      "incomplete_value": true,
      "site": "008a9d3c",
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
      "definition_site": "008a9d38",
      "incomplete_value": true,
      "site": "008a9d3c",
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
      "definition_site": "008a8d8c",
      "incomplete_value": true,
      "site": "008a8d90",
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
      "definition_site": "008a9d30",
      "incomplete_value": true,
      "site": "008a9d3c",
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


~~~diff
- 008a8d90 ["INT_ADD", "register:40f0:8", ["const:8a8d90:8", "const:4:8"]]
- 008a8d90 ["CALL", null, ["callee:0043be80:8"]]
+ 008a9d3c ["INT_ADD", "register:40f0:8", ["const:8a9d3c:8", "const:4:8"]]
+ 008a9d3c ["CALL", null, ["callee:0043be80:8"]]
- 008a8d70 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008a8d70 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008a8d70 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008a8d70 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008a9d1c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008a9d1c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008a9d1c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008a9d1c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 008a8d7c ["INT_ADD", "register:40f0:8", ["const:8a8d7c:8", "const:4:8"]]
- 008a8d7c ["CALL", null, ["callee:0043be80:8"]]
+ 008a9d28 ["INT_ADD", "register:40f0:8", ["const:8a9d28:8", "const:4:8"]]
+ 008a9d28 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-14e442d81216ff082b56d3a31e5e10f5"></a>

### [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) → [`008a9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9e0c.md) FUN_008a9e0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008a9cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9cc4.md) [`008a9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9e0c.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.92% / 新版 84.92%

優先判定に残った影響 `call_argument_candidate` 35件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a9f88",
      "incomplete_value": false,
      "site": "008a9f90",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a8fdc",
      "incomplete_value": false,
      "site": "008a8fe4",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aa050",
      "incomplete_value": false,
      "site": "008aa058",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a90a4",
      "incomplete_value": false,
      "site": "008a90ac",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aa06c",
      "incomplete_value": false,
      "site": "008aa078",
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
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a90c0",
      "incomplete_value": false,
      "site": "008a90cc",
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
      "unmatched:008a8e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a8e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008a8e78",
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
      "008a9e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008a9e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008a9e24",
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
- 008a8fe4 ["INT_ADD", "register:40f0:8", ["const:8a8fe4:8", "const:4:8"]]
- 008a8fe4 ["CALL", null, ["callee:004421f4:8"]]
+ 008a9f90 ["INT_ADD", "register:40f0:8", ["const:8a9f90:8", "const:4:8"]]
+ 008a9f90 ["CALL", null, ["callee:004421f4:8"]]
- 008a90ac ["INT_ADD", "register:40f0:8", ["const:8a90ac:8", "const:4:8"]]
- 008a90ac ["CALL", null, ["callee:004421f4:8"]]
+ 008aa058 ["INT_ADD", "register:40f0:8", ["const:8aa058:8", "const:4:8"]]
+ 008aa058 ["CALL", null, ["callee:004421f4:8"]]
- 008a90cc ["INT_ADD", "register:40f0:8", ["const:8a90cc:8", "const:4:8"]]
- 008a90cc ["CALL", null, ["callee:00442b54:8"]]
+ 008aa078 ["INT_ADD", "register:40f0:8", ["const:8aa078:8", "const:4:8"]]
+ 008aa078 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-67255c0db85bfc7a05fb5a8dcc0f5376"></a>

### [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) → [`008aa880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008aa/008aa880.md) FUN_008aa880

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008a9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a9/008a9e0c.md) [`008aa880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008aa/008aa880.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.59% / 新版 90.59%

優先判定に残った影響 `call_argument_candidate` 27件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aa9e4",
      "incomplete_value": false,
      "site": "008aa9ec",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a9a38",
      "incomplete_value": false,
      "site": "008a9a40",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aaa50",
      "incomplete_value": true,
      "site": "008aaa60",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40b8:8"
              ],
              [
                "live",
                "register:40a8:8"
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
    "old": {
      "definition_site": "008a9aa4",
      "incomplete_value": true,
      "site": "008a9ab4",
      "value": [
        "INT_SUB",
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aab44",
      "incomplete_value": false,
      "site": "008aab4c",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a9b98",
      "incomplete_value": false,
      "site": "008a9ba0",
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
      "unmatched:008a99f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008aace4"
      ]
    ],
    [
      "008aa9e4",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "unmatched:008a9a5c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008aa99c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008aace4"
      ]
    ],
    [
      "008aa9e4",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "008aaa08",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a9a40 ["INT_ADD", "register:40f0:8", ["const:8a9a40:8", "const:4:8"]]
- 008a9a40 ["CALL", null, ["callee:004421f4:8"]]
+ 008aa9ec ["INT_ADD", "register:40f0:8", ["const:8aa9ec:8", "const:4:8"]]
+ 008aa9ec ["CALL", null, ["callee:004421f4:8"]]
- 008a9ab4 ["INT_ADD", "register:40f0:8", ["const:8a9ab4:8", "const:4:8"]]
- 008a9ab4 ["CALL", null, ["callee:00442120:8"]]
+ 008aaa60 ["INT_ADD", "register:40f0:8", ["const:8aaa60:8", "const:4:8"]]
+ 008aaa60 ["CALL", null, ["callee:00442120:8"]]
- 008a9ba0 ["INT_ADD", "register:40f0:8", ["const:8a9ba0:8", "const:4:8"]]
- 008a9ba0 ["CALL", null, ["callee:004421f4:8"]]
+ 008aab4c ["INT_ADD", "register:40f0:8", ["const:8aab4c:8", "const:4:8"]]
+ 008aab4c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-65f83409ec776d8af9820695f9616fb4"></a>

### [`008aa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aa250.md) → [`008ab1fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008ab1fc.md) FUN_008ab1fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) [`008aa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aa250.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008aa880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008aa/008aa880.md) [`008ab1fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008ab1fc.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.39% / 新版 81.39%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008aa338",
      "incomplete_value": true,
      "site": "008aa340",
      "value": [
        "live",
        "register:40d0:8"
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
      "definition_site": "008aa334",
      "incomplete_value": true,
      "site": "008aa340",
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
            "register:40a8:8"
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
      "definition_site": "008aa33c",
      "incomplete_value": true,
      "site": "008aa340",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:008aa274",
      "WRITE",
      [
        "storage",
        "Stack[-0x168]",
        null,
        null
      ]
    ],
    [
      "unmatched:008aa288",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:008aa2a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ab424"
      ]
    ]
  ],
  "added": [
    [
      "008ab220",
      "WRITE",
      [
        "storage",
        "Stack[-0x168]",
        null,
        null
      ]
    ],
    [
      "008ab234",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "008ab254",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ab424"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aa340 ["INT_ADD", "register:40f0:8", ["const:8aa340:8", "const:4:8"]]
- 008aa340 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008ab2ec ["INT_ADD", "register:40f0:8", ["const:8ab2ec:8", "const:4:8"]]
+ 008ab2ec ["CALL", null, ["callee:00c58fe0:8"]]
- 008aa3b0 ["INT_ADD", "register:40f0:8", ["const:8aa3b0:8", "const:4:8"]]
- 008aa3b0 ["CALL", null, ["callee:004421f4:8"]]
+ 008ab35c ["INT_ADD", "register:40f0:8", ["const:8ab35c:8", "const:4:8"]]
+ 008ab35c ["CALL", null, ["callee:004421f4:8"]]
- 008aa50c ["INT_ADD", "register:40f0:8", ["const:8aa50c:8", "const:4:8"]]
- 008aa50c ["CALL", null, ["callee:004421f4:8"]]
+ 008ab4b8 ["INT_ADD", "register:40f0:8", ["const:8ab4b8:8", "const:4:8"]]
+ 008ab4b8 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-bdf6373d9bb9705395d7c8ad61accce4"></a>

### [`008aaba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aaba8.md) → [`008abb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abb54.md) FUN_008abb54

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
      "definition_site": "008abb68",
      "incomplete_value": false,
      "site": "008abb6c",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aabbc",
      "incomplete_value": false,
      "site": "008aabc0",
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
            "const:480:8"
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
      "008abb6c",
      "DATA",
      [
        "storage",
        "00c83480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abb6c",
      "DATA",
      [
        "storage",
        "00c84450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aabb4 ["INT_ADD", "register:40f0:8", ["const:8aabb4:8", "const:4:8"]]
- 008aabb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008abb60 ["INT_ADD", "register:40f0:8", ["const:8abb60:8", "const:4:8"]]
+ 008abb60 ["CALL", null, ["callee:00c58f30:8"]]
- 008aabb8 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008abb64 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008aabbc ["COPY", "tmp:0:8", ["const:480:8"]]
- 008aabbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008aabbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008aabbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008abb68 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 008abb68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008abb68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008abb68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3127d9c1ff6a6d26f75de998465d14be"></a>

### [`008aabcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aabcc.md) → [`008abb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abb78.md) FUN_008abb78

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
      "definition_site": "008abb7c",
      "incomplete_value": false,
      "site": "008abb80",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aabd0",
      "incomplete_value": false,
      "site": "008aabd4",
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
            "const:480:8"
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
      "008abb80",
      "DATA",
      [
        "storage",
        "00c83480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abb80",
      "DATA",
      [
        "storage",
        "00c84450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aabcc ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008abb78 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008aabd0 ["COPY", "tmp:0:8", ["const:480:8"]]
- 008aabd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008aabd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008aabd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008abb7c ["COPY", "tmp:0:8", ["const:450:8"]]
+ 008abb7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008abb7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008abb7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3863d75ee66ec254ea6350406a0c9930"></a>

### [`008aac30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac30.md) → [`008abbdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abbdc.md) FUN_008abbdc

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
      "unmatched:008aac54",
      "DATA",
      [
        "storage",
        "00c83500",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008aac58",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008aac5c",
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
      "008abc00",
      "DATA",
      [
        "storage",
        "00c844d0",
        null,
        "undefined *"
      ]
    ],
    [
      "008abc04",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008abc08",
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
- 008aac44 ["INT_ADD", "register:40f0:8", ["const:8aac44:8", "const:4:8"]]
- 008aac44 ["CALL", null, ["callee:00c58f30:8"]]
+ 008abbf0 ["INT_ADD", "register:40f0:8", ["const:8abbf0:8", "const:4:8"]]
+ 008abbf0 ["CALL", null, ["callee:00c58f30:8"]]
- 008aac4c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008abbf8 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008aac50 ["COPY", "tmp:0:8", ["const:500:8"]]
- 008aac50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008aac50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008aac50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d96558d7e5243f84c07edf77d909995b"></a>

### [`008aac64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac64.md) → [`008abc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc10.md) FUN_008abc10

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
      "unmatched:008aac70",
      "DATA",
      [
        "storage",
        "00c83500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abc1c",
      "DATA",
      [
        "storage",
        "00c844d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aac64 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008aac64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008aac68 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008aac6c ["COPY", "tmp:0:8", ["const:500:8"]]
- 008aac6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008aac6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008aac6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f18ea85575885250352457fdd1756dcc"></a>

### [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) → [`008abc2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc2c.md) FUN_008abc2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.30% / 新版 87.30%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008aad04",
      "incomplete_value": true,
      "site": "008aad08",
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
                "const:70:8"
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
      "definition_site": "008aad30",
      "incomplete_value": true,
      "site": "008aad50",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008abd4c",
      "incomplete_value": false,
      "site": "008abd50",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aada0",
      "incomplete_value": true,
      "site": "008aada4",
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
      "unmatched:008aac94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008aac98",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008aaca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x128]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008abc40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008abc44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008abc54",
      "WRITE",
      [
        "storage",
        "Stack[-0x128]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008aad08 ["INT_ADD", "register:40f0:8", ["const:8aad08:8", "const:4:8"]]
- 008aad08 ["CALL", null, ["callee:00c58f50:8"]]
+ 008abcb4 ["INT_ADD", "register:40f0:8", ["const:8abcb4:8", "const:4:8"]]
+ 008abcb4 ["CALL", null, ["callee:00c58f50:8"]]
- 008aad50 ["INT_ADD", "register:40f0:8", ["const:8aad50:8", "const:4:8"]]
- 008aad50 ["CALL", null, ["callee:005517c4:8"]]
+ 008abcfc ["INT_ADD", "register:40f0:8", ["const:8abcfc:8", "const:4:8"]]
+ 008abcfc ["CALL", null, ["callee:005517c4:8"]]
- 008aada4 ["INT_ADD", "register:40f0:8", ["const:8aada4:8", "const:4:8"]]
- 008aada4 ["CALL", null, ["callee:0046cdb4:8"]]
+ 008abd50 ["INT_ADD", "register:40f0:8", ["const:8abd50:8", "const:4:8"]]
+ 008abd50 ["CALL", null, ["callee:0046cdb4:8"]]
~~~


<a id="compare-136dd7f089e5c70252efa88ddc9eb6c7"></a>

### [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) → [`008ac2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac2bc.md) FUN_008ac2bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`00a3ba74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3ba74.md) [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008ab9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab9c0.md) [`008abbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`008abc2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc2c.md) [`00a3ca68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3c/00a3ca68.md) [`00a3de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3d/00a3de60.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008ac96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac96c.md) [`008acb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008acb74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.17% / 新版 72.17%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 28件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ac368",
      "incomplete_value": true,
      "site": "008ac36c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008ac360",
      "incomplete_value": true,
      "site": "008ac36c",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ac430",
      "incomplete_value": true,
      "site": "008ac438",
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
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ab484",
      "incomplete_value": true,
      "site": "008ab48c",
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
            "live",
            "register:40b8:8"
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
      "unmatched:008ab314",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab318",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ab31c",
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
      "008ac2c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ac2c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ac2c8",
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
- 008ab3c0 ["INT_ADD", "register:40f0:8", ["const:8ab3c0:8", "const:4:8"]]
- 008ab3c0 ["CALL", null, ["callee:008ac96c:8"]]
+ 008ac36c ["INT_ADD", "register:40f0:8", ["const:8ac36c:8", "const:4:8"]]
+ 008ac36c ["CALL", null, ["callee:008ac96c:8"]]
- 008ab48c ["INT_ADD", "register:40f0:8", ["const:8ab48c:8", "const:4:8"]]
- 008ab48c ["CALL", null, ["callee:00c590a0:8"]]
+ 008ac438 ["INT_ADD", "register:40f0:8", ["const:8ac438:8", "const:4:8"]]
+ 008ac438 ["CALL", null, ["callee:00c590a0:8"]]
- 008ab4a0 ["INT_ADD", "register:40f0:8", ["const:8ab4a0:8", "const:4:8"]]
- 008ab4a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008ac44c ["INT_ADD", "register:40f0:8", ["const:8ac44c:8", "const:4:8"]]
+ 008ac44c ["CALL", null, ["callee:00c58f50:8"]]
~~~


