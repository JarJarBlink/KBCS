# v16.0.1 → v16.0.2 · 最優先の変更候補 (93)

[一覧の目次](README.md)

<a id="compare-b9b461f905427aa439e3f5fc894fc5ba"></a>

### [`00bd3d60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3d60.md) → [`00bd3dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3dfc.md) _ZN8firebase4auth20ReleaseCommonClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dca0.md) · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd70.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 35.37% / 新版 35.37%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 30件, `unresolved_store_alignment` 20件

アドレスに依存する影響 `branch_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd4000",
      "incomplete_value": true,
      "site": "00bd4000",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd40e0",
      "incomplete_value": true,
      "site": "00bd40e0",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd3e38",
      "incomplete_value": true,
      "site": "00bd3e38",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd412c",
      "incomplete_value": true,
      "site": "00bd412c",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd3e18",
      "incomplete_value": true,
      "site": "00bd3e18",
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
      "definition_site": "00bd3d7c",
      "incomplete_value": true,
      "site": "00bd3d7c",
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
      "00bd3e10",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3e18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd3dc0"
      ]
    ],
    [
      "unmatched:00bd3d84",
      "READ",
      [
        "storage",
        "01126850",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3e10",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3e18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd3e5c"
      ]
    ],
    [
      "00bd3e20",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3e18 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00bd3e38 ["COPY", "register:4000:8", ["register:4098:8"]]
- 00bd3e64 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-e923fa349a0a0d43d2594a0601b53e6e"></a>

### [`00bd41f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd41f8.md) → [`00bd4294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4294.md) _ZN8firebase4auth22ErrorCodeFromExceptionEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd80.md) · 呼出先 10件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5de50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de50.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.96% / 新版 73.96%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 27件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd42f8",
      "incomplete_value": true,
      "site": "00bd4304",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ad8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd425c",
      "incomplete_value": true,
      "site": "00bd4268",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9d8:8"
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
      "definition_site": "00bd427c",
      "incomplete_value": true,
      "site": "00bd4284",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00bd4450",
      "incomplete_value": true,
      "site": "00bd4458",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00bd4208",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd42d8",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42f8",
      "READ",
      [
        "storage",
        "011269d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd42a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd42d8",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42f8",
      "READ",
      [
        "storage",
        "01126ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4268 ["INT_ADD", "register:40f0:8", ["const:bd4268:8", "const:4:8"]]
- 00bd4268 ["CALL", null, ["callee:00497874:8"]]
+ 00bd4304 ["INT_ADD", "register:40f0:8", ["const:bd4304:8", "const:4:8"]]
+ 00bd4304 ["CALL", null, ["callee:00497874:8"]]
- 00bd4284 ["INT_ADD", "register:40f0:8", ["const:bd4284:8", "const:4:8"]]
- 00bd4284 ["CALL", null, ["callee:00c5b460:8"]]
+ 00bd4320 ["INT_ADD", "register:40f0:8", ["const:bd4320:8", "const:4:8"]]
+ 00bd4320 ["CALL", null, ["callee:00c5b460:8"]]
- 00bd4304 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 00bd4304 ["INT_CARRY", "register:105:1", ["register:4068:8", "tmp:0:8"]]
- 00bd4304 ["INT_SCARRY", "register:106:1", ["register:4068:8", "tmp:0:8"]]
- 00bd4304 ["INT_ADD", "tmp:1:8", ["register:4068:8", "tmp:0:8"]]
~~~


<a id="compare-424f7bc9169d07267584a53c34db90f1"></a>

### [`00bd4678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4678.md) → [`00bd4714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4714.md) _ZN8firebase4auth30CheckAndClearJniAuthExceptionsEP7_JNIEnvPNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd10.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af50.md) [`00c5dd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd80.md)
- 新版 呼出元 1件 [`00c5dde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dde0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b020.md) [`00c5de50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd467c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd4680",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd4684",
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
      "00bd4718",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bd471c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd4720",
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
- 00bd4678 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00bd467c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 00bd467c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00bd4680 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bd4680 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bd4680 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00bd4680 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-482cef5ae82df3b3043f7021f1590843"></a>

### [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) → [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) _ZN8firebase4auth14ReadAuthResultEP8_jobjectPNS0_18FutureCallbackDataINS0_10AuthResultEEEbPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 11件 [`00bce0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce0c8.md) [`00bce890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce890.md) [`00bceb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bceb00.md) [`00bcec8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcec8c.md) [`00bcef18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcef18.md) · 呼出先 11件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9f0.md) [`00c5aa30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa30.md) [`00c5aa50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa50.md)
- 新版 呼出元 11件 [`00bce164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce164.md) [`00bce92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce92c.md) [`00bceb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb9c.md) [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) · 呼出先 11件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ab00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab00.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.73% / 新版 81.73%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd491c",
      "incomplete_value": true,
      "site": "00bd4928",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4880",
      "incomplete_value": true,
      "site": "00bd488c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:858:8"
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
      "definition_site": "00bd4990",
      "incomplete_value": true,
      "site": "00bd4998",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd4970",
      "incomplete_value": true,
      "site": "00bd4974",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00bd4830",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd4834",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd4838",
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
      "00bd48cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bd48d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bd48d4",
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
- 00bd488c ["INT_ADD", "register:40f0:8", ["const:bd488c:8", "const:4:8"]]
- 00bd488c ["CALL", null, ["callee:00497874:8"]]
+ 00bd4928 ["INT_ADD", "register:40f0:8", ["const:bd4928:8", "const:4:8"]]
+ 00bd4928 ["CALL", null, ["callee:00497874:8"]]
- 00bd48fc ["INT_ADD", "register:40f0:8", ["const:bd48fc:8", "const:4:8"]]
- 00bd48fc ["CALL", null, ["callee:00c5ab00:8"]]
+ 00bd4998 ["INT_ADD", "register:40f0:8", ["const:bd4998:8", "const:4:8"]]
+ 00bd4998 ["CALL", null, ["callee:00c5ab00:8"]]
- 00bd4928 ["INT_ADD", "register:40f0:8", ["const:bd4928:8", "const:4:8"]]
- 00bd4928 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-abe5c0d76da6b49160766315e51d4efa"></a>

### [`00bd49f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd49f4.md) → [`00bd4a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4a90.md) _ZN8firebase4auth22ReadAdditionalUserInfoEP7_JNIEnvP8_jobjectPNS0_18AdditionalUserInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd90.md) · 呼出先 9件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9f0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5de60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de60.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd4ac8",
      "incomplete_value": true,
      "site": "00bd4ad4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:988:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4a2c",
      "incomplete_value": true,
      "site": "00bd4a38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:888:8"
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
      "00bd4ac8",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4ae4",
      "READ",
      [
        "storage",
        "01126890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4b00",
      "READ",
      [
        "storage",
        "01126898",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4ac8",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4ae4",
      "READ",
      [
        "storage",
        "01126990",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4b00",
      "READ",
      [
        "storage",
        "01126998",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4a38 ["INT_ADD", "register:40f0:8", ["const:bd4a38:8", "const:4:8"]]
- 00bd4a38 ["CALL", null, ["callee:00497874:8"]]
+ 00bd4ad4 ["INT_ADD", "register:40f0:8", ["const:bd4ad4:8", "const:4:8"]]
+ 00bd4ad4 ["CALL", null, ["callee:00497874:8"]]
- 00bd4ad4 ["INT_ADD", "register:40f0:8", ["const:bd4ad4:8", "const:4:8"]]
- 00bd4ad4 ["CALL", null, ["callee:00c5de40:8"]]
+ 00bd4b70 ["INT_ADD", "register:40f0:8", ["const:bd4b70:8", "const:4:8"]]
+ 00bd4b70 ["CALL", null, ["callee:00c5de40:8"]]
- 00bd4a28 ["COPY", "tmp:0:8", ["const:888:8"]]
- 00bd4a28 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
- 00bd4a28 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
- 00bd4a28 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
+ 00bd4ac4 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00bd4ac4 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
+ 00bd4ac4 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
+ 00bd4ac4 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
~~~


<a id="compare-04247c7a3ae470ccf08fbc164cc06538"></a>

### [`00bd4c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4c3c.md) → [`00bd4cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4cd8.md) _ZN8firebase4auth22ReadUserFromAuthResultEP8_jobjectPNS0_18FutureCallbackDataINS0_4UserEEEbPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00bce4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce4dc.md) [`00be0204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0204.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa30.md) [`00c5aa50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa50.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 2件 [`00bce578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce578.md) [`00be02a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be02a0.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab00.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.57% / 新版 98.57%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd4d2c",
      "incomplete_value": true,
      "site": "00bd4d38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4c90",
      "incomplete_value": true,
      "site": "00bd4c9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:858:8"
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
      "00bd4d2c",
      "READ",
      [
        "storage",
        "01126858",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4d2c",
      "READ",
      [
        "storage",
        "01126958",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4c9c ["INT_ADD", "register:40f0:8", ["const:bd4c9c:8", "const:4:8"]]
- 00bd4c9c ["CALL", null, ["callee:00497874:8"]]
+ 00bd4d38 ["INT_ADD", "register:40f0:8", ["const:bd4d38:8", "const:4:8"]]
+ 00bd4d38 ["CALL", null, ["callee:00497874:8"]]
- 00bd4c80 ["INT_ADD", "register:40f0:8", ["const:bd4c80:8", "const:4:8"]]
- 00bd4c80 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bd4d1c ["INT_ADD", "register:40f0:8", ["const:bd4d1c:8", "const:4:8"]]
+ 00bd4d1c ["CALL", null, ["callee:00c5b150:8"]]
- 00bd4c90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:858:8"]]
- 00bd4c90 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd4d2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:958:8"]]
+ 00bd4d2c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b061ed45103f9966468a331c84aa79cf"></a>

### [`00bd4e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4e80.md) → [`00bd4f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f1c.md) _ZN8firebase4auth10credential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd4f48",
      "incomplete_value": true,
      "site": "00bd4f48",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4eac",
      "incomplete_value": true,
      "site": "00bd4eac",
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
            "const:a48:8"
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
      "definition_site": "00bd4f30",
      "incomplete_value": true,
      "site": "00bd4f30",
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
      "definition_site": "00bd4e94",
      "incomplete_value": true,
      "site": "00bd4e94",
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
      "definition_site": "00bd4f3c",
      "incomplete_value": false,
      "site": "00bd4f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4ea0",
      "incomplete_value": false,
      "site": "00bd4ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "00bd4f2c",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4f3c",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ],
    [
      "00bd4f48",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4f2c",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4f3c",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd4f48",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4ea4 ["INT_ADD", "register:40f0:8", ["const:bd4ea4:8", "const:4:8"]]
- 00bd4ea4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd4f40 ["INT_ADD", "register:40f0:8", ["const:bd4f40:8", "const:4:8"]]
+ 00bd4f40 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd4eac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4eac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4e90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4e90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd4f2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4f2c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-889500491c9edbac80f8a162f1743c3e"></a>

### [`00bd4ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4ec0.md) → [`00bd4f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f5c.md) _ZN8firebase4auth10credential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd4f88",
      "incomplete_value": true,
      "site": "00bd4f88",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4eec",
      "incomplete_value": true,
      "site": "00bd4eec",
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
            "const:a48:8"
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
      "definition_site": "00bd4f70",
      "incomplete_value": true,
      "site": "00bd4f70",
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
      "definition_site": "00bd4ed4",
      "incomplete_value": true,
      "site": "00bd4ed4",
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
      "definition_site": "00bd4f78",
      "incomplete_value": false,
      "site": "00bd4f80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4edc",
      "incomplete_value": false,
      "site": "00bd4ee4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "00bd4f6c",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4f78",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ],
    [
      "00bd4f88",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4f6c",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4f78",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd4f88",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4ee4 ["INT_ADD", "register:40f0:8", ["const:bd4ee4:8", "const:4:8"]]
- 00bd4ee4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd4f80 ["INT_ADD", "register:40f0:8", ["const:bd4f80:8", "const:4:8"]]
+ 00bd4f80 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd4eec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4eec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4f88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4f88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4ed0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4ed0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd4f6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4f6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e48583e4d9ce9bc5f6f34ee601dc156b"></a>

### [`00bd4f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4f00.md) → [`00bd4f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f9c.md) _ZN8firebase4auth10credential10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd4fcc",
      "incomplete_value": true,
      "site": "00bd4fcc",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f30",
      "incomplete_value": true,
      "site": "00bd4f30",
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
            "const:a48:8"
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
      "definition_site": "00bd4fb0",
      "incomplete_value": true,
      "site": "00bd4fb0",
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
      "definition_site": "00bd4f14",
      "incomplete_value": true,
      "site": "00bd4f14",
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
      "definition_site": "00bd4fbc",
      "incomplete_value": false,
      "site": "00bd4fc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f20",
      "incomplete_value": false,
      "site": "00bd4f28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "00bd4fac",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4fbc",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ],
    [
      "00bd4fcc",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4fac",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4fbc",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd4fcc",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4f28 ["INT_ADD", "register:40f0:8", ["const:bd4f28:8", "const:4:8"]]
- 00bd4f28 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd4fc4 ["INT_ADD", "register:40f0:8", ["const:bd4fc4:8", "const:4:8"]]
+ 00bd4fc4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd4f30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4f30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4fcc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4fcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4f10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4f10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd4fac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4fac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-746d53dd67a1061c76693b837d78cc04"></a>

### [`00bd4f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4f44.md) → [`00bd4fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4fe0.md) _ZN8firebase4auth10credential10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd5010",
      "incomplete_value": true,
      "site": "00bd5010",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f74",
      "incomplete_value": true,
      "site": "00bd4f74",
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
            "const:a48:8"
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
      "definition_site": "00bd4ff4",
      "incomplete_value": true,
      "site": "00bd4ff4",
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
      "definition_site": "00bd4f58",
      "incomplete_value": true,
      "site": "00bd4f58",
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
      "definition_site": "00bd4ffc",
      "incomplete_value": false,
      "site": "00bd5008",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f60",
      "incomplete_value": false,
      "site": "00bd4f6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "00bd4ff0",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4ffc",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ],
    [
      "00bd5010",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4ff0",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4ffc",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd5010",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4f6c ["INT_ADD", "register:40f0:8", ["const:bd4f6c:8", "const:4:8"]]
- 00bd4f6c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5008 ["INT_ADD", "register:40f0:8", ["const:bd5008:8", "const:4:8"]]
+ 00bd5008 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd4f74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4f74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5010 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd5010 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4f54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd4f54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd4ff0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd4ff0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-aa0ff5d79d1808ecb5a65eea37953ea6"></a>

### [`00bd4f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4f94.md) → [`00bd5030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5030.md) _ZN8firebase4auth10credential15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd5088",
      "incomplete_value": true,
      "site": "00bd5088",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4fec",
      "incomplete_value": true,
      "site": "00bd4fec",
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
            "const:a50:8"
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
      "definition_site": "00bd5064",
      "incomplete_value": true,
      "site": "00bd5070",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4fc8",
      "incomplete_value": true,
      "site": "00bd4fd4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a48:8"
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
      "00bd5044",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5064",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5088",
      "WRITE",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd5044",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5064",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5088",
      "WRITE",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4fd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd4fd4 ["INT_ADD", "register:40f0:8", ["const:bd4fd4:8", "const:4:8"]]
- 00bd4fd4 ["CALLIND", null, ["register:0:8"]]
+ 00bd5070 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5070 ["INT_ADD", "register:40f0:8", ["const:bd5070:8", "const:4:8"]]
+ 00bd5070 ["CALLIND", null, ["register:0:8"]]
- 00bd4fec ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd4fec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a50:8"]]
- 00bd4fec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd5088 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd5088 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b50:8"]]
+ 00bd5088 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd4fa8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a50:8"]]
- 00bd4fa8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd4fa8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd5044 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b50:8"]]
+ 00bd5044 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5044 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-06ec25dffc0ffb356569c41b672a473e"></a>

### [`00bd5000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5000.md) → [`00bd509c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd509c.md) _ZN8firebase4auth10credential12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.57% / 新版 53.57%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd50b4",
      "incomplete_value": true,
      "site": "00bd50b4",
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
      "definition_site": "00bd5018",
      "incomplete_value": true,
      "site": "00bd5018",
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
      "00bd50b0",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd50b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5060"
      ]
    ],
    [
      "00bd50bc",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd50b0",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd50b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd50fc"
      ]
    ],
    [
      "00bd50bc",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5014 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd5014 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd50b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd50b0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5020 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a50:8"]]
- 00bd5020 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd5020 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd50bc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b50:8"]]
+ 00bd50bc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd50bc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd5038 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5038 ["INT_ADD", "register:40f0:8", ["const:bd5038:8", "const:4:8"]]
- 00bd5038 ["CALLIND", null, ["register:0:8"]]
+ 00bd50d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd50d4 ["INT_ADD", "register:40f0:8", ["const:bd50d4:8", "const:4:8"]]
+ 00bd50d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-64ffedf52f31156cbb8a9e7a12c203dd"></a>

### [`00bd5070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5070.md) → [`00bd510c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd510c.md) _ZN8firebase4auth10credential14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd5098",
      "incomplete_value": true,
      "site": "00bd50a8",
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
      "definition_site": "00bd509c",
      "incomplete_value": true,
      "site": "00bd50a8",
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
      "definition_site": "00bd5094",
      "incomplete_value": false,
      "site": "00bd50a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "unmatched:00bd5084",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd508c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5150"
      ]
    ],
    [
      "unmatched:00bd5094",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5120",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5150"
      ]
    ],
    [
      "00bd5130",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd50a8 ["INT_ADD", "register:40f0:8", ["const:bd50a8:8", "const:4:8"]]
- 00bd50a8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5144 ["INT_ADD", "register:40f0:8", ["const:bd5144:8", "const:4:8"]]
+ 00bd5144 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5084 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd5084 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5088 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-4424eff68e5773508cbac526791a1263"></a>

### [`00bd50e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd50e0.md) → [`00bd517c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd517c.md) _ZN8firebase4auth10credential11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd5198",
      "incomplete_value": false,
      "site": "00bd519c",
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
      "definition_site": "00bd50fc",
      "incomplete_value": false,
      "site": "00bd5100",
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
      "definition_site": "00bd51a8",
      "incomplete_value": true,
      "site": "00bd51b4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd510c",
      "incomplete_value": true,
      "site": "00bd5118",
      "value": [
        "LOAD",
        "8",
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
      "00bd5198",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd51a8",
      "DATA",
      [
        "storage",
        "01126a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5198",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd51a8",
      "DATA",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5100 ["INT_ADD", "register:40f0:8", ["const:bd5100:8", "const:4:8"]]
- 00bd5100 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd519c ["INT_ADD", "register:40f0:8", ["const:bd519c:8", "const:4:8"]]
+ 00bd519c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd50fc ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd50fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd50fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd50fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd5198 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd5198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5108 ["COPY", "tmp:0:8", ["const:a58:8"]]
- 00bd5108 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5108 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5108 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd51a4 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 00bd51a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd51a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd51a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab3b2f93fdc2489fa0534f5aa143dac7"></a>

### [`00bd511c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd511c.md) → [`00bd51b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd51b8.md) _ZN8firebase4auth10credential13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd51f8",
      "incomplete_value": true,
      "site": "00bd51f8",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd515c",
      "incomplete_value": true,
      "site": "00bd515c",
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
            "const:a48:8"
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
      "definition_site": "00bd51d4",
      "incomplete_value": true,
      "site": "00bd51d4",
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
      "definition_site": "00bd5138",
      "incomplete_value": true,
      "site": "00bd5138",
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
      "definition_site": "00bd51dc",
      "incomplete_value": false,
      "site": "00bd51f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5140",
      "incomplete_value": false,
      "site": "00bd5154",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d1c:8"
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
      "00bd51cc",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd51dc",
      "PARAM",
      [
        "storage",
        "002b9d1c",
        null,
        "string"
      ]
    ],
    [
      "00bd51f8",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd51cc",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd51dc",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd51f8",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5154 ["INT_ADD", "register:40f0:8", ["const:bd5154:8", "const:4:8"]]
- 00bd5154 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd51f0 ["INT_ADD", "register:40f0:8", ["const:bd51f0:8", "const:4:8"]]
+ 00bd51f0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd515c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd515c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd51f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd51f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5130 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd5130 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd51cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd51cc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-25a4ac84f6261198213d864cf5e90a07"></a>

### [`00bd518c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd518c.md) → [`00bd5228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5228.md) _ZN8firebase4auth10credential10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd5244",
      "incomplete_value": false,
      "site": "00bd5248",
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
      "definition_site": "00bd51a8",
      "incomplete_value": false,
      "site": "00bd51ac",
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
      "definition_site": "00bd5254",
      "incomplete_value": true,
      "site": "00bd5260",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd51b8",
      "incomplete_value": true,
      "site": "00bd51c4",
      "value": [
        "LOAD",
        "8",
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
      "00bd5244",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd5254",
      "DATA",
      [
        "storage",
        "01126a60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd5244",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd5254",
      "DATA",
      [
        "storage",
        "01126b60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd51ac ["INT_ADD", "register:40f0:8", ["const:bd51ac:8", "const:4:8"]]
- 00bd51ac ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd5248 ["INT_ADD", "register:40f0:8", ["const:bd5248:8", "const:4:8"]]
+ 00bd5248 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd51a8 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd51a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd51a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd51a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd5244 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd5244 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5244 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5244 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd51b4 ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00bd51b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd51b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd51b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd5250 ["COPY", "tmp:0:8", ["const:b60:8"]]
+ 00bd5250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-733cb435e9b0d7f3731dfd44995a16c9"></a>

### [`00bd51c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd51c8.md) → [`00bd5264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5264.md) _ZN8firebase4auth9emailcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5278",
      "incomplete_value": true,
      "site": "00bd5278",
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
      "definition_site": "00bd51dc",
      "incomplete_value": true,
      "site": "00bd51dc",
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
      "00bd5274",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd51e8",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd51ec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd5274",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5284",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd5288",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd51dc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd51dc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd5278 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd5278 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd51d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd51d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5274 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd5274 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd51e8 ["COPY", "tmp:0:8", ["const:3f3:8"]]
- 00bd51e8 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd51e8 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd51e8 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-3e8951492a82328e614e3425f38344a1"></a>

### [`00bd5208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5208.md) → [`00bd52a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd52a4.md) _ZN8firebase4auth9emailcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd52b8",
      "incomplete_value": true,
      "site": "00bd52b8",
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
      "definition_site": "00bd521c",
      "incomplete_value": true,
      "site": "00bd521c",
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
      "00bd52b4",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5224",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd522c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd52b4",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd52c0",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd52c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5218 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd5218 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd52b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd52b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5224 ["COPY", "tmp:0:8", ["const:3f3:8"]]
- 00bd5224 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd5224 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd5224 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00bd5228 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5228 ["INT_ZEXT", "register:4020:8", ["tmp:0:4"]]
~~~


<a id="compare-d0b24af5ff926cc23acade7e2aafa8da"></a>

### [`00bd5248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5248.md) → [`00bd52e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd52e4.md) _ZN8firebase4auth9emailcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5258",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd525c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd527c"
      ]
    ],
    [
      "unmatched:00bd5268",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd52f4",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd52f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5318"
      ]
    ],
    [
      "00bd5304",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5258 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd5258 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd525c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd525c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5260 ["COPY", "register:4018:8", ["const:2ac000:8"]]
~~~


<a id="compare-df15d1643857990785ebc726140e29c4"></a>

### [`00bd528c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd528c.md) → [`00bd5328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5328.md) _ZN8firebase4auth9emailcred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5344",
      "incomplete_value": false,
      "site": "00bd5350",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:397:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd52a8",
      "incomplete_value": false,
      "site": "00bd52b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:3f3:8"
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
      "00bd5338",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd52a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd52c0"
      ]
    ],
    [
      "unmatched:00bd52a8",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5338",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd533c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd535c"
      ]
    ],
    [
      "00bd5344",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd52b4 ["INT_ADD", "register:40f0:8", ["const:bd52b4:8", "const:4:8"]]
- 00bd52b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5350 ["INT_ADD", "register:40f0:8", ["const:bd5350:8", "const:4:8"]]
+ 00bd5350 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd529c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd529c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5338 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd5338 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd52a0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd52a0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-0cf049b13172b44dbec3b72081dadbec"></a>

### [`00bd52dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd52dc.md) → [`00bd5378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5378.md) _ZN8firebase4auth9emailcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd538c",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5398",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5338"
      ]
    ],
    [
      "unmatched:00bd5310",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd538c",
      "READ",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5398",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd53d4"
      ]
    ],
    [
      "00bd53ac",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd52f0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a70:8"]]
- 00bd52f0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd52f0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd538c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b70:8"]]
+ 00bd538c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd538c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd52f4 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd52f4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd5390 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd5390 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd5310 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a68:8"]]
- 00bd5310 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fe0d2d743397b4808b9870e3913a8827"></a>

### [`00bd5348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5348.md) → [`00bd53e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd53e4.md) _ZN8firebase4auth9emailcred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.57% / 新版 53.57%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd53fc",
      "incomplete_value": true,
      "site": "00bd53fc",
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
      "definition_site": "00bd5360",
      "incomplete_value": true,
      "site": "00bd5360",
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
      "00bd53f8",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd53fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd53a8"
      ]
    ],
    [
      "00bd5404",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd53f8",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd53fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5444"
      ]
    ],
    [
      "00bd5404",
      "READ",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5360 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd5360 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd53fc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd53fc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bd535c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd535c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd53f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00bd53f8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5368 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a70:8"]]
- 00bd5368 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd5368 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd5404 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b70:8"]]
+ 00bd5404 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5404 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-b17d3535ccba839705eec84eb44ec5dd"></a>

### [`00bd53b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd53b8.md) → [`00bd5454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5454.md) _ZN8firebase4auth9emailcred14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5478",
      "incomplete_value": false,
      "site": "00bd548c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:397:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd53dc",
      "incomplete_value": false,
      "site": "00bd53f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:3f3:8"
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
      "unmatched:00bd53cc",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd53d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5498"
      ]
    ],
    [
      "unmatched:00bd53dc",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5468",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5470",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5498"
      ]
    ],
    [
      "00bd5478",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd53f0 ["INT_ADD", "register:40f0:8", ["const:bd53f0:8", "const:4:8"]]
- 00bd53f0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd548c ["INT_ADD", "register:40f0:8", ["const:bd548c:8", "const:4:8"]]
+ 00bd548c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd53cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd53cc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd53d0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-be58984067b53a11559af64bc9e76b42"></a>

### [`00bd5428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5428.md) → [`00bd54c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd54c4.md) _ZN8firebase4auth9emailcred11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5428",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd542c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd54d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd544c"
      ]
    ]
  ],
  "added": [
    [
      "00bd54c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd54c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd54d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd54e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5428 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd5428 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5428 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd542c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd542c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd542c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd542c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd5430 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd5430 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd5430 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd5430 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-40db69412ec54db4372f55b5d4a9a955"></a>

### [`00bd5464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5464.md) → [`00bd5500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5500.md) _ZN8firebase4auth9emailcred13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5524",
      "incomplete_value": false,
      "site": "00bd5538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:397:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5488",
      "incomplete_value": false,
      "site": "00bd549c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:3f3:8"
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
      "unmatched:00bd5478",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5480",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5544"
      ]
    ],
    [
      "unmatched:00bd5488",
      "PARAM",
      [
        "storage",
        "002ac3f3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5514",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd551c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5544"
      ]
    ],
    [
      "00bd5524",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd549c ["INT_ADD", "register:40f0:8", ["const:bd549c:8", "const:4:8"]]
- 00bd549c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5538 ["INT_ADD", "register:40f0:8", ["const:bd5538:8", "const:4:8"]]
+ 00bd5538 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5478 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd5478 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd547c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-cc298edb718ce9f03c13fb5bc7de9571"></a>

### [`00bd54d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd54d4.md) → [`00bd5570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5570.md) _ZN8firebase4auth9emailcred10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd54d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd54d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd54e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd54f8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5570",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5574",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5594"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd54d4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd54d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd54d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd54d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd54d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd54d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd54d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd54dc ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd54dc ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd54dc ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd54dc ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-50174a832768957723e22bca6e7445b8"></a>

### [`00bd5510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5510.md) → [`00bd55ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd55ac.md) _ZN8firebase4auth12facebookcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd55c0",
      "incomplete_value": true,
      "site": "00bd55c0",
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
      "definition_site": "00bd5524",
      "incomplete_value": true,
      "site": "00bd5524",
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
      "00bd55bc",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5530",
      "PARAM",
      [
        "storage",
        "002bd499",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd5534",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd55bc",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd55cc",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd55d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5524 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5524 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd55c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd55c0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd5520 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd5520 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd55bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
+ 00bd55bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5530 ["COPY", "tmp:0:8", ["const:499:8"]]
- 00bd5530 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd5530 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd5530 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-9863653baa40e5a8dc6f0a5060f1480c"></a>

### [`00bd5550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5550.md) → [`00bd55ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd55ec.md) _ZN8firebase4auth12facebookcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5550",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5554",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5560",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd55ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd55f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd55fc",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5550 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd5550 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5550 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd5554 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd5554 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd5554 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd5554 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd5558 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd5558 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd5558 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd5558 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b4cdcfb39597a5b52a835bfbfe5e7de0"></a>

### [`00bd5590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5590.md) → [`00bd562c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd562c.md) _ZN8firebase4auth12facebookcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 29.41% / 新版 29.41%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd55a0",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd55a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd55c4"
      ]
    ],
    [
      "unmatched:00bd55b0",
      "PARAM",
      [
        "storage",
        "002bd499",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd563c",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5660"
      ]
    ],
    [
      "00bd564c",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd55a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd55a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd55a4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd55a4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd55ac ["INT_ZEXT", "register:4020:8", ["register:4010:4"]]
~~~


<a id="compare-55652edc10203b27c74348b162d081dc"></a>

### [`00bd55d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd55d4.md) → [`00bd5670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5670.md) _ZN8firebase4auth12facebookcred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5684",
      "incomplete_value": true,
      "site": "00bd5684",
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
      "definition_site": "00bd55e8",
      "incomplete_value": true,
      "site": "00bd55e8",
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
    "new": null,
    "old": {
      "definition_site": "00bd55f0",
      "incomplete_value": false,
      "site": "00bd55fc",
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
            "const:499:8"
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
      "unmatched:00bd55d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd55d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5680",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5670",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5674",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5680",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd55e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd55e8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd5684 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd5684 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd55fc ["INT_ADD", "register:40f0:8", ["const:bd55fc:8", "const:4:8"]]
- 00bd55fc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5698 ["INT_ADD", "register:40f0:8", ["const:bd5698:8", "const:4:8"]]
+ 00bd5698 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd55d4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd55d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd55d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e2096cd630cf24e662639309f6d8a29a"></a>

### [`00bd5618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5618.md) → [`00bd56b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd56b4.md) _ZN8firebase4auth12facebookcred8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd561c",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd56b8",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5618 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00bd561c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a88:8"]]
- 00bd561c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5620 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bd5620 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-4e09ee1e2fbfce63fb684a4cdc8af059"></a>

### [`00bd5624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5624.md) → [`00bd56c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd56c0.md) _ZN8firebase4auth12facebookcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd56d4",
      "READ",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd5658",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd567c",
      "WRITE",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd56d4",
      "READ",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd56f4",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5718",
      "WRITE",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5638 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a90:8"]]
- 00bd5638 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd5638 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd56d4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b90:8"]]
+ 00bd56d4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd56d4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd5644 ["BRANCH", null, ["local:b6:8"]]
+ 00bd56e0 ["BRANCH", null, ["local:b4:8"]]
- 00bd5658 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a88:8"]]
- 00bd5658 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-189d6ffcaf30bd6cde2a15f87d057b5a"></a>

### [`00bd5690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5690.md) → [`00bd572c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd572c.md) _ZN8firebase4auth12facebookcred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5744",
      "incomplete_value": true,
      "site": "00bd5744",
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
      "definition_site": "00bd56a8",
      "incomplete_value": true,
      "site": "00bd56a8",
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
      "00bd5740",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd574c",
      "READ",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd56d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd5740",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd574c",
      "READ",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd576c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd56a8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd56a8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd5744 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd5744 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bd56a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd56a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5740 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
+ 00bd5740 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd56b0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a90:8"]]
- 00bd56b0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd56b0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd574c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b90:8"]]
+ 00bd574c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd574c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-d965b1716b61ee54e2120518a0ca1816"></a>

### [`00bd5700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5700.md) → [`00bd579c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd579c.md) _ZN8firebase4auth12facebookcred14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd5728",
      "incomplete_value": true,
      "site": "00bd5738",
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
      "definition_site": "00bd572c",
      "incomplete_value": true,
      "site": "00bd5738",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5714",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd571c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd57e0"
      ]
    ],
    [
      "unmatched:00bd5724",
      "PARAM",
      [
        "storage",
        "002bd499",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd57b0",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd57b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd57e0"
      ]
    ],
    [
      "00bd57c0",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5738 ["INT_ADD", "register:40f0:8", ["const:bd5738:8", "const:4:8"]]
- 00bd5738 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd57d4 ["INT_ADD", "register:40f0:8", ["const:bd57d4:8", "const:4:8"]]
+ 00bd57d4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5714 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd5714 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5718 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-ad0c1b5c553607c72a60a52e2aece90b"></a>

### [`00bd5770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5770.md) → [`00bd580c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd580c.md) _ZN8firebase4auth12facebookcred11GetMethodIdENS1_6MethodE

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
      "00bd5820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5794"
      ]
    ],
    [
      "unmatched:00bd578c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd5790",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd5820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5830"
      ]
    ],
    [
      "00bd5828",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd582c",
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
- 00bd578c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd578c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd578c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd578c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5790 ["INT_ADD", "register:40f0:8", ["const:bd5790:8", "const:4:8"]]
- 00bd5790 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd5794 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-49d1ba8975db3c0f3401259bbbc812fe"></a>

### [`00bd57ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd57ac.md) → [`00bd5848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5848.md) _ZN8firebase4auth12facebookcred13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd586c",
      "incomplete_value": false,
      "site": "00bd5880",
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
            "const:445:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd57d0",
      "incomplete_value": false,
      "site": "00bd57e4",
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
            "const:499:8"
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
      "00bd585c",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd57d0",
      "PARAM",
      [
        "storage",
        "002bd499",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd57ec",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd585c",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd586c",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd5888",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd57e4 ["INT_ADD", "register:40f0:8", ["const:bd57e4:8", "const:4:8"]]
- 00bd57e4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5880 ["INT_ADD", "register:40f0:8", ["const:bd5880:8", "const:4:8"]]
+ 00bd5880 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd57c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd57c0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd585c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
+ 00bd585c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd57cc ["COPY", "register:4018:8", ["const:2bd000:8"]]
~~~


<a id="compare-8044b28628d82f1a03c490752957f1f2"></a>

### [`00bd581c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd581c.md) → [`00bd58b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd58b8.md) _ZN8firebase4auth12facebookcred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd58d4",
      "incomplete_value": false,
      "site": "00bd58d8",
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
      "definition_site": "00bd5838",
      "incomplete_value": false,
      "site": "00bd583c",
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
      "definition_site": "00bd58e4",
      "incomplete_value": true,
      "site": "00bd58f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5848",
      "incomplete_value": true,
      "site": "00bd5854",
      "value": [
        "LOAD",
        "8",
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
      "00bd58d4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd58e4",
      "DATA",
      [
        "storage",
        "01126aa0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd58d4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd58e4",
      "DATA",
      [
        "storage",
        "01126ba0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd583c ["INT_ADD", "register:40f0:8", ["const:bd583c:8", "const:4:8"]]
- 00bd583c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd58d8 ["INT_ADD", "register:40f0:8", ["const:bd58d8:8", "const:4:8"]]
+ 00bd58d8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd5838 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd5838 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5838 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5838 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd58d4 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd58d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd58d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd58d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5844 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00bd5844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd58e0 ["COPY", "tmp:0:8", ["const:ba0:8"]]
+ 00bd58e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd58e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd58e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a023cfb4e7c0d624df1af413cbac408"></a>

### [`00bd5858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5858.md) → [`00bd58f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd58f4.md) _ZN8firebase4auth10githubcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd5920",
      "incomplete_value": true,
      "site": "00bd5920",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5884",
      "incomplete_value": true,
      "site": "00bd5884",
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
            "const:aa8:8"
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
      "definition_site": "00bd5908",
      "incomplete_value": true,
      "site": "00bd5908",
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
      "definition_site": "00bd586c",
      "incomplete_value": true,
      "site": "00bd586c",
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
      "definition_site": "00bd5914",
      "incomplete_value": false,
      "site": "00bd5918",
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
            "const:e22:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5878",
      "incomplete_value": false,
      "site": "00bd587c",
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
            "const:de2:8"
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
      "00bd5904",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5914",
      "PARAM",
      [
        "storage",
        "002c1de2",
        null,
        "string"
      ]
    ],
    [
      "00bd5920",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5904",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5914",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd5920",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd587c ["INT_ADD", "register:40f0:8", ["const:bd587c:8", "const:4:8"]]
- 00bd587c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5918 ["INT_ADD", "register:40f0:8", ["const:bd5918:8", "const:4:8"]]
+ 00bd5918 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5884 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd5884 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5920 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd5920 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5868 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd5868 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5904 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd5904 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-67444b44a35ad8bf07827f702cff7527"></a>

### [`00bd5898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5898.md) → [`00bd5934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5934.md) _ZN8firebase4auth10githubcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5948",
      "incomplete_value": true,
      "site": "00bd5948",
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
      "definition_site": "00bd58ac",
      "incomplete_value": true,
      "site": "00bd58ac",
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
      "00bd5944",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5950",
      "PARAM",
      [
        "storage",
        "002c1de2",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd58bc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd5944",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5950",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd5958",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd58a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd58a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd5944 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd58b4 ["COPY", "tmp:0:8", ["const:de2:8"]]
- 00bd58b4 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd58b4 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd58b4 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
+ 00bd5950 ["COPY", "tmp:0:8", ["const:e22:8"]]
+ 00bd5950 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
+ 00bd5950 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
+ 00bd5950 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00bd58bc ["INT_ADD", "register:40f0:8", ["const:bd58bc:8", "const:4:8"]]
- 00bd58bc ["CALL", null, ["callee:00c5afe0:8"]]
~~~


<a id="compare-bad1458df4218c5e27c3872f914fd46d"></a>

### [`00bd58d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd58d8.md) → [`00bd5974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5974.md) _ZN8firebase4auth10githubcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd58e8",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd58ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd59a8"
      ]
    ],
    [
      "unmatched:00bd58f8",
      "PARAM",
      [
        "storage",
        "002c1de2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5984",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5988",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd59a8"
      ]
    ],
    [
      "00bd5994",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd58e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd58e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd58ec ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd58ec ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd58f0 ["COPY", "register:4018:8", ["const:2c1000:8"]]
~~~


<a id="compare-81b95f3b46a079529f8d70ec0925b155"></a>

### [`00bd591c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd591c.md) → [`00bd59b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd59b8.md) _ZN8firebase4auth10githubcred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd59cc",
      "incomplete_value": true,
      "site": "00bd59cc",
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
      "definition_site": "00bd5930",
      "incomplete_value": true,
      "site": "00bd5930",
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
    "new": null,
    "old": {
      "definition_site": "00bd593c",
      "incomplete_value": false,
      "site": "00bd5944",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00bd5938",
      "incomplete_value": false,
      "site": "00bd5944",
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
            "const:de2:8"
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
      "00bd59c8",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5938",
      "PARAM",
      [
        "storage",
        "002c1de2",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd594c",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd59c8",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd59d4",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd59e8",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5930 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5930 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd59cc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd59cc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5944 ["INT_ADD", "register:40f0:8", ["const:bd5944:8", "const:4:8"]]
- 00bd5944 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd59e0 ["INT_ADD", "register:40f0:8", ["const:bd59e0:8", "const:4:8"]]
+ 00bd59e0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd592c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd592c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd59c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd59c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0c37c45e92c959642c0ff27f4abdfe5f"></a>

### [`00bd596c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd596c.md) → [`00bd5a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5a08.md) _ZN8firebase4auth10githubcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd5a60",
      "incomplete_value": true,
      "site": "00bd5a60",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd59c4",
      "incomplete_value": true,
      "site": "00bd59c4",
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
            "const:ab0:8"
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
      "definition_site": "00bd5a3c",
      "incomplete_value": true,
      "site": "00bd5a48",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ba8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd59a0",
      "incomplete_value": true,
      "site": "00bd59ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:aa8:8"
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
      "unmatched:00bd596c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5970",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5974",
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
      "00bd5a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd5a0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5a10",
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
- 00bd59ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd59ac ["INT_ADD", "register:40f0:8", ["const:bd59ac:8", "const:4:8"]]
- 00bd59ac ["CALLIND", null, ["register:0:8"]]
+ 00bd5a48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5a48 ["INT_ADD", "register:40f0:8", ["const:bd5a48:8", "const:4:8"]]
+ 00bd5a48 ["CALLIND", null, ["register:0:8"]]
- 00bd59c4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd59c4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
- 00bd59c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd5a60 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd5a60 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bb0:8"]]
+ 00bd5a60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd596c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd596c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd596c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-eb6ca8445e9e88fa0e9d9f3795bbc9e6"></a>

### [`00bd59d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd59d8.md) → [`00bd5a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5a74.md) _ZN8firebase4auth10githubcred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5a8c",
      "incomplete_value": true,
      "site": "00bd5a8c",
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
      "definition_site": "00bd59f0",
      "incomplete_value": true,
      "site": "00bd59f0",
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
      "00bd5a88",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5a94",
      "READ",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5a18"
      ]
    ]
  ],
  "added": [
    [
      "00bd5a88",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5a94",
      "READ",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5ab4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd59f0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd59f0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd5a8c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd5a8c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00bd59ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00bd59ec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5a88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00bd5a88 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd59f8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ab0:8"]]
- 00bd59f8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd59f8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd5a94 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:bb0:8"]]
+ 00bd5a94 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5a94 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-38e494ed307bc7612d3a4f9fdd00fb28"></a>

### [`00bd5a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5a48.md) → [`00bd5ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5ae4.md) _ZN8firebase4auth10githubcred14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd5a70",
      "incomplete_value": true,
      "site": "00bd5a80",
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
      "definition_site": "00bd5a74",
      "incomplete_value": true,
      "site": "00bd5a80",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5a5c",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5ae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5af8",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5a80 ["INT_ADD", "register:40f0:8", ["const:bd5a80:8", "const:4:8"]]
- 00bd5a80 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5b1c ["INT_ADD", "register:40f0:8", ["const:bd5b1c:8", "const:4:8"]]
+ 00bd5b1c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5a48 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd5a48 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd5a48 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5a48 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd5a4c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd5a4c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd5a4c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd5a4c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f0a5ca970f01672699da7d6905b64b21"></a>

### [`00bd5ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5ab8.md) → [`00bd5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5b54.md) _ZN8firebase4auth10githubcred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd5b70",
      "incomplete_value": false,
      "site": "00bd5b74",
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
      "definition_site": "00bd5ad4",
      "incomplete_value": false,
      "site": "00bd5ad8",
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
      "definition_site": "00bd5b80",
      "incomplete_value": true,
      "site": "00bd5b8c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5ae4",
      "incomplete_value": true,
      "site": "00bd5af0",
      "value": [
        "LOAD",
        "8",
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
      "00bd5b70",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd5b80",
      "DATA",
      [
        "storage",
        "01126ab8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5b70",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd5b80",
      "DATA",
      [
        "storage",
        "01126bb8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ad8 ["INT_ADD", "register:40f0:8", ["const:bd5ad8:8", "const:4:8"]]
- 00bd5ad8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd5b74 ["INT_ADD", "register:40f0:8", ["const:bd5b74:8", "const:4:8"]]
+ 00bd5b74 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd5ad4 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd5ad4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5ad4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5ad4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd5b70 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd5b70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5b70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5b70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5ae0 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 00bd5ae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5ae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5ae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd5b7c ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00bd5b7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5b7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5b7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-32d00ff17f14bfe0749bd5ca4f9a0455"></a>

### [`00bd5af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5af4.md) → [`00bd5b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5b90.md) _ZN8firebase4auth10githubcred13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5bb4",
      "incomplete_value": false,
      "site": "00bd5bc8",
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
            "const:e22:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5b18",
      "incomplete_value": false,
      "site": "00bd5b2c",
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
            "const:de2:8"
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
      "unmatched:00bd5af4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5af8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5b08",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5b94",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5ba4",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5b2c ["INT_ADD", "register:40f0:8", ["const:bd5b2c:8", "const:4:8"]]
- 00bd5b2c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5bc8 ["INT_ADD", "register:40f0:8", ["const:bd5bc8:8", "const:4:8"]]
+ 00bd5bc8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5af4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd5af4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd5af4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5af4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd5af8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd5af8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd5af8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd5af8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-56efca302e99a7d3ea4f9c1be9c2b390"></a>

### [`00bd5b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5b64.md) → [`00bd5c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c00.md) _ZN8firebase4auth10githubcred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd5c1c",
      "incomplete_value": false,
      "site": "00bd5c20",
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
      "definition_site": "00bd5b80",
      "incomplete_value": false,
      "site": "00bd5b84",
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
      "definition_site": "00bd5c2c",
      "incomplete_value": true,
      "site": "00bd5c38",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5b90",
      "incomplete_value": true,
      "site": "00bd5b9c",
      "value": [
        "LOAD",
        "8",
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
      "00bd5c1c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd5c2c",
      "DATA",
      [
        "storage",
        "01126ac0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd5c1c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd5c2c",
      "DATA",
      [
        "storage",
        "01126bc0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5b84 ["INT_ADD", "register:40f0:8", ["const:bd5b84:8", "const:4:8"]]
- 00bd5b84 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd5c20 ["INT_ADD", "register:40f0:8", ["const:bd5c20:8", "const:4:8"]]
+ 00bd5c20 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd5b80 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd5b80 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5b80 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5b80 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd5c1c ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd5c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5b8c ["COPY", "tmp:0:8", ["const:ac0:8"]]
- 00bd5b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd5c28 ["COPY", "tmp:0:8", ["const:bc0:8"]]
+ 00bd5c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97cfc1b90cf12f9c57fbd1f87d52e96b"></a>

### [`00bd5ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5ba0.md) → [`00bd5c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c3c.md) _ZN8firebase4auth10googlecred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd5bb0",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5bb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5bd0"
      ]
    ],
    [
      "unmatched:00bd5bc0",
      "PARAM",
      [
        "storage",
        "002c1e12",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5c4c",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5c50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5c6c"
      ]
    ],
    [
      "00bd5c5c",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5bb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd5bb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5bb4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5bb4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5bb8 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-521edf7d3ec53bb7d6238d975089fb29"></a>

### [`00bd5be0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5be0.md) → [`00bd5c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c7c.md) _ZN8firebase4auth10googlecred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd5ca8",
      "incomplete_value": true,
      "site": "00bd5ca8",
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
            "const:bc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5c0c",
      "incomplete_value": true,
      "site": "00bd5c0c",
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
            "const:ac8:8"
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
      "definition_site": "00bd5c90",
      "incomplete_value": true,
      "site": "00bd5c90",
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
      "definition_site": "00bd5bf4",
      "incomplete_value": true,
      "site": "00bd5bf4",
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
      "definition_site": "00bd5c98",
      "incomplete_value": true,
      "site": "00bd5ca0",
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
            "const:e52:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5bfc",
      "incomplete_value": true,
      "site": "00bd5c04",
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
            "const:e12:8"
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
      "00bd5c8c",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5c98",
      "PARAM",
      [
        "storage",
        "002c1e12",
        null,
        "string"
      ]
    ],
    [
      "00bd5ca8",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5c8c",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5c98",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd5ca8",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5c04 ["INT_ADD", "register:40f0:8", ["const:bd5c04:8", "const:4:8"]]
- 00bd5c04 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5ca0 ["INT_ADD", "register:40f0:8", ["const:bd5ca0:8", "const:4:8"]]
+ 00bd5ca0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5c0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd5c0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5ca8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd5ca8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5bf0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd5bf0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5c8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd5c8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-977f41b8686a4312fde168df3ee685db"></a>

### [`00bd5c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5c20.md) → [`00bd5cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5cbc.md) _ZN8firebase4auth10googlecred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd5cd0",
      "incomplete_value": true,
      "site": "00bd5cd0",
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
      "definition_site": "00bd5c34",
      "incomplete_value": true,
      "site": "00bd5c34",
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
      "unmatched:00bd5c20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5ccc",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5cbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5cc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5ccc",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5c34 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5c34 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd5cd0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd5cd0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd5c20 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd5c20 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5c20 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd5c24 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd5c24 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd5c24 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd5c24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2cfa0b89e120e40c74049a032d1c825b"></a>

### [`00bd5c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5c64.md) → [`00bd5d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5d00.md) _ZN8firebase4auth10googlecred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5d14",
      "incomplete_value": true,
      "site": "00bd5d14",
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
      "definition_site": "00bd5c78",
      "incomplete_value": true,
      "site": "00bd5c78",
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
      "definition_site": "00bd5d1c",
      "incomplete_value": false,
      "site": "00bd5d28",
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
            "const:e52:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5c80",
      "incomplete_value": false,
      "site": "00bd5c8c",
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
            "const:e12:8"
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
      "00bd5d10",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5c80",
      "PARAM",
      [
        "storage",
        "002c1e12",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd5c94",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5d10",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5d1c",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd5d30",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5c78 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5c78 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd5d14 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd5d14 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5c8c ["INT_ADD", "register:40f0:8", ["const:bd5c8c:8", "const:4:8"]]
- 00bd5c8c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5d28 ["INT_ADD", "register:40f0:8", ["const:bd5d28:8", "const:4:8"]]
+ 00bd5d28 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5c74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd5c74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5d10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd5d10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbbf1409f878662fe8aa28f5aef0d9cc"></a>

### [`00bd5cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5cb4.md) → [`00bd5d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5d50.md) _ZN8firebase4auth10googlecred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd5da8",
      "incomplete_value": true,
      "site": "00bd5da8",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5d0c",
      "incomplete_value": true,
      "site": "00bd5d0c",
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
            "const:ad0:8"
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
      "definition_site": "00bd5d84",
      "incomplete_value": true,
      "site": "00bd5d90",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:bc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5ce8",
      "incomplete_value": true,
      "site": "00bd5cf4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ac8:8"
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
      "unmatched:00bd5cb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5cb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5cbc",
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
      "00bd5d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd5d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5d58",
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
- 00bd5cf4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5cf4 ["INT_ADD", "register:40f0:8", ["const:bd5cf4:8", "const:4:8"]]
- 00bd5cf4 ["CALLIND", null, ["register:0:8"]]
+ 00bd5d90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5d90 ["INT_ADD", "register:40f0:8", ["const:bd5d90:8", "const:4:8"]]
+ 00bd5d90 ["CALLIND", null, ["register:0:8"]]
- 00bd5d0c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd5d0c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ad0:8"]]
- 00bd5d0c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd5da8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd5da8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bd0:8"]]
+ 00bd5da8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd5cb4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd5cb4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd5cb4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e82339183564d50f9931927a3cb0422b"></a>

### [`00bd5d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5d20.md) → [`00bd5dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5dbc.md) _ZN8firebase4auth10googlecred12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd5df8",
      "incomplete_value": true,
      "site": "00bd5df8",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5d5c",
      "incomplete_value": true,
      "site": "00bd5d5c",
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
            "const:ad0:8"
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
      "definition_site": "00bd5e18",
      "incomplete_value": true,
      "site": "00bd5e18",
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
            "const:bc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5d7c",
      "incomplete_value": true,
      "site": "00bd5d7c",
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
            "const:ac8:8"
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
      "definition_site": "00bd5dd4",
      "incomplete_value": true,
      "site": "00bd5dd4",
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
      "definition_site": "00bd5d38",
      "incomplete_value": true,
      "site": "00bd5d38",
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
      "00bd5dd0",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ddc",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5df8",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd5dd0",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ddc",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd5df8",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5d5c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5d5c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd5d5c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ad0:8"]]
- 00bd5d5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd5df8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd5df8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd5df8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bd0:8"]]
+ 00bd5df8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd5d78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5d78 ["INT_ADD", "register:40f0:8", ["const:bd5d78:8", "const:4:8"]]
- 00bd5d78 ["CALLIND", null, ["register:0:8"]]
+ 00bd5e14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd5e14 ["INT_ADD", "register:40f0:8", ["const:bd5e14:8", "const:4:8"]]
+ 00bd5e14 ["CALLIND", null, ["register:0:8"]]
- 00bd5d7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd5d7c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd5d7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd5e18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd5e18 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd5e18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-169c6c96771dd0005268e912728a2cd9"></a>

### [`00bd5d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5d90.md) → [`00bd5e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5e2c.md) _ZN8firebase4auth10googlecred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd5e50",
      "incomplete_value": false,
      "site": "00bd5e64",
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
            "const:e52:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5db4",
      "incomplete_value": false,
      "site": "00bd5dc8",
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
            "const:e12:8"
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
      "unmatched:00bd5da4",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd5dac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5e70"
      ]
    ],
    [
      "unmatched:00bd5db4",
      "PARAM",
      [
        "storage",
        "002c1e12",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd5e40",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5e48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5e70"
      ]
    ],
    [
      "00bd5e50",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5dc8 ["INT_ADD", "register:40f0:8", ["const:bd5dc8:8", "const:4:8"]]
- 00bd5dc8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5e64 ["INT_ADD", "register:40f0:8", ["const:bd5e64:8", "const:4:8"]]
+ 00bd5e64 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5da4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd5da4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd5da8 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-a7d1e97c1b52eafd709637c1d9f4f067"></a>

### [`00bd5e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5e00.md) → [`00bd5e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5e9c.md) _ZN8firebase4auth10googlecred11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd5eb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd5e24"
      ]
    ],
    [
      "unmatched:00bd5e1c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd5e20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd5eb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd5ec0"
      ]
    ],
    [
      "00bd5eb8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd5ebc",
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
- 00bd5e14 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd5e14 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd5eb0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bd5eb0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5e1c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd5e1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5e1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5e1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5e20 ["INT_ADD", "register:40f0:8", ["const:bd5e20:8", "const:4:8"]]
- 00bd5e20 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-92d0096a15567e352dc58c6a03218d94"></a>

### [`00bd5e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5e3c.md) → [`00bd5ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5ed8.md) _ZN8firebase4auth10googlecred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd5f18",
      "incomplete_value": true,
      "site": "00bd5f18",
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
            "const:bc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5e7c",
      "incomplete_value": true,
      "site": "00bd5e7c",
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
            "const:ac8:8"
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
      "definition_site": "00bd5ef4",
      "incomplete_value": true,
      "site": "00bd5ef4",
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
      "definition_site": "00bd5e58",
      "incomplete_value": true,
      "site": "00bd5e58",
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
      "definition_site": "00bd5efc",
      "incomplete_value": false,
      "site": "00bd5f10",
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
            "const:e52:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5e60",
      "incomplete_value": false,
      "site": "00bd5e74",
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
            "const:e12:8"
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
      "00bd5eec",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5efc",
      "PARAM",
      [
        "storage",
        "002c1e12",
        null,
        "string"
      ]
    ],
    [
      "00bd5f18",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5eec",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5efc",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd5f18",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5e74 ["INT_ADD", "register:40f0:8", ["const:bd5e74:8", "const:4:8"]]
- 00bd5e74 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5f10 ["INT_ADD", "register:40f0:8", ["const:bd5f10:8", "const:4:8"]]
+ 00bd5f10 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5e7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd5e7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5f18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd5f18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5e50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd5e50 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5eec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd5eec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8a3b52e982cd636903e92b4808a06e6f"></a>

### [`00bd5eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5eac.md) → [`00bd5f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5f48.md) _ZN8firebase4auth10googlecred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd5f64",
      "incomplete_value": false,
      "site": "00bd5f68",
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
      "definition_site": "00bd5ec8",
      "incomplete_value": false,
      "site": "00bd5ecc",
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
      "definition_site": "00bd5f74",
      "incomplete_value": true,
      "site": "00bd5f80",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5ed8",
      "incomplete_value": true,
      "site": "00bd5ee4",
      "value": [
        "LOAD",
        "8",
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
      "00bd5f64",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd5f74",
      "DATA",
      [
        "storage",
        "01126ae0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd5f64",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd5f74",
      "DATA",
      [
        "storage",
        "01126be0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ecc ["INT_ADD", "register:40f0:8", ["const:bd5ecc:8", "const:4:8"]]
- 00bd5ecc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd5f68 ["INT_ADD", "register:40f0:8", ["const:bd5f68:8", "const:4:8"]]
+ 00bd5f68 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd5ec8 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd5ec8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5ec8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5ec8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd5f64 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd5f64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5f64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd5f64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5ed4 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 00bd5ed4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5ed4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd5ed4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd5f70 ["COPY", "tmp:0:8", ["const:be0:8"]]
+ 00bd5f70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5f70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd5f70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cc3099cbc72a8c1c3ee3f7431b31c1b7"></a>

### [`00bd5ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5ee8.md) → [`00bd5f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5f84.md) _ZN8firebase4auth13playgamescred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 31.25% / 新版 31.25%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd5f98",
      "incomplete_value": true,
      "site": "00bd5f98",
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
      "definition_site": "00bd5efc",
      "incomplete_value": true,
      "site": "00bd5efc",
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
      "unmatched:00bd5ee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd5eec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5f94",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5f84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd5f88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd5f94",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5efc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd5efc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd5f98 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd5f98 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd5ee8 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd5ee8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd5ee8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd5eec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd5eec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd5eec ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd5eec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d3b8c1b40083fa5de0b46b4da6a7380f"></a>

### [`00bd5f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5f28.md) → [`00bd5fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5fc4.md) _ZN8firebase4auth13playgamescred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00bd5ff0",
      "incomplete_value": true,
      "site": "00bd5ff0",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5f54",
      "incomplete_value": true,
      "site": "00bd5f54",
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
            "const:ae8:8"
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
      "definition_site": "00bd5fd8",
      "incomplete_value": true,
      "site": "00bd5fd8",
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
      "definition_site": "00bd5f3c",
      "incomplete_value": true,
      "site": "00bd5f3c",
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
      "definition_site": "00bd5fe0",
      "incomplete_value": false,
      "site": "00bd5fe8",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5f44",
      "incomplete_value": false,
      "site": "00bd5f4c",
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
            "const:797:8"
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
      "00bd5fd4",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5fe0",
      "PARAM",
      [
        "storage",
        "002b3797",
        null,
        "string"
      ]
    ],
    [
      "00bd5ff0",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5fd4",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5fe0",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd5ff0",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5f4c ["INT_ADD", "register:40f0:8", ["const:bd5f4c:8", "const:4:8"]]
- 00bd5f4c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd5fe8 ["INT_ADD", "register:40f0:8", ["const:bd5fe8:8", "const:4:8"]]
+ 00bd5fe8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5f54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5f54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5ff0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd5ff0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5f38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5f38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd5fd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd5fd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ba5d9cb1207f2e2cb2f22d8ed03c6c91"></a>

### [`00bd5f68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5f68.md) → [`00bd6004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6004.md) _ZN8firebase4auth13playgamescred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd6034",
      "incomplete_value": true,
      "site": "00bd6034",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5f98",
      "incomplete_value": true,
      "site": "00bd5f98",
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
            "const:ae8:8"
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
      "definition_site": "00bd6018",
      "incomplete_value": true,
      "site": "00bd6018",
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
      "definition_site": "00bd5f7c",
      "incomplete_value": true,
      "site": "00bd5f7c",
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
      "definition_site": "00bd6024",
      "incomplete_value": false,
      "site": "00bd602c",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5f88",
      "incomplete_value": false,
      "site": "00bd5f90",
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
            "const:797:8"
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
      "00bd6014",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6024",
      "PARAM",
      [
        "storage",
        "002b3797",
        null,
        "string"
      ]
    ],
    [
      "00bd6034",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6014",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6024",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd6034",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5f90 ["INT_ADD", "register:40f0:8", ["const:bd5f90:8", "const:4:8"]]
- 00bd5f90 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd602c ["INT_ADD", "register:40f0:8", ["const:bd602c:8", "const:4:8"]]
+ 00bd602c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5f98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5f98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6034 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd6034 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5f78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5f78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6014 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd6014 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-42380b0bf22b90c5d51cae1d01730de0"></a>

### [`00bd5fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5fac.md) → [`00bd6048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6048.md) _ZN8firebase4auth13playgamescred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6078",
      "incomplete_value": true,
      "site": "00bd6078",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5fdc",
      "incomplete_value": true,
      "site": "00bd5fdc",
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
            "const:ae8:8"
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
      "definition_site": "00bd605c",
      "incomplete_value": true,
      "site": "00bd605c",
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
      "definition_site": "00bd5fc0",
      "incomplete_value": true,
      "site": "00bd5fc0",
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
      "definition_site": "00bd6064",
      "incomplete_value": false,
      "site": "00bd6070",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5fc8",
      "incomplete_value": false,
      "site": "00bd5fd4",
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
            "const:797:8"
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
      "00bd6058",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6064",
      "PARAM",
      [
        "storage",
        "002b3797",
        null,
        "string"
      ]
    ],
    [
      "00bd6078",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6058",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6064",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd6078",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5fd4 ["INT_ADD", "register:40f0:8", ["const:bd5fd4:8", "const:4:8"]]
- 00bd5fd4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6070 ["INT_ADD", "register:40f0:8", ["const:bd6070:8", "const:4:8"]]
+ 00bd6070 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd5fdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5fdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6078 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd6078 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5fbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd5fbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6058 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd6058 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a6ec60e2675e86cbe30f0930c8feca77"></a>

### [`00bd5ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd5/00bd5ffc.md) → [`00bd6098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6098.md) _ZN8firebase4auth13playgamescred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd60f0",
      "incomplete_value": true,
      "site": "00bd60f0",
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
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6054",
      "incomplete_value": true,
      "site": "00bd6054",
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
            "const:af0:8"
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
      "definition_site": "00bd60cc",
      "incomplete_value": true,
      "site": "00bd60d8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6030",
      "incomplete_value": true,
      "site": "00bd603c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ae8:8"
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
      "00bd60ac",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd60cc",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd60f0",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd60ac",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd60cc",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd60f0",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd603c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd603c ["INT_ADD", "register:40f0:8", ["const:bd603c:8", "const:4:8"]]
- 00bd603c ["CALLIND", null, ["register:0:8"]]
+ 00bd60d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd60d8 ["INT_ADD", "register:40f0:8", ["const:bd60d8:8", "const:4:8"]]
+ 00bd60d8 ["CALLIND", null, ["register:0:8"]]
- 00bd6054 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6054 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:af0:8"]]
- 00bd6054 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd60f0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd60f0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd60f0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6010 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:af0:8"]]
- 00bd6010 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd6010 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd60ac ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd60ac ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd60ac ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-4142580dd166ba0c9ef75f277037939e"></a>

### [`00bd6068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6068.md) → [`00bd6104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6104.md) _ZN8firebase4auth13playgamescred12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd6140",
      "incomplete_value": true,
      "site": "00bd6140",
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
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd60a4",
      "incomplete_value": true,
      "site": "00bd60a4",
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
            "const:af0:8"
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
      "definition_site": "00bd6160",
      "incomplete_value": true,
      "site": "00bd6160",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd60c4",
      "incomplete_value": true,
      "site": "00bd60c4",
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
            "const:ae8:8"
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
      "definition_site": "00bd611c",
      "incomplete_value": true,
      "site": "00bd611c",
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
      "definition_site": "00bd6080",
      "incomplete_value": true,
      "site": "00bd6080",
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
      "00bd6118",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6124",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6140",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6118",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6124",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6140",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd60a4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd60a4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd60a4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:af0:8"]]
- 00bd60a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6140 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6140 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6140 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd6140 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd60c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd60c0 ["INT_ADD", "register:40f0:8", ["const:bd60c0:8", "const:4:8"]]
- 00bd60c0 ["CALLIND", null, ["register:0:8"]]
+ 00bd615c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd615c ["INT_ADD", "register:40f0:8", ["const:bd615c:8", "const:4:8"]]
+ 00bd615c ["CALLIND", null, ["register:0:8"]]
- 00bd60c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd60c4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd60c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6160 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd6160 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-93a9a27a5fd51072f0a7458135455ff6"></a>

### [`00bd60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd60d8.md) → [`00bd6174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6174.md) _ZN8firebase4auth13playgamescred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd61b4",
      "incomplete_value": true,
      "site": "00bd61b4",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6118",
      "incomplete_value": true,
      "site": "00bd6118",
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
            "const:ae8:8"
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
      "definition_site": "00bd6190",
      "incomplete_value": true,
      "site": "00bd6190",
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
      "definition_site": "00bd60f4",
      "incomplete_value": true,
      "site": "00bd60f4",
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
      "definition_site": "00bd6198",
      "incomplete_value": false,
      "site": "00bd61ac",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd60fc",
      "incomplete_value": false,
      "site": "00bd6110",
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
            "const:797:8"
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
      "00bd6188",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6198",
      "PARAM",
      [
        "storage",
        "002b3797",
        null,
        "string"
      ]
    ],
    [
      "00bd61b4",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6188",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6198",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd61b4",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6110 ["INT_ADD", "register:40f0:8", ["const:bd6110:8", "const:4:8"]]
- 00bd6110 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd61ac ["INT_ADD", "register:40f0:8", ["const:bd61ac:8", "const:4:8"]]
+ 00bd61ac ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6118 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd6118 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd61b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd61b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd60ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd60ec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6188 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd6188 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4bb8b1f217c29e2f68a277b425872a60"></a>

### [`00bd6148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6148.md) → [`00bd61e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd61e4.md) _ZN8firebase4auth13playgamescred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd6200",
      "incomplete_value": false,
      "site": "00bd6204",
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
      "definition_site": "00bd6164",
      "incomplete_value": false,
      "site": "00bd6168",
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
      "definition_site": "00bd6210",
      "incomplete_value": true,
      "site": "00bd621c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd6174",
      "incomplete_value": true,
      "site": "00bd6180",
      "value": [
        "LOAD",
        "8",
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
      "00bd6200",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd6210",
      "DATA",
      [
        "storage",
        "01126af8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6200",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6210",
      "DATA",
      [
        "storage",
        "01126bf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6168 ["INT_ADD", "register:40f0:8", ["const:bd6168:8", "const:4:8"]]
- 00bd6168 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd6204 ["INT_ADD", "register:40f0:8", ["const:bd6204:8", "const:4:8"]]
+ 00bd6204 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd6164 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd6164 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6164 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6164 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6200 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd6200 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6200 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6200 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6170 ["COPY", "tmp:0:8", ["const:af8:8"]]
- 00bd6170 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6170 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6170 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd620c ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 00bd620c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd620c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd620c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9fdd6f813f10f4f8895ed467c02b1ddc"></a>

### [`00bd6184`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6184.md) → [`00bd6220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6220.md) _ZN8firebase4auth13playgamescred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6260",
      "incomplete_value": true,
      "site": "00bd6260",
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
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd61c4",
      "incomplete_value": true,
      "site": "00bd61c4",
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
            "const:ae8:8"
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
      "definition_site": "00bd623c",
      "incomplete_value": true,
      "site": "00bd623c",
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
      "definition_site": "00bd61a0",
      "incomplete_value": true,
      "site": "00bd61a0",
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
      "definition_site": "00bd6244",
      "incomplete_value": false,
      "site": "00bd6258",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd61a8",
      "incomplete_value": false,
      "site": "00bd61bc",
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
            "const:797:8"
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
      "00bd6234",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6244",
      "PARAM",
      [
        "storage",
        "002b3797",
        null,
        "string"
      ]
    ],
    [
      "00bd6260",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6234",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6244",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd6260",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd61bc ["INT_ADD", "register:40f0:8", ["const:bd61bc:8", "const:4:8"]]
- 00bd61bc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6258 ["INT_ADD", "register:40f0:8", ["const:bd6258:8", "const:4:8"]]
+ 00bd6258 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd61c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd61c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6260 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd6260 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6198 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd6198 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6234 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd6234 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7d8d44e981f3c4432a75a69d0bb2a89e"></a>

### [`00bd61f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd61f4.md) → [`00bd6290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6290.md) _ZN8firebase4auth13playgamescred10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd62a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6218"
      ]
    ],
    [
      "unmatched:00bd6210",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd6214",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd62a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd62b4"
      ]
    ],
    [
      "00bd62ac",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd62b0",
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
- 00bd6210 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd6210 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6210 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6210 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6214 ["INT_ADD", "register:40f0:8", ["const:bd6214:8", "const:4:8"]]
- 00bd6214 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd6218 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-2695aef39166510ed4d715457c3ebc1f"></a>

### [`00bd6230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6230.md) → [`00bd62cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd62cc.md) _ZN8firebase4auth11twittercred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd62e0",
      "incomplete_value": true,
      "site": "00bd62e0",
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
      "definition_site": "00bd6244",
      "incomplete_value": true,
      "site": "00bd6244",
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
      "00bd62dc",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd6250",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd6254",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd62dc",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd62ec",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd62f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6244 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd6244 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd62e0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd62e0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd6240 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd6240 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd62dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd62dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd6250 ["COPY", "tmp:0:8", ["const:d18:8"]]
- 00bd6250 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd6250 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd6250 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-398b88c0821b822bdbbc736c302b2eba"></a>

### [`00bd6270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6270.md) → [`00bd630c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd630c.md) _ZN8firebase4auth11twittercred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd6338",
      "incomplete_value": true,
      "site": "00bd6338",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd629c",
      "incomplete_value": true,
      "site": "00bd629c",
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
            "const:b08:8"
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
      "definition_site": "00bd6320",
      "incomplete_value": true,
      "site": "00bd6320",
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
      "definition_site": "00bd6284",
      "incomplete_value": true,
      "site": "00bd6284",
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
      "definition_site": "00bd6328",
      "incomplete_value": false,
      "site": "00bd6330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:ccb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd628c",
      "incomplete_value": false,
      "site": "00bd6294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:d18:8"
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
      "00bd631c",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6328",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ],
    [
      "00bd6338",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd631c",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6328",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd6338",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6294 ["INT_ADD", "register:40f0:8", ["const:bd6294:8", "const:4:8"]]
- 00bd6294 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6330 ["INT_ADD", "register:40f0:8", ["const:bd6330:8", "const:4:8"]]
+ 00bd6330 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd629c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd629c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6338 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd6338 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6280 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd6280 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd631c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd631c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-073033b4ab9f5d472f7015771dc74f67"></a>

### [`00bd62b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd62b0.md) → [`00bd634c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd634c.md) _ZN8firebase4auth11twittercred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd637c",
      "incomplete_value": true,
      "site": "00bd637c",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd62e0",
      "incomplete_value": true,
      "site": "00bd62e0",
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
            "const:b08:8"
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
      "definition_site": "00bd6360",
      "incomplete_value": true,
      "site": "00bd6360",
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
      "definition_site": "00bd62c4",
      "incomplete_value": true,
      "site": "00bd62c4",
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
      "definition_site": "00bd636c",
      "incomplete_value": false,
      "site": "00bd6374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:ccb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd62d0",
      "incomplete_value": false,
      "site": "00bd62d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:d18:8"
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
      "00bd635c",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd636c",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ],
    [
      "00bd637c",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd635c",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd636c",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd637c",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd62d8 ["INT_ADD", "register:40f0:8", ["const:bd62d8:8", "const:4:8"]]
- 00bd62d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6374 ["INT_ADD", "register:40f0:8", ["const:bd6374:8", "const:4:8"]]
+ 00bd6374 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd62e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd62e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd637c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd637c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd62c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd62c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd635c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd635c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-65104a7481d564ca3f551330e4e5117b"></a>

### [`00bd62f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd62f4.md) → [`00bd6390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6390.md) _ZN8firebase4auth11twittercred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd63c0",
      "incomplete_value": true,
      "site": "00bd63c0",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6324",
      "incomplete_value": true,
      "site": "00bd6324",
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
            "const:b08:8"
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
      "definition_site": "00bd63a4",
      "incomplete_value": true,
      "site": "00bd63a4",
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
      "definition_site": "00bd6308",
      "incomplete_value": true,
      "site": "00bd6308",
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
      "definition_site": "00bd63ac",
      "incomplete_value": false,
      "site": "00bd63b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:ccb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6310",
      "incomplete_value": false,
      "site": "00bd631c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:d18:8"
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
      "00bd63a0",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63ac",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ],
    [
      "00bd63c0",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd63a0",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63ac",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd63c0",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd631c ["INT_ADD", "register:40f0:8", ["const:bd631c:8", "const:4:8"]]
- 00bd631c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd63b8 ["INT_ADD", "register:40f0:8", ["const:bd63b8:8", "const:4:8"]]
+ 00bd63b8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6324 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd6324 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd63c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd63c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6304 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd6304 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd63a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
+ 00bd63a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-03d0658b7c9450136045b4c67a82cb1b"></a>

### [`00bd6344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6344.md) → [`00bd63e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd63e0.md) _ZN8firebase4auth11twittercred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd6438",
      "incomplete_value": true,
      "site": "00bd6438",
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
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd639c",
      "incomplete_value": true,
      "site": "00bd639c",
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
            "const:b10:8"
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
      "definition_site": "00bd6414",
      "incomplete_value": true,
      "site": "00bd6420",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6378",
      "incomplete_value": true,
      "site": "00bd6384",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b08:8"
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
      "00bd63f4",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6414",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6438",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd63f4",
      "READ",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6414",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6438",
      "WRITE",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6384 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6384 ["INT_ADD", "register:40f0:8", ["const:bd6384:8", "const:4:8"]]
- 00bd6384 ["CALLIND", null, ["register:0:8"]]
+ 00bd6420 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6420 ["INT_ADD", "register:40f0:8", ["const:bd6420:8", "const:4:8"]]
+ 00bd6420 ["CALLIND", null, ["register:0:8"]]
- 00bd639c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd639c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b10:8"]]
- 00bd639c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd6438 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd6438 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c10:8"]]
+ 00bd6438 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6358 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b10:8"]]
- 00bd6358 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd6358 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd63f4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c10:8"]]
+ 00bd63f4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd63f4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-7f8526db75d9ddbdcdcc7b27463912d8"></a>

### [`00bd63b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd63b0.md) → [`00bd644c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd644c.md) _ZN8firebase4auth11twittercred12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd6488",
      "incomplete_value": true,
      "site": "00bd6488",
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
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd63ec",
      "incomplete_value": true,
      "site": "00bd63ec",
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
            "const:b10:8"
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
      "definition_site": "00bd64a8",
      "incomplete_value": true,
      "site": "00bd64a8",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd640c",
      "incomplete_value": true,
      "site": "00bd640c",
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
            "const:b08:8"
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
      "definition_site": "00bd6464",
      "incomplete_value": true,
      "site": "00bd6464",
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
      "definition_site": "00bd63c8",
      "incomplete_value": true,
      "site": "00bd63c8",
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
      "00bd6460",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd646c",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6488",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6460",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd646c",
      "READ",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6488",
      "WRITE",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd63ec ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd63ec ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd63ec ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b10:8"]]
- 00bd63ec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6488 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6488 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6488 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c10:8"]]
+ 00bd6488 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd6408 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6408 ["INT_ADD", "register:40f0:8", ["const:bd6408:8", "const:4:8"]]
- 00bd6408 ["CALLIND", null, ["register:0:8"]]
+ 00bd64a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd64a4 ["INT_ADD", "register:40f0:8", ["const:bd64a4:8", "const:4:8"]]
+ 00bd64a4 ["CALLIND", null, ["register:0:8"]]
- 00bd640c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd640c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd640c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd64a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
+ 00bd64a8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd64a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-19d3a12aba747d841b361f8a4318a7e5"></a>

### [`00bd6420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6420.md) → [`00bd64bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd64bc.md) _ZN8firebase4auth11twittercred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd64fc",
      "incomplete_value": true,
      "site": "00bd64fc",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6460",
      "incomplete_value": true,
      "site": "00bd6460",
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
            "const:b08:8"
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
      "definition_site": "00bd64d8",
      "incomplete_value": true,
      "site": "00bd64d8",
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
      "definition_site": "00bd643c",
      "incomplete_value": true,
      "site": "00bd643c",
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
      "definition_site": "00bd64e0",
      "incomplete_value": false,
      "site": "00bd64f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:ccb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6444",
      "incomplete_value": false,
      "site": "00bd6458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:d18:8"
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
      "00bd64d0",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd64e0",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ],
    [
      "00bd64fc",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd64d0",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd64e0",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd64fc",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6458 ["INT_ADD", "register:40f0:8", ["const:bd6458:8", "const:4:8"]]
- 00bd6458 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd64f4 ["INT_ADD", "register:40f0:8", ["const:bd64f4:8", "const:4:8"]]
+ 00bd64f4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6460 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd6460 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd64fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
+ 00bd64fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6434 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd6434 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd64d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
+ 00bd64d0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-855de853bca9a4460a5fe6bd49cc6545"></a>

### [`00bd6490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6490.md) → [`00bd652c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd652c.md) _ZN8firebase4auth11twittercred11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd6490",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6494",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd64a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd64b4"
      ]
    ]
  ],
  "added": [
    [
      "00bd652c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6530",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6540",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd6550"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6490 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd6490 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd6490 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd6494 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd6494 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd6494 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd6494 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd6498 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd6498 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd6498 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd6498 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-88f84f626811450a4bfb99e8c949a537"></a>

### [`00bd64cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd64cc.md) → [`00bd6568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6568.md) _ZN8firebase4auth11twittercred13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd659c",
      "incomplete_value": false,
      "site": "00bd65a0",
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
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd64e0",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd64e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd65ac"
      ]
    ],
    [
      "00bd658c",
      "PARAM",
      [
        "storage",
        "002a1d18",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd657c",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd65ac"
      ]
    ],
    [
      "00bd658c",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6504 ["INT_ADD", "register:40f0:8", ["const:bd6504:8", "const:4:8"]]
- 00bd6504 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd65a0 ["INT_ADD", "register:40f0:8", ["const:bd65a0:8", "const:4:8"]]
+ 00bd65a0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd64e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd64e0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd64e4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-bee79a5c694cbbeb57395309c9a5fa84"></a>

### [`00bd653c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd653c.md) → [`00bd65d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd65d8.md) _ZN8firebase4auth11twittercred10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd653c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6540",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6560"
      ]
    ]
  ],
  "added": [
    [
      "00bd65d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd65dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd65ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd65fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd653c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd653c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd653c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd6540 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd6540 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd6540 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd6540 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd6544 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd6544 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd6544 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd6544 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b30aca19f4c30ff5de56a9b9d5ae89ed"></a>

### [`00bd6578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6578.md) → [`00bd6614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6614.md) _ZN8firebase4auth13oauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd6578",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd657c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6588",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6614",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6618",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6624",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6578 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd6578 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd6578 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd657c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd657c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd657c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd657c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd6580 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd6580 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd6580 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd6580 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-5211e8e99799bf88f7d05f2441f6ae43"></a>

### [`00bd65b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd65b8.md) → [`00bd6654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6654.md) _ZN8firebase4auth13oauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd65b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd65bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd65c8",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6654",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6658",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6664",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd65b8 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd65b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd65b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd65bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd65bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd65bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd65bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd65c0 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd65c0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd65c0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd65c0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-7829793bb573dd2cfde7645d882f9b17"></a>

### [`00bd65f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd65f8.md) → [`00bd6694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6694.md) _ZN8firebase4auth13oauthprovider10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd66a4",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd660c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd66c8"
      ]
    ],
    [
      "unmatched:00bd6618",
      "PARAM",
      [
        "storage",
        "002b9d48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd66a4",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd66a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd66c8"
      ]
    ],
    [
      "00bd66b4",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6608 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd6608 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd66a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
+ 00bd66a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd660c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd660c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd6610 ["COPY", "register:4018:8", ["const:2b9000:8"]]
~~~


<a id="compare-33fcc1aa62b60706f4bc10f3afaed4a2"></a>

### [`00bd663c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd663c.md) → [`00bd66d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd66d8.md) _ZN8firebase4auth13oauthprovider10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd66f8",
      "incomplete_value": false,
      "site": "00bd6700",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00bd66f4",
      "incomplete_value": false,
      "site": "00bd6700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cf4:8"
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
      "definition_site": "00bd66fc",
      "incomplete_value": false,
      "site": "00bd6700",
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
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd664c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd6650",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6670"
      ]
    ],
    [
      "unmatched:00bd6658",
      "PARAM",
      [
        "storage",
        "002b9d48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd66e8",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd66ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd670c"
      ]
    ],
    [
      "00bd66f4",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6664 ["INT_ADD", "register:40f0:8", ["const:bd6664:8", "const:4:8"]]
- 00bd6664 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6700 ["INT_ADD", "register:40f0:8", ["const:bd6700:8", "const:4:8"]]
+ 00bd6700 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd664c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd664c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd6650 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd6650 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-efcc2352fe0135ea755a72e51dee49d4"></a>

### [`00bd668c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd668c.md) → [`00bd6728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6728.md) _ZN8firebase4auth13oauthprovider15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.37% / 新版 70.37%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd66d4",
      "incomplete_value": true,
      "site": "00bd66d8",
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
      "unmatched:00bd668c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6690",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6694",
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
      "00bd6728",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd672c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6730",
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
- 00bd66d8 ["INT_ADD", "register:40f0:8", ["const:bd66d8:8", "const:4:8"]]
- 00bd66d8 ["CALL", null, ["callee:00c5b030:8"]]
+ 00bd6774 ["INT_ADD", "register:40f0:8", ["const:bd6774:8", "const:4:8"]]
+ 00bd6774 ["CALL", null, ["callee:00c5b030:8"]]
- 00bd668c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd668c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd668c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd6690 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd6690 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd6690 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd6690 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c1f74ef082f528224fd45a61803c59aa"></a>

### [`00bd66f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd66f8.md) → [`00bd6794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6794.md) _ZN8firebase4auth13oauthprovider12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd670c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd6710",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd67f4"
      ]
    ],
    [
      "00bd67b4",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd67a8",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd67ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd67f4"
      ]
    ],
    [
      "00bd67b4",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd670c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
- 00bd670c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd6710 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd6710 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00bd6718 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b30:8"]]
- 00bd6718 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd6718 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd67b4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c30:8"]]
+ 00bd67b4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd67b4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-95a69a2c45fae281b6ccbd03c15b0ec7"></a>

### [`00bd6768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6768.md) → [`00bd6804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6804.md) _ZN8firebase4auth13oauthprovider14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd6790",
      "incomplete_value": true,
      "site": "00bd67a0",
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
      "definition_site": "00bd6794",
      "incomplete_value": true,
      "site": "00bd67a0",
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
      "definition_site": "00bd6798",
      "incomplete_value": false,
      "site": "00bd67a0",
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
      "unmatched:00bd6768",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd676c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd677c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6804",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6808",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6818",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd67a0 ["INT_ADD", "register:40f0:8", ["const:bd67a0:8", "const:4:8"]]
- 00bd67a0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd683c ["INT_ADD", "register:40f0:8", ["const:bd683c:8", "const:4:8"]]
+ 00bd683c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6768 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd6768 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd6768 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd6768 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd676c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd676c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd676c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd676c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0bda70baed66ca6f880ac6082aa6796c"></a>

### [`00bd67d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd67d8.md) → [`00bd6874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6874.md) _ZN8firebase4auth13oauthprovider11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd67ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd67fc"
      ]
    ],
    [
      "unmatched:00bd67f4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd67f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd6888",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd6898"
      ]
    ],
    [
      "00bd6890",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6894",
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
- 00bd67ec ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd67ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd67f0 ["COPY", "register:4000:8", ["const:2a8000:8"]]
- 00bd67f4 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd67f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd67f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd67f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c3e0e98bb280dd65d0ab804f006619e8"></a>

### [`00bd6814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6814.md) → [`00bd68b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd68b0.md) _ZN8firebase4auth13oauthprovider13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd68d4",
      "incomplete_value": false,
      "site": "00bd68e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:cf4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6838",
      "incomplete_value": false,
      "site": "00bd684c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "unmatched:00bd6828",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd6830",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd68f4"
      ]
    ],
    [
      "unmatched:00bd6838",
      "PARAM",
      [
        "storage",
        "002b9d48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd68c4",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd68cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd68f4"
      ]
    ],
    [
      "00bd68d4",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd684c ["INT_ADD", "register:40f0:8", ["const:bd684c:8", "const:4:8"]]
- 00bd684c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd68e8 ["INT_ADD", "register:40f0:8", ["const:bd68e8:8", "const:4:8"]]
+ 00bd68e8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6828 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
- 00bd6828 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd682c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-a1ef23bb9098b303a18ced4b8c809977"></a>

### [`00bd6884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6884.md) → [`00bd6920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6920.md) _ZN8firebase4auth13oauthprovider10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd6884",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6888",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6898",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd68a8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6920",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6924",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd6944"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6884 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd6884 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd6884 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd6888 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd6888 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd6888 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd6888 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd688c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd688c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd688c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd688c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-3e004cc2d18643b0c1ed97ffdab38924"></a>

### [`00bd68c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd68c0.md) → [`00bd695c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd695c.md) _ZN8firebase4auth8timeunit19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 31.25% / 新版 31.25%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6970",
      "incomplete_value": true,
      "site": "00bd6970",
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
      "definition_site": "00bd68d4",
      "incomplete_value": true,
      "site": "00bd68d4",
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
      "unmatched:00bd68c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd68c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd696c",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd695c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6960",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd696c",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd68d4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd68d4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd6970 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd6970 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd68c0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd68c0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd68c0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd68c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd68c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd68c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd68c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ae02bee0ec1f8a817ebc49f2c9ce5491"></a>

### [`00bd6900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6900.md) → [`00bd699c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd699c.md) _ZN8firebase4auth8timeunit19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 43.75% / 新版 43.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd69b0",
      "incomplete_value": true,
      "site": "00bd69b0",
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
      "definition_site": "00bd6914",
      "incomplete_value": true,
      "site": "00bd6914",
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
      "00bd69ac",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd69b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6930"
      ]
    ],
    [
      "unmatched:00bd691c",
      "PARAM",
      [
        "storage",
        "002b37ca",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd69ac",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd69b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd69cc"
      ]
    ],
    [
      "00bd69b8",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6914 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd6914 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd69b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd69b0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd6910 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b58:8"]]
- 00bd6910 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd69ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
+ 00bd69ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd691c ["COPY", "tmp:0:8", ["const:7ca:8"]]
- 00bd691c ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd691c ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd691c ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-c2400e4a888787b15c04f83d60ca1f58"></a>

### [`00bd6940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6940.md) → [`00bd69dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd69dc.md) _ZN8firebase4auth8timeunit10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd6950",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd6954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6974"
      ]
    ],
    [
      "unmatched:00bd6960",
      "PARAM",
      [
        "storage",
        "002b37ca",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd69ec",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd69f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd6a10"
      ]
    ],
    [
      "00bd69fc",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6950 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b58:8"]]
- 00bd6950 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd6954 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd6954 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd6958 ["COPY", "register:4018:8", ["const:2b3000:8"]]
~~~


<a id="compare-4a32a2fab72041a8d9f16565cd5e4d25"></a>

### [`00bd6984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6984.md) → [`00bd6a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6a20.md) _ZN8firebase4auth8timeunit10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6a44",
      "incomplete_value": false,
      "site": "00bd6a48",
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
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd6a58",
      "incomplete_value": true,
      "site": "00bd6a60",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00bd6984",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd6988",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6a30",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd6a30",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd69ac ["INT_ADD", "register:40f0:8", ["const:bd69ac:8", "const:4:8"]]
- 00bd69ac ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6a48 ["INT_ADD", "register:40f0:8", ["const:bd6a48:8", "const:4:8"]]
+ 00bd6a48 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6984 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd6984 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd6984 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd6988 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd6988 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd6988 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd6988 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-14fb2f0400ba3a78c8497a79d9ac886d"></a>

### [`00bd69c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd69c8.md) → [`00bd6a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6a64.md) _ZN8firebase4auth8timeunit8GetClassEv

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
      "unmatched:00bd69cc",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6a68",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd69c8 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00bd69cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b58:8"]]
