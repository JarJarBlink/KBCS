# v16.0.1 → v16.0.2 · 最優先の変更候補 (60)

[一覧の目次](README.md)

<a id="compare-924cf6f3f5b266e3066027bd528a856e"></a>

### [`009aeb2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009aeb2c.md) → [`009aeb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009aeb80.md) FUN_009aeb80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00759114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/00759114.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 5件 [`009b5ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ca4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`0075916c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075916c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 5件 [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.85% / 新版 78.85%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009aeb30",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009aeb34",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009aeb58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aec1c"
      ]
    ]
  ],
  "added": [
    [
      "009aeb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009aeb88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009aebac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aec1c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aeb2c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 009aeb30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009aeb30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009aeb30 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009aeb30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009aeb34 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 009aeb34 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 009aeb34 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 009aeb34 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bc02e9923d7009f493c64feaece50591"></a>

### [`009aec20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009aec20.md) → [`009aec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009aec74.md) FUN_009aec74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 5件 [`009b5d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d30.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 5件 [`009b5d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d84.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.29% / 新版 84.29%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009aec4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aed20"
      ]
    ],
    [
      "unmatched:009aecec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "unmatched:009aecf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aed60"
      ]
    ]
  ],
  "added": [
    [
      "009aeca0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aed20"
      ]
    ],
    [
      "009aed40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "009aed44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aed60"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aec48 ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:4048:8"]]
- 009aec48 ["INT_SBORROW", "register:106:1", ["register:4048:8", "register:4040:8"]]
- 009aec48 ["INT_SUB", "tmp:0:8", ["register:4048:8", "register:4040:8"]]
- 009aec48 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009aec4c ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
- 009aec68 ["CBRANCH", null, ["local:b11:8", "register:102:1"]]
+ 009aecbc ["CBRANCH", null, ["local:b10:8", "register:102:1"]]
~~~


<a id="compare-569916dca1f19fd4bb291c48978fb29b"></a>

