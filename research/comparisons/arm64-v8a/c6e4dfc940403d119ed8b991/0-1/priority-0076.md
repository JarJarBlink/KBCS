# v16.0.1 → v16.0.2 · 最優先の変更候補 (76)

[一覧の目次](README.md)

<a id="compare-6349c0c7bab482e82989bab569ffeddf"></a>

### [`00b3ad98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ad98.md) → [`00b3ae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ae34.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementShown

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00b3b924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b924.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3ae74",
      "incomplete_value": true,
      "site": "00b3ae78",
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
      "definition_site": "00b3add8",
      "incomplete_value": true,
      "site": "00b3addc",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3ae60",
      "incomplete_value": false,
      "site": "00b3ae68",
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
            "const:310:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3adc4",
      "incomplete_value": false,
      "site": "00b3adcc",
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
            "const:210:8"
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
      "00b3ae60",
      "PARAM",
      [
        "storage",
        "01125210",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3ae60",
      "PARAM",
      [
        "storage",
        "01125310",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3adcc ["INT_ADD", "register:40f0:8", ["const:b3adcc:8", "const:4:8"]]
- 00b3adcc ["CALL", null, ["callee:00b3b9c0:8"]]
+ 00b3ae68 ["INT_ADD", "register:40f0:8", ["const:b3ae68:8", "const:4:8"]]
+ 00b3ae68 ["CALL", null, ["callee:00b3b9c0:8"]]
- 00b3adbc ["INT_ADD", "register:40f0:8", ["const:b3adbc:8", "const:4:8"]]
- 00b3adbc ["CALL", null, ["callee:00589994:8"]]
+ 00b3ae58 ["INT_ADD", "register:40f0:8", ["const:b3ae58:8", "const:4:8"]]
+ 00b3ae58 ["CALL", null, ["callee:00589994:8"]]
- 00b3adc4 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00b3adc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b3adc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b3adc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b3ae60 ["COPY", "tmp:0:8", ["const:310:8"]]
+ 00b3ae60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b3ae60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b3ae60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e70a65f44e4f0e96f48f5b631105ce70"></a>

### [`00b3ae58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ae58.md) → [`00b3aef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aef4.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementDismissed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00b3b924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b924.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.08% / 新版 81.08%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3ae84",
      "PARAM",
      [
        "storage",
        "01125210",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b3ae8c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3b9c0"
      ]
    ],
    [
      "unmatched:00b3ae9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3af54"
      ]
    ]
  ],
  "added": [
    [
      "00b3af20",
      "PARAM",
      [
        "storage",
        "01125310",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3af28",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3b9c0"
      ]
    ],
    [
      "00b3af38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3af54"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ae7c ["INT_ADD", "register:40f0:8", ["const:b3ae7c:8", "const:4:8"]]
- 00b3ae7c ["CALL", null, ["callee:00589994:8"]]
+ 00b3af18 ["INT_ADD", "register:40f0:8", ["const:b3af18:8", "const:4:8"]]
+ 00b3af18 ["CALL", null, ["callee:00589994:8"]]
- 00b3ae84 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00b3ae84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b3ae84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b3ae84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b3ae88 ["COPY", "register:4008:8", ["register:8:8"]]
~~~


<a id="compare-4290eee6ab5c10a0c965db0a0d636303"></a>

### [`00b3af1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3af1c.md) → [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) FUN_00b3afb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00b38f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38f08.md) [`00b3af1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3af1c.md) · 呼出先 2件 [`00b3af1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3af1c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00b38fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fa4.md) [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) · 呼出先 2件 [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3af30",
      "incomplete_value": true,
      "site": "00b3af38",
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
      "definition_site": "00b3afe4",
      "incomplete_value": true,
      "site": "00b3afe8",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b3af20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3af24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3af8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b038"
      ]
    ]
  ],
  "added": [
    [
      "00b3afbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b3afc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3b028",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b038"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3af38 ["INT_ADD", "register:40f0:8", ["const:b3af38:8", "const:4:8"]]
- 00b3af38 ["CALL", null, ["local:b0:8"]]
+ 00b3afd4 ["INT_ADD", "register:40f0:8", ["const:b3afd4:8", "const:4:8"]]
+ 00b3afd4 ["CALL", null, ["local:b0:8"]]
- 00b3afe8 ["INT_ADD", "register:40f0:8", ["const:b3afe8:8", "const:4:8"]]
- 00b3afe8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3b084 ["INT_ADD", "register:40f0:8", ["const:b3b084:8", "const:4:8"]]
+ 00b3b084 ["CALL", null, ["callee:00c57f80:8"]]
- 00b3af1c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b3af1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b3afb8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b3afb8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-9ae0e213f8a21a4fb3e9f798cb5ced04"></a>

### [`00b3b0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b0ac.md) → [`00b3b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b148.md) FUN_00b3b148

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b39964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39964.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00b3b1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b1f0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b3b28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b28c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.10% / 新版 83.10%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3b168",
      "incomplete_value": true,
      "site": "00b3b17c",
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
                "const:70:8"
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
      "definition_site": "00b3b0cc",
      "incomplete_value": true,
      "site": "00b3b0e0",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3b0bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b0dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b1a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b288"
      ]
    ]
  ],
  "added": [
    [
      "00b3b158",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3b178",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b3b240",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b288"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3b0e0 ["INT_ADD", "register:40f0:8", ["const:b3b0e0:8", "const:4:8"]]
- 00b3b0e0 ["CALL", null, ["callee:00b3b28c:8"]]
+ 00b3b17c ["INT_ADD", "register:40f0:8", ["const:b3b17c:8", "const:4:8"]]
+ 00b3b17c ["CALL", null, ["callee:00b3b28c:8"]]
- 00b3b0bc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b3b0bc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b3b0bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b3b0bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b3b0c0 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00b3b0c0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b3b0c0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b3b0c0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-40dd460cfdf33f2967ca552daf199961"></a>

### [`00b3b1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b1f0.md) → [`00b3b28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b28c.md) FUN_00b3b28c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b3b0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b0ac.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00b3b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b148.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.08% / 新版 83.08%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3b294",
      "incomplete_value": true,
      "site": "00b3b2a0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b3b370",
      "incomplete_value": true,
      "site": "00b3b38c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b3b1f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b1f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b1f8",
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
      "00b3b28c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b3b290",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3b294",
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
- 00b3b2a0 ["INT_ADD", "register:40f0:8", ["const:b3b2a0:8", "const:4:8"]]
- 00b3b2a0 ["CALL", null, ["callee:00c58120:8"]]
+ 00b3b33c ["INT_ADD", "register:40f0:8", ["const:b3b33c:8", "const:4:8"]]
+ 00b3b33c ["CALL", null, ["callee:00c58120:8"]]
+ 00b3b2a0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00b3b1f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3b1f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3b1f0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b3b1f0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-30816779ea85962faf0278365ca1053f"></a>

### [`00b3b2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b2f4.md) → [`00b3b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b390.md) FUN_00b3b390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b3b3bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b3b33c"
      ]
    ],
    [
      "unmatched:00b3b380",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3b3bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b3d8"
      ]
    ],
    [
      "00b3b41c",
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
- 00b3b320 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00b3b3bc ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 00b3b324 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b3b324 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b3b3c0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b3b3c0 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00b3b32c ["BRANCH", null, ["local:b7:8"]]
+ 00b3b3c8 ["BRANCH", null, ["local:b8:8"]]
~~~


<a id="compare-54abbede29ea81d07265e10db95089a4"></a>

### [`00b3b508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b508.md) → [`00b3b5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b5a4.md) FUN_00b3b5a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b3b3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b3d0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00b3b46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b46c.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.69% / 新版 67.69%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3b508",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b510",
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
      "00b3b5a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b3b5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3b5ac",
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
- 00b3b508 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3b508 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3b508 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b3b508 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b3b50c ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b3b50c ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b3b50c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b3b50c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b3b510 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b3b510 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b3b510 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b3b510 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-12608067f4293279b3dfe6b420727ff3"></a>

### [`00b3b60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b60c.md) → [`00b3b6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b6a8.md) FUN_00b3b6a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3b674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b720"
      ]
    ]
  ],
  "added": [
    [
      "00b3b710",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3b720"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3b620 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00b3b620 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b3b6bc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00b3b6bc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b3b63c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00b3b6d8 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00b3b640 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b3b640 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00b3b6dc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b3b6dc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-5bbd52cdbec2971664e9ed5d06a71802"></a>

### [`00b3b6b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b6b8.md) → [`00b3b754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b754.md) FUN_00b3b754

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00b3a3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a3f0.md) [`00b3a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a5b8.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 88.76% / 新版 88.76%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3b7e0",
      "READ",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b754",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b3b788",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3b860",
      "READ",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b3b7f0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b3b824",
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
- 00b3b6dc ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
+ 00b3b778 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
- 00b3b708 ["BRANCH", null, ["local:b17:8"]]
+ 00b3b7a4 ["BRANCH", null, ["local:b25:8"]]
- 00b3b710 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00b3b7ac ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
~~~


<a id="compare-25f7e112f50c59964a92a4acfec57c88"></a>

### [`00b3b820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b820.md) → [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) FUN_00b3b8bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00b3ab0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ab0c.md) [`00b3abcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3abcc.md) [`00b3acd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3acd8.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 3件 [`00b3aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aba8.md) [`00b3ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ac68.md) [`00b3ad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ad74.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.38% / 新版 75.38%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b3b9a4",
      "incomplete_value": true,
      "site": "00b3b9bc",
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
      "unmatched:00b3b820",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b824",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b828",
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
      "00b3b8bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b3b8c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3b8c4",
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
- 00b3b820 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3b820 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3b820 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b3b820 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b3b824 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b3b824 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00b3b828 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b3b828 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b3b828 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b3b828 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0245f811d2f7783e19348d78db8ab926"></a>

### [`00b3b924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b924.md) → [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) FUN_00b3b9c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b3ad98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ad98.md) [`00b3ae58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ae58.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`00b3ae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ae34.md) [`00b3aef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aef4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.85% / 新版 73.85%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b3baa8",
      "incomplete_value": true,
      "site": "00b3bac0",
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
      "unmatched:00b3b924",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b928",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3b92c",
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
      "00b3b9c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b3b9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3b9c8",
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
- 00b3b924 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3b924 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3b924 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b3b924 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b3b928 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b3b928 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00b3b92c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b3b92c ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b3b92c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b3b92c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9b0d64ab085fffdaba965ee9693152b0"></a>

### [`00b3ba28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3ba28.md) → [`00b3bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bac4.md) _INIT_273

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`0058cc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058c/0058cc80.md) [`008912d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/008912d4.md) [`00b38f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38f08.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`0058ccc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058ccc0.md) [`0089132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089132c.md) [`00b38fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fa4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.30% / 新版 65.30%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3bcf8",
      "incomplete_value": true,
      "site": "00b3bd04",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3bcf4",
      "incomplete_value": false,
      "site": "00b3bd04",
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
            "const:290:8"
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
    "new": null,
    "old": {
      "definition_site": "00b3bd6c",
      "incomplete_value": true,
      "site": "00b3bd70",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:60:8"
              ]
            ]
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
      "unmatched:00b3ba58",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3ba64",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3ba6c",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3baf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3bb00",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3bb08",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3bd04 ["INT_ADD", "register:40f0:8", ["const:b3bd04:8", "const:4:8"]]
- 00b3bd04 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b3bda0 ["INT_ADD", "register:40f0:8", ["const:b3bda0:8", "const:4:8"]]
+ 00b3bda0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b3bd04 ["COPY", "tmp:0:8", ["const:2f8:8"]]
+ 00b3bd04 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b3bd04 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b3bd04 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b3bd70 ["INT_ADD", "register:40f0:8", ["const:b3bd70:8", "const:4:8"]]
- 00b3bd70 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3be0c ["INT_ADD", "register:40f0:8", ["const:b3be0c:8", "const:4:8"]]
+ 00b3be0c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-601cbaf26d504ee152c52220c8ec32f7"></a>

### [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md) → [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) FUN_00b3befc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 17件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`0071d1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d1fc.md) [`0071e2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e2f4.md) [`0071e394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e394.md) [`0071e7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e7cc.md) · 呼出先 1件 [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 17件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`0071d254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d254.md) [`0071e34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e34c.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`0071e824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e824.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3be64",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e81d8"
      ]
    ]
  ],
  "added": [
    [
      "00b3bf00",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e81d8"
      ]
    ]
  ]
}
~~~


<a id="compare-1b5a9e100278f9636be9f357f36d794c"></a>