- 00bd69cc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd69d0 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bd69d0 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-a9c2f4a85931be2b04e0c9a7b6076ae5"></a>

### [`00bd69d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd69d4.md) → [`00bd6a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6a70.md) _ZN8firebase4auth8timeunit15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 70.37% / 新版 70.37%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6ac8",
      "incomplete_value": true,
      "site": "00bd6ac8",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a2c",
      "incomplete_value": true,
      "site": "00bd6a2c",
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
            "const:b60:8"
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
      "definition_site": "00bd6aa4",
      "incomplete_value": true,
      "site": "00bd6ab0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a08",
      "incomplete_value": true,
      "site": "00bd6a14",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b58:8"
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
      "unmatched:00bd69d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd69d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd69dc",
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
      "00bd6a70",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd6a74",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd6a78",
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
- 00bd6a14 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6a14 ["INT_ADD", "register:40f0:8", ["const:bd6a14:8", "const:4:8"]]
- 00bd6a14 ["CALLIND", null, ["register:0:8"]]
+ 00bd6ab0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6ab0 ["INT_ADD", "register:40f0:8", ["const:bd6ab0:8", "const:4:8"]]
+ 00bd6ab0 ["CALLIND", null, ["register:0:8"]]
- 00bd6a2c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6a2c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b60:8"]]
- 00bd6a2c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd6ac8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd6ac8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c60:8"]]
+ 00bd6ac8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd69d4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd69d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd69d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b9f5dfc2dae8b86c5231076266f30947"></a>

