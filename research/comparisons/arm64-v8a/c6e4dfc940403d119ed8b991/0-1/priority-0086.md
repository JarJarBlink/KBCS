# v16.0.1 → v16.0.2 · 最優先の変更候補 (86)

[一覧の目次](README.md)

<a id="compare-d2fbef2366825b94f86faffc3dacc54f"></a>

### [`00b95de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95de0.md) → [`00b95e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95e7c.md) _ZN11flatbuffers8HashFnv1IjEET_PKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95df0 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95df0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b95e8c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b95e8c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b95e10 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95e10 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b95eac ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b95eac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-9986ba3db327dc1741796575fb9f9973"></a>

### [`00b95e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95e18.md) → [`00b95eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95eb4.md) _ZN11flatbuffers9HashFnv1aIjEET_PKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95e28 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95e28 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b95ec4 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b95ec4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b95e48 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95e48 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b95ee4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b95ee4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-f6d6b8d8e66eb2d905f49db32a5aeddb"></a>

### [`00b95e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95e50.md) → [`00b95eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95eec.md) _ZN11flatbuffers8HashFnv1ImEET_PKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b95e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95f14"
      ]
    ]
  ],
  "added": [
    [
      "00b95f24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95f14"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b95e60 ["INT_AND", "register:4000:8", ["register:4000:8", "const:ffff0000ffffffff:8"]]
- 00b95e60 ["INT_OR", "register:4000:8", ["register:4000:8", "const:9ce400000000:8"]]
- 00b95e64 ["INT_AND", "register:4000:8", ["register:4000:8", "const:ffffffffffff:8"]]
- 00b95e64 ["INT_OR", "register:4000:8", ["register:4000:8", "const:cbf2000000000000:8"]]
- 00b95e68 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95e68 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b95f04 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b95f04 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-d59dacd8b09982846a6c877745e8ec3b"></a>

### [`00b95e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95e90.md) → [`00b95f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95f2c.md) _ZN11flatbuffers9HashFnv1aImEET_PKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b95ea8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95f68"
      ]
    ],
    [
      "unmatched:00b95ec8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b95eb8"
      ]
    ]
  ],
  "added": [
    [
      "00b95f44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95f68"
      ]
    ],
    [
      "00b95f64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95f54"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b95ea4 ["INT_AND", "register:4000:8", ["register:4000:8", "const:ffffffffffff:8"]]
- 00b95ea4 ["INT_OR", "register:4000:8", ["register:4000:8", "const:cbf2000000000000:8"]]
- 00b95ea8 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b95ea8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b95eac ["COPY", "register:4050:8", ["const:1b3:8"]]
~~~


<a id="compare-477adfd3625902bfc7eb555f3f261a07"></a>

### [`00b95ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95ed0.md) → [`00b95f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95f6c.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca90.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb60.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 92.75% / 新版 92.75%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b95fcc",
      "incomplete_value": true,
      "site": "00b95fe0",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b95ed0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b95ed4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b95ed8",
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
      "00b95f6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b95f70",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b95f74",
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
- 00b95ed0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b95ed0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b95ed0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b95ed0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b95ed4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b95ed4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b95ed4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b95ed4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b95ed8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b95ed8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b95ed8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b95ed8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-06209dd58254b8ac2e38773a0722e5d5"></a>

### [`00b95fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95fe4.md) → [`00b96080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96080.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ced0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ced0.md) · 呼出先 5件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5ba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba60.md) [`00c5cee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cee0.md)
- 新版 呼出元 1件 [`00c5cfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfa0.md) · 呼出先 5件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb30.md) [`00c5cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.78% / 新版 86.78%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 14件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b96054"
      ],
      [
        "FALL_THROUGH",
        "00b960f0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b960f4",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00b96050",
      "incomplete_value": true,
      "site": "00b96058",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b0:8"
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b96054"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b960f0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b96124",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00b96050",
      "incomplete_value": true,
      "site": "00b96088",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b0:8"
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
      "unmatched:00b95ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b96040",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96114"
      ]
    ],
    [
      "unmatched:00b96054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96120"
      ]
    ]
  ],
  "added": [
    [
      "00b96098",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b960dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96114"
      ]
    ],
    [
      "00b960f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96120"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b95ffc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b95ffc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b95ffc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b95ffc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b96000 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b96000 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b96000 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b96000 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b96014 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b96014 ["CBRANCH", null, ["local:b69:8", "tmp:0:1"]]
+ 00b960b0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b960b0 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
~~~


<a id="compare-080496fbc6a5682a09354e8bc13aeccc"></a>

### [`00b96370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96370.md) → [`00b9640c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b9640c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cee0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfb0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b96464"
      ],
      [
        "FALL_THROUGH",
        "00b96500"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b96500",
      "incomplete_value": true,
      "site": "00b96504",
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
      "definition_site": "00b96464",
      "incomplete_value": true,
      "site": "00b96468",
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
      "unmatched:00b96434",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96474"
      ]
    ],
    [
      "unmatched:00b96464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96510"
      ]
    ]
  ],
  "added": [
    [
      "00b964d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96474"
      ]
    ],
    [
      "00b96500",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b96510"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b96380 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00b96380 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b96380 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b96380 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b96390 ["INT_ADD", "register:40f0:8", ["const:b96390:8", "const:4:8"]]
- 00b96390 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b9642c ["INT_ADD", "register:40f0:8", ["const:b9642c:8", "const:4:8"]]
+ 00b9642c ["CALL", null, ["callee:00c57f60:8"]]
- 00b963a0 ["INT_ADD", "register:40f0:8", ["const:b963a0:8", "const:4:8"]]
- 00b963a0 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b9643c ["INT_ADD", "register:40f0:8", ["const:b9643c:8", "const:4:8"]]
+ 00b9643c ["CALL", null, ["callee:00c5b680:8"]]
~~~


<a id="compare-ab0c4e80e8a2712df6e9f34380798e12"></a>

### [`00b964a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b964a4.md) → [`00b96540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96540.md) _ZNSt6__ndk16vectorIPN11flatbuffers7EnumDefENS_9allocatorIS3_EEE6assignIPS3_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_co

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d060.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d130.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.21% / 新版 87.21%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b964a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b964a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b964ac",
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
      "00b96540",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b96544",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b96548",
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
- 00b964a4 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b964a4 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b964a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b964a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b964a8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b964a8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b964a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b964a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b964ac ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b964ac ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b964ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b964ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ebf7cd4516a3e9e51f735c0895973cea"></a>

### [`00b965fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b965fc.md) → [`00b96698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96698.md) _ZN11flatbuffers19StringToIntegerImplIlEEbPT_PKcib

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1b0.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d150.md)
- 新版 呼出元 1件 [`00c5c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c280.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d220.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.95% / 新版 91.95%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b96600",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b96604",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b96608",
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
      "00b9669c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b966a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b966a4",
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
- 00b965fc ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00b96600 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b96600 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00b96604 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b96604 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b96604 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b96604 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8ed24ef032cb6b0373dbeed9088e1390"></a>

### [`00b96758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96758.md) → [`00b967f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b967f4.md) _ZN11flatbuffers14EnumValBuilder13ValidateValueEPlb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c170.md) · 呼出先 15件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0d0.md)
- 新版 呼出元 1件 [`00c5c240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c240.md) · 呼出先 15件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.35% / 新版 88.35%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b968f0",
      "incomplete_value": false,
      "site": "00b96900",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b96854",
      "incomplete_value": false,
      "site": "00b96864",
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
            "const:bb6:8"
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
    "new": null,
    "old": {
      "definition_site": "00b968c0",
      "incomplete_value": true,
      "site": "00b968c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_AND",
            "4",
            [
              [
                "live",
                "register:4010:4"
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
      "unmatched:00b96778",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9679c",
      "DATA",
      [
        "storage",
        "0030e1bd",
        "switchD_00b967a4::switchdataD_0030e1bd",
        "byte"
      ]
    ],
    [
      "unmatched:00b9682c",
      "READ",
      [
        "storage",
        "002b074d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b96814",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b96838",
      "DATA",
      [
        "storage",
        "0030e1fd",
        "switchD_00b96840::switchdataD_0030e1fd",
        "byte"
      ]
    ],
    [
      "00b968c8",
      "READ",
      [
        "storage",
        "002b06f1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b96864 ["INT_ADD", "register:40f0:8", ["const:b96864:8", "const:4:8"]]
- 00b96864 ["CALL", null, ["callee:00c58180:8"]]
+ 00b96900 ["INT_ADD", "register:40f0:8", ["const:b96900:8", "const:4:8"]]
+ 00b96900 ["CALL", null, ["callee:00c58180:8"]]
- 00b968c8 ["INT_ADD", "register:40f0:8", ["const:b968c8:8", "const:4:8"]]
- 00b968c8 ["CALL", null, ["callee:00c5c230:8"]]
+ 00b96964 ["INT_ADD", "register:40f0:8", ["const:b96964:8", "const:4:8"]]
+ 00b96964 ["CALL", null, ["callee:00c5c230:8"]]
+ 00b968c8 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00b968c8 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00b968c8 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00b968c8 ["COPY", "register:5038:8", ["const:0:8"]]
~~~


<a id="compare-78ea12174ba72d708d426cda524ef583"></a>

### [`00b968f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b968f4.md) → [`00b96990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96990.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE1EhEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0e0.md) · 呼出先 8件 [`00b97f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97f00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1b0.md) · 呼出先 8件 [`00b97f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97f9c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.98% / 新版 82.98%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b969e8",
      "incomplete_value": false,
      "site": "00b969f8",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9694c",
      "incomplete_value": false,
      "site": "00b9695c",
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
            "const:b5d:8"
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
      "definition_site": "00b969ac",
      "incomplete_value": false,
      "site": "00b969c8",
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
            "const:b5f:8"
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
      "definition_site": "00b96ad0",
      "incomplete_value": false,
      "site": "00b96ad8",
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
            "const:b69:8"
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
      "unmatched:00b968f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b968fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b96900",
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
      "00b96994",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b96998",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9699c",
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
- 00b9695c ["INT_ADD", "register:40f0:8", ["const:b9695c:8", "const:4:8"]]
- 00b9695c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b969f8 ["INT_ADD", "register:40f0:8", ["const:b969f8:8", "const:4:8"]]
+ 00b969f8 ["CALL", null, ["callee:00c590a0:8"]]
- 00b969c8 ["INT_ADD", "register:40f0:8", ["const:b969c8:8", "const:4:8"]]
- 00b969c8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b96a64 ["INT_ADD", "register:40f0:8", ["const:b96a64:8", "const:4:8"]]
+ 00b96a64 ["CALL", null, ["callee:00c58050:8"]]
- 00b96a3c ["INT_ADD", "register:40f0:8", ["const:b96a3c:8", "const:4:8"]]
- 00b96a3c ["CALL", null, ["callee:00c58180:8"]]
+ 00b96ad8 ["INT_ADD", "register:40f0:8", ["const:b96ad8:8", "const:4:8"]]
+ 00b96ad8 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-2d6fb65a3e097c1ffc55070fc8ef4eda"></a>

### [`00b96b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96b28.md) → [`00b96bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96bc4.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE2EhEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0f0.md) · 呼出先 8件 [`00b97f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97f00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1c0.md) · 呼出先 8件 [`00b97f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97f9c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b96b80",
      "incomplete_value": false,
      "site": "00b96b90",
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
            "const:b5d:8"
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
      "definition_site": "00b96c7c",
      "incomplete_value": false,
      "site": "00b96c98",
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
            "const:b9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b96be0",
      "incomplete_value": false,
      "site": "00b96bfc",
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
            "const:b5f:8"
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
      "definition_site": "00b96d04",
      "incomplete_value": false,
      "site": "00b96d0c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b96c68",
      "incomplete_value": false,
      "site": "00b96c70",
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
            "const:bb6:8"
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
      "unmatched:00b96b80",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b96bb4",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b96bb4",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b96c1c",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b96c50",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b96c50",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b96b90 ["INT_ADD", "register:40f0:8", ["const:b96b90:8", "const:4:8"]]
- 00b96b90 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b96c2c ["INT_ADD", "register:40f0:8", ["const:b96c2c:8", "const:4:8"]]
+ 00b96c2c ["CALL", null, ["callee:00c590a0:8"]]
- 00b96bfc ["INT_ADD", "register:40f0:8", ["const:b96bfc:8", "const:4:8"]]
- 00b96bfc ["CALL", null, ["callee:00c58050:8"]]
+ 00b96c98 ["INT_ADD", "register:40f0:8", ["const:b96c98:8", "const:4:8"]]
+ 00b96c98 ["CALL", null, ["callee:00c58050:8"]]
- 00b96c70 ["INT_ADD", "register:40f0:8", ["const:b96c70:8", "const:4:8"]]
- 00b96c70 ["CALL", null, ["callee:00c58180:8"]]
+ 00b96d0c ["INT_ADD", "register:40f0:8", ["const:b96d0c:8", "const:4:8"]]
+ 00b96d0c ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-e350b09d5f20d902344a925fc5d5de79"></a>

### [`00b96d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96d5c.md) → [`00b96df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96df8.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE3EaEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c100.md) · 呼出先 8件 [`00b980a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b980a0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1d0.md) · 呼出先 8件 [`00b9813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9813c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.66% / 新版 93.66%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b96dbc",
      "incomplete_value": true,
      "site": "00b96dc8",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b96db8",
      "incomplete_value": false,
      "site": "00b96dc8",
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
            "const:b5d:8"
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
      "definition_site": "00b96eb4",
      "incomplete_value": false,
      "site": "00b96ed0",
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
            "const:b9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b96e18",
      "incomplete_value": false,
      "site": "00b96e34",
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
            "const:b5f:8"
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
      "unmatched:00b96db8",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b96dec",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b96dec",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b96e54",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b96e88",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b96e88",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b96dc8 ["INT_ADD", "register:40f0:8", ["const:b96dc8:8", "const:4:8"]]
- 00b96dc8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b96e64 ["INT_ADD", "register:40f0:8", ["const:b96e64:8", "const:4:8"]]
+ 00b96e64 ["CALL", null, ["callee:00c590a0:8"]]
- 00b96e34 ["INT_ADD", "register:40f0:8", ["const:b96e34:8", "const:4:8"]]
- 00b96e34 ["CALL", null, ["callee:00c58050:8"]]
+ 00b96ed0 ["INT_ADD", "register:40f0:8", ["const:b96ed0:8", "const:4:8"]]
+ 00b96ed0 ["CALL", null, ["callee:00c58050:8"]]
- 00b96ea8 ["INT_ADD", "register:40f0:8", ["const:b96ea8:8", "const:4:8"]]
- 00b96ea8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b96f44 ["INT_ADD", "register:40f0:8", ["const:b96f44:8", "const:4:8"]]
+ 00b96f44 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-5c3c8be8b13878b66457b72d9c1ecfc0"></a>

### [`00b96f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96f94.md) → [`00b97030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97030.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE4EhEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c110.md) · 呼出先 8件 [`00b97f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97f00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1e0.md) · 呼出先 8件 [`00b97f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97f9c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b96ff0",
      "incomplete_value": true,
      "site": "00b96ffc",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b96fec",
      "incomplete_value": false,
      "site": "00b96ffc",
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
            "const:b5d:8"
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
      "definition_site": "00b96ff4",
      "incomplete_value": false,
      "site": "00b96ffc",
      "value": [
        "leaf",
        "const:1a:8"
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
      "unmatched:00b96fec",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97020",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97020",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b97088",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b970bc",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b970bc",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b96ffc ["INT_ADD", "register:40f0:8", ["const:b96ffc:8", "const:4:8"]]
- 00b96ffc ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97098 ["INT_ADD", "register:40f0:8", ["const:b97098:8", "const:4:8"]]
+ 00b97098 ["CALL", null, ["callee:00c590a0:8"]]
- 00b9703c ["INT_ADD", "register:40f0:8", ["const:b9703c:8", "const:4:8"]]
- 00b9703c ["CALL", null, ["callee:00c58050:8"]]
+ 00b970d8 ["INT_ADD", "register:40f0:8", ["const:b970d8:8", "const:4:8"]]
+ 00b970d8 ["CALL", null, ["callee:00c58050:8"]]
- 00b97068 ["INT_ADD", "register:40f0:8", ["const:b97068:8", "const:4:8"]]
- 00b97068 ["CALL", null, ["callee:00c58050:8"]]
+ 00b97104 ["INT_ADD", "register:40f0:8", ["const:b97104:8", "const:4:8"]]
+ 00b97104 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-f466c9628b33fa9b56bdb6da96e78c45"></a>

### [`00b971c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b971c8.md) → [`00b97264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97264.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE5EsEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c120.md) · 呼出先 8件 [`00b98240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98240.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1f0.md) · 呼出先 8件 [`00b982dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b982dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.66% / 新版 93.66%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b97228",
      "incomplete_value": true,
      "site": "00b97234",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b97224",
      "incomplete_value": false,
      "site": "00b97234",
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
            "const:b5d:8"
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
      "definition_site": "00b9722c",
      "incomplete_value": false,
      "site": "00b97234",
      "value": [
        "leaf",
        "const:1a:8"
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
      "unmatched:00b97224",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97258",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97258",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b972c0",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b972f4",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b972f4",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b97234 ["INT_ADD", "register:40f0:8", ["const:b97234:8", "const:4:8"]]
- 00b97234 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b972d0 ["INT_ADD", "register:40f0:8", ["const:b972d0:8", "const:4:8"]]
+ 00b972d0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b97274 ["INT_ADD", "register:40f0:8", ["const:b97274:8", "const:4:8"]]
- 00b97274 ["CALL", null, ["callee:00c58050:8"]]
+ 00b97310 ["INT_ADD", "register:40f0:8", ["const:b97310:8", "const:4:8"]]
+ 00b97310 ["CALL", null, ["callee:00c58050:8"]]
- 00b972a0 ["INT_ADD", "register:40f0:8", ["const:b972a0:8", "const:4:8"]]
- 00b972a0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b9733c ["INT_ADD", "register:40f0:8", ["const:b9733c:8", "const:4:8"]]
+ 00b9733c ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-cb00197f8d32a13aa4851a4133d28cef"></a>

### [`00b97400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97400.md) → [`00b9749c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b9749c.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE6EtEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c130.md) · 呼出先 8件 [`00b983e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b983e0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c200.md) · 呼出先 8件 [`00b9847c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9847c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.27% / 新版 82.27%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b9745c",
      "incomplete_value": true,
      "site": "00b97468",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b97464",
      "incomplete_value": false,
      "site": "00b97468",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00b97458",
      "incomplete_value": false,
      "site": "00b97468",
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
            "const:b5d:8"
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
      "unmatched:00b97458",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b9748c",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b9748c",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b974f4",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b97528",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b97528",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b97468 ["INT_ADD", "register:40f0:8", ["const:b97468:8", "const:4:8"]]
- 00b97468 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97504 ["INT_ADD", "register:40f0:8", ["const:b97504:8", "const:4:8"]]
+ 00b97504 ["CALL", null, ["callee:00c590a0:8"]]
- 00b974d4 ["INT_ADD", "register:40f0:8", ["const:b974d4:8", "const:4:8"]]
- 00b974d4 ["CALL", null, ["callee:00c58050:8"]]
+ 00b97570 ["INT_ADD", "register:40f0:8", ["const:b97570:8", "const:4:8"]]
+ 00b97570 ["CALL", null, ["callee:00c58050:8"]]
- 00b97548 ["INT_ADD", "register:40f0:8", ["const:b97548:8", "const:4:8"]]
- 00b97548 ["CALL", null, ["callee:00c58180:8"]]
+ 00b975e4 ["INT_ADD", "register:40f0:8", ["const:b975e4:8", "const:4:8"]]
+ 00b975e4 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-a96bfa278d45e718ad497cd381fcd54d"></a>

### [`00b97634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97634.md) → [`00b976d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b976d0.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE7EiEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c140.md) · 呼出先 8件 [`00b98580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98580.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c210.md) · 呼出先 8件 [`00b9861c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9861c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.51% / 新版 89.51%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b97730",
      "incomplete_value": false,
      "site": "00b97740",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97694",
      "incomplete_value": false,
      "site": "00b976a4",
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
            "const:b5d:8"
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
      "definition_site": "00b97818",
      "incomplete_value": false,
      "site": "00b97820",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9777c",
      "incomplete_value": false,
      "site": "00b97784",
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
            "const:bb6:8"
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
      "unmatched:00b97638",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9763c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b97640",
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
      "00b976d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b976d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b976dc",
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
- 00b976a4 ["INT_ADD", "register:40f0:8", ["const:b976a4:8", "const:4:8"]]
- 00b976a4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97740 ["INT_ADD", "register:40f0:8", ["const:b97740:8", "const:4:8"]]
+ 00b97740 ["CALL", null, ["callee:00c590a0:8"]]
- 00b97784 ["INT_ADD", "register:40f0:8", ["const:b97784:8", "const:4:8"]]
- 00b97784 ["CALL", null, ["callee:00c58180:8"]]
+ 00b97820 ["INT_ADD", "register:40f0:8", ["const:b97820:8", "const:4:8"]]
+ 00b97820 ["CALL", null, ["callee:00c58180:8"]]
- 00b97634 ["INT_SUB", "register:8:8", ["register:8:8", "const:100:8"]]
~~~


<a id="compare-96293e9d474d90de8d11b02aae4d0637"></a>

### [`00b97870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97870.md) → [`00b9790c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b9790c.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE8EjEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c150.md) · 呼出先 8件 [`00b98720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98720.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c220.md) · 呼出先 8件 [`00b987bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b987bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b97964",
      "incomplete_value": false,
      "site": "00b97974",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b978c8",
      "incomplete_value": false,
      "site": "00b978d8",
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
            "const:b5d:8"
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
      "definition_site": "00b979c4",
      "incomplete_value": false,
      "site": "00b979e0",
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
            "const:b9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97928",
      "incomplete_value": false,
      "site": "00b97944",
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
            "const:b5f:8"
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
      "definition_site": "00b97a4c",
      "incomplete_value": false,
      "site": "00b97a54",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b979b0",
      "incomplete_value": false,
      "site": "00b979b8",
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
            "const:bb6:8"
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
      "00b97964",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "00b97998",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "00b97998",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b97964",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b97998",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b97998",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b978d8 ["INT_ADD", "register:40f0:8", ["const:b978d8:8", "const:4:8"]]
- 00b978d8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97974 ["INT_ADD", "register:40f0:8", ["const:b97974:8", "const:4:8"]]
+ 00b97974 ["CALL", null, ["callee:00c590a0:8"]]
- 00b97944 ["INT_ADD", "register:40f0:8", ["const:b97944:8", "const:4:8"]]
- 00b97944 ["CALL", null, ["callee:00c58050:8"]]
+ 00b979e0 ["INT_ADD", "register:40f0:8", ["const:b979e0:8", "const:4:8"]]
+ 00b979e0 ["CALL", null, ["callee:00c58050:8"]]
- 00b979b8 ["INT_ADD", "register:40f0:8", ["const:b979b8:8", "const:4:8"]]
- 00b979b8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b97a54 ["INT_ADD", "register:40f0:8", ["const:b97a54:8", "const:4:8"]]
+ 00b97a54 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-5dbc0437fcbf1ad200fcd334853f3075"></a>

### [`00b97aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97aa4.md) → [`00b97b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97b40.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE9ElEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c160.md) · 呼出先 8件 [`00b988c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b988c0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c230.md) · 呼出先 8件 [`00b9895c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9895c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b97b94",
      "incomplete_value": false,
      "site": "00b97ba4",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97af8",
      "incomplete_value": false,
      "site": "00b97b08",
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
            "const:b5d:8"
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
      "definition_site": "00b97bf4",
      "incomplete_value": false,
      "site": "00b97c10",
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
            "const:b9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97b58",
      "incomplete_value": false,
      "site": "00b97b74",
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
            "const:b5f:8"
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
      "definition_site": "00b97c7c",
      "incomplete_value": false,
      "site": "00b97c84",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97be0",
      "incomplete_value": false,
      "site": "00b97be8",
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
            "const:bb6:8"
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
      "00b97b94",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "00b97bc8",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "00b97bc8",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b97b94",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b97bc8",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b97bc8",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b97b08 ["INT_ADD", "register:40f0:8", ["const:b97b08:8", "const:4:8"]]
- 00b97b08 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97ba4 ["INT_ADD", "register:40f0:8", ["const:b97ba4:8", "const:4:8"]]
+ 00b97ba4 ["CALL", null, ["callee:00c590a0:8"]]
- 00b97b74 ["INT_ADD", "register:40f0:8", ["const:b97b74:8", "const:4:8"]]
- 00b97b74 ["CALL", null, ["callee:00c58050:8"]]
+ 00b97c10 ["INT_ADD", "register:40f0:8", ["const:b97c10:8", "const:4:8"]]
+ 00b97c10 ["CALL", null, ["callee:00c58050:8"]]
- 00b97be8 ["INT_ADD", "register:40f0:8", ["const:b97be8:8", "const:4:8"]]
- 00b97be8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b97c84 ["INT_ADD", "register:40f0:8", ["const:b97c84:8", "const:4:8"]]
+ 00b97c84 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-93e9b72f3188a5f6c2674a540e93b1ac"></a>

### [`00b97cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97cd4.md) → [`00b97d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97d70.md) _ZN11flatbuffers14EnumValBuilder12ValidateImplILNS_8BaseTypeE10EmEENS_12CheckedErrorEPli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0d0.md) · 呼出先 8件 [`00b98a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98a60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c1a0.md) · 呼出先 8件 [`00b98afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98afc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.37% / 新版 91.37%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b97dc0",
      "incomplete_value": false,
      "site": "00b97dd0",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97d24",
      "incomplete_value": false,
      "site": "00b97d34",
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
            "const:b5d:8"
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
      "definition_site": "00b97e20",
      "incomplete_value": false,
      "site": "00b97e3c",
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
            "const:b9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b97d84",
      "incomplete_value": false,
      "site": "00b97da0",
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
            "const:b5f:8"
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
      "definition_site": "00b97e2c",
      "incomplete_value": true,
      "site": "00b97e30",
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
      "unmatched:00b97d24",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97d58",
      "PARAM",
      [
        "storage",
        "002c1c81",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b97d58",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b97dc0",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b97df4",
      "PARAM",
      [
        "storage",
        "002c1cc1",
        null,
        "string"
      ]
    ],
    [
      "00b97df4",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b97d34 ["INT_ADD", "register:40f0:8", ["const:b97d34:8", "const:4:8"]]
- 00b97d34 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b97dd0 ["INT_ADD", "register:40f0:8", ["const:b97dd0:8", "const:4:8"]]
+ 00b97dd0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b97da0 ["INT_ADD", "register:40f0:8", ["const:b97da0:8", "const:4:8"]]
- 00b97da0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b97e3c ["INT_ADD", "register:40f0:8", ["const:b97e3c:8", "const:4:8"]]
+ 00b97e3c ["CALL", null, ["callee:00c58050:8"]]
- 00b97e30 ["INT_ADD", "register:40f0:8", ["const:b97e30:8", "const:4:8"]]
- 00b97e30 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b97ecc ["INT_ADD", "register:40f0:8", ["const:b97ecc:8", "const:4:8"]]
+ 00b97ecc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-92798aec973874646336f074b32a07ae"></a>

### [`00b97f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97f00.md) → [`00b97f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97f9c.md) FUN_00b97f9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00b968f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b968f4.md) [`00b96b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96b28.md) [`00b96f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96f94.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md)
- 新版 呼出元 4件 [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00b96990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96990.md) [`00b96bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96bc4.md) [`00b97030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97030.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.58% / 新版 85.58%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b98030",
      "incomplete_value": false,
      "site": "00b98034",
      "value": [
        "leaf",
        "const:ff:8"
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
      "definition_site": "00b98068",
      "incomplete_value": false,
      "site": "00b98084",
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
            "const:96c:8"
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
      "unmatched:00b97f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b97f2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c0b0"
      ]
    ],
    [
      "unmatched:00b97f34",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b97fc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b97fc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c0b0"
      ]
    ],
    [
      "00b97fd0",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b97f98 ["INT_ADD", "register:40f0:8", ["const:b97f98:8", "const:4:8"]]
- 00b97f98 ["CALL", null, ["callee:00c5c0b0:8"]]
+ 00b98034 ["INT_ADD", "register:40f0:8", ["const:b98034:8", "const:4:8"]]
+ 00b98034 ["CALL", null, ["callee:00c5c0b0:8"]]
- 00b97fe8 ["INT_ADD", "register:40f0:8", ["const:b97fe8:8", "const:4:8"]]
- 00b97fe8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b98084 ["INT_ADD", "register:40f0:8", ["const:b98084:8", "const:4:8"]]
+ 00b98084 ["CALL", null, ["callee:00c58050:8"]]
- 00b98084 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b98084 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b98084 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b98084 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b98120 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b98120 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b98120 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b98120 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-4151ea1721ad3b00dc11a9ee118baef7"></a>

### [`00b980a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b980a0.md) → [`00b9813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9813c.md) FUN_00b9813c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) [`00b96d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b96/00b96d5c.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md)
- 新版 呼出元 2件 [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) [`00b96df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96df8.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.81% / 新版 79.81%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b980d8",
      "incomplete_value": true,
      "site": "00b980e4",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b980d4",
      "incomplete_value": false,
      "site": "00b980e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b980dc",
      "incomplete_value": false,
      "site": "00b980e4",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:00b980c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b980cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c0b0"
      ]
    ],
    [
      "unmatched:00b980d4",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b98160",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b98168",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c0b0"
      ]
    ],
    [
      "00b98170",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b980e4 ["INT_ADD", "register:40f0:8", ["const:b980e4:8", "const:4:8"]]
- 00b980e4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b98180 ["INT_ADD", "register:40f0:8", ["const:b98180:8", "const:4:8"]]
+ 00b98180 ["CALL", null, ["callee:00c590a0:8"]]
- 00b98110 ["INT_ADD", "register:40f0:8", ["const:b98110:8", "const:4:8"]]
- 00b98110 ["CALL", null, ["callee:00c58050:8"]]
+ 00b981ac ["INT_ADD", "register:40f0:8", ["const:b981ac:8", "const:4:8"]]
+ 00b981ac ["CALL", null, ["callee:00c58050:8"]]
- 00b9820c ["INT_ADD", "register:40f0:8", ["const:b9820c:8", "const:4:8"]]
- 00b9820c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b982a8 ["INT_ADD", "register:40f0:8", ["const:b982a8:8", "const:4:8"]]
+ 00b982a8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1317420c031f481b6c2da75a05317f41"></a>

### [`00b98240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98240.md) → [`00b982dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b982dc.md) FUN_00b982dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md) [`00b971c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b971c8.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5c020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c020.md)
- 新版 呼出元 2件 [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md) [`00b97264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97264.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b98310",
      "incomplete_value": false,
      "site": "00b98320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98274",
      "incomplete_value": false,
      "site": "00b98284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b98330",
      "incomplete_value": false,
      "site": "00b9834c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:715:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98294",
      "incomplete_value": false,
      "site": "00b982b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "definition_site": "00b983a8",
      "incomplete_value": false,
      "site": "00b983c4",
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
            "const:96c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9830c",
      "incomplete_value": false,
      "site": "00b98328",
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
            "const:93b:8"
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
      "00b98310",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ],
    [
      "00b98330",
      "PARAM",
      [
        "storage",
        "002b0771",
        null,
        null
      ]
    ],
    [
      "00b983a8",
      "PARAM",
      [
        "storage",
        "002b393b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b98310",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ],
    [
      "00b98330",
      "PARAM",
      [
        "storage",
        "002b0715",
        null,
        null
      ]
    ],
    [
      "00b983a8",
      "PARAM",
      [
        "storage",
        "002b396c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98284 ["INT_ADD", "register:40f0:8", ["const:b98284:8", "const:4:8"]]
- 00b98284 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b98320 ["INT_ADD", "register:40f0:8", ["const:b98320:8", "const:4:8"]]
+ 00b98320 ["CALL", null, ["callee:00c590a0:8"]]
- 00b982b0 ["INT_ADD", "register:40f0:8", ["const:b982b0:8", "const:4:8"]]
- 00b982b0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b9834c ["INT_ADD", "register:40f0:8", ["const:b9834c:8", "const:4:8"]]
+ 00b9834c ["CALL", null, ["callee:00c58050:8"]]
- 00b98328 ["INT_ADD", "register:40f0:8", ["const:b98328:8", "const:4:8"]]
- 00b98328 ["CALL", null, ["callee:00c58050:8"]]
+ 00b983c4 ["INT_ADD", "register:40f0:8", ["const:b983c4:8", "const:4:8"]]
+ 00b983c4 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-a2255ebb6be74bf034aec32b767a599b"></a>

### [`00b983e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b983e0.md) → [`00b9847c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9847c.md) FUN_00b9847c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b97400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97400.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5c030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c030.md)
- 新版 呼出元 2件 [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b9749c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b9749c.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c100.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b984b0",
      "incomplete_value": false,
      "site": "00b984c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98414",
      "incomplete_value": false,
      "site": "00b98424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b98448",
      "incomplete_value": true,
      "site": "00b98450",
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
      "definition_site": "00b98434",
      "incomplete_value": false,
      "site": "00b98450",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "00b984b0",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ],
    [
      "00b984d0",
      "PARAM",
      [
        "storage",
        "002b0771",
        null,
        null
      ]
    ],
    [
      "00b98548",
      "PARAM",
      [
        "storage",
        "002b393b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b984b0",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ],
    [
      "00b984d0",
      "PARAM",
      [
        "storage",
        "002b0715",
        null,
        null
      ]
    ],
    [
      "00b98548",
      "PARAM",
      [
        "storage",
        "002b396c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98424 ["INT_ADD", "register:40f0:8", ["const:b98424:8", "const:4:8"]]
- 00b98424 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b984c0 ["INT_ADD", "register:40f0:8", ["const:b984c0:8", "const:4:8"]]
+ 00b984c0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b98450 ["INT_ADD", "register:40f0:8", ["const:b98450:8", "const:4:8"]]
- 00b98450 ["CALL", null, ["callee:00c58050:8"]]
+ 00b984ec ["INT_ADD", "register:40f0:8", ["const:b984ec:8", "const:4:8"]]
+ 00b984ec ["CALL", null, ["callee:00c58050:8"]]
- 00b98478 ["INT_ADD", "register:40f0:8", ["const:b98478:8", "const:4:8"]]
- 00b98478 ["CALL", null, ["callee:00c5c100:8"]]
+ 00b98514 ["INT_ADD", "register:40f0:8", ["const:b98514:8", "const:4:8"]]
+ 00b98514 ["CALL", null, ["callee:00c5c100:8"]]
~~~


<a id="compare-92ad11b361538fefded264482e6334c5"></a>

### [`00b98580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98580.md) → [`00b9861c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9861c.md) FUN_00b9861c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7de4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7de4c.md) [`00b97634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97634.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md)
- 新版 呼出元 2件 [`00b7dee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7dee8.md) [`00b976d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b976d0.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b98650",
      "incomplete_value": false,
      "site": "00b98660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b985b4",
      "incomplete_value": false,
      "site": "00b985c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b98670",
      "incomplete_value": false,
      "site": "00b9868c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:715:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b985d4",
      "incomplete_value": false,
      "site": "00b985f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "definition_site": "00b986e8",
      "incomplete_value": false,
      "site": "00b98704",
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
            "const:96c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9864c",
      "incomplete_value": false,
      "site": "00b98668",
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
            "const:93b:8"
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
      "unmatched:00b985b4",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ],
    [
      "unmatched:00b985d4",
      "PARAM",
      [
        "storage",
        "002b0771",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9864c",
      "PARAM",
      [
        "storage",
        "002b393b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b98650",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ],
    [
      "00b98670",
      "PARAM",
      [
        "storage",
        "002b0715",
        null,
        null
      ]
    ],
    [
      "00b986e8",
      "PARAM",
      [
        "storage",
        "002b396c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b985c4 ["INT_ADD", "register:40f0:8", ["const:b985c4:8", "const:4:8"]]
- 00b985c4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b98660 ["INT_ADD", "register:40f0:8", ["const:b98660:8", "const:4:8"]]
+ 00b98660 ["CALL", null, ["callee:00c590a0:8"]]
- 00b985f0 ["INT_ADD", "register:40f0:8", ["const:b985f0:8", "const:4:8"]]
- 00b985f0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b9868c ["INT_ADD", "register:40f0:8", ["const:b9868c:8", "const:4:8"]]
+ 00b9868c ["CALL", null, ["callee:00c58050:8"]]
- 00b98668 ["INT_ADD", "register:40f0:8", ["const:b98668:8", "const:4:8"]]
- 00b98668 ["CALL", null, ["callee:00c58050:8"]]
+ 00b98704 ["INT_ADD", "register:40f0:8", ["const:b98704:8", "const:4:8"]]
+ 00b98704 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-72089a48e3a0d1562e63c879c5eb643d"></a>

### [`00b98720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98720.md) → [`00b987bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b987bc.md) FUN_00b987bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b97870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97870.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5bff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bff0.md)
- 新版 呼出元 2件 [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b9790c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b9790c.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0c0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.54% / 新版 86.54%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b987f0",
      "incomplete_value": false,
      "site": "00b98800",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
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
      "definition_site": "00b98810",
      "incomplete_value": false,
      "site": "00b9882c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:715:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98774",
      "incomplete_value": false,
      "site": "00b98790",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "definition_site": "00b987ec",
      "incomplete_value": false,
      "site": "00b98808",
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
            "const:93b:8"
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
      "unmatched:00b98724",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b98728",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9872c",
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
      "00b987c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b987c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b987c8",
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
- 00b98764 ["INT_ADD", "register:40f0:8", ["const:b98764:8", "const:4:8"]]
- 00b98764 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b98800 ["INT_ADD", "register:40f0:8", ["const:b98800:8", "const:4:8"]]
+ 00b98800 ["CALL", null, ["callee:00c590a0:8"]]
- 00b98790 ["INT_ADD", "register:40f0:8", ["const:b98790:8", "const:4:8"]]
- 00b98790 ["CALL", null, ["callee:00c58050:8"]]
+ 00b9882c ["INT_ADD", "register:40f0:8", ["const:b9882c:8", "const:4:8"]]
+ 00b9882c ["CALL", null, ["callee:00c58050:8"]]
- 00b98808 ["INT_ADD", "register:40f0:8", ["const:b98808:8", "const:4:8"]]
- 00b98808 ["CALL", null, ["callee:00c58050:8"]]
+ 00b988a4 ["INT_ADD", "register:40f0:8", ["const:b988a4:8", "const:4:8"]]
+ 00b988a4 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-dd86d7b8b28d2ef77b9472d6cf2ca277"></a>

### [`00b988c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b988c0.md) → [`00b9895c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9895c.md) FUN_00b9895c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7e490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e490.md) [`00b97aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97aa4.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5c000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c000.md)
- 新版 呼出元 2件 [`00b7e52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e52c.md) [`00b97b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97b40.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b98990",
      "incomplete_value": false,
      "site": "00b989a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b988f4",
      "incomplete_value": false,
      "site": "00b98904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b989b0",
      "incomplete_value": false,
      "site": "00b989cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:715:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98914",
      "incomplete_value": false,
      "site": "00b98930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "definition_site": "00b98a28",
      "incomplete_value": false,
      "site": "00b98a44",
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
            "const:96c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9898c",
      "incomplete_value": false,
      "site": "00b989a8",
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
            "const:93b:8"
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
      "unmatched:00b988f4",
      "PARAM",
      [
        "storage",
        "002a9a5a",
        null,
        null
      ]
    ],
    [
      "unmatched:00b98914",
      "PARAM",
      [
        "storage",
        "002b0771",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9898c",
      "PARAM",
      [
        "storage",
        "002b393b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b98990",
      "PARAM",
      [
        "storage",
        "002a9a89",
        null,
        null
      ]
    ],
    [
      "00b989b0",
      "PARAM",
      [
        "storage",
        "002b0715",
        null,
        null
      ]
    ],
    [
      "00b98a28",
      "PARAM",
      [
        "storage",
        "002b396c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98904 ["INT_ADD", "register:40f0:8", ["const:b98904:8", "const:4:8"]]
- 00b98904 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b989a0 ["INT_ADD", "register:40f0:8", ["const:b989a0:8", "const:4:8"]]
+ 00b989a0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b98930 ["INT_ADD", "register:40f0:8", ["const:b98930:8", "const:4:8"]]
- 00b98930 ["CALL", null, ["callee:00c58050:8"]]
+ 00b989cc ["INT_ADD", "register:40f0:8", ["const:b989cc:8", "const:4:8"]]
+ 00b989cc ["CALL", null, ["callee:00c58050:8"]]
- 00b989a8 ["INT_ADD", "register:40f0:8", ["const:b989a8:8", "const:4:8"]]
- 00b989a8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b98a44 ["INT_ADD", "register:40f0:8", ["const:b98a44:8", "const:4:8"]]
+ 00b98a44 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-dfb24708cf5d3cc1b94f15a7661d51d2"></a>

### [`00b98a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98a60.md) → [`00b98afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98afc.md) FUN_00b98afc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7e954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e954.md) [`00b97cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97cd4.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5c010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c010.md)
- 新版 呼出元 2件 [`00b7e9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e9f0.md) [`00b97d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97d70.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5c0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b98b30",
      "incomplete_value": false,
      "site": "00b98b40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98a94",
      "incomplete_value": false,
      "site": "00b98aa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:a5a:8"
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
      "definition_site": "00b98b50",
      "incomplete_value": false,
      "site": "00b98b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:715:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98ab4",
      "incomplete_value": false,
      "site": "00b98ad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:771:8"
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
      "definition_site": "00b98bc8",
      "incomplete_value": false,
      "site": "00b98be4",
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
            "const:96c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98b2c",
      "incomplete_value": false,
      "site": "00b98b48",
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
            "const:93b:8"
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
      "unmatched:00b98a64",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b98a68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b98a6c",
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
      "00b98b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b98b04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b98b08",
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
- 00b98aa4 ["INT_ADD", "register:40f0:8", ["const:b98aa4:8", "const:4:8"]]
- 00b98aa4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b98b40 ["INT_ADD", "register:40f0:8", ["const:b98b40:8", "const:4:8"]]
+ 00b98b40 ["CALL", null, ["callee:00c590a0:8"]]
- 00b98ad0 ["INT_ADD", "register:40f0:8", ["const:b98ad0:8", "const:4:8"]]
- 00b98ad0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b98b6c ["INT_ADD", "register:40f0:8", ["const:b98b6c:8", "const:4:8"]]
+ 00b98b6c ["CALL", null, ["callee:00c58050:8"]]
- 00b98b48 ["INT_ADD", "register:40f0:8", ["const:b98b48:8", "const:4:8"]]
- 00b98b48 ["CALL", null, ["callee:00c58050:8"]]
+ 00b98be4 ["INT_ADD", "register:40f0:8", ["const:b98be4:8", "const:4:8"]]
+ 00b98be4 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-eda8a4f9d2e30db0490084fd02eb8592"></a>

### [`00b98c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98c74.md) → [`00b98d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98d10.md) FUN_00b98d10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 70.97% / 新版 70.97%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98d34",
      "incomplete_value": true,
      "site": "00b98d44",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98c98",
      "incomplete_value": true,
      "site": "00b98ca8",
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
            "const:18:8"
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
      "definition_site": "00b98d38",
      "incomplete_value": true,
      "site": "00b98d48",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98c9c",
      "incomplete_value": true,
      "site": "00b98cac",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98d4c",
      "incomplete_value": true,
      "site": "00b98d4c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98cb0",
      "incomplete_value": true,
      "site": "00b98cb0",
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
            "const:40:8"
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
      "00b98d24",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b98d28",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00b98d44",
      "DATA",
      [
        "storage",
        "00c90a90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98d24",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98d28",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98d44",
      "DATA",
      [
        "storage",
        "00c90b60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98c88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c18:8"]]
- 00b98c88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98d24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ce8:8"]]
+ 00b98d24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98c8c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00b98c8c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98d28 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00b98d28 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98cbc ["INT_ADD", "register:40f0:8", ["const:b98cbc:8", "const:4:8"]]
- 00b98cbc ["CALL", null, ["callee:00c57f80:8"]]
+ 00b98d58 ["INT_ADD", "register:40f0:8", ["const:b98d58:8", "const:4:8"]]
+ 00b98d58 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d09afd167d1c8e7af5678a8b2ff2bba4"></a>

### [`00b98cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98cf0.md) → [`00b98d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98d8c.md) FUN_00b98d8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98db0",
      "incomplete_value": true,
      "site": "00b98db0",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98d14",
      "incomplete_value": true,
      "site": "00b98d14",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98db4",
      "incomplete_value": true,
      "site": "00b98db4",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98d18",
      "incomplete_value": true,
      "site": "00b98d18",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98dcc",
      "incomplete_value": true,
      "site": "00b98dcc",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98d30",
      "incomplete_value": true,
      "site": "00b98d30",
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
            "const:40:8"
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
      "00b98d9c",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b98db0",
      "DATA",
      [
        "storage",
        "00c90a90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98db4",
      "DATA",
      [
        "storage",
        "00c90ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98d9c",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98db0",
      "DATA",
      [
        "storage",
        "00c90b60",
        null,
        "pointer"
      ]
    ],
    [
      "00b98db4",
      "DATA",
      [
        "storage",
        "00c90bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98d00 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c18:8"]]
- 00b98d00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98d9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ce8:8"]]
+ 00b98d9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98d24 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:bc0:8"]]
- 00b98d24 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98dc0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c90:8"]]
+ 00b98dc0 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98d3c ["INT_ADD", "register:40f0:8", ["const:b98d3c:8", "const:4:8"]]
- 00b98d3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b98dd8 ["INT_ADD", "register:40f0:8", ["const:b98dd8:8", "const:4:8"]]
+ 00b98dd8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-18853f7493cdb90c667b6697abe3a581"></a>

### [`00b98d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98d68.md) → [`00b98e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98e04.md) FUN_00b98e04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98e28",
      "incomplete_value": true,
      "site": "00b98e28",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98d8c",
      "incomplete_value": true,
      "site": "00b98d8c",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98e2c",
      "incomplete_value": true,
      "site": "00b98e2c",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98d90",
      "incomplete_value": true,
      "site": "00b98d90",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98e44",
      "incomplete_value": true,
      "site": "00b98e44",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98da8",
      "incomplete_value": true,
      "site": "00b98da8",
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
            "const:40:8"
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
      "00b98e14",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b98e28",
      "DATA",
      [
        "storage",
        "00c90a90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98e2c",
      "DATA",
      [
        "storage",
        "00c90ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98e14",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98e28",
      "DATA",
      [
        "storage",
        "00c90b60",
        null,
        "pointer"
      ]
    ],
    [
      "00b98e2c",
      "DATA",
      [
        "storage",
        "00c90bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98d78 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c18:8"]]
- 00b98d78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98e14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ce8:8"]]
+ 00b98e14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98d9c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:bc0:8"]]
- 00b98d9c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98e38 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c90:8"]]
+ 00b98e38 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98db4 ["INT_ADD", "register:40f0:8", ["const:b98db4:8", "const:4:8"]]
- 00b98db4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b98e50 ["INT_ADD", "register:40f0:8", ["const:b98e50:8", "const:4:8"]]
+ 00b98e50 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6911ac90adba78dc030a7ad0a21b46a7"></a>

### [`00b98de8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98de8.md) → [`00b98e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98e84.md) FUN_00b98e84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98ea4",
      "incomplete_value": true,
      "site": "00b98eb0",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98e08",
      "incomplete_value": true,
      "site": "00b98e14",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98eb4",
      "incomplete_value": true,
      "site": "00b98eb4",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98e18",
      "incomplete_value": true,
      "site": "00b98e18",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98ecc",
      "incomplete_value": true,
      "site": "00b98ecc",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98e30",
      "incomplete_value": true,
      "site": "00b98e30",
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
            "const:40:8"
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
      "00b98e9c",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b98eb0",
      "DATA",
      [
        "storage",
        "00c90a90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98eb4",
      "DATA",
      [
        "storage",
        "00c90ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98e9c",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98eb0",
      "DATA",
      [
        "storage",
        "00c90b60",
        null,
        "pointer"
      ]
    ],
    [
      "00b98eb4",
      "DATA",
      [
        "storage",
        "00c90bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98e00 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c18:8"]]
- 00b98e00 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98e9c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ce8:8"]]
+ 00b98e9c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98e1c ["COPY", "register:4050:8", ["const:c9a000:8"]]
- 00b98e28 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:bc0:8"]]
- 00b98e28 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98ec4 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c90:8"]]
+ 00b98ec4 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-52f51fbd403c45ecd6619cc7e64a1236"></a>

### [`00b98e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98e68.md) → [`00b98f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98f04.md) FUN_00b98f04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98f24",
      "incomplete_value": true,
      "site": "00b98f30",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98e88",
      "incomplete_value": true,
      "site": "00b98e94",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98f34",
      "incomplete_value": true,
      "site": "00b98f34",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98e98",
      "incomplete_value": true,
      "site": "00b98e98",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98f4c",
      "incomplete_value": true,
      "site": "00b98f4c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b98eb0",
      "incomplete_value": true,
      "site": "00b98eb0",
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
            "const:40:8"
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
      "00b98f1c",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b98f30",
      "DATA",
      [
        "storage",
        "00c90a90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98f34",
      "DATA",
      [
        "storage",
        "00c90ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98f1c",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98f30",
      "DATA",
      [
        "storage",
        "00c90b60",
        null,
        "pointer"
      ]
    ],
    [
      "00b98f34",
      "DATA",
      [
        "storage",
        "00c90bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98e80 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c18:8"]]
- 00b98e80 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98f1c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ce8:8"]]
+ 00b98f1c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98e9c ["COPY", "register:4050:8", ["const:c9a000:8"]]
- 00b98ea8 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:bc0:8"]]
- 00b98ea8 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98f44 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c90:8"]]
+ 00b98f44 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b720bbb99e77b7bab21b4d85248f796c"></a>

### [`00b98ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98ef0.md) → [`00b98f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98f8c.md) FUN_00b98f8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98fa8",
      "incomplete_value": true,
      "site": "00b98fac",
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
      "definition_site": "00b98f0c",
      "incomplete_value": true,
      "site": "00b98f10",
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
      "definition_site": "00b98fc8",
      "incomplete_value": true,
      "site": "00b98fc8",
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
      "definition_site": "00b98f2c",
      "incomplete_value": true,
      "site": "00b98f2c",
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
      "00b98fa0",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00b98fac",
      "DATA",
      [
        "storage",
        "00c90c08",
        null,
        "pointer"
      ]
    ],
    [
      "00b98fc0",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98fa0",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98fac",
      "DATA",
      [
        "storage",
        "00c90cd8",
        null,
        "pointer"
      ]
    ],
    [
      "00b98fc0",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98f04 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00b98f04 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98fa0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00b98fa0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98f1c ["INT_ADD", "register:40f0:8", ["const:b98f1c:8", "const:4:8"]]
- 00b98f1c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b98fb8 ["INT_ADD", "register:40f0:8", ["const:b98fb8:8", "const:4:8"]]
+ 00b98fb8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b98f24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00b98f24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98fc0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00b98fc0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dd460b24f64ed36af71d354f81814a66"></a>

### [`00b98f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98f40.md) → [`00b98fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98fdc.md) FUN_00b98fdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b98ff8",
      "incomplete_value": true,
      "site": "00b98ffc",
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
      "definition_site": "00b98f5c",
      "incomplete_value": true,
      "site": "00b98f60",
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
      "definition_site": "00b9901c",
      "incomplete_value": true,
      "site": "00b9901c",
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
      "definition_site": "00b98f80",
      "incomplete_value": true,
      "site": "00b98f80",
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
      "00b98ff0",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00b98ffc",
      "DATA",
      [
        "storage",
        "00c90c08",
        null,
        "pointer"
      ]
    ],
    [
      "00b99010",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b98ff0",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00b98ffc",
      "DATA",
      [
        "storage",
        "00c90cd8",
        null,
        "pointer"
      ]
    ],
    [
      "00b99010",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b98f54 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00b98f54 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b98ff0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00b98ff0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b98f6c ["INT_ADD", "register:40f0:8", ["const:b98f6c:8", "const:4:8"]]
- 00b98f6c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b99008 ["INT_ADD", "register:40f0:8", ["const:b99008:8", "const:4:8"]]
+ 00b99008 ["CALL", null, ["callee:00c57f80:8"]]
- 00b98f74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00b98f74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b99010 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00b99010 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-aab09fee6acdce4d586431c09590f6b8"></a>

### [`00b99354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b99354.md) → [`00b993f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b993f0.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.81% / 新版 97.81%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b99540",
      "READ",
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
      "00b995dc",
      "READ",
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
- 00b99404 ["INT_ADD", "register:40f0:8", ["const:b99404:8", "const:4:8"]]
- 00b99404 ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00b994a0 ["INT_ADD", "register:40f0:8", ["const:b994a0:8", "const:4:8"]]
+ 00b994a0 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00b99480 ["INT_ADD", "register:40f0:8", ["const:b99480:8", "const:4:8"]]
- 00b99480 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00b9951c ["INT_ADD", "register:40f0:8", ["const:b9951c:8", "const:4:8"]]
+ 00b9951c ["CALL", null, ["callee:00c5bf40:8"]]
- 00b99520 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
+ 00b995bc ["CBRANCH", null, ["local:b34:8", "register:101:1"]]
~~~


<a id="compare-e2f97b214d2a8e8e39a00acb2bf8bf90"></a>

### [`00b9958c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b9958c.md) → [`00b99628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99628.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9958c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b99590",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b99638",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b99628",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9962c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b99638",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9958c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b9958c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b9958c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b99590 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b99590 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b99590 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b99590 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9959c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00b9959c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b99638 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00b99638 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0769b4ba33689a5cb62e1c68bac62589"></a>

### [`00b995cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b995cc.md) → [`00b99668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99668.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI9mbstate_tEEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-79f61243ae3d23d6eb2ca2bed335527c"></a>

### [`00b995e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b995e0.md) → [`00b9967c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b9967c.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-2a16b21d271104985304a72404af39e6"></a>

### [`00b995f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b995f0.md) → [`00b9968c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b9968c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5flushEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md) · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md) [`00c5d0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0f0.md)
- 新版 呼出元 1件 [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b99658",
      "incomplete_value": true,
      "site": "00b99664",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b99660",
      "incomplete_value": true,
      "site": "00b99664",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
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
      "unmatched:00b995f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b995f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b99610",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9976c"
      ]
    ]
  ],
  "added": [
    [
      "00b9968c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b99690",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b996ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9976c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b99664 ["INT_ADD", "register:40f0:8", ["const:b99664:8", "const:4:8"]]
- 00b99664 ["CALL", null, ["callee:00c58370:8"]]
+ 00b99700 ["INT_ADD", "register:40f0:8", ["const:b99700:8", "const:4:8"]]
+ 00b99700 ["CALL", null, ["callee:00c58370:8"]]
- 00b995f0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b995f0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b995f0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b995f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b995f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b995f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b995f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-54f1378c1c895db0f3f4b1d254e0535e"></a>

### [`00b996e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b996e0.md) → [`00b9977c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b9977c.md) _ZNKSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.31% / 新版 60.31%

優先判定に残った影響 `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9973c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99984"
      ]
    ],
    [
      "unmatched:00b99744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99848"
      ]
    ],
    [
      "unmatched:00b99754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9996c"
      ]
    ]
  ],
  "added": [
    [
      "00b997d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99984"
      ]
    ],
    [
      "00b997e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99848"
      ]
    ],
    [
      "00b997f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9996c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b99700 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:3:4"]]
- 00b99700 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b99700 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b99700 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b9979c ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:3:4"]]
+ 00b9979c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b9979c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b9979c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00b9970c ["BRANCH", null, ["local:b40:8"]]
+ 00b997a8 ["BRANCH", null, ["local:b36:8"]]
- 00b99734 ["INT_SUB", "register:40b0:8", ["register:40a8:8", "register:40b8:8"]]
~~~


<a id="compare-3ed4e6eee490a116e007cde98b798d82"></a>

### [`00b998ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b998ec.md) → [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) FUN_00b99988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b8a400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a400.md) [`00b8a538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a538.md) [`00b9b6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b6fc.md) [`00bb0074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0074.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 4件 [`00b8a49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a49c.md) [`00b8a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a5d4.md) [`00b9b798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b798.md) [`00bb0110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0110.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b99940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99a08"
      ]
    ],
    [
      "unmatched:00b99960",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99a88"
      ]
    ]
  ],
  "added": [
    [
      "00b999dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99a08"
      ]
    ],
    [
      "00b999fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99a88"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b99938 ["COPY", "tmp:0:8", ["const:1:8"]]
- 00b99938 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 00b99938 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 00b99938 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
- 00b9993c ["INT_RIGHT", "register:4050:8", ["register:4048:8", "const:3c:8"]]
- 00b99940 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b99940 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-959f59a9e0c866390c71fba5f7cc41ce"></a>

### [`00b999f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b999f4.md) → [`00b99a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99a90.md) _ZN11flexbuffers7Builder12CreateVectorEmmmbbPKNS0_5ValueE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8b0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c980.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.57% / 新版 91.57%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b99e24",
      "incomplete_value": true,
      "site": "00b99e30",
      "value": [
        "live",
        "register:40e0:8"
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
      "definition_site": "00b99e28",
      "incomplete_value": true,
      "site": "00b99e30",
      "value": [
        "live",
        "register:40d0:8"
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
      "unmatched:00b99a3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99af8"
      ]
    ],
    [
      "unmatched:00b99a50",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99afc"
      ]
    ],
    [
      "unmatched:00b99aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99b94"
      ]
    ]
  ],
  "added": [
    [
      "00b99ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99af8"
      ]
    ],
    [
      "00b99aec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99afc"
      ]
    ],
    [
      "00b99b3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b99b94"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b99e30 ["INT_ADD", "register:40f0:8", ["const:b99e30:8", "const:4:8"]]
- 00b99e30 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b99ecc ["INT_ADD", "register:40f0:8", ["const:b99ecc:8", "const:4:8"]]
+ 00b99ecc ["CALL", null, ["callee:00c580d0:8"]]
- 00b99a34 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b99a34 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b99ad0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b99ad0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b99a3c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b99a3c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-6ec6bc607eaf985d58f917574828dac9"></a>

### [`00b99f24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b99f24.md) → [`00b99fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99fc0.md) _ZNSt6__ndk16__sortIRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEvT0_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce10.md) · 呼出先 7件 [`00b9a818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9a818.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5cc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc10.md) [`00c5cdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cdd0.md) [`00c5ce10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce10.md)
- 新版 呼出元 1件 [`00c5cee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cee0.md) · 呼出先 7件 [`00b9a8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a8b4.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5cce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cce0.md) [`00c5cea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cea0.md) [`00c5cee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cee0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.81% / 新版 96.81%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b9a140",
      "incomplete_value": true,
      "site": "00b9a148",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9a1e0",
      "incomplete_value": true,
      "site": "00b9a1e4",
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
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9a144",
      "incomplete_value": true,
      "site": "00b9a148",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
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
                "register:40b8:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9a264",
      "incomplete_value": true,
      "site": "00b9a26c",
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
                "register:40a8:8"
              ]
            ]
          ],
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
                "register:40b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9a1c8",
      "incomplete_value": true,
      "site": "00b9a1d0",
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
              "LOAD"
            ]
          ],
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
                "register:40b8:8"
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
      "unmatched:00b9a174",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9a1e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b9a454",
      "DATA",
      [
        "storage",
        "0030e1cc",
        "switchD_00b9a3c4::switchdataD_0030e1cc",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b9a210",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b9a284",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b9a454",
      "DATA",
      [
        "storage",
        "0030e20c",
        "switchD_00b9a460::switchdataD_0030e20c",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9a148 ["INT_ADD", "register:40f0:8", ["const:b9a148:8", "const:4:8"]]
- 00b9a148 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a1e4 ["INT_ADD", "register:40f0:8", ["const:b9a1e4:8", "const:4:8"]]
+ 00b9a1e4 ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a1d0 ["INT_ADD", "register:40f0:8", ["const:b9a1d0:8", "const:4:8"]]
- 00b9a1d0 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a26c ["INT_ADD", "register:40f0:8", ["const:b9a26c:8", "const:4:8"]]
+ 00b9a26c ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a460 ["INT_ADD", "register:40f0:8", ["const:b9a460:8", "const:4:8"]]
- 00b9a460 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a4fc ["INT_ADD", "register:40f0:8", ["const:b9a4fc:8", "const:4:8"]]
+ 00b9a4fc ["CALL", null, ["callee:00c5b920:8"]]
~~~


<a id="compare-ac2351a131bffd7adbe7c4d104d50d2c"></a>

### [`00b9a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9a504.md) → [`00b9a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a5a0.md) _ZNSt6__ndk17__sort3IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEjT0_S9_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d090.md) · 呼出先 1件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 1件 [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9a5dc",
      "incomplete_value": true,
      "site": "00b9a5e4",
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
            "register:40d0:8"
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
      "unmatched:00b9a518",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9a634",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b920"
      ]
    ]
  ],
  "added": [
    [
      "00b9a5b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b9a6d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b920"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9a548 ["INT_ADD", "register:40f0:8", ["const:b9a548:8", "const:4:8"]]
- 00b9a548 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a5e4 ["INT_ADD", "register:40f0:8", ["const:b9a5e4:8", "const:4:8"]]
+ 00b9a5e4 ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a518 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9a518 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9a518 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b9a518 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9a51c ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b9a51c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b9a51c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b9a51c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-70b98b1adea9c208bc3c1756ef98e062"></a>

### [`00b9a6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9a6bc.md) → [`00b9a758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a758.md) _ZNSt6__ndk17__sort4IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEjT0_S9_S9_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0d0.md) · 呼出先 2件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5d090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d090.md)
- 新版 呼出元 1件 [`00c5d1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1a0.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.85% / 新版 98.85%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00b9a6f0 ["INT_ADD", "register:40f0:8", ["const:b9a6f0:8", "const:4:8"]]
- 00b9a6f0 ["CALL", null, ["callee:00c5d160:8"]]
+ 00b9a78c ["INT_ADD", "register:40f0:8", ["const:b9a78c:8", "const:4:8"]]
+ 00b9a78c ["CALL", null, ["callee:00c5d160:8"]]
- 00b9a714 ["INT_ADD", "register:40f0:8", ["const:b9a714:8", "const:4:8"]]
- 00b9a714 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a7b0 ["INT_ADD", "register:40f0:8", ["const:b9a7b0:8", "const:4:8"]]
+ 00b9a7b0 ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a768 ["INT_ADD", "register:40f0:8", ["const:b9a768:8", "const:4:8"]]
- 00b9a768 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a804 ["INT_ADD", "register:40f0:8", ["const:b9a804:8", "const:4:8"]]
+ 00b9a804 ["CALL", null, ["callee:00c5b920:8"]]
~~~


<a id="compare-a1b163bf290ea7d8305963ed3815e519"></a>

### [`00b9a818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9a818.md) → [`00b9a8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a8b4.md) FUN_00b9a8b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b99f24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b99f24.md) [`00b9aaf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9aaf8.md) · 呼出先 2件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5d0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0d0.md)
- 新版 呼出元 2件 [`00b99fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99fc0.md) [`00b9ab94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9ab94.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1a0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.68% / 新版 84.68%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9a9b4",
      "incomplete_value": true,
      "site": "00b9a9bc",
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
              "LOAD"
            ]
          ],
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
                "register:40b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9a918",
      "incomplete_value": true,
      "site": "00b9a920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "live",
            "register:4040:8"
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
    "new": {
      "definition_site": "00b9a9b8",
      "incomplete_value": true,
      "site": "00b9a9bc",
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
              "LOAD"
            ]
          ],
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
                "register:4098:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9a91c",
      "incomplete_value": true,
      "site": "00b9a920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "live",
            "register:4050:8"
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
      "definition_site": "00b9a96c",
      "incomplete_value": true,
      "site": "00b9a974",
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
              "LOAD"
            ]
          ],
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
                "register:4098:8"
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
      "unmatched:00b9a81c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9a820",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9a824",
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
      "00b9a8b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b9a8bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b9a8c0",
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
- 00b9a920 ["INT_ADD", "register:40f0:8", ["const:b9a920:8", "const:4:8"]]
- 00b9a920 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9a9bc ["INT_ADD", "register:40f0:8", ["const:b9a9bc:8", "const:4:8"]]
+ 00b9a9bc ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a974 ["INT_ADD", "register:40f0:8", ["const:b9a974:8", "const:4:8"]]
- 00b9a974 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9aa10 ["INT_ADD", "register:40f0:8", ["const:b9aa10:8", "const:4:8"]]
+ 00b9aa10 ["CALL", null, ["callee:00c5b920:8"]]
- 00b9a818 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-682fd078da68ee31ca617aaa279b0802"></a>

### [`00b9ad28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9ad28.md) → [`00b9adc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9adc4.md) _ZN11flexbuffers7Builder8WriteAnyERKNS0_5ValueEh

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c900.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5d080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d080.md)
- 新版 呼出元 1件 [`00c5c9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9d0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.72% / 新版 87.72%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9ad5c",
      "DATA",
      [
        "storage",
        "0030e1d8",
        "switchD_00b9ad64::switchdataD_0030e1d8",
        "byte"
      ]
    ],
    [
      "unmatched:00b9ade8",
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
      "00b9adf8",
      "DATA",
      [
        "storage",
        "0030e218",
        "switchD_00b9ae00::switchdataD_0030e218",
        "byte"
      ]
    ],
    [
      "00b9ae84",
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
- 00b9ad4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b9ad4c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b9ad4c ["CBRANCH", null, ["local:b10:8", "tmp:1:1"]]
+ 00b9ade8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b9ade8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b9ade8 ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
- 00b9ad54 ["COPY", "tmp:0:8", ["const:1d8:8"]]
- 00b9ad54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b9ad54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b9ad54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b9ad58 ["COPY", "register:4050:8", ["const:b9ad68:8"]]
~~~


<a id="compare-d9d5b6ea9df2be6ca0eb2ad9cc85d62a"></a>

### [`00b9ae0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9ae0c.md) → [`00b9aea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9aea8.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6insertENS_11__wrap_iterIPKhEEmRS5_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d070.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9ae1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9ae20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b9af40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9af24"
      ]
    ]
  ],
  "added": [
    [
      "00b9aeb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9aebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b9aee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9af24"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9ae1c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b9ae1c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b9ae1c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00b9ae1c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9ae20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9ae20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9ae20 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b9ae20 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9ae24 ["COPY", "tmp:0:8", ["const:50:8"]]
- 00b9ae24 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b9ae24 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b9ae24 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-d56fc9379b23dffb1515238665f6cd5a"></a>

### [`00b9b178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b178.md) → [`00b9b214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b214.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6insertIPKhEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIhNS_15iterator

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d080.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9b3ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9b484"
      ]
    ],
    [
      "unmatched:00b9b3dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9b464"
      ]
    ]
  ],
  "added": [
    [
      "00b9b448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9b484"
      ]
    ],
    [
      "00b9b478",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9b464"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9b22c ["INT_ADD", "register:40f0:8", ["const:b9b22c:8", "const:4:8"]]
- 00b9b22c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b9b2c8 ["INT_ADD", "register:40f0:8", ["const:b9b2c8:8", "const:4:8"]]
+ 00b9b2c8 ["CALL", null, ["callee:00c580d0:8"]]
- 00b9b250 ["INT_ADD", "register:40f0:8", ["const:b9b250:8", "const:4:8"]]
- 00b9b250 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b9b2ec ["INT_ADD", "register:40f0:8", ["const:b9b2ec:8", "const:4:8"]]
+ 00b9b2ec ["CALL", null, ["callee:00c57f60:8"]]
- 00b9b300 ["INT_ADD", "register:40f0:8", ["const:b9b300:8", "const:4:8"]]
- 00b9b300 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b9b39c ["INT_ADD", "register:40f0:8", ["const:b9b39c:8", "const:4:8"]]
+ 00b9b39c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-3b151d1c1505ab081eea8d76384a6911"></a>

### [`00b9b448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b448.md) → [`00b9b4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b4e4.md) _ZNSt6__ndk16vectorIN11flexbuffers7Builder5ValueENS_9allocatorIS3_EEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d010.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0e0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9b5b8",
      "incomplete_value": true,
      "site": "00b9b5c4",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "00b9b5bc",
      "incomplete_value": true,
      "site": "00b9b5c4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  }
]
~~~


~~~diff
- 00b9b528 ["INT_ADD", "register:40f0:8", ["const:b9b528:8", "const:4:8"]]
- 00b9b528 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b9b5c4 ["INT_ADD", "register:40f0:8", ["const:b9b5c4:8", "const:4:8"]]
+ 00b9b5c4 ["CALL", null, ["callee:00c580d0:8"]]
- 00b9b4b8 ["INT_ADD", "register:40f0:8", ["const:b9b4b8:8", "const:4:8"]]
- 00b9b4b8 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b9b554 ["INT_ADD", "register:40f0:8", ["const:b9b554:8", "const:4:8"]]
+ 00b9b554 ["CALL", null, ["callee:00c5b210:8"]]
- 00b9b4f4 ["INT_ADD", "register:40f0:8", ["const:b9b4f4:8", "const:4:8"]]
- 00b9b4f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b9b590 ["INT_ADD", "register:40f0:8", ["const:b9b590:8", "const:4:8"]]
+ 00b9b590 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-7bc762638001c0f5ee205e1dd837462b"></a>

### [`00b9b574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b574.md) → [`00b9b610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b610.md) _ZN11flexbuffers7Builder6StringEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8f0.md) · 呼出先 5件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b660.md) [`00c5c8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8a0.md) [`00c5cfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfc0.md)
- 新版 呼出元 1件 [`00c5c9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9c0.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md) [`00c5c970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c970.md) [`00c5d090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d090.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.80% / 新版 89.80%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9b638",
      "incomplete_value": false,
      "site": "00b9b650",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9b63c",
      "incomplete_value": false,
      "site": "00b9b650",
      "value": [
        "leaf",
        "const:5:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9b578",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b57c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b580",
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
      "00b9b614",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b9b618",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b9b61c",
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
- 00b9b5b4 ["INT_ADD", "register:40f0:8", ["const:b9b5b4:8", "const:4:8"]]
- 00b9b5b4 ["CALL", null, ["callee:00c5c970:8"]]
+ 00b9b650 ["INT_ADD", "register:40f0:8", ["const:b9b650:8", "const:4:8"]]
+ 00b9b650 ["CALL", null, ["callee:00c5c970:8"]]
- 00b9b574 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 00b9b578 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b9b578 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00b9b578 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00b9b578 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e96483980207def87e6221e42a22b403"></a>

### [`00b9b6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b6fc.md) → [`00b9b798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b798.md) _ZN11flexbuffers7Builder10CreateBlobEPKvmmNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8a0.md) · 呼出先 4件 [`00b998ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b998ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5d070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d070.md) [`00c5d080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d080.md)
- 新版 呼出元 1件 [`00c5c970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c970.md) · 呼出先 4件 [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.55% / 新版 91.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b9b7cc",
      "incomplete_value": true,
      "site": "00b9b7dc",
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
            "const:18:8"
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
      "unmatched:00b9b70c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b710",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b714",
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
      "00b9b7a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b9b7ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9b7b0",
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
- 00b9b740 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b9b740 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b9b7dc ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b9b7dc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b9b7dc ["INT_ADD", "register:40f0:8", ["const:b9b7dc:8", "const:4:8"]]
- 00b9b7dc ["CALL", null, ["callee:00b99988:8"]]
+ 00b9b878 ["INT_ADD", "register:40f0:8", ["const:b9b878:8", "const:4:8"]]
+ 00b9b878 ["CALL", null, ["callee:00b99988:8"]]
- 00b9b70c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b9b70c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b9b70c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b9b70c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-923dd01486ae3d18f7013bbe2918743a"></a>

### [`00b9b978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b978.md) → [`00b9ba14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9ba14.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetINS_6StringEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c400.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4d0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9ba6c",
      "incomplete_value": true,
      "site": "00b9ba74",
      "value": [
        "live",
        "register:40a0:8"
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
        "FALL_THROUGH",
        "00b9ba90"
      ],
      [
        "FALL_THROUGH",
        "00b9bb2c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b9bb30",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00b9ba84",
      "incomplete_value": true,
      "site": "00b9ba94",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4048:4"
          ],
          [
            "live",
            "register:4058:4"
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
      "unmatched:00b9b978",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b97c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9b980",
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
      "00b9ba14",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b9ba18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9ba1c",
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
- 00b9b9d8 ["INT_ADD", "register:40f0:8", ["const:b9b9d8:8", "const:4:8"]]
- 00b9b9d8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9ba74 ["INT_ADD", "register:40f0:8", ["const:b9ba74:8", "const:4:8"]]
+ 00b9ba74 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9ba94 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b9ba94 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b9ba94 ["COPY", "tmp:2:8", ["register:4048:8"]]
+ 00b9ba94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b9b978 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b9b978 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b9b978 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b9b978 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b46ca4e82b5b2c461292d2987f482896"></a>

### [`00b9baa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9baa8.md) → [`00b9bb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bb44.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6StringEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c370.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9baa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9baac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9bab0",
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
      "00b9bb44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b9bb48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9bb4c",
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
- 00b9baa8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b9baa8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b9baa8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b9baa8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b9baac ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b9baac ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b9baac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b9baac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9bab0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9bab0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9bab0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b9bab0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d5ed462045a8fe44f29c4738fe61919c"></a>

### [`00b9bbd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9bbd8.md) → [`00b9bc74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bc74.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection10SchemaFileEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c380.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c450.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9bc5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd14"
      ]
    ],
    [
      "unmatched:00b9bc74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd00"
      ]
    ],
    [
      "unmatched:00b9bcac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd5c"
      ]
    ]
  ],
  "added": [
    [
      "00b9bcf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd14"
      ]
    ],
    [
      "00b9bd10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd00"
      ]
    ],
    [
      "00b9bd48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bd5c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9bbec ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
- 00b9bbec ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00b9bc88 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
+ 00b9bc88 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00b9bc38 ["INT_ADD", "register:40f0:8", ["const:b9bc38:8", "const:4:8"]]
- 00b9bc38 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9bcd4 ["INT_ADD", "register:40f0:8", ["const:b9bcd4:8", "const:4:8"]]
+ 00b9bcd4 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9bc58 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b9bc58 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b9bc58 ["COPY", "tmp:2:8", ["register:4048:8"]]
- 00b9bc58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-a3dd5490efa332b25f7fb74053978efa"></a>

### [`00b9bd08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9bd08.md) → [`00b9bda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bda4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection7ServiceEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c3e0.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4b0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `unresolved_store_alignment` 1件

~~~diff
- 00b9bd1c ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
- 00b9bd1c ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00b9bdb8 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
+ 00b9bdb8 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 00b9bd68 ["INT_ADD", "register:40f0:8", ["const:b9bd68:8", "const:4:8"]]
- 00b9bd68 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9be04 ["INT_ADD", "register:40f0:8", ["const:b9be04:8", "const:4:8"]]
+ 00b9be04 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9bdbc ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b9bdbc ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00b9be58 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b9be58 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-3e9003eb4a5fb3aaee26c5a823b4ec2a"></a>

### [`00b9be38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9be38.md) → [`00b9bed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bed4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIN10reflection6ObjectEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c360.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9bebc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bf74"
      ]
    ]
  ],
  "added": [
    [
      "00b9bf58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9bf74"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9be8c ["CBRANCH", null, ["local:b6:8", "register:102:1"]]
+ 00b9bf28 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
- 00b9be98 ["INT_ADD", "register:40f0:8", ["const:b9be98:8", "const:4:8"]]
- 00b9be98 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9bf34 ["INT_ADD", "register:40f0:8", ["const:b9bf34:8", "const:4:8"]]
+ 00b9bf34 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9beb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:40:8"]]
- 00b9beb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-a9fcaea16b314563f30fc10f81c94dd1"></a>

### [`00b9bf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9bf68.md) → [`00b9c004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c004.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection4EnumEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c390.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c460.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9c03c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c0ec"
      ]
    ]
  ],
  "added": [
    [
      "00b9c0d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c0ec"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9bfc8 ["INT_ADD", "register:40f0:8", ["const:b9bfc8:8", "const:4:8"]]
- 00b9bfc8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9c064 ["INT_ADD", "register:40f0:8", ["const:b9c064:8", "const:4:8"]]
+ 00b9c064 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9c024 ["INT_ADD", "register:40f0:8", ["const:b9c024:8", "const:4:8"]]
- 00b9c024 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b9c0c0 ["INT_ADD", "register:40f0:8", ["const:b9c0c0:8", "const:4:8"]]
+ 00b9c0c0 ["CALL", null, ["callee:00c5c320:8"]]
- 00b9c038 ["INT_AND", "tmp:0:8", ["register:4048:8", "const:fffffff8:8"]]
- 00b9c038 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b9c038 ["INT_EQUAL", "register:108:1", ["tmp:0:8", "const:0:8"]]
- 00b9c038 ["COPY", "register:100:1", ["register:107:1"]]
~~~


<a id="compare-e093c857af6fb6b4a9037c684fb85ffe"></a>

### [`00b9c098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c098.md) → [`00b9c134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c134.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection6ObjectEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c3b0.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c480.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.26% / 新版 80.26%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9c0d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b9c138"
      ]
    ],
    [
      "unmatched:00b9c11c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b9c138"
      ]
    ],
    [
      "unmatched:00b9c134",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c1c0"
      ]
    ]
  ],
  "added": [
    [
      "00b9c174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c1d4"
      ]
    ],
    [
      "00b9c1b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c1d4"
      ]
    ],
    [
      "00b9c1d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c1c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9c0ac ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
- 00b9c0ac ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00b9c148 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
+ 00b9c148 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
- 00b9c0d8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 00b9c0ec ["CBRANCH", null, ["local:b6:8", "register:102:1"]]
+ 00b9c188 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
~~~


<a id="compare-188e72b2f4770bc5bda05ba5a6bf1eac"></a>

### [`00b9c1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c1c8.md) → [`00b9c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c264.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection8KeyValueEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c3f0.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4c0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9c2bc",
      "incomplete_value": true,
      "site": "00b9c2c4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b9c2a0",
      "incomplete_value": false,
      "site": "00b9c2a8",
      "value": [
        "leaf",
        "const:8:8"
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
      "unmatched:00b9c274",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c31c"
      ]
    ]
  ],
  "added": [
    [
      "00b9c310",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c31c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9c228 ["INT_ADD", "register:40f0:8", ["const:b9c228:8", "const:4:8"]]
- 00b9c228 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9c2c4 ["INT_ADD", "register:40f0:8", ["const:b9c2c4:8", "const:4:8"]]
+ 00b9c2c4 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9c2a8 ["INT_ADD", "register:40f0:8", ["const:b9c2a8:8", "const:4:8"]]
- 00b9c2a8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9c344 ["INT_ADD", "register:40f0:8", ["const:b9c344:8", "const:4:8"]]
+ 00b9c344 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9c1f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b9c1f0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b9c1f0 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
+ 00b9c28c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b9c28c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b9c28c ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
~~~


<a id="compare-ca92935e1ea5d5f84174dd8cb9ba98b6"></a>

### [`00b9c2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c2f8.md) → [`00b9c394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c394.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection5FieldEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c3a0.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c470.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9c37c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c434"
      ]
    ]
  ],
  "added": [
    [
      "00b9c418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c434"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9c338 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 00b9c3d4 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 00b9c358 ["INT_ADD", "register:40f0:8", ["const:b9c358:8", "const:4:8"]]
- 00b9c358 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9c3f4 ["INT_ADD", "register:40f0:8", ["const:b9c3f4:8", "const:4:8"]]
+ 00b9c3f4 ["CALL", null, ["callee:00c5c270:8"]]
- 00b9c37c ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-8025452235b224146eb5fda12b868935"></a>

### [`00b9c428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c428.md) → [`00b9c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c4c4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIN10reflection4TypeEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c350.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c420.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.79% / 新版 90.79%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9c428",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9c42c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9c430",
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
      "00b9c4c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b9c4c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9c4cc",
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
- 00b9c428 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b9c428 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b9c428 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b9c428 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b9c42c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b9c42c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b9c42c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b9c42c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9c430 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9c430 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9c430 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b9c430 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b1466c0c7a4be920db401b259e80bc76"></a>

### [`00b9c558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c558.md) → [`00b9c5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9c5f4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection7RPCCallEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c3d0.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4a0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9c6ac",
      "incomplete_value": true,
      "site": "00b9c6b0",
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
        "00b9c670"
      ],
      [
        "FALL_THROUGH",
        "00b9c70c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9c700",
      "incomplete_value": true,
      "site": "00b9c710",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4048:4"
          ],
          [
            "live",
            "register:4058:4"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b9c674",
      "value": [
        "live",
        "register:102:1"
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
      "unmatched:00b9c5dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c694"
      ]
    ],
    [
      "unmatched:00b9c5f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b9c5e4"
      ]
    ],
    [
      "unmatched:00b9c670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c714"
      ]
    ]
  ],
  "added": [
    [
      "00b9c678",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c694"
      ]
    ],
    [
      "00b9c690",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c680"
      ]
    ],
    [
      "00b9c70c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9c714"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9c614 ["INT_ADD", "register:40f0:8", ["const:b9c614:8", "const:4:8"]]
- 00b9c614 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b9c6b0 ["INT_ADD", "register:40f0:8", ["const:b9c6b0:8", "const:4:8"]]
+ 00b9c6b0 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b9c674 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b9c674 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b9c674 ["COPY", "tmp:2:8", ["register:4048:8"]]
+ 00b9c674 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b9c56c ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
- 00b9c56c ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
+ 00b9c608 ["INT_EQUAL", "tmp:0:1", ["register:40a8:4", "const:0:4"]]
+ 00b9c608 ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
~~~


<a id="compare-ec3a49912052656ddc351caf45172f6e"></a>

### [`00b9c990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9c990.md) → [`00b9ca2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9ca2c.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessI

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cac0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb90.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.20% / 新版 94.20%

優先判定に残った影響 `unresolved_branch_alignment` 2件

~~~diff
- 00b9c9ac ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00b9c9ac ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 00b9ca48 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00b9ca48 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00b9c9bc ["INT_RIGHT", "register:4058:8", ["register:4040:8", "const:1:8"]]
- 00b9c9c0 ["INT_AND", "tmp:0:4", ["register:4040:4", "const:1:4"]]
- 00b9c9c0 ["INT_SLESS", "register:107:1", ["tmp:0:4", "const:0:4"]]
- 00b9c9c0 ["INT_EQUAL", "register:108:1", ["tmp:0:4", "const:0:4"]]
- 00b9c9c0 ["COPY", "register:100:1", ["register:107:1"]]
~~~


<a id="compare-44da73d48012115b25224c5d193e4a25"></a>

### [`00b9cf70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9cf70.md) → [`00b9d00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d00c.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc70.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb40.md) [`00c5cd30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd30.md)
- 新版 呼出元 1件 [`00c5cd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd40.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) [`00c5ce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce00.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.34% / 新版 92.34%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 12件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9cf74",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9cf78",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9cf7c",
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
      "00b9d010",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b9d014",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b9d018",
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
- 00b9cf70 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00b9cf74 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b9cf74 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00b9cf74 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b9cf74 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9cf78 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b9cf78 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b9cf78 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b9cf78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bec708d0b161d6b17213c6e90fb6f03f"></a>

### [`00b9d31c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9d31c.md) → [`00b9d3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d3b8.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbd0.md) · 呼出先 4件 [`00b9dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9dd10.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbd0.md) [`00c5cd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd90.md)
- 新版 呼出元 1件 [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) · 呼出先 4件 [`00b9ddac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9ddac.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) [`00c5ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9d744",
      "incomplete_value": true,
      "site": "00b9d758",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00b9d748",
      "incomplete_value": true,
      "site": "00b9d758",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b9d740",
      "incomplete_value": true,
      "site": "00b9d758",
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
      "unmatched:00b9d320",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9d324",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9d328",
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
      "00b9d3bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b9d3c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b9d3c4",
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
- 00b9d6bc ["INT_ADD", "register:40f0:8", ["const:b9d6bc:8", "const:4:8"]]
- 00b9d6bc ["CALL", null, ["callee:00c5cca0:8"]]
+ 00b9d758 ["INT_ADD", "register:40f0:8", ["const:b9d758:8", "const:4:8"]]
+ 00b9d758 ["CALL", null, ["callee:00c5cca0:8"]]
- 00b9d31c ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 00b9d320 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b9d320 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00b9d320 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b9d320 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-dbb606be44ea3b184e5027ffec839b52"></a>

### [`00b9d744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9d744.md) → [`00b9d7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d7e0.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd30.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5ce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce00.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.09% / 新版 79.09%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b9d76c"
      ],
      [
        "FALL_THROUGH",
        "00b9d808"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b9d81c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00b9d764",
      "incomplete_value": true,
      "site": "00b9d780",
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
                "register:4008:8"
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
      "unmatched:00b9d768",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9d76c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9d978"
      ]
    ]
  ],
  "added": [
    [
      "00b9d804",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b9d808",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9d978"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9d768 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b9d768 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:8"]]
- 00b9d76c ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
- 00b9d798 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:38:8"]]
- 00b9d798 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3e227ab2a26f589775bdb525011d2fec"></a>

### [`00b9d8fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9d8fc.md) → [`00b9d998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d998.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6Offse

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd90.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5ccd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccd0.md)
- 新版 呼出元 1件 [`00c5ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce60.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cda0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.81% / 新版 97.81%

優先判定に残った影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9d90c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9d910",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9d914",
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
      "00b9d9a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b9d9ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b9d9b0",
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
- 00b9d90c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b9d90c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b9d90c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b9d90c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9d910 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b9d910 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b9d910 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00b9d910 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b9d914 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9d914 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9d914 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00b9d914 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-11673fdc828d5684d0e03accbc9bb448"></a>

### [`00b9ded8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9ded8.md) → [`00b9df74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9df74.md) _ZNK10reflection6Schema6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c970.md) · 呼出先 4件 [`00c5c920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c920.md) [`00c5c930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c930.md) [`00c5c960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c960.md) [`00c5c9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9a0.md)
- 新版 呼出元 1件 [`00c5ca40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca40.md) · 呼出先 4件 [`00c5c9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9f0.md) [`00c5ca00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca00.md) [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) [`00c5ca70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 76.94% / 新版 76.94%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 38件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9e7b8",
      "incomplete_value": true,
      "site": "00b9e7bc",
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
                "register:40b8:8"
              ],
              "INT_AND"
            ]
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9e71c",
      "incomplete_value": true,
      "site": "00b9e720",
      "value": [
        "INT_ADD",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9e7b4",
      "incomplete_value": true,
      "site": "00b9e7bc",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b9e22c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b9e238"
      ]
    ],
    [
      "unmatched:00b9e234",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e098"
      ]
    ],
    [
      "unmatched:00b9e244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e09c"
      ]
    ]
  ],
  "added": [
    [
      "00b9e2c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e2d4"
      ]
    ],
    [
      "00b9e2d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e098"
      ]
    ],
    [
      "00b9e2e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e09c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9e720 ["INT_ADD", "register:40f0:8", ["const:b9e720:8", "const:4:8"]]
- 00b9e720 ["CALL", null, ["callee:00c5c9f0:8"]]
+ 00b9e7bc ["INT_ADD", "register:40f0:8", ["const:b9e7bc:8", "const:4:8"]]
+ 00b9e7bc ["CALL", null, ["callee:00c5c9f0:8"]]
- 00b9e0b4 ["INT_ADD", "register:40f0:8", ["const:b9e0b4:8", "const:4:8"]]
- 00b9e0b4 ["CALL", null, ["callee:00c5ca30:8"]]
+ 00b9e150 ["INT_ADD", "register:40f0:8", ["const:b9e150:8", "const:4:8"]]
+ 00b9e150 ["CALL", null, ["callee:00c5ca30:8"]]
- 00b9e1e0 ["INT_ADD", "register:40f0:8", ["const:b9e1e0:8", "const:4:8"]]
- 00b9e1e0 ["CALL", null, ["callee:00c5ca00:8"]]
+ 00b9e27c ["INT_ADD", "register:40f0:8", ["const:b9e27c:8", "const:4:8"]]
+ 00b9e27c ["CALL", null, ["callee:00c5ca00:8"]]
~~~


<a id="compare-26464d5ee46e9919483f1a2aa96d963d"></a>

### [`00b9e750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9e/00b9e750.md) → [`00b9e7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9e/00b9e7ec.md) _ZNK10reflection6Object6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c960.md) · 呼出先 2件 [`00c5c950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c950.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) · 呼出先 2件 [`00c5ca20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca20.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `unresolved_branch_alignment` 22件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9e8dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e9ec"
      ]
    ],
    [
      "unmatched:00b9e98c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9ea44"
      ]
    ],
    [
      "unmatched:00b9e9bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e910"
      ]
    ]
  ],
  "added": [
    [
      "00b9e978",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e9ec"
      ]
    ],
    [
      "00b9ea28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9ea44"
      ]
    ],
    [
      "00b9ea58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9e910"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9e898 ["CBRANCH", null, ["local:b30:8", "register:101:1"]]
+ 00b9e934 ["CBRANCH", null, ["local:b31:8", "register:101:1"]]
- 00b9e8dc ["CBRANCH", null, ["local:b45:8", "register:101:1"]]
- 00b9e948 ["INT_EQUAL", "tmp:0:1", ["register:4080:4", "const:0:4"]]
- 00b9e948 ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
+ 00b9e9e4 ["INT_EQUAL", "tmp:0:1", ["register:4080:4", "const:0:4"]]
+ 00b9e9e4 ["CBRANCH", null, ["local:b32:8", "tmp:0:1"]]
~~~


<a id="compare-29d76ed057513ba58a745920955a5295"></a>

### [`00b9ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9e/00b9ef14.md) → [`00b9efb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9e/00b9efb0.md) _ZNK10reflection5Field6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c950.md) · 呼出先 2件 [`00c5c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c940.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca20.md) · 呼出先 2件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 79.15% / 新版 79.15%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 31件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9f1ec",
      "incomplete_value": true,
      "site": "00b9f1f0",
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
      "unmatched:00b9ef38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9efe0"
      ]
    ],
    [
      "unmatched:00b9efe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f0d0"
      ]
    ],
    [
      "unmatched:00b9efe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b9efd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9efe0"
      ]
    ],
    [
      "00b9f07c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f0d0"
      ]
    ],
    [
      "00b9f084",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9f154 ["INT_ADD", "register:40f0:8", ["const:b9f154:8", "const:4:8"]]
- 00b9f154 ["CALL", null, ["callee:00c5ca10:8"]]
+ 00b9f1f0 ["INT_ADD", "register:40f0:8", ["const:b9f1f0:8", "const:4:8"]]
+ 00b9f1f0 ["CALL", null, ["callee:00c5ca10:8"]]
- 00b9ef38 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
- 00b9ef40 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:4", "const:0:4"]]
- 00b9ef40 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
+ 00b9efdc ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:4", "const:0:4"]]
+ 00b9efdc ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
~~~


<a id="compare-788ec319626172b5132b46ccc658599c"></a>

### [`00b9f78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9f/00b9f78c.md) → [`00b9f828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9f/00b9f828.md) _ZNK10reflection4Type6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c940.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment

命令の説明率　旧版 84.80% / 新版 84.80%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b9fa10",
      "incomplete_value": false,
      "site": "00b9fa18",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b9f7c0"
      ],
      [
        "FALL_THROUGH",
        "00b9f85c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9f85c",
      "incomplete_value": true,
      "site": "00b9f878",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4048:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9f7c0",
      "incomplete_value": true,
      "site": "00b9f7dc",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
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
        "00b9f7c0"
      ],
      [
        "FALL_THROUGH",
        "00b9f85c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9f85c",
      "incomplete_value": true,
      "site": "00b9f878",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4048:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9f7c0",
      "incomplete_value": true,
      "site": "00b9f7dc",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
          ]
        ]
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
      "unmatched:00b9f79c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f844"
      ]
    ],
    [
      "00b9f99c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f920"
      ]
    ],
    [
      "unmatched:00b9f7e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f91c"
      ]
    ]
  ],
  "added": [
    [
      "00b9f838",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f844"
      ]
    ],
    [
      "00b9f85c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f920"
      ]
    ],
    [
      "00b9f87c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9f91c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9f878 ["INT_LESSEQUAL", "register:105:1", ["register:4078:8", "register:4070:8"]]
- 00b9f878 ["INT_SBORROW", "register:106:1", ["register:4070:8", "register:4078:8"]]
- 00b9f878 ["INT_SUB", "tmp:0:8", ["register:4070:8", "register:4078:8"]]
- 00b9f878 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b9f78c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00b9f78c ["LOAD", "register:4060:8", ["const:1b1:8", "tmp:0:8"]]
- 00b9f790 ["COPY", "register:4040:8", ["register:4000:8"]]
~~~


<a id="compare-090ef13a5751b7a6e7ed5d2754496a73"></a>

### [`00b9f980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9f/00b9f980.md) → [`00b9fa1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9f/00b9fa1c.md) _ZNK10reflection8KeyValue6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 89.81% / 新版 89.81%

優先判定に残った影響 `store_condition` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b9f9b0"
      ],
      [
        "FALL_THROUGH",
        "00b9fa4c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9fa4c",
      "incomplete_value": true,
      "site": "00b9fa68",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              [
                "live",
                "register:4060:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9f9b0",
      "incomplete_value": true,
      "site": "00b9f9cc",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              "INT_SUB"
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
        "00b9f9b0"
      ],
      [
        "FALL_THROUGH",
        "00b9fa4c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9fa4c",
      "incomplete_value": true,
      "site": "00b9fa68",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              [
                "live",
                "register:4060:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9f9b0",
      "incomplete_value": true,
      "site": "00b9f9cc",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
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
      "unmatched:00b9f9a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fc88"
      ]
    ],
    [
      "unmatched:00b9f9b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fc88"
      ]
    ],
    [
      "unmatched:00b9f9d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fb24"
      ]
    ]
  ],
  "added": [
    [
      "00b9fa40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fc88"
      ]
    ],
    [
      "00b9fa4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fc88"
      ]
    ],
    [
      "00b9fa6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fb24"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9f980 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00b9f980 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b9f984 ["INT_SUB", "register:4068:8", ["register:4000:8", "register:4048:8"]]
- 00b9f988 ["INT_AND", "tmp:0:8", ["register:4068:8", "const:3:8"]]
- 00b9f988 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b9f988 ["INT_EQUAL", "register:108:1", ["tmp:0:8", "const:0:8"]]
- 00b9f988 ["COPY", "register:100:1", ["register:107:1"]]
~~~


<a id="compare-a8e4fff58e68800c0322c7f1638496ea"></a>

### [`00b9fbf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9f/00b9fbf4.md) → [`00b9fc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9f/00b9fc90.md) _ZNK10reflection4Enum6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c930.md) · 呼出先 3件 [`00c5c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c940.md) [`00c5c980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c980.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca00.md) · 呼出先 3件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca50.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 82.52% / 新版 82.52%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba01c4",
      "incomplete_value": true,
      "site": "00ba01c8",
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
                "register:40b0:8"
              ],
              [
                "live",
                "register:4040:8"
              ]
            ]
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba0128",
      "incomplete_value": true,
      "site": "00ba012c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b9fc3c"
      ],
      [
        "FALL_THROUGH",
        "00b9fcd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9fcd8",
      "incomplete_value": true,
      "site": "00b9fcf4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9fc3c",
      "incomplete_value": true,
      "site": "00b9fc58",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
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
        "00b9fc3c"
      ],
      [
        "FALL_THROUGH",
        "00b9fcd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9fcd8",
      "incomplete_value": true,
      "site": "00b9fcf4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4068:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9fc3c",
      "incomplete_value": true,
      "site": "00b9fc58",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
          ]
        ]
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
      "unmatched:00b9fc18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fcc0"
      ]
    ],
    [
      "unmatched:00b9fc3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fdb4"
      ]
    ],
    [
      "unmatched:00b9fca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fdb4"
      ]
    ]
  ],
  "added": [
    [
      "00b9fcb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fcc0"
      ]
    ],
    [
      "00b9fcd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fdb4"
      ]
    ],
    [
      "00b9fd40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b9fdb4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9fcf4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b9fcf4 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
- 00ba012c ["INT_ADD", "register:40f0:8", ["const:ba012c:8", "const:4:8"]]
- 00ba012c ["CALL", null, ["callee:00c5ca80:8"]]
+ 00ba01c8 ["INT_ADD", "register:40f0:8", ["const:ba01c8:8", "const:4:8"]]
+ 00ba01c8 ["CALL", null, ["callee:00c5ca80:8"]]
- 00ba01c8 ["INT_LESSEQUAL", "register:105:1", ["register:4050:8", "register:4058:8"]]
- 00ba01c8 ["INT_SBORROW", "register:106:1", ["register:4058:8", "register:4050:8"]]
- 00ba01c8 ["INT_SUB", "tmp:0:8", ["register:4058:8", "register:4050:8"]]
- 00ba01c8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-b07f91e7d039bd941f65de8854a45c2d"></a>

### [`00ba0444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba0/00ba0444.md) → [`00ba04e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba0/00ba04e0.md) _ZNK10reflection7EnumVal6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c980.md) · 呼出先 2件 [`00c5c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c940.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca50.md) · 呼出先 2件 [`00c5ca10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca10.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.60% / 新版 95.60%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba0514",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0604"
      ]
    ],
    [
      "unmatched:00ba051c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0604"
      ]
    ],
    [
      "00ba0600",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba0580"
      ]
    ]
  ],
  "added": [
    [
      "00ba05b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0604"
      ]
    ],
    [
      "00ba05b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0604"
      ]
    ],
    [
      "00ba0600",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba061c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba0454 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00ba0454 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00ba0454 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00ba0454 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00ba046c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00ba0508 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
- 00ba0474 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00ba0474 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 00ba0510 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00ba0510 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
~~~


<a id="compare-80ae76922caa499f54a1d6e248b0382c"></a>

### [`00ba0998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba0/00ba0998.md) → [`00ba0a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba0/00ba0a34.md) _ZNK10reflection7Service6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9a0.md) · 呼出先 2件 [`00c5c990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c990.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca70.md) · 呼出先 2件 [`00c5ca60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca60.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 71.16% / 新版 71.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 38件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba0e20",
      "incomplete_value": true,
      "site": "00ba0e24",
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
                "register:40c0:8"
              ],
              "INT_AND"
            ]
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba0d84",
      "incomplete_value": true,
      "site": "00ba0d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
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
      "unmatched:00ba0a7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0b34"
      ]
    ],
    [
      "unmatched:00ba0c64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0cd4"
      ]
    ],
    [
      "unmatched:00ba0c84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0d78"
      ]
    ]
  ],
  "added": [
    [
      "00ba0b18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0b34"
      ]
    ],
    [
      "00ba0d00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0cd4"
      ]
    ],
    [
      "00ba0d20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba0d78"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba0d88 ["INT_ADD", "register:40f0:8", ["const:ba0d88:8", "const:4:8"]]
- 00ba0d88 ["CALL", null, ["callee:00c5ca80:8"]]
+ 00ba0e24 ["INT_ADD", "register:40f0:8", ["const:ba0e24:8", "const:4:8"]]
+ 00ba0e24 ["CALL", null, ["callee:00c5ca80:8"]]
- 00ba0a78 ["INT_AND", "tmp:0:8", ["register:4078:8", "const:3:8"]]
- 00ba0a78 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00ba0a78 ["INT_EQUAL", "register:108:1", ["tmp:0:8", "const:0:8"]]
- 00ba0a78 ["COPY", "register:100:1", ["register:107:1"]]
- 00ba0a7c ["CBRANCH", null, ["local:b20:8", "register:101:1"]]
~~~


<a id="compare-29eb12986de5f79aaa7fd0459ebca2de"></a>

### [`00ba1050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1050.md) → [`00ba10ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba10ec.md) _ZNK10reflection7RPCCall6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c990.md) · 呼出先 2件 [`00c5c960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c960.md) [`00c5c9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5ca60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca60.md) · 呼出先 2件 [`00c5ca30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca30.md) [`00c5ca80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.59% / 新版 81.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 22件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba1340",
      "incomplete_value": true,
      "site": "00ba1344",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba152c",
      "incomplete_value": true,
      "site": "00ba1530",
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
                "register:40b0:8"
              ],
              "INT_AND"
            ]
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1490",
      "incomplete_value": true,
      "site": "00ba1494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "LOAD"
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
      "unmatched:00ba1054",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba1058",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba105c",
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
      "00ba10f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba10f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba10f8",
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
- 00ba1344 ["INT_ADD", "register:40f0:8", ["const:ba1344:8", "const:4:8"]]
- 00ba1344 ["CALL", null, ["callee:00c5ca30:8"]]
+ 00ba13e0 ["INT_ADD", "register:40f0:8", ["const:ba13e0:8", "const:4:8"]]
+ 00ba13e0 ["CALL", null, ["callee:00c5ca30:8"]]
- 00ba1494 ["INT_ADD", "register:40f0:8", ["const:ba1494:8", "const:4:8"]]
- 00ba1494 ["CALL", null, ["callee:00c5ca80:8"]]
+ 00ba1530 ["INT_ADD", "register:40f0:8", ["const:ba1530:8", "const:4:8"]]
+ 00ba1530 ["CALL", null, ["callee:00c5ca80:8"]]
- 00ba1050 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
~~~


