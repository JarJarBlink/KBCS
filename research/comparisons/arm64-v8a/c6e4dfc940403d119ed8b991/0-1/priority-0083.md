# v16.0.1 → v16.0.2 · 最優先の変更候補 (83)

[一覧の目次](README.md)

<a id="compare-75c2648661ba0217d848a75782ad2811"></a>

### [`00b5cae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5cae8.md) → [`00b5cb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cb84.md) _ZN8firebase15CleanupNotifier16UnregisterObjectEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 1件 [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 73.21% / 新版 73.21%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5cb90"
      ],
      [
        "FALL_THROUGH",
        "00b5cc2c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5cc2c",
      "incomplete_value": true,
      "site": "00b5cc30",
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
      "definition_site": "00b5cb90",
      "incomplete_value": true,
      "site": "00b5cb94",
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
      "unmatched:00b5cb2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cbb4"
      ]
    ],
    [
      "unmatched:00b5cb40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cc50"
      ]
    ],
    [
      "00b5cbf4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b5cb88"
      ]
    ]
  ],
  "added": [
    [
      "00b5cbc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cbb4"
      ]
    ],
    [
      "00b5cbdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cc50"
      ]
    ],
    [
      "00b5cbf4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5cc24"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cb00 ["INT_ADD", "register:40f0:8", ["const:b5cb00:8", "const:4:8"]]
- 00b5cb00 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5cb9c ["INT_ADD", "register:40f0:8", ["const:b5cb9c:8", "const:4:8"]]
+ 00b5cb9c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5cb0c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b5cb0c ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 00b5cba8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b5cba8 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
- 00b5cb2c ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b5cb2c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-26dae70be2371da879ef48e258496dd3"></a>

### [`00b5cbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5cbc8.md) → [`00b5cc64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cc64.md) _ZN8firebase15CleanupNotifier15UnregisterOwnerEPS0_Pv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5bba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bba0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5bc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 77.42% / 新版 77.42%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5cc74",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ],
    [
      "00b5cc7c",
      "READ",
      [
        "storage",
        "01126008",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5cbf0",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5cc74",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5cc7c",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5cc8c",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cbd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:798:8"]]
- 00b5cbd8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5cc74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:868:8"]]
+ 00b5cc74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5cbe8 ["INT_ADD", "register:40f0:8", ["const:b5cbe8:8", "const:4:8"]]
- 00b5cbe8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5cc84 ["INT_ADD", "register:40f0:8", ["const:b5cc84:8", "const:4:8"]]
+ 00b5cc84 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5cbf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:790:8"]]
- 00b5cbf0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a64e105091e0670daa1b293683ad8a71"></a>

### [`00b5cc44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5cc44.md) → [`00b5cce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cce0.md) _ZN8firebase15CleanupNotifier13RegisterOwnerEPS0_Pv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7a0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b870.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `store_condition` 7件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5cd20"
      ],
      [
        "FALL_THROUGH",
        "00b5cdbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5cdbc",
      "incomplete_value": true,
      "site": "00b5cdc8",
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
              [
                "live",
                "register:40c8:8"
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
      "definition_site": "00b5cd20",
      "incomplete_value": true,
      "site": "00b5cd2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "live",
            "register:40b0:8"
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
        "00b5cd20"
      ],
      [
        "FALL_THROUGH",
        "00b5cdbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5cdbc",
      "incomplete_value": true,
      "site": "00b5cdc8",
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
              [
                "live",
                "register:40c8:8"
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
      "definition_site": "00b5cd20",
      "incomplete_value": true,
      "site": "00b5cd2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "live",
            "register:40b0:8"
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b5cd20"
      ],
      [
        "FALL_THROUGH",
        "00b5cdbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5cdbc",
      "incomplete_value": true,
      "site": "00b5cdcc",
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
              [
                "live",
                "register:40c8:8"
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
      "definition_site": "00b5cd20",
      "incomplete_value": true,
      "site": "00b5cd30",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "live",
            "register:40b0:8"
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
      "unmatched:00b5cc64",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ],
    [
      "00b5cd0c",
      "READ",
      [
        "storage",
        "01126008",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5cc80",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5cd00",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5cd0c",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5cd1c",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cc90 ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
- 00b5cc90 ["CBRANCH", null, ["local:b50:8", "tmp:0:1"]]
+ 00b5cd2c ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
+ 00b5cd2c ["CBRANCH", null, ["local:b49:8", "tmp:0:1"]]
+ 00b5cd4c ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00b5cd4c ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 00b5cdc8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b5cdc8 ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
+ 00b5ce64 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b5ce64 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
~~~


<a id="compare-88086c4529e89ca90d79330411faa37c"></a>

### [`00b5ce40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5ce40.md) → [`00b5cedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cedc.md) _ZN8firebase15CleanupNotifier15UnregisterOwnerENSt6__ndk114__map_iteratorINS1_15__tree_iteratorINS1_12__value_typeIPvPS0_EEPNS1_11__tree_nod

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bba0.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 1件 [`00c5bc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc70.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 65.28% / 新版 65.28%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5cecc",
      "incomplete_value": true,
      "site": "00b5cedc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
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
      "definition_site": "00b5ced0",
      "incomplete_value": true,
      "site": "00b5cedc",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b5cee0",
      "incomplete_value": true,
      "site": "00b5cee4",
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
      "unmatched:00b5ce54",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b5ce5c",
      "READ",
      [
        "storage",
        "01126008",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5ce70",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5cef0",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5cef8",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5cf0c",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cedc ["INT_ADD", "register:40f0:8", ["const:b5cedc:8", "const:4:8"]]
- 00b5cedc ["CALL", null, ["callee:00c5b6a0:8"]]
+ 00b5cf78 ["INT_ADD", "register:40f0:8", ["const:b5cf78:8", "const:4:8"]]
+ 00b5cf78 ["CALL", null, ["callee:00c5b6a0:8"]]
- 00b5cee4 ["INT_ADD", "register:40f0:8", ["const:b5cee4:8", "const:4:8"]]
- 00b5cee4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5cf80 ["INT_ADD", "register:40f0:8", ["const:b5cf80:8", "const:4:8"]]
+ 00b5cf80 ["CALL", null, ["callee:00c57f80:8"]]
- 00b5ce54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:798:8"]]
- 00b5ce54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9d55ca5c5ac5454ccf7f26f806e9ce9b"></a>

### [`00b5cf60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5cf60.md) → [`00b5cffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cffc.md) _ZN8firebase15CleanupNotifier11FindByOwnerEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5abf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abf0.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 63.89% / 新版 63.89%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d018",
      "incomplete_value": true,
      "site": "00b5d01c",
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
    "new": null,
    "old": {
      "definition_site": "00b5cfd0",
      "incomplete_value": true,
      "site": "00b5cfd4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b5cf70",
      "READ",
      [
        "storage",
        "00c9b798",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d014",
      "READ",
      [
        "storage",
        "01126008",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b5cf88",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5d00c",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d014",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5d024",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cf80 ["INT_ADD", "register:40f0:8", ["const:b5cf80:8", "const:4:8"]]
- 00b5cf80 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5d01c ["INT_ADD", "register:40f0:8", ["const:b5d01c:8", "const:4:8"]]
+ 00b5d01c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5cfd4 ["INT_ADD", "register:40f0:8", ["const:b5cfd4:8", "const:4:8"]]
- 00b5cfd4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5d070 ["INT_ADD", "register:40f0:8", ["const:b5d070:8", "const:4:8"]]
+ 00b5d070 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b5cf70 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:798:8"]]
- 00b5cf70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4b485abad25476daa56cb0e547e6a264"></a>

### [`00b5cff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5cff0.md) → [`00b5d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d08c.md) _ZNSt6__ndk16__treeINS_12__value_typeIPvPFvS2_EEENS_19__map_value_compareIS2_S5_NS_4lessIS2_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tre

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbc0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbc0.md)
- 新版 呼出元 1件 [`00c5bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc90.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc90.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d0b0",
      "incomplete_value": true,
      "site": "00b5d0b4",
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
      "unmatched:00b5cff8",
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
      "00b5d094",
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
- 00b5d018 ["INT_ADD", "register:40f0:8", ["const:b5d018:8", "const:4:8"]]
- 00b5d018 ["CALL", null, ["callee:00c5bc90:8"]]
+ 00b5d0b4 ["INT_ADD", "register:40f0:8", ["const:b5d0b4:8", "const:4:8"]]
+ 00b5d0b4 ["CALL", null, ["callee:00c5bc90:8"]]
- 00b5cff8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5cff8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5cff8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5cff8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5d00c ["INT_ADD", "register:40f0:8", ["const:b5d00c:8", "const:4:8"]]
- 00b5d00c ["CALL", null, ["callee:00c5bc90:8"]]
+ 00b5d0a8 ["INT_ADD", "register:40f0:8", ["const:b5d0a8:8", "const:4:8"]]
+ 00b5d0a8 ["CALL", null, ["callee:00c5bc90:8"]]
~~~


<a id="compare-29e85708ec892e09fb91d019d6c3e05e"></a>

### [`00b5d030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d030.md) → [`00b5d0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d0cc.md) _ZNSt6__ndk16__treeINS_12__value_typeIPvPN8firebase15CleanupNotifierEEENS_19__map_value_compareIS2_S6_NS_4lessIS2_EELb1EEENS_9allocatorIS6_E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbd0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbd0.md)
- 新版 呼出元 1件 [`00c5bca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bca0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bca0.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5d054",
      "incomplete_value": true,
      "site": "00b5d058",
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
      "unmatched:00b5d038",
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
      "00b5d0d4",
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
- 00b5d058 ["INT_ADD", "register:40f0:8", ["const:b5d058:8", "const:4:8"]]
- 00b5d058 ["CALL", null, ["callee:00c5bca0:8"]]
+ 00b5d0f4 ["INT_ADD", "register:40f0:8", ["const:b5d0f4:8", "const:4:8"]]
+ 00b5d0f4 ["CALL", null, ["callee:00c5bca0:8"]]
- 00b5d038 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5d038 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5d038 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5d038 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5d04c ["INT_ADD", "register:40f0:8", ["const:b5d04c:8", "const:4:8"]]
- 00b5d04c ["CALL", null, ["callee:00c5bca0:8"]]
+ 00b5d0e8 ["INT_ADD", "register:40f0:8", ["const:b5d0e8:8", "const:4:8"]]
+ 00b5d0e8 ["CALL", null, ["callee:00c5bca0:8"]]
~~~


<a id="compare-9b9d51d45d35ab03d17ee1cd62df217f"></a>

### [`00b5d070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d070.md) → [`00b5d10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d10c.md) _INIT_281

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5d070",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d074",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d094",
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
      "00b5d10c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5d110",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5d130",
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
- 00b5d070 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b5d070 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b5d070 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5d074 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b5d074 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b5d074 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5d074 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5d080 ["INT_ADD", "register:40f0:8", ["const:b5d080:8", "const:4:8"]]
- 00b5d080 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5d11c ["INT_ADD", "register:40f0:8", ["const:b5d11c:8", "const:4:8"]]
+ 00b5d11c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-45a74bdf9edee7fa6a9cd503fc87d8a6"></a>

### [`00b5d0a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d0a8.md) → [`00b5d144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d144.md) _ZN8firebase4PathC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d150",
      "incomplete_value": true,
      "site": "00b5d154",
      "value": [
        "live",
        "register:4008:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00b5d0b8 ["INT_ADD", "register:40f0:8", ["const:b5d0b8:8", "const:4:8"]]
- 00b5d0b8 ["CALL", null, ["callee:00c5bcc0:8"]]
+ 00b5d154 ["INT_ADD", "register:40f0:8", ["const:b5d154:8", "const:4:8"]]
+ 00b5d154 ["CALL", null, ["callee:00c5bcc0:8"]]
- 00b5d0c0 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00b5d0c0 ["RETURN", null, ["register:0:8"]]
+ 00b5d15c ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00b5d15c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-aa4466da52eff8da606f4e4233805b92"></a>

### [`00b5d0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d0c4.md) → [`00b5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d160.md) _ZN8firebase4Path16NormalizeSlashesERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5bc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc10.md) [`00c5bc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc30.md)
- 新版 呼出元 1件 [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5bce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bce0.md) [`00c5bd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd00.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.42% / 新版 77.42%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d220",
      "incomplete_value": true,
      "site": "00b5d224",
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
      "definition_site": "00b5d218",
      "incomplete_value": true,
      "site": "00b5d224",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d21c",
      "incomplete_value": false,
      "site": "00b5d224",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:00b5d0c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d0cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d0d0",
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
      "00b5d164",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b5d168",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b5d16c",
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
- 00b5d188 ["INT_ADD", "register:40f0:8", ["const:b5d188:8", "const:4:8"]]
- 00b5d188 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b5d224 ["INT_ADD", "register:40f0:8", ["const:b5d224:8", "const:4:8"]]
+ 00b5d224 ["CALL", null, ["callee:00c5bd00:8"]]
- 00b5d1b0 ["INT_ADD", "register:40f0:8", ["const:b5d1b0:8", "const:4:8"]]
- 00b5d1b0 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b5d24c ["INT_ADD", "register:40f0:8", ["const:b5d24c:8", "const:4:8"]]
+ 00b5d24c ["CALL", null, ["callee:00c5bd00:8"]]
- 00b5d220 ["INT_ADD", "register:40f0:8", ["const:b5d220:8", "const:4:8"]]
- 00b5d220 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b5d2bc ["INT_ADD", "register:40f0:8", ["const:b5d2bc:8", "const:4:8"]]
+ 00b5d2bc ["CALL", null, ["callee:00c5bd00:8"]]
~~~


<a id="compare-5f50de76f13e8e7a1f02f5577d1b24d5"></a>

### [`00b5d2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d2b4.md) → [`00b5d350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d350.md) _ZN8firebase4PathC2ERKNSt6__ndk16vectorINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEENS6_IS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00b5d458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d458.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00b5d4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d4f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 64.94% / 新版 64.94%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5d30c",
      "incomplete_value": true,
      "site": "00b5d310",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d3c4",
      "incomplete_value": true,
      "site": "00b5d3c8",
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
      "definition_site": "00b5d3ec",
      "incomplete_value": true,
      "site": "00b5d3f4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b5d2b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d2bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d2c0",
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
      "00b5d354",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b5d358",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5d35c",
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
- 00b5d310 ["INT_ADD", "register:40f0:8", ["const:b5d310:8", "const:4:8"]]
- 00b5d310 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5d3ac ["INT_ADD", "register:40f0:8", ["const:b5d3ac:8", "const:4:8"]]
+ 00b5d3ac ["CALL", null, ["callee:00c57f60:8"]]
- 00b5d32c ["INT_ADD", "register:40f0:8", ["const:b5d32c:8", "const:4:8"]]
- 00b5d32c ["CALL", null, ["callee:00c5b680:8"]]
+ 00b5d3c8 ["INT_ADD", "register:40f0:8", ["const:b5d3c8:8", "const:4:8"]]
+ 00b5d3c8 ["CALL", null, ["callee:00c5b680:8"]]
- 00b5d358 ["INT_ADD", "register:40f0:8", ["const:b5d358:8", "const:4:8"]]
- 00b5d358 ["CALL", null, ["callee:00b5d4f4:8"]]
+ 00b5d3f4 ["INT_ADD", "register:40f0:8", ["const:b5d3f4:8", "const:4:8"]]
+ 00b5d3f4 ["CALL", null, ["callee:00b5d4f4:8"]]
~~~


<a id="compare-dcb8935b1bb2a5dd07293338ec8a8b7d"></a>

### [`00b5d3e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d3e8.md) → [`00b5d484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d484.md) _ZN8firebase4PathC1ENSt6__ndk111__wrap_iterIPNS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEEESA_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b5d458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d458.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b5d4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d4f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d4a0",
      "incomplete_value": true,
      "site": "00b5d4b0",
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
      "definition_site": "00b5d4b4",
      "incomplete_value": true,
      "site": "00b5d4bc",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00b5d3ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d3f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d440",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d4f0"
      ]
    ]
  ],
  "added": [
    [
      "00b5d488",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5d48c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b5d4dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d4f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5d414 ["INT_ADD", "register:40f0:8", ["const:b5d414:8", "const:4:8"]]
- 00b5d414 ["CALL", null, ["callee:00b5d4f4:8"]]
+ 00b5d4b0 ["INT_ADD", "register:40f0:8", ["const:b5d4b0:8", "const:4:8"]]
+ 00b5d4b0 ["CALL", null, ["callee:00b5d4f4:8"]]
- 00b5d420 ["INT_ADD", "register:40f0:8", ["const:b5d420:8", "const:4:8"]]
- 00b5d420 ["CALL", null, ["callee:00c5bcc0:8"]]
+ 00b5d4bc ["INT_ADD", "register:40f0:8", ["const:b5d4bc:8", "const:4:8"]]
+ 00b5d4bc ["CALL", null, ["callee:00c5bcc0:8"]]
- 00b5d3e8 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
~~~


<a id="compare-938e3de1f3342411d1f3980476ee36a4"></a>

### [`00b5d458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d458.md) → [`00b5d4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d4f4.md) FUN_00b5d4f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b5d2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d2b4.md) [`00b5d3e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d3e8.md) [`00b5ddf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5ddf4.md) [`00b5dfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5dfa4.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c585f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585f0.md) [`00c5bc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc40.md)
- 新版 呼出元 4件 [`00b5d350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d350.md) [`00b5d484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d484.md) [`00b5de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5de90.md) [`00b5e040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e040.md) · 呼出先 3件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c586c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586c0.md) [`00c5bd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd10.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.83% / 新版 70.83%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5d49c",
      "incomplete_value": true,
      "site": "00b5d4a8",
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
            "const:352:8"
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
      "definition_site": "00b5d4a0",
      "incomplete_value": false,
      "site": "00b5d4a8",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:00b5d458",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d45c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d460",
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
      "00b5d4f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b5d4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5d4fc",
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
- 00b5d4a8 ["INT_ADD", "register:40f0:8", ["const:b5d4a8:8", "const:4:8"]]
- 00b5d4a8 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00b5d544 ["INT_ADD", "register:40f0:8", ["const:b5d544:8", "const:4:8"]]
+ 00b5d544 ["CALL", null, ["callee:00c5bd10:8"]]
- 00b5d458 ["COPY", "tmp:0:8", ["register:40b8:8"]]
- 00b5d458 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b5d458 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5d45c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b5d45c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5d45c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5d45c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-75570f69962a50c49e7878c0bfd75965"></a>

### [`00b5d638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d638.md) → [`00b5d6d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d6d4.md) _ZNK8firebase4Path8GetChildERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d758",
      "incomplete_value": true,
      "site": "00b5d75c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d768",
      "incomplete_value": true,
      "site": "00b5d76c",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b5d63c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d660",
      "PARAM",
      [
        "storage",
        "002a5352",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d6e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d794"
      ]
    ]
  ],
  "added": [
    [
      "00b5d6d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5d6fc",
      "PARAM",
      [
        "storage",
        "002a52f6",
        null,
        null
      ]
    ],
    [
      "00b5d77c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d794"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5d6c0 ["INT_ADD", "register:40f0:8", ["const:b5d6c0:8", "const:4:8"]]
- 00b5d6c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5d75c ["INT_ADD", "register:40f0:8", ["const:b5d75c:8", "const:4:8"]]
+ 00b5d75c ["CALL", null, ["callee:00c57f80:8"]]
- 00b5d6d0 ["INT_ADD", "register:40f0:8", ["const:b5d6d0:8", "const:4:8"]]
- 00b5d6d0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5d76c ["INT_ADD", "register:40f0:8", ["const:b5d76c:8", "const:4:8"]]
+ 00b5d76c ["CALL", null, ["callee:00c57f80:8"]]
- 00b5d638 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-2d118ad2a7bf97d9e3488bfbb9620792"></a>

### [`00b5d6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d6fc.md) → [`00b5d798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d798.md) _ZNK8firebase4Path8GetChildERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d808",
      "incomplete_value": true,
      "site": "00b5d810",
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5d700",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d724",
      "PARAM",
      [
        "storage",
        "002a5352",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d75c",
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
      "00b5d79c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5d7c0",
      "PARAM",
      [
        "storage",
        "002a52f6",
        null,
        null
      ]
    ],
    [
      "00b5d7f8",
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
- 00b5d774 ["INT_ADD", "register:40f0:8", ["const:b5d774:8", "const:4:8"]]
- 00b5d774 ["CALL", null, ["callee:00c5bcc0:8"]]
+ 00b5d810 ["INT_ADD", "register:40f0:8", ["const:b5d810:8", "const:4:8"]]
+ 00b5d810 ["CALL", null, ["callee:00c5bcc0:8"]]
- 00b5d6fc ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00b5d700 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:40:8"]]
- 00b5d700 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-a9ab6fa868730eb2d2129fcb5b34b11c"></a>

### [`00b5d7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d7c0.md) → [`00b5d85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d85c.md) _ZNK8firebase4Path9GetParentEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5b7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7f0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5d7e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5d844",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d908"
      ]
    ],
    [
      "unmatched:00b5d894",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d948"
      ]
    ]
  ],
  "added": [
    [
      "00b5d880",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b5d8e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d908"
      ]
    ],
    [
      "00b5d930",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5d948"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5d7d0 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b5d7d0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b5d7d0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b5d7d0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b5d7e4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
- 00b5d7e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00b5d7ec ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 00b5d7ec ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b5d7ec ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b5d7ec ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b5d888 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 00b5d888 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b5d888 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b5d888 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-81e3380a29f8f36c931007da1d922613"></a>

### [`00b5d8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d8b0.md) → [`00b5d94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d94c.md) _ZN8firebase4Path8MakePathERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5d8e0",
      "incomplete_value": true,
      "site": "00b5d8e4",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00b5d8e4 ["INT_ADD", "register:40f0:8", ["const:b5d8e4:8", "const:4:8"]]
- 00b5d8e4 ["CALL", null, ["callee:00c5b180:8"]]
+ 00b5d980 ["INT_ADD", "register:40f0:8", ["const:b5d980:8", "const:4:8"]]
+ 00b5d980 ["CALL", null, ["callee:00c5b180:8"]]
- 00b5d8c4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00b5d960 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 00b5d8d8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b5d8d8 ["COPY", "tmp:1:8", ["register:4050:8"]]
- 00b5d8d8 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00b5d8d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "const:1:8"]]
~~~


<a id="compare-3a136db332dec3849d428338b42ad33b"></a>

### [`00b5d8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d8f0.md) → [`00b5d98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d98c.md) _ZNK8firebase4Path11GetBaseNameEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~diff
- 00b5d904 ["BRANCH", null, ["local:b11:8"]]
+ 00b5d9a0 ["BRANCH", null, ["local:b8:8"]]
- 00b5d90c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b5d90c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00b5d9a8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b5d9a8 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00b5d914 ["INT_ADD", "tmp:0:8", ["register:4058:8", "const:ffffffffffffffff:8"]]
- 00b5d914 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b5d914 ["INT_ZEXT", "register:4058:8", ["tmp:1:1"]]
~~~


<a id="compare-40cf9728653031e32bacf92407cca4d3"></a>

### [`00b5d94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d94c.md) → [`00b5d9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d9e8.md) _ZNK8firebase4Path8IsParentERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

アドレスに依存する影響 `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5d9dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5daac"
      ]
    ],
    [
      "unmatched:00b5d9ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5daac"
      ]
    ],
    [
      "00b5da78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5dac8"
      ]
    ]
  ],
  "added": [
    [
      "00b5da78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5daac"
      ]
    ],
    [
      "00b5da88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5daac"
      ]
    ],
    [
      "00b5dab4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5dac8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5d9a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b5d9a4 ["COPY", "tmp:1:8", ["register:4050:8"]]
- 00b5d9a4 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00b5d9a4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "const:1:8"]]
- 00b5d9a8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b5d9a8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b5d9a8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b5d9a8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b5da44 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b5da44 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b5da44 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b5da44 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00b5d9b0 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b5d9b0 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 00b5da4c ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00b5da4c ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
~~~


<a id="compare-ba970d04d91955f30be8aa2dd344294b"></a>

### [`00b5da34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5da34.md) → [`00b5dad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5dad0.md) _ZNK8firebase4Path14GetDirectoriesEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc00.md) · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b650.md)
- 新版 呼出元 1件 [`00c5bcd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcd0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.19% / 新版 74.19%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 16件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5db9c",
      "incomplete_value": true,
      "site": "00b5dba0",
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
      "definition_site": "00b5db94",
      "incomplete_value": true,
      "site": "00b5dba0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              [
                "live",
                "register:40d0:8"
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
      "definition_site": "00b5db98",
      "incomplete_value": false,
      "site": "00b5dba0",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:00b5da48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5da88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5dd80"
      ]
    ],
    [
      "00b5db48",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b5dadc"
      ]
    ]
  ],
  "added": [
    [
      "00b5dae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b5db24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5dd80"
      ]
    ],
    [
      "00b5db48",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5db78"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5db04 ["INT_ADD", "register:40f0:8", ["const:b5db04:8", "const:4:8"]]
- 00b5db04 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b5dba0 ["INT_ADD", "register:40f0:8", ["const:b5dba0:8", "const:4:8"]]
+ 00b5dba0 ["CALL", null, ["callee:00c5bd00:8"]]
- 00b5db9c ["INT_ADD", "register:40f0:8", ["const:b5db9c:8", "const:4:8"]]
- 00b5db9c ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b5dc38 ["INT_ADD", "register:40f0:8", ["const:b5dc38:8", "const:4:8"]]
+ 00b5dc38 ["CALL", null, ["callee:00c5bd00:8"]]
- 00b5da48 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5da48 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5da48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00b5da48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b9cc8feeeacfb2d6eb1c0cd09ee0e221"></a>

### [`00b5e208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5e208.md) → [`00b5e2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e2a4.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertINS_11__wrap_iterIPKcEEEENS_9enable_ifIXaasr21__is_forward_iterator

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc10.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md)
- 新版 呼出元 1件 [`00c5bce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bce0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5e468",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e5bc"
      ]
    ],
    [
      "unmatched:00b5e4bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e544"
      ]
    ],
    [
      "unmatched:00b5e4c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e574"
      ]
    ]
  ],
  "added": [
    [
      "00b5e504",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e5bc"
      ]
    ],
    [
      "00b5e558",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e544"
      ]
    ],
    [
      "00b5e560",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e574"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5e260 ["CBRANCH", null, ["local:b42:8", "register:101:1"]]
+ 00b5e2fc ["CBRANCH", null, ["local:b43:8", "register:101:1"]]
- 00b5e2a0 ["CBRANCH", null, ["local:b59:8", "register:102:1"]]
+ 00b5e33c ["CBRANCH", null, ["local:b61:8", "register:102:1"]]
- 00b5e2c8 ["CBRANCH", null, ["local:b24:8", "register:102:1"]]
+ 00b5e364 ["CBRANCH", null, ["local:b25:8", "register:102:1"]]
~~~


<a id="compare-ce6e89154022f0da9863ef21122f2428"></a>

### [`00b5e528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5e528.md) → [`00b5e5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e5c4.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c585f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585f0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c586c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586c0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5e584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e6dc"
      ]
    ],
    [
      "unmatched:00b5e58c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e65c"
      ]
    ],
    [
      "00b5e628",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b5e588"
      ]
    ]
  ],
  "added": [
    [
      "00b5e620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e6dc"
      ]
    ],
    [
      "00b5e628",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e65c"
      ]
    ],
    [
      "00b5e654",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5e624"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5e53c ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b5e53c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b5e53c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b5e53c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b5e544 ["CBRANCH", null, ["local:b28:8", "register:102:1"]]
+ 00b5e5e0 ["CBRANCH", null, ["local:b27:8", "register:102:1"]]
- 00b5e55c ["BRANCH", null, ["local:b6:8"]]
+ 00b5e5f8 ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-12b48569cd63cbec5447e8020055078f"></a>

### [`00b5e950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5e950.md) → [`00b5e9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e9ec.md) _ZN8firebase17FutureBackingDataD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc90.md) · 呼出先 10件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md)
- 新版 呼出元 1件 [`00c5bd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd60.md) · 呼出先 10件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.76% / 新版 98.76%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5ea20",
      "incomplete_value": false,
      "site": "00b5ea24",
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
            "const:98d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5e984",
      "incomplete_value": false,
      "site": "00b5e988",
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
            "const:94d:8"
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
      "definition_site": "00b5ea48",
      "incomplete_value": false,
      "site": "00b5ea4c",
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
            "const:5e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5e9ac",
      "incomplete_value": false,
      "site": "00b5e9b0",
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
            "const:5b6:8"
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
      "00b5ea20",
      "PARAM",
      [
        "storage",
        "002c094d",
        null,
        "string"
      ]
    ],
    [
      "00b5ea48",
      "PARAM",
      [
        "storage",
        "002b25b6",
        null,
        "string"
      ]
    ],
    [
      "00b5ea80",
      "READ",
      [
        "storage",
        "00c9b7a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5ea20",
      "PARAM",
      [
        "storage",
        "002c098d",
        null,
        "string"
      ]
    ],
    [
      "00b5ea48",
      "PARAM",
      [
        "storage",
        "002b25e7",
        null,
        "string"
      ]
    ],
    [
      "00b5ea80",
      "READ",
      [
        "storage",
        "00c9b878",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5e988 ["INT_ADD", "register:40f0:8", ["const:b5e988:8", "const:4:8"]]
- 00b5e988 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5ea24 ["INT_ADD", "register:40f0:8", ["const:b5ea24:8", "const:4:8"]]
+ 00b5ea24 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5e9b0 ["INT_ADD", "register:40f0:8", ["const:b5e9b0:8", "const:4:8"]]
- 00b5e9b0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5ea4c ["INT_ADD", "register:40f0:8", ["const:b5ea4c:8", "const:4:8"]]
+ 00b5ea4c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5e96c ["INT_ADD", "register:40f0:8", ["const:b5e96c:8", "const:4:8"]]
- 00b5e96c ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b5ea08 ["INT_ADD", "register:40f0:8", ["const:b5ea08:8", "const:4:8"]]
+ 00b5ea08 ["CALL", null, ["callee:00c5bd50:8"]]
~~~


<a id="compare-e52e5634e7bf57d370b035244d191a58"></a>

### [`00b5ecd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5ecd0.md) → [`00b5ed6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5ed6c.md) _ZN8firebase26ReferenceCountedFutureImplD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md) [`00c5bcd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bcd0.md) · 呼出先 11件 [`00b61320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61320.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md)
- 新版 呼出元 2件 [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5bda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bda0.md) · 呼出先 11件 [`00b613bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b613bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5ed98",
      "incomplete_value": true,
      "site": "00b5ed9c",
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
      "definition_site": "00b5ecfc",
      "incomplete_value": true,
      "site": "00b5ed00",
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
      "00b5ed8c",
      "READ",
      [
        "storage",
        "00c9b6b0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5ed9c",
      "DATA",
      [
        "storage",
        "00c903c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5ee4c",
      "PARAM",
      [
        "storage",
        "0029f9a2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5ed8c",
      "READ",
      [
        "storage",
        "00c9b780",
        null,
        "pointer"
      ]
    ],
    [
      "00b5ed9c",
      "DATA",
      [
        "storage",
        "00c90490",
        null,
        "pointer"
      ]
    ],
    [
      "00b5ee4c",
      "PARAM",
      [
        "storage",
        "0029f955",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5ed9c ["COPY", "tmp:0:8", ["const:9a2:8"]]
- 00b5ed9c ["INT_CARRY", "register:105:1", ["register:40b8:8", "tmp:0:8"]]
- 00b5ed9c ["INT_SCARRY", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
- 00b5ed9c ["INT_ADD", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
+ 00b5ee38 ["COPY", "tmp:0:8", ["const:955:8"]]
+ 00b5ee38 ["INT_CARRY", "register:105:1", ["register:40b8:8", "tmp:0:8"]]
+ 00b5ee38 ["INT_SCARRY", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
+ 00b5ee38 ["INT_ADD", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
- 00b5ecf0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:6b0:8"]]
- 00b5ecf0 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5ed8c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:780:8"]]
+ 00b5ed8c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5ed18 ["INT_ADD", "register:40f0:8", ["const:b5ed18:8", "const:4:8"]]
- 00b5ed18 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5edb4 ["INT_ADD", "register:40f0:8", ["const:b5edb4:8", "const:4:8"]]
+ 00b5edb4 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-6336cee8852ec1c601c01ce8447f8c14"></a>

### [`00b5f4ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f4ec.md) → [`00b5f588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f588.md) _ZN8firebase26ReferenceCountedFutureImpl14CompleteHandleERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5f5f0",
      "incomplete_value": false,
      "site": "00b5f5f4",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f554",
      "incomplete_value": false,
      "site": "00b5f558",
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
            "const:c90:8"
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
      "definition_site": "00b5f608",
      "incomplete_value": false,
      "site": "00b5f60c",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f56c",
      "incomplete_value": false,
      "site": "00b5f570",
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
            "const:54f:8"
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
      "00b5f5f0",
      "PARAM",
      [
        "storage",
        "002b7c90",
        null,
        "string"
      ]
    ],
    [
      "00b5f608",
      "PARAM",
      [
        "storage",
        "002b354f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5f5f0",
      "PARAM",
      [
        "storage",
        "002b7cd0",
        null,
        "string"
      ]
    ],
    [
      "00b5f608",
      "PARAM",
      [
        "storage",
        "002b3580",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5f558 ["INT_ADD", "register:40f0:8", ["const:b5f558:8", "const:4:8"]]
- 00b5f558 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5f5f4 ["INT_ADD", "register:40f0:8", ["const:b5f5f4:8", "const:4:8"]]
+ 00b5f5f4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5f570 ["INT_ADD", "register:40f0:8", ["const:b5f570:8", "const:4:8"]]
- 00b5f570 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5f60c ["INT_ADD", "register:40f0:8", ["const:b5f60c:8", "const:4:8"]]
+ 00b5f60c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5f50c ["INT_ADD", "register:40f0:8", ["const:b5f50c:8", "const:4:8"]]
- 00b5f50c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5f5a8 ["INT_ADD", "register:40f0:8", ["const:b5f5a8:8", "const:4:8"]]
+ 00b5f5a8 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-55f975f6a0c8cd5a5f2d6e4baf8cd4b3"></a>

### [`00b5f620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f620.md) → [`00b5f6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f6bc.md) _ZN8firebase26ReferenceCountedFutureImpl27ReleaseMutexAndRunCallbacksERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ae90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae90.md) · 呼出先 10件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5af60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af60.md) · 呼出先 10件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_return_alignment

命令の説明率　旧版 99.02% / 新版 99.02%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5f748",
      "incomplete_value": false,
      "site": "00b5f74c",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f6ac",
      "incomplete_value": false,
      "site": "00b5f6b0",
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
            "const:c90:8"
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
      "definition_site": "00b5f7ac",
      "incomplete_value": false,
      "site": "00b5f7b8",
      "value": [
        "leaf",
        "const:b60f48:8"
      ]
    },
    "old": {
      "definition_site": "00b5f710",
      "incomplete_value": false,
      "site": "00b5f71c",
      "value": [
        "leaf",
        "const:b60eac:8"
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
      "00b5f748",
      "PARAM",
      [
        "storage",
        "002b7c90",
        null,
        "string"
      ]
    ],
    [
      "00b5f7ac",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b5f748",
      "PARAM",
      [
        "storage",
        "002b7cd0",
        null,
        "string"
      ]
    ],
    [
      "00b5f7ac",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5f6b0 ["INT_ADD", "register:40f0:8", ["const:b5f6b0:8", "const:4:8"]]
- 00b5f6b0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5f74c ["INT_ADD", "register:40f0:8", ["const:b5f74c:8", "const:4:8"]]
+ 00b5f74c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5f71c ["INT_ADD", "register:40f0:8", ["const:b5f71c:8", "const:4:8"]]
- 00b5f71c ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b5f7b8 ["INT_ADD", "register:40f0:8", ["const:b5f7b8:8", "const:4:8"]]
+ 00b5f7b8 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b5f74c ["INT_ADD", "register:40f0:8", ["const:b5f74c:8", "const:4:8"]]
- 00b5f74c ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b5f7e8 ["INT_ADD", "register:40f0:8", ["const:b5f7e8:8", "const:4:8"]]
+ 00b5f7e8 ["CALL", null, ["callee:00c5ace0:8"]]
~~~


<a id="compare-856c3a57aa27983cd530fb4e77f79305"></a>

### [`00b5f954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f954.md) → [`00b5f9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f9f0.md) _ZN8firebase26ReferenceCountedFutureImpl11RunCallbackEPNS_10FutureBaseEPFvRKS1_PvES5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

アドレスに依存する影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5f954",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5f958",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5f95c",
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
      "00b5f9f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b5f9f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5f9f8",
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
- 00b5f954 ["COPY", "tmp:0:8", ["register:40b8:8"]]
- 00b5f954 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b5f954 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b5f958 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b5f958 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b5f958 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b5f958 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5f95c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5f95c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5f95c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b5f95c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-98a39b097bdb3d24a775cd6de6b94141"></a>

### [`00b5fa5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fa5c.md) → [`00b5faf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5faf8.md) _ZN8firebase26ReferenceCountedFutureImpl15ReferenceFutureERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5faac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5fb34"
      ]
    ]
  ],
  "added": [
    [
      "00b5fb48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5fb34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5fa7c ["INT_ADD", "register:40f0:8", ["const:b5fa7c:8", "const:4:8"]]
- 00b5fa7c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fb18 ["INT_ADD", "register:40f0:8", ["const:b5fb18:8", "const:4:8"]]
+ 00b5fb18 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fa88 ["INT_ADD", "register:40f0:8", ["const:b5fa88:8", "const:4:8"]]
- 00b5fa88 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fb24 ["INT_ADD", "register:40f0:8", ["const:b5fb24:8", "const:4:8"]]
+ 00b5fb24 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5faac ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b5faac ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-2a58cf59114617e4922ca8488aa9c3c3"></a>

### [`00b5faf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5faf8.md) → [`00b5fb94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fb94.md) _ZN8firebase26ReferenceCountedFutureImpl13ReleaseFutureERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5fc08",
      "incomplete_value": false,
      "site": "00b5fc0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:5a9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5fb6c",
      "incomplete_value": false,
      "site": "00b5fb70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:5fd:8"
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
      "00b5fc08",
      "PARAM",
      [
        "storage",
        "002be5fd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5fc08",
      "PARAM",
      [
        "storage",
        "002be5a9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5fb70 ["INT_ADD", "register:40f0:8", ["const:b5fb70:8", "const:4:8"]]
- 00b5fb70 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b5fc0c ["INT_ADD", "register:40f0:8", ["const:b5fc0c:8", "const:4:8"]]
+ 00b5fc0c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b5fb18 ["INT_ADD", "register:40f0:8", ["const:b5fb18:8", "const:4:8"]]
- 00b5fb18 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fbb4 ["INT_ADD", "register:40f0:8", ["const:b5fbb4:8", "const:4:8"]]
+ 00b5fbb4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fb28 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b5fb28 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00b5fbc4 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00b5fbc4 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-7f2089df43b4754b9b4617080a8a0b9c"></a>

### [`00b5fcc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fcc4.md) → [`00b5fd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fd60.md) _ZNK8firebase26ReferenceCountedFutureImpl14GetFutureErrorERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5fdd4",
      "incomplete_value": true,
      "site": "00b5fdd8",
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
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5fd40",
      "incomplete_value": true,
      "site": "00b5fd50",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00b5fd3c ["INT_ADD", "register:40f0:8", ["const:b5fd3c:8", "const:4:8"]]
- 00b5fd3c ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5fdd8 ["INT_ADD", "register:40f0:8", ["const:b5fdd8:8", "const:4:8"]]
+ 00b5fdd8 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b5fce4 ["INT_ADD", "register:40f0:8", ["const:b5fce4:8", "const:4:8"]]
- 00b5fce4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fd80 ["INT_ADD", "register:40f0:8", ["const:b5fd80:8", "const:4:8"]]
+ 00b5fd80 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fcf0 ["INT_ADD", "register:40f0:8", ["const:b5fcf0:8", "const:4:8"]]
- 00b5fcf0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fd8c ["INT_ADD", "register:40f0:8", ["const:b5fd8c:8", "const:4:8"]]
+ 00b5fd8c ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-3073b433699109d6ddc43e196919025b"></a>

### [`00b5fd6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fd6c.md) → [`00b5fe08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fe08.md) _ZNK8firebase26ReferenceCountedFutureImpl21GetFutureErrorMessageERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5fe7c",
      "READ",
      [
        "storage",
        "00c9b7b0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fe88",
      "DATA",
      [
        "storage",
        "0030bb8c",
        "firebase::ReferenceCountedFutureImpl::kErrorMessageFutureIsNoLongerValid",
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5fe7c",
      "READ",
      [
        "storage",
        "00c9b880",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fe88",
      "DATA",
      [
        "storage",
        "0030bbcc",
        "firebase::ReferenceCountedFutureImpl::kErrorMessageFutureIsNoLongerValid",
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5fd8c ["INT_ADD", "register:40f0:8", ["const:b5fd8c:8", "const:4:8"]]
- 00b5fd8c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fe28 ["INT_ADD", "register:40f0:8", ["const:b5fe28:8", "const:4:8"]]
+ 00b5fe28 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fd98 ["INT_ADD", "register:40f0:8", ["const:b5fd98:8", "const:4:8"]]
- 00b5fd98 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fe34 ["INT_ADD", "register:40f0:8", ["const:b5fe34:8", "const:4:8"]]
+ 00b5fe34 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fdd0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b5fdd0 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00b5fdd0 ["CBRANCH", null, ["local:b10:8", "tmp:1:1"]]
+ 00b5fe6c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b5fe6c ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00b5fe6c ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
~~~


<a id="compare-8e5bfd01fc476dfb03ffa015d97b0dc7"></a>

### [`00b5fe2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fe2c.md) → [`00b5fec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fec8.md) _ZNK8firebase26ReferenceCountedFutureImpl15GetFutureResultERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5fee0",
      "incomplete_value": true,
      "site": "00b5fee8",
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
            "const:8:8"
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
      "definition_site": "00b5fea0",
      "incomplete_value": true,
      "site": "00b5fea4",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b5fec0",
      "incomplete_value": true,
      "site": "00b5fec4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00b5fe4c ["INT_ADD", "register:40f0:8", ["const:b5fe4c:8", "const:4:8"]]
- 00b5fe4c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fee8 ["INT_ADD", "register:40f0:8", ["const:b5fee8:8", "const:4:8"]]
+ 00b5fee8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fea4 ["INT_ADD", "register:40f0:8", ["const:b5fea4:8", "const:4:8"]]
- 00b5fea4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5ff40 ["INT_ADD", "register:40f0:8", ["const:b5ff40:8", "const:4:8"]]
+ 00b5ff40 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b5fec4 ["INT_ADD", "register:40f0:8", ["const:b5fec4:8", "const:4:8"]]
- 00b5fec4 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5ff60 ["INT_ADD", "register:40f0:8", ["const:b5ff60:8", "const:4:8"]]
+ 00b5ff60 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-4011d109d211301d6763a5b459c207c4"></a>

### [`00b5fedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fedc.md) → [`00b5ff78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5ff78.md) _ZN8firebase26ReferenceCountedFutureImpl21AddCompletionCallbackERKNS_12FutureHandleEPFvRKNS_10FutureBaseEPvES7_PFvS7_Eb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae90.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.66% / 新版 92.66%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5fefc",
      "incomplete_value": false,
      "site": "00b5ff18",
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
    "new": {
      "definition_site": "00b5ffcc",
      "incomplete_value": true,
      "site": "00b5ffd0",
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
    "old": {
      "definition_site": "00b5ff30",
      "incomplete_value": true,
      "site": "00b5ff34",
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
    "new": {
      "definition_site": "00b5ffd8",
      "incomplete_value": true,
      "site": "00b5ffdc",
      "value": [
        "live",
        "register:40d0:8"
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
      "unmatched:00b5fef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60024",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60108"
      ]
    ],
    [
      "00b600c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6004c"
      ]
    ]
  ],
  "added": [
    [
      "00b5ff8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b600c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60108"
      ]
    ],
    [
      "00b60100",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6004c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5ff18 ["INT_ADD", "register:40f0:8", ["const:b5ff18:8", "const:4:8"]]
- 00b5ff18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5ffb4 ["INT_ADD", "register:40f0:8", ["const:b5ffb4:8", "const:4:8"]]
+ 00b5ffb4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b5ff34 ["INT_ADD", "register:40f0:8", ["const:b5ff34:8", "const:4:8"]]
- 00b5ff34 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5ffd0 ["INT_ADD", "register:40f0:8", ["const:b5ffd0:8", "const:4:8"]]
+ 00b5ffd0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5ff40 ["INT_ADD", "register:40f0:8", ["const:b5ff40:8", "const:4:8"]]
- 00b5ff40 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5ffdc ["INT_ADD", "register:40f0:8", ["const:b5ffdc:8", "const:4:8"]]
+ 00b5ffdc ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-8c9f4ba17b726434af226c1dd37871b0"></a>

### [`00b60284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60284.md) → [`00b60320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60320.md) _ZN8firebase26ReferenceCountedFutureImpl27AddCompletionCallbackLambdaERKNS_12FutureHandleENSt6__ndk18functionIFvRKNS_10FutureBaseEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00b60494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60494.md) [`00b604cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b604cc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00b60530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60530.md) [`00b60568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60568.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b603b8",
      "incomplete_value": false,
      "site": "00b603b8",
      "value": [
        "leaf",
        "const:b60530:8"
      ]
    },
    "old": {
      "definition_site": "00b6031c",
      "incomplete_value": false,
      "site": "00b6031c",
      "value": [
        "leaf",
        "const:b60494:8"
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b603c0",
      "incomplete_value": false,
      "site": "00b603cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b60324",
      "incomplete_value": false,
      "site": "00b60330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:4cc:8"
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
      "00b603b8",
      "DATA",
      [
        "storage",
        "00b60494",
        null,
        null
      ]
    ],
    [
      "00b603cc",
      "DATA",
      [
        "storage",
        "00b604cc",
        null,
        null
      ]
    ],
    [
      "00b60500",
      "DATA",
      [
        "storage",
        "00b604cc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b603b8",
      "DATA",
      [
        "storage",
        "00b60530",
        null,
        null
      ]
    ],
    [
      "00b603cc",
      "DATA",
      [
        "storage",
        "00b60568",
        null,
        null
      ]
    ],
    [
      "00b60500",
      "DATA",
      [
        "storage",
        "00b60568",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b602b4 ["INT_ADD", "register:40f0:8", ["const:b602b4:8", "const:4:8"]]
- 00b602b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b60350 ["INT_ADD", "register:40f0:8", ["const:b60350:8", "const:4:8"]]
+ 00b60350 ["CALL", null, ["callee:00c57f60:8"]]
- 00b602c0 ["INT_ADD", "register:40f0:8", ["const:b602c0:8", "const:4:8"]]
- 00b602c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6035c ["INT_ADD", "register:40f0:8", ["const:b6035c:8", "const:4:8"]]
+ 00b6035c ["CALL", null, ["callee:00c57f60:8"]]
- 00b602e4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b602e4 ["INT_ADD", "register:40f0:8", ["const:b602e4:8", "const:4:8"]]
- 00b602e4 ["CALLIND", null, ["register:0:8"]]
+ 00b60380 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b60380 ["INT_ADD", "register:40f0:8", ["const:b60380:8", "const:4:8"]]
+ 00b60380 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-95608a720db0156d6b0c789fe474731e"></a>

### [`00b60614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60614.md) → [`00b606b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b606b0.md) _ZNK8firebase26ReferenceCountedFutureImpl22IsReferencedExternallyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.94% / 新版 92.94%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6079c",
      "incomplete_value": true,
      "site": "00b607a0",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": {
      "definition_site": "00b60700",
      "incomplete_value": true,
      "site": "00b60704",
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
            "register:40c8:8"
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
      "definition_site": "00b607dc",
      "incomplete_value": true,
      "site": "00b607e4",
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
      "00b60774",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b606fc"
      ]
    ],
    [
      "unmatched:00b606f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b607d8"
      ]
    ]
  ],
  "added": [
    [
      "00b60774",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60798"
      ]
    ],
    [
      "00b60794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b607d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b60704 ["INT_ADD", "register:40f0:8", ["const:b60704:8", "const:4:8"]]
- 00b60704 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b607a0 ["INT_ADD", "register:40f0:8", ["const:b607a0:8", "const:4:8"]]
+ 00b607a0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b60748 ["INT_ADD", "register:40f0:8", ["const:b60748:8", "const:4:8"]]
- 00b60748 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b607e4 ["INT_ADD", "register:40f0:8", ["const:b607e4:8", "const:4:8"]]
+ 00b607e4 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b60638 ["INT_ADD", "register:40f0:8", ["const:b60638:8", "const:4:8"]]
- 00b60638 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b606d4 ["INT_ADD", "register:40f0:8", ["const:b606d4:8", "const:4:8"]]
+ 00b606d4 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-5b5c491a466151917c8451fd5a313312"></a>

### [`00b60768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60768.md) → [`00b60804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60804.md) _ZN8firebase26ReferenceCountedFutureImpl14SetContextDataERKNS_12FutureHandleEPvPFvS4_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bca0.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5bd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd70.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b608b4",
      "incomplete_value": false,
      "site": "00b608b8",
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
            "const:a9a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b60818",
      "incomplete_value": false,
      "site": "00b6081c",
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
            "const:aee:8"
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
      "00b608b4",
      "PARAM",
      [
        "storage",
        "002b8aee",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b608b4",
      "PARAM",
      [
        "storage",
        "002b8a9a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6081c ["INT_ADD", "register:40f0:8", ["const:b6081c:8", "const:4:8"]]
- 00b6081c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b608b8 ["INT_ADD", "register:40f0:8", ["const:b608b8:8", "const:4:8"]]
+ 00b608b8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b60794 ["INT_ADD", "register:40f0:8", ["const:b60794:8", "const:4:8"]]
- 00b60794 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60830 ["INT_ADD", "register:40f0:8", ["const:b60830:8", "const:4:8"]]
+ 00b60830 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b607a0 ["INT_ADD", "register:40f0:8", ["const:b607a0:8", "const:4:8"]]
- 00b607a0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b6083c ["INT_ADD", "register:40f0:8", ["const:b6083c:8", "const:4:8"]]
+ 00b6083c ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-cec58c2e10dff5929a71bc10a7bb3304"></a>

### [`00b60828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60828.md) → [`00b608c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b608c4.md) _ZN8firebase26ReferenceCountedFutureImpl15LastResultProxyEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bcb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bcb0.md) · 呼出先 15件 [`00b60c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60c30.md) [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00b61138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61138.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5bd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd80.md) · 呼出先 15件 [`00b60ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60ccc.md) [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00b611d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611d4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.25% / 新版 92.25%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b60984",
      "incomplete_value": true,
      "site": "00b60988",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b608e8",
      "incomplete_value": true,
      "site": "00b608ec",
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
            "const:c8:8"
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
      "definition_site": "00b608e0",
      "incomplete_value": false,
      "site": "00b608ec",
      "value": [
        "leaf",
        "const:b60eac:8"
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
      "definition_site": "00b608fc",
      "incomplete_value": true,
      "site": "00b60900",
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
      "unmatched:00b6082c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60830",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60834",
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
      "00b608c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b608cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b608d0",
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
- 00b60864 ["INT_ADD", "register:40f0:8", ["const:b60864:8", "const:4:8"]]
- 00b60864 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60900 ["INT_ADD", "register:40f0:8", ["const:b60900:8", "const:4:8"]]
+ 00b60900 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b608ec ["INT_ADD", "register:40f0:8", ["const:b608ec:8", "const:4:8"]]
- 00b608ec ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b60988 ["INT_ADD", "register:40f0:8", ["const:b60988:8", "const:4:8"]]
+ 00b60988 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b60900 ["INT_ADD", "register:40f0:8", ["const:b60900:8", "const:4:8"]]
- 00b60900 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b6099c ["INT_ADD", "register:40f0:8", ["const:b6099c:8", "const:4:8"]]
+ 00b6099c ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-55473425116851ac40099b0a0d8d5058"></a>

### [`00b60c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60c30.md) → [`00b60ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60ccc.md) FUN_00b60ccc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b60828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60828.md) · 呼出先 6件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md)
- 新版 呼出元 1件 [`00b608c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b608c4.md) · 呼出先 6件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.24% / 新版 93.24%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b60d58",
      "incomplete_value": true,
      "site": "00b60d5c",
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
      "definition_site": "00b60cbc",
      "incomplete_value": true,
      "site": "00b60cc0",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b60d2c",
      "incomplete_value": true,
      "site": "00b60d34",
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
            "const:c8:8"
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
      "definition_site": "00b60d8c",
      "incomplete_value": true,
      "site": "00b60d90",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b60cf0",
      "incomplete_value": true,
      "site": "00b60cf4",
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
            "const:c8:8"
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
      "unmatched:00b60c70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60d24"
      ]
    ],
    [
      "00b60d54",
      "READ",
      [
        "storage",
        "00c9b7a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b60d58",
      "READ",
      [
        "storage",
        "01126018",
        "firebase::ReferenceCountedFutureImpl::kInvalidHandle",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b60d0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60d24"
      ]
    ],
    [
      "00b60d54",
      "READ",
      [
        "storage",
        "00c9b878",
        null,
        "pointer"
      ]
    ],
    [
      "00b60d58",
      "READ",
      [
        "storage",
        "01126118",
        "firebase::ReferenceCountedFutureImpl::kInvalidHandle",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b60c98 ["INT_ADD", "register:40f0:8", ["const:b60c98:8", "const:4:8"]]
- 00b60c98 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b60d34 ["INT_ADD", "register:40f0:8", ["const:b60d34:8", "const:4:8"]]
+ 00b60d34 ["CALL", null, ["callee:00c5ace0:8"]]
- 00b60cf4 ["INT_ADD", "register:40f0:8", ["const:b60cf4:8", "const:4:8"]]
- 00b60cf4 ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b60d90 ["INT_ADD", "register:40f0:8", ["const:b60d90:8", "const:4:8"]]
+ 00b60d90 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b60c30 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b60c30 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b60ccc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b60ccc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-f6085a565916a372118f72e9ca959ae1"></a>

### [`00b60d60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60d60.md) → [`00b60dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60dfc.md) _ZN8firebase26ReferenceCountedFutureImpl18ForceReleaseFutureERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bcc0.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5bd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd90.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 89.13% / 新版 89.13%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b60d88",
      "incomplete_value": true,
      "site": "00b60d8c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b60d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60e68"
      ]
    ],
    [
      "unmatched:00b60e14",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60e70"
      ]
    ],
    [
      "unmatched:00b60e10",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b60e34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60e68"
      ]
    ],
    [
      "00b60eb0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60e70"
      ]
    ],
    [
      "00b60eac",
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
- 00b60d8c ["INT_ADD", "register:40f0:8", ["const:b60d8c:8", "const:4:8"]]
- 00b60d8c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60e28 ["INT_ADD", "register:40f0:8", ["const:b60e28:8", "const:4:8"]]
+ 00b60e28 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b60d80 ["INT_ADD", "register:40f0:8", ["const:b60d80:8", "const:4:8"]]
- 00b60d80 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60e1c ["INT_ADD", "register:40f0:8", ["const:b60e1c:8", "const:4:8"]]
+ 00b60e1c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b60d94 ["INT_ADD", "register:4048:8", ["register:4048:8", "const:38:8"]]
- 00b60d94 ["LOAD", "register:4050:8", ["const:1b1:8", "register:4048:8"]]
~~~


<a id="compare-1d78626507502c2dd03d9350b52e00e2"></a>

### [`00b60e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60e18.md) → [`00b60eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60eb4.md) _ZN8firebase26ReferenceCountedFutureImpl12MarkOrphanedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b60e18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60e1c",
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
      "00b60eb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b60eb8",
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
- 00b60e18 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b60e18 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b60e18 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b60e18 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b60e1c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b60e1c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b60e1c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b60e1c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b60e20 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b60e20 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b60e20 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b60e20 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-cb1dbb6e69d7a03bbf190c8c1ba722b4"></a>

### [`00b60e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60e54.md) → [`00b60ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60ef0.md) _ZN8firebase12FutureHandleC1EmPNS_6detail18FutureApiInterfaceE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) · 呼出先 2件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md)
- 新版 呼出元 1件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) · 呼出先 2件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b60f28",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60e7c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b60f28",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ],
    [
      "00b60f18",
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
- 00b60e74 ["COPY", "register:4008:8", ["register:4098:8"]]
- 00b60e78 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:10:8"]]
- 00b60e78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b60e7c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b60e7c ["INT_ADD", "register:40f0:8", ["const:b60e7c:8", "const:4:8"]]
- 00b60e7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1ff7817f0e1397b76beb5ee40d8b02c8"></a>

### [`00b60eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eb4.md) → [`00b60f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f50.md) _ZN8firebase12FutureHandleD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00b613b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b613b0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) · 呼出先 1件 [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 2件 [`00b6144c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6144c.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) · 呼出先 1件 [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 85.00% / 新版 85.00%

~~~diff
- 00b60ed4 ["INT_ADD", "register:40f0:8", ["const:b60ed4:8", "const:4:8"]]
- 00b60ed4 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b60f70 ["INT_ADD", "register:40f0:8", ["const:b60f70:8", "const:4:8"]]
+ 00b60f70 ["CALL", null, ["callee:00c5ace0:8"]]
- 00b60eec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:18:8"]]
- 00b60eec ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b60ef0 ["COPY", "tmp:0:8", ["register:8:8"]]
- 00b60ef0 ["INT_ADD", "register:8:8", ["register:8:8", "const:20:8"]]
- 00b60ef0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d39633c0e58ff1d20ca6e6365684b71a"></a>

### [`00b60f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60f04.md) → [`00b60fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60fa0.md) _ZN8firebase12FutureHandleC1ERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) · 呼出先 2件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md)
- 新版 呼出元 1件 [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) · 呼出先 2件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.17% / 新版 79.17%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b60f24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60ff4"
      ]
    ],
    [
      "00b60fe0",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b60fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b60ff4"
      ]
    ],
    [
      "00b60fe0",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b60f18 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00b60f18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00b60f1c ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:8:8"]]
- 00b60f1c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b60f20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8:8"]]
- 00b60f20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-2fcdd8676cb2f21c59771ed6f0d328fd"></a>

### [`00b60f64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60f64.md) → [`00b61000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61000.md) _ZN8firebase12FutureHandleaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ae20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae20.md) · 呼出先 3件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5aef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aef0.md) · 呼出先 3件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.71% / 新版 65.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b60f80",
      "incomplete_value": true,
      "site": "00b60f88",
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
            "const:c8:8"
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
      "definition_site": "00b6106c",
      "incomplete_value": false,
      "site": "00b61078",
      "value": [
        "leaf",
        "const:b60f48:8"
      ]
    },
    "old": {
      "definition_site": "00b60fd0",
      "incomplete_value": false,
      "site": "00b60fdc",
      "value": [
        "leaf",
        "const:b60eac:8"
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
      "unmatched:00b60f64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60f68",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6107c"
      ]
    ]
  ],
  "added": [
    [
      "00b61000",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b61004",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b61050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6107c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b60f88 ["INT_ADD", "register:40f0:8", ["const:b60f88:8", "const:4:8"]]
- 00b60f88 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b61024 ["INT_ADD", "register:40f0:8", ["const:b61024:8", "const:4:8"]]
+ 00b61024 ["CALL", null, ["callee:00c5ace0:8"]]
- 00b60fdc ["INT_ADD", "register:40f0:8", ["const:b60fdc:8", "const:4:8"]]
- 00b60fdc ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b61078 ["INT_ADD", "register:40f0:8", ["const:b61078:8", "const:4:8"]]
+ 00b61078 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b60f64 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b60f64 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b60f64 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b60f64 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-42f090140a5ad00e495a6b9052cb0512"></a>

### [`00b60ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60ff0.md) → [`00b6108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6108c.md) _ZN8firebase12FutureHandleC1EOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bc60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc60.md) · 呼出先 3件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd30.md) · 呼出先 3件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b610c4",
      "incomplete_value": false,
      "site": "00b610c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:f48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61028",
      "incomplete_value": false,
      "site": "00b6102c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:eac:8"
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
      "unmatched:00b60ff0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b60ff4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61028",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6108c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b61090",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b610c4",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6102c ["INT_ADD", "register:40f0:8", ["const:b6102c:8", "const:4:8"]]
- 00b6102c ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b610c8 ["INT_ADD", "register:40f0:8", ["const:b610c8:8", "const:4:8"]]
+ 00b610c8 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b60ff0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b60ff0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b60ff0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b60ff4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b60ff4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b60ff4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b60ff4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f55e5e1223ce6ca5c15be3db5097fe69"></a>

### [`00b61050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61050.md) → [`00b610ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b610ec.md) _ZN8firebase12FutureHandleaSEOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bc70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc70.md) · 呼出先 3件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5bd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd40.md) · 呼出先 3件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6114c",
      "incomplete_value": true,
      "site": "00b61158",
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
            "const:c8:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b61154",
      "incomplete_value": true,
      "site": "00b61158",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b61150",
      "incomplete_value": false,
      "site": "00b61158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:f48:8"
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
      "unmatched:00b610a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6116c"
      ]
    ],
    [
      "unmatched:00b610b4",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b61144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6116c"
      ]
    ],
    [
      "00b61150",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b610bc ["INT_ADD", "register:40f0:8", ["const:b610bc:8", "const:4:8"]]
- 00b610bc ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b61158 ["INT_ADD", "register:40f0:8", ["const:b61158:8", "const:4:8"]]
+ 00b61158 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b61068 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b61068 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b61104 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b61104 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b61074 ["INT_ADD", "register:40f0:8", ["const:b61074:8", "const:4:8"]]
- 00b61074 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b61110 ["INT_ADD", "register:40f0:8", ["const:b61110:8", "const:4:8"]]
+ 00b61110 ["CALL", null, ["callee:00c5ace0:8"]]
~~~


<a id="compare-a4edeee9941a606a3cbc450507d284a4"></a>

### [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md) → [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md) FUN_00b611c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 7件 [`00b60494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60494.md) [`00b68240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68240.md) [`00bb4010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb4/00bb4010.md) [`00bc9490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9490.md) [`00bc9654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9654.md) · 呼出先 1件 [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 7件 [`00b60530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60530.md) [`00b682dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b682dc.md) [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) [`00bc952c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc952c.md) [`00bc96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc96f0.md) · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6112c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61134",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b210"
      ]
    ]
  ],
  "added": [
    [
      "00b611c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b611d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b210"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6112c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b6112c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b6112c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00b6112c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b61130 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00b61134 ["INT_ADD", "register:40f0:8", ["const:b61134:8", "const:4:8"]]
- 00b61134 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-aaae54b70834c6a89cfa94c25fdd7769"></a>

### [`00b6113c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6113c.md) → [`00b611d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611d8.md) _ZNSt6__ndk16vectorIN8firebase12FutureHandleENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bcf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bcf0.md) · 呼出先 6件 [`00b60eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eac.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5bdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdc0.md) · 呼出先 6件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.78% / 新版 86.78%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6128c",
      "incomplete_value": true,
      "site": "00b61290",
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
            "const:c8:8"
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
      "definition_site": "00b61288",
      "incomplete_value": true,
      "site": "00b61290",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b61284",
      "incomplete_value": false,
      "site": "00b61290",
      "value": [
        "leaf",
        "const:b60f48:8"
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
      "unmatched:00b6116c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b61240"
      ]
    ],
    [
      "unmatched:00b611cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b61298"
      ]
    ],
    [
      "00b61284",
      "PARAM",
      [
        "storage",
        "00b60eac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b61208",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b61240"
      ]
    ],
    [
      "00b61268",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b61298"
      ]
    ],
    [
      "00b61284",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b611f4 ["INT_ADD", "register:40f0:8", ["const:b611f4:8", "const:4:8"]]
- 00b611f4 ["CALL", null, ["callee:00c5acd0:8"]]
+ 00b61290 ["INT_ADD", "register:40f0:8", ["const:b61290:8", "const:4:8"]]
+ 00b61290 ["CALL", null, ["callee:00c5acd0:8"]]
- 00b6115c ["INT_SUB", "register:4040:8", ["register:40b8:8", "register:40c0:8"]]
- 00b61160 ["INT_SRIGHT", "register:40a0:8", ["register:4040:8", "const:4:8"]]
~~~


<a id="compare-c0f6b02ff456333669981fea57f8c9ef"></a>

### [`00b61320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61320.md) → [`00b613bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b613bc.md) FUN_00b613bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b5ecd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5ecd0.md) · 呼出先 4件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00b5ed6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5ed6c.md) · 呼出先 4件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b61320",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61324",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6139c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b613bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b613c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b61438",
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
- 00b61320 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b61320 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b61320 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b61320 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b61324 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b61324 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b61324 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b61324 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b61328 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b61328 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b61328 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b61328 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-1e12a527f7adacd519b1ddee6d9e7032"></a>

### [`00b613b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b613b0.md) → [`00b6144c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6144c.md) _INIT_282

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b60eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60eb4.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b60f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f50.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b613b8",
      "READ",
      [
        "storage",
        "00c9b7a8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b613b8",
      "PARAM",
      [
        "storage",
        "01126018",
        "firebase::ReferenceCountedFutureImpl::kInvalidHandle",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b613bc",
      "READ",
      [
        "storage",
        "00c9b7a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b61454",
      "READ",
      [
        "storage",
        "00c9b878",
        null,
        "pointer"
      ]
    ],
    [
      "00b61454",
      "PARAM",
      [
        "storage",
        "01126118",
        "firebase::ReferenceCountedFutureImpl::kInvalidHandle",
        "undefined8"
      ]
    ],
    [
      "00b61458",
      "READ",
      [
        "storage",
        "00c9b870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b613b0 ["COPY", "register:4008:8", ["const:c9b000:8"]]
- 00b613b4 ["COPY", "register:4000:8", ["const:c9b000:8"]]
- 00b613b8 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:7a8:8"]]
- 00b613b8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a22b7f13fe89ba380838620ddca39c98"></a>

### [`00b613d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b613d0.md) → [`00b6146c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6146c.md) _ZN8firebase17ModuleInitializerC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad10.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

アドレスに依存する影響 `store_value` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b61484",
      "incomplete_value": true,
      "site": "00b61488",
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
      "definition_site": "00b613e8",
      "incomplete_value": true,
      "site": "00b613ec",
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
      "unmatched:00b613d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b613d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b6147c",
      "READ",
      [
        "storage",
        "00c9b7e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b6146c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b61470",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b6147c",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b613d0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b613d0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b613d0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b613d0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b613d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b613d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b613d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b613d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b613d8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b613d8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b613d8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b613d8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-4ff2277ef7622b497c0426c389d18940"></a>

### [`00b61434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61434.md) → [`00b614d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b614d0.md) _ZN8firebase17ModuleInitializerD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b614ec",
      "incomplete_value": true,
      "site": "00b614f0",
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
      "definition_site": "00b61450",
      "incomplete_value": true,
      "site": "00b61454",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6147c",
      "incomplete_value": true,
      "site": "00b61480",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b614e4",
      "READ",
      [
        "storage",
        "00c9b7e8",
        null,
        "pointer"
      ]
    ],
    [
      "00b614f0",
      "DATA",
      [
        "storage",
        "00c904d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b614e4",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b614f0",
      "DATA",
      [
        "storage",
        "00c905a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61480 ["INT_ADD", "register:40f0:8", ["const:b61480:8", "const:4:8"]]
- 00b61480 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6151c ["INT_ADD", "register:40f0:8", ["const:b6151c:8", "const:4:8"]]
+ 00b6151c ["CALL", null, ["callee:00c57f80:8"]]
- 00b61448 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7e8:8"]]
- 00b61448 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b614e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8b8:8"]]
+ 00b614e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b61458 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b61458 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b614f4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b614f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-800c9a459caab403666fb67835a7dcd1"></a>

### [`00b61494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61494.md) → [`00b61530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61530.md) _ZN8firebase17ModuleInitializerD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.83% / 新版 95.83%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b614a8",
      "READ",
      [
        "storage",
        "00c9b7e8",
        null,
        "pointer"
      ]
    ],
    [
      "00b61550",
      "DATA",
      [
        "storage",
        "00c904d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b61544",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b61550",
      "DATA",
      [
        "storage",
        "00c905a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b614a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7e8:8"]]
- 00b614a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b614b8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b614b8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b61554 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b61554 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b614c0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b614c0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b6155c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b6155c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-ea056a13de21033db9a5ec80803479f1"></a>

### [`00b614f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b614f4.md) → [`00b61590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61590.md) _ZN8firebase17ModuleInitializer10InitializeEPNS_3AppEPvPFNS_10InitResultES2_S3_E

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5bd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5be20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.44% / 新版 67.44%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b614f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b614fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61500",
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
      "00b61594",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b61598",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b6159c",
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
- 00b614f4 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00b614f8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b614f8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b614f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b614f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b614fc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b614fc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b614fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b614fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-764520637012519c3cea36ad8daa5284"></a>

### [`00b615a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b615a0.md) → [`00b6163c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6163c.md) _ZN8firebase17ModuleInitializer10InitializeEPNS_3AppEPvPKPFNS_10InitResultES2_S3_Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd50.md) · 呼出先 14件 [`00b61754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61754.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 1件 [`00c5be20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be20.md) · 呼出先 14件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.49% / 新版 83.49%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b61688",
      "incomplete_value": true,
      "site": "00b61690",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6168c",
      "incomplete_value": true,
      "site": "00b61690",
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
            "const:130:8"
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
      "definition_site": "00b61698",
      "incomplete_value": true,
      "site": "00b6169c",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:00b615a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b615a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b615ac",
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
      "00b61640",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b61644",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b61648",
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
- 00b615f4 ["INT_ADD", "register:40f0:8", ["const:b615f4:8", "const:4:8"]]
- 00b615f4 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00b61690 ["INT_ADD", "register:40f0:8", ["const:b61690:8", "const:4:8"]]
+ 00b61690 ["CALL", null, ["callee:00c5aed0:8"]]
- 00b61600 ["INT_ADD", "register:40f0:8", ["const:b61600:8", "const:4:8"]]
- 00b61600 ["CALL", null, ["callee:00c5af50:8"]]
+ 00b6169c ["INT_ADD", "register:40f0:8", ["const:b6169c:8", "const:4:8"]]
+ 00b6169c ["CALL", null, ["callee:00c5af50:8"]]
- 00b6160c ["INT_ADD", "register:40f0:8", ["const:b6160c:8", "const:4:8"]]
- 00b6160c ["CALL", null, ["callee:00c5ab60:8"]]
+ 00b616a8 ["INT_ADD", "register:40f0:8", ["const:b616a8:8", "const:4:8"]]
+ 00b616a8 ["CALL", null, ["callee:00c5ab60:8"]]
~~~


<a id="compare-70f83a49ee6110a89f354169b4ce7dd6"></a>

### [`00b61754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61754.md) → [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) FUN_00b617f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00b615a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b615a0.md) [`00b62918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62918.md) · 呼出先 15件 [`00b628f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b628f4.md) [`00b6290c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b6290c.md) [`00b62918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62918.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00b6163c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6163c.md) [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) · 呼出先 15件 [`00b62990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62990.md) [`00b629a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629a8.md) [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6190c",
      "incomplete_value": false,
      "site": "00b6190c",
      "value": [
        "leaf",
        "const:b629b4:8"
      ]
    },
    "old": {
      "definition_site": "00b61870",
      "incomplete_value": false,
      "site": "00b61870",
      "value": [
        "leaf",
        "const:b62918:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b618c8",
      "incomplete_value": false,
      "site": "00b618cc",
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
            "const:13e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6182c",
      "incomplete_value": false,
      "site": "00b61830",
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
            "const:19a:8"
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
      "definition_site": "00b61924",
      "incomplete_value": true,
      "site": "00b6193c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61888",
      "incomplete_value": true,
      "site": "00b618a0",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b61758",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6175c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61760",
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
      "00b617f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b617f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b617fc",
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
- 00b61794 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b61794 ["INT_ADD", "register:40f0:8", ["const:b61794:8", "const:4:8"]]
- 00b61794 ["CALLIND", null, ["register:0:8"]]
+ 00b61830 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b61830 ["INT_ADD", "register:40f0:8", ["const:b61830:8", "const:4:8"]]
+ 00b61830 ["CALLIND", null, ["register:0:8"]]
- 00b61830 ["INT_ADD", "register:40f0:8", ["const:b61830:8", "const:4:8"]]
- 00b61830 ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00b618cc ["INT_ADD", "register:40f0:8", ["const:b618cc:8", "const:4:8"]]
+ 00b618cc ["CALL", null, ["callee:00c5aeb0:8"]]
- 00b618a0 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b618a0 ["INT_ADD", "register:40f0:8", ["const:b618a0:8", "const:4:8"]]
- 00b618a0 ["CALLIND", null, ["register:0:8"]]
+ 00b6193c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b6193c ["INT_ADD", "register:40f0:8", ["const:b6193c:8", "const:4:8"]]
+ 00b6193c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dec3ca31d024eb12082ba691c02286bd"></a>

### [`00b6194c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6194c.md) → [`00b619e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b619e8.md) _ZN8firebase17ModuleInitializer20InitializeLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b61a18",
      "incomplete_value": true,
      "site": "00b61a20",
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
      "definition_site": "00b61a1c",
      "incomplete_value": false,
      "site": "00b61a20",
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
      "unmatched:00b6194c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61950",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61954",
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
      "00b619e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b619ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b619f0",
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
- 00b61984 ["INT_ADD", "register:40f0:8", ["const:b61984:8", "const:4:8"]]
- 00b61984 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00b61a20 ["INT_ADD", "register:40f0:8", ["const:b61a20:8", "const:4:8"]]
+ 00b61a20 ["CALL", null, ["callee:00c5ad40:8"]]
- 00b6194c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b6194c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b6194c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b61950 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b61950 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b61950 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b61950 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ab3eadb451c9750ae131672ebdb40c93"></a>

### [`00b619ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b619ac.md) → [`00b61a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61a48.md) _ZN8firebase11AppCallback19NotifyAllAppCreatedEPNS_3AppEPNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS_10In

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b770.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5b840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b840.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.90% / 新版 83.90%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b619e8",
      "incomplete_value": true,
      "site": "00b619f0",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b61aa0",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b61aa4",
      "READ",
      [
        "storage",
        "01126030",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "unmatched:00b61a10",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aad0"
      ]
    ]
  ],
  "added": [
    [
      "00b61aa0",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b61aa4",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61aac",
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
- 00b619f0 ["INT_ADD", "register:40f0:8", ["const:b619f0:8", "const:4:8"]]
- 00b619f0 ["CALL", null, ["callee:00c5be50:8"]]
+ 00b61a8c ["INT_ADD", "register:40f0:8", ["const:b61a8c:8", "const:4:8"]]
+ 00b61a8c ["CALL", null, ["callee:00c5be50:8"]]
- 00b619e0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b619e0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b61a7c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b61a7c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b61a04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7c0:8"]]
- 00b61a04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b61aa0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:890:8"]]
+ 00b61aa0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-da5bd3628133123cfdd593967234eacb"></a>

### [`00b61b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61b84.md) → [`00b61c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61c20.md) _ZN8firebase11AppCallback21NotifyAllAppDestroyedEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b780.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b850.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b61c54",
      "incomplete_value": true,
      "site": "00b61c54",
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
      "definition_site": "00b61bb8",
      "incomplete_value": true,
      "site": "00b61bb8",
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
      "definition_site": "00b61c40",
      "incomplete_value": true,
      "site": "00b61c44",
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
      "00b61c34",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b61c3c",
      "READ",
      [
        "storage",
        "01126030",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61c4c",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b61c34",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b61c3c",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61c4c",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61ba8 ["INT_ADD", "register:40f0:8", ["const:b61ba8:8", "const:4:8"]]
- 00b61ba8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b61c44 ["INT_ADD", "register:40f0:8", ["const:b61c44:8", "const:4:8"]]
+ 00b61c44 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b61bb8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b61bb8 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 00b61c54 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b61c54 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00b61b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7c0:8"]]
- 00b61b98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b61c34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:890:8"]]
+ 00b61c34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b4e1ae28bda8f7c5993a384f5efff0d0"></a>

### [`00b61c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61c58.md) → [`00b61cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61cf4.md) _ZN8firebase11AppCallback16GetEnabledByNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5abd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abd0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5aca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aca0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b61d2c",
      "incomplete_value": true,
      "site": "00b61d30",
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
      "definition_site": "00b61c90",
      "incomplete_value": true,
      "site": "00b61c94",
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b61ca4"
      ],
      [
        "FALL_THROUGH",
        "00b61d40"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b61d40",
      "incomplete_value": true,
      "site": "00b61d48",
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
      "definition_site": "00b61ca4",
      "incomplete_value": true,
      "site": "00b61cac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40a0:8"
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
        "00b61ca4"
      ],
      [
        "FALL_THROUGH",
        "00b61d40"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b61d40",
      "incomplete_value": true,
      "site": "00b61d48",
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
      "definition_site": "00b61ca4",
      "incomplete_value": true,
      "site": "00b61cac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40a0:8"
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
      "unmatched:00b61c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b61c64",
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
      "00b61cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b61cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b61d00",
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
- 00b61c94 ["INT_ADD", "register:40f0:8", ["const:b61c94:8", "const:4:8"]]
- 00b61c94 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b61d30 ["INT_ADD", "register:40f0:8", ["const:b61d30:8", "const:4:8"]]
+ 00b61d30 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b61c58 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00b61c5c ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b61c5c ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b61c5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b61c5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2b930249246bb82f60ae6546c980933b"></a>

### [`00b61da0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61da0.md) → [`00b61e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61e3c.md) _ZN8firebase11AppCallback16SetEnabledByNameEPKcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 94.79% / 新版 94.79%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b61e90",
      "incomplete_value": true,
      "site": "00b61e90",
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
      "definition_site": "00b61df4",
      "incomplete_value": true,
      "site": "00b61df4",
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
      "definition_site": "00b61e7c",
      "incomplete_value": true,
      "site": "00b61e80",
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
      "definition_site": "00b61de0",
      "incomplete_value": true,
      "site": "00b61de4",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b61f50",
      "incomplete_value": true,
      "site": "00b61f5c",
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
            "const:31d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61eb4",
      "incomplete_value": true,
      "site": "00b61ec0",
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
            "const:379:8"
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
      "00b61e74",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b61e78",
      "READ",
      [
        "storage",
        "01126030",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61e88",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b61e74",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b61e78",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61e88",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61de4 ["INT_ADD", "register:40f0:8", ["const:b61de4:8", "const:4:8"]]
- 00b61de4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b61e80 ["INT_ADD", "register:40f0:8", ["const:b61e80:8", "const:4:8"]]
+ 00b61e80 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b61e40 ["INT_ADD", "register:40f0:8", ["const:b61e40:8", "const:4:8"]]
- 00b61e40 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b61edc ["INT_ADD", "register:40f0:8", ["const:b61edc:8", "const:4:8"]]
+ 00b61edc ["CALL", null, ["callee:00c57f60:8"]]
- 00b61ec0 ["INT_ADD", "register:40f0:8", ["const:b61ec0:8", "const:4:8"]]
- 00b61ec0 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b61f5c ["INT_ADD", "register:40f0:8", ["const:b61f5c:8", "const:4:8"]]
+ 00b61f5c ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-90dec273a1c0f53aea7964bac73bcd09"></a>

### [`00b61f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61f20.md) → [`00b61fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61fbc.md) _ZN8firebase11AppCallback13SetEnabledAllEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b61ff4",
      "incomplete_value": true,
      "site": "00b61ff4",
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
      "definition_site": "00b61f58",
      "incomplete_value": true,
      "site": "00b61f58",
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
      "definition_site": "00b61fe0",
      "incomplete_value": true,
      "site": "00b61fe4",
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
      "definition_site": "00b61f44",
      "incomplete_value": true,
      "site": "00b61f48",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62014",
      "incomplete_value": true,
      "site": "00b62018",
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
            "const:5c6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61f78",
      "incomplete_value": true,
      "site": "00b61f7c",
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
            "const:61a:8"
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
      "00b61fd4",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b61fdc",
      "READ",
      [
        "storage",
        "01126030",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61fec",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b61fd4",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b61fdc",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b61fec",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61f48 ["INT_ADD", "register:40f0:8", ["const:b61f48:8", "const:4:8"]]
- 00b61f48 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b61fe4 ["INT_ADD", "register:40f0:8", ["const:b61fe4:8", "const:4:8"]]
+ 00b61fe4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b61f7c ["INT_ADD", "register:40f0:8", ["const:b61f7c:8", "const:4:8"]]
- 00b61f7c ["CALL", null, ["callee:00c5b200:8"]]
+ 00b62018 ["INT_ADD", "register:40f0:8", ["const:b62018:8", "const:4:8"]]
+ 00b62018 ["CALL", null, ["callee:00c5b200:8"]]
- 00b61f38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7c0:8"]]
- 00b61f38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b61fd4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:890:8"]]
+ 00b61fd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-48bb529533066695cabe90778f4c3336"></a>

### [`00b62048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62048.md) → [`00b620e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b620e4.md) _ZN8firebase11AppCallback11AddCallbackEPS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abc0.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5ac90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac90.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 96.82% / 新版 96.82%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b62120",
      "incomplete_value": true,
      "site": "00b62120",
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
      "definition_site": "00b62084",
      "incomplete_value": true,
      "site": "00b62084",
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
      "definition_site": "00b621f0",
      "incomplete_value": false,
      "site": "00b621f4",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62154",
      "incomplete_value": false,
      "site": "00b62158",
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
            "const:624:8"
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
      "definition_site": "00b62240",
      "incomplete_value": false,
      "site": "00b62244",
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
            "const:69e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b621a4",
      "incomplete_value": false,
      "site": "00b621a8",
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
            "const:66d:8"
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
      "00b62118",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b6211c",
      "READ",
      [
        "storage",
        "01126028",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ],
    [
      "00b62140",
      "WRITE",
      [
        "storage",
        "01126028",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b62118",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ],
    [
      "00b6211c",
      "READ",
      [
        "storage",
        "01126128",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ],
    [
      "00b62140",
      "WRITE",
      [
        "storage",
        "01126128",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62158 ["INT_ADD", "register:40f0:8", ["const:b62158:8", "const:4:8"]]
- 00b62158 ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00b621f4 ["INT_ADD", "register:40f0:8", ["const:b621f4:8", "const:4:8"]]
+ 00b621f4 ["CALL", null, ["callee:00c5aeb0:8"]]
- 00b621a8 ["INT_ADD", "register:40f0:8", ["const:b621a8:8", "const:4:8"]]
- 00b621a8 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b62244 ["INT_ADD", "register:40f0:8", ["const:b62244:8", "const:4:8"]]
+ 00b62244 ["CALL", null, ["callee:00c5b200:8"]]
- 00b6207c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:7b8:8"]]
- 00b6207c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b62118 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:888:8"]]
+ 00b62118 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7c8ea7b64aae0d1d96e834285a49ebaf"></a>

### [`00b623d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b623d0.md) → [`00b6246c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6246c.md) _ZN8firebase16StaticFutureData22GetFutureDataForModuleEPKvi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bd30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd30.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac40.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5be00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be00.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad10.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.15% / 新版 95.15%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 4件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62498",
      "incomplete_value": true,
      "site": "00b6249c",
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
      "definition_site": "00b623fc",
      "incomplete_value": true,
      "site": "00b62400",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6247c",
      "incomplete_value": false,
      "site": "00b62480",
      "value": [
        "leaf",
        "const:130:8"
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
      "definition_site": "00b62484",
      "incomplete_value": true,
      "site": "00b6248c",
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
      "00b62488",
      "READ",
      [
        "storage",
        "00c9b7d0",
        null,
        "pointer"
      ]
    ],
    [
      "00b62494",
      "READ",
      [
        "storage",
        "01126038",
        "firebase::StaticFutureData::s_futures_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b624a4",
      "READ",
      [
        "storage",
        "00c9b7c8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b62488",
      "READ",
      [
        "storage",
        "00c9b8a0",
        null,
        "pointer"
      ]
    ],
    [
      "00b62494",
      "READ",
      [
        "storage",
        "01126138",
        "firebase::StaticFutureData::s_futures_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b624a4",
      "READ",
      [
        "storage",
        "00c9b898",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62400 ["INT_ADD", "register:40f0:8", ["const:b62400:8", "const:4:8"]]
- 00b62400 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b6249c ["INT_ADD", "register:40f0:8", ["const:b6249c:8", "const:4:8"]]
+ 00b6249c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b62480 ["INT_ADD", "register:40f0:8", ["const:b62480:8", "const:4:8"]]
- 00b62480 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6251c ["INT_ADD", "register:40f0:8", ["const:b6251c:8", "const:4:8"]]
+ 00b6251c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b62480 ["COPY", "tmp:0:8", ["const:40:8"]]
+ 00b62480 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00b62480 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00b62480 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-25338061a3a7e8e6e0917fdb2cd54629"></a>

### [`00b6256c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b6256c.md) → [`00b62608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62608.md) _ZN8firebase16StaticFutureData13CreateNewDataEPKvi

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad10.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b62580 ["INT_ADD", "register:40f0:8", ["const:b62580:8", "const:4:8"]]
- 00b62580 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6261c ["INT_ADD", "register:40f0:8", ["const:b6261c:8", "const:4:8"]]
+ 00b6261c ["CALL", null, ["callee:00c57f60:8"]]
- 00b6258c ["INT_ADD", "register:40f0:8", ["const:b6258c:8", "const:4:8"]]
- 00b6258c ["CALL", null, ["callee:00c5ad10:8"]]
+ 00b62628 ["INT_ADD", "register:40f0:8", ["const:b62628:8", "const:4:8"]]
+ 00b62628 ["CALL", null, ["callee:00c5ad10:8"]]
~~~


<a id="compare-d739839a807b0787c9ec23d4d4e2bb52"></a>

### [`00b625a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b625a0.md) → [`00b6263c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6263c.md) _ZN8firebase11SplitStringERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c5b650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b650.md) [`00c5b7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7f0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md) [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 12件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b62674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b627b0"
      ]
    ],
    [
      "unmatched:00b6268c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b8c0"
      ]
    ],
    [
      "unmatched:00b62698",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b626c0"
      ]
    ]
  ],
  "added": [
    [
      "00b62710",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b627b0"
      ]
    ],
    [
      "00b62728",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b8c0"
      ]
    ],
    [
      "00b62734",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6275c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62664 ["INT_ADD", "register:40f0:8", ["const:b62664:8", "const:4:8"]]
- 00b62664 ["CALL", null, ["callee:00c580a0:8"]]
+ 00b62700 ["INT_ADD", "register:40f0:8", ["const:b62700:8", "const:4:8"]]
+ 00b62700 ["CALL", null, ["callee:00c580a0:8"]]
- 00b62670 ["COPY", "tmp:0:8", ["const:1:8"]]
- 00b62670 ["INT_CARRY", "register:105:1", ["register:40e0:8", "tmp:0:8"]]
- 00b62670 ["INT_SCARRY", "register:106:1", ["register:40e0:8", "tmp:0:8"]]
- 00b62670 ["INT_ADD", "tmp:1:8", ["register:40e0:8", "tmp:0:8"]]
- 00b62674 ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
~~~


<a id="compare-e4ab91568a927e9a20fd59fba40583d4"></a>

### [`00b627b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b627b0.md) → [`00b6284c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6284c.md) _ZN8firebase19CreateApiIdentifierEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd60.md) · 呼出先 2件 [`00b62850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62850.md) [`00c585f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585f0.md)
- 新版 呼出元 1件 [`00c5be30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be30.md) · 呼出先 2件 [`00b628ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b628ec.md) [`00c586c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586c0.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b627e0",
      "incomplete_value": false,
      "site": "00b62800",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00b627d8",
      "incomplete_value": false,
      "site": "00b62800",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00b627e4",
      "incomplete_value": false,
      "site": "00b62800",
      "value": [
        "leaf",
        "const:0:8"
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
      "00b62868",
      "READ",
      [
        "storage",
        "01126048",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:00b627fc",
      "WRITE",
      [
        "storage",
        "01126048",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b62868",
      "READ",
      [
        "storage",
        "01126148",
        null,
        "undefined4"
      ]
    ],
    [
      "00b62898",
      "WRITE",
      [
        "storage",
        "01126148",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62800 ["INT_ADD", "register:40f0:8", ["const:b62800:8", "const:4:8"]]
- 00b62800 ["CALL", null, ["callee:00b628ec:8"]]
+ 00b6289c ["INT_ADD", "register:40f0:8", ["const:b6289c:8", "const:4:8"]]
+ 00b6289c ["CALL", null, ["callee:00b628ec:8"]]
- 00b62814 ["INT_ADD", "register:40f0:8", ["const:b62814:8", "const:4:8"]]
- 00b62814 ["CALL", null, ["callee:00c586c0:8"]]
+ 00b628b0 ["INT_ADD", "register:40f0:8", ["const:b628b0:8", "const:4:8"]]
+ 00b628b0 ["CALL", null, ["callee:00c586c0:8"]]
- 00b627cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:48:8"]]
- 00b627cc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00b627cc ["INT_ZEXT", "register:40b0:8", ["tmp:1:4"]]
+ 00b62868 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:148:8"]]
+ 00b62868 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 00b62868 ["INT_ZEXT", "register:40b0:8", ["tmp:1:4"]]
~~~


<a id="compare-76583fdf6ee8ea4325c213222155f2d9"></a>

### [`00b62850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62850.md) → [`00b628ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b628ec.md) FUN_00b628ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b627b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b627b0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5bdc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdc0.md)
- 新版 呼出元 1件 [`00b6284c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6284c.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5be90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be90.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 51.22% / 新版 51.22%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b62940",
      "incomplete_value": true,
      "site": "00b62940",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b628a4",
      "incomplete_value": true,
      "site": "00b628a4",
      "value": [
        "live",
        "register:4058:8"
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b62940",
      "incomplete_value": true,
      "site": "00b62940",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b628a4",
      "incomplete_value": true,
      "site": "00b628a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b62944",
      "incomplete_value": true,
      "site": "00b62944",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b628a8",
      "incomplete_value": true,
      "site": "00b628a8",
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
            "const:80:8"
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
      "unmatched:00b62860",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b62864",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b62868",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b628fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00b62900",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b62904",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b628cc ["INT_ADD", "register:40f0:8", ["const:b628cc:8", "const:4:8"]]
- 00b628cc ["CALL", null, ["callee:00c5be90:8"]]
+ 00b62968 ["INT_ADD", "register:40f0:8", ["const:b62968:8", "const:4:8"]]
+ 00b62968 ["CALL", null, ["callee:00c5be90:8"]]
- 00b6285c ["COPY", "tmp:0:8", ["const:100:8"]]
- 00b6285c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b6285c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b6285c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b62860 ["COPY", "tmp:0:8", ["register:4020:8"]]
- 00b62860 ["COPY", "tmp:1:8", ["register:4028:8"]]
- 00b62860 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00b62860 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bc3773a509b70d1553ccab579674bc13"></a>

### [`00b62918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62918.md) → [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) FUN_00b629b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b61754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61754.md) · 呼出先 12件 [`00b61754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b61754.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 1件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) · 呼出先 12件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62a44",
      "incomplete_value": false,
      "site": "00b62a48",
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
            "const:16f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b629a8",
      "incomplete_value": false,
      "site": "00b629ac",
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
            "const:1cb:8"
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
      "definition_site": "00b62a78",
      "incomplete_value": false,
      "site": "00b62a7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:333:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b629dc",
      "incomplete_value": false,
      "site": "00b629e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:38f:8"
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
      "definition_site": "00b62aa4",
      "incomplete_value": false,
      "site": "00b62ab8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:9f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62a08",
      "incomplete_value": false,
      "site": "00b62a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:a41:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b62a44",
      "PARAM",
      [
        "storage",
        "002ae1cb",
        null,
        "string"
      ]
    ],
    [
      "00b62a78",
      "PARAM",
      [
        "storage",
        "002af38f",
        null,
        "string"
      ]
    ],
    [
      "00b62aa4",
      "PARAM",
      [
        "storage",
        "0029fa41",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b62a44",
      "PARAM",
      [
        "storage",
        "002ae16f",
        null,
        "string"
      ]
    ],
    [
      "00b62a78",
      "PARAM",
      [
        "storage",
        "002af333",
        null,
        "string"
      ]
    ],
    [
      "00b62aa4",
      "PARAM",
      [
        "storage",
        "0029f9f4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62944 ["INT_ADD", "register:40f0:8", ["const:b62944:8", "const:4:8"]]
- 00b62944 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b629e0 ["INT_ADD", "register:40f0:8", ["const:b629e0:8", "const:4:8"]]
+ 00b629e0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b629ac ["INT_ADD", "register:40f0:8", ["const:b629ac:8", "const:4:8"]]
- 00b629ac ["CALL", null, ["callee:00c5b0b0:8"]]
+ 00b62a48 ["INT_ADD", "register:40f0:8", ["const:b62a48:8", "const:4:8"]]
+ 00b62a48 ["CALL", null, ["callee:00c5b0b0:8"]]
- 00b629e0 ["INT_ADD", "register:40f0:8", ["const:b629e0:8", "const:4:8"]]
- 00b629e0 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b62a7c ["INT_ADD", "register:40f0:8", ["const:b62a7c:8", "const:4:8"]]
+ 00b62a7c ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-3195bb5e6b1aae870e94d139c33c0eab"></a>

### [`00b62b94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62b94.md) → [`00b62c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62c30.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase10InitResultEEENS_19__map_value_co

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bd70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd70.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5be40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be40.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b62bbc"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b62c58"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b62c58",
      "incomplete_value": true,
      "site": "00b62d20",
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
      "definition_site": "00b62bbc",
      "incomplete_value": true,
      "site": "00b62c84",
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
      "unmatched:00b62bbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b62d20"
      ]
    ]
  ],
  "added": [
    [
      "00b62c58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b62d20"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62bbc ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00b62bbc ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 00b62bdc ["BRANCH", null, ["local:b6:8"]]
+ 00b62c78 ["BRANCH", null, ["local:b5:8"]]
- 00b62be4 ["CBRANCH", null, ["local:b17:8", "register:102:1"]]
+ 00b62c80 ["CBRANCH", null, ["local:b16:8", "register:102:1"]]
~~~


<a id="compare-5f515963f099bc0f0cd1add1781f5715"></a>

### [`00b62cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62cb4.md) → [`00b62d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62d50.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN8firebase11AppCallbackEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bda0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5be70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be70.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.86% / 新版 89.86%

優先判定に残った影響 `unresolved_branch_alignment` 4件

~~~diff
- 00b62ce8 ["COPY", "tmp:0:8", ["register:4058:8"]]
- 00b62ce8 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00b62ce8 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00b62ce8 ["COPY", "register:40b0:8", ["tmp:0:8"]]
- 00b62cec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b62cec ["COPY", "tmp:1:8", ["register:4050:8"]]
- 00b62cec ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00b62cec ["INT_ADD", "tmp:1:8", ["register:4008:8", "const:1:8"]]
- 00b62d38 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 00b62d38 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b62dd4 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 00b62dd4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-de9b293c6690b1f9b5feda040795d9ce"></a>

### [`00b62ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62ee8.md) → [`00b62f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62f84.md) _INIT_283

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b62fb0",
      "incomplete_value": true,
      "site": "00b62fb0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:890:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62f14",
      "incomplete_value": true,
      "site": "00b62f14",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b62fd0",
      "incomplete_value": true,
      "site": "00b62fd0",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00b62f34",
      "incomplete_value": true,
      "site": "00b62f34",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7d0:8"
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
      "definition_site": "00b62f1c",
      "incomplete_value": false,
      "site": "00b62f24",
      "value": [
        "leaf",
        "const:1:8"
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
      "00b62fa8",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b62fb0",
      "WRITE",
      [
        "storage",
        "01126030",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62fc8",
      "READ",
      [
        "storage",
        "00c9b7d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b62fa8",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b62fb0",
      "WRITE",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62fc8",
      "READ",
      [
        "storage",
        "00c9b8a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62f24 ["INT_ADD", "register:40f0:8", ["const:b62f24:8", "const:4:8"]]
- 00b62f24 ["CALL", null, ["callee:00c5ad50:8"]]
+ 00b62fc0 ["INT_ADD", "register:40f0:8", ["const:b62fc0:8", "const:4:8"]]
+ 00b62fc0 ["CALL", null, ["callee:00c5ad50:8"]]
- 00b62ef8 ["INT_ADD", "register:40f0:8", ["const:b62ef8:8", "const:4:8"]]
- 00b62ef8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b62f94 ["INT_ADD", "register:40f0:8", ["const:b62f94:8", "const:4:8"]]
+ 00b62f94 ["CALL", null, ["callee:00c57f60:8"]]
- 00b62f04 ["INT_ADD", "register:40f0:8", ["const:b62f04:8", "const:4:8"]]
- 00b62f04 ["CALL", null, ["callee:00c5ad50:8"]]
+ 00b62fa0 ["INT_ADD", "register:40f0:8", ["const:b62fa0:8", "const:4:8"]]
+ 00b62fa0 ["CALL", null, ["callee:00c5ad50:8"]]
~~~


<a id="compare-0ce83b2b071903be05b377cd54adf465"></a>

### [`00b62f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62f40.md) → [`00b62fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62fdc.md) _ZN8firebase7VariantaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md) · 呼出先 11件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) · 呼出先 11件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.38% / 新版 69.38%

優先判定に残った影響 `call_argument_candidate` 22件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6306c",
      "incomplete_value": false,
      "site": "00b63078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:35b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62fd0",
      "incomplete_value": true,
      "site": "00b62fdc",
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
            "const:3b7:8"
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
      "definition_site": "00b63074",
      "incomplete_value": false,
      "site": "00b63078",
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
            "const:801:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62fd8",
      "incomplete_value": true,
      "site": "00b62fdc",
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
            "const:855:8"
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
      "definition_site": "00b63070",
      "incomplete_value": true,
      "site": "00b63078",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62fd4",
      "incomplete_value": true,
      "site": "00b62fdc",
      "value": [
        "LOAD",
        "8",
        [
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
              "INT_LEFT"
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
      "unmatched:00b62f44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b62f48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b62f4c",
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
      "00b62fe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b62fe4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b62fe8",
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
- 00b62fdc ["INT_ADD", "register:40f0:8", ["const:b62fdc:8", "const:4:8"]]
- 00b62fdc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b63078 ["INT_ADD", "register:40f0:8", ["const:b63078:8", "const:4:8"]]
+ 00b63078 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b62fdc ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00b63004 ["INT_ADD", "register:40f0:8", ["const:b63004:8", "const:4:8"]]
- 00b63004 ["CALL", null, ["callee:00c5b650:8"]]
+ 00b630a0 ["INT_ADD", "register:40f0:8", ["const:b630a0:8", "const:4:8"]]
+ 00b630a0 ["CALL", null, ["callee:00c5b650:8"]]
~~~


<a id="compare-76672c4a77e744c4db3eb362292d89a4"></a>

### [`00b63284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63284.md) → [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) _ZN8firebase7Variant5ClearENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b63284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63284.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) · 呼出先 6件 [`00b63284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63284.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md)
- 新版 呼出元 2件 [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) · 呼出先 6件 [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63458",
      "incomplete_value": false,
      "site": "00b6345c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29e000:8"
          ],
          [
            "leaf",
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b633bc",
      "incomplete_value": false,
      "site": "00b633c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29e000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "unmatched:00b632bc",
      "DATA",
      [
        "storage",
        "0030bc14",
        "switchD_00b632c4::switchdataD_0030bc14",
        "byte"
      ]
    ],
    [
      "00b63360",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00b632f8"
      ]
    ],
    [
      "unmatched:00b63300",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b63464"
      ]
    ]
  ],
  "added": [
    [
      "00b63358",
      "DATA",
      [
        "storage",
        "0030bc54",
        "switchD_00b63360::switchdataD_0030bc54",
        "byte"
      ]
    ],
    [
      "00b63360",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00b633f0"
      ]
    ],
    [
      "00b6339c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b63464"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63324 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00b63324 ["CBRANCH", null, ["local:b44:8", "tmp:0:1"]]
+ 00b633c0 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00b633c0 ["CBRANCH", null, ["local:b48:8", "tmp:0:1"]]
- 00b633c0 ["INT_ADD", "register:40f0:8", ["const:b633c0:8", "const:4:8"]]
- 00b633c0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b6345c ["INT_ADD", "register:40f0:8", ["const:b6345c:8", "const:4:8"]]
+ 00b6345c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b632ac ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b632ac ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b632ac ["CBRANCH", null, ["local:b46:8", "tmp:1:1"]]
+ 00b63348 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b63348 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b63348 ["CBRANCH", null, ["local:b50:8", "tmp:1:1"]]
~~~


<a id="compare-6efe145b8577f8bfa7a3b0d99703ef2a"></a>

### [`00b63540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63540.md) → [`00b635dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b635dc.md) _ZNK8firebase7Variant14mutable_stringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bde0.md) · 呼出先 3件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5beb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5beb0.md) · 呼出先 3件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 73.44% / 新版 73.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63688",
      "incomplete_value": false,
      "site": "00b6368c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:5eb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b635ec",
      "incomplete_value": false,
      "site": "00b635f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:63f:8"
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
      "definition_site": "00b63698",
      "incomplete_value": false,
      "site": "00b636a0",
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
            "const:807:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b635fc",
      "incomplete_value": false,
      "site": "00b63604",
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
            "const:85b:8"
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
      "00b635f8",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b635b8"
      ]
    ],
    [
      "unmatched:00b63590",
      "PARAM",
      [
        "storage",
        "002be63f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b635f8",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b63654"
      ]
    ],
    [
      "00b6362c",
      "PARAM",
      [
        "storage",
        "002be5eb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b635f0 ["INT_ADD", "register:40f0:8", ["const:b635f0:8", "const:4:8"]]
- 00b635f0 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b6368c ["INT_ADD", "register:40f0:8", ["const:b6368c:8", "const:4:8"]]
+ 00b6368c ["CALL", null, ["callee:00c5ad70:8"]]
- 00b63604 ["INT_ADD", "register:40f0:8", ["const:b63604:8", "const:4:8"]]
- 00b63604 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b636a0 ["INT_ADD", "register:40f0:8", ["const:b636a0:8", "const:4:8"]]
+ 00b636a0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b6355c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7f0:8"]]
- 00b6355c ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b635f8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8c0:8"]]
+ 00b635f8 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f7786a6b33067878162c1ad6d4169366"></a>

### [`00b63640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63640.md) → [`00b636dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b636dc.md) _ZN8firebase7Variant16set_mutable_blobEPKvm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdd0.md) · 呼出先 5件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5be50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be50.md)
- 新版 呼出元 1件 [`00c5bea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bea0.md) · 呼出先 5件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63738",
      "incomplete_value": false,
      "site": "00b6373c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6369c",
      "incomplete_value": false,
      "site": "00b636a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:e48:8"
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
      "definition_site": "00b63750",
      "incomplete_value": false,
      "site": "00b63758",
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
            "const:159:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b636b4",
      "incomplete_value": false,
      "site": "00b636bc",
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
            "const:1b5:8"
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
      "definition_site": "00b63754",
      "incomplete_value": true,
      "site": "00b63758",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b636b8",
      "incomplete_value": true,
      "site": "00b636bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
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
      "00b63738",
      "PARAM",
      [
        "storage",
        "002bbe48",
        null,
        "string"
      ]
    ],
    [
      "00b63748",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63750",
      "PARAM",
      [
        "storage",
        "002a71b5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b63738",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b63748",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63750",
      "PARAM",
      [
        "storage",
        "002a7159",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b636a0 ["INT_ADD", "register:40f0:8", ["const:b636a0:8", "const:4:8"]]
- 00b636a0 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b6373c ["INT_ADD", "register:40f0:8", ["const:b6373c:8", "const:4:8"]]
+ 00b6373c ["CALL", null, ["callee:00c5ad70:8"]]
- 00b636bc ["INT_ADD", "register:40f0:8", ["const:b636bc:8", "const:4:8"]]
- 00b636bc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b63758 ["INT_ADD", "register:40f0:8", ["const:b63758:8", "const:4:8"]]
+ 00b63758 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b63660 ["INT_ADD", "register:40f0:8", ["const:b63660:8", "const:4:8"]]
- 00b63660 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00b636fc ["INT_ADD", "register:40f0:8", ["const:b636fc:8", "const:4:8"]]
+ 00b636fc ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-daed272cd76e748fb32554d3a58cc604"></a>

### [`00b636d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b636d4.md) → [`00b63770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63770.md) _ZN8firebase7VariantaSEOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) · 呼出先 3件 [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) · 呼出先 3件 [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6381c",
      "incomplete_value": false,
      "site": "00b63820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63780",
      "incomplete_value": false,
      "site": "00b63784",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:e48:8"
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
      "definition_site": "00b63834",
      "incomplete_value": false,
      "site": "00b6383c",
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
            "const:159:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63798",
      "incomplete_value": false,
      "site": "00b637a0",
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
            "const:1b5:8"
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
      "definition_site": "00b63838",
      "incomplete_value": true,
      "site": "00b6383c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6379c",
      "incomplete_value": true,
      "site": "00b637a0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
            ]
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
      "00b637c4",
      "DATA",
      [
        "storage",
        "0030bc2a",
        "switchD_00b63730::switchdataD_0030bc2a",
        "byte"
      ]
    ],
    [
      "00b6381c",
      "PARAM",
      [
        "storage",
        "002bbe48",
        null,
        "string"
      ]
    ],
    [
      "00b6382c",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b637c4",
      "DATA",
      [
        "storage",
        "0030bc6a",
        "switchD_00b637cc::switchdataD_0030bc6a",
        "byte"
      ]
    ],
    [
      "00b6381c",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b6382c",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63784 ["INT_ADD", "register:40f0:8", ["const:b63784:8", "const:4:8"]]
- 00b63784 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b63820 ["INT_ADD", "register:40f0:8", ["const:b63820:8", "const:4:8"]]
+ 00b63820 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b637a0 ["INT_ADD", "register:40f0:8", ["const:b637a0:8", "const:4:8"]]
- 00b637a0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b6383c ["INT_ADD", "register:40f0:8", ["const:b6383c:8", "const:4:8"]]
+ 00b6383c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b637d4 ["INT_ADD", "register:40f0:8", ["const:b637d4:8", "const:4:8"]]
- 00b637d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b63870 ["INT_ADD", "register:40f0:8", ["const:b63870:8", "const:4:8"]]
+ 00b63870 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-f3c2d93ae3339d6808da7729e8da0476"></a>

### [`00b637ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b637ec.md) → [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) _ZNK8firebase7VarianteqERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b637ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b637ec.md) [`00c5bdf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdf0.md) · 呼出先 5件 [`00b637ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b637ec.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 2件 [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md) · 呼出先 5件 [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 call, call_argument_candidate, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.20% / 新版 81.20%

優先判定に残った影響 `call_argument_candidate` 29件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63990",
      "incomplete_value": false,
      "site": "00b63994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b638f4",
      "incomplete_value": false,
      "site": "00b638f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:e48:8"
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
      "definition_site": "00b639a0",
      "incomplete_value": false,
      "site": "00b639a8",
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
            "const:159:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63904",
      "incomplete_value": false,
      "site": "00b6390c",
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
            "const:1b5:8"
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
      "definition_site": "00b639c4",
      "incomplete_value": false,
      "site": "00b639c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63928",
      "incomplete_value": false,
      "site": "00b6392c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:e48:8"
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
      "00b63920",
      "DATA",
      [
        "storage",
        "0030bc35",
        "switchD_00b63890::switchdataD_0030bc35",
        "byte"
      ]
    ],
    [
      "00b6397c",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63990",
      "PARAM",
      [
        "storage",
        "002bbe48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b63920",
      "DATA",
      [
        "storage",
        "0030bc75",
        "switchD_00b6392c::switchdataD_0030bc75",
        "byte"
      ]
    ],
    [
      "00b6397c",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63990",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b638f8 ["INT_ADD", "register:40f0:8", ["const:b638f8:8", "const:4:8"]]
- 00b638f8 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b63994 ["INT_ADD", "register:40f0:8", ["const:b63994:8", "const:4:8"]]
+ 00b63994 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b6390c ["INT_ADD", "register:40f0:8", ["const:b6390c:8", "const:4:8"]]
- 00b6390c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b639a8 ["INT_ADD", "register:40f0:8", ["const:b639a8:8", "const:4:8"]]
+ 00b639a8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b6392c ["INT_ADD", "register:40f0:8", ["const:b6392c:8", "const:4:8"]]
- 00b6392c ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b639c8 ["INT_ADD", "register:40f0:8", ["const:b639c8:8", "const:4:8"]]
+ 00b639c8 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-24cc7bf7f9e04e342c1ff28c74838584"></a>

### [`00b63d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b63/00b63d68.md) → [`00b63e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63e04.md) _ZNK8firebase7VariantltERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5a0.md) · 呼出先 5件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5bdf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdf0.md)
- 新版 呼出元 1件 [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) · 呼出先 5件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 74.40% / 新版 74.40%

優先判定に残った影響 `call_argument_candidate` 31件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63ffc",
      "incomplete_value": false,
      "site": "00b64004",
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
            "const:155:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63f60",
      "incomplete_value": false,
      "site": "00b63f68",
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
            "const:1b1:8"
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
      "definition_site": "00b64038",
      "incomplete_value": false,
      "site": "00b64040",
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
            "const:155:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63f9c",
      "incomplete_value": false,
      "site": "00b63fa4",
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
            "const:1b1:8"
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
      "definition_site": "00b64074",
      "incomplete_value": true,
      "site": "00b6407c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00b63e28",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b63e3c",
      "DATA",
      [
        "storage",
        "0030bc42",
        "switchD_00b63e44::switchdataD_0030bc42",
        "ushort"
      ]
    ],
    [
      "00b63ef4",
      "PARAM",
      [
        "storage",
        "002ae1fb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b63e28",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b63ed8",
      "DATA",
      [
        "storage",
        "0030bc82",
        "switchD_00b63ee0::switchdataD_0030bc82",
        "ushort"
      ]
    ],
    [
      "00b63ef4",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63f68 ["INT_ADD", "register:40f0:8", ["const:b63f68:8", "const:4:8"]]
- 00b63f68 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b64004 ["INT_ADD", "register:40f0:8", ["const:b64004:8", "const:4:8"]]
+ 00b64004 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b63fa4 ["INT_ADD", "register:40f0:8", ["const:b63fa4:8", "const:4:8"]]
- 00b63fa4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b64040 ["INT_ADD", "register:40f0:8", ["const:b64040:8", "const:4:8"]]
+ 00b64040 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b63fe0 ["INT_ADD", "register:40f0:8", ["const:b63fe0:8", "const:4:8"]]
- 00b63fe0 ["CALL", null, ["callee:00c5bec0:8"]]
+ 00b6407c ["INT_ADD", "register:40f0:8", ["const:b6407c:8", "const:4:8"]]
+ 00b6407c ["CALL", null, ["callee:00c5bec0:8"]]
~~~


<a id="compare-21e73a2ca0d75503e27adff9da9d9633"></a>

### [`00b645d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b645d4.md) → [`00b64670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64670.md) _ZNK8firebase7Variant14assert_is_typeENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ab00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab00.md) · 呼出先 2件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6469c",
      "incomplete_value": false,
      "site": "00b646a4",
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
            "const:19f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64600",
      "incomplete_value": false,
      "site": "00b64608",
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
            "const:1fb:8"
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
      "00b6469c",
      "PARAM",
      [
        "storage",
        "002ae1fb",
        null,
        "string"
      ]
    ],
    [
      "00b646b0",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b646bc",
      "PARAM",
      [
        "storage",
        "002af3b7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6469c",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ],
    [
      "00b646b0",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b646bc",
      "PARAM",
      [
        "storage",
        "002af35b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64608 ["INT_ADD", "register:40f0:8", ["const:b64608:8", "const:4:8"]]
- 00b64608 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b646a4 ["INT_ADD", "register:40f0:8", ["const:b646a4:8", "const:4:8"]]
+ 00b646a4 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b64600 ["COPY", "tmp:0:8", ["const:1fb:8"]]
- 00b64600 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b64600 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b64600 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6469c ["COPY", "tmp:0:8", ["const:19f:8"]]
+ 00b6469c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6469c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6469c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b64614 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:7f0:8"]]
- 00b64614 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b646b0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:8c0:8"]]
+ 00b646b0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7217725aec814f762c66698bfbc2214c"></a>

### [`00b64634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64634.md) → [`00b646d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b646d0.md) _ZNK8firebase7Variant18assert_is_not_typeENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b646f8",
      "incomplete_value": false,
      "site": "00b64700",
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
            "const:19f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6465c",
      "incomplete_value": false,
      "site": "00b64664",
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
            "const:1fb:8"
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
      "00b646f8",
      "PARAM",
      [
        "storage",
        "002ae1fb",
        null,
        "string"
      ]
    ],
    [
      "00b64708",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64714",
      "PARAM",
      [
        "storage",
        "002a95ba",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b646f8",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ],
    [
      "00b64708",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64714",
      "PARAM",
      [
        "storage",
        "002a95e9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64664 ["INT_ADD", "register:40f0:8", ["const:b64664:8", "const:4:8"]]
- 00b64664 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b64700 ["INT_ADD", "register:40f0:8", ["const:b64700:8", "const:4:8"]]
+ 00b64700 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b6465c ["COPY", "tmp:0:8", ["const:1fb:8"]]
- 00b6465c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6465c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6465c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b646f8 ["COPY", "tmp:0:8", ["const:19f:8"]]
+ 00b646f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b646f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b646f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6466c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7f0:8"]]
- 00b6466c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b64708 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8c0:8"]]
+ 00b64708 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0fb554362bfe31671a5b5cd846d06054"></a>

### [`00b64688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64688.md) → [`00b64724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64724.md) _ZNK8firebase7Variant16assert_is_stringEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ab20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab20.md) · 呼出先 2件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 59.26% / 新版 59.26%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b646c8",
      "PARAM",
      [
        "storage",
        "002be63f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b646cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5ad70"
      ]
    ],
    [
      "unmatched:00b646d8",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b64764",
      "PARAM",
      [
        "storage",
        "002be5eb",
        null,
        "string"
      ]
    ],
    [
      "00b64768",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5ad70"
      ]
    ],
    [
      "00b64774",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b646c8 ["COPY", "tmp:0:8", ["const:63f:8"]]
- 00b646c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b646c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b646c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b646cc ["INT_ADD", "register:40f0:8", ["const:b646cc:8", "const:4:8"]]
- 00b646cc ["CALL", null, ["callee:00c5ad70:8"]]
- 00b646d0 ["COPY", "register:4048:8", ["const:c9b000:8"]]
~~~


<a id="compare-93c0c09e31f1a79470c7fdaa61ec92e1"></a>

### [`00b646f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b646f4.md) → [`00b64790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64790.md) _ZNK8firebase7Variant14assert_is_blobEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b590.md) · 呼出先 2件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b660.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 52.17% / 新版 52.17%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b64724",
      "PARAM",
      [
        "storage",
        "002bbe48",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b64728",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5ad70"
      ]
    ],
    [
      "unmatched:00b64734",
      "READ",
      [
        "storage",
        "00c9b7f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b647c0",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b647c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5ad70"
      ]
    ],
    [
      "00b647d0",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6470c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b6470c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b647a8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b647a8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b64724 ["COPY", "tmp:0:8", ["const:e48:8"]]
- 00b64724 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b64724 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b64724 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b64728 ["INT_ADD", "register:40f0:8", ["const:b64728:8", "const:4:8"]]
- 00b64728 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-66c5253bf689278aee650c3b3a9ff587"></a>

### [`00b64750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64750.md) → [`00b647ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b647ec.md) _ZNK8firebase7Variant8AsStringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ab10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab10.md) · 呼出先 10件 [`00b648f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b648f4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5abe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abe0.md) · 呼出先 10件 [`00b64990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64990.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6487c",
      "incomplete_value": false,
      "site": "00b64884",
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
            "const:bb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b647e0",
      "incomplete_value": false,
      "site": "00b647e8",
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
            "const:117:8"
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
    "new": {
      "definition_site": "00b648b0",
      "incomplete_value": false,
      "site": "00b648b8",
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
            "const:61b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64814",
      "incomplete_value": false,
      "site": "00b6481c",
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
            "const:5ec:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b64830",
      "DATA",
      [
        "storage",
        "0030bc58",
        "switchD_00b647a0::switchdataD_0030bc58",
        "byte"
      ]
    ],
    [
      "00b6483c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00b647d8"
      ]
    ],
    [
      "00b6483c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00b6480c"
      ]
    ]
  ],
  "added": [
    [
      "00b64830",
      "DATA",
      [
        "storage",
        "0030bc98",
        "switchD_00b6483c::switchdataD_0030bc98",
        "byte"
      ]
    ],
    [
      "00b6483c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00b64874"
      ]
    ],
    [
      "00b6483c",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00b648a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b647e8 ["INT_ADD", "register:40f0:8", ["const:b647e8:8", "const:4:8"]]
- 00b647e8 ["CALL", null, ["callee:00b64990:8"]]
+ 00b64884 ["INT_ADD", "register:40f0:8", ["const:b64884:8", "const:4:8"]]
+ 00b64884 ["CALL", null, ["callee:00b64990:8"]]
- 00b6481c ["INT_ADD", "register:40f0:8", ["const:b6481c:8", "const:4:8"]]
- 00b6481c ["CALL", null, ["callee:00b64990:8"]]
+ 00b648b8 ["INT_ADD", "register:40f0:8", ["const:b648b8:8", "const:4:8"]]
+ 00b648b8 ["CALL", null, ["callee:00b64990:8"]]
- 00b6478c ["COPY", "tmp:0:8", ["const:c58:8"]]
- 00b6478c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b6478c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b6478c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b64828 ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 00b64828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c21068d699bd0c672bf16ad88b63d13b"></a>

### [`00b6498c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b6498c.md) → [`00b64a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64a28.md) _ZNK8firebase7Variant7AsInt64Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aaf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaf0.md) · 呼出先 3件 [`00c58590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58590.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 1件 [`00c5abc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abc0.md) · 呼出先 3件 [`00c58660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58660.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.44% / 新版 93.44%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b64a54",
      "DATA",
      [
        "storage",
        "0030bc62",
        "switchD_00b649c4::switchdataD_0030bc62",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b64a54",
      "DATA",
      [
        "storage",
        "0030bca2",
        "switchD_00b64a60::switchdataD_0030bca2",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b649a8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b649a8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b649a8 ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
+ 00b64a44 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b64a44 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b64a44 ["CBRANCH", null, ["local:b12:8", "tmp:1:1"]]
- 00b649b0 ["COPY", "tmp:0:8", ["const:c62:8"]]
- 00b649b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b649b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b649b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b64a4c ["COPY", "tmp:0:8", ["const:ca2:8"]]
+ 00b64a4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64a4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64a4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b649b4 ["COPY", "register:4058:8", ["const:b649c8:8"]]
~~~


<a id="compare-e59ef3fa9c91b48b15723e7d9f49cd2f"></a>

### [`00b64a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64a80.md) → [`00b64b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64b1c.md) _ZNK8firebase7Variant8AsDoubleEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c585c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585c0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64bcc",
      "incomplete_value": true,
      "site": "00b64bd4",
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
      "definition_site": "00b64bc8",
      "incomplete_value": false,
      "site": "00b64bd4",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:00b64ab0",
      "DATA",
      [
        "storage",
        "0030bc6c",
        "switchD_00b64abc::switchdataD_0030bc6c",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b64b4c",
      "DATA",
      [
        "storage",
        "0030bcac",
        "switchD_00b64b58::switchdataD_0030bcac",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64b38 ["INT_ADD", "register:40f0:8", ["const:b64b38:8", "const:4:8"]]
- 00b64b38 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b64bd4 ["INT_ADD", "register:40f0:8", ["const:b64bd4:8", "const:4:8"]]
+ 00b64bd4 ["CALL", null, ["callee:00c5a900:8"]]
- 00b64aa0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b64aa0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b64aa0 ["CBRANCH", null, ["local:b12:8", "tmp:1:1"]]
+ 00b64b3c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b64b3c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b64b3c ["CBRANCH", null, ["local:b13:8", "tmp:1:1"]]
- 00b64aa8 ["COPY", "tmp:0:8", ["const:c6c:8"]]
- 00b64aa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b64aa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b64aa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f6e00859ed3594ca802bfeffea7341b0"></a>

### [`00b64b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64b78.md) → [`00b64c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64c14.md) _ZNK8firebase7Variant6AsBoolEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5bdf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdf0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b64d3c",
      "incomplete_value": false,
      "site": "00b64d48",
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
      "definition_site": "00b64ca0",
      "incomplete_value": false,
      "site": "00b64cac",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b64dc8",
      "incomplete_value": false,
      "site": "00b64dd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29e000:8"
          ],
          [
            "leaf",
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64d2c",
      "incomplete_value": false,
      "site": "00b64d38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29e000:8"
          ],
          [
            "leaf",
            "const:da0:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64c34",
      "incomplete_value": true,
      "site": "00b64c48",
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
                "const:f0:8"
              ]
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
      "definition_site": "00b64b98",
      "incomplete_value": true,
      "site": "00b64bac",
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
      "unmatched:00b64ba0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b64ba4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b64ba8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b64c3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b64c40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b64c44",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64bac ["INT_ADD", "register:40f0:8", ["const:b64bac:8", "const:4:8"]]
- 00b64bac ["CALL", null, ["callee:00c5bec0:8"]]
+ 00b64c48 ["INT_ADD", "register:40f0:8", ["const:b64c48:8", "const:4:8"]]
+ 00b64c48 ["CALL", null, ["callee:00c5bec0:8"]]
- 00b64c60 ["INT_ADD", "register:40f0:8", ["const:b64c60:8", "const:4:8"]]
- 00b64c60 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b64cfc ["INT_ADD", "register:40f0:8", ["const:b64cfc:8", "const:4:8"]]
+ 00b64cfc ["CALL", null, ["callee:00c5a900:8"]]
- 00b64d48 ["BRANCH", null, ["local:b23:8"]]
+ 00b64de4 ["BRANCH", null, ["local:b22:8"]]
~~~


<a id="compare-c5e8d77c5184d16df1a98793caa55cb0"></a>

### [`00b64ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64ddc.md) → [`00b64e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64e78.md) _ZN8firebase7Variant8TypeNameENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aff0.md) · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0c0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate, store_destination

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b64ea4",
      "incomplete_value": true,
      "site": "00b64ea4",
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
            "const:14c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64e08",
      "incomplete_value": true,
      "site": "00b64e08",
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
            "const:4c:8"
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
      "definition_site": "00b64ebc",
      "incomplete_value": false,
      "site": "00b64ec0",
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
            "const:621:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64e20",
      "incomplete_value": false,
      "site": "00b64e24",
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
            "const:5f2:8"
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
      "definition_site": "00b64ed0",
      "incomplete_value": true,
      "site": "00b64ed8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64e34",
      "incomplete_value": true,
      "site": "00b64e3c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
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
      "00b64e88",
      "READ",
      [
        "storage",
        "0112604c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b64ea4",
      "WRITE",
      [
        "storage",
        "0112604c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b64ebc",
      "PARAM",
      [
        "storage",
        "002a95f2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b64e88",
      "READ",
      [
        "storage",
        "0112614c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b64ea4",
      "WRITE",
      [
        "storage",
        "0112614c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b64ebc",
      "PARAM",
      [
        "storage",
        "002a9621",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64e08 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 00b64e08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:4c:8"]]
- 00b64e08 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b64ea4 ["COPY", "tmp:0:4", ["register:4040:4"]]
+ 00b64ea4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:14c:8"]]
+ 00b64ea4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b64e24 ["INT_ADD", "register:40f0:8", ["const:b64e24:8", "const:4:8"]]
- 00b64e24 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b64ec0 ["INT_ADD", "register:40f0:8", ["const:b64ec0:8", "const:4:8"]]
+ 00b64ec0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b64dec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4c:8"]]
- 00b64dec ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b64dec ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
+ 00b64e88 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:14c:8"]]
+ 00b64e88 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b64e88 ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
~~~


<a id="compare-c98074329f02bc6885c9bb419355be46"></a>

### [`00b64e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64e40.md) → [`00b64edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64edc.md) _ZNSt6__ndk16vectorIN8firebase7VariantENS_9allocatorIS2_EEE6assignIPS2_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constru

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5be30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be30.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5bf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf00.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.51% / 新版 79.51%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64f44",
      "incomplete_value": true,
      "site": "00b64f4c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "definition_site": "00b64f48",
      "incomplete_value": false,
      "site": "00b64f4c",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b64fec",
      "incomplete_value": true,
      "site": "00b64ff4",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b64e90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b64f60"
      ]
    ],
    [
      "unmatched:00b64fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65060"
      ]
    ],
    [
      "unmatched:00b64fe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b650a4"
      ]
    ]
  ],
  "added": [
    [
      "00b64f2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b64f60"
      ]
    ],
    [
      "00b65050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65060"
      ]
    ],
    [
      "00b65080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b650a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64eb0 ["INT_ADD", "register:40f0:8", ["const:b64eb0:8", "const:4:8"]]
- 00b64eb0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b64f4c ["INT_ADD", "register:40f0:8", ["const:b64f4c:8", "const:4:8"]]
+ 00b64f4c ["CALL", null, ["callee:00c5a900:8"]]
- 00b64f58 ["INT_ADD", "register:40f0:8", ["const:b64f58:8", "const:4:8"]]
- 00b64f58 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b64ff4 ["INT_ADD", "register:40f0:8", ["const:b64ff4:8", "const:4:8"]]
+ 00b64ff4 ["CALL", null, ["callee:00c5a900:8"]]
- 00b64ff4 ["INT_ADD", "register:40f0:8", ["const:b64ff4:8", "const:4:8"]]
- 00b64ff4 ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00b65090 ["INT_ADD", "register:40f0:8", ["const:b65090:8", "const:4:8"]]
+ 00b65090 ["CALL", null, ["callee:00c5a9c0:8"]]
~~~


<a id="compare-c48d5c112c210e35c63dd9bf0d4f02d7"></a>

### [`00b65028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65028.md) → [`00b650c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b650c4.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE14__ass

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5be00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be00.md) · 呼出先 5件 [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md) [`00c5b5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5a0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5be10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be10.md) [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md)
- 新版 呼出元 1件 [`00c5bed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bed0.md) · 呼出先 5件 [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5bee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bee0.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 4件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65194",
      "incomplete_value": true,
      "site": "00b651a0",
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
      "definition_site": "00b65190",
      "incomplete_value": true,
      "site": "00b651a0",
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
            "const:20:8"
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
      "definition_site": "00b65178",
      "incomplete_value": true,
      "site": "00b65180",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b65054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65340"
      ]
    ],
    [
      "unmatched:00b65080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65154"
      ]
    ],
    [
      "unmatched:00b650d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b650d0"
      ]
    ]
  ],
  "added": [
    [
      "00b650f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65340"
      ]
    ],
    [
      "00b6511c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65154"
      ]
    ],
    [
      "00b6517c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6516c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65104 ["INT_ADD", "register:40f0:8", ["const:b65104:8", "const:4:8"]]
- 00b65104 ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00b651a0 ["INT_ADD", "register:40f0:8", ["const:b651a0:8", "const:4:8"]]
+ 00b651a0 ["CALL", null, ["callee:00c5a9c0:8"]]
- 00b65180 ["INT_ADD", "register:40f0:8", ["const:b65180:8", "const:4:8"]]
- 00b65180 ["CALL", null, ["callee:00c5b6b0:8"]]
+ 00b6521c ["INT_ADD", "register:40f0:8", ["const:b6521c:8", "const:4:8"]]
+ 00b6521c ["CALL", null, ["callee:00c5b6b0:8"]]
- 00b65054 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b65054 ["CBRANCH", null, ["local:b57:8", "tmp:0:1"]]
~~~


<a id="compare-0e5599d13200df04090126b158106b10"></a>

### [`00b65454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65454.md) → [`00b654f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b654f0.md) _ZN8firebase5MutexC1ENS0_4ModeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md) · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5be80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be80.md) [`00c5be90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bea0.md)
- 新版 呼出元 2件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf50.md) [`00c5bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf60.md) [`00c5bf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65528",
      "incomplete_value": false,
      "site": "00b6552c",
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
            "const:bf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6548c",
      "incomplete_value": false,
      "site": "00b65490",
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
            "const:11b:8"
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
      "definition_site": "00b65498",
      "incomplete_value": true,
      "site": "00b654a0",
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
      "definition_site": "00b6549c",
      "incomplete_value": false,
      "site": "00b654a0",
      "value": [
        "leaf",
        "const:1:8"
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
      "00b65528",
      "PARAM",
      [
        "storage",
        "002ad11b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b654ac",
      "PARAM",
      [
        "storage",
        "002ad11b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b654c8",
      "PARAM",
      [
        "storage",
        "002ad11b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65528",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ],
    [
      "00b65548",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ],
    [
      "00b65564",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65490 ["INT_ADD", "register:40f0:8", ["const:b65490:8", "const:4:8"]]
- 00b65490 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b6552c ["INT_ADD", "register:40f0:8", ["const:b6552c:8", "const:4:8"]]
+ 00b6552c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b654a0 ["INT_ADD", "register:40f0:8", ["const:b654a0:8", "const:4:8"]]
- 00b654a0 ["CALL", null, ["callee:00c5bf80:8"]]
+ 00b6553c ["INT_ADD", "register:40f0:8", ["const:b6553c:8", "const:4:8"]]
+ 00b6553c ["CALL", null, ["callee:00c5bf80:8"]]
- 00b654b0 ["INT_ADD", "register:40f0:8", ["const:b654b0:8", "const:4:8"]]
- 00b654b0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b6554c ["INT_ADD", "register:40f0:8", ["const:b6554c:8", "const:4:8"]]
+ 00b6554c ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-015913b90793f794605378cda8a1787d"></a>

### [`00b65510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65510.md) → [`00b655ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b655ac.md) _ZN8firebase5MutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00bb8bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb8bdc.md) [`00bbd6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bbd/00bbd6c0.md) [`00bc1ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc1ad8.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) · 呼出先 2件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md)
- 新版 呼出元 4件 [`00bb8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8c78.md) [`00bbd75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd75c.md) [`00bc1b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b74.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) · 呼出先 2件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.00% / 新版 90.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b65524",
      "PARAM",
      [
        "storage",
        "002ad11b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b655c0",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65518 ["INT_ADD", "register:40f0:8", ["const:b65518:8", "const:4:8"]]
- 00b65518 ["CALL", null, ["callee:00c5b760:8"]]
+ 00b655b4 ["INT_ADD", "register:40f0:8", ["const:b655b4:8", "const:4:8"]]
+ 00b655b4 ["CALL", null, ["callee:00c5b760:8"]]
- 00b6551c ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 00b6551c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b655b8 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 00b655b8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b65524 ["COPY", "tmp:0:8", ["const:11b:8"]]
- 00b65524 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65524 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65524 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5abb8e279fa4615063d8cb7b246eaac0"></a>

### [`00b65590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65590.md) → [`00b6562c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6562c.md) _ZN8firebase3app19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEENS_4util16Clas

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
      "definition_site": "00b65658",
      "incomplete_value": true,
      "site": "00b65658",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b655bc",
      "incomplete_value": true,
      "site": "00b655bc",
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
            "const:50:8"
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
      "definition_site": "00b65640",
      "incomplete_value": true,
      "site": "00b65640",
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
      "definition_site": "00b655a4",
      "incomplete_value": true,
      "site": "00b655a4",
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
      "definition_site": "00b6564c",
      "incomplete_value": false,
      "site": "00b65650",
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
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b655b0",
      "incomplete_value": false,
      "site": "00b655b4",
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
            "const:cab:8"
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
      "00b6563c",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6564c",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ],
    [
      "00b65658",
      "WRITE",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6563c",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6564c",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b65658",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b655b4 ["INT_ADD", "register:40f0:8", ["const:b655b4:8", "const:4:8"]]
- 00b655b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65650 ["INT_ADD", "register:40f0:8", ["const:b65650:8", "const:4:8"]]
+ 00b65650 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b655bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b655bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65658 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b65658 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b655a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b655a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6563c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b6563c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3799605725ecff145ee5be3ad9e98f2b"></a>

### [`00b655d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b655d0.md) → [`00b6566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6566c.md) _ZN8firebase3app19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b65698",
      "incomplete_value": true,
      "site": "00b65698",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b655fc",
      "incomplete_value": true,
      "site": "00b655fc",
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
            "const:50:8"
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
      "definition_site": "00b65680",
      "incomplete_value": true,
      "site": "00b65680",
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
      "definition_site": "00b655e4",
      "incomplete_value": true,
      "site": "00b655e4",
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
      "definition_site": "00b65688",
      "incomplete_value": false,
      "site": "00b65690",
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
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b655ec",
      "incomplete_value": false,
      "site": "00b655f4",
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
            "const:cab:8"
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
      "00b6567c",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65688",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ],
    [
      "00b65698",
      "WRITE",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6567c",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65688",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b65698",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b655f4 ["INT_ADD", "register:40f0:8", ["const:b655f4:8", "const:4:8"]]
- 00b655f4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65690 ["INT_ADD", "register:40f0:8", ["const:b65690:8", "const:4:8"]]
+ 00b65690 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b655fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b655fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65698 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b65698 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b655e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b655e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6567c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b6567c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-14e9058e4b91abc111584122ab10f081"></a>

### [`00b65610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65610.md) → [`00b656ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b656ac.md) _ZN8firebase3app10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b656dc",
      "incomplete_value": true,
      "site": "00b656dc",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65640",
      "incomplete_value": true,
      "site": "00b65640",
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
            "const:50:8"
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
      "definition_site": "00b656c0",
      "incomplete_value": true,
      "site": "00b656c0",
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
      "definition_site": "00b65624",
      "incomplete_value": true,
      "site": "00b65624",
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
      "definition_site": "00b656cc",
      "incomplete_value": false,
      "site": "00b656d4",
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
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65630",
      "incomplete_value": false,
      "site": "00b65638",
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
            "const:cab:8"
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
      "00b656bc",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b656cc",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ],
    [
      "00b656dc",
      "WRITE",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b656bc",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b656cc",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b656dc",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65638 ["INT_ADD", "register:40f0:8", ["const:b65638:8", "const:4:8"]]
- 00b65638 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b656d4 ["INT_ADD", "register:40f0:8", ["const:b656d4:8", "const:4:8"]]
+ 00b656d4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65640 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b65640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b656dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b656dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65620 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b65620 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b656bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b656bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-253dcd9b633915448a1581978be7ffbc"></a>

### [`00b65654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65654.md) → [`00b656f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b656f0.md) _ZN8firebase3app10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65704",
      "incomplete_value": true,
      "site": "00b65704",
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
      "definition_site": "00b65668",
      "incomplete_value": true,
      "site": "00b65668",
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
      "definition_site": "00b6570c",
      "incomplete_value": true,
      "site": "00b65718",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65670",
      "incomplete_value": false,
      "site": "00b6567c",
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
            "const:cab:8"
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
      "00b65700",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65704",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b65688"
      ]
    ],
    [
      "unmatched:00b65670",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65700",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65704",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65724"
      ]
    ],
    [
      "00b6570c",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65668 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b65668 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b65704 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b65704 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b6567c ["INT_ADD", "register:40f0:8", ["const:b6567c:8", "const:4:8"]]
- 00b6567c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65718 ["INT_ADD", "register:40f0:8", ["const:b65718:8", "const:4:8"]]
+ 00b65718 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65664 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:50:8"]]
- 00b65664 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65700 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
+ 00b65700 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d64c45b85730f20871e7f6179b97f33d"></a>

### [`00b65698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65698.md) → [`00b65734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65734.md) _ZN8firebase3app8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6569c",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65738",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65698 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b6569c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:50:8"]]
- 00b6569c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b656a0 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00b656a0 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-43d34dc0ab6b782dbd0f28f8815d0f82"></a>

### [`00b656a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b656a4.md) → [`00b65740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65740.md) _ZN8firebase3app15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 40.74% / 新版 40.74%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b656ec",
      "incomplete_value": true,
      "site": "00b656f0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00b656a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b656a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b656ac",
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
      "00b65740",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b65744",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b65748",
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
- 00b656f0 ["INT_ADD", "register:40f0:8", ["const:b656f0:8", "const:4:8"]]
- 00b656f0 ["CALL", null, ["callee:00c5b030:8"]]
+ 00b6578c ["INT_ADD", "register:40f0:8", ["const:b6578c:8", "const:4:8"]]
+ 00b6578c ["CALL", null, ["callee:00c5b030:8"]]
- 00b656a4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b656a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b656a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b656a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b656a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b656a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b656a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-53a82ccd81ebcf696c5b5d75a6cd7233"></a>

### [`00b65710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65710.md) → [`00b657ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b657ac.md) _ZN8firebase3app12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 46.43% / 新版 46.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b65724",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b65728",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6580c"
      ]
    ],
    [
      "unmatched:00b65730",
      "READ",
      [
        "storage",
        "01126058",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b657c0",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b657c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6580c"
      ]
    ],
    [
      "00b657cc",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65724 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:50:8"]]
- 00b65724 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b65728 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b65728 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 00b6572c ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-f6da7ea1cc8e0ba2d9f358ed7054ccfc"></a>

### [`00b65780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65780.md) → [`00b6581c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6581c.md) _ZN8firebase3app14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b6585c",
      "incomplete_value": true,
      "site": "00b6585c",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b657c0",
      "incomplete_value": true,
      "site": "00b657c0",
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
            "const:50:8"
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
      "definition_site": "00b65838",
      "incomplete_value": true,
      "site": "00b65838",
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
      "definition_site": "00b6579c",
      "incomplete_value": true,
      "site": "00b6579c",
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
      "definition_site": "00b65840",
      "incomplete_value": false,
      "site": "00b65854",
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
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b657a4",
      "incomplete_value": false,
      "site": "00b657b8",
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
            "const:cab:8"
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
      "00b65830",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65840",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ],
    [
      "00b6585c",
      "WRITE",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65830",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65840",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b6585c",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b657b8 ["INT_ADD", "register:40f0:8", ["const:b657b8:8", "const:4:8"]]
- 00b657b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65854 ["INT_ADD", "register:40f0:8", ["const:b65854:8", "const:4:8"]]
+ 00b65854 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b657c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:50:8"]]
- 00b657c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b6585c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
+ 00b6585c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65794 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:50:8"]]
- 00b65794 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65830 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
+ 00b65830 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