### [`009aed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009aed80.md) → [`009aedd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009aedd4.md) FUN_009aedd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 13件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0062fa58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062f/0062fa58.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`009b2744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2744.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 13件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0062fa98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062f/0062fa98.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009b2798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2798.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.92% / 新版 86.92%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009aedbc",
      "incomplete_value": true,
      "site": "009aedc8",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009aeec8",
      "incomplete_value": true,
      "site": "009aeee0",
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
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009aeecc",
      "incomplete_value": true,
      "site": "009aeee0",
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
      "unmatched:009aedb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:009aedf8",
      "READ",
      [
        "storage",
        "002bce77",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009aedfc",
      "READ",
      [
        "storage",
        "002bce7c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009aee08",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "009aee4c",
      "READ",
      [
        "storage",
        "002bce23",
        null,
        "string"
      ]
    ],
    [
      "009aee50",
      "READ",
      [
        "storage",
        "002bce28",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aedc8 ["INT_ADD", "register:40f0:8", ["const:9aedc8:8", "const:4:8"]]
- 009aedc8 ["CALL", null, ["callee:00c53d70:8"]]
+ 009aee1c ["INT_ADD", "register:40f0:8", ["const:9aee1c:8", "const:4:8"]]
+ 009aee1c ["CALL", null, ["callee:00c53d70:8"]]
- 009aee8c ["INT_ADD", "register:40f0:8", ["const:9aee8c:8", "const:4:8"]]
- 009aee8c ["CALL", null, ["callee:008bad20:8"]]
+ 009aeee0 ["INT_ADD", "register:40f0:8", ["const:9aeee0:8", "const:4:8"]]
+ 009aeee0 ["CALL", null, ["callee:008bad20:8"]]
- 009aef00 ["INT_ADD", "register:40f0:8", ["const:9aef00:8", "const:4:8"]]
- 009aef00 ["CALL", null, ["callee:00c57f50:8"]]
+ 009aef54 ["INT_ADD", "register:40f0:8", ["const:9aef54:8", "const:4:8"]]
+ 009aef54 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-577c34165eacfd548fe23fa460d2262d"></a>

### [`009aefcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009aefcc.md) → [`009af020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af020.md) FUN_009af020

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 6件 [`009b5ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ca4.md) [`009b5ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ce8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 6件 [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`009b5d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d3c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.31% / 新版 88.31%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009af044",
      "incomplete_value": true,
      "site": "009af048",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:009aefdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009af018",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af0e4"
      ]
    ],
    [
      "unmatched:009af050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af0b4"
      ]
    ]
  ],
  "added": [
    [
      "009af030",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009af06c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af0e4"
      ]
    ],
    [
      "009af0a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af0b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009af048 ["INT_ADD", "register:40f0:8", ["const:9af048:8", "const:4:8"]]
- 009af048 ["CALL", null, ["callee:009b5cf8:8"]]
+ 009af09c ["INT_ADD", "register:40f0:8", ["const:9af09c:8", "const:4:8"]]
+ 009af09c ["CALL", null, ["callee:009b5cf8:8"]]
- 009aefdc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009aefdc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009aefdc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 009aefdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009aeff8 ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:4048:8"]]
- 009aeff8 ["INT_SBORROW", "register:106:1", ["register:4048:8", "register:4040:8"]]
- 009aeff8 ["INT_SUB", "tmp:0:8", ["register:4048:8", "register:4040:8"]]
- 009aeff8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-d95a2d0498efd774b6e21fcc38884dba"></a>

### [`009af200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af200.md) → [`009af254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af254.md) FUN_009af254

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 15件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b01a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b01a0.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`009b27f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b27f4.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 15件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b01f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b01f8.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009b2848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2848.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009af37c",
      "incomplete_value": false,
      "site": "009af37c",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009af328",
      "incomplete_value": false,
      "site": "009af328",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009af298",
      "incomplete_value": true,
      "site": "009af298",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009af244",
      "incomplete_value": true,
      "site": "009af244",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:5008:8"
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
    "new": null,
    "old": {
      "definition_site": "009af2fc",
      "incomplete_value": true,
      "site": "009af318",
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
      "009af2e0",
      "READ",
      [
        "storage",
        "002b68c5",
        null,
        "string"
      ]
    ],
    [
      "009af2e0",
      "READ",
      [
        "storage",
        "002a07bd",
        null,
        "string"
      ]
    ],
    [
      "009af2e4",
      "READ",
      [
        "storage",
        "002b68d5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009af2e0",
      "READ",
      [
        "storage",
        "002b6905",
        null,
        "string"
      ]
    ],
    [
      "009af2e0",
      "READ",
      [
        "storage",
        "002a0770",
        null,
        "string"
      ]
    ],
    [
      "009af2e4",
      "READ",
      [
        "storage",
        "002b6915",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009af298 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:51:8"]]
- 009af298 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 009af2c4 ["INT_ADD", "register:40f0:8", ["const:9af2c4:8", "const:4:8"]]
- 009af2c4 ["CALL", null, ["callee:009b5db8:8"]]
+ 009af318 ["INT_ADD", "register:40f0:8", ["const:9af318:8", "const:4:8"]]
+ 009af318 ["CALL", null, ["callee:009b5db8:8"]]
- 009af318 ["INT_ADD", "register:40f0:8", ["const:9af318:8", "const:4:8"]]
- 009af318 ["CALL", null, ["callee:008b01f8:8"]]
+ 009af36c ["INT_ADD", "register:40f0:8", ["const:9af36c:8", "const:4:8"]]
+ 009af36c ["CALL", null, ["callee:008b01f8:8"]]
~~~


<a id="compare-9857d488d605fa462d2bc2f13edb77b6"></a>

### [`009af4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af4c4.md) → [`009af518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af518.md) FUN_009af518

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 6件 [`009aad6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aad6c.md) [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 6件 [`009aadc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aadc0.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.41% / 新版 88.41%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009af4e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:009af56c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af554"
      ]
    ],
    [
      "unmatched:009af5c4",
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
      "009af53c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "009af5c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af554"
      ]
    ],
    [
      "009af618",
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
- 009af4e4 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:28:8"]]
- 009af4e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009af4e8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009af4e8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 009af4e8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 009af4f4 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
+ 009af548 ["CBRANCH", null, ["local:b18:8", "register:101:1"]]
~~~


<a id="compare-6c2736a129da7c9c32eb33e247619c0d"></a>

### [`009af5fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af5fc.md) → [`009af650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af650.md) FUN_009af650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`009b5d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d1c.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 009af624 ["INT_ADD", "register:40f0:8", ["const:9af624:8", "const:4:8"]]
- 009af624 ["CALL", null, ["callee:009b5ce8:8"]]
+ 009af678 ["INT_ADD", "register:40f0:8", ["const:9af678:8", "const:4:8"]]
+ 009af678 ["CALL", null, ["callee:009b5ce8:8"]]
- 009af62c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 009af680 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 009af648 ["COPY", "register:0:8", ["register:40f0:8"]]
- 009af648 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-08fd2cc2a335a890dcc046e676c279f7"></a>

### [`009af664`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af664.md) → [`009af6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af6b8.md) FUN_009af6b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0072b1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0072b/0072b1a0.md) · 呼出先 9件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`009b4154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4154.md) [`009b5d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d64.md) [`009b5d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d74.md) [`00a33c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33c1c.md)
- 新版 呼出元 1件 [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) · 呼出先 9件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`009b41a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41a8.md) [`009b5db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5db8.md) [`009b5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dc8.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.39% / 新版 93.39%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009af6e0",
      "incomplete_value": false,
      "site": "009af6e4",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009af76c",
      "incomplete_value": false,
      "site": "009af770",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "009af768",
      "incomplete_value": true,
      "site": "009af770",
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
      "unmatched:009af674",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009af6e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af6f8"
      ]
    ],
    [
      "unmatched:009af728",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af7a8"
      ]
    ]
  ],
  "added": [
    [
      "009af6c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009af73c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af6f8"
      ]
    ],
    [
      "009af77c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af7a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009af6e4 ["INT_ADD", "register:40f0:8", ["const:9af6e4:8", "const:4:8"]]
- 009af6e4 ["CALL", null, ["callee:00c53da0:8"]]
+ 009af738 ["INT_ADD", "register:40f0:8", ["const:9af738:8", "const:4:8"]]
+ 009af738 ["CALL", null, ["callee:00c53da0:8"]]
- 009af71c ["INT_ADD", "register:40f0:8", ["const:9af71c:8", "const:4:8"]]
- 009af71c ["CALL", null, ["callee:00c53d70:8"]]
+ 009af770 ["INT_ADD", "register:40f0:8", ["const:9af770:8", "const:4:8"]]
+ 009af770 ["CALL", null, ["callee:00c53d70:8"]]
- 009af770 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009af770 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 009af7c4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009af7c4 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
~~~


<a id="compare-b4e866c7e38fe63fe7d854b4060ee6db"></a>

### [`009af88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af88c.md) → [`009af8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af8e0.md) FUN_009af8e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a9c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9c/00a9c6f0.md) · 呼出先 6件 [`00806614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/00806614.md) [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 6件 [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009af98c",
      "incomplete_value": false,
      "site": "009af990",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "009af988",
      "incomplete_value": true,
      "site": "009af990",
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
      "unmatched:009af890",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009af8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af954"
      ]
    ]
  ],
  "added": [
    [
      "009af8e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009af90c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009af954"
      ]
    ]
  ]
}
~~~


~~~diff
- 009af93c ["INT_ADD", "register:40f0:8", ["const:9af93c:8", "const:4:8"]]
- 009af93c ["CALL", null, ["callee:00c53da0:8"]]
+ 009af990 ["INT_ADD", "register:40f0:8", ["const:9af990:8", "const:4:8"]]
+ 009af990 ["CALL", null, ["callee:00c53da0:8"]]
- 009af88c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 009af890 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009af890 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009af890 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009af890 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f3619488c09eeec9d5423322607c0c95"></a>

### [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) → [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) FUN_009af9dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 13件 [`009ac890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac890.md) [`009aca24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009aca24.md) [`009afe24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afe24.md) [`009b0d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d44.md) [`009b2c48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2c48.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 13件 [`009ac8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac8e4.md) [`009aca78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009aca78.md) [`009afe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afe78.md) [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md) [`009b2c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2c9c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.44% / 新版 93.44%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009afd10",
      "incomplete_value": true,
      "site": "009afd14",
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
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009afde0",
      "incomplete_value": true,
      "site": "009afde4",
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
    "ordinal": 26,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009afb30"
      ],
      [
        "CONDITIONAL_JUMP",
        "009afb84"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009afb80",
      "incomplete_value": true,
      "site": "009afba0",
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
      "site": "009afb4c",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:009afb20",
      "DATA",
      [
        "storage",
        "00c88d80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009afb24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009afb94"
      ]
    ],
    [
      "009afce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009afb9c"
      ]
    ]
  ],
  "added": [
    [
      "009afb74",
      "DATA",
      [
        "storage",
        "00c88e50",
        null,
        "undefined *"
      ]
    ],
    [
      "009afb78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009afb94"
      ]
    ],
    [
      "009afb84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009afb9c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009afcc0 ["BRANCH", null, ["local:b58:8"]]
+ 009afd14 ["BRANCH", null, ["local:b56:8"]]
- 009afd14 ["INT_ADD", "register:40f0:8", ["const:9afd14:8", "const:4:8"]]
- 009afd14 ["CALL", null, ["callee:009b0d98:8"]]
+ 009afd68 ["INT_ADD", "register:40f0:8", ["const:9afd68:8", "const:4:8"]]
+ 009afd68 ["CALL", null, ["callee:009b0d98:8"]]
- 009afde4 ["INT_ADD", "register:40f0:8", ["const:9afde4:8", "const:4:8"]]
- 009afde4 ["CALL", null, ["callee:009afe78:8"]]
+ 009afe38 ["INT_ADD", "register:40f0:8", ["const:9afe38:8", "const:4:8"]]
+ 009afe38 ["CALL", null, ["callee:009afe78:8"]]
~~~


<a id="compare-de0199f33a3d23584fdf72a72b5bf1cb"></a>

### [`009afe24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afe24.md) → [`009afe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afe78.md) FUN_009afe78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) · 呼出先 0件 
- 新版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009afe40 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 009afe94 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 009afe44 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009afe44 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009afe98 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009afe98 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 009afe4c ["BRANCH", null, ["local:b5:8"]]
+ 009afea0 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-f3ee3eb0a5933466aa5315e32283f7b1"></a>

### [`009afea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afea8.md) → [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) FUN_009afefc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 18件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492ccc.md) [`00729974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00729/00729974.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 18件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d0c.md) [`007299cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/007299cc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.93% / 新版 86.93%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009afff4",
      "incomplete_value": true,
      "site": "009afff8",
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
                "const:ffffffffffffffd0:8"
              ]
            ]
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
      "definition_site": "009b0188",
      "incomplete_value": true,
      "site": "009b018c",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b0318",
      "incomplete_value": true,
      "site": "009b0324",
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
    "ordinal": 34,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009afebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009afedc",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:009afee4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "009ad9d4"
      ]
    ]
  ],
  "added": [
    [
      "009aff10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009aff30",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "009aff38",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "009ad9d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009affa4 ["INT_ADD", "register:40f0:8", ["const:9affa4:8", "const:4:8"]]
- 009affa4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009afff8 ["INT_ADD", "register:40f0:8", ["const:9afff8:8", "const:4:8"]]
+ 009afff8 ["CALL", null, ["callee:00c57f80:8"]]
- 009afff8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:48:8"]]
- 009afff8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 009b0138 ["INT_ADD", "register:40f0:8", ["const:9b0138:8", "const:4:8"]]
- 009b0138 ["CALL", null, ["callee:0048ce94:8"]]
+ 009b018c ["INT_ADD", "register:40f0:8", ["const:9b018c:8", "const:4:8"]]
+ 009b018c ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-aaf7e056c3574649a9793c2c5538b846"></a>

### [`009b04d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b04d4.md) → [`009b0528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0528.md) FUN_009b0528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b04e0",
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
      "009b0534",
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
- 009b04e0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b04e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b04ec ["INT_ADD", "register:40f0:8", ["const:9b04ec:8", "const:4:8"]]
- 009b04ec ["CALL", null, ["callee:00869f4c:8"]]
+ 009b0540 ["INT_ADD", "register:40f0:8", ["const:9b0540:8", "const:4:8"]]
+ 009b0540 ["CALL", null, ["callee:00869f4c:8"]]
+ 009b0534 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
+ 009b0534 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-255059dd0bf4b063e594ea32e8722425"></a>

### [`009b0504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0504.md) → [`009b0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0558.md) FUN_009b0558

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009afea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afea8.md) · 呼出先 22件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00474198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00474/00474198.md) [`0048c000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048c000.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 1件 [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) · 呼出先 22件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`004741d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00474/004741d8.md) [`0048c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048c040.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.27% / 新版 89.27%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 1件, `store_value` 3件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009b0730",
      "incomplete_value": true,
      "site": "009b0744",
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
                "live",
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b06dc",
      "incomplete_value": true,
      "site": "009b06f0",
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
                "live",
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:cb0:8"
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
      "definition_site": "009b072c",
      "incomplete_value": true,
      "site": "009b074c",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:985:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b06d8",
      "incomplete_value": true,
      "site": "009b06f8",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:9d9:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009b072c",
      "incomplete_value": true,
      "site": "009b074c",
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
      "definition_site": "009b06d8",
      "incomplete_value": true,
      "site": "009b06f8",
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
    "ordinal": 31,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b051c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b05b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b05d0"
      ]
    ],
    [
      "009b0618",
      "DATA",
      [
        "storage",
        "003965a4",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "009b0570",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b0604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b05d0"
      ]
    ],
    [
      "009b0618",
      "DATA",
      [
        "storage",
        "003965a4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b0550 ["INT_ADD", "register:40f0:8", ["const:9b0550:8", "const:4:8"]]
- 009b0550 ["CALL", null, ["callee:009aae24:8"]]
+ 009b05a4 ["INT_ADD", "register:40f0:8", ["const:9b05a4:8", "const:4:8"]]
+ 009b05a4 ["CALL", null, ["callee:009aae24:8"]]
- 009b06a4 ["INT_ADD", "register:40f0:8", ["const:9b06a4:8", "const:4:8"]]
- 009b06a4 ["CALL", null, ["callee:00869f4c:8"]]
+ 009b06f8 ["INT_ADD", "register:40f0:8", ["const:9b06f8:8", "const:4:8"]]
+ 009b06f8 ["CALL", null, ["callee:00869f4c:8"]]
- 009b0798 ["INT_ADD", "register:40f0:8", ["const:9b0798:8", "const:4:8"]]
- 009b0798 ["CALL", null, ["callee:00687668:8"]]
+ 009b07ec ["INT_ADD", "register:40f0:8", ["const:9b07ec:8", "const:4:8"]]
+ 009b07ec ["CALL", null, ["callee:00687668:8"]]
~~~


<a id="compare-23362e0ec6f3db5d021900764aeec246"></a>

### [`009b0b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0b9c.md) → [`009b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0bf0.md) FUN_009b0bf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b0bf4",
      "incomplete_value": false,
      "site": "009b0bf8",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b0ba0",
      "incomplete_value": false,
      "site": "009b0ba4",
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
      "009b0bf8",
      "DATA",
      [
        "storage",
        "00c88ab0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009b0bf8",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b0ba0 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 009b0ba0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b0ba0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b0ba0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b0bf4 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 009b0bf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b0bf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b0bf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-47e0600f11c94937566a160613c53fd6"></a>

### [`009b0bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0bac.md) → [`009b0c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c00.md) FUN_009b0c00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b0c10",
      "incomplete_value": false,
      "site": "009b0c18",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b0bbc",
      "incomplete_value": false,
      "site": "009b0bc4",
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
      "009b0c18",
      "DATA",
      [
        "storage",
        "00c88ab0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009b0c18",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b0bbc ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 009b0bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b0bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b0bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b0c10 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 009b0c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b0c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b0c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b0bc8 ["INT_ADD", "register:40f0:8", ["const:9b0bc8:8", "const:4:8"]]
- 009b0bc8 ["CALL", null, ["callee:00c57f70:8"]]
+ 009b0c1c ["INT_ADD", "register:40f0:8", ["const:9b0c1c:8", "const:4:8"]]
+ 009b0c1c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-1d5774368dd8871297d66966752c6c38"></a>

### [`009b0be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0be8.md) → [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) FUN_009b0c3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`009aca74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009aca74.md) [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) [`009acf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acf68.md) [`009ad4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad4a4.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009b0d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d44.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 4件 [`009acac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acac8.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009ad4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad4f8.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.85% / 新版 98.85%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 009b0c54 ["INT_ADD", "register:40f0:8", ["const:9b0c54:8", "const:4:8"]]
- 009b0c54 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b0ca8 ["INT_ADD", "register:40f0:8", ["const:9b0ca8:8", "const:4:8"]]
+ 009b0ca8 ["CALL", null, ["callee:00c57f60:8"]]
- 009b0c80 ["INT_ADD", "register:40f0:8", ["const:9b0c80:8", "const:4:8"]]
- 009b0c80 ["CALL", null, ["callee:00c53d70:8"]]
+ 009b0cd4 ["INT_ADD", "register:40f0:8", ["const:9b0cd4:8", "const:4:8"]]
+ 009b0cd4 ["CALL", null, ["callee:00c53d70:8"]]
- 009b0ce0 ["INT_ADD", "register:40f0:8", ["const:9b0ce0:8", "const:4:8"]]
- 009b0ce0 ["CALL", null, ["callee:00c53da0:8"]]
+ 009b0d34 ["INT_ADD", "register:40f0:8", ["const:9b0d34:8", "const:4:8"]]
+ 009b0d34 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ffefd4691e07dd03c03bfc8ac8198f15"></a>

### [`009b0d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d44.md) → [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md) FUN_009b0d98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009acf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acf68.md) [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) [`009b0be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0be8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b0da4",
      "incomplete_value": false,
      "site": "009b0da8",
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
      "definition_site": "009b0d50",
      "incomplete_value": false,
      "site": "009b0d54",
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
      "009b0da4",
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
      "009b0da4",
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
- 009b0d54 ["INT_ADD", "register:40f0:8", ["const:9b0d54:8", "const:4:8"]]
- 009b0d54 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009b0da8 ["INT_ADD", "register:40f0:8", ["const:9b0da8:8", "const:4:8"]]
+ 009b0da8 ["CALL", null, ["callee:0043b7b8:8"]]
- 009b0d50 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009b0d50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009b0d50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009b0d50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009b0da4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009b0da4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009b0da4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009b0da4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3692409d5980b6589df3356cae74a547"></a>

### [`009b0d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d58.md) → [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) FUN_009b0dac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009acf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acf68.md) [`009b0d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d58.md) · 呼出先 3件 [`009b0d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d58.md) [`009b1914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1914.md) [`009b1c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1c64.md)
- 新版 呼出元 2件 [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) · 呼出先 3件 [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) [`009b1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1968.md) [`009b1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1cb8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.61% / 新版 95.61%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 28件, `unresolved_branch_alignment` 14件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b13d8",
      "incomplete_value": true,
      "site": "009b13e0",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "009b14a0",
      "incomplete_value": true,
      "site": "009b14a8",
      "value": [
        "live",
        "register:4030:8"
      ]
    },
    "ordinal": 3,
    "slot": 8
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b0eec"
      ],
      [
        "FALL_THROUGH",
        "009b0f40"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b0f40",
      "incomplete_value": true,
      "site": "009b0f4c",
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
    "old": {
      "definition_site": "009b0eec",
      "incomplete_value": true,
      "site": "009b0ef8",
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
                "register:4058:4"
              ],
              [
                "live",
                "register:4060:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b0de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b15f0"
      ]
    ],
    [
      "unmatched:009b0eec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b120c"
      ]
    ],
    [
      "unmatched:009b0f6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1054"
      ]
    ]
  ],
  "added": [
    [
      "009b0e38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b15f0"
      ]
    ],
    [
      "009b0f40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b120c"
      ]
    ],
    [
      "009b0fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b0fb4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009b0fb4 ["CBRANCH", null, ["local:b54:8", "tmp:0:1"]]
+ 009b1008 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009b1008 ["CBRANCH", null, ["local:b52:8", "tmp:0:1"]]
- 009b1058 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009b1058 ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
+ 009b10ac ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009b10ac ["CBRANCH", null, ["local:b57:8", "tmp:0:1"]]
- 009b12f0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009b12f0 ["CBRANCH", null, ["local:b107:8", "tmp:0:1"]]
+ 009b1344 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009b1344 ["CBRANCH", null, ["local:b108:8", "tmp:0:1"]]
~~~


<a id="compare-ee7e233c94f72bd74e9e68d4351ed3db"></a>

### [`009b1914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1914.md) → [`009b1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1968.md) FUN_009b1968

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b0d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d58.md) · 呼出先 1件 [`009b1c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1c64.md)
- 新版 呼出元 1件 [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) · 呼出先 1件 [`009b1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1cb8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.64% / 新版 97.64%

優先判定に残った影響 `store_condition` 10件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b1948"
      ],
      [
        "FALL_THROUGH",
        "009b199c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b199c",
      "incomplete_value": true,
      "site": "009b19a8",
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
    "old": {
      "definition_site": "009b1948",
      "incomplete_value": true,
      "site": "009b1954",
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
                "live",
                "register:4048:4"
              ]
            ]
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
        "FALL_THROUGH",
        "009b1948"
      ],
      [
        "FALL_THROUGH",
        "009b199c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b199c",
      "incomplete_value": true,
      "site": "009b19ac",
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
    "old": {
      "definition_site": "009b1948",
      "incomplete_value": true,
      "site": "009b1958",
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
                "live",
                "register:4048:4"
              ]
            ]
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
        "FALL_THROUGH",
        "009b1948"
      ],
      [
        "FALL_THROUGH",
        "009b199c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b199c",
      "incomplete_value": true,
      "site": "009b19b8",
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
    "old": {
      "definition_site": "009b1948",
      "incomplete_value": true,
      "site": "009b1964",
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
                "live",
                "register:4048:4"
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
      "unmatched:009b1948",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1c9c"
      ]
    ],
    [
      "unmatched:009b1a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1b20"
      ]
    ],
    [
      "unmatched:009b1a98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1be4"
      ]
    ]
  ],
  "added": [
    [
      "009b199c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1c9c"
      ]
    ],
    [
      "009b1aa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1b20"
      ]
    ],
    [
      "009b1aec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1be4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b19a8 ["INT_ADD", "register:40f0:8", ["const:9b19a8:8", "const:4:8"]]
- 009b19a8 ["CALL", null, ["callee:009b1cb8:8"]]
+ 009b19fc ["INT_ADD", "register:40f0:8", ["const:9b19fc:8", "const:4:8"]]
+ 009b19fc ["CALL", null, ["callee:009b1cb8:8"]]
- 009b19b8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009b19b8 ["CBRANCH", null, ["local:b52:8", "tmp:0:1"]]
+ 009b1a0c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009b1a0c ["CBRANCH", null, ["local:b55:8", "tmp:0:1"]]
+ 009b1aa0 ["INT_ADD", "register:4050:8", ["register:4050:8", "const:4:8"]]
+ 009b1aa0 ["LOAD", "tmp:0:4", ["const:1b1:8", "register:4050:8"]]
+ 009b1aa0 ["INT_ZEXT", "register:4070:8", ["tmp:0:4"]]
~~~


<a id="compare-5a22c03e5f718a2c2339db04f89fb279"></a>

### [`009b1c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1c64.md) → [`009b1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1cb8.md) FUN_009b1cb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009b0d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d58.md) [`009b1914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1914.md) · 呼出先 0件 
- 新版 呼出元 2件 [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) [`009b1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1968.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 88.30% / 新版 88.30%

優先判定に残った影響 `store_condition` 6件

アドレスに依存する影響 `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b1cdc"
      ],
      [
        "FALL_THROUGH",
        "009b1d30"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b1d30",
      "incomplete_value": true,
      "site": "009b1d3c",
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
                "register:4050:4"
              ],
              [
                "live",
                "register:4060:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b1cdc",
      "incomplete_value": true,
      "site": "009b1ce8",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b1cdc"
      ],
      [
        "FALL_THROUGH",
        "009b1d30"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b1d30",
      "incomplete_value": true,
      "site": "009b1d44",
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
                "register:4050:4"
              ],
              [
                "live",
                "register:4060:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b1cdc",
      "incomplete_value": true,
      "site": "009b1cf0",
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
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b1db4"
      ],
      [
        "FALL_THROUGH",
        "009b1e08"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b1e08",
      "incomplete_value": true,
      "site": "009b1e14",
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
                "register:4048:4"
              ],
              [
                "live",
                "register:4040:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b1db4",
      "incomplete_value": true,
      "site": "009b1dc0",
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
    "ordinal": 24,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b1c78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1cf8"
      ]
    ],
    [
      "unmatched:009b1cdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1da0"
      ]
    ],
    [
      "unmatched:009b1db4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1e2c"
      ]
    ]
  ],
  "added": [
    [
      "009b1ccc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1cf8"
      ]
    ],
    [
      "009b1d30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1da0"
      ]
    ],
    [
      "009b1e08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1e2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b1c64 ["COPY", "register:4048:8", ["register:4018:8"]]
- 009b1c68 ["COPY", "register:4040:8", ["register:4008:8"]]
- 009b1c6c ["INT_ADD", "register:4048:8", ["register:4048:8", "const:fffffffffffffffc:8"]]
- 009b1c6c ["LOAD", "tmp:0:4", ["const:1b1:8", "register:4048:8"]]
- 009b1c6c ["INT_ZEXT", "register:4060:8", ["tmp:0:4"]]
~~~


<a id="compare-43da38f80de7772e9e391be67095c840"></a>

### [`009b1ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1ddc.md) → [`009b1e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1e30.md) FUN_009b1e30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009acf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acf68.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b1e48",
      "incomplete_value": false,
      "site": "009b1e4c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:009b1e38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1ec4"
      ]
    ],
    [
      "unmatched:009b1e60",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b1e8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1ec4"
      ]
    ],
    [
      "009b1eb4",
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
- 009b1e4c ["INT_ADD", "register:40f0:8", ["const:9b1e4c:8", "const:4:8"]]
- 009b1e4c ["CALL", null, ["callee:00c53da0:8"]]
+ 009b1ea0 ["INT_ADD", "register:40f0:8", ["const:9b1ea0:8", "const:4:8"]]
+ 009b1ea0 ["CALL", null, ["callee:00c53da0:8"]]
- 009b1e28 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009b1e28 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009b1e7c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009b1e7c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 009b1e2c ["BRANCH", null, ["local:b15:8"]]
+ 009b1e80 ["BRANCH", null, ["local:b16:8"]]
~~~


<a id="compare-8bc5fbe866f1151de009039992c604b0"></a>

### [`009b1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1ea4.md) → [`009b1ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1ef8.md) FUN_009b1ef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b1f3c",
      "incomplete_value": true,
      "site": "009b1f40",
      "value": [
        "live",
        "register:40a0:8"
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
      "009b1f14",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b1efc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1f60"
      ]
    ],
    [
      "unmatched:009b1f1c",
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
      "009b1f14",
      "DATA",
      [
        "storage",
        "00c88bd0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b1f50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b1f60"
      ]
    ],
    [
      "009b1f70",
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
- 009b1eec ["INT_ADD", "register:40f0:8", ["const:9b1eec:8", "const:4:8"]]
- 009b1eec ["CALL", null, ["callee:00c57f50:8"]]
+ 009b1f40 ["INT_ADD", "register:40f0:8", ["const:9b1f40:8", "const:4:8"]]
+ 009b1f40 ["CALL", null, ["callee:00c57f50:8"]]
- 009b1ebc ["COPY", "tmp:0:8", ["const:b00:8"]]
- 009b1ebc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b1ebc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b1ebc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b1ec4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 009b1ec4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 009b1f18 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 009b1f18 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-20ce492f367d39650c6168b9a4a412de"></a>

### [`009b1f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1f34.md) → [`009b1f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1f88.md) FUN_009b1f88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b1f58",
      "incomplete_value": true,
      "site": "009b1f60",
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
      "unmatched:009b1f50",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b1fa4",
      "DATA",
      [
        "storage",
        "00c88bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b1f60 ["INT_ADD", "register:40f0:8", ["const:9b1f60:8", "const:4:8"]]
- 009b1f60 ["CALL", null, ["callee:00c53da0:8"]]
+ 009b1fb4 ["INT_ADD", "register:40f0:8", ["const:9b1fb4:8", "const:4:8"]]
+ 009b1fb4 ["CALL", null, ["callee:00c53da0:8"]]
- 009b1f4c ["COPY", "tmp:0:8", ["const:b00:8"]]
- 009b1f4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b1f4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b1f4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b1f50 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 009b1f50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-cdbab854b9fd97f550ab52ab79f621f8"></a>

### [`009b1fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1fc0.md) → [`009b2014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2014.md) FUN_009b2014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2030",
      "incomplete_value": false,
      "site": "009b2040",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b1fdc",
      "incomplete_value": false,
      "site": "009b1fec",
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
            "const:b00:8"
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
      "009b2040",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2040",
      "DATA",
      [
        "storage",
        "00c88bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b1fd4 ["INT_ADD", "register:40f0:8", ["const:9b1fd4:8", "const:4:8"]]
- 009b1fd4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b2028 ["INT_ADD", "register:40f0:8", ["const:9b2028:8", "const:4:8"]]
+ 009b2028 ["CALL", null, ["callee:00c57f60:8"]]
- 009b1fdc ["COPY", "tmp:0:8", ["const:b00:8"]]
- 009b1fdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b1fdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b1fdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2030 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 009b2030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b2014 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2014 ["INT_ADD", "register:40f0:8", ["const:9b2014:8", "const:4:8"]]
- 009b2014 ["CALLIND", null, ["register:0:8"]]
+ 009b2068 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2068 ["INT_ADD", "register:40f0:8", ["const:9b2068:8", "const:4:8"]]
+ 009b2068 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8fd84f2f5b2cd521914564bb6aa9bdc9"></a>

### [`009b2070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2070.md) → [`009b20c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b20c4.md) FUN_009b20c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b20d4",
      "incomplete_value": false,
      "site": "009b20dc",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b2080",
      "incomplete_value": false,
      "site": "009b2088",
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
            "const:b00:8"
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
      "009b20dc",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b20e4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b20dc",
      "DATA",
      [
        "storage",
        "00c88bd0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b2138",
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
- 009b2080 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 009b2080 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b2080 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b2080 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b20d4 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 009b20d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b20d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b20d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b20bc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b20bc ["INT_ADD", "register:40f0:8", ["const:9b20bc:8", "const:4:8"]]
- 009b20bc ["CALLIND", null, ["register:0:8"]]
+ 009b2110 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2110 ["INT_ADD", "register:40f0:8", ["const:9b2110:8", "const:4:8"]]
+ 009b2110 ["CALLIND", null, ["register:0:8"]]
- 009b20e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:18:8"]]
- 009b20e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fca34af32022a591daf78d0ae73f4738"></a>

### [`009b210c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b210c.md) → [`009b2160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2160.md) FUN_009b2160

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b2158",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b21bc"
      ]
    ],
    [
      "unmatched:009b2140",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b21ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b21bc"
      ]
    ],
    [
      "009b2194",
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
- 009b212c ["INT_ADD", "register:40f0:8", ["const:9b212c:8", "const:4:8"]]
- 009b212c ["CALL", null, ["callee:00c53da0:8"]]
+ 009b2180 ["INT_ADD", "register:40f0:8", ["const:9b2180:8", "const:4:8"]]
+ 009b2180 ["CALL", null, ["callee:00c53da0:8"]]
- 009b2140 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2140 ["INT_ADD", "register:40f0:8", ["const:9b2140:8", "const:4:8"]]
- 009b2140 ["CALLIND", null, ["register:0:8"]]
- 009b2148 ["INT_ADD", "register:40f0:8", ["const:9b2148:8", "const:4:8"]]
- 009b2148 ["CALL", null, ["callee:00c57f50:8"]]
+ 009b219c ["INT_ADD", "register:40f0:8", ["const:9b219c:8", "const:4:8"]]
+ 009b219c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-b7ab7fdf257ac3b6b38d744f26c95ea9"></a>

### [`009b2190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2190.md) → [`009b21e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b21e4.md) FUN_009b21e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.88% / 新版 96.88%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b2194",
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
      "009b21e8",
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
- 009b2194 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009b2194 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009b2194 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b2194 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b21b0 ["INT_ADD", "register:40f0:8", ["const:9b21b0:8", "const:4:8"]]
- 009b21b0 ["CALL", null, ["callee:00c53da0:8"]]
+ 009b2204 ["INT_ADD", "register:40f0:8", ["const:9b2204:8", "const:4:8"]]
+ 009b2204 ["CALL", null, ["callee:00c53da0:8"]]
- 009b21c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b21c4 ["INT_ADD", "register:40f0:8", ["const:9b21c4:8", "const:4:8"]]
- 009b21c4 ["CALLIND", null, ["register:0:8"]]
+ 009b2218 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2218 ["INT_ADD", "register:40f0:8", ["const:9b2218:8", "const:4:8"]]
+ 009b2218 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a7d45e2ecd87bce878147223a352b34d"></a>

### [`009b2210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2210.md) → [`009b2264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2264.md) FUN_009b2264

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md) [`009a9fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9fe0.md) [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b22f8",
      "incomplete_value": true,
      "site": "009b22fc",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b22f4",
      "incomplete_value": true,
      "site": "009b22fc",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b22f4",
      "incomplete_value": true,
      "site": "009b22fc",
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
                "const:50:8"
              ]
            ]
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
      "unmatched:009b22e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b23a8"
      ]
    ],
    [
      "009b2374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009b232c"
      ]
    ],
    [
      "unmatched:009b2328",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f80"
      ]
    ]
  ],
  "added": [
    [
      "009b233c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b23a8"
      ]
    ],
    [
      "009b2374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2380"
      ]
    ],
    [
      "009b237c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f80"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b22a8 ["INT_ADD", "register:40f0:8", ["const:9b22a8:8", "const:4:8"]]
- 009b22a8 ["CALL", null, ["callee:0043bb60:8"]]
+ 009b22fc ["INT_ADD", "register:40f0:8", ["const:9b22fc:8", "const:4:8"]]
+ 009b22fc ["CALL", null, ["callee:0043bb60:8"]]
- 009b2318 ["INT_ADD", "register:40f0:8", ["const:9b2318:8", "const:4:8"]]
- 009b2318 ["CALL", null, ["callee:009ae2c0:8"]]
+ 009b236c ["INT_ADD", "register:40f0:8", ["const:9b236c:8", "const:4:8"]]
+ 009b236c ["CALL", null, ["callee:009ae2c0:8"]]
- 009b2380 ["INT_ADD", "register:40f0:8", ["const:9b2380:8", "const:4:8"]]
- 009b2380 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b23d4 ["INT_ADD", "register:40f0:8", ["const:9b23d4:8", "const:4:8"]]
+ 009b23d4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6963bf9228f0415b4d11239ab9cd6b38"></a>

### [`009b23e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b23e0.md) → [`009b2434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2434.md) FUN_009b2434

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
      "unmatched:009b23f8",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b23fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2460"
      ]
    ]
  ],
  "added": [
    [
      "009b244c",
      "DATA",
      [
        "storage",
        "00c88c50",
        null,
        "undefined *"
      ]
    ],
    [
      "009b2450",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2460"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b23e0 ["COPY", "register:4040:8", ["register:4000:8"]]
- 009b23e4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 009b23e4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 009b23e8 ["COPY", "register:4050:8", ["const:c88000:8"]]
~~~


<a id="compare-ab7f1b533c375319ebd9cad4d193c7d6"></a>

### [`009b2424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2424.md) → [`009b2478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2478.md) FUN_009b2478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2490",
      "incomplete_value": false,
      "site": "009b249c",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b243c",
      "incomplete_value": false,
      "site": "009b2448",
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
            "const:b80:8"
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
      "unmatched:009b2428",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b249c",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b246c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b247c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b249c",
      "DATA",
      [
        "storage",
        "00c88c50",
        null,
        "undefined *"
      ]
    ],
    [
      "009b24c0",
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
- 009b2428 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b2428 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b243c ["COPY", "tmp:0:8", ["const:b80:8"]]
- 009b243c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b243c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b243c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2490 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 009b2490 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2490 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2490 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b2468 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009b2468 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 009b2468 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 009b2468 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-646bbdc3d7608f143af8953689cef9ca"></a>

### [`009b2480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2480.md) → [`009b24d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b24d4.md) FUN_009b24d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2500",
      "incomplete_value": false,
      "site": "009b2500",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b24ac",
      "incomplete_value": false,
      "site": "009b24ac",
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
            "const:b80:8"
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
      "009b2500",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b24c8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b2500",
      "DATA",
      [
        "storage",
        "00c88c50",
        null,
        "undefined *"
      ]
    ],
    [
      "009b251c",
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
- 009b2494 ["INT_ADD", "register:40f0:8", ["const:9b2494:8", "const:4:8"]]
- 009b2494 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b24e8 ["INT_ADD", "register:40f0:8", ["const:9b24e8:8", "const:4:8"]]
+ 009b24e8 ["CALL", null, ["callee:00c57f60:8"]]
- 009b24a4 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 009b24a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b24a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b24a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b24f8 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 009b24f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b24f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b24f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b24b0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b24b0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 009b2504 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b2504 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-48eb157e82e96553553e6ee20f895fc6"></a>

### [`009b2508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2508.md) → [`009b255c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b255c.md) FUN_009b255c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b2524",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2578",
      "DATA",
      [
        "storage",
        "00c88c50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b2520 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 009b2520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b2520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b2520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b2524 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 009b2524 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 009b2524 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 009b2524 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 009b2544 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b2544 ["INT_ADD", "register:40f0:8", ["const:9b2544:8", "const:4:8"]]
- 009b2544 ["CALLIND", null, ["register:0:8"]]
+ 009b2598 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b2598 ["INT_ADD", "register:40f0:8", ["const:9b2598:8", "const:4:8"]]
+ 009b2598 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cb50ff47fc28a395ac76303b0fc10720"></a>

### [`009b25b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b25b4.md) → [`009b2608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2608.md) FUN_009b2608

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b25f0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b2644",
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
- 009b25ec ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009b25ec ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 009b25ec ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 009b25ec ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
- 009b25f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b25f0 ["INT_ADD", "register:40f0:8", ["const:9b25f0:8", "const:4:8"]]
- 009b25f0 ["CALLIND", null, ["register:0:8"]]
+ 009b2640 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 009b2640 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 009b2640 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
+ 009b2640 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-76e898ea7daf99cc159f03b5bc0066d2"></a>

### [`009b2604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2604.md) → [`009b2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2658.md) FUN_009b2658

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b2634",
      "incomplete_value": true,
      "site": "009b263c",
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
            "const:4:8"
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
      "unmatched:009b2628",
      "WRITE",
      [
        "storage",
        "Stack[-0x2c]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b264c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b26c8"
      ]
    ]
  ],
  "added": [
    [
      "009b267c",
      "WRITE",
      [
        "storage",
        "Stack[-0x2c]",
        null,
        null
      ]
    ],
    [
      "009b26a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b26c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b263c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b263c ["INT_ADD", "register:40f0:8", ["const:9b263c:8", "const:4:8"]]
- 009b263c ["CALLIND", null, ["register:0:8"]]
+ 009b2690 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2690 ["INT_ADD", "register:40f0:8", ["const:9b2690:8", "const:4:8"]]
+ 009b2690 ["CALLIND", null, ["register:0:8"]]
- 009b2628 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 009b2628 ["INT_ADD", "tmp:1:8", ["register:8:8", "const:4:8"]]
- 009b2628 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 009b2648 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 009b2648 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 009b2648 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 009b2648 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-7bb911dade3b648c1ea25173414756fb"></a>

### [`009b26a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b26a4.md) → [`009b26f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b26f8.md) FUN_009b26f8

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
      "definition_site": "009b270c",
      "incomplete_value": false,
      "site": "009b2710",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b26b8",
      "incomplete_value": false,
      "site": "009b26bc",
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
            "const:c00:8"
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
      "009b2710",
      "DATA",
      [
        "storage",
        "00c88c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2710",
      "DATA",
      [
        "storage",
        "00c88cd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b26b0 ["INT_ADD", "register:40f0:8", ["const:9b26b0:8", "const:4:8"]]
- 009b26b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b2704 ["INT_ADD", "register:40f0:8", ["const:9b2704:8", "const:4:8"]]
+ 009b2704 ["CALL", null, ["callee:00c57f60:8"]]
- 009b26b8 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 009b26b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b26b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b26b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b270c ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 009b270c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b270c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b270c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3674b9177b50ceffaee9f6b32c7637a9"></a>

### [`009b26c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b26c8.md) → [`009b271c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b271c.md) FUN_009b271c

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
      "definition_site": "009b2720",
      "incomplete_value": false,
      "site": "009b2724",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b26cc",
      "incomplete_value": false,
      "site": "009b26d0",
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
      "009b2724",
      "DATA",
      [
        "storage",
        "00c88c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2724",
      "DATA",
      [
        "storage",
        "00c88cd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b26cc ["COPY", "tmp:0:8", ["const:c00:8"]]
- 009b26cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b26cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b26cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2720 ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 009b2720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc3e407777e84fd9ee02660798401e09"></a>

### [`009b2710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2710.md) → [`009b2764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2764.md) FUN_009b2764

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
      "unmatched:009b2728",
      "DATA",
      [
        "storage",
        "00c88c80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b272c",
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
      "009b277c",
      "DATA",
      [
        "storage",
        "00c88d50",
        null,
        "undefined *"
      ]
    ],
    [
      "009b2780",
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
- 009b271c ["INT_ADD", "register:40f0:8", ["const:9b271c:8", "const:4:8"]]
- 009b271c ["CALL", null, ["callee:00c57f60:8"]]
+ 009b2770 ["INT_ADD", "register:40f0:8", ["const:9b2770:8", "const:4:8"]]
+ 009b2770 ["CALL", null, ["callee:00c57f60:8"]]
- 009b2724 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 009b2724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b2724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b2724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b2728 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 009b2728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-03ebf14390742ac3b80b987b9f41c6ee"></a>

### [`009b2734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2734.md) → [`009b2788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2788.md) FUN_009b2788

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
      "unmatched:009b273c",
      "DATA",
      [
        "storage",
        "00c88c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2790",
      "DATA",
      [
        "storage",
        "00c88d50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b2734 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009b2738 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 009b2738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b2738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b2738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b273c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 009b273c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-1c95682650a34371f84dc3bac597424d"></a>

### [`009b274c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b274c.md) → [`009b27a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b27a0.md) FUN_009b27a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_target` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b27c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b2770",
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
      "unmatched:009b2764",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b27c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009b27b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b27c4",
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
- 009b2770 ["INT_ADD", "register:40f0:8", ["const:9b2770:8", "const:4:8"]]
- 009b2770 ["CALL", null, ["ram:47acf4:8"]]
+ 009b27c4 ["INT_ADD", "register:40f0:8", ["const:9b27c4:8", "const:4:8"]]
+ 009b27c4 ["CALL", null, ["ram:47ad34:8"]]
- 009b2764 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b2764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b277c ["INT_ADD", "register:40f0:8", ["const:9b277c:8", "const:4:8"]]
- 009b277c ["CALL", null, ["callee:0047ce14:8"]]
+ 009b27d0 ["INT_ADD", "register:40f0:8", ["const:9b27d0:8", "const:4:8"]]
+ 009b27d0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-ff64b1ea2e3681b9a7195a4e975ee144"></a>

### [`009b27c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b27c0.md) → [`009b2814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2814.md) FUN_009b2814

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
      "unmatched:009b27d8",
      "DATA",
      [
        "storage",
        "00c88d00",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b27dc",
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
      "009b282c",
      "DATA",
      [
        "storage",
        "00c88dd0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b2830",
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
- 009b27cc ["INT_ADD", "register:40f0:8", ["const:9b27cc:8", "const:4:8"]]
- 009b27cc ["CALL", null, ["callee:00c57f60:8"]]
+ 009b2820 ["INT_ADD", "register:40f0:8", ["const:9b2820:8", "const:4:8"]]
+ 009b2820 ["CALL", null, ["callee:00c57f60:8"]]
- 009b27d4 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 009b27d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b27d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b27d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b27d8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 009b27d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-1105af55d0e7cb1e1d79d7d6adf3f227"></a>

### [`009b27e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b27e4.md) → [`009b2838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2838.md) FUN_009b2838

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
      "definition_site": "009b283c",
      "incomplete_value": false,
      "site": "009b2840",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b27e8",
      "incomplete_value": false,
      "site": "009b27ec",
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
      "009b2840",
      "DATA",
      [
        "storage",
        "00c88d00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2840",
      "DATA",
      [
        "storage",
        "00c88dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b27e8 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 009b27e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b27e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b27e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b283c ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 009b283c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b283c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b283c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c84fdc5a21319763de4de2b6d652041"></a>

### [`009b27fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b27fc.md) → [`009b2850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2850.md) FUN_009b2850

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b27fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2800",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2810",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2894"
      ]
    ]
  ],
  "added": [
    [
      "009b2850",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b2854",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b2864",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2894"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b27fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b27fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b27fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009b27fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009b2800 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b2800 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b280c ["COPY", "tmp:0:4", ["const:2:4"]]
- 009b280c ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 009b280c ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 009b280c ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-5ae4074309b651379fc131561010680c"></a>

### [`009b2894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2894.md) → [`009b28e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b28e8.md) FUN_009b28e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 61.11% / 新版 61.11%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b2894",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2898",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b28bc",
      "DATA",
      [
        "storage",
        "00c88d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b28e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b28ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b2910",
      "DATA",
      [
        "storage",
        "00c88e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b2894 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b2894 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b2894 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009b2894 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009b2898 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009b2898 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009b2898 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b2898 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b289c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-801023c0693151c68c1dbdc044a172b4"></a>

### [`009b2924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2924.md) → [`009b2978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2978.md) FUN_009b2978

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2990",
      "incomplete_value": false,
      "site": "009b29a0",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b293c",
      "incomplete_value": false,
      "site": "009b294c",
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
            "const:d80:8"
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
      "009b29a0",
      "DATA",
      [
        "storage",
        "00c88d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b29a0",
      "DATA",
      [
        "storage",
        "00c88e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b293c ["COPY", "tmp:0:8", ["const:d80:8"]]
- 009b293c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b293c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b293c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2990 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 009b2990 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2990 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2990 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b2970 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2970 ["INT_ADD", "register:40f0:8", ["const:9b2970:8", "const:4:8"]]
- 009b2970 ["CALLIND", null, ["register:0:8"]]
+ 009b29c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b29c4 ["INT_ADD", "register:40f0:8", ["const:9b29c4:8", "const:4:8"]]
+ 009b29c4 ["CALLIND", null, ["register:0:8"]]
- 009b299c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b299c ["INT_ADD", "register:40f0:8", ["const:9b299c:8", "const:4:8"]]
- 009b299c ["CALLIND", null, ["register:0:8"]]
+ 009b29f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b29f0 ["INT_ADD", "register:40f0:8", ["const:9b29f0:8", "const:4:8"]]
+ 009b29f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-88f355cff9474165cd1f1e0b5e295382"></a>

### [`009b29b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b29b0.md) → [`009b2a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2a04.md) FUN_009b2a04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2a34",
      "incomplete_value": false,
      "site": "009b2a34",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b29e0",
      "incomplete_value": false,
      "site": "009b29e0",
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
            "const:d80:8"
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
      "009b2a34",
      "DATA",
      [
        "storage",
        "00c88d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2a34",
      "DATA",
      [
        "storage",
        "00c88e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b29c8 ["INT_ADD", "register:40f0:8", ["const:9b29c8:8", "const:4:8"]]
- 009b29c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b2a1c ["INT_ADD", "register:40f0:8", ["const:9b2a1c:8", "const:4:8"]]
+ 009b2a1c ["CALL", null, ["callee:00c57f60:8"]]
- 009b29d8 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 009b29d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b29d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b29d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2a2c ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 009b2a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b29fc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b29fc ["INT_ADD", "register:40f0:8", ["const:9b29fc:8", "const:4:8"]]
- 009b29fc ["CALLIND", null, ["register:0:8"]]
+ 009b2a50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2a50 ["INT_ADD", "register:40f0:8", ["const:9b2a50:8", "const:4:8"]]
+ 009b2a50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-63e8f8d327844347e9828c83b6245caa"></a>

### [`009b2ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2ab8.md) → [`009b2b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2b0c.md) FUN_009b2b0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b2b34",
      "incomplete_value": false,
      "site": "009b2b34",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b2ae0",
      "incomplete_value": false,
      "site": "009b2ae0",
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
            "const:d80:8"
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
      "009b2b34",
      "DATA",
      [
        "storage",
        "00c88d80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b2b34",
      "DATA",
      [
        "storage",
        "00c88e50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b2b34 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2b34 ["INT_ADD", "register:40f0:8", ["const:9b2b34:8", "const:4:8"]]
- 009b2b34 ["CALLIND", null, ["register:0:8"]]
+ 009b2b88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2b88 ["INT_ADD", "register:40f0:8", ["const:9b2b88:8", "const:4:8"]]
+ 009b2b88 ["CALLIND", null, ["register:0:8"]]
- 009b2ad8 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 009b2ad8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b2ad8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b2ad8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b2b2c ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 009b2b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b2b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b2adc ["COPY", "register:40a0:8", ["register:4008:8"]]
~~~


<a id="compare-7b0139e533224b055bb0c41143b7aba6"></a>

### [`009b2cc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2cc8.md) → [`009b2d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2d1c.md) FUN_009b2d1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b2ccc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2d50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2dcc"
      ]
    ]
  ],
  "added": [
    [
      "009b2d20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b2d34",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "009b2da4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b2dcc"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b2ccc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b2ccc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b2ccc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b2ccc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b2cdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:28:8"]]
- 009b2cdc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009b2ce0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 009b2ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0d994a8409c9ae80ca25399cd4fdd99d"></a>

### [`009b2da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2da4.md) → [`009b2df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2df8.md) _INIT_196

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b2f0c",
      "incomplete_value": true,
      "site": "009b2f18",
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b2f1c",
      "incomplete_value": true,
      "site": "009b2f2c",
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
      "definition_site": "009b2f34",
      "incomplete_value": true,
      "site": "009b2f40",
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
            "const:60:8"
          ]
        ]
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
      "unmatched:009b2dd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b2de0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009b2dfc",
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
      "009b2e28",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "009b2e34",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009b2e50",
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
- 009b2f18 ["INT_ADD", "register:40f0:8", ["const:9b2f18:8", "const:4:8"]]
- 009b2f18 ["CALL", null, ["callee:0043b838:8"]]
+ 009b2f6c ["INT_ADD", "register:40f0:8", ["const:9b2f6c:8", "const:4:8"]]
+ 009b2f6c ["CALL", null, ["callee:0043b838:8"]]
- 009b2f2c ["INT_ADD", "register:40f0:8", ["const:9b2f2c:8", "const:4:8"]]
- 009b2f2c ["CALL", null, ["callee:0043b838:8"]]
+ 009b2f80 ["INT_ADD", "register:40f0:8", ["const:9b2f80:8", "const:4:8"]]
+ 009b2f80 ["CALL", null, ["callee:0043b838:8"]]
- 009b2f40 ["INT_ADD", "register:40f0:8", ["const:9b2f40:8", "const:4:8"]]
- 009b2f40 ["CALL", null, ["callee:0043b838:8"]]
+ 009b2f94 ["INT_ADD", "register:40f0:8", ["const:9b2f94:8", "const:4:8"]]
+ 009b2f94 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-562b52553fd51efb18ebd7428bd07d5c"></a>

### [`009b3134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3134.md) → [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) FUN_009b3188

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005a8e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a8/005a8e28.md) · 呼出先 6件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`005a9f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9f54.md) [`009b3798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3798.md) [`009b5d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d84.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`005a8e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8e68.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`009b37ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b37ec.md) [`009b5dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dd8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.21% / 新版 90.21%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009b32f4",
      "incomplete_value": true,
      "site": "009b3304",
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
                "const:7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b32a0",
      "incomplete_value": true,
      "site": "009b32b0",
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
                "const:d2:8"
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
      "definition_site": "009b3308",
      "incomplete_value": true,
      "site": "009b3308",
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
                "const:7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b32b4",
      "incomplete_value": true,
      "site": "009b32b4",
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
                "const:7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b3558",
      "incomplete_value": true,
      "site": "009b355c",
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
                "const:a8:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "unmatched:009b3148",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b314c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b3158",
      "WRITE",
      [
        "storage",
        "Stack[-0x138]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009b319c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b31a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b31ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x138]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009b325c ["INT_ADD", "register:40f0:8", ["const:9b325c:8", "const:4:8"]]
- 009b325c ["CALL", null, ["callee:004410cc:8"]]
+ 009b32b0 ["INT_ADD", "register:40f0:8", ["const:9b32b0:8", "const:4:8"]]
+ 009b32b0 ["CALL", null, ["callee:004410cc:8"]]
- 009b3308 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 009b3308 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009b3308 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009b3308 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 009b335c ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 009b335c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009b335c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009b335c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 009b355c ["INT_ADD", "register:40f0:8", ["const:9b355c:8", "const:4:8"]]
- 009b355c ["CALL", null, ["callee:00c57f80:8"]]
+ 009b35b0 ["INT_ADD", "register:40f0:8", ["const:9b35b0:8", "const:4:8"]]
+ 009b35b0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-263e20ec0650112ef641a5aff2d54190"></a>

### [`009b3798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3798.md) → [`009b37ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b37ec.md) FUN_009b37ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`005aa7ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa7ac.md) [`005ab914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ab/005ab914.md) [`009b3134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3134.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`005aa7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa7ec.md) [`005ab954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ab/005ab954.md) [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b3a10",
      "incomplete_value": true,
      "site": "009b3a14",
      "value": [
        "INT_LEFT",
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
      "unmatched:009b37bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b37c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b37ec",
      "READ",
      [
        "storage",
        "002ba02f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009b3810",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "009b3818",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009b3840",
      "READ",
      [
        "storage",
        "002b9fdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b39c0 ["INT_ADD", "register:40f0:8", ["const:9b39c0:8", "const:4:8"]]
- 009b39c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b3a14 ["INT_ADD", "register:40f0:8", ["const:9b3a14:8", "const:4:8"]]
+ 009b3a14 ["CALL", null, ["callee:00c57f60:8"]]
- 009b37bc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 009b37bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 009b37c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 009b37c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b61bd1711420f5b7f552179f29ef89bf"></a>

### [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) → [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) FUN_009b3bbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`009ae130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae130.md) [`009ae988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae988.md) [`009b46a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b46a0.md) · 呼出先 10件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009a9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9768.md) [`009a9778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9778.md) [`009b4164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4164.md)
- 新版 呼出元 3件 [`009ae184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae184.md) [`009ae9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae9dc.md) [`009b46f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b46f4.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009a97cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97cc.md) [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b3d44",
      "incomplete_value": false,
      "site": "009b3d50",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b3cf0",
      "incomplete_value": false,
      "site": "009b3cfc",
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
            "const:e10:8"
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
    "new": null,
    "old": {
      "definition_site": "009b3e00",
      "incomplete_value": true,
      "site": "009b3e04",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "009b3e18",
      "incomplete_value": true,
      "site": "009b3e24",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b8:4"
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
      "009b3dd8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009b3cb0"
      ]
    ],
    [
      "009b3d50",
      "DATA",
      [
        "storage",
        "00c88e10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b3d84",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009b3df4"
      ]
    ]
  ],
  "added": [
    [
      "009b3c7c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009b3cb0"
      ]
    ],
    [
      "009b3d50",
      "DATA",
      [
        "storage",
        "00c88ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b3dd8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009b3df4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b3dd0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b3dd0 ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 009b3e24 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b3e24 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
- 009b3e04 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b3e04 ["INT_ADD", "register:40f0:8", ["const:9b3e04:8", "const:4:8"]]
- 009b3e04 ["CALLIND", null, ["register:0:8"]]
+ 009b3e58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b3e58 ["INT_ADD", "register:40f0:8", ["const:9b3e58:8", "const:4:8"]]
+ 009b3e58 ["CALLIND", null, ["register:0:8"]]
+ 009b3e04 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009b3e04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b3e04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b3e04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b3b95c955c5c9cf3ec441a38f9060b3"></a>

### [`009b4164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4164.md) → [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) FUN_009b41b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00745fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745fb4.md) [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005abff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ab/005abff0.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md)
- 新版 呼出元 2件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005ac030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac030.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 92.28% / 新版 92.28%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `store_value` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b4288",
      "incomplete_value": false,
      "site": "009b428c",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "009b4234",
      "incomplete_value": false,
      "site": "009b4238",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b4318",
      "incomplete_value": false,
      "site": "009b4318",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b42c4",
      "incomplete_value": false,
      "site": "009b42c4",
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
            "const:390:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b4428",
      "incomplete_value": false,
      "site": "009b4428",
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
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b43d4",
      "incomplete_value": false,
      "site": "009b43d4",
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
            "const:410:8"
          ]
        ]
      ]
    },
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
      "unmatched:009b4214",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b42b4"
      ]
    ],
    [
      "009b428c",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "009b4318",
      "DATA",
      [
        "storage",
        "00c89390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b4268",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b42b4"
      ]
    ],
    [
      "009b428c",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b4318",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b41e4 ["INT_ADD", "register:40f0:8", ["const:9b41e4:8", "const:4:8"]]
- 009b41e4 ["CALL", null, ["callee:005ac030:8"]]
+ 009b4238 ["INT_ADD", "register:40f0:8", ["const:9b4238:8", "const:4:8"]]
+ 009b4238 ["CALL", null, ["callee:005ac030:8"]]
- 009b41f8 ["INT_ADD", "register:40f0:8", ["const:9b41f8:8", "const:4:8"]]
- 009b41f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b424c ["INT_ADD", "register:40f0:8", ["const:9b424c:8", "const:4:8"]]
+ 009b424c ["CALL", null, ["callee:00c57f80:8"]]
- 009b4208 ["INT_ADD", "register:40f0:8", ["const:9b4208:8", "const:4:8"]]
- 009b4208 ["CALL", null, ["callee:009b7e38:8"]]
+ 009b425c ["INT_ADD", "register:40f0:8", ["const:9b425c:8", "const:4:8"]]
+ 009b425c ["CALL", null, ["callee:009b7e38:8"]]
~~~


<a id="compare-ee4b09bb68f0b9b490f8969e0700fe18"></a>

### [`009b46a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b46a0.md) → [`009b46f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b46f4.md) FUN_009b46f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009ad87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad87c.md) · 呼出先 15件 [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009a9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9768.md) [`009a9770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9770.md) [`009aad18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aad18.md) [`009aada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aada0.md)
- 新版 呼出元 1件 [`009ad8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad8d0.md) · 呼出先 15件 [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009a97c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97c4.md) [`009aad6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aad6c.md) [`009aadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aadf4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.47% / 新版 84.47%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b4744",
      "incomplete_value": true,
      "site": "009b4748",
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
            "register:4098:8"
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
      "definition_site": "009b4768",
      "incomplete_value": true,
      "site": "009b476c",
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
      "definition_site": "009b474c",
      "incomplete_value": true,
      "site": "009b476c",
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
      "unmatched:009b4708",
      "DATA",
      [
        "storage",
        "00c88f10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b4708",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b4724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b4854"
      ]
    ]
  ],
  "added": [
    [
      "009b475c",
      "DATA",
      [
        "storage",
        "00c88fe0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b475c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "009b4778",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b4854"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b46f4 ["INT_ADD", "register:40f0:8", ["const:9b46f4:8", "const:4:8"]]
- 009b46f4 ["CALL", null, ["callee:009aad6c:8"]]
+ 009b4748 ["INT_ADD", "register:40f0:8", ["const:9b4748:8", "const:4:8"]]
+ 009b4748 ["CALL", null, ["callee:009aad6c:8"]]
- 009b4718 ["INT_ADD", "register:40f0:8", ["const:9b4718:8", "const:4:8"]]
- 009b4718 ["CALL", null, ["callee:009b3bbc:8"]]
+ 009b476c ["INT_ADD", "register:40f0:8", ["const:9b476c:8", "const:4:8"]]
+ 009b476c ["CALL", null, ["callee:009b3bbc:8"]]
- 009b476c ["COPY", "register:4040:8", ["const:c89000:8"]]
~~~


<a id="compare-268552d34e6d47b52ea3b8134dc9b971"></a>

### [`009b4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4900.md) → [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) FUN_009b4954

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00745a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745a24.md) [`007466b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/007466b4.md) [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) [`009b46a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b46a0.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005aae88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aae88.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md)
- 新版 呼出元 4件 [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) [`0074670c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074670c.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) [`009b46f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b46f4.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005aaec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aaec8.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.74% / 新版 91.74%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b4bb8",
      "incomplete_value": false,
      "site": "009b4bb8",
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
            "const:3e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b4b64",
      "incomplete_value": false,
      "site": "009b4b64",
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
            "const:310:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b4a04",
      "incomplete_value": true,
      "site": "009b4a08",
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
                "const:50:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b4a34",
      "incomplete_value": true,
      "site": "009b4a38",
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
                "const:18:8"
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
      "unmatched:009b49a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b4a44"
      ]
    ],
    [
      "009b4a1c",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "009b4a68",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009b4a34"
      ]
    ]
  ],
  "added": [
    [
      "009b49f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b4a44"
      ]
    ],
    [
      "009b4a1c",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b4a68",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009b4a88"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b4998 ["INT_ADD", "register:40f0:8", ["const:9b4998:8", "const:4:8"]]
- 009b4998 ["CALL", null, ["callee:009b7794:8"]]
+ 009b49ec ["INT_ADD", "register:40f0:8", ["const:9b49ec:8", "const:4:8"]]
+ 009b49ec ["CALL", null, ["callee:009b7794:8"]]
- 009b49b4 ["INT_ADD", "register:40f0:8", ["const:9b49b4:8", "const:4:8"]]
- 009b49b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b4a08 ["INT_ADD", "register:40f0:8", ["const:9b4a08:8", "const:4:8"]]
+ 009b4a08 ["CALL", null, ["callee:00c57f80:8"]]
- 009b49e4 ["INT_ADD", "register:40f0:8", ["const:9b49e4:8", "const:4:8"]]
- 009b49e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b4a38 ["INT_ADD", "register:40f0:8", ["const:9b4a38:8", "const:4:8"]]
+ 009b4a38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6945fb51cb6ddb8c6dfbab19643da145"></a>

### [`009b4e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4e2c.md) → [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) FUN_009b4e80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) · 呼出先 10件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009a9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9768.md) [`009aa61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa61c.md) [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md)
- 新版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009aa670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa670.md) [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.64% / 新版 87.64%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b4f70",
      "incomplete_value": false,
      "site": "009b4f74",
      "value": [
        "leaf",
        "const:50:8"
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b5224",
      "incomplete_value": true,
      "site": "009b5228",
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
    "old": null,
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009b4f30"
      ],
      [
        "CONDITIONAL_JUMP",
        "009b4f84"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b4f80",
      "incomplete_value": true,
      "site": "009b4fa4",
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
      "site": "009b4f50",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:009b4e30",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b4e34",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b4e38",
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
      "009b4e84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009b4e88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009b4e8c",
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
- 009b4f74 ["INT_ADD", "register:40f0:8", ["const:9b4f74:8", "const:4:8"]]
- 009b4f74 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b4fc8 ["INT_ADD", "register:40f0:8", ["const:9b4fc8:8", "const:4:8"]]
+ 009b4fc8 ["CALL", null, ["callee:00c57f60:8"]]
- 009b51d4 ["INT_ADD", "register:40f0:8", ["const:9b51d4:8", "const:4:8"]]
- 009b51d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b5228 ["INT_ADD", "register:40f0:8", ["const:9b5228:8", "const:4:8"]]
+ 009b5228 ["CALL", null, ["callee:00c57f80:8"]]
- 009b5228 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 009b5228 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 009b5228 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 009b5228 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-25f5779dd359861664058bcfb3bd1944"></a>

### [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md) → [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) FUN_009b5410

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00746cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00746/00746cec.md) [`009b4e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4e2c.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a9760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9760.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md)
- 新版 呼出元 2件 [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a97a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a97a0.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.78% / 新版 86.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b54d4",
      "incomplete_value": false,
      "site": "009b54d8",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "009b5480",
      "incomplete_value": false,
      "site": "009b5484",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b5564",
      "incomplete_value": false,
      "site": "009b5564",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b5510",
      "incomplete_value": false,
      "site": "009b5510",
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
            "const:190:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b546c",
      "incomplete_value": true,
      "site": "009b5470",
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
                "const:50:8"
              ]
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
      "009b54d8",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b54bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b5528"
      ]
    ],
    [
      "009b5564",
      "DATA",
      [
        "storage",
        "00c89190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b54d8",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b5510",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b5528"
      ]
    ],
    [
      "009b5564",
      "DATA",
      [
        "storage",
        "00c89260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b5430 ["INT_ADD", "register:40f0:8", ["const:9b5430:8", "const:4:8"]]
- 009b5430 ["CALL", null, ["callee:005a97a0:8"]]
+ 009b5484 ["INT_ADD", "register:40f0:8", ["const:9b5484:8", "const:4:8"]]
+ 009b5484 ["CALL", null, ["callee:005a97a0:8"]]
- 009b5470 ["INT_ADD", "register:40f0:8", ["const:9b5470:8", "const:4:8"]]
- 009b5470 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b54c4 ["INT_ADD", "register:40f0:8", ["const:9b54c4:8", "const:4:8"]]
+ 009b54c4 ["CALL", null, ["callee:00c57f80:8"]]
- 009b5488 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 009b5488 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009b5488 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009b5488 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 009b54dc ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 009b54dc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009b54dc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009b54dc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-f9873f054e4d09b60a7635629cc89438"></a>

### [`009b58e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b58e8.md) → [`009b593c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b593c.md) FUN_009b593c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`009ac2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac2b8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.39% / 新版 89.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009b5948",
      "incomplete_value": true,
      "site": "009b5950",
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
      "definition_site": "009b5948",
      "incomplete_value": true,
      "site": "009b5950",
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
                "const:20:8"
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
      "unmatched:009b58e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b58ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b58f0",
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
      "009b593c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009b5940",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b5944",
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
- 009b5950 ["INT_ADD", "register:40f0:8", ["const:9b5950:8", "const:4:8"]]
- 009b5950 ["CALL", null, ["callee:0043bb60:8"]]
+ 009b59a4 ["INT_ADD", "register:40f0:8", ["const:9b59a4:8", "const:4:8"]]
+ 009b59a4 ["CALL", null, ["callee:0043bb60:8"]]
- 009b58e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b58e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b58e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 009b58e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009b58ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b58ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-f7ab75d90370586041753a2c9f460d6d"></a>

### [`009b5a1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5a1c.md) → [`009b5a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5a70.md) FUN_009b5a70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b5a54",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b5aa8",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b5a40 ["INT_ADD", "register:40f0:8", ["const:9b5a40:8", "const:4:8"]]
- 009b5a40 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b5a94 ["INT_ADD", "register:40f0:8", ["const:9b5a94:8", "const:4:8"]]
+ 009b5a94 ["CALL", null, ["callee:00c57f80:8"]]
- 009b5a48 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 009b5a48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b5a48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b5a48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b5a4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:20:8"]]
- 009b5a4c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 009b5a4c ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
~~~


<a id="compare-8eedb6f47387a4b5ade0a261a28e187d"></a>

### [`009b5a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5a90.md) → [`009b5ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ae4.md) FUN_009b5ae4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b5b18",
      "incomplete_value": false,
      "site": "009b5b1c",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "009b5ac4",
      "incomplete_value": false,
      "site": "009b5ac8",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b5b24",
      "incomplete_value": true,
      "site": "009b5b28",
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
                "const:30:8"
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
      "009b5b1c",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b5b1c",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b5ad4 ["INT_ADD", "register:40f0:8", ["const:9b5ad4:8", "const:4:8"]]
- 009b5ad4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b5b28 ["INT_ADD", "register:40f0:8", ["const:9b5b28:8", "const:4:8"]]
+ 009b5b28 ["CALL", null, ["callee:00c57f80:8"]]
- 009b5aa4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009b5aa4 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 009b5af8 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009b5af8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 009b5ab4 ["INT_ADD", "register:40f0:8", ["const:9b5ab4:8", "const:4:8"]]
- 009b5ab4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b5b08 ["INT_ADD", "register:40f0:8", ["const:9b5b08:8", "const:4:8"]]
+ 009b5b08 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-52e572ec83519e94358d629881b7b985"></a>

### [`009b5b04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5b04.md) → [`009b5b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5b58.md) FUN_009b5b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009b5b90",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b5b48",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f80"
      ]
    ]
  ],
  "added": [
    [
      "009b5b90",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b5bac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f80"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b5b18 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009b5b18 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 009b5b6c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009b5b6c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 009b5b20 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 009b5b20 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009b5b20 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009b5b20 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 009b5b74 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 009b5b74 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009b5b74 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009b5b74 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 009b5b28 ["INT_ADD", "register:40f0:8", ["const:9b5b28:8", "const:4:8"]]
- 009b5b28 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b5b7c ["INT_ADD", "register:40f0:8", ["const:9b5b7c:8", "const:4:8"]]
+ 009b5b7c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1d5cbad9e582814278bc5fcd9ea79383"></a>

### [`009b5b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5b78.md) → [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) FUN_009b5bcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009ac928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac928.md) · 呼出先 2件 [`009a9364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9364.md) [`009a95b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a95b4.md)
- 新版 呼出元 1件 [`009ac97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac97c.md) · 呼出先 2件 [`009a93b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a93b8.md) [`009a9608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9608.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b5b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b5b7c",
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
      "009b5bcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b5bd0",
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
- 009b5b78 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b5b78 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b5b78 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009b5b78 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009b5b7c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009b5b7c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009b5b7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b5b7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b5b80 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-591c8d4bfb2b26b2dd73d86634fe050f"></a>

### [`009b5bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5bb8.md) → [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) FUN_009b5c0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`009aca74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009aca74.md) · 呼出先 4件 [`009a9300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9300.md) [`009a9444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9444.md) [`009a95c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a95c4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009acac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acac8.md) · 呼出先 4件 [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) [`009a9498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9498.md) [`009a9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9618.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b5bbc",
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
      "009b5c10",
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
- 009b5bbc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b5bbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 009b5be0 ["INT_ADD", "register:40f0:8", ["const:9b5be0:8", "const:4:8"]]
- 009b5be0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b5c34 ["INT_ADD", "register:40f0:8", ["const:9b5c34:8", "const:4:8"]]
+ 009b5c34 ["CALL", null, ["callee:00c57f60:8"]]
- 009b5c00 ["INT_ADD", "register:40f0:8", ["const:9b5c00:8", "const:4:8"]]
- 009b5c00 ["CALL", null, ["callee:009a9354:8"]]
+ 009b5c54 ["INT_ADD", "register:40f0:8", ["const:9b5c54:8", "const:4:8"]]
+ 009b5c54 ["CALL", null, ["callee:009a9354:8"]]
~~~


<a id="compare-8f887c1e05502a5f86e9060af4c4683b"></a>

### [`009b5d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d84.md) → [`009b5dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dd8.md) FUN_009b5dd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b3134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3134.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`005a9ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9ee4.md) [`005a9f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9f54.md) [`005aa184`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa184.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f24.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b5fe0",
      "incomplete_value": true,
      "site": "009b5fe4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:009b5f58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b6020"
      ]
    ]
  ],
  "added": [
    [
      "009b5fac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b6020"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b5f90 ["INT_ADD", "register:40f0:8", ["const:9b5f90:8", "const:4:8"]]
- 009b5f90 ["CALL", null, ["callee:005a9f24:8"]]
+ 009b5fe4 ["INT_ADD", "register:40f0:8", ["const:9b5fe4:8", "const:4:8"]]
+ 009b5fe4 ["CALL", null, ["callee:005a9f24:8"]]
- 009b5dd8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009b5dd8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 009b5dd8 ["CBRANCH", null, ["local:b16:8", "tmp:1:1"]]
+ 009b5e2c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009b5e2c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 009b5e2c ["CBRANCH", null, ["local:b17:8", "tmp:1:1"]]
- 009b5e28 ["INT_ADD", "register:40f0:8", ["const:9b5e28:8", "const:4:8"]]
- 009b5e28 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b5e7c ["INT_ADD", "register:40f0:8", ["const:9b5e7c:8", "const:4:8"]]
+ 009b5e7c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-41e59f14cb66a8c9b1b5e540234f8f3b"></a>

### [`009b5fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5fd0.md) → [`009b6024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6024.md) FUN_009b6024

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005aa184`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa184.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 009b5ff8 ["INT_ADD", "register:40f0:8", ["const:9b5ff8:8", "const:4:8"]]
- 009b5ff8 ["CALL", null, ["callee:005aa1c4:8"]]
+ 009b604c ["INT_ADD", "register:40f0:8", ["const:9b604c:8", "const:4:8"]]
+ 009b604c ["CALL", null, ["callee:005aa1c4:8"]]
- 009b6024 ["COPY", "register:0:8", ["register:40f0:8"]]
- 009b6024 ["RETURN", null, ["register:0:8"]]
+ 009b6078 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 009b6078 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-013607034378a1ee461dd0bf7f4e9128"></a>

### [`009b6028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6028.md) → [`009b607c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b607c.md) FUN_009b607c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6088",
      "incomplete_value": false,
      "site": "009b6094",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6034",
      "incomplete_value": false,
      "site": "009b6040",
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
            "const:e10:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009b6090",
      "incomplete_value": true,
      "site": "009b6098",
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
      "definition_site": "009b603c",
      "incomplete_value": true,
      "site": "009b6044",
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
      "009b6094",
      "DATA",
      [
        "storage",
        "00c88e10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6094",
      "DATA",
      [
        "storage",
        "00c88ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b602c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:40:8"]]
- 009b602c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 009b6034 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 009b6034 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b6034 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b6034 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b6088 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 009b6088 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6088 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6088 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b6080 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:40:8"]]
+ 009b6080 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-28d81578db44fbff5a522623f541efc8"></a>

### [`009b606c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b606c.md) → [`009b60c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b60c0.md) FUN_009b60c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b60d8",
      "incomplete_value": false,
      "site": "009b60e4",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6084",
      "incomplete_value": false,
      "site": "009b6090",
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
            "const:e10:8"
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
      "unmatched:009b6070",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b60e4",
      "DATA",
      [
        "storage",
        "00c88e10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b60c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b60e4",
      "DATA",
      [
        "storage",
        "00c88ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6070 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b6070 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b6084 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 009b6084 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6084 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6084 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b60d8 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 009b60d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b60d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b60d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b60b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b60b4 ["INT_ADD", "register:40f0:8", ["const:9b60b4:8", "const:4:8"]]
- 009b60b4 ["CALLIND", null, ["register:0:8"]]
+ 009b6108 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6108 ["INT_ADD", "register:40f0:8", ["const:9b6108:8", "const:4:8"]]
+ 009b6108 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-92e88cd723f838efa13fdd7ce05eb545"></a>

### [`009b60c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b60c8.md) → [`009b611c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b611c.md) FUN_009b611c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.85% / 新版 84.85%

優先判定に残った影響 `store_value` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6138",
      "incomplete_value": false,
      "site": "009b6148",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b60e4",
      "incomplete_value": false,
      "site": "009b60f4",
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
            "const:e10:8"
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
      "unmatched:009b60cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b6148",
      "DATA",
      [
        "storage",
        "00c88e10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6120",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b6148",
      "DATA",
      [
        "storage",
        "00c88ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6148 ["COPY", "register:0:8", ["register:40f0:8"]]
- 009b6148 ["RETURN", null, ["register:0:8"]]
- 009b60cc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009b60cc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009b60cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b60cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b60dc ["INT_ADD", "register:40f0:8", ["const:9b60dc:8", "const:4:8"]]
- 009b60dc ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6130 ["INT_ADD", "register:40f0:8", ["const:9b6130:8", "const:4:8"]]
+ 009b6130 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-1421e491f930cdb8b86133ca6cd427b2"></a>

### [`009b6160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6160.md) → [`009b61b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b61b4.md) FUN_009b61b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 58.82% / 新版 58.82%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b6178",
      "DATA",
      [
        "storage",
        "00c88e10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b61dc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b61e0",
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
      "009b61cc",
      "DATA",
      [
        "storage",
        "00c88ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b6230",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b6234",
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
- 009b6170 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 009b6170 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6170 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6170 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6174 ["COPY", "register:4098:8", ["register:4008:8"]]
- 009b6178 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 009b6178 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a0e91c2844646f15fa0c64cbccbf3cd4"></a>

### [`009b6220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6220.md) → [`009b6274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6274.md) FUN_009b6274

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b623c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b62a0"
      ]
    ]
  ],
  "added": [
    [
      "009b6290",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b62a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b623c ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 009b6240 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b6240 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009b6294 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b6294 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 009b6248 ["BRANCH", null, ["local:b5:8"]]
+ 009b629c ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-628ec08562eba8d41d15d94af76d8337"></a>

### [`009b6270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6270.md) → [`009b62c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b62c4.md) FUN_009b62c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md) [`009a9fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9fe0.md) [`009aa064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa064.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`009aa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.58% / 新版 80.58%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b631c",
      "incomplete_value": true,
      "site": "009b6324",
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
            "register:40b0:8"
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
      "definition_site": "009b6320",
      "incomplete_value": true,
      "site": "009b6324",
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
    "new": null,
    "old": {
      "definition_site": "009b635c",
      "incomplete_value": true,
      "site": "009b6364",
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
      "unmatched:009b6274",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b6278",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b627c",
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
      "009b62c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009b62cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009b62d0",
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
- 009b62d0 ["INT_ADD", "register:40f0:8", ["const:9b62d0:8", "const:4:8"]]
- 009b62d0 ["CALL", null, ["callee:009aa0b8:8"]]
+ 009b6324 ["INT_ADD", "register:40f0:8", ["const:9b6324:8", "const:4:8"]]
+ 009b6324 ["CALL", null, ["callee:009aa0b8:8"]]
- 009b6324 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009b6324 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4048:8"]]
- 009b6324 ["INT_SBORROW", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b6324 ["INT_SUB", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b6364 ["INT_ADD", "register:40f0:8", ["const:9b6364:8", "const:4:8"]]
- 009b6364 ["CALL", null, ["callee:009aa034:8"]]
+ 009b63b8 ["INT_ADD", "register:40f0:8", ["const:9b63b8:8", "const:4:8"]]
+ 009b63b8 ["CALL", null, ["callee:009aa034:8"]]
~~~


<a id="compare-e3c3caff6dc40b8709f7d1f6f8469f13"></a>

### [`009b647c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b647c.md) → [`009b64d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b64d0.md) FUN_009b64d0

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
      "definition_site": "009b64dc",
      "incomplete_value": false,
      "site": "009b64e8",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6488",
      "incomplete_value": false,
      "site": "009b6494",
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
      "009b64e8",
      "DATA",
      [
        "storage",
        "00c88e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b64e8",
      "DATA",
      [
        "storage",
        "00c88f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6488 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 009b6488 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b6488 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b6488 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b64dc ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009b64dc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b64dc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b64dc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-1259badda4adc658900f0dc98756db2a"></a>

### [`009b64c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b64c0.md) → [`009b6514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6514.md) FUN_009b6514

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_value, constant, local_def_use, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `branch_value` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009b6538",
      "incomplete_value": true,
      "site": "009b6538",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "009b64e4",
      "incomplete_value": true,
      "site": "009b64e4",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b652c",
      "incomplete_value": false,
      "site": "009b6538",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b64d8",
      "incomplete_value": false,
      "site": "009b64e4",
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
            "const:e90:8"
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
      "definition_site": "009b6534",
      "incomplete_value": true,
      "site": "009b653c",
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
      "definition_site": "009b64e0",
      "incomplete_value": true,
      "site": "009b64e8",
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
      "009b6538",
      "DATA",
      [
        "storage",
        "00c88e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6538",
      "DATA",
      [
        "storage",
        "00c88f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b64d8 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 009b64d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b64d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b64d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b652c ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009b652c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b652c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b652c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6508 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6508 ["INT_ADD", "register:40f0:8", ["const:9b6508:8", "const:4:8"]]
- 009b6508 ["CALLIND", null, ["register:0:8"]]
+ 009b655c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b655c ["INT_ADD", "register:40f0:8", ["const:9b655c:8", "const:4:8"]]
+ 009b655c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f36383eb3d1c05f7de5999ef7843d549"></a>

### [`009b651c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b651c.md) → [`009b6570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6570.md) FUN_009b6570

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b658c",
      "incomplete_value": false,
      "site": "009b659c",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6538",
      "incomplete_value": false,
      "site": "009b6548",
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
            "const:e90:8"
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
      "009b659c",
      "DATA",
      [
        "storage",
        "00c88e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b659c",
      "DATA",
      [
        "storage",
        "00c88f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6530 ["INT_ADD", "register:40f0:8", ["const:9b6530:8", "const:4:8"]]
- 009b6530 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6584 ["INT_ADD", "register:40f0:8", ["const:9b6584:8", "const:4:8"]]
+ 009b6584 ["CALL", null, ["callee:00c57f60:8"]]
- 009b6538 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 009b6538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b658c ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009b658c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b658c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b658c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6570 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6570 ["INT_ADD", "register:40f0:8", ["const:9b6570:8", "const:4:8"]]
- 009b6570 ["CALLIND", null, ["register:0:8"]]
+ 009b65c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b65c4 ["INT_ADD", "register:40f0:8", ["const:9b65c4:8", "const:4:8"]]
+ 009b65c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6dc7e1e7d5cb7bc3076db808bcc1c515"></a>

### [`009b65b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b65b4.md) → [`009b6608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6608.md) FUN_009b6608

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6618",
      "incomplete_value": false,
      "site": "009b6620",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b65c4",
      "incomplete_value": false,
      "site": "009b65cc",
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
            "const:e90:8"
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
      "009b6620",
      "DATA",
      [
        "storage",
        "00c88e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6620",
      "DATA",
      [
        "storage",
        "00c88f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6620 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:40:8"]]
- 009b6620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:8"]]
- 009b65c4 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 009b65c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b65c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b65c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6618 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009b6618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6600 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b6600 ["INT_ADD", "register:40f0:8", ["const:9b6600:8", "const:4:8"]]
- 009b6600 ["CALLIND", null, ["register:0:8"]]
+ 009b6654 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b6654 ["INT_ADD", "register:40f0:8", ["const:9b6654:8", "const:4:8"]]
+ 009b6654 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-60eae9350e70efa1eb0a893e5b40fd96"></a>

### [`009b6674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6674.md) → [`009b66c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b66c8.md) FUN_009b66c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b66b0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b6704",
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
- 009b6694 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b6694 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009b66e8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b66e8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 009b66ac ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009b66ac ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 009b66ac ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 009b66ac ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
- 009b66b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b66b0 ["INT_ADD", "register:40f0:8", ["const:9b66b0:8", "const:4:8"]]
- 009b66b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cb5ad258588a70710cd64a86ccf9b202"></a>

### [`009b678c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b678c.md) → [`009b67e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b67e0.md) FUN_009b67e0

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
      "definition_site": "009b67f4",
      "incomplete_value": false,
      "site": "009b67f8",
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
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b67a0",
      "incomplete_value": false,
      "site": "009b67a4",
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
            "const:f10:8"
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
      "009b67f8",
      "DATA",
      [
        "storage",
        "00c88f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b67f8",
      "DATA",
      [
        "storage",
        "00c88fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6798 ["INT_ADD", "register:40f0:8", ["const:9b6798:8", "const:4:8"]]
- 009b6798 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b67ec ["INT_ADD", "register:40f0:8", ["const:9b67ec:8", "const:4:8"]]
+ 009b67ec ["CALL", null, ["callee:00c57f60:8"]]
- 009b67a0 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 009b67a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b67a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b67a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b67f4 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 009b67f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b67f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b67f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff0ff35f9bd547b58ffc43bf3059d598"></a>

### [`009b67b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b67b0.md) → [`009b6804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6804.md) FUN_009b6804

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
      "definition_site": "009b6808",
      "incomplete_value": false,
      "site": "009b680c",
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
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b67b4",
      "incomplete_value": false,
      "site": "009b67b8",
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
            "const:f10:8"
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
      "009b680c",
      "DATA",
      [
        "storage",
        "00c88f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b680c",
      "DATA",
      [
        "storage",
        "00c88fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b67b4 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 009b67b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b67b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b67b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6808 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 009b6808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7222773f28a320a094f140ec678d8f8b"></a>

### [`009b67f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b67f8.md) → [`009b684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b684c.md) FUN_009b684c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6870",
      "incomplete_value": false,
      "site": "009b6870",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b681c",
      "incomplete_value": false,
      "site": "009b681c",
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
            "const:f90:8"
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
      "definition_site": "009b6808",
      "incomplete_value": false,
      "site": "009b680c",
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
      "009b6870",
      "DATA",
      [
        "storage",
        "00c88f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6870",
      "DATA",
      [
        "storage",
        "00c89060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b680c ["INT_ADD", "register:40f0:8", ["const:9b680c:8", "const:4:8"]]
- 009b680c ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6860 ["INT_ADD", "register:40f0:8", ["const:9b6860:8", "const:4:8"]]
+ 009b6860 ["CALL", null, ["callee:00c57f60:8"]]
- 009b6814 ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009b6868 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009b6818 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 009b6818 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6818 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6818 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b686c ["COPY", "tmp:0:8", ["const:60:8"]]
+ 009b686c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b686c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b686c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f522a730900efbebb4bb5b39bf75f8b"></a>

### [`009b682c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b682c.md) → [`009b6880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6880.md) FUN_009b6880

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
      "definition_site": "009b688c",
      "incomplete_value": false,
      "site": "009b688c",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6838",
      "incomplete_value": false,
      "site": "009b6838",
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
            "const:f90:8"
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
      "009b688c",
      "DATA",
      [
        "storage",
        "00c88f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b688c",
      "DATA",
      [
        "storage",
        "00c89060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6830 ["COPY", "register:4048:8", ["const:c88000:8"]]
+ 009b6884 ["COPY", "register:4048:8", ["const:c89000:8"]]
- 009b6834 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 009b6834 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b6834 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b6834 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b6888 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 009b6888 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b6888 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b6888 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cc2ee84a4537be24ba790041ce1596b1"></a>

### [`009b69c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b69c0.md) → [`009b6a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6a14.md) FUN_009b6a14

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
      "definition_site": "009b6a28",
      "incomplete_value": false,
      "site": "009b6a2c",
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
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b69d4",
      "incomplete_value": false,
      "site": "009b69d8",
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
            "const:10:8"
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
      "009b6a2c",
      "DATA",
      [
        "storage",
        "00c89010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6a2c",
      "DATA",
      [
        "storage",
        "00c890e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b69cc ["INT_ADD", "register:40f0:8", ["const:9b69cc:8", "const:4:8"]]
- 009b69cc ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6a20 ["INT_ADD", "register:40f0:8", ["const:9b6a20:8", "const:4:8"]]
+ 009b6a20 ["CALL", null, ["callee:00c57f60:8"]]
- 009b69d4 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009b69d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b69d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b69d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6a28 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 009b6a28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6a28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6a28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c5595dbe59b45340d4ec180d0ac5234a"></a>

### [`009b69e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b69e4.md) → [`009b6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6a38.md) FUN_009b6a38

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
      "definition_site": "009b6a3c",
      "incomplete_value": false,
      "site": "009b6a40",
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
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b69e8",
      "incomplete_value": false,
      "site": "009b69ec",
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
      "009b6a40",
      "DATA",
      [
        "storage",
        "00c89010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6a40",
      "DATA",
      [
        "storage",
        "00c890e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b69e8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009b69e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b69e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b69e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6a3c ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 009b6a3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6a3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6a3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69c93ee115d467a8cf429bbd297b6fba"></a>

### [`009b6a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6a28.md) → [`009b6a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6a7c.md) FUN_009b6a7c

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
      "definition_site": "009b6a88",
      "incomplete_value": false,
      "site": "009b6a94",
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
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6a34",
      "incomplete_value": false,
      "site": "009b6a40",
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
            "const:90:8"
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
      "009b6a94",
      "DATA",
      [
        "storage",
        "00c89090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6a94",
      "DATA",
      [
        "storage",
        "00c89160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6a34 ["COPY", "tmp:0:8", ["const:90:8"]]
- 009b6a34 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b6a34 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b6a34 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b6a88 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 009b6a88 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6a88 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6a88 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-6f0751b81807e9a89b239f12cb8515f9"></a>

### [`009b6a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6a6c.md) → [`009b6ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6ac0.md) FUN_009b6ac0

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
      "definition_site": "009b6ad8",
      "incomplete_value": false,
      "site": "009b6ae4",
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
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6a84",
      "incomplete_value": false,
      "site": "009b6a90",
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
            "const:90:8"
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
      "009b6ae4",
      "DATA",
      [
        "storage",
        "00c89090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6ae4",
      "DATA",
      [
        "storage",
        "00c89160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6a84 ["COPY", "tmp:0:8", ["const:90:8"]]
- 009b6a84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6a84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6a84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6ad8 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 009b6ad8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6ad8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6ad8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6ab4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6ab4 ["INT_ADD", "register:40f0:8", ["const:9b6ab4:8", "const:4:8"]]
- 009b6ab4 ["CALLIND", null, ["register:0:8"]]
+ 009b6b08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6b08 ["INT_ADD", "register:40f0:8", ["const:9b6b08:8", "const:4:8"]]
+ 009b6b08 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e2c3cf8e89a8b929fa861550751044c9"></a>

### [`009b6ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6ac8.md) → [`009b6b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6b1c.md) FUN_009b6b1c

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
      "definition_site": "009b6b48",
      "incomplete_value": false,
      "site": "009b6b48",
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
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6af4",
      "incomplete_value": false,
      "site": "009b6af4",
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
            "const:90:8"
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
      "009b6b48",
      "DATA",
      [
        "storage",
        "00c89090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6b48",
      "DATA",
      [
        "storage",
        "00c89160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6adc ["INT_ADD", "register:40f0:8", ["const:9b6adc:8", "const:4:8"]]
- 009b6adc ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6b30 ["INT_ADD", "register:40f0:8", ["const:9b6b30:8", "const:4:8"]]
+ 009b6b30 ["CALL", null, ["callee:00c57f60:8"]]
- 009b6aec ["COPY", "tmp:0:8", ["const:90:8"]]
- 009b6aec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6aec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6aec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6b40 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 009b6b40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6b40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6b40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6b10 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6b10 ["INT_ADD", "register:40f0:8", ["const:9b6b10:8", "const:4:8"]]
- 009b6b10 ["CALLIND", null, ["register:0:8"]]
+ 009b6b64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6b64 ["INT_ADD", "register:40f0:8", ["const:9b6b64:8", "const:4:8"]]
+ 009b6b64 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c4b8f420d3c675fe70f7c0bff09815c"></a>

### [`009b6b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6b58.md) → [`009b6bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6bac.md) FUN_009b6bac

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
      "definition_site": "009b6bcc",
      "incomplete_value": false,
      "site": "009b6bcc",
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
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6b78",
      "incomplete_value": false,
      "site": "009b6b78",
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
            "const:90:8"
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
      "009b6bcc",
      "DATA",
      [
        "storage",
        "00c89090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6bcc",
      "DATA",
      [
        "storage",
        "00c89160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6b74 ["COPY", "tmp:0:8", ["const:90:8"]]
- 009b6b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6bc8 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 009b6bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6b94 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6b94 ["INT_ADD", "register:40f0:8", ["const:9b6b94:8", "const:4:8"]]
- 009b6b94 ["CALLIND", null, ["register:0:8"]]
+ 009b6be8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6be8 ["INT_ADD", "register:40f0:8", ["const:9b6be8:8", "const:4:8"]]
+ 009b6be8 ["CALLIND", null, ["register:0:8"]]
- 009b6bb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6bb8 ["INT_ADD", "register:40f0:8", ["const:9b6bb8:8", "const:4:8"]]
- 009b6bb8 ["CALLIND", null, ["register:0:8"]]
+ 009b6c0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6c0c ["INT_ADD", "register:40f0:8", ["const:9b6c0c:8", "const:4:8"]]
+ 009b6c0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-83525906c0df6cacd2389c460aa1c53c"></a>

### [`009b6dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6dd4.md) → [`009b6e28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6e28.md) FUN_009b6e28

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
      "definition_site": "009b6e34",
      "incomplete_value": false,
      "site": "009b6e40",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6de0",
      "incomplete_value": false,
      "site": "009b6dec",
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
            "const:110:8"
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
      "009b6e40",
      "DATA",
      [
        "storage",
        "00c89110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6e40",
      "DATA",
      [
        "storage",
        "00c891e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6de0 ["COPY", "tmp:0:8", ["const:110:8"]]
- 009b6de0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b6de0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b6de0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b6e34 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 009b6e34 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6e34 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b6e34 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-ec4404e0060758179d128160634dcc59"></a>

### [`009b6e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6e18.md) → [`009b6e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6e6c.md) FUN_009b6e6c

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
      "definition_site": "009b6e84",
      "incomplete_value": false,
      "site": "009b6e90",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6e30",
      "incomplete_value": false,
      "site": "009b6e3c",
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
            "const:110:8"
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
      "009b6e90",
      "DATA",
      [
        "storage",
        "00c89110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6e90",
      "DATA",
      [
        "storage",
        "00c891e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6e30 ["COPY", "tmp:0:8", ["const:110:8"]]
- 009b6e30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6e30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6e30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6e84 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 009b6e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6e60 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6e60 ["INT_ADD", "register:40f0:8", ["const:9b6e60:8", "const:4:8"]]
- 009b6e60 ["CALLIND", null, ["register:0:8"]]
+ 009b6eb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6eb4 ["INT_ADD", "register:40f0:8", ["const:9b6eb4:8", "const:4:8"]]
+ 009b6eb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e60e89ba13224e945d11478ccf4f12ba"></a>

### [`009b6e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6e74.md) → [`009b6ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6ec8.md) FUN_009b6ec8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6ef4",
      "incomplete_value": false,
      "site": "009b6ef4",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6ea0",
      "incomplete_value": false,
      "site": "009b6ea0",
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
            "const:110:8"
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
      "009b6ef4",
      "DATA",
      [
        "storage",
        "00c89110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6ef4",
      "DATA",
      [
        "storage",
        "00c891e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6e88 ["INT_ADD", "register:40f0:8", ["const:9b6e88:8", "const:4:8"]]
- 009b6e88 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b6edc ["INT_ADD", "register:40f0:8", ["const:9b6edc:8", "const:4:8"]]
+ 009b6edc ["CALL", null, ["callee:00c57f60:8"]]
- 009b6e98 ["COPY", "tmp:0:8", ["const:110:8"]]
- 009b6e98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b6e98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b6e98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b6eec ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 009b6eec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6eec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b6eec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b6ebc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6ebc ["INT_ADD", "register:40f0:8", ["const:9b6ebc:8", "const:4:8"]]
- 009b6ebc ["CALLIND", null, ["register:0:8"]]
+ 009b6f10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6f10 ["INT_ADD", "register:40f0:8", ["const:9b6f10:8", "const:4:8"]]
+ 009b6f10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7cb1ab4eacdc5cd7f4f9ceaa22645853"></a>

### [`009b6efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6efc.md) → [`009b6f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6f50.md) FUN_009b6f50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b6f6c",
      "incomplete_value": false,
      "site": "009b6f6c",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b6f18",
      "incomplete_value": false,
      "site": "009b6f18",
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
            "const:110:8"
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
      "009b6f6c",
      "DATA",
      [
        "storage",
        "00c89110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b6f6c",
      "DATA",
      [
        "storage",
        "00c891e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b6f14 ["COPY", "tmp:0:8", ["const:110:8"]]
- 009b6f14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b6f14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b6f14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b6f68 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 009b6f68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b6f68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b6f68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b6f38 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b6f38 ["INT_ADD", "register:40f0:8", ["const:9b6f38:8", "const:4:8"]]
- 009b6f38 ["CALLIND", null, ["register:0:8"]]
+ 009b6f8c ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b6f8c ["INT_ADD", "register:40f0:8", ["const:9b6f8c:8", "const:4:8"]]
+ 009b6f8c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5b960eb229e70c34dd7f3234f4c72913"></a>

### [`009b709c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b709c.md) → [`009b70f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b70f0.md) FUN_009b70f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b70a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b70dc",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "009b71e8",
      "READ",
      [
        "storage",
        "00c705d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b70f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009b7130",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009b71e8",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b709c ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 009b70a0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b70a0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b70a0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009b70a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009b70cc ["INT_ADD", "register:40f0:8", ["const:9b70cc:8", "const:4:8"]]
- 009b70cc ["CALL", null, ["callee:00c57f60:8"]]
+ 009b7120 ["INT_ADD", "register:40f0:8", ["const:9b7120:8", "const:4:8"]]
+ 009b7120 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-4dfe2e755cc3b8480fa1582c991d30f4"></a>

### [`009b7214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7214.md) → [`009b7268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7268.md) FUN_009b7268

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
      "definition_site": "009b7274",
      "incomplete_value": false,
      "site": "009b7280",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7220",
      "incomplete_value": false,
      "site": "009b722c",
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
            "const:190:8"
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
      "009b7280",
      "DATA",
      [
        "storage",
        "00c89190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7280",
      "DATA",
      [
        "storage",
        "00c89260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7220 ["COPY", "tmp:0:8", ["const:190:8"]]
- 009b7220 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b7220 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b7220 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b7274 ["COPY", "tmp:0:8", ["const:260:8"]]
+ 009b7274 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7274 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7274 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-4f235614178c7edea03709df61cf8d68"></a>

### [`009b7258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7258.md) → [`009b72ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b72ac.md) FUN_009b72ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 56.52% / 新版 56.52%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b725c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b727c",
      "DATA",
      [
        "storage",
        "00c89190",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b7280",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b72e4"
      ]
    ]
  ],
  "added": [
    [
      "009b72b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b72d0",
      "DATA",
      [
        "storage",
        "00c89260",
        null,
        "undefined *"
      ]
    ],
    [
      "009b72d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b72e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b725c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b725c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b7260 ["COPY", "register:40e8:8", ["register:8:8"]]
- 009b7264 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-acc312702dcfbb01b7e97aebde9feae0"></a>

### [`009b72b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b72b4.md) → [`009b7308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7308.md) FUN_009b7308

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b7334",
      "incomplete_value": false,
      "site": "009b7334",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b72e0",
      "incomplete_value": false,
      "site": "009b72e0",
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
            "const:190:8"
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
      "009b7334",
      "DATA",
      [
        "storage",
        "00c89190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7334",
      "DATA",
      [
        "storage",
        "00c89260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b72c8 ["INT_ADD", "register:40f0:8", ["const:9b72c8:8", "const:4:8"]]
- 009b72c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b731c ["INT_ADD", "register:40f0:8", ["const:9b731c:8", "const:4:8"]]
+ 009b731c ["CALL", null, ["callee:00c57f60:8"]]
- 009b72d8 ["COPY", "tmp:0:8", ["const:190:8"]]
- 009b72d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b72d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b72d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b732c ["COPY", "tmp:0:8", ["const:260:8"]]
+ 009b732c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b732c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b732c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b72fc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b72fc ["INT_ADD", "register:40f0:8", ["const:9b72fc:8", "const:4:8"]]
- 009b72fc ["CALLIND", null, ["register:0:8"]]
+ 009b7350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7350 ["INT_ADD", "register:40f0:8", ["const:9b7350:8", "const:4:8"]]
+ 009b7350 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-076bd361b21be8a1fe6b06bfc21477b6"></a>

### [`009b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b733c.md) → [`009b7390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7390.md) FUN_009b7390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b73ac",
      "incomplete_value": false,
      "site": "009b73ac",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7358",
      "incomplete_value": false,
      "site": "009b7358",
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
            "const:190:8"
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
      "009b73ac",
      "DATA",
      [
        "storage",
        "00c89190",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b7378",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b73ac",
      "DATA",
      [
        "storage",
        "00c89260",
        null,
        "undefined *"
      ]
    ],
    [
      "009b73cc",
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
- 009b7354 ["COPY", "tmp:0:8", ["const:190:8"]]
- 009b7354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b7354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b7354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b73a8 ["COPY", "tmp:0:8", ["const:260:8"]]
+ 009b73a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b73a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b73a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b735c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 009b735c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 009b73b0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 009b73b0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 009b7368 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 009b73bc ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-eee48c26430d9da834d16c2e822d3e6f"></a>

### [`009b7438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7438.md) → [`009b748c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b748c.md) FUN_009b748c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.10% / 新版 93.10%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b74a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b74fc"
      ]
    ]
  ],
  "added": [
    [
      "009b74f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b74fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7470 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7470 ["INT_ADD", "register:40f0:8", ["const:9b7470:8", "const:4:8"]]
- 009b7470 ["CALLIND", null, ["register:0:8"]]
+ 009b74c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b74c4 ["INT_ADD", "register:40f0:8", ["const:9b74c4:8", "const:4:8"]]
+ 009b74c4 ["CALLIND", null, ["register:0:8"]]
- 009b749c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 009b749c ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 009b749c ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 009b749c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009b74a0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009b74a0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-7ed03736584626de268f0d2810a478c6"></a>

### [`009b74d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b74d4.md) → [`009b7528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7528.md) FUN_009b7528

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
      "definition_site": "009b7534",
      "incomplete_value": false,
      "site": "009b7540",
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
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b74e0",
      "incomplete_value": false,
      "site": "009b74ec",
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
            "const:210:8"
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
      "009b7540",
      "DATA",
      [
        "storage",
        "00c89210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7540",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b74e0 ["COPY", "tmp:0:8", ["const:210:8"]]
- 009b74e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b74e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b74e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b7534 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 009b7534 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7534 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7534 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-cfc736225320d028279c31d2ea0fefdb"></a>

### [`009b7518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7518.md) → [`009b756c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b756c.md) FUN_009b756c

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
      "definition_site": "009b7584",
      "incomplete_value": false,
      "site": "009b7590",
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
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7530",
      "incomplete_value": false,
      "site": "009b753c",
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
            "const:210:8"
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
      "009b7590",
      "DATA",
      [
        "storage",
        "00c89210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7590",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7530 ["COPY", "tmp:0:8", ["const:210:8"]]
- 009b7530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b7584 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 009b7584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7560 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7560 ["INT_ADD", "register:40f0:8", ["const:9b7560:8", "const:4:8"]]
- 009b7560 ["CALLIND", null, ["register:0:8"]]
+ 009b75b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b75b4 ["INT_ADD", "register:40f0:8", ["const:9b75b4:8", "const:4:8"]]
+ 009b75b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d8f5c82521a73fe81caada10380581f7"></a>

### [`009b7574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7574.md) → [`009b75c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b75c8.md) FUN_009b75c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b75f4",
      "incomplete_value": false,
      "site": "009b75f4",
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
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b75a0",
      "incomplete_value": false,
      "site": "009b75a0",
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
            "const:210:8"
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
      "009b75f4",
      "DATA",
      [
        "storage",
        "00c89210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b75f4",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7588 ["INT_ADD", "register:40f0:8", ["const:9b7588:8", "const:4:8"]]
- 009b7588 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b75dc ["INT_ADD", "register:40f0:8", ["const:9b75dc:8", "const:4:8"]]
+ 009b75dc ["CALL", null, ["callee:00c57f60:8"]]
- 009b7598 ["COPY", "tmp:0:8", ["const:210:8"]]
- 009b7598 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7598 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7598 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b75ec ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 009b75ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b75ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b75ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b75bc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b75bc ["INT_ADD", "register:40f0:8", ["const:9b75bc:8", "const:4:8"]]
- 009b75bc ["CALLIND", null, ["register:0:8"]]
+ 009b7610 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7610 ["INT_ADD", "register:40f0:8", ["const:9b7610:8", "const:4:8"]]
+ 009b7610 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e6d3f43df8b4eb82b5f56d2862311b15"></a>

### [`009b75fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b75fc.md) → [`009b7650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7650.md) FUN_009b7650

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.41% / 新版 72.41%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b75fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b7600",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b7618",
      "DATA",
      [
        "storage",
        "00c89210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7650",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009b7654",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009b766c",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b75fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009b75fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009b75fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009b75fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009b7600 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b7600 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b7604 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


