# v16.0.1 → v16.0.2 · 最優先の変更候補 (87)

[一覧の目次](README.md)

<a id="compare-9aad6671fbfdfd4ebbe7a9de46cb131b"></a>

### [`00ba57e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba57e0.md) → [`00ba587c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba587c.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ccf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccf0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdc0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 46.36% / 新版 46.36%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba57e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba57e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba57ec",
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
      "00ba5880",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba5884",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba5888",
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
- 00ba57e0 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00ba57e4 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00ba57e4 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00ba57e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba57e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba57e8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00ba57e8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00ba57e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba57e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6f05e21a895f037f9f4793d1e31a2241"></a>

### [`00ba5998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba5998.md) → [`00ba5a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5a34.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd50.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc90.md)
- 新版 呼出元 1件 [`00c5ce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce20.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.87% / 新版 80.87%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba5c00",
      "incomplete_value": true,
      "site": "00ba5c14",
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
      "definition_site": "00ba5c04",
      "incomplete_value": true,
      "site": "00ba5c14",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00ba5bfc",
      "incomplete_value": true,
      "site": "00ba5c14",
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
      "unmatched:00ba59b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba59c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba59dc",
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
      "00ba5a54",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00ba5a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00ba5a78",
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
- 00ba5c14 ["INT_ADD", "register:40f0:8", ["const:ba5c14:8", "const:4:8"]]
- 00ba5c14 ["CALL", null, ["callee:00c5cd60:8"]]
+ 00ba5cb0 ["INT_ADD", "register:40f0:8", ["const:ba5cb0:8", "const:4:8"]]
+ 00ba5cb0 ["CALL", null, ["callee:00c5cd60:8"]]
- 00ba59b8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00ba59b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4018:8"]]
- 00ba59bc ["COPY", "register:4040:8", ["register:1660:8"]]
~~~


<a id="compare-9a733a54a3aa69f85d28c6d73699c152"></a>

### [`00ba5c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba5c74.md) → [`00ba5d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba5/00ba5d10.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection4EnumEEEPNS1_6OffsetIS6_EESA

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`00c5cc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc90.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd60.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 70.51% / 新版 70.51%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba5d9c",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba5da0",
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
      "00ba5e38",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba5e3c",
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
- 00ba5c94 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 00ba5d30 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
- 00ba5cb8 ["BRANCH", null, ["local:b10:8"]]
+ 00ba5d54 ["BRANCH", null, ["local:b9:8"]]
- 00ba5ccc ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 00ba5d68 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
~~~


<a id="compare-db5e8d92c3512c7c986b6e45dadfbf27"></a>

### [`00ba5dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba5dac.md) → [`00ba727c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba727c.md) FUN_00ba727c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`00ba53b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba53b8.md) · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00ba6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6888.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.42% / 新版 68.42%

優先判定に残った影響 `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba5dd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba734c"
      ]
    ],
    [
      "unmatched:00ba5df0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7378"
      ]
    ],
    [
      "unmatched:00ba5e20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba73fc"
      ]
    ]
  ],
  "added": [
    [
      "00ba72a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba734c"
      ]
    ],
    [
      "00ba72c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7378"
      ]
    ],
    [
      "00ba72f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba73fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba5dcc ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 00ba729c ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00ba5dd4 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:4040:8"]]
- 00ba5dd4 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:40a0:8"]]
- 00ba5dd4 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:40a0:8"]]
- 00ba5dd4 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00ba5dd8 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
~~~


<a id="compare-9d2dfd4d2e9ded8437f4a267a68a466f"></a>

### [`00ba5f74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba5/00ba5f74.md) → [`00ba6010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6010.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EEEEvT0

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`00c5cb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb30.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb30.md) [`00c5cbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbc0.md) [`00c5cc60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc60.md)
- 新版 呼出元 1件 [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) [`00c5cd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.24% / 新版 75.24%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 3件, `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba61f8",
      "incomplete_value": true,
      "site": "00ba6200",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00ba615c",
      "incomplete_value": true,
      "site": "00ba6164",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba61fc",
      "incomplete_value": true,
      "site": "00ba6200",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "00ba6160",
      "incomplete_value": true,
      "site": "00ba6164",
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
    "ordinal": 2,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba6208",
      "incomplete_value": true,
      "site": "00ba6220",
      "value": [
        "live",
        "register:40d0:8"
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
      "unmatched:00ba5f78",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba5f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba5f80",
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
      "00ba6014",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba6018",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba601c",
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
+ 00ba6030 ["COPY", "tmp:0:8", ["const:2:8"]]
+ 00ba6030 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4018:8"]]
+ 00ba6030 ["INT_SBORROW", "register:106:1", ["register:4018:8", "tmp:0:8"]]
+ 00ba6030 ["INT_SUB", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
+ 00ba6034 ["COPY", "tmp:0:8", ["register:4020:8"]]
+ 00ba6034 ["COPY", "tmp:1:8", ["register:4010:8"]]
+ 00ba6034 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
+ 00ba6034 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba60fc ["INT_ADD", "register:40f0:8", ["const:ba60fc:8", "const:4:8"]]
- 00ba60fc ["CALL", null, ["callee:00c58120:8"]]
+ 00ba6198 ["INT_ADD", "register:40f0:8", ["const:ba6198:8", "const:4:8"]]
+ 00ba6198 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-e8dd0281fe00d8fa7cc8ae0505c1f65a"></a>

### [`00ba6440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba6/00ba6440.md) → [`00ba64dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba64dc.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc60.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb30.md) [`00c5cd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd20.md)
- 新版 呼出元 1件 [`00c5cd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd30.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc00.md) [`00c5cdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdf0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.57% / 新版 79.57%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba6454",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6458",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6544",
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
      "00ba64f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba64f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00ba65e0",
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
- 00ba6454 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba6454 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba6454 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00ba6454 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba6458 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00ba6458 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00ba6458 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00ba6458 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba645c ["COPY", "tmp:0:8", ["const:60:8"]]
- 00ba645c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00ba645c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00ba645c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-cff5f6521a41d3c9db1ff4857360b777"></a>

### [`00ba67ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba6/00ba67ec.md) → [`00ba6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6888.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_EEEEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbc0.md) · 呼出先 4件 [`00ba71e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba71e0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbc0.md) [`00c5cd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd80.md)
- 新版 呼出元 1件 [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) · 呼出先 4件 [`00ba727c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba727c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc90.md) [`00c5ce50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.91% / 新版 63.91%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 3件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba6c14",
      "incomplete_value": true,
      "site": "00ba6c28",
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
      "definition_site": "00ba6c10",
      "incomplete_value": true,
      "site": "00ba6c28",
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
      "definition_site": "00ba6c10",
      "incomplete_value": true,
      "site": "00ba6c28",
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
      "unmatched:00ba6800",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6804",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba680c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00ba689c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba68a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00ba68a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 00ba6a10 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00ba6a10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00ba6a10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00ba6a10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00ba6adc ["BRANCH", null, ["local:b45:8"]]
+ 00ba6b78 ["BRANCH", null, ["local:b43:8"]]
- 00ba6b8c ["INT_ADD", "register:40f0:8", ["const:ba6b8c:8", "const:4:8"]]
- 00ba6b8c ["CALL", null, ["callee:00c5cc90:8"]]
+ 00ba6c28 ["INT_ADD", "register:40f0:8", ["const:ba6c28:8", "const:4:8"]]
+ 00ba6c28 ["CALL", null, ["callee:00c5cc90:8"]]
~~~


<a id="compare-b6ebf69d4753c12e6b8bb2da1dcef605"></a>

### [`00ba6c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba6/00ba6c14.md) → [`00ba6cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6cb0.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd20.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdf0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 62.73% / 新版 62.73%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba6c3c"
      ],
      [
        "FALL_THROUGH",
        "00ba6cd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba6cd0",
      "incomplete_value": true,
      "site": "00ba6cec",
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00ba6c50",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:00ba6c18",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6c1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6c20",
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
      "00ba6cb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba6cb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba6cbc",
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
- 00ba6c14 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00ba6c18 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00ba6c18 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00ba6c18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba6c18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba6c1c ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00ba6c1c ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00ba6c1c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba6c1c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1c7dbdee20d776f1c1354a09c5207c0e"></a>

### [`00ba6dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba6/00ba6dcc.md) → [`00ba6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba6/00ba6e68.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6Offset

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd80.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5ccc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccc0.md)
- 新版 呼出元 1件 [`00c5ce50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce50.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd90.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 69.95% / 新版 69.95%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 11件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00ba6f74"
      ],
      [
        "CONDITIONAL_JUMP",
        "00ba7010"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba7010",
      "incomplete_value": true,
      "site": "00ba6f70",
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
      "definition_site": "00ba6f74",
      "incomplete_value": true,
      "site": "00ba6ed4",
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
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba6f74"
      ],
      [
        "FALL_THROUGH",
        "00ba7010"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba7010",
      "incomplete_value": true,
      "site": "00ba7018",
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
      "definition_site": "00ba6f74",
      "incomplete_value": true,
      "site": "00ba6f7c",
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
      "unmatched:00ba6dd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6dd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba6dd8",
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
      "00ba6e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba6e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba6e74",
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
+ 00ba6ed4 ["COPY", "register:40c0:8", ["register:40d0:8"]]
- 00ba6ee0 ["CBRANCH", null, ["local:b48:8", "register:101:1"]]
+ 00ba6f7c ["CBRANCH", null, ["local:b47:8", "register:101:1"]]
- 00ba6f70 ["COPY", "tmp:0:4", ["const:1:4"]]
- 00ba6f70 ["INT_LESSEQUAL", "register:105:1", ["const:1:4", "register:4040:4"]]
- 00ba6f70 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:1:4"]]
- 00ba6f70 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-d1a683644ba83255c6f848a05df18b52"></a>

### [`00ba70a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba70a8.md) → [`00ba7144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7144.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection7ServiceEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`00c5ccc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccc0.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd90.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba70b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba70e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba71a8"
      ]
    ],
    [
      "unmatched:00ba719c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7260"
      ]
    ]
  ],
  "added": [
    [
      "00ba7154",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba7184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba71a8"
      ]
    ],
    [
      "00ba7238",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7260"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba70b8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba70b8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba70b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00ba70b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba70c8 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
+ 00ba7164 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00ba70e4 ["INT_LESSEQUAL", "register:105:1", ["register:40b0:8", "register:40c0:8"]]
- 00ba70e4 ["INT_SBORROW", "register:106:1", ["register:40c0:8", "register:40b0:8"]]
- 00ba70e4 ["INT_SUB", "tmp:0:8", ["register:40c0:8", "register:40b0:8"]]
- 00ba70e4 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-f9ea4a6cee047f5c9a8189eb1bba6bff"></a>

### [`00ba73a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba73a8.md) → [`00ba7444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7444.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS6_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change` · `reordered`

- 旧版 呼出元 1件 [`00c5caf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5caf0.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5caf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5caf0.md) [`00c5cb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb80.md) [`00c5cc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc20.md)
- 新版 呼出元 1件 [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) [`00c5ccf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccf0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.43% / 新版 81.43%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 3件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba7590",
      "incomplete_value": true,
      "site": "00ba7598",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba7588",
      "incomplete_value": true,
      "site": "00ba7598",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba7630",
      "incomplete_value": true,
      "site": "00ba7634",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "00ba7594",
      "incomplete_value": true,
      "site": "00ba7598",
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
      "unmatched:00ba7460",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba78f0"
      ]
    ],
    [
      "unmatched:00ba748c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba78f0"
      ]
    ],
    [
      "unmatched:00ba75e8",
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
      "00ba74fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba78f0"
      ]
    ],
    [
      "00ba7528",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba78f0"
      ]
    ],
    [
      "00ba7684",
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
- 00ba7500 ["INT_SUB", "register:4050:8", ["register:4048:8", "register:4050:8"]]
- 00ba7504 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:4:8"]]
- 00ba7504 ["LOAD", "tmp:1:2", ["const:1b1:8", "tmp:0:8"]]
- 00ba7504 ["INT_ZEXT", "register:4050:8", ["tmp:1:2"]]
- 00ba7530 ["INT_ADD", "register:40f0:8", ["const:ba7530:8", "const:4:8"]]
- 00ba7530 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba75cc ["INT_ADD", "register:40f0:8", ["const:ba75cc:8", "const:4:8"]]
+ 00ba75cc ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-183b9d459e6c25cd22efc32315fa87d3"></a>

### [`00ba7874`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba7874.md) → [`00ba7910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7910.md) _ZNSt6__ndk118__stable_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc20.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5caf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5caf0.md) [`00c5cce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cce0.md)
- 新版 呼出元 1件 [`00c5ccf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccf0.md) · 呼出先 3件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbc0.md) [`00c5cdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.23% / 新版 87.23%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00ba7ab4"
      ],
      [
        "CONDITIONAL_JUMP",
        "00ba7b50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba7b50",
      "incomplete_value": true,
      "site": "00ba7abc",
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
      "definition_site": "00ba7ab4",
      "incomplete_value": true,
      "site": "00ba7a20",
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
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba7ab4"
      ],
      [
        "FALL_THROUGH",
        "00ba7b50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba7b50",
      "incomplete_value": true,
      "site": "00ba7b54",
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
      "definition_site": "00ba7ab4",
      "incomplete_value": true,
      "site": "00ba7ab8",
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
      "unmatched:00ba7878",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba787c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba7880",
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
      "00ba7914",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba7918",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba791c",
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
- 00ba7874 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00ba7878 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00ba7878 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00ba7878 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba7878 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba787c ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00ba787c ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00ba787c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba787c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8dedf88a218b8df79e4717c5732ad510"></a>

### [`00ba7c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba7c20.md) → [`00ba7cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7cbc.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb80.md) · 呼出先 4件 [`00ba8614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8614.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb80.md) [`00c5cd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd40.md)
- 新版 呼出元 1件 [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) · 呼出先 4件 [`00ba86b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba86b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc50.md) [`00c5ce10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce10.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.58% / 新版 81.58%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 2件, `unresolved_branch_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba7f8c",
      "incomplete_value": true,
      "site": "00ba7fa0",
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
    "new": null,
    "old": {
      "definition_site": "00ba7f90",
      "incomplete_value": true,
      "site": "00ba7fa0",
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
    "ordinal": 4,
    "slot": 4
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba7e3c"
      ],
      [
        "FALL_THROUGH",
        "00ba7ed8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba7ed4",
      "incomplete_value": true,
      "site": "00ba7ee0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "00ba7e38",
      "incomplete_value": true,
      "site": "00ba7e44",
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
    "ordinal": 21,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba7d54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7f98"
      ]
    ],
    [
      "unmatched:00ba7d88",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba7df4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7e28"
      ]
    ]
  ],
  "added": [
    [
      "00ba7df0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7f98"
      ]
    ],
    [
      "00ba7e24",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00ba7e90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba7e28"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba7ee0 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00ba7ee0 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 00ba7f7c ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00ba7f7c ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 00ba7fa0 ["INT_ADD", "register:40f0:8", ["const:ba7fa0:8", "const:4:8"]]
- 00ba7fa0 ["CALL", null, ["callee:00c5cc50:8"]]
+ 00ba803c ["INT_ADD", "register:40f0:8", ["const:ba803c:8", "const:4:8"]]
+ 00ba803c ["CALL", null, ["callee:00c5cc50:8"]]
- 00ba7c4c ["INT_EQUAL", "tmp:0:1", ["register:4028:8", "const:0:8"]]
- 00ba7c4c ["CBRANCH", null, ["local:b50:8", "tmp:0:1"]]
+ 00ba7ce8 ["INT_EQUAL", "tmp:0:1", ["register:4028:8", "const:0:8"]]
+ 00ba7ce8 ["CBRANCH", null, ["local:b48:8", "tmp:0:1"]]
~~~


<a id="compare-e7de76fd33366a1f09ec4397a76a65b7"></a>

### [`00ba8048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8048.md) → [`00ba80e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba80e4.md) _ZNSt6__ndk121__insertion_sort_moveIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6Offse

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cce0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cdb0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.91% / 新版 70.91%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba8058",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba805c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8060",
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
      "00ba80f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba80f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00ba80fc",
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
- 00ba8058 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba8058 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba8058 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00ba8058 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba805c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba805c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba805c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00ba805c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba8060 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00ba8060 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00ba8060 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00ba8060 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b7828bfc8bcc65fbf90292875dbc948d"></a>

### [`00ba8200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8200.md) → [`00ba829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba829c.md) _ZNSt6__ndk124__buffered_inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6Of

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd40.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc80.md)
- 新版 呼出元 1件 [`00c5ce10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce10.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.41% / 新版 75.41%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba8474",
      "incomplete_value": true,
      "site": "00ba847c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 1,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba8298",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8374"
      ]
    ],
    [
      "unmatched:00ba83e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba84ec"
      ]
    ],
    [
      "unmatched:00ba83fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba8414"
      ]
    ]
  ],
  "added": [
    [
      "00ba8334",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8374"
      ]
    ],
    [
      "00ba8484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba84ec"
      ]
    ],
    [
      "00ba8498",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba84b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba847c ["INT_ADD", "register:40f0:8", ["const:ba847c:8", "const:4:8"]]
- 00ba847c ["CALL", null, ["callee:00c5cd50:8"]]
+ 00ba8518 ["INT_ADD", "register:40f0:8", ["const:ba8518:8", "const:4:8"]]
+ 00ba8518 ["CALL", null, ["callee:00c5cd50:8"]]
+ 00ba847c ["COPY", "register:4040:8", ["register:4098:8"]]
- 00ba8248 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00ba8248 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00ba8248 ["CBRANCH", null, ["local:b23:8", "tmp:1:1"]]
+ 00ba82e4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00ba82e4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 00ba82e4 ["CBRANCH", null, ["local:b22:8", "tmp:1:1"]]
~~~


<a id="compare-0aa72a0dd20f4a9354fe478539711732"></a>

### [`00ba84dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba84dc.md) → [`00ba8578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8578.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection10SchemaFileEEEPNS1_6OffsetI

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc80.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd50.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.59% / 新版 93.59%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba85d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8694"
      ]
    ],
    [
      "unmatched:00ba8604",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8608",
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
      "00ba866c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8694"
      ]
    ],
    [
      "00ba86a0",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba86a4",
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
- 00ba84fc ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 00ba8598 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
- 00ba8534 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 00ba85d0 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
- 00ba85a0 ["INT_ADD", "register:40f0:8", ["const:ba85a0:8", "const:4:8"]]
- 00ba85a0 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba863c ["INT_ADD", "register:40f0:8", ["const:ba863c:8", "const:4:8"]]
+ 00ba863c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-4c5ba3e922bbbf35a7c0d70c9a152d69"></a>

### [`00ba8614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8614.md) → [`00ba86b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba86b0.md) FUN_00ba86b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00ba7c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba7/00ba7c20.md) · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00ba7cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba7/00ba7cbc.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00ba8724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba8794"
      ]
    ],
    [
      "00ba8730",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba8794"
      ]
    ],
    [
      "unmatched:00ba86d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58010"
      ]
    ]
  ],
  "added": [
    [
      "00ba8724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8830"
      ]
    ],
    [
      "00ba8730",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8830"
      ]
    ],
    [
      "00ba879c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58010"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba8640 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00ba86dc ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 00ba8658 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00ba8658 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 00ba86f4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00ba86f4 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 00ba8688 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00ba8688 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00ba8688 ["CBRANCH", null, ["local:b27:8", "tmp:1:1"]]
+ 00ba8724 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00ba8724 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00ba8724 ["CBRANCH", null, ["local:b28:8", "tmp:1:1"]]
~~~


<a id="compare-61bea5d2443896337ccd3702d23f448a"></a>

### [`00ba87dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba87dc.md) → [`00ba8878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8878.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE6FinishEjPKcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c330.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c400.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.07% / 新版 87.07%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba88f4"
      ],
      [
        "FALL_THROUGH",
        "00ba8990"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba8990",
      "incomplete_value": true,
      "site": "00ba8998",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "leaf",
                "const:3:8"
              ],
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba88f4",
      "incomplete_value": true,
      "site": "00ba88fc",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "live",
            "register:102:1"
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:101:1"
              ]
            ]
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
      "unmatched:00ba881c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba88c4"
      ]
    ],
    [
      "unmatched:00ba888c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8944"
      ]
    ],
    [
      "unmatched:00ba88a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00ba8894"
      ]
    ]
  ],
  "added": [
    [
      "00ba88b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba88c4"
      ]
    ],
    [
      "00ba8928",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8944"
      ]
    ],
    [
      "00ba8940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8930"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba87ec ["COPY", "tmp:0:8", ["const:30:8"]]
- 00ba87ec ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00ba87ec ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00ba87ec ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00ba8814 ["INT_LESSEQUAL", "register:105:1", ["register:4050:8", "register:4058:8"]]
- 00ba8814 ["INT_SBORROW", "register:106:1", ["register:4058:8", "register:4050:8"]]
- 00ba8814 ["INT_SUB", "tmp:0:8", ["register:4058:8", "register:4050:8"]]
- 00ba8814 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00ba8818 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:48:8"]]
- 00ba8818 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-243739dd76b26060e653677f15968b45"></a>

### [`00ba89ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba89ac.md) → [`00ba8a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8a48.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_co

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca70.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb40.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `unresolved_branch_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba89c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8b40"
      ]
    ],
    [
      "unmatched:00ba8a30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8a88"
      ]
    ],
    [
      "unmatched:00ba8a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8b40"
      ]
    ]
  ],
  "added": [
    [
      "00ba8a64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8b40"
      ]
    ],
    [
      "00ba8acc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8a88"
      ]
    ],
    [
      "00ba8af0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8b40"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba89c4 ["INT_ADD", "register:4098:8", ["register:4098:8", "const:8:8"]]
- 00ba89c4 ["LOAD", "register:40b8:8", ["const:1b1:8", "register:4098:8"]]
- 00ba89c8 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00ba89c8 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 00ba89e8 ["BRANCH", null, ["local:b6:8"]]
+ 00ba8a84 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-bd36af5d0bf0c476cd58be992596d151"></a>

### [`00ba8ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8ac0.md) → [`00ba8b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8b5c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) · 呼出先 3件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5b0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) · 呼出先 3件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.11% / 新版 86.11%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba8bd0",
      "incomplete_value": true,
      "site": "00ba8be8",
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
      "definition_site": "00ba8bd4",
      "incomplete_value": true,
      "site": "00ba8be8",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
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
      "unmatched:00ba8ac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8ac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8ac8",
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
      "00ba8b5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba8b60",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba8b64",
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
- 00ba8b4c ["INT_ADD", "register:40f0:8", ["const:ba8b4c:8", "const:4:8"]]
- 00ba8b4c ["CALL", null, ["callee:00c5b170:8"]]
+ 00ba8be8 ["INT_ADD", "register:40f0:8", ["const:ba8be8:8", "const:4:8"]]
+ 00ba8be8 ["CALL", null, ["callee:00c5b170:8"]]
- 00ba8ac0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00ba8ac0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00ba8ac0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00ba8ac0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba8ac4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba8ac4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba8ac4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba8ac4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-490402f08e2f7656d39bc22065143ac0"></a>

### [`00ba8be0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8be0.md) → [`00ba8c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8c7c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE23__append_forward_unsafeIPKcEERS5_T_SA_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cad0.md) · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md)
- 新版 呼出元 1件 [`00c5cba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cba0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.90% / 新版 93.90%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba8d6c",
      "incomplete_value": true,
      "site": "00ba8d78",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba8d70",
      "incomplete_value": false,
      "site": "00ba8d78",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba8c28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8ed8"
      ]
    ],
    [
      "unmatched:00ba8c64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8d50"
      ]
    ],
    [
      "unmatched:00ba8c80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8f08"
      ]
    ]
  ],
  "added": [
    [
      "00ba8cc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8ed8"
      ]
    ],
    [
      "00ba8d00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8d50"
      ]
    ],
    [
      "00ba8d1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba8f08"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba8cdc ["INT_ADD", "register:40f0:8", ["const:ba8cdc:8", "const:4:8"]]
- 00ba8cdc ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00ba8d78 ["INT_ADD", "register:40f0:8", ["const:ba8d78:8", "const:4:8"]]
+ 00ba8d78 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00ba8c14 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 00ba8c14 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00ba8c14 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00ba8c14 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00ba8cb0 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 00ba8cb0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00ba8cb0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00ba8cb0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00ba8c28 ["CBRANCH", null, ["local:b52:8", "register:101:1"]]
~~~


<a id="compare-dc0bb3eed6be9cb08a0e50d987c98191"></a>

### [`00ba8e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8e70.md) → [`00ba8f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba8/00ba8f0c.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_valu

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cab0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb80.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 31.88% / 新版 31.88%

優先判定に残った影響 `unresolved_branch_alignment` 14件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba8e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8e78",
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
      "00ba8f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba8f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba8f14",
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
- 00ba8e70 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00ba8e70 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00ba8e70 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00ba8e70 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba8e74 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba8e74 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba8e74 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba8e74 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba8e78 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba8e78 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba8e78 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba8e78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1fc9e01996840defec57c764f085505c"></a>

### [`00ba8f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba8/00ba8f84.md) → [`00ba9020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9020.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf50.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d020.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba8f84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8f88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba8f8c",
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
      "00ba9020",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba9024",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba9028",
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
- 00ba8f84 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00ba8f84 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00ba8f84 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00ba8f84 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba8f88 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba8f88 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba8f88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba8f88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba8f8c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba8f8c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba8f8c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba8f8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b65a8ee8e922844baf64877b64fc5d87"></a>

### [`00ba9098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba9098.md) → [`00ba9134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9134.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cf40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf40.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d010.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00ba90c0"
      ],
      [
        "CONDITIONAL_JUMP",
        "00ba915c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba915c",
      "incomplete_value": true,
      "site": "00ba9224",
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
      "definition_site": "00ba90c0",
      "incomplete_value": true,
      "site": "00ba9188",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40b8:8"
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
      "unmatched:00ba9098",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba909c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba90a0",
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
      "00ba9134",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00ba9138",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba913c",
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
- 00ba9098 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00ba9098 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00ba9098 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00ba9098 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba909c ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00ba909c ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00ba909c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba909c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba90a0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00ba90a0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00ba90a0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba90a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2b5caf0fbca0ac517e96de3810687b87"></a>

### [`00ba91b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba91b8.md) → [`00ba9254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9254.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE6assignIPS6_EENS_9enable_ifIXaasr21__is_forward_ite

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d030.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.45% / 新版 74.45%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba941c",
      "incomplete_value": true,
      "site": "00ba9420",
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
            "const:3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba9380",
      "incomplete_value": true,
      "site": "00ba9384",
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
                "register:4048:8"
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
      "unmatched:00ba91b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba91bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba91c0",
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
      "00ba9254",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00ba9258",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba925c",
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
- 00ba92e8 ["CBRANCH", null, ["local:b43:8", "register:101:1"]]
+ 00ba9384 ["CBRANCH", null, ["local:b45:8", "register:101:1"]]
- 00ba9384 ["INT_ADD", "register:40f0:8", ["const:ba9384:8", "const:4:8"]]
- 00ba9384 ["CALL", null, ["callee:00c57f60:8"]]
+ 00ba9420 ["INT_ADD", "register:40f0:8", ["const:ba9420:8", "const:4:8"]]
+ 00ba9420 ["CALL", null, ["callee:00c57f60:8"]]
- 00ba91b8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00ba91b8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00ba91b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00ba91b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-7589753a502a262d9d6a2a332f95743a"></a>

### [`00ba93dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba93dc.md) → [`00ba9478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9478.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_com

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ceb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ceb0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf80.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba93dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba93e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba93e4",
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
      "00ba9478",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00ba947c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00ba9480",
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
- 00ba93dc ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00ba93dc ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00ba93dc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00ba93dc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00ba93e0 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00ba93e0 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00ba93e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00ba93e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00ba93e4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00ba93e4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00ba93e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00ba93e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-83c200fdd4464fc2e8a832fd8a608096"></a>

### [`00ba94f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba94f0.md) → [`00ba958c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba958c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_com

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cea0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf70.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba95c4",
      "incomplete_value": true,
      "site": "00ba95cc",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00ba95c8",
      "incomplete_value": true,
      "site": "00ba95cc",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  }
]
~~~