<a id="compare-ed2ca9826b373d423594e3481c00618a"></a>

### [`00ba1698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1698.md) → [`00ba1734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1734.md) _ZNK10reflection10SchemaFile6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c920.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5c9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9f0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.45% / 新版 98.45%

アドレスに依存する影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba183c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba18f4"
      ]
    ],
    [
      "unmatched:00ba187c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba1a28"
      ]
    ],
    [
      "unmatched:00ba18ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba1958"
      ]
    ]
  ],
  "added": [
    [
      "00ba18d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba18f4"
      ]
    ],
    [
      "00ba1918",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba1a28"
      ]
    ],
    [
      "00ba1948",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba1958"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba16bc ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba16bc ["CBRANCH", null, ["local:b69:8", "tmp:0:1"]]
+ 00ba1758 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00ba1758 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
- 00ba16c8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba16c8 ["CBRANCH", null, ["local:b69:8", "tmp:0:1"]]
+ 00ba1764 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00ba1764 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
- 00ba1730 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba1730 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00ba1730 ["CBRANCH", null, ["local:b69:8", "tmp:1:1"]]
+ 00ba17cc ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00ba17cc ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00ba17cc ["CBRANCH", null, ["local:b67:8", "tmp:1:1"]]
~~~


<a id="compare-85d08b7ce0ff19906bf0dab3bc3a77b2"></a>

### [`00ba1abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1abc.md) → [`00ba1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1b58.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c584d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584d0.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c585a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585a0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.58% / 新版 96.58%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba1bcc",
      "incomplete_value": true,
      "site": "00ba1bd4",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1b30",
      "incomplete_value": true,
      "site": "00ba1b38",
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
                "const:838:8"
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
      "definition_site": "00ba1c10",
      "incomplete_value": true,
      "site": "00ba1c18",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1b74",
      "incomplete_value": true,
      "site": "00ba1b7c",
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
                "const:c30:8"
              ]
            ]
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
      "definition_site": "00ba1ce8",
      "incomplete_value": true,
      "site": "00ba1cf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
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
      "definition_site": "00ba1c4c",
      "incomplete_value": true,
      "site": "00ba1c58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
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
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00ba1bcc",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00ba1bcc",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba1c10",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00ba1bcc",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00ba1bcc",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba1c10",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba1b38 ["INT_ADD", "register:40f0:8", ["const:ba1b38:8", "const:4:8"]]
- 00ba1b38 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1bd4 ["INT_ADD", "register:40f0:8", ["const:ba1bd4:8", "const:4:8"]]
+ 00ba1bd4 ["CALL", null, ["callee:00c58350:8"]]
- 00ba1b7c ["INT_ADD", "register:40f0:8", ["const:ba1b7c:8", "const:4:8"]]
- 00ba1b7c ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1c18 ["INT_ADD", "register:40f0:8", ["const:ba1c18:8", "const:4:8"]]
+ 00ba1c18 ["CALL", null, ["callee:00c58350:8"]]
- 00ba1c18 ["INT_ADD", "register:40f0:8", ["const:ba1c18:8", "const:4:8"]]
- 00ba1c18 ["CALL", null, ["callee:00c5d1c0:8"]]
+ 00ba1cb4 ["INT_ADD", "register:40f0:8", ["const:ba1cb4:8", "const:4:8"]]
+ 00ba1cb4 ["CALL", null, ["callee:00c5d1c0:8"]]
~~~


