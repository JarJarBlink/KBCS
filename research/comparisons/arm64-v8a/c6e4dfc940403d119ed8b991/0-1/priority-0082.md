# v16.0.1 → v16.0.2 · 最優先の変更候補 (82)

[一覧の目次](README.md)

<a id="compare-eb12263500f28c1263cd6888632b6d0c"></a>

### [`00b54e88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54e88.md) → [`00b54f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54f24.md) _ZN8firebase4util18JIntArrayToVariantEP7_JNIEnvP10_jintArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3b0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b480.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 90.53% / 新版 90.53%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54fb0",
      "incomplete_value": true,
      "site": "00b54fb4",
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
    "old": {
      "definition_site": "00b54f14",
      "incomplete_value": true,
      "site": "00b54f18",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:00b54fd0",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54fd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55098"
      ]
    ],
    [
      "unmatched:00b54fc8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b5506c",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b55074",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55098"
      ]
    ],
    [
      "00b55064",
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
- 00b54f18 ["INT_ADD", "register:40f0:8", ["const:b54f18:8", "const:4:8"]]
- 00b54f18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54fb4 ["INT_ADD", "register:40f0:8", ["const:b54fb4:8", "const:4:8"]]
+ 00b54fb4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b54ec8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54ec8 ["INT_ADD", "register:40f0:8", ["const:b54ec8:8", "const:4:8"]]
- 00b54ec8 ["CALLIND", null, ["register:0:8"]]
+ 00b54f64 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b54f64 ["INT_ADD", "register:40f0:8", ["const:b54f64:8", "const:4:8"]]
+ 00b54f64 ["CALLIND", null, ["register:0:8"]]
- 00b54ee4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54ee4 ["INT_ADD", "register:40f0:8", ["const:b54ee4:8", "const:4:8"]]
- 00b54ee4 ["CALLIND", null, ["register:0:8"]]
+ 00b54f80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54f80 ["INT_ADD", "register:40f0:8", ["const:b54f80:8", "const:4:8"]]
+ 00b54f80 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ccd5bd61df1fe468648dc507f418ba99"></a>

### [`00b55004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55004.md) → [`00b550a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b550a0.md) _ZN8firebase4util19JLongArrayToVariantEP7_JNIEnvP11_jlongArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3f0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4c0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.84% / 新版 96.84%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b550b4"
      ],
      [
        "FALL_THROUGH",
        "00b55150"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b55150",
      "incomplete_value": true,
      "site": "00b55154",
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
      "definition_site": "00b550b4",
      "incomplete_value": true,
      "site": "00b550b8",
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
      "unmatched:00b550b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55140"
      ]
    ]
  ],
  "added": [
    [
      "00b55150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55140"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55154 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b55154 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00b551f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b551f0 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00b55044 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b55044 ["INT_ADD", "register:40f0:8", ["const:b55044:8", "const:4:8"]]
- 00b55044 ["CALLIND", null, ["register:0:8"]]
+ 00b550e0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b550e0 ["INT_ADD", "register:40f0:8", ["const:b550e0:8", "const:4:8"]]
+ 00b550e0 ["CALLIND", null, ["register:0:8"]]
- 00b55060 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55060 ["INT_ADD", "register:40f0:8", ["const:b55060:8", "const:4:8"]]
- 00b55060 ["CALLIND", null, ["register:0:8"]]
+ 00b550fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b550fc ["INT_ADD", "register:40f0:8", ["const:b550fc:8", "const:4:8"]]
+ 00b550fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-febd758ad8ac34a23bfd158ed5456237"></a>

### [`00b55180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55180.md) → [`00b5521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b5521c.md) _ZN8firebase4util20JFloatArrayToVariantEP7_JNIEnvP12_jfloatArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b450.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b520.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.82% / 新版 90.82%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b55184",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55188",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5518c",
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
      "00b55220",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b55224",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b55228",
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
- 00b55180 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 00b55184 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 00b55184 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5100:8"]]
- 00b55188 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:28:8"]]
- 00b55188 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-96094a6c80fa6314a2fb8c73cf18e140"></a>

### [`00b55308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55308.md) → [`00b553a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b553a4.md) _ZN8firebase4util21JDoubleArrayToVariantEP7_JNIEnvP13_jdoubleArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b480.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b550.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.63% / 新版 92.63%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5546c",
      "incomplete_value": true,
      "site": "00b55478",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b55410",
      "incomplete_value": true,
      "site": "00b55420",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b55320",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5533c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55364",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b553bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b553d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b55400",
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
- 00b553dc ["INT_ADD", "register:40f0:8", ["const:b553dc:8", "const:4:8"]]
- 00b553dc ["CALL", null, ["callee:00c5a900:8"]]
+ 00b55478 ["INT_ADD", "register:40f0:8", ["const:b55478:8", "const:4:8"]]
+ 00b55478 ["CALL", null, ["callee:00c5a900:8"]]
- 00b55420 ["INT_ADD", "register:40f0:8", ["const:b55420:8", "const:4:8"]]
- 00b55420 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b554bc ["INT_ADD", "register:40f0:8", ["const:b554bc:8", "const:4:8"]]
+ 00b554bc ["CALL", null, ["callee:00c5a900:8"]]
- 00b55320 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b55320 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b55320 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00b55320 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-499aeff55ede0edca57ec5e1e9b4ba15"></a>

### [`00b55484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55484.md) → [`00b55520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55520.md) _ZN8firebase4util21JObjectArrayToVariantEP7_JNIEnvP13_jobjectArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b490.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b410.md)
- 新版 呼出元 1件 [`00c5b560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b560.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4e0.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b55504",
      "incomplete_value": true,
      "site": "00b5550c",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00b55508",
      "incomplete_value": false,
      "site": "00b5550c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b555ec",
      "incomplete_value": true,
      "site": "00b555f4",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b5552c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5561c"
      ]
    ],
    [
      "unmatched:00b55544",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b555c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5561c"
      ]
    ],
    [
      "00b555e0",
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
- 00b5550c ["INT_ADD", "register:40f0:8", ["const:b5550c:8", "const:4:8"]]
- 00b5550c ["CALL", null, ["callee:00c5a900:8"]]
+ 00b555a8 ["INT_ADD", "register:40f0:8", ["const:b555a8:8", "const:4:8"]]
+ 00b555a8 ["CALL", null, ["callee:00c5a900:8"]]
- 00b55558 ["INT_ADD", "register:40f0:8", ["const:b55558:8", "const:4:8"]]
- 00b55558 ["CALL", null, ["callee:00c5b4e0:8"]]
+ 00b555f4 ["INT_ADD", "register:40f0:8", ["const:b555f4:8", "const:4:8"]]
+ 00b555f4 ["CALL", null, ["callee:00c5b4e0:8"]]
- 00b554c4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b554c4 ["INT_ADD", "register:40f0:8", ["const:b554c4:8", "const:4:8"]]
- 00b554c4 ["CALLIND", null, ["register:0:8"]]
+ 00b55560 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b55560 ["INT_ADD", "register:40f0:8", ["const:b55560:8", "const:4:8"]]
+ 00b55560 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a51129271d073e2e0417c29ab6a52d21"></a>

### [`00b555d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b555d4.md) → [`00b55670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55670.md) _ZN8firebase4util15JArrayToVariantEP7_JNIEnvP7_jarray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b300.md) · 呼出先 11件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3b0.md) [`00c5b3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3d0.md) [`00c5b3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3e0.md)
- 新版 呼出元 1件 [`00c5b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3d0.md) · 呼出先 11件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b480.md) [`00c5b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4a0.md) [`00c5b4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 73.43% / 新版 73.43%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 12件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b556a0",
      "incomplete_value": true,
      "site": "00b556b0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:a68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55604",
      "incomplete_value": true,
      "site": "00b55614",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:968:8"
              ]
            ]
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
      "definition_site": "00b55870",
      "incomplete_value": false,
      "site": "00b5587c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:5fc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b557d4",
      "incomplete_value": false,
      "site": "00b557e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:5cb:8"
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
    "new": {
      "definition_site": "00b558e0",
      "incomplete_value": false,
      "site": "00b558ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:d42:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55844",
      "incomplete_value": false,
      "site": "00b55850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:d96:8"
          ]
        ]
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
      "00b556a0",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55708",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b5567c"
      ]
    ],
    [
      "unmatched:00b55674",
      "PARAM",
      [
        "storage",
        "002a4d9b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b556a0",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55708",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55718"
      ]
    ],
    [
      "00b55710",
      "PARAM",
      [
        "storage",
        "002a4d3f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55614 ["INT_ADD", "register:40f0:8", ["const:b55614:8", "const:4:8"]]
- 00b55614 ["CALL", null, ["callee:00497a88:8"]]
+ 00b556b0 ["INT_ADD", "register:40f0:8", ["const:b556b0:8", "const:4:8"]]
+ 00b556b0 ["CALL", null, ["callee:00497a88:8"]]
- 00b556b0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b556b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b557e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b557e0 ["INT_ADD", "register:40f0:8", ["const:b557e0:8", "const:4:8"]]
- 00b557e0 ["CALLIND", null, ["register:0:8"]]
+ 00b5587c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5587c ["INT_ADD", "register:40f0:8", ["const:b5587c:8", "const:4:8"]]
+ 00b5587c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5d36ed1b468dc53045fffa002548ac67"></a>

### [`00b55a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55a10.md) → [`00b55aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55aac.md) _ZN8firebase4util25ByteBufferToJavaByteArrayEP7_JNIEnvPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 72.00% / 新版 72.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b55a5c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55af8",
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
- 00b55a38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55a38 ["INT_ADD", "register:40f0:8", ["const:b55a38:8", "const:4:8"]]
- 00b55a38 ["CALLIND", null, ["register:0:8"]]
+ 00b55ad4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55ad4 ["INT_ADD", "register:40f0:8", ["const:b55ad4:8", "const:4:8"]]
+ 00b55ad4 ["CALLIND", null, ["register:0:8"]]
- 00b55a48 ["COPY", "register:4008:8", ["register:40b0:8"]]
- 00b55a4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:680:8"]]
- 00b55a4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-32c076222d972541e7a93ff93c1aa46d"></a>

### [`00b55a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55a74.md) → [`00b55b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55b10.md) _ZN8firebase4util14JniUriToStringEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b2f0.md) · 呼出先 3件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3c0.md) · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b55b2c",
      "incomplete_value": true,
      "site": "00b55b38",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:e30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55a90",
      "incomplete_value": true,
      "site": "00b55a9c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:d30:8"
              ]
            ]
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
      "00b55b2c",
      "READ",
      [
        "storage",
        "01125d30",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b55ab8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55b78"
      ]
    ],
    [
      "unmatched:00b55b30",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b55b2c",
      "READ",
      [
        "storage",
        "01125e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55b54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b55b78"
      ]
    ],
    [
      "00b55bcc",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55a9c ["INT_ADD", "register:40f0:8", ["const:b55a9c:8", "const:4:8"]]
- 00b55a9c ["CALL", null, ["callee:00497874:8"]]
+ 00b55b38 ["INT_ADD", "register:40f0:8", ["const:b55b38:8", "const:4:8"]]
+ 00b55b38 ["CALL", null, ["callee:00497874:8"]]
- 00b55b38 ["BRANCH", null, ["callee:00c5b690:8"]]
- 00b55a88 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b55a88 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00b55b24 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b55b24 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-d567cee159ebfcc22990d90dc1785917"></a>

### [`00b55b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55b3c.md) → [`00b55bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55bd8.md) _ZN8firebase4util13CharsToJniUriEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b2b0.md) · 呼出先 2件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md)
- 新版 呼出元 1件 [`00c5b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b380.md) · 呼出先 2件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 88.41% / 新版 88.41%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b55b60",
      "incomplete_value": true,
      "site": "00b55b6c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:6f8:8"
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
    "new": null,
    "old": {
      "definition_site": "00b55b64",
      "incomplete_value": true,
      "site": "00b55b6c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:708:8"
              ]
            ]
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
      "definition_site": "00b55c30",
      "incomplete_value": true,
      "site": "00b55c38",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b55b60",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b55b64",
      "READ",
      [
        "storage",
        "01125708",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55c24",
      "READ",
      [
        "storage",
        "01125710",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b55bfc",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55c00",
      "READ",
      [
        "storage",
        "01125808",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55c24",
      "READ",
      [
        "storage",
        "01125810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55b6c ["INT_ADD", "register:40f0:8", ["const:b55b6c:8", "const:4:8"]]
- 00b55b6c ["CALL", null, ["callee:00589734:8"]]
+ 00b55c08 ["INT_ADD", "register:40f0:8", ["const:b55c08:8", "const:4:8"]]
+ 00b55c08 ["CALL", null, ["callee:00589734:8"]]
- 00b55b9c ["INT_ADD", "register:40f0:8", ["const:b55b9c:8", "const:4:8"]]
- 00b55b9c ["CALL", null, ["callee:00497874:8"]]
+ 00b55c38 ["INT_ADD", "register:40f0:8", ["const:b55c38:8", "const:4:8"]]
+ 00b55c38 ["CALL", null, ["callee:00497874:8"]]
- 00b55bf4 ["INT_ADD", "register:40f0:8", ["const:b55bf4:8", "const:4:8"]]
- 00b55bf4 ["CALL", null, ["callee:00497874:8"]]
+ 00b55c90 ["INT_ADD", "register:40f0:8", ["const:b55c90:8", "const:4:8"]]
+ 00b55c90 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-fcfc434e62fa3737eb492146ea588224"></a>

### [`00b55c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55c50.md) → [`00b55cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55cec.md) _ZN8firebase4util14ParseUriStringEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 75.61% / 新版 75.61%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b55c78",
      "incomplete_value": true,
      "site": "00b55c8c",
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
                "const:d20:8"
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
      "definition_site": "00b55c7c",
      "incomplete_value": true,
      "site": "00b55c8c",
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
                "register:4048:8"
              ],
              [
                "leaf",
                "const:d38:8"
              ]
            ]
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
      "definition_site": "00b55d24",
      "incomplete_value": true,
      "site": "00b55d28",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00b55c88",
      "incomplete_value": true,
      "site": "00b55c8c",
      "value": [
        "live",
        "register:4000:8"
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
      "unmatched:00b55c78",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b55c7c",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b55ca0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55d14",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55d18",
      "READ",
      [
        "storage",
        "01125e38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b55d3c",
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
- 00b55c8c ["INT_ADD", "register:40f0:8", ["const:b55c8c:8", "const:4:8"]]
- 00b55c8c ["CALL", null, ["callee:00c5ac70:8"]]
+ 00b55d28 ["INT_ADD", "register:40f0:8", ["const:b55d28:8", "const:4:8"]]
+ 00b55d28 ["CALL", null, ["callee:00c5ac70:8"]]
- 00b55c6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55c6c ["INT_ADD", "register:40f0:8", ["const:b55c6c:8", "const:4:8"]]
- 00b55c6c ["CALLIND", null, ["register:0:8"]]
+ 00b55d08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55d08 ["INT_ADD", "register:40f0:8", ["const:b55d08:8", "const:4:8"]]
+ 00b55d08 ["CALLIND", null, ["register:0:8"]]
- 00b55c78 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
- 00b55c78 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4bc618f8f6e364ecd49878e071fdc114"></a>

### [`00b55cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55cf4.md) → [`00b55d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55d90.md) _ZN8firebase4util10CharsToURLEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.93% / 新版 82.93%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b55dc4",
      "incomplete_value": true,
      "site": "00b55dcc",
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
      "definition_site": "00b55d54",
      "incomplete_value": true,
      "site": "00b55d5c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b55cf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55cfc",
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
      "00b55d90",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b55d94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b55d98",
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
- 00b55d30 ["INT_ADD", "register:40f0:8", ["const:b55d30:8", "const:4:8"]]
- 00b55d30 ["CALL", null, ["callee:00589734:8"]]
+ 00b55dcc ["INT_ADD", "register:40f0:8", ["const:b55dcc:8", "const:4:8"]]
+ 00b55dcc ["CALL", null, ["callee:00589734:8"]]
- 00b55d5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55d5c ["INT_ADD", "register:40f0:8", ["const:b55d5c:8", "const:4:8"]]
- 00b55d5c ["CALLIND", null, ["register:0:8"]]
+ 00b55df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55df8 ["INT_ADD", "register:40f0:8", ["const:b55df8:8", "const:4:8"]]
+ 00b55df8 ["CALLIND", null, ["register:0:8"]]
- 00b55cf4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b55cf4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b55cf4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-c96ac24b2e6fc55062ae690deadba3cd"></a>

### [`00b55d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55d98.md) → [`00b55e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55e34.md) _ZN8firebase4util20JniByteArrayToVectorEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b470.md) · 呼出先 1件 [`00c5b660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b660.md)
- 新版 呼出元 1件 [`00c5b540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b540.md) · 呼出先 1件 [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 75.76% / 新版 75.76%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b55e70",
      "incomplete_value": true,
      "site": "00b55e74",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00b55e6c",
      "incomplete_value": true,
      "site": "00b55e74",
      "value": [
        "INT_SEXT",
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
      "unmatched:00b55e10",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55df8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55eac",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b55e94",
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
- 00b55dd8 ["INT_ADD", "register:40f0:8", ["const:b55dd8:8", "const:4:8"]]
- 00b55dd8 ["CALL", null, ["callee:00c5b730:8"]]
+ 00b55e74 ["INT_ADD", "register:40f0:8", ["const:b55e74:8", "const:4:8"]]
+ 00b55e74 ["CALL", null, ["callee:00c5b730:8"]]
- 00b55dc4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55dc4 ["INT_ADD", "register:40f0:8", ["const:b55dc4:8", "const:4:8"]]
- 00b55dc4 ["CALLIND", null, ["register:0:8"]]
+ 00b55e60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55e60 ["INT_ADD", "register:40f0:8", ["const:b55e60:8", "const:4:8"]]
+ 00b55e60 ["CALLIND", null, ["register:0:8"]]
- 00b55dc8 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 00b55dc8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b55e64 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 00b55e64 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-369e4a3b868df65d892e3ec16623de2d"></a>

### [`00b55e1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55e1c.md) → [`00b55eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55eb8.md) _ZN8firebase4util22LocalToGlobalReferenceEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

アドレスに依存する影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b55e28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55e58",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b55ef4",
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
- 00b55e28 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b55e28 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b55e28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b55e28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b55e2c ["COPY", "tmp:0:8", ["const:20:8"]]
- 00b55e2c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b55e2c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b55e2c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b55e40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55e40 ["INT_ADD", "register:40f0:8", ["const:b55e40:8", "const:4:8"]]
- 00b55e40 ["CALLIND", null, ["register:0:8"]]
+ 00b55edc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55edc ["INT_ADD", "register:40f0:8", ["const:b55edc:8", "const:4:8"]]
+ 00b55edc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4f611ae7e3aa5b2d1ff2d15ad173cf50"></a>

### [`00b55e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55e78.md) → [`00b55f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55f14.md) _ZN8firebase4util15ContinueBuilderEP7_JNIEnvP8_jobjectS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment

命令の説明率　旧版 63.64% / 新版 63.64%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b55e98",
      "incomplete_value": true,
      "site": "00b55ea0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b55e94",
      "DATA",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55e90",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55f30",
      "DATA",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b55f2c",
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
- 00b55e90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55e90 ["INT_ADD", "register:40f0:8", ["const:b55e90:8", "const:4:8"]]
- 00b55e90 ["CALLIND", null, ["register:0:8"]]
- 00b55e94 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b55e94 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00b55e94 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00b55e94 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 00b55e98 ["COPY", "register:4000:8", ["register:4098:8"]]
~~~


<a id="compare-58fd723fa282eaa187607e8538d8a491"></a>

### [`00b55ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b55/00b55ea4.md) → [`00b55f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55f40.md) _ZN8firebase4util22RegisterCallbackOnTaskEP7_JNIEnvP8_jobjectPFvS2_S4_NS0_12FutureResultEPKcPvES8_S7_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af40.md) · 呼出先 6件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c5b010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b010.md) · 呼出先 6件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.62% / 新版 74.62%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b55f64",
      "incomplete_value": false,
      "site": "00b55f78",
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
            "const:e88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55ec8",
      "incomplete_value": true,
      "site": "00b55edc",
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
            "const:d88:8"
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
      "definition_site": "00b55f3c",
      "incomplete_value": false,
      "site": "00b55f40",
      "value": [
        "leaf",
        "const:40:8"
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
      "definition_site": "00b55fa0",
      "incomplete_value": false,
      "site": "00b55fa8",
      "value": [
        "leaf",
        "const:38:8"
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
      "unmatched:00b55eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55ec8",
      "PARAM",
      [
        "storage",
        "01125d88",
        null,
        null
      ]
    ],
    [
      "unmatched:00b55ee4",
      "READ",
      [
        "storage",
        "01125d80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b55f54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b55f64",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ],
    [
      "00b55f80",
      "READ",
      [
        "storage",
        "01125e80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55edc ["INT_ADD", "register:40f0:8", ["const:b55edc:8", "const:4:8"]]
- 00b55edc ["CALL", null, ["callee:00c5b770:8"]]
+ 00b55f78 ["INT_ADD", "register:40f0:8", ["const:b55f78:8", "const:4:8"]]
+ 00b55f78 ["CALL", null, ["callee:00c5b770:8"]]
- 00b55f40 ["INT_ADD", "register:40f0:8", ["const:b55f40:8", "const:4:8"]]
- 00b55f40 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b55fdc ["INT_ADD", "register:40f0:8", ["const:b55fdc:8", "const:4:8"]]
+ 00b55fdc ["CALL", null, ["callee:00c57f60:8"]]
- 00b55f80 ["INT_NOTEQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
- 00b55f80 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 00b5601c ["INT_NOTEQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
+ 00b5601c ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
~~~


<a id="compare-855c0a3fc402c424a101ef30ba3cd238"></a>

### [`00b560ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b560ac.md) → [`00b56148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56148.md) _ZN8firebase4util32JniResultCallback_nativeOnResultEP7_JNIEnvP8_jobjectS4_hhP8_jstringll

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.47% / 新版 64.47%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56178",
      "incomplete_value": true,
      "site": "00b56198",
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
            "const:e88:8"
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
    "new": null,
    "old": {
      "definition_site": "00b56148",
      "incomplete_value": false,
      "site": "00b5614c",
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
            "const:d88:8"
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
      "definition_site": "00b561f4",
      "incomplete_value": true,
      "site": "00b561fc",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:00b560b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b560b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b560b8",
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
      "00b5614c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b56150",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b56154",
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
- 00b560fc ["INT_ADD", "register:40f0:8", ["const:b560fc:8", "const:4:8"]]
- 00b560fc ["CALL", null, ["callee:00c5b770:8"]]
+ 00b56198 ["INT_ADD", "register:40f0:8", ["const:b56198:8", "const:4:8"]]
+ 00b56198 ["CALL", null, ["callee:00c5b770:8"]]
- 00b5614c ["INT_ADD", "register:40f0:8", ["const:b5614c:8", "const:4:8"]]
- 00b5614c ["CALL", null, ["callee:00c5b780:8"]]
+ 00b561e8 ["INT_ADD", "register:40f0:8", ["const:b561e8:8", "const:4:8"]]
+ 00b561e8 ["CALL", null, ["callee:00c5b780:8"]]
+ 00b5614c ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00b5614c ["COPY", "tmp:1:8", ["register:40d8:8"]]
+ 00b5614c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 00b5614c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-10e792a35f6348ee640972b92960548d"></a>

### [`00b561ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b561ec.md) → [`00b56288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56288.md) _ZN8firebase4util17JavaThreadContext6CancelEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5b1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.33% / 新版 63.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b562a8",
      "incomplete_value": true,
      "site": "00b562b0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:790:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b561ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b561f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b562a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b56258"
      ]
    ]
  ],
  "added": [
    [
      "00b56288",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5628c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b562a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b562f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b56214 ["INT_ADD", "register:40f0:8", ["const:b56214:8", "const:4:8"]]
- 00b56214 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b562b0 ["INT_ADD", "register:40f0:8", ["const:b562b0:8", "const:4:8"]]
+ 00b562b0 ["CALL", null, ["callee:00574d2c:8"]]
- 00b561ec ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b561ec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b561ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b561f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b561f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b561f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b561f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-315676fb5d5fbd06c17fd0c1be6c8b95"></a>

### [`00b56264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56264.md) → [`00b56300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56300.md) _ZN8firebase4util17JavaThreadContext24ReleaseExecuteCancelLockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5b1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56320",
      "incomplete_value": true,
      "site": "00b56328",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:798:8"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "00b56294",
      "incomplete_value": true,
      "site": "00b5629c",
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
      "unmatched:00b56264",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b56268",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b56320",
      "READ",
      [
        "storage",
        "01125698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b56300",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b56304",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b56320",
      "READ",
      [
        "storage",
        "01125798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5628c ["INT_ADD", "register:40f0:8", ["const:b5628c:8", "const:4:8"]]
- 00b5628c ["CALL", null, ["callee:00574d2c:8"]]
+ 00b56328 ["INT_ADD", "register:40f0:8", ["const:b56328:8", "const:4:8"]]
+ 00b56328 ["CALL", null, ["callee:00574d2c:8"]]
- 00b5629c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5629c ["INT_ADD", "register:40f0:8", ["const:b5629c:8", "const:4:8"]]
- 00b5629c ["CALLIND", null, ["register:0:8"]]
+ 00b56338 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56338 ["INT_ADD", "register:40f0:8", ["const:b56338:8", "const:4:8"]]
+ 00b56338 ["CALLIND", null, ["register:0:8"]]
- 00b56264 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b56264 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b56264 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-95c31a6a640f5c67433b090a16a6c927"></a>

### [`00b562dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b562dc.md) → [`00b56378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56378.md) _ZN8firebase4util17JavaThreadContext24AcquireExecuteCancelLockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c5b1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c5b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2b0.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56398",
      "incomplete_value": true,
      "site": "00b563a0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:7a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b562fc",
      "incomplete_value": true,
      "site": "00b56304",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:6a0:8"
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
      "00b56398",
      "READ",
      [
        "storage",
        "011256a0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5631c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b56344",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b56398",
      "READ",
      [
        "storage",
        "011257a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b563b8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b563e0",
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
- 00b56304 ["INT_ADD", "register:40f0:8", ["const:b56304:8", "const:4:8"]]
- 00b56304 ["CALL", null, ["callee:00497a88:8"]]
+ 00b563a0 ["INT_ADD", "register:40f0:8", ["const:b563a0:8", "const:4:8"]]
+ 00b563a0 ["CALL", null, ["callee:00497a88:8"]]
- 00b562ec ["INT_ADD", "register:40f0:8", ["const:b562ec:8", "const:4:8"]]
- 00b562ec ["CALL", null, ["callee:00c5b2b0:8"]]
+ 00b56388 ["INT_ADD", "register:40f0:8", ["const:b56388:8", "const:4:8"]]
+ 00b56388 ["CALL", null, ["callee:00c5b2b0:8"]]
- 00b562fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6a0:8"]]
- 00b562fc ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b56398 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7a0:8"]]
+ 00b56398 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-35b56690c5a18d09417709526d63fb07"></a>

### [`00b56360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56360.md) → [`00b563fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b563fc.md) _ZN8firebase4util17JavaThreadContext9TerminateEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b380.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b450.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 21.13% / 新版 21.13%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b56418",
      "incomplete_value": true,
      "site": "00b56418",
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
      "definition_site": "00b5637c",
      "incomplete_value": true,
      "site": "00b5637c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b56410",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "00b56418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b563f0"
      ]
    ],
    [
      "00b56420",
      "READ",
      [
        "storage",
        "01125680",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b56410",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b56418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5648c"
      ]
    ],
    [
      "00b56420",
      "READ",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5637c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b5637c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b56418 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b56418 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00b56418 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b56418 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b56418 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:6b8:8"]]
- 00b56418 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b56374 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:678:8"]]
- 00b56374 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b56410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
+ 00b56410 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8c40890d0f5c66d35b5818ec1eec1bac"></a>

### [`00b5647c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b5647c.md) → [`00b56518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56518.md) _ZN8firebase4util17JavaThreadContext13SetupInstanceEP7_JNIEnvPFvPvES4_S6_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b180.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56540",
      "incomplete_value": true,
      "site": "00b5654c",
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
                "const:778:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b564a4",
      "incomplete_value": true,
      "site": "00b564b0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:678:8"
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
      "definition_site": "00b56544",
      "incomplete_value": true,
      "site": "00b5654c",
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
                "register:4048:8"
              ],
              [
                "leaf",
                "const:788:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b564a8",
      "incomplete_value": true,
      "site": "00b564b0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:688:8"
              ]
            ]
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
      "definition_site": "00b564a0",
      "incomplete_value": true,
      "site": "00b564b0",
      "value": [
        "live",
        "register:4008:8"
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
      "unmatched:00b564a4",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b564a8",
      "READ",
      [
        "storage",
        "01125688",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b564c4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b56540",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b56544",
      "READ",
      [
        "storage",
        "01125788",
        null,
        "undefined8"
      ]
    ],
    [
      "00b56560",
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
- 00b564b0 ["INT_ADD", "register:40f0:8", ["const:b564b0:8", "const:4:8"]]
- 00b564b0 ["CALL", null, ["callee:00589734:8"]]
+ 00b5654c ["INT_ADD", "register:40f0:8", ["const:b5654c:8", "const:4:8"]]
+ 00b5654c ["CALL", null, ["callee:00589734:8"]]
- 00b564fc ["INT_ADD", "register:40f0:8", ["const:b564fc:8", "const:4:8"]]
- 00b564fc ["CALL", null, ["callee:00c5b250:8"]]
+ 00b56598 ["INT_ADD", "register:40f0:8", ["const:b56598:8", "const:4:8"]]
+ 00b56598 ["CALL", null, ["callee:00c5b250:8"]]
- 00b564a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:678:8"]]
- 00b564a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1737064b79be2b5558d21f64398c0682"></a>

### [`00b56514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56514.md) → [`00b565b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b565b0.md) _ZN8firebase4util17JavaThreadContext15RunOnMainThreadEP7_JNIEnvP8_jobjectPFvPvES6_S8_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b360.md) · 呼出先 3件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b180.md) [`00c5b240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b240.md)
- 新版 呼出元 1件 [`00c5b430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b430.md) · 呼出先 3件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 60.94% / 新版 60.94%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b565dc",
      "incomplete_value": true,
      "site": "00b565e8",
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
                "const:778:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56540",
      "incomplete_value": true,
      "site": "00b5654c",
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
                "const:678:8"
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
      "definition_site": "00b565e0",
      "incomplete_value": true,
      "site": "00b565e8",
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
                "register:4048:8"
              ],
              [
                "leaf",
                "const:788:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56544",
      "incomplete_value": true,
      "site": "00b5654c",
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
                "register:4048:8"
              ],
              [
                "leaf",
                "const:688:8"
              ]
            ]
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
      "definition_site": "00b56538",
      "incomplete_value": true,
      "site": "00b5654c",
      "value": [
        "live",
        "register:4010:8"
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
      "unmatched:00b56540",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b56544",
      "READ",
      [
        "storage",
        "01125688",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b56568",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b56628"
      ]
    ]
  ],
  "added": [
    [
      "00b565dc",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b565e0",
      "READ",
      [
        "storage",
        "01125788",
        null,
        "undefined8"
      ]
    ],
    [
      "00b56604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b56628"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5654c ["INT_ADD", "register:40f0:8", ["const:b5654c:8", "const:4:8"]]
- 00b5654c ["CALL", null, ["callee:00589734:8"]]
+ 00b565e8 ["INT_ADD", "register:40f0:8", ["const:b565e8:8", "const:4:8"]]
+ 00b565e8 ["CALL", null, ["callee:00589734:8"]]
- 00b565b8 ["INT_ADD", "register:40f0:8", ["const:b565b8:8", "const:4:8"]]
- 00b565b8 ["CALL", null, ["callee:00c5b310:8"]]
+ 00b56654 ["INT_ADD", "register:40f0:8", ["const:b56654:8", "const:4:8"]]
+ 00b56654 ["CALL", null, ["callee:00c5b310:8"]]
- 00b565e8 ["COPY", "register:4000:8", ["register:4098:8"]]
~~~


<a id="compare-e1a618ca244b3f707d188c759e956ff8"></a>

### [`00b56614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56614.md) → [`00b566b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b566b0.md) _ZN8firebase4util17JavaThreadContext21RunOnBackgroundThreadEP7_JNIEnvPFvPvES4_S6_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b370.md) · 呼出先 3件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b180.md) [`00c5b240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b240.md)
- 新版 呼出元 1件 [`00c5b440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b440.md) · 呼出先 3件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.19% / 新版 74.19%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b566d8",
      "incomplete_value": true,
      "site": "00b566e4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:778:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5663c",
      "incomplete_value": true,
      "site": "00b56648",
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
                "const:678:8"
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
      "definition_site": "00b566dc",
      "incomplete_value": true,
      "site": "00b566e4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:788:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56640",
      "incomplete_value": true,
      "site": "00b56648",
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
                "register:4048:8"
              ],
              [
                "leaf",
                "const:688:8"
              ]
            ]
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
      "definition_site": "00b566d0",
      "incomplete_value": true,
      "site": "00b566e4",
      "value": [
        "live",
        "register:4010:8"
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
      "unmatched:00b56614",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b56618",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5661c",
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
      "00b566b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b566b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b566b8",
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
- 00b56648 ["INT_ADD", "register:40f0:8", ["const:b56648:8", "const:4:8"]]
- 00b56648 ["CALL", null, ["callee:00589734:8"]]
+ 00b566e4 ["INT_ADD", "register:40f0:8", ["const:b566e4:8", "const:4:8"]]
+ 00b566e4 ["CALL", null, ["callee:00589734:8"]]
- 00b566b0 ["INT_ADD", "register:40f0:8", ["const:b566b0:8", "const:4:8"]]
- 00b566b0 ["CALL", null, ["callee:00c5b310:8"]]
+ 00b5674c ["INT_ADD", "register:40f0:8", ["const:b5674c:8", "const:4:8"]]
+ 00b5674c ["CALL", null, ["callee:00c5b310:8"]]
+ 00b566b0 ["COPY", "tmp:0:8", ["register:40a8:8"]]
+ 00b566b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
+ 00b566b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-98ae18bfd56539106daa063865d0a260"></a>

### [`00b56714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56714.md) → [`00b567b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b567b0.md) _ZN8firebase4util9FindClassEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b570.md) · 呼出先 1件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md)
- 新版 呼出元 1件 [`00c5b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b640.md) · 呼出先 1件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.58% / 新版 52.58%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b56828",
      "incomplete_value": true,
      "site": "00b5682c",
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
      "definition_site": "00b5678c",
      "incomplete_value": true,
      "site": "00b56790",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b567e0",
      "incomplete_value": true,
      "site": "00b567e8",
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
      "definition_site": "00b5676c",
      "incomplete_value": true,
      "site": "00b56778",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b56714",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b56718",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5671c",
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
      "00b567b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b567b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b567b8",
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
- 00b5674c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5674c ["INT_ADD", "register:40f0:8", ["const:b5674c:8", "const:4:8"]]
- 00b5674c ["CALLIND", null, ["register:0:8"]]
+ 00b567e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b567e8 ["INT_ADD", "register:40f0:8", ["const:b567e8:8", "const:4:8"]]
+ 00b567e8 ["CALLIND", null, ["register:0:8"]]
- 00b56778 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b56778 ["INT_ADD", "register:40f0:8", ["const:b56778:8", "const:4:8"]]
- 00b56778 ["CALLIND", null, ["register:0:8"]]
+ 00b56814 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56814 ["INT_ADD", "register:40f0:8", ["const:b56814:8", "const:4:8"]]
+ 00b56814 ["CALLIND", null, ["register:0:8"]]
- 00b56790 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
+ 00b5682c ["CBRANCH", null, ["local:b20:8", "register:101:1"]]
~~~


<a id="compare-40130174949ba4b43ca8e12f05d864bf"></a>

### [`00b56898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56898.md) → [`00b56934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56934.md) _ZN8firebase4util16FindClassInFilesEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b330.md) · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b400.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.09% / 新版 70.09%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 5件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 18件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5697c",
      "incomplete_value": true,
      "site": "00b5698c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:8e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b568e0",
      "incomplete_value": true,
      "site": "00b568f0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:7e0:8"
              ]
            ]
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
      "definition_site": "00b569d0",
      "incomplete_value": true,
      "site": "00b569dc",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:ba8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56934",
      "incomplete_value": true,
      "site": "00b56940",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:aa8:8"
              ]
            ]
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
    "new": {
      "definition_site": "00b56aa0",
      "incomplete_value": true,
      "site": "00b56aac",
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
                "const:ba8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56a04",
      "incomplete_value": true,
      "site": "00b56a10",
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
                "const:aa8:8"
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
      "unmatched:00b5689c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b568c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b568cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b56974"
      ]
    ]
  ],
  "added": [
    [
      "00b56938",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b5695c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b56968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b56974"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b568f0 ["INT_ADD", "register:40f0:8", ["const:b568f0:8", "const:4:8"]]
- 00b568f0 ["CALL", null, ["callee:00497874:8"]]
+ 00b5698c ["INT_ADD", "register:40f0:8", ["const:b5698c:8", "const:4:8"]]
+ 00b5698c ["CALL", null, ["callee:00497874:8"]]
- 00b56940 ["INT_ADD", "register:40f0:8", ["const:b56940:8", "const:4:8"]]
- 00b56940 ["CALL", null, ["callee:00497874:8"]]
+ 00b569dc ["INT_ADD", "register:40f0:8", ["const:b569dc:8", "const:4:8"]]
+ 00b569dc ["CALL", null, ["callee:00497874:8"]]
- 00b5698c ["INT_ADD", "register:40f0:8", ["const:b5698c:8", "const:4:8"]]
- 00b5698c ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b56a28 ["INT_ADD", "register:40f0:8", ["const:b56a28:8", "const:4:8"]]
+ 00b56a28 ["CALL", null, ["callee:00c5aff0:8"]]
~~~


<a id="compare-113278289a66660a02fdd7701f6b1752"></a>

### [`00b56f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b56/00b56f98.md) → [`00b57034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57034.md) _ZNSt6__ndk1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_S6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b670.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b740.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.89% / 新版 82.89%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b570a0",
      "incomplete_value": true,
      "site": "00b570a4",
      "value": [
        "INT_AND",
        "8",
        [
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
                "const:11:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57004",
      "incomplete_value": true,
      "site": "00b57008",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b570b8",
      "incomplete_value": true,
      "site": "00b570c4",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:00b56f98",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b56f9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b56fa0",
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
      "00b57034",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b57038",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5703c",
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
- 00b57008 ["INT_ADD", "register:40f0:8", ["const:b57008:8", "const:4:8"]]
- 00b57008 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b570a4 ["INT_ADD", "register:40f0:8", ["const:b570a4:8", "const:4:8"]]
+ 00b570a4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b57028 ["INT_ADD", "register:40f0:8", ["const:b57028:8", "const:4:8"]]
- 00b57028 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b570c4 ["INT_ADD", "register:40f0:8", ["const:b570c4:8", "const:4:8"]]
+ 00b570c4 ["CALL", null, ["callee:00c580d0:8"]]
- 00b570c4 ["INT_ADD", "register:40f0:8", ["const:b570c4:8", "const:4:8"]]
- 00b570c4 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b57160 ["INT_ADD", "register:40f0:8", ["const:b57160:8", "const:4:8"]]
+ 00b57160 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-20d2fa2a59eda1d51b6f95a631abb2a6"></a>

### [`00b570c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b570c8.md) → [`00b57164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57164.md) _ZN8firebase4util25GetResourceIdFromActivityEP7_JNIEnvP8_jobjectPKcNS0_12ResourceTypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 68.18% / 新版 68.18%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57180",
      "incomplete_value": true,
      "site": "00b57190",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:900:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b570e4",
      "incomplete_value": true,
      "site": "00b570f4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:800:8"
              ]
            ]
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
      "definition_site": "00b571d4",
      "incomplete_value": true,
      "site": "00b571e0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:8f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b572a8",
      "incomplete_value": true,
      "site": "00b572b0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b570e4",
      "READ",
      [
        "storage",
        "01125800",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b57110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b571d0"
      ]
    ],
    [
      "00b571d4",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b57180",
      "READ",
      [
        "storage",
        "01125900",
        null,
        "undefined8"
      ]
    ],
    [
      "00b571ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b571d0"
      ]
    ],
    [
      "00b571d4",
      "READ",
      [
        "storage",
        "011258f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b570f4 ["INT_ADD", "register:40f0:8", ["const:b570f4:8", "const:4:8"]]
- 00b570f4 ["CALL", null, ["callee:00497874:8"]]
+ 00b57190 ["INT_ADD", "register:40f0:8", ["const:b57190:8", "const:4:8"]]
+ 00b57190 ["CALL", null, ["callee:00497874:8"]]
- 00b57144 ["INT_ADD", "register:40f0:8", ["const:b57144:8", "const:4:8"]]
- 00b57144 ["CALL", null, ["callee:00497874:8"]]
+ 00b571e0 ["INT_ADD", "register:40f0:8", ["const:b571e0:8", "const:4:8"]]
+ 00b571e0 ["CALL", null, ["callee:00497874:8"]]
- 00b57180 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b57180 ["INT_ADD", "register:40f0:8", ["const:b57180:8", "const:4:8"]]
- 00b57180 ["CALLIND", null, ["register:0:8"]]
+ 00b572b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b572b0 ["INT_ADD", "register:40f0:8", ["const:b572b0:8", "const:4:8"]]
+ 00b572b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-517f4f64b87f894a8708a7e7329c7279"></a>

### [`00b57280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57280.md) → [`00b5731c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b5731c.md) _ZN8firebase4util29GetResourceStringFromActivityEP7_JNIEnvP8_jobjecti

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57344",
      "incomplete_value": true,
      "site": "00b57348",
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
            "const:8cd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b572a8",
      "incomplete_value": false,
      "site": "00b572ac",
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
            "const:88d:8"
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
      "definition_site": "00b57350",
      "incomplete_value": true,
      "site": "00b57360",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:918:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b572b4",
      "incomplete_value": true,
      "site": "00b572c4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:818:8"
              ]
            ]
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
      "definition_site": "00b57308",
      "incomplete_value": true,
      "site": "00b57310",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b572a8",
      "PARAM",
      [
        "storage",
        "002b588d",
        null,
        "string"
      ]
    ],
    [
      "00b57350",
      "READ",
      [
        "storage",
        "01125818",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b572d8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b57344",
      "PARAM",
      [
        "storage",
        "002b58cd",
        null,
        "string"
      ]
    ],
    [
      "00b57350",
      "READ",
      [
        "storage",
        "01125918",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57374",
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
- 00b572ac ["INT_ADD", "register:40f0:8", ["const:b572ac:8", "const:4:8"]]
- 00b572ac ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b57348 ["INT_ADD", "register:40f0:8", ["const:b57348:8", "const:4:8"]]
+ 00b57348 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b572c4 ["INT_ADD", "register:40f0:8", ["const:b572c4:8", "const:4:8"]]
- 00b572c4 ["CALL", null, ["callee:00497874:8"]]
+ 00b57360 ["INT_ADD", "register:40f0:8", ["const:b57360:8", "const:4:8"]]
+ 00b57360 ["CALL", null, ["callee:00497874:8"]]
- 00b57310 ["INT_ADD", "register:40f0:8", ["const:b57310:8", "const:4:8"]]
- 00b57310 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b573ac ["INT_ADD", "register:40f0:8", ["const:b573ac:8", "const:4:8"]]
+ 00b573ac ["CALL", null, ["callee:00c5aff0:8"]]
~~~


<a id="compare-41adff797e31e70e9ada69f03b6edf95"></a>

### [`00b57334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57334.md) → [`00b573d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b573d0.md) _ZN8firebase4util14GetPackageNameEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b573e4",
      "incomplete_value": true,
      "site": "00b573f0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:8f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57348",
      "incomplete_value": true,
      "site": "00b57354",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:7f8:8"
              ]
            ]
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
      "definition_site": "00b57398",
      "incomplete_value": true,
      "site": "00b573a0",
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
      "definition_site": "00b5739c",
      "incomplete_value": true,
      "site": "00b573a0",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b57334",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b57338",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5733c",
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
      "00b573d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b573d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b573d8",
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
- 00b57354 ["INT_ADD", "register:40f0:8", ["const:b57354:8", "const:4:8"]]
- 00b57354 ["CALL", null, ["callee:00497874:8"]]
+ 00b573f0 ["INT_ADD", "register:40f0:8", ["const:b573f0:8", "const:4:8"]]
+ 00b573f0 ["CALL", null, ["callee:00497874:8"]]
- 00b573a0 ["INT_ADD", "register:40f0:8", ["const:b573a0:8", "const:4:8"]]
- 00b573a0 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b5743c ["INT_ADD", "register:40f0:8", ["const:b5743c:8", "const:4:8"]]
+ 00b5743c ["CALL", null, ["callee:00c5aff0:8"]]
- 00b57334 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b57334 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b57334 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-9fe64295e1479a97ecab6ce87d28e5d3"></a>

### [`00b573c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b573c4.md) → [`00b57460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57460.md) _ZN8firebase4util27GetAndClearExceptionMessageEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af70.md) · 呼出先 1件 [`00c5af50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af50.md)
- 新版 呼出元 1件 [`00c5b040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b040.md) · 呼出先 1件 [`00c5b020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b020.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.79% / 新版 78.79%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b57404",
      "incomplete_value": true,
      "site": "00b5740c",
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
      "unmatched:00b573c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b573c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b573cc",
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
      "00b57460",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b57464",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b57468",
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
- 00b5740c ["INT_ADD", "register:40f0:8", ["const:b5740c:8", "const:4:8"]]
- 00b5740c ["CALL", null, ["callee:00c5b020:8"]]
+ 00b574a8 ["INT_ADD", "register:40f0:8", ["const:b574a8:8", "const:4:8"]]
+ 00b574a8 ["CALL", null, ["callee:00c5b020:8"]]
- 00b573c4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b573c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b573c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b573c8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b573c8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b573c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b573c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d255610c312d5348cfa5a49c91637b5e"></a>

### [`00b57448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57448.md) → [`00b574e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b574e4.md) _ZN8firebase4util23GetMessageFromExceptionEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af50.md) · 呼出先 3件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5b020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b020.md) · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 59.05% / 新版 59.05%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 9件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57500",
      "incomplete_value": true,
      "site": "00b5750c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:e00:8"
              ]
            ]
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
      "definition_site": "00b575ec",
      "incomplete_value": true,
      "site": "00b575f4",
      "value": [
        "live",
        "register:4098:8"
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
      "00b57500",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5748c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5754c"
      ]
    ],
    [
      "00b57554",
      "READ",
      [
        "storage",
        "01125d08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b57500",
      "READ",
      [
        "storage",
        "01125e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57528",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5754c"
      ]
    ],
    [
      "00b57554",
      "READ",
      [
        "storage",
        "01125e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57470 ["INT_ADD", "register:40f0:8", ["const:b57470:8", "const:4:8"]]
- 00b57470 ["CALL", null, ["callee:00497874:8"]]
+ 00b5750c ["INT_ADD", "register:40f0:8", ["const:b5750c:8", "const:4:8"]]
+ 00b5750c ["CALL", null, ["callee:00497874:8"]]
- 00b574d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b574d8 ["INT_ADD", "register:40f0:8", ["const:b574d8:8", "const:4:8"]]
- 00b574d8 ["CALLIND", null, ["register:0:8"]]
+ 00b575f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b575f4 ["INT_ADD", "register:40f0:8", ["const:b575f4:8", "const:4:8"]]
+ 00b575f4 ["CALLIND", null, ["register:0:8"]]
- 00b5745c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b5745c ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 00b574f8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b574f8 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
~~~


<a id="compare-cc24827ca8a2319e9fdcc8e1f5636078"></a>

### [`00b575ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b575ec.md) → [`00b57688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57688.md) _ZN8firebase4util12LogExceptionEP7_JNIEnvNS_8LogLevelEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aee0.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0c0.md)
- 新版 呼出元 1件 [`00c5afb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afb0.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b190.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.10% / 新版 71.10%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b577c4",
      "incomplete_value": true,
      "site": "00b577d0",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "00b577c8",
      "incomplete_value": true,
      "site": "00b577d0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 16,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b577d8",
      "incomplete_value": false,
      "site": "00b577e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:76e:8"
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
      "unmatched:00b57608",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5760c",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b57610",
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
      "00b576a4",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "00b576a8",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "00b576ac",
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
- 00b576e0 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00b577d0 ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
- 00b577d0 ["INT_ADD", "register:40f0:8", ["const:b577d0:8", "const:4:8"]]
- 00b577d0 ["CALL", null, ["callee:00c5b220:8"]]
+ 00b5786c ["INT_ADD", "register:40f0:8", ["const:b5786c:8", "const:4:8"]]
+ 00b5786c ["CALL", null, ["callee:00c5b220:8"]]
- 00b577e8 ["INT_ADD", "register:40f0:8", ["const:b577e8:8", "const:4:8"]]
- 00b577e8 ["CALL", null, ["callee:00c5b750:8"]]
+ 00b57884 ["INT_ADD", "register:40f0:8", ["const:b57884:8", "const:4:8"]]
+ 00b57884 ["CALL", null, ["callee:00c5b750:8"]]
~~~


<a id="compare-81d69f0e35b08666f2411392445551bd"></a>

### [`00b578a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b578a0.md) → [`00b5793c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b5793c.md) DetachJVMThreads

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b57918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57918.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b579b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579b4.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b578f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b579a0"
      ]
    ],
    [
      "unmatched:00b578f4",
      "DATA",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b578f8",
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
      "00b5798c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b579a0"
      ]
    ],
    [
      "00b57990",
      "DATA",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b57994",
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
- 00b578d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b578d0 ["INT_ADD", "register:40f0:8", ["const:b578d0:8", "const:4:8"]]
- 00b578d0 ["CALLIND", null, ["register:0:8"]]
+ 00b5796c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5796c ["INT_ADD", "register:40f0:8", ["const:b5796c:8", "const:4:8"]]
+ 00b5796c ["CALLIND", null, ["register:0:8"]]
- 00b578e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b578e0 ["INT_ADD", "register:40f0:8", ["const:b578e0:8", "const:4:8"]]
- 00b578e0 ["CALLIND", null, ["register:0:8"]]
+ 00b5797c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5797c ["INT_ADD", "register:40f0:8", ["const:b5797c:8", "const:4:8"]]
+ 00b5797c ["CALLIND", null, ["register:0:8"]]
- 00b578ec ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 00b578ec ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 00b578ec ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 00b578ec ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-412b3dec0be5f9e2991d96dda6ac4ded"></a>

### [`00b5792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b5792c.md) → [`00b579c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579c8.md) _ZN8firebase4util19GetThreadsafeJNIEnvEP7_JavaVM

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md) · 呼出先 4件 [`00b57918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57918.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58140.md) [`00c5b6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6c0.md)
- 新版 呼出元 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md) · 呼出先 4件 [`00b579b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c5b790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b790.md)

変更の種類 call_argument_candidate, call_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 86.11% / 新版 86.11%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b579f0",
      "incomplete_value": true,
      "site": "00b579f8",
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57954",
      "incomplete_value": true,
      "site": "00b5795c",
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
                "const:738:8"
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
    "new": {
      "definition_site": "00b579f4",
      "incomplete_value": true,
      "site": "00b579f8",
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
                "const:7e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57958",
      "incomplete_value": true,
      "site": "00b5795c",
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
                "const:710:8"
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
    "new": null,
    "old": {
      "definition_site": "00b5796c",
      "incomplete_value": true,
      "site": "00b57970",
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
      "00b579f0",
      "READ",
      [
        "storage",
        "00c9b738",
        null,
        "pointer"
      ]
    ],
    [
      "00b579f0",
      "PARAM",
      [
        "storage",
        "01125fb8",
        "firebase::util::pthread_key_initialized",
        "undefined4"
      ]
    ],
    [
      "00b579f4",
      "READ",
      [
        "storage",
        "00c9b710",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b579f0",
      "READ",
      [
        "storage",
        "00c9b808",
        null,
        "pointer"
      ]
    ],
    [
      "00b579f0",
      "PARAM",
      [
        "storage",
        "011260b8",
        "firebase::util::pthread_key_initialized",
        "undefined4"
      ]
    ],
    [
      "00b579f4",
      "READ",
      [
        "storage",
        "00c9b7e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5795c ["INT_ADD", "register:40f0:8", ["const:b5795c:8", "const:4:8"]]
- 00b5795c ["CALL", null, ["callee:00c5b790:8"]]
+ 00b579f8 ["INT_ADD", "register:40f0:8", ["const:b579f8:8", "const:4:8"]]
+ 00b579f8 ["CALL", null, ["callee:00c5b790:8"]]
- 00b57970 ["INT_ADD", "register:40f0:8", ["const:b57970:8", "const:4:8"]]
- 00b57970 ["CALL", null, ["callee:00c58210:8"]]
+ 00b57a0c ["INT_ADD", "register:40f0:8", ["const:b57a0c:8", "const:4:8"]]
+ 00b57a0c ["CALL", null, ["callee:00c58210:8"]]
- 00b57988 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b57988 ["INT_ADD", "register:40f0:8", ["const:b57988:8", "const:4:8"]]
- 00b57988 ["CALLIND", null, ["register:0:8"]]
+ 00b57a24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b57a24 ["INT_ADD", "register:40f0:8", ["const:b57a24:8", "const:4:8"]]
+ 00b57a24 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8f01f2abb6e5c1d4bab6587484b99b77"></a>

### [`00b579e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b579e4.md) → [`00b57a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57a80.md) _ZN8firebase7Variant18set_mutable_stringERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b580.md) · 呼出先 3件 [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a900.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5b650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b650.md) · 呼出先 3件 [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9d0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.81% / 新版 73.81%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b57a18",
      "incomplete_value": false,
      "site": "00b57a20",
      "value": [
        "leaf",
        "const:a:8"
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
      "unmatched:00b579e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b579e8",
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
      "00b57a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b57a84",
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
- 00b57a20 ["INT_ADD", "register:40f0:8", ["const:b57a20:8", "const:4:8"]]
- 00b57a20 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b57abc ["INT_ADD", "register:40f0:8", ["const:b57abc:8", "const:4:8"]]
+ 00b57abc ["CALL", null, ["callee:00c5a900:8"]]
- 00b579e4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b579e4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b579e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b579e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b579e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b579e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b579e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b579e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bb4a8308dd267a613b837b5277036958"></a>

### [`00b57a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57a8c.md) → [`00b57b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57b28.md) _ZNSt6__ndk16__treeINS_12__value_typeIPKcNS_4listIN8firebase4util12CallbackDataENS_9allocatorIS7_EEEEEENS_19__map_value_compareIS3_SB_NS_4le

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b610.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b610.md)
- 新版 呼出元 1件 [`00c5b6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6e0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6e0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b57ac0"
      ],
      [
        "FALL_THROUGH",
        "00b57b5c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b57b5c",
      "incomplete_value": true,
      "site": "00b57b74",
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
      "definition_site": "00b57ac0",
      "incomplete_value": true,
      "site": "00b57ad8",
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
      "unmatched:00b57a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b57a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b57a98",
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
      "00b57b2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b57b30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b57b34",
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
- 00b57a90 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b57a90 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b57a90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b57a94 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b57a94 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b57a94 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b57a94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b57a98 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b57a98 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b57a98 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b57a98 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1f595b407ae04535e3093b30ff224369"></a>

### [`00b57b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57b18.md) → [`00b57bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57bb4.md) _ZNSt6__ndk127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.73% / 新版 81.73%

優先判定に残った影響 `store_condition` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b57ba0"
      ],
      [
        "FALL_THROUGH",
        "00b57c3c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b57c3c",
      "incomplete_value": true,
      "site": "00b57c40",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57ba0",
      "incomplete_value": true,
      "site": "00b57ba4",
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
      "unmatched:00b57b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57c24"
      ]
    ],
    [
      "unmatched:00b57ba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57c48"
      ]
    ],
    [
      "unmatched:00b57c88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b57c90"
      ]
    ]
  ],
  "added": [
    [
      "00b57c18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57c24"
      ]
    ],
    [
      "00b57c3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57c48"
      ]
    ],
    [
      "00b57d24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57d2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57b2c ["BRANCH", null, ["local:b4:8"]]
+ 00b57bc8 ["BRANCH", null, ["local:b3:8"]]
- 00b57b50 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:18:8"]]
- 00b57b50 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b57b50 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b57b70 ["INT_EQUAL", "tmp:0:1", ["register:4060:4", "const:0:4"]]
- 00b57b70 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b57c0c ["INT_EQUAL", "tmp:0:1", ["register:4060:4", "const:0:4"]]
+ 00b57c0c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-824f34bf82cd67eaaba3bd61f31f493b"></a>

### [`00b57cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57cb8.md) → [`00b57d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57d54.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57dbc",
      "incomplete_value": true,
      "site": "00b57dc0",
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
      "unmatched:00b57cf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57df8"
      ]
    ]
  ],
  "added": [
    [
      "00b57d94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57df8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57d24 ["INT_ADD", "register:40f0:8", ["const:b57d24:8", "const:4:8"]]
- 00b57d24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b57dc0 ["INT_ADD", "register:40f0:8", ["const:b57dc0:8", "const:4:8"]]
+ 00b57dc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b57cf4 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b57cf4 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 00b57cf4 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 00b57cf4 ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
- 00b57cf8 ["CBRANCH", null, ["local:b13:8", "register:102:1"]]
~~~


<a id="compare-e048d430dfaa57821d28dac0de63ecaa"></a>

### [`00b57d60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57d60.md) → [`00b57dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57dfc.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE25__emp

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5f0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5a0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5b6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6c0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.69% / 新版 81.69%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57e34",
      "incomplete_value": true,
      "site": "00b57e38",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00b57eb8",
      "incomplete_value": true,
      "site": "00b57ebc",
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
            "const:38:8"
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
      "definition_site": "00b57eb4",
      "incomplete_value": true,
      "site": "00b57ebc",
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
      "unmatched:00b57d84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e78"
      ]
    ],
    [
      "unmatched:00b57dd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e7c"
      ]
    ],
    [
      "unmatched:00b57df8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e84"
      ]
    ]
  ],
  "added": [
    [
      "00b57e20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e78"
      ]
    ],
    [
      "00b57e6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e7c"
      ]
    ],
    [
      "00b57e94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57e84"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57d9c ["INT_ADD", "register:40f0:8", ["const:b57d9c:8", "const:4:8"]]
- 00b57d9c ["CALL", null, ["callee:00c5b670:8"]]
+ 00b57e38 ["INT_ADD", "register:40f0:8", ["const:b57e38:8", "const:4:8"]]
+ 00b57e38 ["CALL", null, ["callee:00c5b670:8"]]
- 00b57e20 ["INT_ADD", "register:40f0:8", ["const:b57e20:8", "const:4:8"]]
- 00b57e20 ["CALL", null, ["callee:00c5a910:8"]]
+ 00b57ebc ["INT_ADD", "register:40f0:8", ["const:b57ebc:8", "const:4:8"]]
+ 00b57ebc ["CALL", null, ["callee:00c5a910:8"]]
- 00b57e38 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b57e38 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00b57ed4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b57ed4 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-f8154e6b576e18dbea6af32d1dd3a1d3"></a>

### [`00b57e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57e7c.md) → [`00b57f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57f18.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b640.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5b710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b710.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57f94",
      "incomplete_value": true,
      "site": "00b57f98",
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
      "definition_site": "00b57ef8",
      "incomplete_value": true,
      "site": "00b57efc",
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
      "unmatched:00b57ee0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57f90"
      ]
    ],
    [
      "unmatched:00b57f24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57ff4"
      ]
    ],
    [
      "unmatched:00b57f4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57fc4"
      ]
    ]
  ],
  "added": [
    [
      "00b57f7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57f90"
      ]
    ],
    [
      "00b57fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57ff4"
      ]
    ],
    [
      "00b57fe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b57fc4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57efc ["INT_ADD", "register:40f0:8", ["const:b57efc:8", "const:4:8"]]
- 00b57efc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b57f98 ["INT_ADD", "register:40f0:8", ["const:b57f98:8", "const:4:8"]]
+ 00b57f98 ["CALL", null, ["callee:00c57f60:8"]]
- 00b57ec8 ["INT_SRIGHT", "register:4048:8", ["register:4048:8", "const:3:8"]]
- 00b57ecc ["INT_MULT", "register:4048:8", ["register:4048:8", "register:4050:8"]]
~~~


<a id="compare-5625c7c56defbc218b37724ad5a1b147"></a>

### [`00b57fcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b57fcc.md) → [`00b58068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58068.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b650.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.55% / 新版 79.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b580ec",
      "incomplete_value": true,
      "site": "00b580f0",
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
      "unmatched:00b58004",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b581c4"
      ]
    ],
    [
      "unmatched:00b58030",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b580e0"
      ]
    ],
    [
      "unmatched:00b58084",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58154"
      ]
    ]
  ],
  "added": [
    [
      "00b580a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b581c4"
      ]
    ],
    [
      "00b580cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b580e0"
      ]
    ],
    [
      "00b58120",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58154"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b580f0 ["INT_ADD", "register:40f0:8", ["const:b580f0:8", "const:4:8"]]
- 00b580f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5818c ["INT_ADD", "register:40f0:8", ["const:b5818c:8", "const:4:8"]]
+ 00b5818c ["CALL", null, ["callee:00c57f80:8"]]
- 00b57ff0 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
- 00b57ff4 ["INT_MULT", "register:40b0:8", ["register:4040:8", "register:4050:8"]]
~~~


<a id="compare-4f991242a7dfcd494d072501edd02f6a"></a>

### [`00b5812c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b5812c.md) → [`00b581c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b581c8.md) _ZNSt6__ndk16vectorIN8firebase7VariantENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b620.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6f0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.78% / 新版 79.78%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58264",
      "incomplete_value": true,
      "site": "00b58274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              [
                "live",
                "register:40c8:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58268",
      "incomplete_value": true,
      "site": "00b58274",
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
    "new": null,
    "old": {
      "definition_site": "00b58238",
      "incomplete_value": true,
      "site": "00b58240",
      "value": [
        "INT_SUB",
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
      "unmatched:00b58198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58248"
      ]
    ],
    [
      "unmatched:00b58278",
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
      "00b58234",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58248"
      ]
    ],
    [
      "00b58314",
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
- 00b581d8 ["INT_ADD", "register:40f0:8", ["const:b581d8:8", "const:4:8"]]
- 00b581d8 ["CALL", null, ["callee:00c5a910:8"]]
+ 00b58274 ["INT_ADD", "register:40f0:8", ["const:b58274:8", "const:4:8"]]
+ 00b58274 ["CALL", null, ["callee:00c5a910:8"]]
- 00b58240 ["INT_ADD", "register:40f0:8", ["const:b58240:8", "const:4:8"]]
- 00b58240 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b582dc ["INT_ADD", "register:40f0:8", ["const:b582dc:8", "const:4:8"]]
+ 00b582dc ["CALL", null, ["callee:00c5a900:8"]]
+ 00b58240 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b58240 ["COPY", "tmp:1:8", ["register:4040:8"]]
+ 00b58240 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
+ 00b58240 ["COPY", "tmp:1:8", ["register:4048:8"]]
~~~


<a id="compare-47e9f331bfc6be7e1eb778a0873838e1"></a>

### [`00b58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58290.md) → [`00b5832c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b5832c.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b660.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5832c",
      "incomplete_value": true,
      "site": "00b58340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
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
    "new": null,
    "old": {
      "definition_site": "00b58330",
      "incomplete_value": false,
      "site": "00b58340",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b58334",
      "incomplete_value": true,
      "site": "00b58340",
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


~~~diff
- 00b58340 ["INT_ADD", "register:40f0:8", ["const:b58340:8", "const:4:8"]]
- 00b58340 ["CALL", null, ["callee:00c58160:8"]]
+ 00b583dc ["INT_ADD", "register:40f0:8", ["const:b583dc:8", "const:4:8"]]
+ 00b583dc ["CALL", null, ["callee:00c58160:8"]]
- 00b582c0 ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
+ 00b5835c ["CBRANCH", null, ["local:b6:8", "register:102:1"]]
- 00b582d0 ["CBRANCH", null, ["local:b16:8", "register:100:1"]]
+ 00b5836c ["CBRANCH", null, ["local:b18:8", "register:100:1"]]
~~~


<a id="compare-d9d110ba688166ba1415e8f7ab2d3a4c"></a>

### [`00b583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b583a0.md) → [`00b5843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b5843c.md) _ZNSt6__ndk16__treeINS_12__value_typeIPKcNS_4listIN8firebase4util12CallbackDataENS_9allocatorIS7_EEEEEENS_19__map_value_compareIS3_SB_NS_4le

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b600.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 1件 [`00c5b6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6d0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.21% / 新版 73.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b584b4",
      "incomplete_value": true,
      "site": "00b584b8",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00b58418",
      "incomplete_value": true,
      "site": "00b5841c",
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
                "const:8:8"
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
      "definition_site": "00b5840c",
      "incomplete_value": true,
      "site": "00b5841c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b583f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5847c"
      ]
    ],
    [
      "unmatched:00b5844c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58500"
      ]
    ]
  ],
  "added": [
    [
      "00b58490",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5847c"
      ]
    ],
    [
      "00b584e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58500"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5841c ["INT_ADD", "register:40f0:8", ["const:b5841c:8", "const:4:8"]]
- 00b5841c ["CALL", null, ["callee:00c5b6a0:8"]]
+ 00b584b8 ["INT_ADD", "register:40f0:8", ["const:b584b8:8", "const:4:8"]]
+ 00b584b8 ["CALL", null, ["callee:00c5b6a0:8"]]
- 00b583c8 ["BRANCH", null, ["local:b6:8"]]
+ 00b58464 ["BRANCH", null, ["local:b5:8"]]
- 00b583dc ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00b58478 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-dae7ac7c44cf3f60ba01d5cc41f55ba3"></a>

### [`00b58480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58480.md) → [`00b5851c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b5851c.md) _ZNSt6__ndk113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `store_condition` 3件

アドレスに依存する影響 `unresolved_branch_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b58530"
      ],
      [
        "FALL_THROUGH",
        "00b585cc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b585cc",
      "incomplete_value": true,
      "site": "00b585d0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4068:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b58530",
      "incomplete_value": true,
      "site": "00b58534",
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
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5868c"
      ],
      [
        "FALL_THROUGH",
        "00b58728"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b5872c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00b58688",
      "incomplete_value": true,
      "site": "00b58690",
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
                "register:4068:8"
              ],
              [
                "live",
                "register:4050:8"
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
    "ordinal": 26,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b5868c"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b58728"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b58734",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00b58688",
      "incomplete_value": true,
      "site": "00b58698",
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
                "register:4068:8"
              ],
              [
                "live",
                "register:4050:8"
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
      "unmatched:00b58530",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b585d4"
      ]
    ],
    [
      "unmatched:00b58580",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58628"
      ]
    ],
    [
      "unmatched:00b585a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58680"
      ]
    ]
  ],
  "added": [
    [
      "00b585cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b585d4"
      ]
    ],
    [
      "00b5861c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58628"
      ]
    ],
    [
      "00b58644",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58680"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b585d0 ["INT_EQUAL", "tmp:0:1", ["register:4060:4", "const:0:4"]]
- 00b585d0 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
+ 00b5866c ["INT_EQUAL", "tmp:0:1", ["register:4060:4", "const:0:4"]]
+ 00b5866c ["CBRANCH", null, ["local:b65:8", "tmp:0:1"]]
+ 00b58698 ["INT_ZEXT", "tmp:0:8", ["register:4050:4"]]
+ 00b58698 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00b58698 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:3:8"]]
+ 00b58698 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00b584ac ["BRANCH", null, ["local:b7:8"]]
+ 00b58548 ["BRANCH", null, ["local:b8:8"]]
~~~


<a id="compare-524993d5ece9905bcc73147b31cacd57"></a>

### [`00b58830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58830.md) → [`00b588cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b588cc.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) · 呼出先 2件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0a0.md)
- 新版 呼出元 1件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) · 呼出先 2件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 97.96% / 新版 97.96%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b58880",
      "incomplete_value": true,
      "site": "00b58894",
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
    "new": null,
    "old": {
      "definition_site": "00b5887c",
      "incomplete_value": true,
      "site": "00b58894",
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
            "register:4008:8"
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
      "definition_site": "00b588b0",
      "incomplete_value": true,
      "site": "00b588bc",
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
            "register:40a8:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00b58894 ["INT_ADD", "register:40f0:8", ["const:b58894:8", "const:4:8"]]
- 00b58894 ["CALL", null, ["callee:00c5b170:8"]]
+ 00b58930 ["INT_ADD", "register:40f0:8", ["const:b58930:8", "const:4:8"]]
+ 00b58930 ["CALL", null, ["callee:00c5b170:8"]]
- 00b588bc ["INT_ADD", "register:40f0:8", ["const:b588bc:8", "const:4:8"]]
- 00b588bc ["CALL", null, ["callee:00c580d0:8"]]
+ 00b58958 ["INT_ADD", "register:40f0:8", ["const:b58958:8", "const:4:8"]]
+ 00b58958 ["CALL", null, ["callee:00c580d0:8"]]
- 00b5887c ["INT_SUB", "register:4010:8", ["register:4040:8", "register:4008:8"]]
~~~


<a id="compare-de7e185507b2ba710020fa6b8005d5d9"></a>

### [`00b588f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b588f4.md) → [`00b58990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58990.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.16% / 新版 81.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b589c4",
      "incomplete_value": true,
      "site": "00b589c8",
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
            "register:40b0:8"
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
      "unmatched:00b588f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b588f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b588fc",
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
      "00b58990",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b58994",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b58998",
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
- 00b589c8 ["INT_ADD", "register:40f0:8", ["const:b589c8:8", "const:4:8"]]
- 00b589c8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b58a64 ["INT_ADD", "register:40f0:8", ["const:b58a64:8", "const:4:8"]]
+ 00b58a64 ["CALL", null, ["callee:00c580d0:8"]]
- 00b588f4 ["COPY", "tmp:0:8", ["register:40d8:8"]]
- 00b588f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00b588f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b588f8 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b588f8 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b588f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b588f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-10bc41a7c51e742d4fd7663af5dba7ac"></a>

### [`00b58a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58a08.md) → [`00b58aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58aa4.md) Java_com_google_firebase_app_internal_cpp_Log_nativeLog

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0c0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b190.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b58a28",
      "incomplete_value": true,
      "site": "00b58a44",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58b30",
      "incomplete_value": true,
      "site": "00b58b34",
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
            "const:39:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b58a94",
      "incomplete_value": true,
      "site": "00b58a98",
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
            "const:95:8"
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
      "definition_site": "00b58ab4",
      "incomplete_value": true,
      "site": "00b58ab8",
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
      "unmatched:00b58a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58a70",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58a74",
      "DATA",
      [
        "storage",
        "002e19d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b58ab4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b58b0c",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b58b10",
      "DATA",
      [
        "storage",
        "002e1a18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b58a44 ["INT_ADD", "register:40f0:8", ["const:b58a44:8", "const:4:8"]]
- 00b58a44 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b58ae0 ["INT_ADD", "register:40f0:8", ["const:b58ae0:8", "const:4:8"]]
+ 00b58ae0 ["CALL", null, ["callee:00c5aff0:8"]]
- 00b58a98 ["INT_ADD", "register:40f0:8", ["const:b58a98:8", "const:4:8"]]
- 00b58a98 ["CALL", null, ["callee:00c5b190:8"]]
+ 00b58b34 ["INT_ADD", "register:40f0:8", ["const:b58b34:8", "const:4:8"]]
+ 00b58b34 ["CALL", null, ["callee:00c5b190:8"]]
- 00b58ab8 ["INT_ADD", "register:40f0:8", ["const:b58ab8:8", "const:4:8"]]
- 00b58ab8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b58b54 ["INT_ADD", "register:40f0:8", ["const:b58b54:8", "const:4:8"]]
+ 00b58b54 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ac5f477cd7c2f1a1252f6d41c7e6c0c4"></a>

### [`00b58af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58af0.md) → [`00b58b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58b8c.md) _ZN8firebase8internal16JObjectReferenceC1EP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b190.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b260.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58bac",
      "incomplete_value": true,
      "site": "00b58bc4",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00b58b40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58bf0"
      ]
    ]
  ],
  "added": [
    [
      "00b58bdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58bf0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b58b28 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b58b28 ["INT_ADD", "register:40f0:8", ["const:b58b28:8", "const:4:8"]]
- 00b58b28 ["CALLIND", null, ["register:0:8"]]
+ 00b58bc4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b58bc4 ["INT_ADD", "register:40f0:8", ["const:b58bc4:8", "const:4:8"]]
+ 00b58bc4 ["CALLIND", null, ["register:0:8"]]
- 00b58b10 ["COPY", "register:4000:8", ["register:4040:8"]]
- 00b58b3c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 00b58b3c ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 00b58b3c ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 00b58b3c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-64bf8850f70070a03361f820d8c13e93"></a>

### [`00b58b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58b58.md) → [`00b58bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58bf4.md) _ZN8firebase8internal16JObjectReference9GetJavaVMEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58b5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58b60",
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
      "00b58bf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b58bfc",
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
- 00b58b58 ["INT_SUB", "register:8:8", ["register:8:8", "const:30:8"]]
- 00b58b5c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b58b5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00b58b60 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b58b60 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b58b60 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b58b60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6ecd14d27753eb44387ef4b54f268af3"></a>

### [`00b58bb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58bb0.md) → [`00b58c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58c4c.md) _ZN8firebase8internal16JObjectReferenceC2EP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00b58bf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58bf0 ["INT_ADD", "register:40f0:8", ["const:b58bf0:8", "const:4:8"]]
- 00b58bf0 ["CALLIND", null, ["register:0:8"]]
+ 00b58c8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b58c8c ["INT_ADD", "register:40f0:8", ["const:b58c8c:8", "const:4:8"]]
+ 00b58c8c ["CALLIND", null, ["register:0:8"]]
- 00b58c10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58c10 ["INT_ADD", "register:40f0:8", ["const:b58c10:8", "const:4:8"]]
- 00b58c10 ["CALLIND", null, ["register:0:8"]]
+ 00b58cac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b58cac ["INT_ADD", "register:40f0:8", ["const:b58cac:8", "const:4:8"]]
+ 00b58cac ["CALLIND", null, ["register:0:8"]]
- 00b58c24 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b58c24 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b58cc0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b58cc0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-2c34c5ec71fd2360a8033aa5fd6bebeb"></a>

### [`00b58c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58c40.md) → [`00b58cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58cdc.md) _ZN8firebase8internal16JObjectReference10InitializeEP7_JavaVMP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58c68",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b58d04",
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
- 00b58c64 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a8:8"]]
- 00b58c64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b58c68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58c68 ["INT_ADD", "register:40f0:8", ["const:b58c68:8", "const:4:8"]]
- 00b58c68 ["CALLIND", null, ["register:0:8"]]
+ 00b58d00 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a8:8"]]
+ 00b58d00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b2de13e0e23a3b24d14d1a0fb3d4dcfe"></a>

### [`00b58c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58c7c.md) → [`00b58d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58d18.md) _ZN8firebase8internal16JObjectReferenceC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1a0.md) · 呼出先 1件 [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 1件 [`00c5b270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b270.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58c80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58c84",
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
      "00b58d18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b58d1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b58d20",
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
- 00b58c7c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b58c7c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b58c7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b58c80 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b58c80 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b58c80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b58c80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b58c84 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b58c84 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b58c84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b58c84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a5950ed18f7c75426f7545fe6ade961e"></a>

### [`00b58d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58d08.md) → [`00b58da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58da4.md) _ZN8firebase8internal16JObjectReferenceD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00c5b1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1b0.md) [`00c5b1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1c0.md) · 呼出先 1件 [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 2件 [`00c5b280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b280.md) [`00c5b290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b290.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58d38",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b58dd4",
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
- 00b58d1c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b58d1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b58db8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b58db8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b58d20 ["INT_ADD", "register:40f0:8", ["const:b58d20:8", "const:4:8"]]
- 00b58d20 ["CALL", null, ["callee:00c5b490:8"]]
+ 00b58dbc ["INT_ADD", "register:40f0:8", ["const:b58dbc:8", "const:4:8"]]
+ 00b58dbc ["CALL", null, ["callee:00c5b490:8"]]
- 00b58d24 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b58d24 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b58dc0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b58dc0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-4361535d08693ac04b7721066bff99ab"></a>

### [`00b58d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58d4c.md) → [`00b58de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58de8.md) _ZN8firebase8internal16JObjectReference3SetEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b180.md) · 呼出先 1件 [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 1件 [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58d4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58d54",
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
      "00b58de8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b58dec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b58df0",
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
- 00b58d4c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b58d4c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b58d4c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b58d50 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b58d50 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b58d50 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b58d50 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b58d54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b58d54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b58d54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b58d54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b3ac58d886ee852e26a2567584a7d603"></a>

### [`00b58dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58dd0.md) → [`00b58e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58e6c.md) _ZN8firebase8internal16JObjectReferenceaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.68% / 新版 88.68%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b58e88",
      "incomplete_value": true,
      "site": "00b58e9c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b58dfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58ecc"
      ]
    ],
    [
      "unmatched:00b58e84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58f3c"
      ]
    ],
    [
      "unmatched:00b58e28",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b58e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58ecc"
      ]
    ],
    [
      "00b58f20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58f3c"
      ]
    ],
    [
      "00b58ec4",
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
- 00b58dfc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b58dfc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b58e04 ["INT_ADD", "register:40f0:8", ["const:b58e04:8", "const:4:8"]]
- 00b58e04 ["CALL", null, ["callee:00c5b490:8"]]
+ 00b58ea0 ["INT_ADD", "register:40f0:8", ["const:b58ea0:8", "const:4:8"]]
+ 00b58ea0 ["CALL", null, ["callee:00c5b490:8"]]
- 00b58e24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b0:8"]]
- 00b58e24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bce047cefbd6d690c41d6795927896e7"></a>

### [`00b58ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58ea4.md) → [`00b58f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58f40.md) _ZN8firebase8internal16JObjectReference3SetEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.55% / 新版 79.55%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58ecc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58f38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58fec"
      ]
    ],
    [
      "unmatched:00b58ee8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b58f68",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b58fd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b58fec"
      ]
    ],
    [
      "00b58f84",
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
- 00b58ebc ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 00b58ebc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b58ec0 ["COPY", "register:40a0:8", ["register:4010:8"]]
- 00b58ec4 ["COPY", "register:40a8:8", ["register:4008:8"]]
~~~


<a id="compare-a2616efb6e60d2f63d61f473b3f75d95"></a>

### [`00b58f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58f54.md) → [`00b58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58ff0.md) _ZNK8firebase8internal16JObjectReference11GetLocalRefEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1d0.md) · 呼出先 1件 [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 1件 [`00c5b2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2a0.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.21% / 新版 84.21%

~~~diff
- 00b58f6c ["INT_ADD", "register:40f0:8", ["const:b58f6c:8", "const:4:8"]]
- 00b58f6c ["CALL", null, ["callee:00c5b490:8"]]
+ 00b59008 ["INT_ADD", "register:40f0:8", ["const:b59008:8", "const:4:8"]]
+ 00b59008 ["CALL", null, ["callee:00c5b490:8"]]
- 00b58f84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c8:8"]]
- 00b58f84 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b58f88 ["COPY", "tmp:0:8", ["register:8:8"]]
- 00b58f88 ["INT_ADD", "register:8:8", ["register:8:8", "const:20:8"]]
- 00b58f88 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-38ecd69109fb2dac3f1dc854b15fc395"></a>

### [`00b58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b58/00b58fa0.md) → [`00b5903c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b5903c.md) _ZN8firebase8internal16JObjectReference18FromLocalReferenceEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b170.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b240.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.50% / 新版 77.50%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b58fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b58fa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59024",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b590d8"
      ]
    ]
  ],
  "added": [
    [
      "00b59040",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b59044",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b590c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b590d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b58fa0 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 00b58fa4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b58fa4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b58fa4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b58fa4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b58fa8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b58fa8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b58fa8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b58fa8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-cbb0ce79652de6e27dbdbf6d3b70fd54"></a>

### [`00b59040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59040.md) → [`00b590dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b590dc.md) _ZN8firebase10app_common6AddAppEPNS_3AppEPNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS_10InitResultENS3_4l

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b750.md) · 呼出先 20件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5b820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b820.md) · 呼出先 20件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.07% / 新版 85.07%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 11件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b59180",
      "incomplete_value": false,
      "site": "00b59180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b590e4",
      "incomplete_value": false,
      "site": "00b590e4",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5911c",
      "incomplete_value": true,
      "site": "00b59120",
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
            "const:1:8"
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
      "definition_site": "00b5912c",
      "incomplete_value": false,
      "site": "00b59130",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59090",
      "incomplete_value": false,
      "site": "00b59094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:109:8"
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
      "unmatched:00b59058",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59074",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59090",
      "PARAM",
      [
        "storage",
        "002ad109",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b590f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b59110",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b5912c",
      "PARAM",
      [
        "storage",
        "002ad0ad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59084 ["INT_ADD", "register:40f0:8", ["const:b59084:8", "const:4:8"]]
- 00b59084 ["CALL", null, ["callee:00c5b7c0:8"]]
+ 00b59120 ["INT_ADD", "register:40f0:8", ["const:b59120:8", "const:4:8"]]
+ 00b59120 ["CALL", null, ["callee:00c5b7c0:8"]]
- 00b59094 ["INT_ADD", "register:40f0:8", ["const:b59094:8", "const:4:8"]]
- 00b59094 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b59130 ["INT_ADD", "register:40f0:8", ["const:b59130:8", "const:4:8"]]
+ 00b59130 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b590b8 ["INT_ADD", "register:40f0:8", ["const:b590b8:8", "const:4:8"]]
- 00b590b8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b59154 ["INT_ADD", "register:40f0:8", ["const:b59154:8", "const:4:8"]]
+ 00b59154 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-e08f524b2710ba47549ed8d66aa07945"></a>

### [`00b593b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b593b4.md) → [`00b59450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59450.md) _ZN8firebase10app_common13FindAppByNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6f0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5b7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7c0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 87.18% / 新版 87.18%

優先判定に残った影響 `store_condition` 7件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59484",
      "incomplete_value": true,
      "site": "00b59488",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b593e8",
      "incomplete_value": true,
      "site": "00b593ec",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b593f8"
      ],
      [
        "FALL_THROUGH",
        "00b59494"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59494",
      "incomplete_value": true,
      "site": "00b5949c",
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
      "definition_site": "00b593f8",
      "incomplete_value": true,
      "site": "00b59400",
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
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b593f8"
      ],
      [
        "FALL_THROUGH",
        "00b59494"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59494",
      "incomplete_value": true,
      "site": "00b5949c",
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
      "definition_site": "00b593f8",
      "incomplete_value": true,
      "site": "00b59400",
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
      "00b59480",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b593f4",
      "READ",
      [
        "storage",
        "01125fd8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b593f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b59548"
      ]
    ]
  ],
  "added": [
    [
      "00b59480",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59490",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59494",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b59548"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b593ec ["INT_ADD", "register:40f0:8", ["const:b593ec:8", "const:4:8"]]
- 00b593ec ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b59488 ["INT_ADD", "register:40f0:8", ["const:b59488:8", "const:4:8"]]
+ 00b59488 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b59488 ["INT_ADD", "register:40f0:8", ["const:b59488:8", "const:4:8"]]
- 00b59488 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b59524 ["INT_ADD", "register:40f0:8", ["const:b59524:8", "const:4:8"]]
+ 00b59524 ["CALL", null, ["callee:00c57f80:8"]]
- 00b593e0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b5947c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-493f883636267d83e2c52153a7deadb3"></a>

### [`00b594ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b594ec.md) → [`00b59588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59588.md) _ZN8firebase10app_common16IsDefaultAppNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b730.md) · 呼出先 1件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 1件 [`00c5b800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b800.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59598",
      "incomplete_value": false,
      "site": "00b5959c",
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
            "const:972:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b594fc",
      "incomplete_value": false,
      "site": "00b59500",
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
            "const:932:8"
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
      "00b59598",
      "PARAM",
      [
        "storage",
        "002b5932",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b59598",
      "PARAM",
      [
        "storage",
        "002b5972",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59500 ["INT_ADD", "register:40f0:8", ["const:b59500:8", "const:4:8"]]
- 00b59500 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b5959c ["INT_ADD", "register:40f0:8", ["const:b5959c:8", "const:4:8"]]
+ 00b5959c ["CALL", null, ["callee:00c5b920:8"]]
- 00b594fc ["COPY", "tmp:0:8", ["const:932:8"]]
- 00b594fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b594fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b594fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b59598 ["COPY", "tmp:0:8", ["const:972:8"]]
+ 00b59598 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b59598 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b59598 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dd18fcf0f4db9c63e4853f77851f6b4c"></a>

### [`00b59520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59520.md) → [`00b595bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b595bc.md) _ZN8firebase10app_common9GetAnyAppEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.15% / 新版 96.15%

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b595d0",
      "incomplete_value": true,
      "site": "00b595d0",
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
      "definition_site": "00b59534",
      "incomplete_value": true,
      "site": "00b59534",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b595ec",
      "incomplete_value": true,
      "site": "00b595ec",
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
      "definition_site": "00b59550",
      "incomplete_value": true,
      "site": "00b59550",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b595dc",
      "incomplete_value": true,
      "site": "00b595e0",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59540",
      "incomplete_value": true,
      "site": "00b59544",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "00b595cc",
      "READ",
      [
        "storage",
        "01125fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b595d8",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b595e8",
      "READ",
      [
        "storage",
        "01125fd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b595cc",
      "READ",
      [
        "storage",
        "011260d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b595d8",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b595e8",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59534 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b59534 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b595d0 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b595d0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b59544 ["INT_ADD", "register:40f0:8", ["const:b59544:8", "const:4:8"]]
- 00b59544 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b595e0 ["INT_ADD", "register:40f0:8", ["const:b595e0:8", "const:4:8"]]
+ 00b595e0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b59550 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b59550 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b595ec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b595ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-7d1777dc3b43b231f2a337567c98a43f"></a>

### [`00b59588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59588.md) → [`00b59624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59624.md) _ZN8firebase10app_common10GetAllAppsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6d0.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7a0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.91% / 新版 70.91%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59770",
      "incomplete_value": true,
      "site": "00b59774",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:3:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b595ec"
      ],
      [
        "FALL_THROUGH",
        "00b59688"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59684",
      "incomplete_value": true,
      "site": "00b5968c",
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
                "register:4048:8"
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
      "definition_site": "00b595e8",
      "incomplete_value": true,
      "site": "00b595f0",
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
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b595ec"
      ],
      [
        "FALL_THROUGH",
        "00b59688"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59684",
      "incomplete_value": true,
      "site": "00b59690",
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
                "register:4048:8"
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
      "definition_site": "00b595e8",
      "incomplete_value": true,
      "site": "00b595f4",
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
      "00b59644",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b595b4",
      "READ",
      [
        "storage",
        "01125fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b595c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aad0"
      ]
    ]
  ],
  "added": [
    [
      "00b59644",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59650",
      "READ",
      [
        "storage",
        "011260d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59660",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aad0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5968c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5968c ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 00b59690 ["INT_SUB", "register:40b0:8", ["register:4048:8", "register:40a8:8"]]
- 00b596d8 ["INT_ADD", "register:40f0:8", ["const:b596d8:8", "const:4:8"]]
- 00b596d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b59774 ["INT_ADD", "register:40f0:8", ["const:b59774:8", "const:4:8"]]
+ 00b59774 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-dfbed707b643123a0ff2c4e754a414b5"></a>

### [`00b59740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59740.md) → [`00b597dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b597dc.md) _ZN8firebase10app_common9RemoveAppEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b760.md) · 呼出先 16件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5b830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b830.md) · 呼出先 16件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.30% / 新版 80.30%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b59930",
      "incomplete_value": true,
      "site": "00b59930",
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
      "definition_site": "00b59894",
      "incomplete_value": true,
      "site": "00b59894",
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
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59814",
      "incomplete_value": true,
      "site": "00b59818",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59778",
      "incomplete_value": true,
      "site": "00b5977c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
    "new": {
      "definition_site": "00b59840",
      "incomplete_value": true,
      "site": "00b5984c",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00b59758",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5976c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b59810",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b597f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b59808",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b59810",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5977c ["INT_ADD", "register:40f0:8", ["const:b5977c:8", "const:4:8"]]
- 00b5977c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b59818 ["INT_ADD", "register:40f0:8", ["const:b59818:8", "const:4:8"]]
+ 00b59818 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b597b0 ["INT_ADD", "register:40f0:8", ["const:b597b0:8", "const:4:8"]]
- 00b597b0 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b5984c ["INT_ADD", "register:40f0:8", ["const:b5984c:8", "const:4:8"]]
+ 00b5984c ["CALL", null, ["callee:00c580b0:8"]]
- 00b597ec ["INT_ADD", "register:40f0:8", ["const:b597ec:8", "const:4:8"]]
- 00b597ec ["CALL", null, ["callee:00c57f60:8"]]
+ 00b59888 ["INT_ADD", "register:40f0:8", ["const:b59888:8", "const:4:8"]]
+ 00b59888 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-12e8c91d502f6a0544342fafde2a599c"></a>

### [`00b59950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59950.md) → [`00b599ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b599ec.md) _ZN8firebase10app_common14DestroyAllAppsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.29% / 新版 78.29%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b59a28",
      "incomplete_value": true,
      "site": "00b59a28",
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
      "definition_site": "00b5998c",
      "incomplete_value": true,
      "site": "00b5998c",
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
      "definition_site": "00b59a18",
      "incomplete_value": true,
      "site": "00b59a1c",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5997c",
      "incomplete_value": true,
      "site": "00b59980",
      "value": [
        "live",
        "register:4098:8"
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
      "00b59a0c",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59a14",
      "READ",
      [
        "storage",
        "01125fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59a24",
      "READ",
      [
        "storage",
        "01125fd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b59a0c",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59a14",
      "READ",
      [
        "storage",
        "011260d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b59a24",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59980 ["INT_ADD", "register:40f0:8", ["const:b59980:8", "const:4:8"]]
- 00b59980 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b59a1c ["INT_ADD", "register:40f0:8", ["const:b59a1c:8", "const:4:8"]]
+ 00b59a1c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5998c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b5998c ["CBRANCH", null, ["local:b32:8", "tmp:0:1"]]
+ 00b59a28 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b59a28 ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
- 00b59a1c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4050:8"]]
- 00b59a1c ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4048:8"]]
- 00b59a1c ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4048:8"]]
- 00b59a1c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-8cc7e4468bb0be95747be03ebb6961a9"></a>

### [`00b59c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59c0c.md) → [`00b59ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59ca8.md) _ZN8firebase10app_common15RegisterLibraryEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b720.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b700.md) [`00c5b710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b710.md)
- 新版 呼出元 1件 [`00c5b7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7f0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7d0.md) [`00c5b7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7e0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b59c44"
      ],
      [
        "FALL_THROUGH",
        "00b59ce0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59cf4",
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
      "definition_site": "00b59c44",
      "incomplete_value": true,
      "site": "00b59c58",
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
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b59c44"
      ],
      [
        "FALL_THROUGH",
        "00b59ce0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59cf4",
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
      "definition_site": "00b59c44",
      "incomplete_value": true,
      "site": "00b59c58",
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
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b59c44"
      ],
      [
        "FALL_THROUGH",
        "00b59ce0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59d08",
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
      "definition_site": "00b59c44",
      "incomplete_value": true,
      "site": "00b59c6c",
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
      "unmatched:00b59c0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59c10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59c14",
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
      "00b59ca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b59cac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b59cb0",
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
- 00b59c0c ["COPY", "tmp:0:8", ["register:40b8:8"]]
- 00b59c0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b59c0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b59c10 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b59c10 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b59c10 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b59c10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b59c14 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b59c14 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b59c14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b59c14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4a715de977edd6873f57c3459808e023"></a>

### [`00b59ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b59/00b59ca4.md) → [`00b59d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59d40.md) _ZN8firebase10app_common15LibraryRegistry15RegisterLibraryEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b700.md) · 呼出先 12件 [`0046d5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d5a8.md) [`00493dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493dc8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7d0.md) · 呼出先 12件 [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.45% / 新版 91.45%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b59dbc",
      "incomplete_value": true,
      "site": "00b59dc4",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b59db8",
      "incomplete_value": true,
      "site": "00b59dc4",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59edc",
      "incomplete_value": true,
      "site": "00b59ee0",
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
    "old": {
      "definition_site": "00b59e40",
      "incomplete_value": true,
      "site": "00b59e44",
      "value": [
        "INT_AND",
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
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
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
      "unmatched:00b59cdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b59ce4",
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
      "00b59d78",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b59d7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b59d80",
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
- 00b59dc4 ["INT_ADD", "register:40f0:8", ["const:b59dc4:8", "const:4:8"]]
- 00b59dc4 ["CALL", null, ["callee:00493e08:8"]]
+ 00b59e60 ["INT_ADD", "register:40f0:8", ["const:b59e60:8", "const:4:8"]]
+ 00b59e60 ["CALL", null, ["callee:00493e08:8"]]
- 00b59e44 ["INT_ADD", "register:40f0:8", ["const:b59e44:8", "const:4:8"]]
- 00b59e44 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b59ee0 ["INT_ADD", "register:40f0:8", ["const:b59ee0:8", "const:4:8"]]
+ 00b59ee0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b59e64 ["INT_ADD", "register:40f0:8", ["const:b59e64:8", "const:4:8"]]
- 00b59e64 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b59f00 ["INT_ADD", "register:40f0:8", ["const:b59f00:8", "const:4:8"]]
+ 00b59f00 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-d2c11cb2c1f76eea13e7de204035a7f2"></a>

### [`00b5a0d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a0d8.md) → [`00b5a174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a174.md) _ZN8firebase10app_common15LibraryRegistry15UpdateUserAgentEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b710.md) · 呼出先 5件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5b7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7f0.md)
- 新版 呼出元 1件 [`00c5b7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7e0.md) · 呼出先 5件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5a130",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a320"
      ]
    ],
    [
      "unmatched:00b5a14c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a1f8"
      ]
    ],
    [
      "unmatched:00b5a158",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a320"
      ]
    ]
  ],
  "added": [
    [
      "00b5a1cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a320"
      ]
    ],
    [
      "00b5a1e8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a1f8"
      ]
    ],
    [
      "00b5a1f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5a320"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a12c ["INT_LESSEQUAL", "register:105:1", ["register:40c0:8", "register:40d0:8"]]
- 00b5a12c ["INT_SBORROW", "register:106:1", ["register:40d0:8", "register:40c0:8"]]
- 00b5a12c ["INT_SUB", "tmp:0:8", ["register:40d0:8", "register:40c0:8"]]
- 00b5a12c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b5a130 ["CBRANCH", null, ["local:b24:8", "register:101:1"]]
- 00b5a134 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b5a134 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b5a134 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b5a134 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-0941b3feb714c53fba7dadbf65674e5a"></a>

### [`00b5a338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a338.md) → [`00b5a3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a3d4.md) _ZN8firebase10app_common30RegisterLibrariesFromUserAgentEPKc

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_store_alignment

命令の説明率　旧版 84.88% / 新版 84.88%

優先判定に残った影響 `unresolved_store_alignment` 10件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a41c",
      "incomplete_value": true,
      "site": "00b5a41c",
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
      "definition_site": "00b5a380",
      "incomplete_value": true,
      "site": "00b5a380",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a408",
      "incomplete_value": true,
      "site": "00b5a40c",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a36c",
      "incomplete_value": true,
      "site": "00b5a370",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b5a380"
      ],
      [
        "FALL_THROUGH",
        "00b5a41c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5a41c",
      "incomplete_value": true,
      "site": "00b5a430",
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
      "definition_site": "00b5a380",
      "incomplete_value": true,
      "site": "00b5a394",
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
      "unmatched:00b5a33c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5a340",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5a344",
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
      "00b5a3d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b5a3dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b5a3e0",
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
- 00b5a370 ["INT_ADD", "register:40f0:8", ["const:b5a370:8", "const:4:8"]]
- 00b5a370 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5a40c ["INT_ADD", "register:40f0:8", ["const:b5a40c:8", "const:4:8"]]
+ 00b5a40c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5a380 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b5a380 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b5a41c ["INT_NOTEQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b5a41c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b5a43c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b5a43c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b5a4d8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b5a4d8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-3d78e9daad0112f793a3aa2b74ae98a0"></a>

### [`00b5a490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a490.md) → [`00b5a52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a52c.md) _ZN8firebase10app_common16RegisterSdkUsageEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b740.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7b0.md)
- 新版 呼出元 1件 [`00c5b810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b810.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b880.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a55c",
      "incomplete_value": true,
      "site": "00b5a55c",
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
      "definition_site": "00b5a4c0",
      "incomplete_value": true,
      "site": "00b5a4c0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a548",
      "incomplete_value": true,
      "site": "00b5a54c",
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
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a4ac",
      "incomplete_value": true,
      "site": "00b5a4b0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "definition_site": "00b5a4d0",
      "incomplete_value": false,
      "site": "00b5a4d4",
      "value": [
        "leaf",
        "const:38:8"
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
      "unmatched:00b5a4a4",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a554",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ],
    [
      "00b5a558",
      "READ",
      [
        "storage",
        "01125fc8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a540",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a554",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5a558",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a4b0 ["INT_ADD", "register:40f0:8", ["const:b5a4b0:8", "const:4:8"]]
- 00b5a4b0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5a54c ["INT_ADD", "register:40f0:8", ["const:b5a54c:8", "const:4:8"]]
+ 00b5a54c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5a4c0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b5a4c0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b5a55c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b5a55c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b5a4d4 ["INT_ADD", "register:40f0:8", ["const:b5a4d4:8", "const:4:8"]]
- 00b5a4d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5a570 ["INT_ADD", "register:40f0:8", ["const:b5a570:8", "const:4:8"]]
+ 00b5a570 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-89e198c0b311de769c038f5cfc394826"></a>

### [`00b5a5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a5a0.md) → [`00b5a63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a63c.md) _ZN8firebase10app_common12GetUserAgentEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6e0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7b0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.12% / 新版 78.12%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a650",
      "incomplete_value": true,
      "site": "00b5a654",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a5b4",
      "incomplete_value": true,
      "site": "00b5a5b8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b5a5c8"
      ],
      [
        "FALL_THROUGH",
        "00b5a664"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5a664",
      "incomplete_value": true,
      "site": "00b5a674",
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
      "definition_site": "00b5a5c8",
      "incomplete_value": true,
      "site": "00b5a5d8",
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5a5c8"
      ],
      [
        "FALL_THROUGH",
        "00b5a664"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5a664",
      "incomplete_value": true,
      "site": "00b5a674",
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
      "definition_site": "00b5a5c8",
      "incomplete_value": true,
      "site": "00b5a5d8",
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
      "00b5a64c",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5a5c0",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b5a5c4",
      "READ",
      [
        "storage",
        "01125fc8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a64c",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a65c",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5a660",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a5b8 ["INT_ADD", "register:40f0:8", ["const:b5a5b8:8", "const:4:8"]]
- 00b5a5b8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5a654 ["INT_ADD", "register:40f0:8", ["const:b5a654:8", "const:4:8"]]
+ 00b5a654 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5a5ac ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b5a648 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b5a5b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fc0:8"]]
- 00b5a5b0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5a64c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
+ 00b5a64c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4884f33b3d419b32c61e5a0fd5e9dbc6"></a>

### [`00b5a620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a620.md) → [`00b5a6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a6bc.md) _ZN8firebase10app_common17GetLibraryVersionEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`00493dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493dc8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.70% / 新版 96.70%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a708",
      "incomplete_value": true,
      "site": "00b5a708",
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
      "definition_site": "00b5a66c",
      "incomplete_value": true,
      "site": "00b5a66c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a6f4",
      "incomplete_value": true,
      "site": "00b5a6f8",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a658",
      "incomplete_value": true,
      "site": "00b5a65c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "definition_site": "00b5a670",
      "incomplete_value": false,
      "site": "00b5a674",
      "value": [
        "leaf",
        "const:38:8"
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
      "00b5a6f0",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a700",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ],
    [
      "00b5a704",
      "READ",
      [
        "storage",
        "01125fc8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a6f0",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a700",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5a704",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a65c ["INT_ADD", "register:40f0:8", ["const:b5a65c:8", "const:4:8"]]
- 00b5a65c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5a6f8 ["INT_ADD", "register:40f0:8", ["const:b5a6f8:8", "const:4:8"]]
+ 00b5a6f8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5a66c ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00b5a66c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b5a708 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00b5a708 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b5a674 ["INT_ADD", "register:40f0:8", ["const:b5a674:8", "const:4:8"]]
- 00b5a674 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5a710 ["INT_ADD", "register:40f0:8", ["const:b5a710:8", "const:4:8"]]
+ 00b5a710 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f8f2e0f98fe776f7de3296a587bd9023"></a>

### [`00b5a78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a78c.md) → [`00b5a828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a828.md) _ZN8firebase10app_common25GetOuterMostSdkAndVersionEPNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`00493dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493dc8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.89% / 新版 89.89%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 4件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 8件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5a898",
      "incomplete_value": true,
      "site": "00b5a89c",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a7fc",
      "incomplete_value": true,
      "site": "00b5a800",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a8b0",
      "incomplete_value": true,
      "site": "00b5a8b0",
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
      "definition_site": "00b5a814",
      "incomplete_value": true,
      "site": "00b5a814",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a898",
      "incomplete_value": true,
      "site": "00b5a8a0",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a7fc",
      "incomplete_value": true,
      "site": "00b5a804",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "unmatched:00b5a7a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5a898",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a8a8",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5a840",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5a898",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a8a8",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a804 ["INT_ADD", "register:40f0:8", ["const:b5a804:8", "const:4:8"]]
- 00b5a804 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5a8a0 ["INT_ADD", "register:40f0:8", ["const:b5a8a0:8", "const:4:8"]]
+ 00b5a8a0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5a814 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00b5a814 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00b5a8b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00b5a8b0 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00b5a81c ["INT_ADD", "register:40f0:8", ["const:b5a81c:8", "const:4:8"]]
- 00b5a81c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5a8b8 ["INT_ADD", "register:40f0:8", ["const:b5a8b8:8", "const:4:8"]]
+ 00b5a8b8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d03788e01287138d20b97f25eb975135"></a>

### [`00b5aa7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5aa7c.md) → [`00b5ab18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ab18.md) _ZN8firebase10app_common19FindAppLoggerByNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5ab5c",
      "incomplete_value": true,
      "site": "00b5ab5c",
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
      "definition_site": "00b5aac0",
      "incomplete_value": true,
      "site": "00b5aac0",
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
      "definition_site": "00b5ab4c",
      "incomplete_value": true,
      "site": "00b5ab50",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5aab0",
      "incomplete_value": true,
      "site": "00b5aab4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fc0:8"
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
      "definition_site": "00b5ab20",
      "incomplete_value": true,
      "site": "00b5ab2c",
      "value": [
        "live",
        "register:40b8:8"
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
      "00b5ab48",
      "READ",
      [
        "storage",
        "01125fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ab58",
      "READ",
      [
        "storage",
        "01125fd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5abe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b5ab54"
      ]
    ]
  ],
  "added": [
    [
      "00b5ab48",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ab58",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5abe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5abf0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5aab4 ["INT_ADD", "register:40f0:8", ["const:b5aab4:8", "const:4:8"]]
- 00b5aab4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5ab50 ["INT_ADD", "register:40f0:8", ["const:b5ab50:8", "const:4:8"]]
+ 00b5ab50 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5ab2c ["INT_ADD", "register:40f0:8", ["const:b5ab2c:8", "const:4:8"]]
- 00b5ab2c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b5abc8 ["INT_ADD", "register:40f0:8", ["const:b5abc8:8", "const:4:8"]]
+ 00b5abc8 ["CALL", null, ["callee:00c580d0:8"]]
- 00b5ab50 ["INT_ADD", "register:40f0:8", ["const:b5ab50:8", "const:4:8"]]
- 00b5ab50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5abec ["INT_ADD", "register:40f0:8", ["const:b5abec:8", "const:4:8"]]
+ 00b5abec ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4e4bbd10f64eb5514ad1632e7a4dcf52"></a>

### [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) → [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) FUN_00b5ac50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 9件 [`00b5a0d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5a0d8.md) [`00b5d638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d638.md) [`00b5d6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d6fc.md) [`00b71db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71db4.md) [`00b72f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72f5c.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 9件 [`00b5a174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a174.md) [`00b5d6d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d6d4.md) [`00b5d798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d798.md) [`00b71e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71e50.md) [`00b72ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72ff8.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5abe4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b5abe4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b5abe4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b5abe4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b5ac80 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b5ac80 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b5ac80 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b5ac80 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00b5abf0 ["INT_ADD", "register:40f0:8", ["const:b5abf0:8", "const:4:8"]]
- 00b5abf0 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b5ac8c ["INT_ADD", "register:40f0:8", ["const:b5ac8c:8", "const:4:8"]]
+ 00b5ac8c ["CALL", null, ["callee:00c580b0:8"]]
- 00b5abfc ["BRANCH", null, ["local:b4:8"]]
+ 00b5ac98 ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-7db649be96c36b4e25332a4e81a388f5"></a>

### [`00b5b1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b1bc.md) → [`00b5b258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b258.md) _INIT_279

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b5b20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b20c.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b5b2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b2a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5b29c",
      "incomplete_value": false,
      "site": "00b5b29c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b200",
      "incomplete_value": false,
      "site": "00b5b200",
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
            "const:fc0:8"
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
      "definition_site": "00b5b26c",
      "incomplete_value": true,
      "site": "00b5b27c",
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
                "const:7c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b1d0",
      "incomplete_value": true,
      "site": "00b5b1e0",
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
                "const:6f0:8"
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
    "new": {
      "definition_site": "00b5b270",
      "incomplete_value": true,
      "site": "00b5b27c",
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
                "const:828:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b1d4",
      "incomplete_value": true,
      "site": "00b5b1e0",
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
                "const:758:8"
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
      "00b5b26c",
      "READ",
      [
        "storage",
        "00c9b6f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b26c",
      "PARAM",
      [
        "storage",
        "00b5b20c",
        "firebase::Logger::~Logger",
        null
      ]
    ],
    [
      "00b5b270",
      "READ",
      [
        "storage",
        "00c9b758",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5b26c",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b26c",
      "PARAM",
      [
        "storage",
        "00b5b2a8",
        "firebase::Logger::~Logger",
        null
      ]
    ],
    [
      "00b5b270",
      "READ",
      [
        "storage",
        "00c9b828",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5b1e0 ["INT_ADD", "register:40f0:8", ["const:b5b1e0:8", "const:4:8"]]
- 00b5b1e0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b5b27c ["INT_ADD", "register:40f0:8", ["const:b5b27c:8", "const:4:8"]]
+ 00b5b27c ["CALL", null, ["callee:00c57f00:8"]]
- 00b5b200 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fc0:8"]]
- 00b5b200 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00b5b29c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
+ 00b5b29c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00b5b1d0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:6f0:8"]]
- 00b5b1d0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5b26c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:7c0:8"]]
+ 00b5b26c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5b4e3b3e7b843411bc2d4ded85da08af"></a>

### [`00b5b2e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b2e4.md) → [`00b5b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b380.md) _ZNK8firebase10LoggerBase17FilterLogMessageVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5b334",
      "incomplete_value": true,
      "site": "00b5b34c",
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
      "definition_site": "00b5b330",
      "incomplete_value": true,
      "site": "00b5b34c",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00b5b310",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b328",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5b3ec"
      ]
    ],
    [
      "unmatched:00b5b33c",
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
      "00b5b3ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b5b3c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5b3ec"
      ]
    ],
    [
      "00b5b3d8",
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
- 00b5b34c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b34c ["INT_ADD", "register:40f0:8", ["const:b5b34c:8", "const:4:8"]]
- 00b5b34c ["CALLIND", null, ["register:0:8"]]
+ 00b5b3e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b3e8 ["INT_ADD", "register:40f0:8", ["const:b5b3e8:8", "const:4:8"]]
+ 00b5b3e8 ["CALLIND", null, ["register:0:8"]]
- 00b5b310 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:28:8"]]
- 00b5b310 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00b5b320 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b320 ["INT_ADD", "register:40f0:8", ["const:b5b320:8", "const:4:8"]]
- 00b5b320 ["CALLIND", null, ["register:0:8"]]
+ 00b5b3bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b3bc ["INT_ADD", "register:40f0:8", ["const:b5b3bc:8", "const:4:8"]]
+ 00b5b3bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ead82e5d828a32c28ddbb33ad5e4f9c7"></a>

### [`00b5b37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b37c.md) → [`00b5b418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b418.md) _ZNK8firebase10LoggerBase7LogInfoEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 57.69% / 新版 57.69%

優先判定に残った影響 `unresolved_store_alignment` 25件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5b380",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b384",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b388",
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
      "00b5b41c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5b420",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5b424",
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
- 00b5b37c ["INT_SUB", "register:8:8", ["register:8:8", "const:150:8"]]
- 00b5b380 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b5b380 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5b380 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:120:8"]]
- 00b5b380 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5b384 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5b384 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5b384 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:130:8"]]
- 00b5b384 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-84307abaedeb86510822741452b058f8"></a>

### [`00b5b44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b44c.md) → [`00b5b4e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b4e8.md) _ZNK8firebase10LoggerBase10LogWarningEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 20件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5b450",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b454",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b458",
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
      "00b5b4ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5b4f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5b4f4",
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
- 00b5b44c ["INT_SUB", "register:8:8", ["register:8:8", "const:150:8"]]
- 00b5b450 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b5b450 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5b450 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:120:8"]]
- 00b5b450 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5b454 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5b454 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5b454 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:130:8"]]
- 00b5b454 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b7f11f5ecae6df27ccad8cd9ed154615"></a>

### [`00b5b51c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b51c.md) → [`00b5b5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b5b8.md) _ZNK8firebase10LoggerBase8LogErrorEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 46.15% / 新版 46.15%

優先判定に残った影響 `unresolved_store_alignment` 27件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5b520",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b524",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5b528",
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
      "00b5b5bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5b5c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5b5c4",
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
- 00b5b51c ["INT_SUB", "register:8:8", ["register:8:8", "const:150:8"]]
- 00b5b520 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b5b520 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5b520 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:120:8"]]
- 00b5b520 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5b524 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5b524 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5b524 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:130:8"]]
- 00b5b524 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0feb5918b90c3dc02a0e420ac40d351d"></a>

### [`00b5b944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b944.md) → [`00b5b9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b9e0.md) _ZN8firebase8callback10InitializeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7d0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 1件 [`00c5b8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8a0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5ba40",
      "incomplete_value": false,
      "site": "00b5ba40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b9a4",
      "incomplete_value": false,
      "site": "00b5b9a4",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5ba48",
      "incomplete_value": true,
      "site": "00b5ba48",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b9ac",
      "incomplete_value": true,
      "site": "00b5b9ac",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5b9f8",
      "incomplete_value": true,
      "site": "00b5b9fc",
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
                "const:1126000:8"
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
    "old": {
      "definition_site": "00b5b95c",
      "incomplete_value": true,
      "site": "00b5b960",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
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
      "00b5b9f4",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ba04",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5ba38",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5b9f4",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ba04",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5ba38",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5b960 ["INT_ADD", "register:40f0:8", ["const:b5b960:8", "const:4:8"]]
- 00b5b960 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5b9fc ["INT_ADD", "register:40f0:8", ["const:b5b9fc:8", "const:4:8"]]
+ 00b5b9fc ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5b9a4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ff0:8"]]
- 00b5b9a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 00b5ba40 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:f0:8"]]
+ 00b5ba40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
- 00b5b9ac ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:fe8:8"]]
- 00b5b9ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b5ba48 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e8:8"]]
+ 00b5ba48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-65f6177ef970637f8084f7278728a4ef"></a>

### [`00b5bb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bb34.md) → [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) FUN_00b5bbd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00b5b9d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b9d8.md) [`00b5bf0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bf0c.md) [`00b5c038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c038.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 3件 [`00b5ba74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5ba74.md) [`00b5bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bfa8.md) [`00b5c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c0d4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5bc04",
      "incomplete_value": true,
      "site": "00b5bc04",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bb68",
      "incomplete_value": true,
      "site": "00b5bb68",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5bc24",
      "incomplete_value": true,
      "site": "00b5bc24",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bb88",
      "incomplete_value": true,
      "site": "00b5bb88",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5bc38",
      "incomplete_value": false,
      "site": "00b5bc38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bb9c",
      "incomplete_value": false,
      "site": "00b5bb9c",
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
            "const:ff0:8"
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
      "00b5bbe4",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bbf8",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5bc04",
      "WRITE",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5bbe4",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bbf8",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5bc04",
      "WRITE",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bb54 ["INT_ADD", "register:40f0:8", ["const:b5bb54:8", "const:4:8"]]
- 00b5bb54 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bbf0 ["INT_ADD", "register:40f0:8", ["const:b5bbf0:8", "const:4:8"]]
+ 00b5bbf0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5bb68 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:fe8:8"]]
- 00b5bb68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:4"]]
+ 00b5bc04 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e8:8"]]
+ 00b5bc04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:4"]]
- 00b5bb78 ["INT_ADD", "register:40f0:8", ["const:b5bb78:8", "const:4:8"]]
- 00b5bb78 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b5bc14 ["INT_ADD", "register:40f0:8", ["const:b5bc14:8", "const:4:8"]]
+ 00b5bc14 ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-a195db8c91af2b949551435350bc8088"></a>

### [`00b5bbf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bbf4.md) → [`00b5bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bc90.md) _ZN8firebase8callback11AddCallbackEPNS0_8CallbackE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5baf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5baf0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md) [`00c5bb10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb10.md)
- 新版 呼出元 1件 [`00c5bbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbc0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md) [`00c5bbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbe0.md)

変更の種類 call, call_argument_candidate, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 84.78% / 新版 84.78%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5bd04",
      "incomplete_value": true,
      "site": "00b5bd04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bc68",
      "incomplete_value": true,
      "site": "00b5bc68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5bd10",
      "incomplete_value": true,
      "site": "00b5bd10",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bc74",
      "incomplete_value": true,
      "site": "00b5bc74",
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
            "const:fe8:8"
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
    "new": {
      "definition_site": "00b5bcb0",
      "incomplete_value": true,
      "site": "00b5bcb4",
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
                "const:1126000:8"
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
    "old": {
      "definition_site": "00b5bc14",
      "incomplete_value": true,
      "site": "00b5bc18",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
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
      "00b5bca8",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bcb8",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bcc8",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5bca8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bcb8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bcc8",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bc18 ["INT_ADD", "register:40f0:8", ["const:b5bc18:8", "const:4:8"]]
- 00b5bc18 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bcb4 ["INT_ADD", "register:40f0:8", ["const:b5bcb4:8", "const:4:8"]]
+ 00b5bcb4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5bc24 ["INT_ADD", "register:40f0:8", ["const:b5bc24:8", "const:4:8"]]
- 00b5bc24 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bcc0 ["INT_ADD", "register:40f0:8", ["const:b5bcc0:8", "const:4:8"]]
+ 00b5bcc0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5bc68 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:ff0:8"]]
- 00b5bc68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
+ 00b5bd04 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:f0:8"]]
+ 00b5bd04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
~~~


<a id="compare-763ad1049b2571405742dca3f7fb5bbe"></a>

### [`00b5bf0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bf0c.md) → [`00b5bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bfa8.md) _ZN8firebase8callback14RemoveCallbackEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b5bb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bb34.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.33% / 新版 85.33%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c02c",
      "incomplete_value": true,
      "site": "00b5c02c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bf90",
      "incomplete_value": true,
      "site": "00b5bf90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c038",
      "incomplete_value": true,
      "site": "00b5c038",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bf9c",
      "incomplete_value": true,
      "site": "00b5bf9c",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5bfcc",
      "incomplete_value": true,
      "site": "00b5bfd0",
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
                "const:1126000:8"
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
    "old": {
      "definition_site": "00b5bf30",
      "incomplete_value": true,
      "site": "00b5bf34",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
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
      "00b5bfc4",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bfd8",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5bfe4",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5bfc4",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bfd8",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5bfe4",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bf34 ["INT_ADD", "register:40f0:8", ["const:b5bf34:8", "const:4:8"]]
- 00b5bf34 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bfd0 ["INT_ADD", "register:40f0:8", ["const:b5bfd0:8", "const:4:8"]]
+ 00b5bfd0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5bf50 ["INT_ADD", "register:40f0:8", ["const:b5bf50:8", "const:4:8"]]
- 00b5bf50 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bfec ["INT_ADD", "register:40f0:8", ["const:b5bfec:8", "const:4:8"]]
+ 00b5bfec ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5bf90 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:ff0:8"]]
- 00b5bf90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
+ 00b5c02c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:f0:8"]]
+ 00b5c02c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
~~~


<a id="compare-b93898b2325e55aeb9db5a28c627eb75"></a>

### [`00b5c038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c038.md) → [`00b5c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c0d4.md) _ZN8firebase8callback13PollCallbacksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00b5bb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bb34.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58620.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c150",
      "incomplete_value": true,
      "site": "00b5c150",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c0b4",
      "incomplete_value": true,
      "site": "00b5c0b4",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c15c",
      "incomplete_value": true,
      "site": "00b5c15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c0c0",
      "incomplete_value": true,
      "site": "00b5c0c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c178",
      "incomplete_value": false,
      "site": "00b5c178",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c0dc",
      "incomplete_value": false,
      "site": "00b5c0dc",
      "value": [
        "leaf",
        "const:1126000:8"
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
      "00b5c0ec",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5c0fc",
      "READ",
      [
        "storage",
        "01125fe8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5c108",
      "READ",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5c0ec",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5c0fc",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5c108",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c050 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:fe0:8"]]
- 00b5c050 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5c0ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e0:8"]]
+ 00b5c0ec ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5c058 ["INT_ADD", "register:40f0:8", ["const:b5c058:8", "const:4:8"]]
- 00b5c058 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c0f4 ["INT_ADD", "register:40f0:8", ["const:b5c0f4:8", "const:4:8"]]
+ 00b5c0f4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c074 ["INT_ADD", "register:40f0:8", ["const:b5c074:8", "const:4:8"]]
- 00b5c074 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c110 ["INT_ADD", "register:40f0:8", ["const:b5c110:8", "const:4:8"]]
+ 00b5c110 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-d2b48e9223323eef69e661bba59ec10b"></a>

### [`00b5c25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c25c.md) → [`00b5c2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c2f8.md) _ZN8firebase8callback18CallbackDispatcherD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bb40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb40.md) · 呼出先 6件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md)
- 新版 呼出元 1件 [`00c5bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc10.md) · 呼出先 6件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.27% / 新版 86.27%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5c324",
      "incomplete_value": false,
      "site": "00b5c328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:106:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c288",
      "incomplete_value": false,
      "site": "00b5c28c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:162:8"
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
      "definition_site": "00b5c3d8",
      "incomplete_value": true,
      "site": "00b5c3dc",
      "value": [
        "live",
        "register:40a8:8"
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
      "00b5c324",
      "PARAM",
      [
        "storage",
        "002ae162",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b5c388",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c440"
      ]
    ],
    [
      "unmatched:00b5c3ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c42c"
      ]
    ]
  ],
  "added": [
    [
      "00b5c324",
      "PARAM",
      [
        "storage",
        "002ae106",
        null,
        "string"
      ]
    ],
    [
      "00b5c424",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c440"
      ]
    ],
    [
      "00b5c448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c42c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c28c ["INT_ADD", "register:40f0:8", ["const:b5c28c:8", "const:4:8"]]
- 00b5c28c ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00b5c328 ["INT_ADD", "register:40f0:8", ["const:b5c328:8", "const:4:8"]]
+ 00b5c328 ["CALL", null, ["callee:00c5aeb0:8"]]
- 00b5c340 ["INT_ADD", "register:40f0:8", ["const:b5c340:8", "const:4:8"]]
- 00b5c340 ["CALL", null, ["callee:00c57f50:8"]]
+ 00b5c3dc ["INT_ADD", "register:40f0:8", ["const:b5c3dc:8", "const:4:8"]]
+ 00b5c3dc ["CALL", null, ["callee:00c57f50:8"]]
- 00b5c3dc ["INT_ADD", "register:40f0:8", ["const:b5c3dc:8", "const:4:8"]]
- 00b5c3dc ["CALL", null, ["callee:00c57f50:8"]]
+ 00b5c478 ["INT_ADD", "register:40f0:8", ["const:b5c478:8", "const:4:8"]]
+ 00b5c478 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-d9cc09c8e90c69c3969c570210348013"></a>

### [`00b5c3f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c3f4.md) → [`00b5c490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c490.md) _ZNSt6__ndk120__shared_ptr_emplaceIN8firebase8callback13CallbackEntryENS_9allocatorIS3_EEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 67.74% / 新版 67.74%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c3f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c3f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c3fc",
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
      "00b5c490",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c494",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c498",
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
- 00b5c3f4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b5c3f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b5c3f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c3f8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5c3f8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5c3f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c3f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5c3fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5c3fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5c3fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b5c3fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a767992897c246933ab447aefc0e8f83"></a>

### [`00b5c470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c470.md) → [`00b5c50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c50c.md) _ZNSt6__ndk120__shared_ptr_emplaceIN8firebase8callback13CallbackEntryENS_9allocatorIS3_EEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.61% / 新版 60.61%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5c498",
      "incomplete_value": true,
      "site": "00b5c49c",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b5c4bc",
      "incomplete_value": true,
      "site": "00b5c4c4",
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
    "new": {
      "definition_site": "00b5c574",
      "incomplete_value": true,
      "site": "00b5c578",
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
      "unmatched:00b5c470",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c474",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c478",
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
      "00b5c50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c510",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c514",
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
- 00b5c49c ["INT_ADD", "register:40f0:8", ["const:b5c49c:8", "const:4:8"]]
- 00b5c49c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c538 ["INT_ADD", "register:40f0:8", ["const:b5c538:8", "const:4:8"]]
+ 00b5c538 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c4c4 ["INT_ADD", "register:40f0:8", ["const:b5c4c4:8", "const:4:8"]]
- 00b5c4c4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5c560 ["INT_ADD", "register:40f0:8", ["const:b5c560:8", "const:4:8"]]
+ 00b5c560 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b5c4dc ["INT_ADD", "register:40f0:8", ["const:b5c4dc:8", "const:4:8"]]
- 00b5c4dc ["CALL", null, ["callee:00c57f70:8"]]
+ 00b5c578 ["INT_ADD", "register:40f0:8", ["const:b5c578:8", "const:4:8"]]
+ 00b5c578 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-15b1d5815b76fb99cbe62edac8151de3"></a>

### [`00b5c4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c4f4.md) → [`00b5c590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c590.md) _ZNSt6__ndk120__shared_ptr_emplaceIN8firebase8callback13CallbackEntryENS_9allocatorIS3_EEE16__on_zero_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b5bcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5bcac.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00b5bd48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bd48.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c4f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c4fc",
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
      "00b5c590",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c594",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c598",
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
- 00b5c4f4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b5c4f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b5c4f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c4f8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5c4f8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5c4f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c4f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5c4fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5c4fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5c4fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b5c4fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a0ce206bf948330d3393ad1a9868736e"></a>

### [`00b5c564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c564.md) → [`00b5c600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c600.md) _ZN8firebase8callback16BlockingCallbackD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5bb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5c624",
      "incomplete_value": true,
      "site": "00b5c628",
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
      "definition_site": "00b5c588",
      "incomplete_value": true,
      "site": "00b5c58c",
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c578",
      "READ",
      [
        "storage",
        "00c9b780",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b5c584",
      "DATA",
      [
        "storage",
        "00c90368",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5c614",
      "READ",
      [
        "storage",
        "00c9b850",
        null,
        "pointer"
      ]
    ],
    [
      "00b5c620",
      "DATA",
      [
        "storage",
        "00c90438",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c58c ["INT_ADD", "register:40f0:8", ["const:b5c58c:8", "const:4:8"]]
- 00b5c58c ["CALL", null, ["callee:00c5bc50:8"]]
+ 00b5c628 ["INT_ADD", "register:40f0:8", ["const:b5c628:8", "const:4:8"]]
+ 00b5c628 ["CALL", null, ["callee:00c5bc50:8"]]
- 00b5c578 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:780:8"]]
- 00b5c578 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5c57c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-acb2dd38cab8d56b0fa2678a11a9d189"></a>

### [`00b5c5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c5b8.md) → [`00b5c654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c654.md) _ZN8firebase8callback16BlockingCallbackD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 35.00% / 新版 35.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c5b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c5bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c5cc",
      "READ",
      [
        "storage",
        "00c9b780",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5c654",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c658",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5c668",
      "READ",
      [
        "storage",
        "00c9b850",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c5b8 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b5c5b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b5c5b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c5bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5c5bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5c5bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c5bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5c5c0 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b5c5c0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b5c5c0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b5c5c0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-ac4c9cb5f356e75f225aa3ab20da4d99"></a>

### [`00b5c608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c608.md) → [`00b5c6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c6a4.md) _ZN8firebase8callback16BlockingCallback3RunEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-ad4703b990e5031199424b28ca83ac79"></a>

### [`00b5c618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c618.md) → [`00b5c6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c6b4.md) _ZN8firebase8callback13CallbackEntry7ExecuteEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb00.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbd0.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5c6cc",
      "incomplete_value": true,
      "site": "00b5c6d0",
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
                "const:8:8"
              ]
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
    "new": null,
    "old": {
      "definition_site": "00b5c664",
      "incomplete_value": true,
      "site": "00b5c668",
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
    "new": {
      "definition_site": "00b5c74c",
      "incomplete_value": true,
      "site": "00b5c754",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b5c618",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c61c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c620",
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
      "00b5c6b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c6b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c6bc",
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
- 00b5c634 ["INT_ADD", "register:40f0:8", ["const:b5c634:8", "const:4:8"]]
- 00b5c634 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c6d0 ["INT_ADD", "register:40f0:8", ["const:b5c6d0:8", "const:4:8"]]
+ 00b5c6d0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c668 ["INT_ADD", "register:40f0:8", ["const:b5c668:8", "const:4:8"]]
- 00b5c668 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c704 ["INT_ADD", "register:40f0:8", ["const:b5c704:8", "const:4:8"]]
+ 00b5c704 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c6b8 ["INT_ADD", "register:40f0:8", ["const:b5c6b8:8", "const:4:8"]]
- 00b5c6b8 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5c754 ["INT_ADD", "register:40f0:8", ["const:b5c754:8", "const:4:8"]]
+ 00b5c754 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-682756224603efa91cac0f19595d1c4a"></a>

### [`00b5c6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c6e0.md) → [`00b5c77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c77c.md) _INIT_280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.33% / 新版 53.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5c6f4",
      "incomplete_value": false,
      "site": "00b5c6fc",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:00b5c6e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c6e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c70c",
      "WRITE",
      [
        "storage",
        "01125fe0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5c77c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c780",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5c7a8",
      "WRITE",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c6fc ["INT_ADD", "register:40f0:8", ["const:b5c6fc:8", "const:4:8"]]
- 00b5c6fc ["CALL", null, ["callee:00c5ad50:8"]]
+ 00b5c798 ["INT_ADD", "register:40f0:8", ["const:b5c798:8", "const:4:8"]]
+ 00b5c798 ["CALL", null, ["callee:00c5ad50:8"]]
- 00b5c6e0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b5c6e0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b5c6e0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c6e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5c6e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5c6e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c6e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c4b502c2deb29a2b94d5ddfe85d62db5"></a>

### [`00b5c71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c71c.md) → [`00b5c7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c7b8.md) _ZN8firebase15CleanupNotifierC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ac20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac20.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 1件 [`00c5acf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acf0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_store_alignment

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `unresolved_store_alignment` 5件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5c808",
      "incomplete_value": true,
      "site": "00b5c808",
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
      "definition_site": "00b5c76c",
      "incomplete_value": true,
      "site": "00b5c76c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5c7f4",
      "incomplete_value": true,
      "site": "00b5c7f8",
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
      "definition_site": "00b5c758",
      "incomplete_value": true,
      "site": "00b5c75c",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5c76c"
      ],
      [
        "FALL_THROUGH",
        "00b5c808"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5c808",
      "incomplete_value": true,
      "site": "00b5c818",
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
      "definition_site": "00b5c76c",
      "incomplete_value": true,
      "site": "00b5c77c",
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
    "ordinal": 11,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c71c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c720",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5c7ec",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5c7b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c7bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5c7ec",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c75c ["INT_ADD", "register:40f0:8", ["const:b5c75c:8", "const:4:8"]]
- 00b5c75c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c7f8 ["INT_ADD", "register:40f0:8", ["const:b5c7f8:8", "const:4:8"]]
+ 00b5c7f8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c76c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b5c76c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b5c808 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b5c808 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b5c71c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5c71c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5c71c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b5c71c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-dd6d56830ca2ecef597f8a01a8212556"></a>

### [`00b5c79c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c79c.md) → [`00b5c838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c838.md) _ZN8firebase15CleanupNotifierD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ac30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac30.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `unresolved_branch_alignment` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5c8c4",
      "incomplete_value": true,
      "site": "00b5c8c4",
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
      "definition_site": "00b5c828",
      "incomplete_value": true,
      "site": "00b5c828",
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
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5c8b0",
      "incomplete_value": true,
      "site": "00b5c8b4",
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
      "definition_site": "00b5c814",
      "incomplete_value": true,
      "site": "00b5c818",
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
      "unmatched:00b5c7c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c88c"
      ]
    ],
    [
      "unmatched:00b5c7ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c868"
      ]
    ],
    [
      "00b5c8a8",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5c864",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c88c"
      ]
    ],
    [
      "00b5c888",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5c868"
      ]
    ],
    [
      "00b5c8a8",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c818 ["INT_ADD", "register:40f0:8", ["const:b5c818:8", "const:4:8"]]
- 00b5c818 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c8b4 ["INT_ADD", "register:40f0:8", ["const:b5c8b4:8", "const:4:8"]]
+ 00b5c8b4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c828 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00b5c828 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00b5c8c4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00b5c8c4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00b5c7b0 ["INT_ADD", "register:40f0:8", ["const:b5c7b0:8", "const:4:8"]]
- 00b5c7b0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c84c ["INT_ADD", "register:40f0:8", ["const:b5c84c:8", "const:4:8"]]
+ 00b5c84c ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-42ac430c9a81f1ba6befb4e753a707a3"></a>

### [`00b5c884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c884.md) → [`00b5c920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c920.md) _ZN8firebase15CleanupNotifier10CleanupAllEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b790.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5b860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b860.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c884",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c888",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c88c",
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
      "00b5c920",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c924",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5c928",
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
- 00b5c884 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b5c884 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b5c884 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c888 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5c888 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5c888 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c888 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5c88c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5c88c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5c88c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b5c88c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0463361021d89da35c5e1b5631a4979d"></a>

### [`00b5c8f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c8f4.md) → [`00b5c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c990.md) _ZN8firebase15CleanupNotifier19UnregisterAllOwnersEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbb0.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5bba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bba0.md)
- 新版 呼出元 1件 [`00c5bc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc80.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5bc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc70.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5c8f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c8f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5c8fc",
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
      "00b5c990",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b5c994",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5c998",
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
- 00b5c8f4 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b5c8f4 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b5c8f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b5c8f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5c8f8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b5c8f8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5c8f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5c8f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5c8fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5c8fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5c8fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b5c8fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a5deb151e921371a5c6960e3e8aefb8e"></a>

### [`00b5c9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c9b8.md) → [`00b5ca54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5ca54.md) _ZN8firebase15CleanupNotifier14RegisterObjectEPvPFvS1_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5cb58",
      "incomplete_value": true,
      "site": "00b5cb5c",
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
      "unmatched:00b5c9e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cafc"
      ]
    ],
    [
      "unmatched:00b5ca04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5ca8c"
      ]
    ]
  ],
  "added": [
    [
      "00b5ca80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cafc"
      ]
    ],
    [
      "00b5caa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5ca8c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cac0 ["INT_ADD", "register:40f0:8", ["const:b5cac0:8", "const:4:8"]]
- 00b5cac0 ["CALL", null, ["callee:00c5b6b0:8"]]
+ 00b5cb5c ["INT_ADD", "register:40f0:8", ["const:b5cb5c:8", "const:4:8"]]
+ 00b5cb5c ["CALL", null, ["callee:00c5b6b0:8"]]
- 00b5c9d8 ["INT_ADD", "register:40f0:8", ["const:b5c9d8:8", "const:4:8"]]
- 00b5c9d8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5ca74 ["INT_ADD", "register:40f0:8", ["const:b5ca74:8", "const:4:8"]]
+ 00b5ca74 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c9e0 ["INT_ADD", "register:40b8:8", ["register:40b8:8", "const:30:8"]]
- 00b5c9e0 ["LOAD", "register:4040:8", ["const:1b1:8", "register:40b8:8"]]
~~~


