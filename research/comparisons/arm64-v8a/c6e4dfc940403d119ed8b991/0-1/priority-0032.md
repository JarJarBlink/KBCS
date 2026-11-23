# v16.0.1 → v16.0.2 · 最優先の変更候補 (32)

[一覧の目次](README.md)

<a id="compare-2aca12813aa7743f628628cdab136a3b"></a>

### [`006a48fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a4/006a48fc.md) → [`006a4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4954.md) FUN_006a4954

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.70% / 新版 80.70%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 32件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a493c",
      "incomplete_value": true,
      "site": "006a494c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:006a4900",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a4904",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a4908",
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
      "006a4958",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a495c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a4960",
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
- 006a494c ["INT_ADD", "register:40f0:8", ["const:6a494c:8", "const:4:8"]]
- 006a494c ["CALL", null, ["callee:004801b8:8"]]
+ 006a49a4 ["INT_ADD", "register:40f0:8", ["const:6a49a4:8", "const:4:8"]]
+ 006a49a4 ["CALL", null, ["callee:004801b8:8"]]
- 006a48fc ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 006a4900 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a4900 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a4900 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 006a4900 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8fc92aaa8910f65ea179bef3e92229d7"></a>

### [`006a4d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a4/006a4d70.md) → [`006a4dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4dc8.md) FUN_006a4dc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 2件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a4da8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4e24"
      ]
    ]
  ],
  "added": [
    [
      "006a4e00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4e24"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a4d98 ["INT_ADD", "register:40f0:8", ["const:6a4d98:8", "const:4:8"]]
- 006a4d98 ["CALL", null, ["callee:00480bd0:8"]]
+ 006a4df0 ["INT_ADD", "register:40f0:8", ["const:6a4df0:8", "const:4:8"]]
+ 006a4df0 ["CALL", null, ["callee:00480bd0:8"]]
- 006a4da4 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40a8:8"]]
- 006a4da4 ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40a0:8"]]
- 006a4da4 ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40a0:8"]]
- 006a4da4 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 006a4da8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a4da8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-fc2275bca1bacab40812d9555ff8b8ab"></a>

### [`006a4e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a4/006a4e90.md) → [`006a4ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4ee8.md) FUN_006a4ee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`0090a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090a/0090a5b8.md) [`0090cc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090c/0090cc54.md) [`0091ab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091ab78.md) · 呼出先 0件 
- 新版 呼出元 4件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090a60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a60c.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006a4f18",
      "incomplete_value": false,
      "site": "006a4f1c",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 0
  }
]
~~~


~~~diff
- 006a4eb4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a4eb4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 006a4f0c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a4f0c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-022bd415aed5b55fc45d0a71ee42b27a"></a>

### [`006a4ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a4/006a4ec8.md) → [`006a4f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4f20.md) FUN_006a4f20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0090cc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090c/0090cc54.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.00% / 新版 78.00%

優先判定に残った影響 `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a4f0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4f54"
      ]
    ],
    [
      "unmatched:006a4f5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4f9c"
      ]
    ],
    [
      "006a5038",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006a4ff4"
      ]
    ]
  ],
  "added": [
    [
      "006a4f64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4f54"
      ]
    ],
    [
      "006a4fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a4f9c"
      ]
    ],
    [
      "006a5038",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a504c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a4eec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a4eec ["CBRANCH", null, ["local:b71:8", "tmp:0:1"]]
+ 006a4f44 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a4f44 ["CBRANCH", null, ["local:b74:8", "tmp:0:1"]]
- 006a4f00 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a4f00 ["CBRANCH", null, ["local:b71:8", "tmp:0:1"]]
+ 006a4f58 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a4f58 ["CBRANCH", null, ["local:b74:8", "tmp:0:1"]]
- 006a4f0c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a4f0c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 006a4f0c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 006a4f0c ["CBRANCH", null, ["local:b2:8", "tmp:2:1"]]
~~~


<a id="compare-f71db67d9bf66fb66de09f2d474954dc"></a>

### [`006a52b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a5/006a52b0.md) → [`006a5308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5308.md) FUN_006a5308

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`0090cc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090c/0090cc54.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a539c",
      "incomplete_value": false,
      "site": "006a53a0",
      "value": [
        "leaf",
        "const:48:8"
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
      "unmatched:006a52c4",
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
      "006a531c",
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
- 006a5348 ["INT_ADD", "register:40f0:8", ["const:6a5348:8", "const:4:8"]]
- 006a5348 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a53a0 ["INT_ADD", "register:40f0:8", ["const:6a53a0:8", "const:4:8"]]
+ 006a53a0 ["CALL", null, ["callee:00c57f60:8"]]
- 006a52b4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a52b4 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 006a530c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a530c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 006a52c4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006a52c4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006a52c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 006a52c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7e0c2faa2262a5b382d56fe0e01c93c1"></a>

### [`006a53b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a5/006a53b8.md) → [`006a5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5410.md) FUN_006a5410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`0090cc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090c/0090cc54.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

アドレスに依存する影響 `unresolved_store_alignment` 2件

~~~diff
- 006a5458 ["INT_ADD", "register:40f0:8", ["const:6a5458:8", "const:4:8"]]
- 006a5458 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a54b0 ["INT_ADD", "register:40f0:8", ["const:6a54b0:8", "const:4:8"]]
+ 006a54b0 ["CALL", null, ["callee:00c57f60:8"]]
- 006a5480 ["INT_ADD", "register:4048:8", ["register:4048:8", "const:38:8"]]
- 006a5480 ["STORE", null, ["const:1b1:8", "register:4048:8", "register:5000:16"]]
- 006a5484 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 006a5484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-efbbc008e2db074c8003de8f07a23718"></a>

### [`006a54d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a5/006a54d0.md) → [`006a5528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5528.md) FUN_006a5528

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d3af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3af4.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.86% / 新版 97.86%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a564c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a568c"
      ]
    ]
  ],
  "added": [
    [
      "006a56a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a568c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a559c ["BRANCH", null, ["local:b33:8"]]
+ 006a55f4 ["BRANCH", null, ["local:b34:8"]]
- 006a55b0 ["INT_ADD", "register:40f0:8", ["const:6a55b0:8", "const:4:8"]]
- 006a55b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a5608 ["INT_ADD", "register:40f0:8", ["const:6a5608:8", "const:4:8"]]
+ 006a5608 ["CALL", null, ["callee:00c57f60:8"]]
- 006a55d4 ["INT_ADD", "register:4040:8", ["register:4040:8", "const:38:8"]]
- 006a55d4 ["STORE", null, ["const:1b1:8", "register:4040:8", "register:5000:16"]]
~~~


<a id="compare-49347149c50c9f9996e113412b7243f9"></a>

### [`006a5700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a5/006a5700.md) → [`006a5758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5758.md) FUN_006a5758

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 15件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.18% / 新版 79.18%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a58b4"
      ],
      [
        "FALL_THROUGH",
        "006a590c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a590c",
      "incomplete_value": true,
      "site": "006a5910",
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
      "definition_site": "006a58b4",
      "incomplete_value": true,
      "site": "006a58b8",
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
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a5734",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a5738",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "unmatched:006a5750",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a578c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006a5790",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "006a57a8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a5910 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a5910 ["CBRANCH", null, ["local:b35:8", "tmp:0:1"]]
+ 006a5968 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a5968 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
- 006a5730 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 006a5730 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006a5734 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006a5734 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff0:8"]]
- 006a5734 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-6d44f045be25cb708ea57d341c3a658e"></a>

### [`006a5b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a5/006a5b2c.md) → [`006a5b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5b84.md) FUN_006a5b84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) [`0091ab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091ab78.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.46% / 新版 91.46%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a5fe4",
      "incomplete_value": false,
      "site": "006a5ff0",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a5f80"
      ],
      [
        "FALL_THROUGH",
        "006a5fd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a5fd8",
      "incomplete_value": true,
      "site": "006a5fdc",
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
      "definition_site": "006a5f80",
      "incomplete_value": true,
      "site": "006a5f84",
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
    "ordinal": 49,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a5c64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5cac"
      ]
    ],
    [
      "unmatched:006a5c80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5cec"
      ]
    ],
    [
      "unmatched:006a5c84",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5d0c"
      ]
    ]
  ],
  "added": [
    [
      "006a5cbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5cac"
      ]
    ],
    [
      "006a5cd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5cec"
      ]
    ],
    [
      "006a5cdc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5d0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a5f2c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a5f2c ["CBRANCH", null, ["local:b75:8", "tmp:0:1"]]
+ 006a5f84 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a5f84 ["CBRANCH", null, ["local:b76:8", "tmp:0:1"]]
- 006a5fdc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a5fdc ["CBRANCH", null, ["local:b78:8", "tmp:0:1"]]
+ 006a6034 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a6034 ["CBRANCH", null, ["local:b79:8", "tmp:0:1"]]
- 006a5ff0 ["INT_ADD", "register:40f0:8", ["const:6a5ff0:8", "const:4:8"]]
- 006a5ff0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a6048 ["INT_ADD", "register:40f0:8", ["const:6a6048:8", "const:4:8"]]
+ 006a6048 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-98f516ad7d290a1e5a5e447b24a7a182"></a>

### [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md) → [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) FUN_006a6130

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`006a3d94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3d94.md) [`006a48fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a4/006a48fc.md) [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md) [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008498c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008498c8.md) · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`006a3dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3dec.md) [`006a4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4954.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849920.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006a60d8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a60d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006a6130 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a6130 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 006a60f8 ["INT_ADD", "register:40f0:8", ["const:6a60f8:8", "const:4:8"]]
- 006a60f8 ["CALL", null, ["local:b0:8"]]
+ 006a6150 ["INT_ADD", "register:40f0:8", ["const:6a6150:8", "const:4:8"]]
+ 006a6150 ["CALL", null, ["local:b0:8"]]
- 006a6104 ["INT_ADD", "register:40f0:8", ["const:6a6104:8", "const:4:8"]]
- 006a6104 ["CALL", null, ["local:b0:8"]]
+ 006a615c ["INT_ADD", "register:40f0:8", ["const:6a615c:8", "const:4:8"]]
+ 006a615c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-b0e89be087ef931d623006fd3694aab7"></a>

### [`006a6178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6178.md) → [`006a61d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a61d0.md) FUN_006a61d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006a3dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3dc4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`006a3e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3e1c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a61dc",
      "incomplete_value": false,
      "site": "006a61e0",
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
      "definition_site": "006a6184",
      "incomplete_value": false,
      "site": "006a6188",
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
      "006a61dc",
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
      "006a61dc",
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
- 006a6188 ["INT_ADD", "register:40f0:8", ["const:6a6188:8", "const:4:8"]]
- 006a6188 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006a61e0 ["INT_ADD", "register:40f0:8", ["const:6a61e0:8", "const:4:8"]]
+ 006a61e0 ["CALL", null, ["callee:0043b7b8:8"]]
- 006a6184 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006a6184 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a6184 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a6184 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a61dc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006a61dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a61dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a61dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-92a1f884466ee7d13d2fd023e6679258"></a>

### [`006a622c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a622c.md) → [`006a6284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6284.md) _INIT_103

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.62% / 新版 83.62%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a63a4",
      "incomplete_value": true,
      "site": "006a63b4",
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
      "definition_site": "006a63a8",
      "incomplete_value": true,
      "site": "006a63b4",
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
      "definition_site": "006a6410",
      "incomplete_value": true,
      "site": "006a6420",
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
      "unmatched:006a625c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a6268",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a6284",
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
      "006a62b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006a62c0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006a62dc",
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
- 006a63b4 ["INT_ADD", "register:40f0:8", ["const:6a63b4:8", "const:4:8"]]
- 006a63b4 ["CALL", null, ["callee:0043b838:8"]]
+ 006a640c ["INT_ADD", "register:40f0:8", ["const:6a640c:8", "const:4:8"]]
+ 006a640c ["CALL", null, ["callee:0043b838:8"]]
- 006a63c8 ["INT_ADD", "register:40f0:8", ["const:6a63c8:8", "const:4:8"]]
- 006a63c8 ["CALL", null, ["callee:0043b838:8"]]
+ 006a6420 ["INT_ADD", "register:40f0:8", ["const:6a6420:8", "const:4:8"]]
+ 006a6420 ["CALL", null, ["callee:0043b838:8"]]
- 006a6460 ["INT_ADD", "register:40f0:8", ["const:6a6460:8", "const:4:8"]]
- 006a6460 ["CALL", null, ["callee:00c57f00:8"]]
+ 006a64b8 ["INT_ADD", "register:40f0:8", ["const:6a64b8:8", "const:4:8"]]
+ 006a64b8 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-8c26f75bf5930b1cde1126435adad244"></a>

### [`006a65bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a65bc.md) → [`006a6614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6614.md) FUN_006a6614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 6件 [`00811310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/00811310.md) [`00811670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/00811670.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0099691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/0099691c.md) [`00b2f9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f9b8.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 6件 [`00811368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/00811368.md) [`008116c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008116c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.35% / 新版 67.35%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6984",
      "value": [
        "leaf",
        "ram:811368:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a692c",
      "value": [
        "leaf",
        "ram:811310:8"
      ]
    },
    "ordinal": 20,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a65bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a65c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a65c4",
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
      "006a6614",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006a6618",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006a661c",
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
- 006a692c ["INT_ADD", "register:40f0:8", ["const:6a692c:8", "const:4:8"]]
- 006a692c ["CALL", null, ["ram:811310:8"]]
+ 006a6984 ["INT_ADD", "register:40f0:8", ["const:6a6984:8", "const:4:8"]]
+ 006a6984 ["CALL", null, ["ram:811368:8"]]
- 006a65bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a65bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a65bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 006a65bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a65c0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 006a65c0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 006a65c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006a65c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4cef6f1cafa985f9487733f80d14a40e"></a>