<a id="compare-94fb2f954d83629d6ca7ba354c85e3f3"></a>

### [`00ba1c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1c90.md) → [`00ba1d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1d2c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c58210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58210.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c582e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582e0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.58% / 新版 93.58%

優先判定に残った影響 `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba1d94",
      "incomplete_value": true,
      "site": "00ba1d9c",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1cf8",
      "incomplete_value": true,
      "site": "00ba1d00",
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
                "const:838:8"
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
      "definition_site": "00ba1dd8",
      "incomplete_value": true,
      "site": "00ba1de0",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1d3c",
      "incomplete_value": true,
      "site": "00ba1d44",
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
                "const:c30:8"
              ]
            ]
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
      "unmatched:00ba1ca0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba1ca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba1cb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00ba1d3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba1d40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00ba1d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba1d00 ["INT_ADD", "register:40f0:8", ["const:ba1d00:8", "const:4:8"]]
- 00ba1d00 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1d9c ["INT_ADD", "register:40f0:8", ["const:ba1d9c:8", "const:4:8"]]
+ 00ba1d9c ["CALL", null, ["callee:00c58350:8"]]
- 00ba1d44 ["INT_ADD", "register:40f0:8", ["const:ba1d44:8", "const:4:8"]]
- 00ba1d44 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1de0 ["INT_ADD", "register:40f0:8", ["const:ba1de0:8", "const:4:8"]]
+ 00ba1de0 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1d44 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 00ba1d44 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00ba1d44 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00ba1d44 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b53c38859aec2f40baa9ef9eafba79cc"></a>

### [`00ba1e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1e44.md) → [`00ba1ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1ee0.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c58220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58220.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c582f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582f0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba1f48",
      "incomplete_value": true,
      "site": "00ba1f50",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1eac",
      "incomplete_value": true,
      "site": "00ba1eb4",
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
                "const:838:8"
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
      "definition_site": "00ba1f8c",
      "incomplete_value": true,
      "site": "00ba1f94",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba1ef0",
      "incomplete_value": true,
      "site": "00ba1ef8",
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
                "const:c30:8"
              ]
            ]
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
      "00ba1f48",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00ba1f48",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba1f8c",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00ba1f48",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00ba1f48",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba1f8c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba1eb4 ["INT_ADD", "register:40f0:8", ["const:ba1eb4:8", "const:4:8"]]
- 00ba1eb4 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1f50 ["INT_ADD", "register:40f0:8", ["const:ba1f50:8", "const:4:8"]]
+ 00ba1f50 ["CALL", null, ["callee:00c58350:8"]]
- 00ba1ef8 ["INT_ADD", "register:40f0:8", ["const:ba1ef8:8", "const:4:8"]]
- 00ba1ef8 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba1f94 ["INT_ADD", "register:40f0:8", ["const:ba1f94:8", "const:4:8"]]
+ 00ba1f94 ["CALL", null, ["callee:00c58350:8"]]
- 00ba1e80 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00ba1e80 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00ba1f1c ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00ba1f1c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-3323dd0fefbe76ec3cb6c65da7c8ad5b"></a>

### [`00ba1ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba1ff8.md) → [`00ba2094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2094.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c58200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58200.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c582d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582d0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.25% / 新版 97.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba20fc",
      "incomplete_value": true,
      "site": "00ba2104",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba2060",
      "incomplete_value": true,
      "site": "00ba2068",
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
                "const:838:8"
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
      "definition_site": "00ba2140",
      "incomplete_value": true,
      "site": "00ba2148",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba20a4",
      "incomplete_value": true,
      "site": "00ba20ac",
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
                "const:c30:8"
              ]
            ]
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
      "unmatched:00ba2020",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00ba20fc",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00ba20fc",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00ba20bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00ba20fc",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00ba20fc",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba2068 ["INT_ADD", "register:40f0:8", ["const:ba2068:8", "const:4:8"]]
- 00ba2068 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba2104 ["INT_ADD", "register:40f0:8", ["const:ba2104:8", "const:4:8"]]
+ 00ba2104 ["CALL", null, ["callee:00c58350:8"]]
- 00ba20ac ["INT_ADD", "register:40f0:8", ["const:ba20ac:8", "const:4:8"]]
- 00ba20ac ["CALL", null, ["callee:00c58350:8"]]
+ 00ba2148 ["INT_ADD", "register:40f0:8", ["const:ba2148:8", "const:4:8"]]
+ 00ba2148 ["CALL", null, ["callee:00c58350:8"]]
- 00ba2020 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00ba2020 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-471f60c0bb38616d88c7a57289c54f13"></a>

### [`00ba21ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba21ac.md) → [`00ba2248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2248.md) _ZN11flatbuffers15vector_downwardIjE10reallocateEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5be50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be50.md)
- 新版 呼出元 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.67% / 新版 94.67%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba223c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00ba22d8",
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
- 00ba2214 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00ba2214 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00ba22b0 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00ba22b0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00ba2230 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:20:8"]]
- 00ba2230 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00ba2234 ["COPY", "register:4020:8", ["register:40a0:8"]]
~~~


<a id="compare-7db364efe5c018dacd40a3493a8c5c95"></a>

### [`00ba22d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba22d8.md) → [`00ba2374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2374.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEEvT0_S

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb10.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb10.md) [`00c5cba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cba0.md) [`00c5cc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc40.md)
- 新版 呼出元 1件 [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) [`00c5cd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd10.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 82.74% / 新版 82.74%

優先判定に残った影響 `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba2518",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba264c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2758"
      ]
    ],
    [
      "unmatched:00ba267c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2740"
      ]
    ]
  ],
  "added": [
    [
      "00ba25b4",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba26e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2758"
      ]
    ],
    [
      "00ba2718",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2740"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba2300 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba2300 ["CBRANCH", null, ["local:b53:8", "tmp:0:1"]]
+ 00ba239c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00ba239c ["CBRANCH", null, ["local:b54:8", "tmp:0:1"]]
- 00ba230c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00ba230c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00ba23a8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00ba23a8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00ba2374 ["INT_ADD", "register:40f0:8", ["const:ba2374:8", "const:4:8"]]
- 00ba2374 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba2410 ["INT_ADD", "register:40f0:8", ["const:ba2410:8", "const:4:8"]]
+ 00ba2410 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-3cf677aae97af683dddc74a94b726b39"></a>

### [`00ba27a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba27a4.md) → [`00ba2840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2840.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc40.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb10.md) [`00c5cd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd00.md)
- 新版 呼出元 1件 [`00c5cd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd10.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbe0.md) [`00c5cdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdd0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 80.43% / 新版 80.43%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba2910",
      "incomplete_value": true,
      "site": "00ba2928",
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
            "register:40c0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba2914",
      "incomplete_value": true,
      "site": "00ba2928",
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
            "register:40d0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba29c0",
      "incomplete_value": true,
      "site": "00ba29c4",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "old": {
      "definition_site": "00ba2924",
      "incomplete_value": true,
      "site": "00ba2928",
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
            "register:40c0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba27e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2894"
      ]
    ],
    [
      "00ba29e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba2968"
      ]
    ],
    [
      "unmatched:00ba295c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2a94"
      ]
    ]
  ],
  "added": [
    [
      "00ba287c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2894"
      ]
    ],
    [
      "00ba29e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2a04"
      ]
    ],
    [
      "00ba29f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba2a94"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba2928 ["INT_ADD", "register:40f0:8", ["const:ba2928:8", "const:4:8"]]
- 00ba2928 ["CALL", null, ["callee:00c5cbe0:8"]]
+ 00ba29c4 ["INT_ADD", "register:40f0:8", ["const:ba29c4:8", "const:4:8"]]
+ 00ba29c4 ["CALL", null, ["callee:00c5cbe0:8"]]
- 00ba27c4 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 00ba27c4 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 00ba2860 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 00ba2860 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00ba27e0 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-fcb775fc72e264ce5a18e52727e1f713"></a>

### [`00ba2f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba2f78.md) → [`00ba3014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba3014.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd00.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdd0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.73% / 新版 92.73%

~~~diff
- 00ba2fa0 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 00ba303c ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00ba2fbc ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 00ba3058 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00ba3028 ["INT_ADD", "register:40f0:8", ["const:ba3028:8", "const:4:8"]]
- 00ba3028 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba30c4 ["INT_ADD", "register:40f0:8", ["const:ba30c4:8", "const:4:8"]]
+ 00ba30c4 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-d08481a67c4307eac708d5ee5b7bb6f9"></a>

### [`00ba3130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3130.md) → [`00ba31cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba31cc.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd60.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cca0.md)
- 新版 呼出元 1件 [`00c5ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce30.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 83.06% / 新版 83.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba31b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba3268"
      ]
    ]
  ],
  "added": [
    [
      "00ba3250",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba3268"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba3180 ["CBRANCH", null, ["local:b29:8", "register:101:1"]]
+ 00ba321c ["CBRANCH", null, ["local:b28:8", "register:101:1"]]
- 00ba31b0 ["INT_LESSEQUAL", "register:105:1", ["register:40d0:8", "register:4050:8"]]
- 00ba31b0 ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:40d0:8"]]
- 00ba31b0 ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:40d0:8"]]
- 00ba31b0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00ba31b4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba31b4 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00ba31b4 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
~~~


<a id="compare-d5ca2e5d59ffefee4f5b476498a51080"></a>

### [`00ba340c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba340c.md) → [`00ba34a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba34a8.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EES

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cca0.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd70.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba3464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba35c4"
      ]
    ]
  ],
  "added": [
    [
      "00ba3500",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba35c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba342c ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00ba34c8 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
- 00ba3450 ["BRANCH", null, ["local:b10:8"]]
+ 00ba34ec ["BRANCH", null, ["local:b12:8"]]
- 00ba3464 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
~~~


<a id="compare-a56b7ee489e264f0c75b4ef1c81313b4"></a>

### [`00ba3544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3544.md) → [`00ba35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba35e0.md) FUN_00ba35e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00ba2b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba2b50.md) · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00ba2bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2bec.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.81% / 新版 72.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 11件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba369c",
      "incomplete_value": true,
      "site": "00ba36a0",
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
      "definition_site": "00ba36c4",
      "incomplete_value": true,
      "site": "00ba36cc",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:4010:8"
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
      "unmatched:00ba3564",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba368c"
      ]
    ],
    [
      "unmatched:00ba3588",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba36dc"
      ]
    ],
    [
      "unmatched:00ba35a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba3664"
      ]
    ]
  ],
  "added": [
    [
      "00ba3600",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba368c"
      ]
    ],
    [
      "00ba3624",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba36dc"
      ]
    ],
    [
      "00ba3640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba3664"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba3604 ["INT_ADD", "register:40f0:8", ["const:ba3604:8", "const:4:8"]]
- 00ba3604 ["CALL", null, ["callee:00c58010:8"]]
+ 00ba36a0 ["INT_ADD", "register:40f0:8", ["const:ba36a0:8", "const:4:8"]]
+ 00ba36a0 ["CALL", null, ["callee:00c58010:8"]]
- 00ba3630 ["INT_ADD", "register:40f0:8", ["const:ba3630:8", "const:4:8"]]
- 00ba3630 ["CALL", null, ["callee:00c58010:8"]]
+ 00ba36cc ["INT_ADD", "register:40f0:8", ["const:ba36cc:8", "const:4:8"]]
+ 00ba36cc ["CALL", null, ["callee:00c58010:8"]]
- 00ba36a0 ["INT_LESSEQUAL", "register:105:1", ["register:4098:8", "register:4050:8"]]
- 00ba36a0 ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4098:8"]]
- 00ba36a0 ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4098:8"]]
- 00ba36a0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-b6b02de01b850c536a1dd33a9e146002"></a>

### [`00ba370c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba370c.md) → [`00ba37a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba37a8.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEEEvT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb20.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb20.md) [`00c5cbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbb0.md) [`00c5cc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc50.md)
- 新版 呼出元 1件 [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) [`00c5cd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.52% / 新版 63.52%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 2件, `unresolved_branch_alignment` 13件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba3990",
      "incomplete_value": true,
      "site": "00ba3998",
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
      "definition_site": "00ba38f4",
      "incomplete_value": true,
      "site": "00ba38fc",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba3988",
      "incomplete_value": true,
      "site": "00ba3998",
      "value": [
        "live",
        "register:40c8:8"
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
      "definition_site": "00ba3994",
      "incomplete_value": true,
      "site": "00ba3998",
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
    "old": {
      "definition_site": "00ba38f8",
      "incomplete_value": true,
      "site": "00ba38fc",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 2,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba371c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3720",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3724",
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
      "00ba37b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba37bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba37c0",
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
+ 00ba37f8 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 00ba37f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00ba37f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00ba37f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00ba3894 ["INT_ADD", "register:40f0:8", ["const:ba3894:8", "const:4:8"]]
- 00ba3894 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba3930 ["INT_ADD", "register:40f0:8", ["const:ba3930:8", "const:4:8"]]
+ 00ba3930 ["CALL", null, ["callee:00c58120:8"]]
- 00ba38fc ["INT_ADD", "register:40f0:8", ["const:ba38fc:8", "const:4:8"]]
- 00ba38fc ["CALL", null, ["callee:00c5cbf0:8"]]
+ 00ba3998 ["INT_ADD", "register:40f0:8", ["const:ba3998:8", "const:4:8"]]
+ 00ba3998 ["CALL", null, ["callee:00c5cbf0:8"]]
~~~


<a id="compare-c8509169fe17743b03c9ac605b9451ec"></a>

### [`00ba3bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3bd8.md) → [`00ba3c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba3c74.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc50.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb20.md) [`00c5cd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd10.md)
- 新版 呼出元 1件 [`00c5cd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd20.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbf0.md) [`00c5cde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cde0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.94% / 新版 68.94%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba3dd4",
      "incomplete_value": true,
      "site": "00ba3ddc",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba3dd8",
      "incomplete_value": true,
      "site": "00ba3ddc",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 6
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba3df0",
      "incomplete_value": true,
      "site": "00ba3df8",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:00ba3bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3be4",
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
      "00ba3c78",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba3c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba3c80",
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
- 00ba3d40 ["INT_ADD", "register:40f0:8", ["const:ba3d40:8", "const:4:8"]]
- 00ba3d40 ["CALL", null, ["callee:00c5cbf0:8"]]
+ 00ba3ddc ["INT_ADD", "register:40f0:8", ["const:ba3ddc:8", "const:4:8"]]
+ 00ba3ddc ["CALL", null, ["callee:00c5cbf0:8"]]
- 00ba3d5c ["INT_ADD", "register:40f0:8", ["const:ba3d5c:8", "const:4:8"]]
- 00ba3d5c ["CALL", null, ["callee:00c5cbf0:8"]]
+ 00ba3df8 ["INT_ADD", "register:40f0:8", ["const:ba3df8:8", "const:4:8"]]
+ 00ba3df8 ["CALL", null, ["callee:00c5cbf0:8"]]
- 00ba3ddc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00ba3ddc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00ba3ddc ["INT_ZEXT", "register:4050:8", ["tmp:1:4"]]
~~~


<a id="compare-c7d5d499e96b31d1178fb6399600089b"></a>

### [`00ba3f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3f84.md) → [`00ba4020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4020.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EEEEvT

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbb0.md) · 呼出先 4件 [`00ba4978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba4978.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbb0.md) [`00c5cd70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd70.md)
- 新版 呼出元 1件 [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) · 呼出先 4件 [`00ba4a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4a14.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc80.md) [`00c5ce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.18% / 新版 72.18%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba438c",
      "incomplete_value": true,
      "site": "00ba43a0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba43a8",
      "incomplete_value": true,
      "site": "00ba43c0",
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba43a8",
      "incomplete_value": true,
      "site": "00ba43c0",
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
    "ordinal": 5,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba3f94",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3f98",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba3f9c",
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
      "00ba4030",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba4034",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba4038",
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
- 00ba4244 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00ba4244 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 00ba42e0 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00ba42e0 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 00ba4304 ["INT_ADD", "register:40f0:8", ["const:ba4304:8", "const:4:8"]]
- 00ba4304 ["CALL", null, ["callee:00c5cc80:8"]]
+ 00ba43a0 ["INT_ADD", "register:40f0:8", ["const:ba43a0:8", "const:4:8"]]
+ 00ba43a0 ["CALL", null, ["callee:00c5cc80:8"]]
- 00ba4324 ["INT_ADD", "register:40f0:8", ["const:ba4324:8", "const:4:8"]]
- 00ba4324 ["CALL", null, ["callee:00c5cc80:8"]]
+ 00ba43c0 ["INT_ADD", "register:40f0:8", ["const:ba43c0:8", "const:4:8"]]
+ 00ba43c0 ["CALL", null, ["callee:00c5cc80:8"]]
~~~


<a id="compare-27531f859949574b4352bb3db924ebec"></a>

### [`00ba43ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba43ac.md) → [`00ba4448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4448.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd10.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cde0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba4478",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45bc"
      ]
    ],
    [
      "unmatched:00ba4488",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45b0"
      ]
    ],
    [
      "00ba4514",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45b0"
      ]
    ]
  ],
  "added": [
    [
      "00ba4514",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45bc"
      ]
    ],
    [
      "00ba4524",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45b0"
      ]
    ],
    [
      "00ba459c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba45b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba43d4 ["CBRANCH", null, ["local:b23:8", "register:101:1"]]
+ 00ba4470 ["CBRANCH", null, ["local:b24:8", "register:101:1"]]
- 00ba43f0 ["CBRANCH", null, ["local:b23:8", "register:101:1"]]
+ 00ba448c ["CBRANCH", null, ["local:b24:8", "register:101:1"]]
- 00ba4400 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:38:8"]]
- 00ba4400 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-66bc06b9fdd6e4c25f5a7df7f5692b63"></a>

### [`00ba4564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba4564.md) → [`00ba4600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4600.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetI

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd70.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5ccb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccb0.md)
- 新版 呼出元 1件 [`00c5ce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce40.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.96% / 新版 75.96%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba4574",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba4578",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba457c",
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
      "00ba4610",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba4614",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba4618",
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
- 00ba4574 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba4574 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba4574 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00ba4574 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba4578 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba4578 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba4578 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00ba4578 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba457c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00ba457c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00ba457c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00ba457c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d845924039ebdb5a19e1055b6338c277"></a>

### [`00ba4840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba4840.md) → [`00ba48dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba48dc.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection6ObjectEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ccb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccb0.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd80.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba4904",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58120"
      ]
    ]
  ],
  "added": [
    [
      "00ba49a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58120"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba4860 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
+ 00ba48fc ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 00ba4884 ["BRANCH", null, ["local:b14:8"]]
+ 00ba4920 ["BRANCH", null, ["local:b11:8"]]
- 00ba4898 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
+ 00ba4934 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
~~~


<a id="compare-bab39a70e74e6137913d52a52c7723a1"></a>

### [`00ba4978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba4978.md) → [`00ba4a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4a14.md) FUN_00ba4a14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00ba3f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3f84.md) · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00ba4020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4020.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.19% / 新版 77.19%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba4978",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba497c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba4980",
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
      "00ba4a14",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba4a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba4a1c",
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
- 00ba4978 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00ba4978 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00ba4978 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba497c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba497c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba497c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba497c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba4980 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00ba4980 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00ba4980 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba4980 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5eeaa396997e5950b467de9b1c492b83"></a>

### [`00ba4b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba4/00ba4b40.md) → [`00ba4bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba4/00ba4bdc.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEvT0_SC

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb00.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb00.md) [`00c5cb90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb90.md) [`00c5cc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc30.md)
- 新版 呼出元 1件 [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) [`00c5cd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd00.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.73% / 新版 68.73%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 1件, `unresolved_branch_alignment` 13件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba4dc4",
      "incomplete_value": true,
      "site": "00ba4dcc",
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
      "definition_site": "00ba4d28",
      "incomplete_value": true,
      "site": "00ba4d30",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba4dbc",
      "incomplete_value": true,
      "site": "00ba4dcc",
      "value": [
        "live",
        "register:40c8:8"
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
      "definition_site": "00ba4dc8",
      "incomplete_value": true,
      "site": "00ba4dcc",
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
    "old": {
      "definition_site": "00ba4d2c",
      "incomplete_value": true,
      "site": "00ba4d30",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 2,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00ba4c04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba4fec"
      ]
    ],
    [
      "00ba4c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba4fec"
      ]
    ],
    [
      "00ba4ca0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba4fec"
      ]
    ]
  ],
  "added": [
    [
      "00ba4c04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba5088"
      ]
    ],
    [
      "00ba4c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba5088"
      ]
    ],
    [
      "00ba4ca0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba5088"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba4d30 ["INT_ADD", "register:40f0:8", ["const:ba4d30:8", "const:4:8"]]
- 00ba4d30 ["CALL", null, ["callee:00c5cbd0:8"]]
+ 00ba4dcc ["INT_ADD", "register:40f0:8", ["const:ba4dcc:8", "const:4:8"]]
+ 00ba4dcc ["CALL", null, ["callee:00c5cbd0:8"]]
+ 00ba4d30 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4:8"]]
+ 00ba4d30 ["LOAD", "tmp:1:2", ["const:1b1:8", "tmp:0:8"]]
+ 00ba4d30 ["INT_ZEXT", "register:4040:8", ["tmp:1:2"]]
- 00ba4d50 ["INT_ADD", "register:40f0:8", ["const:ba4d50:8", "const:4:8"]]
- 00ba4d50 ["CALL", null, ["callee:00c5cbd0:8"]]
+ 00ba4dec ["INT_ADD", "register:40f0:8", ["const:ba4dec:8", "const:4:8"]]
+ 00ba4dec ["CALL", null, ["callee:00c5cbd0:8"]]
~~~


<a id="compare-ec8214ba83827ea59377170aed3e4847"></a>

### [`00ba500c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba500c.md) → [`00ba50a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba50a8.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc30.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb00.md) [`00c5ccf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccf0.md)
- 新版 呼出元 1件 [`00c5cd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd00.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbd0.md) [`00c5cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.94% / 新版 68.94%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba51fc",
      "incomplete_value": true,
      "site": "00ba5210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "live",
            "register:40d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba5160",
      "incomplete_value": true,
      "site": "00ba5174",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba5204",
      "incomplete_value": true,
      "site": "00ba5210",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": {
      "definition_site": "00ba5168",
      "incomplete_value": true,
      "site": "00ba5174",
      "value": [
        "INT_RIGHT",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba520c",
      "incomplete_value": true,
      "site": "00ba5210",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": {
      "definition_site": "00ba5170",
      "incomplete_value": true,
      "site": "00ba5174",
      "value": [
        "INT_RIGHT",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba5010",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba5014",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba5018",
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
      "00ba50ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba50b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba50b4",
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
- 00ba5174 ["INT_ADD", "register:40f0:8", ["const:ba5174:8", "const:4:8"]]
- 00ba5174 ["CALL", null, ["callee:00c5cbd0:8"]]
+ 00ba5210 ["INT_ADD", "register:40f0:8", ["const:ba5210:8", "const:4:8"]]
+ 00ba5210 ["CALL", null, ["callee:00c5cbd0:8"]]
- 00ba5190 ["INT_ADD", "register:40f0:8", ["const:ba5190:8", "const:4:8"]]
- 00ba5190 ["CALL", null, ["callee:00c5cbd0:8"]]
+ 00ba522c ["INT_ADD", "register:40f0:8", ["const:ba522c:8", "const:4:8"]]
+ 00ba522c ["CALL", null, ["callee:00c5cbd0:8"]]
- 00ba5210 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00ba5210 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00ba5210 ["INT_ZEXT", "register:4050:8", ["tmp:1:4"]]
~~~


<a id="compare-42864c13b54682cdf7eb65ccea2b4b83"></a>

### [`00ba53b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba53b8.md) → [`00ba5454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5454.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EEEEvT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb90.md) · 呼出先 4件 [`00ba5dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba5dac.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb90.md) [`00c5cd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd50.md)
- 新版 呼出元 1件 [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) · 呼出先 4件 [`00ba5e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5e48.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc60.md) [`00c5ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 59.40% / 新版 59.40%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 3件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba5724",
      "incomplete_value": true,
      "site": "00ba5738",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba57e0",
      "incomplete_value": true,
      "site": "00ba57f4",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00ba57e4",
      "incomplete_value": true,
      "site": "00ba57f4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00ba53bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba53c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba53c4",
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
      "00ba5458",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba545c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba5460",
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
- 00ba5738 ["INT_ADD", "register:40f0:8", ["const:ba5738:8", "const:4:8"]]
- 00ba5738 ["CALL", null, ["callee:00c5cc60:8"]]
+ 00ba57d4 ["INT_ADD", "register:40f0:8", ["const:ba57d4:8", "const:4:8"]]
+ 00ba57d4 ["CALL", null, ["callee:00c5cc60:8"]]
- 00ba5758 ["INT_ADD", "register:40f0:8", ["const:ba5758:8", "const:4:8"]]
- 00ba5758 ["CALL", null, ["callee:00c5cc60:8"]]
+ 00ba57f4 ["INT_ADD", "register:40f0:8", ["const:ba57f4:8", "const:4:8"]]
+ 00ba57f4 ["CALL", null, ["callee:00c5cc60:8"]]
+ 00ba575c ["INT_SUB", "register:4040:8", ["register:4050:8", "register:4020:8"]]
~~~


