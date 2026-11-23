# v16.0.1 → v16.0.2 · 最優先の変更候補 (79)

[一覧の目次](README.md)

<a id="compare-5d16cc48a8bf075eb69410a905a62064"></a>

### [`00b489dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b489dc.md) → [`00b48a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48a78.md) _ZN8firebase4util15character_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b489ec",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b489f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48aa8"
      ]
    ],
    [
      "unmatched:00b489fc",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b48a88",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48a8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48aa8"
      ]
    ],
    [
      "00b48a98",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b489ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b489ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b489f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b489f0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b489f4 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-639a83dcf8f6b5a9443c13e3a02b5434"></a>

### [`00b48a1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48a1c.md) → [`00b48ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ab8.md) _ZN8firebase4util15character_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48acc",
      "incomplete_value": true,
      "site": "00b48acc",
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
      "definition_site": "00b48a30",
      "incomplete_value": true,
      "site": "00b48a30",
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
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b48a50",
      "incomplete_value": true,
      "site": "00b48a58",
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
      "00b48ac8",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b48a38",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b48a40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b48ac8",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ad4",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b48adc",
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
- 00b48a30 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b48a30 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b48acc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b48acc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b48a2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b48a2c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48ac8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
+ 00b48ac8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48a38 ["COPY", "tmp:0:8", ["const:df9:8"]]
- 00b48a38 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b48a38 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b48a38 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-66462a0db92de9594f5abe74d38f6fd9"></a>

### [`00b48a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48a5c.md) → [`00b48af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48af8.md) _ZN8firebase4util15character_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b48b0c",
      "incomplete_value": true,
      "site": "00b48b0c",
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
      "definition_site": "00b48a70",
      "incomplete_value": true,
      "site": "00b48a70",
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
      "00b48b08",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b48a90"
      ]
    ],
    [
      "unmatched:00b48a7c",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b48b08",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48b2c"
      ]
    ],
    [
      "00b48b18",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48a6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b48a6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48b08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
+ 00b48b08 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48a7c ["COPY", "tmp:0:8", ["const:df9:8"]]
- 00b48a7c ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b48a7c ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b48a7c ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00b48a80 ["COPY", "register:4010:8", ["const:0:8"]]
~~~


<a id="compare-9d336297903836b7b75b5b4f986a756f"></a>

### [`00b48aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48aa0.md) → [`00b48b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48b3c.md) _ZN8firebase4util15character_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48b6c",
      "incomplete_value": true,
      "site": "00b48b6c",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ad0",
      "incomplete_value": true,
      "site": "00b48ad0",
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
            "const:930:8"
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
      "definition_site": "00b48b50",
      "incomplete_value": true,
      "site": "00b48b50",
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
      "definition_site": "00b48ab4",
      "incomplete_value": true,
      "site": "00b48ab4",
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
      "definition_site": "00b48b58",
      "incomplete_value": false,
      "site": "00b48b64",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48abc",
      "incomplete_value": false,
      "site": "00b48ac8",
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
            "const:df9:8"
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
      "00b48b4c",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b58",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ],
    [
      "00b48b6c",
      "WRITE",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48b4c",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b58",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b48b6c",
      "WRITE",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48ac8 ["INT_ADD", "register:40f0:8", ["const:b48ac8:8", "const:4:8"]]
- 00b48ac8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b48b64 ["INT_ADD", "register:40f0:8", ["const:b48b64:8", "const:4:8"]]
+ 00b48b64 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48ad0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b48ad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48b6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
+ 00b48b6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48ab0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b48ab0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48b4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
+ 00b48b4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a6ff3b543830e9f503ceae5586056a8e"></a>

### [`00b48af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48af0.md) → [`00b48b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48b8c.md) _ZN8firebase4util15character_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b48c14",
      "incomplete_value": true,
      "site": "00b48c14",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b78",
      "incomplete_value": true,
      "site": "00b48b78",
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
            "const:938:8"
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
      "definition_site": "00b48bc0",
      "incomplete_value": true,
      "site": "00b48bcc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b24",
      "incomplete_value": true,
      "site": "00b48b30",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:930:8"
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
      "00b48ba0",
      "READ",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48bc0",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c14",
      "WRITE",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48ba0",
      "READ",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48bc0",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c14",
      "WRITE",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48b30 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48b30 ["INT_ADD", "register:40f0:8", ["const:b48b30:8", "const:4:8"]]
- 00b48b30 ["CALLIND", null, ["register:0:8"]]
+ 00b48bcc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48bcc ["INT_ADD", "register:40f0:8", ["const:b48bcc:8", "const:4:8"]]
+ 00b48bcc ["CALLIND", null, ["register:0:8"]]
- 00b48b78 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b48b78 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:938:8"]]
- 00b48b78 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b48c14 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b48c14 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a38:8"]]
+ 00b48c14 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b48b04 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:938:8"]]
- 00b48b04 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b48b04 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b48ba0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 00b48ba0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b48ba0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-31e79f9351127704eb2c083242dcce2f"></a>

### [`00b48b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48b8c.md) → [`00b48c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48c28.md) _ZN8firebase4util15character_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b48c64",
      "incomplete_value": true,
      "site": "00b48c64",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48bc8",
      "incomplete_value": true,
      "site": "00b48bc8",
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
            "const:938:8"
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
      "definition_site": "00b48cb4",
      "incomplete_value": true,
      "site": "00b48cb4",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48c18",
      "incomplete_value": true,
      "site": "00b48c18",
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
            "const:930:8"
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
      "definition_site": "00b48c40",
      "incomplete_value": true,
      "site": "00b48c40",
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
      "definition_site": "00b48ba4",
      "incomplete_value": true,
      "site": "00b48ba4",
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
      "00b48c3c",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c48",
      "READ",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48c64",
      "WRITE",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48c3c",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c48",
      "READ",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48c64",
      "WRITE",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48ba4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b48ba4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b48c40 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b48c40 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b48bc8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b48bc8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b48bc8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:938:8"]]
- 00b48bc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b48c64 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b48c64 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b48c64 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a38:8"]]
+ 00b48c64 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b48c14 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48c14 ["INT_ADD", "register:40f0:8", ["const:b48c14:8", "const:4:8"]]
- 00b48c14 ["CALLIND", null, ["register:0:8"]]
+ 00b48cb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48cb0 ["INT_ADD", "register:40f0:8", ["const:b48cb0:8", "const:4:8"]]
+ 00b48cb0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4e074f7dddc700a483b1d66e62f962be"></a>

### [`00b48c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48c2c.md) → [`00b48cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48cc8.md) _ZN8firebase4util15character_class14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48cec",
      "incomplete_value": false,
      "site": "00b48d00",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48c50",
      "incomplete_value": false,
      "site": "00b48c64",
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
            "const:df9:8"
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
      "unmatched:00b48c40",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b48c48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48d0c"
      ]
    ],
    [
      "unmatched:00b48c50",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b48cdc",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ce4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48d0c"
      ]
    ],
    [
      "00b48cec",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48c64 ["INT_ADD", "register:40f0:8", ["const:b48c64:8", "const:4:8"]]
- 00b48c64 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b48d00 ["INT_ADD", "register:40f0:8", ["const:b48d00:8", "const:4:8"]]
+ 00b48d00 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48c40 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:930:8"]]
- 00b48c40 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48c44 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-e67b3176c7ba01cecba67d6f4b9e4f58"></a>

### [`00b48c9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48c9c.md) → [`00b48d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48d38.md) _ZN8firebase4util15character_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b48d54",
      "incomplete_value": false,
      "site": "00b48d58",
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
      "definition_site": "00b48cb8",
      "incomplete_value": false,
      "site": "00b48cbc",
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
      "definition_site": "00b48d64",
      "incomplete_value": true,
      "site": "00b48d70",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b48cc8",
      "incomplete_value": true,
      "site": "00b48cd4",
      "value": [
        "LOAD",
        "8",
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
      "00b48d54",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b48d64",
      "DATA",
      [
        "storage",
        "01125940",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b48d54",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b48d64",
      "DATA",
      [
        "storage",
        "01125a40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48cbc ["INT_ADD", "register:40f0:8", ["const:b48cbc:8", "const:4:8"]]
- 00b48cbc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b48d58 ["INT_ADD", "register:40f0:8", ["const:b48d58:8", "const:4:8"]]
+ 00b48d58 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b48cb8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b48cb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48cb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48cb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48d54 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b48d54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48d54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48d54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48cc4 ["COPY", "tmp:0:8", ["const:940:8"]]
- 00b48cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b48cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b48cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b48d60 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 00b48d60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b48d60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b48d60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9efb2e943594f274ee032cc0ec30f541"></a>

### [`00b48cd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48cd8.md) → [`00b48d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48d74.md) _ZN8firebase4util15character_class13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b48d00",
      "incomplete_value": true,
      "site": "00b48d10",
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
      "definition_site": "00b48d04",
      "incomplete_value": true,
      "site": "00b48d10",
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
      "definition_site": "00b48d08",
      "incomplete_value": false,
      "site": "00b48d10",
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
      "unmatched:00b48cec",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b48cf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48db8"
      ]
    ],
    [
      "unmatched:00b48cfc",
      "PARAM",
      [
        "storage",
        "002bbdf9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b48d88",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48d90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48db8"
      ]
    ],
    [
      "00b48d98",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48d10 ["INT_ADD", "register:40f0:8", ["const:b48d10:8", "const:4:8"]]
- 00b48d10 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b48dac ["INT_ADD", "register:40f0:8", ["const:b48dac:8", "const:4:8"]]
+ 00b48dac ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48cec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:930:8"]]
- 00b48cec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48cf0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-4a342a2c632085c75b0f4b011bc61cda"></a>

### [`00b48d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48d48.md) → [`00b48de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48de4.md) _ZN8firebase4util15character_class10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48df8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b48d6c"
      ]
    ],
    [
      "unmatched:00b48d64",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b48d68",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b48df8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48e08"
      ]
    ],
    [
      "00b48e00",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b48e04",
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
- 00b48d5c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b48d5c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b48df8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b48df8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b48d64 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b48d64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48d64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48d64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48d68 ["INT_ADD", "register:40f0:8", ["const:b48d68:8", "const:4:8"]]
- 00b48d68 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-53e876d53354f785f4f6036735119ec7"></a>

### [`00b48d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48d84.md) → [`00b48e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48e20.md) _ZN8firebase4util11class_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b48e34",
      "incomplete_value": true,
      "site": "00b48e34",
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
      "definition_site": "00b48d98",
      "incomplete_value": true,
      "site": "00b48d98",
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
      "00b48e30",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b48da4",
      "PARAM",
      [
        "storage",
        "002a840e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b48da8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b48e30",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48e40",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b48e44",
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
- 00b48d98 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b48d98 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b48e34 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b48e34 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b48d94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48d94 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48e30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48e30 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48da4 ["COPY", "tmp:0:8", ["const:40e:8"]]
- 00b48da4 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b48da4 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b48da4 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-58315910595a458f86b19b5d6929c154"></a>

### [`00b48dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48dc4.md) → [`00b48e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48e60.md) _ZN8firebase4util11class_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48e70",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b48dd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48e90"
      ]
    ],
    [
      "unmatched:00b48de0",
      "PARAM",
      [
        "storage",
        "002a840e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b48e70",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48e74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b48e90"
      ]
    ],
    [
      "00b48e7c",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48dd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48dd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48e70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48e70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b48dd8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b48dd8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b48ddc ["COPY", "register:4018:8", ["const:2a8000:8"]]
~~~


<a id="compare-143aa6763a6783b8823f2112140b0658"></a>

### [`00b48e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48e04.md) → [`00b48ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ea0.md) _ZN8firebase4util11class_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b48ed0",
      "incomplete_value": true,
      "site": "00b48ed0",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e34",
      "incomplete_value": true,
      "site": "00b48e34",
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
            "const:958:8"
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
      "definition_site": "00b48eb4",
      "incomplete_value": true,
      "site": "00b48eb4",
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
      "definition_site": "00b48e18",
      "incomplete_value": true,
      "site": "00b48e18",
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
      "definition_site": "00b48ec0",
      "incomplete_value": false,
      "site": "00b48ec8",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e24",
      "incomplete_value": false,
      "site": "00b48e2c",
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
            "const:40e:8"
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
      "00b48eb0",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ec0",
      "PARAM",
      [
        "storage",
        "002a840e",
        null,
        "string"
      ]
    ],
    [
      "00b48ed0",
      "WRITE",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48eb0",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ec0",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b48ed0",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48e2c ["INT_ADD", "register:40f0:8", ["const:b48e2c:8", "const:4:8"]]
- 00b48e2c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b48ec8 ["INT_ADD", "register:40f0:8", ["const:b48ec8:8", "const:4:8"]]
+ 00b48ec8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48e34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48e34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48ed0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48ed0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48e14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48e14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48eb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48eb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f01aebc3da4c553a6b4f10ec4f7f95a7"></a>

### [`00b48e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48e48.md) → [`00b48ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ee4.md) _ZN8firebase4util11class_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48f14",
      "incomplete_value": true,
      "site": "00b48f14",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e78",
      "incomplete_value": true,
      "site": "00b48e78",
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
            "const:958:8"
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
      "definition_site": "00b48ef8",
      "incomplete_value": true,
      "site": "00b48ef8",
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
      "definition_site": "00b48e5c",
      "incomplete_value": true,
      "site": "00b48e5c",
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
      "definition_site": "00b48f00",
      "incomplete_value": false,
      "site": "00b48f0c",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e64",
      "incomplete_value": false,
      "site": "00b48e70",
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
            "const:40e:8"
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
      "00b48ef4",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48f00",
      "PARAM",
      [
        "storage",
        "002a840e",
        null,
        "string"
      ]
    ],
    [
      "00b48f14",
      "WRITE",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48ef4",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48f00",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b48f14",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48e70 ["INT_ADD", "register:40f0:8", ["const:b48e70:8", "const:4:8"]]
- 00b48e70 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b48f0c ["INT_ADD", "register:40f0:8", ["const:b48f0c:8", "const:4:8"]]
+ 00b48f0c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48e78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48e78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48f14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48f14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48e58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:958:8"]]
- 00b48e58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48ef4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
+ 00b48ef4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f91e2afda6463136a0334ca0ff68d72a"></a>

### [`00b48e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48e98.md) → [`00b48f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48f34.md) _ZN8firebase4util11class_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b48fbc",
      "incomplete_value": true,
      "site": "00b48fbc",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48f20",
      "incomplete_value": true,
      "site": "00b48f20",
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
            "const:960:8"
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
      "definition_site": "00b48f68",
      "incomplete_value": true,
      "site": "00b48f74",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ecc",
      "incomplete_value": true,
      "site": "00b48ed8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:958:8"
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
      "00b48f48",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48f68",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48fbc",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48f48",
      "READ",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48f68",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48fbc",
      "WRITE",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48ed8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48ed8 ["INT_ADD", "register:40f0:8", ["const:b48ed8:8", "const:4:8"]]
- 00b48ed8 ["CALLIND", null, ["register:0:8"]]
+ 00b48f74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48f74 ["INT_ADD", "register:40f0:8", ["const:b48f74:8", "const:4:8"]]
+ 00b48f74 ["CALLIND", null, ["register:0:8"]]
- 00b48f20 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b48f20 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:960:8"]]
- 00b48f20 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b48fbc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b48fbc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a60:8"]]
+ 00b48fbc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b48eac ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:960:8"]]
- 00b48eac ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b48eac ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b48f48 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a60:8"]]
+ 00b48f48 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b48f48 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-113a8aeed73582ee1b026666ae57ad0a"></a>

### [`00b48f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48f34.md) → [`00b48fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48fd0.md) _ZN8firebase4util11class_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4900c",
      "incomplete_value": true,
      "site": "00b4900c",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48f70",
      "incomplete_value": true,
      "site": "00b48f70",
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
            "const:960:8"
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
      "definition_site": "00b4905c",
      "incomplete_value": true,
      "site": "00b4905c",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48fc0",
      "incomplete_value": true,
      "site": "00b48fc0",
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
            "const:958:8"
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
      "definition_site": "00b48fe8",
      "incomplete_value": true,
      "site": "00b48fe8",
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
      "definition_site": "00b48f4c",
      "incomplete_value": true,
      "site": "00b48f4c",
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
      "00b48fe4",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ff0",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4900c",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48fe4",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48ff0",
      "READ",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4900c",
      "WRITE",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48f4c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b48f4c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b48fe8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b48fe8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00b48f70 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b48f70 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b48f70 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:960:8"]]
- 00b48f70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4900c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4900c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4900c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a60:8"]]
+ 00b4900c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b48fbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48fbc ["INT_ADD", "register:40f0:8", ["const:b48fbc:8", "const:4:8"]]
- 00b48fbc ["CALLIND", null, ["register:0:8"]]
+ 00b49058 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49058 ["INT_ADD", "register:40f0:8", ["const:b49058:8", "const:4:8"]]
+ 00b49058 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4726d8a6a6f73650a4fcab2454e4367d"></a>

### [`00b48fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b48/00b48fd4.md) → [`00b49070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49070.md) _ZN8firebase4util11class_class14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49094",
      "incomplete_value": true,
      "site": "00b490a8",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ff8",
      "incomplete_value": false,
      "site": "00b4900c",
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
            "const:40e:8"
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
      "unmatched:00b48fd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b48fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b48fe8",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49070",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49074",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49084",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4900c ["INT_ADD", "register:40f0:8", ["const:b4900c:8", "const:4:8"]]
- 00b4900c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b490a8 ["INT_ADD", "register:40f0:8", ["const:b490a8:8", "const:4:8"]]
+ 00b490a8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b48fd4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b48fd4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b48fd4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b48fd4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b48fd8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b48fd8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b48fd8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b48fd8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c99812e8eaa98b5e4400ea9030063e85"></a>

### [`00b49044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49044.md) → [`00b490e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b490e0.md) _ZN8firebase4util11class_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b490fc",
      "incomplete_value": false,
      "site": "00b49100",
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
      "definition_site": "00b49060",
      "incomplete_value": false,
      "site": "00b49064",
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
      "definition_site": "00b4910c",
      "incomplete_value": true,
      "site": "00b49118",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b49070",
      "incomplete_value": true,
      "site": "00b4907c",
      "value": [
        "LOAD",
        "8",
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
      "00b490fc",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4910c",
      "DATA",
      [
        "storage",
        "01125968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b490fc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4910c",
      "DATA",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49064 ["INT_ADD", "register:40f0:8", ["const:b49064:8", "const:4:8"]]
- 00b49064 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b49100 ["INT_ADD", "register:40f0:8", ["const:b49100:8", "const:4:8"]]
+ 00b49100 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b49060 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b49060 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49060 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49060 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b490fc ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b490fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b490fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b490fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4906c ["COPY", "tmp:0:8", ["const:968:8"]]
- 00b4906c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4906c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4906c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b49108 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00b49108 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49108 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49108 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb25a9262184101c9851346352dafcb2"></a>

### [`00b49080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49080.md) → [`00b4911c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4911c.md) _ZN8firebase4util11class_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4915c",
      "incomplete_value": true,
      "site": "00b4915c",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b490c0",
      "incomplete_value": true,
      "site": "00b490c0",
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
            "const:958:8"
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
      "definition_site": "00b49138",
      "incomplete_value": true,
      "site": "00b49138",
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
      "definition_site": "00b4909c",
      "incomplete_value": true,
      "site": "00b4909c",
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
      "definition_site": "00b49140",
      "incomplete_value": false,
      "site": "00b49154",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b490a4",
      "incomplete_value": false,
      "site": "00b490b8",
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
            "const:40e:8"
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
      "00b49130",
      "READ",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49140",
      "PARAM",
      [
        "storage",
        "002a840e",
        null,
        "string"
      ]
    ],
    [
      "00b4915c",
      "WRITE",
      [
        "storage",
        "01125958",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49130",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49140",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b4915c",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b490b8 ["INT_ADD", "register:40f0:8", ["const:b490b8:8", "const:4:8"]]
- 00b490b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49154 ["INT_ADD", "register:40f0:8", ["const:b49154:8", "const:4:8"]]
+ 00b49154 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b490c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:958:8"]]
- 00b490c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4915c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a58:8"]]
+ 00b4915c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49094 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:958:8"]]
- 00b49094 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49130 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a58:8"]]
+ 00b49130 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4165e52c6d9ccba3052aaf6cf30add45"></a>

### [`00b490f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b490f0.md) → [`00b4918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4918c.md) _ZN8firebase4util11class_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b491a8",
      "incomplete_value": false,
      "site": "00b491ac",
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
      "definition_site": "00b4910c",
      "incomplete_value": false,
      "site": "00b49110",
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
      "definition_site": "00b491b8",
      "incomplete_value": true,
      "site": "00b491c4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4911c",
      "incomplete_value": true,
      "site": "00b49128",
      "value": [
        "LOAD",
        "8",
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
      "00b491a8",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b491b8",
      "DATA",
      [
        "storage",
        "01125978",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b491a8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b491b8",
      "DATA",
      [
        "storage",
        "01125a78",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49110 ["INT_ADD", "register:40f0:8", ["const:b49110:8", "const:4:8"]]
- 00b49110 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b491ac ["INT_ADD", "register:40f0:8", ["const:b491ac:8", "const:4:8"]]
+ 00b491ac ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4910c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4910c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4910c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4910c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b491a8 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b491a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b491a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b491a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49118 ["COPY", "tmp:0:8", ["const:978:8"]]
- 00b49118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b49118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b49118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b491b4 ["COPY", "tmp:0:8", ["const:a78:8"]]
+ 00b491b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b491b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b491b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0df1f0a4db3f326824ba51162fc9395e"></a>

### [`00b4912c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b4912c.md) → [`00b491c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b491c8.md) _ZN8firebase4util16content_resolver19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b491f4",
      "incomplete_value": true,
      "site": "00b491f4",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49158",
      "incomplete_value": true,
      "site": "00b49158",
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
            "const:980:8"
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
      "definition_site": "00b491dc",
      "incomplete_value": true,
      "site": "00b491dc",
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
      "definition_site": "00b49140",
      "incomplete_value": true,
      "site": "00b49140",
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
      "definition_site": "00b491e8",
      "incomplete_value": false,
      "site": "00b491ec",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4914c",
      "incomplete_value": false,
      "site": "00b49150",
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
            "const:33f:8"
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
      "00b491d8",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b491e8",
      "PARAM",
      [
        "storage",
        "002af33f",
        null,
        "string"
      ]
    ],
    [
      "00b491f4",
      "WRITE",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b491d8",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b491e8",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b491f4",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49150 ["INT_ADD", "register:40f0:8", ["const:b49150:8", "const:4:8"]]
- 00b49150 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b491ec ["INT_ADD", "register:40f0:8", ["const:b491ec:8", "const:4:8"]]
+ 00b491ec ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49158 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b49158 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b491f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
+ 00b491f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4913c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b4913c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b491d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
+ 00b491d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4e4e31ad719a7b16fbcf515863758150"></a>

### [`00b4916c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b4916c.md) → [`00b49208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49208.md) _ZN8firebase4util16content_resolver19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b4921c",
      "incomplete_value": true,
      "site": "00b4921c",
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
      "definition_site": "00b49180",
      "incomplete_value": true,
      "site": "00b49180",
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
      "unmatched:00b4916c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49170",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49218",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49208",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4920c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49218",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49180 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b49180 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b4921c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b4921c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b4916c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b4916c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4916c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49170 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b49170 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b49170 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49170 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-75bbe150779c3f1a963c9f25e9ad24f4"></a>

### [`00b491ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b491ac.md) → [`00b49248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49248.md) _ZN8firebase4util16content_resolver10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49278",
      "incomplete_value": true,
      "site": "00b49278",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b491dc",
      "incomplete_value": true,
      "site": "00b491dc",
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
            "const:980:8"
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
      "definition_site": "00b4925c",
      "incomplete_value": true,
      "site": "00b4925c",
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
      "definition_site": "00b491c0",
      "incomplete_value": true,
      "site": "00b491c0",
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
      "definition_site": "00b49268",
      "incomplete_value": false,
      "site": "00b49270",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b491cc",
      "incomplete_value": false,
      "site": "00b491d4",
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
            "const:33f:8"
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
      "00b49258",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49268",
      "PARAM",
      [
        "storage",
        "002af33f",
        null,
        "string"
      ]
    ],
    [
      "00b49278",
      "WRITE",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49258",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49268",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b49278",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b491d4 ["INT_ADD", "register:40f0:8", ["const:b491d4:8", "const:4:8"]]
- 00b491d4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49270 ["INT_ADD", "register:40f0:8", ["const:b49270:8", "const:4:8"]]
+ 00b49270 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b491dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b491dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49278 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
+ 00b49278 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b491bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b491bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49258 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
+ 00b49258 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7bbf21b37cd18c9af9243331b83b1f1b"></a>

### [`00b491f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b491f0.md) → [`00b4928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4928c.md) _ZN8firebase4util16content_resolver10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b492a0",
      "incomplete_value": true,
      "site": "00b492a0",
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
      "definition_site": "00b49204",
      "incomplete_value": true,
      "site": "00b49204",
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
      "definition_site": "00b492a8",
      "incomplete_value": false,
      "site": "00b492b4",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4920c",
      "incomplete_value": false,
      "site": "00b49218",
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
            "const:33f:8"
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
      "00b4929c",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b492a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49224"
      ]
    ],
    [
      "unmatched:00b4920c",
      "PARAM",
      [
        "storage",
        "002af33f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4929c",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b492a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b492c0"
      ]
    ],
    [
      "00b492a8",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49218 ["INT_ADD", "register:40f0:8", ["const:b49218:8", "const:4:8"]]
- 00b49218 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b492b4 ["INT_ADD", "register:40f0:8", ["const:b492b4:8", "const:4:8"]]
+ 00b492b4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49200 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b49200 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4929c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
+ 00b4929c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4920c ["COPY", "tmp:0:8", ["const:33f:8"]]
- 00b4920c ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b4920c ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b4920c ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-46b8688f386253bae27abf21668bc6ae"></a>

### [`00b49234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49234.md) → [`00b492d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b492d0.md) _ZN8firebase4util16content_resolver8GetClassEv

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
      "unmatched:00b49238",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b492d4",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49234 ["COPY", "register:4040:8", ["const:1125000:8"]]
- 00b49238 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:980:8"]]
- 00b49238 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4923c ["COPY", "register:0:8", ["register:40f0:8"]]
- 00b4923c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-9131ba1fa799bec4b235272047c651f7"></a>

### [`00b49240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49240.md) → [`00b492dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b492dc.md) _ZN8firebase4util16content_resolver15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 87.18% / 新版 87.18%

優先判定に残った影響 `store_destination` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b49364",
      "incomplete_value": true,
      "site": "00b49364",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b492c8",
      "incomplete_value": true,
      "site": "00b492c8",
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
            "const:988:8"
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
      "00b492f0",
      "READ",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b49274",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49364",
      "WRITE",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b492f0",
      "READ",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49310",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49364",
      "WRITE",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b492c8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b492c8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:988:8"]]
- 00b492c8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49364 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49364 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a88:8"]]
+ 00b49364 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b49254 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:988:8"]]
- 00b49254 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b49254 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b492f0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a88:8"]]
+ 00b492f0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b492f0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b49260 ["BRANCH", null, ["local:b7:8"]]
+ 00b492fc ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-54216b36c861f74d43ad624ef8665332"></a>

### [`00b492dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b492dc.md) → [`00b49378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49378.md) _ZN8firebase4util16content_resolver12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b493b4",
      "incomplete_value": true,
      "site": "00b493b4",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49318",
      "incomplete_value": true,
      "site": "00b49318",
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
            "const:988:8"
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
      "definition_site": "00b49404",
      "incomplete_value": true,
      "site": "00b49404",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49368",
      "incomplete_value": true,
      "site": "00b49368",
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
            "const:980:8"
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
      "definition_site": "00b49390",
      "incomplete_value": true,
      "site": "00b49390",
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
      "definition_site": "00b492f4",
      "incomplete_value": true,
      "site": "00b492f4",
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
      "00b4938c",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49398",
      "READ",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ],
    [
      "00b493b4",
      "WRITE",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4938c",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49398",
      "READ",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ],
    [
      "00b493b4",
      "WRITE",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49318 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b49318 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b49318 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:988:8"]]
- 00b49318 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b493b4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b493b4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b493b4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a88:8"]]
+ 00b493b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b49364 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49364 ["INT_ADD", "register:40f0:8", ["const:b49364:8", "const:4:8"]]
- 00b49364 ["CALLIND", null, ["register:0:8"]]
+ 00b49400 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49400 ["INT_ADD", "register:40f0:8", ["const:b49400:8", "const:4:8"]]
+ 00b49400 ["CALLIND", null, ["register:0:8"]]
- 00b49368 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b49368 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49368 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b49404 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a80:8"]]
+ 00b49404 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b49404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8cf18ebe69abc7b3e9d4a6fb1b06b4e8"></a>

### [`00b4937c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b4937c.md) → [`00b49418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49418.md) _ZN8firebase4util16content_resolver14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4943c",
      "incomplete_value": false,
      "site": "00b49450",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b493a0",
      "incomplete_value": false,
      "site": "00b493b4",
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
            "const:33f:8"
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
      "unmatched:00b49390",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b49398",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4945c"
      ]
    ],
    [
      "unmatched:00b493a0",
      "PARAM",
      [
        "storage",
        "002af33f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4942c",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49434",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4945c"
      ]
    ],
    [
      "00b4943c",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b493b4 ["INT_ADD", "register:40f0:8", ["const:b493b4:8", "const:4:8"]]
- 00b493b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49450 ["INT_ADD", "register:40f0:8", ["const:b49450:8", "const:4:8"]]
+ 00b49450 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49390 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b49390 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49394 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-26131dba9c7ed566a92186247abc2781"></a>

### [`00b493ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b493ec.md) → [`00b49488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49488.md) _ZN8firebase4util16content_resolver11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b494a4",
      "incomplete_value": false,
      "site": "00b494a8",
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
      "definition_site": "00b49408",
      "incomplete_value": false,
      "site": "00b4940c",
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
      "definition_site": "00b494b4",
      "incomplete_value": true,
      "site": "00b494c0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b49418",
      "incomplete_value": true,
      "site": "00b49424",
      "value": [
        "LOAD",
        "8",
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
      "00b494a4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b494b4",
      "DATA",
      [
        "storage",
        "01125990",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b494a4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b494b4",
      "DATA",
      [
        "storage",
        "01125a90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4940c ["INT_ADD", "register:40f0:8", ["const:b4940c:8", "const:4:8"]]
- 00b4940c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b494a8 ["INT_ADD", "register:40f0:8", ["const:b494a8:8", "const:4:8"]]
+ 00b494a8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b49408 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b49408 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49408 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49408 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b494a4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b494a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b494a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b494a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49414 ["COPY", "tmp:0:8", ["const:990:8"]]
- 00b49414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b49414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b49414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b494b0 ["COPY", "tmp:0:8", ["const:a90:8"]]
+ 00b494b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b494b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b494b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ab56c30091d347d6baaecc8e9ad03d6"></a>

### [`00b49428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49428.md) → [`00b494c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b494c4.md) _ZN8firebase4util16content_resolver13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b494e8",
      "incomplete_value": false,
      "site": "00b494fc",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4944c",
      "incomplete_value": false,
      "site": "00b49460",
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
            "const:33f:8"
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
      "unmatched:00b4943c",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b49444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49508"
      ]
    ],
    [
      "unmatched:00b4944c",
      "PARAM",
      [
        "storage",
        "002af33f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b494d8",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b494e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49508"
      ]
    ],
    [
      "00b494e8",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49460 ["INT_ADD", "register:40f0:8", ["const:b49460:8", "const:4:8"]]
- 00b49460 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b494fc ["INT_ADD", "register:40f0:8", ["const:b494fc:8", "const:4:8"]]
+ 00b494fc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4943c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b4943c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49440 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-1f3195d016b68167d6c6de89252efba3"></a>

### [`00b49498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49498.md) → [`00b49534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49534.md) _ZN8firebase4util16content_resolver10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b494bc"
      ]
    ],
    [
      "unmatched:00b494b4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b494b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b49548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49558"
      ]
    ],
    [
      "00b49550",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b49554",
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
- 00b494ac ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b494ac ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b49548 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b49548 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b494b4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b494b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b494b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b494b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b494b8 ["INT_ADD", "register:40f0:8", ["const:b494b8:8", "const:4:8"]]
- 00b494b8 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-c6e42c1c00dbc0bc7542c1133fc149a0"></a>

### [`00b494d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b494d4.md) → [`00b49570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49570.md) _ZN8firebase4util7context19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_1

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
      "definition_site": "00b4959c",
      "incomplete_value": true,
      "site": "00b4959c",
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
    "old": {
      "definition_site": "00b49500",
      "incomplete_value": true,
      "site": "00b49500",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49584",
      "incomplete_value": true,
      "site": "00b49584",
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
      "definition_site": "00b494e8",
      "incomplete_value": true,
      "site": "00b494e8",
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
      "definition_site": "00b49590",
      "incomplete_value": false,
      "site": "00b49594",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b494f4",
      "incomplete_value": false,
      "site": "00b494f8",
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
            "const:139:8"
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
      "00b49580",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49590",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b4959c",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49580",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49590",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4959c",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b494f8 ["INT_ADD", "register:40f0:8", ["const:b494f8:8", "const:4:8"]]
- 00b494f8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49594 ["INT_ADD", "register:40f0:8", ["const:b49594:8", "const:4:8"]]
+ 00b49594 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49500 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b49500 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4959c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b4959c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b494e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b494e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49580 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b49580 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8a3d3c7599bdcc9e775e25bee01f6c3a"></a>

### [`00b49514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49514.md) → [`00b495b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b495b0.md) _ZN8firebase4util7context19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b495dc",
      "incomplete_value": true,
      "site": "00b495dc",
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
    "old": {
      "definition_site": "00b49540",
      "incomplete_value": true,
      "site": "00b49540",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b495c4",
      "incomplete_value": true,
      "site": "00b495c4",
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
      "definition_site": "00b49528",
      "incomplete_value": true,
      "site": "00b49528",
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
      "definition_site": "00b495cc",
      "incomplete_value": false,
      "site": "00b495d4",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49530",
      "incomplete_value": false,
      "site": "00b49538",
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
            "const:139:8"
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
      "00b495c0",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b495cc",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b495dc",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b495c0",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b495cc",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b495dc",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49538 ["INT_ADD", "register:40f0:8", ["const:b49538:8", "const:4:8"]]
- 00b49538 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b495d4 ["INT_ADD", "register:40f0:8", ["const:b495d4:8", "const:4:8"]]
+ 00b495d4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49540 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b49540 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b495dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b495dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49524 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b49524 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b495c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b495c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1b0be9f40ab317f8f99495b9d4ff3c4f"></a>

### [`00b49554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49554.md) → [`00b495f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b495f0.md) _ZN8firebase4util7context10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49620",
      "incomplete_value": true,
      "site": "00b49620",
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
    "old": {
      "definition_site": "00b49584",
      "incomplete_value": true,
      "site": "00b49584",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49604",
      "incomplete_value": true,
      "site": "00b49604",
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
      "definition_site": "00b49568",
      "incomplete_value": true,
      "site": "00b49568",
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
      "definition_site": "00b49610",
      "incomplete_value": false,
      "site": "00b49618",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49574",
      "incomplete_value": false,
      "site": "00b4957c",
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
            "const:139:8"
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
      "00b49600",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49610",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b49620",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49600",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49610",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b49620",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4957c ["INT_ADD", "register:40f0:8", ["const:b4957c:8", "const:4:8"]]
- 00b4957c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49618 ["INT_ADD", "register:40f0:8", ["const:b49618:8", "const:4:8"]]
+ 00b49618 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49584 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b49584 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49620 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b49620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49564 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b49564 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49600 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b49600 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-19cadd6879b157a774acc9c969aa3298"></a>

### [`00b49598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49598.md) → [`00b49634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49634.md) _ZN8firebase4util7context10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49664",
      "incomplete_value": true,
      "site": "00b49664",
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
    "old": {
      "definition_site": "00b495c8",
      "incomplete_value": true,
      "site": "00b495c8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49648",
      "incomplete_value": true,
      "site": "00b49648",
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
      "definition_site": "00b495ac",
      "incomplete_value": true,
      "site": "00b495ac",
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
      "definition_site": "00b49650",
      "incomplete_value": false,
      "site": "00b4965c",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b495b4",
      "incomplete_value": false,
      "site": "00b495c0",
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
            "const:139:8"
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
      "00b49644",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49650",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b49664",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49644",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49650",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b49664",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b495c0 ["INT_ADD", "register:40f0:8", ["const:b495c0:8", "const:4:8"]]
- 00b495c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4965c ["INT_ADD", "register:40f0:8", ["const:b4965c:8", "const:4:8"]]
+ 00b4965c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b495c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b495c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49664 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b49664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b495a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b495a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49644 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00b49644 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5e572234149c25f3da323a37ef7867fd"></a>

### [`00b495e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b495e8.md) → [`00b49684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49684.md) _ZN8firebase4util7context15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4970c",
      "incomplete_value": true,
      "site": "00b4970c",
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
    "old": {
      "definition_site": "00b49670",
      "incomplete_value": true,
      "site": "00b49670",
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
            "const:9b0:8"
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
      "definition_site": "00b496b8",
      "incomplete_value": true,
      "site": "00b496c4",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00b4961c",
      "incomplete_value": true,
      "site": "00b49628",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9a8:8"
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
      "00b49698",
      "READ",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b496b8",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4970c",
      "WRITE",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49698",
      "READ",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b496b8",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4970c",
      "WRITE",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49628 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49628 ["INT_ADD", "register:40f0:8", ["const:b49628:8", "const:4:8"]]
- 00b49628 ["CALLIND", null, ["register:0:8"]]
+ 00b496c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b496c4 ["INT_ADD", "register:40f0:8", ["const:b496c4:8", "const:4:8"]]
+ 00b496c4 ["CALLIND", null, ["register:0:8"]]
- 00b49670 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b49670 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9b0:8"]]
- 00b49670 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4970c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4970c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
+ 00b4970c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b495fc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9b0:8"]]
- 00b495fc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b495fc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b49698 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ab0:8"]]
+ 00b49698 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b49698 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e415917538caf23441beec4887936f47"></a>

### [`00b49684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49684.md) → [`00b49720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49720.md) _ZN8firebase4util7context12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4975c",
      "incomplete_value": true,
      "site": "00b4975c",
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
    "old": {
      "definition_site": "00b496c0",
      "incomplete_value": true,
      "site": "00b496c0",
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
            "const:9b0:8"
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
      "definition_site": "00b497ac",
      "incomplete_value": true,
      "site": "00b497ac",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49710",
      "incomplete_value": true,
      "site": "00b49710",
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
            "const:9a8:8"
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
      "definition_site": "00b49738",
      "incomplete_value": true,
      "site": "00b49738",
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
      "definition_site": "00b4969c",
      "incomplete_value": true,
      "site": "00b4969c",
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
      "00b49734",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49740",
      "READ",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4975c",
      "WRITE",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49734",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49740",
      "READ",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4975c",
      "WRITE",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b496c0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b496c0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b496c0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9b0:8"]]
- 00b496c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4975c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4975c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4975c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ab0:8"]]
+ 00b4975c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4970c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4970c ["INT_ADD", "register:40f0:8", ["const:b4970c:8", "const:4:8"]]
- 00b4970c ["CALLIND", null, ["register:0:8"]]
+ 00b497a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b497a8 ["INT_ADD", "register:40f0:8", ["const:b497a8:8", "const:4:8"]]
+ 00b497a8 ["CALLIND", null, ["register:0:8"]]
- 00b49710 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b49710 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49710 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b497ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00b497ac ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b497ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-12cc10ccd4d919bee10d0b932e64f717"></a>

### [`00b49724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49724.md) → [`00b497c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b497c0.md) _ZN8firebase4util7context14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49800",
      "incomplete_value": true,
      "site": "00b49800",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49764",
      "incomplete_value": true,
      "site": "00b49764",
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
            "const:9a8:8"
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
      "definition_site": "00b497dc",
      "incomplete_value": true,
      "site": "00b497dc",
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
      "definition_site": "00b49740",
      "incomplete_value": true,
      "site": "00b49740",
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
      "definition_site": "00b497e4",
      "incomplete_value": false,
      "site": "00b497f8",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49748",
      "incomplete_value": false,
      "site": "00b4975c",
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
            "const:139:8"
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
      "00b497d4",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b497e4",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b49800",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b497d4",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b497e4",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b49800",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4975c ["INT_ADD", "register:40f0:8", ["const:b4975c:8", "const:4:8"]]
- 00b4975c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b497f8 ["INT_ADD", "register:40f0:8", ["const:b497f8:8", "const:4:8"]]
+ 00b497f8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49764 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b49764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49800 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00b49800 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49738 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b49738 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b497d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00b497d4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-01b9b196b3e5ba9425be92a111c7d9c7"></a>

### [`00b49794`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49794.md) → [`00b49830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49830.md) _ZN8firebase4util7context11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b540.md) · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b610.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4984c",
      "incomplete_value": false,
      "site": "00b49850",
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
      "definition_site": "00b497b0",
      "incomplete_value": false,
      "site": "00b497b4",
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
      "definition_site": "00b4985c",
      "incomplete_value": true,
      "site": "00b49868",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b497c0",
      "incomplete_value": true,
      "site": "00b497cc",
      "value": [
        "LOAD",
        "8",
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
      "00b4984c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4985c",
      "DATA",
      [
        "storage",
        "011259b8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4984c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4985c",
      "DATA",
      [
        "storage",
        "01125ab8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b497b4 ["INT_ADD", "register:40f0:8", ["const:b497b4:8", "const:4:8"]]
- 00b497b4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b49850 ["INT_ADD", "register:40f0:8", ["const:b49850:8", "const:4:8"]]
+ 00b49850 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b497b0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b497b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b497b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b497b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4984c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4984c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4984c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4984c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b497bc ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00b497bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b497bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b497bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b49858 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 00b49858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ea96ffd984e57765596c8ae09322fcf"></a>

### [`00b497d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b497d0.md) → [`00b4986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4986c.md) _ZN8firebase4util7context13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b498ac",
      "incomplete_value": true,
      "site": "00b498ac",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49810",
      "incomplete_value": true,
      "site": "00b49810",
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
            "const:9a8:8"
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
      "definition_site": "00b49888",
      "incomplete_value": true,
      "site": "00b49888",
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
      "definition_site": "00b497ec",
      "incomplete_value": true,
      "site": "00b497ec",
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
      "definition_site": "00b49890",
      "incomplete_value": false,
      "site": "00b498a4",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b497f4",
      "incomplete_value": false,
      "site": "00b49808",
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
            "const:139:8"
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
      "00b49880",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49890",
      "PARAM",
      [
        "storage",
        "002ae139",
        null,
        "string"
      ]
    ],
    [
      "00b498ac",
      "WRITE",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49880",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49890",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b498ac",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49808 ["INT_ADD", "register:40f0:8", ["const:b49808:8", "const:4:8"]]
- 00b49808 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b498a4 ["INT_ADD", "register:40f0:8", ["const:b498a4:8", "const:4:8"]]
+ 00b498a4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49810 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b49810 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b498ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00b498ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b497e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b497e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49880 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00b49880 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a131b1e25c7b197aab7d1903dfe58fac"></a>

### [`00b49840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49840.md) → [`00b498dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b498dc.md) _ZN8firebase4util7context10GetFieldIdENS1_5FieldE

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
      "00b498f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49864"
      ]
    ],
    [
      "unmatched:00b4985c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b49860",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b498f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49900"
      ]
    ],
    [
      "00b498f8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b498fc",
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
- 00b49854 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b49854 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b498f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b498f0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b4985c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4985c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4985c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4985c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49860 ["INT_ADD", "register:40f0:8", ["const:b49860:8", "const:4:8"]]
- 00b49860 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-61e4c2ef061e13450aee038be6d65619"></a>

### [`00b4987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b4987c.md) → [`00b49918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49918.md) _ZN8firebase4util6cursor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
      "definition_site": "00b49944",
      "incomplete_value": true,
      "site": "00b49944",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b498a8",
      "incomplete_value": true,
      "site": "00b498a8",
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
            "const:9d8:8"
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
      "definition_site": "00b4992c",
      "incomplete_value": true,
      "site": "00b4992c",
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
      "definition_site": "00b49890",
      "incomplete_value": true,
      "site": "00b49890",
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
      "definition_site": "00b49938",
      "incomplete_value": false,
      "site": "00b4993c",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4989c",
      "incomplete_value": false,
      "site": "00b498a0",
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
            "const:b17:8"
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
      "00b49928",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49938",
      "PARAM",
      [
        "storage",
        "002a3b17",
        null,
        "string"
      ]
    ],
    [
      "00b49944",
      "WRITE",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49928",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49938",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b49944",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b498a0 ["INT_ADD", "register:40f0:8", ["const:b498a0:8", "const:4:8"]]
- 00b498a0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4993c ["INT_ADD", "register:40f0:8", ["const:b4993c:8", "const:4:8"]]
+ 00b4993c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b498a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b498a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b49944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4988c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b4988c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49928 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b49928 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-179c5f7f764582fe43bda074b8605964"></a>

### [`00b498bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b498bc.md) → [`00b49958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49958.md) _ZN8firebase4util6cursor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b49984",
      "incomplete_value": true,
      "site": "00b49984",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b498e8",
      "incomplete_value": true,
      "site": "00b498e8",
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
            "const:9d8:8"
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
      "definition_site": "00b4996c",
      "incomplete_value": true,
      "site": "00b4996c",
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
      "definition_site": "00b498d0",
      "incomplete_value": true,
      "site": "00b498d0",
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
      "definition_site": "00b49974",
      "incomplete_value": false,
      "site": "00b4997c",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b498d8",
      "incomplete_value": false,
      "site": "00b498e0",
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
            "const:b17:8"
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
      "00b49968",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49974",
      "PARAM",
      [
        "storage",
        "002a3b17",
        null,
        "string"
      ]
    ],
    [
      "00b49984",
      "WRITE",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49968",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49974",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b49984",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b498e0 ["INT_ADD", "register:40f0:8", ["const:b498e0:8", "const:4:8"]]
- 00b498e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4997c ["INT_ADD", "register:40f0:8", ["const:b4997c:8", "const:4:8"]]
+ 00b4997c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b498e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b498e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49984 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b49984 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b498cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b498cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49968 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b49968 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1b7859deb8a27d5bfeb3db22a6ed7ebf"></a>

### [`00b498fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b498fc.md) → [`00b49998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49998.md) _ZN8firebase4util6cursor10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b499c8",
      "incomplete_value": true,
      "site": "00b499c8",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4992c",
      "incomplete_value": true,
      "site": "00b4992c",
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
            "const:9d8:8"
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
      "definition_site": "00b499ac",
      "incomplete_value": true,
      "site": "00b499ac",
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
      "definition_site": "00b49910",
      "incomplete_value": true,
      "site": "00b49910",
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
      "definition_site": "00b499b8",
      "incomplete_value": false,
      "site": "00b499c0",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4991c",
      "incomplete_value": false,
      "site": "00b49924",
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
            "const:b17:8"
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
      "00b499a8",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b499b8",
      "PARAM",
      [
        "storage",
        "002a3b17",
        null,
        "string"
      ]
    ],
    [
      "00b499c8",
      "WRITE",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b499a8",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b499b8",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b499c8",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49924 ["INT_ADD", "register:40f0:8", ["const:b49924:8", "const:4:8"]]
- 00b49924 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b499c0 ["INT_ADD", "register:40f0:8", ["const:b499c0:8", "const:4:8"]]
+ 00b499c0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4992c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b4992c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b499c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b499c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4990c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b4990c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b499a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b499a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e5be02e305fb9cc7758fdca043407d36"></a>

### [`00b49940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49940.md) → [`00b499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b499dc.md) _ZN8firebase4util6cursor10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b499f0",
      "incomplete_value": true,
      "site": "00b499f0",
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
      "definition_site": "00b49954",
      "incomplete_value": true,
      "site": "00b49954",
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
      "definition_site": "00b499f8",
      "incomplete_value": false,
      "site": "00b49a04",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4995c",
      "incomplete_value": false,
      "site": "00b49968",
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
            "const:b17:8"
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
      "00b499ec",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4995c",
      "PARAM",
      [
        "storage",
        "002a3b17",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b49970",
      "WRITE",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b499ec",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b499f8",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b49a0c",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49954 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b49954 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b499f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b499f0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b49968 ["INT_ADD", "register:40f0:8", ["const:b49968:8", "const:4:8"]]
- 00b49968 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49a04 ["INT_ADD", "register:40f0:8", ["const:b49a04:8", "const:4:8"]]
+ 00b49a04 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49950 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9d8:8"]]
- 00b49950 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b499ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
+ 00b499ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bb1c1eaedf3ad419202d13121765fa80"></a>

### [`00b49990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49990.md) → [`00b49a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49a2c.md) _ZN8firebase4util6cursor15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.79% / 新版 71.79%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49a60",
      "incomplete_value": true,
      "site": "00b49a6c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ad8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499c4",
      "incomplete_value": true,
      "site": "00b499d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9d8:8"
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
      "unmatched:00b49990",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49994",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49998",
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
      "00b49a2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b49a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49a34",
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
- 00b499d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b499d0 ["INT_ADD", "register:40f0:8", ["const:b499d0:8", "const:4:8"]]
- 00b499d0 ["CALLIND", null, ["register:0:8"]]
+ 00b49a6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49a6c ["INT_ADD", "register:40f0:8", ["const:b49a6c:8", "const:4:8"]]
+ 00b49a6c ["CALLIND", null, ["register:0:8"]]
- 00b49990 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b49990 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b49990 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49994 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b49994 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b49994 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49994 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6945703c75268c6ca31c41369d52e816"></a>

### [`00b49a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49a2c.md) → [`00b49ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49ac8.md) _ZN8firebase4util6cursor12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b49b54",
      "incomplete_value": true,
      "site": "00b49b54",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ab8",
      "incomplete_value": true,
      "site": "00b49ab8",
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
            "const:9d8:8"
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
      "definition_site": "00b49ae0",
      "incomplete_value": true,
      "site": "00b49ae0",
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
      "definition_site": "00b49a44",
      "incomplete_value": true,
      "site": "00b49a44",
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
      "definition_site": "00b49b44",
      "incomplete_value": true,
      "site": "00b49b50",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ad8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49aa8",
      "incomplete_value": true,
      "site": "00b49ab4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9d8:8"
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
      "00b49adc",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ae8",
      "READ",
      [
        "storage",
        "011259e0",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b49a68",
      "WRITE",
      [
        "storage",
        "011259e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49adc",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ae8",
      "READ",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49b04",
      "WRITE",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ab4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49ab4 ["INT_ADD", "register:40f0:8", ["const:b49ab4:8", "const:4:8"]]
- 00b49ab4 ["CALLIND", null, ["register:0:8"]]
+ 00b49b50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49b50 ["INT_ADD", "register:40f0:8", ["const:b49b50:8", "const:4:8"]]
+ 00b49b50 ["CALLIND", null, ["register:0:8"]]
- 00b49ab8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9d8:8"]]
- 00b49ab8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49ab8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b49b54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad8:8"]]
+ 00b49b54 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b49b54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b49a40 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9d8:8"]]
- 00b49a40 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49adc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad8:8"]]
+ 00b49adc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4733297f005b121e020a968e70f48290"></a>

### [`00b49acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49acc.md) → [`00b49b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49b68.md) _ZN8firebase4util6cursor14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49b90",
      "incomplete_value": true,
      "site": "00b49ba0",
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
      "definition_site": "00b49b94",
      "incomplete_value": true,
      "site": "00b49ba0",
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
      "definition_site": "00b49b8c",
      "incomplete_value": false,
      "site": "00b49ba0",
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
            "const:aca:8"
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
      "unmatched:00b49acc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49ad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49ae0",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49b68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49b6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49b7c",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49b04 ["INT_ADD", "register:40f0:8", ["const:b49b04:8", "const:4:8"]]
- 00b49b04 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49ba0 ["INT_ADD", "register:40f0:8", ["const:b49ba0:8", "const:4:8"]]
+ 00b49ba0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49acc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b49acc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b49acc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b49acc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49ad0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b49ad0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b49ad0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49ad0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e11090e49ad9aa83827b61bb56d7ce05"></a>

### [`00b49b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49b3c.md) → [`00b49bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49bd8.md) _ZN8firebase4util6cursor11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b49bf4",
      "incomplete_value": false,
      "site": "00b49bf8",
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
      "definition_site": "00b49b58",
      "incomplete_value": false,
      "site": "00b49b5c",
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
      "definition_site": "00b49c04",
      "incomplete_value": true,
      "site": "00b49c10",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b49b68",
      "incomplete_value": true,
      "site": "00b49b74",
      "value": [
        "LOAD",
        "8",
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
      "00b49bf4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b49c04",
      "DATA",
      [
        "storage",
        "011259e8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b49bf4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b49c04",
      "DATA",
      [
        "storage",
        "01125ae8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49b5c ["INT_ADD", "register:40f0:8", ["const:b49b5c:8", "const:4:8"]]
- 00b49b5c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b49bf8 ["INT_ADD", "register:40f0:8", ["const:b49bf8:8", "const:4:8"]]
+ 00b49bf8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b49b58 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b49b58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49b58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49b58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49bf4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b49bf4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49bf4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49bf4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49b64 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 00b49b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b49b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b49b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b49c00 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 00b49c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad131571d2ec071e58c71bcfe429aa79"></a>

### [`00b49b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49b78.md) → [`00b49c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49c14.md) _ZN8firebase4util6cursor13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49c3c",
      "incomplete_value": true,
      "site": "00b49c4c",
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
      "definition_site": "00b49c40",
      "incomplete_value": true,
      "site": "00b49c4c",
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
      "definition_site": "00b49c44",
      "incomplete_value": false,
      "site": "00b49c4c",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:00b49b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49b7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49b8c",
      "READ",
      [
        "storage",
        "011259d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49c14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49c18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49c28",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49bb0 ["INT_ADD", "register:40f0:8", ["const:b49bb0:8", "const:4:8"]]
- 00b49bb0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49c4c ["INT_ADD", "register:40f0:8", ["const:b49c4c:8", "const:4:8"]]
+ 00b49c4c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49b78 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b49b78 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b49b78 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b49b78 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49b7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b49b7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b49b7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49b7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-340cf2b3af78a9e74638cf750999a315"></a>

### [`00b49be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49be8.md) → [`00b49c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49c84.md) _ZN8firebase4util6cursor10GetFieldIdENS1_5FieldE

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
      "unmatched:00b49bfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49c0c"
      ]
    ],
    [
      "unmatched:00b49c04",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b49c08",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b49c98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49ca8"
      ]
    ],
    [
      "00b49ca0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b49ca4",
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
- 00b49bfc ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b49bfc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b49c00 ["COPY", "register:4000:8", ["const:2a9000:8"]]
- 00b49c04 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b49c04 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49c04 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49c04 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8b045f2c15be380b4f359c2c299e2148"></a>

### [`00b49c24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49c24.md) → [`00b49cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49cc0.md) _ZN8firebase4util4date19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cl

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
      "unmatched:00b49c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49c34",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49cc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49cc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49cd0",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49c24 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b49c24 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b49c24 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49c28 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b49c28 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b49c28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49c28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b49c2c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b49c2c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b49c2c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b49c2c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-4843999a89adfaba048018dd95a19aff"></a>

### [`00b49c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49c64.md) → [`00b49d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d00.md) _ZN8firebase4util4date19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 43.75% / 新版 43.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49d14",
      "incomplete_value": true,
      "site": "00b49d14",
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
      "definition_site": "00b49c78",
      "incomplete_value": true,
      "site": "00b49c78",
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
      "00b49d10",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49c94"
      ]
    ],
    [
      "unmatched:00b49c80",
      "PARAM",
      [
        "storage",
        "002a841e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b49d10",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49d30"
      ]
    ],
    [
      "00b49d1c",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49c74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a10:8"]]
- 00b49c74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49d10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
+ 00b49d10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49c80 ["COPY", "tmp:0:8", ["const:41e:8"]]
- 00b49c80 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b49c80 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b49c80 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00b49c84 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b49c84 ["INT_ZEXT", "register:4020:8", ["tmp:0:4"]]
~~~


<a id="compare-26456682d1c042c609435927ae377434"></a>

### [`00b49ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49ca4.md) → [`00b49d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d40.md) _ZN8firebase4util4date10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49d54",
      "incomplete_value": true,
      "site": "00b49d54",
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
      "definition_site": "00b49cb8",
      "incomplete_value": true,
      "site": "00b49cb8",
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
      "unmatched:00b49ca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b49ca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49d50",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49d40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b49d44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b49d50",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49cb8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b49cb8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b49d54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b49d54 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b49ca4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b49ca4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b49ca4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b49ca8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b49ca8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b49ca8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b49ca8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b435adb2a422949b9e29737ba9c2426c"></a>

### [`00b49ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49ce8.md) → [`00b49d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d84.md) _ZN8firebase4util4date10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49d98",
      "incomplete_value": true,
      "site": "00b49d98",
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
      "definition_site": "00b49cfc",
      "incomplete_value": true,
      "site": "00b49cfc",
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
      "definition_site": "00b49da0",
      "incomplete_value": false,
      "site": "00b49dac",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d04",
      "incomplete_value": false,
      "site": "00b49d10",
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
            "const:41e:8"
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
      "00b49d94",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49d1c"
      ]
    ],
    [
      "unmatched:00b49d04",
      "PARAM",
      [
        "storage",
        "002a841e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b49d94",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49db8"
      ]
    ],
    [
      "00b49da0",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49d10 ["INT_ADD", "register:40f0:8", ["const:b49d10:8", "const:4:8"]]
- 00b49d10 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49dac ["INT_ADD", "register:40f0:8", ["const:b49dac:8", "const:4:8"]]
+ 00b49dac ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49cf8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a10:8"]]
- 00b49cf8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49d94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
+ 00b49d94 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49d04 ["COPY", "tmp:0:8", ["const:41e:8"]]
- 00b49d04 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b49d04 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b49d04 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-72b8406c85836ab6d53370542a52e74c"></a>

### [`00b49d38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49d38.md) → [`00b49dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49dd4.md) _ZN8firebase4util4date15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b49e5c",
      "incomplete_value": true,
      "site": "00b49e5c",
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
            "const:b18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49dc0",
      "incomplete_value": true,
      "site": "00b49dc0",
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
            "const:a18:8"
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
      "definition_site": "00b49e08",
      "incomplete_value": true,
      "site": "00b49e14",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d6c",
      "incomplete_value": true,
      "site": "00b49d78",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a10:8"
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
      "00b49de8",
      "READ",
      [
        "storage",
        "01125a18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49e08",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e5c",
      "WRITE",
      [
        "storage",
        "01125a18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49de8",
      "READ",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49e08",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e5c",
      "WRITE",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49d78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49d78 ["INT_ADD", "register:40f0:8", ["const:b49d78:8", "const:4:8"]]
- 00b49d78 ["CALLIND", null, ["register:0:8"]]
+ 00b49e14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49e14 ["INT_ADD", "register:40f0:8", ["const:b49e14:8", "const:4:8"]]
+ 00b49e14 ["CALLIND", null, ["register:0:8"]]
- 00b49dc0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b49dc0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a18:8"]]
- 00b49dc0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49e5c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49e5c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b18:8"]]
+ 00b49e5c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b49d4c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a18:8"]]
- 00b49d4c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b49d4c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b49de8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b18:8"]]
+ 00b49de8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b49de8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-7bb222d3e3efcbe9cc148d77d672b59e"></a>

### [`00b49dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49dd4.md) → [`00b49e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49e70.md) _ZN8firebase4util4date12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.50% / 新版 57.50%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b49e88",
      "incomplete_value": true,
      "site": "00b49e88",
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
      "definition_site": "00b49dec",
      "incomplete_value": true,
      "site": "00b49dec",
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
      "00b49e84",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b49e64"
      ]
    ],
    [
      "00b49e90",
      "READ",
      [
        "storage",
        "01125a18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49e84",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49f00"
      ]
    ],
    [
      "00b49e90",
      "READ",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49de8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a10:8"]]
- 00b49de8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49e84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
+ 00b49e84 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49df4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a18:8"]]
- 00b49df4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b49df4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b49e90 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b18:8"]]
+ 00b49e90 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b49e90 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b49e0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49e0c ["INT_ADD", "register:40f0:8", ["const:b49e0c:8", "const:4:8"]]
- 00b49e0c ["CALLIND", null, ["register:0:8"]]
+ 00b49ea8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49ea8 ["INT_ADD", "register:40f0:8", ["const:b49ea8:8", "const:4:8"]]
+ 00b49ea8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c1abe629f29cfc56f5d6cfd731d24f3a"></a>

### [`00b49e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49e74.md) → [`00b49f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49f10.md) _ZN8firebase4util4date14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49f34",
      "incomplete_value": false,
      "site": "00b49f48",
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
            "const:3c2:8"
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
      "unmatched:00b49e88",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b49e90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49f54"
      ]
    ],
    [
      "unmatched:00b49e98",
      "PARAM",
      [
        "storage",
        "002a841e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b49f24",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49f2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b49f54"
      ]
    ],
    [
      "00b49f34",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49eac ["INT_ADD", "register:40f0:8", ["const:b49eac:8", "const:4:8"]]
- 00b49eac ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49f48 ["INT_ADD", "register:40f0:8", ["const:b49f48:8", "const:4:8"]]
+ 00b49f48 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49e88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a10:8"]]
- 00b49e88 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b49e8c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-9656af8c862bf376f6a46210573f0a21"></a>

### [`00b49ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49ee4.md) → [`00b49f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49f80.md) _ZN8firebase4util4date11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b49f9c",
      "incomplete_value": false,
      "site": "00b49fa0",
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
      "definition_site": "00b49f00",
      "incomplete_value": false,
      "site": "00b49f04",
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
      "definition_site": "00b49fac",
      "incomplete_value": true,
      "site": "00b49fb8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b49f10",
      "incomplete_value": true,
      "site": "00b49f1c",
      "value": [
        "LOAD",
        "8",
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
      "00b49f9c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b49fac",
      "DATA",
      [
        "storage",
        "01125a20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b49f9c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b49fac",
      "DATA",
      [
        "storage",
        "01125b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49f04 ["INT_ADD", "register:40f0:8", ["const:b49f04:8", "const:4:8"]]
- 00b49f04 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b49fa0 ["INT_ADD", "register:40f0:8", ["const:b49fa0:8", "const:4:8"]]
+ 00b49fa0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b49f00 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b49f00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49f00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49f00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49f9c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b49f9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49f9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49f9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49f0c ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00b49f0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b49f0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b49f0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b49fa8 ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 00b49fa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49fa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b49fa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ef64563943314b30d065dc41c2670c7"></a>

### [`00b49f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49f20.md) → [`00b49fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49fbc.md) _ZN8firebase4util4date13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49ffc",
      "incomplete_value": true,
      "site": "00b49ffc",
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
            "const:b10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49f60",
      "incomplete_value": true,
      "site": "00b49f60",
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
            "const:a10:8"
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
      "definition_site": "00b49fd8",
      "incomplete_value": true,
      "site": "00b49fd8",
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
      "definition_site": "00b49f3c",
      "incomplete_value": true,
      "site": "00b49f3c",
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
      "definition_site": "00b49fe0",
      "incomplete_value": false,
      "site": "00b49ff4",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49f44",
      "incomplete_value": false,
      "site": "00b49f58",
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
            "const:41e:8"
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
      "00b49fd0",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fe0",
      "PARAM",
      [
        "storage",
        "002a841e",
        null,
        "string"
      ]
    ],
    [
      "00b49ffc",
      "WRITE",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49fd0",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fe0",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b49ffc",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49f58 ["INT_ADD", "register:40f0:8", ["const:b49f58:8", "const:4:8"]]
- 00b49f58 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b49ff4 ["INT_ADD", "register:40f0:8", ["const:b49ff4:8", "const:4:8"]]
+ 00b49ff4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49f60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a10:8"]]
- 00b49f60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49ffc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
+ 00b49ffc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49f34 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a10:8"]]
- 00b49f34 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49fd0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
+ 00b49fd0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5b94328db826aec5bcb05a1ce7df5deb"></a>

### [`00b49f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49f90.md) → [`00b4a02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a02c.md) _ZN8firebase4util4date10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a048",
      "incomplete_value": false,
      "site": "00b4a04c",
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
      "definition_site": "00b49fac",
      "incomplete_value": false,
      "site": "00b49fb0",
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
      "definition_site": "00b4a058",
      "incomplete_value": true,
      "site": "00b4a064",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b49fbc",
      "incomplete_value": true,
      "site": "00b49fc8",
      "value": [
        "LOAD",
        "8",
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
      "00b4a048",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4a058",
      "DATA",
      [
        "storage",
        "01125a38",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a048",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a058",
      "DATA",
      [
        "storage",
        "01125b38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49fb0 ["INT_ADD", "register:40f0:8", ["const:b49fb0:8", "const:4:8"]]
- 00b49fb0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4a04c ["INT_ADD", "register:40f0:8", ["const:b4a04c:8", "const:4:8"]]
+ 00b4a04c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b49fac ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b49fac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49fac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49fac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a048 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4a048 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a048 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a048 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49fb8 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00b49fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b49fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b49fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4a054 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00b4a054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c20e038d580ef1adeb2af65717c1108d"></a>

### [`00b49fcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b49/00b49fcc.md) → [`00b4a068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a068.md) _ZN8firebase4util12double_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b4a094",
      "incomplete_value": true,
      "site": "00b4a094",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ff8",
      "incomplete_value": true,
      "site": "00b49ff8",
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
            "const:a40:8"
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
      "definition_site": "00b4a07c",
      "incomplete_value": true,
      "site": "00b4a07c",
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
      "definition_site": "00b49fe0",
      "incomplete_value": true,
      "site": "00b49fe0",
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
      "definition_site": "00b4a088",
      "incomplete_value": false,
      "site": "00b4a08c",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49fec",
      "incomplete_value": false,
      "site": "00b49ff0",
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
            "const:c74:8"
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
      "00b4a078",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a088",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a094",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a078",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a088",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a094",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ff0 ["INT_ADD", "register:40f0:8", ["const:b49ff0:8", "const:4:8"]]
- 00b49ff0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a08c ["INT_ADD", "register:40f0:8", ["const:b4a08c:8", "const:4:8"]]
+ 00b4a08c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b49ff8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b49ff8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a094 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a094 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49fdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b49fdc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a078 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a078 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5604d44cdeec0d770f158449eb37fbd3"></a>

### [`00b4a00c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a00c.md) → [`00b4a0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a0a8.md) _ZN8firebase4util12double_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b4a0d4",
      "incomplete_value": true,
      "site": "00b4a0d4",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a038",
      "incomplete_value": true,
      "site": "00b4a038",
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
            "const:a40:8"
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
      "definition_site": "00b4a0bc",
      "incomplete_value": true,
      "site": "00b4a0bc",
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
      "definition_site": "00b4a020",
      "incomplete_value": true,
      "site": "00b4a020",
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
      "definition_site": "00b4a0c4",
      "incomplete_value": false,
      "site": "00b4a0cc",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a028",
      "incomplete_value": false,
      "site": "00b4a030",
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
            "const:c74:8"
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
      "00b4a0b8",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a0c4",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a0d4",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a0b8",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a0c4",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a0d4",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a030 ["INT_ADD", "register:40f0:8", ["const:b4a030:8", "const:4:8"]]
- 00b4a030 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a0cc ["INT_ADD", "register:40f0:8", ["const:b4a0cc:8", "const:4:8"]]
+ 00b4a0cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a038 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a038 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a0d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a0d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a01c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a01c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a0b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a0b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f9197fffe2bd7ff1f527dceb0a3190e8"></a>

### [`00b4a04c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a04c.md) → [`00b4a0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a0e8.md) _ZN8firebase4util12double_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a118",
      "incomplete_value": true,
      "site": "00b4a118",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a07c",
      "incomplete_value": true,
      "site": "00b4a07c",
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
            "const:a40:8"
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
      "definition_site": "00b4a0fc",
      "incomplete_value": true,
      "site": "00b4a0fc",
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
      "definition_site": "00b4a060",
      "incomplete_value": true,
      "site": "00b4a060",
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
      "definition_site": "00b4a108",
      "incomplete_value": false,
      "site": "00b4a110",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a06c",
      "incomplete_value": false,
      "site": "00b4a074",
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
            "const:c74:8"
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
      "00b4a0f8",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a108",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a118",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a0f8",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a108",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a118",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a074 ["INT_ADD", "register:40f0:8", ["const:b4a074:8", "const:4:8"]]
- 00b4a074 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a110 ["INT_ADD", "register:40f0:8", ["const:b4a110:8", "const:4:8"]]
+ 00b4a110 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a07c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a07c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a118 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a118 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a05c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a05c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a0f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a0f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c26e5d73372e710b519bae25f9a82252"></a>

### [`00b4a090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a090.md) → [`00b4a12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a12c.md) _ZN8firebase4util12double_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a15c",
      "incomplete_value": true,
      "site": "00b4a15c",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0c0",
      "incomplete_value": true,
      "site": "00b4a0c0",
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
            "const:a40:8"
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
      "definition_site": "00b4a140",
      "incomplete_value": true,
      "site": "00b4a140",
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
      "definition_site": "00b4a0a4",
      "incomplete_value": true,
      "site": "00b4a0a4",
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
      "definition_site": "00b4a148",
      "incomplete_value": false,
      "site": "00b4a154",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0ac",
      "incomplete_value": false,
      "site": "00b4a0b8",
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
            "const:c74:8"
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
      "00b4a13c",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a148",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a15c",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a13c",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a148",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a15c",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a0b8 ["INT_ADD", "register:40f0:8", ["const:b4a0b8:8", "const:4:8"]]
- 00b4a0b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a154 ["INT_ADD", "register:40f0:8", ["const:b4a154:8", "const:4:8"]]
+ 00b4a154 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a0c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a0c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a15c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a15c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a0a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
- 00b4a0a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a13c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
+ 00b4a13c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-18d881258ff24e6d7b0a32ea3c9aa2fc"></a>

### [`00b4a0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a0e0.md) → [`00b4a17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a17c.md) _ZN8firebase4util12double_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a204",
      "incomplete_value": true,
      "site": "00b4a204",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a168",
      "incomplete_value": true,
      "site": "00b4a168",
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
            "const:a48:8"
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
      "definition_site": "00b4a1b0",
      "incomplete_value": true,
      "site": "00b4a1bc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a114",
      "incomplete_value": true,
      "site": "00b4a120",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a40:8"
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
      "00b4a190",
      "READ",
      [
        "storage",
        "01125a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a1b0",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a204",
      "WRITE",
      [
        "storage",
        "01125a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a190",
      "READ",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a1b0",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a204",
      "WRITE",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a120 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a120 ["INT_ADD", "register:40f0:8", ["const:b4a120:8", "const:4:8"]]
- 00b4a120 ["CALLIND", null, ["register:0:8"]]
+ 00b4a1bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a1bc ["INT_ADD", "register:40f0:8", ["const:b4a1bc:8", "const:4:8"]]
+ 00b4a1bc ["CALLIND", null, ["register:0:8"]]
- 00b4a168 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a168 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a48:8"]]
- 00b4a168 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4a204 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4a204 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b48:8"]]
+ 00b4a204 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a0f4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a48:8"]]
- 00b4a0f4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4a0f4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4a190 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b48:8"]]
+ 00b4a190 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a190 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-62d57228b1f8f4b4127411958f2c8664"></a>

### [`00b4a17c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a17c.md) → [`00b4a218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a218.md) _ZN8firebase4util12double_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a254",
      "incomplete_value": true,
      "site": "00b4a254",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a1b8",
      "incomplete_value": true,
      "site": "00b4a1b8",
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
            "const:a48:8"
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
      "definition_site": "00b4a2a4",
      "incomplete_value": true,
      "site": "00b4a2a4",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a208",
      "incomplete_value": true,
      "site": "00b4a208",
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
            "const:a40:8"
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
      "definition_site": "00b4a230",
      "incomplete_value": true,
      "site": "00b4a230",
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
      "definition_site": "00b4a194",
      "incomplete_value": true,
      "site": "00b4a194",
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
      "00b4a22c",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a238",
      "READ",
      [
        "storage",
        "01125a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a254",
      "WRITE",
      [
        "storage",
        "01125a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a22c",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a238",
      "READ",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a254",
      "WRITE",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a1b8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a1b8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a1b8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a48:8"]]
- 00b4a1b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a254 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a254 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a254 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b48:8"]]
+ 00b4a254 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a204 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a204 ["INT_ADD", "register:40f0:8", ["const:b4a204:8", "const:4:8"]]
- 00b4a204 ["CALLIND", null, ["register:0:8"]]
+ 00b4a2a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a2a0 ["INT_ADD", "register:40f0:8", ["const:b4a2a0:8", "const:4:8"]]
+ 00b4a2a0 ["CALLIND", null, ["register:0:8"]]
- 00b4a208 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
- 00b4a208 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a208 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a2a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
+ 00b4a2a4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a2a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ef9eb43bb04916a1f2d495ad6893d663"></a>

### [`00b4a21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a21c.md) → [`00b4a2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a2b8.md) _ZN8firebase4util12double_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a2f8",
      "incomplete_value": true,
      "site": "00b4a2f8",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a25c",
      "incomplete_value": true,
      "site": "00b4a25c",
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
            "const:a40:8"
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
      "definition_site": "00b4a2d4",
      "incomplete_value": true,
      "site": "00b4a2d4",
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
      "definition_site": "00b4a238",
      "incomplete_value": true,
      "site": "00b4a238",
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
      "definition_site": "00b4a2dc",
      "incomplete_value": false,
      "site": "00b4a2f0",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a240",
      "incomplete_value": false,
      "site": "00b4a254",
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
            "const:c74:8"
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
      "00b4a2cc",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a2dc",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a2f8",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a2cc",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a2dc",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a2f8",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a254 ["INT_ADD", "register:40f0:8", ["const:b4a254:8", "const:4:8"]]
- 00b4a254 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a2f0 ["INT_ADD", "register:40f0:8", ["const:b4a2f0:8", "const:4:8"]]
+ 00b4a2f0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a25c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
- 00b4a25c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a2f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
+ 00b4a2f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a230 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
- 00b4a230 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a2cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
+ 00b4a2cc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-997d9ae7cef5a0dc1dad3b5c76bec8b0"></a>

### [`00b4a28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a28c.md) → [`00b4a328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a328.md) _ZN8firebase4util12double_class11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b290.md) · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b360.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a344",
      "incomplete_value": false,
      "site": "00b4a348",
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
      "definition_site": "00b4a2a8",
      "incomplete_value": false,
      "site": "00b4a2ac",
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
      "definition_site": "00b4a354",
      "incomplete_value": true,
      "site": "00b4a360",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4a2b8",
      "incomplete_value": true,
      "site": "00b4a2c4",
      "value": [
        "LOAD",
        "8",
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
      "00b4a344",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4a354",
      "DATA",
      [
        "storage",
        "01125a50",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a344",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4a354",
      "DATA",
      [
        "storage",
        "01125b50",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a2ac ["INT_ADD", "register:40f0:8", ["const:b4a2ac:8", "const:4:8"]]
- 00b4a2ac ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4a348 ["INT_ADD", "register:40f0:8", ["const:b4a348:8", "const:4:8"]]
+ 00b4a348 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4a2a8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4a2a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a2a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a2a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a344 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4a344 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a344 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a344 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a2b4 ["COPY", "tmp:0:8", ["const:a50:8"]]
- 00b4a2b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a2b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a2b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4a350 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 00b4a350 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a350 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a350 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50875e7dec451c57bc92ce5daaff4466"></a>

### [`00b4a2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a2c8.md) → [`00b4a364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a364.md) _ZN8firebase4util12double_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a3a4",
      "incomplete_value": true,
      "site": "00b4a3a4",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a308",
      "incomplete_value": true,
      "site": "00b4a308",
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
            "const:a40:8"
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
      "definition_site": "00b4a380",
      "incomplete_value": true,
      "site": "00b4a380",
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
      "definition_site": "00b4a2e4",
      "incomplete_value": true,
      "site": "00b4a2e4",
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
      "definition_site": "00b4a388",
      "incomplete_value": false,
      "site": "00b4a39c",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a2ec",
      "incomplete_value": false,
      "site": "00b4a300",
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
            "const:c74:8"
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
      "00b4a378",
      "READ",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a388",
      "PARAM",
      [
        "storage",
        "002b7c74",
        null,
        "string"
      ]
    ],
    [
      "00b4a3a4",
      "WRITE",
      [
        "storage",
        "01125a40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a378",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a388",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4a3a4",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a300 ["INT_ADD", "register:40f0:8", ["const:b4a300:8", "const:4:8"]]
- 00b4a300 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a39c ["INT_ADD", "register:40f0:8", ["const:b4a39c:8", "const:4:8"]]
+ 00b4a39c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a308 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
- 00b4a308 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a3a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
+ 00b4a3a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a2dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
- 00b4a2dc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a378 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
+ 00b4a378 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-689e3ed4442c47249c0e2ee2e7993def"></a>

### [`00b4a338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a338.md) → [`00b4a3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a3d4.md) _ZN8firebase4util12double_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a3f0",
      "incomplete_value": false,
      "site": "00b4a3f4",
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
      "definition_site": "00b4a354",
      "incomplete_value": false,
      "site": "00b4a358",
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
      "definition_site": "00b4a400",
      "incomplete_value": true,
      "site": "00b4a40c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4a364",
      "incomplete_value": true,
      "site": "00b4a370",
      "value": [
        "LOAD",
        "8",
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
      "00b4a3f0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4a400",
      "DATA",
      [
        "storage",
        "01125a60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a3f0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a400",
      "DATA",
      [
        "storage",
        "01125b60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a358 ["INT_ADD", "register:40f0:8", ["const:b4a358:8", "const:4:8"]]
- 00b4a358 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4a3f4 ["INT_ADD", "register:40f0:8", ["const:b4a3f4:8", "const:4:8"]]
+ 00b4a3f4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4a354 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4a354 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a354 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a354 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a3f0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4a3f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a3f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a3f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a360 ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00b4a360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4a3fc ["COPY", "tmp:0:8", ["const:b60:8"]]
+ 00b4a3fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a3fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a3fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1af5ef2877477fa99ba28dd3ddb37a4b"></a>

### [`00b4a374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a374.md) → [`00b4a410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a410.md) _ZN8firebase4util10enum_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b4a43c",
      "incomplete_value": true,
      "site": "00b4a43c",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a3a0",
      "incomplete_value": true,
      "site": "00b4a3a0",
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
            "const:a68:8"
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
      "definition_site": "00b4a424",
      "incomplete_value": true,
      "site": "00b4a424",
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
      "definition_site": "00b4a388",
      "incomplete_value": true,
      "site": "00b4a388",
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
      "definition_site": "00b4a430",
      "incomplete_value": false,
      "site": "00b4a434",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a394",
      "incomplete_value": false,
      "site": "00b4a398",
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
            "const:b11:8"
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
      "00b4a420",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a430",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a43c",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a420",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a430",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a43c",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a398 ["INT_ADD", "register:40f0:8", ["const:b4a398:8", "const:4:8"]]
- 00b4a398 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a434 ["INT_ADD", "register:40f0:8", ["const:b4a434:8", "const:4:8"]]
+ 00b4a434 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a3a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a3a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a43c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a43c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a384 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a384 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a420 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a420 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-38c2ba183a97fb2febe23df6c0d32a5f"></a>

### [`00b4a3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a3b4.md) → [`00b4a450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a450.md) _ZN8firebase4util10enum_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4a47c",
      "incomplete_value": true,
      "site": "00b4a47c",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a3e0",
      "incomplete_value": true,
      "site": "00b4a3e0",
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
            "const:a68:8"
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
      "definition_site": "00b4a464",
      "incomplete_value": true,
      "site": "00b4a464",
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
      "definition_site": "00b4a3c8",
      "incomplete_value": true,
      "site": "00b4a3c8",
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
      "definition_site": "00b4a46c",
      "incomplete_value": false,
      "site": "00b4a474",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a3d0",
      "incomplete_value": false,
      "site": "00b4a3d8",
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
            "const:b11:8"
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
      "00b4a460",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a46c",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a47c",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a460",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a46c",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a47c",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a3d8 ["INT_ADD", "register:40f0:8", ["const:b4a3d8:8", "const:4:8"]]
- 00b4a3d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a474 ["INT_ADD", "register:40f0:8", ["const:b4a474:8", "const:4:8"]]
+ 00b4a474 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a3e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a3e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a47c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a47c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a3c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a3c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a460 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a460 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6003c93743ca9cfb5212c6777ea17ac2"></a>

### [`00b4a3f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a3f4.md) → [`00b4a490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a490.md) _ZN8firebase4util10enum_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a4c0",
      "incomplete_value": true,
      "site": "00b4a4c0",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a424",
      "incomplete_value": true,
      "site": "00b4a424",
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
            "const:a68:8"
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
      "definition_site": "00b4a4a4",
      "incomplete_value": true,
      "site": "00b4a4a4",
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
      "definition_site": "00b4a408",
      "incomplete_value": true,
      "site": "00b4a408",
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
      "definition_site": "00b4a4b0",
      "incomplete_value": false,
      "site": "00b4a4b8",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a414",
      "incomplete_value": false,
      "site": "00b4a41c",
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
            "const:b11:8"
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
      "00b4a4a0",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4b0",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a4c0",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a4a0",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4b0",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a4c0",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a41c ["INT_ADD", "register:40f0:8", ["const:b4a41c:8", "const:4:8"]]
- 00b4a41c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a4b8 ["INT_ADD", "register:40f0:8", ["const:b4a4b8:8", "const:4:8"]]
+ 00b4a4b8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a424 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a424 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a4c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a4c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a404 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a404 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a4a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a4a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-aa148d35a580cdeee07564cbd906761f"></a>

### [`00b4a438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a438.md) → [`00b4a4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a4d4.md) _ZN8firebase4util10enum_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a504",
      "incomplete_value": true,
      "site": "00b4a504",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a468",
      "incomplete_value": true,
      "site": "00b4a468",
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
            "const:a68:8"
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
      "definition_site": "00b4a4e8",
      "incomplete_value": true,
      "site": "00b4a4e8",
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
      "definition_site": "00b4a44c",
      "incomplete_value": true,
      "site": "00b4a44c",
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
      "definition_site": "00b4a4f0",
      "incomplete_value": false,
      "site": "00b4a4fc",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a454",
      "incomplete_value": false,
      "site": "00b4a460",
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
            "const:b11:8"
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
      "00b4a4e4",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4f0",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a504",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a4e4",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4f0",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a504",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a460 ["INT_ADD", "register:40f0:8", ["const:b4a460:8", "const:4:8"]]
- 00b4a460 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a4fc ["INT_ADD", "register:40f0:8", ["const:b4a4fc:8", "const:4:8"]]
+ 00b4a4fc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a468 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a468 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a504 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a504 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a448 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00b4a448 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a4e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00b4a4e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9d688dfa3e84dda4700274005952d714"></a>

### [`00b4a488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a488.md) → [`00b4a524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a524.md) _ZN8firebase4util10enum_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a5ac",
      "incomplete_value": true,
      "site": "00b4a5ac",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a510",
      "incomplete_value": true,
      "site": "00b4a510",
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
            "const:a70:8"
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
      "definition_site": "00b4a558",
      "incomplete_value": true,
      "site": "00b4a564",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4bc",
      "incomplete_value": true,
      "site": "00b4a4c8",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a538",
      "READ",
      [
        "storage",
        "01125a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a558",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5ac",
      "WRITE",
      [
        "storage",
        "01125a70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a538",
      "READ",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a558",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5ac",
      "WRITE",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a4c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a4c8 ["INT_ADD", "register:40f0:8", ["const:b4a4c8:8", "const:4:8"]]
- 00b4a4c8 ["CALLIND", null, ["register:0:8"]]
+ 00b4a564 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a564 ["INT_ADD", "register:40f0:8", ["const:b4a564:8", "const:4:8"]]
+ 00b4a564 ["CALLIND", null, ["register:0:8"]]
- 00b4a510 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a510 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a70:8"]]
- 00b4a510 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4a5ac ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4a5ac ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b70:8"]]
+ 00b4a5ac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a49c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a70:8"]]
- 00b4a49c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4a49c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4a538 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b70:8"]]
+ 00b4a538 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a538 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-93c009997b0d321fe0e6fb0712aa197f"></a>

### [`00b4a524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a524.md) → [`00b4a5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a5c0.md) _ZN8firebase4util10enum_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a5fc",
      "incomplete_value": true,
      "site": "00b4a5fc",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a560",
      "incomplete_value": true,
      "site": "00b4a560",
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
            "const:a70:8"
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
      "definition_site": "00b4a64c",
      "incomplete_value": true,
      "site": "00b4a64c",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a5b0",
      "incomplete_value": true,
      "site": "00b4a5b0",
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
            "const:a68:8"
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
      "definition_site": "00b4a5d8",
      "incomplete_value": true,
      "site": "00b4a5d8",
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
      "definition_site": "00b4a53c",
      "incomplete_value": true,
      "site": "00b4a53c",
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
      "00b4a5d4",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5e0",
      "READ",
      [
        "storage",
        "01125a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a5fc",
      "WRITE",
      [
        "storage",
        "01125a70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a5d4",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5e0",
      "READ",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a5fc",
      "WRITE",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a560 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a560 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a560 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a70:8"]]
- 00b4a560 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a5fc ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a5fc ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a5fc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b70:8"]]
+ 00b4a5fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a5ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a5ac ["INT_ADD", "register:40f0:8", ["const:b4a5ac:8", "const:4:8"]]
- 00b4a5ac ["CALLIND", null, ["register:0:8"]]
+ 00b4a648 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a648 ["INT_ADD", "register:40f0:8", ["const:b4a648:8", "const:4:8"]]
+ 00b4a648 ["CALLIND", null, ["register:0:8"]]
- 00b4a5b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00b4a5b0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a5b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a64c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00b4a64c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a64c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-bc3e2a35df0a31e54b2a78c3010f328e"></a>

### [`00b4a5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a5c4.md) → [`00b4a660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a660.md) _ZN8firebase4util10enum_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a6a0",
      "incomplete_value": true,
      "site": "00b4a6a0",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a604",
      "incomplete_value": true,
      "site": "00b4a604",
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
            "const:a68:8"
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
      "definition_site": "00b4a67c",
      "incomplete_value": true,
      "site": "00b4a67c",
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
      "definition_site": "00b4a5e0",
      "incomplete_value": true,
      "site": "00b4a5e0",
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
      "definition_site": "00b4a684",
      "incomplete_value": false,
      "site": "00b4a698",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a5e8",
      "incomplete_value": false,
      "site": "00b4a5fc",
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
            "const:b11:8"
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
      "00b4a674",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a684",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a6a0",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a674",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a684",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a6a0",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a5fc ["INT_ADD", "register:40f0:8", ["const:b4a5fc:8", "const:4:8"]]
- 00b4a5fc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a698 ["INT_ADD", "register:40f0:8", ["const:b4a698:8", "const:4:8"]]
+ 00b4a698 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a604 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00b4a604 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a6a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00b4a6a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a5d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00b4a5d8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a674 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00b4a674 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bcf6f1d19ad9865b7c0a705d1b7f166a"></a>

### [`00b4a634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a634.md) → [`00b4a6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a6d0.md) _ZN8firebase4util10enum_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4a6ec",
      "incomplete_value": false,
      "site": "00b4a6f0",
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
      "definition_site": "00b4a650",
      "incomplete_value": false,
      "site": "00b4a654",
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
      "definition_site": "00b4a6fc",
      "incomplete_value": true,
      "site": "00b4a708",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4a660",
      "incomplete_value": true,
      "site": "00b4a66c",
      "value": [
        "LOAD",
        "8",
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
      "00b4a6ec",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4a6fc",
      "DATA",
      [
        "storage",
        "01125a78",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a6ec",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4a6fc",
      "DATA",
      [
        "storage",
        "01125b78",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a654 ["INT_ADD", "register:40f0:8", ["const:b4a654:8", "const:4:8"]]
- 00b4a654 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4a6f0 ["INT_ADD", "register:40f0:8", ["const:b4a6f0:8", "const:4:8"]]
+ 00b4a6f0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4a650 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4a650 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a650 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a650 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a6ec ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4a6ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a6ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a6ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a65c ["COPY", "tmp:0:8", ["const:a78:8"]]
- 00b4a65c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a65c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a65c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4a6f8 ["COPY", "tmp:0:8", ["const:b78:8"]]
+ 00b4a6f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a6f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a6f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-353a53636e7d008f5d3acb71e3bc924f"></a>

### [`00b4a670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a670.md) → [`00b4a70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a70c.md) _ZN8firebase4util10enum_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a74c",
      "incomplete_value": true,
      "site": "00b4a74c",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a6b0",
      "incomplete_value": true,
      "site": "00b4a6b0",
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
            "const:a68:8"
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
      "definition_site": "00b4a728",
      "incomplete_value": true,
      "site": "00b4a728",
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
      "definition_site": "00b4a68c",
      "incomplete_value": true,
      "site": "00b4a68c",
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
      "definition_site": "00b4a730",
      "incomplete_value": false,
      "site": "00b4a744",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a694",
      "incomplete_value": false,
      "site": "00b4a6a8",
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
            "const:b11:8"
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
      "00b4a720",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a730",
      "PARAM",
      [
        "storage",
        "002c1b11",
        null,
        "string"
      ]
    ],
    [
      "00b4a74c",
      "WRITE",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a720",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a730",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4a74c",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a6a8 ["INT_ADD", "register:40f0:8", ["const:b4a6a8:8", "const:4:8"]]
- 00b4a6a8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a744 ["INT_ADD", "register:40f0:8", ["const:b4a744:8", "const:4:8"]]
+ 00b4a744 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a6b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00b4a6b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a74c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00b4a74c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a684 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00b4a684 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a720 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00b4a720 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-31272444fdc0bb92439cb1a01dcbecec"></a>

### [`00b4a6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a6e0.md) → [`00b4a77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a77c.md) _ZN8firebase4util10enum_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a798",
      "incomplete_value": false,
      "site": "00b4a79c",
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
      "definition_site": "00b4a6fc",
      "incomplete_value": false,
      "site": "00b4a700",
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
      "definition_site": "00b4a7a8",
      "incomplete_value": true,
      "site": "00b4a7b4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4a70c",
      "incomplete_value": true,
      "site": "00b4a718",
      "value": [
        "LOAD",
        "8",
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
      "00b4a798",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4a7a8",
      "DATA",
      [
        "storage",
        "01125a88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a798",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a7a8",
      "DATA",
      [
        "storage",
        "01125b88",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a700 ["INT_ADD", "register:40f0:8", ["const:b4a700:8", "const:4:8"]]
- 00b4a700 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4a79c ["INT_ADD", "register:40f0:8", ["const:b4a79c:8", "const:4:8"]]
+ 00b4a79c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4a6fc ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4a6fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a6fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a6fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a798 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4a798 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a798 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a798 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a708 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 00b4a708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4a708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4a7a4 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 00b4a7a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a7a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4a7a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30b295f08d8add0f9a7e3c630090f03e"></a>

### [`00b4a71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a71c.md) → [`00b4a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a7b8.md) _ZN8firebase4util4file19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cl

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
      "definition_site": "00b4a7e4",
      "incomplete_value": true,
      "site": "00b4a7e4",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a748",
      "incomplete_value": true,
      "site": "00b4a748",
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
            "const:a90:8"
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
      "definition_site": "00b4a7cc",
      "incomplete_value": true,
      "site": "00b4a7cc",
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
      "definition_site": "00b4a730",
      "incomplete_value": true,
      "site": "00b4a730",
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
      "definition_site": "00b4a7d8",
      "incomplete_value": false,
      "site": "00b4a7dc",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a73c",
      "incomplete_value": false,
      "site": "00b4a740",
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
            "const:c76:8"
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
      "00b4a7c8",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a7d8",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4a7e4",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a7c8",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a7d8",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4a7e4",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a740 ["INT_ADD", "register:40f0:8", ["const:b4a740:8", "const:4:8"]]
- 00b4a740 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a7dc ["INT_ADD", "register:40f0:8", ["const:b4a7dc:8", "const:4:8"]]
+ 00b4a7dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a748 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a748 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a7e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a7e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a72c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a72c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a7c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a7c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-048361940d1d9391024e1d03ff6e8d97"></a>

### [`00b4a75c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a75c.md) → [`00b4a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a7f8.md) _ZN8firebase4util4file19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4a824",
      "incomplete_value": true,
      "site": "00b4a824",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a788",
      "incomplete_value": true,
      "site": "00b4a788",
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
            "const:a90:8"
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
      "definition_site": "00b4a80c",
      "incomplete_value": true,
      "site": "00b4a80c",
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
      "definition_site": "00b4a770",
      "incomplete_value": true,
      "site": "00b4a770",
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
      "definition_site": "00b4a814",
      "incomplete_value": false,
      "site": "00b4a81c",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a778",
      "incomplete_value": false,
      "site": "00b4a780",
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
            "const:c76:8"
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
      "00b4a808",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a814",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4a824",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a808",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a814",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4a824",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a780 ["INT_ADD", "register:40f0:8", ["const:b4a780:8", "const:4:8"]]
- 00b4a780 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a81c ["INT_ADD", "register:40f0:8", ["const:b4a81c:8", "const:4:8"]]
+ 00b4a81c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a788 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a824 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a824 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a76c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a76c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a808 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a808 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6f3d027eccb2f01e14404365e302c79f"></a>

### [`00b4a79c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a79c.md) → [`00b4a838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a838.md) _ZN8firebase4util4file10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a868",
      "incomplete_value": true,
      "site": "00b4a868",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a7cc",
      "incomplete_value": true,
      "site": "00b4a7cc",
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
            "const:a90:8"
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
      "definition_site": "00b4a84c",
      "incomplete_value": true,
      "site": "00b4a84c",
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
      "definition_site": "00b4a7b0",
      "incomplete_value": true,
      "site": "00b4a7b0",
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
      "definition_site": "00b4a858",
      "incomplete_value": false,
      "site": "00b4a860",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a7bc",
      "incomplete_value": false,
      "site": "00b4a7c4",
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
            "const:c76:8"
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
      "00b4a848",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a858",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4a868",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a848",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a858",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4a868",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a7c4 ["INT_ADD", "register:40f0:8", ["const:b4a7c4:8", "const:4:8"]]
- 00b4a7c4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a860 ["INT_ADD", "register:40f0:8", ["const:b4a860:8", "const:4:8"]]
+ 00b4a860 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a7cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a7cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a868 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a868 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a7ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a7ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a848 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a848 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ac8cbda6ee6f811e555a5136177832ec"></a>

### [`00b4a7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a7e0.md) → [`00b4a87c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a87c.md) _ZN8firebase4util4file10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a8ac",
      "incomplete_value": true,
      "site": "00b4a8ac",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a810",
      "incomplete_value": true,
      "site": "00b4a810",
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
            "const:a90:8"
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
      "definition_site": "00b4a890",
      "incomplete_value": true,
      "site": "00b4a890",
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
      "definition_site": "00b4a7f4",
      "incomplete_value": true,
      "site": "00b4a7f4",
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
      "definition_site": "00b4a898",
      "incomplete_value": false,
      "site": "00b4a8a4",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a7fc",
      "incomplete_value": false,
      "site": "00b4a808",
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
            "const:c76:8"
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
      "00b4a88c",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a898",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4a8ac",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a88c",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a898",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4a8ac",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a808 ["INT_ADD", "register:40f0:8", ["const:b4a808:8", "const:4:8"]]
- 00b4a808 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4a8a4 ["INT_ADD", "register:40f0:8", ["const:b4a8a4:8", "const:4:8"]]
+ 00b4a8a4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a810 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a810 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a8ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a8ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a7f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a90:8"]]
- 00b4a7f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a88c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
+ 00b4a88c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8fc87f22d7f96074b9d4ad20446d39ee"></a>

### [`00b4a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a830.md) → [`00b4a8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a8cc.md) _ZN8firebase4util4file15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a954",
      "incomplete_value": true,
      "site": "00b4a954",
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
            "const:b98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a8b8",
      "incomplete_value": true,
      "site": "00b4a8b8",
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
            "const:a98:8"
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
      "definition_site": "00b4a900",
      "incomplete_value": true,
      "site": "00b4a90c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a864",
      "incomplete_value": true,
      "site": "00b4a870",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a90:8"
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
      "00b4a8e0",
      "READ",
      [
        "storage",
        "01125a98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a900",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a954",
      "WRITE",
      [
        "storage",
        "01125a98",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a8e0",
      "READ",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a900",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a954",
      "WRITE",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a870 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a870 ["INT_ADD", "register:40f0:8", ["const:b4a870:8", "const:4:8"]]
- 00b4a870 ["CALLIND", null, ["register:0:8"]]
+ 00b4a90c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a90c ["INT_ADD", "register:40f0:8", ["const:b4a90c:8", "const:4:8"]]
+ 00b4a90c ["CALLIND", null, ["register:0:8"]]
- 00b4a8b8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a8b8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a98:8"]]
- 00b4a8b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4a954 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4a954 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b98:8"]]
+ 00b4a954 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a844 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a98:8"]]
- 00b4a844 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4a844 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4a8e0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b98:8"]]
+ 00b4a8e0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a8e0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-ac80ebff296f6889fa89b7ed7fa35b38"></a>

### [`00b4a8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a8cc.md) → [`00b4a968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a968.md) _ZN8firebase4util4file12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4a9a4",
      "incomplete_value": true,
      "site": "00b4a9a4",
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
            "const:b98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a908",
      "incomplete_value": true,
      "site": "00b4a908",
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
            "const:a98:8"
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
      "definition_site": "00b4a9f4",
      "incomplete_value": true,
      "site": "00b4a9f4",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a958",
      "incomplete_value": true,
      "site": "00b4a958",
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
            "const:a90:8"
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
      "definition_site": "00b4a980",
      "incomplete_value": true,
      "site": "00b4a980",
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
      "definition_site": "00b4a8e4",
      "incomplete_value": true,
      "site": "00b4a8e4",
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
      "00b4a97c",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a988",
      "READ",
      [
        "storage",
        "01125a98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a9a4",
      "WRITE",
      [
        "storage",
        "01125a98",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a97c",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a988",
      "READ",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a9a4",
      "WRITE",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a908 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a908 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a908 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a98:8"]]
- 00b4a908 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a9a4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a9a4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a9a4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b98:8"]]
+ 00b4a9a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a954 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a954 ["INT_ADD", "register:40f0:8", ["const:b4a954:8", "const:4:8"]]
- 00b4a954 ["CALLIND", null, ["register:0:8"]]
+ 00b4a9f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a9f0 ["INT_ADD", "register:40f0:8", ["const:b4a9f0:8", "const:4:8"]]
+ 00b4a9f0 ["CALLIND", null, ["register:0:8"]]
- 00b4a958 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a90:8"]]
- 00b4a958 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a958 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a9f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
+ 00b4a9f4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a9f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-2ba64553a7e368096541f7d6a4796e4a"></a>

### [`00b4a96c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a96c.md) → [`00b4aa08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aa08.md) _ZN8firebase4util4file14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4aa48",
      "incomplete_value": true,
      "site": "00b4aa48",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a9ac",
      "incomplete_value": true,
      "site": "00b4a9ac",
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
            "const:a90:8"
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
      "definition_site": "00b4aa24",
      "incomplete_value": true,
      "site": "00b4aa24",
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
      "definition_site": "00b4a988",
      "incomplete_value": true,
      "site": "00b4a988",
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
      "definition_site": "00b4aa2c",
      "incomplete_value": false,
      "site": "00b4aa40",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a990",
      "incomplete_value": false,
      "site": "00b4a9a4",
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
            "const:c76:8"
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
      "00b4aa1c",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aa2c",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4aa48",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4aa1c",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aa2c",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4aa48",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a9a4 ["INT_ADD", "register:40f0:8", ["const:b4a9a4:8", "const:4:8"]]
- 00b4a9a4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4aa40 ["INT_ADD", "register:40f0:8", ["const:b4aa40:8", "const:4:8"]]
+ 00b4aa40 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4a9ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a90:8"]]
- 00b4a9ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4aa48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
+ 00b4aa48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a980 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a90:8"]]
- 00b4a980 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4aa1c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
+ 00b4aa1c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ec0c2fee32ec53b55eb0f920bcdd8e66"></a>

### [`00b4a9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4a9dc.md) → [`00b4aa78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aa78.md) _ZN8firebase4util4file11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b510.md) · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5e0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4aa94",
      "incomplete_value": false,
      "site": "00b4aa98",
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
      "definition_site": "00b4a9f8",
      "incomplete_value": false,
      "site": "00b4a9fc",
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
      "definition_site": "00b4aaa4",
      "incomplete_value": true,
      "site": "00b4aab0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4aa08",
      "incomplete_value": true,
      "site": "00b4aa14",
      "value": [
        "LOAD",
        "8",
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
      "00b4aa94",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4aaa4",
      "DATA",
      [
        "storage",
        "01125aa0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4aa94",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4aaa4",
      "DATA",
      [
        "storage",
        "01125ba0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a9fc ["INT_ADD", "register:40f0:8", ["const:b4a9fc:8", "const:4:8"]]
- 00b4a9fc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4aa98 ["INT_ADD", "register:40f0:8", ["const:b4aa98:8", "const:4:8"]]
+ 00b4aa98 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4a9f8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4a9f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a9f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a9f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4aa94 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4aa94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4aa94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4aa94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4aa04 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00b4aa04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4aa04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4aa04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4aaa0 ["COPY", "tmp:0:8", ["const:ba0:8"]]
+ 00b4aaa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4aaa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4aaa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d990a3651cdef7fc045b57bb28f3f0e4"></a>

### [`00b4aa18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4aa18.md) → [`00b4aab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aab4.md) _ZN8firebase4util4file13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4aaf4",
      "incomplete_value": true,
      "site": "00b4aaf4",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4aa58",
      "incomplete_value": true,
      "site": "00b4aa58",
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
            "const:a90:8"
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
      "definition_site": "00b4aad0",
      "incomplete_value": true,
      "site": "00b4aad0",
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
      "definition_site": "00b4aa34",
      "incomplete_value": true,
      "site": "00b4aa34",
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
      "definition_site": "00b4aad8",
      "incomplete_value": false,
      "site": "00b4aaec",
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
            "const:cb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4aa3c",
      "incomplete_value": false,
      "site": "00b4aa50",
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
            "const:c76:8"
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
      "00b4aac8",
      "READ",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aad8",
      "PARAM",
      [
        "storage",
        "002b6c76",
        null,
        "string"
      ]
    ],
    [
      "00b4aaf4",
      "WRITE",
      [
        "storage",
        "01125a90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4aac8",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aad8",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4aaf4",
      "WRITE",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aa50 ["INT_ADD", "register:40f0:8", ["const:b4aa50:8", "const:4:8"]]
- 00b4aa50 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4aaec ["INT_ADD", "register:40f0:8", ["const:b4aaec:8", "const:4:8"]]
+ 00b4aaec ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4aa58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a90:8"]]
- 00b4aa58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4aaf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
+ 00b4aaf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4aa2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a90:8"]]
- 00b4aa2c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4aac8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
+ 00b4aac8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-58185ea797e08854172bb1936617c1d1"></a>

### [`00b4aa88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4aa88.md) → [`00b4ab24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ab24.md) _ZN8firebase4util4file10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4ab40",
      "incomplete_value": false,
      "site": "00b4ab44",
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
      "definition_site": "00b4aaa4",
      "incomplete_value": false,
      "site": "00b4aaa8",
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
      "definition_site": "00b4ab50",
      "incomplete_value": true,
      "site": "00b4ab5c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4aab4",
      "incomplete_value": true,
      "site": "00b4aac0",
      "value": [
        "LOAD",
        "8",
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
      "00b4ab40",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4ab50",
      "DATA",
      [
        "storage",
        "01125ae0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ab40",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4ab50",
      "DATA",
      [
        "storage",
        "01125be0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aaa8 ["INT_ADD", "register:40f0:8", ["const:b4aaa8:8", "const:4:8"]]
- 00b4aaa8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4ab44 ["INT_ADD", "register:40f0:8", ["const:b4ab44:8", "const:4:8"]]
+ 00b4ab44 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4aaa4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4aaa4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aaa4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aaa4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ab40 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4ab40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ab40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ab40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4aab0 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 00b4aab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4aab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4aab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4ab4c ["COPY", "tmp:0:8", ["const:be0:8"]]
+ 00b4ab4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ab4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ab4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-995b5537c5d251fb9abc435670c220c2"></a>

### [`00b4aac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4aac4.md) → [`00b4ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ab60.md) _ZN8firebase4util11float_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4ab8c",
      "incomplete_value": true,
      "site": "00b4ab8c",
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
      "definition_site": "00b4aaf0",
      "incomplete_value": true,
      "site": "00b4aaf0",
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
      "definition_site": "00b4ab74",
      "incomplete_value": true,
      "site": "00b4ab74",
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
      "definition_site": "00b4aad8",
      "incomplete_value": true,
      "site": "00b4aad8",
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
      "definition_site": "00b4ab80",
      "incomplete_value": false,
      "site": "00b4ab84",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4aae4",
      "incomplete_value": false,
      "site": "00b4aae8",
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
            "const:580:8"
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
      "00b4ab70",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ab80",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4ab8c",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ab70",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ab80",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4ab8c",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aae8 ["INT_ADD", "register:40f0:8", ["const:b4aae8:8", "const:4:8"]]
- 00b4aae8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4ab84 ["INT_ADD", "register:40f0:8", ["const:b4ab84:8", "const:4:8"]]
+ 00b4ab84 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4aaf0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4aaf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ab8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4ab8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4aad4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4aad4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4ab70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4ab70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a3aaabff3c6696a125a40b5ecad827ec"></a>

### [`00b4ab04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ab04.md) → [`00b4aba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aba0.md) _ZN8firebase4util11float_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4abcc",
      "incomplete_value": true,
      "site": "00b4abcc",
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
      "definition_site": "00b4ab30",
      "incomplete_value": true,
      "site": "00b4ab30",
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
      "definition_site": "00b4abb4",
      "incomplete_value": true,
      "site": "00b4abb4",
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
      "definition_site": "00b4ab18",
      "incomplete_value": true,
      "site": "00b4ab18",
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
      "definition_site": "00b4abbc",
      "incomplete_value": false,
      "site": "00b4abc4",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ab20",
      "incomplete_value": false,
      "site": "00b4ab28",
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
            "const:580:8"
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
      "00b4abb0",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4abbc",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4abcc",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4abb0",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4abbc",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4abcc",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ab28 ["INT_ADD", "register:40f0:8", ["const:b4ab28:8", "const:4:8"]]
- 00b4ab28 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4abc4 ["INT_ADD", "register:40f0:8", ["const:b4abc4:8", "const:4:8"]]
+ 00b4abc4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4ab30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4ab30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4abcc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4abcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ab14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4ab14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4abb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4abb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4cee146c0772a2939f93d799fa425556"></a>

### [`00b4ab44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ab44.md) → [`00b4abe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4abe0.md) _ZN8firebase4util11float_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4ac10",
      "incomplete_value": true,
      "site": "00b4ac10",
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
      "definition_site": "00b4ab74",
      "incomplete_value": true,
      "site": "00b4ab74",
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
      "definition_site": "00b4abf4",
      "incomplete_value": true,
      "site": "00b4abf4",
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
      "definition_site": "00b4ab58",
      "incomplete_value": true,
      "site": "00b4ab58",
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
      "definition_site": "00b4ac00",
      "incomplete_value": false,
      "site": "00b4ac08",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ab64",
      "incomplete_value": false,
      "site": "00b4ab6c",
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
            "const:580:8"
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
      "00b4abf0",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac00",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4ac10",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4abf0",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac00",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4ac10",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ab6c ["INT_ADD", "register:40f0:8", ["const:b4ab6c:8", "const:4:8"]]
- 00b4ab6c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4ac08 ["INT_ADD", "register:40f0:8", ["const:b4ac08:8", "const:4:8"]]
+ 00b4ac08 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4ab74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4ab74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ac10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4ac10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ab54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4ab54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4abf0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4abf0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbc84fcef44e76cbc4657eaccb171554"></a>

### [`00b4ab88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ab88.md) → [`00b4ac24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ac24.md) _ZN8firebase4util11float_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ac54",
      "incomplete_value": true,
      "site": "00b4ac54",
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
      "definition_site": "00b4abb8",
      "incomplete_value": true,
      "site": "00b4abb8",
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
      "definition_site": "00b4ac38",
      "incomplete_value": true,
      "site": "00b4ac38",
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
      "definition_site": "00b4ab9c",
      "incomplete_value": true,
      "site": "00b4ab9c",
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
      "definition_site": "00b4ac40",
      "incomplete_value": false,
      "site": "00b4ac4c",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4aba4",
      "incomplete_value": false,
      "site": "00b4abb0",
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
            "const:580:8"
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
      "00b4ac34",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac40",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4ac54",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ac34",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac40",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4ac54",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4abb0 ["INT_ADD", "register:40f0:8", ["const:b4abb0:8", "const:4:8"]]
- 00b4abb0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4ac4c ["INT_ADD", "register:40f0:8", ["const:b4ac4c:8", "const:4:8"]]
+ 00b4ac4c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4abb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4abb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ac54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4ac54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ab98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00b4ab98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4ac34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00b4ac34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-05de10570a3972a6902c16246befd8b8"></a>

### [`00b4abd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4abd8.md) → [`00b4ac74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ac74.md) _ZN8firebase4util11float_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4acfc",
      "incomplete_value": true,
      "site": "00b4acfc",
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
      "definition_site": "00b4ac60",
      "incomplete_value": true,
      "site": "00b4ac60",
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
      "definition_site": "00b4aca8",
      "incomplete_value": true,
      "site": "00b4acb4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ac0c",
      "incomplete_value": true,
      "site": "00b4ac18",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4ac88",
      "READ",
      [
        "storage",
        "01125af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aca8",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4acfc",
      "WRITE",
      [
        "storage",
        "01125af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4ac88",
      "READ",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aca8",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4acfc",
      "WRITE",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ac18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4ac18 ["INT_ADD", "register:40f0:8", ["const:b4ac18:8", "const:4:8"]]
- 00b4ac18 ["CALLIND", null, ["register:0:8"]]
+ 00b4acb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4acb4 ["INT_ADD", "register:40f0:8", ["const:b4acb4:8", "const:4:8"]]
+ 00b4acb4 ["CALLIND", null, ["register:0:8"]]
- 00b4ac60 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4ac60 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:af0:8"]]
- 00b4ac60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4acfc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4acfc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf0:8"]]
+ 00b4acfc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4abec ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:af0:8"]]
- 00b4abec ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4abec ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4ac88 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:bf0:8"]]
+ 00b4ac88 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4ac88 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-6ed79f41d17703c0389e7873c25648e0"></a>

### [`00b4ac74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ac74.md) → [`00b4ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ad10.md) _ZN8firebase4util11float_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4ad4c",
      "incomplete_value": true,
      "site": "00b4ad4c",
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
      "definition_site": "00b4acb0",
      "incomplete_value": true,
      "site": "00b4acb0",
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
      "definition_site": "00b4ad9c",
      "incomplete_value": true,
      "site": "00b4ad9c",
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
      "definition_site": "00b4ad00",
      "incomplete_value": true,
      "site": "00b4ad00",
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
      "definition_site": "00b4ad28",
      "incomplete_value": true,
      "site": "00b4ad28",
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
      "definition_site": "00b4ac8c",
      "incomplete_value": true,
      "site": "00b4ac8c",
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
      "00b4ad24",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad30",
      "READ",
      [
        "storage",
        "01125af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ad4c",
      "WRITE",
      [
        "storage",
        "01125af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4ad24",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad30",
      "READ",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ad4c",
      "WRITE",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4acb0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4acb0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4acb0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:af0:8"]]
- 00b4acb0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4ad4c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4ad4c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4ad4c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf0:8"]]
+ 00b4ad4c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4acfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4acfc ["INT_ADD", "register:40f0:8", ["const:b4acfc:8", "const:4:8"]]
- 00b4acfc ["CALLIND", null, ["register:0:8"]]
+ 00b4ad98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4ad98 ["INT_ADD", "register:40f0:8", ["const:b4ad98:8", "const:4:8"]]
+ 00b4ad98 ["CALLIND", null, ["register:0:8"]]
- 00b4ad00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00b4ad00 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4ad00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4ad9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00b4ad9c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4ad9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8efb9d8fe5d973933a9f49b58e5b4423"></a>

### [`00b4ad14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ad14.md) → [`00b4adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4adb0.md) _ZN8firebase4util11float_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4adf0",
      "incomplete_value": true,
      "site": "00b4adf0",
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
      "definition_site": "00b4ad54",
      "incomplete_value": true,
      "site": "00b4ad54",
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
      "definition_site": "00b4adcc",
      "incomplete_value": true,
      "site": "00b4adcc",
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
      "definition_site": "00b4ad30",
      "incomplete_value": true,
      "site": "00b4ad30",
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
      "definition_site": "00b4add4",
      "incomplete_value": false,
      "site": "00b4ade8",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ad38",
      "incomplete_value": false,
      "site": "00b4ad4c",
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
            "const:580:8"
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
      "00b4adc4",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4add4",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4adf0",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4adc4",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4add4",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4adf0",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ad4c ["INT_ADD", "register:40f0:8", ["const:b4ad4c:8", "const:4:8"]]
- 00b4ad4c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4ade8 ["INT_ADD", "register:40f0:8", ["const:b4ade8:8", "const:4:8"]]
+ 00b4ade8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4ad54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00b4ad54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4adf0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00b4adf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ad28 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00b4ad28 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4adc4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00b4adc4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f7c6a06f55faa38fc5b994fdcff12a88"></a>

### [`00b4ad84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4ad84.md) → [`00b4ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ae20.md) _ZN8firebase4util11float_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4ae3c",
      "incomplete_value": false,
      "site": "00b4ae40",
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
      "definition_site": "00b4ada0",
      "incomplete_value": false,
      "site": "00b4ada4",
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
      "definition_site": "00b4ae4c",
      "incomplete_value": true,
      "site": "00b4ae58",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4adb0",
      "incomplete_value": true,
      "site": "00b4adbc",
      "value": [
        "LOAD",
        "8",
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
      "00b4ae3c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4ae4c",
      "DATA",
      [
        "storage",
        "01125af8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ae3c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4ae4c",
      "DATA",
      [
        "storage",
        "01125bf8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ada4 ["INT_ADD", "register:40f0:8", ["const:b4ada4:8", "const:4:8"]]
- 00b4ada4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4ae40 ["INT_ADD", "register:40f0:8", ["const:b4ae40:8", "const:4:8"]]
+ 00b4ae40 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4ada0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4ada0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ada0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ada0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ae3c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4ae3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ae3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ae3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4adac ["COPY", "tmp:0:8", ["const:af8:8"]]
- 00b4adac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4adac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4adac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4ae48 ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 00b4ae48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ae48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ae48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-72619e48889fdc18a352bf0680093074"></a>

### [`00b4adc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4a/00b4adc0.md) → [`00b4ae5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ae5c.md) _ZN8firebase4util11float_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ae9c",
      "incomplete_value": true,
      "site": "00b4ae9c",
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
      "definition_site": "00b4ae00",
      "incomplete_value": true,
      "site": "00b4ae00",
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
      "definition_site": "00b4ae78",
      "incomplete_value": true,
      "site": "00b4ae78",
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
      "definition_site": "00b4addc",
      "incomplete_value": true,
      "site": "00b4addc",
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
      "definition_site": "00b4ae80",
      "incomplete_value": false,
      "site": "00b4ae94",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ade4",
      "incomplete_value": false,
      "site": "00b4adf8",
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
            "const:580:8"
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
      "00b4ae70",
      "READ",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae80",
      "PARAM",
      [
        "storage",
        "002a9580",
        null,
        "string"
      ]
    ],
    [
      "00b4ae9c",
      "WRITE",
      [
        "storage",
        "01125ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ae70",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae80",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4ae9c",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4adf8 ["INT_ADD", "register:40f0:8", ["const:b4adf8:8", "const:4:8"]]
- 00b4adf8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4ae94 ["INT_ADD", "register:40f0:8", ["const:b4ae94:8", "const:4:8"]]
+ 00b4ae94 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4ae00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00b4ae00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ae9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00b4ae9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4add4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00b4add4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4ae70 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00b4ae70 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