~~~diff
- 00ba95cc ["INT_ADD", "register:40f0:8", ["const:ba95cc:8", "const:4:8"]]
- 00ba95cc ["CALL", null, ["callee:00c58120:8"]]
+ 00ba9668 ["INT_ADD", "register:40f0:8", ["const:ba9668:8", "const:4:8"]]
+ 00ba9668 ["CALL", null, ["callee:00c58120:8"]]
- 00ba9518 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00ba9518 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 00ba95b4 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00ba95b4 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 00ba9540 ["CBRANCH", null, ["local:b16:8", "register:102:1"]]
+ 00ba95dc ["CBRANCH", null, ["local:b19:8", "register:102:1"]]
~~~


<a id="compare-38f6747f3fc511496ef1a9fc3ec53141"></a>

### [`00ba9610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba9610.md) → [`00ba96ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba96ac.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE18CreateSharedStringEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2b0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5c2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2a0.md) [`00c5ce40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce40.md)
- 新版 呼出元 1件 [`00c5c380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c380.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5cf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf10.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.18% / 新版 83.18%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 5件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba9710",
      "incomplete_value": true,
      "site": "00ba971c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00ba964c"
      ],
      [
        "FALL_THROUGH",
        "00ba96e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba96e8",
      "incomplete_value": true,
      "site": "00ba96f8",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00ba964c",
      "incomplete_value": true,
      "site": "00ba965c",
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
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00ba964c"
      ],
      [
        "FALL_THROUGH",
        "00ba96e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00ba96e8",
      "incomplete_value": true,
      "site": "00ba96f8",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00ba964c",
      "incomplete_value": true,
      "site": "00ba965c",
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
      "unmatched:00ba9628",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba9644",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba964c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba9708"
      ]
    ]
  ],
  "added": [
    [
      "00ba96c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00ba96e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00ba96e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba9708"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba9680 ["INT_ADD", "register:40f0:8", ["const:ba9680:8", "const:4:8"]]
- 00ba9680 ["CALL", null, ["callee:00c5c370:8"]]
+ 00ba971c ["INT_ADD", "register:40f0:8", ["const:ba971c:8", "const:4:8"]]
+ 00ba971c ["CALL", null, ["callee:00c5c370:8"]]
- 00ba9740 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00ba9740 ["INT_ZEXT", "register:4048:8", ["tmp:0:1"]]
- 00ba9628 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00ba9628 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00ba9628 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00ba9628 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fbe13c2285ffbcdbbc23fc85178d7c8a"></a>

### [`00ba97bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba97bc.md) → [`00ba9858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9858.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE16CreateStringImplEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2a0.md) · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.25% / 新版 91.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba9964",
      "incomplete_value": true,
      "site": "00ba997c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00ba9804",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba9900"
      ]
    ],
    [
      "unmatched:00ba9860",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba98ec"
      ]
    ]
  ],
  "added": [
    [
      "00ba98a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba9900"
      ]
    ],
    [
      "00ba98fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00ba98ec"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba98e0 ["INT_ADD", "register:40f0:8", ["const:ba98e0:8", "const:4:8"]]
- 00ba98e0 ["CALL", null, ["callee:00c580d0:8"]]
+ 00ba997c ["INT_ADD", "register:40f0:8", ["const:ba997c:8", "const:4:8"]]
+ 00ba997c ["CALL", null, ["callee:00c580d0:8"]]
- 00ba97dc ["CBRANCH", null, ["local:b12:8", "register:102:1"]]
+ 00ba9878 ["CBRANCH", null, ["local:b11:8", "register:102:1"]]
- 00ba9800 ["INT_AND", "tmp:0:8", ["register:4048:8", "const:3:8"]]
- 00ba9800 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00ba9800 ["INT_EQUAL", "register:108:1", ["tmp:0:8", "const:0:8"]]
- 00ba9800 ["COPY", "register:40b0:8", ["tmp:0:8"]]
~~~


<a id="compare-3d92661b6b58b0666eac239faf930c98"></a>

### [`00ba98fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba98fc.md) → [`00ba9998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9998.md) _ZNSt6__ndk16__treeIN11flatbuffers6OffsetINS1_6StringEEENS1_21FlatBufferBuilderImplILb0EE19StringOffsetCompareENS_9allocatorIS4_EEE25__empla

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce40.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5cf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf10.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba996c ["INT_ADD", "register:40f0:8", ["const:ba996c:8", "const:4:8"]]
- 00ba996c ["CALL", null, ["callee:00c58120:8"]]
+ 00ba9a08 ["INT_ADD", "register:40f0:8", ["const:ba9a08:8", "const:4:8"]]
+ 00ba9a08 ["CALL", null, ["callee:00c58120:8"]]
- 00ba99b4 ["INT_ADD", "register:40f0:8", ["const:ba99b4:8", "const:4:8"]]
- 00ba99b4 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba9a50 ["INT_ADD", "register:40f0:8", ["const:ba9a50:8", "const:4:8"]]
+ 00ba9a50 ["CALL", null, ["callee:00c58120:8"]]
- 00ba99f0 ["BRANCH", null, ["local:b17:8"]]
+ 00ba9a8c ["BRANCH", null, ["local:b18:8"]]
~~~


<a id="compare-87b80dabf520643669ac042ebdc86179"></a>

### [`00ba9a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba9a74.md) → [`00ba9b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9b10.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c58960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58960.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c58a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58a30.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.99% / 新版 88.99%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba9b78",
      "incomplete_value": true,
      "site": "00ba9b80",
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
      "definition_site": "00ba9adc",
      "incomplete_value": true,
      "site": "00ba9ae4",
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
      "definition_site": "00ba9bbc",
      "incomplete_value": true,
      "site": "00ba9bc4",
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
      "definition_site": "00ba9b20",
      "incomplete_value": true,
      "site": "00ba9b28",
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
      "definition_site": "00ba9c18",
      "incomplete_value": true,
      "site": "00ba9c24",
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
      "00ba9b78",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00ba9b78",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba9bbc",
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
      "00ba9b78",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00ba9b78",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00ba9bbc",
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
- 00ba9ae4 ["INT_ADD", "register:40f0:8", ["const:ba9ae4:8", "const:4:8"]]
- 00ba9ae4 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba9b80 ["INT_ADD", "register:40f0:8", ["const:ba9b80:8", "const:4:8"]]
+ 00ba9b80 ["CALL", null, ["callee:00c58350:8"]]
- 00ba9b28 ["INT_ADD", "register:40f0:8", ["const:ba9b28:8", "const:4:8"]]
- 00ba9b28 ["CALL", null, ["callee:00c58350:8"]]
+ 00ba9bc4 ["INT_ADD", "register:40f0:8", ["const:ba9bc4:8", "const:4:8"]]
+ 00ba9bc4 ["CALL", null, ["callee:00c58350:8"]]
- 00ba9b80 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 00ba9b80 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00ba9b80 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-4d0291148c54601ae9437c5ab0abe30a"></a>

### [`00ba9c28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba9c28.md) → [`00ba9cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9cc4.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5caa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5caa0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb70.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~diff
- 00ba9c44 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00ba9c44 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 00ba9ce0 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00ba9ce0 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00ba9cc0 ["INT_ADD", "register:40f0:8", ["const:ba9cc0:8", "const:4:8"]]
- 00ba9cc0 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba9d5c ["INT_ADD", "register:40f0:8", ["const:ba9d5c:8", "const:4:8"]]
+ 00ba9d5c ["CALL", null, ["callee:00c58120:8"]]
- 00ba9cd0 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00ba9d6c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
~~~


<a id="compare-1449163c522b0eef92b143bf0114a427"></a>

### [`00ba9d3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba9/00ba9d3c.md) → [`00ba9dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba9/00ba9dd8.md) FUN_00ba9dd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) · 呼出先 23件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) · 呼出先 23件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.04% / 新版 91.04%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00ba9f4c",
      "incomplete_value": false,
      "site": "00ba9f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:cc7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00ba9eb0",
      "incomplete_value": false,
      "site": "00ba9ebc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:c87:8"
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
      "definition_site": "00ba9ec4",
      "incomplete_value": false,
      "site": "00ba9ed0",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00ba9f00",
      "incomplete_value": true,
      "site": "00ba9f04",
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
                "const:b0:8"
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
      "unmatched:00ba9d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00ba9d70",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00ba9e40",
      "PARAM",
      [
        "storage",
        "002af4ea",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00ba9df0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00ba9e0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00ba9e40",
      "PARAM",
      [
        "storage",
        "002af48e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00ba9ebc ["INT_ADD", "register:40f0:8", ["const:ba9ebc:8", "const:4:8"]]
- 00ba9ebc ["CALL", null, ["callee:00c58180:8"]]
+ 00ba9f58 ["INT_ADD", "register:40f0:8", ["const:ba9f58:8", "const:4:8"]]
+ 00ba9f58 ["CALL", null, ["callee:00c58180:8"]]
- 00ba9ed0 ["INT_ADD", "register:40f0:8", ["const:ba9ed0:8", "const:4:8"]]
- 00ba9ed0 ["CALL", null, ["callee:00c58180:8"]]
+ 00ba9f6c ["INT_ADD", "register:40f0:8", ["const:ba9f6c:8", "const:4:8"]]
+ 00ba9f6c ["CALL", null, ["callee:00c58180:8"]]
- 00ba9f04 ["INT_ADD", "register:40f0:8", ["const:ba9f04:8", "const:4:8"]]
- 00ba9f04 ["CALL", null, ["callee:00c57f80:8"]]
+ 00ba9fa0 ["INT_ADD", "register:40f0:8", ["const:ba9fa0:8", "const:4:8"]]
+ 00ba9fa0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-255f18a201e79cda253f47c090d8cdd8"></a>

### [`00baa3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baa3b0.md) → [`00baa44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baa44c.md) _ZNSt6__ndk16vectorINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEENS_9allocatorIS6_EEE6insertENS_11__wrap_iterIPKS6_EEOS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d050.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5cb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb70.md)
- 新版 呼出元 1件 [`00c5d120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d120.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5cc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.68% / 新版 80.68%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00baa6a0",
      "incomplete_value": true,
      "site": "00baa6a4",
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
                "register:40d0:8"
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
      "unmatched:00baa3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baa430",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baa514"
      ]
    ],
    [
      "unmatched:00baa4f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baa664"
      ]
    ]
  ],
  "added": [
    [
      "00baa480",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00baa4cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baa514"
      ]
    ],
    [
      "00baa590",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baa664"
      ]
    ]
  ]
}
~~~