### [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md) → [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md) FUN_00b3bf30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 80件 [`005c4958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c4958.md) [`005c6978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6978.md) [`005c7d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7d00.md) [`005c85c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c85c4.md) [`005c87c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c87c0.md) · 呼出先 0件 
- 新版 呼出元 80件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`005c8604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8604.md) [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-49465454bef560490d5c66924d525c9f"></a>

### [`00b3bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3bed8.md) → [`00b3bf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf74.md) FUN_00b3bf74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 7件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`0071e2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e2f4.md) [`0071e394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e394.md) [`0071e7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e7cc.md) [`0071e834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e834.md) · 呼出先 1件 [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`0071e34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e34c.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`0071e824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e824.md) [`0071e88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e88c.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-588d953a29088c0c98e2449a9fe3960a"></a>

### [`00b3bf20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3bf20.md) → [`00b3bfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bfbc.md) FUN_00b3bfbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 5件 [`005dbf7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbf7c.md) [`00697168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697168.md) [`0071e5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e5c0.md) [`008e49a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e49a0.md) [`008e51e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e5/008e51e4.md) · 呼出先 1件 [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 5件 [`005dbfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbfbc.md) [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) [`0071e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e618.md) [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) [`008e5238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5238.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-99d035c2d61cf6a45fd898f2247c7a36"></a>

### [`00b3bf6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3bf6c.md) → [`00b3c008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c008.md) _INIT_274

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3c0c8",
      "incomplete_value": true,
      "site": "00b3c0cc",
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
      "definition_site": "00b3c0b8",
      "incomplete_value": true,
      "site": "00b3c0cc",
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
      "definition_site": "00b3c0c0",
      "incomplete_value": true,
      "site": "00b3c0cc",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3bf9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3bfa8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3bfb0",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3c038",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3c044",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3c04c",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3c0cc ["INT_ADD", "register:40f0:8", ["const:b3c0cc:8", "const:4:8"]]
- 00b3c0cc ["CALL", null, ["callee:0043b838:8"]]
+ 00b3c168 ["INT_ADD", "register:40f0:8", ["const:b3c168:8", "const:4:8"]]
+ 00b3c168 ["CALL", null, ["callee:0043b838:8"]]
- 00b3c11c ["INT_ADD", "register:40f0:8", ["const:b3c11c:8", "const:4:8"]]
- 00b3c11c ["CALL", null, ["callee:0043b838:8"]]
+ 00b3c1b8 ["INT_ADD", "register:40f0:8", ["const:b3c1b8:8", "const:4:8"]]
+ 00b3c1b8 ["CALL", null, ["callee:0043b838:8"]]
- 00b3c1a0 ["INT_ADD", "register:40f0:8", ["const:b3c1a0:8", "const:4:8"]]
- 00b3c1a0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b3c23c ["INT_ADD", "register:40f0:8", ["const:b3c23c:8", "const:4:8"]]
+ 00b3c23c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-8e6dc5ebab7474a394d381ee9d7bf502"></a>

### [`00b3c30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c30c.md) → [`00b3c3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c3a8.md) FUN_00b3c3a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`00767f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00767/00767f94.md) [`007685a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007685a4.md) [`007687f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007687f0.md) [`00768be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768be8.md) · 呼出先 5件 [`004499b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499b8.md) [`00b3c468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c468.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 10件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00767fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767fec.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00768848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768848.md) [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) · 呼出先 5件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.86% / 新版 89.86%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3c344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c414"
      ]
    ]
  ],
  "added": [
    [
      "00b3c3e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c414"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3c31c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00b3c334 ["INT_RIGHT", "register:4050:8", ["register:4040:8", "const:1:8"]]
- 00b3c338 ["INT_AND", "tmp:0:4", ["register:4040:4", "const:1:4"]]
- 00b3c338 ["INT_SLESS", "register:107:1", ["tmp:0:4", "const:0:4"]]
- 00b3c338 ["INT_EQUAL", "register:108:1", ["tmp:0:4", "const:0:4"]]
- 00b3c338 ["COPY", "register:100:1", ["register:107:1"]]
~~~


<a id="compare-ad0874e1d72ca09b22ebb43491d35ddb"></a>

### [`00b3c468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c468.md) → [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) FUN_00b3c504

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b3c30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c30c.md) [`00b3c6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c6c4.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 2件 [`00b3c3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c3a8.md) [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 97.04% / 新版 97.04%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3c550",
      "incomplete_value": true,
      "site": "00b3c550",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3c4b4",
      "incomplete_value": true,
      "site": "00b3c4b4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "00b3c530",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3c528",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c5e8"
      ]
    ]
  ],
  "added": [
    [
      "00b3c530",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "00b3c5c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c5e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3c48c ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 00b3c48c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00b3c48c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00b3c48c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00b3c528 ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 00b3c528 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00b3c528 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00b3c528 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00b3c4c4 ["INT_ADD", "register:40f0:8", ["const:b3c4c4:8", "const:4:8"]]
- 00b3c4c4 ["CALL", null, ["callee:00c58470:8"]]
+ 00b3c560 ["INT_ADD", "register:40f0:8", ["const:b3c560:8", "const:4:8"]]
+ 00b3c560 ["CALL", null, ["callee:00c58470:8"]]
- 00b3c4d4 ["INT_ADD", "register:40f0:8", ["const:b3c4d4:8", "const:4:8"]]
- 00b3c4d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3c570 ["INT_ADD", "register:40f0:8", ["const:b3c570:8", "const:4:8"]]
+ 00b3c570 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-124382fd9f751ba07578ca9bbbb0a079"></a>

### [`00b3c6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c6c4.md) → [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) FUN_00b3c760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008782b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008782b8.md) · 呼出先 7件 [`004499b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499b8.md) [`00b3c468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c468.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00878310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878310.md) · 呼出先 7件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.52% / 新版 95.52%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3c708",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c7f0"
      ]
    ]
  ],
  "added": [
    [
      "00b3c7a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3c7f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3c6f4 ["INT_RIGHT", "register:4050:8", ["register:4040:8", "const:1:8"]]
- 00b3c6f8 ["INT_AND", "tmp:0:4", ["register:4040:4", "const:1:4"]]
- 00b3c6f8 ["INT_SLESS", "register:107:1", ["tmp:0:4", "const:0:4"]]
- 00b3c6f8 ["INT_EQUAL", "register:108:1", ["tmp:0:4", "const:0:4"]]
- 00b3c6f8 ["COPY", "register:100:1", ["register:107:1"]]
- 00b3c6fc ["INT_SUB", "register:40b0:8", ["register:4000:8", "register:40a8:8"]]
~~~


<a id="compare-417964e8a77c5accf3deb37a4218ef6e"></a>

### [`00b3c8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c8dc.md) → [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md) FUN_00b3c978

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 20件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`00476b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00476/00476b50.md) [`0048d91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048d91c.md) [`0048f460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048f/0048f460.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 3件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 20件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00476b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476b90.md) [`0048d95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d95c.md) [`0048f4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f4a0.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.16% / 新版 90.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3c9dc",
      "incomplete_value": true,
      "site": "00b3c9e0",
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
      "unmatched:00b3c900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3cb58"
      ]
    ],
    [
      "unmatched:00b3c994",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3ca64"
      ]
    ],
    [
      "unmatched:00b3ca44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3caac"
      ]
    ]
  ],
  "added": [
    [
      "00b3c99c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3cb58"
      ]
    ],
    [
      "00b3ca30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3ca64"
      ]
    ],
    [
      "00b3cae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3caac"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3c944 ["INT_ADD", "register:40f0:8", ["const:b3c944:8", "const:4:8"]]
- 00b3c944 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3c9e0 ["INT_ADD", "register:40f0:8", ["const:b3c9e0:8", "const:4:8"]]
+ 00b3c9e0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b3c9e0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b3c9e0 ["COPY", "tmp:1:1", ["tmp:0:1"]]
- 00b3c9e0 ["COPY", "tmp:2:1", ["const:2:1"]]
- 00b3c9e0 ["INT_AND", "tmp:3:1", ["tmp:2:1", "const:8:1"]]
- 00b3c8fc ["COPY", "tmp:0:8", ["const:8:8"]]
- 00b3c8fc ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00b3c8fc ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00b3c8fc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-c8edcb8b47dd0bb84f7ca234ddece4c4"></a>

### [`00b3cad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3cad8.md) → [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) FUN_00b3cb74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 8件 [`006714ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00671/006714ac.md) [`0067a3a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067a/0067a3a4.md) [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) [`008d1a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1a28.md) [`009265b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00926/009265b0.md) · 呼出先 16件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0082e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082e320.md)
- 新版 呼出元 8件 [`006714ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00671/006714ec.md) [`0067a3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067a/0067a3e4.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`008d1a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1a7c.md) [`00926604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926604.md) · 呼出先 16件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0082e378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082e378.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.35% / 新版 56.35%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 20件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3cbb8",
      "incomplete_value": true,
      "site": "00b3cbc8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3cbbc",
      "incomplete_value": true,
      "site": "00b3cbc8",
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
    "new": null,
    "old": {
      "definition_site": "00b3cc78",
      "incomplete_value": true,
      "site": "00b3cc7c",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b3caec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3caf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3cb1c",
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
      "00b3cb88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b3cb8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3cbb8",
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
- 00b3cbc8 ["INT_ADD", "register:40f0:8", ["const:b3cbc8:8", "const:4:8"]]
- 00b3cbc8 ["CALL", null, ["callee:0047e64c:8"]]
+ 00b3cc64 ["INT_ADD", "register:40f0:8", ["const:b3cc64:8", "const:4:8"]]
+ 00b3cc64 ["CALL", null, ["callee:0047e64c:8"]]
- 00b3cc7c ["INT_ADD", "register:40f0:8", ["const:b3cc7c:8", "const:4:8"]]
- 00b3cc7c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3cd18 ["INT_ADD", "register:40f0:8", ["const:b3cd18:8", "const:4:8"]]
+ 00b3cd18 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3cc7c ["COPY", "tmp:0:8", ["const:8:8"]]
+ 00b3cc7c ["INT_CARRY", "register:105:1", ["register:40d0:8", "tmp:0:8"]]
+ 00b3cc7c ["INT_SCARRY", "register:106:1", ["register:40d0:8", "tmp:0:8"]]
+ 00b3cc7c ["INT_ADD", "tmp:1:8", ["register:40d0:8", "tmp:0:8"]]
~~~


<a id="compare-cb9d94297dc79a4c7ceec8a1eaa70ec7"></a>

### [`00b3d128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3d/00b3d128.md) → [`00b3d1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d1c4.md) _INIT_275

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.53% / 新版 78.53%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3d31c",
      "incomplete_value": true,
      "site": "00b3d324",
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
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3d38c",
      "incomplete_value": true,
      "site": "00b3d39c",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3d390",
      "incomplete_value": true,
      "site": "00b3d39c",
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
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3d158",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3d164",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3d180",
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
      "00b3d1f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3d200",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3d21c",
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
- 00b3d288 ["INT_ADD", "register:40f0:8", ["const:b3d288:8", "const:4:8"]]
- 00b3d288 ["CALL", null, ["callee:0043b838:8"]]
+ 00b3d324 ["INT_ADD", "register:40f0:8", ["const:b3d324:8", "const:4:8"]]
+ 00b3d324 ["CALL", null, ["callee:0043b838:8"]]
- 00b3d300 ["INT_ADD", "register:40f0:8", ["const:b3d300:8", "const:4:8"]]
- 00b3d300 ["CALL", null, ["callee:0043b838:8"]]
+ 00b3d39c ["INT_ADD", "register:40f0:8", ["const:b3d39c:8", "const:4:8"]]
+ 00b3d39c ["CALL", null, ["callee:0043b838:8"]]
- 00b3d35c ["INT_ADD", "register:40f0:8", ["const:b3d35c:8", "const:4:8"]]
- 00b3d35c ["CALL", null, ["callee:00c57f00:8"]]
+ 00b3d3f8 ["INT_ADD", "register:40f0:8", ["const:b3d3f8:8", "const:4:8"]]
+ 00b3d3f8 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-ccf37419153244f3fb6ff934d7dfbed0"></a>

### [`00b3e138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e138.md) → [`00b3e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e1d4.md) FUN_00b3e1d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) [`00b3e7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e7d4.md) [`00b3f4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f4e4.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006f15c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f1/006f15c0.md) [`007279d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/007279d0.md) [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md) [`0073140c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00731/0073140c.md)
- 新版 呼出元 3件 [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) [`00b3e870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e870.md) [`00b3f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f580.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006f1618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f1618.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md) [`00731464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731464.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3e224",
      "value": [
        "leaf",
        "ram:b3dfb4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3e188",
      "value": [
        "leaf",
        "ram:b3df18:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3e280",
      "incomplete_value": false,
      "site": "00b3e288",
      "value": [
        "leaf",
        "const:28:8"
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
      "definition_site": "00b3e304",
      "incomplete_value": true,
      "site": "00b3e30c",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00b3e268",
      "incomplete_value": true,
      "site": "00b3e270",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:688:8"
              ]
            ]
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
      "unmatched:00b3e138",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3e13c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3e140",
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
      "00b3e1d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3e1d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b3e1dc",
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
- 00b3e188 ["INT_ADD", "register:40f0:8", ["const:b3e188:8", "const:4:8"]]
- 00b3e188 ["CALL", null, ["ram:b3df18:8"]]
+ 00b3e224 ["INT_ADD", "register:40f0:8", ["const:b3e224:8", "const:4:8"]]
+ 00b3e224 ["CALL", null, ["ram:b3dfb4:8"]]
- 00b3e1d4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b3e1d4 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 00b3e270 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b3e270 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00b3e1ec ["INT_ADD", "register:40f0:8", ["const:b3e1ec:8", "const:4:8"]]
- 00b3e1ec ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3e288 ["INT_ADD", "register:40f0:8", ["const:b3e288:8", "const:4:8"]]
+ 00b3e288 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-7bede6692dffbd1189c3265d75058d36"></a>

### [`00b3e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e410.md) → [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md) FUN_00b3e4ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 39件 [`005cc6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc6e4.md) [`006064d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/006064d4.md) [`0067672c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/0067672c.md) [`00679534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00679/00679534.md) [`006d1fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1fe4.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 40件 [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`0067676c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067676c.md) [`00679574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00679/00679574.md) [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.33% / 新版 85.33%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b3e4fc"
      ],
      [
        "FALL_THROUGH",
        "00b3e598"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3e598",
      "incomplete_value": true,
      "site": "00b3e59c",
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
      "definition_site": "00b3e4fc",
      "incomplete_value": true,
      "site": "00b3e500",
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
      "unmatched:00b3e438",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3e508"
      ]
    ],
    [
      "unmatched:00b3e47c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3e5c0"
      ]
    ],
    [
      "unmatched:00b3e480",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "00b3e4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3e508"
      ]
    ],
    [
      "00b3e518",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3e5c0"
      ]
    ],
    [
      "00b3e51c",
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
- 00b3e428 ["INT_ADD", "register:40f0:8", ["const:b3e428:8", "const:4:8"]]
- 00b3e428 ["CALL", null, ["callee:00851550:8"]]
+ 00b3e4c4 ["INT_ADD", "register:40f0:8", ["const:b3e4c4:8", "const:4:8"]]
+ 00b3e4c4 ["CALL", null, ["callee:00851550:8"]]
- 00b3e434 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b3e434 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b3e434 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b3e434 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b3e438 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b3e438 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-ee321336837dc22e00a509d0e3423424"></a>

### [`00b3e53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e53c.md) → [`00b3e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e5d8.md) FUN_00b3e5d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 88.51% / 新版 88.51%

優先判定に残った影響 `store_value` 3件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3e618",
      "incomplete_value": false,
      "site": "00b3e624",
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
    "old": {
      "definition_site": "00b3e57c",
      "incomplete_value": false,
      "site": "00b3e588",
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
            "const:d38:8"
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
      "definition_site": "00b3e63c",
      "incomplete_value": true,
      "site": "00b3e63c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:2f1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3e5a0",
      "incomplete_value": true,
      "site": "00b3e5a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:34d:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3e640",
      "incomplete_value": true,
      "site": "00b3e640",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3e5a4",
      "incomplete_value": true,
      "site": "00b3e5a4",
      "value": [
        "LOAD",
        "8",
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
      "00b3e624",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00b3e62c",
      "READ",
      [
        "storage",
        "002a834d",
        null,
        "string"
      ]
    ],
    [
      "00b3e634",
      "READ",
      [
        "storage",
        "002a8354",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3e624",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b3e62c",
      "READ",
      [
        "storage",
        "002a82f1",
        null,
        "string"
      ]
    ],
    [
      "00b3e634",
      "READ",
      [
        "storage",
        "002a82f8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3e624 ["INT_ADD", "register:40f0:8", ["const:b3e624:8", "const:4:8"]]
- 00b3e624 ["CALL", null, ["callee:00b3d554:8"]]
+ 00b3e6c0 ["INT_ADD", "register:40f0:8", ["const:b3e6c0:8", "const:4:8"]]
+ 00b3e6c0 ["CALL", null, ["callee:00b3d554:8"]]
- 00b3e574 ["INT_ADD", "register:40f0:8", ["const:b3e574:8", "const:4:8"]]
- 00b3e574 ["CALL", null, ["callee:00487e60:8"]]
+ 00b3e610 ["INT_ADD", "register:40f0:8", ["const:b3e610:8", "const:4:8"]]
+ 00b3e610 ["CALL", null, ["callee:00487e60:8"]]
- 00b3e57c ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00b3e57c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3e57c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3e57c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b3e618 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00b3e618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3e618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3e618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-01774185e813f01cf2e4c59dcd38c76c"></a>

### [`00b3e7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e7d4.md) → [`00b3e870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e870.md) FUN_00b3e870

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`006788e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00678/006788e0.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`009248c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00924/009248c8.md) · 呼出先 22件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md)
- 新版 呼出元 3件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.57% / 新版 67.57%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 1件, `store_condition` 3件, `unresolved_branch_alignment` 41件, `unresolved_call_alignment` 15件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 56件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3e8c4",
      "incomplete_value": true,
      "site": "00b3e8cc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3e828",
      "incomplete_value": true,
      "site": "00b3e830",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:690:8"
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
      "definition_site": "00b3e890",
      "incomplete_value": true,
      "site": "00b3e8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3ea18",
      "value": [
        "leaf",
        "ram:b3d6b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3e97c",
      "value": [
        "leaf",
        "ram:b3d618:8"
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
      "00b3e8c4",
      "READ",
      [
        "storage",
        "00c9b690",
        null,
        "pointer"
      ]
    ],
    [
      "00b3e8c4",
      "PARAM",
      [
        "storage",
        "011236e8",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b3e884",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3eb88"
      ]
    ]
  ],
  "added": [
    [
      "00b3e8c4",
      "READ",
      [
        "storage",
        "00c9b760",
        null,
        "pointer"
      ]
    ],
    [
      "00b3e8c4",
      "PARAM",
      [
        "storage",
        "011237e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b3e920",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3eb88"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3e830 ["INT_ADD", "register:40f0:8", ["const:b3e830:8", "const:4:8"]]
- 00b3e830 ["CALL", null, ["callee:0087eb18:8"]]
+ 00b3e8cc ["INT_ADD", "register:40f0:8", ["const:b3e8cc:8", "const:4:8"]]
+ 00b3e8cc ["CALL", null, ["callee:0087eb18:8"]]
- 00b3e8ac ["INT_ADD", "register:40f0:8", ["const:b3e8ac:8", "const:4:8"]]
- 00b3e8ac ["CALL", null, ["callee:00b3e1d4:8"]]
+ 00b3e948 ["INT_ADD", "register:40f0:8", ["const:b3e948:8", "const:4:8"]]
+ 00b3e948 ["CALL", null, ["callee:00b3e1d4:8"]]
- 00b3e8e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b3e8e0 ["CBRANCH", null, ["local:b60:8", "tmp:0:1"]]
+ 00b3e97c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b3e97c ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
~~~


<a id="compare-6239ec959ab282fa8ffa508351c73ed3"></a>

### [`00b3f4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f4e4.md) → [`00b3f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f580.md) FUN_00b3f580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b3e138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e138.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e1d4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3f5e4",
      "incomplete_value": true,
      "site": "00b3f600",
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
            "const:4:8"
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
      "unmatched:00b3f50c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3f514",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3f520",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f788"
      ]
    ]
  ],
  "added": [
    [
      "00b3f5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ],
    [
      "00b3f5b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b3f5bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f788"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f564 ["INT_ADD", "register:40f0:8", ["const:b3f564:8", "const:4:8"]]
- 00b3f564 ["CALL", null, ["callee:00b3e1d4:8"]]
+ 00b3f600 ["INT_ADD", "register:40f0:8", ["const:b3f600:8", "const:4:8"]]
+ 00b3f600 ["CALL", null, ["callee:00b3e1d4:8"]]
- 00b3f50c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b3f50c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00b3f510 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 00b3f510 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a3b43bad97361a7da6dcdc19a1a3c01e"></a>

### [`00b3f724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f724.md) → [`00b3f7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f7c0.md) FUN_00b3f7c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`006d8d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8d00.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`00985294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985294.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 1件 [`00b3e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e410.md)
- 新版 呼出元 6件 [`006d8d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8d58.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`009852e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/009852e8.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3f758",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f884"
      ]
    ]
  ],
  "added": [
    [
      "00b3f7f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f884"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f744 ["INT_ADD", "register:40f0:8", ["const:b3f744:8", "const:4:8"]]
- 00b3f744 ["CALL", null, ["callee:00b3e4ac:8"]]
+ 00b3f7e0 ["INT_ADD", "register:40f0:8", ["const:b3f7e0:8", "const:4:8"]]
+ 00b3f7e0 ["CALL", null, ["callee:00b3e4ac:8"]]
- 00b3f748 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00b3f748 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b3f748 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b3f748 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b3f7e4 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00b3f7e4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b3f7e4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b3f7e4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b3f754 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40b8:8"]]
- 00b3f754 ["INT_SBORROW", "register:106:1", ["register:40b8:8", "register:40a0:8"]]
- 00b3f754 ["INT_SUB", "tmp:0:8", ["register:40b8:8", "register:40a0:8"]]
- 00b3f754 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-44cfeeeea450769247a6163ab1927eb7"></a>

### [`00b3f804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f804.md) → [`00b3f8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8a0.md) FUN_00b3f8a0

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
      "definition_site": "00b3f8b4",
      "incomplete_value": false,
      "site": "00b3f8b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3f818",
      "incomplete_value": false,
      "site": "00b3f81c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
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
      "00b3f8b8",
      "DATA",
      [
        "storage",
        "00c8f4e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b3f8b8",
      "DATA",
      [
        "storage",
        "00c8f5b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f810 ["INT_ADD", "register:40f0:8", ["const:b3f810:8", "const:4:8"]]
- 00b3f810 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3f8ac ["INT_ADD", "register:40f0:8", ["const:b3f8ac:8", "const:4:8"]]
+ 00b3f8ac ["CALL", null, ["callee:00c57f60:8"]]
- 00b3f818 ["COPY", "tmp:0:8", ["const:4e8:8"]]
- 00b3f818 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f818 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f818 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8b4 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 00b3f8b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-82a9ee1262d92e410b33de37f1e0c3c5"></a>

### [`00b3f828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f828.md) → [`00b3f8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8c4.md) FUN_00b3f8c4

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
      "definition_site": "00b3f8c8",
      "incomplete_value": false,
      "site": "00b3f8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3f82c",
      "incomplete_value": false,
      "site": "00b3f830",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
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
      "00b3f8cc",
      "DATA",
      [
        "storage",
        "00c8f4e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b3f8cc",
      "DATA",
      [
        "storage",
        "00c8f5b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f82c ["COPY", "tmp:0:8", ["const:4e8:8"]]
- 00b3f82c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f82c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f82c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8c8 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 00b3f8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-89974dfea555962fce85b48e6724669d"></a>

### [`00b3f840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f840.md) → [`00b3f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8dc.md) FUN_00b3f8dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 92.96% / 新版 92.96%

優先判定に残った影響 `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3f9d4",
      "value": [
        "leaf",
        "ram:b3d6b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3f938",
      "value": [
        "leaf",
        "ram:b3d618:8"
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
        "00b3f914"
      ],
      [
        "FALL_THROUGH",
        "00b3f9b0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3f9b0",
      "incomplete_value": true,
      "site": "00b3f9b4",
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
      "definition_site": "00b3f914",
      "incomplete_value": true,
      "site": "00b3f918",
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
      "unmatched:00b3f870",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00b3f8a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f960"
      ]
    ],
    [
      "unmatched:00b3f8d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f9d0"
      ]
    ]
  ],
  "added": [
    [
      "00b3f90c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00b3f940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f960"
      ]
    ],
    [
      "00b3f974",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3f9d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f938 ["INT_ADD", "register:40f0:8", ["const:b3f938:8", "const:4:8"]]
- 00b3f938 ["CALL", null, ["ram:b3d618:8"]]
+ 00b3f9d4 ["INT_ADD", "register:40f0:8", ["const:b3f9d4:8", "const:4:8"]]
+ 00b3f9d4 ["CALL", null, ["ram:b3d6b4:8"]]
- 00b3f85c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00b3f8f8 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 00b3f864 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b3f864 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 00b3f900 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b3f900 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
~~~


<a id="compare-51b50152758cb960fcf271b574343188"></a>

### [`00b3f988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f988.md) → [`00b3fa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa24.md) FUN_00b3fa24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3f9ac",
      "DATA",
      [
        "storage",
        "00c8f568",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00b3f9b0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3f9b4",
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
      "00b3fa48",
      "DATA",
      [
        "storage",
        "00c8f638",
        null,
        "undefined *"
      ]
    ],
    [
      "00b3fa4c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3fa50",
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
- 00b3f99c ["INT_ADD", "register:40f0:8", ["const:b3f99c:8", "const:4:8"]]
- 00b3f99c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3fa38 ["INT_ADD", "register:40f0:8", ["const:b3fa38:8", "const:4:8"]]
+ 00b3fa38 ["CALL", null, ["callee:00c57f60:8"]]
- 00b3f9a8 ["COPY", "tmp:0:8", ["const:568:8"]]
- 00b3f9a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f9a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f9a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b3f9ac ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b3f9ac ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00b3f9ac ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00b3f9ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-abde041634109eeee0e8ef1b189e227e"></a>

### [`00b3f9bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f9bc.md) → [`00b3fa58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa58.md) FUN_00b3fa58

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
      "definition_site": "00b3fa64",
      "incomplete_value": false,
      "site": "00b3fa64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3f9c8",
      "incomplete_value": false,
      "site": "00b3f9c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:568:8"
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
      "00b3fa64",
      "DATA",
      [
        "storage",
        "00c8f568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b3fa64",
      "DATA",
      [
        "storage",
        "00c8f638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f9c4 ["COPY", "tmp:0:8", ["const:568:8"]]
- 00b3f9c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b3f9c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b3f9c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3fa60 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 00b3fa60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3fa60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3fa60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-506f981b7b92bb669d2a7d9a5f5a6936"></a>

### [`00b3f9d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3f9d8.md) → [`00b3fa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa74.md) FUN_00b3fa74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.64% / 新版 69.64%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3fab8",
      "incomplete_value": true,
      "site": "00b3fad0",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00b3fa1c",
      "incomplete_value": true,
      "site": "00b3fa34",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
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
    "new": {
      "definition_site": "00b3fac4",
      "incomplete_value": false,
      "site": "00b3fad0",
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
      "definition_site": "00b3fa28",
      "incomplete_value": false,
      "site": "00b3fa34",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3fac8",
      "incomplete_value": false,
      "site": "00b3fad0",
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
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3fa2c",
      "incomplete_value": false,
      "site": "00b3fa34",
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
            "const:e68:8"
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
      "unmatched:00b3f9d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3f9dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3f9e0",
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
      "00b3fa74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b3fa78",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b3fa7c",
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
- 00b3fa34 ["INT_ADD", "register:40f0:8", ["const:b3fa34:8", "const:4:8"]]
- 00b3fa34 ["CALL", null, ["callee:00c586e0:8"]]
+ 00b3fad0 ["INT_ADD", "register:40f0:8", ["const:b3fad0:8", "const:4:8"]]
+ 00b3fad0 ["CALL", null, ["callee:00c586e0:8"]]
- 00b3fa64 ["INT_ADD", "register:40f0:8", ["const:b3fa64:8", "const:4:8"]]
- 00b3fa64 ["CALL", null, ["callee:00c586e0:8"]]
+ 00b3fb00 ["INT_ADD", "register:40f0:8", ["const:b3fb00:8", "const:4:8"]]
+ 00b3fb00 ["CALL", null, ["callee:00c586e0:8"]]
- 00b3f9d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3f9d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3f9d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b3f9d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b7d38e19eff4f0790d0261bd86e37d5e"></a>

### [`00b3fae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3fae0.md) → [`00b3fb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fb7c.md) _INIT_276

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3fcf4",
      "incomplete_value": true,
      "site": "00b3fd04",
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
      "definition_site": "00b3fd08",
      "incomplete_value": true,
      "site": "00b3fd18",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3fd0c",
      "incomplete_value": true,
      "site": "00b3fd18",
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
      "unmatched:00b3fb10",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3fb1c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3fb24",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3fbac",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3fbb8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3fbc0",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3fc68 ["INT_ADD", "register:40f0:8", ["const:b3fc68:8", "const:4:8"]]
- 00b3fc68 ["CALL", null, ["callee:0043b838:8"]]
+ 00b3fd04 ["INT_ADD", "register:40f0:8", ["const:b3fd04:8", "const:4:8"]]
+ 00b3fd04 ["CALL", null, ["callee:0043b838:8"]]
- 00b3fc7c ["INT_ADD", "register:40f0:8", ["const:b3fc7c:8", "const:4:8"]]
- 00b3fc7c ["CALL", null, ["callee:0043b838:8"]]
+ 00b3fd18 ["INT_ADD", "register:40f0:8", ["const:b3fd18:8", "const:4:8"]]
+ 00b3fd18 ["CALL", null, ["callee:0043b838:8"]]
- 00b3fd14 ["INT_ADD", "register:40f0:8", ["const:b3fd14:8", "const:4:8"]]
- 00b3fd14 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b3fdb0 ["INT_ADD", "register:40f0:8", ["const:b3fdb0:8", "const:4:8"]]
+ 00b3fdb0 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-839944e7a2264169122929ec53deb5e9"></a>

### [`00b3fe70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3fe70.md) → [`00b3ff0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff0c.md) FUN_00b3ff0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b403ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b403ac.md) · 呼出先 2件 [`00c5a960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a960.md) [`00c5ac60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac60.md)
- 新版 呼出元 1件 [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) · 呼出先 2件 [`00c5aa30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa30.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3fe88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3ff30"
      ]
    ]
  ],
  "added": [
    [
      "00b3ff24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3ff30"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3fe80 ["INT_ADD", "register:40f0:8", ["const:b3fe80:8", "const:4:8"]]
- 00b3fe80 ["CALL", null, ["callee:00c5ad30:8"]]
+ 00b3ff1c ["INT_ADD", "register:40f0:8", ["const:b3ff1c:8", "const:4:8"]]
+ 00b3ff1c ["CALL", null, ["callee:00c5ad30:8"]]
- 00b3fe88 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b3fe88 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b3fe90 ["INT_ADD", "register:40f0:8", ["const:b3fe90:8", "const:4:8"]]
- 00b3fe90 ["CALL", null, ["callee:00c5aa30:8"]]
+ 00b3ff2c ["INT_ADD", "register:40f0:8", ["const:b3ff2c:8", "const:4:8"]]
+ 00b3ff2c ["CALL", null, ["callee:00c5aa30:8"]]
~~~


<a id="compare-965e673793a683bae774e6a52003fb04"></a>

### [`00b3ff28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3ff28.md) → [`00b3ffc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ffc4.md) _ZN8firebase9analytics8internal10FutureData7DestroyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5acd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acd0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md)
- 新版 呼出元 1件 [`00c5ada0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ada0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md)

変更の種類 branch_value, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

アドレスに依存する影響 `branch_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3ffdc",
      "incomplete_value": true,
      "site": "00b3ffdc",
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
      "definition_site": "00b3ff40",
      "incomplete_value": true,
      "site": "00b3ff40",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b3ffd4",
      "READ",
      [
        "storage",
        "00c9b6a0",
        null,
        "pointer"
      ]
    ],
    [
      "00b3ffd8",
      "READ",
      [
        "storage",
        "01125328",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ],
    [
      "00b3fff4",
      "WRITE",
      [
        "storage",
        "01125328",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3ffd4",
      "READ",
      [
        "storage",
        "00c9b770",
        null,
        "pointer"
      ]
    ],
    [
      "00b3ffd8",
      "READ",
      [
        "storage",
        "01125428",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ],
    [
      "00b3fff4",
      "WRITE",
      [
        "storage",
        "01125428",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ff38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6a0:8"]]
- 00b3ff38 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3ffd4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b3ffd4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3ff48 ["INT_ADD", "register:40f0:8", ["const:b3ff48:8", "const:4:8"]]
- 00b3ff48 ["CALL", null, ["callee:00c5ad20:8"]]
+ 00b3ffe4 ["INT_ADD", "register:40f0:8", ["const:b3ffe4:8", "const:4:8"]]
+ 00b3ffe4 ["CALL", null, ["callee:00c5ad20:8"]]
- 00b3ff50 ["INT_ADD", "register:40f0:8", ["const:b3ff50:8", "const:4:8"]]
- 00b3ff50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3ffec ["INT_ADD", "register:40f0:8", ["const:b3ffec:8", "const:4:8"]]
+ 00b3ffec ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d2aa072cec17bd8f04e3483cc4ce77ce"></a>

### [`00b3ff64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3ff64.md) → [`00b40000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40000.md) _ZN8firebase9analytics8internal10FutureData3GetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b40008",
      "incomplete_value": true,
      "site": "00b4000c",
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
      "definition_site": "00b3ff6c",
      "incomplete_value": true,
      "site": "00b3ff70",
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
      "00b40004",
      "READ",
      [
        "storage",
        "00c9b6a0",
        null,
        "pointer"
      ]
    ],
    [
      "00b40008",
      "READ",
      [
        "storage",
        "01125328",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40004",
      "READ",
      [
        "storage",
        "00c9b770",
        null,
        "pointer"
      ]
    ],
    [
      "00b40008",
      "READ",
      [
        "storage",
        "01125428",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ff68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6a0:8"]]
- 00b3ff68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40004 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:770:8"]]
+ 00b40004 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cb09340e65c3ef4467149de6ce528e87"></a>

### [`00b3ff74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3ff74.md) → [`00b40010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40010.md) _ZN8firebase9analytics8internal36RegisterTerminateOnDefaultAppDestroyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5acf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acf0.md) · 呼出先 5件 [`00b40380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40380.md) [`00c5abd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abd0.md) [`00c5abf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abf0.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac60.md)
- 新版 呼出元 1件 [`00c5adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adc0.md) · 呼出先 5件 [`00b4041c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4041c.md) [`00c5aca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aca0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40024",
      "incomplete_value": true,
      "site": "00b40028",
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
      "definition_site": "00b3ff88",
      "incomplete_value": true,
      "site": "00b3ff8c",
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
      "unmatched:00b3ff84",
      "READ",
      [
        "storage",
        "00c9b6a8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b3ff88",
      "READ",
      [
        "storage",
        "00ca4630",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "unmatched:00b3ff88",
      "PARAM",
      [
        "storage",
        "002a835d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40020",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b40024",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "00b40024",
      "PARAM",
      [
        "storage",
        "002a8301",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ff8c ["INT_ADD", "register:40f0:8", ["const:b3ff8c:8", "const:4:8"]]
- 00b3ff8c ["CALL", null, ["callee:00c5aca0:8"]]
+ 00b40028 ["INT_ADD", "register:40f0:8", ["const:b40028:8", "const:4:8"]]
+ 00b40028 ["CALL", null, ["callee:00c5aca0:8"]]
- 00b3ff84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6a8:8"]]
- 00b3ff84 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3ff88 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b3ff88 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8b45e39c60de4116c771fb6e97e45fdd"></a>

### [`00b3ffc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3ffc0.md) → [`00b4005c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4005c.md) _ZN8firebase9analytics8internal38UnregisterTerminateOnDefaultAppDestroyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad00.md) · 呼出先 5件 [`00c5abd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abd0.md) [`00c5abf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abf0.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md) [`00c5ac60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac60.md) [`00c5ace0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ace0.md)
- 新版 呼出元 1件 [`00c5add0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5add0.md) · 呼出先 5件 [`00c5aca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aca0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md) [`00c5adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40070",
      "incomplete_value": true,
      "site": "00b40074",
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
      "definition_site": "00b3ffd4",
      "incomplete_value": true,
      "site": "00b3ffd8",
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
      "00b4006c",
      "READ",
      [
        "storage",
        "00c9b6a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b40070",
      "READ",
      [
        "storage",
        "00ca4630",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "00b40070",
      "PARAM",
      [
        "storage",
        "002a835d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4006c",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b40070",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "00b40070",
      "PARAM",
      [
        "storage",
        "002a8301",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ffd8 ["INT_ADD", "register:40f0:8", ["const:b3ffd8:8", "const:4:8"]]
- 00b3ffd8 ["CALL", null, ["callee:00c5aca0:8"]]
+ 00b40074 ["INT_ADD", "register:40f0:8", ["const:b40074:8", "const:4:8"]]
+ 00b40074 ["CALL", null, ["callee:00c5aca0:8"]]
- 00b3ffd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6a8:8"]]
- 00b3ffd0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4006c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
+ 00b4006c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3ffdc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00b3ffdc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b3ffdc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b3ffdc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b40078 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00b40078 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b40078 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b40078 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-b92bc48b4f028ff267c132c11f0f4060"></a>

### [`00b4000c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b4000c.md) → [`00b400a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b400a8.md) _ZN8firebase26ReferenceCountedFutureImplC2Em

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac40.md) · 呼出先 3件 [`00c5ac20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac20.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md) [`00c5ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad40.md)
- 新版 呼出元 1件 [`00c5ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad10.md) · 呼出先 3件 [`00c5acf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acf0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae10.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.22% / 新版 97.22%

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b400d4",
      "incomplete_value": true,
      "site": "00b400d4",
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
      "definition_site": "00b40038",
      "incomplete_value": true,
      "site": "00b40038",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40110",
      "incomplete_value": true,
      "site": "00b40114",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "00b40074",
      "incomplete_value": true,
      "site": "00b40078",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b400c0",
      "READ",
      [
        "storage",
        "00c9b6b0",
        null,
        "pointer"
      ]
    ],
    [
      "00b400d4",
      "DATA",
      [
        "storage",
        "00c903c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b400c0",
      "READ",
      [
        "storage",
        "00c9b780",
        null,
        "pointer"
      ]
    ],
    [
      "00b400d4",
      "DATA",
      [
        "storage",
        "00c90490",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40078 ["INT_ADD", "register:40f0:8", ["const:b40078:8", "const:4:8"]]
- 00b40078 ["CALL", null, ["callee:00c5acf0:8"]]
+ 00b40114 ["INT_ADD", "register:40f0:8", ["const:b40114:8", "const:4:8"]]
+ 00b40114 ["CALL", null, ["callee:00c5acf0:8"]]
- 00b40024 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6b0:8"]]
- 00b40024 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b400c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:780:8"]]
+ 00b400c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b40044 ["INT_ADD", "register:40f0:8", ["const:b40044:8", "const:4:8"]]
- 00b40044 ["CALL", null, ["callee:00c5ad50:8"]]
+ 00b400e0 ["INT_ADD", "register:40f0:8", ["const:b400e0:8", "const:4:8"]]
+ 00b400e0 ["CALL", null, ["callee:00c5ad50:8"]]
~~~


<a id="compare-bf4f8fde169bf1a5406c04b9787a9110"></a>

### [`00b400f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b400f0.md) → [`00b4018c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4018c.md) _ZNSt6__ndk16vectorIN8firebase10FutureBaseENS_9allocatorIS2_EEEC2Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad40.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5ae10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae10.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b401bc",
      "incomplete_value": true,
      "site": "00b401c0",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:6:8"
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
      "definition_site": "00b40188",
      "incomplete_value": true,
      "site": "00b4018c",
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


~~~diff
- 00b40124 ["INT_ADD", "register:40f0:8", ["const:b40124:8", "const:4:8"]]
- 00b40124 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b401c0 ["INT_ADD", "register:40f0:8", ["const:b401c0:8", "const:4:8"]]
+ 00b401c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b4018c ["INT_ADD", "register:40f0:8", ["const:b4018c:8", "const:4:8"]]
- 00b4018c ["CALL", null, ["callee:00c5ade0:8"]]
+ 00b40228 ["INT_ADD", "register:40f0:8", ["const:b40228:8", "const:4:8"]]
+ 00b40228 ["CALL", null, ["callee:00c5ade0:8"]]
- 00b4010c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b4010c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b401a8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b401a8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-1a489c7d9a4d1859c2632524d5514682"></a>

### [`00b401c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b401c0.md) → [`00b4025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4025c.md) _ZNSt6__ndk113__vector_baseIN8firebase10FutureBaseENS_9allocatorIS2_EEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4021c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b402b8",
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
- 00b401d4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00b401d4 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b40270 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00b40270 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00b401f0 ["INT_ADD", "register:40f0:8", ["const:b401f0:8", "const:4:8"]]
- 00b401f0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b4028c ["INT_ADD", "register:40f0:8", ["const:b4028c:8", "const:4:8"]]
+ 00b4028c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b401f8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b401f8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b40294 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b40294 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-959d92b369848778effaedf36f67c830"></a>

### [`00b402ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402ac.md) → [`00b40348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40348.md) _ZNKSt6__ndk120__vector_base_commonILb1EE20__throw_length_errorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md) · 呼出先 1件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md)
- 新版 呼出元 1件 [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) · 呼出先 1件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40354",
      "incomplete_value": false,
      "site": "00b40358",
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
      "definition_site": "00b402b8",
      "incomplete_value": false,
      "site": "00b402bc",
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
      "00b40354",
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
      "00b40354",
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
- 00b402bc ["INT_ADD", "register:40f0:8", ["const:b402bc:8", "const:4:8"]]
- 00b402bc ["CALL", null, ["callee:00b4035c:8"]]
+ 00b40358 ["INT_ADD", "register:40f0:8", ["const:b40358:8", "const:4:8"]]
+ 00b40358 ["CALL", null, ["callee:00b4035c:8"]]
- 00b402b8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00b402b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b402b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b402b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b40354 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00b40354 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40354 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40354 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c761e2d25a8bd39a5bdf2076ec9a6a35"></a>

### [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) → [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) FUN_00b4035c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 11件 [`00b402ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402ac.md) [`00bb8388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb8388.md) [`00bb859c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb859c.md) [`00bb86dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb86dc.md) [`00bb881c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb881c.md) · 呼出先 4件 [`00b40310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40310.md) [`00c37ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ccc.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 11件 [`00b40348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40348.md) [`00bb8424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8424.md) [`00bb8638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8638.md) [`00bb8778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8778.md) [`00bb88b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb88b8.md) · 呼出先 4件 [`00b403ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b403ac.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b402ec",
      "READ",
      [
        "storage",
        "00c9ab90",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b402ec",
      "PARAM",
      [
        "storage",
        "00c967d8",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:00b402f0",
      "READ",
      [
        "storage",
        "00c9ab98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b40388",
      "READ",
      [
        "storage",
        "00c9ac60",
        null,
        "pointer"
      ]
    ],
    [
      "00b40388",
      "PARAM",
      [
        "storage",
        "00c968a8",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00b4038c",
      "READ",
      [
        "storage",
        "00c9ac68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b402d4 ["INT_ADD", "register:40f0:8", ["const:b402d4:8", "const:4:8"]]
- 00b402d4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00b40370 ["INT_ADD", "register:40f0:8", ["const:b40370:8", "const:4:8"]]
+ 00b40370 ["CALL", null, ["callee:00c57fc0:8"]]
- 00b402e0 ["INT_ADD", "register:40f0:8", ["const:b402e0:8", "const:4:8"]]
- 00b402e0 ["CALL", null, ["callee:00b403ac:8"]]
+ 00b4037c ["INT_ADD", "register:40f0:8", ["const:b4037c:8", "const:4:8"]]
+ 00b4037c ["CALL", null, ["callee:00b403ac:8"]]
- 00b402ec ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:b90:8"]]
- 00b402ec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d08c6e03d0f80bc5702f35d7a60ecf84"></a>

### [`00b40310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40310.md) → [`00b403ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b403ac.md) FUN_00b403ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) · 呼出先 1件 [`00c57f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f30.md)
- 新版 呼出元 1件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) · 呼出先 1件 [`00c58000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58000.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 58.33% / 新版 58.33%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b403c4",
      "READ",
      [
        "storage",
        "00c9aba0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b40330",
      "DATA",
      [
        "storage",
        "00c967c0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b40334",
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
      "00b403c4",
      "READ",
      [
        "storage",
        "00c9ac70",
        null,
        "pointer"
      ]
    ],
    [
      "00b403cc",
      "DATA",
      [
        "storage",
        "00c96890",
        null,
        "pointer"
      ]
    ],
    [
      "00b403d0",
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
- 00b40320 ["INT_ADD", "register:40f0:8", ["const:b40320:8", "const:4:8"]]
- 00b40320 ["CALL", null, ["callee:00c58000:8"]]
+ 00b403bc ["INT_ADD", "register:40f0:8", ["const:b403bc:8", "const:4:8"]]
+ 00b403bc ["CALL", null, ["callee:00c58000:8"]]
- 00b40328 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ba0:8"]]
- 00b40328 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b403c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c70:8"]]
+ 00b403c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4032c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b4032c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4032c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4032c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf7f47b4e7ef480569b2f7577fcccaab"></a>

### [`00b40340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40340.md) → [`00b403dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b403dc.md) _ZNSt6__ndk16__treeINS_12__value_typeImPN8firebase17FutureBackingDataEEENS_19__map_value_compareImS5_NS_4lessImEELb1EEENS_9allocatorIS5_EEE7

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad30.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ad30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad30.md)
- 新版 呼出元 1件 [`00c5ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae00.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae00.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b40340 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b40340 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b403dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b403dc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b4035c ["INT_ADD", "register:40f0:8", ["const:b4035c:8", "const:4:8"]]
- 00b4035c ["CALL", null, ["callee:00c5ae00:8"]]
+ 00b403f8 ["INT_ADD", "register:40f0:8", ["const:b403f8:8", "const:4:8"]]
+ 00b403f8 ["CALL", null, ["callee:00c5ae00:8"]]
- 00b40368 ["INT_ADD", "register:40f0:8", ["const:b40368:8", "const:4:8"]]
- 00b40368 ["CALL", null, ["callee:00c5ae00:8"]]
+ 00b40404 ["INT_ADD", "register:40f0:8", ["const:b40404:8", "const:4:8"]]
+ 00b40404 ["CALL", null, ["callee:00c5ae00:8"]]
~~~


<a id="compare-3aebdade286dc2723e4ca9906d0171c7"></a>

### [`00b40380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40380.md) → [`00b4041c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4041c.md) FUN_00b4041c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b3ff74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3ff74.md) · 呼出先 3件 [`00c5a940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a940.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5ace0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ace0.md)
- 新版 呼出元 1件 [`00b40010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40010.md) · 呼出先 3件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40428",
      "incomplete_value": false,
      "site": "00b4042c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:c73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4038c",
      "incomplete_value": false,
      "site": "00b40390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:ccf:8"
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
      "unmatched:00b40380",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4038c",
      "PARAM",
      [
        "storage",
        "002a4ccf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4041c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40428",
      "PARAM",
      [
        "storage",
        "002a4c73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40390 ["INT_ADD", "register:40f0:8", ["const:b40390:8", "const:4:8"]]
- 00b40390 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b4042c ["INT_ADD", "register:40f0:8", ["const:b4042c:8", "const:4:8"]]
+ 00b4042c ["CALL", null, ["callee:00c5ad70:8"]]
- 00b40380 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40380 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40380 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00b40380 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40384 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-40337856fdaf2a0b386194fe30998aee"></a>

### [`00b403ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b403ac.md) → [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) _INIT_277

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b3fe70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3fe70.md) [`00b3fea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3fea4.md) [`00c5abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abc0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b3ff0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff0c.md) [`00b3ff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff40.md) [`00c5ac90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac90.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b403bc",
      "PARAM",
      [
        "storage",
        "01125308",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b403cc",
      "WRITE",
      [
        "storage",
        "01125308",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b403cc",
      "DATA",
      [
        "storage",
        "002a835d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40458",
      "PARAM",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40468",
      "WRITE",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40468",
      "DATA",
      [
        "storage",
        "002a8301",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b403bc ["COPY", "tmp:0:8", ["const:308:8"]]
- 00b403bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b403bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b403bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b403c0 ["COPY", "tmp:0:8", ["const:35d:8"]]
- 00b403c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b403c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b403c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b403c4 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00b403c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b403c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b403c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e9c45f717a0654df54ea8fccbd974886"></a>

### [`00b403dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b403dc.md) → [`00b40478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40478.md) _ZN8firebase9analytics9analytics19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4048c",
      "incomplete_value": true,
      "site": "00b4048c",
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
      "definition_site": "00b403f0",
      "incomplete_value": true,
      "site": "00b403f0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b40488",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4048c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4040c"
      ]
    ],
    [
      "unmatched:00b403fc",
      "PARAM",
      [
        "storage",
        "002a70af",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40488",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4048c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b404a8"
      ]
    ],
    [
      "00b40498",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b403ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:330:8"]]
- 00b403ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40488 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
+ 00b40488 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b403fc ["COPY", "tmp:0:8", ["const:af:8"]]
- 00b403fc ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b403fc ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b403fc ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00b40400 ["INT_ADD", "register:40f0:8", ["const:b40400:8", "const:4:8"]]
- 00b40400 ["CALL", null, ["callee:00c5afe0:8"]]
~~~


<a id="compare-17ecf6189fd30e84b5735eed2d7a6ac7"></a>

### [`00b4041c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b4041c.md) → [`00b404b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b404b8.md) _ZN8firebase9analytics9analytics19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b404cc",
      "incomplete_value": true,
      "site": "00b404cc",
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
      "definition_site": "00b40430",
      "incomplete_value": true,
      "site": "00b40430",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4041c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40420",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b404c8",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b404b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b404bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b404c8",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40430 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b40430 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b404cc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b404cc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b4041c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b4041c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4041c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40420 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40420 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40420 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40420 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0d44c52a963c6540548b86c8034c4c0a"></a>

### [`00b4045c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b4045c.md) → [`00b404f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b404f8.md) _ZN8firebase9analytics9analytics10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4045c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40460",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4046c",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b404f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b404fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40508",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4045c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b4045c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4045c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40460 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40460 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40460 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40460 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b40464 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b40464 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b40464 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b40464 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-38d98c3992909ec91141d292719fdf57"></a>

### [`00b404a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b404a0.md) → [`00b4053c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4053c.md) _ZN8firebase9analytics9analytics10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40558",
      "incomplete_value": false,
      "site": "00b40564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:53:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00b4054c",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b404b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40570"
      ]
    ],
    [
      "unmatched:00b404bc",
      "PARAM",
      [
        "storage",
        "002a70af",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4054c",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40570"
      ]
    ],
    [
      "00b40558",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b404c8 ["INT_ADD", "register:40f0:8", ["const:b404c8:8", "const:4:8"]]
- 00b404c8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40564 ["INT_ADD", "register:40f0:8", ["const:b40564:8", "const:4:8"]]
+ 00b40564 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b404b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:330:8"]]
- 00b404b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4054c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
+ 00b4054c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b404b4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b404b4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-4994abf7ea360aaa92871821e3ca6a33"></a>

### [`00b404f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b404f0.md) → [`00b4058c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4058c.md) _ZN8firebase9analytics9analytics15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b405e4",
      "incomplete_value": true,
      "site": "00b405e4",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40548",
      "incomplete_value": true,
      "site": "00b40548",
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
            "const:338:8"
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
      "definition_site": "00b405c0",
      "incomplete_value": true,
      "site": "00b405cc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40524",
      "incomplete_value": true,
      "site": "00b40530",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:330:8"
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
      "00b405a0",
      "READ",
      [
        "storage",
        "01125338",
        null,
        "undefined1"
      ]
    ],
    [
      "00b405c0",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "00b405e4",
      "WRITE",
      [
        "storage",
        "01125338",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b405a0",
      "READ",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ],
    [
      "00b405c0",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b405e4",
      "WRITE",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40530 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40530 ["INT_ADD", "register:40f0:8", ["const:b40530:8", "const:4:8"]]
- 00b40530 ["CALLIND", null, ["register:0:8"]]
+ 00b405cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b405cc ["INT_ADD", "register:40f0:8", ["const:b405cc:8", "const:4:8"]]
+ 00b405cc ["CALLIND", null, ["register:0:8"]]
- 00b40548 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b40548 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:338:8"]]
- 00b40548 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b405e4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b405e4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:438:8"]]
+ 00b405e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b40504 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:338:8"]]
- 00b40504 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b40504 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b405a0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:438:8"]]
+ 00b405a0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b405a0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-9e727ea5ef68112923ab02157d0a6b10"></a>

### [`00b4055c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b4055c.md) → [`00b405f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b405f8.md) _ZN8firebase9analytics9analytics12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40610",
      "incomplete_value": true,
      "site": "00b40610",
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
      "definition_site": "00b40574",
      "incomplete_value": true,
      "site": "00b40574",
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
      "00b4060c",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40610",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b405bc"
      ]
    ],
    [
      "00b40618",
      "READ",
      [
        "storage",
        "01125338",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4060c",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40610",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40658"
      ]
    ],
    [
      "00b40618",
      "READ",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40574 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b40574 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b40610 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b40610 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b40570 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:330:8"]]
- 00b40570 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4060c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
+ 00b4060c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4057c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:338:8"]]
- 00b4057c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4057c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b40618 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:438:8"]]
+ 00b40618 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b40618 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-cd48454472b01012177811dca2fe8139"></a>

### [`00b405cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b405cc.md) → [`00b40668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40668.md) _ZN8firebase9analytics9analytics14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4068c",
      "incomplete_value": false,
      "site": "00b406a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:53:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b405f0",
      "incomplete_value": false,
      "site": "00b40604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:af:8"
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
      "unmatched:00b405e0",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b405e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b406ac"
      ]
    ],
    [
      "unmatched:00b405f0",
      "PARAM",
      [
        "storage",
        "002a70af",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4067c",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b406ac"
      ]
    ],
    [
      "00b4068c",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40604 ["INT_ADD", "register:40f0:8", ["const:b40604:8", "const:4:8"]]
- 00b40604 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b406a0 ["INT_ADD", "register:40f0:8", ["const:b406a0:8", "const:4:8"]]
+ 00b406a0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b405e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:330:8"]]
- 00b405e0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b405e4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-c19927b94d70cf77e758f7e62d6dff37"></a>

### [`00b4063c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b4063c.md) → [`00b406d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b406d8.md) _ZN8firebase9analytics9analytics11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b406f4",
      "incomplete_value": false,
      "site": "00b406f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:30b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40658",
      "incomplete_value": false,
      "site": "00b4065c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:367:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b40704",
      "incomplete_value": true,
      "site": "00b40710",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40668",
      "incomplete_value": true,
      "site": "00b40674",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
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
      "00b406f4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b40704",
      "DATA",
      [
        "storage",
        "01125340",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b406f4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b40704",
      "DATA",
      [
        "storage",
        "01125440",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4065c ["INT_ADD", "register:40f0:8", ["const:b4065c:8", "const:4:8"]]
- 00b4065c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b406f8 ["INT_ADD", "register:40f0:8", ["const:b406f8:8", "const:4:8"]]
+ 00b406f8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40658 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b40658 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40658 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40658 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b406f4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b406f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b406f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b406f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40664 ["COPY", "tmp:0:8", ["const:340:8"]]
- 00b40664 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b40664 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b40664 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b40700 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 00b40700 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40700 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40700 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a2becffe3c02ba3dc0f610208b5503e"></a>

### [`00b40678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40678.md) → [`00b40714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40714.md) _ZN8firebase9analytics9analytics13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40754",
      "incomplete_value": true,
      "site": "00b40754",
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
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b406b8",
      "incomplete_value": true,
      "site": "00b406b8",
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
            "const:330:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40730",
      "incomplete_value": true,
      "site": "00b40730",
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
      "definition_site": "00b40694",
      "incomplete_value": true,
      "site": "00b40694",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40738",
      "incomplete_value": false,
      "site": "00b4074c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:53:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4069c",
      "incomplete_value": false,
      "site": "00b406b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:af:8"
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
      "00b40728",
      "READ",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40738",
      "PARAM",
      [
        "storage",
        "002a70af",
        null,
        "string"
      ]
    ],
    [
      "00b40754",
      "WRITE",
      [
        "storage",
        "01125330",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40728",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40738",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b40754",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b406b0 ["INT_ADD", "register:40f0:8", ["const:b406b0:8", "const:4:8"]]
- 00b406b0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4074c ["INT_ADD", "register:40f0:8", ["const:b4074c:8", "const:4:8"]]
+ 00b4074c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b406b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:330:8"]]
- 00b406b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b40754 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
+ 00b40754 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4068c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:330:8"]]
- 00b4068c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40728 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
+ 00b40728 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9dd7fa430290794ac4988a1ed108a571"></a>

### [`00b406e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b406e8.md) → [`00b40784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40784.md) _ZN8firebase9analytics9analytics10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b407a0",
      "incomplete_value": false,
      "site": "00b407a4",
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
            "const:54d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40704",
      "incomplete_value": false,
      "site": "00b40708",
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
            "const:51e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b407b0",
      "incomplete_value": true,
      "site": "00b407bc",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40714",
      "incomplete_value": true,
      "site": "00b40720",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
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
      "00b407a0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b407b0",
      "DATA",
      [
        "storage",
        "01125398",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b407a0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b407b0",
      "DATA",
      [
        "storage",
        "01125498",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40708 ["INT_ADD", "register:40f0:8", ["const:b40708:8", "const:4:8"]]
- 00b40708 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b407a4 ["INT_ADD", "register:40f0:8", ["const:b407a4:8", "const:4:8"]]
+ 00b407a4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40704 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b40704 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40704 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40704 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b407a0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b407a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b407a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b407a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40710 ["COPY", "tmp:0:8", ["const:398:8"]]
- 00b40710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b40710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b40710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b407ac ["COPY", "tmp:0:8", ["const:498:8"]]
+ 00b407ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b407ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b407ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2cdbd54e545dab848f00646b7f0a75ad"></a>

### [`00b40724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40724.md) → [`00b407c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b407c0.md) _ZN8firebase9analytics22analytics_consent_type19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b407ec",
      "incomplete_value": true,
      "site": "00b407ec",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40750",
      "incomplete_value": true,
      "site": "00b40750",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b407d4",
      "incomplete_value": true,
      "site": "00b407d4",
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
      "definition_site": "00b40738",
      "incomplete_value": true,
      "site": "00b40738",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b407e0",
      "incomplete_value": false,
      "site": "00b407e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:57b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40744",
      "incomplete_value": false,
      "site": "00b40748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:54a:8"
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
      "00b407d0",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b407e0",
      "PARAM",
      [
        "storage",
        "002b254a",
        null,
        "string"
      ]
    ],
    [
      "00b407ec",
      "WRITE",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b407d0",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b407e0",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b407ec",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40748 ["INT_ADD", "register:40f0:8", ["const:b40748:8", "const:4:8"]]
- 00b40748 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b407e4 ["INT_ADD", "register:40f0:8", ["const:b407e4:8", "const:4:8"]]
+ 00b407e4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40750 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b40750 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b407ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b407ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40734 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b40734 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b407d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b407d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b9d895a24e4fa455f9d4f4f40994c68c"></a>

### [`00b40764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40764.md) → [`00b40800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40800.md) _ZN8firebase9analytics22analytics_consent_type19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4082c",
      "incomplete_value": true,
      "site": "00b4082c",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40790",
      "incomplete_value": true,
      "site": "00b40790",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40814",
      "incomplete_value": true,
      "site": "00b40814",
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
      "definition_site": "00b40778",
      "incomplete_value": true,
      "site": "00b40778",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4081c",
      "incomplete_value": false,
      "site": "00b40824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:57b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40780",
      "incomplete_value": false,
      "site": "00b40788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:54a:8"
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
      "00b40810",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4081c",
      "PARAM",
      [
        "storage",
        "002b254a",
        null,
        "string"
      ]
    ],
    [
      "00b4082c",
      "WRITE",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40810",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4081c",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b4082c",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40788 ["INT_ADD", "register:40f0:8", ["const:b40788:8", "const:4:8"]]
- 00b40788 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40824 ["INT_ADD", "register:40f0:8", ["const:b40824:8", "const:4:8"]]
+ 00b40824 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40790 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b40790 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4082c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b4082c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40774 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b40774 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40810 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b40810 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-85e4adf69cb53e83d27c548bf036eda4"></a>

### [`00b407a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b407a4.md) → [`00b40840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40840.md) _ZN8firebase9analytics22analytics_consent_type10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40870",
      "incomplete_value": true,
      "site": "00b40870",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b407d4",
      "incomplete_value": true,
      "site": "00b407d4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40854",
      "incomplete_value": true,
      "site": "00b40854",
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
      "definition_site": "00b407b8",
      "incomplete_value": true,
      "site": "00b407b8",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40860",
      "incomplete_value": false,
      "site": "00b40868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:57b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b407c4",
      "incomplete_value": false,
      "site": "00b407cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:54a:8"
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
      "00b40850",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40860",
      "PARAM",
      [
        "storage",
        "002b254a",
        null,
        "string"
      ]
    ],
    [
      "00b40870",
      "WRITE",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40850",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40860",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b40870",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b407cc ["INT_ADD", "register:40f0:8", ["const:b407cc:8", "const:4:8"]]
- 00b407cc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40868 ["INT_ADD", "register:40f0:8", ["const:b40868:8", "const:4:8"]]
+ 00b40868 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b407d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b407d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b40870 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b40870 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b407b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b407b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40850 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b40850 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-04e686350d284f262f0635c00f731cc3"></a>

### [`00b407e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b407e8.md) → [`00b40884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40884.md) _ZN8firebase9analytics22analytics_consent_type10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b408b4",
      "incomplete_value": true,
      "site": "00b408b4",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40818",
      "incomplete_value": true,
      "site": "00b40818",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40898",
      "incomplete_value": true,
      "site": "00b40898",
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
      "definition_site": "00b407fc",
      "incomplete_value": true,
      "site": "00b407fc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b408a0",
      "incomplete_value": false,
      "site": "00b408ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:57b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40804",
      "incomplete_value": false,
      "site": "00b40810",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:54a:8"
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
      "00b40894",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b408a0",
      "PARAM",
      [
        "storage",
        "002b254a",
        null,
        "string"
      ]
    ],
    [
      "00b408b4",
      "WRITE",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40894",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b408a0",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b408b4",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40810 ["INT_ADD", "register:40f0:8", ["const:b40810:8", "const:4:8"]]
- 00b40810 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b408ac ["INT_ADD", "register:40f0:8", ["const:b408ac:8", "const:4:8"]]
+ 00b408ac ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40818 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b40818 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b408b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b408b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b407f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3a0:8"]]
- 00b407f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40894 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
+ 00b40894 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f39321d3a96f0989bd0731a530d2052"></a>

### [`00b40838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40838.md) → [`00b408d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b408d4.md) _ZN8firebase9analytics22analytics_consent_type15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4092c",
      "incomplete_value": true,
      "site": "00b4092c",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40890",
      "incomplete_value": true,
      "site": "00b40890",
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
            "const:3a8:8"
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
      "definition_site": "00b40908",
      "incomplete_value": true,
      "site": "00b40914",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4086c",
      "incomplete_value": true,
      "site": "00b40878",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:3a0:8"
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
      "00b408e8",
      "READ",
      [
        "storage",
        "011253a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40908",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4092c",
      "WRITE",
      [
        "storage",
        "011253a8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b408e8",
      "READ",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40908",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4092c",
      "WRITE",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40878 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40878 ["INT_ADD", "register:40f0:8", ["const:b40878:8", "const:4:8"]]
- 00b40878 ["CALLIND", null, ["register:0:8"]]
+ 00b40914 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b40914 ["INT_ADD", "register:40f0:8", ["const:b40914:8", "const:4:8"]]
+ 00b40914 ["CALLIND", null, ["register:0:8"]]
- 00b40890 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b40890 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:3a8:8"]]
- 00b40890 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4092c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4092c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:4a8:8"]]
+ 00b4092c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4084c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:3a8:8"]]
- 00b4084c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4084c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b408e8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:4a8:8"]]
+ 00b408e8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b408e8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e68d3794ffc36e84f534217a175367ef"></a>

### [`00b408a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b408a4.md) → [`00b40940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40940.md) _ZN8firebase9analytics22analytics_consent_type12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 35.71% / 新版 35.71%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40958",
      "incomplete_value": true,
      "site": "00b40958",
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
      "definition_site": "00b408bc",
      "incomplete_value": true,
      "site": "00b408bc",
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
      "unmatched:00b408a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b408a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b408ac",
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
      "00b40940",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b40944",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b40948",
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
- 00b408bc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b408bc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b40958 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b40958 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00b408a4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b408a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b408a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b408a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b408a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b408a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b408a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9905c9a8273fb8abc501048e8354a29d"></a>

### [`00b40914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40914.md) → [`00b409b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b409b0.md) _ZN8firebase9analytics22analytics_consent_type14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b40914",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40918",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40928",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b409b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b409b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b409c4",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40914 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b40914 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b40914 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b40914 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40918 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40918 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40918 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40918 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b4091c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b4091c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b4091c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b4091c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e4283b273f5a0667e7349681385caa88"></a>

### [`00b40984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40984.md) → [`00b40a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40a20.md) _ZN8firebase9analytics22analytics_consent_type11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 13.33% / 新版 13.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b40984",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40988",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40998",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40a44"
      ]
    ]
  ],
  "added": [
    [
      "00b40a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b40a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40a44"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40984 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b40984 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b40984 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40988 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40988 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40988 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40988 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b4098c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b4098c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b4098c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b4098c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-94fb620e50174740bad1cd401c76ecc3"></a>

### [`00b409c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b409c0.md) → [`00b40a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40a5c.md) _ZN8firebase9analytics22analytics_consent_type13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b409d4",
      "READ",
      [
        "storage",
        "011253a0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b409dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40aa0"
      ]
    ],
    [
      "unmatched:00b409e4",
      "PARAM",
      [
        "storage",
        "002b254a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40a70",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40a78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40aa0"
      ]
    ],
    [
      "00b40a80",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b409d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3a0:8"]]
- 00b409d4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b409d8 ["COPY", "register:4098:8", ["register:4000:8"]]
- 00b409dc ["INT_NOTEQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b409dc ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-6be8dafc853ca897f7f8804a5555f65b"></a>

### [`00b40a30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40a30.md) → [`00b40acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40acc.md) _ZN8firebase9analytics22analytics_consent_type10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b40ae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b40a54"
      ]
    ],
    [
      "unmatched:00b40a4c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b40a50",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b40ae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40af0"
      ]
    ],
    [
      "00b40ae8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b40aec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40a4c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b40a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40a50 ["INT_ADD", "register:40f0:8", ["const:b40a50:8", "const:4:8"]]
- 00b40a50 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40a54 ["COPY", "register:4040:8", ["const:1125000:8"]]
~~~


<a id="compare-c380e30221d5e15a4965eda11845152d"></a>

### [`00b40a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40a6c.md) → [`00b40b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b08.md) _ZN8firebase9analytics24analytics_consent_status19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b40aa0",
      "incomplete_value": true,
      "site": "00b40aa8",
      "value": [
        "live",
        "register:4040:8"
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
      "00b40b18",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b40a80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40b38"
      ]
    ],
    [
      "unmatched:00b40a8c",
      "PARAM",
      [
        "storage",
        "002a3a35",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40b18",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40b1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40b38"
      ]
    ],
    [
      "00b40b28",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40a7c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3d8:8"]]
- 00b40a7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40b18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
+ 00b40b18 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b40a80 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b40a80 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b40a84 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-d22898bbeb873c419aff46dc7916e197"></a>

### [`00b40aac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40aac.md) → [`00b40b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b48.md) _ZN8firebase9analytics24analytics_consent_status19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b40aac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40ab0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40abc",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40b48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b40b4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40b58",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40aac ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b40aac ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b40aac ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40ab0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40ab0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40ab0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40ab0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b40ab4 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b40ab4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b40ab4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b40ab4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f0a03d202be1e83673219d7abd74a716"></a>

### [`00b40aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40aec.md) → [`00b40b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b88.md) _ZN8firebase9analytics24analytics_consent_status10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40b9c",
      "incomplete_value": true,
      "site": "00b40b9c",
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
      "definition_site": "00b40b00",
      "incomplete_value": true,
      "site": "00b40b00",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b40aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b40af0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40b98",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b40b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b40b98",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40b00 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b40b00 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b40b9c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b40b9c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b40aec ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b40aec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b40aec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b40af0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b40af0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b40af0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b40af0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-140c84d007588ca9b22854ce4fea7cf2"></a>

### [`00b40b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40b30.md) → [`00b40bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40bcc.md) _ZN8firebase9analytics24analytics_consent_status10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40bfc",
      "incomplete_value": true,
      "site": "00b40bfc",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b60",
      "incomplete_value": true,
      "site": "00b40b60",
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
            "const:3d8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40be0",
      "incomplete_value": true,
      "site": "00b40be0",
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
      "definition_site": "00b40b44",
      "incomplete_value": true,
      "site": "00b40b44",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40be8",
      "incomplete_value": false,
      "site": "00b40bf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b4c",
      "incomplete_value": false,
      "site": "00b40b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:a35:8"
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
      "00b40bdc",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40be8",
      "PARAM",
      [
        "storage",
        "002a3a35",
        null,
        "string"
      ]
    ],
    [
      "00b40bfc",
      "WRITE",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40bdc",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40be8",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b40bfc",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40b58 ["INT_ADD", "register:40f0:8", ["const:b40b58:8", "const:4:8"]]
- 00b40b58 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40bf4 ["INT_ADD", "register:40f0:8", ["const:b40bf4:8", "const:4:8"]]
+ 00b40bf4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40b60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3d8:8"]]
- 00b40b60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b40bfc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
+ 00b40bfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40b40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3d8:8"]]
- 00b40b40 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40bdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
+ 00b40bdc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-10901e5014dc340680d2230d6f1e77e7"></a>

### [`00b40b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40b80.md) → [`00b40c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40c1c.md) _ZN8firebase9analytics24analytics_consent_status15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40c74",
      "incomplete_value": true,
      "site": "00b40c74",
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
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40bd8",
      "incomplete_value": true,
      "site": "00b40bd8",
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
            "const:3e0:8"
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
      "definition_site": "00b40c50",
      "incomplete_value": true,
      "site": "00b40c5c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40bb4",
      "incomplete_value": true,
      "site": "00b40bc0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:3d8:8"
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
      "00b40c30",
      "READ",
      [
        "storage",
        "011253e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40c50",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40c74",
      "WRITE",
      [
        "storage",
        "011253e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b40c30",
      "READ",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40c50",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40c74",
      "WRITE",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40bc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40bc0 ["INT_ADD", "register:40f0:8", ["const:b40bc0:8", "const:4:8"]]
- 00b40bc0 ["CALLIND", null, ["register:0:8"]]
+ 00b40c5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b40c5c ["INT_ADD", "register:40f0:8", ["const:b40c5c:8", "const:4:8"]]
+ 00b40c5c ["CALLIND", null, ["register:0:8"]]
- 00b40bd8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b40bd8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:3e0:8"]]
- 00b40bd8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b40c74 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b40c74 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:4e0:8"]]
+ 00b40c74 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b40b94 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:3e0:8"]]
- 00b40b94 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b40b94 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b40c30 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:4e0:8"]]
+ 00b40c30 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b40c30 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e25fca93416ec09c84cea502ad35fc09"></a>

### [`00b40bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40bec.md) → [`00b40c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40c88.md) _ZN8firebase9analytics24analytics_consent_status12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40cc4",
      "incomplete_value": true,
      "site": "00b40cc4",
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
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c28",
      "incomplete_value": true,
      "site": "00b40c28",
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
            "const:3e0:8"
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
      "definition_site": "00b40ce4",
      "incomplete_value": true,
      "site": "00b40ce4",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c48",
      "incomplete_value": true,
      "site": "00b40c48",
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
            "const:3d8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40ca0",
      "incomplete_value": true,
      "site": "00b40ca0",
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
      "definition_site": "00b40c04",
      "incomplete_value": true,
      "site": "00b40c04",
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
      "00b40c9c",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40ca8",
      "READ",
      [
        "storage",
        "011253e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40cc4",
      "WRITE",
      [
        "storage",
        "011253e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b40c9c",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40ca8",
      "READ",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b40cc4",
      "WRITE",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40c28 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b40c28 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b40c28 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:3e0:8"]]
- 00b40c28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b40cc4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b40cc4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b40cc4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:4e0:8"]]
+ 00b40cc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b40c44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40c44 ["INT_ADD", "register:40f0:8", ["const:b40c44:8", "const:4:8"]]
- 00b40c44 ["CALLIND", null, ["register:0:8"]]
+ 00b40ce0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b40ce0 ["INT_ADD", "register:40f0:8", ["const:b40ce0:8", "const:4:8"]]
+ 00b40ce0 ["CALLIND", null, ["register:0:8"]]
- 00b40c48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3d8:8"]]
- 00b40c48 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b40c48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b40ce4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
+ 00b40ce4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b40ce4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ccdb37db87d63459540b2c23d141a073"></a>

### [`00b40c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40c5c.md) → [`00b40cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40cf8.md) _ZN8firebase9analytics24analytics_consent_status14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b40d38",
      "incomplete_value": true,
      "site": "00b40d38",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c9c",
      "incomplete_value": true,
      "site": "00b40c9c",
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
            "const:3d8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40d14",
      "incomplete_value": true,
      "site": "00b40d14",
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
      "definition_site": "00b40c78",
      "incomplete_value": true,
      "site": "00b40c78",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40d1c",
      "incomplete_value": false,
      "site": "00b40d30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c80",
      "incomplete_value": false,
      "site": "00b40c94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:a35:8"
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
      "00b40d0c",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40d1c",
      "PARAM",
      [
        "storage",
        "002a3a35",
        null,
        "string"
      ]
    ],
    [
      "00b40d38",
      "WRITE",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40d0c",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40d1c",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b40d38",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40c94 ["INT_ADD", "register:40f0:8", ["const:b40c94:8", "const:4:8"]]
- 00b40c94 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40d30 ["INT_ADD", "register:40f0:8", ["const:b40d30:8", "const:4:8"]]
+ 00b40d30 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40c9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3d8:8"]]
- 00b40c9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b40d38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
+ 00b40d38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40c70 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3d8:8"]]
- 00b40c70 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40d0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
+ 00b40d0c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-59c4ebb1eb0846955cbba4772cfb1c45"></a>

### [`00b40ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40ccc.md) → [`00b40d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40d68.md) _ZN8firebase9analytics24analytics_consent_status11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40d84",
      "incomplete_value": false,
      "site": "00b40d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:30b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40ce8",
      "incomplete_value": false,
      "site": "00b40cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:367:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b40d94",
      "incomplete_value": true,
      "site": "00b40da0",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40cf8",
      "incomplete_value": true,
      "site": "00b40d04",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
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
      "00b40d84",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b40d94",
      "DATA",
      [
        "storage",
        "011253e8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b40d84",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b40d94",
      "DATA",
      [
        "storage",
        "011254e8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40cec ["INT_ADD", "register:40f0:8", ["const:b40cec:8", "const:4:8"]]
- 00b40cec ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b40d88 ["INT_ADD", "register:40f0:8", ["const:b40d88:8", "const:4:8"]]
+ 00b40d88 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40ce8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b40ce8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40ce8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40ce8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b40d84 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b40d84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40d84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40d84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40cf4 ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 00b40cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b40cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b40cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b40d90 ["COPY", "tmp:0:8", ["const:4e8:8"]]
+ 00b40d90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40d90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40d90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-deb39d565822841c4155c0b207dcfce4"></a>

### [`00b40d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40d08.md) → [`00b40da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40da4.md) _ZN8firebase9analytics24analytics_consent_status13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40dc8",
      "incomplete_value": false,
      "site": "00b40ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40d2c",
      "incomplete_value": false,
      "site": "00b40d40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:a35:8"
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
      "unmatched:00b40d1c",
      "READ",
      [
        "storage",
        "011253d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b40d24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40de8"
      ]
    ],
    [
      "unmatched:00b40d2c",
      "PARAM",
      [
        "storage",
        "002a3a35",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b40db8",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40dc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b40de8"
      ]
    ],
    [
      "00b40dc8",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40d40 ["INT_ADD", "register:40f0:8", ["const:b40d40:8", "const:4:8"]]
- 00b40d40 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b40ddc ["INT_ADD", "register:40f0:8", ["const:b40ddc:8", "const:4:8"]]
+ 00b40ddc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b40d1c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3d8:8"]]
- 00b40d1c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b40d20 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-9ed7b6772b205c4cd526237cf14af0e3"></a>

### [`00b40d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40d78.md) → [`00b40e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40e14.md) _ZN8firebase9analytics24analytics_consent_status10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40e30",
      "incomplete_value": false,
      "site": "00b40e34",
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
            "const:54d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40d94",
      "incomplete_value": false,
      "site": "00b40d98",
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
            "const:51e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b40e40",
      "incomplete_value": true,
      "site": "00b40e4c",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40da4",
      "incomplete_value": true,
      "site": "00b40db0",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
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
      "00b40e30",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b40e40",
      "DATA",
      [
        "storage",
        "011253f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40e30",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b40e40",
      "DATA",
      [
        "storage",
        "011254f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40d98 ["INT_ADD", "register:40f0:8", ["const:b40d98:8", "const:4:8"]]
- 00b40d98 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b40e34 ["INT_ADD", "register:40f0:8", ["const:b40e34:8", "const:4:8"]]
+ 00b40e34 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40d94 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b40d94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40d94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40d94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b40e30 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b40e30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40e30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b40e30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40da0 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00b40da0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b40da0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b40da0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b40e3c ["COPY", "tmp:0:8", ["const:4f0:8"]]
+ 00b40e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d6f9cf864ff9b6defb617a31a68cfcbf"></a>

### [`00b40db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b40db4.md) → [`00b40e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40e50.md) _ZN8firebase9analytics10InitializeERKNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a960.md) · 呼出先 13件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5acc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acc0.md) [`00c5acf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acf0.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aea0.md)
- 新版 呼出元 1件 [`00c5aa30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa30.md) · 呼出先 13件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad90.md) [`00c5adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adc0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 46.56% / 新版 46.56%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40e70",
      "incomplete_value": true,
      "site": "00b40e70",
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
      "definition_site": "00b40dd4",
      "incomplete_value": true,
      "site": "00b40dd4",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b40eb8",
      "incomplete_value": true,
      "site": "00b40eb8",
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
      "definition_site": "00b40e1c",
      "incomplete_value": true,
      "site": "00b40e1c",
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
      "definition_site": "00b40ea8",
      "incomplete_value": false,
      "site": "00b40eac",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40e0c",
      "incomplete_value": false,
      "site": "00b40e10",
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
            "const:9f4:8"
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
      "00b40e6c",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40e78",
      "READ",
      [
        "storage",
        "00c9b6a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b40e88",
      "READ",
      [
        "storage",
        "00ca4630",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b40e6c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40e78",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b40e88",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40e10 ["INT_ADD", "register:40f0:8", ["const:b40e10:8", "const:4:8"]]
- 00b40e10 ["CALL", null, ["callee:00c5b0b0:8"]]
+ 00b40eac ["INT_ADD", "register:40f0:8", ["const:b40eac:8", "const:4:8"]]
+ 00b40eac ["CALL", null, ["callee:00c5b0b0:8"]]
- 00b40e28 ["INT_ADD", "register:40f0:8", ["const:b40e28:8", "const:4:8"]]
- 00b40e28 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b40ec4 ["INT_ADD", "register:40f0:8", ["const:b40ec4:8", "const:4:8"]]
+ 00b40ec4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b40e70 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:330:8"]]
- 00b40e70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-d2f4e1bcd6ac694167e09d0b857930ab"></a>

### [`00b410a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b410a8.md) → [`00b41144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41144.md) _ZN7_JNIEnv22CallStaticObjectMethodEP7_jclassP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b411ac",
      "incomplete_value": true,
      "site": "00b411b8",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41110",
      "incomplete_value": true,
      "site": "00b4111c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:110:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:60:8"
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
      "unmatched:00b41100",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4110c",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b41118",
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
      "00b4119c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b411a8",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b411b4",
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
- 00b4111c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4111c ["INT_ADD", "register:40f0:8", ["const:b4111c:8", "const:4:8"]]
- 00b4111c ["CALLIND", null, ["register:0:8"]]
+ 00b411b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b411b8 ["INT_ADD", "register:40f0:8", ["const:b411b8:8", "const:4:8"]]
+ 00b411b8 ["CALLIND", null, ["register:0:8"]]
- 00b41100 ["COPY", "tmp:0:8", ["register:4060:8"]]
- 00b41100 ["COPY", "tmp:1:8", ["register:4050:8"]]
- 00b41100 ["INT_ADD", "tmp:2:8", ["register:40e8:8", "const:ffffffffffffffc8:8"]]
- 00b41100 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b41104 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00b41104 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dff04161f7b68a9a3c5011cb5e59e75e"></a>

### [`00b41144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41144.md) → [`00b411e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b411e0.md) _ZN8firebase9analytics8internal13IsInitializedEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ace0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ace0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adb0.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b41148",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b411e4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41144 ["COPY", "register:4040:8", ["const:1125000:8"]]
- 00b41148 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b41148 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4114c ["COPY", "tmp:0:8", ["const:0:8"]]
- 00b4114c ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 00b4114c ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4114c ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c6051448732b49efee1e0036e06b164"></a>

### [`00b41158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41158.md) → [`00b411f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b411f4.md) _ZN8firebase9analytics9TerminateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a940.md) · 呼出先 7件 [`00c5acd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acd0.md) [`00c5ad00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad00.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5af00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af00.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) · 呼出先 7件 [`00c5ada0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ada0.md) [`00c5add0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5add0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 40.43% / 新版 40.43%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4120c",
      "incomplete_value": true,
      "site": "00b4120c",
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
      "definition_site": "00b41170",
      "incomplete_value": true,
      "site": "00b41170",
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
    "new": null,
    "old": {
      "definition_site": "00b41184",
      "incomplete_value": true,
      "site": "00b41188",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4123c",
      "incomplete_value": true,
      "site": "00b41248",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b411a0",
      "incomplete_value": true,
      "site": "00b411ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
              ]
            ]
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
      "00b41208",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41218",
      "READ",
      [
        "storage",
        "00c9b6a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b41220",
      "READ",
      [
        "storage",
        "00ca4630",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b41208",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41218",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b41220",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41170 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b41170 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00b4120c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b4120c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 00b41188 ["INT_ADD", "register:40f0:8", ["const:b41188:8", "const:4:8"]]
- 00b41188 ["CALL", null, ["callee:00c5afd0:8"]]
+ 00b41224 ["INT_ADD", "register:40f0:8", ["const:b41224:8", "const:4:8"]]
+ 00b41224 ["CALL", null, ["callee:00c5afd0:8"]]
- 00b411ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00b411ac ["INT_ADD", "register:40f0:8", ["const:b411ac:8", "const:4:8"]]
- 00b411ac ["CALLIND", null, ["register:0:8"]]
+ 00b41248 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41248 ["INT_ADD", "register:40f0:8", ["const:b41248:8", "const:4:8"]]
+ 00b41248 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-213aee6d00861e6a40b29ed42336baf7"></a>

### [`00b412d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b412d0.md) → [`00b4136c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b4136c.md) _ZN8firebase9analytics29SetAnalyticsCollectionEnabledEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b41380",
      "incomplete_value": true,
      "site": "00b41380",
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
      "definition_site": "00b412e4",
      "incomplete_value": true,
      "site": "00b412e4",
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
      "definition_site": "00b41398",
      "incomplete_value": true,
      "site": "00b413a8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b412fc",
      "incomplete_value": true,
      "site": "00b4130c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
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
      "definition_site": "00b4139c",
      "incomplete_value": true,
      "site": "00b413a8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:440:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41300",
      "incomplete_value": true,
      "site": "00b4130c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:340:8"
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
      "00b4137c",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41398",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4139c",
      "READ",
      [
        "storage",
        "01125340",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4137c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41398",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4139c",
      "READ",
      [
        "storage",
        "01125440",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4130c ["INT_ADD", "register:40f0:8", ["const:b4130c:8", "const:4:8"]]
- 00b4130c ["CALL", null, ["callee:00574d2c:8"]]
+ 00b413a8 ["INT_ADD", "register:40f0:8", ["const:b413a8:8", "const:4:8"]]
+ 00b413a8 ["CALL", null, ["callee:00574d2c:8"]]
- 00b412e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b412e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4137c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 00b4137c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b412f0 ["INT_ADD", "register:40f0:8", ["const:b412f0:8", "const:4:8"]]
- 00b412f0 ["CALL", null, ["callee:00c5b150:8"]]
+ 00b4138c ["INT_ADD", "register:40f0:8", ["const:b4138c:8", "const:4:8"]]
+ 00b4138c ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-b1e8ae74f004893ac722ba13a2a995ee"></a>

### [`00b41334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41334.md) → [`00b413d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b413d0.md) _ZN8firebase9analytics10SetConsentERKNSt6__ndk13mapINS0_11ConsentTypeENS0_13ConsentStatusENS1_4lessIS3_EENS1_9allocatorINS1_4pairIKS3_S4_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5aee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aee0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5afb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afb0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.62% / 新版 58.62%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b413f4",
      "incomplete_value": true,
      "site": "00b413f4",
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
      "definition_site": "00b41358",
      "incomplete_value": true,
      "site": "00b41358",
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
    "new": null,
    "old": {
      "definition_site": "00b41384",
      "incomplete_value": true,
      "site": "00b41388",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b414e8",
      "incomplete_value": true,
      "site": "00b414f0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 13,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b41334",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b41338",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4133c",
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
      "00b413d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b413d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b413d8",
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
- 00b41358 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b41358 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b413f4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b413f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b41388 ["INT_ADD", "register:40f0:8", ["const:b41388:8", "const:4:8"]]
- 00b41388 ["CALL", null, ["callee:00589734:8"]]
+ 00b41424 ["INT_ADD", "register:40f0:8", ["const:b41424:8", "const:4:8"]]
+ 00b41424 ["CALL", null, ["callee:00589734:8"]]
- 00b414f0 ["INT_ADD", "register:40f0:8", ["const:b414f0:8", "const:4:8"]]
- 00b414f0 ["CALL", null, ["callee:00c5afb0:8"]]
+ 00b4158c ["INT_ADD", "register:40f0:8", ["const:b4158c:8", "const:4:8"]]
+ 00b4158c ["CALL", null, ["callee:00c5afb0:8"]]
~~~


<a id="compare-31fd6f75869184dabdeebf57ceed4d86"></a>

### [`00b416d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b416d4.md) → [`00b41770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41770.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.56% / 新版 97.56%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b41754",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b417f0",
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
- 00b416fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b416fc ["INT_ADD", "register:40f0:8", ["const:b416fc:8", "const:4:8"]]
- 00b416fc ["CALLIND", null, ["register:0:8"]]
+ 00b41798 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41798 ["INT_ADD", "register:40f0:8", ["const:b41798:8", "const:4:8"]]
+ 00b41798 ["CALLIND", null, ["register:0:8"]]
- 00b41714 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41714 ["INT_ADD", "register:40f0:8", ["const:b41714:8", "const:4:8"]]
- 00b41714 ["CALLIND", null, ["register:0:8"]]
+ 00b417b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b417b0 ["INT_ADD", "register:40f0:8", ["const:b417b0:8", "const:4:8"]]
+ 00b417b0 ["CALLIND", null, ["register:0:8"]]
- 00b41720 ["INT_ADD", "register:40f0:8", ["const:b41720:8", "const:4:8"]]
- 00b41720 ["CALL", null, ["callee:00c5b060:8"]]
+ 00b417bc ["INT_ADD", "register:40f0:8", ["const:b417bc:8", "const:4:8"]]
+ 00b417bc ["CALL", null, ["callee:00c5b060:8"]]
~~~


<a id="compare-d70a2b067a96e9d08c4212b6a208a747"></a>

### [`00b41778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41778.md) → [`00b41814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41814.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b417c0",
      "incomplete_value": true,
      "site": "00b417c8",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b417e8",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b417ec",
      "READ",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b417a4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b41884",
      "READ",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b41888",
      "READ",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b41840",
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
- 00b417c8 ["INT_ADD", "register:40f0:8", ["const:b417c8:8", "const:4:8"]]
- 00b417c8 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b41864 ["INT_ADD", "register:40f0:8", ["const:b41864:8", "const:4:8"]]
+ 00b41864 ["CALL", null, ["callee:00574d2c:8"]]
- 00b4179c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:538:8"]]
- 00b4179c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b417a0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2bc49870da8a94dd1088aac67d8d2266"></a>

### [`00b417f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b417f8.md) → [`00b41894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41894.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b418c4",
      "incomplete_value": false,
      "site": "00b418c8",
      "value": [
        "leaf",
        "const:5:8"
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
      "unmatched:00b417f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b417fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b41800",
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
      "00b41894",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b41898",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4189c",
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
- 00b4182c ["INT_ADD", "register:40f0:8", ["const:b4182c:8", "const:4:8"]]
- 00b4182c ["CALL", null, ["callee:00c5b060:8"]]
+ 00b418c8 ["INT_ADD", "register:40f0:8", ["const:b418c8:8", "const:4:8"]]
+ 00b418c8 ["CALL", null, ["callee:00c5b060:8"]]
- 00b417f8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b417f8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b417f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b417f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b417fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b417fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b417fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b417fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0014fb973e7412a3dcd93aa0bd1571b8"></a>

### [`00b41870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41870.md) → [`00b4190c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b4190c.md) _ZN8firebase9analytics20AddArrayListToBundleEP7_JNIEnvP8_jobjectPKcS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_argument_candidate, call_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.67% / 新版 96.67%

アドレスに依存する影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b418ac",
      "incomplete_value": true,
      "site": "00b418bc",
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
      "definition_site": "00b418b0",
      "incomplete_value": true,
      "site": "00b418bc",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00b418a8",
      "incomplete_value": true,
      "site": "00b418bc",
      "value": [
        "live",
        "register:4000:8"
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
      "unmatched:00b41898",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b41934",
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
- 00b418bc ["INT_ADD", "register:40f0:8", ["const:b418bc:8", "const:4:8"]]
- 00b418bc ["CALL", null, ["callee:00574d2c:8"]]
+ 00b41958 ["INT_ADD", "register:40f0:8", ["const:b41958:8", "const:4:8"]]
+ 00b41958 ["CALL", null, ["callee:00574d2c:8"]]
- 00b41898 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41898 ["INT_ADD", "register:40f0:8", ["const:b41898:8", "const:4:8"]]
- 00b41898 ["CALLIND", null, ["register:0:8"]]
- 00b418a4 ["INT_ADD", "register:40f0:8", ["const:b418a4:8", "const:4:8"]]
- 00b418a4 ["CALL", null, ["callee:00c5b060:8"]]
+ 00b41940 ["INT_ADD", "register:40f0:8", ["const:b41940:8", "const:4:8"]]
+ 00b41940 ["CALL", null, ["callee:00c5b060:8"]]
~~~


<a id="compare-8c94c81d2877fa3fca85f6074aaaa0dc"></a>

### [`00b418e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b418e8.md) → [`00b41984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41984.md) _ZN8firebase9analytics17AddBundleToBundleEP7_JNIEnvP8_jobjectPKcS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b41910",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b419ac",
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
- 00b41908 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:538:8"]]
- 00b41908 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4190c ["COPY", "register:40a0:8", ["register:4000:8"]]
- 00b41910 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41910 ["INT_ADD", "register:40f0:8", ["const:b41910:8", "const:4:8"]]
- 00b41910 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e0778a9153d86721c381fa45a0a073b7"></a>

### [`00b41960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41960.md) → [`00b419fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b419fc.md) _ZN8firebase9analytics23VectorOfMapsToArrayListEP7_JNIEnvRKNSt6__ndk16vectorINS_7VariantENS3_9allocatorIS5_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b030.md) · 呼出先 9件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5ab00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab00.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5aeb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aeb0.md)
- 新版 呼出元 1件 [`00c5b100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b100.md) · 呼出先 9件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5af80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b419ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41ae4"
      ]
    ],
    [
      "00b41a6c",
      "PARAM",
      [
        "storage",
        "002a4d18",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b41a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41ae4"
      ]
    ],
    [
      "00b41a6c",
      "PARAM",
      [
        "storage",
        "002a4cbc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41980 ["INT_ADD", "register:40f0:8", ["const:b41980:8", "const:4:8"]]
- 00b41980 ["CALL", null, ["callee:00c5af90:8"]]
+ 00b41a1c ["INT_ADD", "register:40f0:8", ["const:b41a1c:8", "const:4:8"]]
+ 00b41a1c ["CALL", null, ["callee:00c5af90:8"]]
- 00b4198c ["INT_ADD", "register:40f0:8", ["const:b4198c:8", "const:4:8"]]
- 00b4198c ["CALL", null, ["callee:00c5af80:8"]]
+ 00b41a28 ["INT_ADD", "register:40f0:8", ["const:b41a28:8", "const:4:8"]]
+ 00b41a28 ["CALL", null, ["callee:00c5af80:8"]]
- 00b4199c ["INT_ADD", "register:40f0:8", ["const:b4199c:8", "const:4:8"]]
- 00b4199c ["CALL", null, ["callee:00589734:8"]]
+ 00b41a38 ["INT_ADD", "register:40f0:8", ["const:b41a38:8", "const:4:8"]]
+ 00b41a38 ["CALL", null, ["callee:00589734:8"]]
~~~


<a id="compare-3f1c4c7db6bf723497cb0bf79ab00a7a"></a>

### [`00b41a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41a64.md) → [`00b41b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41b00.md) _ZN8firebase9analytics11MapToBundleEP7_JNIEnvRKNSt6__ndk13mapINS_7VariantES5_NS3_4lessIS5_EENS3_9allocatorINS3_4pairIKS5_S5_EEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b010.md) · 呼出先 8件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5ab20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab20.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 1件 [`00c5b0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0e0.md) · 呼出先 8件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 82.88% / 新版 82.88%

優先判定に残った影響 `unresolved_branch_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b41ba4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b41b20"
      ]
    ],
    [
      "unmatched:00b41b14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41bd0"
      ]
    ],
    [
      "unmatched:00b41b1c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41bd4"
      ]
    ]
  ],
  "added": [
    [
      "00b41ba4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41bbc"
      ]
    ],
    [
      "00b41bb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41bd0"
      ]
    ],
    [
      "00b41bb8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b41bd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41a88 ["INT_ADD", "register:40f0:8", ["const:b41a88:8", "const:4:8"]]
- 00b41a88 ["CALL", null, ["callee:00c5b070:8"]]
+ 00b41b24 ["INT_ADD", "register:40f0:8", ["const:b41b24:8", "const:4:8"]]
+ 00b41b24 ["CALL", null, ["callee:00c5b070:8"]]
- 00b41a94 ["INT_ADD", "register:40f0:8", ["const:b41a94:8", "const:4:8"]]
- 00b41a94 ["CALL", null, ["callee:00c5b060:8"]]
+ 00b41b30 ["INT_ADD", "register:40f0:8", ["const:b41b30:8", "const:4:8"]]
+ 00b41b30 ["CALL", null, ["callee:00c5b060:8"]]
- 00b41aa4 ["INT_ADD", "register:40f0:8", ["const:b41aa4:8", "const:4:8"]]
- 00b41aa4 ["CALL", null, ["callee:00589734:8"]]
+ 00b41b40 ["INT_ADD", "register:40f0:8", ["const:b41b40:8", "const:4:8"]]
+ 00b41b40 ["CALL", null, ["callee:00589734:8"]]
~~~


<a id="compare-f35b267b29bc5e165816b01ceabcf97a"></a>

### [`00b41c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41c20.md) → [`00b41cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41cbc.md) _ZN8firebase9analytics18AddVariantToBundleEP7_JNIEnvP8_jobjectPKcRKNS_7VariantE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b020.md) · 呼出先 7件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5ab00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab00.md) [`00c5ab20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab20.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 1件 [`00c5b0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0f0.md) · 呼出先 7件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 84.31% / 新版 84.31%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_call_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b41d1c",
      "incomplete_value": true,
      "site": "00b41d2c",
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
      "definition_site": "00b41d18",
      "incomplete_value": true,
      "site": "00b41d2c",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b41d54",
      "incomplete_value": true,
      "site": "00b41d58",
      "value": [
        "live",
        "register:40b8:8"
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
      "00b41cf0",
      "DATA",
      [
        "storage",
        "0030b599",
        "switchD_00b41c6c::switchdataD_0030b599",
        "byte"
      ]
    ],
    [
      "unmatched:00b41d14",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b060"
      ]
    ],
    [
      "unmatched:00b41da4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5abd0"
      ]
    ]
  ],
  "added": [
    [
      "00b41cf0",
      "DATA",
      [
        "storage",
        "0030b5d9",
        "switchD_00b41d08::switchdataD_0030b5d9",
        "byte"
      ]
    ],
    [
      "00b41db0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b060"
      ]
    ],
    [
      "00b41e64",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b060"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41cbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41cbc ["INT_ADD", "register:40f0:8", ["const:b41cbc:8", "const:4:8"]]
- 00b41cbc ["CALLIND", null, ["register:0:8"]]
+ 00b41d58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41d58 ["INT_ADD", "register:40f0:8", ["const:b41d58:8", "const:4:8"]]
+ 00b41d58 ["CALLIND", null, ["register:0:8"]]
- 00b41d2c ["INT_ADD", "register:40f0:8", ["const:b41d2c:8", "const:4:8"]]
- 00b41d2c ["CALL", null, ["callee:00574d2c:8"]]
+ 00b41dc8 ["INT_ADD", "register:40f0:8", ["const:b41dc8:8", "const:4:8"]]
+ 00b41dc8 ["CALL", null, ["callee:00574d2c:8"]]
- 00b41d58 ["INT_ADD", "register:40f0:8", ["const:b41d58:8", "const:4:8"]]
- 00b41d58 ["CALL", null, ["callee:00c5abd0:8"]]
+ 00b41df4 ["INT_ADD", "register:40f0:8", ["const:b41df4:8", "const:4:8"]]
+ 00b41df4 ["CALL", null, ["callee:00c5abd0:8"]]
~~~


<a id="compare-f10bb55663dd7c8c96065d0afb6138de"></a>

### [`00b41f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b41/00b41f50.md) → [`00b41fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41fec.md) _ZN8firebase9analytics8LogEventEPKcS2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.88% / 新版 95.88%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42008",
      "incomplete_value": true,
      "site": "00b42008",
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
      "definition_site": "00b41f6c",
      "incomplete_value": true,
      "site": "00b41f6c",
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
      "definition_site": "00b420e4",
      "incomplete_value": true,
      "site": "00b420fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42048",
      "incomplete_value": true,
      "site": "00b42060",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b420e8",
      "incomplete_value": true,
      "site": "00b420fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4204c",
      "incomplete_value": true,
      "site": "00b42060",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:350:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b42004",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b420e4",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b420e8",
      "READ",
      [
        "storage",
        "01125350",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42004",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b420e4",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b420e8",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41fe0 ["INT_ADD", "register:40f0:8", ["const:b41fe0:8", "const:4:8"]]
- 00b41fe0 ["CALL", null, ["callee:00c5b060:8"]]
+ 00b4207c ["INT_ADD", "register:40f0:8", ["const:b4207c:8", "const:4:8"]]
+ 00b4207c ["CALL", null, ["callee:00c5b060:8"]]
- 00b42060 ["INT_ADD", "register:40f0:8", ["const:b42060:8", "const:4:8"]]
- 00b42060 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b420fc ["INT_ADD", "register:40f0:8", ["const:b420fc:8", "const:4:8"]]
+ 00b420fc ["CALL", null, ["callee:00574d2c:8"]]
- 00b4207c ["INT_ADD", "register:40f0:8", ["const:b4207c:8", "const:4:8"]]
- 00b4207c ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b42118 ["INT_ADD", "register:40f0:8", ["const:b42118:8", "const:4:8"]]
+ 00b42118 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-315bd4e42ede2df365faa7806583540e"></a>

### [`00b420d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b420d4.md) → [`00b42170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42170.md) _ZN8firebase9analytics8LogEventEPKcS2_d

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_value, call, call_argument_candidate, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4218c",
      "incomplete_value": true,
      "site": "00b4218c",
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
      "definition_site": "00b420f0",
      "incomplete_value": true,
      "site": "00b420f0",
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
    "new": null,
    "old": {
      "definition_site": "00b42148",
      "incomplete_value": false,
      "site": "00b4214c",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4223c",
      "incomplete_value": true,
      "site": "00b42254",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b421a0",
      "incomplete_value": true,
      "site": "00b421b8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "00b42188",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4223c",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42240",
      "READ",
      [
        "storage",
        "01125350",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42188",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4223c",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42240",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4214c ["INT_ADD", "register:40f0:8", ["const:b4214c:8", "const:4:8"]]
- 00b4214c ["CALL", null, ["callee:00c5b060:8"]]
+ 00b421e8 ["INT_ADD", "register:40f0:8", ["const:b421e8:8", "const:4:8"]]
+ 00b421e8 ["CALL", null, ["callee:00c5b060:8"]]
- 00b421b8 ["INT_ADD", "register:40f0:8", ["const:b421b8:8", "const:4:8"]]
- 00b421b8 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b42254 ["INT_ADD", "register:40f0:8", ["const:b42254:8", "const:4:8"]]
+ 00b42254 ["CALL", null, ["callee:00574d2c:8"]]
- 00b421d4 ["INT_ADD", "register:40f0:8", ["const:b421d4:8", "const:4:8"]]
- 00b421d4 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b42270 ["INT_ADD", "register:40f0:8", ["const:b42270:8", "const:4:8"]]
+ 00b42270 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-1075f1798578f88eae3c1c4a53db245d"></a>

### [`00b4222c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b4222c.md) → [`00b422c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b422c8.md) _ZN8firebase9analytics8LogEventEPKcS2_l

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b060.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 1件 [`00c5b130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b130.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b422e4",
      "incomplete_value": true,
      "site": "00b422e4",
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
      "definition_site": "00b42248",
      "incomplete_value": true,
      "site": "00b42248",
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
      "definition_site": "00b42394",
      "incomplete_value": true,
      "site": "00b423ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b422f8",
      "incomplete_value": true,
      "site": "00b42310",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b42398",
      "incomplete_value": true,
      "site": "00b423ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b422fc",
      "incomplete_value": true,
      "site": "00b42310",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:350:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "00b422e0",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42394",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42398",
      "READ",
      [
        "storage",
        "01125350",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b422e0",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42394",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42398",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42310 ["INT_ADD", "register:40f0:8", ["const:b42310:8", "const:4:8"]]
- 00b42310 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b423ac ["INT_ADD", "register:40f0:8", ["const:b423ac:8", "const:4:8"]]
+ 00b423ac ["CALL", null, ["callee:00574d2c:8"]]
- 00b4232c ["INT_ADD", "register:40f0:8", ["const:b4232c:8", "const:4:8"]]
- 00b4232c ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b423c8 ["INT_ADD", "register:40f0:8", ["const:b423c8:8", "const:4:8"]]
+ 00b423c8 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b42244 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b42244 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b422e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 00b422e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-63f6bb4e43a6e651fb7aeacc690a9ece"></a>

### [`00b42398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42398.md) → [`00b42434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42434.md) _ZN8firebase9analytics8LogEventEPKcPKNS0_9ParameterEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a990.md) · 呼出先 10件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 1件 [`00c5aa60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa60.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.47% / 新版 92.47%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42454",
      "incomplete_value": true,
      "site": "00b42454",
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
      "definition_site": "00b423b8",
      "incomplete_value": true,
      "site": "00b423b8",
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
      "definition_site": "00b42514",
      "incomplete_value": true,
      "site": "00b4252c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42478",
      "incomplete_value": true,
      "site": "00b42490",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:408:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b42518",
      "incomplete_value": true,
      "site": "00b4252c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4247c",
      "incomplete_value": true,
      "site": "00b42490",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:350:8"
              ]
            ]
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
      "00b42450",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b424e8",
      "PARAM",
      [
        "storage",
        "002be540",
        null,
        "string"
      ]
    ],
    [
      "00b42514",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42450",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b424e8",
      "PARAM",
      [
        "storage",
        "002be4ec",
        null,
        "string"
      ]
    ],
    [
      "00b42514",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42454 ["INT_ADD", "register:40f0:8", ["const:b42454:8", "const:4:8"]]
- 00b42454 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b424f0 ["INT_ADD", "register:40f0:8", ["const:b424f0:8", "const:4:8"]]
+ 00b424f0 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b42490 ["INT_ADD", "register:40f0:8", ["const:b42490:8", "const:4:8"]]
- 00b42490 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b4252c ["INT_ADD", "register:40f0:8", ["const:b4252c:8", "const:4:8"]]
+ 00b4252c ["CALL", null, ["callee:00574d2c:8"]]
- 00b424ac ["INT_ADD", "register:40f0:8", ["const:b424ac:8", "const:4:8"]]
- 00b424ac ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b42548 ["INT_ADD", "register:40f0:8", ["const:b42548:8", "const:4:8"]]
+ 00b42548 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-eb8c263e1f8b817052b92275c2db89d3"></a>

### [`00b4250c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b4250c.md) → [`00b425a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b425a8.md) _ZN8firebase9analytics19LogAppleTransactionEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b42618",
      "incomplete_value": false,
      "site": "00b4262c",
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
            "const:38e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4257c",
      "incomplete_value": false,
      "site": "00b42590",
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
            "const:3ea:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4257c",
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
      "00b42618",
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
- 00b42590 ["INT_ADD", "register:40f0:8", ["const:b42590:8", "const:4:8"]]
- 00b42590 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00b4262c ["INT_ADD", "register:40f0:8", ["const:b4262c:8", "const:4:8"]]
+ 00b4262c ["CALL", null, ["callee:00c5ae70:8"]]
- 00b42530 ["INT_ADD", "register:40f0:8", ["const:b42530:8", "const:4:8"]]
- 00b42530 ["CALL", null, ["callee:00c5ad80:8"]]
+ 00b425cc ["INT_ADD", "register:40f0:8", ["const:b425cc:8", "const:4:8"]]
+ 00b425cc ["CALL", null, ["callee:00c5ad80:8"]]
- 00b42534 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b42534 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b425d0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b425d0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-1b0178310550f2bb6448a3b63e6f2264"></a>

### [`00b42644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42644.md) → [`00b426e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b426e0.md) _ZN8firebase6FutureIvEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5add0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5add0.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aea0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

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
      "definition_site": "00b42690",
      "incomplete_value": true,
      "site": "00b42694",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00b42694 ["INT_ADD", "register:40f0:8", ["const:b42694:8", "const:4:8"]]
- 00b42694 ["CALL", null, ["callee:00c5aec0:8"]]
+ 00b42730 ["INT_ADD", "register:40f0:8", ["const:b42730:8", "const:4:8"]]
+ 00b42730 ["CALL", null, ["callee:00c5aec0:8"]]
- 00b42664 ["INT_ADD", "register:40f0:8", ["const:b42664:8", "const:4:8"]]
- 00b42664 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00b42700 ["INT_ADD", "register:40f0:8", ["const:b42700:8", "const:4:8"]]
+ 00b42700 ["CALL", null, ["callee:00c5ad40:8"]]
- 00b42678 ["INT_ADD", "register:40f0:8", ["const:b42678:8", "const:4:8"]]
- 00b42678 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00b42714 ["INT_ADD", "register:40f0:8", ["const:b42714:8", "const:4:8"]]
+ 00b42714 ["CALL", null, ["callee:00c5aed0:8"]]
~~~