### [`00bd6a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6a40.md) → [`00bd6adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6adc.md) _ZN8firebase4auth8timeunit12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd6b18",
      "incomplete_value": true,
      "site": "00bd6b18",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a7c",
      "incomplete_value": true,
      "site": "00bd6a7c",
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
            "const:b60:8"
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
      "definition_site": "00bd6b38",
      "incomplete_value": true,
      "site": "00bd6b38",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a9c",
      "incomplete_value": true,
      "site": "00bd6a9c",
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
            "const:b58:8"
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
      "definition_site": "00bd6af4",
      "incomplete_value": true,
      "site": "00bd6af4",
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
      "definition_site": "00bd6a58",
      "incomplete_value": true,
      "site": "00bd6a58",
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
      "00bd6af0",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6afc",
      "READ",
      [
        "storage",
        "01126b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6b18",
      "WRITE",
      [
        "storage",
        "01126b60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6af0",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6afc",
      "READ",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6b18",
      "WRITE",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6a7c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6a7c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6a7c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b60:8"]]
- 00bd6a7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6b18 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6b18 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6b18 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c60:8"]]
+ 00bd6b18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd6a98 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6a98 ["INT_ADD", "register:40f0:8", ["const:bd6a98:8", "const:4:8"]]
- 00bd6a98 ["CALLIND", null, ["register:0:8"]]
+ 00bd6b34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6b34 ["INT_ADD", "register:40f0:8", ["const:bd6b34:8", "const:4:8"]]
+ 00bd6b34 ["CALLIND", null, ["register:0:8"]]
- 00bd6a9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00bd6a9c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd6a9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6b38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00bd6b38 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6b38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-fed327a04fbe5d5a4ca3f22c72ee6010"></a>

### [`00bd6ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6ab0.md) → [`00bd6b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6b4c.md) _ZN8firebase4auth8timeunit14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6b8c",
      "incomplete_value": true,
      "site": "00bd6b8c",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6af0",
      "incomplete_value": true,
      "site": "00bd6af0",
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
            "const:b58:8"
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
      "definition_site": "00bd6b68",
      "incomplete_value": true,
      "site": "00bd6b68",
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
      "definition_site": "00bd6acc",
      "incomplete_value": true,
      "site": "00bd6acc",
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
      "definition_site": "00bd6b70",
      "incomplete_value": false,
      "site": "00bd6b84",
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
            "const:7fb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6ad4",
      "incomplete_value": false,
      "site": "00bd6ae8",
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
            "const:7ca:8"
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
      "00bd6b60",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6b70",
      "PARAM",
      [
        "storage",
        "002b37ca",
        null,
        "string"
      ]
    ],
    [
      "00bd6b8c",
      "WRITE",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6b60",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6b70",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd6b8c",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6ae8 ["INT_ADD", "register:40f0:8", ["const:bd6ae8:8", "const:4:8"]]
- 00bd6ae8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6b84 ["INT_ADD", "register:40f0:8", ["const:bd6b84:8", "const:4:8"]]
+ 00bd6b84 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6af0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00bd6af0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6b8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00bd6b8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6ac4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00bd6ac4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6b60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00bd6b60 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1a2b5c81ae8509d59dfb074997f1b075"></a>

### [`00bd6b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6b20.md) → [`00bd6bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6bbc.md) _ZN8firebase4auth8timeunit11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd6bd8",
      "incomplete_value": false,
      "site": "00bd6bdc",
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
      "definition_site": "00bd6b3c",
      "incomplete_value": false,
      "site": "00bd6b40",
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
      "definition_site": "00bd6be8",
      "incomplete_value": true,
      "site": "00bd6bf4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd6b4c",
      "incomplete_value": true,
      "site": "00bd6b58",
      "value": [
        "LOAD",
        "8",
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
      "00bd6bd8",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd6be8",
      "DATA",
      [
        "storage",
        "01126b68",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd6bd8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6be8",
      "DATA",
      [
        "storage",
        "01126c68",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6b40 ["INT_ADD", "register:40f0:8", ["const:bd6b40:8", "const:4:8"]]
- 00bd6b40 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd6bdc ["INT_ADD", "register:40f0:8", ["const:bd6bdc:8", "const:4:8"]]
+ 00bd6bdc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd6b3c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd6b3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6b3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6b3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6bd8 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd6bd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6bd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6bd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6b48 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00bd6b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd6be4 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 00bd6be4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6be4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6be4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-040980848a4f8213f85150e7bace11ad"></a>

### [`00bd6b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6b5c.md) → [`00bd6bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6bf8.md) _ZN8firebase4auth8timeunit13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6c38",
      "incomplete_value": true,
      "site": "00bd6c38",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6b9c",
      "incomplete_value": true,
      "site": "00bd6b9c",
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
            "const:b58:8"
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
      "definition_site": "00bd6c14",
      "incomplete_value": true,
      "site": "00bd6c14",
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
      "definition_site": "00bd6b78",
      "incomplete_value": true,
      "site": "00bd6b78",
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
      "definition_site": "00bd6c1c",
      "incomplete_value": false,
      "site": "00bd6c30",
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
            "const:7fb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6b80",
      "incomplete_value": false,
      "site": "00bd6b94",
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
            "const:7ca:8"
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
      "00bd6c0c",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c1c",
      "PARAM",
      [
        "storage",
        "002b37ca",
        null,
        "string"
      ]
    ],
    [
      "00bd6c38",
      "WRITE",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6c0c",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c1c",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd6c38",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6b94 ["INT_ADD", "register:40f0:8", ["const:bd6b94:8", "const:4:8"]]
- 00bd6b94 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6c30 ["INT_ADD", "register:40f0:8", ["const:bd6c30:8", "const:4:8"]]
+ 00bd6c30 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6b9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00bd6b9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6c38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00bd6c38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6b70 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00bd6b70 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6c0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00bd6c0c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ab8c36181818e3ebd4cc6f328d8795b8"></a>

### [`00bd6bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6bcc.md) → [`00bd6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6c68.md) _ZN8firebase4auth8timeunit10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd6c84",
      "incomplete_value": false,
      "site": "00bd6c88",
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
      "definition_site": "00bd6be8",
      "incomplete_value": false,
      "site": "00bd6bec",
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
      "definition_site": "00bd6c94",
      "incomplete_value": true,
      "site": "00bd6ca0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd6bf8",
      "incomplete_value": true,
      "site": "00bd6c04",
      "value": [
        "LOAD",
        "8",
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
      "00bd6c84",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd6c94",
      "DATA",
      [
        "storage",
        "01126b70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6c84",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6c94",
      "DATA",
      [
        "storage",
        "01126c70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6bec ["INT_ADD", "register:40f0:8", ["const:bd6bec:8", "const:4:8"]]
- 00bd6bec ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd6c88 ["INT_ADD", "register:40f0:8", ["const:bd6c88:8", "const:4:8"]]
+ 00bd6c88 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd6be8 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd6be8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6be8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6be8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c84 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd6c84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6bf4 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 00bd6bf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6bf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6bf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd6c90 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 00bd6c90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6c90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6c90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f1db1f046162ffcf654cbb0d92a452aa"></a>

### [`00bd6c08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6c08.md) → [`00bd6ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6ca4.md) _ZN8firebase4auth26phone_auth_options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd6cd0",
      "incomplete_value": true,
      "site": "00bd6cd0",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6c34",
      "incomplete_value": true,
      "site": "00bd6c34",
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
            "const:b78:8"
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
      "definition_site": "00bd6cb8",
      "incomplete_value": true,
      "site": "00bd6cb8",
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
      "definition_site": "00bd6c1c",
      "incomplete_value": true,
      "site": "00bd6c1c",
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
      "definition_site": "00bd6cc4",
      "incomplete_value": false,
      "site": "00bd6cc8",
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
            "const:ce4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6c28",
      "incomplete_value": false,
      "site": "00bd6c2c",
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
            "const:d31:8"
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
      "00bd6cb4",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6cc4",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6cd0",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6cb4",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6cc4",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6cd0",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6c2c ["INT_ADD", "register:40f0:8", ["const:bd6c2c:8", "const:4:8"]]
- 00bd6c2c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6cc8 ["INT_ADD", "register:40f0:8", ["const:bd6cc8:8", "const:4:8"]]
+ 00bd6cc8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6c34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6c34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6cd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6cd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6c18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6c18 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6cb4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6cb4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-900c17e683465dda1ea96b8002a4a7e2"></a>

### [`00bd6c48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6c48.md) → [`00bd6ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6ce4.md) _ZN8firebase4auth26phone_auth_options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd6d10",
      "incomplete_value": true,
      "site": "00bd6d10",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6c74",
      "incomplete_value": true,
      "site": "00bd6c74",
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
            "const:b78:8"
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
      "definition_site": "00bd6cf8",
      "incomplete_value": true,
      "site": "00bd6cf8",
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
      "definition_site": "00bd6c5c",
      "incomplete_value": true,
      "site": "00bd6c5c",
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
      "definition_site": "00bd6d00",
      "incomplete_value": false,
      "site": "00bd6d08",
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
            "const:ce4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6c64",
      "incomplete_value": false,
      "site": "00bd6c6c",
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
            "const:d31:8"
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
      "00bd6cf4",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d00",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6d10",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6cf4",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d00",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6d10",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6c6c ["INT_ADD", "register:40f0:8", ["const:bd6c6c:8", "const:4:8"]]
- 00bd6c6c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6d08 ["INT_ADD", "register:40f0:8", ["const:bd6d08:8", "const:4:8"]]
+ 00bd6d08 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6c74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6c74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6d10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6d10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6c58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6c58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6cf4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6cf4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