~~~diff
- 00baa608 ["INT_ADD", "register:40f0:8", ["const:baa608:8", "const:4:8"]]
- 00baa608 ["CALL", null, ["callee:00c57f60:8"]]
+ 00baa6a4 ["INT_ADD", "register:40f0:8", ["const:baa6a4:8", "const:4:8"]]
+ 00baa6a4 ["CALL", null, ["callee:00c57f60:8"]]
- 00baa3e4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:28:8"]]
- 00baa3e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00baa410 ["CBRANCH", null, ["local:b20:8", "register:102:1"]]
+ 00baa4ac ["CBRANCH", null, ["local:b21:8", "register:102:1"]]
~~~


<a id="compare-9df9ca6f957f7af689da44fcd861788b"></a>

### [`00baa84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baa84c.md) → [`00baa8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baa8e8.md) _ZNSt6__ndk114__split_bufferINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEERNS_9allocatorIS6_EEE9push_backEOS6_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb70.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5cc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc40.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 21件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baa85c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baa874",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baab20"
      ]
    ],
    [
      "unmatched:00baa8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baaae4"
      ]
    ]
  ],
  "added": [
    [
      "00baa8f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00baa910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baab20"
      ]
    ],
    [
      "00baa954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baaae4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00baa85c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00baa85c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00baa85c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00baa85c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00baa860 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00baa860 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00baa860 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00baa860 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00baa864 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 00baa864 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00baa864 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00baa864 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-de7b55ee86c71760dc16c0ac647a6923"></a>

### [`00baab04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baab04.md) → [`00baaba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baaba0.md) FUN_00baaba0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.33% / 新版 85.33%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00baac20",
      "incomplete_value": true,
      "site": "00baac3c",
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
    "new": {
      "definition_site": "00baac28",
      "incomplete_value": true,
      "site": "00baac3c",
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
      "definition_site": "00baab8c",
      "incomplete_value": true,
      "site": "00baaba0",
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
            "register:4040:8"
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
      "definition_site": "00baac2c",
      "incomplete_value": true,
      "site": "00baac3c",
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
      "definition_site": "00baab90",
      "incomplete_value": true,
      "site": "00baaba0",
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
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baab3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baab44",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baab48",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00baabd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00baabe0",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "00baabe4",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00baaba0 ["INT_ADD", "register:40f0:8", ["const:baaba0:8", "const:4:8"]]
- 00baaba0 ["CALL", null, ["callee:00c5c600:8"]]
+ 00baac3c ["INT_ADD", "register:40f0:8", ["const:baac3c:8", "const:4:8"]]
+ 00baac3c ["CALL", null, ["callee:00c5c600:8"]]
- 00baac3c ["CBRANCH", null, ["local:b16:8", "register:102:1"]]
+ 00baacd8 ["CBRANCH", null, ["local:b17:8", "register:102:1"]]
- 00baab20 ["COPY", "tmp:0:8", ["const:140:8"]]
- 00baab20 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00baab20 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00baab20 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-8f72f8107d8e4974cdc153759dc03c94"></a>

### [`00baad5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baad5c.md) → [`00baadf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baadf8.md) _ZNSt6__ndk16vectorINS_4pairIN11flatbuffers5ValueEPNS2_8FieldDefEEENS_9allocatorIS6_EEE21__push_back_slow_pathIS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d040.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d110.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.30% / 新版 71.30%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baadd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baae84"
      ]
    ],
    [
      "unmatched:00baae90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baaee4"
      ]
    ]
  ],
  "added": [
    [
      "00baae70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baae84"
      ]
    ],
    [
      "00baaf2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baaee4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00baad74 ["INT_AND", "register:4050:8", ["register:4050:8", "const:ffffffff0000ffff:8"]]
- 00baad74 ["INT_OR", "register:4050:8", ["register:4050:8", "const:38e30000:8"]]
- 00baad78 ["COPY", "register:40a8:8", ["const:e38e:8"]]
- 00baad7c ["INT_SUB", "register:4040:8", ["register:4040:8", "register:4048:8"]]
~~~


<a id="compare-45c34439d7d8b85166642b8e6945e31d"></a>

### [`00baaf0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baaf0c.md) → [`00baafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baafa8.md) FUN_00baafa8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7fe3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fe3c.md) [`00b80218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80218.md) · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c585b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585b0.md) [`00c585c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585c0.md) [`00c5c1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1b0.md) [`00c5c1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1c0.md)
- 新版 呼出元 2件 [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58680.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md) [`00c5c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c280.md) [`00c5c290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c290.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.14% / 新版 52.14%

優先判定に残った影響 `unresolved_branch_alignment` 60件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 16件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baaf10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baaf14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baaf18",
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
      "00baafac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00baafb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00baafb4",
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
- 00baaf0c ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 00baaf10 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00baaf10 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00baaf10 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00baaf10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00baaf14 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00baaf14 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00baaf14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00baaf14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-df319c94e6272a4ad08ca9c2b1eb6bb2"></a>

### [`00bab828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00bab828.md) → [`00bab8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00bab8c4.md) FUN_00bab8c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c480.md) [`00c5c630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c630.md) [`00c5d000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d000.md)
- 新版 呼出元 1件 [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c550.md) [`00c5c700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c700.md) [`00c5d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bab92c",
      "incomplete_value": true,
      "site": "00bab934",
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
      "definition_site": "00bab920",
      "incomplete_value": true,
      "site": "00bab934",
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
                "const:ffffffffffffffc8:8"
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
      "definition_site": "00bab924",
      "incomplete_value": true,
      "site": "00bab934",
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
            "const:20:8"
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
      "unmatched:00bab8b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bab8b4",
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
      "00bab94c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bab950",
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
- 00bab934 ["INT_ADD", "register:40f0:8", ["const:bab934:8", "const:4:8"]]
- 00bab934 ["CALL", null, ["callee:00c5c550:8"]]
+ 00bab9d0 ["INT_ADD", "register:40f0:8", ["const:bab9d0:8", "const:4:8"]]
+ 00bab9d0 ["CALL", null, ["callee:00c5c550:8"]]
- 00bab950 ["INT_ADD", "register:40f0:8", ["const:bab950:8", "const:4:8"]]
- 00bab950 ["CALL", null, ["callee:00c5c700:8"]]
+ 00bab9ec ["INT_ADD", "register:40f0:8", ["const:bab9ec:8", "const:4:8"]]
+ 00bab9ec ["CALL", null, ["callee:00c5c700:8"]]
- 00bab87c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00bab87c ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00bab87c ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00bab87c ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-298de6d9fc5d947d7b306f17ea94b39a"></a>

### [`00bab990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00bab990.md) → [`00baba2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00baba2c.md) _ZNSt6__ndk16vectorIN11flatbuffers5ValueENS_9allocatorIS2_EEE24__emplace_back_slow_pathIJS2_EEEvDpOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d000.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0d0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.28% / 新版 75.28%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00babad0",
      "incomplete_value": true,
      "site": "00babad4",
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
                "register:4058:8"
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
      "unmatched:00bab990",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bab994",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bab998",
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
      "00baba2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00baba30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00baba34",
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
- 00babad4 ["INT_ADD", "register:40f0:8", ["const:babad4:8", "const:4:8"]]
- 00babad4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00babb70 ["INT_ADD", "register:40f0:8", ["const:babb70:8", "const:4:8"]]
+ 00babb70 ["CALL", null, ["callee:00c57f80:8"]]
+ 00babad4 ["CBRANCH", null, ["local:b28:8", "register:101:1"]]
- 00bab990 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bab990 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bab990 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bab990 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-2b98396616a723260d5d507d7ce7f780"></a>

### [`00babaf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babaf4.md) → [`00babb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00babb90.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEs

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb50.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c5cc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc20.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00babb6c",
      "incomplete_value": true,
      "site": "00babb70",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00babb68",
      "incomplete_value": true,
      "site": "00babb70",
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
    "new": null,
    "old": {
      "definition_site": "00babba0",
      "incomplete_value": true,
      "site": "00babba4",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00babaf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babb1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00babbd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00babb4c"
      ]
    ]
  ],
  "added": [
    [
      "00babb94",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00babbb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00babbd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00babbe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00babb70 ["INT_ADD", "register:40f0:8", ["const:babb70:8", "const:4:8"]]
- 00babb70 ["CALL", null, ["callee:00c58350:8"]]
+ 00babc0c ["INT_ADD", "register:40f0:8", ["const:babc0c:8", "const:4:8"]]
+ 00babc0c ["CALL", null, ["callee:00c58350:8"]]
- 00babba4 ["INT_ADD", "register:40f0:8", ["const:babba4:8", "const:4:8"]]
- 00babba4 ["CALL", null, ["callee:00c58340:8"]]
+ 00babbfc ["INT_ADD", "register:40f0:8", ["const:babbfc:8", "const:4:8"]]
+ 00babbfc ["CALL", null, ["callee:00c58340:8"]]
- 00babbb4 ["INT_ADD", "register:40f0:8", ["const:babbb4:8", "const:4:8"]]
- 00babbb4 ["CALL", null, ["callee:00c58350:8"]]
+ 00babc50 ["INT_ADD", "register:40f0:8", ["const:babc50:8", "const:4:8"]]
+ 00babc50 ["CALL", null, ["callee:00c58350:8"]]
~~~


<a id="compare-bae1723dabf4c45e326dfe9f284b670c"></a>

### [`00babcc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babcc8.md) → [`00babd64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00babd64.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEt

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cb60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb60.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 1件 [`00c5cc30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc30.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.48% / 新版 72.48%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00babd20",
      "incomplete_value": true,
      "site": "00babd28",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00babdcc",
      "incomplete_value": true,
      "site": "00babdd4",
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
      "definition_site": "00babd30",
      "incomplete_value": true,
      "site": "00babd38",
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
    "new": null,
    "old": {
      "definition_site": "00babd40",
      "incomplete_value": true,
      "site": "00babd44",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00babccc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babcd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babcd4",
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
      "00babd68",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00babd6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00babd70",
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
- 00babd28 ["INT_ADD", "register:40f0:8", ["const:babd28:8", "const:4:8"]]
- 00babd28 ["CALL", null, ["callee:00c58340:8"]]
+ 00babdc4 ["INT_ADD", "register:40f0:8", ["const:babdc4:8", "const:4:8"]]
+ 00babdc4 ["CALL", null, ["callee:00c58340:8"]]
- 00babd38 ["INT_ADD", "register:40f0:8", ["const:babd38:8", "const:4:8"]]
- 00babd38 ["CALL", null, ["callee:00c58350:8"]]
+ 00babdd4 ["INT_ADD", "register:40f0:8", ["const:babdd4:8", "const:4:8"]]
+ 00babdd4 ["CALL", null, ["callee:00c58350:8"]]
- 00babd44 ["INT_ADD", "register:40f0:8", ["const:babd44:8", "const:4:8"]]
- 00babd44 ["CALL", null, ["callee:00c58360:8"]]
+ 00babde0 ["INT_ADD", "register:40f0:8", ["const:babde0:8", "const:4:8"]]
+ 00babde0 ["CALL", null, ["callee:00c58360:8"]]
~~~


<a id="compare-0f03fbca9717c2c20ca42c6ffc00095d"></a>

### [`00babe7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babe7c.md) → [`00babf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bab/00babf18.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cf80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf80.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d050.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.61% / 新版 73.61%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00babfec",
      "incomplete_value": true,
      "site": "00babff4",
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
      "definition_site": "00babff0",
      "incomplete_value": true,
      "site": "00babff4",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00babea4"
      ],
      [
        "CONDITIONAL_JUMP",
        "00babf40"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00babf40",
      "incomplete_value": true,
      "site": "00bac008",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00babea4",
      "incomplete_value": true,
      "site": "00babf6c",
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
      "unmatched:00babe7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babe80",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bac008"
      ]
    ]
  ],
  "added": [
    [
      "00babf18",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00babf1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00babf40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bac008"
      ]
    ]
  ]
}
~~~


~~~diff
- 00babf58 ["INT_ADD", "register:40f0:8", ["const:babf58:8", "const:4:8"]]
- 00babf58 ["CALL", null, ["callee:00c58120:8"]]
+ 00babff4 ["INT_ADD", "register:40f0:8", ["const:babff4:8", "const:4:8"]]
+ 00babff4 ["CALL", null, ["callee:00c58120:8"]]
- 00babe7c ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00babe7c ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00babe7c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00babe7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00babe80 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00babe80 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00babe80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00babe80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9767a3a77a5d1da00e55980500024fa9"></a>

### [`00babf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babf9c.md) → [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) FUN_00bac038

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00b82b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82b58.md) [`00b82cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82cb8.md) [`00babf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babf9c.md) · 呼出先 6件 [`00babf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babf9c.md) [`00bac950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bac/00bac950.md) [`00bacbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bac/00bacbfc.md) [`00bace04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bac/00bace04.md) [`00bad0e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad0e4.md)
- 新版 呼出元 3件 [`00b82bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82bf4.md) [`00b82d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82d54.md) [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) · 呼出先 6件 [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) [`00bac9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac9ec.md) [`00bacc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacc98.md) [`00bacea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bacea0.md) [`00bad180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad180.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.79% / 新版 72.79%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 51件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bac1f8",
      "incomplete_value": true,
      "site": "00bac1f8",
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
                "register:40a0:8"
              ],
              [
                "live",
                "register:40d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bac6cc",
      "incomplete_value": true,
      "site": "00bac6cc",
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
                "register:40a0:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 121,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bac4e8",
      "incomplete_value": true,
      "site": "00bac4f0",
      "value": [
        "live",
        "register:40d8:8"
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
      "definition_site": "00bac4ec",
      "incomplete_value": true,
      "site": "00bac4f0",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00babfb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babfb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00babfd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bac04c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bac050",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bac070",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bac08c ["INT_RIGHT", "register:4060:8", ["register:4040:8", "const:1:8"]]
- 00bac1f8 ["COPY", "tmp:0:8", ["register:4060:8"]]
- 00bac1f8 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00bac1f8 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 00bac1f8 ["COPY", "register:4098:8", ["tmp:0:8"]]
- 00bac454 ["INT_ADD", "register:40f0:8", ["const:bac454:8", "const:4:8"]]
- 00bac454 ["CALL", null, ["local:b0:8"]]
+ 00bac4f0 ["INT_ADD", "register:40f0:8", ["const:bac4f0:8", "const:4:8"]]
+ 00bac4f0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-9a40824e3f7083af549e5deee47c10d7"></a>

### [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) → [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) FUN_00bad494

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00b82b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82b58.md) [`00b82cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82cb8.md) [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) · 呼出先 6件 [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) [`00baddc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00baddc4.md) [`00bae070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae070.md) [`00bae278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae278.md) [`00bae558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae558.md)
- 新版 呼出元 3件 [`00b82bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82bf4.md) [`00b82d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82d54.md) [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) · 呼出先 6件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.40% / 新版 76.40%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 2件, `unresolved_branch_alignment` 49件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bad498",
      "incomplete_value": true,
      "site": "00bad49c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bad544",
      "incomplete_value": true,
      "site": "00bad54c",
      "value": [
        "live",
        "register:40d8:8"
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
      "definition_site": "00bad548",
      "incomplete_value": true,
      "site": "00bad54c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00bad424",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bad444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00badb78"
      ]
    ],
    [
      "unmatched:00bad4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bad5d0"
      ]
    ]
  ],
  "added": [
    [
      "00bad4c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00bad4e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00badb78"
      ]
    ],
    [
      "00bad570",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bad5d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bad49c ["INT_ADD", "register:40f0:8", ["const:bad49c:8", "const:4:8"]]
- 00bad49c ["CALL", null, ["callee:00bae314:8"]]
+ 00bad538 ["INT_ADD", "register:40f0:8", ["const:bad538:8", "const:4:8"]]
+ 00bad538 ["CALL", null, ["callee:00bae314:8"]]
- 00bad4b0 ["INT_ADD", "register:40f0:8", ["const:bad4b0:8", "const:4:8"]]
- 00bad4b0 ["CALL", null, ["callee:00bade60:8"]]
+ 00bad54c ["INT_ADD", "register:40f0:8", ["const:bad54c:8", "const:4:8"]]
+ 00bad54c ["CALL", null, ["callee:00bade60:8"]]
- 00bad4e8 ["INT_RIGHT", "register:4060:8", ["register:4040:8", "const:1:8"]]
~~~


<a id="compare-7a7ddbf3da5baef87ff775fa6e6ceb5c"></a>

### [`00baddc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00baddc4.md) → [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) FUN_00bade60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) [`00bae070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae070.md) [`00bae558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae558.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 3件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.85% / 新版 74.85%

優先判定に残った影響 `unresolved_branch_alignment` 14件, `unresolved_store_alignment` 12件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baddc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baddc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baddcc",
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
      "00bade60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00bade64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bade68",
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
- 00baddc4 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00baddc4 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00baddc4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00baddc4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00baddc8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00baddc8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00baddc8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00baddc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00baddcc ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00baddcc ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00baddcc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00baddcc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4597c4f83beed37143e0a3dc86e12afc"></a>

### [`00bae070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae070.md) → [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) FUN_00bae10c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) [`00bae278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae278.md) [`00bae558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae558.md) · 呼出先 2件 [`00baddc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00baddc4.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 3件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 2件 [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bae1dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bae2d8"
      ]
    ]
  ],
  "added": [
    [
      "00bae278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bae2d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bae09c ["INT_ADD", "register:40f0:8", ["const:bae09c:8", "const:4:8"]]
- 00bae09c ["CALL", null, ["callee:00bade60:8"]]
+ 00bae138 ["INT_ADD", "register:40f0:8", ["const:bae138:8", "const:4:8"]]
+ 00bae138 ["CALL", null, ["callee:00bade60:8"]]
- 00bae10c ["INT_ADD", "register:40f0:8", ["const:bae10c:8", "const:4:8"]]
- 00bae10c ["CALL", null, ["callee:00c58120:8"]]
+ 00bae1a8 ["INT_ADD", "register:40f0:8", ["const:bae1a8:8", "const:4:8"]]
+ 00bae1a8 ["CALL", null, ["callee:00c58120:8"]]
- 00bae14c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00bae14c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 00bae1e8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00bae1e8 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
~~~


<a id="compare-66dc8306a63fbd6b75c9742dec63d7ff"></a>

### [`00bae278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae278.md) → [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) FUN_00bae314

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) [`00bae558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae558.md) · 呼出先 2件 [`00bae070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae070.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) · 呼出先 2件 [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 98.37% / 新版 98.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~diff
- 00bae2ac ["INT_ADD", "register:40f0:8", ["const:bae2ac:8", "const:4:8"]]
- 00bae2ac ["CALL", null, ["callee:00bae10c:8"]]
+ 00bae348 ["INT_ADD", "register:40f0:8", ["const:bae348:8", "const:4:8"]]
+ 00bae348 ["CALL", null, ["callee:00bae10c:8"]]
- 00bae2e0 ["INT_RIGHT", "register:4060:8", ["register:4040:8", "const:1:8"]]
- 00bae300 ["COPY", "tmp:0:8", ["register:4060:8"]]
- 00bae300 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00bae300 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 00bae300 ["COPY", "register:40e0:8", ["tmp:0:8"]]
~~~


<a id="compare-11245b0e73dd11e0ce0777b545baa8c9"></a>

### [`00bae558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae558.md) → [`00bae5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae5f4.md) FUN_00bae5f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) · 呼出先 4件 [`00baddc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00baddc4.md) [`00bae070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae070.md) [`00bae278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae278.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) · 呼出先 4件 [`00bade60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bade60.md) [`00bae10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae10c.md) [`00bae314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae314.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bae638",
      "DATA",
      [
        "storage",
        "0030e212",
        "switchD_00bae5a8::switchdataD_0030e212",
        "byte"
      ]
    ],
    [
      "unmatched:00bae67c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bae8c8"
      ]
    ]
  ],
  "added": [
    [
      "00bae638",
      "DATA",
      [
        "storage",
        "0030e252",
        "switchD_00bae644::switchdataD_0030e252",
        "byte"
      ]
    ],
    [
      "00bae718",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bae8c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bae594 ["COPY", "tmp:0:8", ["const:212:8"]]
- 00bae594 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00bae594 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00bae594 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00bae630 ["COPY", "tmp:0:8", ["const:252:8"]]
+ 00bae630 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00bae630 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00bae630 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00bae598 ["COPY", "register:4050:8", ["const:bae5ac:8"]]
- 00bae610 ["INT_ADD", "register:40f0:8", ["const:bae610:8", "const:4:8"]]
- 00bae610 ["CALL", null, ["callee:00c58120:8"]]
+ 00bae6ac ["INT_ADD", "register:40f0:8", ["const:bae6ac:8", "const:4:8"]]
+ 00bae6ac ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-e2b489ddef2b29ddc1d6c9bc6900a78b"></a>

### [`00baeae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00baeae0.md) → [`00baeb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeb7c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers4TypeEEENS_19__map_value_comp

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce90.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf60.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.20% / 新版 94.20%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baeb64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baebbc"
      ]
    ]
  ],
  "added": [
    [
      "00baec00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baebbc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00baeafc ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00baeafc ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 00baeb98 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00baeb98 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00baeb40 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00baeb40 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00baebdc ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00baebdc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00baeb58 ["COPY", "tmp:0:8", ["register:4058:8"]]
- 00baeb58 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00baeb58 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 00baeb58 ["COPY", "register:40c0:8", ["tmp:0:8"]]
~~~


<a id="compare-be22272b8d1640dba5ce321a441f111a"></a>

### [`00baf728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf728.md) → [`00baf7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf7c4.md) _ZNSt6__ndk127__insertion_sort_incompleteIRPFbPKN11flatbuffers8FieldDefES4_EPPS2_EEbT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cdb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cdb0.md) · 呼出先 2件 [`00baf4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf4c4.md) [`00c5d0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0b0.md)
- 新版 呼出元 1件 [`00c5ce80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce80.md) · 呼出先 2件 [`00baf560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf560.md) [`00c5d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d180.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.19% / 新版 94.19%

優先判定に残った影響 `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baf728",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baf72c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baf730",
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
      "00baf7c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00baf7c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00baf7cc",
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
- 00baf728 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00baf728 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00baf728 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00baf728 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00baf72c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00baf72c ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00baf72c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00baf72c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00baf730 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00baf730 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00baf730 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00baf730 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-306aa75b64a5dd00be3e360e9e3e7880"></a>

### [`00baf9d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf9d8.md) → [`00bafa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafa74.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers10ServiceDefEEENS_19__map_val

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce70.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf40.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.86% / 新版 89.86%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00baf9d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baf9dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00baf9e0",
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
      "00bafa74",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bafa78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bafa7c",
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
- 00baf9d8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00baf9d8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00baf9d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00baf9d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00baf9dc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00baf9dc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00baf9dc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00baf9dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00baf9e0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00baf9e0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00baf9e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00baf9e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e29e7383f86f994d31cb44160797d6e7"></a>

### [`00bafaec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00bafaec.md) → [`00bafb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafb88.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers10ServiceDefEEENS_19__map_val

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce60.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf30.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 79.17% / 新版 79.17%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00bafb14"
      ],
      [
        "CONDITIONAL_JUMP",
        "00bafbb0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bafbb0",
      "incomplete_value": true,
      "site": "00bafc78",
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
      "definition_site": "00bafb14",
      "incomplete_value": true,
      "site": "00bafbdc",
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
      "unmatched:00bafb14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bafc78"
      ]
    ],
    [
      "unmatched:00bafb48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bafc70"
      ]
    ]
  ],
  "added": [
    [
      "00bafbb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bafc78"
      ]
    ],
    [
      "00bafbe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bafc70"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bafb0c ["INT_ADD", "register:40a0:8", ["register:40a0:8", "const:8:8"]]
- 00bafb0c ["LOAD", "register:40b8:8", ["const:1b1:8", "register:40a0:8"]]
- 00bafb10 ["COPY", "register:4098:8", ["register:4008:8"]]
- 00bafb14 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00bafb14 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-d58de96926f9c97735c3dca03bcaba61"></a>

### [`00bafd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00bafd20.md) → [`00bafdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafdbc.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7RPCCallEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cf20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf20.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cff0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.61% / 新版 98.61%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00bafdbc ["INT_ADD", "register:40f0:8", ["const:bafdbc:8", "const:4:8"]]
- 00bafdbc ["CALL", null, ["callee:00c58120:8"]]
+ 00bafe58 ["INT_ADD", "register:40f0:8", ["const:bafe58:8", "const:4:8"]]
+ 00bafe58 ["CALL", null, ["callee:00c58120:8"]]
- 00bafdfc ["INT_ADD", "register:40f0:8", ["const:bafdfc:8", "const:4:8"]]
- 00bafdfc ["CALL", null, ["callee:00c58120:8"]]
+ 00bafe98 ["INT_ADD", "register:40f0:8", ["const:bafe98:8", "const:4:8"]]
+ 00bafe98 ["CALL", null, ["callee:00c58120:8"]]
- 00bafe3c ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bafe3c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-e43469f1427955805bbcc7344c45945a"></a>

### [`00bafe40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00bafe40.md) → [`00bafedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafedc.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cef0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfc0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bafe5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baffd4"
      ]
    ]
  ],
  "added": [
    [
      "00bafef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00baffd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bafe58 ["INT_ADD", "register:4098:8", ["register:4098:8", "const:8:8"]]
- 00bafe58 ["LOAD", "register:40b8:8", ["const:1b1:8", "register:4098:8"]]
- 00bafe5c ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00bafe5c ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00bafe7c ["BRANCH", null, ["local:b5:8"]]
+ 00baff18 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-1ff1aa8f2d5c0764ae45709c7967ad21"></a>

### [`00baff54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baff54.md) → [`00bafff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafff0.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cec0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf90.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.28% / 新版 90.28%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb00c4",
      "incomplete_value": true,
      "site": "00bb00cc",
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
      "definition_site": "00bb00c8",
      "incomplete_value": true,
      "site": "00bb00cc",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00bb0004",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb00b4"
      ]
    ]
  ],
  "added": [
    [
      "00bb00a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb00b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb0030 ["INT_ADD", "register:40f0:8", ["const:bb0030:8", "const:4:8"]]
- 00bb0030 ["CALL", null, ["callee:00c58120:8"]]
+ 00bb00cc ["INT_ADD", "register:40f0:8", ["const:bb00cc:8", "const:4:8"]]
+ 00bb00cc ["CALL", null, ["callee:00c58120:8"]]
- 00baff7c ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00baff7c ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 00bb0018 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00bb0018 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 00baffa4 ["CBRANCH", null, ["local:b22:8", "register:102:1"]]
+ 00bb0040 ["CBRANCH", null, ["local:b21:8", "register:102:1"]]
~~~


<a id="compare-bb79beb89025bb9e0521b88d31aab7b2"></a>

### [`00bb0668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0668.md) → [`00bb0704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0704.md) _ZNSt6__ndk16__treeIN11flatbuffers12IncludedFileENS_4lessIS2_EENS_9allocatorIS2_EEE25__emplace_unique_key_argsIS2_JRKS2_EEENS_4pairINS_15__t

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce30.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce20.md)
- 新版 呼出元 1件 [`00c5cf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf00.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5cef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cef0.md)

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
      "definition_site": "00bb06cc",
      "incomplete_value": true,
      "site": "00bb06d4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb06d0",
      "incomplete_value": true,
      "site": "00bb06d4",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  }
]
~~~


~~~diff
- 00bb06d4 ["INT_ADD", "register:40f0:8", ["const:bb06d4:8", "const:4:8"]]
- 00bb06d4 ["CALL", null, ["callee:00c5b680:8"]]
+ 00bb0770 ["INT_ADD", "register:40f0:8", ["const:bb0770:8", "const:4:8"]]
+ 00bb0770 ["CALL", null, ["callee:00c5b680:8"]]
- 00bb069c ["INT_ADD", "register:40f0:8", ["const:bb069c:8", "const:4:8"]]
- 00bb069c ["CALL", null, ["callee:00c5cef0:8"]]
+ 00bb0738 ["INT_ADD", "register:40f0:8", ["const:bb0738:8", "const:4:8"]]
+ 00bb0738 ["CALL", null, ["callee:00c5cef0:8"]]
- 00bb06ac ["BRANCH", null, ["local:b6:8"]]
+ 00bb0748 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-bfe6ff40c990b77aac666cca4e73c929"></a>

### [`00bb0870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0870.md) → [`00bb090c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb090c.md) _ZNSt6__ndk16__treeINS_12__value_typeImNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareImS8_NS_4lessImEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfa0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 1件 [`00c5d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d070.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.80% / 新版 67.80%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bb0918"
      ],
      [
        "FALL_THROUGH",
        "00bb09b4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bb09b4",
      "incomplete_value": true,
      "site": "00bb09b8",
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
      "definition_site": "00bb0918",
      "incomplete_value": true,
      "site": "00bb091c",
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
      "unmatched:00bb0870",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb0874",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb08ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0934"
      ]
    ]
  ],
  "added": [
    [
      "00bb090c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb0910",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bb0948",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0934"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb0870 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bb0870 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bb0870 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb0874 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bb0874 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bb0874 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb0874 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bb0878 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bb0878 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bb0878 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bb0878 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-d8dd9fd2cee848d7158089528c812be6"></a>

### [`00bb095c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb095c.md) → [`00bb09f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb09f8.md) FUN_00bb09f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00b8e0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8e/00b8e0dc.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5ca40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca40.md)
- 新版 呼出元 1件 [`00b8e178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8e178.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb10.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 88.31% / 新版 88.31%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~diff
- 00bb09a0 ["INT_ADD", "register:40f0:8", ["const:bb09a0:8", "const:4:8"]]
- 00bb09a0 ["CALL", null, ["callee:00c5cb10:8"]]
+ 00bb0a3c ["INT_ADD", "register:40f0:8", ["const:bb0a3c:8", "const:4:8"]]
+ 00bb0a3c ["CALL", null, ["callee:00c5cb10:8"]]
- 00bb09b8 ["INT_ADD", "register:40f0:8", ["const:bb09b8:8", "const:4:8"]]
- 00bb09b8 ["CALL", null, ["callee:00c5cb10:8"]]
+ 00bb0a54 ["INT_ADD", "register:40f0:8", ["const:bb0a54:8", "const:4:8"]]
+ 00bb0a54 ["CALL", null, ["callee:00c5cb10:8"]]
- 00bb09cc ["INT_RIGHT", "register:4058:8", ["register:40a8:8", "const:1:8"]]
~~~


<a id="compare-b76c51e534c1e990a3be3d8e5bc944b7"></a>

### [`00bb0a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0a90.md) → [`00bb0b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0b2c.md) _ZNSt6__ndk16__sortIRPFbPKN11flatbuffers9StructDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ce00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce00.md) · 呼出先 5件 [`00bb112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb112c.md) [`00c5cc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc00.md) [`00c5cdc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cdc0.md) [`00c5ce00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce00.md) [`00c5d0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0c0.md)
- 新版 呼出元 1件 [`00c5ced0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ced0.md) · 呼出先 5件 [`00bb11c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb11c8.md) [`00c5ccd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccd0.md) [`00c5ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce90.md) [`00c5ced0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ced0.md) [`00c5d190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d190.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb0bc0",
      "incomplete_value": true,
      "site": "00bb0bd0",
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
      "definition_site": "00bb0bb8",
      "incomplete_value": true,
      "site": "00bb0bd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "INT_AND",
            "8",
            [
              "INT_LEFT",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb0bc4",
      "incomplete_value": true,
      "site": "00bb0bd0",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:00bb0ae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0ebc"
      ]
    ],
    [
      "unmatched:00bb0d68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0e28"
      ]
    ],
    [
      "unmatched:00bb0e2c",
      "DATA",
      [
        "storage",
        "0030e224",
        "switchD_00bb0e34::switchdataD_0030e224",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00bb0b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0ebc"
      ]
    ],
    [
      "00bb0e04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb0e28"
      ]
    ],
    [
      "00bb0ec8",
      "DATA",
      [
        "storage",
        "0030e264",
        "switchD_00bb0ed0::switchdataD_0030e264",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb0b34 ["INT_ADD", "register:40f0:8", ["const:bb0b34:8", "const:4:8"]]
- 00bb0b34 ["CALL", null, ["callee:00bb11c8:8"]]
+ 00bb0bd0 ["INT_ADD", "register:40f0:8", ["const:bb0bd0:8", "const:4:8"]]
+ 00bb0bd0 ["CALL", null, ["callee:00bb11c8:8"]]
- 00bb0cfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb0cfc ["INT_ADD", "register:40f0:8", ["const:bb0cfc:8", "const:4:8"]]
- 00bb0cfc ["CALLIND", null, ["register:0:8"]]
+ 00bb0d98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb0d98 ["INT_ADD", "register:40f0:8", ["const:bb0d98:8", "const:4:8"]]
+ 00bb0d98 ["CALLIND", null, ["register:0:8"]]
- 00bb0adc ["COPY", "tmp:0:8", ["const:5:8"]]
- 00bb0adc ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 00bb0adc ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bb0adc ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b8d96e6db3b63ec3eeb9cc9a8e5d6c54"></a>

### [`00bb1774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1774.md) → [`00bb1810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1810.md) _ZNSt6__ndk16__sortIRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cde0.md) · 呼出先 5件 [`00bb1e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1e10.md) [`00c5cbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbe0.md) [`00c5cda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cda0.md) [`00c5cde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cde0.md) [`00c5d0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0a0.md)
- 新版 呼出元 1件 [`00c5ceb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ceb0.md) · 呼出先 5件 [`00bb1eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1eac.md) [`00c5ccb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccb0.md) [`00c5ce70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce70.md) [`00c5ceb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ceb0.md) [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 94.79% / 新版 94.79%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bb1ac8"
      ],
      [
        "FALL_THROUGH",
        "00bb1b64"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00bb1b74",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00bb1ac4",
      "incomplete_value": true,
      "site": "00bb1ad8",
      "value": [
        "INT_LESSEQUAL",
        "1",
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
    "ordinal": 31,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb1ac0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb1b4c"
      ]
    ],
    [
      "unmatched:00bb1ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb184c"
      ]
    ],
    [
      "unmatched:00bb1b10",
      "DATA",
      [
        "storage",
        "0030e230",
        "switchD_00bb1b18::switchdataD_0030e230",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00bb1b5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb1b4c"
      ]
    ],
    [
      "00bb1b64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb184c"
      ]
    ],
    [
      "00bb1bac",
      "DATA",
      [
        "storage",
        "0030e270",
        "switchD_00bb1bb4::switchdataD_0030e270",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb17c4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00bb17c4 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00bb17c4 ["CBRANCH", null, ["local:b63:8", "tmp:1:1"]]
+ 00bb1860 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00bb1860 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00bb1860 ["CBRANCH", null, ["local:b61:8", "tmp:1:1"]]
- 00bb17cc ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bb17cc ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00bb17cc ["CBRANCH", null, ["local:b67:8", "tmp:1:1"]]
+ 00bb1868 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bb1868 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 00bb1868 ["CBRANCH", null, ["local:b64:8", "tmp:1:1"]]
- 00bb1818 ["INT_ADD", "register:40f0:8", ["const:bb1818:8", "const:4:8"]]
- 00bb1818 ["CALL", null, ["callee:00bb1eac:8"]]
+ 00bb18b4 ["INT_ADD", "register:40f0:8", ["const:bb18b4:8", "const:4:8"]]
+ 00bb18b4 ["CALL", null, ["callee:00bb1eac:8"]]
~~~


<a id="compare-4ca19654a68e534bb0e3769609bc6a1b"></a>

### [`00bb1c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1c8c.md) → [`00bb1d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1d28.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0a0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.69% / 新版 89.69%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb1cd8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00bb1dcc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bb1d74",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00bb1e68",
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
- 00bb1cc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1cc0 ["INT_ADD", "register:40f0:8", ["const:bb1cc0:8", "const:4:8"]]
- 00bb1cc0 ["CALLIND", null, ["register:0:8"]]
+ 00bb1d5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb1d5c ["INT_ADD", "register:40f0:8", ["const:bb1d5c:8", "const:4:8"]]
+ 00bb1d5c ["CALLIND", null, ["register:0:8"]]
- 00bb1cd4 ["COPY", "register:4000:8", ["register:4040:8"]]
- 00bb1cd8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1cd8 ["INT_ADD", "register:40f0:8", ["const:bb1cd8:8", "const:4:8"]]
- 00bb1cd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-28d379302bc0723dd82f05d881987e5f"></a>

### [`00bb1e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1e10.md) → [`00bb1eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1eac.md) FUN_00bb1eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00bb1774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1774.md) [`00bb2074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2074.md) · 呼出先 1件 [`00c5d0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0a0.md)
- 新版 呼出元 2件 [`00bb1810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1810.md) [`00bb2110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2110.md) · 呼出先 1件 [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `unresolved_store_alignment` 2件

~~~diff
- 00bb1e44 ["INT_ADD", "register:40f0:8", ["const:bb1e44:8", "const:4:8"]]
- 00bb1e44 ["CALL", null, ["callee:00c5d170:8"]]
+ 00bb1ee0 ["INT_ADD", "register:40f0:8", ["const:bb1ee0:8", "const:4:8"]]
+ 00bb1ee0 ["CALL", null, ["callee:00c5d170:8"]]
- 00bb1e5c ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1e5c ["INT_ADD", "register:40f0:8", ["const:bb1e5c:8", "const:4:8"]]
- 00bb1e5c ["CALLIND", null, ["register:0:8"]]
+ 00bb1ef8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb1ef8 ["INT_ADD", "register:40f0:8", ["const:bb1ef8:8", "const:4:8"]]
+ 00bb1ef8 ["CALLIND", null, ["register:0:8"]]
- 00bb1e60 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00bb1e60 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00bb1e60 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00bb1e60 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00bb1efc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00bb1efc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00bb1efc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00bb1efc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-16b816ab1f92e1b8f44633df7a722285"></a>

### [`00bb1f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1f18.md) → [`00bb1fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1fb4.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbe0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ccb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccb0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb20a0",
      "incomplete_value": true,
      "site": "00bb20b0",
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
            "register:40b8:8"
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
      "unmatched:00bb1fe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb20f8"
      ]
    ]
  ],
  "added": [
    [
      "00bb207c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb20f8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2014 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb2014 ["INT_ADD", "register:40f0:8", ["const:bb2014:8", "const:4:8"]]
- 00bb2014 ["CALLIND", null, ["register:0:8"]]
+ 00bb20b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb20b0 ["INT_ADD", "register:40f0:8", ["const:bb20b0:8", "const:4:8"]]
+ 00bb20b0 ["CALLIND", null, ["register:0:8"]]
- 00bb1f48 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1f48 ["INT_ADD", "register:40f0:8", ["const:bb1f48:8", "const:4:8"]]
- 00bb1f48 ["CALLIND", null, ["register:0:8"]]
+ 00bb1fe4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb1fe4 ["INT_ADD", "register:40f0:8", ["const:bb1fe4:8", "const:4:8"]]
+ 00bb1fe4 ["CALLIND", null, ["register:0:8"]]
- 00bb1f64 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1f64 ["INT_ADD", "register:40f0:8", ["const:bb1f64:8", "const:4:8"]]
- 00bb1f64 ["CALLIND", null, ["register:0:8"]]
+ 00bb2000 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2000 ["INT_ADD", "register:40f0:8", ["const:bb2000:8", "const:4:8"]]
+ 00bb2000 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-393c7970c4b32245de177fe8a53292e5"></a>

### [`00bb2074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2074.md) → [`00bb2110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2110.md) _ZNSt6__ndk127__insertion_sort_incompleteIRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEbT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cda0.md) · 呼出先 2件 [`00bb1e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1e10.md) [`00c5d0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0a0.md)
- 新版 呼出元 1件 [`00c5ce70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce70.md) · 呼出先 2件 [`00bb1eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1eac.md) [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb20a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb21e8"
      ]
    ],
    [
      "00bb2150",
      "DATA",
      [
        "storage",
        "0030e236",
        "switchD_00bb20c0::switchdataD_0030e236",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00bb2140",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb21e8"
      ]
    ],
    [
      "00bb2150",
      "DATA",
      [
        "storage",
        "0030e276",
        "switchD_00bb215c::switchdataD_0030e276",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2090 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
- 00bb2094 ["COPY", "register:40a0:8", ["register:4008:8"]]
- 00bb2098 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-54c2ea2a0aa6311e27b61e485b17abc6"></a>

### [`00bb2324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2324.md) → [`00bb23c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb23c0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE21CreateVectorOfStringsINSt6__ndk111__wrap_iterIPKNS3_12basic_stringIcNS3_11char_traitsIcEENS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2c0.md) · 呼出先 4件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md) [`00c5c280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c280.md) [`00c5c2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2a0.md)
- 新版 呼出元 1件 [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) · 呼出先 4件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md) [`00c5c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c350.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.24% / 新版 92.24%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb2510",
      "incomplete_value": true,
      "site": "00bb2518",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00bb2514",
      "incomplete_value": true,
      "site": "00bb2518",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00bb239c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb248c"
      ]
    ],
    [
      "unmatched:00bb24a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb24b4"
      ]
    ]
  ],
  "added": [
    [
      "00bb2438",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb248c"
      ]
    ],
    [
      "00bb253c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb24b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb247c ["INT_ADD", "register:40f0:8", ["const:bb247c:8", "const:4:8"]]
- 00bb247c ["CALL", null, ["callee:00c5c270:8"]]
+ 00bb2518 ["INT_ADD", "register:40f0:8", ["const:bb2518:8", "const:4:8"]]
+ 00bb2518 ["CALL", null, ["callee:00c5c270:8"]]
- 00bb2370 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
+ 00bb240c ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
- 00bb237c ["INT_ADD", "register:40f0:8", ["const:bb237c:8", "const:4:8"]]
- 00bb237c ["CALL", null, ["callee:00c5c270:8"]]
+ 00bb2418 ["INT_ADD", "register:40f0:8", ["const:bb2418:8", "const:4:8"]]
+ 00bb2418 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-8a8d5ca5df129ab99b319bdae3749d7a"></a>

### [`00bb2544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2544.md) → [`00bb25e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb25e0.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca80.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb50.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 88.41% / 新版 88.41%

優先判定に残った影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb25c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb2620"
      ]
    ]
  ],
  "added": [
    [
      "00bb2664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb2620"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2560 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00bb2560 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00bb25fc ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00bb25fc ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00bb2580 ["BRANCH", null, ["local:b4:8"]]
+ 00bb261c ["BRANCH", null, ["local:b5:8"]]
- 00bb259c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bb259c ["COPY", "tmp:1:8", ["register:40a0:8"]]
- 00bb259c ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00bb259c ["COPY", "tmp:1:8", ["register:40b8:8"]]
~~~


<a id="compare-bc2cf24afc48ed7d970dcb739fdbd3ac"></a>

### [`00bb26b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb26b4.md) → [`00bb2750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2750.md) _ZN11flatbuffers9DirExistsEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c59860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59860.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59930.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb275c",
      "incomplete_value": true,
      "site": "00bb2760",
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
            "const:90:8"
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
- 00bb26c4 ["INT_ADD", "register:40f0:8", ["const:bb26c4:8", "const:4:8"]]
- 00bb26c4 ["CALL", null, ["callee:00c59930:8"]]
+ 00bb2760 ["INT_ADD", "register:40f0:8", ["const:bb2760:8", "const:4:8"]]
+ 00bb2760 ["CALL", null, ["callee:00c59930:8"]]
- 00bb26c8 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 00bb26c8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bb2764 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 00bb2764 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bb26d0 ["BRANCH", null, ["local:b4:8"]]
+ 00bb276c ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-7892311909d08d90e3b48911a2c24a57"></a>

### [`00bb26e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb26e8.md) → [`00bb2784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2784.md) _ZN11flatbuffers19SetLoadFileFunctionEPFbPKcbPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bb270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb270c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bb27a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb27a8.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bb27a0",
      "incomplete_value": true,
      "site": "00bb27a0",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb2704",
      "incomplete_value": true,
      "site": "00bb2704",
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
            "const:6a8:8"
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
      "00bb2788",
      "READ",
      [
        "storage",
        "00ca46a8",
        null,
        "pointer"
      ]
    ],
    [
      "00bb279c",
      "DATA",
      [
        "storage",
        "00bb270c",
        null,
        null
      ]
    ],
    [
      "00bb27a0",
      "WRITE",
      [
        "storage",
        "00ca46a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb2788",
      "READ",
      [
        "storage",
        "00ca4778",
        null,
        "pointer"
      ]
    ],
    [
      "00bb279c",
      "DATA",
      [
        "storage",
        "00bb27a8",
        null,
        null
      ]
    ],
    [
      "00bb27a0",
      "WRITE",
      [
        "storage",
        "00ca4778",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2704 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6a8:8"]]
- 00bb2704 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00bb27a0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:778:8"]]
+ 00bb27a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 00bb26ec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6a8:8"]]
- 00bb26ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb2788 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:778:8"]]
+ 00bb2788 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb26f4 ["COPY", "register:4050:8", ["const:bb270c:8"]]
+ 00bb2790 ["COPY", "register:4050:8", ["const:bb27a8:8"]]
~~~


<a id="compare-d7cc7464af24aea451c1bf355d08a48b"></a>

### [`00bb270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb270c.md) → [`00bb27a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb27a8.md) FUN_00bb27a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00bb2698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2698.md) [`00bb26e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb26e8.md) · 呼出先 17件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 2件 [`00bb2734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2734.md) [`00bb2784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2784.md) · 呼出先 17件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.27% / 新版 90.27%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2840",
      "incomplete_value": true,
      "site": "00bb2848",
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
      "definition_site": "00bb27a4",
      "incomplete_value": true,
      "site": "00bb27ac",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2844",
      "incomplete_value": true,
      "site": "00bb2850",
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
      "definition_site": "00bb27a8",
      "incomplete_value": true,
      "site": "00bb27b4",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2908",
      "incomplete_value": true,
      "site": "00bb2914",
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
      "definition_site": "00bb286c",
      "incomplete_value": true,
      "site": "00bb2878",
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
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb2744",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00bb27f8",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bb2784",
      "DATA",
      [
        "storage",
        "00c90f38",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb27e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00bb27f8",
      "READ",
      [
        "storage",
        "00c9b990",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2820",
      "DATA",
      [
        "storage",
        "00c91008",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2748 ["INT_ADD", "register:40f0:8", ["const:bb2748:8", "const:4:8"]]
- 00bb2748 ["CALL", null, ["callee:00c59930:8"]]
+ 00bb27e4 ["INT_ADD", "register:40f0:8", ["const:bb27e4:8", "const:4:8"]]
+ 00bb27e4 ["CALL", null, ["callee:00c59930:8"]]
- 00bb2914 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00bb2914 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00bb2914 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00bb2914 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00bb29b0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00bb29b0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00bb29b0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00bb29b0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00bb2940 ["INT_ADD", "register:40f0:8", ["const:bb2940:8", "const:4:8"]]
- 00bb2940 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00bb29dc ["INT_ADD", "register:40f0:8", ["const:bb29dc:8", "const:4:8"]]
+ 00bb29dc ["CALL", null, ["callee:00c5bf40:8"]]
~~~


<a id="compare-e4322aae82520c02edc418e9d7cb1a8e"></a>

### [`00bb2b10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2b10.md) → [`00bb2bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2bac.md) _ZN11flatbuffers21SetFileExistsFunctionEPFbPKcE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bb2b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2b34.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bb2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2bd0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bb2bc8",
      "incomplete_value": true,
      "site": "00bb2bc8",
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
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb2b2c",
      "incomplete_value": true,
      "site": "00bb2b2c",
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
            "const:6b0:8"
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
      "00bb2bb0",
      "READ",
      [
        "storage",
        "00ca46b0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2bc4",
      "DATA",
      [
        "storage",
        "00bb2b34",
        null,
        null
      ]
    ],
    [
      "00bb2bc8",
      "WRITE",
      [
        "storage",
        "00ca46b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb2bb0",
      "READ",
      [
        "storage",
        "00ca4780",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2bc4",
      "DATA",
      [
        "storage",
        "00bb2bd0",
        null,
        null
      ]
    ],
    [
      "00bb2bc8",
      "WRITE",
      [
        "storage",
        "00ca4780",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2b2c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6b0:8"]]
- 00bb2b2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00bb2bc8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:780:8"]]
+ 00bb2bc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 00bb2b14 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6b0:8"]]
- 00bb2b14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb2bb0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:780:8"]]
+ 00bb2bb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb2b1c ["COPY", "register:4050:8", ["const:bb2b34:8"]]
+ 00bb2bb8 ["COPY", "register:4050:8", ["const:bb2bd0:8"]]
~~~


<a id="compare-e572dbaf0a8a7f3eb693d81d73a5c173"></a>

### [`00bb2b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2b34.md) → [`00bb2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2bd0.md) FUN_00bb2bd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00bb26a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb26a8.md) [`00bb2b10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2b10.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a090.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 2件 [`00bb2744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2744.md) [`00bb2bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2bac.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5a160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a160.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 69.14% / 新版 69.14%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2c48",
      "incomplete_value": true,
      "site": "00bb2c50",
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
      "definition_site": "00bb2bac",
      "incomplete_value": true,
      "site": "00bb2bb4",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2c4c",
      "incomplete_value": true,
      "site": "00bb2c58",
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
      "definition_site": "00bb2bb0",
      "incomplete_value": true,
      "site": "00bb2bbc",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb2c1c",
      "incomplete_value": true,
      "site": "00bb2c30",
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
                "const:1b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb2b80",
      "incomplete_value": true,
      "site": "00bb2b94",
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
            "const:b8:8"
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
      "unmatched:00bb2b38",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb2b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb2b40",
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
      "00bb2bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bb2bd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bb2bdc",
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
- 00bb2b94 ["INT_ADD", "register:40f0:8", ["const:bb2b94:8", "const:4:8"]]
- 00bb2b94 ["CALL", null, ["callee:00c582b0:8"]]
+ 00bb2c30 ["INT_ADD", "register:40f0:8", ["const:bb2c30:8", "const:4:8"]]
+ 00bb2c30 ["CALL", null, ["callee:00c582b0:8"]]
- 00bb2bf4 ["INT_ADD", "register:40f0:8", ["const:bb2bf4:8", "const:4:8"]]
- 00bb2bf4 ["CALL", null, ["callee:00c5a160:8"]]
+ 00bb2c90 ["INT_ADD", "register:40f0:8", ["const:bb2c90:8", "const:4:8"]]
+ 00bb2c90 ["CALL", null, ["callee:00c5a160:8"]]
+ 00bb2bf4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:990:8"]]
+ 00bb2bf4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d8af156b1a6a6962c1a0b75b3f5f3588"></a>

### [`00bb2c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2c78.md) → [`00bb2d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2d14.md) _ZN11flatbuffers8SaveFileEPKcS1_mb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58c70.md) [`00c58f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f10.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58d40.md) [`00c58fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.51% / 新版 94.51%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2d60",
      "incomplete_value": true,
      "site": "00bb2d74",
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
      "definition_site": "00bb2cc4",
      "incomplete_value": true,
      "site": "00bb2cd8",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2d5c",
      "incomplete_value": true,
      "site": "00bb2d78",
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
      "definition_site": "00bb2cc0",
      "incomplete_value": true,
      "site": "00bb2cdc",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb2d94",
      "incomplete_value": true,
      "site": "00bb2d9c",
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
      "definition_site": "00bb2cf8",
      "incomplete_value": true,
      "site": "00bb2d00",
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
      "00bb2d40",
      "READ",
      [
        "storage",
        "00c9b8c8",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2d74",
      "DATA",
      [
        "storage",
        "00c91140",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2d78",
      "DATA",
      [
        "storage",
        "00c91118",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb2d40",
      "READ",
      [
        "storage",
        "00c9b998",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2d74",
      "DATA",
      [
        "storage",
        "00c91210",
        null,
        "pointer"
      ]
    ],
    [
      "00bb2d78",
      "DATA",
      [
        "storage",
        "00c911e8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb2ca4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:8c8:8"]]
- 00bb2ca4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb2d40 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:998:8"]]
+ 00bb2d40 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb2ce0 ["INT_ADD", "register:40f0:8", ["const:bb2ce0:8", "const:4:8"]]
- 00bb2ce0 ["CALL", null, ["callee:00c582b0:8"]]
+ 00bb2d7c ["INT_ADD", "register:40f0:8", ["const:bb2d7c:8", "const:4:8"]]
+ 00bb2d7c ["CALL", null, ["callee:00c582b0:8"]]
- 00bb2ce8 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:ec0:8"]]
- 00bb2ce8 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb2d84 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:f90:8"]]
+ 00bb2d84 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7dc89adbde632d2c548cf9b75a0c604a"></a>

### [`00bb312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb312c.md) → [`00bb31c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb31c8.md) _ZN11flatbuffers11StripPrefixERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) [`00c5b7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7f0.md) [`00c5d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d130.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md) [`00c5d200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d200.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.53% / 新版 73.53%

アドレスに依存する影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb312c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3130",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3134",
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
      "00bb31c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb31cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb31d0",
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
- 00bb312c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bb312c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bb312c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb3130 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bb3130 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bb3130 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb3130 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bb3134 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bb3134 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bb3134 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bb3134 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-459e37a4894bd21f48f70f3a0d209fa4"></a>

### [`00bb3344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3344.md) → [`00bb33e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb33e0.md) _ZN11flatbuffers9PosixPathEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c870.md) · 呼出先 1件 [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5c940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c940.md) · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.82% / 新版 98.82%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00bb335c ["INT_ADD", "register:40f0:8", ["const:bb335c:8", "const:4:8"]]
- 00bb335c ["CALL", null, ["callee:00c5b690:8"]]
+ 00bb33f8 ["INT_ADD", "register:40f0:8", ["const:bb33f8:8", "const:4:8"]]
+ 00bb33f8 ["CALL", null, ["callee:00c5b690:8"]]
- 00bb3494 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bb3494 ["RETURN", null, ["register:0:8"]]
+ 00bb3530 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00bb3530 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-dbc2ec61d42af3f766f4cc47fdfe95e3"></a>

### [`00bb3498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3498.md) → [`00bb3534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3534.md) _ZN11flatbuffers9PosixPathERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.77% / 新版 89.77%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb3554",
      "incomplete_value": true,
      "site": "00bb3558",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00bb34e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb365c"
      ]
    ],
    [
      "unmatched:00bb3500",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb35ac"
      ]
    ],
    [
      "unmatched:00bb350c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb3654"
      ]
    ]
  ],
  "added": [
    [
      "00bb3580",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb365c"
      ]
    ],
    [
      "00bb359c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb35ac"
      ]
    ],
    [
      "00bb35a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb3654"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb34bc ["INT_ADD", "register:40f0:8", ["const:bb34bc:8", "const:4:8"]]
- 00bb34bc ["CALL", null, ["callee:00c5b690:8"]]
+ 00bb3558 ["INT_ADD", "register:40f0:8", ["const:bb3558:8", "const:4:8"]]
+ 00bb3558 ["CALL", null, ["callee:00c5b690:8"]]
- 00bb3558 ["BRANCH", null, ["local:b22:8"]]
+ 00bb35f4 ["BRANCH", null, ["local:b24:8"]]
- 00bb34b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00bb34b4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00bb34b4 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00bb34b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "const:1:8"]]
~~~


<a id="compare-fba73f42383ebfb2d8ab6e7341c1ae13"></a>

### [`00bb37d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb37d8.md) → [`00bb3874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3874.md) _ZN11flatbuffers18RelativeToRootPathERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d170.md) · 呼出先 10件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5d240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d240.md) · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.23% / 新版 68.23%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 4件, `unresolved_branch_alignment` 39件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb3a0c",
      "incomplete_value": true,
      "site": "00bb3a14",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb3a08",
      "incomplete_value": false,
      "site": "00bb3a14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:352:8"
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
    "new": null,
    "old": {
      "definition_site": "00bb3a10",
      "incomplete_value": false,
      "site": "00bb3a14",
      "value": [
        "leaf",
        "const:1:8"
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
      "00bb3960",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb39a0"
      ]
    ],
    [
      "00bb3998",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb393c"
      ]
    ],
    [
      "unmatched:00bb3904",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb3948"
      ]
    ]
  ],
  "added": [
    [
      "00bb3960",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb3a3c"
      ]
    ],
    [
      "00bb3998",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb39d8"
      ]
    ],
    [
      "00bb39a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb39e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb39d0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00bb39d0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00bb39d0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00bb39d0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00bb3a6c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00bb3a6c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00bb3a6c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00bb3a6c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00bb3a14 ["INT_ADD", "register:40f0:8", ["const:bb3a14:8", "const:4:8"]]
- 00bb3a14 ["CALL", null, ["callee:00c58050:8"]]
+ 00bb3ab0 ["INT_ADD", "register:40f0:8", ["const:bb3ab0:8", "const:4:8"]]
+ 00bb3ab0 ["CALL", null, ["callee:00c58050:8"]]
+ 00bb3a14 ["COPY", "tmp:0:4", ["register:4068:4"]]
+ 00bb3a14 ["INT_ADD", "tmp:1:8", ["register:4060:8", "const:2:8"]]
+ 00bb3a14 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
~~~


<a id="compare-4272a30f99642bef81240828a9147e87"></a>

### [`00bb3d80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3d80.md) → [`00bb3e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3e1c.md) _ZN11flatbuffers13ClassicLocaleC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb3d94",
      "incomplete_value": false,
      "site": "00bb3da0",
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
            "const:17c:8"
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
      "unmatched:00bb3d94",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bb3e30",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb3da0 ["INT_ADD", "register:40f0:8", ["const:bb3da0:8", "const:4:8"]]
- 00bb3da0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00bb3e3c ["INT_ADD", "register:40f0:8", ["const:bb3e3c:8", "const:4:8"]]
+ 00bb3e3c ["CALL", null, ["callee:00c5d2f0:8"]]
- 00bb3d94 ["COPY", "tmp:0:8", ["const:17c:8"]]
- 00bb3d94 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bb3d94 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bb3d94 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bb3e30 ["COPY", "tmp:0:8", ["const:1bc:8"]]
+ 00bb3e30 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bb3e30 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bb3e30 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-a0d23de53e0498f6ac8e95081fda11ab"></a>

### [`00bb3db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3db4.md) → [`00bb3e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3e50.md) _ZN11flatbuffers13ClassicLocaleD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00bb6660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb6660.md) · 呼出先 1件 [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md)
- 新版 呼出元 1件 [`00bb66fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb66fc.md) · 呼出先 1件 [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb3db8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5d2a0"
      ]
    ]
  ],
  "added": [
    [
      "00bb3e54",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5d2a0"
      ]
    ]
  ]
}
~~~


<a id="compare-0c5ca31aded26e4984ddd703d0aee181"></a>

### [`00bb3e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3e18.md) → [`00bb3eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3eb4.md) _ZN11flatbuffers19SetGlobalTestLocaleEPKcPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb3f28",
      "incomplete_value": true,
      "site": "00bb3f2c",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "00bb3e8c",
      "incomplete_value": true,
      "site": "00bb3e90",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
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
      "definition_site": "00bb3f40",
      "incomplete_value": true,
      "site": "00bb3f4c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00bb3f44",
      "incomplete_value": true,
      "site": "00bb3f4c",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb3e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3e24",
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
      "00bb3eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bb3ebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb3ec0",
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
- 00bb3e90 ["INT_ADD", "register:40f0:8", ["const:bb3e90:8", "const:4:8"]]
- 00bb3e90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bb3f2c ["INT_ADD", "register:40f0:8", ["const:bb3f2c:8", "const:4:8"]]
+ 00bb3f2c ["CALL", null, ["callee:00c57f60:8"]]
- 00bb3eb0 ["INT_ADD", "register:40f0:8", ["const:bb3eb0:8", "const:4:8"]]
- 00bb3eb0 ["CALL", null, ["callee:00c580d0:8"]]
+ 00bb3f4c ["INT_ADD", "register:40f0:8", ["const:bb3f4c:8", "const:4:8"]]
+ 00bb3f4c ["CALL", null, ["callee:00c580d0:8"]]
- 00bb3e18 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
~~~


<a id="compare-0aeeffb634abae21901a8f0d5b03598b"></a>

### [`00bb3f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb3f18.md) → [`00bb3fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3fb4.md) _ZN11flatbuffers23ReadEnvironmentVariableEPKcPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c598a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c598a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c59970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59970.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.03% / 新版 79.03%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bb3f60"
      ],
      [
        "FALL_THROUGH",
        "00bb3ffc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bb3ff8",
      "incomplete_value": true,
      "site": "00bb400c",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00bb3f70",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00bb3f60"
      ],
      [
        "CONDITIONAL_JUMP",
        "00bb3ffc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bb3ff8",
      "incomplete_value": true,
      "site": "00bb4030",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00bb3f94",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00bb3f60"
      ],
      [
        "CONDITIONAL_JUMP",
        "00bb3ffc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bb3ff8",
      "incomplete_value": true,
      "site": "00bb4030",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00bb3f94",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb3f1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3f20",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb3f24",
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
      "00bb3fb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bb3fbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb3fc0",
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
- 00bb400c ["INT_ADD", "register:40f0:8", ["const:bb400c:8", "const:4:8"]]
- 00bb400c ["CALL", null, ["callee:00c5b210:8"]]
+ 00bb40a8 ["INT_ADD", "register:40f0:8", ["const:bb40a8:8", "const:4:8"]]
+ 00bb40a8 ["CALL", null, ["callee:00c5b210:8"]]
- 00bb3f18 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00bb3f1c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 00bb3f1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-1a9aba1af0ad1a74403ce68740857d49"></a>

### [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) → [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) _ZN11flatbuffers11ConvertCaseERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEENS_4CaseES9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) [`00c5c710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c710.md) · 呼出先 19件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md) [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) [`00bb4d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4d84.md) [`00bb5150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5150.md) [`00bb5168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5168.md)
- 新版 呼出元 2件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) [`00c5c7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7e0.md) · 呼出先 19件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md) [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) [`00bb4e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb4e20.md) [`00bb51ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb51ec.md) [`00bb5204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5204.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.69% / 新版 69.69%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 44件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb4548",
      "incomplete_value": true,
      "site": "00bb4548",
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
      "definition_site": "00bb44ac",
      "incomplete_value": true,
      "site": "00bb44ac",
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
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb4548",
      "incomplete_value": true,
      "site": "00bb4548",
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
                "const:970:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb44ac",
      "incomplete_value": true,
      "site": "00bb44ac",
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
                "const:8a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb48e4",
      "incomplete_value": true,
      "site": "00bb48e4",
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
      "definition_site": "00bb4848",
      "incomplete_value": true,
      "site": "00bb4848",
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
    "ordinal": 65,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb4024",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb4028",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb4044",
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
      "00bb40c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb40c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bb40e0",
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
- 00bb4054 ["INT_ADD", "register:40f0:8", ["const:bb4054:8", "const:4:8"]]
- 00bb4054 ["CALL", null, ["callee:00c5b680:8"]]
+ 00bb40f0 ["INT_ADD", "register:40f0:8", ["const:bb40f0:8", "const:4:8"]]
+ 00bb40f0 ["CALL", null, ["callee:00c5b680:8"]]
- 00bb4088 ["INT_ADD", "register:40f0:8", ["const:bb4088:8", "const:4:8"]]
- 00bb4088 ["CALL", null, ["callee:00c58540:8"]]
+ 00bb4124 ["INT_ADD", "register:40f0:8", ["const:bb4124:8", "const:4:8"]]
+ 00bb4124 ["CALL", null, ["callee:00c58540:8"]]
- 00bb4548 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb4548 ["INT_ADD", "register:40f0:8", ["const:bb4548:8", "const:4:8"]]
- 00bb4548 ["CALLIND", null, ["register:0:8"]]
+ 00bb45e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb45e4 ["INT_ADD", "register:40f0:8", ["const:bb45e4:8", "const:4:8"]]
+ 00bb45e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-553dfe7ff164859670394589cde7c9b0"></a>

### [`00bb4d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4d84.md) → [`00bb4e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb4e20.md) FUN_00bb4e20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) · 呼出先 3件 [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5d250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d250.md) [`00c5d260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d260.md)
- 新版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 3件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5d320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d320.md) [`00c5d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d330.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.02% / 新版 65.02%

優先判定に残った影響 `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bb4f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb507c"
      ]
    ],
    [
      "00bb4f20",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb50dc"
      ]
    ],
    [
      "00bb4f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb4ed4"
      ]
    ]
  ],
  "added": [
    [
      "00bb4f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb5118"
      ]
    ],
    [
      "00bb4f20",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb5138"
      ]
    ],
    [
      "00bb4f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb4f70"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb4dc4 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 00bb4dc4 ["CBRANCH", null, ["local:b71:8", "tmp:0:1"]]
+ 00bb4e60 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 00bb4e60 ["CBRANCH", null, ["local:b74:8", "tmp:0:1"]]
- 00bb4e24 ["CBRANCH", null, ["local:b71:8", "register:102:1"]]
+ 00bb4ec0 ["CBRANCH", null, ["local:b74:8", "register:102:1"]]
- 00bb4e60 ["INT_ADD", "register:40f0:8", ["const:bb4e60:8", "const:4:8"]]
- 00bb4e60 ["CALL", null, ["callee:00c5d330:8"]]
+ 00bb4efc ["INT_ADD", "register:40f0:8", ["const:bb4efc:8", "const:4:8"]]
+ 00bb4efc ["CALL", null, ["callee:00c5d330:8"]]
~~~


<a id="compare-53378f6e9e462eb7891eea6ca2400ec2"></a>

### [`00bb5150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5150.md) → [`00bb51ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb51ec.md) _ZN11flatbuffers11CharToUpperEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) · 呼出先 1件 [`00c5d260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d260.md)
- 新版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 1件 [`00c5d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d330.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00bb515c ["INT_ADD", "register:40f0:8", ["const:bb515c:8", "const:4:8"]]
- 00bb515c ["CALL", null, ["callee:00c5d330:8"]]
+ 00bb51f8 ["INT_ADD", "register:40f0:8", ["const:bb51f8:8", "const:4:8"]]
+ 00bb51f8 ["CALL", null, ["callee:00c5d330:8"]]
- 00bb5164 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bb5164 ["RETURN", null, ["register:0:8"]]
+ 00bb5200 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00bb5200 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-9ada0aae198cb9a6cdb48c859c886333"></a>

### [`00bb5168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5168.md) → [`00bb5204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5204.md) _ZN11flatbuffers11CharToLowerEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) · 呼出先 1件 [`00c5d250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d250.md)
- 新版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 1件 [`00c5d320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d320.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5174 ["INT_ADD", "register:40f0:8", ["const:bb5174:8", "const:4:8"]]
- 00bb5174 ["CALL", null, ["callee:00c5d320:8"]]
+ 00bb5210 ["INT_ADD", "register:40f0:8", ["const:bb5210:8", "const:4:8"]]
+ 00bb5210 ["CALL", null, ["callee:00c5d320:8"]]
~~~


<a id="compare-6556e8a90067ed69a5ca25e4e88612ec"></a>

### [`00bb5180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5180.md) → [`00bb521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb521c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5seekgExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c597f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c597f0.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md)
- 新版 呼出元 1件 [`00c598c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598c0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5240",
      "incomplete_value": true,
      "site": "00bb5250",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb524c",
      "incomplete_value": true,
      "site": "00bb5250",
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
      "unmatched:00bb5180",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5184",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5188",
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
      "00bb521c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb5220",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb5224",
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
- 00bb51b4 ["INT_ADD", "register:40f0:8", ["const:bb51b4:8", "const:4:8"]]
- 00bb51b4 ["CALL", null, ["callee:00c58370:8"]]
+ 00bb5250 ["INT_ADD", "register:40f0:8", ["const:bb5250:8", "const:4:8"]]
+ 00bb5250 ["CALL", null, ["callee:00c58370:8"]]
- 00bb5180 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bb5180 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bb5180 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bb5180 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb5184 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bb5184 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bb5184 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb5184 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9b01122e5444daeee32c621a3d86e35a"></a>

### [`00bb524c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb524c.md) → [`00bb52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb52e8.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5tellgEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c597e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c597e0.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md)
- 新版 呼出元 1件 [`00c598b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598b0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.81% / 新版 55.81%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb536c",
      "incomplete_value": true,
      "site": "00bb537c",
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
      "unmatched:00bb524c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5250",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb52c0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bb52e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb52ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bb535c",
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
- 00bb52e0 ["INT_ADD", "register:40f0:8", ["const:bb52e0:8", "const:4:8"]]
- 00bb52e0 ["CALL", null, ["callee:00c58370:8"]]
+ 00bb537c ["INT_ADD", "register:40f0:8", ["const:bb537c:8", "const:4:8"]]
+ 00bb537c ["CALL", null, ["callee:00c58370:8"]]
- 00bb524c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bb524c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bb524c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bb524c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb5250 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bb5250 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bb5250 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb5250 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b0566c1fcefa95a3ae8a9374da28b4c5"></a>

### [`00bb52f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb52f8.md) → [`00bb5394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5394.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1c0.md) · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md) [`00c5d0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0f0.md)
- 新版 呼出元 1件 [`00c5d290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d290.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb5378",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00bb53ac",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bb5414",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00bb5448",
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
- 00bb531c ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00bb531c ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00bb53b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00bb53b8 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 00bb5328 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00bb5328 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bb53c4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00bb53c4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bb532c ["INT_ADD", "register:40f0:8", ["const:bb532c:8", "const:4:8"]]
- 00bb532c ["CALL", null, ["callee:00c58fc0:8"]]
+ 00bb53c8 ["INT_ADD", "register:40f0:8", ["const:bb53c8:8", "const:4:8"]]
+ 00bb53c8 ["CALL", null, ["callee:00c58fc0:8"]]
~~~


<a id="compare-17abea0bee22b97754036b7de8510fa2"></a>

### [`00bb54e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb54e8.md) → [`00bb5584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5584.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEEC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1a0.md) · 呼出先 7件 [`00bb59c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb59c0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 1件 [`00c5d270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d270.md) · 呼出先 7件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb55b4",
      "incomplete_value": true,
      "site": "00bb55b8",
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
      "definition_site": "00bb5518",
      "incomplete_value": true,
      "site": "00bb551c",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb55d8",
      "incomplete_value": true,
      "site": "00bb55f4",
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
      "definition_site": "00bb553c",
      "incomplete_value": true,
      "site": "00bb5558",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5604",
      "incomplete_value": true,
      "site": "00bb560c",
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
                "const:988:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb5568",
      "incomplete_value": true,
      "site": "00bb5570",
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
                "const:8b8:8"
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
      "00bb55a4",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00bb55b8",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb55c8",
      "READ",
      [
        "storage",
        "00c9b8f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb55a4",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00bb55b8",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00bb55c8",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb5570 ["INT_ADD", "register:40f0:8", ["const:bb5570:8", "const:4:8"]]
- 00bb5570 ["CALL", null, ["callee:00c5d250:8"]]
+ 00bb560c ["INT_ADD", "register:40f0:8", ["const:bb560c:8", "const:4:8"]]
+ 00bb560c ["CALL", null, ["callee:00c5d250:8"]]
- 00bb559c ["INT_ADD", "register:40f0:8", ["const:bb559c:8", "const:4:8"]]
- 00bb559c ["CALL", null, ["callee:00c58350:8"]]
+ 00bb5638 ["INT_ADD", "register:40f0:8", ["const:bb5638:8", "const:4:8"]]
+ 00bb5638 ["CALL", null, ["callee:00c58350:8"]]
- 00bb55b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb55b8 ["INT_ADD", "register:40f0:8", ["const:bb55b8:8", "const:4:8"]]
- 00bb55b8 ["CALLIND", null, ["register:0:8"]]
+ 00bb5654 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb5654 ["INT_ADD", "register:40f0:8", ["const:bb5654:8", "const:4:8"]]
+ 00bb5654 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5439cb4a55bf471834eb1df8af0b2b12"></a>

### [`00bb5774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5774.md) → [`00bb5810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5810.md) FUN_00bb5810

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md) [`00c5d1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md) [`00c5d280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb583c",
      "incomplete_value": true,
      "site": "00bb583c",
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
      "definition_site": "00bb57a0",
      "incomplete_value": true,
      "site": "00bb57a0",
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
      "definition_site": "00bb5840",
      "incomplete_value": true,
      "site": "00bb5840",
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
      "definition_site": "00bb57a4",
      "incomplete_value": true,
      "site": "00bb57a4",
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
      "00bb5828",
      "READ",
      [
        "storage",
        "00c9b030",
        null,
        "pointer"
      ]
    ],
    [
      "00bb583c",
      "DATA",
      [
        "storage",
        "00c90ec0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb5840",
      "DATA",
      [
        "storage",
        "00c90ee8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb5828",
      "READ",
      [
        "storage",
        "00c9b100",
        null,
        "pointer"
      ]
    ],
    [
      "00bb583c",
      "DATA",
      [
        "storage",
        "00c90f90",
        null,
        "pointer"
      ]
    ],
    [
      "00bb5840",
      "DATA",
      [
        "storage",
        "00c90fb8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb578c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:30:8"]]
- 00bb578c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb5828 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:100:8"]]
+ 00bb5828 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb57a8 ["INT_ADD", "register:40f0:8", ["const:bb57a8:8", "const:4:8"]]
- 00bb57a8 ["CALL", null, ["callee:00c5d280:8"]]
+ 00bb5844 ["INT_ADD", "register:40f0:8", ["const:bb5844:8", "const:4:8"]]
+ 00bb5844 ["CALL", null, ["callee:00c5d280:8"]]
~~~


<a id="compare-a6f9cae92b97d00ce05ced0e49907414"></a>

### [`00bb57bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb57bc.md) → [`00bb5858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5858.md) FUN_00bb5858

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md) [`00c5d1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md) [`00c5d280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.19% / 新版 76.19%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb5888",
      "incomplete_value": true,
      "site": "00bb5888",
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
      "definition_site": "00bb57ec",
      "incomplete_value": true,
      "site": "00bb57ec",
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
      "definition_site": "00bb588c",
      "incomplete_value": true,
      "site": "00bb588c",
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
      "definition_site": "00bb57f0",
      "incomplete_value": true,
      "site": "00bb57f0",
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
      "00bb5870",
      "READ",
      [
        "storage",
        "00c9b030",
        null,
        "pointer"
      ]
    ],
    [
      "00bb5888",
      "DATA",
      [
        "storage",
        "00c90ec0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb588c",
      "DATA",
      [
        "storage",
        "00c90ee8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb5870",
      "READ",
      [
        "storage",
        "00c9b100",
        null,
        "pointer"
      ]
    ],
    [
      "00bb5888",
      "DATA",
      [
        "storage",
        "00c90f90",
        null,
        "pointer"
      ]
    ],
    [
      "00bb588c",
      "DATA",
      [
        "storage",
        "00c90fb8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb57d4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:30:8"]]
- 00bb57d4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb5870 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:100:8"]]
+ 00bb5870 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb57f4 ["INT_ADD", "register:40f0:8", ["const:bb57f4:8", "const:4:8"]]
- 00bb57f4 ["CALL", null, ["callee:00c5d280:8"]]
+ 00bb5890 ["INT_ADD", "register:40f0:8", ["const:bb5890:8", "const:4:8"]]
+ 00bb5890 ["CALL", null, ["callee:00c5d280:8"]]
- 00bb57fc ["INT_ADD", "register:40f0:8", ["const:bb57fc:8", "const:4:8"]]
- 00bb57fc ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bb5898 ["INT_ADD", "register:40f0:8", ["const:bb5898:8", "const:4:8"]]
+ 00bb5898 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-543d6457795f0f8f986b3f18d2fa16fe"></a>

### [`00bb5810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5810.md) → [`00bb58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb58ac.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5d1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1b0.md) · 呼出先 5件 [`00bb59c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb59c0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d190.md)
- 新版 呼出元 1件 [`00c5d280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d280.md) · 呼出先 5件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d260.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb58c8",
      "incomplete_value": true,
      "site": "00bb58cc",
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
      "definition_site": "00bb582c",
      "incomplete_value": true,
      "site": "00bb5830",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb5934",
      "incomplete_value": true,
      "site": "00bb5934",
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
      "definition_site": "00bb5898",
      "incomplete_value": true,
      "site": "00bb5898",
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
      "00bb58c0",
      "READ",
      [
        "storage",
        "00c9b8f0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb58cc",
      "DATA",
      [
        "storage",
        "00c90f70",
        null,
        "pointer"
      ]
    ],
    [
      "00bb58f4",
      "READ",
      [
        "storage",
        "00c90f88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb58c0",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb58cc",
      "DATA",
      [
        "storage",
        "00c91040",
        null,
        "pointer"
      ]
    ],
    [
      "00bb58f4",
      "READ",
      [
        "storage",
        "00c91058",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb5824 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8f0:8"]]
- 00bb5824 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb58c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9c0:8"]]
+ 00bb58c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb583c ["INT_ADD", "register:40f0:8", ["const:bb583c:8", "const:4:8"]]
- 00bb583c ["CALL", null, ["callee:00c5d260:8"]]
+ 00bb58d8 ["INT_ADD", "register:40f0:8", ["const:bb58d8:8", "const:4:8"]]
+ 00bb58d8 ["CALL", null, ["callee:00c5d260:8"]]
- 00bb5844 ["INT_ADD", "register:40f0:8", ["const:bb5844:8", "const:4:8"]]
- 00bb5844 ["CALL", null, ["callee:00c5a0d0:8"]]
+ 00bb58e0 ["INT_ADD", "register:40f0:8", ["const:bb58e0:8", "const:4:8"]]
+ 00bb58e0 ["CALL", null, ["callee:00c5a0d0:8"]]
~~~


<a id="compare-66e0e02681b5e188f4efbee7436d2c54"></a>

### [`00bb59c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb59c0.md) → [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE6setbufEPcl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00bb54e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb54e8.md) [`00bb5810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5810.md) [`00c0568c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c0568c.md) [`00c05944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05944.md) · 呼出先 2件 [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5be50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be50.md)
- 新版 呼出元 4件 [`00bb5584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5584.md) [`00bb58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb58ac.md) [`00c05728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05728.md) [`00c059e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c059e0.md) · 呼出先 2件 [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb59f8 ["INT_ADD", "register:40f0:8", ["const:bb59f8:8", "const:4:8"]]
- 00bb59f8 ["CALL", null, ["callee:00c5bf10:8"]]
+ 00bb5a94 ["INT_ADD", "register:40f0:8", ["const:bb5a94:8", "const:4:8"]]
+ 00bb5a94 ["CALL", null, ["callee:00c5bf10:8"]]
- 00bb5a0c ["INT_ADD", "register:40f0:8", ["const:bb5a0c:8", "const:4:8"]]
- 00bb5a0c ["CALL", null, ["callee:00c5bf10:8"]]
+ 00bb5aa8 ["INT_ADD", "register:40f0:8", ["const:bb5aa8:8", "const:4:8"]]
+ 00bb5aa8 ["CALL", null, ["callee:00c5bf10:8"]]
- 00bb5a58 ["BRANCH", null, ["local:b16:8"]]
+ 00bb5af4 ["BRANCH", null, ["local:b17:8"]]
~~~


<a id="compare-9f89b744d4f3da27e0d88a0c9ec00282"></a>

### [`00bb5ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5ab8.md) → [`00bb5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5b54.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bb62ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb62ec.md) [`00c5d1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1e0.md) [`00c5d1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md) [`00c5d2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2c0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.92% / 新版 72.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5bd4",
      "incomplete_value": true,
      "site": "00bb5bd8",
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
      "unmatched:00bb5ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5ac0",
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
      "00bb5b54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb5b58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb5b5c",
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
- 00bb5b3c ["INT_ADD", "register:40f0:8", ["const:bb5b3c:8", "const:4:8"]]
- 00bb5b3c ["CALL", null, ["callee:00c5d2b0:8"]]
+ 00bb5bd8 ["INT_ADD", "register:40f0:8", ["const:bb5bd8:8", "const:4:8"]]
+ 00bb5bd8 ["CALL", null, ["callee:00c5d2b0:8"]]
- 00bb5ab8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bb5ab8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bb5ab8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bb5ab8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb5abc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bb5abc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bb5abc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb5abc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7752045ad86609e3f0e2400dad1b4a2f"></a>

### [`00bb5b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5b78.md) → [`00bb5c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c14.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE7seekposENS_4fposI9mbstate_tEEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bb5ba4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bb5c40",
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
- 00bb5b8c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bb5b8c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bb5c28 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bb5c28 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bb5ba0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 00bb5ba0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb5ba4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5ba4 ["INT_ADD", "register:40f0:8", ["const:bb5ba4:8", "const:4:8"]]
- 00bb5ba4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-da75e4964d74aa0626a56eef530f8bb9"></a>

### [`00bb5be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5be8.md) → [`00bb5c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c84.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d190.md) · 呼出先 5件 [`00bb62ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb62ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1b0.md) [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md) [`00c5d1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1e0.md)
- 新版 呼出元 1件 [`00c5d260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d260.md) · 呼出先 5件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md) [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5d54",
      "incomplete_value": true,
      "site": "00bb5d58",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
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
      "definition_site": "00bb5cb8",
      "incomplete_value": true,
      "site": "00bb5cbc",
      "value": [
        "INT_SUB",
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
                "register:8:8"
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
              "INT_ADD"
            ]
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
      "unmatched:00bb5bec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5bf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb5bf4",
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
      "00bb5c88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bb5c8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bb5c90",
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
- 00bb5cbc ["INT_ADD", "register:40f0:8", ["const:bb5cbc:8", "const:4:8"]]
- 00bb5cbc ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00bb5d58 ["INT_ADD", "register:40f0:8", ["const:bb5d58:8", "const:4:8"]]
+ 00bb5d58 ["CALL", null, ["callee:00c5a2f0:8"]]
- 00bb5be8 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00bb5bec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00bb5bec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-59bd418274810e0d522719c14c6f1150"></a>

### [`00bb5dd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5dd8.md) → [`00bb5e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5e74.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE9underflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bb62ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb62ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a080.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a150.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.05% / 新版 88.05%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5f94",
      "incomplete_value": true,
      "site": "00bb5f98",
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
            "live",
            "register:40a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb5ef8",
      "incomplete_value": true,
      "site": "00bb5efc",
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
            "register:40a0:8"
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
    "new": {
      "definition_site": "00bb5f90",
      "incomplete_value": true,
      "site": "00bb5f98",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40a0:8"
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
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bb5ef4",
      "incomplete_value": true,
      "site": "00bb5efc",
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
                "register:4040:8"
              ],
              [
                "live",
                "register:40a0:8"
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bb5f84",
      "incomplete_value": true,
      "site": "00bb5f98",
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
                "const:78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "00bb5ef4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bb5e88"
      ]
    ],
    [
      "unmatched:00bb5e84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb5ef8"
      ]
    ]
  ],
  "added": [
    [
      "00bb5ef4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb5f24"
      ]
    ],
    [
      "00bb5f20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bb5ef8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb5efc ["INT_ADD", "register:40f0:8", ["const:bb5efc:8", "const:4:8"]]
- 00bb5efc ["CALL", null, ["callee:00c5a150:8"]]
+ 00bb5f98 ["INT_ADD", "register:40f0:8", ["const:bb5f98:8", "const:4:8"]]
+ 00bb5f98 ["CALL", null, ["callee:00c5a150:8"]]
- 00bb5e58 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bb5e58 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00bb5ef4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bb5ef4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00bb5e5c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00bb5e5c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00bb5ef8 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00bb5ef8 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-83b724df85bbc51ab351c21c2a8a9b15"></a>

### [`00bb636c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb636c.md) → [`00bb6408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6408.md) FUN_00bb6408

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb642c",
      "incomplete_value": true,
      "site": "00bb6434",
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
      "definition_site": "00bb6390",
      "incomplete_value": true,
      "site": "00bb6398",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb643c",
      "incomplete_value": true,
      "site": "00bb643c",
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
      "definition_site": "00bb63a0",
      "incomplete_value": true,
      "site": "00bb63a0",
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
      "definition_site": "00bb643c",
      "incomplete_value": true,
      "site": "00bb643c",
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
      "definition_site": "00bb63a0",
      "incomplete_value": true,
      "site": "00bb63a0",
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
      "00bb6418",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6420",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6434",
      "DATA",
      [
        "storage",
        "00c91038",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb6418",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6420",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6434",
      "DATA",
      [
        "storage",
        "00c91108",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb63c4 ["INT_ADD", "register:40f0:8", ["const:bb63c4:8", "const:4:8"]]
- 00bb63c4 ["CALL", null, ["callee:00c58360:8"]]
+ 00bb6460 ["INT_ADD", "register:40f0:8", ["const:bb6460:8", "const:4:8"]]
+ 00bb6460 ["CALL", null, ["callee:00c58360:8"]]
- 00bb637c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c88:8"]]
- 00bb637c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb6418 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00bb6418 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb6384 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00bb6384 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bb6420 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00bb6420 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c746c44157195d854e8c877efa9f1acb"></a>

### [`00bb63e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb63e0.md) → [`00bb647c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb647c.md) FUN_00bb647c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 41.94% / 新版 41.94%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb64dc",
      "incomplete_value": true,
      "site": "00bb64e0",
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
      "definition_site": "00bb6440",
      "incomplete_value": true,
      "site": "00bb6444",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb642c",
      "incomplete_value": true,
      "site": "00bb6430",
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
                "const:58:8"
              ]
            ]
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
      "unmatched:00bb63e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb63e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bb63f8",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb647c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bb6480",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bb6494",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb6430 ["INT_ADD", "register:40f0:8", ["const:bb6430:8", "const:4:8"]]
- 00bb6430 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb64cc ["INT_ADD", "register:40f0:8", ["const:bb64cc:8", "const:4:8"]]
+ 00bb64cc ["CALL", null, ["callee:00c57f80:8"]]
- 00bb63e0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bb63e0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bb63e0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bb63e0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bb63e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bb63e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bb63e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bb63e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f6af081bc5b9d65d9e3f57d28677ece6"></a>

### [`00bb645c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb645c.md) → [`00bb64f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb64f8.md) FUN_00bb64f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bb6558",
      "incomplete_value": true,
      "site": "00bb655c",
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
      "definition_site": "00bb64bc",
      "incomplete_value": true,
      "site": "00bb64c0",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bb64c8",
      "incomplete_value": true,
      "site": "00bb64cc",
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
      "unmatched:00bb6474",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bb6488",
      "DATA",
      [
        "storage",
        "00c91010",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bb648c",
      "DATA",
      [
        "storage",
        "00c91038",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bb6510",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6524",
      "DATA",
      [
        "storage",
        "00c910e0",
        null,
        "pointer"
      ]
    ],
    [
      "00bb6528",
      "DATA",
      [
        "storage",
        "00c91108",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bb64cc ["INT_ADD", "register:40f0:8", ["const:bb64cc:8", "const:4:8"]]
- 00bb64cc ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bb6568 ["INT_ADD", "register:40f0:8", ["const:bb6568:8", "const:4:8"]]
+ 00bb6568 ["CALL", null, ["callee:00c5d1b0:8"]]
- 00bb6474 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c88:8"]]
- 00bb6474 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bb6478 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00bb6478 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bb6478 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bb6478 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