### [`006a6a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6a54.md) → [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) FUN_006a6aac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006af39c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af39c.md) [`006af66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af66c.md) [`006afabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afabc.md) · 呼出先 18件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md) [`006adf28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006adf28.md)
- 新版 呼出元 3件 [`006af3f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af3f4.md) [`006af6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af6c4.md) [`006afb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afb14.md) · 呼出先 18件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`006adf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a6c78",
      "incomplete_value": false,
      "site": "006a6c84",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a6c20",
      "incomplete_value": false,
      "site": "006a6c2c",
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
            "const:c00:8"
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a6b50",
      "incomplete_value": true,
      "site": "006a6b68",
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
            "const:2f08:8"
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
      "definition_site": "006a6b54",
      "incomplete_value": true,
      "site": "006a6b68",
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
      "unmatched:006a6a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a6a80",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006a6a90",
      "READ",
      [
        "storage",
        "002a459e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a6ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006a6ad8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006a6ae8",
      "READ",
      [
        "storage",
        "002a4551",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a6b68 ["INT_ADD", "register:40f0:8", ["const:6a6b68:8", "const:4:8"]]
- 006a6b68 ["CALL", null, ["callee:008bb144:8"]]
+ 006a6bc0 ["INT_ADD", "register:40f0:8", ["const:6a6bc0:8", "const:4:8"]]
+ 006a6bc0 ["CALL", null, ["callee:008bb144:8"]]
- 006a6a78 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 006a6a78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006a6a7c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006a6a7c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 006a6a7c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-1ca8a0063e56ed46ead33debd1f3815b"></a>

### [`006a6e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6e04.md) → [`006a6e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6e5c.md) FUN_006a6e5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a74c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a74c0.md) · 呼出先 4件 [`00811670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/00811670.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b2f9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f9b8.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 1件 [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) · 呼出先 4件 [`008116c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008116c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a6e34",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b2fa54"
      ]
    ],
    [
      "unmatched:006a6e3c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006a6eb4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b2fa54"
      ]
    ]
  ],
  "added": [
    [
      "006a6e8c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b2fa54"
      ]
    ],
    [
      "006a6e94",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006a6f0c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b2fa54"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a6e20 ["INT_ADD", "register:40f0:8", ["const:6a6e20:8", "const:4:8"]]
- 006a6e20 ["CALL", null, ["callee:00851550:8"]]
+ 006a6e78 ["INT_ADD", "register:40f0:8", ["const:6a6e78:8", "const:4:8"]]
+ 006a6e78 ["CALL", null, ["callee:00851550:8"]]
- 006a6e28 ["INT_LEFT", "tmp:0:8", ["register:4040:8", "const:3:4"]]
- 006a6e28 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 006a6e28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:1:8"]]
- 006a6e28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:1:8"]]
- 006a6e2c ["INT_LEFT", "tmp:0:8", ["const:47:8", "const:c:4"]]
- 006a6e2c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 006a6e2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:1:8"]]
- 006a6e2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:1:8"]]
~~~


<a id="compare-60a943d714524c27171a37ea4f5e0580"></a>

### [`006a72e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a72e4.md) → [`006a733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a733c.md) FUN_006a733c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`006ac918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac918.md) [`006afc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afc20.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) · 呼出先 9件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b6f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f40.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 3件 [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) [`006afc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc78.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 9件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.39% / 新版 87.39%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a7330",
      "incomplete_value": true,
      "site": "006a7338",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "006a73c0",
      "incomplete_value": true,
      "site": "006a73c4",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a73bc",
      "incomplete_value": false,
      "site": "006a73c4",
      "value": [
        "leaf",
        "const:cc:8"
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
      "unmatched:006a7318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a739c"
      ]
    ],
    [
      "unmatched:006a7354",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ],
    [
      "006a7408",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a7438"
      ]
    ]
  ],
  "added": [
    [
      "006a7370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a739c"
      ]
    ],
    [
      "006a73ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ],
    [
      "006a7408",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a7420"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a7338 ["COPY", "register:0:8", ["register:4040:8"]]
- 006a7338 ["INT_ADD", "register:40f0:8", ["const:6a7338:8", "const:4:8"]]
- 006a7338 ["CALLIND", null, ["register:0:8"]]
+ 006a7390 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a7390 ["INT_ADD", "register:40f0:8", ["const:6a7390:8", "const:4:8"]]
+ 006a7390 ["CALLIND", null, ["register:0:8"]]
- 006a736c ["INT_ADD", "register:40f0:8", ["const:6a736c:8", "const:4:8"]]
- 006a736c ["CALL", null, ["callee:008b79a0:8"]]
+ 006a73c4 ["INT_ADD", "register:40f0:8", ["const:6a73c4:8", "const:4:8"]]
+ 006a73c4 ["CALL", null, ["callee:008b79a0:8"]]
- 006a73ac ["INT_ADD", "register:40f0:8", ["const:6a73ac:8", "const:4:8"]]
- 006a73ac ["CALL", null, ["callee:008b7a20:8"]]
+ 006a7404 ["INT_ADD", "register:40f0:8", ["const:6a7404:8", "const:4:8"]]
+ 006a7404 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-be21b95be5f32ddbe1b1080a1c836adc"></a>

### [`006a74c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a74c0.md) → [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) FUN_006a7518

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 46件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 46件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.96% / 新版 53.96%

優先判定に残った影響 `call_argument_candidate` 28件, `call_target` 1件, `store_condition` 4件, `store_value` 6件, `unresolved_branch_alignment` 82件, `unresolved_call_alignment` 126件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 111件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a7e78",
      "incomplete_value": false,
      "site": "006a7e78",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a7e20",
      "incomplete_value": false,
      "site": "006a7e20",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a7fc8",
      "incomplete_value": false,
      "site": "006a7fc8",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a7f70",
      "incomplete_value": false,
      "site": "006a7f70",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "ordinal": 80,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a87d0",
      "incomplete_value": true,
      "site": "006a87d0",
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
      "definition_site": "006a8778",
      "incomplete_value": true,
      "site": "006a8778",
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
    "ordinal": 155,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a7580",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "uleb128"
      ]
    ],
    [
      "unmatched:006a755c",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "qword"
      ]
    ],
    [
      "006a76c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00811310"
      ]
    ]
  ],
  "added": [
    [
      "006a7580",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ],
    [
      "006a75b4",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "dword"
      ]
    ],
    [
      "006a76c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00811368"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a7618 ["INT_ADD", "register:40f0:8", ["const:6a7618:8", "const:4:8"]]
- 006a7618 ["CALL", null, ["callee:00851550:8"]]
+ 006a7670 ["INT_ADD", "register:40f0:8", ["const:6a7670:8", "const:4:8"]]
+ 006a7670 ["CALL", null, ["callee:00851550:8"]]
- 006a7670 ["INT_ADD", "register:40f0:8", ["const:6a7670:8", "const:4:8"]]
- 006a7670 ["CALL", null, ["ram:811310:8"]]
+ 006a76c8 ["INT_ADD", "register:40f0:8", ["const:6a76c8:8", "const:4:8"]]
+ 006a76c8 ["CALL", null, ["ram:811368:8"]]
- 006a7a0c ["INT_ADD", "register:40f0:8", ["const:6a7a0c:8", "const:4:8"]]
- 006a7a0c ["CALL", null, ["callee:0047e91c:8"]]
+ 006a7a64 ["INT_ADD", "register:40f0:8", ["const:6a7a64:8", "const:4:8"]]
+ 006a7a64 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-5de0b1344ec9acce12277f798d4c6d71"></a>

### [`006a9764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a9/006a9764.md) → [`006a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a9/006a97bc.md) FUN_006a97bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 16件 [`0044bad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044bad8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 16件 [`0044bb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044bb18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.04% / 新版 79.04%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a9844",
      "incomplete_value": true,
      "site": "006a9848",
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
      "definition_site": "006a983c",
      "incomplete_value": true,
      "site": "006a9848",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a9840",
      "incomplete_value": true,
      "site": "006a9848",
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
      "unmatched:006a97a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "unmatched:006a97c4",
      "READ",
      [
        "storage",
        "002bb263",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a97cc",
      "WRITE",
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
      "006a9800",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "006a981c",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ],
    [
      "006a9824",
      "WRITE",
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
- 006a97f0 ["INT_ADD", "register:40f0:8", ["const:6a97f0:8", "const:4:8"]]
- 006a97f0 ["CALL", null, ["callee:0048ef30:8"]]
+ 006a9848 ["INT_ADD", "register:40f0:8", ["const:6a9848:8", "const:4:8"]]
+ 006a9848 ["CALL", null, ["callee:0048ef30:8"]]
- 006a9848 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 006a9848 ["COPY", "tmp:1:8", ["register:40a0:8"]]
- 006a9848 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 006a9848 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
- 006a9894 ["INT_ADD", "register:40f0:8", ["const:6a9894:8", "const:4:8"]]
- 006a9894 ["CALL", null, ["callee:00851550:8"]]
+ 006a98ec ["INT_ADD", "register:40f0:8", ["const:6a98ec:8", "const:4:8"]]
+ 006a98ec ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8614e9402ac6a4d036b6c47a13979cbf"></a>

### [`006a9c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a9/006a9c20.md) → [`006a9c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a9/006a9c78.md) FUN_006a9c78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 18件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 18件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 73件, `unresolved_call_alignment` 34件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a9d78",
      "incomplete_value": true,
      "site": "006a9db0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a9d74",
      "incomplete_value": true,
      "site": "006a9db0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:40b8:4"
              ],
              [
                "leaf",
                "const:22:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a9d60",
      "incomplete_value": true,
      "site": "006a9d78",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:006a9c9c",
      "DATA",
      [
        "storage",
        "003339e8",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:006a9ca4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006a9ca8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ],
  "added": [
    [
      "006a9cf4",
      "DATA",
      [
        "storage",
        "003339e8",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "006a9cfc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006a9d00",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a9d58 ["INT_ADD", "register:40f0:8", ["const:6a9d58:8", "const:4:8"]]
- 006a9d58 ["CALL", null, ["callee:00469c44:8"]]
+ 006a9db0 ["INT_ADD", "register:40f0:8", ["const:6a9db0:8", "const:4:8"]]
+ 006a9db0 ["CALL", null, ["callee:00469c44:8"]]
- 006a9d78 ["INT_ADD", "register:40f0:8", ["const:6a9d78:8", "const:4:8"]]
- 006a9d78 ["CALL", null, ["callee:00469c44:8"]]
+ 006a9dd0 ["INT_ADD", "register:40f0:8", ["const:6a9dd0:8", "const:4:8"]]
+ 006a9dd0 ["CALL", null, ["callee:00469c44:8"]]
- 006a9db8 ["INT_ADD", "register:40f0:8", ["const:6a9db8:8", "const:4:8"]]
- 006a9db8 ["CALL", null, ["callee:00469c44:8"]]
+ 006a9e10 ["INT_ADD", "register:40f0:8", ["const:6a9e10:8", "const:4:8"]]
+ 006a9e10 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-3a536f0cada1b332d82466f286a5d7eb"></a>

### [`006aab54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006aa/006aab54.md) → [`006aabac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006aa/006aabac.md) FUN_006aabac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006ac918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac918.md) · 呼出先 11件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 1件 [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) · 呼出先 11件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 33.06% / 新版 33.06%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 24件, `unresolved_store_alignment` 66件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006aabd8",
      "incomplete_value": true,
      "site": "006aabd8",
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
      "definition_site": "006aab80",
      "incomplete_value": true,
      "site": "006aab80",
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
      "definition_site": "006aabe0",
      "incomplete_value": false,
      "site": "006aabf0",
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
      "definition_site": "006aab88",
      "incomplete_value": false,
      "site": "006aab98",
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
      "definition_site": "006aabe8",
      "incomplete_value": false,
      "site": "006aabf0",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006aab90",
      "incomplete_value": false,
      "site": "006aab98",
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
            "const:1c0:8"
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
      "006aabd4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006aabe0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006aabe8",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006aabd4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006aabe0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006aabe8",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006aab98 ["INT_ADD", "register:40f0:8", ["const:6aab98:8", "const:4:8"]]
- 006aab98 ["CALL", null, ["callee:00c586e0:8"]]
+ 006aabf0 ["INT_ADD", "register:40f0:8", ["const:6aabf0:8", "const:4:8"]]
+ 006aabf0 ["CALL", null, ["callee:00c586e0:8"]]
- 006aabd8 ["COPY", "register:40c0:8", ["const:ca4000:8"]]
+ 006aac30 ["COPY", "register:40c0:8", ["const:ca5000:8"]]
- 006aabf0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 006aabf0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 006aabf0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:23:8"]]
- 006aabf0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-f99d1a1847def6af2cab139afadf1647"></a>

### [`006ab384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ab/006ab384.md) → [`006ab3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ab/006ab3dc.md) FUN_006ab3dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006ac918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac918.md) · 呼出先 32件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e778.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md)
- 新版 呼出元 1件 [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) · 呼出先 32件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b8.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.77% / 新版 75.77%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 28件, `call_target` 1件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 26件, `unresolved_store_alignment` 60件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ab524",
      "incomplete_value": true,
      "site": "006ab53c",
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ab4cc",
      "incomplete_value": true,
      "site": "006ab4e4",
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006abfb8",
      "incomplete_value": true,
      "site": "006abfc4",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:301:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006abf60",
      "incomplete_value": true,
      "site": "006abf6c",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:355:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "006abcc8",
      "incomplete_value": true,
      "site": "006abcc8",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ],
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006abc58",
      "incomplete_value": true,
      "site": "006abc58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4000:4"
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
    "ordinal": 61,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006ab3c4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:006ab3f4",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:006ab3f4",
      "PARAM",
      [
        "storage",
        "00ca4fd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "006ab41c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006ab44c",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ],
    [
      "006ab44c",
      "PARAM",
      [
        "storage",
        "00ca50d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ab41c ["INT_ADD", "register:40f0:8", ["const:6ab41c:8", "const:4:8"]]
- 006ab41c ["CALL", null, ["callee:0047e91c:8"]]
+ 006ab474 ["INT_ADD", "register:40f0:8", ["const:6ab474:8", "const:4:8"]]
+ 006ab474 ["CALL", null, ["callee:0047e91c:8"]]
+ 006ab41c ["LOAD", "tmp:0:1", ["const:1b1:8", "register:4040:8"]]
+ 006ab41c ["INT_ZEXT", "register:4040:8", ["tmp:0:1"]]
- 006ab520 ["INT_ADD", "register:40f0:8", ["const:6ab520:8", "const:4:8"]]
- 006ab520 ["CALL", null, ["ram:71d1ac:8"]]
+ 006ab578 ["INT_ADD", "register:40f0:8", ["const:6ab578:8", "const:4:8"]]
+ 006ab578 ["CALL", null, ["ram:71d204:8"]]
~~~


<a id="compare-3fa5a24b065704b75d34fc0ea7e71f13"></a>

### [`006ac86c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac86c.md) → [`006ac8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac8c4.md) FUN_006ac8c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) · 呼出先 5件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006c0dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0dd4.md) [`006c0f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0e2c.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006ac8e0",
      "incomplete_value": true,
      "site": "006ac8e0",
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
      "definition_site": "006ac888",
      "incomplete_value": true,
      "site": "006ac888",
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
      "definition_site": "006ac8e8",
      "incomplete_value": false,
      "site": "006ac8fc",
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
      "definition_site": "006ac890",
      "incomplete_value": false,
      "site": "006ac8a4",
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
      "definition_site": "006ac8f0",
      "incomplete_value": false,
      "site": "006ac8fc",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ac898",
      "incomplete_value": false,
      "site": "006ac8a4",
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
            "const:1c0:8"
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
      "006ac8dc",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006ac8e8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006ac8f0",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006ac8dc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006ac8e8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006ac8f0",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ac8a4 ["INT_ADD", "register:40f0:8", ["const:6ac8a4:8", "const:4:8"]]
- 006ac8a4 ["CALL", null, ["callee:00c586e0:8"]]
+ 006ac8fc ["INT_ADD", "register:40f0:8", ["const:6ac8fc:8", "const:4:8"]]
+ 006ac8fc ["CALL", null, ["callee:00c586e0:8"]]
- 006ac884 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 006ac884 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 006ac8dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 006ac8dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006ac890 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 006ac890 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 006ac890 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 006ac890 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 006ac8e8 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 006ac8e8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 006ac8e8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 006ac8e8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-acc392fb801fb5deba7b017983d80e07"></a>

### [`006ac918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac918.md) → [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) FUN_006ac970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 11件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005ccd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005ccd04.md) [`006a72e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a72e4.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 11件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`006a733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a733c.md)

変更の種類 call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `call_target` 2件, `store_condition` 3件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006aca40",
      "incomplete_value": true,
      "site": "006aca48",
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
                "const:70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ac9e8",
      "incomplete_value": true,
      "site": "006ac9f0",
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006acaac",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006aca54",
      "value": [
        "leaf",
        "ram:6c0f38:8"
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
      "site": "006acb20",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006acac8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006aca40",
      "READ",
      [
        "storage",
        "002c4030",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006aca0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006aca2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006acb38"
      ]
    ]
  ],
  "added": [
    [
      "006aca40",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ],
    [
      "006aca64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006aca84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006acb38"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ac9e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 006ac9e8 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 006ac9e8 ["COPY", "register:5008:8", ["const:0:8"]]
- 006ac9e8 ["COPY", "register:5010:8", ["const:0:8"]]
+ 006aca40 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:70:8"]]
+ 006aca40 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006aca40 ["COPY", "register:5008:8", ["const:0:8"]]
+ 006aca40 ["COPY", "register:5010:8", ["const:0:8"]]
- 006aca54 ["INT_ADD", "register:40f0:8", ["const:6aca54:8", "const:4:8"]]
- 006aca54 ["CALL", null, ["ram:6c0f38:8"]]
+ 006acaac ["INT_ADD", "register:40f0:8", ["const:6acaac:8", "const:4:8"]]
+ 006acaac ["CALL", null, ["ram:6c0f90:8"]]
- 006acaa0 ["INT_ADD", "register:40f0:8", ["const:6acaa0:8", "const:4:8"]]
- 006acaa0 ["CALL", null, ["callee:006a733c:8"]]
+ 006acaf8 ["INT_ADD", "register:40f0:8", ["const:6acaf8:8", "const:4:8"]]
+ 006acaf8 ["CALL", null, ["callee:006a733c:8"]]
~~~


<a id="compare-cea5d637a7fb9e767709deee1857f768"></a>

### [`006acaec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acaec.md) → [`006acb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acb44.md) FUN_006acb44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 21件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467af0.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`004688b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004688b8.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 21件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`004688f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/004688f8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.90% / 新版 91.90%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 8件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006acb7c",
      "incomplete_value": true,
      "site": "006acb7c",
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
      "definition_site": "006acb24",
      "incomplete_value": true,
      "site": "006acb24",
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
      "definition_site": "006acb84",
      "incomplete_value": false,
      "site": "006acb98",
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
      "definition_site": "006acb2c",
      "incomplete_value": false,
      "site": "006acb40",
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
      "definition_site": "006acb8c",
      "incomplete_value": false,
      "site": "006acb98",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006acb34",
      "incomplete_value": false,
      "site": "006acb40",
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
            "const:1c0:8"
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
      "006acb78",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006acb84",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acb8c",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006acb78",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006acb84",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acb8c",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006acb40 ["INT_ADD", "register:40f0:8", ["const:6acb40:8", "const:4:8"]]
- 006acb40 ["CALL", null, ["callee:00c586e0:8"]]
+ 006acb98 ["INT_ADD", "register:40f0:8", ["const:6acb98:8", "const:4:8"]]
+ 006acb98 ["CALL", null, ["callee:00c586e0:8"]]
- 006acb7c ["INT_ADD", "register:40f0:8", ["const:6acb7c:8", "const:4:8"]]
- 006acb7c ["CALL", null, ["callee:0046cac4:8"]]
+ 006acbd4 ["INT_ADD", "register:40f0:8", ["const:6acbd4:8", "const:4:8"]]
+ 006acbd4 ["CALL", null, ["callee:0046cac4:8"]]
- 006acbc4 ["INT_ADD", "register:40f0:8", ["const:6acbc4:8", "const:4:8"]]
- 006acbc4 ["CALL", null, ["callee:00467b30:8"]]
+ 006acc1c ["INT_ADD", "register:40f0:8", ["const:6acc1c:8", "const:4:8"]]
+ 006acc1c ["CALL", null, ["callee:00467b30:8"]]
~~~


<a id="compare-dfa054d5afa6b4ec3264da05efa31ff5"></a>

### [`006acf5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acf5c.md) → [`006acfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acfb4.md) FUN_006acfb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006acaec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acaec.md) · 呼出先 13件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md)
- 新版 呼出元 1件 [`006acb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acb44.md) · 呼出先 13件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.70% / 新版 95.70%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006acf9c",
      "incomplete_value": false,
      "site": "006acfac",
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
    "new": null,
    "old": {
      "definition_site": "006acfa4",
      "incomplete_value": false,
      "site": "006acfac",
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
            "const:1c0:8"
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
      "definition_site": "006ad19c",
      "incomplete_value": true,
      "site": "006ad1b8",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006acf88",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:006acf90",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006acf94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ad010"
      ]
    ]
  ],
  "added": [
    [
      "006acfe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006acfe8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006acfec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ad010"
      ]
    ]
  ]
}
~~~


~~~diff
- 006acfac ["INT_ADD", "register:40f0:8", ["const:6acfac:8", "const:4:8"]]
- 006acfac ["CALL", null, ["callee:00c586e0:8"]]
+ 006ad004 ["INT_ADD", "register:40f0:8", ["const:6ad004:8", "const:4:8"]]
+ 006ad004 ["CALL", null, ["callee:00c586e0:8"]]
- 006ad1b8 ["INT_ADD", "register:40f0:8", ["const:6ad1b8:8", "const:4:8"]]
- 006ad1b8 ["CALL", null, ["callee:00468fc8:8"]]
+ 006ad210 ["INT_ADD", "register:40f0:8", ["const:6ad210:8", "const:4:8"]]
+ 006ad210 ["CALL", null, ["callee:00468fc8:8"]]
- 006ad1dc ["INT_ADD", "register:40f0:8", ["const:6ad1dc:8", "const:4:8"]]
- 006ad1dc ["CALL", null, ["callee:00468fc8:8"]]
+ 006ad234 ["INT_ADD", "register:40f0:8", ["const:6ad234:8", "const:4:8"]]
+ 006ad234 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-9082ecb2e4f6267304b1c1c975dbd0f5"></a>

### [`006ad414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006ad414.md) → [`006ad46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006ad46c.md) FUN_006ad46c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006acaec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acaec.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`006acb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acb44.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 23.55% / 新版 23.55%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 143件, `unresolved_store_alignment` 40件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006ad5b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006ad5b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "unmatched:006ad5c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "006ad60c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006ad610",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "006ad61c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ad434 ["INT_ADD", "register:40f0:8", ["const:6ad434:8", "const:4:8"]]
- 006ad434 ["CALL", null, ["callee:004678a0:8"]]
+ 006ad48c ["INT_ADD", "register:40f0:8", ["const:6ad48c:8", "const:4:8"]]
+ 006ad48c ["CALL", null, ["callee:004678a0:8"]]
- 006ad44c ["INT_ADD", "register:40f0:8", ["const:6ad44c:8", "const:4:8"]]
- 006ad44c ["CALL", null, ["callee:00467b6c:8"]]
+ 006ad4a4 ["INT_ADD", "register:40f0:8", ["const:6ad4a4:8", "const:4:8"]]
+ 006ad4a4 ["CALL", null, ["callee:00467b6c:8"]]
- 006ad484 ["INT_ADD", "register:40f0:8", ["const:6ad484:8", "const:4:8"]]
- 006ad484 ["CALL", null, ["callee:00851550:8"]]
+ 006ad4dc ["INT_ADD", "register:40f0:8", ["const:6ad4dc:8", "const:4:8"]]
+ 006ad4dc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-04ec34ea0f707b04cba1f251376af035"></a>

### [`006aded8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006aded8.md) → [`006adf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf30.md) FUN_006adf30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006adefc",
      "DATA",
      [
        "storage",
        "00c75a00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006adf54",
      "DATA",
      [
        "storage",
        "00c75ad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006adeec ["INT_ADD", "register:40f0:8", ["const:6adeec:8", "const:4:8"]]
- 006adeec ["CALL", null, ["callee:00c57f60:8"]]
+ 006adf44 ["INT_ADD", "register:40f0:8", ["const:6adf44:8", "const:4:8"]]
+ 006adf44 ["CALL", null, ["callee:00c57f60:8"]]
- 006adef8 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 006adef8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006adef8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006adef8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006adefc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006adefc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a399b27a8e81da96f366711d76978f74"></a>

### [`006adf10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006adf10.md) → [`006adf68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf68.md) FUN_006adf68

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
      "definition_site": "006adf6c",
      "incomplete_value": false,
      "site": "006adf70",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006adf14",
      "incomplete_value": false,
      "site": "006adf18",
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
            "const:a00:8"
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
      "006adf70",
      "DATA",
      [
        "storage",
        "00c75a00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006adf70",
      "DATA",
      [
        "storage",
        "00c75ad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006adf14 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 006adf14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006adf14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006adf14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006adf6c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 006adf6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006adf6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006adf6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97c29496220c876c3264bef81aa381ed"></a>

### [`006adf30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006adf30.md) → [`006adf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf88.md) FUN_006adf88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 32件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.46% / 新版 72.46%

優先判定に残った影響 `call_argument_candidate` 31件, `store_condition` 5件, `unresolved_branch_alignment` 28件, `unresolved_call_alignment` 15件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 63件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ae020",
      "incomplete_value": true,
      "site": "006ae028",
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
    "old": {
      "definition_site": "006adfc8",
      "incomplete_value": true,
      "site": "006adfd0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006ae050",
      "incomplete_value": true,
      "site": "006ae054",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006ae0b0",
      "incomplete_value": true,
      "site": "006ae0b8",
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
            "const:88:8"
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
      "unmatched:006adf5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:006adfe8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00807cb0"
      ]
    ],
    [
      "unmatched:006adff4",
      "READ",
      [
        "storage",
        "Stack[-0x200]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006adfb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "006ae040",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00807cb0"
      ]
    ],
    [
      "006ae04c",
      "READ",
      [
        "storage",
        "Stack[-0x200]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006adf78 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 006adfd0 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 006adfd0 ["INT_ADD", "register:40f0:8", ["const:6adfd0:8", "const:4:8"]]
- 006adfd0 ["CALL", null, ["callee:008112cc:8"]]
+ 006ae028 ["INT_ADD", "register:40f0:8", ["const:6ae028:8", "const:4:8"]]
+ 006ae028 ["CALL", null, ["callee:008112cc:8"]]
- 006ae028 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 006ae028 ["INT_ADD", "tmp:1:8", ["register:8:8", "const:10:8"]]
- 006ae028 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
~~~


<a id="compare-f2fe783cbcc566c52da50c811af05e1b"></a>

### [`006af158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af158.md) → [`006af1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af1b0.md) FUN_006af1b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006adf30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006adf30.md) · 呼出先 5件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`006adf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf88.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006af218",
      "incomplete_value": true,
      "site": "006af21c",
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
            "const:1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af1c0",
      "incomplete_value": true,
      "site": "006af1c4",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006af264",
      "incomplete_value": true,
      "site": "006af268",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006af260",
      "incomplete_value": true,
      "site": "006af268",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006af184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006af280"
      ]
    ]
  ],
  "added": [
    [
      "006af1dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006af280"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af1c4 ["INT_ADD", "register:40f0:8", ["const:6af1c4:8", "const:4:8"]]
- 006af1c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006af21c ["INT_ADD", "register:40f0:8", ["const:6af21c:8", "const:4:8"]]
+ 006af21c ["CALL", null, ["callee:00c57f60:8"]]
- 006af210 ["INT_ADD", "register:40f0:8", ["const:6af210:8", "const:4:8"]]
- 006af210 ["CALL", null, ["callee:0043bb60:8"]]
+ 006af268 ["INT_ADD", "register:40f0:8", ["const:6af268:8", "const:4:8"]]
+ 006af268 ["CALL", null, ["callee:0043bb60:8"]]
- 006af17c ["INT_ADD", "register:40f0:8", ["const:6af17c:8", "const:4:8"]]
- 006af17c ["CALL", null, ["callee:00c580b0:8"]]
+ 006af1d4 ["INT_ADD", "register:40f0:8", ["const:6af1d4:8", "const:4:8"]]
+ 006af1d4 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-b612edf75f693fde6c52d3a04cd192c4"></a>

### [`006af24c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af24c.md) → [`006af2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af2a4.md) FUN_006af2a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006adf30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ad/006adf30.md) [`00827918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00827/00827918.md) [`009e4a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e4/009e4a08.md) · 呼出先 5件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 3件 [`006adf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf88.md) [`00827970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827970.md) [`009e4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4a5c.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006af2cc",
      "incomplete_value": true,
      "site": "006af2d8",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "006af2d0",
      "incomplete_value": true,
      "site": "006af2d8",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "006af2d4",
      "incomplete_value": true,
      "site": "006af2d8",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:006af278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006af374"
      ]
    ]
  ],
  "added": [
    [
      "006af2d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006af374"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af2d8 ["INT_ADD", "register:40f0:8", ["const:6af2d8:8", "const:4:8"]]
- 006af2d8 ["CALL", null, ["callee:00c58010:8"]]
+ 006af330 ["INT_ADD", "register:40f0:8", ["const:6af330:8", "const:4:8"]]
+ 006af330 ["CALL", null, ["callee:00c58010:8"]]
- 006af304 ["INT_ADD", "register:40f0:8", ["const:6af304:8", "const:4:8"]]
- 006af304 ["CALL", null, ["callee:0043bb60:8"]]
+ 006af35c ["INT_ADD", "register:40f0:8", ["const:6af35c:8", "const:4:8"]]
+ 006af35c ["CALL", null, ["callee:0043bb60:8"]]
+ 006af304 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 006af304 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
+ 006af304 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 006af304 ["COPY", "register:4040:8", ["tmp:0:8"]]
~~~


<a id="compare-a8bd0c264fae9de2645dd4690f6e6c61"></a>

### [`006af344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af344.md) → [`006af39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af39c.md) FUN_006af39c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006af3bc",
      "incomplete_value": false,
      "site": "006af3c0",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af364",
      "incomplete_value": false,
      "site": "006af368",
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
            "const:a70:8"
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
      "006af3c0",
      "DATA",
      [
        "storage",
        "00c75a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af3c0",
      "DATA",
      [
        "storage",
        "00c75b40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af358 ["INT_ADD", "register:40f0:8", ["const:6af358:8", "const:4:8"]]
- 006af358 ["CALL", null, ["callee:00c57f60:8"]]
+ 006af3b0 ["INT_ADD", "register:40f0:8", ["const:6af3b0:8", "const:4:8"]]
+ 006af3b0 ["CALL", null, ["callee:00c57f60:8"]]
- 006af364 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 006af364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006af3bc ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 006af3bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006af3bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006af3bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-439a6bf6de6c4cbcf5e9d88d31526cd3"></a>

### [`006af37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af37c.md) → [`006af3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af3d4.md) FUN_006af3d4

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
      "definition_site": "006af3d8",
      "incomplete_value": false,
      "site": "006af3dc",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af380",
      "incomplete_value": false,
      "site": "006af384",
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
      "006af3dc",
      "DATA",
      [
        "storage",
        "00c75a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af3dc",
      "DATA",
      [
        "storage",
        "00c75b40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af380 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 006af380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006af3d8 ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 006af3d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006af3d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006af3d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c6ab8f9d5b27281e65b152107435a4a2"></a>

### [`006af39c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af39c.md) → [`006af3f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af3f4.md) FUN_006af3f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006a6a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6a54.md) [`006af580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af580.md) [`006af584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af584.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`006af5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5d8.md) [`006af5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5dc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.19% / 新版 82.19%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006af430",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006af3d8",
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
      "006af430",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006af42c",
      "DATA",
      [
        "storage",
        "00c75ae0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006af42c",
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
      "006af430",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006af484",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ],
    [
      "006af484",
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
- 006af3d8 ["INT_ADD", "register:40f0:8", ["const:6af3d8:8", "const:4:8"]]
- 006af3d8 ["CALL", null, ["ram:47acf4:8"]]
+ 006af430 ["INT_ADD", "register:40f0:8", ["const:6af430:8", "const:4:8"]]
+ 006af430 ["CALL", null, ["ram:47ad34:8"]]
- 006af3e4 ["INT_ADD", "register:40f0:8", ["const:6af3e4:8", "const:4:8"]]
- 006af3e4 ["CALL", null, ["callee:0047ce14:8"]]
+ 006af43c ["INT_ADD", "register:40f0:8", ["const:6af43c:8", "const:4:8"]]
+ 006af43c ["CALL", null, ["callee:0047ce14:8"]]
- 006af3f4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006af3f4 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 006af44c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006af44c ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
~~~


<a id="compare-71a1bee794956ddf43cb0aaa0ccde982"></a>

### [`006af538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af538.md) → [`006af590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af590.md) FUN_006af590

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
      "unmatched:006af55c",
      "DATA",
      [
        "storage",
        "00c75ae0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006af560",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006af564",
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
      "006af5b4",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ],
    [
      "006af5b8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006af5bc",
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
- 006af54c ["INT_ADD", "register:40f0:8", ["const:6af54c:8", "const:4:8"]]
- 006af54c ["CALL", null, ["callee:00c57f60:8"]]
+ 006af5a4 ["INT_ADD", "register:40f0:8", ["const:6af5a4:8", "const:4:8"]]
+ 006af5a4 ["CALL", null, ["callee:00c57f60:8"]]
- 006af558 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 006af558 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af558 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af558 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006af55c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006af55c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006af55c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 006af55c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7abe09c60d9174fe90e6fdb8bcd83149"></a>

### [`006af56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af56c.md) → [`006af5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5c4.md) FUN_006af5c4

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
      "definition_site": "006af5d0",
      "incomplete_value": false,
      "site": "006af5d0",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af578",
      "incomplete_value": false,
      "site": "006af578",
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
            "const:ae0:8"
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
      "006af5d0",
      "DATA",
      [
        "storage",
        "00c75ae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af5d0",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af574 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 006af574 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006af574 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006af574 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006af5cc ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 006af5cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006af5cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006af5cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9fae5f2bef40cb6feb024b3e08dc94c1"></a>

### [`006af588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af588.md) → [`006af5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5e0.md) FUN_006af5e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00ab0ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab0/00ab0ddc.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ab0e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0e4c.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006af5c8",
      "DATA",
      [
        "storage",
        "00333fcc",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "006af620",
      "DATA",
      [
        "storage",
        "00333fcc",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af598 ["INT_ADD", "register:40f0:8", ["const:6af598:8", "const:4:8"]]
- 006af598 ["CALL", null, ["callee:00851550:8"]]
+ 006af5f0 ["INT_ADD", "register:40f0:8", ["const:6af5f0:8", "const:4:8"]]
+ 006af5f0 ["CALL", null, ["callee:00851550:8"]]
- 006af5a8 ["INT_ADD", "register:40f0:8", ["const:6af5a8:8", "const:4:8"]]
- 006af5a8 ["CALL", null, ["callee:00851550:8"]]
+ 006af600 ["INT_ADD", "register:40f0:8", ["const:6af600:8", "const:4:8"]]
+ 006af600 ["CALL", null, ["callee:00851550:8"]]
- 006af5b0 ["INT_ADD", "register:40f0:8", ["const:6af5b0:8", "const:4:8"]]
- 006af5b0 ["CALL", null, ["callee:00851550:8"]]
+ 006af608 ["INT_ADD", "register:40f0:8", ["const:6af608:8", "const:4:8"]]
+ 006af608 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-66662eb51ee15191c5b9fa68a01acb92"></a>

### [`006af614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af614.md) → [`006af66c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af66c.md) FUN_006af66c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006af638",
      "DATA",
      [
        "storage",
        "00c75b70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af690",
      "DATA",
      [
        "storage",
        "00c75c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af628 ["INT_ADD", "register:40f0:8", ["const:6af628:8", "const:4:8"]]
- 006af628 ["CALL", null, ["callee:00c57f60:8"]]
+ 006af680 ["INT_ADD", "register:40f0:8", ["const:6af680:8", "const:4:8"]]
+ 006af680 ["CALL", null, ["callee:00c57f60:8"]]
- 006af634 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 006af634 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af634 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af634 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006af638 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006af638 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-310ac634af45c7b4d1c2749cdc268fc4"></a>

### [`006af64c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af64c.md) → [`006af6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af6a4.md) FUN_006af6a4

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
      "unmatched:006af654",
      "DATA",
      [
        "storage",
        "00c75b70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af6ac",
      "DATA",
      [
        "storage",
        "00c75c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af64c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 006af650 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 006af650 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af650 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af650 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006af654 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006af654 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-dc65ff9b9e6b11026546c40e33900c44"></a>

### [`006af66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af66c.md) → [`006af6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af6c4.md) FUN_006af6c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006a6a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6a54.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006af698",
      "incomplete_value": false,
      "site": "006af6a0",
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
      "unmatched:006af694",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006af6ec",
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
- 006af6a0 ["INT_ADD", "register:40f0:8", ["const:6af6a0:8", "const:4:8"]]
- 006af6a0 ["CALL", null, ["callee:0047ce14:8"]]
+ 006af6f8 ["INT_ADD", "register:40f0:8", ["const:6af6f8:8", "const:4:8"]]
+ 006af6f8 ["CALL", null, ["callee:0047ce14:8"]]
- 006af678 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006af678 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006af6d0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006af6d0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 006af680 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 006af680 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006af6d8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 006af6d8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-c48f7ce6f013caf37d40c7753f8e0af4"></a>

### [`006af6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af6f8.md) → [`006af750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af750.md) FUN_006af750

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006af6f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006af6fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006af71c",
      "DATA",
      [
        "storage",
        "00c75c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af750",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006af754",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006af774",
      "DATA",
      [
        "storage",
        "00c75cd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af6f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006af6f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006af6f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006af6f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006af6fc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006af6fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006af700 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ad1f1bb3029a50261f6180bb0023aae9"></a>

### [`006af72c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af72c.md) → [`006af784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af784.md) FUN_006af784

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
      "definition_site": "006af790",
      "incomplete_value": false,
      "site": "006af790",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af738",
      "incomplete_value": false,
      "site": "006af738",
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
            "const:c00:8"
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
      "006af790",
      "DATA",
      [
        "storage",
        "00c75c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af790",
      "DATA",
      [
        "storage",
        "00c75cd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af734 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 006af734 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006af734 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006af734 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006af78c ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 006af78c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006af78c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006af78c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4ee431b4358507e62b0907beee85a51b"></a>

### [`006af748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af748.md) → [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) FUN_006af7a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md) [`008b92ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b92ec.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b9344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9344.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.09% / 新版 93.09%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_branch_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006af7ec",
      "incomplete_value": true,
      "site": "006af7ec",
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
      "definition_site": "006af794",
      "incomplete_value": true,
      "site": "006af794",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006af7c4",
      "incomplete_value": true,
      "site": "006af7c8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "006af76c",
      "incomplete_value": true,
      "site": "006af770",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006af7d4",
      "incomplete_value": true,
      "site": "006af7d8",
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
      "006af7e8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006af7f4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006af7fc",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006af7e8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006af7f4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006af7fc",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af770 ["INT_ADD", "register:40f0:8", ["const:6af770:8", "const:4:8"]]
- 006af770 ["CALL", null, ["callee:008b92e8:8"]]
+ 006af7c8 ["INT_ADD", "register:40f0:8", ["const:6af7c8:8", "const:4:8"]]
+ 006af7c8 ["CALL", null, ["callee:008b92e8:8"]]
- 006af780 ["INT_ADD", "register:40f0:8", ["const:6af780:8", "const:4:8"]]
- 006af780 ["CALL", null, ["callee:008b92e8:8"]]
+ 006af7d8 ["INT_ADD", "register:40f0:8", ["const:6af7d8:8", "const:4:8"]]
+ 006af7d8 ["CALL", null, ["callee:008b92e8:8"]]
- 006af7ac ["INT_ADD", "register:40f0:8", ["const:6af7ac:8", "const:4:8"]]
- 006af7ac ["CALL", null, ["callee:00c586e0:8"]]
+ 006af804 ["INT_ADD", "register:40f0:8", ["const:6af804:8", "const:4:8"]]
+ 006af804 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-fb469fb5136a38a1975144b32f9eab08"></a>

### [`006afa64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afa64.md) → [`006afabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afabc.md) FUN_006afabc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006afadc",
      "incomplete_value": false,
      "site": "006afae0",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afa84",
      "incomplete_value": false,
      "site": "006afa88",
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
            "const:c80:8"
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
      "006afae0",
      "DATA",
      [
        "storage",
        "00c75c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afae0",
      "DATA",
      [
        "storage",
        "00c75d50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afa78 ["INT_ADD", "register:40f0:8", ["const:6afa78:8", "const:4:8"]]
- 006afa78 ["CALL", null, ["callee:00c57f60:8"]]
+ 006afad0 ["INT_ADD", "register:40f0:8", ["const:6afad0:8", "const:4:8"]]
+ 006afad0 ["CALL", null, ["callee:00c57f60:8"]]
- 006afa84 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 006afa84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afa84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afa84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afadc ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 006afadc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afadc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afadc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-51082820ad17d15b36b5fb2b4541c5a9"></a>

### [`006afa9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afa9c.md) → [`006afaf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afaf4.md) FUN_006afaf4

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
      "unmatched:006afaa4",
      "DATA",
      [
        "storage",
        "00c75c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afafc",
      "DATA",
      [
        "storage",
        "00c75d50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afa9c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 006afaa0 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 006afaa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afaa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afaa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006afaa4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006afaa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-7482e31b9014c037f157d87a9e591cd0"></a>

### [`006afabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afabc.md) → [`006afb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afb14.md) FUN_006afb14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006a6a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6a54.md) [`00811368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/00811368.md) [`00ab09f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab0/00ab09f4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`008113c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008113c0.md) [`00ab0a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0a64.md)

変更の種類 branch_condition_or_target, call, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `call_target` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afb4c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afaf4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006afb68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afb10",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:006afac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006afac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006afac8",
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
      "006afb18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006afb1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006afb20",
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
- 006afaf4 ["INT_ADD", "register:40f0:8", ["const:6afaf4:8", "const:4:8"]]
- 006afaf4 ["CALL", null, ["ram:47acf4:8"]]
+ 006afb4c ["INT_ADD", "register:40f0:8", ["const:6afb4c:8", "const:4:8"]]
+ 006afb4c ["CALL", null, ["ram:47ad34:8"]]
- 006afb10 ["INT_ADD", "register:40f0:8", ["const:6afb10:8", "const:4:8"]]
- 006afb10 ["CALL", null, ["ram:47acf4:8"]]
+ 006afb68 ["INT_ADD", "register:40f0:8", ["const:6afb68:8", "const:4:8"]]
+ 006afb68 ["CALL", null, ["ram:47ad34:8"]]
- 006afabc ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-6eef4477bc5a3232070d9df260732f5d"></a>

### [`006afbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afbd0.md) → [`006afc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc28.md) FUN_006afc28

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
      "definition_site": "006afc4c",
      "incomplete_value": false,
      "site": "006afc4c",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afbf4",
      "incomplete_value": false,
      "site": "006afbf4",
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
            "const:d00:8"
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
      "006afc4c",
      "DATA",
      [
        "storage",
        "00c75d00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afc4c",
      "DATA",
      [
        "storage",
        "00c75dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afbe4 ["INT_ADD", "register:40f0:8", ["const:6afbe4:8", "const:4:8"]]
- 006afbe4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006afc3c ["INT_ADD", "register:40f0:8", ["const:6afc3c:8", "const:4:8"]]
+ 006afc3c ["CALL", null, ["callee:00c57f60:8"]]
- 006afbf0 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 006afbf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afbf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afbf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afc48 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 006afc48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afc48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afc48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8abed381ce266977ceb2d8a59ca603f6"></a>

### [`006afc04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afc04.md) → [`006afc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc5c.md) FUN_006afc5c

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
      "definition_site": "006afc68",
      "incomplete_value": false,
      "site": "006afc68",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afc10",
      "incomplete_value": false,
      "site": "006afc10",
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
            "const:d00:8"
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
      "006afc68",
      "DATA",
      [
        "storage",
        "00c75d00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afc68",
      "DATA",
      [
        "storage",
        "00c75dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afc0c ["COPY", "tmp:0:8", ["const:d00:8"]]
- 006afc0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006afc0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006afc0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006afc64 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 006afc64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006afc64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006afc64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ede6b843b9ba02bc16e9b4056ccd501f"></a>

### [`006afc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afc20.md) → [`006afc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc78.md) FUN_006afc78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006a72e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a72e4.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a733c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afc98",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afc40",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006afca4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afc4c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006afc98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006afca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006afc98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006afca4",
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
- 006afc40 ["INT_ADD", "register:40f0:8", ["const:6afc40:8", "const:4:8"]]
- 006afc40 ["CALL", null, ["ram:47acf4:8"]]
+ 006afc98 ["INT_ADD", "register:40f0:8", ["const:6afc98:8", "const:4:8"]]
+ 006afc98 ["CALL", null, ["ram:47ad34:8"]]
- 006afc4c ["INT_ADD", "register:40f0:8", ["const:6afc4c:8", "const:4:8"]]
- 006afc4c ["CALL", null, ["ram:47acf4:8"]]
+ 006afca4 ["INT_ADD", "register:40f0:8", ["const:6afca4:8", "const:4:8"]]
+ 006afca4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-3a8b1f49cc4079f4a86d8966858d8b57"></a>

### [`006afca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afca4.md) → [`006afcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afcfc.md) FUN_006afcfc

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
      "definition_site": "006afd20",
      "incomplete_value": false,
      "site": "006afd20",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afcc8",
      "incomplete_value": false,
      "site": "006afcc8",
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
            "const:d80:8"
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
      "006afd20",
      "DATA",
      [
        "storage",
        "00c75d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afd20",
      "DATA",
      [
        "storage",
        "00c75e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afcb8 ["INT_ADD", "register:40f0:8", ["const:6afcb8:8", "const:4:8"]]
- 006afcb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006afd10 ["INT_ADD", "register:40f0:8", ["const:6afd10:8", "const:4:8"]]
+ 006afd10 ["CALL", null, ["callee:00c57f60:8"]]
- 006afcc4 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 006afcc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afcc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afcc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afd1c ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 006afd1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afd1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afd1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-07dd7297ce8c3e9ef0e449ef70b32b64"></a>

### [`006afcd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afcd8.md) → [`006afd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afd30.md) FUN_006afd30

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
      "definition_site": "006afd3c",
      "incomplete_value": false,
      "site": "006afd3c",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afce4",
      "incomplete_value": false,
      "site": "006afce4",
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
            "const:d80:8"
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
      "006afd3c",
      "DATA",
      [
        "storage",
        "00c75d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afd3c",
      "DATA",
      [
        "storage",
        "00c75e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afce0 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 006afce0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006afce0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006afce0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006afd38 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 006afd38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006afd38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006afd38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3ce5b7e9d8a61b9620b069bf1f3e2d4f"></a>

### [`006afea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006afea8.md) → [`006aff00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006aff00.md) _INIT_104

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
      "definition_site": "006aff3c",
      "incomplete_value": true,
      "site": "006aff58",
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
      "definition_site": "006afee4",
      "incomplete_value": true,
      "site": "006aff00",
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
      "definition_site": "006aff60",
      "incomplete_value": true,
      "site": "006aff7c",
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
      "definition_site": "006aff08",
      "incomplete_value": true,
      "site": "006aff24",
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
      "definition_site": "006aff80",
      "incomplete_value": true,
      "site": "006aff9c",
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
      "definition_site": "006aff28",
      "incomplete_value": true,
      "site": "006aff44",
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
      "006aff3c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "006aff60",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "006aff80",
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
      "006aff3c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006aff60",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006aff80",
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
- 006aff7c ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 006aff7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006aff7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006aff7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006affd4 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 006affd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006affd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006affd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006aff9c ["COPY", "tmp:0:8", ["const:f09:8"]]
- 006aff9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006aff9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006aff9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006afff4 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 006afff4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006afff4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006afff4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006b0008 ["INT_ADD", "register:40f0:8", ["const:6b0008:8", "const:4:8"]]
- 006b0008 ["CALL", null, ["callee:0043b838:8"]]
+ 006b0060 ["INT_ADD", "register:40f0:8", ["const:6b0060:8", "const:4:8"]]
+ 006b0060 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-de57df74ddf99d4d7b32fce1a9f7a9bb"></a>

### [`006b21e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b21e4.md) → [`006b223c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b223c.md) FUN_006b223c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`006b750c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b750c.md) [`007f06f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f06f4.md) [`008cb7ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb7ec.md) [`00aec2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aec/00aec2ac.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 4件 [`006b7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7564.md) [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) [`008cb840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb840.md) [`00aec348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aec/00aec348.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 69.44% / 新版 69.44%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b2344",
      "incomplete_value": true,
      "site": "006b234c",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b2320",
      "incomplete_value": false,
      "site": "006b2324",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b231c",
      "incomplete_value": true,
      "site": "006b2324",
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
      "unmatched:006b21f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b227c"
      ]
    ],
    [
      "unmatched:006b2204",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "unmatched:006b2208",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b227c"
      ]
    ]
  ],
  "added": [
    [
      "006b2250",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b227c"
      ]
    ],
    [
      "006b225c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "006b2260",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b227c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b22f4 ["INT_ADD", "register:40f0:8", ["const:6b22f4:8", "const:4:8"]]
- 006b22f4 ["CALL", null, ["callee:00c53da0:8"]]
+ 006b234c ["INT_ADD", "register:40f0:8", ["const:6b234c:8", "const:4:8"]]
+ 006b234c ["CALL", null, ["callee:00c53da0:8"]]
- 006b2318 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 006b2318 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 006b2370 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 006b2370 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 006b2324 ["INT_ADD", "register:40f0:8", ["const:6b2324:8", "const:4:8"]]
- 006b2324 ["CALL", null, ["callee:00c53da0:8"]]
+ 006b237c ["INT_ADD", "register:40f0:8", ["const:6b237c:8", "const:4:8"]]
+ 006b237c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-71f8723a05488687a5363c2579571f70"></a>

### [`006b2438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2438.md) → [`006b2490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2490.md) FUN_006b2490

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`006b2b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2b5c.md) [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) [`008e66ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e6/008e66ac.md) · 呼出先 7件 [`0064aa08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064aa08.md) [`00658480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658480.md) [`006e8bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e8/006e8bcc.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b78d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b78d8.md)
- 新版 呼出元 3件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) · 呼出先 7件 [`0064aa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064aa48.md) [`006584c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006584c0.md) [`006e8c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e8/006e8c24.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7930.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006b244c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 006b244c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 006b24a4 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 006b24a4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 006b2454 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 006b2454 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 006b24ac ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 006b24ac ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 006b2464 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 006b2464 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006b2464 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006b2464 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 006b24bc ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 006b24bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006b24bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006b24bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-0480806abd781f0808a9fb2425831aee"></a>

### [`006b26b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b26b8.md) → [`006b2710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2710.md) FUN_006b2710

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`00641b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641b60.md)
- 新版 呼出元 2件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00641ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ba0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 88.89% / 新版 88.89%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b2720",
      "incomplete_value": true,
      "site": "006b2724",
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
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b26c8",
      "incomplete_value": true,
      "site": "006b26cc",
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
            "const:71c0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 006b26cc ["INT_ADD", "register:40f0:8", ["const:6b26cc:8", "const:4:8"]]
- 006b26cc ["CALL", null, ["callee:00641ba0:8"]]
+ 006b2724 ["INT_ADD", "register:40f0:8", ["const:6b2724:8", "const:4:8"]]
+ 006b2724 ["CALL", null, ["callee:00641ba0:8"]]
- 006b26c8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006b26c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006b26c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006b26c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006b2720 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 006b2720 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006b2720 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006b2720 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8d3046ad65213d7ea6165859ef776bea"></a>

### [`006b26ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b26ec.md) → [`006b2744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2744.md) FUN_006b2744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 12件 [`0063bc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063bc98.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) [`006b5404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b5/006b5404.md) · 呼出先 8件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0064aa08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064aa08.md) [`00658480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658480.md) [`006e8bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e8/006e8bcc.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 12件 [`0063bcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063bcd8.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) · 呼出先 8件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0064aa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064aa48.md) [`006584c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006584c0.md) [`006e8c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e8/006e8c24.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006b28d8",
      "incomplete_value": true,
      "site": "006b28e4",
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
      "unmatched:006b27a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2810"
      ]
    ],
    [
      "unmatched:006b27c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b292c"
      ]
    ],
    [
      "unmatched:006b2870",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "006b2800",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2810"
      ]
    ],
    [
      "006b2820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b292c"
      ]
    ],
    [
      "006b2918",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b270c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006b270c ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 006b2764 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006b2764 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
- 006b2718 ["CBRANCH", null, ["local:b43:8", "register:101:1"]]
+ 006b2770 ["CBRANCH", null, ["local:b45:8", "register:101:1"]]
- 006b2728 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 006b2728 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006b2728 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006b2728 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 006b2780 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 006b2780 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006b2780 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006b2780 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-da195cb0ffc310592ab11a1fab81ab0a"></a>

### [`006b292c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b292c.md) → [`006b2984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2984.md) FUN_006b2984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 1件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.65% / 新版 80.65%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b29d8",
      "incomplete_value": true,
      "site": "006b29dc",
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
            "register:4040:8"
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


~~~diff
- 006b2984 ["INT_ADD", "register:40f0:8", ["const:6b2984:8", "const:4:8"]]
- 006b2984 ["CALL", null, ["callee:005c17dc:8"]]
+ 006b29dc ["INT_ADD", "register:40f0:8", ["const:6b29dc:8", "const:4:8"]]
+ 006b29dc ["CALL", null, ["callee:005c17dc:8"]]
- 006b2940 ["COPY", "register:4050:8", ["const:5870:8"]]
- 006b2950 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 006b2950 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 006b2950 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 006b2950 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-5a779e0aea455df89c05dd3b39630d48"></a>

### [`006b29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b29a8.md) → [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) FUN_006b2a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) [`006f1688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f1/006f1688.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 90.83% / 新版 90.83%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b2a70",
      "incomplete_value": true,
      "site": "006b2a74",
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
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006b2b14"
      ],
      [
        "FALL_THROUGH",
        "006b2b6c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006b2b6c",
      "incomplete_value": true,
      "site": "006b2b70",
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
      "definition_site": "006b2b14",
      "incomplete_value": true,
      "site": "006b2b18",
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
      "unmatched:006b2a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2ad4"
      ]
    ],
    [
      "unmatched:006b2a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2b14"
      ]
    ],
    [
      "unmatched:006b2ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2b08"
      ]
    ]
  ],
  "added": [
    [
      "006b2aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2ad4"
      ]
    ],
    [
      "006b2af4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2b14"
      ]
    ],
    [
      "006b2b20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b2b08"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b2a1c ["INT_ADD", "register:40f0:8", ["const:6b2a1c:8", "const:4:8"]]
- 006b2a1c ["CALL", null, ["callee:008e484c:8"]]
+ 006b2a74 ["INT_ADD", "register:40f0:8", ["const:6b2a74:8", "const:4:8"]]
+ 006b2a74 ["CALL", null, ["callee:008e484c:8"]]
- 006b29c0 ["INT_ADD", "register:40f0:8", ["const:6b29c0:8", "const:4:8"]]
- 006b29c0 ["CALL", null, ["callee:00851550:8"]]
+ 006b2a18 ["INT_ADD", "register:40f0:8", ["const:6b2a18:8", "const:4:8"]]
+ 006b2a18 ["CALL", null, ["callee:00851550:8"]]
- 006b29cc ["INT_ADD", "register:40f0:8", ["const:6b29cc:8", "const:4:8"]]
- 006b29cc ["CALL", null, ["callee:00ac86a8:8"]]
+ 006b2a24 ["INT_ADD", "register:40f0:8", ["const:6b2a24:8", "const:4:8"]]
+ 006b2a24 ["CALL", null, ["callee:00ac86a8:8"]]
~~~


<a id="compare-f4c26bb475085f8946f0d56c4207731d"></a>

### [`006b2b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2b5c.md) → [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) FUN_006b2bb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) · 呼出先 24件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046d9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d9e4.md) [`0046da48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da48.md) [`0046ee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee04.md)
- 新版 呼出元 1件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da24.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 69.91% / 新版 69.91%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006b348c",
      "incomplete_value": true,
      "site": "006b348c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:e2:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b341c",
      "incomplete_value": true,
      "site": "006b341c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:87:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006b3474",
      "incomplete_value": true,
      "site": "006b3474",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:87:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b3434",
      "incomplete_value": true,
      "site": "006b3434",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_SLESS",
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
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:e2:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b2c20",
      "incomplete_value": true,
      "site": "006b2c24",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:006b300c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006dd724"
      ]
    ],
    [
      "unmatched:006b3028",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006dea94"
      ]
    ],
    [
      "unmatched:006b3038",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006dea94"
      ]
    ]
  ],
  "added": [
    [
      "006b3064",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006dd77c"
      ]
    ],
    [
      "006b3080",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006deaec"
      ]
    ],
    [
      "006b3090",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006deaec"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b2bcc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006b2bcc ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 006b2bcc ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 006b2bcc ["CBRANCH", null, ["local:b9:8", "tmp:2:1"]]
+ 006b2c24 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006b2c24 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 006b2c24 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 006b2c24 ["CBRANCH", null, ["local:b8:8", "tmp:2:1"]]
- 006b2c24 ["INT_ADD", "register:40f0:8", ["const:6b2c24:8", "const:4:8"]]
- 006b2c24 ["CALL", null, ["callee:006b2490:8"]]
+ 006b2c7c ["INT_ADD", "register:40f0:8", ["const:6b2c7c:8", "const:4:8"]]
+ 006b2c7c ["CALL", null, ["callee:006b2490:8"]]
- 006b3174 ["INT_ADD", "register:40f0:8", ["const:6b3174:8", "const:4:8"]]
- 006b3174 ["CALL", null, ["ram:6c0f38:8"]]
+ 006b31cc ["INT_ADD", "register:40f0:8", ["const:6b31cc:8", "const:4:8"]]
+ 006b31cc ["CALL", null, ["ram:6c0f90:8"]]
~~~


<a id="compare-92a8a7c2d10eb92000f7af30ba241873"></a>

### [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) → [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) FUN_006b34d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b5404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b5/006b5404.md) · 呼出先 20件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md)
- 新版 呼出元 1件 [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) · 呼出先 20件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.11% / 新版 88.11%

優先判定に残った影響 `call_argument_candidate` 27件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b3508",
      "incomplete_value": false,
      "site": "006b351c",
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
      "definition_site": "006b34b0",
      "incomplete_value": false,
      "site": "006b34c4",
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
      "definition_site": "006b3510",
      "incomplete_value": false,
      "site": "006b351c",
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
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b34b8",
      "incomplete_value": false,
      "site": "006b34c4",
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
            "const:810:8"
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
      "definition_site": "006b353c",
      "incomplete_value": true,
      "site": "006b3540",
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
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b34e4",
      "incomplete_value": true,
      "site": "006b34e8",
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
            "const:7360:8"
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
      "unmatched:006b3480",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b3484",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b3488",
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
      "006b34d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006b34dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006b34e0",
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
- 006b34c4 ["INT_ADD", "register:40f0:8", ["const:6b34c4:8", "const:4:8"]]
- 006b34c4 ["CALL", null, ["callee:00c586e0:8"]]
+ 006b351c ["INT_ADD", "register:40f0:8", ["const:6b351c:8", "const:4:8"]]
+ 006b351c ["CALL", null, ["callee:00c586e0:8"]]
- 006b34e8 ["INT_ADD", "register:40f0:8", ["const:6b34e8:8", "const:4:8"]]
- 006b34e8 ["CALL", null, ["callee:008e7424:8"]]
+ 006b3540 ["INT_ADD", "register:40f0:8", ["const:6b3540:8", "const:4:8"]]
+ 006b3540 ["CALL", null, ["callee:008e7424:8"]]
+ 006b34e8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 006b34e8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
+ 006b34e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
+ 006b34e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fa71504d15983e129710808751d9dbfe"></a>

### [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) → [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) FUN_006b3864

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 19件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 19件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.22% / 新版 70.22%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 41件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b3844",
      "incomplete_value": false,
      "site": "006b3860",
      "value": [
        "leaf",
        "const:28:8"
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
      "definition_site": "006b3864",
      "incomplete_value": true,
      "site": "006b386c",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b3868",
      "incomplete_value": false,
      "site": "006b386c",
      "value": [
        "leaf",
        "const:8:8"
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
      "unmatched:006b380c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b3810",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b3814",
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
      "006b3864",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006b3868",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006b386c",
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
- 006b3860 ["INT_ADD", "register:40f0:8", ["const:6b3860:8", "const:4:8"]]
- 006b3860 ["CALL", null, ["callee:0066d11c:8"]]
+ 006b38b8 ["INT_ADD", "register:40f0:8", ["const:6b38b8:8", "const:4:8"]]
+ 006b38b8 ["CALL", null, ["callee:0066d11c:8"]]
- 006b386c ["INT_ADD", "register:40f0:8", ["const:6b386c:8", "const:4:8"]]
- 006b386c ["CALL", null, ["callee:00887930:8"]]
+ 006b38c4 ["INT_ADD", "register:40f0:8", ["const:6b38c4:8", "const:4:8"]]
+ 006b38c4 ["CALL", null, ["callee:00887930:8"]]
+ 006b386c ["COPY", "tmp:0:8", ["register:40d0:8"]]
+ 006b386c ["COPY", "tmp:1:8", ["register:40c8:8"]]
+ 006b386c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 006b386c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-33fd6503d6b09994d9d700e2e0d0d052"></a>

### [`006b61c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b6/006b61c4.md) → [`006b621c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b6/006b621c.md) FUN_006b621c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b5404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b5/006b5404.md) · 呼出先 11件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`004681c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004681c0.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) · 呼出先 11件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468200.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.22% / 新版 96.22%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b6508",
      "incomplete_value": true,
      "site": "006b651c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b6600",
      "incomplete_value": true,
      "site": "006b6610",
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
              [
                "live",
                "register:40c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b6600",
      "incomplete_value": true,
      "site": "006b6610",
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
      "006b6578",
      "DATA",
      [
        "storage",
        "0042ef60",
        null,
        "byte[39]"
      ]
    ],
    [
      "unmatched:006b6530",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b668c"
      ]
    ],
    [
      "unmatched:006b6548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b668c"
      ]
    ]
  ],
  "added": [
    [
      "006b6578",
      "DATA",
      [
        "storage",
        "0042ef60",
        null,
        "byte[43]"
      ]
    ],
    [
      "006b6588",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b668c"
      ]
    ],
    [
      "006b65a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b668c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b64c4 ["INT_ADD", "register:40f0:8", ["const:6b64c4:8", "const:4:8"]]
- 006b64c4 ["CALL", null, ["callee:00469c44:8"]]
+ 006b651c ["INT_ADD", "register:40f0:8", ["const:6b651c:8", "const:4:8"]]
+ 006b651c ["CALL", null, ["callee:00469c44:8"]]
- 006b651c ["INT_ADD", "register:40f0:8", ["const:6b651c:8", "const:4:8"]]
- 006b651c ["CALL", null, ["callee:00467b6c:8"]]
+ 006b6574 ["INT_ADD", "register:40f0:8", ["const:6b6574:8", "const:4:8"]]
+ 006b6574 ["CALL", null, ["callee:00467b6c:8"]]
- 006b65b8 ["INT_ADD", "register:40f0:8", ["const:6b65b8:8", "const:4:8"]]
- 006b65b8 ["CALL", null, ["callee:00467b6c:8"]]
+ 006b6610 ["INT_ADD", "register:40f0:8", ["const:6b6610:8", "const:4:8"]]
+ 006b6610 ["CALL", null, ["callee:00467b6c:8"]]
~~~


<a id="compare-5d77ebf13f0b8d3ddc65b8fd139ebacb"></a>

### [`006b66e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b6/006b66e8.md) → [`006b6740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b6/006b6740.md) FUN_006b6740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0062a23c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062a/0062a23c.md) [`006b6650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b6/006b6650.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 2件 [`0062a27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062a27c.md) [`006b66a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b6/006b66a8.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.48% / 新版 48.48%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 103件, `unresolved_store_alignment` 30件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b687c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006b6880",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "unmatched:006b6888",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "006b68d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006b68d8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "006b68e0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b6708 ["INT_ADD", "register:40f0:8", ["const:6b6708:8", "const:4:8"]]
- 006b6708 ["CALL", null, ["callee:004678a0:8"]]
+ 006b6760 ["INT_ADD", "register:40f0:8", ["const:6b6760:8", "const:4:8"]]
+ 006b6760 ["CALL", null, ["callee:004678a0:8"]]
- 006b6724 ["INT_ADD", "register:40f0:8", ["const:6b6724:8", "const:4:8"]]
- 006b6724 ["CALL", null, ["callee:00467b6c:8"]]
+ 006b677c ["INT_ADD", "register:40f0:8", ["const:6b677c:8", "const:4:8"]]
+ 006b677c ["CALL", null, ["callee:00467b6c:8"]]
- 006b6758 ["INT_ADD", "register:40f0:8", ["const:6b6758:8", "const:4:8"]]
- 006b6758 ["CALL", null, ["callee:00851550:8"]]
+ 006b67b0 ["INT_ADD", "register:40f0:8", ["const:6b67b0:8", "const:4:8"]]
+ 006b67b0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d688847f0b5559a63b6e4d47ba5cf1b9"></a>

### [`006b7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7130.md) → [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) FUN_006b7188

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 11件 [`0064b1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064b/0064b1a8.md) [`0064dbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064dbc8.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`00657d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657d0c.md) [`006e93a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e93a4.md) · 呼出先 15件 [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md)
- 新版 呼出元 11件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`00657d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657d4c.md) [`006e93fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e93fc.md) · 呼出先 15件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.88% / 新版 77.88%

優先判定に残った影響 `store_value` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 19件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7288",
      "incomplete_value": false,
      "site": "006b7288",
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
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7230",
      "incomplete_value": false,
      "site": "006b7230",
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
            "const:120:8"
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
      "definition_site": "006b73b0",
      "incomplete_value": false,
      "site": "006b73b0",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7358",
      "incomplete_value": false,
      "site": "006b7358",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b7374",
      "incomplete_value": false,
      "site": "006b7380",
      "value": [
        "leaf",
        "const:6a2da0:8"
      ]
    },
    "old": {
      "definition_site": "006b731c",
      "incomplete_value": false,
      "site": "006b7328",
      "value": [
        "leaf",
        "const:6a2d48:8"
      ]
    },
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b7178",
      "DATA",
      [
        "storage",
        "00c76020",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006b7178",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b717c",
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
      "006b71d0",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ],
    [
      "006b71d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006b71d4",
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
+ 006b7230 ["INT_ADD", "register:40f0:8", ["const:6b7230:8", "const:4:8"]]
+ 006b7230 ["CALL", null, ["callee:006a2bd0:8"]]
- 006b7288 ["INT_ADD", "register:40f0:8", ["const:6b7288:8", "const:4:8"]]
- 006b7288 ["CALL", null, ["callee:006a2bd0:8"]]
+ 006b72e0 ["INT_ADD", "register:40f0:8", ["const:6b72e0:8", "const:4:8"]]
+ 006b72e0 ["CALL", null, ["callee:006a2bd0:8"]]
- 006b72d0 ["BRANCH", null, ["local:b38:8"]]
+ 006b7328 ["BRANCH", null, ["local:b39:8"]]
~~~


<a id="compare-607a80696a2db1096235d7930d23dedb"></a>

### [`006b750c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b750c.md) → [`006b7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7564.md) FUN_006b7564

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b7670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7670.md) · 呼出先 6件 [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`006b21e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b21e4.md) [`006b7694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7694.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`006b76c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b76c8.md) · 呼出先 6件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`006b223c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b223c.md) [`006b76ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b76ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.65% / 新版 78.65%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7680",
      "incomplete_value": false,
      "site": "006b7684",
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
      "definition_site": "006b7628",
      "incomplete_value": false,
      "site": "006b762c",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b7620",
      "incomplete_value": true,
      "site": "006b7624",
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
            "const:450:8"
          ]
        ]
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
      "definition_site": "006b7628",
      "incomplete_value": true,
      "site": "006b762c",
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
            "const:3a0:8"
          ]
        ]
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
      "unmatched:006b752c",
      "DATA",
      [
        "storage",
        "00c75e00",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:006b754c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b75c0"
      ]
    ],
    [
      "unmatched:006b75ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b7620"
      ]
    ]
  ],
  "added": [
    [
      "006b7584",
      "DATA",
      [
        "storage",
        "00c75ed0",
        null,
        "pointer"
      ]
    ],
    [
      "006b75a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b75c0"
      ]
    ],
    [
      "006b7604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b7620"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b75cc ["INT_ADD", "register:40f0:8", ["const:6b75cc:8", "const:4:8"]]
- 006b75cc ["CALL", null, ["callee:0067e628:8"]]
+ 006b7624 ["INT_ADD", "register:40f0:8", ["const:6b7624:8", "const:4:8"]]
+ 006b7624 ["CALL", null, ["callee:0067e628:8"]]
- 006b75d4 ["INT_ADD", "register:40f0:8", ["const:6b75d4:8", "const:4:8"]]
- 006b75d4 ["CALL", null, ["callee:006b223c:8"]]
+ 006b762c ["INT_ADD", "register:40f0:8", ["const:6b762c:8", "const:4:8"]]
+ 006b762c ["CALL", null, ["callee:006b223c:8"]]
- 006b7524 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 006b7524 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7524 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7524 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0da844b64f2acb2d3574e96cdd5fc7e0"></a>

### [`006b7670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7670.md) → [`006b76c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b76c8.md) FUN_006b76c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`006b750c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b750c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006b7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7564.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b7670",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b7674",
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
      "006b76c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006b76cc",
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
- 006b7670 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006b7670 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006b7670 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006b7670 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006b7674 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006b7674 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006b7678 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-4abe0914dfe1a6d707fc8e7731ffd48f"></a>

### [`006b7768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7768.md) → [`006b77c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b77c0.md) FUN_006b77c0

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
      "definition_site": "006b77d4",
      "incomplete_value": false,
      "site": "006b77d8",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b777c",
      "incomplete_value": false,
      "site": "006b7780",
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
            "const:e20:8"
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
      "006b77d8",
      "DATA",
      [
        "storage",
        "00c75e20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b77d8",
      "DATA",
      [
        "storage",
        "00c75ef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7774 ["INT_ADD", "register:40f0:8", ["const:6b7774:8", "const:4:8"]]
- 006b7774 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b77cc ["INT_ADD", "register:40f0:8", ["const:6b77cc:8", "const:4:8"]]
+ 006b77cc ["CALL", null, ["callee:00c57f60:8"]]
- 006b777c ["COPY", "tmp:0:8", ["const:e20:8"]]
- 006b777c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b777c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b777c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b77d4 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 006b77d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b77d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b77d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4a3f43fdbbddbdc7f4cfe19b86614c9"></a>

### [`006b77a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b77a4.md) → [`006b77fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b77fc.md) FUN_006b77fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`006b79e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b79e0.md) [`006b79e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b79e4.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006b7a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a38.md) [`006b7a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a3c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.70% / 新版 74.70%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b78c0",
      "incomplete_value": true,
      "site": "006b78c4",
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
      "unmatched:006b77a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b77ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b77b0",
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
      "006b7800",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006b7804",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006b7808",
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
- 006b78c4 ["INT_ADD", "register:40f0:8", ["const:6b78c4:8", "const:4:8"]]
- 006b78c4 ["CALL", null, ["callee:00c57f80:8"]]
+ 006b791c ["INT_ADD", "register:40f0:8", ["const:6b791c:8", "const:4:8"]]
+ 006b791c ["CALL", null, ["callee:00c57f80:8"]]
- 006b77a4 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 006b77a8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006b77a8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006b77a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 006b77a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4a56a7f960d9adf2196726eaabce7b10"></a>

### [`006b79ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b79ac.md) → [`006b7a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a04.md) FUN_006b7a04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b79c4",
      "DATA",
      [
        "storage",
        "00c75e90",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006b79c8",
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
      "006b7a1c",
      "DATA",
      [
        "storage",
        "00c75f60",
        null,
        "undefined *"
      ]
    ],
    [
      "006b7a20",
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
- 006b79b8 ["INT_ADD", "register:40f0:8", ["const:6b79b8:8", "const:4:8"]]
- 006b79b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b7a10 ["INT_ADD", "register:40f0:8", ["const:6b7a10:8", "const:4:8"]]
+ 006b7a10 ["CALL", null, ["callee:00c57f60:8"]]
- 006b79c0 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 006b79c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b79c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b79c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006b79c4 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006b79c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-c343dfd0bb9afd18631494224bf9816b"></a>

### [`006b79d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b79d0.md) → [`006b7a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a28.md) FUN_006b7a28

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
      "definition_site": "006b7a2c",
      "incomplete_value": false,
      "site": "006b7a30",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b79d4",
      "incomplete_value": false,
      "site": "006b79d8",
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
            "const:e90:8"
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
      "006b7a30",
      "DATA",
      [
        "storage",
        "00c75e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7a30",
      "DATA",
      [
        "storage",
        "00c75f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b79d4 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 006b79d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b79d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b79d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7a2c ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 006b7a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77d56ec1310222acf7ae452a2cf8aad7"></a>

### [`006b79e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b79e8.md) → [`006b7a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a40.md) FUN_006b7a40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b7a0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006b7a94",
      "DATA",
      [
        "storage",
        "004347b0",
        null,
        "byte[47]"
      ]
    ],
    [
      "006b7aa4",
      "DATA",
      [
        "storage",
        "004347ac",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "006b7a64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006b7a94",
      "DATA",
      [
        "storage",
        "004347b0",
        null,
        "byte[43]"
      ]
    ],
    [
      "006b7aa4",
      "DATA",
      [
        "storage",
        "004347ac",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b79fc ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 006b7a54 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 006b7a0c ["INT_ADD", "register:40f0:8", ["const:6b7a0c:8", "const:4:8"]]
- 006b7a0c ["CALL", null, ["ram:47acf4:8"]]
- 006b7a18 ["INT_ADD", "register:40f0:8", ["const:6b7a18:8", "const:4:8"]]
- 006b7a18 ["CALL", null, ["callee:0047ce14:8"]]
+ 006b7a70 ["INT_ADD", "register:40f0:8", ["const:6b7a70:8", "const:4:8"]]
+ 006b7a70 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6bce34d9d7831bcf3c4f6931b99cabda"></a>

### [`006b7a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7a88.md) → [`006b7ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7ae0.md) FUN_006b7ae0

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
      "definition_site": "006b7af4",
      "incomplete_value": false,
      "site": "006b7af8",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7a9c",
      "incomplete_value": false,
      "site": "006b7aa0",
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
            "const:f20:8"
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
      "006b7af8",
      "DATA",
      [
        "storage",
        "00c75f20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7af8",
      "DATA",
      [
        "storage",
        "00c75ff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7a94 ["INT_ADD", "register:40f0:8", ["const:6b7a94:8", "const:4:8"]]
- 006b7a94 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b7aec ["INT_ADD", "register:40f0:8", ["const:6b7aec:8", "const:4:8"]]
+ 006b7aec ["CALL", null, ["callee:00c57f60:8"]]
- 006b7a9c ["COPY", "tmp:0:8", ["const:f20:8"]]
- 006b7a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7af4 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 006b7af4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7af4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7af4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca053595859decfa7e24469b32bbd64b"></a>

### [`006b7ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7ac4.md) → [`006b7b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7b1c.md) FUN_006b7b1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "006b7b38",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7ae0",
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
      "006b7b38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006b7b38",
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
- 006b7ae0 ["INT_ADD", "register:40f0:8", ["const:6b7ae0:8", "const:4:8"]]
- 006b7ae0 ["CALL", null, ["ram:47acf4:8"]]
+ 006b7b38 ["INT_ADD", "register:40f0:8", ["const:6b7b38:8", "const:4:8"]]
+ 006b7b38 ["CALL", null, ["ram:47ad34:8"]]
- 006b7aec ["INT_ADD", "register:40f0:8", ["const:6b7aec:8", "const:4:8"]]
- 006b7aec ["CALL", null, ["callee:0047ce14:8"]]
+ 006b7b44 ["INT_ADD", "register:40f0:8", ["const:6b7b44:8", "const:4:8"]]
+ 006b7b44 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-2bd790c6e6e9537144c1ade2f7097822"></a>

### [`006b7b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7b30.md) → [`006b7b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7b88.md) FUN_006b7b88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b7b48",
      "DATA",
      [
        "storage",
        "00c75fa0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006b7b4c",
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
      "006b7ba0",
      "DATA",
      [
        "storage",
        "00c76070",
        null,
        "undefined *"
      ]
    ],
    [
      "006b7ba4",
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
- 006b7b3c ["INT_ADD", "register:40f0:8", ["const:6b7b3c:8", "const:4:8"]]
- 006b7b3c ["CALL", null, ["callee:00c57f60:8"]]
+ 006b7b94 ["INT_ADD", "register:40f0:8", ["const:6b7b94:8", "const:4:8"]]
+ 006b7b94 ["CALL", null, ["callee:00c57f60:8"]]
- 006b7b40 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7b98 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b7b44 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 006b7b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a4b6cb877c56aa69855d89f1f54a4660"></a>

### [`006b7b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7b6c.md) → [`006b7bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7bc4.md) FUN_006b7bc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b7b8c",
      "incomplete_value": false,
      "site": "006b7b94",
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
      "definition_site": "006b7b90",
      "incomplete_value": false,
      "site": "006b7b94",
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
      "unmatched:006b7b88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006b7be0",
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
- 006b7b94 ["INT_ADD", "register:40f0:8", ["const:6b7b94:8", "const:4:8"]]
- 006b7b94 ["CALL", null, ["callee:0047ce14:8"]]
+ 006b7bec ["INT_ADD", "register:40f0:8", ["const:6b7bec:8", "const:4:8"]]
+ 006b7bec ["CALL", null, ["callee:0047ce14:8"]]
- 006b7b74 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006b7b74 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006b7bcc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006b7bcc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006b7b88 ["INT_ADD", "register:40f0:8", ["const:6b7b88:8", "const:4:8"]]
- 006b7b88 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-a84059765a62aa9e9b378908c2d026c0"></a>

### [`006b7bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7bd8.md) → [`006b7c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c30.md) FUN_006b7c30

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
      "definition_site": "006b7c54",
      "incomplete_value": false,
      "site": "006b7c54",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7bfc",
      "incomplete_value": false,
      "site": "006b7bfc",
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
            "const:20:8"
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
      "006b7c54",
      "DATA",
      [
        "storage",
        "00c76020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7c54",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7bec ["INT_ADD", "register:40f0:8", ["const:6b7bec:8", "const:4:8"]]
- 006b7bec ["CALL", null, ["callee:00c57f60:8"]]
+ 006b7c44 ["INT_ADD", "register:40f0:8", ["const:6b7c44:8", "const:4:8"]]
+ 006b7c44 ["CALL", null, ["callee:00c57f60:8"]]
- 006b7bf8 ["COPY", "tmp:0:8", ["const:20:8"]]
- 006b7bf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7bf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7bf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7c50 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 006b7c50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7c50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7c50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0afe737ba63f8ec4c66341739f421ed"></a>

### [`006b7c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7c0c.md) → [`006b7c64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c64.md) FUN_006b7c64

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
      "definition_site": "006b7c68",
      "incomplete_value": false,
      "site": "006b7c6c",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7c10",
      "incomplete_value": false,
      "site": "006b7c14",
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
            "const:20:8"
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
      "006b7c6c",
      "DATA",
      [
        "storage",
        "00c76020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7c6c",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7c10 ["COPY", "tmp:0:8", ["const:20:8"]]
- 006b7c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7c68 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 006b7c68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7c68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7c68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-86b47c750d13def5fa2a8d3515e16a21"></a>

### [`006b7c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7c2c.md) → [`006b7c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c84.md) FUN_006b7c84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`006b7c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7c5c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`006b7cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7cb4.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b7c30",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "006b7cb4"
      ]
    ]
  ],
  "added": [
    [
      "006b7c88",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "006b7cb4"
      ]
    ]
  ]
}
~~~


<a id="compare-d7ccbb01a176c95aced75ae735359763"></a>

### [`006b7c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7c5c.md) → [`006b7cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7cb4.md) FUN_006b7cb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`006b7c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7c2c.md) [`006b80e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b80e8.md) [`006b8170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8170.md) [`006b81f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b81f8.md) · 呼出先 10件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`005509bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509bc.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`006b7c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c84.md) [`006b8140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8140.md) [`006b81c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81c8.md) [`006b8250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8250.md) · 呼出先 10件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`005509fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509fc.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.35% / 新版 69.35%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7e00",
      "value": [
        "leaf",
        "ram:a84d68:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7c9c",
      "value": [
        "leaf",
        "ram:a84c88:8"
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
      "006b7ce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b7ce8"
      ]
    ],
    [
      "006b7e00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84c88"
      ]
    ],
    [
      "unmatched:006b7cb4",
      "READ",
      [
        "storage",
        "002a2354",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006b7ce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b7df4"
      ]
    ],
    [
      "006b7d0c",
      "READ",
      [
        "storage",
        "002a2307",
        null,
        "string"
      ]
    ],
    [
      "006b7d20",
      "WRITE",
      [
        "storage",
        "Stack[-0x4f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7c9c ["INT_ADD", "register:40f0:8", ["const:6b7c9c:8", "const:4:8"]]
- 006b7c9c ["CALL", null, ["ram:a84c88:8"]]
+ 006b7e00 ["INT_ADD", "register:40f0:8", ["const:6b7e00:8", "const:4:8"]]
+ 006b7e00 ["CALL", null, ["ram:a84d68:8"]]
- 006b7e00 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 006b7e00 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffc0:8"]]
- 006b7e00 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 006b7c88 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 006b7ce0 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-e58b74f5ccc91bc2f4e4672c8c6b8e52"></a>

### [`006b8094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8094.md) → [`006b80ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b80ec.md) FUN_006b80ec

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
      "unmatched:006b80b8",
      "DATA",
      [
        "storage",
        "00c760a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006b80bc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b80c0",
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
      "006b8110",
      "DATA",
      [
        "storage",
        "00c76170",
        null,
        "undefined *"
      ]
    ],
    [
      "006b8114",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006b8118",
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
- 006b80a8 ["INT_ADD", "register:40f0:8", ["const:6b80a8:8", "const:4:8"]]
- 006b80a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b8100 ["INT_ADD", "register:40f0:8", ["const:6b8100:8", "const:4:8"]]
+ 006b8100 ["CALL", null, ["callee:00c57f60:8"]]
- 006b80b4 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 006b80b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b80b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b80b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006b80b8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006b80b8 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006b80b8 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 006b80b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7a160000944f576520d064c5f2220615"></a>

### [`006b80c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b80c8.md) → [`006b8120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8120.md) FUN_006b8120

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
      "unmatched:006b80d0",
      "DATA",
      [
        "storage",
        "00c760a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8128",
      "DATA",
      [
        "storage",
        "00c76170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b80c8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b80cc ["COPY", "tmp:0:8", ["const:a0:8"]]
- 006b80cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b80cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b80cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006b80d0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006b80d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-4dcd31a1e803d14f6433c66b061db583"></a>

### [`006b811c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b811c.md) → [`006b8174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8174.md) FUN_006b8174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b812c",
      "incomplete_value": false,
      "site": "006b8130",
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
      "unmatched:006b8140",
      "DATA",
      [
        "storage",
        "00c76120",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006b8144",
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
      "006b8198",
      "DATA",
      [
        "storage",
        "00c761f0",
        null,
        "undefined *"
      ]
    ],
    [
      "006b819c",
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
- 006b8130 ["INT_ADD", "register:40f0:8", ["const:6b8130:8", "const:4:8"]]
- 006b8130 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b8188 ["INT_ADD", "register:40f0:8", ["const:6b8188:8", "const:4:8"]]
+ 006b8188 ["CALL", null, ["callee:00c57f60:8"]]
- 006b8124 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006b813c ["COPY", "tmp:0:8", ["const:120:8"]]
- 006b813c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b813c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b813c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6e9084e6deae34c90d429b6a90b3b337"></a>

### [`006b8150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8150.md) → [`006b81a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81a8.md) FUN_006b81a8

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
      "definition_site": "006b81ac",
      "incomplete_value": false,
      "site": "006b81b0",
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
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8154",
      "incomplete_value": false,
      "site": "006b8158",
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
      "006b81b0",
      "DATA",
      [
        "storage",
        "00c76120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b81b0",
      "DATA",
      [
        "storage",
        "00c761f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8154 ["COPY", "tmp:0:8", ["const:120:8"]]
- 006b8154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b8154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b8154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b81ac ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 006b81ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b81ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b81ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cc6bbaeb6c3208dcc0fe8a0d2e2ba1ae"></a>

### [`006b81a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b81a4.md) → [`006b81fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81fc.md) FUN_006b81fc

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
      "definition_site": "006b8220",
      "incomplete_value": false,
      "site": "006b8220",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b81c8",
      "incomplete_value": false,
      "site": "006b81c8",
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
      "006b8220",
      "DATA",
      [
        "storage",
        "00c761a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8220",
      "DATA",
      [
        "storage",
        "00c76270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b81b8 ["INT_ADD", "register:40f0:8", ["const:6b81b8:8", "const:4:8"]]
- 006b81b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b8210 ["INT_ADD", "register:40f0:8", ["const:6b8210:8", "const:4:8"]]
+ 006b8210 ["CALL", null, ["callee:00c57f60:8"]]
- 006b81c4 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 006b81c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b81c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b81c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b821c ["COPY", "tmp:0:8", ["const:270:8"]]
+ 006b821c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b821c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b821c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db3dd4db743969807178457b9bf33850"></a>

### [`006b81d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b81d8.md) → [`006b8230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8230.md) FUN_006b8230

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
      "definition_site": "006b8234",
      "incomplete_value": false,
      "site": "006b8238",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b81dc",
      "incomplete_value": false,
      "site": "006b81e0",
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
      "006b8238",
      "DATA",
      [
        "storage",
        "00c761a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8238",
      "DATA",
      [
        "storage",
        "00c76270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b81dc ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 006b81dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b81dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b81dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b8234 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 006b8234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-60b12d0e14b7e34bb2b115989dc14569"></a>

### [`006b8228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8228.md) → [`006b8280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8280.md) _INIT_105

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.92% / 新版 81.92%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b84a0",
      "incomplete_value": false,
      "site": "006b84b4",
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
    "old": {
      "definition_site": "006b8448",
      "incomplete_value": false,
      "site": "006b845c",
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
            "const:e70:8"
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
      "definition_site": "006b84a8",
      "incomplete_value": false,
      "site": "006b84b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8450",
      "incomplete_value": false,
      "site": "006b845c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
    "new": {
      "definition_site": "006b84b0",
      "incomplete_value": false,
      "site": "006b84b4",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8458",
      "incomplete_value": false,
      "site": "006b845c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006b8258",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b8264",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006b8280",
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
      "006b82b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006b82bc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006b82d8",
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
- 006b8450 ["COPY", "tmp:0:8", ["const:718:8"]]
- 006b8450 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 006b8450 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 006b8450 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 006b84a8 ["COPY", "tmp:0:8", ["const:818:8"]]
+ 006b84a8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 006b84a8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 006b84a8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 006b845c ["INT_ADD", "register:40f0:8", ["const:6b845c:8", "const:4:8"]]
- 006b845c ["CALL", null, ["callee:00c57f00:8"]]
+ 006b84b4 ["INT_ADD", "register:40f0:8", ["const:6b84b4:8", "const:4:8"]]
+ 006b84b4 ["CALL", null, ["callee:00c57f00:8"]]
- 006b84a8 ["INT_ADD", "register:40f0:8", ["const:6b84a8:8", "const:4:8"]]
- 006b84a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 006b8500 ["INT_ADD", "register:40f0:8", ["const:6b8500:8", "const:4:8"]]
+ 006b8500 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d9511de4479bb76694f8150a0c175086"></a>

### [`006b85b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b85b8.md) → [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) FUN_006b8610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 20件 [`00440b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b7c.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 20件 [`00440bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440bbc.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b86bc",
      "incomplete_value": true,
      "site": "006b86c0",
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b8728",
      "incomplete_value": true,
      "site": "006b8730",
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
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b872c",
      "incomplete_value": true,
      "site": "006b8730",
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
    "old": null,
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
      "unmatched:006b85e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b85ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b85f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ]
  ],
  "added": [
    [
      "006b863c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ],
    [
      "006b8644",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006b8648",
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
- 006b86c0 ["INT_ADD", "register:40f0:8", ["const:6b86c0:8", "const:4:8"]]
- 006b86c0 ["CALL", null, ["callee:00488598:8"]]
+ 006b8718 ["INT_ADD", "register:40f0:8", ["const:6b8718:8", "const:4:8"]]
+ 006b8718 ["CALL", null, ["callee:00488598:8"]]
- 006b86d8 ["INT_ADD", "register:40f0:8", ["const:6b86d8:8", "const:4:8"]]
- 006b86d8 ["CALL", null, ["callee:0048797c:8"]]
+ 006b8730 ["INT_ADD", "register:40f0:8", ["const:6b8730:8", "const:4:8"]]
+ 006b8730 ["CALL", null, ["callee:0048797c:8"]]
- 006b8730 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 006b8730 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006b8730 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 006b8730 ["COPY", "tmp:1:8", ["register:40d8:8"]]
~~~


<a id="compare-3be268fa5fb6694e467209dd7b716890"></a>

### [`006b8a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8a64.md) → [`006b8abc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8abc.md) FUN_006b8abc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006b8b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8b7c.md) [`006b8bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8bdc.md) [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 5件 [`007279d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/007279d0.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`0080062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/0080062c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a65dec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a65/00a65dec.md)
- 新版 呼出元 3件 [`006b8bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8bd4.md) [`006b8c34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c34.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 5件 [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a65e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a65/00a65e5c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006b8b14",
      "incomplete_value": true,
      "site": "006b8b14",
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
      "definition_site": "006b8ad0",
      "incomplete_value": true,
      "site": "006b8ad4",
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
                "const:2:4"
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
      "006b8af8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006b8ab0"
      ]
    ],
    [
      "unmatched:006b8aac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8bb8"
      ]
    ],
    [
      "unmatched:006b8ab0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "006b8af8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8b08"
      ]
    ],
    [
      "006b8b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8bb8"
      ]
    ],
    [
      "006b8b0c",
      "DATA",
      [
        "storage",
        "00436304",
        null,
        "byte[63]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8ad4 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 006b8b14 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006b8b14 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 006b8aa0 ["BRANCH", null, ["local:b3:8"]]
+ 006b8af8 ["BRANCH", null, ["local:b4:8"]]
- 006b8aac ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
~~~


<a id="compare-11c38973ddae3469f8d6878e4c051523"></a>

### [`006b8b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8b7c.md) → [`006b8bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8bd4.md) FUN_006b8bd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006ff640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff640.md) · 呼出先 2件 [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`006b8a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8a64.md)
- 新版 呼出元 1件 [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) · 呼出先 2件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`006b8abc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8abc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b8be8",
      "incomplete_value": false,
      "site": "006b8bec",
      "value": [
        "leaf",
        "const:2710:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 006b8b94 ["INT_ADD", "register:40f0:8", ["const:6b8b94:8", "const:4:8"]]
- 006b8b94 ["CALL", null, ["callee:0046d7f0:8"]]
+ 006b8bec ["INT_ADD", "register:40f0:8", ["const:6b8bec:8", "const:4:8"]]
+ 006b8bec ["CALL", null, ["callee:0046d7f0:8"]]
- 006b8b88 ["INT_ADD", "register:40f0:8", ["const:6b8b88:8", "const:4:8"]]
- 006b8b88 ["CALL", null, ["callee:006b8abc:8"]]
+ 006b8be0 ["INT_ADD", "register:40f0:8", ["const:6b8be0:8", "const:4:8"]]
+ 006b8be0 ["CALL", null, ["callee:006b8abc:8"]]
- 006b8ba0 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 006b8bf8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-2d79838e1e4801ca4ab2ea943f2152be"></a>

### [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) → [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) FUN_006b8c9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 17件 [`006b85b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b85b8.md) [`006b8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c58.md) [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006b99e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b9/006b99e4.md) [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 17件 [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b8ca8",
      "incomplete_value": false,
      "site": "006b8cac",
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
      "definition_site": "006b8c50",
      "incomplete_value": false,
      "site": "006b8c54",
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
      "006b8ca8",
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
      "006b8ca8",
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
- 006b8c54 ["INT_ADD", "register:40f0:8", ["const:6b8c54:8", "const:4:8"]]
- 006b8c54 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006b8cac ["INT_ADD", "register:40f0:8", ["const:6b8cac:8", "const:4:8"]]
+ 006b8cac ["CALL", null, ["callee:0043b7b8:8"]]
- 006b8c50 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006b8c50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006b8c50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006b8c50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006b8ca8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006b8ca8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006b8ca8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006b8ca8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a6c37dadc434aa23c579bebd249d8026"></a>

### [`006b8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c58.md) → [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) FUN_006b8cb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b85b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b85b8.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`006b8edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8edc.md) [`006b8f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f4c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`006b8f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8f34.md) [`006b8fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fa4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.44% / 新版 89.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b8e94",
      "incomplete_value": true,
      "site": "006b8e98",
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
    "new": {
      "definition_site": "006b8f00",
      "incomplete_value": true,
      "site": "006b8f08",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:006b8d4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8ddc"
      ]
    ],
    [
      "unmatched:006b8e90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8f30"
      ]
    ]
  ],
  "added": [
    [
      "006b8da4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8ddc"
      ]
    ],
    [
      "006b8ee8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8f30"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8e98 ["INT_ADD", "register:40f0:8", ["const:6b8e98:8", "const:4:8"]]
- 006b8e98 ["CALL", null, ["callee:006b8c9c:8"]]
+ 006b8ef0 ["INT_ADD", "register:40f0:8", ["const:6b8ef0:8", "const:4:8"]]
+ 006b8ef0 ["CALL", null, ["callee:006b8c9c:8"]]
- 006b8eb0 ["INT_ADD", "register:40f0:8", ["const:6b8eb0:8", "const:4:8"]]
- 006b8eb0 ["CALL", null, ["callee:00c57f80:8"]]
+ 006b8f08 ["INT_ADD", "register:40f0:8", ["const:6b8f08:8", "const:4:8"]]
+ 006b8f08 ["CALL", null, ["callee:00c57f80:8"]]
- 006b8cb0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006b8cb0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006b8cb0 ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
+ 006b8d08 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006b8d08 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 006b8d08 ["CBRANCH", null, ["local:b23:8", "tmp:1:1"]]
~~~


<a id="compare-67194bee20091e157ac8faa3068d35fd"></a>

### [`006b8edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8edc.md) → [`006b8f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8f34.md) FUN_006b8f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c58.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006b8f1c"
      ],
      [
        "CONDITIONAL_JUMP",
        "006b8f74"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006b8f74",
      "incomplete_value": true,
      "site": "006b8f54",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "006b8f1c",
      "incomplete_value": true,
      "site": "006b8efc",
      "value": [
        "INT_NOTEQUAL",
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
      "unmatched:006b8f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8f54"
      ]
    ]
  ],
  "added": [
    [
      "006b8f74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b8f54"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8ef8 ["BRANCH", null, ["local:b6:8"]]
+ 006b8f50 ["BRANCH", null, ["local:b5:8"]]
- 006b8f00 ["INT_ADD", "register:40f0:8", ["const:6b8f00:8", "const:4:8"]]
- 006b8f00 ["CALL", null, ["callee:00c57f80:8"]]
+ 006b8f58 ["INT_ADD", "register:40f0:8", ["const:6b8f58:8", "const:4:8"]]
+ 006b8f58 ["CALL", null, ["callee:00c57f80:8"]]
- 006b8f0c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 006b8f64 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-97a0fc9c28c37bfca60ef7c9d175a9c4"></a>

### [`006b8f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f4c.md) → [`006b8fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fa4.md) FUN_006b8fa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c58.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b8fb0",
      "incomplete_value": false,
      "site": "006b8fb4",
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
      "definition_site": "006b8f58",
      "incomplete_value": false,
      "site": "006b8f5c",
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
      "006b8fb0",
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
      "006b8fb0",
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
- 006b8f5c ["INT_ADD", "register:40f0:8", ["const:6b8f5c:8", "const:4:8"]]
- 006b8f5c ["CALL", null, ["callee:0043b7b8:8"]]
+ 006b8fb4 ["INT_ADD", "register:40f0:8", ["const:6b8fb4:8", "const:4:8"]]
+ 006b8fb4 ["CALL", null, ["callee:0043b7b8:8"]]
- 006b8f58 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006b8f58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006b8f58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006b8f58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006b8fb0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006b8fb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006b8fb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006b8fb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e6d5fd9006ff2f053b809fcbaedf4b6b"></a>

### [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) → [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) FUN_006b8fb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006b85b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b85b8.md) [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006b99e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b9/006b99e4.md) · 呼出先 10件 [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006b99e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b9/006b99e4.md) [`006ba4d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba4d4.md) [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md)
- 新版 呼出元 3件 [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) · 呼出先 10件 [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) [`006ba52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba52c.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.10% / 新版 88.10%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 9件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b9004",
      "incomplete_value": true,
      "site": "006b9010",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:7ffffffffffffff8:8"
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
    "new": null,
    "old": {
      "definition_site": "006b9220",
      "incomplete_value": true,
      "site": "006b9228",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b928c",
      "incomplete_value": true,
      "site": "006b92a0",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:006b8fa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b9a38"
      ]
    ],
    [
      "unmatched:006b8fa4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006b8fa8",
      "READ",
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
      "006b8ff8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006b9a38"
      ]
    ],
    [
      "006b8ffc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006b9000",
      "READ",
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
- 006b9010 ["INT_ADD", "register:40f0:8", ["const:6b9010:8", "const:4:8"]]
- 006b9010 ["CALL", null, ["callee:00c580d0:8"]]
+ 006b9068 ["INT_ADD", "register:40f0:8", ["const:6b9068:8", "const:4:8"]]
+ 006b9068 ["CALL", null, ["callee:00c580d0:8"]]
- 006b9228 ["INT_ADD", "register:40f0:8", ["const:6b9228:8", "const:4:8"]]
- 006b9228 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b9280 ["INT_ADD", "register:40f0:8", ["const:6b9280:8", "const:4:8"]]
+ 006b9280 ["CALL", null, ["callee:00c57f60:8"]]
- 006b9248 ["INT_ADD", "register:40f0:8", ["const:6b9248:8", "const:4:8"]]
- 006b9248 ["CALL", null, ["callee:00c580d0:8"]]
+ 006b92a0 ["INT_ADD", "register:40f0:8", ["const:6b92a0:8", "const:4:8"]]
+ 006b92a0 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-f60e848edd2dfe9b36ca2975b5921344"></a>

### [`006b99e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b9/006b99e4.md) → [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) FUN_006b9a3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) · 呼出先 8件 [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006ba4d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba4d4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) · 呼出先 8件 [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006ba52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba52c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.81% / 新版 86.81%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 9件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 35件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b9ce4",
      "incomplete_value": true,
      "site": "006b9cec",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006b9d40",
      "incomplete_value": true,
      "site": "006b9d44",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b9da8",
      "incomplete_value": true,
      "site": "006b9dbc",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
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
      "unmatched:006b9b48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba204"
      ]
    ],
    [
      "006b9bb0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006b9bbc"
      ]
    ],
    [
      "unmatched:006b9b98",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006b9ba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba204"
      ]
    ],
    [
      "006b9bb0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006b9c14"
      ]
    ],
    [
      "006b9bf0",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006b9c94 ["INT_ADD", "register:40f0:8", ["const:6b9c94:8", "const:4:8"]]
- 006b9c94 ["CALL", null, ["callee:00c57f80:8"]]
+ 006b9cec ["INT_ADD", "register:40f0:8", ["const:6b9cec:8", "const:4:8"]]
+ 006b9cec ["CALL", null, ["callee:00c57f80:8"]]
- 006b9d44 ["INT_ADD", "register:40f0:8", ["const:6b9d44:8", "const:4:8"]]
- 006b9d44 ["CALL", null, ["callee:00c57f60:8"]]
+ 006b9d9c ["INT_ADD", "register:40f0:8", ["const:6b9d9c:8", "const:4:8"]]
+ 006b9d9c ["CALL", null, ["callee:00c57f60:8"]]
- 006b9d64 ["INT_ADD", "register:40f0:8", ["const:6b9d64:8", "const:4:8"]]
- 006b9d64 ["CALL", null, ["callee:00c580d0:8"]]
+ 006b9dbc ["INT_ADD", "register:40f0:8", ["const:6b9dbc:8", "const:4:8"]]
+ 006b9dbc ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-22ecc2d8c64227cc5c8a0815bfd3472c"></a>

### [`006ba4d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba4d4.md) → [`006ba52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba52c.md) FUN_006ba52c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006b99e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b9/006b99e4.md) [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006ba4dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba594"
      ]
    ],
    [
      "unmatched:006ba4e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006ba4e4",
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
      "006ba534",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba594"
      ]
    ],
    [
      "006ba538",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006ba53c",
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
- 006ba4d4 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006ba4d4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 006ba4d8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006ba4d8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 006ba4d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 006ba4dc ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 006ba4dc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-831a1d37cfa884e736652820b427b907"></a>

### [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md) → [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) FUN_006ba598

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006b8f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8f60.md) [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md) · 呼出先 8件 [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`006ba4d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba4d4.md) [`006ba540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ba/006ba540.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) · 呼出先 8件 [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`006ba52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba52c.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.52% / 新版 90.52%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 5件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006bab44",
      "incomplete_value": true,
      "site": "006bab58",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006baeb0",
      "incomplete_value": true,
      "site": "006baeb4",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006baec0",
      "incomplete_value": true,
      "site": "006baed4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:006ba7c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba764"
      ]
    ],
    [
      "006ba944",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006bb188"
      ]
    ],
    [
      "unmatched:006ba8f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba898"
      ]
    ]
  ],
  "added": [
    [
      "006ba820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba764"
      ]
    ],
    [
      "006ba944",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bb1e0"
      ]
    ],
    [
      "006ba950",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006ba898"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bab58 ["INT_ADD", "register:40f0:8", ["const:6bab58:8", "const:4:8"]]
- 006bab58 ["CALL", null, ["local:b0:8"]]
+ 006babb0 ["INT_ADD", "register:40f0:8", ["const:6babb0:8", "const:4:8"]]
+ 006babb0 ["CALL", null, ["local:b0:8"]]
- 006bae44 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 006bae44 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffd0:8"]]
- 006bae44 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:4"]]
- 006bae5c ["INT_ADD", "register:40f0:8", ["const:6bae5c:8", "const:4:8"]]
- 006bae5c ["CALL", null, ["callee:00c57f60:8"]]
+ 006baeb4 ["INT_ADD", "register:40f0:8", ["const:6baeb4:8", "const:4:8"]]
+ 006baeb4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8bedaea92d16bf3b34b6614f30b37ec0"></a>

### [`006bb364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bb364.md) → [`006bb3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bb3bc.md) _INIT_106

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.97% / 新版 77.97%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bb5dc",
      "incomplete_value": false,
      "site": "006bb5f0",
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
    "old": {
      "definition_site": "006bb584",
      "incomplete_value": false,
      "site": "006bb598",
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
            "const:e70:8"
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
      "definition_site": "006bb5e4",
      "incomplete_value": false,
      "site": "006bb5f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bb58c",
      "incomplete_value": false,
      "site": "006bb598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:730:8"
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
    "new": {
      "definition_site": "006bb5ec",
      "incomplete_value": false,
      "site": "006bb5f0",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bb594",
      "incomplete_value": false,
      "site": "006bb598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006bb368",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bb36c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bb370",
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
      "006bb3c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006bb3c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006bb3c8",
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
- 006bb598 ["INT_ADD", "register:40f0:8", ["const:6bb598:8", "const:4:8"]]
- 006bb598 ["CALL", null, ["callee:00c57f00:8"]]
+ 006bb5f0 ["INT_ADD", "register:40f0:8", ["const:6bb5f0:8", "const:4:8"]]
+ 006bb5f0 ["CALL", null, ["callee:00c57f00:8"]]
- 006bb5c4 ["INT_ADD", "register:40f0:8", ["const:6bb5c4:8", "const:4:8"]]
- 006bb5c4 ["CALL", null, ["callee:00c57f80:8"]]
+ 006bb61c ["INT_ADD", "register:40f0:8", ["const:6bb61c:8", "const:4:8"]]
+ 006bb61c ["CALL", null, ["callee:00c57f80:8"]]
- 006bb5e4 ["INT_ADD", "register:40f0:8", ["const:6bb5e4:8", "const:4:8"]]
- 006bb5e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 006bb63c ["INT_ADD", "register:40f0:8", ["const:6bb63c:8", "const:4:8"]]
+ 006bb63c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-fa9dc5f86d54cec2cde495983177b1c1"></a>

### [`006bb6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bb6f4.md) → [`006bb74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bb74c.md) FUN_006bb74c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00adf218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00adf/00adf218.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bb7c8",
      "incomplete_value": true,
      "site": "006bb7cc",
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
                "register:40c0:8"
              ],
              [
                "leaf",
                "const:238:8"
              ]
            ]
          ]
        ]
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
      "unmatched:006bb6f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bb6f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bb6fc",
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
      "006bb74c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006bb750",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006bb754",
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
- 006bb774 ["INT_ADD", "register:40f0:8", ["const:6bb774:8", "const:4:8"]]
- 006bb774 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006bb7cc ["INT_ADD", "register:40f0:8", ["const:6bb7cc:8", "const:4:8"]]
+ 006bb7cc ["CALL", null, ["callee:0043bbe4:8"]]
- 006bb7cc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006bb7cc ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
- 006bb6f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006bb6f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006bb6f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 006bb6f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-a244c26b85180da14ae97dbe932c5f9f"></a>

### [`006bb908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bb908.md) → [`006bb960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bb960.md) _INIT_107

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
      "definition_site": "006bb99c",
      "incomplete_value": true,
      "site": "006bb9b8",
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
      "definition_site": "006bb944",
      "incomplete_value": true,
      "site": "006bb960",
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
      "definition_site": "006bb9c0",
      "incomplete_value": true,
      "site": "006bb9dc",
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
      "definition_site": "006bb968",
      "incomplete_value": true,
      "site": "006bb984",
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
      "definition_site": "006bb9e0",
      "incomplete_value": true,
      "site": "006bb9fc",
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
      "definition_site": "006bb988",
      "incomplete_value": true,
      "site": "006bb9a4",
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
      "006bb99c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "006bb9c0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "006bb9e0",
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
      "006bb99c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006bb9c0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006bb9e0",
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
- 006bb9dc ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 006bb9dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006bb9dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006bb9dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006bba34 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 006bba34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006bba34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006bba34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006bb9fc ["COPY", "tmp:0:8", ["const:f09:8"]]
- 006bb9fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006bb9fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006bb9fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006bba54 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 006bba54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006bba54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006bba54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006bba68 ["INT_ADD", "register:40f0:8", ["const:6bba68:8", "const:4:8"]]
- 006bba68 ["CALL", null, ["callee:0043b838:8"]]
+ 006bbac0 ["INT_ADD", "register:40f0:8", ["const:6bbac0:8", "const:4:8"]]
+ 006bbac0 ["CALL", null, ["callee:0043b838:8"]]
~~~


