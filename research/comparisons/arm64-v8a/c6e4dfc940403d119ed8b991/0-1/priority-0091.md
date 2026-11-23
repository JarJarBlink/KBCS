# v16.0.1 → v16.0.2 · 最優先の変更候補 (91)

[一覧の目次](README.md)

<a id="compare-5143f5f92d648ac52ffdefa5bdacb908"></a>

### [`00bccc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccc38.md) → [`00bcccd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcccd4.md) _ZN8firebase4auth11jnilistener13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcccf8",
      "incomplete_value": false,
      "site": "00bccd0c",
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
            "const:c1a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccc5c",
      "incomplete_value": false,
      "site": "00bccc70",
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
            "const:bda:8"
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
      "unmatched:00bccc38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccc3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccc4c",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcccd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcccd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccce8",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccc70 ["INT_ADD", "register:40f0:8", ["const:bccc70:8", "const:4:8"]]
- 00bccc70 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bccd0c ["INT_ADD", "register:40f0:8", ["const:bccd0c:8", "const:4:8"]]
+ 00bccd0c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccc38 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bccc38 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bccc38 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bccc38 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bccc3c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bccc3c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bccc3c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bccc3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-64b20ff26122be8787c8abd8686c1f71"></a>

### [`00bccca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccca8.md) → [`00bccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccd44.md) _ZN8firebase4auth11jnilistener10GetFieldIdENS1_5FieldE

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
      "00bccd58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bccccc"
      ]
    ],
    [
      "unmatched:00bcccc4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcccc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bccd58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccd68"
      ]
    ],
    [
      "00bccd60",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bccd64",
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
- 00bcccc4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bcccc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcccc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcccc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcccc8 ["INT_ADD", "register:40f0:8", ["const:bcccc8:8", "const:4:8"]]
- 00bcccc8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bccccc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-1a4c605f46b5f4897e5195c5e611675f"></a>

### [`00bccce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccce4.md) → [`00bccd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccd80.md) _ZN8firebase4auth21jni_id_token_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 31.25% / 新版 31.25%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bccd94",
      "incomplete_value": true,
      "site": "00bccd94",
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
      "definition_site": "00bcccf8",
      "incomplete_value": true,
      "site": "00bcccf8",
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
      "unmatched:00bccce4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccce8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccd90",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bccd80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bccd84",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccd90",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccce4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bccce4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bccce4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bccce8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bccce8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bccce8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bccce8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bcccec ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bcccec ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bcccec ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bcccec ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-97890a588425e90afada7be11e8b1747"></a>

### [`00bccd24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccd24.md) → [`00bccdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccdc0.md) _ZN8firebase4auth21jni_id_token_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bccdec",
      "incomplete_value": true,
      "site": "00bccdec",
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
            "const:918:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccd50",
      "incomplete_value": true,
      "site": "00bccd50",
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
            "const:818:8"
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
      "definition_site": "00bccdd4",
      "incomplete_value": true,
      "site": "00bccdd4",
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
      "definition_site": "00bccd38",
      "incomplete_value": true,
      "site": "00bccd38",
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
      "definition_site": "00bccddc",
      "incomplete_value": false,
      "site": "00bccde4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:92e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccd40",
      "incomplete_value": false,
      "site": "00bccd48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:98a:8"
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
      "00bccdd0",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccddc",
      "PARAM",
      [
        "storage",
        "002aa98a",
        null,
        "string"
      ]
    ],
    [
      "00bccdec",
      "WRITE",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bccdd0",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccddc",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bccdec",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccd48 ["INT_ADD", "register:40f0:8", ["const:bccd48:8", "const:4:8"]]
- 00bccd48 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bccde4 ["INT_ADD", "register:40f0:8", ["const:bccde4:8", "const:4:8"]]
+ 00bccde4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccd50 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:818:8"]]
- 00bccd50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bccdec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
+ 00bccdec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccd34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:818:8"]]
- 00bccd34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bccdd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
+ 00bccdd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-15ccf42462aebd672910132a26c78c3e"></a>

### [`00bccd64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccd64.md) → [`00bcce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce00.md) _ZN8firebase4auth21jni_id_token_listener10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcce14",
      "incomplete_value": true,
      "site": "00bcce14",
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
      "definition_site": "00bccd78",
      "incomplete_value": true,
      "site": "00bccd78",
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
      "00bcce10",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcce14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bccd98"
      ]
    ],
    [
      "unmatched:00bccd84",
      "PARAM",
      [
        "storage",
        "002aa98a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcce10",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcce14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcce34"
      ]
    ],
    [
      "00bcce20",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccd74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:818:8"]]
- 00bccd74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcce10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
+ 00bcce10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bccd84 ["COPY", "tmp:0:8", ["const:98a:8"]]
- 00bccd84 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bccd84 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bccd84 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00bccd88 ["COPY", "register:4010:8", ["const:0:8"]]
~~~


<a id="compare-2f3ddce33cb415c20250c0ee48493b51"></a>

### [`00bccda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccda8.md) → [`00bcce44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce44.md) _ZN8firebase4auth21jni_id_token_listener10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcce64",
      "incomplete_value": false,
      "site": "00bcce6c",
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
      "definition_site": "00bcce60",
      "incomplete_value": false,
      "site": "00bcce6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:92e:8"
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
      "unmatched:00bccdb8",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bccdbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bccddc"
      ]
    ],
    [
      "unmatched:00bccdc4",
      "PARAM",
      [
        "storage",
        "002aa98a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcce54",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcce58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcce78"
      ]
    ],
    [
      "00bcce60",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccdd0 ["INT_ADD", "register:40f0:8", ["const:bccdd0:8", "const:4:8"]]
- 00bccdd0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcce6c ["INT_ADD", "register:40f0:8", ["const:bcce6c:8", "const:4:8"]]
+ 00bcce6c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccdb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:818:8"]]
- 00bccdb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bccdbc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bccdbc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-932ca42b82f354624283d182c2605cc0"></a>

### [`00bccdf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccdf8.md) → [`00bcce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce94.md) _ZN8firebase4auth21jni_id_token_listener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bcceec",
      "incomplete_value": true,
      "site": "00bcceec",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce50",
      "incomplete_value": true,
      "site": "00bcce50",
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
            "const:820:8"
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
      "definition_site": "00bccec8",
      "incomplete_value": true,
      "site": "00bcced4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:918:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce2c",
      "incomplete_value": true,
      "site": "00bcce38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:818:8"
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
      "00bccea8",
      "READ",
      [
        "storage",
        "01126820",
        null,
        "undefined1"
      ]
    ],
    [
      "00bccec8",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcceec",
      "WRITE",
      [
        "storage",
        "01126820",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bccea8",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ],
    [
      "00bccec8",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcceec",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcce38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcce38 ["INT_ADD", "register:40f0:8", ["const:bcce38:8", "const:4:8"]]
- 00bcce38 ["CALLIND", null, ["register:0:8"]]
+ 00bcced4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcced4 ["INT_ADD", "register:40f0:8", ["const:bcced4:8", "const:4:8"]]
+ 00bcced4 ["CALLIND", null, ["register:0:8"]]
- 00bcce50 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcce50 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:820:8"]]
- 00bcce50 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcceec ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcceec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:920:8"]]
+ 00bcceec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bcce0c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:820:8"]]
- 00bcce0c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bcce0c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bccea8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:920:8"]]
+ 00bccea8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bccea8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-935dc192d4963e37ff02a59bd59affa7"></a>

### [`00bcce64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcce64.md) → [`00bccf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccf00.md) _ZN8firebase4auth21jni_id_token_listener12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bccf14",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcce7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccf60"
      ]
    ],
    [
      "00bccf20",
      "READ",
      [
        "storage",
        "01126820",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bccf14",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccf18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccf60"
      ]
    ],
    [
      "00bccf20",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcce78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:818:8"]]
- 00bcce78 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bccf14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
+ 00bccf14 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcce7c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bcce7c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bcce84 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:820:8"]]
- 00bcce84 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bcce84 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bccf20 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:920:8"]]
+ 00bccf20 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bccf20 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e8add7a85af243993fbae24fe8f98070"></a>

### [`00bcced4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcced4.md) → [`00bccf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccf70.md) _ZN8firebase4auth21jni_id_token_listener14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bccf94",
      "incomplete_value": false,
      "site": "00bccfa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:92e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccef8",
      "incomplete_value": false,
      "site": "00bccf0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:98a:8"
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
      "unmatched:00bccee8",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bccef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccfb4"
      ]
    ],
    [
      "unmatched:00bccef8",
      "PARAM",
      [
        "storage",
        "002aa98a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bccf84",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccf8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccfb4"
      ]
    ],
    [
      "00bccf94",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccf0c ["INT_ADD", "register:40f0:8", ["const:bccf0c:8", "const:4:8"]]
- 00bccf0c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bccfa8 ["INT_ADD", "register:40f0:8", ["const:bccfa8:8", "const:4:8"]]
+ 00bccfa8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccee8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:818:8"]]
- 00bccee8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcceec ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-60b8190d917505ee5b7839b22ccf99fa"></a>

### [`00bccf44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccf44.md) → [`00bccfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccfe0.md) _ZN8firebase4auth21jni_id_token_listener11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bccf44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccf48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccff4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bccf68"
      ]
    ]
  ],
  "added": [
    [
      "00bccfe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bccfe4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccff4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcd004"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccf44 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bccf44 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bccf44 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bccf48 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bccf48 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bccf48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bccf48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bccf4c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bccf4c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bccf4c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bccf4c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-d1429e7c73804f67a1e61ecc79e31c61"></a>

### [`00bccf80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccf80.md) → [`00bcd01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd01c.md) _ZN8firebase4auth21jni_id_token_listener13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd05c",
      "incomplete_value": true,
      "site": "00bcd05c",
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
            "const:918:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccfc0",
      "incomplete_value": true,
      "site": "00bccfc0",
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
            "const:818:8"
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
      "definition_site": "00bcd038",
      "incomplete_value": true,
      "site": "00bcd038",
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
      "definition_site": "00bccf9c",
      "incomplete_value": true,
      "site": "00bccf9c",
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
      "definition_site": "00bcd040",
      "incomplete_value": false,
      "site": "00bcd054",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:92e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccfa4",
      "incomplete_value": false,
      "site": "00bccfb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:98a:8"
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
      "00bcd030",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd040",
      "PARAM",
      [
        "storage",
        "002aa98a",
        null,
        "string"
      ]
    ],
    [
      "00bcd05c",
      "WRITE",
      [
        "storage",
        "01126818",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd030",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd040",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcd05c",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccfb8 ["INT_ADD", "register:40f0:8", ["const:bccfb8:8", "const:4:8"]]
- 00bccfb8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcd054 ["INT_ADD", "register:40f0:8", ["const:bcd054:8", "const:4:8"]]
+ 00bcd054 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccfc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:818:8"]]
- 00bccfc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd05c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
+ 00bcd05c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccf94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:818:8"]]
- 00bccf94 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcd030 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
+ 00bcd030 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3e96dda121e4e61a1da5ecccddbc492e"></a>

### [`00bccff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccff0.md) → [`00bcd08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd08c.md) _ZN8firebase4auth21jni_id_token_listener10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bcd0a8",
      "incomplete_value": false,
      "site": "00bcd0ac",
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
      "definition_site": "00bcd00c",
      "incomplete_value": false,
      "site": "00bcd010",
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
      "definition_site": "00bcd0b8",
      "incomplete_value": true,
      "site": "00bcd0c4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcd01c",
      "incomplete_value": true,
      "site": "00bcd028",
      "value": [
        "LOAD",
        "8",
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
      "00bcd0a8",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bcd0b8",
      "DATA",
      [
        "storage",
        "01126838",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcd0a8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcd0b8",
      "DATA",
      [
        "storage",
        "01126938",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd010 ["INT_ADD", "register:40f0:8", ["const:bcd010:8", "const:4:8"]]
- 00bcd010 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcd0ac ["INT_ADD", "register:40f0:8", ["const:bcd0ac:8", "const:4:8"]]
+ 00bcd0ac ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcd00c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bcd00c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcd00c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcd00c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd0a8 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bcd0a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd0a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd0a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcd018 ["COPY", "tmp:0:8", ["const:838:8"]]
- 00bcd018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bcd018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bcd018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bcd0b4 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 00bcd0b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcd0b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcd0b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0d522720a06d680b2a2db5e977c2d1f9"></a>

### [`00bcd02c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd02c.md) → [`00bcd0c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd0c8.md) _ZN8firebase4auth18CacheAuthMethodIdsEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc40.md) · 呼出先 3件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd10.md) · 呼出先 3件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 37.86% / 新版 37.86%

優先判定に残った影響 `call_argument_candidate` 10件, `store_destination` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd2f0",
      "incomplete_value": true,
      "site": "00bcd2f0",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd254",
      "incomplete_value": true,
      "site": "00bcd254",
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
            "const:820:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd25c",
      "incomplete_value": true,
      "site": "00bcd25c",
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
      "definition_site": "00bcd1c0",
      "incomplete_value": true,
      "site": "00bcd1c0",
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
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd124",
      "incomplete_value": false,
      "site": "00bcd138",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c91000:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "unmatched:00bcd048",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcd054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcd07c"
      ]
    ],
    [
      "unmatched:00bcd05c",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcd0e4",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd0f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcd118"
      ]
    ],
    [
      "00bcd0f8",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd09c ["INT_ADD", "register:40f0:8", ["const:bcd09c:8", "const:4:8"]]
- 00bcd09c ["CALL", null, ["callee:00c5b000:8"]]
+ 00bcd138 ["INT_ADD", "register:40f0:8", ["const:bcd138:8", "const:4:8"]]
+ 00bcd138 ["CALL", null, ["callee:00c5b000:8"]]
- 00bcd0f4 ["INT_ADD", "register:40f0:8", ["const:bcd0f4:8", "const:4:8"]]
- 00bcd0f4 ["CALL", null, ["callee:00c5b000:8"]]
+ 00bcd190 ["INT_ADD", "register:40f0:8", ["const:bcd190:8", "const:4:8"]]
+ 00bcd190 ["CALL", null, ["callee:00c5b000:8"]]
+ 00bcd0f4 ["COPY", "register:4018:8", ["const:2ac000:8"]]
~~~


<a id="compare-8b618e368b85f3cc3a479640bebd791d"></a>

### [`00bcd25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd25c.md) → [`00bcd2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd2f8.md) _ZN8firebase4auth18ReleaseAuthClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dc60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc60.md) · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd30.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 28.24% / 新版 28.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd354",
      "incomplete_value": true,
      "site": "00bcd354",
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
            "const:828:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd350",
      "incomplete_value": true,
      "site": "00bcd350",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd314",
      "incomplete_value": true,
      "site": "00bcd314",
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
      "definition_site": "00bcd278",
      "incomplete_value": true,
      "site": "00bcd278",
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
      "definition_site": "00bcd360",
      "incomplete_value": true,
      "site": "00bcd360",
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
      "definition_site": "00bcd35c",
      "incomplete_value": true,
      "site": "00bcd35c",
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
      "00bcd30c",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcd2bc"
      ]
    ],
    [
      "unmatched:00bcd280",
      "READ",
      [
        "storage",
        "01126730",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcd30c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcd358"
      ]
    ],
    [
      "00bcd31c",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd278 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bcd278 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bcd314 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bcd314 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00bcd314 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00bcd34c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd34c ["INT_ADD", "register:40f0:8", ["const:bcd34c:8", "const:4:8"]]
- 00bcd34c ["CALLIND", null, ["register:0:8"]]
+ 00bcd350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd350 ["INT_ADD", "register:40f0:8", ["const:bcd350:8", "const:4:8"]]
+ 00bcd350 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d7e2d08a097bc2a280aa13acbd2cceb3"></a>

### [`00bcd3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd3b0.md) → [`00bcd44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd44c.md) _ZN8firebase4auth17UpdateCurrentUserEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc30.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd47c",
      "incomplete_value": true,
      "site": "00bcd48c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:1f8:8"
              ]
            ]
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
      "definition_site": "00bcd484",
      "incomplete_value": true,
      "site": "00bcd48c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:840:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd3e8",
      "incomplete_value": true,
      "site": "00bcd3f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:740:8"
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
      "definition_site": "00bcd4c4",
      "incomplete_value": false,
      "site": "00bcd4cc",
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
            "const:c35:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd428",
      "incomplete_value": false,
      "site": "00bcd430",
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
            "const:c89:8"
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
      "unmatched:00bcd3b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcd3b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcd3b8",
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
      "00bcd44c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bcd450",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bcd454",
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
- 00bcd3f0 ["INT_ADD", "register:40f0:8", ["const:bcd3f0:8", "const:4:8"]]
- 00bcd3f0 ["CALL", null, ["callee:00497874:8"]]
+ 00bcd48c ["INT_ADD", "register:40f0:8", ["const:bcd48c:8", "const:4:8"]]
+ 00bcd48c ["CALL", null, ["callee:00497874:8"]]
- 00bcd430 ["INT_ADD", "register:40f0:8", ["const:bcd430:8", "const:4:8"]]
- 00bcd430 ["CALL", null, ["callee:00c5b200:8"]]
+ 00bcd4cc ["INT_ADD", "register:40f0:8", ["const:bcd4cc:8", "const:4:8"]]
+ 00bcd4cc ["CALL", null, ["callee:00c5b200:8"]]
- 00bcd3b0 ["COPY", "tmp:0:8", ["register:40b8:8"]]
- 00bcd3b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00bcd3b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-25e1d401274ad172e57b0447e1c3d205"></a>

### [`00bcd46c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd46c.md) → [`00bcd508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd508.md) _ZN8firebase4auth14SetEmulatorJniEPNS0_8AuthDataEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd548",
      "incomplete_value": true,
      "site": "00bcd55c",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00bcd4ac",
      "incomplete_value": true,
      "site": "00bcd4c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:788:8"
              ]
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
      "00bcd548",
      "READ",
      [
        "storage",
        "01126788",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd548",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd4c0 ["INT_ADD", "register:40f0:8", ["const:bcd4c0:8", "const:4:8"]]
- 00bcd4c0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcd55c ["INT_ADD", "register:40f0:8", ["const:bcd55c:8", "const:4:8"]]
+ 00bcd55c ["CALL", null, ["callee:00574d2c:8"]]
- 00bcd48c ["INT_ADD", "register:40f0:8", ["const:bcd48c:8", "const:4:8"]]
- 00bcd48c ["CALL", null, ["callee:00c5b150:8"]]
+ 00bcd528 ["INT_ADD", "register:40f0:8", ["const:bcd528:8", "const:4:8"]]
+ 00bcd528 ["CALL", null, ["callee:00c5b150:8"]]
- 00bcd4a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd4a0 ["INT_ADD", "register:40f0:8", ["const:bcd4a0:8", "const:4:8"]]
- 00bcd4a0 ["CALLIND", null, ["register:0:8"]]
+ 00bcd53c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd53c ["INT_ADD", "register:40f0:8", ["const:bcd53c:8", "const:4:8"]]
+ 00bcd53c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4920aa021a411e079161a02653e7c2ad"></a>

### [`00bcd4ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd4ec.md) → [`00bcd588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd588.md) _ZN8firebase4auth13CheckEmulatorEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc20.md) · 呼出先 9件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58060.md) [`00c598a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c598a0.md)
- 新版 呼出元 1件 [`00c5dcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcf0.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58130.md) [`00c59970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59970.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.39% / 新版 74.39%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd600",
      "incomplete_value": false,
      "site": "00bcd604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b1000:8"
          ],
          [
            "leaf",
            "const:6c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd564",
      "incomplete_value": true,
      "site": "00bcd568",
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
            "const:71e:8"
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
      "definition_site": "00bcd64c",
      "incomplete_value": false,
      "site": "00bcd658",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bc000:8"
          ],
          [
            "leaf",
            "const:ca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd5b0",
      "incomplete_value": false,
      "site": "00bcd5bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bc000:8"
          ],
          [
            "leaf",
            "const:11e:8"
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
      "definition_site": "00bcd664",
      "incomplete_value": true,
      "site": "00bcd678",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00bcd5c8",
      "incomplete_value": true,
      "site": "00bcd5dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:788:8"
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
      "unmatched:00bcd510",
      "PARAM",
      [
        "storage",
        "002baf13",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcd514",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcd518",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59970"
      ]
    ]
  ],
  "added": [
    [
      "00bcd5ac",
      "PARAM",
      [
        "storage",
        "002baebf",
        null,
        "string"
      ]
    ],
    [
      "00bcd5b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00bcd5b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59970"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd568 ["INT_ADD", "register:40f0:8", ["const:bcd568:8", "const:4:8"]]
- 00bcd568 ["CALL", null, ["callee:00c59970:8"]]
+ 00bcd604 ["INT_ADD", "register:40f0:8", ["const:bcd604:8", "const:4:8"]]
+ 00bcd604 ["CALL", null, ["callee:00c59970:8"]]
- 00bcd56c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00bcd56c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00bcd608 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00bcd608 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00bcd5bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd5bc ["INT_ADD", "register:40f0:8", ["const:bcd5bc:8", "const:4:8"]]
- 00bcd5bc ["CALLIND", null, ["register:0:8"]]
+ 00bcd658 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd658 ["INT_ADD", "register:40f0:8", ["const:bcd658:8", "const:4:8"]]
+ 00bcd658 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-826d6d02a3fd9a36ebb6296b32c5cab6"></a>

### [`00bcd654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd654.md) → [`00bcd6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd6f0.md) _ZN8firebase4auth18CreatePlatformAuthEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9d0.md) · 呼出先 21件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aea0.md)
- 新版 呼出元 1件 [`00c5daa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5daa0.md) · 呼出先 21件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd734",
      "incomplete_value": true,
      "site": "00bcd734",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd698",
      "incomplete_value": true,
      "site": "00bcd698",
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
            "const:840:8"
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
      "definition_site": "00bcd744",
      "incomplete_value": true,
      "site": "00bcd758",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:828:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd6a8",
      "incomplete_value": true,
      "site": "00bcd6bc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:728:8"
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
      "definition_site": "00bcd748",
      "incomplete_value": true,
      "site": "00bcd758",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:838:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd6ac",
      "incomplete_value": true,
      "site": "00bcd6bc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
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
      "00bcd720",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined4"
      ]
    ],
    [
      "00bcd734",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined4"
      ]
    ],
    [
      "00bcd744",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd720",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined4"
      ]
    ],
    [
      "00bcd734",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined4"
      ]
    ],
    [
      "00bcd744",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd698 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:840:8"]]
- 00bcd698 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00bcd734 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:940:8"]]
+ 00bcd734 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00bcd6bc ["INT_ADD", "register:40f0:8", ["const:bcd6bc:8", "const:4:8"]]
- 00bcd6bc ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bcd758 ["INT_ADD", "register:40f0:8", ["const:bcd758:8", "const:4:8"]]
+ 00bcd758 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bcd6d8 ["INT_ADD", "register:40f0:8", ["const:bcd6d8:8", "const:4:8"]]
- 00bcd6d8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcd774 ["INT_ADD", "register:40f0:8", ["const:bcd774:8", "const:4:8"]]
+ 00bcd774 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-0819b0b6e3eb7a48c50925c8b86a4004"></a>

### [`00bcd890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd890.md) → [`00bcd92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd92c.md) _ZN8firebase4auth4Auth16InitPlatformAuthEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5da40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da40.md) · 呼出先 6件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5dc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc20.md) [`00c5dc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc30.md)
- 新版 呼出元 1件 [`00c5db10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db10.md) · 呼出先 6件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcf0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)

変更の種類 call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 86.00% / 新版 86.00%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd950",
      "incomplete_value": true,
      "site": "00bcd960",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd8b4",
      "incomplete_value": true,
      "site": "00bcd8c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7f0:8"
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
      "definition_site": "00bcd954",
      "incomplete_value": true,
      "site": "00bcd960",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:900:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd8b8",
      "incomplete_value": true,
      "site": "00bcd8c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:800:8"
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
      "definition_site": "00bcd970",
      "incomplete_value": true,
      "site": "00bcd980",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:860:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd8d4",
      "incomplete_value": true,
      "site": "00bcd8e4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:760:8"
              ]
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
      "00bcd950",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd954",
      "READ",
      [
        "storage",
        "01126800",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd970",
      "READ",
      [
        "storage",
        "01126760",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd950",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd954",
      "READ",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd970",
      "READ",
      [
        "storage",
        "01126860",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd8c4 ["INT_ADD", "register:40f0:8", ["const:bcd8c4:8", "const:4:8"]]
- 00bcd8c4 ["CALL", null, ["callee:00589734:8"]]
+ 00bcd960 ["INT_ADD", "register:40f0:8", ["const:bcd960:8", "const:4:8"]]
+ 00bcd960 ["CALL", null, ["callee:00589734:8"]]
- 00bcd8e4 ["INT_ADD", "register:40f0:8", ["const:bcd8e4:8", "const:4:8"]]
- 00bcd8e4 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcd980 ["INT_ADD", "register:40f0:8", ["const:bcd980:8", "const:4:8"]]
+ 00bcd980 ["CALL", null, ["callee:00574d2c:8"]]
- 00bcd8f4 ["INT_ADD", "register:40f0:8", ["const:bcd8f4:8", "const:4:8"]]
- 00bcd8f4 ["CALL", null, ["callee:00c5dd50:8"]]
+ 00bcd990 ["INT_ADD", "register:40f0:8", ["const:bcd990:8", "const:4:8"]]
+ 00bcd990 ["CALL", null, ["callee:00c5dd50:8"]]
~~~


<a id="compare-79d30a5ac2843b744ea66a522fdcfb8f"></a>

### [`00bcd958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcd958.md) → [`00bcd9f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd9f4.md) _ZN8firebase4auth4Auth19DestroyPlatformAuthEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5da50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da50.md) · 呼出先 10件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af00.md) [`00c5afd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afd0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5db20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db20.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcdafc",
      "incomplete_value": true,
      "site": "00bcdafc",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcda60",
      "incomplete_value": true,
      "site": "00bcda60",
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
            "const:840:8"
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
      "definition_site": "00bcda40",
      "incomplete_value": true,
      "site": "00bcda4c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd9a4",
      "incomplete_value": true,
      "site": "00bcd9b0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
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
      "definition_site": "00bcda5c",
      "incomplete_value": true,
      "site": "00bcda6c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:868:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd9c0",
      "incomplete_value": true,
      "site": "00bcd9d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:768:8"
              ]
            ]
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
      "unmatched:00bcd9a4",
      "READ",
      [
        "storage",
        "01126808",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcd9c0",
      "READ",
      [
        "storage",
        "01126768",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcd9dc",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcda40",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda5c",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda78",
      "READ",
      [
        "storage",
        "01126930",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd9b0 ["INT_ADD", "register:40f0:8", ["const:bcd9b0:8", "const:4:8"]]
- 00bcd9b0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcda4c ["INT_ADD", "register:40f0:8", ["const:bcda4c:8", "const:4:8"]]
+ 00bcda4c ["CALL", null, ["callee:00574d2c:8"]]
- 00bcd9d0 ["INT_ADD", "register:40f0:8", ["const:bcd9d0:8", "const:4:8"]]
- 00bcd9d0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcda6c ["INT_ADD", "register:40f0:8", ["const:bcda6c:8", "const:4:8"]]
+ 00bcda6c ["CALL", null, ["callee:00574d2c:8"]]
- 00bcd9e8 ["INT_ADD", "register:40f0:8", ["const:bcd9e8:8", "const:4:8"]]
- 00bcd9e8 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcda84 ["INT_ADD", "register:40f0:8", ["const:bcda84:8", "const:4:8"]]
+ 00bcda84 ["CALL", null, ["callee:00574d2c:8"]]
~~~


<a id="compare-83bac921495bdd1ddc9d4115688ece24"></a>

### [`00bcdab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdab4.md) → [`00bcdb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdb50.md) _ZN8firebase4auth12LogHeartbeatEPNS0_4AuthE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d990.md) · 呼出先 5件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5bef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bef0.md) [`00c5da80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da80.md)
- 新版 呼出元 1件 [`00c5da60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da60.md) · 呼出先 5件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5bfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfc0.md) [`00c5db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdb88",
      "incomplete_value": true,
      "site": "00bcdb9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:828:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdaec",
      "incomplete_value": true,
      "site": "00bcdb00",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:728:8"
              ]
            ]
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
      "definition_site": "00bcdb8c",
      "incomplete_value": true,
      "site": "00bcdb9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:838:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdaf0",
      "incomplete_value": true,
      "site": "00bcdb00",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
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
      "unmatched:00bcdaec",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcdaf0",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcdb38",
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
      "00bcdb88",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdb8c",
      "READ",
      [
        "storage",
        "01126838",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdbd4",
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
- 00bcdb00 ["INT_ADD", "register:40f0:8", ["const:bcdb00:8", "const:4:8"]]
- 00bcdb00 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bcdb9c ["INT_ADD", "register:40f0:8", ["const:bcdb9c:8", "const:4:8"]]
+ 00bcdb9c ["CALL", null, ["callee:00c5ac70:8"]]
- 00bcdad0 ["INT_ADD", "register:40f0:8", ["const:bcdad0:8", "const:4:8"]]
- 00bcdad0 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bcdb6c ["INT_ADD", "register:40f0:8", ["const:bcdb6c:8", "const:4:8"]]
+ 00bcdb6c ["CALL", null, ["callee:00c5b150:8"]]
- 00bcdadc ["INT_ADD", "register:40f0:8", ["const:bcdadc:8", "const:4:8"]]
- 00bcdadc ["CALL", null, ["callee:00c5db50:8"]]
+ 00bcdb78 ["INT_ADD", "register:40f0:8", ["const:bcdb78:8", "const:4:8"]]
+ 00bcdb78 ["CALL", null, ["callee:00c5db50:8"]]
~~~


<a id="compare-0aac71bafda61eade9dcac944fbea93f"></a>

### [`00bcdb44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdb44.md) → [`00bcdbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdbe0.md) _ZN8firebase4auth45JniAuthStateListener_nativeOnAuthStateChangedEP7_JNIEnvP8_jobjectl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5da10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da10.md) [`00c5dc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5dae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dae0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdbec",
      "incomplete_value": true,
      "site": "00bcdbf4",
      "value": [
        "live",
        "register:4010:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00bcdb58 ["INT_ADD", "register:40f0:8", ["const:bcdb58:8", "const:4:8"]]
- 00bcdb58 ["CALL", null, ["callee:00c5dd00:8"]]
+ 00bcdbf4 ["INT_ADD", "register:40f0:8", ["const:bcdbf4:8", "const:4:8"]]
+ 00bcdbf4 ["CALL", null, ["callee:00c5dd00:8"]]
~~~


<a id="compare-7dd154849700a2fd29a42737b82c7ec0"></a>

### [`00bcdb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdb6c.md) → [`00bcdc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc08.md) _ZN8firebase4auth41JniIdTokenListener_nativeOnIdTokenChangedEP7_JNIEnvP8_jobjectl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5d9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9f0.md) [`00c5dc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc30.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5dac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dac0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcdb8c",
      "incomplete_value": true,
      "site": "00bcdb90",
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


~~~diff
- 00bcdb90 ["INT_ADD", "register:40f0:8", ["const:bcdb90:8", "const:4:8"]]
- 00bcdb90 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bcdc2c ["INT_ADD", "register:40f0:8", ["const:bcdc2c:8", "const:4:8"]]
+ 00bcdc2c ["CALL", null, ["callee:00c5aae0:8"]]
- 00bcdb84 ["INT_ADD", "register:40f0:8", ["const:bcdb84:8", "const:4:8"]]
- 00bcdb84 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcdc20 ["INT_ADD", "register:40f0:8", ["const:bcdc20:8", "const:4:8"]]
+ 00bcdc20 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcdb98 ["INT_ADD", "register:40f0:8", ["const:bcdb98:8", "const:4:8"]]
- 00bcdb98 ["CALL", null, ["callee:00c5dd00:8"]]
+ 00bcdc34 ["INT_ADD", "register:40f0:8", ["const:bcdc34:8", "const:4:8"]]
+ 00bcdc34 ["CALL", null, ["callee:00c5dd00:8"]]
~~~


<a id="compare-e0a5364cd0edd36a5d68f193d46539ba"></a>

### [`00bcdbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdbb0.md) → [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) _ZN8firebase4auth4Auth22FetchProvidersForEmailEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcdeb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdeb4.md) [`00bcf8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf8a0.md) [`00bcfa2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfa2c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcdf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdf50.md) [`00bcf93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf93c.md) [`00bcfac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfac8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.82% / 新版 91.82%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcdd6c",
      "incomplete_value": false,
      "site": "00bcdd6c",
      "value": [
        "leaf",
        "const:bcdf50:8"
      ]
    },
    "old": {
      "definition_site": "00bcdcd0",
      "incomplete_value": false,
      "site": "00bcdcd0",
      "value": [
        "leaf",
        "const:bcdeb4:8"
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdc9c",
      "incomplete_value": true,
      "site": "00bcdcb0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ac0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdc00",
      "incomplete_value": true,
      "site": "00bcdc14",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9f0:8"
              ]
            ]
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
      "definition_site": "00bcdcf0",
      "incomplete_value": true,
      "site": "00bcdd04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:890:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdc54",
      "incomplete_value": true,
      "site": "00bcdc68",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:790:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "unmatched:00bcdbb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcdbb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcdbbc",
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
      "00bcdc50",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bcdc54",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bcdc58",
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
- 00bcdc14 ["INT_ADD", "register:40f0:8", ["const:bcdc14:8", "const:4:8"]]
- 00bcdc14 ["CALL", null, ["callee:00c5af10:8"]]
+ 00bcdcb0 ["INT_ADD", "register:40f0:8", ["const:bcdcb0:8", "const:4:8"]]
+ 00bcdcb0 ["CALL", null, ["callee:00c5af10:8"]]
- 00bcdc34 ["INT_ADD", "register:40f0:8", ["const:bcdc34:8", "const:4:8"]]
- 00bcdc34 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bcdcd0 ["INT_ADD", "register:40f0:8", ["const:bcdcd0:8", "const:4:8"]]
+ 00bcdcd0 ["CALL", null, ["callee:00c5b150:8"]]
- 00bcdc68 ["INT_ADD", "register:40f0:8", ["const:bcdc68:8", "const:4:8"]]
- 00bcdc68 ["CALL", null, ["callee:00497874:8"]]
+ 00bcdd04 ["INT_ADD", "register:40f0:8", ["const:bcdd04:8", "const:4:8"]]
+ 00bcdd04 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-7d41db8a9fb1a24b9cf08e1f91efceb4"></a>

### [`00bcddb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcddb0.md) → [`00bcde4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcde4c.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorINS0_4Auth20FetchProvidersResultEEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFut

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dce0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbd0.md)
- 新版 呼出元 1件 [`00c5ddb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddb0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dca0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.54% / 新版 86.54%

アドレスに依存する影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcde7c",
      "incomplete_value": true,
      "site": "00bcde80",
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
    "old": {
      "definition_site": "00bcdde0",
      "incomplete_value": true,
      "site": "00bcdde4",
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
            "const:18:8"
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
      "definition_site": "00bcde8c",
      "incomplete_value": true,
      "site": "00bcde94",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcde90",
      "incomplete_value": true,
      "site": "00bcde94",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00bcddd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcddd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcdddc",
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
      "00bcde70",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00bcde74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bcde78",
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
- 00bcdde4 ["INT_ADD", "register:40f0:8", ["const:bcdde4:8", "const:4:8"]]
- 00bcdde4 ["CALL", null, ["callee:00c5dde0:8"]]
+ 00bcde80 ["INT_ADD", "register:40f0:8", ["const:bcde80:8", "const:4:8"]]
+ 00bcde80 ["CALL", null, ["callee:00c5dde0:8"]]
- 00bcddf8 ["INT_ADD", "register:40f0:8", ["const:bcddf8:8", "const:4:8"]]
- 00bcddf8 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcde94 ["INT_ADD", "register:40f0:8", ["const:bcde94:8", "const:4:8"]]
+ 00bcde94 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcddd4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00bcddd4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffd8:8"]]
- 00bcddd4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-f02944682cf35d84488e91fd9869818c"></a>

### [`00bcdeb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdeb4.md) → [`00bcdf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdf50.md) FUN_00bcdf50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00bcdbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcd/00bcdbb0.md) · 呼出先 10件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdfa8",
      "incomplete_value": false,
      "site": "00bcdfac",
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
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdf0c",
      "incomplete_value": false,
      "site": "00bcdf10",
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
            "const:d25:8"
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
      "definition_site": "00bcdfb8",
      "incomplete_value": true,
      "site": "00bcdfc4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdf1c",
      "incomplete_value": true,
      "site": "00bcdf28",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7e0:8"
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
      "definition_site": "00bcdf48",
      "incomplete_value": true,
      "site": "00bcdf54",
      "value": [
        "live",
        "register:4000:8"
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
      "00bcdfa8",
      "PARAM",
      [
        "storage",
        "002a0d25",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcdf1c",
      "READ",
      [
        "storage",
        "011267e0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcdf78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bce03c"
      ]
    ]
  ],
  "added": [
    [
      "00bcdfa8",
      "PARAM",
      [
        "storage",
        "002a0cd8",
        null,
        "string"
      ]
    ],
    [
      "00bcdfb8",
      "READ",
      [
        "storage",
        "011268e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce014",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bce03c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcdf10 ["INT_ADD", "register:40f0:8", ["const:bcdf10:8", "const:4:8"]]
- 00bcdf10 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcdfac ["INT_ADD", "register:40f0:8", ["const:bcdfac:8", "const:4:8"]]
+ 00bcdfac ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcdf28 ["INT_ADD", "register:40f0:8", ["const:bcdf28:8", "const:4:8"]]
- 00bcdf28 ["CALL", null, ["callee:00497874:8"]]
+ 00bcdfc4 ["INT_ADD", "register:40f0:8", ["const:bcdfc4:8", "const:4:8"]]
+ 00bcdfc4 ["CALL", null, ["callee:00497874:8"]]
- 00bcdf54 ["INT_ADD", "register:40f0:8", ["const:bcdf54:8", "const:4:8"]]
- 00bcdf54 ["CALL", null, ["callee:005762f8:8"]]
+ 00bcdff0 ["INT_ADD", "register:40f0:8", ["const:bcdff0:8", "const:4:8"]]
+ 00bcdff0 ["CALL", null, ["callee:005762f8:8"]]
~~~


<a id="compare-634b149a1eaca7434f9847b37cd7dc3a"></a>

### [`00bce0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce0c8.md) → [`00bce164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce164.md) _ZN8firebase4auth4Auth21SignInWithCustomTokenEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce1d8",
      "incomplete_value": true,
      "site": "00bce1ec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:898:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bce13c",
      "incomplete_value": true,
      "site": "00bce150",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:798:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bce184",
      "incomplete_value": true,
      "site": "00bce188",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce274",
      "incomplete_value": true,
      "site": "00bce284",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bce1d8",
      "incomplete_value": true,
      "site": "00bce1e8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a00:8"
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
      "00bce1d8",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bce1b4",
      "READ",
      [
        "storage",
        "00c9ba20",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bce1b8",
      "DATA",
      [
        "storage",
        "00bd482c",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bce1d8",
      "READ",
      [
        "storage",
        "01126898",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce250",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bce254",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bce150 ["INT_ADD", "register:40f0:8", ["const:bce150:8", "const:4:8"]]
- 00bce150 ["CALL", null, ["callee:00497874:8"]]
+ 00bce1ec ["INT_ADD", "register:40f0:8", ["const:bce1ec:8", "const:4:8"]]
+ 00bce1ec ["CALL", null, ["callee:00497874:8"]]
- 00bce178 ["INT_ADD", "register:40f0:8", ["const:bce178:8", "const:4:8"]]
- 00bce178 ["CALL", null, ["callee:00c5dda0:8"]]
+ 00bce214 ["INT_ADD", "register:40f0:8", ["const:bce214:8", "const:4:8"]]
+ 00bce214 ["CALL", null, ["callee:00c5dda0:8"]]
- 00bce188 ["INT_ADD", "register:40f0:8", ["const:bce188:8", "const:4:8"]]
- 00bce188 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bce224 ["INT_ADD", "register:40f0:8", ["const:bce224:8", "const:4:8"]]
+ 00bce224 ["CALL", null, ["callee:00c5aed0:8"]]
~~~


<a id="compare-8d332d391b7592d25e43b87806bd2f13"></a>

### [`00bce890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce890.md) → [`00bce92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce92c.md) _ZN8firebase4auth4Auth35SignInAndRetrieveDataWithCredentialERKNS0_10CredentialE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9e0.md) · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5aab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aab0.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcea38",
      "incomplete_value": true,
      "site": "00bcea38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bce99c",
      "incomplete_value": true,
      "site": "00bce99c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a20:8"
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
      "definition_site": "00bce98c",
      "incomplete_value": true,
      "site": "00bce994",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce990",
      "incomplete_value": true,
      "site": "00bce994",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bce894",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bce898",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bce9d4",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce930",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bce934",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bce9d4",
      "READ",
      [
        "storage",
        "011268a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bce8f8 ["INT_ADD", "register:40f0:8", ["const:bce8f8:8", "const:4:8"]]
- 00bce8f8 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bce994 ["INT_ADD", "register:40f0:8", ["const:bce994:8", "const:4:8"]]
+ 00bce994 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bce920 ["INT_ADD", "register:40f0:8", ["const:bce920:8", "const:4:8"]]
- 00bce920 ["CALL", null, ["callee:00c5dc90:8"]]
+ 00bce9bc ["INT_ADD", "register:40f0:8", ["const:bce9bc:8", "const:4:8"]]
+ 00bce9bc ["CALL", null, ["callee:00c5dc90:8"]]
- 00bce948 ["INT_ADD", "register:40f0:8", ["const:bce948:8", "const:4:8"]]
- 00bce948 ["CALL", null, ["callee:00497874:8"]]
+ 00bce9e4 ["INT_ADD", "register:40f0:8", ["const:bce9e4:8", "const:4:8"]]
+ 00bce9e4 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-a50187fd24ed6ce83e55c78ccd5ec271"></a>

### [`00bcea7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcea7c.md) → [`00bceb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb18.md) _ZN8firebase4auth4Auth18SignInWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ab90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab90.md) · 呼出先 3件 [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5ac60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac60.md) · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bceb54",
      "incomplete_value": false,
      "site": "00bceb58",
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
            "const:c02:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bceab8",
      "incomplete_value": false,
      "site": "00bceabc",
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
            "const:bc2:8"
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
      "unmatched:00bceab8",
      "PARAM",
      [
        "storage",
        "002b5bc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bceb54",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bceabc ["INT_ADD", "register:40f0:8", ["const:bceabc:8", "const:4:8"]]
- 00bceabc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bceb58 ["INT_ADD", "register:40f0:8", ["const:bceb58:8", "const:4:8"]]
+ 00bceb58 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcea8c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bcea8c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bceb28 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bceb28 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bceab8 ["COPY", "tmp:0:8", ["const:bc2:8"]]
- 00bceab8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bceab8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bceab8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ec18b4dbaa3394f4e155e3e17147b17c"></a>

### [`00bceb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bceb00.md) → [`00bceb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb9c.md) _ZN8firebase4auth4Auth17SignInAnonymouslyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `unresolved_branch_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcec58",
      "incomplete_value": true,
      "site": "00bcec58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcebbc",
      "incomplete_value": true,
      "site": "00bcebbc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a20:8"
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
      "definition_site": "00bcebf8",
      "incomplete_value": true,
      "site": "00bcec04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bceb5c",
      "incomplete_value": true,
      "site": "00bceb68",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7a8:8"
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
      "definition_site": "00bcec78",
      "incomplete_value": true,
      "site": "00bcec88",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcebdc",
      "incomplete_value": true,
      "site": "00bcebec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a00:8"
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
      "00bcebf8",
      "READ",
      [
        "storage",
        "011267a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcec54",
      "READ",
      [
        "storage",
        "00c9ba20",
        null,
        "pointer"
      ]
    ],
    [
      "00bcec58",
      "DATA",
      [
        "storage",
        "00bd482c",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcebf8",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcec54",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcec58",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bceb50 ["INT_ADD", "register:40f0:8", ["const:bceb50:8", "const:4:8"]]
- 00bceb50 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bcebec ["INT_ADD", "register:40f0:8", ["const:bcebec:8", "const:4:8"]]
+ 00bcebec ["CALL", null, ["callee:00c5b150:8"]]
- 00bceb68 ["INT_ADD", "register:40f0:8", ["const:bceb68:8", "const:4:8"]]
- 00bceb68 ["CALL", null, ["callee:00497874:8"]]
+ 00bcec04 ["INT_ADD", "register:40f0:8", ["const:bcec04:8", "const:4:8"]]
+ 00bcec04 ["CALL", null, ["callee:00497874:8"]]
- 00bcebec ["INT_ADD", "register:40f0:8", ["const:bcebec:8", "const:4:8"]]
- 00bcebec ["CALL", null, ["callee:00c5b010:8"]]
+ 00bcec88 ["INT_ADD", "register:40f0:8", ["const:bcec88:8", "const:4:8"]]
+ 00bcec88 ["CALL", null, ["callee:00c5b010:8"]]
~~~


<a id="compare-d0b673e7401fdc50dafd8639a43a1126"></a>

### [`00bcec8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcec8c.md) → [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) _ZN8firebase4auth4Auth26SignInWithEmailAndPasswordEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcee6c",
      "incomplete_value": true,
      "site": "00bcee6c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcedd0",
      "incomplete_value": true,
      "site": "00bcedd0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a20:8"
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
      "definition_site": "00bcedd8",
      "incomplete_value": true,
      "site": "00bcedf0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bced3c",
      "incomplete_value": true,
      "site": "00bced54",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7b0:8"
              ]
            ]
          ]
        ]
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
      "definition_site": "00bcedb4",
      "incomplete_value": false,
      "site": "00bcedb8",
      "value": [
        "leaf",
        "const:20:8"
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
      "00bcedd8",
      "READ",
      [
        "storage",
        "011267b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcee68",
      "READ",
      [
        "storage",
        "00c9ba20",
        null,
        "pointer"
      ]
    ],
    [
      "00bcee6c",
      "DATA",
      [
        "storage",
        "00bd482c",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcedd8",
      "READ",
      [
        "storage",
        "011268b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcee68",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcee6c",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bced54 ["INT_ADD", "register:40f0:8", ["const:bced54:8", "const:4:8"]]
- 00bced54 ["CALL", null, ["callee:00497874:8"]]
+ 00bcedf0 ["INT_ADD", "register:40f0:8", ["const:bcedf0:8", "const:4:8"]]
+ 00bcedf0 ["CALL", null, ["callee:00497874:8"]]
- 00bcedb8 ["INT_ADD", "register:40f0:8", ["const:bcedb8:8", "const:4:8"]]
- 00bcedb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bcee54 ["INT_ADD", "register:40f0:8", ["const:bcee54:8", "const:4:8"]]
+ 00bcee54 ["CALL", null, ["callee:00c57f60:8"]]
- 00bcedf0 ["INT_ADD", "register:40f0:8", ["const:bcedf0:8", "const:4:8"]]
- 00bcedf0 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcee8c ["INT_ADD", "register:40f0:8", ["const:bcee8c:8", "const:4:8"]]
+ 00bcee8c ["CALL", null, ["callee:00c5aed0:8"]]
~~~


<a id="compare-a92c9291eeb2702969fa5d8d89b1a2d9"></a>

### [`00bcef18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bcef18.md) → [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) _ZN8firebase4auth4Auth30CreateUserWithEmailAndPasswordEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcf0f8",
      "incomplete_value": true,
      "site": "00bcf0f8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf05c",
      "incomplete_value": true,
      "site": "00bcf05c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a20:8"
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
      "definition_site": "00bcf064",
      "incomplete_value": true,
      "site": "00bcf07c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcefc8",
      "incomplete_value": true,
      "site": "00bcefe0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcf138",
      "incomplete_value": false,
      "site": "00bcf14c",
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
            "const:221:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf09c",
      "incomplete_value": false,
      "site": "00bcf0b0",
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
            "const:27d:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcf064",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcf0f4",
      "READ",
      [
        "storage",
        "00c9ba20",
        null,
        "pointer"
      ]
    ],
    [
      "00bcf0f8",
      "DATA",
      [
        "storage",
        "00bd482c",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcf064",
      "READ",
      [
        "storage",
        "011268b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcf0f4",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcf0f8",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcefe0 ["INT_ADD", "register:40f0:8", ["const:bcefe0:8", "const:4:8"]]
- 00bcefe0 ["CALL", null, ["callee:00497874:8"]]
+ 00bcf07c ["INT_ADD", "register:40f0:8", ["const:bcf07c:8", "const:4:8"]]
+ 00bcf07c ["CALL", null, ["callee:00497874:8"]]
- 00bcf07c ["INT_ADD", "register:40f0:8", ["const:bcf07c:8", "const:4:8"]]
- 00bcf07c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcf118 ["INT_ADD", "register:40f0:8", ["const:bcf118:8", "const:4:8"]]
+ 00bcf118 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcf0b0 ["INT_ADD", "register:40f0:8", ["const:bcf0b0:8", "const:4:8"]]
- 00bcf0b0 ["CALL", null, ["callee:00c5dc90:8"]]
+ 00bcf14c ["INT_ADD", "register:40f0:8", ["const:bcf14c:8", "const:4:8"]]
+ 00bcf14c ["CALL", null, ["callee:00c5dc90:8"]]
~~~


<a id="compare-5cf31f5128fe9d49b93639d7c6bd45c3"></a>

### [`00bcf1a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf1a4.md) → [`00bcf240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf240.md) _ZN8firebase4auth4Auth12current_userEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aa30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa30.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa40.md)
- 新版 呼出元 1件 [`00c5ab00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab00.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab10.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 98.18% / 新版 98.18%

優先判定に残った影響 `store_condition` 11件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcf29c",
      "incomplete_value": true,
      "site": "00bcf2bc",
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
      "definition_site": "00bcf200",
      "incomplete_value": true,
      "site": "00bcf220",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcf2dc",
      "incomplete_value": true,
      "site": "00bcf2fc",
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
      "definition_site": "00bcf240",
      "incomplete_value": true,
      "site": "00bcf260",
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
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00bcf1bc"
      ],
      [
        "CONDITIONAL_JUMP",
        "00bcf258"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bcf258",
      "incomplete_value": true,
      "site": "00bcf294",
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
                "register:4000:8"
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
      "definition_site": "00bcf1bc",
      "incomplete_value": true,
      "site": "00bcf1f8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4048:8"
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
      "unmatched:00bcf1bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcf288"
      ]
    ],
    [
      "00bcf28c",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcf2bc",
      "DATA",
      [
        "storage",
        "00c928a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bcf258",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcf288"
      ]
    ],
    [
      "00bcf28c",
      "READ",
      [
        "storage",
        "00c9ba90",
        null,
        "pointer"
      ]
    ],
    [
      "00bcf2bc",
      "DATA",
      [
        "storage",
        "00c92978",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf1bc ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00bcf1bc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bcf1cc ["INT_ADD", "register:40f0:8", ["const:bcf1cc:8", "const:4:8"]]
- 00bcf1cc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcf268 ["INT_ADD", "register:40f0:8", ["const:bcf268:8", "const:4:8"]]
+ 00bcf268 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcf1d8 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00bcf1d8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bcf274 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00bcf274 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-2f39272c445f846a3ba921f11586315e"></a>

### [`00bcf418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf418.md) → [`00bcf4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf4b4.md) _ZN8firebase4auth4Auth7SignOutEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aa20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa20.md) · 呼出先 6件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aaf0.md) · 呼出先 6件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcf4e4",
      "incomplete_value": true,
      "site": "00bcf4e8",
      "value": [
        "LOAD",
        "8",
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
                "const:1f8:8"
              ]
            ]
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
      "definition_site": "00bcf4dc",
      "incomplete_value": true,
      "site": "00bcf4e8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:880:8"
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
      "unmatched:00bcf418",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcf41c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcf420",
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
      "00bcf4b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bcf4b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcf4bc",
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
- 00bcf44c ["INT_ADD", "register:40f0:8", ["const:bcf44c:8", "const:4:8"]]
- 00bcf44c ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcf4e8 ["INT_ADD", "register:40f0:8", ["const:bcf4e8:8", "const:4:8"]]
+ 00bcf4e8 ["CALL", null, ["callee:00574d2c:8"]]
- 00bcf418 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bcf418 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bcf418 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcf41c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bcf41c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bcf41c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcf41c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-15fb258644491028e5ffa2839127b4c4"></a>

### [`00bcf4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf4b0.md) → [`00bcf54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf54c.md) _ZN8firebase4auth4Auth22SendPasswordResetEmailEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.65% / 新版 80.65%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcf598",
      "incomplete_value": true,
      "site": "00bcf59c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00bcf4fc",
      "incomplete_value": true,
      "site": "00bcf500",
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
            "const:10:8"
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
      "definition_site": "00bcf5f4",
      "incomplete_value": true,
      "site": "00bcf600",
      "value": [
        "LOAD",
        "8",
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
                "const:1f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf558",
      "incomplete_value": true,
      "site": "00bcf564",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:1f8:8"
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
      "definition_site": "00bcf5ec",
      "incomplete_value": true,
      "site": "00bcf600",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8c0:8"
              ]
            ]
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
      "unmatched:00bcf4e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcf530",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b150"
      ]
    ],
    [
      "00bcf5ec",
      "READ",
      [
        "storage",
        "011267c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcf580",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00bcf5cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b150"
      ]
    ],
    [
      "00bcf5ec",
      "READ",
      [
        "storage",
        "011268c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf500 ["INT_ADD", "register:40f0:8", ["const:bcf500:8", "const:4:8"]]
- 00bcf500 ["CALL", null, ["callee:00c5af10:8"]]
+ 00bcf59c ["INT_ADD", "register:40f0:8", ["const:bcf59c:8", "const:4:8"]]
+ 00bcf59c ["CALL", null, ["callee:00c5af10:8"]]
- 00bcf50c ["INT_ADD", "register:40f0:8", ["const:bcf50c:8", "const:4:8"]]
- 00bcf50c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcf5a8 ["INT_ADD", "register:40f0:8", ["const:bcf5a8:8", "const:4:8"]]
+ 00bcf5a8 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcf564 ["INT_ADD", "register:40f0:8", ["const:bcf564:8", "const:4:8"]]
- 00bcf564 ["CALL", null, ["callee:00497874:8"]]
+ 00bcf600 ["INT_ADD", "register:40f0:8", ["const:bcf600:8", "const:4:8"]]
+ 00bcf600 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-7ebcba543615fb448df590bf8bffcf5b"></a>

### [`00bcf6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf6fc.md) → [`00bcf798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf798.md) _ZN8firebase4auth29CheckAndCompleteFutureOnErrorIvEEbP7_JNIEnvPNS_26ReferenceCountedFutureImplERKNS_16SafeFutureHandleIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd00.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ada0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5ddd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ddd0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcf73c",
      "incomplete_value": true,
      "site": "00bcf744",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcf740",
      "incomplete_value": true,
      "site": "00bcf744",
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
    "new": {
      "definition_site": "00bcf808",
      "incomplete_value": true,
      "site": "00bcf80c",
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
      "unmatched:00bcf79c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcf864"
      ]
    ]
  ],
  "added": [
    [
      "00bcf838",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcf864"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf744 ["INT_ADD", "register:40f0:8", ["const:bcf744:8", "const:4:8"]]
- 00bcf744 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bcf7e0 ["INT_ADD", "register:40f0:8", ["const:bcf7e0:8", "const:4:8"]]
+ 00bcf7e0 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcf770 ["INT_ADD", "register:40f0:8", ["const:bcf770:8", "const:4:8"]]
- 00bcf770 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bcf80c ["INT_ADD", "register:40f0:8", ["const:bcf80c:8", "const:4:8"]]
+ 00bcf80c ["CALL", null, ["callee:00c5ae70:8"]]
- 00bcf730 ["INT_ADD", "register:40f0:8", ["const:bcf730:8", "const:4:8"]]
- 00bcf730 ["CALL", null, ["callee:00c5dde0:8"]]
+ 00bcf7cc ["INT_ADD", "register:40f0:8", ["const:bcf7cc:8", "const:4:8"]]
+ 00bcf7cc ["CALL", null, ["callee:00c5dde0:8"]]
~~~


<a id="compare-b1937ddb6f429ce3cf3deba08c038b2a"></a>

### [`00bcf800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf800.md) → [`00bcf89c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf89c.md) _ZN8firebase4auth4Auth11UseEmulatorENSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcf8ec",
      "incomplete_value": true,
      "site": "00bcf900",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00bcf850",
      "incomplete_value": true,
      "site": "00bcf864",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:788:8"
              ]
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
      "00bcf8ec",
      "READ",
      [
        "storage",
        "01126788",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcf8ec",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf864 ["INT_ADD", "register:40f0:8", ["const:bcf864:8", "const:4:8"]]
- 00bcf864 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bcf900 ["INT_ADD", "register:40f0:8", ["const:bcf900:8", "const:4:8"]]
+ 00bcf900 ["CALL", null, ["callee:00574d2c:8"]]
- 00bcf830 ["INT_ADD", "register:40f0:8", ["const:bcf830:8", "const:4:8"]]
- 00bcf830 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bcf8cc ["INT_ADD", "register:40f0:8", ["const:bcf8cc:8", "const:4:8"]]
+ 00bcf8cc ["CALL", null, ["callee:00c5b150:8"]]
- 00bcf844 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcf844 ["INT_ADD", "register:40f0:8", ["const:bcf844:8", "const:4:8"]]
- 00bcf844 ["CALLIND", null, ["register:0:8"]]
+ 00bcf8e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcf8e0 ["INT_ADD", "register:40f0:8", ["const:bcf8e0:8", "const:4:8"]]
+ 00bcf8e0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9242c49ab05e5d5c6562d1701f992427"></a>

### [`00bcf924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf924.md) → [`00bcf9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf9c0.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth4Auth20FetchProvidersResultEEEvRKNS_12FutureHand

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbd0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dca0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcfa24",
      "incomplete_value": false,
      "site": "00bcfa28",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf988",
      "incomplete_value": false,
      "site": "00bcf98c",
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
            "const:e4:8"
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
      "00bcfa24",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcfa24",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf98c ["INT_ADD", "register:40f0:8", ["const:bcf98c:8", "const:4:8"]]
- 00bcf98c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcfa28 ["INT_ADD", "register:40f0:8", ["const:bcfa28:8", "const:4:8"]]
+ 00bcfa28 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcf950 ["INT_ADD", "register:40f0:8", ["const:bcf950:8", "const:4:8"]]
- 00bcf950 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcf9ec ["INT_ADD", "register:40f0:8", ["const:bcf9ec:8", "const:4:8"]]
+ 00bcf9ec ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcf95c ["INT_ADD", "register:40f0:8", ["const:bcf95c:8", "const:4:8"]]
- 00bcf95c ["CALL", null, ["callee:00c5af50:8"]]
+ 00bcf9f8 ["INT_ADD", "register:40f0:8", ["const:bcf9f8:8", "const:4:8"]]
+ 00bcf9f8 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-21b93dfb2b7b66a0b0ff4a1f0226c94e"></a>

### [`00bcfb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfb00.md) → [`00bcfb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfb9c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth4Auth20FetchProvidersResultEZNS2_14FutureCallbackIS4_EEvP7_JNIEnvP8_jobje

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dba0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc70.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcfc08",
      "incomplete_value": false,
      "site": "00bcfc0c",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcfb6c",
      "incomplete_value": false,
      "site": "00bcfb70",
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
            "const:e4:8"
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
      "00bcfc08",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcfc08",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcfb70 ["INT_ADD", "register:40f0:8", ["const:bcfb70:8", "const:4:8"]]
- 00bcfb70 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcfc0c ["INT_ADD", "register:40f0:8", ["const:bcfc0c:8", "const:4:8"]]
+ 00bcfc0c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcfb34 ["INT_ADD", "register:40f0:8", ["const:bcfb34:8", "const:4:8"]]
- 00bcfb34 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcfbd0 ["INT_ADD", "register:40f0:8", ["const:bcfbd0:8", "const:4:8"]]
+ 00bcfbd0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcfb40 ["INT_ADD", "register:40f0:8", ["const:bcfb40:8", "const:4:8"]]
- 00bcfb40 ["CALL", null, ["callee:00c5af50:8"]]
+ 00bcfbdc ["INT_ADD", "register:40f0:8", ["const:bcfbdc:8", "const:4:8"]]
+ 00bcfbdc ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-839d045baf102f8e0824d55e5ea49299"></a>

### [`00bcfe18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfe18.md) → [`00bcfeb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfeb4.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth10AuthResultEZNS2_14FutureCallbackIS3_EEvP7_JNIEnvP8_jobjectNS_4util12Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5db90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db90.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.90% / 新版 85.90%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcff20",
      "incomplete_value": false,
      "site": "00bcff24",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcfe84",
      "incomplete_value": false,
      "site": "00bcfe88",
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
            "const:e4:8"
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
      "00bcfef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcff1c"
      ]
    ],
    [
      "unmatched:00bcfe7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcff28"
      ]
    ],
    [
      "unmatched:00bcfe84",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcfef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcffb8"
      ]
    ],
    [
      "00bcff18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcff28"
      ]
    ],
    [
      "00bcff20",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcfe88 ["INT_ADD", "register:40f0:8", ["const:bcfe88:8", "const:4:8"]]
- 00bcfe88 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcff24 ["INT_ADD", "register:40f0:8", ["const:bcff24:8", "const:4:8"]]
+ 00bcff24 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcfe4c ["INT_ADD", "register:40f0:8", ["const:bcfe4c:8", "const:4:8"]]
- 00bcfe4c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcfee8 ["INT_ADD", "register:40f0:8", ["const:bcfee8:8", "const:4:8"]]
+ 00bcfee8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcfe58 ["INT_ADD", "register:40f0:8", ["const:bcfe58:8", "const:4:8"]]
- 00bcfe58 ["CALL", null, ["callee:00c5af50:8"]]
+ 00bcfef4 ["INT_ADD", "register:40f0:8", ["const:bcfef4:8", "const:4:8"]]
+ 00bcfef4 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-8affffe5b4238b2f0f2b75c763f3f5c9"></a>

### [`00bcff50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcff50.md) → [`00bcffec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcffec.md) _ZN8firebase6FutureINS_4auth10AuthResultEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dd30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd30.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5de00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de00.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0018",
      "incomplete_value": true,
      "site": "00bd0020",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcff7c",
      "incomplete_value": true,
      "site": "00bcff84",
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
      "unmatched:00bcff50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcff54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcff58",
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
      "00bcffec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bcfff0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcfff4",
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
- 00bcff84 ["INT_ADD", "register:40f0:8", ["const:bcff84:8", "const:4:8"]]
- 00bcff84 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bd0020 ["INT_ADD", "register:40f0:8", ["const:bd0020:8", "const:4:8"]]
+ 00bd0020 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bcff50 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bcff50 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bcff50 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcff54 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bcff54 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bcff54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcff54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-766d97c1af10e99db3ed3828d88873cd"></a>

### [`00bd0004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0004.md) → [`00bd00a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd00a0.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth4UserEEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS7_iS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbe0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcb0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0104",
      "incomplete_value": false,
      "site": "00bd0108",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0068",
      "incomplete_value": false,
      "site": "00bd006c",
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
            "const:e4:8"
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
      "00bd0104",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd0104",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd006c ["INT_ADD", "register:40f0:8", ["const:bd006c:8", "const:4:8"]]
- 00bd006c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd0108 ["INT_ADD", "register:40f0:8", ["const:bd0108:8", "const:4:8"]]
+ 00bd0108 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0030 ["INT_ADD", "register:40f0:8", ["const:bd0030:8", "const:4:8"]]
- 00bd0030 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bd00cc ["INT_ADD", "register:40f0:8", ["const:bd00cc:8", "const:4:8"]]
+ 00bd00cc ["CALL", null, ["callee:00c5aad0:8"]]
- 00bd003c ["INT_ADD", "register:40f0:8", ["const:bd003c:8", "const:4:8"]]
- 00bd003c ["CALL", null, ["callee:00c5af50:8"]]
+ 00bd00d8 ["INT_ADD", "register:40f0:8", ["const:bd00d8:8", "const:4:8"]]
+ 00bd00d8 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-875b2bd4e00fbd37618be7afaedc1a38"></a>

### [`00bd010c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd010c.md) → [`00bd01a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd01a8.md) _ZN8firebase4auth14FutureCallbackINS0_4UserEEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00bce4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bce/00bce4dc.md) [`00be0204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0204.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbb0.md)
- 新版 呼出元 2件 [`00bce578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce578.md) [`00be02a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be02a0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc80.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.42% / 新版 85.42%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd0130",
      "incomplete_value": true,
      "site": "00bd0144",
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
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:34:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd0188",
      "incomplete_value": true,
      "site": "00bd018c",
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd013c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0140",
      "WRITE",
      [
        "storage",
        "Stack[-0x4c]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd01d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00bd01dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x4c]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0144 ["INT_ADD", "register:40f0:8", ["const:bd0144:8", "const:4:8"]]
- 00bd0144 ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00bd01e0 ["INT_ADD", "register:40f0:8", ["const:bd01e0:8", "const:4:8"]]
+ 00bd01e0 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00bd018c ["INT_ADD", "register:40f0:8", ["const:bd018c:8", "const:4:8"]]
- 00bd018c ["CALL", null, ["callee:00c5ab60:8"]]
+ 00bd0228 ["INT_ADD", "register:40f0:8", ["const:bd0228:8", "const:4:8"]]
+ 00bd0228 ["CALL", null, ["callee:00c5ab60:8"]]
- 00bd0130 ["COPY", "tmp:0:8", ["const:34:8"]]
- 00bd0130 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd0130 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd0130 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-31a0f886221ec74c09729c4687b2cf48"></a>

### [`00bd01e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd01e0.md) → [`00bd027c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd027c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth4UserEZNS2_14FutureCallbackIS3_EEvP7_JNIEnvP8_jobjectNS_4util12FutureResu

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbb0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc80.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd024c",
      "incomplete_value": false,
      "site": "00bd0250",
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
            "const:e4:8"
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
      "definition_site": "00bd0254",
      "incomplete_value": true,
      "site": "00bd0264",
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
      "definition_site": "00bd0258",
      "incomplete_value": true,
      "site": "00bd0264",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00bd024c",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd027c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd032c"
      ]
    ]
  ],
  "added": [
    [
      "00bd02e8",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00bd0318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd032c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0250 ["INT_ADD", "register:40f0:8", ["const:bd0250:8", "const:4:8"]]
- 00bd0250 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd02ec ["INT_ADD", "register:40f0:8", ["const:bd02ec:8", "const:4:8"]]
+ 00bd02ec ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0264 ["INT_ADD", "register:40f0:8", ["const:bd0264:8", "const:4:8"]]
- 00bd0264 ["CALL", null, ["callee:00c5af40:8"]]
+ 00bd0300 ["INT_ADD", "register:40f0:8", ["const:bd0300:8", "const:4:8"]]
+ 00bd0300 ["CALL", null, ["callee:00c5af40:8"]]
- 00bd028c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd028c ["INT_ADD", "register:40f0:8", ["const:bd028c:8", "const:4:8"]]
- 00bd028c ["CALLIND", null, ["register:0:8"]]
+ 00bd0328 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd0328 ["INT_ADD", "register:40f0:8", ["const:bd0328:8", "const:4:8"]]
+ 00bd0328 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5678f0064edbd9c995dbc5db5ae9300a"></a>

### [`00bd0318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0318.md) → [`00bd03b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd03b4.md) _ZN8firebase6FutureINS_4auth4UserEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd50.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5de20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de20.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd0344",
      "incomplete_value": true,
      "site": "00bd034c",
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
            "const:30:8"
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
      "definition_site": "00bd0400",
      "incomplete_value": true,
      "site": "00bd0404",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00bd0370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0420"
      ]
    ]
  ],
  "added": [
    [
      "00bd040c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0420"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd034c ["INT_ADD", "register:40f0:8", ["const:bd034c:8", "const:4:8"]]
- 00bd034c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bd03e8 ["INT_ADD", "register:40f0:8", ["const:bd03e8:8", "const:4:8"]]
+ 00bd03e8 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bd0368 ["INT_ADD", "register:40f0:8", ["const:bd0368:8", "const:4:8"]]
- 00bd0368 ["CALL", null, ["callee:00c5aec0:8"]]
+ 00bd0404 ["INT_ADD", "register:40f0:8", ["const:bd0404:8", "const:4:8"]]
+ 00bd0404 ["CALL", null, ["callee:00c5aec0:8"]]
- 00bd0338 ["INT_ADD", "register:40f0:8", ["const:bd0338:8", "const:4:8"]]
- 00bd0338 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bd03d4 ["INT_ADD", "register:40f0:8", ["const:bd03d4:8", "const:4:8"]]
+ 00bd03d4 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-50fe844efc18d1793294751f7af682a5"></a>

### [`00bd03b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd03b8.md) → [`00bd0454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0454.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth10AuthResultEEEvRKNS_12FutureHandleEiPKcEUlPvE_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbc0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc90.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd03d4",
      "incomplete_value": true,
      "site": "00bd03e4",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd04b8",
      "incomplete_value": false,
      "site": "00bd04bc",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd041c",
      "incomplete_value": false,
      "site": "00bd0420",
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
            "const:e4:8"
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
      "unmatched:00bd0414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd04c0"
      ]
    ],
    [
      "unmatched:00bd041c",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd040c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd04b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd04c0"
      ]
    ],
    [
      "00bd04b8",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00bd04a8",
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
- 00bd03e4 ["INT_ADD", "register:40f0:8", ["const:bd03e4:8", "const:4:8"]]
- 00bd03e4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bd0480 ["INT_ADD", "register:40f0:8", ["const:bd0480:8", "const:4:8"]]
+ 00bd0480 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bd0420 ["INT_ADD", "register:40f0:8", ["const:bd0420:8", "const:4:8"]]
- 00bd0420 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd04bc ["INT_ADD", "register:40f0:8", ["const:bd04bc:8", "const:4:8"]]
+ 00bd04bc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd03f0 ["INT_ADD", "register:40f0:8", ["const:bd03f0:8", "const:4:8"]]
- 00bd03f0 ["CALL", null, ["callee:00c5af50:8"]]
+ 00bd048c ["INT_ADD", "register:40f0:8", ["const:bd048c:8", "const:4:8"]]
+ 00bd048c ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-1a4a964ba5460e74d9e85fc3dd4bb251"></a>

### [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) → [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) _ZN8firebase4auth14FutureCallbackIvEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`00bcf4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcf4b0.md) [`00bdf750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf750.md) [`00bdf978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf978.md) [`00be0450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0450.md) [`00be0640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0640.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md) [`00c5dbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbf0.md)
- 新版 呼出元 8件 [`00bcf54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf54c.md) [`00bdf7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf7ec.md) [`00bdfa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdfa14.md) [`00be04ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be04ec.md) [`00be06dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be06dc.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5dcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.83% / 新版 70.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd04e4",
      "incomplete_value": true,
      "site": "00bd04f8",
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
            "const:34:8"
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
      "unmatched:00bd04c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd04c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd04cc",
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
      "00bd0560",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bd0564",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd0568",
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
- 00bd04f8 ["INT_ADD", "register:40f0:8", ["const:bd04f8:8", "const:4:8"]]
- 00bd04f8 ["CALL", null, ["callee:00c5ddf0:8"]]
+ 00bd0594 ["INT_ADD", "register:40f0:8", ["const:bd0594:8", "const:4:8"]]
+ 00bd0594 ["CALL", null, ["callee:00c5ddf0:8"]]
- 00bd04c0 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 00bd04c4 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00bd04c4 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00bd04c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00bd04c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f57140079610fb3437720f0b4ddae95f"></a>

### [`00bd0594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0594.md) → [`00bd0630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0630.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS_4auth14FutureCallbackIvEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPvEUl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dbf0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcc0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.03% / 新版 91.03%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0650",
      "incomplete_value": true,
      "site": "00bd0664",
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
    "new": {
      "definition_site": "00bd069c",
      "incomplete_value": true,
      "site": "00bd06a0",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0600",
      "incomplete_value": false,
      "site": "00bd0604",
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
            "const:e4:8"
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
      "definition_site": "00bd0608",
      "incomplete_value": true,
      "site": "00bd0618",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd0594",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0598",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd059c",
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
      "00bd0630",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bd0634",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bd0638",
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
- 00bd05c8 ["INT_ADD", "register:40f0:8", ["const:bd05c8:8", "const:4:8"]]
- 00bd05c8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bd0664 ["INT_ADD", "register:40f0:8", ["const:bd0664:8", "const:4:8"]]
+ 00bd0664 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bd0604 ["INT_ADD", "register:40f0:8", ["const:bd0604:8", "const:4:8"]]
- 00bd0604 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd06a0 ["INT_ADD", "register:40f0:8", ["const:bd06a0:8", "const:4:8"]]
+ 00bd06a0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0618 ["INT_ADD", "register:40f0:8", ["const:bd0618:8", "const:4:8"]]
- 00bd0618 ["CALL", null, ["callee:00c5af40:8"]]
+ 00bd06b4 ["INT_ADD", "register:40f0:8", ["const:bd06b4:8", "const:4:8"]]
+ 00bd06b4 ["CALL", null, ["callee:00c5af40:8"]]
~~~


<a id="compare-76c718fddebff86c49d6a3e5e1d2727f"></a>

### [`00bd06cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd06cc.md) → [`00bd0768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0768.md) _ZN8firebase4auth10authresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd077c",
      "incomplete_value": true,
      "site": "00bd077c",
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
      "definition_site": "00bd06e0",
      "incomplete_value": true,
      "site": "00bd06e0",
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
      "00bd0778",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd06ec",
      "PARAM",
      [
        "storage",
        "002b2756",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd06f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd0778",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0788",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd078c",
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
- 00bd06e0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd06e0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd077c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd077c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd06dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:848:8"]]
- 00bd06dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0778 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
+ 00bd0778 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd06ec ["COPY", "tmp:0:8", ["const:756:8"]]
- 00bd06ec ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd06ec ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd06ec ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-73556410a6199d8c9cbf1492c088bd03"></a>

### [`00bd070c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd070c.md) → [`00bd07a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd07a8.md) _ZN8firebase4auth10authresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd07bc",
      "incomplete_value": true,
      "site": "00bd07bc",
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
      "definition_site": "00bd0720",
      "incomplete_value": true,
      "site": "00bd0720",
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
      "00bd07b8",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd07bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd073c"
      ]
    ],
    [
      "unmatched:00bd0728",
      "PARAM",
      [
        "storage",
        "002b2756",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd07b8",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd07bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd07d8"
      ]
    ],
    [
      "00bd07c4",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0720 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd0720 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd07bc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd07bc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd071c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:848:8"]]
- 00bd071c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd07b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
+ 00bd07b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd0728 ["COPY", "tmp:0:8", ["const:756:8"]]
- 00bd0728 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd0728 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd0728 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-d48a278b71b0595c9fd7c992849db7cf"></a>

### [`00bd074c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd074c.md) → [`00bd07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd07e8.md) _ZN8firebase4auth10authresult10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd07fc",
      "incomplete_value": true,
      "site": "00bd07fc",
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
      "definition_site": "00bd0760",
      "incomplete_value": true,
      "site": "00bd0760",
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
      "unmatched:00bd074c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0750",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd07f8",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd07e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd07ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd07f8",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd074c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd074c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd074c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd0750 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd0750 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd0750 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0750 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd0754 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd0754 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd0754 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd0754 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-607441eb6db7e642bd03ea4076f74918"></a>

### [`00bd0790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0790.md) → [`00bd082c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd082c.md) _ZN8firebase4auth10authresult10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0848",
      "incomplete_value": false,
      "site": "00bd0854",
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
            "const:787:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd07ac",
      "incomplete_value": false,
      "site": "00bd07b8",
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
            "const:756:8"
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
      "unmatched:00bd0790",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0794",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd07a0",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd082c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd0830",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd083c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd07b8 ["INT_ADD", "register:40f0:8", ["const:bd07b8:8", "const:4:8"]]
- 00bd07b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0854 ["INT_ADD", "register:40f0:8", ["const:bd0854:8", "const:4:8"]]
+ 00bd0854 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0790 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd0790 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd0790 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd0794 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd0794 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd0794 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0794 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-71daaa300681da18ef1c47089db9261d"></a>

### [`00bd07e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd07e0.md) → [`00bd087c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd087c.md) _ZN8firebase4auth10authresult15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd0890",
      "READ",
      [
        "storage",
        "01126850",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd089c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd083c"
      ]
    ],
    [
      "unmatched:00bd0814",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0890",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd089c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd08d8"
      ]
    ],
    [
      "00bd08b0",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd07f4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:850:8"]]
- 00bd07f4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd07f4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd0890 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:950:8"]]
+ 00bd0890 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0890 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd07f8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd07f8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd0894 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd0894 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd0800 ["BRANCH", null, ["local:b4:8"]]
+ 00bd089c ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-146db8c747aa274cc43b158af551746e"></a>

### [`00bd084c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd084c.md) → [`00bd08e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd08e8.md) _ZN8firebase4auth10authresult12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.71% / 新版 60.71%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd0900",
      "incomplete_value": true,
      "site": "00bd0900",
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
      "definition_site": "00bd0864",
      "incomplete_value": true,
      "site": "00bd0864",
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
      "00bd08fc",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0908",
      "READ",
      [
        "storage",
        "01126850",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd088c"
      ]
    ]
  ],
  "added": [
    [
      "00bd08fc",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0908",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0928"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0864 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd0864 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd0900 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd0900 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00bd0860 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:848:8"]]
- 00bd0860 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd08fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
+ 00bd08fc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd086c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:850:8"]]
- 00bd086c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd086c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd0908 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:950:8"]]
+ 00bd0908 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0908 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-fe67436c5fa3f13666b0103726fcccd6"></a>

### [`00bd08bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd08bc.md) → [`00bd0958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0958.md) _ZN8firebase4auth10authresult14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd08e4",
      "incomplete_value": true,
      "site": "00bd08f4",
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
      "definition_site": "00bd08e8",
      "incomplete_value": true,
      "site": "00bd08f4",
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
      "definition_site": "00bd08e0",
      "incomplete_value": false,
      "site": "00bd08f4",
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
            "const:756:8"
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
      "unmatched:00bd08bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd08c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd08d0",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0958",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd095c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd096c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd08f4 ["INT_ADD", "register:40f0:8", ["const:bd08f4:8", "const:4:8"]]
- 00bd08f4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0990 ["INT_ADD", "register:40f0:8", ["const:bd0990:8", "const:4:8"]]
+ 00bd0990 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd08bc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd08bc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd08bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd08bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd08c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd08c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd08c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd08c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8ea391c8b6264fd9d3fefa46ca49bb33"></a>

### [`00bd092c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd092c.md) → [`00bd09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd09c8.md) _ZN8firebase4auth10authresult11GetMethodIdENS1_6MethodE

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
      "00bd09dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd0950"
      ]
    ],
    [
      "unmatched:00bd0948",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd094c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd09dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd09ec"
      ]
    ],
    [
      "00bd09e4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd09e8",
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
- 00bd0948 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd0948 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0948 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0948 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd094c ["INT_ADD", "register:40f0:8", ["const:bd094c:8", "const:4:8"]]
- 00bd094c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0950 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0fcba1dd4473d25e22112272fbe19970"></a>

### [`00bd0968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0968.md) → [`00bd0a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0a04.md) _ZN8firebase4auth10authresult13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd0a44",
      "incomplete_value": true,
      "site": "00bd0a44",
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
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd09a8",
      "incomplete_value": true,
      "site": "00bd09a8",
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
            "const:848:8"
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
      "definition_site": "00bd0a20",
      "incomplete_value": true,
      "site": "00bd0a20",
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
      "definition_site": "00bd0984",
      "incomplete_value": true,
      "site": "00bd0984",
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
      "definition_site": "00bd0a28",
      "incomplete_value": false,
      "site": "00bd0a3c",
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
            "const:787:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd098c",
      "incomplete_value": false,
      "site": "00bd09a0",
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
            "const:756:8"
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
      "00bd0a18",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0a28",
      "PARAM",
      [
        "storage",
        "002b2756",
        null,
        "string"
      ]
    ],
    [
      "00bd0a44",
      "WRITE",
      [
        "storage",
        "01126848",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0a18",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0a28",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd0a44",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd09a0 ["INT_ADD", "register:40f0:8", ["const:bd09a0:8", "const:4:8"]]
- 00bd09a0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0a3c ["INT_ADD", "register:40f0:8", ["const:bd0a3c:8", "const:4:8"]]
+ 00bd0a3c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd09a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:848:8"]]
- 00bd09a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0a44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
+ 00bd0a44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd097c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:848:8"]]
- 00bd097c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0a18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
+ 00bd0a18 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f5b0eef0ebbb25da2c7ce7851c2d1ec0"></a>

### [`00bd09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd09d8.md) → [`00bd0a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0a74.md) _ZN8firebase4auth10authresult10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd0a90",
      "incomplete_value": false,
      "site": "00bd0a94",
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
      "definition_site": "00bd09f4",
      "incomplete_value": false,
      "site": "00bd09f8",
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
      "definition_site": "00bd0aa0",
      "incomplete_value": true,
      "site": "00bd0aac",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0a04",
      "incomplete_value": true,
      "site": "00bd0a10",
      "value": [
        "LOAD",
        "8",
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
      "00bd0a90",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd0aa0",
      "DATA",
      [
        "storage",
        "01126870",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd0a90",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd0aa0",
      "DATA",
      [
        "storage",
        "01126970",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd09f8 ["INT_ADD", "register:40f0:8", ["const:bd09f8:8", "const:4:8"]]
- 00bd09f8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd0a94 ["INT_ADD", "register:40f0:8", ["const:bd0a94:8", "const:4:8"]]
+ 00bd0a94 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd09f4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd09f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd09f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd09f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd0a90 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd0a90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0a90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0a90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0a00 ["COPY", "tmp:0:8", ["const:870:8"]]
- 00bd0a00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0a00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0a00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd0a9c ["COPY", "tmp:0:8", ["const:970:8"]]
+ 00bd0a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-247ba56da25d7048f027f2ddaf498c9d"></a>

### [`00bd0a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0a14.md) → [`00bd0ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ab0.md) _ZN8firebase4auth20additional_user_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocato

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
      "definition_site": "00bd0adc",
      "incomplete_value": true,
      "site": "00bd0adc",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a40",
      "incomplete_value": true,
      "site": "00bd0a40",
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
            "const:878:8"
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
      "definition_site": "00bd0ac4",
      "incomplete_value": true,
      "site": "00bd0ac4",
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
      "definition_site": "00bd0a28",
      "incomplete_value": true,
      "site": "00bd0a28",
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
      "definition_site": "00bd0ad0",
      "incomplete_value": false,
      "site": "00bd0ad4",
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
            "const:27e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a34",
      "incomplete_value": false,
      "site": "00bd0a38",
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
            "const:2da:8"
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
      "00bd0ac0",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0ad0",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ],
    [
      "00bd0adc",
      "WRITE",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0ac0",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0ad0",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd0adc",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0a38 ["INT_ADD", "register:40f0:8", ["const:bd0a38:8", "const:4:8"]]
- 00bd0a38 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0ad4 ["INT_ADD", "register:40f0:8", ["const:bd0ad4:8", "const:4:8"]]
+ 00bd0ad4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0a40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0a40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0adc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0adc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0a24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0a24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0ac0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0ac0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-99e10b275a34c41c194a7a1191382ac6"></a>

### [`00bd0a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0a54.md) → [`00bd0af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0af0.md) _ZN8firebase4auth20additional_user_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocato

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
      "definition_site": "00bd0b1c",
      "incomplete_value": true,
      "site": "00bd0b1c",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a80",
      "incomplete_value": true,
      "site": "00bd0a80",
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
            "const:878:8"
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
      "definition_site": "00bd0b04",
      "incomplete_value": true,
      "site": "00bd0b04",
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
      "definition_site": "00bd0a68",
      "incomplete_value": true,
      "site": "00bd0a68",
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
      "definition_site": "00bd0b0c",
      "incomplete_value": false,
      "site": "00bd0b14",
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
            "const:27e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a70",
      "incomplete_value": false,
      "site": "00bd0a78",
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
            "const:2da:8"
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
      "00bd0b00",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b0c",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ],
    [
      "00bd0b1c",
      "WRITE",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0b00",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b0c",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd0b1c",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0a78 ["INT_ADD", "register:40f0:8", ["const:bd0a78:8", "const:4:8"]]
- 00bd0a78 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0b14 ["INT_ADD", "register:40f0:8", ["const:bd0b14:8", "const:4:8"]]
+ 00bd0b14 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0a80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0a80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0b1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0b1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0a64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0a64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0b00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0b00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a8cf802b30b6172f8e97c6bd05900efb"></a>

### [`00bd0a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0a94.md) → [`00bd0b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0b30.md) _ZN8firebase4auth20additional_user_info10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd0b60",
      "incomplete_value": true,
      "site": "00bd0b60",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ac4",
      "incomplete_value": true,
      "site": "00bd0ac4",
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
            "const:878:8"
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
      "definition_site": "00bd0b44",
      "incomplete_value": true,
      "site": "00bd0b44",
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
      "definition_site": "00bd0aa8",
      "incomplete_value": true,
      "site": "00bd0aa8",
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
      "definition_site": "00bd0b50",
      "incomplete_value": false,
      "site": "00bd0b58",
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
            "const:27e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ab4",
      "incomplete_value": false,
      "site": "00bd0abc",
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
            "const:2da:8"
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
      "00bd0b40",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b50",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ],
    [
      "00bd0b60",
      "WRITE",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0b40",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b50",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd0b60",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0abc ["INT_ADD", "register:40f0:8", ["const:bd0abc:8", "const:4:8"]]
- 00bd0abc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0b58 ["INT_ADD", "register:40f0:8", ["const:bd0b58:8", "const:4:8"]]
+ 00bd0b58 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0ac4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0ac4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0b60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0b60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0aa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0aa4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0b40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0b40 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbe3150c60748300d8a08a1010f47d06"></a>

### [`00bd0ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0ad8.md) → [`00bd0b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0b74.md) _ZN8firebase4auth20additional_user_info10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd0ba4",
      "incomplete_value": true,
      "site": "00bd0ba4",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b08",
      "incomplete_value": true,
      "site": "00bd0b08",
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
            "const:878:8"
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
      "definition_site": "00bd0b88",
      "incomplete_value": true,
      "site": "00bd0b88",
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
      "definition_site": "00bd0aec",
      "incomplete_value": true,
      "site": "00bd0aec",
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
      "definition_site": "00bd0b90",
      "incomplete_value": false,
      "site": "00bd0b9c",
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
            "const:27e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0af4",
      "incomplete_value": false,
      "site": "00bd0b00",
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
            "const:2da:8"
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
      "00bd0b84",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b90",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ],
    [
      "00bd0ba4",
      "WRITE",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0b84",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0b90",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd0ba4",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0b00 ["INT_ADD", "register:40f0:8", ["const:bd0b00:8", "const:4:8"]]
- 00bd0b00 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0b9c ["INT_ADD", "register:40f0:8", ["const:bd0b9c:8", "const:4:8"]]
+ 00bd0b9c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0b08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0b08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0ba4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0ba4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0ae8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:878:8"]]
- 00bd0ae8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0b84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
+ 00bd0b84 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3b86e17e05de364fc1cc6765d553ba23"></a>

### [`00bd0b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0b28.md) → [`00bd0bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0bc4.md) _ZN8firebase4auth20additional_user_info15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_return_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd0c1c",
      "incomplete_value": true,
      "site": "00bd0c1c",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b80",
      "incomplete_value": true,
      "site": "00bd0b80",
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
            "const:880:8"
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
      "definition_site": "00bd0bf8",
      "incomplete_value": true,
      "site": "00bd0c04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b5c",
      "incomplete_value": true,
      "site": "00bd0b68",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:878:8"
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
      "00bd0bd8",
      "READ",
      [
        "storage",
        "01126880",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0be4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd0b84"
      ]
    ],
    [
      "00bd0bf8",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0bd8",
      "READ",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0be4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0c20"
      ]
    ],
    [
      "00bd0bf8",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0b68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0b68 ["INT_ADD", "register:40f0:8", ["const:bd0b68:8", "const:4:8"]]
- 00bd0b68 ["CALLIND", null, ["register:0:8"]]
+ 00bd0c04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd0c04 ["INT_ADD", "register:40f0:8", ["const:bd0c04:8", "const:4:8"]]
+ 00bd0c04 ["CALLIND", null, ["register:0:8"]]
- 00bd0b80 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd0b80 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:880:8"]]
- 00bd0b80 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd0c1c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd0c1c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:980:8"]]
+ 00bd0c1c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd0b3c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:880:8"]]
- 00bd0b3c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd0b3c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd0bd8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:980:8"]]
+ 00bd0bd8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0bd8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e69145663a9f017b66718a5e9e991f9d"></a>

### [`00bd0b94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0b94.md) → [`00bd0c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0c30.md) _ZN8firebase4auth20additional_user_info12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd0c8c",
      "incomplete_value": true,
      "site": "00bd0c8c",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0bf0",
      "incomplete_value": true,
      "site": "00bd0bf0",
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
            "const:878:8"
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
      "definition_site": "00bd0c48",
      "incomplete_value": true,
      "site": "00bd0c48",
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
      "definition_site": "00bd0bac",
      "incomplete_value": true,
      "site": "00bd0bac",
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
      "definition_site": "00bd0c7c",
      "incomplete_value": true,
      "site": "00bd0c88",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0be0",
      "incomplete_value": true,
      "site": "00bd0bec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:878:8"
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
      "00bd0c44",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0c50",
      "READ",
      [
        "storage",
        "01126880",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd0bd0",
      "WRITE",
      [
        "storage",
        "01126880",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd0c44",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0c50",
      "READ",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0c6c",
      "WRITE",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0bac ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd0bac ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bd0c48 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd0c48 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd0bec ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0bec ["INT_ADD", "register:40f0:8", ["const:bd0bec:8", "const:4:8"]]
- 00bd0bec ["CALLIND", null, ["register:0:8"]]
+ 00bd0c88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd0c88 ["INT_ADD", "register:40f0:8", ["const:bd0c88:8", "const:4:8"]]
+ 00bd0c88 ["CALLIND", null, ["register:0:8"]]
- 00bd0bf0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:878:8"]]
- 00bd0bf0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd0bf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd0c8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
+ 00bd0c8c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd0c8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-234a15732a32305572eff88f18eaba72"></a>

### [`00bd0c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0c04.md) → [`00bd0ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ca0.md) _ZN8firebase4auth20additional_user_info14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd0ce0",
      "incomplete_value": true,
      "site": "00bd0ce0",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0c44",
      "incomplete_value": true,
      "site": "00bd0c44",
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
            "const:878:8"
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
      "definition_site": "00bd0cbc",
      "incomplete_value": true,
      "site": "00bd0cbc",
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
      "definition_site": "00bd0c20",
      "incomplete_value": true,
      "site": "00bd0c20",
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
      "definition_site": "00bd0cc4",
      "incomplete_value": false,
      "site": "00bd0cd8",
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
            "const:27e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0c28",
      "incomplete_value": false,
      "site": "00bd0c3c",
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
            "const:2da:8"
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
      "00bd0cb4",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0cc4",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ],
    [
      "00bd0ce0",
      "WRITE",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0cb4",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0cc4",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd0ce0",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0c3c ["INT_ADD", "register:40f0:8", ["const:bd0c3c:8", "const:4:8"]]
- 00bd0c3c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0cd8 ["INT_ADD", "register:40f0:8", ["const:bd0cd8:8", "const:4:8"]]
+ 00bd0cd8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0c44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:878:8"]]
- 00bd0c44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0ce0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
+ 00bd0ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0c18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:878:8"]]
- 00bd0c18 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0cb4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
+ 00bd0cb4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d3a0163527ac6090b0958660c6974782"></a>

### [`00bd0c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0c74.md) → [`00bd0d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0d10.md) _ZN8firebase4auth20additional_user_info11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd0d2c",
      "incomplete_value": false,
      "site": "00bd0d30",
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
      "definition_site": "00bd0c90",
      "incomplete_value": false,
      "site": "00bd0c94",
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
      "definition_site": "00bd0d3c",
      "incomplete_value": true,
      "site": "00bd0d48",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0ca0",
      "incomplete_value": true,
      "site": "00bd0cac",
      "value": [
        "LOAD",
        "8",
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
      "00bd0d2c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd0d3c",
      "DATA",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0d2c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd0d3c",
      "DATA",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0c94 ["INT_ADD", "register:40f0:8", ["const:bd0c94:8", "const:4:8"]]
- 00bd0c94 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd0d30 ["INT_ADD", "register:40f0:8", ["const:bd0d30:8", "const:4:8"]]
+ 00bd0d30 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0c90 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd0c90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0c90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0c90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd0d2c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd0d2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0d2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0d2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0c9c ["COPY", "tmp:0:8", ["const:888:8"]]
- 00bd0c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd0d38 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00bd0d38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0d38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0d38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca47c2f2db61fd25c1cd451b528962ce"></a>

### [`00bd0cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0cb0.md) → [`00bd0d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0d4c.md) _ZN8firebase4auth20additional_user_info13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd0cd8",
      "incomplete_value": true,
      "site": "00bd0ce8",
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
      "definition_site": "00bd0cdc",
      "incomplete_value": true,
      "site": "00bd0ce8",
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
      "definition_site": "00bd0ce0",
      "incomplete_value": false,
      "site": "00bd0ce8",
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
      "unmatched:00bd0cc4",
      "READ",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd0ccc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0d90"
      ]
    ],
    [
      "unmatched:00bd0cd4",
      "PARAM",
      [
        "storage",
        "002ac2da",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd0d60",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0d68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd0d90"
      ]
    ],
    [
      "00bd0d70",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0ce8 ["INT_ADD", "register:40f0:8", ["const:bd0ce8:8", "const:4:8"]]
- 00bd0ce8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0d84 ["INT_ADD", "register:40f0:8", ["const:bd0d84:8", "const:4:8"]]
+ 00bd0d84 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0cc4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:878:8"]]
- 00bd0cc4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd0cc8 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-0e39edd4bec5bb93bd04e5d797db7bee"></a>

### [`00bd0d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0d20.md) → [`00bd0dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0dbc.md) _ZN8firebase4auth20additional_user_info10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd0dd8",
      "incomplete_value": false,
      "site": "00bd0ddc",
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
      "definition_site": "00bd0d3c",
      "incomplete_value": false,
      "site": "00bd0d40",
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
      "definition_site": "00bd0de8",
      "incomplete_value": true,
      "site": "00bd0df4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0d4c",
      "incomplete_value": true,
      "site": "00bd0d58",
      "value": [
        "LOAD",
        "8",
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
      "00bd0dd8",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd0de8",
      "DATA",
      [
        "storage",
        "011268a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd0dd8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd0de8",
      "DATA",
      [
        "storage",
        "011269a0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0d40 ["INT_ADD", "register:40f0:8", ["const:bd0d40:8", "const:4:8"]]
- 00bd0d40 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd0ddc ["INT_ADD", "register:40f0:8", ["const:bd0ddc:8", "const:4:8"]]
+ 00bd0ddc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd0d3c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd0d3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0d3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0d3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd0dd8 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd0dd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0dd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd0dd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0d48 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 00bd0d48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0d48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd0d48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd0de4 ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 00bd0de4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0de4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd0de4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f540f365158f9957f81df9638d98807"></a>

### [`00bd0d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0d5c.md) → [`00bd0df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0df8.md) _ZN8firebase4auth27api_not_available_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd0e0c",
      "incomplete_value": true,
      "site": "00bd0e0c",
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
      "definition_site": "00bd0d70",
      "incomplete_value": true,
      "site": "00bd0d70",
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
      "00bd0e08",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd0d7c",
      "PARAM",
      [
        "storage",
        "002a7450",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd0d80",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd0e08",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0e18",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd0e1c",
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
- 00bd0d70 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd0d70 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd0e0c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd0e0c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd0d6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0d6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0e08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0e08 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd0d7c ["COPY", "tmp:0:8", ["const:450:8"]]
- 00bd0d7c ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd0d7c ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd0d7c ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-15187d6c0c6b5589f063025239cfa55b"></a>

### [`00bd0d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0d9c.md) → [`00bd0e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0e38.md) _ZN8firebase4auth27api_not_available_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd0e64",
      "incomplete_value": true,
      "site": "00bd0e64",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0dc8",
      "incomplete_value": true,
      "site": "00bd0dc8",
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
            "const:8a8:8"
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
      "definition_site": "00bd0e4c",
      "incomplete_value": true,
      "site": "00bd0e4c",
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
      "definition_site": "00bd0db0",
      "incomplete_value": true,
      "site": "00bd0db0",
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
      "definition_site": "00bd0e54",
      "incomplete_value": false,
      "site": "00bd0e5c",
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
            "const:3f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0db8",
      "incomplete_value": false,
      "site": "00bd0dc0",
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
            "const:450:8"
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
      "00bd0e48",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0e54",
      "PARAM",
      [
        "storage",
        "002a7450",
        null,
        "string"
      ]
    ],
    [
      "00bd0e64",
      "WRITE",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0e48",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0e54",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd0e64",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0dc0 ["INT_ADD", "register:40f0:8", ["const:bd0dc0:8", "const:4:8"]]
- 00bd0dc0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0e5c ["INT_ADD", "register:40f0:8", ["const:bd0e5c:8", "const:4:8"]]
+ 00bd0e5c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0dc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0dc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0e64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0e64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0dac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0dac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0e48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0e48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4c1e9439a9ffc6ef09f05ae7e5200316"></a>

### [`00bd0ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0ddc.md) → [`00bd0e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0e78.md) _ZN8firebase4auth27api_not_available_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd0ea8",
      "incomplete_value": true,
      "site": "00bd0ea8",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e0c",
      "incomplete_value": true,
      "site": "00bd0e0c",
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
            "const:8a8:8"
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
      "definition_site": "00bd0e8c",
      "incomplete_value": true,
      "site": "00bd0e8c",
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
      "definition_site": "00bd0df0",
      "incomplete_value": true,
      "site": "00bd0df0",
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
      "definition_site": "00bd0e98",
      "incomplete_value": false,
      "site": "00bd0ea0",
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
            "const:3f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0dfc",
      "incomplete_value": false,
      "site": "00bd0e04",
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
            "const:450:8"
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
      "00bd0e88",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0e98",
      "PARAM",
      [
        "storage",
        "002a7450",
        null,
        "string"
      ]
    ],
    [
      "00bd0ea8",
      "WRITE",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0e88",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0e98",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd0ea8",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0e04 ["INT_ADD", "register:40f0:8", ["const:bd0e04:8", "const:4:8"]]
- 00bd0e04 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0ea0 ["INT_ADD", "register:40f0:8", ["const:bd0ea0:8", "const:4:8"]]
+ 00bd0ea0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0e0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0e0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd0ea8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0ea8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0dec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0dec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0e88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0e88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4e7bdcb3f34d74e2d257a945e50d738a"></a>

### [`00bd0e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0e20.md) → [`00bd0ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ebc.md) _ZN8firebase4auth27api_not_available_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd0ed0",
      "incomplete_value": true,
      "site": "00bd0ed0",
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
      "definition_site": "00bd0e34",
      "incomplete_value": true,
      "site": "00bd0e34",
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
      "definition_site": "00bd0e40",
      "incomplete_value": false,
      "site": "00bd0e48",
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
      "definition_site": "00bd0e3c",
      "incomplete_value": false,
      "site": "00bd0e48",
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
            "const:450:8"
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
      "00bd0ecc",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd0e3c",
      "PARAM",
      [
        "storage",
        "002a7450",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd0e50",
      "WRITE",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0ecc",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd0ed8",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd0eec",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0e34 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd0e34 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd0ed0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd0ed0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd0e48 ["INT_ADD", "register:40f0:8", ["const:bd0e48:8", "const:4:8"]]
- 00bd0e48 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd0ee4 ["INT_ADD", "register:40f0:8", ["const:bd0ee4:8", "const:4:8"]]
+ 00bd0ee4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0e30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00bd0e30 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0ecc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd0ecc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1773eb892eb22644b2c73fd5118681e1"></a>

### [`00bd0e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0e70.md) → [`00bd0f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0f0c.md) _ZN8firebase4auth27api_not_available_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0f40",
      "incomplete_value": true,
      "site": "00bd0f4c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ea4",
      "incomplete_value": true,
      "site": "00bd0eb0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8a8:8"
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
      "definition_site": "00bd0f3c",
      "incomplete_value": true,
      "site": "00bd0f4c",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "00bd0f38",
      "incomplete_value": true,
      "site": "00bd0f4c",
      "value": [
        "live",
        "register:4010:8"
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
      "unmatched:00bd0e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd0f20",
      "READ",
      [
        "storage",
        "011268b0",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd0ea4",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd0f20",
      "READ",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd0f40",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0eb0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0eb0 ["INT_ADD", "register:40f0:8", ["const:bd0eb0:8", "const:4:8"]]
- 00bd0eb0 ["CALLIND", null, ["register:0:8"]]
+ 00bd0f4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd0f4c ["INT_ADD", "register:40f0:8", ["const:bd0f4c:8", "const:4:8"]]
+ 00bd0f4c ["CALLIND", null, ["register:0:8"]]
- 00bd0e74 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd0e74 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd0e74 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0e74 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd0e84 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8b0:8"]]
- 00bd0e84 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd0e84 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd0f20 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9b0:8"]]
+ 00bd0f20 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd0f20 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-eb179f652be9d0f2ff37a488561af2ab"></a>

### [`00bd0edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0edc.md) → [`00bd0f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0f78.md) _ZN8firebase4auth27api_not_available_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 53.57% / 新版 53.57%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd0f90",
      "incomplete_value": true,
      "site": "00bd0f90",
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
      "definition_site": "00bd0ef4",
      "incomplete_value": true,
      "site": "00bd0ef4",
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
      "unmatched:00bd0edc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0ee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0ee4",
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
      "00bd0f78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd0f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd0f80",
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
- 00bd0ef4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd0ef4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bd0f90 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd0f90 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd0edc ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd0edc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd0edc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd0ee0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd0ee0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd0ee0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0ee0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c2b0c8d17514201d14b022c01ed8a844"></a>

### [`00bd0f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0f4c.md) → [`00bd0fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0fe8.md) _ZN8firebase4auth27api_not_available_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd1010",
      "incomplete_value": true,
      "site": "00bd1020",
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
      "definition_site": "00bd1014",
      "incomplete_value": true,
      "site": "00bd1020",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00bd100c",
      "incomplete_value": false,
      "site": "00bd1020",
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
            "const:3f4:8"
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
      "unmatched:00bd0f4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0f50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0f60",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd0fe8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd0fec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd0ffc",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0f84 ["INT_ADD", "register:40f0:8", ["const:bd0f84:8", "const:4:8"]]
- 00bd0f84 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1020 ["INT_ADD", "register:40f0:8", ["const:bd1020:8", "const:4:8"]]
+ 00bd1020 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0f4c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd0f4c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd0f4c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd0f4c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd0f50 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd0f50 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd0f50 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0f50 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-84f775391011025a50c223969c525375"></a>

### [`00bd0fbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0fbc.md) → [`00bd1058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1058.md) _ZN8firebase4auth27api_not_available_exception11GetMethodIdENS1_6MethodE

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
      "unmatched:00bd0fd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd0fe0"
      ]
    ],
    [
      "unmatched:00bd0fd8",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd0fdc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd106c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd107c"
      ]
    ],
    [
      "00bd1074",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd1078",
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
- 00bd0fd0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd0fd0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd0fd4 ["COPY", "register:4000:8", ["const:2a8000:8"]]
- 00bd0fd8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd0fd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0fd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0fd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c4a881ba662edeb89c130137a608464f"></a>

### [`00bd0ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd0ff8.md) → [`00bd1094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1094.md) _ZN8firebase4auth27api_not_available_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd10b8",
      "incomplete_value": false,
      "site": "00bd10cc",
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
            "const:3f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd101c",
      "incomplete_value": false,
      "site": "00bd1030",
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
            "const:450:8"
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
      "unmatched:00bd0ff8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd0ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd100c",
      "READ",
      [
        "storage",
        "011268a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1094",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd1098",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd10a8",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1030 ["INT_ADD", "register:40f0:8", ["const:bd1030:8", "const:4:8"]]
- 00bd1030 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd10cc ["INT_ADD", "register:40f0:8", ["const:bd10cc:8", "const:4:8"]]
+ 00bd10cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd0ff8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd0ff8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd0ff8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd0ff8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd0ffc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd0ffc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd0ffc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd0ffc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8fb6d92ede94449e8e83da317caa00cb"></a>

### [`00bd1068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1068.md) → [`00bd1104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1104.md) _ZN8firebase4auth27api_not_available_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd1120",
      "incomplete_value": false,
      "site": "00bd1124",
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
      "definition_site": "00bd1084",
      "incomplete_value": false,
      "site": "00bd1088",
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
      "definition_site": "00bd1130",
      "incomplete_value": true,
      "site": "00bd113c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1094",
      "incomplete_value": true,
      "site": "00bd10a0",
      "value": [
        "LOAD",
        "8",
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
      "00bd1120",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd1130",
      "DATA",
      [
        "storage",
        "011268c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1120",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd1130",
      "DATA",
      [
        "storage",
        "011269c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1088 ["INT_ADD", "register:40f0:8", ["const:bd1088:8", "const:4:8"]]
- 00bd1088 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1124 ["INT_ADD", "register:40f0:8", ["const:bd1124:8", "const:4:8"]]
+ 00bd1124 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1084 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd1084 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1084 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1084 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1120 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd1120 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1120 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1120 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1090 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 00bd1090 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1090 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1090 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd112c ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 00bd112c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd112c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd112c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58fe0edbdb52f7e8800b50e56c7c051a"></a>

### [`00bd10a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd10a4.md) → [`00bd1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1140.md) _ZN8firebase4auth21action_code_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd1154",
      "incomplete_value": true,
      "site": "00bd1154",
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
      "definition_site": "00bd10b8",
      "incomplete_value": true,
      "site": "00bd10b8",
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
      "00bd1150",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1154",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd10d4"
      ]
    ],
    [
      "unmatched:00bd10c4",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd1150",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1154",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1170"
      ]
    ],
    [
      "00bd1160",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd10b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00bd10b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1150 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd1150 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd10c0 ["COPY", "register:4018:8", ["const:2a5000:8"]]
+ 00bd115c ["COPY", "register:4018:8", ["const:2a4000:8"]]
- 00bd10c4 ["COPY", "tmp:0:8", ["const:f:8"]]
- 00bd10c4 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd10c4 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd10c4 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-bea1fbec9cc601500d2f104d0c54953c"></a>

### [`00bd10e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd10e4.md) → [`00bd1180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1180.md) _ZN8firebase4auth21action_code_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd1194",
      "incomplete_value": true,
      "site": "00bd1194",
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
      "definition_site": "00bd10f8",
      "incomplete_value": true,
      "site": "00bd10f8",
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
      "00bd1190",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd1100",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd1108",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd1190",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd119c",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd11a4",
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
- 00bd10f8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd10f8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd1194 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd1194 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd10f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00bd10f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1190 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd1190 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd10fc ["COPY", "register:4018:8", ["const:2a5000:8"]]
+ 00bd1198 ["COPY", "register:4018:8", ["const:2a4000:8"]]
~~~


<a id="compare-e9eb4d5f518cb7c3db92ddc6589a0cee"></a>

### [`00bd1124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1124.md) → [`00bd11c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd11c0.md) _ZN8firebase4auth21action_code_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "unmatched:00bd1134",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd1138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd11f4"
      ]
    ],
    [
      "unmatched:00bd1144",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd11d0",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd11d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd11f4"
      ]
    ],
    [
      "00bd11e0",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1134 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00bd1134 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd1138 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd1138 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd113c ["COPY", "register:4018:8", ["const:2a5000:8"]]
~~~


<a id="compare-45516dabd186d48935d9f95bcb39778b"></a>

### [`00bd1168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1168.md) → [`00bd1204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1204.md) _ZN8firebase4auth21action_code_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1234",
      "incomplete_value": true,
      "site": "00bd1234",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1198",
      "incomplete_value": true,
      "site": "00bd1198",
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
            "const:8c8:8"
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
      "definition_site": "00bd1218",
      "incomplete_value": true,
      "site": "00bd1218",
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
      "definition_site": "00bd117c",
      "incomplete_value": true,
      "site": "00bd117c",
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
      "definition_site": "00bd1220",
      "incomplete_value": false,
      "site": "00bd122c",
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
            "const:fb3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1184",
      "incomplete_value": false,
      "site": "00bd1190",
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
            "const:f:8"
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
      "00bd1214",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1220",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ],
    [
      "00bd1234",
      "WRITE",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1214",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1220",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd1234",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1190 ["INT_ADD", "register:40f0:8", ["const:bd1190:8", "const:4:8"]]
- 00bd1190 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd122c ["INT_ADD", "register:40f0:8", ["const:bd122c:8", "const:4:8"]]
+ 00bd122c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1198 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00bd1198 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1234 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd1234 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1178 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00bd1178 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1214 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd1214 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d5ea3500dfb94f198eef923100b5d7ac"></a>

### [`00bd11b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd11b8.md) → [`00bd1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1254.md) _ZN8firebase4auth21action_code_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd1268",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd11ec",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd1210",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1268",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1288",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd12ac",
      "WRITE",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd11cc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8d0:8"]]
- 00bd11cc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd11cc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd1268 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9d0:8"]]
+ 00bd1268 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1268 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd11ec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:8c8:8"]]
- 00bd11ec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd11f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6b8:8"]]
- 00bd11f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0962f495471cb7399cbfb02f3d8835aa"></a>

### [`00bd1224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1224.md) → [`00bd12c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd12c0.md) _ZN8firebase4auth21action_code_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd12d8",
      "incomplete_value": true,
      "site": "00bd12d8",
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
      "definition_site": "00bd123c",
      "incomplete_value": true,
      "site": "00bd123c",
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
      "00bd12d4",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd12e0",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd12e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd1264"
      ]
    ]
  ],
  "added": [
    [
      "00bd12d4",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd12e0",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd12e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1300"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd123c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd123c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bd12d8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd12d8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bd1238 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00bd1238 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd12d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00bd12d4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd1244 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8d0:8"]]
- 00bd1244 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd1244 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd12e0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9d0:8"]]
+ 00bd12e0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd12e0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-9e1dd20fbb825f17072672bf06061e11"></a>

### [`00bd1294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1294.md) → [`00bd1330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1330.md) _ZN8firebase4auth21action_code_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1354",
      "incomplete_value": false,
      "site": "00bd1368",
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
            "const:fb3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd12b8",
      "incomplete_value": false,
      "site": "00bd12cc",
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
            "const:f:8"
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
      "unmatched:00bd12a8",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd12b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1374"
      ]
    ],
    [
      "unmatched:00bd12b8",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd1344",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd134c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1374"
      ]
    ],
    [
      "00bd1354",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd12cc ["INT_ADD", "register:40f0:8", ["const:bd12cc:8", "const:4:8"]]
- 00bd12cc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1368 ["INT_ADD", "register:40f0:8", ["const:bd1368:8", "const:4:8"]]
+ 00bd1368 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd12a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00bd12a8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd12ac ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-1a45ecf848c4de66bb392d5e7388aa36"></a>

### [`00bd1304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1304.md) → [`00bd13a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd13a0.md) _ZN8firebase4auth21action_code_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd13bc",
      "incomplete_value": false,
      "site": "00bd13c0",
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
      "definition_site": "00bd1320",
      "incomplete_value": false,
      "site": "00bd1324",
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
      "definition_site": "00bd13cc",
      "incomplete_value": true,
      "site": "00bd13d8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1330",
      "incomplete_value": true,
      "site": "00bd133c",
      "value": [
        "LOAD",
        "8",
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
      "00bd13bc",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd13cc",
      "DATA",
      [
        "storage",
        "011268d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd13bc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd13cc",
      "DATA",
      [
        "storage",
        "011269d8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1324 ["INT_ADD", "register:40f0:8", ["const:bd1324:8", "const:4:8"]]
- 00bd1324 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd13c0 ["INT_ADD", "register:40f0:8", ["const:bd13c0:8", "const:4:8"]]
+ 00bd13c0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1320 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd1320 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1320 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1320 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd13bc ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd13bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd13bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd13bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd132c ["COPY", "tmp:0:8", ["const:8d8:8"]]
- 00bd132c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd132c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd132c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd13c8 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 00bd13c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd13c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd13c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e422ce2b64ac2363fa87b351ade98e9"></a>

### [`00bd1340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1340.md) → [`00bd13dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd13dc.md) _ZN8firebase4auth21action_code_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1400",
      "incomplete_value": false,
      "site": "00bd1414",
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
            "const:fb3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1364",
      "incomplete_value": false,
      "site": "00bd1378",
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
            "const:f:8"
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
      "unmatched:00bd1354",
      "READ",
      [
        "storage",
        "011268c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd135c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1420"
      ]
    ],
    [
      "unmatched:00bd1364",
      "PARAM",
      [
        "storage",
        "002a500f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd13f0",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd13f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1420"
      ]
    ],
    [
      "00bd1400",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1378 ["INT_ADD", "register:40f0:8", ["const:bd1378:8", "const:4:8"]]
- 00bd1378 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1414 ["INT_ADD", "register:40f0:8", ["const:bd1414:8", "const:4:8"]]
+ 00bd1414 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1354 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00bd1354 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd1358 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-d1afea210ef7eaf43849c07b4b7aebfa"></a>

### [`00bd13b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd13b0.md) → [`00bd144c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd144c.md) _ZN8firebase4auth21action_code_exception10GetFieldIdENS1_5FieldE

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
      "unmatched:00bd13b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd13b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd13c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd13d4"
      ]
    ]
  ],
  "added": [
    [
      "00bd144c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd1450",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd1460",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1470"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd13b0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd13b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd13b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd13b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd13b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd13b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd13b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd13b8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd13b8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd13b8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd13b8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-26973e1c1006874fe9559e420ae214da"></a>

### [`00bd13ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd13ec.md) → [`00bd1488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1488.md) _ZN8firebase4auth15email_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd14b4",
      "incomplete_value": true,
      "site": "00bd14b4",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1418",
      "incomplete_value": true,
      "site": "00bd1418",
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
            "const:8e8:8"
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
      "definition_site": "00bd149c",
      "incomplete_value": true,
      "site": "00bd149c",
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
      "definition_site": "00bd1400",
      "incomplete_value": true,
      "site": "00bd1400",
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
      "definition_site": "00bd14a8",
      "incomplete_value": false,
      "site": "00bd14ac",
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
            "const:c37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd140c",
      "incomplete_value": false,
      "site": "00bd1410",
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
            "const:c84:8"
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
      "00bd1498",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd14a8",
      "PARAM",
      [
        "storage",
        "002a1c84",
        null,
        "string"
      ]
    ],
    [
      "00bd14b4",
      "WRITE",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1498",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd14a8",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd14b4",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1410 ["INT_ADD", "register:40f0:8", ["const:bd1410:8", "const:4:8"]]
- 00bd1410 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd14ac ["INT_ADD", "register:40f0:8", ["const:bd14ac:8", "const:4:8"]]
+ 00bd14ac ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1418 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8e8:8"]]
- 00bd1418 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd14b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd14b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd13fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8e8:8"]]
- 00bd13fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1498 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd1498 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d9a44b2ecd2796f9a9cb48475ba40692"></a>

### [`00bd142c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd142c.md) → [`00bd14c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd14c8.md) _ZN8firebase4auth15email_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd14f4",
      "incomplete_value": true,
      "site": "00bd14f4",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1458",
      "incomplete_value": true,
      "site": "00bd1458",
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
            "const:8e8:8"
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
      "definition_site": "00bd14dc",
      "incomplete_value": true,
      "site": "00bd14dc",
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
      "definition_site": "00bd1440",
      "incomplete_value": true,
      "site": "00bd1440",
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
      "definition_site": "00bd14e4",
      "incomplete_value": false,
      "site": "00bd14ec",
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
            "const:c37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1448",
      "incomplete_value": false,
      "site": "00bd1450",
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
            "const:c84:8"
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
      "00bd14d8",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd14e4",
      "PARAM",
      [
        "storage",
        "002a1c84",
        null,
        "string"
      ]
    ],
    [
      "00bd14f4",
      "WRITE",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd14d8",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd14e4",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd14f4",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1450 ["INT_ADD", "register:40f0:8", ["const:bd1450:8", "const:4:8"]]
- 00bd1450 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd14ec ["INT_ADD", "register:40f0:8", ["const:bd14ec:8", "const:4:8"]]
+ 00bd14ec ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1458 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8e8:8"]]
- 00bd1458 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd14f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd14f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd143c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8e8:8"]]
- 00bd143c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd14d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd14d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9be81ba41c10d81b51d8c2e5faf9d2e6"></a>

### [`00bd146c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd146c.md) → [`00bd1508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1508.md) _ZN8firebase4auth15email_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd151c",
      "incomplete_value": true,
      "site": "00bd151c",
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
      "definition_site": "00bd1480",
      "incomplete_value": true,
      "site": "00bd1480",
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
      "unmatched:00bd146c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd1470",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd1518",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1508",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd150c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd1518",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1480 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd1480 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd151c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd151c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd146c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd146c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd146c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd1470 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd1470 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd1470 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd1470 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-23e78831e598b6bee6fc69764e90c186"></a>

### [`00bd14b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd14b0.md) → [`00bd154c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd154c.md) _ZN8firebase4auth15email_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd1568",
      "incomplete_value": false,
      "site": "00bd1574",
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
            "const:c37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd14cc",
      "incomplete_value": false,
      "site": "00bd14d8",
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
            "const:c84:8"
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
      "unmatched:00bd14b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd14b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd14c0",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd154c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd1550",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd155c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd14d8 ["INT_ADD", "register:40f0:8", ["const:bd14d8:8", "const:4:8"]]
- 00bd14d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1574 ["INT_ADD", "register:40f0:8", ["const:bd1574:8", "const:4:8"]]
+ 00bd1574 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd14b0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd14b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd14b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd14b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd14b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd14b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd14b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-68681b6aab038154d6c818b3e3cacbfb"></a>

### [`00bd1500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1500.md) → [`00bd159c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd159c.md) _ZN8firebase4auth15email_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd15f4",
      "incomplete_value": true,
      "site": "00bd15f4",
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
    "old": {
      "definition_site": "00bd1558",
      "incomplete_value": true,
      "site": "00bd1558",
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
            "const:8f0:8"
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
      "definition_site": "00bd15d0",
      "incomplete_value": true,
      "site": "00bd15dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1534",
      "incomplete_value": true,
      "site": "00bd1540",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8e8:8"
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
      "00bd15b0",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd15d0",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd15f4",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd15b0",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd15d0",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd15f4",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1540 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1540 ["INT_ADD", "register:40f0:8", ["const:bd1540:8", "const:4:8"]]
- 00bd1540 ["CALLIND", null, ["register:0:8"]]
+ 00bd15dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd15dc ["INT_ADD", "register:40f0:8", ["const:bd15dc:8", "const:4:8"]]
+ 00bd15dc ["CALLIND", null, ["register:0:8"]]
- 00bd1558 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd1558 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8f0:8"]]
- 00bd1558 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd15f4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd15f4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9f0:8"]]
+ 00bd15f4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd1514 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8f0:8"]]
- 00bd1514 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd1514 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd15b0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9f0:8"]]
+ 00bd15b0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd15b0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-ba2d8373cef28f8c35873efe02032bb2"></a>

### [`00bd156c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd156c.md) → [`00bd1608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1608.md) _ZN8firebase4auth15email_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd1620",
      "incomplete_value": true,
      "site": "00bd1620",
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
      "definition_site": "00bd1584",
      "incomplete_value": true,
      "site": "00bd1584",
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
      "00bd161c",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1628",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1630",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd15ac"
      ]
    ]
  ],
  "added": [
    [
      "00bd161c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1628",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1630",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1648"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1580 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8e8:8"]]
- 00bd1580 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd161c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd161c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd158c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8f0:8"]]
- 00bd158c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd158c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd1628 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9f0:8"]]
+ 00bd1628 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1628 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd1594 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd1594 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd1630 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd1630 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-c1aa6f932b9d42997d19b5966381c9d0"></a>

### [`00bd15dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd15dc.md) → [`00bd1678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1678.md) _ZN8firebase4auth15email_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd16b8",
      "incomplete_value": true,
      "site": "00bd16b8",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd161c",
      "incomplete_value": true,
      "site": "00bd161c",
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
            "const:8e8:8"
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
      "definition_site": "00bd1694",
      "incomplete_value": true,
      "site": "00bd1694",
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
      "definition_site": "00bd15f8",
      "incomplete_value": true,
      "site": "00bd15f8",
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
      "definition_site": "00bd169c",
      "incomplete_value": false,
      "site": "00bd16b0",
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
            "const:c37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1600",
      "incomplete_value": false,
      "site": "00bd1614",
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
            "const:c84:8"
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
      "00bd168c",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd169c",
      "PARAM",
      [
        "storage",
        "002a1c84",
        null,
        "string"
      ]
    ],
    [
      "00bd16b8",
      "WRITE",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd168c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd169c",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd16b8",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1614 ["INT_ADD", "register:40f0:8", ["const:bd1614:8", "const:4:8"]]
- 00bd1614 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd16b0 ["INT_ADD", "register:40f0:8", ["const:bd16b0:8", "const:4:8"]]
+ 00bd16b0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd161c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8e8:8"]]
- 00bd161c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd16b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd16b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd15f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8e8:8"]]
- 00bd15f0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd168c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd168c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1228260bef2a8932f718d7cfa0bd6bac"></a>

### [`00bd164c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd164c.md) → [`00bd16e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd16e8.md) _ZN8firebase4auth15email_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd1704",
      "incomplete_value": false,
      "site": "00bd1708",
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
      "definition_site": "00bd1668",
      "incomplete_value": false,
      "site": "00bd166c",
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
      "definition_site": "00bd1714",
      "incomplete_value": true,
      "site": "00bd1720",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1678",
      "incomplete_value": true,
      "site": "00bd1684",
      "value": [
        "LOAD",
        "8",
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
      "00bd1704",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd1714",
      "DATA",
      [
        "storage",
        "011268f8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1704",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd1714",
      "DATA",
      [
        "storage",
        "011269f8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd166c ["INT_ADD", "register:40f0:8", ["const:bd166c:8", "const:4:8"]]
- 00bd166c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1708 ["INT_ADD", "register:40f0:8", ["const:bd1708:8", "const:4:8"]]
+ 00bd1708 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1668 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd1668 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1668 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1668 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1704 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd1704 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1704 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1704 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1674 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 00bd1674 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1674 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1674 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd1710 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 00bd1710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7c5b290abe01e948a2452271538678af"></a>

### [`00bd1688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1688.md) → [`00bd1724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1724.md) _ZN8firebase4auth15email_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1764",
      "incomplete_value": true,
      "site": "00bd1764",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd16c8",
      "incomplete_value": true,
      "site": "00bd16c8",
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
            "const:8e8:8"
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
      "definition_site": "00bd1740",
      "incomplete_value": true,
      "site": "00bd1740",
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
      "definition_site": "00bd16a4",
      "incomplete_value": true,
      "site": "00bd16a4",
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
      "definition_site": "00bd1748",
      "incomplete_value": false,
      "site": "00bd175c",
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
            "const:c37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd16ac",
      "incomplete_value": false,
      "site": "00bd16c0",
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
            "const:c84:8"
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
      "00bd1738",
      "READ",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1748",
      "PARAM",
      [
        "storage",
        "002a1c84",
        null,
        "string"
      ]
    ],
    [
      "00bd1764",
      "WRITE",
      [
        "storage",
        "011268e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1738",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1748",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd1764",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd16c0 ["INT_ADD", "register:40f0:8", ["const:bd16c0:8", "const:4:8"]]
- 00bd16c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd175c ["INT_ADD", "register:40f0:8", ["const:bd175c:8", "const:4:8"]]
+ 00bd175c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd16c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8e8:8"]]
- 00bd16c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1764 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd1764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd169c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8e8:8"]]
- 00bd169c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1738 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd1738 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c81b5423ea397b10461d99aff3e459f9"></a>

### [`00bd16f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd16f8.md) → [`00bd1794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1794.md) _ZN8firebase4auth15email_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd17b0",
      "incomplete_value": false,
      "site": "00bd17b4",
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
      "definition_site": "00bd1714",
      "incomplete_value": false,
      "site": "00bd1718",
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
      "definition_site": "00bd17c0",
      "incomplete_value": true,
      "site": "00bd17cc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1724",
      "incomplete_value": true,
      "site": "00bd1730",
      "value": [
        "LOAD",
        "8",
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
      "00bd17b0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd17c0",
      "DATA",
      [
        "storage",
        "01126900",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd17b0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd17c0",
      "DATA",
      [
        "storage",
        "01126a00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1718 ["INT_ADD", "register:40f0:8", ["const:bd1718:8", "const:4:8"]]
- 00bd1718 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd17b4 ["INT_ADD", "register:40f0:8", ["const:bd17b4:8", "const:4:8"]]
+ 00bd17b4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1714 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd1714 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1714 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1714 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd17b0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd17b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd17b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd17b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1720 ["COPY", "tmp:0:8", ["const:900:8"]]
- 00bd1720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd17bc ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 00bd17bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd17bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd17bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c97fc333f3884cf886e4be802d4600d1"></a>

### [`00bd1734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1734.md) → [`00bd17d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd17d0.md) _ZN8firebase4auth23weak_password_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd17fc",
      "incomplete_value": true,
      "site": "00bd17fc",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1760",
      "incomplete_value": true,
      "site": "00bd1760",
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
            "const:908:8"
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
      "definition_site": "00bd17e4",
      "incomplete_value": true,
      "site": "00bd17e4",
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
      "definition_site": "00bd1748",
      "incomplete_value": true,
      "site": "00bd1748",
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
      "definition_site": "00bd17f0",
      "incomplete_value": false,
      "site": "00bd17f4",
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
            "const:50e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1754",
      "incomplete_value": false,
      "site": "00bd1758",
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
            "const:56a:8"
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
      "00bd17e0",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17f0",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd17fc",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd17e0",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17f0",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd17fc",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1758 ["INT_ADD", "register:40f0:8", ["const:bd1758:8", "const:4:8"]]
- 00bd1758 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd17f4 ["INT_ADD", "register:40f0:8", ["const:bd17f4:8", "const:4:8"]]
+ 00bd17f4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1760 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd1760 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd17fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd17fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1744 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd1744 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd17e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd17e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0c990a697d5e04eb80309cbf84e54159"></a>

### [`00bd1774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1774.md) → [`00bd1810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1810.md) _ZN8firebase4auth23weak_password_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd183c",
      "incomplete_value": true,
      "site": "00bd183c",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd17a0",
      "incomplete_value": true,
      "site": "00bd17a0",
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
            "const:908:8"
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
      "definition_site": "00bd1824",
      "incomplete_value": true,
      "site": "00bd1824",
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
      "definition_site": "00bd1788",
      "incomplete_value": true,
      "site": "00bd1788",
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
      "definition_site": "00bd182c",
      "incomplete_value": false,
      "site": "00bd1834",
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
            "const:50e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1790",
      "incomplete_value": false,
      "site": "00bd1798",
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
            "const:56a:8"
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
      "00bd1820",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd182c",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd183c",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1820",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd182c",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd183c",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1798 ["INT_ADD", "register:40f0:8", ["const:bd1798:8", "const:4:8"]]
- 00bd1798 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1834 ["INT_ADD", "register:40f0:8", ["const:bd1834:8", "const:4:8"]]
+ 00bd1834 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd17a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd17a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd183c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd183c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1784 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd1784 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1820 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd1820 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


