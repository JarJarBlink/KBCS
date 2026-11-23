# v16.0.2 → v16.0.3 · 最優先の変更候補 (61)

[一覧の目次](README.md)

<a id="compare-78c96ba10eaea43c10373fa86760172a"></a>

### [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) → [`008bcac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcac8.md) FUN_008bcac8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008b8108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b8108.md) [`00a824fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a824fc.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`008b90b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b90b4.md) [`00a834f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a834f0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008bcc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcc5c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.24% / 新版 76.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bcb50",
      "incomplete_value": true,
      "site": "008bcb54",
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
                "register:40b0:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:3:8"
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
      "unmatched:008bbb60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bcc50"
      ]
    ]
  ],
  "added": [
    [
      "008bcb0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bcc50"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bbba8 ["INT_ADD", "register:40f0:8", ["const:8bbba8:8", "const:4:8"]]
- 008bbba8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008bcb54 ["INT_ADD", "register:40f0:8", ["const:8bcb54:8", "const:4:8"]]
+ 008bcb54 ["CALL", null, ["callee:00c58f30:8"]]
- 008bbb4c ["INT_MULT", "register:40a8:8", ["register:4040:8", "register:4058:8"]]
- 008bbb50 ["COPY", "tmp:0:8", ["const:0:8"]]
- 008bbb50 ["INT_OR", "register:4040:8", ["tmp:0:8", "const:6666666666666666:8"]]
~~~


<a id="compare-368133d0fee0e64dc18f72b4f03e8f93"></a>

### [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) → [`008bcc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcc5c.md) FUN_008bcc5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00a82b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82b70.md) [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`008bcac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcac8.md) [`00a83b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83b64.md) [`00a85450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85450.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bcc68",
      "incomplete_value": false,
      "site": "008bcc6c",
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
      "definition_site": "008bbcbc",
      "incomplete_value": false,
      "site": "008bbcc0",
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
      "008bcc68",
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
      "008bcc68",
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
- 008bbcc0 ["INT_ADD", "register:40f0:8", ["const:8bbcc0:8", "const:4:8"]]
- 008bbcc0 ["CALL", null, ["callee:0043bad8:8"]]
+ 008bcc6c ["INT_ADD", "register:40f0:8", ["const:8bcc6c:8", "const:4:8"]]
+ 008bcc6c ["CALL", null, ["callee:0043bad8:8"]]
- 008bbcb8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008bcc64 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008bbcbc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008bbcbc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bbcbc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bbcbc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bcc68 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008bcc68 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bcc68 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bcc68 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c827bbe4b677ea82421c801425a757c0"></a>

### [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) → [`008bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcdd8.md) FUN_008bcdd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008bc05c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc05c.md) [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) [`00a8299c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a8299c.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008bd008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd008.md) [`008bd230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd230.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.24% / 新版 99.24%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bbebc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bce84"
      ]
    ]
  ],
  "added": [
    [
      "008bce68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bce84"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bbe80 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008bbe80 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008bbe80 ["CBRANCH", null, ["local:b23:8", "tmp:1:1"]]
+ 008bce2c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008bce2c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008bce2c ["CBRANCH", null, ["local:b22:8", "tmp:1:1"]]
- 008bbebc ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 008bbebc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008bbec4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008bbec4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008bbec4 ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
+ 008bce70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008bce70 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008bce70 ["CBRANCH", null, ["local:b24:8", "tmp:1:1"]]
~~~


<a id="compare-e1b4844b2d40bc3607cfe5abba5e3403"></a>

### [`008bc05c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc05c.md) → [`008bd008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd008.md) FUN_008bd008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcdd8.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc090 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 008bd03c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 008bc0d8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008bc0d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 008bd084 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008bd084 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 008bc0dc ["BRANCH", null, ["local:b8:8"]]
+ 008bd088 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-a544d64df3140cdad43b14de887e1ecc"></a>

### [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) → [`008bd230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd230.md) FUN_008bd230

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`008bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcdd8.md) [`00a84190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84190.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bc284",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bc290",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008bc294",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "008bd230",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008bd23c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "008bd240",
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
- 008bc284 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008bc284 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008bc284 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008bc284 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008bc288 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008bc28c ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-f6750d43f2a74bbf4cfe2ef39d4443eb"></a>

### [`008bc298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc298.md) → [`008bd244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd244.md) FUN_008bd244

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008b9624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9624.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008ba5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba5d0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.01% / 新版 91.01%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bc2d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bd298"
      ]
    ],
    [
      "unmatched:008bc390",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:008bc3cc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008bd280",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008bd298"
      ]
    ],
    [
      "008bd33c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "008bd378",
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
- 008bc2bc ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 008bd268 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 008bc2d0 ["INT_LESSEQUAL", "register:105:1", ["register:4000:8", "register:4040:8"]]
- 008bc2d0 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4000:8"]]
- 008bc2d0 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4000:8"]]
- 008bc2d0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 008bc2d4 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-2ab9c4ed6eb65646138aabeb0e5a4221"></a>

### [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md) → [`008bd514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd514.md) FUN_008bd514

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`008bb86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bb86c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`008bc0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc0f0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bd520",
      "incomplete_value": false,
      "site": "008bd524",
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
      "definition_site": "008bc574",
      "incomplete_value": false,
      "site": "008bc578",
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
      "008bd520",
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
      "008bd520",
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
- 008bc578 ["INT_ADD", "register:40f0:8", ["const:8bc578:8", "const:4:8"]]
- 008bc578 ["CALL", null, ["callee:0043bad8:8"]]
+ 008bd524 ["INT_ADD", "register:40f0:8", ["const:8bd524:8", "const:4:8"]]
+ 008bd524 ["CALL", null, ["callee:0043bad8:8"]]
- 008bc570 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008bd51c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008bc574 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008bc574 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bc574 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bc574 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bd520 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008bd520 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bd520 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bd520 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-375a903a80207a847dc31880432839e2"></a>

### [`008bc57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc57c.md) → [`008bd528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd528.md) FUN_008bd528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008bc540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc540.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bd534",
      "incomplete_value": false,
      "site": "008bd538",
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
      "definition_site": "008bc588",
      "incomplete_value": false,
      "site": "008bc58c",
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
      "008bd534",
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
      "008bd534",
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
- 008bc58c ["INT_ADD", "register:40f0:8", ["const:8bc58c:8", "const:4:8"]]
- 008bc58c ["CALL", null, ["callee:0043bad8:8"]]
+ 008bd538 ["INT_ADD", "register:40f0:8", ["const:8bd538:8", "const:4:8"]]
+ 008bd538 ["CALL", null, ["callee:0043bad8:8"]]
- 008bc584 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008bd530 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008bc588 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008bc588 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bc588 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bc588 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bd534 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008bd534 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bd534 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bd534 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-33ee926d3228a7cd0f2d41ac86382252"></a>

### [`008bc590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc590.md) → [`008bd53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd53c.md) _INIT_170

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 67.23% / 新版 67.23%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bd688",
      "incomplete_value": true,
      "site": "008bd69c",
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
      "definition_site": "008bd6a0",
      "incomplete_value": true,
      "site": "008bd6b0",
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
      "definition_site": "008bd6a4",
      "incomplete_value": true,
      "site": "008bd6b0",
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
      "unmatched:008bc594",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bc598",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bc59c",
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
      "008bd540",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008bd544",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008bd548",
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
- 008bc6f0 ["INT_ADD", "register:40f0:8", ["const:8bc6f0:8", "const:4:8"]]
- 008bc6f0 ["CALL", null, ["callee:0043bb58:8"]]
+ 008bd69c ["INT_ADD", "register:40f0:8", ["const:8bd69c:8", "const:4:8"]]
+ 008bd69c ["CALL", null, ["callee:0043bb58:8"]]
- 008bc704 ["INT_ADD", "register:40f0:8", ["const:8bc704:8", "const:4:8"]]
- 008bc704 ["CALL", null, ["callee:0043bb58:8"]]
+ 008bd6b0 ["INT_ADD", "register:40f0:8", ["const:8bd6b0:8", "const:4:8"]]
+ 008bd6b0 ["CALL", null, ["callee:0043bb58:8"]]
- 008bc718 ["INT_ADD", "register:40f0:8", ["const:8bc718:8", "const:4:8"]]
- 008bc718 ["CALL", null, ["callee:0043bb58:8"]]
+ 008bd6c4 ["INT_ADD", "register:40f0:8", ["const:8bd6c4:8", "const:4:8"]]
+ 008bd6c4 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-c7402536db561cc8afb0ed08e671751b"></a>

### [`008bc920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc920.md) → [`008bd8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd8cc.md) FUN_008bd8cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) · 呼出先 15件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`008cbbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbc0.md) · 呼出先 15件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00666710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666710.md) [`007585d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/007585d8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 23.73% / 新版 23.73%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 98件, `unresolved_call_alignment` 106件, `unresolved_store_alignment` 167件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008be21c",
      "incomplete_value": false,
      "site": "008be220",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 72,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008be218",
      "incomplete_value": true,
      "site": "008be220",
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
    "ordinal": 72,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008be3f4",
      "incomplete_value": false,
      "site": "008be408",
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
      "definition_site": "008bd448",
      "incomplete_value": false,
      "site": "008bd45c",
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
    "ordinal": 89,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bc968",
      "DATA",
      [
        "storage",
        "00c83e00",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008bc9d4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:008bc9d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008be710"
      ]
    ]
  ],
  "added": [
    [
      "008bd914",
      "DATA",
      [
        "storage",
        "00c84dd0",
        null,
        "pointer"
      ]
    ],
    [
      "008bd980",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008bd984",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008be710"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bd274 ["INT_ADD", "register:40f0:8", ["const:8bd274:8", "const:4:8"]]
- 008bd274 ["CALL", null, ["callee:00c54d90:8"]]
+ 008be220 ["INT_ADD", "register:40f0:8", ["const:8be220:8", "const:4:8"]]
+ 008be220 ["CALL", null, ["callee:00c54d90:8"]]
- 008bd45c ["INT_ADD", "register:40f0:8", ["const:8bd45c:8", "const:4:8"]]
- 008bd45c ["CALL", null, ["callee:0047e96c:8"]]
+ 008be408 ["INT_ADD", "register:40f0:8", ["const:8be408:8", "const:4:8"]]
+ 008be408 ["CALL", null, ["callee:0047e96c:8"]]
- 008bd4d4 ["INT_ADD", "register:40f0:8", ["const:8bd4d4:8", "const:4:8"]]
- 008bd4d4 ["CALL", null, ["callee:00c58f50:8"]]
+ 008be480 ["INT_ADD", "register:40f0:8", ["const:8be480:8", "const:4:8"]]
+ 008be480 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2a5265da63d88c1fa6006a386efbb7db"></a>

### [`008bdb58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bd/008bdb58.md) → [`008beb04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008be/008beb04.md) FUN_008beb04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008bc920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc920.md) · 呼出先 47件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`008bd8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd8cc.md) · 呼出先 47件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.28% / 新版 81.28%

優先判定に残った影響 `call_argument_candidate` 18件, `store_condition` 4件, `store_destination` 1件, `store_value` 10件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 37件, `unresolved_store_alignment` 44件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008bec2c",
      "incomplete_value": false,
      "site": "008bec34",
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
      "definition_site": "008bdc80",
      "incomplete_value": false,
      "site": "008bdc88",
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
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008bec48",
      "incomplete_value": true,
      "site": "008bec54",
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
                "const:a7a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008bdc9c",
      "incomplete_value": true,
      "site": "008bdca8",
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
                "const:9ab:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008bee38",
      "incomplete_value": true,
      "site": "008bee3c",
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
      "definition_site": "008bde8c",
      "incomplete_value": true,
      "site": "008bde90",
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
    "ordinal": 49,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bdb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x378]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bdb8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bdb98",
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
      "008beb30",
      "WRITE",
      [
        "storage",
        "Stack[-0x378]",
        null,
        null
      ]
    ],
    [
      "008beb38",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "008beb44",
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
- 008bdc00 ["INT_ADD", "register:40f0:8", ["const:8bdc00:8", "const:4:8"]]
- 008bdc00 ["CALL", null, ["callee:0047e96c:8"]]
+ 008bebac ["INT_ADD", "register:40f0:8", ["const:8bebac:8", "const:4:8"]]
+ 008bebac ["CALL", null, ["callee:0047e96c:8"]]
- 008bdc28 ["INT_ADD", "register:40f0:8", ["const:8bdc28:8", "const:4:8"]]
- 008bdc28 ["CALL", null, ["callee:00c54d90:8"]]
+ 008bebd4 ["INT_ADD", "register:40f0:8", ["const:8bebd4:8", "const:4:8"]]
+ 008bebd4 ["CALL", null, ["callee:00c54d90:8"]]
- 008be0b8 ["COPY", "register:4050:8", ["const:c9b000:8"]]
+ 008bf064 ["COPY", "register:4050:8", ["const:c9c000:8"]]
~~~


<a id="compare-bb34c9ea03a6caf69aaee6014332e320"></a>

### [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md) → [`008c05b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c05b0.md) FUN_008c05b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cc450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc450.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 2件 [`008ccc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc58.md) [`008cd3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd3fc.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.39% / 新版 97.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c0790",
      "incomplete_value": true,
      "site": "008c0798",
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
    "old": null,
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c0794",
      "incomplete_value": false,
      "site": "008c0798",
      "value": [
        "leaf",
        "const:2bd:8"
      ]
    },
    "old": null,
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
      "unmatched:008bf798",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c0758"
      ]
    ],
    [
      "unmatched:008bf7a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008bf79c"
      ]
    ]
  ],
  "added": [
    [
      "008c0744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c0758"
      ]
    ],
    [
      "008c0750",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c0748"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bf7ec ["INT_ADD", "register:40f0:8", ["const:8bf7ec:8", "const:4:8"]]
- 008bf7ec ["CALL", null, ["callee:008b89cc:8"]]
+ 008c0798 ["INT_ADD", "register:40f0:8", ["const:8c0798:8", "const:4:8"]]
+ 008c0798 ["CALL", null, ["callee:008b89cc:8"]]
- 008bf648 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
+ 008c05f4 ["CBRANCH", null, ["local:b27:8", "register:101:1"]]
- 008bf664 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
+ 008c0610 ["CBRANCH", null, ["local:b27:8", "register:101:1"]]
~~~


<a id="compare-9481b35bef4a02762e2b862d5cc0188f"></a>

### [`008bf91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf91c.md) → [`008c08c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c08c8.md) FUN_008c08c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008cf498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf498.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md)
- 新版 呼出元 1件 [`008d0444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0444.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e5c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.42% / 新版 73.42%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 24件, `unresolved_call_alignment` 17件, `unresolved_store_alignment` 34件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008bfc30",
      "incomplete_value": true,
      "site": "008bfc44",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008bfc34",
      "incomplete_value": true,
      "site": "008bfc44",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 23,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008bfab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c0a48"
      ]
    ],
    [
      "unmatched:008bfc3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:008bfc40",
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
      "008c0a64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c0a48"
      ]
    ],
    [
      "008c0be8",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "008c0bec",
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
- 008bfc44 ["INT_ADD", "register:40f0:8", ["const:8bfc44:8", "const:4:8"]]
- 008bfc44 ["CALL", null, ["callee:00c590a0:8"]]
+ 008c0bf0 ["INT_ADD", "register:40f0:8", ["const:8c0bf0:8", "const:4:8"]]
+ 008c0bf0 ["CALL", null, ["callee:00c590a0:8"]]
- 008bf964 ["INT_ADD", "register:40f0:8", ["const:8bf964:8", "const:4:8"]]
- 008bf964 ["CALL", null, ["callee:008524fc:8"]]
+ 008c0910 ["INT_ADD", "register:40f0:8", ["const:8c0910:8", "const:4:8"]]
+ 008c0910 ["CALL", null, ["callee:008524fc:8"]]
- 008bf97c ["INT_ADD", "register:40f0:8", ["const:8bf97c:8", "const:4:8"]]
- 008bf97c ["CALL", null, ["callee:008524fc:8"]]
+ 008c0928 ["INT_ADD", "register:40f0:8", ["const:8c0928:8", "const:4:8"]]
+ 008c0928 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c8a8429a0490500bbfcf3a87f0012378"></a>

### [`008c038c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c0/008c038c.md) → [`008c1338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c1/008c1338.md) FUN_008c1338

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) · 呼出先 29件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)
- 新版 呼出元 1件 [`008cc434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc434.md) · 呼出先 29件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 21件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 48件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c13b8",
      "incomplete_value": true,
      "site": "008c13b8",
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
      "definition_site": "008c040c",
      "incomplete_value": true,
      "site": "008c040c",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008c0cc0",
      "incomplete_value": true,
      "site": "008c0cd8",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 70,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c1c80",
      "incomplete_value": true,
      "site": "008c1c84",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              [
                "live",
                "register:5020:8"
              ],
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c0cd4",
      "incomplete_value": true,
      "site": "008c0cd8",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              [
                "leaf",
                "const:403e000000000000:8"
              ],
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "ordinal": 70,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008c139c",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008c0458",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c1bb0"
      ]
    ],
    [
      "unmatched:008c0498",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008c139c",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ],
    [
      "008c1404",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c1bb0"
      ]
    ],
    [
      "008c1444",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008c0cd8 ["INT_ADD", "register:40f0:8", ["const:8c0cd8:8", "const:4:8"]]
- 008c0cd8 ["CALL", null, ["callee:009dde40:8"]]
+ 008c1c84 ["INT_ADD", "register:40f0:8", ["const:8c1c84:8", "const:4:8"]]
+ 008c1c84 ["CALL", null, ["callee:009dde40:8"]]
- 008c03c8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008c03c8 ["CBRANCH", null, ["local:b134:8", "tmp:0:1"]]
+ 008c1374 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008c1374 ["CBRANCH", null, ["local:b131:8", "tmp:0:1"]]
- 008c03d0 ["INT_ADD", "register:40f0:8", ["const:8c03d0:8", "const:4:8"]]
- 008c03d0 ["CALL", null, ["callee:008524fc:8"]]
+ 008c137c ["INT_ADD", "register:40f0:8", ["const:8c137c:8", "const:4:8"]]
+ 008c137c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c13080f6133e1e8c59e9809aba6137fb"></a>

### [`008c0dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c0/008c0dd8.md) → [`008c1d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c1/008c1d84.md) FUN_008c1d84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008cb698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb698.md) · 呼出先 26件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467edc.md)
- 新版 呼出元 1件 [`008cc644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc644.md) · 呼出先 26件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`004681fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004681fc.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

アドレスに依存する影響 `call_argument_candidate` 29件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c1dd8",
      "incomplete_value": true,
      "site": "008c1df4",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "008c1ddc",
      "incomplete_value": false,
      "site": "008c1df4",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c1de4",
      "incomplete_value": false,
      "site": "008c1df4",
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
      "unmatched:008c0ddc",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c0de0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c0de4",
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
      "008c1d88",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008c1d8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c1d90",
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
- 008c0e48 ["INT_ADD", "register:40f0:8", ["const:8c0e48:8", "const:4:8"]]
- 008c0e48 ["CALL", null, ["callee:00467e8c:8"]]
+ 008c1df4 ["INT_ADD", "register:40f0:8", ["const:8c1df4:8", "const:4:8"]]
+ 008c1df4 ["CALL", null, ["callee:00467e8c:8"]]
- 008c0f00 ["INT_ADD", "register:40f0:8", ["const:8c0f00:8", "const:4:8"]]
- 008c0f00 ["CALL", null, ["callee:00469f64:8"]]
+ 008c1eac ["INT_ADD", "register:40f0:8", ["const:8c1eac:8", "const:4:8"]]
+ 008c1eac ["CALL", null, ["callee:00469f64:8"]]
- 008c0f20 ["INT_ADD", "register:40f0:8", ["const:8c0f20:8", "const:4:8"]]
- 008c0f20 ["CALL", null, ["callee:00469f64:8"]]
+ 008c1ecc ["INT_ADD", "register:40f0:8", ["const:8c1ecc:8", "const:4:8"]]
+ 008c1ecc ["CALL", null, ["callee:00469f64:8"]]
~~~


<a id="compare-0554dc2985186bb5cea80913cc1fd212"></a>

### [`008c1534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c1/008c1534.md) → [`008c24e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c2/008c24e0.md) FUN_008c24e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 13件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) · 呼出先 13件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.29% / 新版 70.29%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 5件, `store_value` 6件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 43件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c256c",
      "incomplete_value": true,
      "site": "008c2574",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c15c0",
      "incomplete_value": true,
      "site": "008c15c8",
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
                "const:b90:8"
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
      "definition_site": "008c27d4",
      "incomplete_value": true,
      "site": "008c27ec",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:d35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c1828",
      "incomplete_value": true,
      "site": "008c1840",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:bdd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 62,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c27e4",
      "incomplete_value": true,
      "site": "008c27f0",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c1838",
      "incomplete_value": true,
      "site": "008c1844",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c1538",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c153c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c1540",
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
      "008c24e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c24e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008c24ec",
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
- 008c1690 ["INT_ADD", "register:40f0:8", ["const:8c1690:8", "const:4:8"]]
- 008c1690 ["CALL", null, ["callee:00c58f30:8"]]
+ 008c263c ["INT_ADD", "register:40f0:8", ["const:8c263c:8", "const:4:8"]]
+ 008c263c ["CALL", null, ["callee:00c58f30:8"]]
- 008c171c ["INT_ADD", "register:40f0:8", ["const:8c171c:8", "const:4:8"]]
- 008c171c ["CALL", null, ["callee:00493168:8"]]
+ 008c26c8 ["INT_ADD", "register:40f0:8", ["const:8c26c8:8", "const:4:8"]]
+ 008c26c8 ["CALL", null, ["callee:00493168:8"]]
- 008c1764 ["INT_ADD", "register:40f0:8", ["const:8c1764:8", "const:4:8"]]
- 008c1764 ["CALL", null, ["callee:008c2e9c:8"]]
+ 008c2710 ["INT_ADD", "register:40f0:8", ["const:8c2710:8", "const:4:8"]]
+ 008c2710 ["CALL", null, ["callee:008c2e9c:8"]]
~~~


<a id="compare-6f7fdf37a1bdbaca27a919ea556e9869"></a>

### [`008c2180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2180.md) → [`008c312c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c312c.md) FUN_008c312c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008c8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8a50.md) [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008c99fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c99fc.md) [`008cbbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbc0.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.73% / 新版 84.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c31ec",
      "incomplete_value": true,
      "site": "008c31ec",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:954:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c2240",
      "incomplete_value": true,
      "site": "008c2240",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:885:8"
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
      "definition_site": "008c31f0",
      "incomplete_value": true,
      "site": "008c31f0",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c2244",
      "incomplete_value": true,
      "site": "008c2244",
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
                "const:6:8"
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
      "definition_site": "008c3238",
      "incomplete_value": true,
      "site": "008c3238",
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
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:d2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c228c",
      "incomplete_value": true,
      "site": "008c228c",
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
                "const:ff4:8"
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
      "008c31dc",
      "READ",
      [
        "storage",
        "002b6885",
        null,
        "string"
      ]
    ],
    [
      "008c31e0",
      "READ",
      [
        "storage",
        "002b688b",
        null,
        "string"
      ]
    ],
    [
      "008c3228",
      "READ",
      [
        "storage",
        "002bdff4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008c31dc",
      "READ",
      [
        "storage",
        "002b6954",
        null,
        "string"
      ]
    ],
    [
      "008c31e0",
      "READ",
      [
        "storage",
        "002b695a",
        null,
        "string"
      ]
    ],
    [
      "008c3228",
      "READ",
      [
        "storage",
        "002be0d2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c2318 ["INT_ADD", "register:40f0:8", ["const:8c2318:8", "const:4:8"]]
- 008c2318 ["CALL", null, ["callee:00c59230:8"]]
+ 008c32c4 ["INT_ADD", "register:40f0:8", ["const:8c32c4:8", "const:4:8"]]
+ 008c32c4 ["CALL", null, ["callee:00c59230:8"]]
- 008c21b4 ["INT_ADD", "register:40f0:8", ["const:8c21b4:8", "const:4:8"]]
- 008c21b4 ["CALL", null, ["callee:008524fc:8"]]
+ 008c3160 ["INT_ADD", "register:40f0:8", ["const:8c3160:8", "const:4:8"]]
+ 008c3160 ["CALL", null, ["callee:008524fc:8"]]
- 008c2228 ["COPY", "tmp:0:8", ["const:885:8"]]
- 008c2228 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008c2228 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008c2228 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008c31d4 ["COPY", "tmp:0:8", ["const:954:8"]]
+ 008c31d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008c31d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008c31d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cfc1c4983e054888d1d744420b303036"></a>

### [`008c2a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2a2c.md) → [`008c39d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c39d8.md) FUN_008c39d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008c2984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2984.md) [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df688.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md)
- 新版 呼出元 4件 [`008c3930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3930.md) [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md) [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) [`008cbbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbc0.md) · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e0634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0634.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md) [`009e3f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e3/009e3f94.md) [`00b30a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a48.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.92% / 新版 92.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c3aa8",
      "incomplete_value": true,
      "site": "008c3aac",
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
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c2afc",
      "incomplete_value": true,
      "site": "008c2b00",
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
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
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
      "unmatched:008c2ad4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c3cfc"
      ]
    ],
    [
      "unmatched:008c2b80",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ],
    [
      "unmatched:008c2b98",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008c3a80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c3cfc"
      ]
    ],
    [
      "008c3b2c",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[67]"
      ]
    ],
    [
      "008c3b44",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "byte[31]"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c2b00 ["INT_ADD", "register:40f0:8", ["const:8c2b00:8", "const:4:8"]]
- 008c2b00 ["CALL", null, ["callee:00b30a48:8"]]
+ 008c3aac ["INT_ADD", "register:40f0:8", ["const:8c3aac:8", "const:4:8"]]
+ 008c3aac ["CALL", null, ["callee:00b30a48:8"]]
- 008c2a5c ["CBRANCH", null, ["local:b30:8", "register:101:1"]]
+ 008c3a08 ["CBRANCH", null, ["local:b29:8", "register:101:1"]]
- 008c2a68 ["CBRANCH", null, ["local:b30:8", "register:101:1"]]
+ 008c3a14 ["CBRANCH", null, ["local:b29:8", "register:101:1"]]
~~~


<a id="compare-3381e13ee235226a87483d2c58cc8515"></a>

### [`008c3330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c3330.md) → [`008c42dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c42dc.md) FUN_008c42dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md) [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`005cc990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc990.md) [`00678cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`0075963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/0075963c.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008c46dc",
      "DATA",
      [
        "storage",
        "0044e100",
        null,
        null
      ]
    ],
    [
      "008c46f0",
      "DATA",
      [
        "storage",
        "0044e100",
        null,
        null
      ]
    ],
    [
      "008c4724",
      "DATA",
      [
        "storage",
        "0044e100",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008c4754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c47ac"
      ]
    ],
    [
      "008c4758",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "008c47c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c4854"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c336c ["INT_ADD", "register:40f0:8", ["const:8c336c:8", "const:4:8"]]
- 008c336c ["CALL", null, ["callee:008524fc:8"]]
+ 008c4318 ["INT_ADD", "register:40f0:8", ["const:8c4318:8", "const:4:8"]]
+ 008c4318 ["CALL", null, ["callee:008524fc:8"]]
- 008c3478 ["INT_ADD", "register:40f0:8", ["const:8c3478:8", "const:4:8"]]
- 008c3478 ["CALL", null, ["callee:008524fc:8"]]
+ 008c4424 ["INT_ADD", "register:40f0:8", ["const:8c4424:8", "const:4:8"]]
+ 008c4424 ["CALL", null, ["callee:008524fc:8"]]
- 008c34cc ["INT_ADD", "register:40f0:8", ["const:8c34cc:8", "const:4:8"]]
- 008c34cc ["CALL", null, ["callee:00c58f30:8"]]
+ 008c4478 ["INT_ADD", "register:40f0:8", ["const:8c4478:8", "const:4:8"]]
+ 008c4478 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-ce6028d2686ea7f43b14937558220634"></a>

### [`008c38ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38ac.md) → [`008c4858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4858.md) FUN_008c4858

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) · 呼出先 0件 
- 新版 呼出元 2件 [`008ed2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed2a0.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-7db0db9fa5fd5e29bdf62206a59423cd"></a>

### [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) → [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md) FUN_008c4860

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`008c42e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c42e4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cf574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf574.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2a2c.md) [`008cc50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc50c.md) [`008cc514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc514.md)
- 新版 呼出元 4件 [`008c5290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5290.md) [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) [`008ccc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc58.md) [`008d0520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0520.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c39d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c39d8.md) [`008cd4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd4b8.md) [`008cd4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd4c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.32% / 新版 73.32%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 46件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c4888",
      "incomplete_value": true,
      "site": "008c48a4",
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
      "definition_site": "008c4a18",
      "incomplete_value": true,
      "site": "008c4a20",
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
            "const:8:8"
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
      "definition_site": "008c51e0",
      "incomplete_value": true,
      "site": "008c51e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c4234",
      "incomplete_value": true,
      "site": "008c4238",
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
                "register:40a0:8"
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
    "ordinal": 54,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c38c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c38cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c38d4",
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
      "008c4874",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008c4878",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008c4880",
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
- 008c38f8 ["INT_ADD", "register:40f0:8", ["const:8c38f8:8", "const:4:8"]]
- 008c38f8 ["CALL", null, ["callee:00c59180:8"]]
+ 008c48a4 ["INT_ADD", "register:40f0:8", ["const:8c48a4:8", "const:4:8"]]
+ 008c48a4 ["CALL", null, ["callee:00c59180:8"]]
- 008c3a74 ["INT_ADD", "register:40f0:8", ["const:8c3a74:8", "const:4:8"]]
- 008c3a74 ["CALL", null, ["callee:00c54d90:8"]]
+ 008c4a20 ["INT_ADD", "register:40f0:8", ["const:8c4a20:8", "const:4:8"]]
+ 008c4a20 ["CALL", null, ["callee:00c54d90:8"]]
- 008c4238 ["INT_ADD", "register:40f0:8", ["const:8c4238:8", "const:4:8"]]
- 008c4238 ["CALL", null, ["callee:00ac98c0:8"]]
+ 008c51e4 ["INT_ADD", "register:40f0:8", ["const:8c51e4:8", "const:4:8"]]
+ 008c51e4 ["CALL", null, ["callee:00ac98c0:8"]]
~~~


<a id="compare-75b333a56bcedaaca42f686ff0364b31"></a>

### [`008c42e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c42e4.md) → [`008c5290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5290.md) FUN_008c5290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cf574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf574.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 10件 [`005e0fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0fd0.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md)
- 新版 呼出元 6件 [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) [`008c9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c9e0c.md) [`008ccc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc58.md) [`008d0520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0520.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 10件 [`005e1380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1380.md) [`005e1f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f08.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md) [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.56% / 新版 83.56%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c52d8",
      "incomplete_value": true,
      "site": "008c52ec",
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
    "new": null,
    "old": {
      "definition_site": "008c4344",
      "incomplete_value": false,
      "site": "008c434c",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c5310",
      "incomplete_value": false,
      "site": "008c531c",
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
      "unmatched:008c42e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c42ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c42f0",
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
      "008c5294",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c5298",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008c529c",
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
- 008c4340 ["INT_ADD", "register:40f0:8", ["const:8c4340:8", "const:4:8"]]
- 008c4340 ["CALL", null, ["callee:008c4860:8"]]
+ 008c52ec ["INT_ADD", "register:40f0:8", ["const:8c52ec:8", "const:4:8"]]
+ 008c52ec ["CALL", null, ["callee:008c4860:8"]]
- 008c434c ["INT_ADD", "register:40f0:8", ["const:8c434c:8", "const:4:8"]]
- 008c434c ["CALL", null, ["callee:005e1f08:8"]]
+ 008c52f8 ["INT_ADD", "register:40f0:8", ["const:8c52f8:8", "const:4:8"]]
+ 008c52f8 ["CALL", null, ["callee:005e1f08:8"]]
- 008c4370 ["INT_ADD", "register:40f0:8", ["const:8c4370:8", "const:4:8"]]
- 008c4370 ["CALL", null, ["callee:005e1f08:8"]]
+ 008c531c ["INT_ADD", "register:40f0:8", ["const:8c531c:8", "const:4:8"]]
+ 008c531c ["CALL", null, ["callee:005e1f08:8"]]
~~~


<a id="compare-9e125946e217de0c4a66d13076f5ef08"></a>

### [`008c4668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4668.md) → [`008c5614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5614.md) FUN_008c5614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cf574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf574.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md)
- 新版 呼出元 4件 [`008cbbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbc0.md) [`008cc434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc434.md) [`008ccc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc58.md) [`008d0520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0520.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00498530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498530.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c5920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5920.md)

変更の種類 branch_condition_or_target, branch_value, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.72% / 新版 68.72%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008c588c",
      "incomplete_value": true,
      "site": "008c588c",
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
      "definition_site": "008c48e0",
      "incomplete_value": true,
      "site": "008c48e0",
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
    "ordinal": 21,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008c4718"
      ],
      [
        "FALL_THROUGH",
        "008c56c4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008c56c4",
      "incomplete_value": true,
      "site": "008c5700",
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
              [
                "live",
                "register:40b0:8"
              ],
              "INT_SEXT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c4718",
      "incomplete_value": true,
      "site": "008c4754",
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
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c4694",
      "READ",
      [
        "storage",
        "00ca46d8",
        null,
        "undefined4"
      ]
    ],
    [
      "008c5648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008c48c8"
      ]
    ],
    [
      "unmatched:008c4718",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c5694"
      ]
    ]
  ],
  "added": [
    [
      "008c5640",
      "READ",
      [
        "storage",
        "00ca56a8",
        null,
        "undefined4"
      ]
    ],
    [
      "008c5648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c5874"
      ]
    ],
    [
      "008c567c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bf04"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c48e0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008c48e0 ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
+ 008c588c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008c588c ["CBRANCH", null, ["local:b41:8", "tmp:0:1"]]
- 008c4680 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008c4688 ["COPY", "register:4048:8", ["const:ca4000:8"]]
+ 008c5634 ["COPY", "register:4048:8", ["const:ca5000:8"]]
~~~


<a id="compare-c4f0a35aaf93fb9c5a37ffadf2ed5129"></a>

### [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md) → [`008c5920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5920.md) FUN_008c5920

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008c4668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4668.md) [`008eb9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb9dc.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md)
- 新版 呼出元 2件 [`008c5614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5614.md) [`008ec988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec988.md) · 呼出先 16件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0044dc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dc80.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.79% / 新版 61.79%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 24件, `unresolved_store_alignment` 48件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c5b5c",
      "incomplete_value": false,
      "site": "008c5b7c",
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
      "definition_site": "008c4bb0",
      "incomplete_value": false,
      "site": "008c4bd0",
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
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c5b60",
      "incomplete_value": true,
      "site": "008c5b7c",
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c4bb4",
      "incomplete_value": true,
      "site": "008c4bd0",
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
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c5d28",
      "incomplete_value": true,
      "site": "008c5d38",
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
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c4978",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c497c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c4980",
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
      "008c5924",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008c5928",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008c592c",
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
- 008c4bd0 ["INT_ADD", "register:40f0:8", ["const:8c4bd0:8", "const:4:8"]]
- 008c4bd0 ["CALL", null, ["callee:00633bd4:8"]]
+ 008c5b7c ["INT_ADD", "register:40f0:8", ["const:8c5b7c:8", "const:4:8"]]
+ 008c5b7c ["CALL", null, ["callee:00633bd4:8"]]
- 008c4d8c ["INT_ADD", "register:40f0:8", ["const:8c4d8c:8", "const:4:8"]]
- 008c4d8c ["CALL", null, ["callee:00a43030:8"]]
+ 008c5d38 ["INT_ADD", "register:40f0:8", ["const:8c5d38:8", "const:4:8"]]
+ 008c5d38 ["CALL", null, ["callee:00a43030:8"]]
- 008c4e0c ["INT_ADD", "register:40f0:8", ["const:8c4e0c:8", "const:4:8"]]
- 008c4e0c ["CALL", null, ["callee:00633bd4:8"]]
+ 008c5db8 ["INT_ADD", "register:40f0:8", ["const:8c5db8:8", "const:4:8"]]
+ 008c5db8 ["CALL", null, ["callee:00633bd4:8"]]
~~~


<a id="compare-5a7271d0d6a8d28988769dbfeb4067dc"></a>

### [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md) → [`008c8b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c8/008c8b40.md) FUN_008c8b40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) [`008cfe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfe78.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0049e504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049e/0049e504.md) [`005c0530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0530.md)
- 新版 呼出元 3件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008c9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c9e0c.md) [`008d0e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0e24.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0049e824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049e/0049e824.md) [`005c08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c08e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.56% / 新版 91.56%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 5件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c8c44",
      "incomplete_value": true,
      "site": "008c8c54",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008c8c48",
      "incomplete_value": true,
      "site": "008c8c54",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "008c8d58",
      "incomplete_value": false,
      "site": "008c8d60",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:008c7bd8",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c7be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c7c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8c80"
      ]
    ]
  ],
  "added": [
    [
      "008c8b84",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "008c8b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "008c8bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8c80"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c7ca8 ["INT_ADD", "register:40f0:8", ["const:8c7ca8:8", "const:4:8"]]
- 008c7ca8 ["CALL", null, ["callee:00c590a0:8"]]
+ 008c8c54 ["INT_ADD", "register:40f0:8", ["const:8c8c54:8", "const:4:8"]]
+ 008c8c54 ["CALL", null, ["callee:00c590a0:8"]]
- 008c7db4 ["INT_ADD", "register:40f0:8", ["const:8c7db4:8", "const:4:8"]]
- 008c7db4 ["CALL", null, ["callee:00c54d60:8"]]
+ 008c8d60 ["INT_ADD", "register:40f0:8", ["const:8c8d60:8", "const:4:8"]]
+ 008c8d60 ["CALL", null, ["callee:00c54d60:8"]]
- 008c7e94 ["INT_ADD", "register:40f0:8", ["const:8c7e94:8", "const:4:8"]]
- 008c7e94 ["CALL", null, ["callee:00c58f50:8"]]
+ 008c8e40 ["INT_ADD", "register:40f0:8", ["const:8c8e40:8", "const:4:8"]]
+ 008c8e40 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-936b0ba9a5a08bc31e1c2a5f24d9ce6d"></a>

### [`008c8934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8934.md) → [`008c98e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c98e0.md) FUN_008c98e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df650.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md)
- 新版 呼出元 1件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e05fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e05fc.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md) [`009e3f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e3/009e3f94.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 83.10% / 新版 83.10%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 008c8950 ["INT_ADD", "register:40f0:8", ["const:8c8950:8", "const:4:8"]]
- 008c8950 ["CALL", null, ["callee:008524fc:8"]]
+ 008c98fc ["INT_ADD", "register:40f0:8", ["const:8c98fc:8", "const:4:8"]]
+ 008c98fc ["CALL", null, ["callee:008524fc:8"]]
- 008c8960 ["INT_ADD", "register:40f0:8", ["const:8c8960:8", "const:4:8"]]
- 008c8960 ["CALL", null, ["callee:009e1fc0:8"]]
+ 008c990c ["INT_ADD", "register:40f0:8", ["const:8c990c:8", "const:4:8"]]
+ 008c990c ["CALL", null, ["callee:009e1fc0:8"]]
- 008c8964 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 008c8964 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008c8964 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008c8964 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008c9910 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 008c9910 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008c9910 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008c9910 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-48c484cfd13b1bd32790fe1b15a26873"></a>

### [`008c8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8a50.md) → [`008c99fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c99fc.md) FUN_008c99fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 14件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md)
- 新版 呼出元 1件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) · 呼出先 14件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md) [`0085c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2b0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.92% / 新版 89.92%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c8a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008c9acc",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "008c9ad4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008c8ca8"
      ]
    ]
  ],
  "added": [
    [
      "008c9a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008c9acc",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "008c9ad4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c9c54"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c8a7c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:28:8"]]
- 008c8a7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008c8a80 ["COPY", "register:40a0:8", ["register:4000:8"]]
- 008c8a84 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008c8a84 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008c8a84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-be5f1893d3246a1da864bde1784c605a"></a>

### [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) → [`008c9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c9/008c9e0c.md) FUN_008c9e0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008cf970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf970.md) · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c42e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c42e4.md) [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md)
- 新版 呼出元 1件 [`008d091c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d091c.md) · 呼出先 14件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c5290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5290.md) [`008c8b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c8/008c8b40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.30% / 新版 80.30%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 7件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 32件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c9f30",
      "incomplete_value": true,
      "site": "008c9f34",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c9f28",
      "incomplete_value": true,
      "site": "008c9f34",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40d0:8"
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
    "old": null,
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008c9678",
      "incomplete_value": true,
      "site": "008c967c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 39,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c8e64",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c8e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c8e6c",
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
      "008c9e10",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008c9e14",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c9e18",
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
- 008c8f88 ["INT_ADD", "register:40f0:8", ["const:8c8f88:8", "const:4:8"]]
- 008c8f88 ["CALL", null, ["callee:00c594f0:8"]]
+ 008c9f34 ["INT_ADD", "register:40f0:8", ["const:8c9f34:8", "const:4:8"]]
+ 008c9f34 ["CALL", null, ["callee:00c594f0:8"]]
- 008c967c ["INT_ADD", "register:40f0:8", ["const:8c967c:8", "const:4:8"]]
- 008c967c ["CALL", null, ["callee:00c58f50:8"]]
+ 008ca628 ["INT_ADD", "register:40f0:8", ["const:8ca628:8", "const:4:8"]]
+ 008ca628 ["CALL", null, ["callee:00c58f50:8"]]
- 008c8e60 ["INT_SUB", "register:8:8", ["register:8:8", "const:d0:8"]]
~~~


<a id="compare-26c82255eda2276d0d377417bd084c8d"></a>

### [`008c9960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c9/008c9960.md) → [`008ca90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ca/008ca90c.md) FUN_008ca90c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cb698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb698.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`008cc644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc644.md) · 呼出先 15件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.02% / 新版 81.02%

優先判定に残った影響 `call_argument_candidate` 21件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ca93c",
      "incomplete_value": false,
      "site": "008ca950",
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
      "definition_site": "008c9990",
      "incomplete_value": false,
      "site": "008c99a4",
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
      "definition_site": "008ca944",
      "incomplete_value": false,
      "site": "008ca950",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c9998",
      "incomplete_value": false,
      "site": "008c99a4",
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
            "const:e10:8"
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
      "definition_site": "008ca994",
      "incomplete_value": true,
      "site": "008ca998",
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
    "old": {
      "definition_site": "008c99e8",
      "incomplete_value": true,
      "site": "008c99ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
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
      "unmatched:008c9984",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008c9988",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ca95c"
      ]
    ],
    [
      "unmatched:008c9990",
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
      "008ca930",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008ca934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ca95c"
      ]
    ],
    [
      "008ca93c",
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
- 008c99a4 ["INT_ADD", "register:40f0:8", ["const:8c99a4:8", "const:4:8"]]
- 008c99a4 ["CALL", null, ["callee:00c596b0:8"]]
+ 008ca950 ["INT_ADD", "register:40f0:8", ["const:8ca950:8", "const:4:8"]]
+ 008ca950 ["CALL", null, ["callee:00c596b0:8"]]
- 008c99ec ["INT_ADD", "register:40f0:8", ["const:8c99ec:8", "const:4:8"]]
- 008c99ec ["CALL", null, ["callee:00ac9e48:8"]]
+ 008ca998 ["INT_ADD", "register:40f0:8", ["const:8ca998:8", "const:4:8"]]
+ 008ca998 ["CALL", null, ["callee:00ac9e48:8"]]
- 008c9a04 ["INT_ADD", "register:40f0:8", ["const:8c9a04:8", "const:4:8"]]
- 008c9a04 ["CALL", null, ["callee:00ac9e50:8"]]
+ 008ca9b0 ["INT_ADD", "register:40f0:8", ["const:8ca9b0:8", "const:4:8"]]
+ 008ca9b0 ["CALL", null, ["callee:00ac9e50:8"]]
~~~


<a id="compare-186f15fbcbd2d8d408875ed5e2117205"></a>

### [`008ca390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008ca390.md) → [`008cb33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cb33c.md) FUN_008cb33c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md)
- 新版 呼出元 1件 [`00b1f118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1f/00b1f118.md) · 呼出先 17件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 3件, `store_value` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008cb3d8",
      "incomplete_value": true,
      "site": "008cb3e8",
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
                "const:da3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ca42c",
      "incomplete_value": true,
      "site": "008ca43c",
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
                "const:cd6:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ca4b4",
      "incomplete_value": true,
      "site": "008ca4b8",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb480",
      "incomplete_value": true,
      "site": "008cb488",
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
      "unmatched:008ca3a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca3a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca3a8",
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
      "008cb34c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008cb350",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008cb354",
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
- 008ca4b8 ["INT_ADD", "register:40f0:8", ["const:8ca4b8:8", "const:4:8"]]
- 008ca4b8 ["CALL", null, ["callee:004888b8:8"]]
+ 008cb464 ["INT_ADD", "register:40f0:8", ["const:8cb464:8", "const:4:8"]]
+ 008cb464 ["CALL", null, ["callee:004888b8:8"]]
- 008ca4dc ["INT_ADD", "register:40f0:8", ["const:8ca4dc:8", "const:4:8"]]
- 008ca4dc ["CALL", null, ["callee:00487c9c:8"]]
+ 008cb488 ["INT_ADD", "register:40f0:8", ["const:8cb488:8", "const:4:8"]]
+ 008cb488 ["CALL", null, ["callee:00487c9c:8"]]
- 008ca660 ["INT_ADD", "register:40f0:8", ["const:8ca660:8", "const:4:8"]]
- 008ca660 ["CALL", null, ["callee:00c59040:8"]]
+ 008cb60c ["INT_ADD", "register:40f0:8", ["const:8cb60c:8", "const:4:8"]]
+ 008cb60c ["CALL", null, ["callee:00c59040:8"]]
~~~


<a id="compare-1a3dad2ddd9260823cc48b767de43c57"></a>

### [`008ca7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008ca7a8.md) → [`008cb754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cb754.md) FUN_008cb754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 16件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b1f118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1f/00b1f118.md) · 呼出先 16件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.61% / 新版 76.61%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb80c",
      "incomplete_value": true,
      "site": "008cb81c",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb810",
      "incomplete_value": true,
      "site": "008cb81c",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb814",
      "incomplete_value": false,
      "site": "008cb81c",
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
      "unmatched:008ca7ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca7b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca7b4",
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
      "008cb758",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008cb75c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008cb760",
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
- 008ca870 ["INT_ADD", "register:40f0:8", ["const:8ca870:8", "const:4:8"]]
- 008ca870 ["CALL", null, ["callee:00b1217c:8"]]
+ 008cb81c ["INT_ADD", "register:40f0:8", ["const:8cb81c:8", "const:4:8"]]
+ 008cb81c ["CALL", null, ["callee:00b1217c:8"]]
- 008ca958 ["INT_ADD", "register:40f0:8", ["const:8ca958:8", "const:4:8"]]
- 008ca958 ["CALL", null, ["callee:00c590a0:8"]]
+ 008cb904 ["INT_ADD", "register:40f0:8", ["const:8cb904:8", "const:4:8"]]
+ 008cb904 ["CALL", null, ["callee:00c590a0:8"]]
- 008caa48 ["INT_ADD", "register:40f0:8", ["const:8caa48:8", "const:4:8"]]
- 008caa48 ["CALL", null, ["callee:00c58f50:8"]]
+ 008cb9f4 ["INT_ADD", "register:40f0:8", ["const:8cb9f4:8", "const:4:8"]]
+ 008cb9f4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8d36270a028b40cbac7d29b674e6480a"></a>

### [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) → [`008cc434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc434.md) FUN_008cc434

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0044c8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c8c4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 13件 [`0044cbe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044c/0044cbe4.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048dfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfac.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `call_target` 2件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc560",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb5b4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc598",
      "value": [
        "leaf",
        "ram:8c6da4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb5ec",
      "value": [
        "leaf",
        "ram:8c5df8:8"
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
        "008cb50c"
      ],
      [
        "FALL_THROUGH",
        "008cc4b8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008cc4b8",
      "incomplete_value": true,
      "site": "008cc4ec",
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
      "definition_site": "008cb50c",
      "incomplete_value": true,
      "site": "008cb540",
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
      "unmatched:008cb48c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cb490",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cb494",
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
      "008cc438",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008cc43c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008cc440",
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
- 008cb5b4 ["INT_ADD", "register:40f0:8", ["const:8cb5b4:8", "const:4:8"]]
- 008cb5b4 ["CALL", null, ["ram:48cd38:8"]]
+ 008cc560 ["INT_ADD", "register:40f0:8", ["const:8cc560:8", "const:4:8"]]
+ 008cc560 ["CALL", null, ["ram:48d058:8"]]
- 008cb5ec ["INT_ADD", "register:40f0:8", ["const:8cb5ec:8", "const:4:8"]]
- 008cb5ec ["CALL", null, ["ram:8c5df8:8"]]
+ 008cc598 ["INT_ADD", "register:40f0:8", ["const:8cc598:8", "const:4:8"]]
+ 008cc598 ["CALL", null, ["ram:8c6da4:8"]]
- 008cb488 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-89af7bd23a535bd5e411f6689d468140"></a>

### [`008cb840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb840.md) → [`008cc7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc7ec.md) FUN_008cc7ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cb904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb904.md) · 呼出先 5件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`006b223c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b223c.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008cc8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc8b0.md) · 呼出先 5件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`006b25ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b25ec.md) [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 69.39% / 新版 69.39%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cb890",
      "incomplete_value": true,
      "site": "008cb898",
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
      "unmatched:008cb858",
      "DATA",
      [
        "storage",
        "00c83e00",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008cb888",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008cb89c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc864"
      ]
    ]
  ],
  "added": [
    [
      "008cc804",
      "DATA",
      [
        "storage",
        "00c84dd0",
        null,
        "pointer"
      ]
    ],
    [
      "008cc834",
      "DATA",
      [
        "storage",
        "00c793d0",
        null,
        "pointer"
      ]
    ],
    [
      "008cc848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc864"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb898 ["INT_ADD", "register:40f0:8", ["const:8cb898:8", "const:4:8"]]
- 008cb898 ["CALL", null, ["callee:00c54d90:8"]]
+ 008cc844 ["INT_ADD", "register:40f0:8", ["const:8cc844:8", "const:4:8"]]
+ 008cc844 ["CALL", null, ["callee:00c54d90:8"]]
- 008cb84c ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008cc7f8 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cb850 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 008cb850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2482b53bbfc5adb4291049b17ea8e183"></a>

### [`008cb92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb92c.md) → [`008cc8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc8d8.md) FUN_008cc8d8

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
      "definition_site": "008cc8f8",
      "incomplete_value": false,
      "site": "008cc8fc",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cb94c",
      "incomplete_value": false,
      "site": "008cb950",
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
            "const:e38:8"
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
      "008cc8fc",
      "DATA",
      [
        "storage",
        "00c83e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cc8fc",
      "DATA",
      [
        "storage",
        "00c84e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb940 ["INT_ADD", "register:40f0:8", ["const:8cb940:8", "const:4:8"]]
- 008cb940 ["CALL", null, ["callee:00c58f30:8"]]
+ 008cc8ec ["INT_ADD", "register:40f0:8", ["const:8cc8ec:8", "const:4:8"]]
+ 008cc8ec ["CALL", null, ["callee:00c58f30:8"]]
- 008cb948 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008cc8f4 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cb94c ["COPY", "tmp:0:8", ["const:e38:8"]]
- 008cb94c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb94c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb94c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cc8f8 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008cc8f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc8f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc8f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a0f42facd2decef4d1ebd6dac8233368"></a>

### [`008cb964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb964.md) → [`008cc910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc910.md) FUN_008cc910

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
      "unmatched:008cb96c",
      "DATA",
      [
        "storage",
        "00c83e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cc918",
      "DATA",
      [
        "storage",
        "00c84e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb964 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008cb968 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 008cb968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cb96c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008cb96c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0ebfbe15cf734d469f09b37d97838788"></a>

### [`008cb984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb984.md) → [`008cc930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc930.md) FUN_008cc930

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.98% / 新版 93.98%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc970",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb9c4",
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
      "definition_site": "008ccae0",
      "incomplete_value": true,
      "site": "008ccae8",
      "value": [
        "live",
        "register:40a0:8"
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
        "008cbb10"
      ],
      [
        "FALL_THROUGH",
        "008ccabc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008ccabc",
      "incomplete_value": true,
      "site": "008ccac0",
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
      "definition_site": "008cbb10",
      "incomplete_value": true,
      "site": "008cbb14",
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
    "ordinal": 25,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cb9b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:008cb9c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc978"
      ]
    ],
    [
      "008cc970",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008cc964",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008cc96c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc978"
      ]
    ],
    [
      "008cc970",
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
- 008cb9c4 ["INT_ADD", "register:40f0:8", ["const:8cb9c4:8", "const:4:8"]]
- 008cb9c4 ["CALL", null, ["ram:47ad34:8"]]
+ 008cc970 ["INT_ADD", "register:40f0:8", ["const:8cc970:8", "const:4:8"]]
+ 008cc970 ["CALL", null, ["ram:47b054:8"]]
- 008cbb3c ["INT_ADD", "register:40f0:8", ["const:8cbb3c:8", "const:4:8"]]
- 008cbb3c ["CALL", null, ["callee:008b7ea8:8"]]
+ 008ccae8 ["INT_ADD", "register:40f0:8", ["const:8ccae8:8", "const:4:8"]]
+ 008ccae8 ["CALL", null, ["callee:008b7ea8:8"]]
- 008cb9a8 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 008cc954 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-3a91e4902b45cfa99d4f11ede3df47a5"></a>

### [`008cbc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc44.md) → [`008ccbf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccbf0.md) FUN_008ccbf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008bdb58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bd/008bdb58.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008beb04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008be/008beb04.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cbc44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cbc50",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008cbc54",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "008ccbf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ccbfc",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "008ccc00",
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
- 008cbc44 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008cbc44 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008cbc44 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008cbc44 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008cbc48 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008cbc4c ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-77050fd7892d5f9626f96373e079dd80"></a>

### [`008cbc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc5c.md) → [`008ccc08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc08.md) FUN_008ccc08

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
      "unmatched:008cbc80",
      "DATA",
      [
        "storage",
        "00c83eb8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008cbc84",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cbc88",
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
      "008ccc2c",
      "DATA",
      [
        "storage",
        "00c84e88",
        null,
        "undefined *"
      ]
    ],
    [
      "008ccc30",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ccc34",
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
- 008cbc70 ["INT_ADD", "register:40f0:8", ["const:8cbc70:8", "const:4:8"]]
- 008cbc70 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ccc1c ["INT_ADD", "register:40f0:8", ["const:8ccc1c:8", "const:4:8"]]
+ 008ccc1c ["CALL", null, ["callee:00c58f30:8"]]
- 008cbc78 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ccc24 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cbc7c ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 008cbc7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cbc7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cbc7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c11f70827e2f0eae4abe37a97b108cfa"></a>

### [`008cbc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc90.md) → [`008ccc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc3c.md) FUN_008ccc3c

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
      "unmatched:008cbc9c",
      "DATA",
      [
        "storage",
        "00c83eb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ccc48",
      "DATA",
      [
        "storage",
        "00c84e88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbc90 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008cbc90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008cbc94 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008cbc98 ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 008cbc98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cbc98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cbc98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-695642282e7e861ec51bde26f65c87d8"></a>

### [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) → [`008ccc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccc58.md) FUN_008ccc58

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ccc90",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cbce4",
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
      "site": "008ccc9c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cbcf0",
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
      "008ccc90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ccc9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cccf0",
      "DATA",
      [
        "storage",
        "0044ded0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ccc90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ccc9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ccd84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ccefc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbce4 ["INT_ADD", "register:40f0:8", ["const:8cbce4:8", "const:4:8"]]
- 008cbce4 ["CALL", null, ["ram:47ad34:8"]]
+ 008ccc90 ["INT_ADD", "register:40f0:8", ["const:8ccc90:8", "const:4:8"]]
+ 008ccc90 ["CALL", null, ["ram:47b054:8"]]
- 008cbcf0 ["INT_ADD", "register:40f0:8", ["const:8cbcf0:8", "const:4:8"]]
- 008cbcf0 ["CALL", null, ["ram:47ad34:8"]]
+ 008ccc9c ["INT_ADD", "register:40f0:8", ["const:8ccc9c:8", "const:4:8"]]
+ 008ccc9c ["CALL", null, ["ram:47b054:8"]]
- 008cbd20 ["INT_ADD", "register:40f0:8", ["const:8cbd20:8", "const:4:8"]]
- 008cbd20 ["CALL", null, ["callee:008524fc:8"]]
+ 008ccccc ["INT_ADD", "register:40f0:8", ["const:8ccccc:8", "const:4:8"]]
+ 008ccccc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c281c71cdccd7692816ba457ac958d48"></a>

### [`008cbf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbf88.md) → [`008ccf34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccf34.md) FUN_008ccf34

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
      "unmatched:008cbfac",
      "DATA",
      [
        "storage",
        "00c83f38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008cbfb0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cbfb4",
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
      "008ccf58",
      "DATA",
      [
        "storage",
        "00c84f08",
        null,
        "undefined *"
      ]
    ],
    [
      "008ccf5c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008ccf60",
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
- 008cbf9c ["INT_ADD", "register:40f0:8", ["const:8cbf9c:8", "const:4:8"]]
- 008cbf9c ["CALL", null, ["callee:00c58f30:8"]]
+ 008ccf48 ["INT_ADD", "register:40f0:8", ["const:8ccf48:8", "const:4:8"]]
+ 008ccf48 ["CALL", null, ["callee:00c58f30:8"]]
- 008cbfa4 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008ccf50 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cbfa8 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008cbfa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cbfa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cbfa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6506152bb43fadd9795a2f6c8fec2a99"></a>

### [`008cbfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbfbc.md) → [`008ccf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccf68.md) FUN_008ccf68

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
      "unmatched:008cbfc8",
      "DATA",
      [
        "storage",
        "00c83f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ccf74",
      "DATA",
      [
        "storage",
        "00c84f08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbfbc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008cbfbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008cbfc0 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008cbfc4 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008cbfc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cbfc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cbfc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-664c696bac5ed4f18654b1e41aa216e9"></a>

### [`008cbfd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbfd8.md) → [`008ccf84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008ccf84.md) FUN_008ccf84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.65% / 新版 67.65%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd03c",
      "incomplete_value": true,
      "site": "008cd050",
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
      "definition_site": "008cd040",
      "incomplete_value": true,
      "site": "008cd050",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008cd24c",
      "incomplete_value": true,
      "site": "008cd254",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_XOR",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:1:4"
              ]
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
      "unmatched:008cbfdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ccfd0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cc330"
      ]
    ],
    [
      "unmatched:008cc034",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ccf88",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ccfd0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cd2dc"
      ]
    ],
    [
      "008ccfe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc0a4 ["INT_ADD", "register:40f0:8", ["const:8cc0a4:8", "const:4:8"]]
- 008cc0a4 ["CALL", null, ["callee:00c590a0:8"]]
+ 008cd050 ["INT_ADD", "register:40f0:8", ["const:8cd050:8", "const:4:8"]]
+ 008cd050 ["CALL", null, ["callee:00c590a0:8"]]
- 008cc2a8 ["INT_ADD", "register:40f0:8", ["const:8cc2a8:8", "const:4:8"]]
- 008cc2a8 ["CALL", null, ["callee:00a47c00:8"]]
+ 008cd254 ["INT_ADD", "register:40f0:8", ["const:8cd254:8", "const:4:8"]]
+ 008cd254 ["CALL", null, ["callee:00a47c00:8"]]
- 008cbfd8 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
~~~


<a id="compare-d19ad2dcb182decf05801148c2ecb667"></a>

### [`008cc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc400.md) → [`008cd3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd3ac.md) FUN_008cd3ac

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
      "unmatched:008cc400",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc404",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc424",
      "DATA",
      [
        "storage",
        "00c83fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cd3ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008cd3b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cd3d0",
      "DATA",
      [
        "storage",
        "00c84f88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc400 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008cc400 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008cc400 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008cc400 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008cc404 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008cc404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008cc408 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-edacc5030cb0e7c318d0465b94204255"></a>

### [`008cc434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc434.md) → [`008cd3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd3e0.md) FUN_008cd3e0

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
      "unmatched:008cc440",
      "DATA",
      [
        "storage",
        "00c83fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cd3ec",
      "DATA",
      [
        "storage",
        "00c84f88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc434 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008cc434 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008cc438 ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008cc43c ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 008cc43c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cc43c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cc43c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9a860de9e154adba805272c9af510b51"></a>

### [`008cc450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc450.md) → [`008cd3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd3fc.md) FUN_008cd3fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008c05b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c05b0.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cd41c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc470",
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
      "008cd414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cc47c"
      ]
    ],
    [
      "008cd41c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:008cc47c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008cd414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cd428"
      ]
    ],
    [
      "008cd41c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008cd428",
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
- 008cc470 ["INT_ADD", "register:40f0:8", ["const:8cc470:8", "const:4:8"]]
- 008cc470 ["CALL", null, ["ram:47ad34:8"]]
+ 008cd41c ["INT_ADD", "register:40f0:8", ["const:8cd41c:8", "const:4:8"]]
+ 008cd41c ["CALL", null, ["ram:47b054:8"]]
- 008cc460 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
+ 008cd40c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 008cc468 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 008cd414 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-2a5dd4f873f69c1f5d39709f86cedc44"></a>

### [`008cc4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc4cc.md) → [`008cd478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd478.md) FUN_008cd478

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
      "definition_site": "008cd47c",
      "incomplete_value": false,
      "site": "008cd480",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cc4d0",
      "incomplete_value": false,
      "site": "008cc4d4",
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
            "const:38:8"
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
      "008cd480",
      "DATA",
      [
        "storage",
        "00c84038",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008cd480",
      "DATA",
      [
        "storage",
        "00c85008",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc4cc ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008cd478 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cc4d0 ["COPY", "tmp:0:8", ["const:38:8"]]
- 008cc4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cc4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cc4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cd47c ["COPY", "tmp:0:8", ["const:8:8"]]
+ 008cd47c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cd47c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cd47c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6aab70d38d534ae7ab04e93e81338a57"></a>

### [`008cc4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc4dc.md) → [`008cd488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd488.md) FUN_008cd488

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
      "unmatched:008cc4dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc4e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc4f4",
      "DATA",
      [
        "storage",
        "00c84038",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008cd488",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008cd48c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cd4a0",
      "DATA",
      [
        "storage",
        "00c85008",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc4dc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008cc4dc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008cc4dc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008cc4dc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008cc4e0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008cc4e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008cc4e4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e22a87ab2ff2b40999f48b9c81f629ec"></a>

### [`008cc514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc514.md) → [`008cd4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd4c0.md) FUN_008cd4c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008cc654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md) [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008cd600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd600.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cc5e8",
      "incomplete_value": true,
      "site": "008cc5f0",
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
      "unmatched:008cc604",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008cd5b0",
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
- 008cc5f0 ["INT_ADD", "register:40f0:8", ["const:8cc5f0:8", "const:4:8"]]
- 008cc5f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 008cd59c ["INT_ADD", "register:40f0:8", ["const:8cd59c:8", "const:4:8"]]
+ 008cd59c ["CALL", null, ["callee:00c54d90:8"]]
- 008cc528 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008cc544 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008cc544 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 008cd4f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 008cd4f0 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
~~~


<a id="compare-0a49e0031d724a9c98249be7af7cbc08"></a>

### [`008cc654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc654.md) → [`008cd600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd600.md) FUN_008cd600

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008cc514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc514.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`008cd4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd4c0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd60c",
      "incomplete_value": false,
      "site": "008cd610",
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
      "definition_site": "008cc660",
      "incomplete_value": false,
      "site": "008cc664",
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
      "008cd60c",
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
      "008cd60c",
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
- 008cc664 ["INT_ADD", "register:40f0:8", ["const:8cc664:8", "const:4:8"]]
- 008cc664 ["CALL", null, ["callee:0043bad8:8"]]
+ 008cd610 ["INT_ADD", "register:40f0:8", ["const:8cd610:8", "const:4:8"]]
+ 008cd610 ["CALL", null, ["callee:0043bad8:8"]]
- 008cc65c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008cd608 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008cc660 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008cc660 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008cc660 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008cc660 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008cd60c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008cd60c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008cd60c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008cd60c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c858e76614d0c356b3571f849a1db397"></a>

### [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) → [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) FUN_008cd614

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) · 呼出先 6件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md) [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) [`008cdac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cdac4.md) · 呼出先 6件 [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) [`008cdac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cdac4.md) [`008cde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cde50.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.51% / 新版 83.51%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 4件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd6d8",
      "incomplete_value": true,
      "site": "008cd6ec",
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
      "definition_site": "008cd6dc",
      "incomplete_value": true,
      "site": "008cd6ec",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "008cc748",
      "incomplete_value": true,
      "site": "008cc760",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:008cc678",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc67c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc680",
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
      "008cd624",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008cd628",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008cd62c",
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
- 008cc740 ["INT_ADD", "register:40f0:8", ["const:8cc740:8", "const:4:8"]]
- 008cc740 ["CALL", null, ["local:b0:8"]]
+ 008cd6ec ["INT_ADD", "register:40f0:8", ["const:8cd6ec:8", "const:4:8"]]
+ 008cd6ec ["CALL", null, ["local:b0:8"]]
- 008cc760 ["INT_ADD", "register:40f0:8", ["const:8cc760:8", "const:4:8"]]
- 008cc760 ["CALL", null, ["local:b0:8"]]
+ 008cd70c ["INT_ADD", "register:40f0:8", ["const:8cd70c:8", "const:4:8"]]
+ 008cd70c ["CALL", null, ["local:b0:8"]]
- 008cc8ac ["INT_ADD", "register:40f0:8", ["const:8cc8ac:8", "const:4:8"]]
- 008cc8ac ["CALL", null, ["callee:00c58f20:8"]]
+ 008cd858 ["INT_ADD", "register:40f0:8", ["const:8cd858:8", "const:4:8"]]
+ 008cd858 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-1ca5762ac064836397afeca6ca002ae5"></a>

### [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) → [`008cdac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cdac4.md) FUN_008cdac4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) · 呼出先 3件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) · 呼出先 3件 [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.96% / 新版 73.96%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 10件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 21件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cdc48",
      "incomplete_value": true,
      "site": "008cdc4c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008cdce0",
      "incomplete_value": true,
      "site": "008cdce4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cdcd8",
      "incomplete_value": true,
      "site": "008cdce4",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ccb18",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ccb1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008cdb10",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008ccd04"
      ]
    ]
  ],
  "added": [
    [
      "008cdac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008cdac8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008cdb10",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cdcb0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ccca0 ["INT_ADD", "register:40f0:8", ["const:8ccca0:8", "const:4:8"]]
- 008ccca0 ["CALL", null, ["callee:00c58f20:8"]]
+ 008cdc4c ["INT_ADD", "register:40f0:8", ["const:8cdc4c:8", "const:4:8"]]
+ 008cdc4c ["CALL", null, ["callee:00c58f20:8"]]
- 008ccd38 ["INT_ADD", "register:40f0:8", ["const:8ccd38:8", "const:4:8"]]
- 008ccd38 ["CALL", null, ["callee:008cd614:8"]]
+ 008cdce4 ["INT_ADD", "register:40f0:8", ["const:8cdce4:8", "const:4:8"]]
+ 008cdce4 ["CALL", null, ["callee:008cd614:8"]]
- 008ccd50 ["INT_ADD", "register:40f0:8", ["const:8ccd50:8", "const:4:8"]]
- 008ccd50 ["CALL", null, ["callee:008cd614:8"]]
+ 008cdcfc ["INT_ADD", "register:40f0:8", ["const:8cdcfc:8", "const:4:8"]]
+ 008cdcfc ["CALL", null, ["callee:008cd614:8"]]
~~~


<a id="compare-fabae1866efefdad2da674797b634d6f"></a>

### [`008cce18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cce18.md) → [`008cddc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cddc4.md) FUN_008cddc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cce3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cde40"
      ]
    ],
    [
      "unmatched:008cce5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cde40"
      ]
    ]
  ],
  "added": [
    [
      "008cdde8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cde40"
      ]
    ],
    [
      "008cde08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cde40"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cce20 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008cce20 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 008cddcc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008cddcc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 008cce30 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008cce34 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008cce34 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b8260cb9d580505fe87cb8280307fa8e"></a>

### [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) → [`008cde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cde50.md) FUN_008cde50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) · 呼出先 3件 [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`008cd614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cd614.md) [`008cde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cde50.md) · 呼出先 3件 [`008cde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cd/008cde50.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.35% / 新版 97.35%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cd46c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce464"
      ]
    ],
    [
      "unmatched:008cd498",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce408"
      ]
    ],
    [
      "unmatched:008cd4a8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008ce418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce464"
      ]
    ],
    [
      "008ce444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce408"
      ]
    ],
    [
      "008ce454",
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
- 008ccea4 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008ccea4 ["CBRANCH", null, ["local:b90:8", "tmp:0:1"]]
+ 008cde50 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008cde50 ["CBRANCH", null, ["local:b92:8", "tmp:0:1"]]
- 008cced4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008cced4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008cced4 ["CBRANCH", null, ["local:b39:8", "tmp:1:1"]]
+ 008cde80 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cde80 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008cde80 ["CBRANCH", null, ["local:b40:8", "tmp:1:1"]]
- 008ccedc ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008ccedc ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008ccedc ["CBRANCH", null, ["local:b39:8", "tmp:1:1"]]
+ 008cde88 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cde88 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008cde88 ["CBRANCH", null, ["local:b40:8", "tmp:1:1"]]
~~~


<a id="compare-1b0994778b00edeb8d91dab34f8a7ce6"></a>

### [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) → [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) FUN_008ce4cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) · 呼出先 7件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 3件 [`008c4860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c4860.md) [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) [`008ceb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceb30.md) · 呼出先 7件 [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) [`008ce9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce9b4.md) [`008ceb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceb30.md) [`008ceec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceec4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ce5b4",
      "incomplete_value": true,
      "site": "008ce5c4",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "008cd608",
      "incomplete_value": true,
      "site": "008cd618",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ce7b0",
      "value": [
        "leaf",
        "ram:8ce9b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cd804",
      "value": [
        "leaf",
        "ram:8cda08:8"
      ]
    },
    "ordinal": 16,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cd54c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cd550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce530"
      ]
    ],
    [
      "unmatched:008cd558",
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
      "008ce4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008ce4fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce530"
      ]
    ],
    [
      "008ce504",
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
- 008cd618 ["INT_ADD", "register:40f0:8", ["const:8cd618:8", "const:4:8"]]
- 008cd618 ["CALL", null, ["local:b0:8"]]
+ 008ce5c4 ["INT_ADD", "register:40f0:8", ["const:8ce5c4:8", "const:4:8"]]
+ 008ce5c4 ["CALL", null, ["local:b0:8"]]
- 008cd804 ["INT_ADD", "register:40f0:8", ["const:8cd804:8", "const:4:8"]]
- 008cd804 ["CALL", null, ["ram:8cda08:8"]]
+ 008ce7b0 ["INT_ADD", "register:40f0:8", ["const:8ce7b0:8", "const:4:8"]]
+ 008ce7b0 ["CALL", null, ["ram:8ce9b4:8"]]
- 008cd54c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008cd54c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008cd54c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-f360b6d242d04ada48178756a228a934"></a>

### [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) → [`008ceb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceb30.md) FUN_008ceb30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) · 呼出先 5件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) · 呼出先 5件 [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) [`008ce9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce9b4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cec54",
      "value": [
        "leaf",
        "ram:8ce9b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cdca8",
      "value": [
        "leaf",
        "ram:8cda08:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cdd94",
      "incomplete_value": true,
      "site": "008cddb4",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ced5c",
      "incomplete_value": true,
      "site": "008ced60",
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
              [
                "live",
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cddb0",
      "incomplete_value": true,
      "site": "008cddb4",
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
                "const:4:8"
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
      "unmatched:008cdc08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008cda08"
      ]
    ],
    [
      "unmatched:008cdc0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ceddc"
      ]
    ],
    [
      "unmatched:008cdc60",
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
      "008cebb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008ce9b4"
      ]
    ],
    [
      "008cebb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ceddc"
      ]
    ],
    [
      "008cec0c",
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
- 008cdca8 ["INT_ADD", "register:40f0:8", ["const:8cdca8:8", "const:4:8"]]
- 008cdca8 ["CALL", null, ["ram:8cda08:8"]]
+ 008cec54 ["INT_ADD", "register:40f0:8", ["const:8cec54:8", "const:4:8"]]
+ 008cec54 ["CALL", null, ["ram:8ce9b4:8"]]
- 008cddb4 ["INT_ADD", "register:40f0:8", ["const:8cddb4:8", "const:4:8"]]
- 008cddb4 ["CALL", null, ["callee:008ce4cc:8"]]
+ 008ced60 ["INT_ADD", "register:40f0:8", ["const:8ced60:8", "const:4:8"]]
+ 008ced60 ["CALL", null, ["callee:008ce4cc:8"]]
- 008cddcc ["INT_ADD", "register:40f0:8", ["const:8cddcc:8", "const:4:8"]]
- 008cddcc ["CALL", null, ["callee:008ce4cc:8"]]
+ 008ced78 ["INT_ADD", "register:40f0:8", ["const:8ced78:8", "const:4:8"]]
+ 008ced78 ["CALL", null, ["callee:008ce4cc:8"]]
~~~


<a id="compare-c84fba6abba4af6a78eea7f893a0e2dc"></a>

### [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) → [`008ceec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceec4.md) FUN_008ceec4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) · 呼出先 5件 [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`008ce4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce4cc.md) [`008ceec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceec4.md) · 呼出先 5件 [`008ce9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ce9b4.md) [`008ceec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ce/008ceec4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.12% / 新版 96.12%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 5件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cef3c",
      "value": [
        "leaf",
        "ram:8ce9b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cdf90",
      "value": [
        "leaf",
        "ram:8cda08:8"
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
      "site": "008cefa8",
      "value": [
        "leaf",
        "ram:8ce9b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cdffc",
      "value": [
        "leaf",
        "ram:8cda08:8"
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
      "site": "008cf140",
      "value": [
        "leaf",
        "ram:8ce9b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ce194",
      "value": [
        "leaf",
        "ram:8cda08:8"
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
      "008cef3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008cda08"
      ]
    ],
    [
      "008cefa8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008cda08"
      ]
    ],
    [
      "unmatched:008ce06c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cf054"
      ]
    ]
  ],
  "added": [
    [
      "008cef3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008ce9b4"
      ]
    ],
    [
      "008cefa8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008ce9b4"
      ]
    ],
    [
      "008cf018",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cf054"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cdf90 ["INT_ADD", "register:40f0:8", ["const:8cdf90:8", "const:4:8"]]
- 008cdf90 ["CALL", null, ["ram:8cda08:8"]]
+ 008cef3c ["INT_ADD", "register:40f0:8", ["const:8cef3c:8", "const:4:8"]]
+ 008cef3c ["CALL", null, ["ram:8ce9b4:8"]]
- 008cdffc ["INT_ADD", "register:40f0:8", ["const:8cdffc:8", "const:4:8"]]
- 008cdffc ["CALL", null, ["ram:8cda08:8"]]
+ 008cefa8 ["INT_ADD", "register:40f0:8", ["const:8cefa8:8", "const:4:8"]]
+ 008cefa8 ["CALL", null, ["ram:8ce9b4:8"]]
- 008ce194 ["INT_ADD", "register:40f0:8", ["const:8ce194:8", "const:4:8"]]
- 008ce194 ["CALL", null, ["ram:8cda08:8"]]
+ 008cf140 ["INT_ADD", "register:40f0:8", ["const:8cf140:8", "const:4:8"]]
+ 008cf140 ["CALL", null, ["ram:8ce9b4:8"]]
~~~


<a id="compare-968ab9ad8d251f019dc230d459e163b1"></a>

### [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) → [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) FUN_008cf5c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008ceac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ceac8.md) · 呼出先 6件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008ceac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ceac8.md) [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) [`008cfa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfa74.md) · 呼出先 6件 [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) [`008cfa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfa74.md) [`008cfd74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfd74.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cf844",
      "incomplete_value": true,
      "site": "008cf848",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "008ce898",
      "incomplete_value": true,
      "site": "008ce89c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:4:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cf904",
      "incomplete_value": true,
      "site": "008cf908",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008ce86c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ce86c",
      "DATA",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ce8c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cf910"
      ]
    ]
  ],
  "added": [
    [
      "008cf818",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "008cf818",
      "DATA",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008cf870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cf910"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ce89c ["INT_ADD", "register:40f0:8", ["const:8ce89c:8", "const:4:8"]]
- 008ce89c ["CALL", null, ["callee:008cfa74:8"]]
+ 008cf848 ["INT_ADD", "register:40f0:8", ["const:8cf848:8", "const:4:8"]]
+ 008cf848 ["CALL", null, ["callee:008cfa74:8"]]
- 008ce95c ["INT_ADD", "register:40f0:8", ["const:8ce95c:8", "const:4:8"]]
- 008ce95c ["CALL", null, ["callee:00c58f20:8"]]
+ 008cf908 ["INT_ADD", "register:40f0:8", ["const:8cf908:8", "const:4:8"]]
+ 008cf908 ["CALL", null, ["callee:00c58f20:8"]]
- 008ce658 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ce658 ["CBRANCH", null, ["local:b61:8", "tmp:0:1"]]
+ 008cf604 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008cf604 ["CBRANCH", null, ["local:b63:8", "tmp:0:1"]]
~~~


<a id="compare-e099b91872279d53def1a75aa7f102c2"></a>

### [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) → [`008cfd74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfd74.md) FUN_008cfd74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) · 呼出先 3件 [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) [`008cfd74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfd74.md) · 呼出先 3件 [`008cfd74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfd74.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.12% / 新版 90.12%

優先判定に残った影響 `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cee9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfe24"
      ]
    ],
    [
      "unmatched:008ceee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfecc"
      ]
    ],
    [
      "unmatched:008cef70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfee0"
      ]
    ]
  ],
  "added": [
    [
      "008cfe48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfe24"
      ]
    ],
    [
      "008cfe90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfecc"
      ]
    ],
    [
      "008cff1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cfee0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cee44 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008cee44 ["CBRANCH", null, ["local:b32:8", "tmp:0:1"]]
+ 008cfdf0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cfdf0 ["CBRANCH", null, ["local:b34:8", "tmp:0:1"]]
- 008cee60 ["INT_LEFT", "tmp:0:8", ["register:40c8:8", "const:4:4"]]
- 008cee60 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 008cee60 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:1:8"]]
- 008cee60 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:1:8"]]
- 008cee64 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 008cfe10 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
~~~


<a id="compare-76f67b55fa580562ccf9a1382b240afc"></a>

### [`008cf448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf448.md) → [`008d03f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d03f4.md) FUN_008d03f4

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
      "definition_site": "008d0418",
      "incomplete_value": false,
      "site": "008d0418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf46c",
      "incomplete_value": false,
      "site": "008cf46c",
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
            "const:88:8"
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
      "008d0418",
      "DATA",
      [
        "storage",
        "00c84088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0418",
      "DATA",
      [
        "storage",
        "00c85058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf45c ["INT_ADD", "register:40f0:8", ["const:8cf45c:8", "const:4:8"]]
- 008cf45c ["CALL", null, ["callee:00c58f30:8"]]
+ 008d0408 ["INT_ADD", "register:40f0:8", ["const:8d0408:8", "const:4:8"]]
+ 008d0408 ["CALL", null, ["callee:00c58f30:8"]]
- 008cf464 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0410 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf468 ["COPY", "tmp:0:8", ["const:88:8"]]
- 008cf468 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf468 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf468 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0414 ["COPY", "tmp:0:8", ["const:58:8"]]
+ 008d0414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a68977acac4e2cbde18a7b5a77a7a72"></a>

### [`008cf498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf498.md) → [`008d0444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0444.md) FUN_008d0444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008bf91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf91c.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c08c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c08c8.md) [`008c38c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c38c0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d0464",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf4b8",
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
      "site": "008d0470",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf4c4",
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
      "008d0464",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d0470",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008d0464",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d0470",
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
- 008cf4b8 ["INT_ADD", "register:40f0:8", ["const:8cf4b8:8", "const:4:8"]]
- 008cf4b8 ["CALL", null, ["ram:47ad34:8"]]
+ 008d0464 ["INT_ADD", "register:40f0:8", ["const:8d0464:8", "const:4:8"]]
+ 008d0464 ["CALL", null, ["ram:47b054:8"]]
- 008cf4c4 ["INT_ADD", "register:40f0:8", ["const:8cf4c4:8", "const:4:8"]]
- 008cf4c4 ["CALL", null, ["ram:47ad34:8"]]
+ 008d0470 ["INT_ADD", "register:40f0:8", ["const:8d0470:8", "const:4:8"]]
+ 008d0470 ["CALL", null, ["ram:47b054:8"]]
- 008cf4e0 ["INT_ADD", "register:40f0:8", ["const:8cf4e0:8", "const:4:8"]]
- 008cf4e0 ["CALL", null, ["callee:008c08c8:8"]]
+ 008d048c ["INT_ADD", "register:40f0:8", ["const:8d048c:8", "const:4:8"]]
+ 008d048c ["CALL", null, ["callee:008c08c8:8"]]
~~~


<a id="compare-77757e9697e521ad17c4c3f16d3edd72"></a>

### [`008cf524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf524.md) → [`008d04d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d04d0.md) FUN_008d04d0

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
      "definition_site": "008d04f4",
      "incomplete_value": false,
      "site": "008d04f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf548",
      "incomplete_value": false,
      "site": "008cf548",
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
            "const:108:8"
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
      "008d04f4",
      "DATA",
      [
        "storage",
        "00c84108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d04f4",
      "DATA",
      [
        "storage",
        "00c850d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf538 ["INT_ADD", "register:40f0:8", ["const:8cf538:8", "const:4:8"]]
- 008cf538 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d04e4 ["INT_ADD", "register:40f0:8", ["const:8d04e4:8", "const:4:8"]]
+ 008d04e4 ["CALL", null, ["callee:00c58f30:8"]]
- 008cf540 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d04ec ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf544 ["COPY", "tmp:0:8", ["const:108:8"]]
- 008cf544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d04f0 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 008d04f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d04f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d04f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0838a6f26fe2d97e7006161fe5b25f46"></a>

### [`008cf714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf714.md) → [`008d06c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d06c0.md) FUN_008d06c0

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
      "definition_site": "008d06d4",
      "incomplete_value": false,
      "site": "008d06d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf728",
      "incomplete_value": false,
      "site": "008cf72c",
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
            "const:188:8"
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
      "008d06d8",
      "DATA",
      [
        "storage",
        "00c84188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d06d8",
      "DATA",
      [
        "storage",
        "00c85158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf720 ["INT_ADD", "register:40f0:8", ["const:8cf720:8", "const:4:8"]]
- 008cf720 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d06cc ["INT_ADD", "register:40f0:8", ["const:8d06cc:8", "const:4:8"]]
+ 008d06cc ["CALL", null, ["callee:00c58f30:8"]]
- 008cf724 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d06d0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf728 ["COPY", "tmp:0:8", ["const:188:8"]]
- 008cf728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d06d4 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 008d06d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d06d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d06d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1dd6119c0f65faf17b98276d91cbdbae"></a>

### [`008cf750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf750.md) → [`008d06fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d06fc.md) FUN_008d06fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c38c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c38c0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d071c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf770",
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
      "site": "008d0728",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf77c",
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
      "008d071c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d0728",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d074c",
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
      "008d071c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d0728",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d074c",
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
- 008cf770 ["INT_ADD", "register:40f0:8", ["const:8cf770:8", "const:4:8"]]
- 008cf770 ["CALL", null, ["ram:47ad34:8"]]
+ 008d071c ["INT_ADD", "register:40f0:8", ["const:8d071c:8", "const:4:8"]]
+ 008d071c ["CALL", null, ["ram:47b054:8"]]
- 008cf77c ["INT_ADD", "register:40f0:8", ["const:8cf77c:8", "const:4:8"]]
- 008cf77c ["CALL", null, ["ram:47ad34:8"]]
+ 008d0728 ["INT_ADD", "register:40f0:8", ["const:8d0728:8", "const:4:8"]]
+ 008d0728 ["CALL", null, ["ram:47b054:8"]]
- 008cf790 ["INT_ADD", "register:40f0:8", ["const:8cf790:8", "const:4:8"]]
- 008cf790 ["CALL", null, ["callee:008524fc:8"]]
+ 008d073c ["INT_ADD", "register:40f0:8", ["const:8d073c:8", "const:4:8"]]
+ 008d073c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-813c001a641c910a5cfe89adcb2d00d6"></a>

### [`008cf7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf7e4.md) → [`008d0790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0790.md) FUN_008d0790

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
      "definition_site": "008d07a4",
      "incomplete_value": false,
      "site": "008d07a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf7f8",
      "incomplete_value": false,
      "site": "008cf7fc",
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
            "const:208:8"
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
      "008d07a8",
      "DATA",
      [
        "storage",
        "00c84208",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d07a8",
      "DATA",
      [
        "storage",
        "00c851d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf7f0 ["INT_ADD", "register:40f0:8", ["const:8cf7f0:8", "const:4:8"]]
- 008cf7f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d079c ["INT_ADD", "register:40f0:8", ["const:8d079c:8", "const:4:8"]]
+ 008d079c ["CALL", null, ["callee:00c58f30:8"]]
- 008cf7f4 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d07a0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf7f8 ["COPY", "tmp:0:8", ["const:208:8"]]
- 008cf7f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf7f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf7f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d07a4 ["COPY", "tmp:0:8", ["const:1d8:8"]]
+ 008d07a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d07a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d07a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0862eebb6d86ea455707945555a04cb"></a>

### [`008cf820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf820.md) → [`008d07cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d07cc.md) FUN_008d07cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d07e8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf83c",
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
      "008d07e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008d07e8",
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
- 008cf83c ["INT_ADD", "register:40f0:8", ["const:8cf83c:8", "const:4:8"]]
- 008cf83c ["CALL", null, ["ram:47ad34:8"]]
+ 008d07e8 ["INT_ADD", "register:40f0:8", ["const:8d07e8:8", "const:4:8"]]
+ 008d07e8 ["CALL", null, ["ram:47b054:8"]]
- 008cf848 ["INT_ADD", "register:40f0:8", ["const:8cf848:8", "const:4:8"]]
- 008cf848 ["CALL", null, ["callee:0047d134:8"]]
+ 008d07f4 ["INT_ADD", "register:40f0:8", ["const:8d07f4:8", "const:4:8"]]
+ 008d07f4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-92db54eac71c8afee542c781bd077ae0"></a>

### [`008cf88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf88c.md) → [`008d0838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0838.md) FUN_008d0838

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
      "definition_site": "008d084c",
      "incomplete_value": false,
      "site": "008d0850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf8a0",
      "incomplete_value": false,
      "site": "008cf8a4",
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
            "const:288:8"
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
      "008d0850",
      "DATA",
      [
        "storage",
        "00c84288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0850",
      "DATA",
      [
        "storage",
        "00c85258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf898 ["INT_ADD", "register:40f0:8", ["const:8cf898:8", "const:4:8"]]
- 008cf898 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d0844 ["INT_ADD", "register:40f0:8", ["const:8d0844:8", "const:4:8"]]
+ 008d0844 ["CALL", null, ["callee:00c58f30:8"]]
- 008cf89c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0848 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf8a0 ["COPY", "tmp:0:8", ["const:288:8"]]
- 008cf8a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf8a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf8a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d084c ["COPY", "tmp:0:8", ["const:258:8"]]
+ 008d084c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d084c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d084c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a00a72dbcd6c59119d122e4c334cfe6"></a>

### [`008cf8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf8c8.md) → [`008d0874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0874.md) FUN_008d0874

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d0890",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf8e4",
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
      "008d0890",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008d0890",
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
- 008cf8e4 ["INT_ADD", "register:40f0:8", ["const:8cf8e4:8", "const:4:8"]]
- 008cf8e4 ["CALL", null, ["ram:47ad34:8"]]
+ 008d0890 ["INT_ADD", "register:40f0:8", ["const:8d0890:8", "const:4:8"]]
+ 008d0890 ["CALL", null, ["ram:47b054:8"]]
- 008cf8f0 ["INT_ADD", "register:40f0:8", ["const:8cf8f0:8", "const:4:8"]]
- 008cf8f0 ["CALL", null, ["callee:0047d134:8"]]
+ 008d089c ["INT_ADD", "register:40f0:8", ["const:8d089c:8", "const:4:8"]]
+ 008d089c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-6a369cecd2e26d1162455d9091934d69"></a>

### [`008cf934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf934.md) → [`008d08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d08e0.md) FUN_008d08e0

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
      "definition_site": "008d08f4",
      "incomplete_value": false,
      "site": "008d08f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf948",
      "incomplete_value": false,
      "site": "008cf94c",
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
            "const:308:8"
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
      "008d08f8",
      "DATA",
      [
        "storage",
        "00c84308",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d08f8",
      "DATA",
      [
        "storage",
        "00c852d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf940 ["INT_ADD", "register:40f0:8", ["const:8cf940:8", "const:4:8"]]
- 008cf940 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d08ec ["INT_ADD", "register:40f0:8", ["const:8d08ec:8", "const:4:8"]]
+ 008d08ec ["CALL", null, ["callee:00c58f30:8"]]
- 008cf944 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d08f0 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cf948 ["COPY", "tmp:0:8", ["const:308:8"]]
- 008cf948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d08f4 ["COPY", "tmp:0:8", ["const:2d8:8"]]
+ 008d08f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d08f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d08f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-973664bb45cd7afff5b3eb353d260445"></a>

### [`008cf970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf970.md) → [`008d091c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d091c.md) FUN_008d091c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008c38c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c38c0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d0a40",
      "incomplete_value": false,
      "site": "008d0a48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfa94",
      "incomplete_value": false,
      "site": "008cfa9c",
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
            "const:378:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d0954",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf9a8",
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
      "008d0954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d09dc",
      "DATA",
      [
        "storage",
        "0044deac",
        null,
        null
      ]
    ],
    [
      "008d0a0c",
      "DATA",
      [
        "storage",
        "0044deac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008d0954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008d0a48",
      "DATA",
      [
        "storage",
        "00c85348",
        null,
        "undefined *"
      ]
    ],
    [
      "008d0a84",
      "READ",
      [
        "storage",
        "00c85368",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf9a8 ["INT_ADD", "register:40f0:8", ["const:8cf9a8:8", "const:4:8"]]
- 008cf9a8 ["CALL", null, ["ram:47ad34:8"]]
+ 008d0954 ["INT_ADD", "register:40f0:8", ["const:8d0954:8", "const:4:8"]]
+ 008d0954 ["CALL", null, ["ram:47b054:8"]]
- 008cf9b4 ["INT_ADD", "register:40f0:8", ["const:8cf9b4:8", "const:4:8"]]
- 008cf9b4 ["CALL", null, ["callee:0047d134:8"]]
+ 008d0960 ["INT_ADD", "register:40f0:8", ["const:8d0960:8", "const:4:8"]]
+ 008d0960 ["CALL", null, ["callee:0047d134:8"]]
- 008cf9b8 ["INT_ADD", "register:40f0:8", ["const:8cf9b8:8", "const:4:8"]]
- 008cf9b8 ["CALL", null, ["callee:008524fc:8"]]
+ 008d0964 ["INT_ADD", "register:40f0:8", ["const:8d0964:8", "const:4:8"]]
+ 008d0964 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7b74ada7e8cd264b4b89461b711d5d02"></a>

### [`008cfb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfb7c.md) → [`008d0b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0b28.md) FUN_008d0b28

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
      "definition_site": "008d0b3c",
      "incomplete_value": false,
      "site": "008d0b40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfb90",
      "incomplete_value": false,
      "site": "008cfb94",
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
            "const:378:8"
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
      "008d0b40",
      "DATA",
      [
        "storage",
        "00c84378",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0b40",
      "DATA",
      [
        "storage",
        "00c85348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfb88 ["INT_ADD", "register:40f0:8", ["const:8cfb88:8", "const:4:8"]]
- 008cfb88 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d0b34 ["INT_ADD", "register:40f0:8", ["const:8d0b34:8", "const:4:8"]]
+ 008d0b34 ["CALL", null, ["callee:00c58f30:8"]]
- 008cfb8c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0b38 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cfb90 ["COPY", "tmp:0:8", ["const:378:8"]]
- 008cfb90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0b3c ["COPY", "tmp:0:8", ["const:348:8"]]
+ 008d0b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a9dc58d02a3e7ab5f80c824014f2eb3b"></a>

### [`008cfba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfba0.md) → [`008d0b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0b4c.md) FUN_008d0b4c

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
      "definition_site": "008d0b50",
      "incomplete_value": false,
      "site": "008d0b54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfba4",
      "incomplete_value": false,
      "site": "008cfba8",
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
            "const:378:8"
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
      "008d0b54",
      "DATA",
      [
        "storage",
        "00c84378",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0b54",
      "DATA",
      [
        "storage",
        "00c85348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfba0 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0b4c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cfba4 ["COPY", "tmp:0:8", ["const:378:8"]]
- 008cfba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0b50 ["COPY", "tmp:0:8", ["const:348:8"]]
+ 008d0b50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0b50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0b50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-496418636fa7b9ce80d461a34389b68b"></a>

### [`008cfc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfc70.md) → [`008d0c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0c1c.md) FUN_008d0c1c

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
      "definition_site": "008d0c28",
      "incomplete_value": false,
      "site": "008d0c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfc7c",
      "incomplete_value": false,
      "site": "008cfc80",
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
            "const:408:8"
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
      "008d0c2c",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0c2c",
      "DATA",
      [
        "storage",
        "00c853d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfc78 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d0c24 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008cfc7c ["COPY", "tmp:0:8", ["const:408:8"]]
- 008cfc7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d0c28 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 008d0c28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d0c28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d0c28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ed1061aec73baf1cecb6e0565c5ba0d5"></a>

### [`008cfc94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfc94.md) → [`008d0c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0c40.md) FUN_008d0c40

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
      "definition_site": "008d0c48",
      "incomplete_value": false,
      "site": "008d0c4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfc9c",
      "incomplete_value": false,
      "site": "008cfca0",
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
            "const:408:8"
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
      "008d0c4c",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0c4c",
      "DATA",
      [
        "storage",
        "00c853d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfc98 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008d0c44 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008cfc9c ["COPY", "tmp:0:8", ["const:408:8"]]
- 008cfc9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d0c48 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 008d0c48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d0c48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d0c48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008cfcc0 ["INT_ADD", "register:40f0:8", ["const:8cfcc0:8", "const:4:8"]]
- 008cfcc0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008d0c6c ["INT_ADD", "register:40f0:8", ["const:8d0c6c:8", "const:4:8"]]
+ 008d0c6c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cee122865f4a0ff090a38259f090cf45"></a>

### [`008cfcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfcd4.md) → [`008d0c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0c80.md) FUN_008d0c80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d0ca0",
      "incomplete_value": false,
      "site": "008d0ca8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfcf4",
      "incomplete_value": false,
      "site": "008cfcfc",
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
            "const:408:8"
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
      "008d0ca8",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0ca8",
      "DATA",
      [
        "storage",
        "00c853d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfcec ["INT_ADD", "register:40f0:8", ["const:8cfcec:8", "const:4:8"]]
- 008cfcec ["CALL", null, ["callee:00c58f30:8"]]
+ 008d0c98 ["INT_ADD", "register:40f0:8", ["const:8d0c98:8", "const:4:8"]]
+ 008d0c98 ["CALL", null, ["callee:00c58f30:8"]]
- 008cfcf0 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0c9c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cfcf4 ["COPY", "tmp:0:8", ["const:408:8"]]
- 008cfcf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfcf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfcf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0ca0 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 008d0ca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0ca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0ca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-148f46743af3cbd08346f2355b692282"></a>

### [`008cfd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfd8c.md) → [`008d0d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0d38.md) FUN_008d0d38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d0d4c",
      "incomplete_value": false,
      "site": "008d0d54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfda0",
      "incomplete_value": false,
      "site": "008cfda8",
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
            "const:408:8"
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
      "008d0d54",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0d54",
      "DATA",
      [
        "storage",
        "00c853d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfd9c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d0d48 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008cfda0 ["COPY", "tmp:0:8", ["const:408:8"]]
- 008cfda0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfda0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfda0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0d4c ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 008d0d4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0d4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0d4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cfdd4 ["INT_ADD", "register:40f0:8", ["const:8cfdd4:8", "const:4:8"]]
- 008cfdd4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d0d80 ["INT_ADD", "register:40f0:8", ["const:8d0d80:8", "const:4:8"]]
+ 008d0d80 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-bd64a9087d64683a4aeee1499afdc034"></a>

### [`008d0590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0590.md) → [`008d153c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d153c.md) FUN_008d153c

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
      "definition_site": "008d1550",
      "incomplete_value": false,
      "site": "008d1554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d05a4",
      "incomplete_value": false,
      "site": "008d05a8",
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
            "const:488:8"
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
      "008d1554",
      "DATA",
      [
        "storage",
        "00c84488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d1554",
      "DATA",
      [
        "storage",
        "00c85458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d059c ["INT_ADD", "register:40f0:8", ["const:8d059c:8", "const:4:8"]]
- 008d059c ["CALL", null, ["callee:00c58f30:8"]]
+ 008d1548 ["INT_ADD", "register:40f0:8", ["const:8d1548:8", "const:4:8"]]
+ 008d1548 ["CALL", null, ["callee:00c58f30:8"]]
- 008d05a0 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d154c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d05a4 ["COPY", "tmp:0:8", ["const:488:8"]]
- 008d05a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d05a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d05a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d1550 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 008d1550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d1550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d1550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1245d30ccd435bb458cf652fb03fef4"></a>

### [`008d060c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d060c.md) → [`008d15b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d15b8.md) FUN_008d15b8

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
      "unmatched:008d0624",
      "DATA",
      [
        "storage",
        "00c84508",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d0628",
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
      "008d15d0",
      "DATA",
      [
        "storage",
        "00c854d8",
        null,
        "undefined *"
      ]
    ],
    [
      "008d15d4",
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
- 008d0618 ["INT_ADD", "register:40f0:8", ["const:8d0618:8", "const:4:8"]]
- 008d0618 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d15c4 ["INT_ADD", "register:40f0:8", ["const:8d15c4:8", "const:4:8"]]
+ 008d15c4 ["CALL", null, ["callee:00c58f30:8"]]
- 008d061c ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d15c8 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d0620 ["COPY", "tmp:0:8", ["const:508:8"]]
- 008d0620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d0620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d0620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fdeeb7b236fa463f5ee17251061b67ae"></a>

### [`008d0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0648.md) → [`008d15f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d15f4.md) FUN_008d15f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.44% / 新版 84.44%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d0670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d1688"
      ]
    ],
    [
      "unmatched:008d0674",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "008d161c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d1688"
      ]
    ],
    [
      "008d1620",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d065c ["INT_ADD", "register:40f0:8", ["const:8d065c:8", "const:4:8"]]
- 008d065c ["CALL", null, ["callee:008524fc:8"]]
+ 008d1608 ["INT_ADD", "register:40f0:8", ["const:8d1608:8", "const:4:8"]]
+ 008d1608 ["CALL", null, ["callee:008524fc:8"]]
- 008d0670 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 008d0674 ["INT_ADD", "register:40f0:8", ["const:8d0674:8", "const:4:8"]]
- 008d0674 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-52f582b8cc087a1db0c5a12287d11114"></a>

### [`008d0728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0728.md) → [`008d16d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d16d4.md) FUN_008d16d4

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
      "definition_site": "008d16e8",
      "incomplete_value": false,
      "site": "008d16ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:558:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d073c",
      "incomplete_value": false,
      "site": "008d0740",
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
            "const:588:8"
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
      "008d16ec",
      "DATA",
      [
        "storage",
        "00c84588",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d16ec",
      "DATA",
      [
        "storage",
        "00c85558",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0734 ["INT_ADD", "register:40f0:8", ["const:8d0734:8", "const:4:8"]]
- 008d0734 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d16e0 ["INT_ADD", "register:40f0:8", ["const:8d16e0:8", "const:4:8"]]
+ 008d16e0 ["CALL", null, ["callee:00c58f30:8"]]
- 008d0738 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d16e4 ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008d073c ["COPY", "tmp:0:8", ["const:588:8"]]
- 008d073c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d073c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d073c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d16e8 ["COPY", "tmp:0:8", ["const:558:8"]]
+ 008d16e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d16e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d16e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-548dd3c392edf9a93da703db95b724c3"></a>

### [`008d0764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0764.md) → [`008d1710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1710.md) FUN_008d1710

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md) [`008d08ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d08ac.md) [`008d08b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d08b0.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md)
- 新版 呼出元 0件  · 呼出先 6件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c38c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c38c0.md) [`008d1858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1858.md) [`008d185c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d185c.md) [`00acbc38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acb/00acbc38.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d1754",
      "incomplete_value": true,
      "site": "008d1758",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d1750",
      "incomplete_value": true,
      "site": "008d1758",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:008d0798",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d0798",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d1780",
      "READ",
      [
        "storage",
        "00c84618",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d1744",
      "DATA",
      [
        "storage",
        "00c855c8",
        null,
        "undefined *"
      ]
    ],
    [
      "008d1744",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d1780",
      "READ",
      [
        "storage",
        "00c855e8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d07ac ["INT_ADD", "register:40f0:8", ["const:8d07ac:8", "const:4:8"]]
- 008d07ac ["CALL", null, ["callee:00acbc38:8"]]
+ 008d1758 ["INT_ADD", "register:40f0:8", ["const:8d1758:8", "const:4:8"]]
+ 008d1758 ["CALL", null, ["callee:00acbc38:8"]]
- 008d0780 ["INT_ADD", "register:40f0:8", ["const:8d0780:8", "const:4:8"]]
- 008d0780 ["CALL", null, ["callee:008524fc:8"]]
+ 008d172c ["INT_ADD", "register:40f0:8", ["const:8d172c:8", "const:4:8"]]
+ 008d172c ["CALL", null, ["callee:008524fc:8"]]
- 008d0784 ["INT_ADD", "register:40f0:8", ["const:8d0784:8", "const:4:8"]]
- 008d0784 ["CALL", null, ["callee:008c38c0:8"]]
+ 008d1730 ["INT_ADD", "register:40f0:8", ["const:8d1730:8", "const:4:8"]]
+ 008d1730 ["CALL", null, ["callee:008c38c0:8"]]
~~~


<a id="compare-9b74518e79642523a6c7ff78cdb360df"></a>

### [`008d0878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0878.md) → [`008d1824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1824.md) FUN_008d1824

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
      "unmatched:008d0878",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d0884",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:008d0890",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d1824",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d1830",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "008d183c",
      "DATA",
      [
        "storage",
        "00c855c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0878 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d0878 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d0878 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008d0878 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d087c ["COPY", "register:40e8:8", ["register:8:8"]]
- 008d0880 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-b8228d42f95c2ce76dfedd441de9128e"></a>

### [`008d089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d089c.md) → [`008d1848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1848.md) FUN_008d1848

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
      "unmatched:008d08a4",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d1850",
      "DATA",
      [
        "storage",
        "00c855c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d089c ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008d08a0 ["COPY", "tmp:0:8", ["const:5f8:8"]]
- 008d08a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d08a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d08a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d08a4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008d08a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-08ecb075bae190d863001bd5be69dc27"></a>

### [`008d097c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d097c.md) → [`008d1928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1928.md) _INIT_171

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 76.84% / 新版 76.84%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d1a24",
      "incomplete_value": true,
      "site": "008d1a68",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:f87:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d0abc",
      "value": [
        "live",
        "register:5000:16"
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d1b48",
      "incomplete_value": false,
      "site": "008d1b5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43b000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0b9c",
      "incomplete_value": false,
      "site": "008d0bb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d1b50",
      "incomplete_value": false,
      "site": "008d1b5c",
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
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0ba4",
      "incomplete_value": false,
      "site": "008d0bb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "008d1964",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008d09d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d09dc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d1964",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008d1980",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "008d1988",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0bb0 ["INT_ADD", "register:40f0:8", ["const:8d0bb0:8", "const:4:8"]]
- 008d0bb0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008d1b5c ["INT_ADD", "register:40f0:8", ["const:8d1b5c:8", "const:4:8"]]
+ 008d1b5c ["CALL", null, ["callee:00c58ed0:8"]]
- 008d09a4 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 008d1950 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 008d09a8 ["COPY", "tmp:0:8", ["const:a58:8"]]
- 008d09a8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 008d09a8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 008d09a8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 008d1954 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 008d1954 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 008d1954 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 008d1954 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-565631409676d75907d78d56b8e6ebdf"></a>

### [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) → [`008d1cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1cb8.md) FUN_008d1cb8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008d1c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1c94.md) · 呼出先 20件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`008d2c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2c40.md) · 呼出先 20件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 84.94% / 新版 84.94%

優先判定に残った影響 `call_argument_candidate` 31件, `store_destination` 7件, `store_value` 24件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d1d00",
      "incomplete_value": false,
      "site": "008d1d04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0d54",
      "incomplete_value": false,
      "site": "008d0d58",
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
            "const:688:8"
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
      "definition_site": "008d1df8",
      "incomplete_value": true,
      "site": "008d1df8",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:49d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0e4c",
      "incomplete_value": true,
      "site": "008d0e4c",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:3ce:8"
              ]
            ]
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
      "definition_site": "008d1e10",
      "incomplete_value": true,
      "site": "008d1e10",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f91:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0e64",
      "incomplete_value": true,
      "site": "008d0e64",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f47:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d1d04",
      "DATA",
      [
        "storage",
        "00c84688",
        null,
        "undefined *"
      ]
    ],
    [
      "008d1dc8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d1de8",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d1d04",
      "DATA",
      [
        "storage",
        "00c85658",
        null,
        "undefined *"
      ]
    ],
    [
      "008d1dc8",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008d1de8",
      "READ",
      [
        "storage",
        "002b649d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0e88 ["INT_ADD", "register:40f0:8", ["const:8d0e88:8", "const:4:8"]]
- 008d0e88 ["CALL", null, ["callee:00633764:8"]]
+ 008d1e34 ["INT_ADD", "register:40f0:8", ["const:8d1e34:8", "const:4:8"]]
+ 008d1e34 ["CALL", null, ["callee:00633764:8"]]
- 008d0d48 ["INT_ADD", "register:40f0:8", ["const:8d0d48:8", "const:4:8"]]
- 008d0d48 ["CALL", null, ["callee:008d2a28:8"]]
+ 008d1cf4 ["INT_ADD", "register:40f0:8", ["const:8d1cf4:8", "const:4:8"]]
+ 008d1cf4 ["CALL", null, ["callee:008d2a28:8"]]
- 008d0d50 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008d1cfc ["COPY", "register:4040:8", ["const:c85000:8"]]
~~~


<a id="compare-4fbfd3f561906cc07dc7a9e928a93ba3"></a>

### [`008d1a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1a7c.md) → [`008d2a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2a28.md) FUN_008d2a28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`00a9606c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a96/00a9606c.md) · 呼出先 10件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 2件 [`008d1cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1cb8.md) [`00a97060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a97/00a97060.md) · 呼出先 10件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00b3db68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3db68.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 74.78% / 新版 74.78%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d2a54",
      "incomplete_value": false,
      "site": "008d2a5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1aa8",
      "incomplete_value": false,
      "site": "008d1ab0",
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
            "const:6d8:8"
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
      "definition_site": "008d2aa0",
      "incomplete_value": true,
      "site": "008d2aa0",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:836:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1af4",
      "incomplete_value": true,
      "site": "008d1af4",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:769:8"
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
      "definition_site": "008d2ab8",
      "incomplete_value": true,
      "site": "008d2ab8",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:86:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1b0c",
      "incomplete_value": true,
      "site": "008d1b0c",
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
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:fa8:8"
              ]
            ]
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
      "008d2a5c",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ],
    [
      "008d2a70",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d2a90",
      "READ",
      [
        "storage",
        "002ab769",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d2a5c",
      "DATA",
      [
        "storage",
        "00c856a8",
        null,
        "pointer"
      ]
    ],
    [
      "008d2a70",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008d2a90",
      "READ",
      [
        "storage",
        "002ab836",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d1b2c ["INT_ADD", "register:40f0:8", ["const:8d1b2c:8", "const:4:8"]]
- 008d1b2c ["CALL", null, ["callee:0047e96c:8"]]
+ 008d2ad8 ["INT_ADD", "register:40f0:8", ["const:8d2ad8:8", "const:4:8"]]
+ 008d2ad8 ["CALL", null, ["callee:0047e96c:8"]]
- 008d1bf4 ["INT_ADD", "register:40f0:8", ["const:8d1bf4:8", "const:4:8"]]
- 008d1bf4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 008d2ba0 ["INT_ADD", "register:40f0:8", ["const:8d2ba0:8", "const:4:8"]]
+ 008d2ba0 ["CALL", null, ["callee:00c58ef0:8"]]
- 008d1c30 ["INT_ADD", "register:40f0:8", ["const:8d1c30:8", "const:4:8"]]
- 008d1c30 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008d2bdc ["INT_ADD", "register:40f0:8", ["const:8d2bdc:8", "const:4:8"]]
+ 008d2bdc ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-4ebadffc52b8b959dd6ec01cdc6e9f7a"></a>

### [`008d1c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1c94.md) → [`008d2c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2c40.md) FUN_008d2c40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 16件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`008d8450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8450.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 16件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`008b8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8998.md) [`008d1cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1cb8.md) [`008d93fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d93fc.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_destination` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d2c84",
      "incomplete_value": false,
      "site": "008d2c84",
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
      "definition_site": "008d1cd8",
      "incomplete_value": false,
      "site": "008d1cd8",
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
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d2c7c",
      "incomplete_value": true,
      "site": "008d2c84",
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
      "definition_site": "008d1cd0",
      "incomplete_value": true,
      "site": "008d1cd8",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d2c88",
      "incomplete_value": false,
      "site": "008d2c88",
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
      "definition_site": "008d1cdc",
      "incomplete_value": false,
      "site": "008d1cdc",
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
      "008d2c7c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2c80",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2c84",
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
      "008d2c7c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2c80",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2c84",
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
- 008d1cd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 008d1cd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 008d2c84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 008d2c84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008d1cdc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 008d1cdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 008d2c88 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 008d2c88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 008d1d00 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 008d1d00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 008d2cac ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 008d2cac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-a2762bd60944b41be8dc1e6f9d16327d"></a>

### [`008d1f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1f04.md) → [`008d2eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2eb0.md) FUN_008d2eb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) · 呼出先 28件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)
- 新版 呼出元 4件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`008ae7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae7a8.md) [`008d41f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d41f8.md) [`008dac04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dac04.md) · 呼出先 28件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.82% / 新版 76.82%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 1件, `store_value` 3件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 24件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 22件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d2fc0",
      "incomplete_value": false,
      "site": "008d2fc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2014",
      "incomplete_value": false,
      "site": "008d2014",
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
            "const:878:8"
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
      "definition_site": "008d320c",
      "incomplete_value": false,
      "site": "008d320c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2260",
      "incomplete_value": false,
      "site": "008d2260",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d3424",
      "incomplete_value": false,
      "site": "008d3424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2478",
      "incomplete_value": false,
      "site": "008d2478",
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
            "const:9f8:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d2eec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2ef8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008d2f00",
      "PARAM",
      [
        "storage",
        "00c846b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008d2eec",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008d2ef8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008d2f00",
      "PARAM",
      [
        "storage",
        "00c85680",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d1f60 ["INT_ADD", "register:40f0:8", ["const:8d1f60:8", "const:4:8"]]
- 008d1f60 ["CALL", null, ["callee:00c596b0:8"]]
+ 008d2f0c ["INT_ADD", "register:40f0:8", ["const:8d2f0c:8", "const:4:8"]]
+ 008d2f0c ["CALL", null, ["callee:00c596b0:8"]]
- 008d2708 ["INT_ADD", "register:40f0:8", ["const:8d2708:8", "const:4:8"]]
- 008d2708 ["CALL", null, ["callee:00a47938:8"]]
+ 008d36b4 ["INT_ADD", "register:40f0:8", ["const:8d36b4:8", "const:4:8"]]
+ 008d36b4 ["CALL", null, ["callee:00a47938:8"]]
- 008d275c ["INT_ADD", "register:40f0:8", ["const:8d275c:8", "const:4:8"]]
- 008d275c ["CALL", null, ["callee:008b7ff0:8"]]
+ 008d3708 ["INT_ADD", "register:40f0:8", ["const:8d3708:8", "const:4:8"]]
+ 008d3708 ["CALL", null, ["callee:008b7ff0:8"]]
~~~


<a id="compare-25ac7be073c7bebe55966aa6e2049df7"></a>

### [`008d29fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d29fc.md) → [`008d39a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d39a8.md) FUN_008d39a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00732f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732f24.md) [`008d1f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1f04.md) · 呼出先 0件 
- 新版 呼出元 2件 [`007332d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/007332d4.md) [`008d2eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2eb0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 69.84% / 新版 69.84%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "008d39f4",
      "incomplete_value": false,
      "site": "008d39f8",
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
      "unmatched:008d2a94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d3a50"
      ]
    ],
    [
      "unmatched:008d2aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d3a54"
      ]
    ]
  ],
  "added": [
    [
      "008d3a40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d3a50"
      ]
    ],
    [
      "008d3a4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d3a54"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d29fc ["INT_LEFT", "tmp:0:8", ["const:2:8", "const:c:4"]]
- 008d29fc ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 008d29fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:1:8"]]
- 008d29fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:1:8"]]
- 008d2a00 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec:8"]]
- 008d2a00 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 008d2a00 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
- 008d2a04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f3:8"]]
- 008d2a04 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 008d2a04 ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
~~~


<a id="compare-8b4b89246e819443c9280a24c97cb534"></a>

### [`008d2af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2af8.md) → [`008d3aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3aa4.md) FUN_008d3aa4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) · 呼出先 4件 [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) [`00ac96f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac96f8.md)
- 新版 呼出元 2件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`008ae7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae7a8.md) · 呼出先 4件 [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md) [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) [`00aa4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa4/00aa4e88.md) [`00aca6ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aca/00aca6ec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d3ad4",
      "incomplete_value": true,
      "site": "008d3ad8",
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
            "const:2f38:8"
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
      "definition_site": "008d3acc",
      "incomplete_value": false,
      "site": "008d3ad8",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d2b40",
      "incomplete_value": true,
      "site": "008d2b5c",
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
            "register:40a0:8"
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
      "unmatched:008d2b54",
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
      "008d3b00",
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
- 008d2b2c ["INT_ADD", "register:40f0:8", ["const:8d2b2c:8", "const:4:8"]]
- 008d2b2c ["CALL", null, ["callee:008b8a14:8"]]
+ 008d3ad8 ["INT_ADD", "register:40f0:8", ["const:8d3ad8:8", "const:4:8"]]
+ 008d3ad8 ["CALL", null, ["callee:008b8a14:8"]]
- 008d2b5c ["INT_ADD", "register:40f0:8", ["const:8d2b5c:8", "const:4:8"]]
- 008d2b5c ["CALL", null, ["callee:008b8a14:8"]]
+ 008d3b08 ["INT_ADD", "register:40f0:8", ["const:8d3b08:8", "const:4:8"]]
+ 008d3b08 ["CALL", null, ["callee:008b8a14:8"]]
- 008d2b18 ["INT_ADD", "register:40f0:8", ["const:8d2b18:8", "const:4:8"]]
- 008d2b18 ["CALL", null, ["callee:00aca6ec:8"]]
+ 008d3ac4 ["INT_ADD", "register:40f0:8", ["const:8d3ac4:8", "const:4:8"]]
+ 008d3ac4 ["CALL", null, ["callee:00aca6ec:8"]]
~~~


<a id="compare-fcc87bf37d64139d0e5c93eb63ff3b86"></a>

### [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) → [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) FUN_008d3b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`008d2af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2af8.md) [`008d8760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8760.md) [`008d9a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a94.md) [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`0071ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071ec74.md)
- 新版 呼出元 5件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`008d3aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3aa4.md) [`008d970c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d970c.md) [`008daa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daa40.md) [`008dac04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008dac04.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005dc104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc104.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0071f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071f024.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.94% / 新版 92.94%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 1件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d3f2c",
      "incomplete_value": false,
      "site": "008d3f2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2f80",
      "incomplete_value": false,
      "site": "008d2f80",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d3c8c",
      "incomplete_value": true,
      "site": "008d3ca0",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008d3c90",
      "incomplete_value": true,
      "site": "008d3ca0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
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
      "unmatched:008d2b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d2b94",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d2b98",
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
      "008d3b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d3b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d3b44",
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
- 008d2cf4 ["INT_ADD", "register:40f0:8", ["const:8d2cf4:8", "const:4:8"]]
- 008d2cf4 ["CALL", null, ["callee:00c590a0:8"]]
+ 008d3ca0 ["INT_ADD", "register:40f0:8", ["const:8d3ca0:8", "const:4:8"]]
+ 008d3ca0 ["CALL", null, ["callee:00c590a0:8"]]
- 008d2d24 ["INT_ADD", "register:40f0:8", ["const:8d2d24:8", "const:4:8"]]
- 008d2d24 ["CALL", null, ["callee:00c59000:8"]]
+ 008d3cd0 ["INT_ADD", "register:40f0:8", ["const:8d3cd0:8", "const:4:8"]]
+ 008d3cd0 ["CALL", null, ["callee:00c59000:8"]]
- 008d2dbc ["INT_ADD", "register:40f0:8", ["const:8d2dbc:8", "const:4:8"]]
- 008d2dbc ["CALL", null, ["ram:71ec74:8"]]
+ 008d3d68 ["INT_ADD", "register:40f0:8", ["const:8d3d68:8", "const:4:8"]]
+ 008d3d68 ["CALL", null, ["ram:71f024:8"]]
~~~


<a id="compare-5a7b214b7fdee2dc6f4bc908a422cab9"></a>

### [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) → [`008d41f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d41f8.md) FUN_008d41f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 17件 [`0044da78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044da78.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 17件 [`0044dd98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dd98.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.94% / 新版 67.94%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `return_value_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 15件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d43f4",
      "incomplete_value": true,
      "site": "008d43f4",
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
      "definition_site": "008d3448",
      "incomplete_value": true,
      "site": "008d3448",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008d423c",
      "incomplete_value": true,
      "site": "008d423c",
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
      "definition_site": "008d3290",
      "incomplete_value": true,
      "site": "008d3290",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d43a0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d33f4",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "unmatched:008d327c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d3280",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d4238",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008d4228",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "008d422c",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008d4238",
      "READ",
      [
        "storage",
        "00ca5ff0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d33f4 ["INT_ADD", "register:40f0:8", ["const:8d33f4:8", "const:4:8"]]
- 008d33f4 ["CALL", null, ["ram:48cd38:8"]]
+ 008d43a0 ["INT_ADD", "register:40f0:8", ["const:8d43a0:8", "const:4:8"]]
+ 008d43a0 ["CALL", null, ["ram:48d058:8"]]
- 008d3410 ["INT_ADD", "register:40f0:8", ["const:8d3410:8", "const:4:8"]]
- 008d3410 ["CALL", null, ["callee:00c59010:8"]]
+ 008d43bc ["INT_ADD", "register:40f0:8", ["const:8d43bc:8", "const:4:8"]]
+ 008d43bc ["CALL", null, ["callee:00c59010:8"]]
- 008d3270 ["COPY", "tmp:0:8", ["const:38:8"]]
- 008d3270 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 008d3270 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 008d3270 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-00a3743c254ca7fd43065eb689f6bb1f"></a>

### [`008d3644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3644.md) → [`008d45f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d45f0.md) FUN_008d45f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`008ae7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae7a8.md) [`008d41f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d41f8.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.12% / 新版 80.12%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d36fc"
      ],
      [
        "FALL_THROUGH",
        "008d46a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d46a8",
      "incomplete_value": true,
      "site": "008d46ac",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_EQUAL",
            "1",
            [
              [
                "live",
                "register:5000:8"
              ],
              [
                "live",
                "register:5020:8"
              ]
            ]
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              "FLOAT_LESS",
              [
                "leaf",
                "const:0:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d36fc",
      "incomplete_value": true,
      "site": "008d3700",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_EQUAL",
            "1",
            [
              [
                "live",
                "register:5000:8"
              ],
              "FLOAT_ADD"
            ]
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              "FLOAT_LESS",
              [
                "leaf",
                "const:0:1"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008d36e4"
      ],
      [
        "CONDITIONAL_JUMP",
        "008d4690"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d4690",
      "incomplete_value": true,
      "site": "008d46e8",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_LESSEQUAL"
            ]
          ],
          [
            "FLOAT_EQUAL",
            "1",
            [
              "LOAD",
              [
                "live",
                "register:5100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d36e4",
      "incomplete_value": true,
      "site": "008d373c",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_LESSEQUAL"
            ]
          ],
          [
            "FLOAT_EQUAL",
            "1",
            [
              [
                "live",
                "register:5000:8"
              ],
              [
                "live",
                "register:5100:8"
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
      "unmatched:008d3654",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d366c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d36e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d46e4"
      ]
    ]
  ],
  "added": [
    [
      "008d4600",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d4618",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008d4690",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d46e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d3654 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008d3654 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008d3654 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 008d3654 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008d3658 ["COPY", "tmp:0:8", ["const:18:8"]]
- 008d3658 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 008d3658 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 008d3658 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 008d366c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 008d366c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-4ac84e44a6d8fefd32451c42d33b5f56"></a>

### [`008d38f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d38f0.md) → [`008d489c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d489c.md) FUN_008d489c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 39件 [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 39件 [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00467e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e50.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.29% / 新版 84.29%

優先判定に残った影響 `call_argument_candidate` 111件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008d48d4",
      "incomplete_value": true,
      "site": "008d48d4",
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
      "definition_site": "008d3928",
      "incomplete_value": true,
      "site": "008d3928",
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
      "definition_site": "008d48e8",
      "incomplete_value": false,
      "site": "008d48fc",
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
      "definition_site": "008d393c",
      "incomplete_value": false,
      "site": "008d3950",
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
      "definition_site": "008d48f0",
      "incomplete_value": false,
      "site": "008d48fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d3944",
      "incomplete_value": false,
      "site": "008d3950",
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
            "const:6b0:8"
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
      "unmatched:008d38f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d38f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d38fc",
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
      "008d48a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008d48a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d48a8",
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
- 008d3928 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008d3928 ["CBRANCH", null, ["local:b151:8", "tmp:0:1"]]
+ 008d48d4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008d48d4 ["CBRANCH", null, ["local:b147:8", "tmp:0:1"]]
- 008d3950 ["INT_ADD", "register:40f0:8", ["const:8d3950:8", "const:4:8"]]
- 008d3950 ["CALL", null, ["callee:00c596b0:8"]]
+ 008d48fc ["INT_ADD", "register:40f0:8", ["const:8d48fc:8", "const:4:8"]]
+ 008d48fc ["CALL", null, ["callee:00c596b0:8"]]
- 008d3a08 ["INT_ADD", "register:40f0:8", ["const:8d3a08:8", "const:4:8"]]
- 008d3a08 ["CALL", null, ["callee:004692e8:8"]]
+ 008d49b4 ["INT_ADD", "register:40f0:8", ["const:8d49b4:8", "const:4:8"]]
+ 008d49b4 ["CALL", null, ["callee:004692e8:8"]]
~~~


<a id="compare-4536a433475ddd68d3607587acc7c19f"></a>

### [`008d4d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4d10.md) → [`008d5cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d5/008d5cbc.md) FUN_008d5cbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0075bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bdcc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "008d4d94",
      "incomplete_value": false,
      "site": "008d4d98",
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
      "unmatched:008d4d7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5d48"
      ]
    ],
    [
      "unmatched:008d4d88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5d48"
      ]
    ]
  ],
  "added": [
    [
      "008d5d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5d48"
      ]
    ],
    [
      "008d5d34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5d48"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d4d54 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d4d54 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d4d54 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 008d5d00 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d5d00 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008d5d00 ["CBRANCH", null, ["local:b8:8", "tmp:1:1"]]
- 008d4d70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d4d70 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 008d4d70 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 008d4d70 ["CBRANCH", null, ["local:b5:8", "tmp:2:1"]]
+ 008d5d1c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d5d1c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 008d5d1c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 008d5d1c ["CBRANCH", null, ["local:b7:8", "tmp:2:1"]]
- 008d4d78 ["COPY", "register:100:1", ["const:0:1"]]
- 008d4d78 ["COPY", "register:101:1", ["const:0:1"]]
- 008d4d78 ["COPY", "register:102:1", ["const:1:1"]]
- 008d4d78 ["COPY", "register:103:1", ["const:1:1"]]
~~~


<a id="compare-b38af8aad49f7348a8ea2a5738337226"></a>

### [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) → [`008d5d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d5/008d5d5c.md) FUN_008d5d5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005dc6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc6f0.md) [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.11% / 新版 89.11%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4e48"
      ],
      [
        "FALL_THROUGH",
        "008d5df4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d5df0",
      "incomplete_value": true,
      "site": "008d5e00",
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
    "old": {
      "definition_site": "008d4e44",
      "incomplete_value": true,
      "site": "008d4e54",
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
                "register:40c0:8"
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
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4e48"
      ],
      [
        "FALL_THROUGH",
        "008d5df4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d5df0",
      "incomplete_value": true,
      "site": "008d5e00",
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
    "old": {
      "definition_site": "008d4e44",
      "incomplete_value": true,
      "site": "008d4e54",
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
                "register:40c0:8"
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
    "ordinal": 19,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4f50"
      ],
      [
        "FALL_THROUGH",
        "008d5efc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d5efc",
      "incomplete_value": true,
      "site": "008d5f00",
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
      "definition_site": "008d4f50",
      "incomplete_value": true,
      "site": "008d4f54",
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
    "ordinal": 34,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d4dc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d4dc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d4dc8",
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
      "008d5d6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d5d70",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d5d74",
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
- 008d4dc0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 008d4dc0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 008d4dc0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 008d4dc0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008d4dc4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 008d4dc4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 008d4dc4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 008d4dc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008d4dc8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008d4dc8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008d4dc8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 008d4dc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8c8840cc05a8aab5b00440fea0161e5b"></a>

### [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md) → [`008d61a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d61a4.md) FUN_008d61a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`008d8bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8bb0.md) · 呼出先 12件 [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) [`008d9b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b48.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`008d9b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9b5c.md) · 呼出先 12件 [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008bb86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bb86c.md) [`008d648c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d648c.md) [`008daaf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daaf4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d627c",
      "incomplete_value": true,
      "site": "008d6280",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d52f0",
      "incomplete_value": true,
      "site": "008d5308",
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
      "definition_site": "008d52f4",
      "incomplete_value": true,
      "site": "008d5308",
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
      "unmatched:008d5234",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008d523c",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5240",
      "WRITE",
      [
        "storage",
        "Stack[-0xf7]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008d61e0",
      "READ",
      [
        "storage",
        "002c1384",
        null,
        "string"
      ]
    ],
    [
      "008d61e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ],
    [
      "008d61ec",
      "WRITE",
      [
        "storage",
        "Stack[-0xf7]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008d52d4 ["INT_ADD", "register:40f0:8", ["const:8d52d4:8", "const:4:8"]]
- 008d52d4 ["CALL", null, ["callee:0048d1b4:8"]]
+ 008d6280 ["INT_ADD", "register:40f0:8", ["const:8d6280:8", "const:4:8"]]
+ 008d6280 ["CALL", null, ["callee:0048d1b4:8"]]
- 008d5308 ["INT_ADD", "register:40f0:8", ["const:8d5308:8", "const:4:8"]]
- 008d5308 ["CALL", null, ["callee:008bb86c:8"]]
+ 008d62b4 ["INT_ADD", "register:40f0:8", ["const:8d62b4:8", "const:4:8"]]
+ 008d62b4 ["CALL", null, ["callee:008bb86c:8"]]
- 008d5220 ["INT_ADD", "register:40f0:8", ["const:8d5220:8", "const:4:8"]]
- 008d5220 ["CALL", null, ["callee:0048d1b0:8"]]
+ 008d61cc ["INT_ADD", "register:40f0:8", ["const:8d61cc:8", "const:4:8"]]
+ 008d61cc ["CALL", null, ["callee:0048d1b0:8"]]
~~~


<a id="compare-149224723c949671df02f360737d99ab"></a>

### [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) → [`008d648c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d648c.md) FUN_008d648c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md) · 呼出先 17件 [`0044b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b7e4.md) [`0056192c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/0056192c.md) [`00561b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561b64.md) [`00561d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d2c.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md)
- 新版 呼出元 2件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) [`008d61a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d61a4.md) · 呼出先 17件 [`0044bb04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044bb04.md) [`00561c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561c4c.md) [`00561e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561e84.md) [`0056204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/0056204c.md) [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.59% / 新版 84.59%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d64cc",
      "value": [
        "leaf",
        "ram:76880c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d5520",
      "value": [
        "leaf",
        "ram:768430:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6540",
      "incomplete_value": false,
      "site": "008d6548",
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
            "const:3e3:8"
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
      "definition_site": "008d55dc",
      "incomplete_value": true,
      "site": "008d55e0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d64cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "unmatched:008d5554",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5560",
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
      "008d64cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "008d6500",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "008d650c",
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
- 008d5520 ["INT_ADD", "register:40f0:8", ["const:8d5520:8", "const:4:8"]]
- 008d5520 ["CALL", null, ["ram:768430:8"]]
+ 008d64cc ["INT_ADD", "register:40f0:8", ["const:8d64cc:8", "const:4:8"]]
+ 008d64cc ["CALL", null, ["ram:76880c:8"]]
- 008d559c ["INT_ADD", "register:40f0:8", ["const:8d559c:8", "const:4:8"]]
- 008d559c ["CALL", null, ["callee:00c59010:8"]]
+ 008d6548 ["INT_ADD", "register:40f0:8", ["const:8d6548:8", "const:4:8"]]
+ 008d6548 ["CALL", null, ["callee:00c59010:8"]]
- 008d55e0 ["INT_ADD", "register:40f0:8", ["const:8d55e0:8", "const:4:8"]]
- 008d55e0 ["CALL", null, ["callee:00c59020:8"]]
+ 008d658c ["INT_ADD", "register:40f0:8", ["const:8d658c:8", "const:4:8"]]
+ 008d658c ["CALL", null, ["callee:00c59020:8"]]
~~~


<a id="compare-ad150386cb3eeffead2f3f86551a2fe2"></a>

### [`008d5ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ad0.md) → [`008d6a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6a7c.md) FUN_008d6a7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.43% / 新版 80.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d5ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5ad8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5adc",
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
      "008d6a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d6a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d6a88",
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
- 008d5ad0 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 008d5ad4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d5ad4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d5ad4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008d5ad4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008d5ad8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 008d5ad8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-0ff054b121ffc5f06c8a930345d1d1fa"></a>

### [`008d5b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5b88.md) → [`008d6b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d6b34.md) FUN_008d6b34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 3件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 3件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.90% / 新版 93.90%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6b54",
      "incomplete_value": true,
      "site": "008d6b5c",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "008d6b58",
      "incomplete_value": true,
      "site": "008d6b5c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4040:4"
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
      "unmatched:008d5b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5b90",
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
      "008d6b34",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d6b38",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d6b3c",
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
- 008d5bb0 ["INT_ADD", "register:40f0:8", ["const:8d5bb0:8", "const:4:8"]]
- 008d5bb0 ["CALL", null, ["callee:00481188:8"]]
+ 008d6b5c ["INT_ADD", "register:40f0:8", ["const:8d6b5c:8", "const:4:8"]]
+ 008d6b5c ["CALL", null, ["callee:00481188:8"]]
- 008d5b88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d5b88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d5b88 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 008d5b88 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d5b8c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d5b8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


