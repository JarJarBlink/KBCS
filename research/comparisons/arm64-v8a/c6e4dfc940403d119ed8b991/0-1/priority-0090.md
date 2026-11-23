# v16.0.1 → v16.0.2 · 最優先の変更候補 (90)

[一覧の目次](README.md)

<a id="compare-b62cf0df126273332a56e75b343dc8cf"></a>

### [`00bc38cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc38cc.md) → [`00bc3968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3968.md) _ZN8firebase13remote_config8internal35config_update_listener_registration19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8in

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
      "definition_site": "00bc397c",
      "incomplete_value": true,
      "site": "00bc397c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc38e0",
      "incomplete_value": true,
      "site": "00bc38e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bc3978",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bc38ec",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bc38f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bc3978",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3988",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc398c",
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
- 00bc38e0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bc38e0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bc397c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bc397c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bc38dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc38dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3978 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc3978 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bc38ec ["COPY", "tmp:0:8", ["const:82f:8"]]
- 00bc38ec ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bc38ec ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bc38ec ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-7ebd6b16fd65181f3c810678e23c0ef9"></a>

### [`00bc390c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc390c.md) → [`00bc39a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc39a8.md) _ZN8firebase13remote_config8internal35config_update_listener_registration19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8in

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
      "definition_site": "00bc39d4",
      "incomplete_value": true,
      "site": "00bc39d4",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3938",
      "incomplete_value": true,
      "site": "00bc3938",
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
            "const:698:8"
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
      "definition_site": "00bc39bc",
      "incomplete_value": true,
      "site": "00bc39bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc3920",
      "incomplete_value": true,
      "site": "00bc3920",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc39c4",
      "incomplete_value": false,
      "site": "00bc39cc",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3928",
      "incomplete_value": false,
      "site": "00bc3930",
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
            "const:82f:8"
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
      "00bc39b8",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc39c4",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ],
    [
      "00bc39d4",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc39b8",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc39c4",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc39d4",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3930 ["INT_ADD", "register:40f0:8", ["const:bc3930:8", "const:4:8"]]
- 00bc3930 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bc39cc ["INT_ADD", "register:40f0:8", ["const:bc39cc:8", "const:4:8"]]
+ 00bc39cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bc3938 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc3938 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc39d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc39d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc391c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc391c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc39b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc39b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cecbff426946c618e6913dfdb8443642"></a>

### [`00bc394c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc394c.md) → [`00bc39e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc39e8.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bc3a18",
      "incomplete_value": true,
      "site": "00bc3a18",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc397c",
      "incomplete_value": true,
      "site": "00bc397c",
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
            "const:698:8"
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
      "definition_site": "00bc39fc",
      "incomplete_value": true,
      "site": "00bc39fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc3960",
      "incomplete_value": true,
      "site": "00bc3960",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc3a08",
      "incomplete_value": false,
      "site": "00bc3a10",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc396c",
      "incomplete_value": false,
      "site": "00bc3974",
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
            "const:82f:8"
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
      "00bc39f8",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a08",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ],
    [
      "00bc3a18",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc39f8",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a08",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc3a18",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3974 ["INT_ADD", "register:40f0:8", ["const:bc3974:8", "const:4:8"]]
- 00bc3974 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bc3a10 ["INT_ADD", "register:40f0:8", ["const:bc3a10:8", "const:4:8"]]
+ 00bc3a10 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bc397c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc397c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3a18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc3a18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc395c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc395c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc39f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc39f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-143ee4055ea4599a46e71703bb364931"></a>

### [`00bc3990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3990.md) → [`00bc3a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3a2c.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc3a5c",
      "incomplete_value": true,
      "site": "00bc3a5c",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc39c0",
      "incomplete_value": true,
      "site": "00bc39c0",
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
            "const:698:8"
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
      "definition_site": "00bc3a40",
      "incomplete_value": true,
      "site": "00bc3a40",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc39a4",
      "incomplete_value": true,
      "site": "00bc39a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bc3a48",
      "incomplete_value": false,
      "site": "00bc3a54",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc39ac",
      "incomplete_value": false,
      "site": "00bc39b8",
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
            "const:82f:8"
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
      "00bc3a3c",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a48",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ],
    [
      "00bc3a5c",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3a3c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a48",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc3a5c",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc39b8 ["INT_ADD", "register:40f0:8", ["const:bc39b8:8", "const:4:8"]]
- 00bc39b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bc3a54 ["INT_ADD", "register:40f0:8", ["const:bc3a54:8", "const:4:8"]]
+ 00bc3a54 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bc39c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc39c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3a5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc3a5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc39a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc39a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3a3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00bc3a3c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-47b889f052a6ca1090ea5968099ef5b8"></a>

### [`00bc39e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc39e0.md) → [`00bc3a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3a7c.md) _ZN8firebase13remote_config8internal35config_update_listener_registration15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc3a90",
      "READ",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3a9c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bc3a3c"
      ]
    ],
    [
      "unmatched:00bc3a14",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3a90",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3a9c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3ad8"
      ]
    ],
    [
      "00bc3ab0",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc39f4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:6a0:8"]]
- 00bc39f4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bc39f4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bc3a90 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7a0:8"]]
+ 00bc3a90 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3a90 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bc3a00 ["BRANCH", null, ["local:b3:8"]]
+ 00bc3a9c ["BRANCH", null, ["local:b4:8"]]
- 00bc3a14 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:698:8"]]
- 00bc3a14 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e8187cd202cad5026f15926dc6cd1c60"></a>

### [`00bc3a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3a4c.md) → [`00bc3ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3ae8.md) _ZN8firebase13remote_config8internal35config_update_listener_registration12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bc3b00",
      "incomplete_value": true,
      "site": "00bc3b00",
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
      "definition_site": "00bc3a64",
      "incomplete_value": true,
      "site": "00bc3a64",
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
      "00bc3afc",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3b08",
      "READ",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3b10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bc3a8c"
      ]
    ]
  ],
  "added": [
    [
      "00bc3afc",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3b08",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3b10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3b28"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3a64 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bc3a64 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bc3b00 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bc3b00 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bc3a60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc3a60 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3afc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
+ 00bc3afc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bc3a6c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:6a0:8"]]
- 00bc3a6c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bc3a6c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bc3b08 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7a0:8"]]
+ 00bc3b08 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3b08 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-8878d5c8f5c2587b8bb4369ca645a884"></a>

### [`00bc3abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3abc.md) → [`00bc3b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3b58.md) _ZN8firebase13remote_config8internal35config_update_listener_registration14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc3b7c",
      "incomplete_value": false,
      "site": "00bc3b90",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3ae0",
      "incomplete_value": false,
      "site": "00bc3af4",
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
            "const:82f:8"
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
      "unmatched:00bc3ad0",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bc3ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3b9c"
      ]
    ],
    [
      "unmatched:00bc3ae0",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc3b6c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3b74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3b9c"
      ]
    ],
    [
      "00bc3b7c",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3af4 ["INT_ADD", "register:40f0:8", ["const:bc3af4:8", "const:4:8"]]
- 00bc3af4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bc3b90 ["INT_ADD", "register:40f0:8", ["const:bc3b90:8", "const:4:8"]]
+ 00bc3b90 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bc3ad0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc3ad0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bc3ad4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-5c72a6587195d29424418e8685ad1f7b"></a>

### [`00bc3b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3b2c.md) → [`00bc3bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3bc8.md) _ZN8firebase13remote_config8internal35config_update_listener_registration11GetMethodIdENS2_6MethodE

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
      "definition_site": "00bc3be4",
      "incomplete_value": false,
      "site": "00bc3be8",
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
      "definition_site": "00bc3b48",
      "incomplete_value": false,
      "site": "00bc3b4c",
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
      "definition_site": "00bc3bf4",
      "incomplete_value": true,
      "site": "00bc3c00",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc3b58",
      "incomplete_value": true,
      "site": "00bc3b64",
      "value": [
        "LOAD",
        "8",
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
      "00bc3be4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bc3bf4",
      "DATA",
      [
        "storage",
        "011266a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3be4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc3bf4",
      "DATA",
      [
        "storage",
        "011267a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3b4c ["INT_ADD", "register:40f0:8", ["const:bc3b4c:8", "const:4:8"]]
- 00bc3b4c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc3be8 ["INT_ADD", "register:40f0:8", ["const:bc3be8:8", "const:4:8"]]
+ 00bc3be8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc3b48 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bc3b48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3b48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3b48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3be4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bc3be4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3be4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3be4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3b54 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 00bc3b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bc3b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bc3b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bc3bf0 ["COPY", "tmp:0:8", ["const:7a8:8"]]
+ 00bc3bf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bc3bf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bc3bf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bd868b5ab9e2658559b77425ebd7074a"></a>

### [`00bc3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3b68.md) → [`00bc3c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3c04.md) _ZN8firebase13remote_config8internal35config_update_listener_registration13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc3c28",
      "incomplete_value": false,
      "site": "00bc3c3c",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3b8c",
      "incomplete_value": false,
      "site": "00bc3ba0",
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
            "const:82f:8"
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
      "unmatched:00bc3b7c",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bc3b84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3c48"
      ]
    ],
    [
      "unmatched:00bc3b8c",
      "PARAM",
      [
        "storage",
        "002a982f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc3c18",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3c20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc3c48"
      ]
    ],
    [
      "00bc3c28",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3ba0 ["INT_ADD", "register:40f0:8", ["const:bc3ba0:8", "const:4:8"]]
- 00bc3ba0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bc3c3c ["INT_ADD", "register:40f0:8", ["const:bc3c3c:8", "const:4:8"]]
+ 00bc3c3c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bc3b7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc3b7c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bc3b80 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-f9708efc8d9750291208d9273372698f"></a>

### [`00bc3bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3bd8.md) → [`00bc3c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3c74.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10GetFieldIdENS2_5FieldE

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
      "definition_site": "00bc3c90",
      "incomplete_value": false,
      "site": "00bc3c94",
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
      "definition_site": "00bc3bf4",
      "incomplete_value": false,
      "site": "00bc3bf8",
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
      "definition_site": "00bc3ca0",
      "incomplete_value": true,
      "site": "00bc3cac",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc3c04",
      "incomplete_value": true,
      "site": "00bc3c10",
      "value": [
        "LOAD",
        "8",
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
      "00bc3c90",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bc3ca0",
      "DATA",
      [
        "storage",
        "011266b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc3c90",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc3ca0",
      "DATA",
      [
        "storage",
        "011267b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3bf8 ["INT_ADD", "register:40f0:8", ["const:bc3bf8:8", "const:4:8"]]
- 00bc3bf8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc3c94 ["INT_ADD", "register:40f0:8", ["const:bc3c94:8", "const:4:8"]]
+ 00bc3c94 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc3bf4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bc3bf4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3bf4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3bf4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c90 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bc3c90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3c00 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 00bc3c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bc3c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bc3c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bc3c9c ["COPY", "tmp:0:8", ["const:7b0:8"]]
+ 00bc3c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bc3c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bc3c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e57cff20593209d673dce08feeda4f6"></a>

### [`00bc3c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3c1c.md) → [`00bc3cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3cb8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternalC1ERKNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d870.md) · 呼出先 22件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5d940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d940.md) · 呼出先 22件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 44.21% / 新版 44.21%

優先判定に残った影響 `call_argument_candidate` 31件, `unresolved_branch_alignment` 29件, `unresolved_call_alignment` 37件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 25件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 6件, `store_condition` 1件, `store_destination` 5件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc3d40",
      "incomplete_value": true,
      "site": "00bc3d40",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3ca4",
      "incomplete_value": true,
      "site": "00bc3ca4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc3d40",
      "incomplete_value": true,
      "site": "00bc3d40",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3ca4",
      "incomplete_value": true,
      "site": "00bc3ca4",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc3e44",
      "incomplete_value": true,
      "site": "00bc3e5c",
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
      "definition_site": "00bc3da8",
      "incomplete_value": true,
      "site": "00bc3dc0",
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
    "ordinal": 36,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc3d20",
      "READ",
      [
        "storage",
        "00c9b978",
        null,
        "pointer"
      ]
    ],
    [
      "00bc3d40",
      "DATA",
      [
        "storage",
        "011266b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bc3d40",
      "DATA",
      [
        "storage",
        "011266bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc3d20",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bc3d40",
      "DATA",
      [
        "storage",
        "011267b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bc3d40",
      "DATA",
      [
        "storage",
        "011267bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3c5c ["INT_ADD", "register:40f0:8", ["const:bc3c5c:8", "const:4:8"]]
- 00bc3c5c ["CALL", null, ["callee:00c5ad10:8"]]
+ 00bc3cf8 ["INT_ADD", "register:40f0:8", ["const:bc3cf8:8", "const:4:8"]]
+ 00bc3cf8 ["CALL", null, ["callee:00c5ad10:8"]]
- 00bc3cac ["INT_ADD", "register:40f0:8", ["const:bc3cac:8", "const:4:8"]]
- 00bc3cac ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc3d48 ["INT_ADD", "register:40f0:8", ["const:bc3d48:8", "const:4:8"]]
+ 00bc3d48 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc3ce8 ["INT_ADD", "register:40f0:8", ["const:bc3ce8:8", "const:4:8"]]
- 00bc3ce8 ["CALL", null, ["callee:00c5be30:8"]]
+ 00bc3d84 ["INT_ADD", "register:40f0:8", ["const:bc3d84:8", "const:4:8"]]
+ 00bc3d84 ["CALL", null, ["callee:00c5be30:8"]]
~~~


<a id="compare-35881f0895ffeb234e63919b3a025378"></a>

### [`00bc4804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4804.md) → [`00bc48a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc48a0.md) _ZNSt6__ndk16vectorIN8firebase8internal12EmbeddedFileENS_9allocatorIS3_EEEC2ERKS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d970.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5da40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da40.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 91.11% / 新版 91.11%

アドレスに依存する影響 `store_condition` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bc484c"
      ],
      [
        "FALL_THROUGH",
        "00bc48e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc48e4",
      "incomplete_value": true,
      "site": "00bc48fc",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:aaa000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4848",
      "incomplete_value": true,
      "site": "00bc4860",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40b0:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bc484c"
      ],
      [
        "FALL_THROUGH",
        "00bc48e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc48e4",
      "incomplete_value": true,
      "site": "00bc48fc",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:aaa000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4848",
      "incomplete_value": true,
      "site": "00bc4860",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40b0:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bc484c"
      ],
      [
        "FALL_THROUGH",
        "00bc48e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc48e4",
      "incomplete_value": true,
      "site": "00bc4900",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:aaa000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4848",
      "incomplete_value": true,
      "site": "00bc4864",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40b0:8"
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
      "unmatched:00bc484c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc494c"
      ]
    ]
  ],
  "added": [
    [
      "00bc48e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc494c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc4840 ["INT_AND", "register:4040:8", ["register:4040:8", "const:ffffffffffff0000:8"]]
- 00bc4840 ["INT_OR", "register:4040:8", ["register:4040:8", "const:aaab:8"]]
- 00bc4844 ["INT_AND", "register:4040:8", ["register:4040:8", "const:ffffffffffff:8"]]
- 00bc4844 ["INT_OR", "register:4040:8", ["register:4040:8", "const:aaa000000000000:8"]]
- 00bc4848 ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:40b0:8"]]
- 00bc4848 ["INT_SBORROW", "register:106:1", ["register:40b0:8", "register:4040:8"]]
- 00bc4848 ["INT_SUB", "tmp:0:8", ["register:40b0:8", "register:4040:8"]]
- 00bc4848 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-a61329b5c707d9500473bbc8dc387eb6"></a>

### [`00bc4948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4948.md) → [`00bc49e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc49e4.md) FUN_00bc49e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00bc496c ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
+ 00bc4a08 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 00bc4994 ["INT_ADD", "register:40f0:8", ["const:bc4994:8", "const:4:8"]]
- 00bc4994 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc4a30 ["INT_ADD", "register:40f0:8", ["const:bc4a30:8", "const:4:8"]]
+ 00bc4a30 ["CALL", null, ["callee:00c57f80:8"]]
- 00bc49a0 ["BRANCH", null, ["local:b9:8"]]
+ 00bc4a3c ["BRANCH", null, ["local:b10:8"]]
~~~


<a id="compare-ff2152a85550e0e5a89ba5f7773c0cb2"></a>

### [`00bc49cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc49cc.md) → [`00bc4a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4a68.md) _ZN8firebase13remote_config8internal20RemoteConfigInternalD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d880.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) [`00c5ac30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac30.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md) [`00c5af00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af00.md)
- 新版 呼出元 1件 [`00c5d950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d950.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bc49cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc49d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc49d4",
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
      "00bc4a68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bc4a6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bc4a70",
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
- 00bc49cc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bc49cc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bc49cc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bc49cc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bc49d0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bc49d0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bc49d0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bc49d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bc49d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bc49d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bc49d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bc49d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-468b703d5ae592374eddf4d592a1e9d9"></a>

### [`00bc4b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4b3c.md) → [`00bc4bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4bd8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7CleanupEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d800.md) · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5afd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afd0.md)
- 新版 呼出元 1件 [`00c5d8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8d0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.36% / 新版 26.36%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 28件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 19件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc4c0c",
      "incomplete_value": true,
      "site": "00bc4c0c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4b70",
      "incomplete_value": true,
      "site": "00bc4b70",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
              ]
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
    "kind": "store_value",
    "new": {
      "definition_site": "00bc4c0c",
      "incomplete_value": true,
      "site": "00bc4c0c",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4b70",
      "incomplete_value": true,
      "site": "00bc4b70",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4c6c",
      "incomplete_value": true,
      "site": "00bc4c6c",
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
      "definition_site": "00bc4bd0",
      "incomplete_value": true,
      "site": "00bc4bd0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc4bf8",
      "READ",
      [
        "storage",
        "00c9b978",
        null,
        "pointer"
      ]
    ],
    [
      "00bc4c08",
      "PARAM",
      [
        "storage",
        "011266bc",
        null,
        null
      ]
    ],
    [
      "00bc4c0c",
      "DATA",
      [
        "storage",
        "011266b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00bc4bf8",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bc4c08",
      "PARAM",
      [
        "storage",
        "011267bc",
        null,
        null
      ]
    ],
    [
      "00bc4c0c",
      "DATA",
      [
        "storage",
        "011267b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc4b74 ["INT_ADD", "register:40f0:8", ["const:bc4b74:8", "const:4:8"]]
- 00bc4b74 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc4c10 ["INT_ADD", "register:40f0:8", ["const:bc4c10:8", "const:4:8"]]
+ 00bc4c10 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc4c0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc4c0c ["INT_ADD", "register:40f0:8", ["const:bc4c0c:8", "const:4:8"]]
- 00bc4c0c ["CALLIND", null, ["register:0:8"]]
- 00bc4c10 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:658:8"]]
- 00bc4c10 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc4c10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-154c31e216f087c4bbc4699dd9c40a40"></a>

### [`00bc4f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4f2c.md) → [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) _ZN8firebase13remote_config8internal25EnsureInitializedCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00bc56d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc56d4.md) · 呼出先 6件 [`00bc505c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc505c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00bc5770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5770.md) · 呼出先 6件 [`00bc50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc50f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.92% / 新版 85.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5034",
      "incomplete_value": true,
      "site": "00bc5048",
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
      "unmatched:00bc4f84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aed0"
      ]
    ],
    [
      "unmatched:00bc4f88",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc4f8c",
      "READ",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc5020",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aed0"
      ]
    ],
    [
      "00bc5024",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00bc5028",
      "READ",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc4fac ["INT_ADD", "register:40f0:8", ["const:bc4fac:8", "const:4:8"]]
- 00bc4fac ["CALL", null, ["callee:00c5d9a0:8"]]
+ 00bc5048 ["INT_ADD", "register:40f0:8", ["const:bc5048:8", "const:4:8"]]
+ 00bc5048 ["CALL", null, ["callee:00c5d9a0:8"]]
- 00bc4f68 ["INT_ADD", "register:40f0:8", ["const:bc4f68:8", "const:4:8"]]
- 00bc4f68 ["CALL", null, ["callee:00bc50f8:8"]]
+ 00bc5004 ["INT_ADD", "register:40f0:8", ["const:bc5004:8", "const:4:8"]]
+ 00bc5004 ["CALL", null, ["callee:00bc50f8:8"]]
- 00bc4f70 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bc4f70 ["INT_ADD", "register:40a0:8", ["register:40a0:8", "const:8:8"]]
- 00bc4f70 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0dfe614bd9ff50cb0996b1aed35e2b67"></a>

### [`00bc505c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc505c.md) → [`00bc50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc50f8.md) FUN_00bc50f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00bc4f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4f2c.md) [`00bc9174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9174.md) · 呼出先 4件 [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 2件 [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) [`00bc9210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9210.md) · 呼出先 4件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.67% / 新版 83.67%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5114",
      "incomplete_value": true,
      "site": "00bc5124",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:668:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5078",
      "incomplete_value": true,
      "site": "00bc5088",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:568:8"
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
      "definition_site": "00bc5130",
      "incomplete_value": true,
      "site": "00bc513c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:678:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5094",
      "incomplete_value": true,
      "site": "00bc50a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:578:8"
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
      "definition_site": "00bc5194",
      "incomplete_value": false,
      "site": "00bc5198",
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
            "const:c81:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc50f8",
      "incomplete_value": false,
      "site": "00bc50fc",
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
            "const:c41:8"
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
      "00bc5114",
      "READ",
      [
        "storage",
        "01126568",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc5130",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc5150",
      "READ",
      [
        "storage",
        "01126580",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc5114",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc5130",
      "READ",
      [
        "storage",
        "01126678",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc5150",
      "READ",
      [
        "storage",
        "01126680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5088 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc5088 ["INT_ADD", "register:40f0:8", ["const:bc5088:8", "const:4:8"]]
- 00bc5088 ["CALLIND", null, ["register:0:8"]]
+ 00bc5124 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc5124 ["INT_ADD", "register:40f0:8", ["const:bc5124:8", "const:4:8"]]
+ 00bc5124 ["CALLIND", null, ["register:0:8"]]
- 00bc50a0 ["INT_ADD", "register:40f0:8", ["const:bc50a0:8", "const:4:8"]]
- 00bc50a0 ["CALL", null, ["callee:0058f5dc:8"]]
+ 00bc513c ["INT_ADD", "register:40f0:8", ["const:bc513c:8", "const:4:8"]]
+ 00bc513c ["CALL", null, ["callee:0058f5dc:8"]]
- 00bc50fc ["INT_ADD", "register:40f0:8", ["const:bc50fc:8", "const:4:8"]]
- 00bc50fc ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00bc5198 ["INT_ADD", "register:40f0:8", ["const:bc5198:8", "const:4:8"]]
+ 00bc5198 ["CALL", null, ["callee:00c5aeb0:8"]]
~~~


<a id="compare-db4c99f51bc9002b9006621c5b594f89"></a>

### [`00bc53d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc53d8.md) → [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) _ZN8firebase13remote_config8internal19SetDefaultsCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00bc6380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6380.md) [`00bc6618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6618.md) [`00bc6d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6d2c.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5d8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8c0.md)
- 新版 呼出元 3件 [`00bc641c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc641c.md) [`00bc66b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc66b4.md) [`00bc6dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6dc8.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d990.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.47% / 新版 92.47%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5544",
      "incomplete_value": true,
      "site": "00bc5548",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00bc5474",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc556c"
      ]
    ],
    [
      "unmatched:00bc5484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc5558"
      ]
    ]
  ],
  "added": [
    [
      "00bc5510",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc556c"
      ]
    ],
    [
      "00bc5520",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc5558"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc54ac ["INT_ADD", "register:40f0:8", ["const:bc54ac:8", "const:4:8"]]
- 00bc54ac ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc5548 ["INT_ADD", "register:40f0:8", ["const:bc5548:8", "const:4:8"]]
+ 00bc5548 ["CALL", null, ["callee:00c57f80:8"]]
- 00bc5548 ["INT_ADD", "register:40f0:8", ["const:bc5548:8", "const:4:8"]]
- 00bc5548 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00bc55e4 ["INT_ADD", "register:40f0:8", ["const:bc55e4:8", "const:4:8"]]
+ 00bc55e4 ["CALL", null, ["callee:00c57fb0:8"]]
- 00bc5414 ["INT_ADD", "register:40f0:8", ["const:bc5414:8", "const:4:8"]]
- 00bc5414 ["CALL", null, ["callee:00c5d990:8"]]
+ 00bc54b0 ["INT_ADD", "register:40f0:8", ["const:bc54b0:8", "const:4:8"]]
+ 00bc54b0 ["CALL", null, ["callee:00c5d990:8"]]
~~~


<a id="compare-3a0c4f24df16a3b96c598ca40e134658"></a>

### [`00bc56d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc56d4.md) → [`00bc5770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5770.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17EnsureInitializedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d740.md) · 呼出先 15件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc4f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc4f2c.md) [`00bc9c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9c14.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d810.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) [`00bc9cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9cb0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc57b4",
      "incomplete_value": true,
      "site": "00bc57c8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5718",
      "incomplete_value": true,
      "site": "00bc572c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc57f0",
      "incomplete_value": true,
      "site": "00bc57f8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:590:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5754",
      "incomplete_value": true,
      "site": "00bc575c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc581c",
      "incomplete_value": false,
      "site": "00bc5830",
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
            "const:e2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5780",
      "incomplete_value": false,
      "site": "00bc5794",
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
            "const:dec:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc57b4",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00bc57b4",
      "PARAM",
      [
        "storage",
        "00bc9c14",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::remote_config::ConfigInfo>",
        null
      ]
    ],
    [
      "00bc57f0",
      "READ",
      [
        "storage",
        "01126490",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc57b4",
      "READ",
      [
        "storage",
        "00c9ba58",
        null,
        "pointer"
      ]
    ],
    [
      "00bc57b4",
      "PARAM",
      [
        "storage",
        "00bc9cb0",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::remote_config::ConfigInfo>",
        null
      ]
    ],
    [
      "00bc57f0",
      "READ",
      [
        "storage",
        "01126590",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc572c ["INT_ADD", "register:40f0:8", ["const:bc572c:8", "const:4:8"]]
- 00bc572c ["CALL", null, ["callee:00c5af10:8"]]
+ 00bc57c8 ["INT_ADD", "register:40f0:8", ["const:bc57c8:8", "const:4:8"]]
+ 00bc57c8 ["CALL", null, ["callee:00c5af10:8"]]
- 00bc575c ["INT_ADD", "register:40f0:8", ["const:bc575c:8", "const:4:8"]]
- 00bc575c ["CALL", null, ["callee:00497874:8"]]
+ 00bc57f8 ["INT_ADD", "register:40f0:8", ["const:bc57f8:8", "const:4:8"]]
+ 00bc57f8 ["CALL", null, ["callee:00497874:8"]]
- 00bc5794 ["INT_ADD", "register:40f0:8", ["const:bc5794:8", "const:4:8"]]
- 00bc5794 ["CALL", null, ["callee:00c5d9c0:8"]]
+ 00bc5830 ["INT_ADD", "register:40f0:8", ["const:bc5830:8", "const:4:8"]]
+ 00bc5830 ["CALL", null, ["callee:00c5d9c0:8"]]
~~~


<a id="compare-0eea9f77795dd26a2c9575ecadee2044"></a>

### [`00bc5a00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5a00.md) → [`00bc5a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a9c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal8ActivateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d840.md) · 呼出先 15件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc5120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5120.md) [`00bc9dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9dc8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d910.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) [`00bc9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5ae0",
      "incomplete_value": true,
      "site": "00bc5af4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5a44",
      "incomplete_value": true,
      "site": "00bc5a58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:990:8"
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
      "definition_site": "00bc5b1c",
      "incomplete_value": true,
      "site": "00bc5b24",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:598:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5a80",
      "incomplete_value": true,
      "site": "00bc5a88",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:498:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5b48",
      "incomplete_value": false,
      "site": "00bc5b5c",
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
            "const:e54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5aac",
      "incomplete_value": false,
      "site": "00bc5ac0",
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
            "const:e14:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc5ae0",
      "READ",
      [
        "storage",
        "00c9b990",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5ae0",
      "PARAM",
      [
        "storage",
        "00bc9dc8",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc5b1c",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc5ae0",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5ae0",
      "PARAM",
      [
        "storage",
        "00bc9e64",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc5b1c",
      "READ",
      [
        "storage",
        "01126598",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5a58 ["INT_ADD", "register:40f0:8", ["const:bc5a58:8", "const:4:8"]]
- 00bc5a58 ["CALL", null, ["callee:00c5af10:8"]]
+ 00bc5af4 ["INT_ADD", "register:40f0:8", ["const:bc5af4:8", "const:4:8"]]
+ 00bc5af4 ["CALL", null, ["callee:00c5af10:8"]]
- 00bc5a88 ["INT_ADD", "register:40f0:8", ["const:bc5a88:8", "const:4:8"]]
- 00bc5a88 ["CALL", null, ["callee:00497874:8"]]
+ 00bc5b24 ["INT_ADD", "register:40f0:8", ["const:bc5b24:8", "const:4:8"]]
+ 00bc5b24 ["CALL", null, ["callee:00497874:8"]]
- 00bc5ac0 ["INT_ADD", "register:40f0:8", ["const:bc5ac0:8", "const:4:8"]]
- 00bc5ac0 ["CALL", null, ["callee:00c5d9d0:8"]]
+ 00bc5b5c ["INT_ADD", "register:40f0:8", ["const:bc5b5c:8", "const:4:8"]]
+ 00bc5b5c ["CALL", null, ["callee:00c5d9d0:8"]]
~~~


<a id="compare-8712f757625c5462429a309377a23f7a"></a>

### [`00bc5d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5d2c.md) → [`00bc5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5dc8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal16FetchAndActivateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d720.md) · 呼出先 15件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc5120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5120.md) [`00bc9dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9dc8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7f0.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) [`00bc9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5e0c",
      "incomplete_value": true,
      "site": "00bc5e20",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5d70",
      "incomplete_value": true,
      "site": "00bc5d84",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:990:8"
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
      "definition_site": "00bc5e48",
      "incomplete_value": true,
      "site": "00bc5e50",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5dac",
      "incomplete_value": true,
      "site": "00bc5db4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc5e74",
      "incomplete_value": false,
      "site": "00bc5e88",
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
            "const:7c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc5dd8",
      "incomplete_value": false,
      "site": "00bc5dec",
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
            "const:791:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc5e0c",
      "READ",
      [
        "storage",
        "00c9b990",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5e0c",
      "PARAM",
      [
        "storage",
        "00bc9dc8",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc5e48",
      "READ",
      [
        "storage",
        "011264a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc5e0c",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5e0c",
      "PARAM",
      [
        "storage",
        "00bc9e64",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc5e48",
      "READ",
      [
        "storage",
        "011265a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5d84 ["INT_ADD", "register:40f0:8", ["const:bc5d84:8", "const:4:8"]]
- 00bc5d84 ["CALL", null, ["callee:00c5af10:8"]]
+ 00bc5e20 ["INT_ADD", "register:40f0:8", ["const:bc5e20:8", "const:4:8"]]
+ 00bc5e20 ["CALL", null, ["callee:00c5af10:8"]]
- 00bc5db4 ["INT_ADD", "register:40f0:8", ["const:bc5db4:8", "const:4:8"]]
- 00bc5db4 ["CALL", null, ["callee:00497874:8"]]
+ 00bc5e50 ["INT_ADD", "register:40f0:8", ["const:bc5e50:8", "const:4:8"]]
+ 00bc5e50 ["CALL", null, ["callee:00497874:8"]]
- 00bc5dec ["INT_ADD", "register:40f0:8", ["const:bc5dec:8", "const:4:8"]]
- 00bc5dec ["CALL", null, ["callee:00c5d9d0:8"]]
+ 00bc5e88 ["INT_ADD", "register:40f0:8", ["const:bc5e88:8", "const:4:8"]]
+ 00bc5e88 ["CALL", null, ["callee:00c5d9d0:8"]]
~~~


<a id="compare-6ce4a2aeb48b38f589607cfd06853ec6"></a>

### [`00bc6058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6058.md) → [`00bc60f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc60f4.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal5FetchEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7e0.md) · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc5358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5358.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5d8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8b0.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc53f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc53f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc616c",
      "incomplete_value": true,
      "site": "00bc6178",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:608:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc60d0",
      "incomplete_value": true,
      "site": "00bc60dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:508:8"
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
      "definition_site": "00bc619c",
      "incomplete_value": false,
      "site": "00bc61b0",
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
            "const:363:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc6100",
      "incomplete_value": false,
      "site": "00bc6114",
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
            "const:3bf:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc626c",
      "incomplete_value": true,
      "site": "00bc627c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc61d0",
      "incomplete_value": true,
      "site": "00bc61e0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:958:8"
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
      "00bc616c",
      "READ",
      [
        "storage",
        "01126508",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc619c",
      "PARAM",
      [
        "storage",
        "002a73bf",
        null,
        "string"
      ]
    ],
    [
      "00bc626c",
      "READ",
      [
        "storage",
        "00c9b958",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc616c",
      "READ",
      [
        "storage",
        "01126608",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc619c",
      "PARAM",
      [
        "storage",
        "002a7363",
        null,
        "string"
      ]
    ],
    [
      "00bc626c",
      "READ",
      [
        "storage",
        "00c9ba28",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc60dc ["INT_ADD", "register:40f0:8", ["const:bc60dc:8", "const:4:8"]]
- 00bc60dc ["CALL", null, ["callee:00497874:8"]]
+ 00bc6178 ["INT_ADD", "register:40f0:8", ["const:bc6178:8", "const:4:8"]]
+ 00bc6178 ["CALL", null, ["callee:00497874:8"]]
- 00bc6114 ["INT_ADD", "register:40f0:8", ["const:bc6114:8", "const:4:8"]]
- 00bc6114 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bc61b0 ["INT_ADD", "register:40f0:8", ["const:bc61b0:8", "const:4:8"]]
+ 00bc61b0 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bc61b0 ["INT_ADD", "register:40f0:8", ["const:bc61b0:8", "const:4:8"]]
- 00bc61b0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc624c ["INT_ADD", "register:40f0:8", ["const:bc624c:8", "const:4:8"]]
+ 00bc624c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-be83b9e087e0c94f9177b9272e559df0"></a>

### [`00bc6380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6380.md) → [`00bc641c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc641c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d6f0.md) · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc53d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc53d8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5d7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7c0.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6494",
      "incomplete_value": true,
      "site": "00bc64a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc63f8",
      "incomplete_value": true,
      "site": "00bc6404",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4a8:8"
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
      "definition_site": "00bc64c4",
      "incomplete_value": false,
      "site": "00bc64d8",
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
            "const:bfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc6428",
      "incomplete_value": false,
      "site": "00bc643c",
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
            "const:bbb:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6594",
      "incomplete_value": true,
      "site": "00bc65a4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc64f8",
      "incomplete_value": true,
      "site": "00bc6508",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:968:8"
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
      "00bc6494",
      "READ",
      [
        "storage",
        "011264a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc64c4",
      "PARAM",
      [
        "storage",
        "002c0bbb",
        null,
        "string"
      ]
    ],
    [
      "00bc6594",
      "READ",
      [
        "storage",
        "00c9b968",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc6494",
      "READ",
      [
        "storage",
        "011265a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc64c4",
      "PARAM",
      [
        "storage",
        "002c0bfb",
        null,
        "string"
      ]
    ],
    [
      "00bc6594",
      "READ",
      [
        "storage",
        "00c9ba38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc6404 ["INT_ADD", "register:40f0:8", ["const:bc6404:8", "const:4:8"]]
- 00bc6404 ["CALL", null, ["callee:00497874:8"]]
+ 00bc64a0 ["INT_ADD", "register:40f0:8", ["const:bc64a0:8", "const:4:8"]]
+ 00bc64a0 ["CALL", null, ["callee:00497874:8"]]
- 00bc643c ["INT_ADD", "register:40f0:8", ["const:bc643c:8", "const:4:8"]]
- 00bc643c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bc64d8 ["INT_ADD", "register:40f0:8", ["const:bc64d8:8", "const:4:8"]]
+ 00bc64d8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bc64d8 ["INT_ADD", "register:40f0:8", ["const:bc64d8:8", "const:4:8"]]
- 00bc64d8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc6574 ["INT_ADD", "register:40f0:8", ["const:bc6574:8", "const:4:8"]]
+ 00bc6574 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f038419fe6c27eaf49501b2808ab6ad5"></a>

### [`00bc6618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6618.md) → [`00bc66b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc66b4.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEPKNS0_21ConfigKeyValueVariantEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d6e0.md) · 呼出先 33件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bc53d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc53d8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7b0.md) · 呼出先 33件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.38% / 新版 98.38%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6988",
      "incomplete_value": false,
      "site": "00bc698c",
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
            "const:7ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc68ec",
      "incomplete_value": false,
      "site": "00bc68f0",
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
            "const:816:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6a94",
      "incomplete_value": true,
      "site": "00bc6aa0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc69f8",
      "incomplete_value": true,
      "site": "00bc6a04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 41,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6ac8",
      "incomplete_value": false,
      "site": "00bc6adc",
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
            "const:bfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc6a2c",
      "incomplete_value": false,
      "site": "00bc6a40",
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
            "const:bbb:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc67ac",
      "DATA",
      [
        "storage",
        "0030e99a",
        "switchD_00bc6718::switchdataD_0030e99a",
        "byte"
      ]
    ],
    [
      "00bc6988",
      "PARAM",
      [
        "storage",
        "002a8816",
        null,
        "string"
      ]
    ],
    [
      "00bc6a94",
      "READ",
      [
        "storage",
        "011264b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc67ac",
      "DATA",
      [
        "storage",
        "0030e9da",
        "switchD_00bc67b4::switchdataD_0030e9da",
        "byte"
      ]
    ],
    [
      "00bc6988",
      "PARAM",
      [
        "storage",
        "002a87ba",
        null,
        "string"
      ]
    ],
    [
      "00bc6a94",
      "READ",
      [
        "storage",
        "011265b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc68f0 ["INT_ADD", "register:40f0:8", ["const:bc68f0:8", "const:4:8"]]
- 00bc68f0 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc698c ["INT_ADD", "register:40f0:8", ["const:bc698c:8", "const:4:8"]]
+ 00bc698c ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc6a04 ["INT_ADD", "register:40f0:8", ["const:bc6a04:8", "const:4:8"]]
- 00bc6a04 ["CALL", null, ["callee:00497874:8"]]
+ 00bc6aa0 ["INT_ADD", "register:40f0:8", ["const:bc6aa0:8", "const:4:8"]]
+ 00bc6aa0 ["CALL", null, ["callee:00497874:8"]]
- 00bc6a40 ["INT_ADD", "register:40f0:8", ["const:bc6a40:8", "const:4:8"]]
- 00bc6a40 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bc6adc ["INT_ADD", "register:40f0:8", ["const:bc6adc:8", "const:4:8"]]
+ 00bc6adc ["CALL", null, ["callee:00c5ae70:8"]]
~~~


<a id="compare-2e6d6d6a7b9d7427025a9b7148746a34"></a>

### [`00bc6d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc6/00bc6d2c.md) → [`00bc6dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6dc8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEPKNS0_14ConfigKeyValueEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d6d0.md) · 呼出先 21件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bc53d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc53d8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7a0.md) · 呼出先 21件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.60% / 新版 99.60%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6fbc",
      "incomplete_value": true,
      "site": "00bc6fc8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc6f20",
      "incomplete_value": true,
      "site": "00bc6f2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6ff0",
      "incomplete_value": false,
      "site": "00bc7004",
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
            "const:bfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc6f54",
      "incomplete_value": false,
      "site": "00bc6f68",
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
            "const:bbb:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc70c4",
      "incomplete_value": true,
      "site": "00bc70d4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7028",
      "incomplete_value": true,
      "site": "00bc7038",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:968:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc6fbc",
      "READ",
      [
        "storage",
        "011264b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6ff0",
      "PARAM",
      [
        "storage",
        "002c0bbb",
        null,
        "string"
      ]
    ],
    [
      "00bc70c4",
      "READ",
      [
        "storage",
        "00c9b968",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc6fbc",
      "READ",
      [
        "storage",
        "011265b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6ff0",
      "PARAM",
      [
        "storage",
        "002c0bfb",
        null,
        "string"
      ]
    ],
    [
      "00bc70c4",
      "READ",
      [
        "storage",
        "00c9ba38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc6f2c ["INT_ADD", "register:40f0:8", ["const:bc6f2c:8", "const:4:8"]]
- 00bc6f2c ["CALL", null, ["callee:00497874:8"]]
+ 00bc6fc8 ["INT_ADD", "register:40f0:8", ["const:bc6fc8:8", "const:4:8"]]
+ 00bc6fc8 ["CALL", null, ["callee:00497874:8"]]
- 00bc6f68 ["INT_ADD", "register:40f0:8", ["const:bc6f68:8", "const:4:8"]]
- 00bc6f68 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bc7004 ["INT_ADD", "register:40f0:8", ["const:bc7004:8", "const:4:8"]]
+ 00bc7004 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bc7038 ["INT_ADD", "register:40f0:8", ["const:bc7038:8", "const:4:8"]]
- 00bc7038 ["CALL", null, ["callee:00c5b010:8"]]
+ 00bc70d4 ["INT_ADD", "register:40f0:8", ["const:bc70d4:8", "const:4:8"]]
+ 00bc70d4 ["CALL", null, ["callee:00c5b010:8"]]
~~~


<a id="compare-36e01bdcd7c761d9279666cef63c870c"></a>

### [`00bc72e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc72e8.md) → [`00bc7384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7384.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17SetConfigSettingsENS0_14ConfigSettingsE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d760.md) · 呼出先 15件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bc5250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5250.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d830.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.35% / 新版 97.35%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7400",
      "incomplete_value": true,
      "site": "00bc740c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7364",
      "incomplete_value": true,
      "site": "00bc7370",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5c0:8"
              ]
            ]
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
      "definition_site": "00bc7404",
      "incomplete_value": true,
      "site": "00bc740c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7368",
      "incomplete_value": true,
      "site": "00bc7370",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5d0:8"
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
      "definition_site": "00bc7420",
      "incomplete_value": true,
      "site": "00bc7440",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7384",
      "incomplete_value": true,
      "site": "00bc73a4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5e0:8"
              ]
            ]
          ]
        ]
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
      "00bc7400",
      "READ",
      [
        "storage",
        "011265c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7404",
      "READ",
      [
        "storage",
        "011265d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7420",
      "READ",
      [
        "storage",
        "011265e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc7400",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7404",
      "READ",
      [
        "storage",
        "011266d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7420",
      "READ",
      [
        "storage",
        "011266e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc7370 ["INT_ADD", "register:40f0:8", ["const:bc7370:8", "const:4:8"]]
- 00bc7370 ["CALL", null, ["callee:00589734:8"]]
+ 00bc740c ["INT_ADD", "register:40f0:8", ["const:bc740c:8", "const:4:8"]]
+ 00bc740c ["CALL", null, ["callee:00589734:8"]]
- 00bc7384 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5e0:8"]]
- 00bc7384 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc7420 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6e0:8"]]
+ 00bc7420 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00bc73a4 ["INT_ADD", "register:40f0:8", ["const:bc73a4:8", "const:4:8"]]
- 00bc73a4 ["CALL", null, ["callee:00497874:8"]]
+ 00bc7440 ["INT_ADD", "register:40f0:8", ["const:bc7440:8", "const:4:8"]]
+ 00bc7440 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-53aa40d9fe0cbfb9f4ca14aba8d67a5d"></a>

### [`00bc773c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc773c.md) → [`00bc77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc77d8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal16SetCustomSignalsERKNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d730.md) · 呼出先 18件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bc5250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc5/00bc5250.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d800.md) · 呼出先 18件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc781c",
      "incomplete_value": true,
      "site": "00bc7828",
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
    "old": {
      "definition_site": "00bc7780",
      "incomplete_value": true,
      "site": "00bc778c",
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
    "new": {
      "definition_site": "00bc7850",
      "incomplete_value": true,
      "site": "00bc785c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc77b4",
      "incomplete_value": true,
      "site": "00bc77c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5f8:8"
              ]
            ]
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
      "definition_site": "00bc7854",
      "incomplete_value": true,
      "site": "00bc785c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:708:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc77b8",
      "incomplete_value": true,
      "site": "00bc77c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:608:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bc7740",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc7744",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc7748",
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
      "00bc77dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00bc77e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bc77e4",
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
- 00bc778c ["INT_ADD", "register:40f0:8", ["const:bc778c:8", "const:4:8"]]
- 00bc778c ["CALL", null, ["callee:00c5af10:8"]]
+ 00bc7828 ["INT_ADD", "register:40f0:8", ["const:bc7828:8", "const:4:8"]]
+ 00bc7828 ["CALL", null, ["callee:00c5af10:8"]]
- 00bc77c0 ["INT_ADD", "register:40f0:8", ["const:bc77c0:8", "const:4:8"]]
- 00bc77c0 ["CALL", null, ["callee:00589734:8"]]
+ 00bc785c ["INT_ADD", "register:40f0:8", ["const:bc785c:8", "const:4:8"]]
+ 00bc785c ["CALL", null, ["callee:00589734:8"]]
- 00bc7828 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc7828 ["INT_ADD", "register:40f0:8", ["const:bc7828:8", "const:4:8"]]
- 00bc7828 ["CALLIND", null, ["register:0:8"]]
+ 00bc78c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc78c4 ["INT_ADD", "register:40f0:8", ["const:bc78c4:8", "const:4:8"]]
+ 00bc78c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2b0c1c14bb7c1b7c344db5c4c2197d39"></a>

### [`00bc7e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc7e84.md) → [`00bc7f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7f20.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17GetConfigSettingsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d750.md) · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5d820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d820.md) · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7f48",
      "incomplete_value": true,
      "site": "00bc7f50",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:600:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7eac",
      "incomplete_value": true,
      "site": "00bc7eb4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:500:8"
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
      "definition_site": "00bc7f64",
      "incomplete_value": true,
      "site": "00bc7f70",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:688:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7ec8",
      "incomplete_value": true,
      "site": "00bc7ed4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:588:8"
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
    "new": {
      "definition_site": "00bc7f88",
      "incomplete_value": true,
      "site": "00bc7f94",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7eec",
      "incomplete_value": true,
      "site": "00bc7ef8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5a8:8"
              ]
            ]
          ]
        ]
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
      "00bc7f48",
      "READ",
      [
        "storage",
        "01126500",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7f64",
      "READ",
      [
        "storage",
        "01126588",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7f88",
      "READ",
      [
        "storage",
        "011265a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc7f48",
      "READ",
      [
        "storage",
        "01126600",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7f64",
      "READ",
      [
        "storage",
        "01126688",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7f88",
      "READ",
      [
        "storage",
        "011266a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc7eb4 ["INT_ADD", "register:40f0:8", ["const:bc7eb4:8", "const:4:8"]]
- 00bc7eb4 ["CALL", null, ["callee:00497874:8"]]
+ 00bc7f50 ["INT_ADD", "register:40f0:8", ["const:bc7f50:8", "const:4:8"]]
+ 00bc7f50 ["CALL", null, ["callee:00497874:8"]]
- 00bc7ed4 ["INT_ADD", "register:40f0:8", ["const:bc7ed4:8", "const:4:8"]]
- 00bc7ed4 ["CALL", null, ["callee:00497874:8"]]
+ 00bc7f70 ["INT_ADD", "register:40f0:8", ["const:bc7f70:8", "const:4:8"]]
+ 00bc7f70 ["CALL", null, ["callee:00497874:8"]]
- 00bc7ef8 ["INT_ADD", "register:40f0:8", ["const:bc7ef8:8", "const:4:8"]]
- 00bc7ef8 ["CALL", null, ["callee:0058f5dc:8"]]
+ 00bc7f94 ["INT_ADD", "register:40f0:8", ["const:bc7f94:8", "const:4:8"]]
+ 00bc7f94 ["CALL", null, ["callee:0058f5dc:8"]]
~~~


<a id="compare-703c6b91b8cdf0573ff785a1b860fcf0"></a>

### [`00bc7f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc7f6c.md) → [`00bc8008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8008.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal10GetBooleanEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d6c0.md) · 呼出先 4件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5d790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d790.md) · 呼出先 4件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc804c",
      "incomplete_value": true,
      "site": "00bc805c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:650:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7fb0",
      "incomplete_value": true,
      "site": "00bc7fc0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:550:8"
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
      "definition_site": "00bc80a4",
      "incomplete_value": false,
      "site": "00bc80b0",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8008",
      "incomplete_value": false,
      "site": "00bc8014",
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
            "const:cd6:8"
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
      "definition_site": "00bc80a8",
      "incomplete_value": false,
      "site": "00bc80b0",
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
            "const:8c3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc800c",
      "incomplete_value": false,
      "site": "00bc8014",
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
            "const:91f:8"
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
      "00bc804c",
      "READ",
      [
        "storage",
        "01126550",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc80a4",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc80a8",
      "PARAM",
      [
        "storage",
        "002aa91f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc804c",
      "READ",
      [
        "storage",
        "01126650",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc80a4",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc80a8",
      "PARAM",
      [
        "storage",
        "002aa8c3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc7fc0 ["INT_ADD", "register:40f0:8", ["const:bc7fc0:8", "const:4:8"]]
- 00bc7fc0 ["CALL", null, ["callee:00497a88:8"]]
+ 00bc805c ["INT_ADD", "register:40f0:8", ["const:bc805c:8", "const:4:8"]]
+ 00bc805c ["CALL", null, ["callee:00497a88:8"]]
- 00bc8014 ["INT_ADD", "register:40f0:8", ["const:bc8014:8", "const:4:8"]]
- 00bc8014 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc80b0 ["INT_ADD", "register:40f0:8", ["const:bc80b0:8", "const:4:8"]]
+ 00bc80b0 ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc7f90 ["INT_ADD", "register:40f0:8", ["const:bc7f90:8", "const:4:8"]]
- 00bc7f90 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bc802c ["INT_ADD", "register:40f0:8", ["const:bc802c:8", "const:4:8"]]
+ 00bc802c ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-43eb71664d8c8fa5bcf2723732e84484"></a>

### [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) → [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) FUN_00bc80fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00bc7f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc7/00bc7f6c.md) [`00bc8218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8218.md) [`00bc830c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc830c.md) [`00bc840c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc840c.md) [`00bc857c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc857c.md) · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 5件 [`00bc8008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8008.md) [`00bc82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc82b4.md) [`00bc83a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc83a8.md) [`00bc84a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc84a8.md) [`00bc8618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8618.md) · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8134",
      "incomplete_value": true,
      "site": "00bc8148",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8098",
      "incomplete_value": true,
      "site": "00bc80ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4e8:8"
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
      "definition_site": "00bc81a4",
      "incomplete_value": false,
      "site": "00bc81b0",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8108",
      "incomplete_value": false,
      "site": "00bc8114",
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
            "const:cd6:8"
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
      "definition_site": "00bc81a8",
      "incomplete_value": false,
      "site": "00bc81b0",
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
            "const:8a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc810c",
      "incomplete_value": false,
      "site": "00bc8114",
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
            "const:871:8"
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
      "00bc8134",
      "READ",
      [
        "storage",
        "011264e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc81a4",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc81a8",
      "PARAM",
      [
        "storage",
        "002a9871",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc8134",
      "READ",
      [
        "storage",
        "011265e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc81a4",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc81a8",
      "PARAM",
      [
        "storage",
        "002a98a0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc80ac ["INT_ADD", "register:40f0:8", ["const:bc80ac:8", "const:4:8"]]
- 00bc80ac ["CALL", null, ["callee:00497874:8"]]
+ 00bc8148 ["INT_ADD", "register:40f0:8", ["const:bc8148:8", "const:4:8"]]
+ 00bc8148 ["CALL", null, ["callee:00497874:8"]]
- 00bc8114 ["INT_ADD", "register:40f0:8", ["const:bc8114:8", "const:4:8"]]
- 00bc8114 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc81b0 ["INT_ADD", "register:40f0:8", ["const:bc81b0:8", "const:4:8"]]
+ 00bc81b0 ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc816c ["INT_ADD", "register:40f0:8", ["const:bc816c:8", "const:4:8"]]
- 00bc816c ["CALL", null, ["callee:005762f8:8"]]
+ 00bc8208 ["INT_ADD", "register:40f0:8", ["const:bc8208:8", "const:4:8"]]
+ 00bc8208 ["CALL", null, ["callee:005762f8:8"]]
~~~


<a id="compare-a09ddddc8f1c03565e38980ff485b325"></a>

### [`00bc8218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8218.md) → [`00bc82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc82b4.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7GetLongEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d830.md) · 呼出先 4件 [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md) [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5d900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d900.md) · 呼出先 4件 [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc82f8",
      "incomplete_value": true,
      "site": "00bc8308",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:630:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc825c",
      "incomplete_value": true,
      "site": "00bc826c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:530:8"
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
      "definition_site": "00bc8350",
      "incomplete_value": false,
      "site": "00bc835c",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc82b4",
      "incomplete_value": false,
      "site": "00bc82c0",
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
            "const:cd6:8"
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
      "definition_site": "00bc8354",
      "incomplete_value": false,
      "site": "00bc835c",
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
            "const:ba2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc82b8",
      "incomplete_value": false,
      "site": "00bc82c0",
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
            "const:bef:8"
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
      "00bc82f8",
      "READ",
      [
        "storage",
        "01126530",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8350",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc8354",
      "PARAM",
      [
        "storage",
        "002a0bef",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc82f8",
      "READ",
      [
        "storage",
        "01126630",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8350",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc8354",
      "PARAM",
      [
        "storage",
        "002a0ba2",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc826c ["INT_ADD", "register:40f0:8", ["const:bc826c:8", "const:4:8"]]
- 00bc826c ["CALL", null, ["callee:0058f5dc:8"]]
+ 00bc8308 ["INT_ADD", "register:40f0:8", ["const:bc8308:8", "const:4:8"]]
+ 00bc8308 ["CALL", null, ["callee:0058f5dc:8"]]
- 00bc82c0 ["INT_ADD", "register:40f0:8", ["const:bc82c0:8", "const:4:8"]]
- 00bc82c0 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc835c ["INT_ADD", "register:40f0:8", ["const:bc835c:8", "const:4:8"]]
+ 00bc835c ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc823c ["INT_ADD", "register:40f0:8", ["const:bc823c:8", "const:4:8"]]
- 00bc823c ["CALL", null, ["callee:00c5b150:8"]]
+ 00bc82d8 ["INT_ADD", "register:40f0:8", ["const:bc82d8:8", "const:4:8"]]
+ 00bc82d8 ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-432c2a9acf3d1a61f4a8fbfbecffd4ee"></a>

### [`00bc830c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc830c.md) → [`00bc83a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc83a8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal9GetDoubleEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d850.md) · 呼出先 4件 [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b230.md)
- 新版 呼出元 1件 [`00c5d920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d920.md) · 呼出先 4件 [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc83ec",
      "incomplete_value": true,
      "site": "00bc83fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:638:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8350",
      "incomplete_value": true,
      "site": "00bc8360",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:538:8"
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
      "definition_site": "00bc8444",
      "incomplete_value": false,
      "site": "00bc8450",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc83a8",
      "incomplete_value": false,
      "site": "00bc83b4",
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
            "const:cd6:8"
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
      "definition_site": "00bc8448",
      "incomplete_value": false,
      "site": "00bc8450",
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
            "const:217:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc83ac",
      "incomplete_value": false,
      "site": "00bc83b4",
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
            "const:273:8"
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
      "00bc83ec",
      "READ",
      [
        "storage",
        "01126538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8444",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc8448",
      "PARAM",
      [
        "storage",
        "002ae273",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc83ec",
      "READ",
      [
        "storage",
        "01126638",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8444",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc8448",
      "PARAM",
      [
        "storage",
        "002ae217",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8360 ["INT_ADD", "register:40f0:8", ["const:bc8360:8", "const:4:8"]]
- 00bc8360 ["CALL", null, ["callee:00c5b300:8"]]
+ 00bc83fc ["INT_ADD", "register:40f0:8", ["const:bc83fc:8", "const:4:8"]]
+ 00bc83fc ["CALL", null, ["callee:00c5b300:8"]]
- 00bc83b4 ["INT_ADD", "register:40f0:8", ["const:bc83b4:8", "const:4:8"]]
- 00bc83b4 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc8450 ["INT_ADD", "register:40f0:8", ["const:bc8450:8", "const:4:8"]]
+ 00bc8450 ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc8330 ["INT_ADD", "register:40f0:8", ["const:bc8330:8", "const:4:8"]]
- 00bc8330 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bc83cc ["INT_ADD", "register:40f0:8", ["const:bc83cc:8", "const:4:8"]]
+ 00bc83cc ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-b97120649bb8eeae180f6927f187f5ee"></a>

### [`00bc840c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc840c.md) → [`00bc84a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc84a8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal9GetStringEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d860.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5d930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d930.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8510",
      "incomplete_value": true,
      "site": "00bc851c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:640:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8474",
      "incomplete_value": true,
      "site": "00bc8480",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:540:8"
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
      "definition_site": "00bc8574",
      "incomplete_value": false,
      "site": "00bc8580",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc84d8",
      "incomplete_value": false,
      "site": "00bc84e4",
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
            "const:cd6:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8578",
      "incomplete_value": false,
      "site": "00bc8580",
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
            "const:5d9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc84dc",
      "incomplete_value": false,
      "site": "00bc84e4",
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
            "const:5aa:8"
          ]
        ]
      ]
    },
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
      "00bc8510",
      "READ",
      [
        "storage",
        "01126540",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8574",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc8578",
      "PARAM",
      [
        "storage",
        "002a95aa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc8510",
      "READ",
      [
        "storage",
        "01126640",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8574",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc8578",
      "PARAM",
      [
        "storage",
        "002a95d9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8480 ["INT_ADD", "register:40f0:8", ["const:bc8480:8", "const:4:8"]]
- 00bc8480 ["CALL", null, ["callee:00497874:8"]]
+ 00bc851c ["INT_ADD", "register:40f0:8", ["const:bc851c:8", "const:4:8"]]
+ 00bc851c ["CALL", null, ["callee:00497874:8"]]
- 00bc84e4 ["INT_ADD", "register:40f0:8", ["const:bc84e4:8", "const:4:8"]]
- 00bc84e4 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc8580 ["INT_ADD", "register:40f0:8", ["const:bc8580:8", "const:4:8"]]
+ 00bc8580 ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc8450 ["INT_ADD", "register:40f0:8", ["const:bc8450:8", "const:4:8"]]
- 00bc8450 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bc84ec ["INT_ADD", "register:40f0:8", ["const:bc84ec:8", "const:4:8"]]
+ 00bc84ec ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-1df6a288fa99802fc2325f3dd34141f2"></a>

### [`00bc857c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc857c.md) → [`00bc8618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8618.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7GetDataEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d810.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bc8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc8060.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5d8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8e0.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8680",
      "incomplete_value": true,
      "site": "00bc868c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:648:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc85e4",
      "incomplete_value": true,
      "site": "00bc85f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:548:8"
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
      "definition_site": "00bc86e4",
      "incomplete_value": false,
      "site": "00bc86f0",
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
            "const:c89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8648",
      "incomplete_value": false,
      "site": "00bc8654",
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
            "const:cd6:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc86e8",
      "incomplete_value": false,
      "site": "00bc86f0",
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
      "definition_site": "00bc864c",
      "incomplete_value": false,
      "site": "00bc8654",
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
      "00bc8680",
      "READ",
      [
        "storage",
        "01126548",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc86e4",
      "PARAM",
      [
        "storage",
        "002a0cd6",
        null,
        "string"
      ]
    ],
    [
      "00bc86e8",
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
      "00bc8680",
      "READ",
      [
        "storage",
        "01126648",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc86e4",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc86e8",
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
- 00bc85f0 ["INT_ADD", "register:40f0:8", ["const:bc85f0:8", "const:4:8"]]
- 00bc85f0 ["CALL", null, ["callee:00497874:8"]]
+ 00bc868c ["INT_ADD", "register:40f0:8", ["const:bc868c:8", "const:4:8"]]
+ 00bc868c ["CALL", null, ["callee:00497874:8"]]
- 00bc8654 ["INT_ADD", "register:40f0:8", ["const:bc8654:8", "const:4:8"]]
- 00bc8654 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bc86f0 ["INT_ADD", "register:40f0:8", ["const:bc86f0:8", "const:4:8"]]
+ 00bc86f0 ["CALL", null, ["callee:00c5ad70:8"]]
- 00bc85c0 ["INT_ADD", "register:40f0:8", ["const:bc85c0:8", "const:4:8"]]
- 00bc85c0 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bc865c ["INT_ADD", "register:40f0:8", ["const:bc865c:8", "const:4:8"]]
+ 00bc865c ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-c55619b79b5035b0d0e7157063197fa2"></a>

### [`00bc86ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc86ec.md) → [`00bc8788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8788.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal15GetKeysByPrefixEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d710.md) · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005408d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005408d0.md) [`0054a4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a4f4.md) [`0054dc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054dc50.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5d7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7e0.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) [`0054a534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a534.md) [`0054dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dc90.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.35% / 新版 96.35%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8810",
      "incomplete_value": true,
      "site": "00bc881c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8774",
      "incomplete_value": true,
      "site": "00bc8780",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4f8:8"
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
      "definition_site": "00bc88d4",
      "incomplete_value": true,
      "site": "00bc88d8",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00bc88d0",
      "incomplete_value": true,
      "site": "00bc88d8",
      "value": [
        "LOAD",
        "8",
        [
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
      "00bc8810",
      "READ",
      [
        "storage",
        "011264f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bc8834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc8904"
      ]
    ],
    [
      "unmatched:00bc8864",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc8964"
      ]
    ]
  ],
  "added": [
    [
      "00bc8810",
      "READ",
      [
        "storage",
        "011265f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc88d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc8904"
      ]
    ],
    [
      "00bc8900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc8964"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8780 ["INT_ADD", "register:40f0:8", ["const:bc8780:8", "const:4:8"]]
- 00bc8780 ["CALL", null, ["callee:00497874:8"]]
+ 00bc881c ["INT_ADD", "register:40f0:8", ["const:bc881c:8", "const:4:8"]]
+ 00bc881c ["CALL", null, ["callee:00497874:8"]]
- 00bc881c ["INT_ADD", "register:40f0:8", ["const:bc881c:8", "const:4:8"]]
- 00bc881c ["CALL", null, ["callee:00c580b0:8"]]
+ 00bc88b8 ["INT_ADD", "register:40f0:8", ["const:bc88b8:8", "const:4:8"]]
+ 00bc88b8 ["CALL", null, ["callee:00c580b0:8"]]
- 00bc88d8 ["INT_ADD", "register:40f0:8", ["const:bc88d8:8", "const:4:8"]]
- 00bc88d8 ["CALL", null, ["callee:00540910:8"]]
+ 00bc8974 ["INT_ADD", "register:40f0:8", ["const:bc8974:8", "const:4:8"]]
+ 00bc8974 ["CALL", null, ["callee:00540910:8"]]
~~~


<a id="compare-0e3ff31f1b4e5c163e27eed9c218011f"></a>

### [`00bc89d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc89d8.md) → [`00bc8a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a74.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal6GetAllEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7f0.md) · 呼出先 26件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md) [`0087f0a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f0a4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`00c5d8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8c0.md) · 呼出先 26件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 80.04% / 新版 80.04%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 17件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8acc",
      "incomplete_value": true,
      "site": "00bc8ad4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8a30",
      "incomplete_value": true,
      "site": "00bc8a38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4f0:8"
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
      "definition_site": "00bc8c1c",
      "incomplete_value": true,
      "site": "00bc8c2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:620:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8b80",
      "incomplete_value": true,
      "site": "00bc8b90",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:520:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8c3c",
      "incomplete_value": true,
      "site": "00bc8c48",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:630:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc8ba0",
      "incomplete_value": true,
      "site": "00bc8bac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:530:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc8acc",
      "READ",
      [
        "storage",
        "011264f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8c1c",
      "READ",
      [
        "storage",
        "01126520",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8c3c",
      "READ",
      [
        "storage",
        "01126530",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc8acc",
      "READ",
      [
        "storage",
        "011265f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8c1c",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8c3c",
      "READ",
      [
        "storage",
        "01126630",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8a38 ["INT_ADD", "register:40f0:8", ["const:bc8a38:8", "const:4:8"]]
- 00bc8a38 ["CALL", null, ["callee:00497874:8"]]
+ 00bc8ad4 ["INT_ADD", "register:40f0:8", ["const:bc8ad4:8", "const:4:8"]]
+ 00bc8ad4 ["CALL", null, ["callee:00497874:8"]]
- 00bc8ad4 ["BRANCH", null, ["local:b46:8"]]
+ 00bc8b70 ["BRANCH", null, ["local:b44:8"]]
- 00bc8af4 ["CBRANCH", null, ["local:b45:8", "register:101:1"]]
+ 00bc8b90 ["CBRANCH", null, ["local:b43:8", "register:101:1"]]
~~~


<a id="compare-3530b9d5e37c224d1d84039e71c66afe"></a>

### [`00bc91f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc91f4.md) → [`00bc9290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9290.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal25AddOnConfigUpdateListenerENSt6__ndk18functionIFvONS0_12ConfigUpdateENS0_17Remote

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d790.md) · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bc9998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9998.md) [`00bc9fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9fd0.md) [`00bc9fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9fd4.md)
- 新版 呼出元 1件 [`00c5d860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d860.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc9a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a34.md) [`00bca06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca06c.md) [`00bca070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca070.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc9448",
      "incomplete_value": false,
      "site": "00bc9448",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc93ac",
      "incomplete_value": false,
      "site": "00bc93ac",
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
            "const:828:8"
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
      "definition_site": "00bc93a0",
      "incomplete_value": true,
      "site": "00bc93b0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:758:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc9304",
      "incomplete_value": true,
      "site": "00bc9314",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:658:8"
              ]
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
      "definition_site": "00bc93a4",
      "incomplete_value": true,
      "site": "00bc93b0",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00bc9308",
      "incomplete_value": true,
      "site": "00bc9314",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:668:8"
              ]
            ]
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
      "00bc93a0",
      "READ",
      [
        "storage",
        "01126658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc93a4",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc93c8",
      "PARAM",
      [
        "storage",
        "002a1c28",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc93a0",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc93a4",
      "READ",
      [
        "storage",
        "01126768",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc93c8",
      "PARAM",
      [
        "storage",
        "002a1bdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9278 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc9278 ["INT_ADD", "register:40f0:8", ["const:bc9278:8", "const:4:8"]]
- 00bc9278 ["CALLIND", null, ["register:0:8"]]
+ 00bc9314 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc9314 ["INT_ADD", "register:40f0:8", ["const:bc9314:8", "const:4:8"]]
+ 00bc9314 ["CALLIND", null, ["register:0:8"]]
- 00bc9314 ["INT_ADD", "register:40f0:8", ["const:bc9314:8", "const:4:8"]]
- 00bc9314 ["CALL", null, ["callee:00589734:8"]]
+ 00bc93b0 ["INT_ADD", "register:40f0:8", ["const:bc93b0:8", "const:4:8"]]
+ 00bc93b0 ["CALL", null, ["callee:00589734:8"]]
- 00bc9330 ["INT_ADD", "register:40f0:8", ["const:bc9330:8", "const:4:8"]]
- 00bc9330 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc93cc ["INT_ADD", "register:40f0:8", ["const:bc93cc:8", "const:4:8"]]
+ 00bc93cc ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-423fdd9f272cee25b332639cd148cda6"></a>

### [`00bc99c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc99c4.md) → [`00bc9a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a60.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_13remote_config10ConfigInfoEZNS0_26CompleteWithResultInternalIS3_EEvRKNS_12Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8d0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5d9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9a0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9acc",
      "incomplete_value": false,
      "site": "00bc9ad0",
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
      "definition_site": "00bc9a30",
      "incomplete_value": false,
      "site": "00bc9a34",
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
      "00bc9acc",
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
      "00bc9acc",
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
- 00bc9a34 ["INT_ADD", "register:40f0:8", ["const:bc9a34:8", "const:4:8"]]
- 00bc9a34 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc9ad0 ["INT_ADD", "register:40f0:8", ["const:bc9ad0:8", "const:4:8"]]
+ 00bc9ad0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc99f8 ["INT_ADD", "register:40f0:8", ["const:bc99f8:8", "const:4:8"]]
- 00bc99f8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc9a94 ["INT_ADD", "register:40f0:8", ["const:bc9a94:8", "const:4:8"]]
+ 00bc9a94 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc9a04 ["INT_ADD", "register:40f0:8", ["const:bc9a04:8", "const:4:8"]]
- 00bc9a04 ["CALL", null, ["callee:00c5af50:8"]]
+ 00bc9aa0 ["INT_ADD", "register:40f0:8", ["const:bc9aa0:8", "const:4:8"]]
+ 00bc9aa0 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-6a034f6d841051e307d22380621d8b76"></a>

### [`00bc9af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9af0.md) → [`00bc9b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9b8c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIbZNS0_26CompleteWithResultInternalIbEEvRKNS_12FutureHandleEiPKcRKT_EUlPbE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8e0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5d9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9b0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 89.04% / 新版 89.04%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9bf8",
      "incomplete_value": false,
      "site": "00bc9bfc",
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
      "definition_site": "00bc9b5c",
      "incomplete_value": false,
      "site": "00bc9b60",
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
      "definition_site": "00bc9bb0",
      "incomplete_value": true,
      "site": "00bc9bb4",
      "value": [
        "live",
        "register:4098:8"
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
      "00bc9bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bc9be0"
      ]
    ],
    [
      "unmatched:00bc9b5c",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bc9bd0",
      "READ",
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
      "00bc9bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc9c7c"
      ]
    ],
    [
      "00bc9bf8",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00bc9c6c",
      "READ",
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
- 00bc9b60 ["INT_ADD", "register:40f0:8", ["const:bc9b60:8", "const:4:8"]]
- 00bc9b60 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc9bfc ["INT_ADD", "register:40f0:8", ["const:bc9bfc:8", "const:4:8"]]
+ 00bc9bfc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc9bb4 ["INT_ADD", "register:40f0:8", ["const:bc9bb4:8", "const:4:8"]]
- 00bc9bb4 ["CALL", null, ["callee:00c5b140:8"]]
+ 00bc9c50 ["INT_ADD", "register:40f0:8", ["const:bc9c50:8", "const:4:8"]]
+ 00bc9c50 ["CALL", null, ["callee:00c5b140:8"]]
- 00bc9b24 ["INT_ADD", "register:40f0:8", ["const:bc9b24:8", "const:4:8"]]
- 00bc9b24 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc9bc0 ["INT_ADD", "register:40f0:8", ["const:bc9bc0:8", "const:4:8"]]
+ 00bc9bc0 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-bc17866a54a5053340f67ae4197652b5"></a>

### [`00bc9c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9c20.md) → [`00bc9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9cbc.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_13remote_config10ConfigInfoEEEvRKNS_12FutureHandleEiP

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8f0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5d9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9c0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9d20",
      "incomplete_value": false,
      "site": "00bc9d24",
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
      "definition_site": "00bc9c84",
      "incomplete_value": false,
      "site": "00bc9c88",
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
      "definition_site": "00bc9c8c",
      "incomplete_value": true,
      "site": "00bc9c9c",
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
      "definition_site": "00bc9c90",
      "incomplete_value": true,
      "site": "00bc9c9c",
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
      "unmatched:00bc9c84",
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
      "00bc9d20",
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
- 00bc9c88 ["INT_ADD", "register:40f0:8", ["const:bc9c88:8", "const:4:8"]]
- 00bc9c88 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc9d24 ["INT_ADD", "register:40f0:8", ["const:bc9d24:8", "const:4:8"]]
+ 00bc9d24 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc9c9c ["INT_ADD", "register:40f0:8", ["const:bc9c9c:8", "const:4:8"]]
- 00bc9c9c ["CALL", null, ["callee:00c5af40:8"]]
+ 00bc9d38 ["INT_ADD", "register:40f0:8", ["const:bc9d38:8", "const:4:8"]]
+ 00bc9d38 ["CALL", null, ["callee:00c5af40:8"]]
- 00bc9cc0 ["INT_ADD", "register:40f0:8", ["const:bc9cc0:8", "const:4:8"]]
- 00bc9cc0 ["CALL", null, ["callee:00c5af20:8"]]
+ 00bc9d5c ["INT_ADD", "register:40f0:8", ["const:bc9d5c:8", "const:4:8"]]
+ 00bc9d5c ["CALL", null, ["callee:00c5af20:8"]]
~~~


<a id="compare-16281dae0307235c1920e2eaff631882"></a>

### [`00bc9d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9d28.md) → [`00bc9dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9dc4.md) _ZN8firebase6FutureINS_13remote_config10ConfigInfoEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d910.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5d9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9e0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bc9d70",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc9e0c",
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
- 00bc9d48 ["INT_ADD", "register:40f0:8", ["const:bc9d48:8", "const:4:8"]]
- 00bc9d48 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc9de4 ["INT_ADD", "register:40f0:8", ["const:bc9de4:8", "const:4:8"]]
+ 00bc9de4 ["CALL", null, ["callee:00c5ad40:8"]]
- 00bc9d5c ["INT_ADD", "register:40f0:8", ["const:bc9d5c:8", "const:4:8"]]
- 00bc9d5c ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bc9df8 ["INT_ADD", "register:40f0:8", ["const:bc9df8:8", "const:4:8"]]
+ 00bc9df8 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bc9d70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc9d70 ["INT_ADD", "register:40f0:8", ["const:bc9d70:8", "const:4:8"]]
- 00bc9d70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1e35cde9319fe37c8d2b2e23abe55ddb"></a>

### [`00bc9dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9dd4.md) → [`00bc9e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e70.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalIbEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS5_iS7_RKT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d900.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5d9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9d0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9e8c",
      "incomplete_value": true,
      "site": "00bc9e9c",
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
    "old": {
      "definition_site": "00bc9df0",
      "incomplete_value": true,
      "site": "00bc9e00",
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
      "definition_site": "00bc9ed4",
      "incomplete_value": false,
      "site": "00bc9ed8",
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
      "definition_site": "00bc9e38",
      "incomplete_value": false,
      "site": "00bc9e3c",
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
      "00bc9eac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bc9eb0"
      ]
    ],
    [
      "00bc9ed4",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "00bc9f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc9f4c"
      ]
    ]
  ],
  "added": [
    [
      "00bc9eac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc9f4c"
      ]
    ],
    [
      "00bc9ed4",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00bc9f28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bc9f64"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9e00 ["INT_ADD", "register:40f0:8", ["const:bc9e00:8", "const:4:8"]]
- 00bc9e00 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bc9e9c ["INT_ADD", "register:40f0:8", ["const:bc9e9c:8", "const:4:8"]]
+ 00bc9e9c ["CALL", null, ["callee:00c5aad0:8"]]
- 00bc9e3c ["INT_ADD", "register:40f0:8", ["const:bc9e3c:8", "const:4:8"]]
- 00bc9e3c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bc9ed8 ["INT_ADD", "register:40f0:8", ["const:bc9ed8:8", "const:4:8"]]
+ 00bc9ed8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bc9ed8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bc9ed8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-e34126ebd15de82c8c72f33fac402dbd"></a>

### [`00bc9edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9edc.md) → [`00bc9f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9f78.md) _ZN8firebase6FutureIbEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d920.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5d9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9f0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.19% / 新版 74.19%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bc9ef0",
      "incomplete_value": false,
      "site": "00bc9efc",
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
      "unmatched:00bc9ee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc9ee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc9f2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aec0"
      ]
    ]
  ],
  "added": [
    [
      "00bc9f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bc9f80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bc9fc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5aec0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9efc ["INT_ADD", "register:40f0:8", ["const:bc9efc:8", "const:4:8"]]
- 00bc9efc ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bc9f98 ["INT_ADD", "register:40f0:8", ["const:bc9f98:8", "const:4:8"]]
+ 00bc9f98 ["CALL", null, ["callee:00c5ad40:8"]]
- 00bc9ee0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bc9ee0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bc9ee0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bc9ee0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bc9ee4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bc9ee4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bc9ee4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bc9ee4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b4a0eafbcc3fc61144cee8bc8b972c9c"></a>

### [`00bc9f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9f80.md) → [`00bca01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca01c.md) FUN_00bca01c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bc9fa0",
      "DATA",
      [
        "storage",
        "00c91828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00bca03c",
      "DATA",
      [
        "storage",
        "00c918f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9f94 ["INT_ADD", "register:40f0:8", ["const:bc9f94:8", "const:4:8"]]
- 00bc9f94 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bca030 ["INT_ADD", "register:40f0:8", ["const:bca030:8", "const:4:8"]]
+ 00bca030 ["CALL", null, ["callee:00c57f60:8"]]
- 00bc9f9c ["COPY", "tmp:0:8", ["const:828:8"]]
- 00bc9f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bc9f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bc9f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00bc9fa0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00bc9fa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ec72da2498390a788fda72e467aa89c0"></a>

### [`00bc9fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9fb8.md) → [`00bca054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca054.md) FUN_00bca054

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
      "unmatched:00bc9fc0",
      "DATA",
      [
        "storage",
        "00c91828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00bca05c",
      "DATA",
      [
        "storage",
        "00c918f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9fb8 ["COPY", "register:4040:8", ["const:c91000:8"]]
- 00bc9fbc ["COPY", "tmp:0:8", ["const:828:8"]]
- 00bc9fbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bc9fbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bc9fbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00bc9fc0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00bc9fc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0ab91b3fde2bfc5912ca85f4be0f0492"></a>

### [`00bc9fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc9/00bc9fd8.md) → [`00bca074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca074.md) FUN_00bca074

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b340.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b410.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca08c",
      "incomplete_value": true,
      "site": "00bca098",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca090",
      "incomplete_value": true,
      "site": "00bca098",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": {
      "definition_site": "00bc9ff4",
      "incomplete_value": true,
      "site": "00bc9ffc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6a8:8"
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
      "definition_site": "00bca000",
      "incomplete_value": true,
      "site": "00bca004",
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
      "unmatched:00bc9fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc9fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bc9ff4",
      "READ",
      [
        "storage",
        "011266a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bca074",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bca078",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bca090",
      "READ",
      [
        "storage",
        "011267a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc9ffc ["INT_ADD", "register:40f0:8", ["const:bc9ffc:8", "const:4:8"]]
- 00bc9ffc ["CALL", null, ["callee:00574d2c:8"]]
+ 00bca098 ["INT_ADD", "register:40f0:8", ["const:bca098:8", "const:4:8"]]
+ 00bca098 ["CALL", null, ["callee:00574d2c:8"]]
- 00bca004 ["INT_ADD", "register:40f0:8", ["const:bca004:8", "const:4:8"]]
- 00bca004 ["CALL", null, ["callee:00c5b030:8"]]
+ 00bca0a0 ["INT_ADD", "register:40f0:8", ["const:bca0a0:8", "const:4:8"]]
+ 00bca0a0 ["CALL", null, ["callee:00c5b030:8"]]
- 00bca014 ["INT_ADD", "register:40f0:8", ["const:bca014:8", "const:4:8"]]
- 00bca014 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bca0b0 ["INT_ADD", "register:40f0:8", ["const:bca0b0:8", "const:4:8"]]
+ 00bca0b0 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-b74ebc49a5915add3149ab96772c0390"></a>

### [`00bca05c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca05c.md) → [`00bca0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca0f8.md) _INIT_289

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bc3c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc3/00bc3c14.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c5ac80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bc3cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3cb0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bca114",
      "incomplete_value": true,
      "site": "00bca114",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca078",
      "incomplete_value": true,
      "site": "00bca078",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
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
      "definition_site": "00bca114",
      "incomplete_value": true,
      "site": "00bca118",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca078",
      "incomplete_value": true,
      "site": "00bca07c",
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
            "const:4:8"
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
      "00bca108",
      "READ",
      [
        "storage",
        "00c9b978",
        null,
        "pointer"
      ]
    ],
    [
      "00bca114",
      "WRITE",
      [
        "storage",
        "011266b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bca114",
      "PARAM",
      [
        "storage",
        "011266bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bca108",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bca114",
      "WRITE",
      [
        "storage",
        "011267b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bca114",
      "PARAM",
      [
        "storage",
        "011267bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca07c ["INT_ADD", "register:40f0:8", ["const:bca07c:8", "const:4:8"]]
- 00bca07c ["CALL", null, ["callee:00c5ad50:8"]]
+ 00bca118 ["INT_ADD", "register:40f0:8", ["const:bca118:8", "const:4:8"]]
+ 00bca118 ["CALL", null, ["callee:00c5ad50:8"]]
- 00bca06c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
- 00bca06c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bca108 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bca108 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00bca084 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:998:8"]]
- 00bca084 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bca120 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:a68:8"]]
+ 00bca120 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-06937bab2b8584c16324334c0dc7d7e9"></a>

### [`00bca0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca0f4.md) → [`00bca190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca190.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistrationC1EOS1_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bca360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca360.md) [`00c5ac00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac00.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bca3fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca3fc.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bca1a0",
      "READ",
      [
        "storage",
        "00c9b928",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bca114",
      "DATA",
      [
        "storage",
        "00c918a8",
        null,
        "pointer"
      ]
    ],
    [
      "00bca1ec",
      "READ",
      [
        "storage",
        "00c9b920",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bca1a0",
      "READ",
      [
        "storage",
        "00c9b9f8",
        null,
        "pointer"
      ]
    ],
    [
      "00bca1b0",
      "DATA",
      [
        "storage",
        "00c91978",
        null,
        "pointer"
      ]
    ],
    [
      "00bca1ec",
      "READ",
      [
        "storage",
        "00c9b9f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca104 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:928:8"]]
- 00bca104 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bca1a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9f8:8"]]
+ 00bca1a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bca110 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bca110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bca110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bca110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00bca114 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00bca114 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-eba5a37491d7d5d5a9c59d3d876c6b92"></a>

### [`00bca1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca1b8.md) → [`00bca254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca254.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistrationD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bca1b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bca1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bca1cc",
      "READ",
      [
        "storage",
        "00c9b928",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bca254",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bca258",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bca268",
      "READ",
      [
        "storage",
        "00c9b9f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca1b8 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bca1b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bca1b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bca1bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bca1bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bca1bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bca1bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bca1c0 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bca1c0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bca1c0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bca1c0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-597634e8bf31df80fb2fb927444e02e2"></a>

### [`00bca200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca200.md) → [`00bca29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca29c.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistrationD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 41.18% / 新版 41.18%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca2c4",
      "incomplete_value": true,
      "site": "00bca2cc",
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
            "const:138:8"
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
      "definition_site": "00bca2c8",
      "incomplete_value": true,
      "site": "00bca2cc",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00bca200",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bca204",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bca214",
      "READ",
      [
        "storage",
        "00c9b928",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bca29c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bca2a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bca2b0",
      "READ",
      [
        "storage",
        "00c9b9f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca230 ["INT_ADD", "register:40f0:8", ["const:bca230:8", "const:4:8"]]
- 00bca230 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00bca2cc ["INT_ADD", "register:40f0:8", ["const:bca2cc:8", "const:4:8"]]
+ 00bca2cc ["CALL", null, ["callee:00c5ace0:8"]]
- 00bca200 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bca200 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bca200 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bca204 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bca204 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bca204 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bca204 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b2b95a41664db8d3a753194666411771"></a>

### [`00bca4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca4e4.md) → [`00bca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca580.md) _ZN8firebase4auth4Auth7GetAuthEPNS_3AppEPNS_10InitResultE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9c0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5aa90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa90.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bca5cc",
      "incomplete_value": true,
      "site": "00bca5cc",
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
      "definition_site": "00bca530",
      "incomplete_value": true,
      "site": "00bca530",
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
      "definition_site": "00bca5ac",
      "incomplete_value": true,
      "site": "00bca5b0",
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
      "definition_site": "00bca510",
      "incomplete_value": true,
      "site": "00bca514",
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
      "definition_site": "00bca674",
      "incomplete_value": false,
      "site": "00bca680",
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
            "const:2f2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca5d8",
      "incomplete_value": false,
      "site": "00bca5e4",
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
            "const:34e:8"
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
      "00bca59c",
      "READ",
      [
        "storage",
        "00c9b9a0",
        null,
        "pointer"
      ]
    ],
    [
      "00bca5a8",
      "READ",
      [
        "storage",
        "01126720",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bca5b4",
      "READ",
      [
        "storage",
        "01126720",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bca59c",
      "READ",
      [
        "storage",
        "00c9ba70",
        null,
        "pointer"
      ]
    ],
    [
      "00bca5a8",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bca5b4",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca514 ["INT_ADD", "register:40f0:8", ["const:bca514:8", "const:4:8"]]
- 00bca514 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bca5b0 ["INT_ADD", "register:40f0:8", ["const:bca5b0:8", "const:4:8"]]
+ 00bca5b0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bca5b0 ["INT_ADD", "register:40f0:8", ["const:bca5b0:8", "const:4:8"]]
- 00bca5b0 ["CALL", null, ["callee:00c5daa0:8"]]
+ 00bca64c ["INT_ADD", "register:40f0:8", ["const:bca64c:8", "const:4:8"]]
+ 00bca64c ["CALL", null, ["callee:00c5daa0:8"]]
- 00bca5e4 ["INT_ADD", "register:40f0:8", ["const:bca5e4:8", "const:4:8"]]
- 00bca5e4 ["CALL", null, ["callee:00c5b200:8"]]
+ 00bca680 ["INT_ADD", "register:40f0:8", ["const:bca680:8", "const:4:8"]]
+ 00bca680 ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-fdebcef5d18e85f18f919b6fc91754fa"></a>

### [`00bca790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca790.md) → [`00bca82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca82c.md) _ZN8firebase4auth4AuthC1EPNS_3AppEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5da90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da90.md) · 呼出先 10件 [`00bcbdac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbdac.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5abf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abf0.md)
- 新版 呼出元 1件 [`00c5db60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db60.md) · 呼出先 10件 [`00bcbe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe48.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca87c",
      "incomplete_value": false,
      "site": "00bca880",
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
            "const:4b6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca7e0",
      "incomplete_value": false,
      "site": "00bca7e4",
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
            "const:512:8"
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
      "definition_site": "00bca8a0",
      "incomplete_value": false,
      "site": "00bca8ac",
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
            "const:bb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca804",
      "incomplete_value": false,
      "site": "00bca810",
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
            "const:10f:8"
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
      "definition_site": "00bca904",
      "incomplete_value": false,
      "site": "00bca90c",
      "value": [
        "leaf",
        "const:bcbe48:8"
      ]
    },
    "old": {
      "definition_site": "00bca868",
      "incomplete_value": false,
      "site": "00bca870",
      "value": [
        "leaf",
        "const:bcbdac:8"
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
      "00bca87c",
      "PARAM",
      [
        "storage",
        "002af512",
        null,
        "string"
      ]
    ],
    [
      "00bca8a0",
      "PARAM",
      [
        "storage",
        "002bc10f",
        null,
        null
      ]
    ],
    [
      "00bca904",
      "PARAM",
      [
        "storage",
        "00bcbdac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bca87c",
      "PARAM",
      [
        "storage",
        "002af4b6",
        null,
        "string"
      ]
    ],
    [
      "00bca8a0",
      "PARAM",
      [
        "storage",
        "002bc0bb",
        null,
        null
      ]
    ],
    [
      "00bca904",
      "PARAM",
      [
        "storage",
        "00bcbe48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca7e4 ["INT_ADD", "register:40f0:8", ["const:bca7e4:8", "const:4:8"]]
- 00bca7e4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bca880 ["INT_ADD", "register:40f0:8", ["const:bca880:8", "const:4:8"]]
+ 00bca880 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bca810 ["INT_ADD", "register:40f0:8", ["const:bca810:8", "const:4:8"]]
- 00bca810 ["CALL", null, ["callee:00c5be30:8"]]
+ 00bca8ac ["INT_ADD", "register:40f0:8", ["const:bca8ac:8", "const:4:8"]]
+ 00bca8ac ["CALL", null, ["callee:00c5be30:8"]]
- 00bca870 ["INT_ADD", "register:40f0:8", ["const:bca870:8", "const:4:8"]]
- 00bca870 ["CALL", null, ["callee:00c5acd0:8"]]
+ 00bca90c ["INT_ADD", "register:40f0:8", ["const:bca90c:8", "const:4:8"]]
+ 00bca90c ["CALL", null, ["callee:00c5acd0:8"]]
~~~


<a id="compare-2e8fa686d4da5b664ac9d6bfa2e14a78"></a>

### [`00bcaa3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bcaa3c.md) → [`00bcaad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcaad8.md) _ZN8firebase4auth4Auth14DeleteInternalEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5da30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da30.md) · 呼出先 14件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5abf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abf0.md) [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md) · 呼出先 14件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.27% / 新版 99.27%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcab6c",
      "incomplete_value": true,
      "site": "00bcab70",
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
      "definition_site": "00bcaad0",
      "incomplete_value": true,
      "site": "00bcaad4",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcaaf8",
      "incomplete_value": true,
      "site": "00bcaafc",
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
      "definition_site": "00bcaa5c",
      "incomplete_value": true,
      "site": "00bcaa60",
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
      "definition_site": "00bcabe4",
      "incomplete_value": false,
      "site": "00bcabec",
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
            "const:bc9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcab48",
      "incomplete_value": false,
      "site": "00bcab50",
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
            "const:c16:8"
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
      "00bcaaec",
      "READ",
      [
        "storage",
        "00c9b9a0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcaaf4",
      "READ",
      [
        "storage",
        "01126720",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcab60",
      "READ",
      [
        "storage",
        "00c9b9a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bcaaec",
      "READ",
      [
        "storage",
        "00c9ba70",
        null,
        "pointer"
      ]
    ],
    [
      "00bcaaf4",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcab60",
      "READ",
      [
        "storage",
        "00c9ba78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcaa60 ["INT_ADD", "register:40f0:8", ["const:bcaa60:8", "const:4:8"]]
- 00bcaa60 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcaafc ["INT_ADD", "register:40f0:8", ["const:bcaafc:8", "const:4:8"]]
+ 00bcaafc ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcaab4 ["INT_ADD", "register:40f0:8", ["const:bcaab4:8", "const:4:8"]]
- 00bcaab4 ["CALL", null, ["callee:00c5acc0:8"]]
+ 00bcab50 ["INT_ADD", "register:40f0:8", ["const:bcab50:8", "const:4:8"]]
+ 00bcab50 ["CALL", null, ["callee:00c5acc0:8"]]
- 00bcab50 ["INT_ADD", "register:40f0:8", ["const:bcab50:8", "const:4:8"]]
- 00bcab50 ["CALL", null, ["callee:00c5b200:8"]]
+ 00bcabec ["INT_ADD", "register:40f0:8", ["const:bcabec:8", "const:4:8"]]
+ 00bcabec ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-9f5fae9aa6279343cc4620c0dfece785"></a>

### [`00bcadfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bcadfc.md) → [`00bcae98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcae98.md) _ZN8firebase4auth4Auth3appEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5da80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da80.md) · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db50.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcaeb4",
      "incomplete_value": false,
      "site": "00bcaeb8",
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
            "const:6ac:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcae18",
      "incomplete_value": false,
      "site": "00bcae1c",
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
            "const:708:8"
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
      "00bcaeb4",
      "PARAM",
      [
        "storage",
        "002b1708",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcaeb4",
      "PARAM",
      [
        "storage",
        "002b16ac",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcae1c ["INT_ADD", "register:40f0:8", ["const:bcae1c:8", "const:4:8"]]
- 00bcae1c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcaeb8 ["INT_ADD", "register:40f0:8", ["const:bcaeb8:8", "const:4:8"]]
+ 00bcaeb8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcae18 ["COPY", "tmp:0:8", ["const:708:8"]]
- 00bcae18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcae18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcae18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcaeb4 ["COPY", "tmp:0:8", ["const:6ac:8"]]
+ 00bcaeb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcaeb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcaeb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dc8611aea392bf331bcb4e09a0236ab3"></a>

### [`00bcae34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bcae34.md) → [`00bcaed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcaed0.md) _ZN8firebase4auth4Auth20AddAuthStateListenerEPNS0_17AuthStateListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5daf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5daf0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5dbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.08% / 新版 99.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb048",
      "incomplete_value": false,
      "site": "00bcb04c",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcafac",
      "incomplete_value": false,
      "site": "00bcafb0",
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
            "const:c6c:8"
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
      "00bcb048",
      "PARAM",
      [
        "storage",
        "002b8c6c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcb048",
      "PARAM",
      [
        "storage",
        "002b8c18",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcafb0 ["INT_ADD", "register:40f0:8", ["const:bcafb0:8", "const:4:8"]]
- 00bcafb0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcb04c ["INT_ADD", "register:40f0:8", ["const:bcb04c:8", "const:4:8"]]
+ 00bcb04c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcae70 ["INT_ADD", "register:40f0:8", ["const:bcae70:8", "const:4:8"]]
- 00bcae70 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcaf0c ["INT_ADD", "register:40f0:8", ["const:bcaf0c:8", "const:4:8"]]
+ 00bcaf0c ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcaef4 ["INT_ADD", "register:40f0:8", ["const:bcaef4:8", "const:4:8"]]
- 00bcaef4 ["CALL", null, ["callee:00c5dbc0:8"]]
+ 00bcaf90 ["INT_ADD", "register:40f0:8", ["const:bcaf90:8", "const:4:8"]]
+ 00bcaf90 ["CALL", null, ["callee:00c5dbc0:8"]]
~~~


<a id="compare-819a857ff35d124c52d4c4d05c27b873"></a>

### [`00bcb004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb004.md) → [`00bcb0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb0a0.md) _ZN8firebase4auth4Auth18AddIdTokenListenerEPNS0_15IdTokenListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5d9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9e0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5dab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dab0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.68% / 新版 84.68%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcb038",
      "incomplete_value": true,
      "site": "00bcb040",
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
            "const:268:8"
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
      "definition_site": "00bcb220",
      "incomplete_value": false,
      "site": "00bcb224",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcb184",
      "incomplete_value": true,
      "site": "00bcb188",
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
            "const:c6c:8"
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
      "definition_site": "00bcb228",
      "incomplete_value": true,
      "site": "00bcb22c",
      "value": [
        "live",
        "register:4098:8"
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
      "00bcb10c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcb0a4"
      ]
    ],
    [
      "00bcb128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcb0a4"
      ]
    ],
    [
      "unmatched:00bcb0a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb12c"
      ]
    ]
  ],
  "added": [
    [
      "00bcb10c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb140"
      ]
    ],
    [
      "00bcb128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb140"
      ]
    ],
    [
      "00bcb13c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb12c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb040 ["INT_ADD", "register:40f0:8", ["const:bcb040:8", "const:4:8"]]
- 00bcb040 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcb0dc ["INT_ADD", "register:40f0:8", ["const:bcb0dc:8", "const:4:8"]]
+ 00bcb0dc ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcb14c ["INT_ADD", "register:40f0:8", ["const:bcb14c:8", "const:4:8"]]
- 00bcb14c ["CALL", null, ["callee:00c5dbe0:8"]]
+ 00bcb1e8 ["INT_ADD", "register:40f0:8", ["const:bcb1e8:8", "const:4:8"]]
+ 00bcb1e8 ["CALL", null, ["callee:00c5dbe0:8"]]
- 00bcb150 ["INT_RIGHT", "tmp:0:4", ["register:40b8:4", "const:0:4"]]
- 00bcb150 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00bcb150 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00bcb150 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00bcb1ec ["INT_RIGHT", "tmp:0:4", ["register:40b8:4", "const:0:4"]]
+ 00bcb1ec ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00bcb1ec ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00bcb1ec ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-f0b86d1c9cdd5d02efe43db52fb5a1e9"></a>

### [`00bcb1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb1dc.md) → [`00bcb278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb278.md) _ZN8firebase4auth4Auth23RemoveAuthStateListenerEPNS0_17AuthStateListenerE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5da70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da70.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db40.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 69.12% / 新版 69.12%

優先判定に残った影響 `unresolved_branch_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bcb214",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb30c"
      ]
    ],
    [
      "unmatched:00bcb244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb2c8"
      ]
    ],
    [
      "unmatched:00bcb278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb370"
      ]
    ]
  ],
  "added": [
    [
      "00bcb2b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb30c"
      ]
    ],
    [
      "00bcb2e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb2c8"
      ]
    ],
    [
      "00bcb314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb370"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb1f0 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00bcb1f0 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 00bcb28c ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00bcb28c ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 00bcb204 ["INT_ADD", "register:40f0:8", ["const:bcb204:8", "const:4:8"]]
- 00bcb204 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcb2a0 ["INT_ADD", "register:40f0:8", ["const:bcb2a0:8", "const:4:8"]]
+ 00bcb2a0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcb214 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
~~~


<a id="compare-5bcde131bd775ae82aa574d7d5a9e641"></a>

### [`00bcb2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb2f0.md) → [`00bcb38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb38c.md) _ZN8firebase4auth4Auth21RemoveIdTokenListenerEPNS0_15IdTokenListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5da60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da60.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5da00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da00.md)
- 新版 呼出元 1件 [`00c5db30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db30.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5dad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dad0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 83.72% / 新版 83.72%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bcb378"
      ],
      [
        "FALL_THROUGH",
        "00bcb414"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00bcb41c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00bcb374",
      "incomplete_value": true,
      "site": "00bcb380",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
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
    "ordinal": 8,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bcb334",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb42c"
      ]
    ],
    [
      "00bcb3dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcb368"
      ]
    ],
    [
      "unmatched:00bcb350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb42c"
      ]
    ]
  ],
  "added": [
    [
      "00bcb3d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb42c"
      ]
    ],
    [
      "00bcb3dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb404"
      ]
    ],
    [
      "00bcb3ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcb42c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb41c ["CBRANCH", null, ["local:b27:8", "register:102:1"]]
+ 00bcb4b8 ["CBRANCH", null, ["local:b26:8", "register:102:1"]]
- 00bcb308 ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
- 00bcb308 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 00bcb3a4 ["INT_EQUAL", "tmp:0:1", ["register:40c0:8", "const:0:8"]]
+ 00bcb3a4 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
- 00bcb324 ["INT_ADD", "register:40f0:8", ["const:bcb324:8", "const:4:8"]]
- 00bcb324 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcb3c0 ["INT_ADD", "register:40f0:8", ["const:bcb3c0:8", "const:4:8"]]
+ 00bcb3c0 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-5310ed5d2c457a547d33af8c2ccf6b31"></a>

### [`00bcb554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb554.md) → [`00bcb5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb5f0.md) _ZN8firebase4auth24NotifyAuthStateListenersEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5da10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da10.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 1件 [`00c5dae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dae0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb640",
      "incomplete_value": false,
      "site": "00bcb644",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcb5a4",
      "incomplete_value": false,
      "site": "00bcb5a8",
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
            "const:42a:8"
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
      "00bcb640",
      "PARAM",
      [
        "storage",
        "002bd42a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcb640",
      "PARAM",
      [
        "storage",
        "002bd3d6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb5a8 ["INT_ADD", "register:40f0:8", ["const:bcb5a8:8", "const:4:8"]]
- 00bcb5a8 ["CALL", null, ["callee:00c5b200:8"]]
+ 00bcb644 ["INT_ADD", "register:40f0:8", ["const:bcb644:8", "const:4:8"]]
+ 00bcb644 ["CALL", null, ["callee:00c5b200:8"]]
- 00bcb580 ["INT_ADD", "register:40f0:8", ["const:bcb580:8", "const:4:8"]]
- 00bcb580 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcb61c ["INT_ADD", "register:40f0:8", ["const:bcb61c:8", "const:4:8"]]
+ 00bcb61c ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcb590 ["INT_ADD", "register:40f0:8", ["const:bcb590:8", "const:4:8"]]
- 00bcb590 ["CALL", null, ["callee:00c5dbd0:8"]]
+ 00bcb62c ["INT_ADD", "register:40f0:8", ["const:bcb62c:8", "const:4:8"]]
+ 00bcb62c ["CALL", null, ["callee:00c5dbd0:8"]]
~~~


<a id="compare-80ceb01c58959475974031d4670fb122"></a>

### [`00bcb6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb6bc.md) → [`00bcb758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb758.md) _ZNSt6__ndk16vectorIPN8firebase4auth17AuthStateListenerENS_9allocatorIS4_EEEC2ERKS7_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db00.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5dbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbd0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bcb6bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcb6c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcb6c4",
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
      "00bcb758",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bcb75c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcb760",
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
- 00bcb6bc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bcb6bc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bcb6bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bcb6bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcb6c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bcb6c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bcb6c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcb6c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bcb6c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bcb6c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bcb6c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bcb6c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e5eea37a420830ed6be445ca741f2cfa"></a>

### [`00bcb77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb77c.md) → [`00bcb818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb818.md) _ZN8firebase4auth22NotifyIdTokenListenersEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9f0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 1件 [`00c5dac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dac0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb868",
      "incomplete_value": false,
      "site": "00bcb86c",
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
            "const:18d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcb7cc",
      "incomplete_value": false,
      "site": "00bcb7d0",
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
            "const:1e9:8"
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
      "00bcb868",
      "PARAM",
      [
        "storage",
        "002a61e9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcb868",
      "PARAM",
      [
        "storage",
        "002a618d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb7d0 ["INT_ADD", "register:40f0:8", ["const:bcb7d0:8", "const:4:8"]]
- 00bcb7d0 ["CALL", null, ["callee:00c5b200:8"]]
+ 00bcb86c ["INT_ADD", "register:40f0:8", ["const:bcb86c:8", "const:4:8"]]
+ 00bcb86c ["CALL", null, ["callee:00c5b200:8"]]
- 00bcb7a8 ["INT_ADD", "register:40f0:8", ["const:bcb7a8:8", "const:4:8"]]
- 00bcb7a8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcb844 ["INT_ADD", "register:40f0:8", ["const:bcb844:8", "const:4:8"]]
+ 00bcb844 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcb7b8 ["INT_ADD", "register:40f0:8", ["const:bcb7b8:8", "const:4:8"]]
- 00bcb7b8 ["CALL", null, ["callee:00c5dbb0:8"]]
+ 00bcb854 ["INT_ADD", "register:40f0:8", ["const:bcb854:8", "const:4:8"]]
+ 00bcb854 ["CALL", null, ["callee:00c5dbb0:8"]]
~~~


<a id="compare-97978a0577c88e84c2c99d38247032c8"></a>

### [`00bcb8e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcb8e4.md) → [`00bcb980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb980.md) _ZNSt6__ndk16vectorIPN8firebase4auth15IdTokenListenerENS_9allocatorIS4_EEEC2ERKS7_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dae0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5dbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbb0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00bcb914 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcb914 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00bcb9b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcb9b0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00bcb91c ["INT_ADD", "register:40f0:8", ["const:bcb91c:8", "const:4:8"]]
- 00bcb91c ["CALL", null, ["callee:00c57f60:8"]]
+ 00bcb9b8 ["INT_ADD", "register:40f0:8", ["const:bcb9b8:8", "const:4:8"]]
+ 00bcb9b8 ["CALL", null, ["callee:00c57f60:8"]]
- 00bcb948 ["INT_ADD", "register:40f0:8", ["const:bcb948:8", "const:4:8"]]
- 00bcb948 ["CALL", null, ["callee:00c580d0:8"]]
+ 00bcb9e4 ["INT_ADD", "register:40f0:8", ["const:bcb9e4:8", "const:4:8"]]
+ 00bcb9e4 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-338638432d84b6272d3fd8559c3643c8"></a>

### [`00bcbb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbb54.md) → [`00bcbbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbbf0.md) _ZNK8firebase4auth4Auth45SignInAndRetrieveDataWithCredentialLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

アドレスに依存する影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcbb98",
      "incomplete_value": true,
      "site": "00bcbb9c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcbba4",
      "incomplete_value": true,
      "site": "00bcbba8",
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
      "definition_site": "00bcbba0",
      "incomplete_value": true,
      "site": "00bcbba8",
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
            "const:c0:8"
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
      "unmatched:00bcbb54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcbb58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcbb5c",
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
      "00bcbbf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bcbbf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcbbf8",
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
- 00bcbb9c ["INT_ADD", "register:40f0:8", ["const:bcbb9c:8", "const:4:8"]]
- 00bcbb9c ["CALL", null, ["callee:00c5aee0:8"]]
+ 00bcbc38 ["INT_ADD", "register:40f0:8", ["const:bcbc38:8", "const:4:8"]]
+ 00bcbc38 ["CALL", null, ["callee:00c5aee0:8"]]
- 00bcbba8 ["INT_ADD", "register:40f0:8", ["const:bcbba8:8", "const:4:8"]]
- 00bcbba8 ["CALL", null, ["callee:00c5ae20:8"]]
+ 00bcbc44 ["INT_ADD", "register:40f0:8", ["const:bcbc44:8", "const:4:8"]]
+ 00bcbc44 ["CALL", null, ["callee:00c5ae20:8"]]
- 00bcbb54 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bcbb54 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bcbb54 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-87446524a28dabb3f453386db89b4c78"></a>

### [`00bcbbe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbbe4.md) → [`00bcbc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbc80.md) _ZNK8firebase4auth4Auth27SignInAnonymouslyLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.31% / 新版 92.31%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbc9c",
      "incomplete_value": true,
      "site": "00bcbca0",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00bcbc00",
      "incomplete_value": true,
      "site": "00bcbc04",
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
                "register:4000:8"
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbcc4",
      "incomplete_value": true,
      "site": "00bcbcc8",
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


~~~diff
- 00bcbc04 ["INT_ADD", "register:40f0:8", ["const:bcbc04:8", "const:4:8"]]
- 00bcbc04 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcbca0 ["INT_ADD", "register:40f0:8", ["const:bcbca0:8", "const:4:8"]]
+ 00bcbca0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcbc2c ["INT_ADD", "register:40f0:8", ["const:bcbc2c:8", "const:4:8"]]
- 00bcbc2c ["CALL", null, ["callee:00c5aee0:8"]]
+ 00bcbcc8 ["INT_ADD", "register:40f0:8", ["const:bcbcc8:8", "const:4:8"]]
+ 00bcbcc8 ["CALL", null, ["callee:00c5aee0:8"]]
- 00bcbc00 ["COPY", "register:4000:8", ["register:40a0:8"]]
~~~


<a id="compare-48a8d505f2c820075fc409fe3481a2be"></a>

### [`00bcbd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbd04.md) → [`00bcbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbda0.md) _ZNK8firebase4auth4Auth40CreateUserWithEmailAndPasswordLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

アドレスに依存する影響 `call_argument_candidate` 4件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbdbc",
      "incomplete_value": true,
      "site": "00bcbdc0",
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
      "definition_site": "00bcbde4",
      "incomplete_value": true,
      "site": "00bcbde8",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcbd54",
      "incomplete_value": true,
      "site": "00bcbd58",
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
- 00bcbd24 ["INT_ADD", "register:40f0:8", ["const:bcbd24:8", "const:4:8"]]
- 00bcbd24 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bcbdc0 ["INT_ADD", "register:40f0:8", ["const:bcbdc0:8", "const:4:8"]]
+ 00bcbdc0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bcbd4c ["INT_ADD", "register:40f0:8", ["const:bcbd4c:8", "const:4:8"]]
- 00bcbd4c ["CALL", null, ["callee:00c5aee0:8"]]
+ 00bcbde8 ["INT_ADD", "register:40f0:8", ["const:bcbde8:8", "const:4:8"]]
+ 00bcbde8 ["CALL", null, ["callee:00c5aee0:8"]]
- 00bcbd58 ["INT_ADD", "register:40f0:8", ["const:bcbd58:8", "const:4:8"]]
- 00bcbd58 ["CALL", null, ["callee:00c5ae20:8"]]
+ 00bcbdf4 ["INT_ADD", "register:40f0:8", ["const:bcbdf4:8", "const:4:8"]]
+ 00bcbdf4 ["CALL", null, ["callee:00c5ae20:8"]]
~~~


<a id="compare-2ad1fb899e83589fd4886086248dfe2b"></a>

### [`00bcbdac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbdac.md) → [`00bcbe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe48.md) FUN_00bcbe48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bca790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca790.md) · 呼出先 2件 [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5da30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da30.md)
- 新版 呼出元 1件 [`00bca82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca82c.md) · 呼出先 2件 [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbe60",
      "incomplete_value": false,
      "site": "00bcbe6c",
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
            "const:c0f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcbdc4",
      "incomplete_value": false,
      "site": "00bcbdd0",
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
            "const:c5c:8"
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
      "00bcbe60",
      "PARAM",
      [
        "storage",
        "002a3c5c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcbe60",
      "PARAM",
      [
        "storage",
        "002a3c0f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcbdd0 ["INT_ADD", "register:40f0:8", ["const:bcbdd0:8", "const:4:8"]]
- 00bcbdd0 ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00bcbe6c ["INT_ADD", "register:40f0:8", ["const:bcbe6c:8", "const:4:8"]]
+ 00bcbe6c ["CALL", null, ["callee:00c5aeb0:8"]]
- 00bcbdc4 ["COPY", "tmp:0:8", ["const:c5c:8"]]
- 00bcbdc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbdc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbdc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcbe60 ["COPY", "tmp:0:8", ["const:c0f:8"]]
+ 00bcbe60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcbe60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcbe60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-40690e2c0ae136ec2a903a23c9adb07c"></a>

### [`00bcbe24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbe24.md) → [`00bcbec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbec0.md) _ZNSt6__ndk16vectorIPN8firebase4auth17AuthStateListenerENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5daf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5daf0.md) · 呼出先 5件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5dbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbc0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 85.48% / 新版 85.48%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbf28",
      "incomplete_value": false,
      "site": "00bcbf2c",
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
            "const:61f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcbe8c",
      "incomplete_value": false,
      "site": "00bcbe90",
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
            "const:67b:8"
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
      "unmatched:00bcbe54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcbfb0"
      ]
    ],
    [
      "unmatched:00bcbe7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcbfa8"
      ]
    ],
    [
      "00bcbf28",
      "PARAM",
      [
        "storage",
        "002a867b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcbef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcbfb0"
      ]
    ],
    [
      "00bcbf18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcbfa8"
      ]
    ],
    [
      "00bcbf28",
      "PARAM",
      [
        "storage",
        "002a861f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcbe90 ["INT_ADD", "register:40f0:8", ["const:bcbe90:8", "const:4:8"]]
- 00bcbe90 ["CALL", null, ["callee:00b4035c:8"]]
+ 00bcbf2c ["INT_ADD", "register:40f0:8", ["const:bcbf2c:8", "const:4:8"]]
+ 00bcbf2c ["CALL", null, ["callee:00b4035c:8"]]
- 00bcbe4c ["COPY", "tmp:0:8", ["const:1:8"]]
- 00bcbe4c ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 00bcbe4c ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 00bcbe4c ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
- 00bcbe50 ["INT_RIGHT", "register:4048:8", ["register:4040:8", "const:3d:8"]]
~~~


<a id="compare-0fcdcdad20e8d5a7e94bb2b851b78e21"></a>

### [`00bcbf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcb/00bcbf1c.md) → [`00bcbfb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbfb8.md) _ZNSt6__ndk16vectorIPN8firebase4auth4AuthENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5db10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db10.md) · 呼出先 5件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5dbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbe0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.03% / 新版 79.03%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc020",
      "incomplete_value": false,
      "site": "00bcc024",
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
            "const:61f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcbf84",
      "incomplete_value": false,
      "site": "00bcbf88",
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
            "const:67b:8"
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
      "unmatched:00bcbf2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcbf64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc028"
      ]
    ],
    [
      "unmatched:00bcbf74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc0a0"
      ]
    ]
  ],
  "added": [
    [
      "00bcbfc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bcc000",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc028"
      ]
    ],
    [
      "00bcc010",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc0a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcbf88 ["INT_ADD", "register:40f0:8", ["const:bcbf88:8", "const:4:8"]]
- 00bcbf88 ["CALL", null, ["callee:00b4035c:8"]]
+ 00bcc024 ["INT_ADD", "register:40f0:8", ["const:bcc024:8", "const:4:8"]]
+ 00bcc024 ["CALL", null, ["callee:00b4035c:8"]]
- 00bcbf2c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bcbf2c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bcbf2c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00bcbf2c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bcbf30 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00bcbf30 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bcbf30 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bcbf30 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-6e955102fb484aecc56ec4fdfff18162"></a>

### [`00bcc014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc014.md) → [`00bcc0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc0b0.md) _ZNSt6__ndk16vectorIPN8firebase4auth15IdTokenListenerENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dad0.md) · 呼出先 5件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5dba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dba0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc118",
      "incomplete_value": false,
      "site": "00bcc11c",
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
            "const:61f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc07c",
      "incomplete_value": false,
      "site": "00bcc080",
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
            "const:67b:8"
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
      "00bcc118",
      "PARAM",
      [
        "storage",
        "002a867b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc118",
      "PARAM",
      [
        "storage",
        "002a861f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc080 ["INT_ADD", "register:40f0:8", ["const:bcc080:8", "const:4:8"]]
- 00bcc080 ["CALL", null, ["callee:00b4035c:8"]]
+ 00bcc11c ["INT_ADD", "register:40f0:8", ["const:bcc11c:8", "const:4:8"]]
+ 00bcc11c ["CALL", null, ["callee:00b4035c:8"]]
- 00bcc07c ["COPY", "tmp:0:8", ["const:67b:8"]]
- 00bcc07c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc07c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc07c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcc118 ["COPY", "tmp:0:8", ["const:61f:8"]]
+ 00bcc118 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc118 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc118 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc08c ["INT_ADD", "register:40f0:8", ["const:bcc08c:8", "const:4:8"]]
- 00bcc08c ["CALL", null, ["callee:00c57f60:8"]]
+ 00bcc128 ["INT_ADD", "register:40f0:8", ["const:bcc128:8", "const:4:8"]]
+ 00bcc128 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-4fe122b5ae6fc7c2d6ec5dbbf74a26b7"></a>

### [`00bcc10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc10c.md) → [`00bcc1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc1a8.md) _INIT_290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00bca4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca4d0.md) [`00bca4d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca4d8.md) [`00bca4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bca/00bca4dc.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00bca56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca56c.md) [`00bca574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca574.md) [`00bca578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca578.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 75.68% / 新版 75.68%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 4件, `store_value` 3件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcc1d4",
      "incomplete_value": false,
      "site": "00bcc1d4",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc138",
      "incomplete_value": false,
      "site": "00bcc138",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcc1d4",
      "incomplete_value": false,
      "site": "00bcc1d4",
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
            "const:b6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc138",
      "incomplete_value": false,
      "site": "00bcc138",
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
            "const:10a:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcc1d4",
      "incomplete_value": false,
      "site": "00bcc1d4",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:7e8:8"
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
      "definition_site": "00bcc138",
      "incomplete_value": false,
      "site": "00bcc138",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:6e8:8"
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
      "00bcc1c4",
      "PARAM",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc1d4",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc1d4",
      "DATA",
      [
        "storage",
        "002bc10a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcc1c4",
      "PARAM",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc1d4",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc1d4",
      "DATA",
      [
        "storage",
        "002bc0b6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc144 ["INT_ADD", "register:40f0:8", ["const:bcc144:8", "const:4:8"]]
- 00bcc144 ["CALL", null, ["callee:00c5ac90:8"]]
+ 00bcc1e0 ["INT_ADD", "register:40f0:8", ["const:bcc1e0:8", "const:4:8"]]
+ 00bcc1e0 ["CALL", null, ["callee:00c5ac90:8"]]
- 00bcc170 ["INT_ADD", "register:40f0:8", ["const:bcc170:8", "const:4:8"]]
- 00bcc170 ["CALL", null, ["callee:00c57f00:8"]]
+ 00bcc20c ["INT_ADD", "register:40f0:8", ["const:bcc20c:8", "const:4:8"]]
+ 00bcc20c ["CALL", null, ["callee:00c57f00:8"]]
- 00bcc128 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 00bcc128 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc128 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc128 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcc1c4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 00bcc1c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc1c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc1c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8e096af0935b52a752feaad1dce91547"></a>

### [`00bcc1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc1d0.md) → [`00bcc26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc26c.md) _ZN8firebase4auth14ClearUserInfosEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5d9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9a0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5da70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da70.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bcc218",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc2d4"
      ]
    ]
  ],
  "added": [
    [
      "00bcc2b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc2d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc1ec ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 00bcc288 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00bcc1fc ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00bcc1fc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bcc298 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00bcc298 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bcc214 ["INT_SRIGHT", "tmp:0:8", ["register:4048:8", "const:3:4"]]
- 00bcc214 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:40a0:8"]]
- 00bcc214 ["INT_SBORROW", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 00bcc214 ["INT_SUB", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
~~~


<a id="compare-2410c79461db2f922a1a81e3430e6f83"></a>

### [`00bcc30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc30c.md) → [`00bcc3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc3a8.md) _ZN8firebase4auth4auth19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util

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
      "definition_site": "00bcc3d4",
      "incomplete_value": true,
      "site": "00bcc3d4",
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
            "const:828:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc338",
      "incomplete_value": true,
      "site": "00bcc338",
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
            "const:728:8"
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
      "definition_site": "00bcc3bc",
      "incomplete_value": true,
      "site": "00bcc3bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc320",
      "incomplete_value": true,
      "site": "00bcc320",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc3c8",
      "incomplete_value": false,
      "site": "00bcc3cc",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc32c",
      "incomplete_value": false,
      "site": "00bcc330",
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
            "const:23c:8"
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
      "00bcc3b8",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc3c8",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "00bcc3d4",
      "WRITE",
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
      "00bcc3b8",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc3c8",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcc3d4",
      "WRITE",
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
- 00bcc330 ["INT_ADD", "register:40f0:8", ["const:bcc330:8", "const:4:8"]]
- 00bcc330 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc3cc ["INT_ADD", "register:40f0:8", ["const:bcc3cc:8", "const:4:8"]]
+ 00bcc3cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc338 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00bcc338 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcc3d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
+ 00bcc3d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc31c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00bcc31c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc3b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
+ 00bcc3b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6d659a409fa88abdd23b506355cb6dcb"></a>

### [`00bcc34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc34c.md) → [`00bcc3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc3e8.md) _ZN8firebase4auth4auth19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcc3fc",
      "incomplete_value": true,
      "site": "00bcc3fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc360",
      "incomplete_value": true,
      "site": "00bcc360",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bcc3f8",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc368",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcc370",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bcc3f8",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc404",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcc40c",
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
- 00bcc360 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcc360 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bcc3fc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcc3fc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bcc35c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00bcc35c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc3f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
+ 00bcc3f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc368 ["COPY", "tmp:0:8", ["const:23c:8"]]
- 00bcc368 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc368 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc368 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-79b88080fe107a5812ed688f4b053179"></a>

### [`00bcc38c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc38c.md) → [`00bcc428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc428.md) _ZN8firebase4auth4auth10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcc43c",
      "incomplete_value": true,
      "site": "00bcc43c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc3a0",
      "incomplete_value": true,
      "site": "00bcc3a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "unmatched:00bcc38c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcc390",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bcc438",
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
      "00bcc428",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcc42c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bcc438",
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
- 00bcc3a0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcc3a0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bcc43c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcc43c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bcc38c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bcc38c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bcc38c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcc390 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bcc390 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bcc390 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcc390 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7eabc465a0275c625b930dda45b1e139"></a>

### [`00bcc3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc3d0.md) → [`00bcc46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc46c.md) _ZN8firebase4auth4auth10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcc480",
      "incomplete_value": true,
      "site": "00bcc480",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc3e4",
      "incomplete_value": true,
      "site": "00bcc3e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc3ec",
      "incomplete_value": false,
      "site": "00bcc3f8",
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
            "const:23c:8"
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
      "00bcc47c",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc3ec",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcc400",
      "WRITE",
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
      "00bcc47c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc488",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcc49c",
      "WRITE",
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
- 00bcc3e4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcc3e4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bcc480 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcc480 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bcc3f8 ["INT_ADD", "register:40f0:8", ["const:bcc3f8:8", "const:4:8"]]
- 00bcc3f8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc494 ["INT_ADD", "register:40f0:8", ["const:bcc494:8", "const:4:8"]]
+ 00bcc494 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc3e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00bcc3e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc47c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
+ 00bcc47c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5a53dfdb59805acb4d4f37c4b3ae758d"></a>

### [`00bcc414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc414.md) → [`00bcc4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc4b0.md) _ZN8firebase4auth4auth8GetClassEv

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
      "unmatched:00bcc418",
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
      "00bcc4b4",
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
- 00bcc414 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00bcc418 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:728:8"]]
- 00bcc418 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc41c ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bcc41c ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-6c5c3418e91e1cfa93d27ed20f4a58a3"></a>

### [`00bcc420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc420.md) → [`00bcc4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc4bc.md) _ZN8firebase4auth4auth15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bcc514",
      "incomplete_value": true,
      "site": "00bcc514",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc478",
      "incomplete_value": true,
      "site": "00bcc478",
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
            "const:730:8"
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
      "definition_site": "00bcc4f0",
      "incomplete_value": true,
      "site": "00bcc4fc",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00bcc454",
      "incomplete_value": true,
      "site": "00bcc460",
      "value": [
        "LOAD",
        "8",
        [
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
      "00bcc4d0",
      "READ",
      [
        "storage",
        "01126730",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc4f0",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc514",
      "WRITE",
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
      "00bcc4d0",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc4f0",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc514",
      "WRITE",
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
- 00bcc460 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc460 ["INT_ADD", "register:40f0:8", ["const:bcc460:8", "const:4:8"]]
- 00bcc460 ["CALLIND", null, ["register:0:8"]]
+ 00bcc4fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcc4fc ["INT_ADD", "register:40f0:8", ["const:bcc4fc:8", "const:4:8"]]
+ 00bcc4fc ["CALLIND", null, ["register:0:8"]]
- 00bcc478 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcc478 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:730:8"]]
- 00bcc478 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcc514 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcc514 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:830:8"]]
+ 00bcc514 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bcc434 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:730:8"]]
- 00bcc434 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bcc434 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bcc4d0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:830:8"]]
+ 00bcc4d0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc4d0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-a5024e686b11b385daee5f937514b59e"></a>

### [`00bcc48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc48c.md) → [`00bcc528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc528.md) _ZN8firebase4auth4auth12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bcc540",
      "incomplete_value": true,
      "site": "00bcc540",
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
      "definition_site": "00bcc4a4",
      "incomplete_value": true,
      "site": "00bcc4a4",
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
      "00bcc53c",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc548",
      "READ",
      [
        "storage",
        "01126730",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcc4cc"
      ]
    ]
  ],
  "added": [
    [
      "00bcc53c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc548",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc568"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc4a4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bcc4a4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bcc540 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bcc540 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00bcc4a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
- 00bcc4a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc53c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
+ 00bcc53c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc4ac ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:730:8"]]
- 00bcc4ac ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bcc4ac ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bcc548 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:830:8"]]
+ 00bcc548 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc548 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-cb2d2ba80165a442373e38c22f39fb68"></a>

### [`00bcc4fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc4fc.md) → [`00bcc598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc598.md) _ZN8firebase4auth4auth14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc5bc",
      "incomplete_value": false,
      "site": "00bcc5d0",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc520",
      "incomplete_value": false,
      "site": "00bcc534",
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
            "const:23c:8"
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
      "unmatched:00bcc4fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcc500",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcc510",
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
      "00bcc598",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bcc59c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bcc5ac",
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
- 00bcc534 ["INT_ADD", "register:40f0:8", ["const:bcc534:8", "const:4:8"]]
- 00bcc534 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc5d0 ["INT_ADD", "register:40f0:8", ["const:bcc5d0:8", "const:4:8"]]
+ 00bcc5d0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc4fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bcc4fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bcc4fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bcc4fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcc500 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bcc500 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bcc500 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcc500 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e5fb1ac3fbab8e93f799b59d6574ae69"></a>

### [`00bcc56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc56c.md) → [`00bcc608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc608.md) _ZN8firebase4auth4auth11GetMethodIdENS1_6MethodE

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
      "00bcc61c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcc590"
      ]
    ],
    [
      "unmatched:00bcc588",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcc58c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bcc61c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc62c"
      ]
    ],
    [
      "00bcc624",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bcc628",
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
- 00bcc588 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bcc588 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc588 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc588 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc58c ["INT_ADD", "register:40f0:8", ["const:bcc58c:8", "const:4:8"]]
- 00bcc58c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcc590 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-074c414892c7ca4979c37e84eeca9702"></a>

### [`00bcc5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc5a8.md) → [`00bcc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc644.md) _ZN8firebase4auth4auth13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcc668",
      "incomplete_value": false,
      "site": "00bcc67c",
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
            "const:1e0:8"
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
      "unmatched:00bcc5bc",
      "READ",
      [
        "storage",
        "01126728",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc5c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc688"
      ]
    ],
    [
      "unmatched:00bcc5cc",
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
      "00bcc658",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc660",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc688"
      ]
    ],
    [
      "00bcc668",
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
- 00bcc5e0 ["INT_ADD", "register:40f0:8", ["const:bcc5e0:8", "const:4:8"]]
- 00bcc5e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc67c ["INT_ADD", "register:40f0:8", ["const:bcc67c:8", "const:4:8"]]
+ 00bcc67c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc5bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
- 00bcc5bc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc5c0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-c89363102f526b1a994c38c12ea323fc"></a>

### [`00bcc618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc618.md) → [`00bcc6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc6b4.md) _ZN8firebase4auth4auth10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bcc6d0",
      "incomplete_value": false,
      "site": "00bcc6d4",
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
      "definition_site": "00bcc634",
      "incomplete_value": false,
      "site": "00bcc638",
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
      "definition_site": "00bcc6e0",
      "incomplete_value": true,
      "site": "00bcc6ec",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcc644",
      "incomplete_value": true,
      "site": "00bcc650",
      "value": [
        "LOAD",
        "8",
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
      "00bcc6d0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bcc6e0",
      "DATA",
      [
        "storage",
        "011267c8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcc6d0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcc6e0",
      "DATA",
      [
        "storage",
        "011268c8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc638 ["INT_ADD", "register:40f0:8", ["const:bcc638:8", "const:4:8"]]
- 00bcc638 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcc6d4 ["INT_ADD", "register:40f0:8", ["const:bcc6d4:8", "const:4:8"]]
+ 00bcc6d4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcc634 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bcc634 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc634 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc634 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcc6d0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bcc6d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc6d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc6d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc640 ["COPY", "tmp:0:8", ["const:7c8:8"]]
- 00bcc640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bcc640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bcc640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bcc6dc ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 00bcc6dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcc6dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcc6dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5b1aa85c650f75bc38251378440015af"></a>

### [`00bcc654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc654.md) → [`00bcc6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc6f0.md) _ZN8firebase4auth17signinmethodquery19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bcc71c",
      "incomplete_value": true,
      "site": "00bcc71c",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc680",
      "incomplete_value": true,
      "site": "00bcc680",
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
            "const:7d0:8"
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
      "definition_site": "00bcc704",
      "incomplete_value": true,
      "site": "00bcc704",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc668",
      "incomplete_value": true,
      "site": "00bcc668",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc710",
      "incomplete_value": false,
      "site": "00bcc714",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:c75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc674",
      "incomplete_value": false,
      "site": "00bcc678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:cc2:8"
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
      "00bcc700",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc710",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ],
    [
      "00bcc71c",
      "WRITE",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcc700",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc710",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcc71c",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc678 ["INT_ADD", "register:40f0:8", ["const:bcc678:8", "const:4:8"]]
- 00bcc678 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc714 ["INT_ADD", "register:40f0:8", ["const:bcc714:8", "const:4:8"]]
+ 00bcc714 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc680 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc680 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcc71c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc71c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc664 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc664 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc700 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc700 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-918124324554821070bb30184b1bd4c6"></a>

### [`00bcc694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc694.md) → [`00bcc730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc730.md) _ZN8firebase4auth17signinmethodquery19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bcc75c",
      "incomplete_value": true,
      "site": "00bcc75c",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc6c0",
      "incomplete_value": true,
      "site": "00bcc6c0",
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
            "const:7d0:8"
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
      "definition_site": "00bcc744",
      "incomplete_value": true,
      "site": "00bcc744",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc6a8",
      "incomplete_value": true,
      "site": "00bcc6a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc74c",
      "incomplete_value": false,
      "site": "00bcc754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:c75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc6b0",
      "incomplete_value": false,
      "site": "00bcc6b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:cc2:8"
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
      "00bcc740",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc74c",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ],
    [
      "00bcc75c",
      "WRITE",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcc740",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc74c",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcc75c",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc6b8 ["INT_ADD", "register:40f0:8", ["const:bcc6b8:8", "const:4:8"]]
- 00bcc6b8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc754 ["INT_ADD", "register:40f0:8", ["const:bcc754:8", "const:4:8"]]
+ 00bcc754 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc6c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc6c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcc75c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc75c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc6a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc6a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc740 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc740 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-125900338fc3f1edc813f9a83dec68cc"></a>

### [`00bcc6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc6d4.md) → [`00bcc770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc770.md) _ZN8firebase4auth17signinmethodquery10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcc784",
      "incomplete_value": true,
      "site": "00bcc784",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc6e8",
      "incomplete_value": true,
      "site": "00bcc6e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bcc780",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc784",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcc708"
      ]
    ],
    [
      "unmatched:00bcc6f4",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc780",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc784",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc7a4"
      ]
    ],
    [
      "00bcc790",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc6e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc6e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc780 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc780 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc6f4 ["COPY", "tmp:0:8", ["const:cc2:8"]]
- 00bcc6f4 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc6f4 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc6f4 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00bcc6f8 ["COPY", "register:4010:8", ["const:0:8"]]
~~~


<a id="compare-f68e20cd299f1a593464aedf5adfac05"></a>

### [`00bcc718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc718.md) → [`00bcc7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc7b4.md) _ZN8firebase4auth17signinmethodquery10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcc7c8",
      "incomplete_value": true,
      "site": "00bcc7c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc72c",
      "incomplete_value": true,
      "site": "00bcc72c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc7d0",
      "incomplete_value": false,
      "site": "00bcc7dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:c75:8"
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
      "00bcc7c4",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc734",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcc748",
      "WRITE",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcc7c4",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc7d0",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcc7e4",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc72c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcc72c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bcc7c8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcc7c8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bcc740 ["INT_ADD", "register:40f0:8", ["const:bcc740:8", "const:4:8"]]
- 00bcc740 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc7dc ["INT_ADD", "register:40f0:8", ["const:bcc7dc:8", "const:4:8"]]
+ 00bcc7dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc728 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d0:8"]]
- 00bcc728 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc7c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
+ 00bcc7c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e2db6d98c41042c389faceaaaa0734e3"></a>

### [`00bcc768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc768.md) → [`00bcc804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc804.md) _ZN8firebase4auth17signinmethodquery15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `store_destination` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcc85c",
      "incomplete_value": true,
      "site": "00bcc85c",
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
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc7c0",
      "incomplete_value": true,
      "site": "00bcc7c0",
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
            "const:7d8:8"
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
      "00bcc818",
      "READ",
      [
        "storage",
        "011267d8",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bcc79c",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc85c",
      "WRITE",
      [
        "storage",
        "011267d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcc818",
      "READ",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc838",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc85c",
      "WRITE",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc7c0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcc7c0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7d8:8"]]
- 00bcc7c0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcc85c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcc85c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8d8:8"]]
+ 00bcc85c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bcc77c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7d8:8"]]
- 00bcc77c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bcc77c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bcc818 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8d8:8"]]
+ 00bcc818 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bcc818 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bcc79c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:7d0:8"]]
- 00bcc79c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-218dfe398cd44495cab70b8cde1ae55a"></a>

### [`00bcc7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc7d4.md) → [`00bcc870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc870.md) _ZN8firebase4auth17signinmethodquery12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bcc8ac",
      "incomplete_value": true,
      "site": "00bcc8ac",
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
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc810",
      "incomplete_value": true,
      "site": "00bcc810",
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
            "const:7d8:8"
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
      "definition_site": "00bcc8cc",
      "incomplete_value": true,
      "site": "00bcc8cc",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc830",
      "incomplete_value": true,
      "site": "00bcc830",
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
            "const:7d0:8"
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
      "definition_site": "00bcc888",
      "incomplete_value": true,
      "site": "00bcc888",
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
      "definition_site": "00bcc7ec",
      "incomplete_value": true,
      "site": "00bcc7ec",
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
      "00bcc884",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc890",
      "READ",
      [
        "storage",
        "011267d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc8ac",
      "WRITE",
      [
        "storage",
        "011267d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcc884",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc890",
      "READ",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcc8ac",
      "WRITE",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc810 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bcc810 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bcc810 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7d8:8"]]
- 00bcc810 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bcc8ac ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bcc8ac ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bcc8ac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8d8:8"]]
+ 00bcc8ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bcc82c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc82c ["INT_ADD", "register:40f0:8", ["const:bcc82c:8", "const:4:8"]]
- 00bcc82c ["CALLIND", null, ["register:0:8"]]
+ 00bcc8c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcc8c8 ["INT_ADD", "register:40f0:8", ["const:bcc8c8:8", "const:4:8"]]
+ 00bcc8c8 ["CALLIND", null, ["register:0:8"]]
- 00bcc830 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d0:8"]]
- 00bcc830 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bcc830 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bcc8cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
+ 00bcc8cc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bcc8cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-b6717c6f7e2932216f73eab37573fb8b"></a>

### [`00bcc844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc844.md) → [`00bcc8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc8e0.md) _ZN8firebase4auth17signinmethodquery14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcc86c",
      "incomplete_value": true,
      "site": "00bcc87c",
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
      "definition_site": "00bcc870",
      "incomplete_value": true,
      "site": "00bcc87c",
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
      "definition_site": "00bcc868",
      "incomplete_value": false,
      "site": "00bcc87c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:cc2:8"
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
      "unmatched:00bcc858",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc860",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc924"
      ]
    ],
    [
      "unmatched:00bcc868",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc8f4",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc8fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc924"
      ]
    ],
    [
      "00bcc904",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc87c ["INT_ADD", "register:40f0:8", ["const:bcc87c:8", "const:4:8"]]
- 00bcc87c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc918 ["INT_ADD", "register:40f0:8", ["const:bcc918:8", "const:4:8"]]
+ 00bcc918 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc858 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d0:8"]]
- 00bcc858 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc85c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-270a6b9336802cdd786e1c1671ea76b2"></a>

### [`00bcc8b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc8b4.md) → [`00bcc950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc950.md) _ZN8firebase4auth17signinmethodquery11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bcc96c",
      "incomplete_value": false,
      "site": "00bcc970",
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
      "definition_site": "00bcc8d0",
      "incomplete_value": false,
      "site": "00bcc8d4",
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
      "definition_site": "00bcc97c",
      "incomplete_value": true,
      "site": "00bcc988",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcc8e0",
      "incomplete_value": true,
      "site": "00bcc8ec",
      "value": [
        "LOAD",
        "8",
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
      "00bcc96c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bcc97c",
      "DATA",
      [
        "storage",
        "011267e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcc96c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bcc97c",
      "DATA",
      [
        "storage",
        "011268e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc8d4 ["INT_ADD", "register:40f0:8", ["const:bcc8d4:8", "const:4:8"]]
- 00bcc8d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bcc970 ["INT_ADD", "register:40f0:8", ["const:bcc970:8", "const:4:8"]]
+ 00bcc970 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bcc8d0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bcc8d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc8d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc8d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcc96c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bcc96c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc96c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcc96c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc8dc ["COPY", "tmp:0:8", ["const:7e0:8"]]
- 00bcc8dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bcc8dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bcc8dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bcc978 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 00bcc978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcc978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcc978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c951e3088ef10b85c9b08ca3c9ce99ea"></a>

### [`00bcc8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc8f0.md) → [`00bcc98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc98c.md) _ZN8firebase4auth17signinmethodquery13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bcc918",
      "incomplete_value": true,
      "site": "00bcc928",
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
      "definition_site": "00bcc91c",
      "incomplete_value": true,
      "site": "00bcc928",
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
      "definition_site": "00bcc920",
      "incomplete_value": false,
      "site": "00bcc928",
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
      "unmatched:00bcc904",
      "READ",
      [
        "storage",
        "011267d0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bcc90c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc9d0"
      ]
    ],
    [
      "unmatched:00bcc914",
      "PARAM",
      [
        "storage",
        "002a2cc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc9a0",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcc9a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcc9d0"
      ]
    ],
    [
      "00bcc9b0",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc928 ["INT_ADD", "register:40f0:8", ["const:bcc928:8", "const:4:8"]]
- 00bcc928 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcc9c4 ["INT_ADD", "register:40f0:8", ["const:bcc9c4:8", "const:4:8"]]
+ 00bcc9c4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc904 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d0:8"]]
- 00bcc904 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc908 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-8032f4780840c2c3bff77244426469d0"></a>

### [`00bcc960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc960.md) → [`00bcc9fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc9fc.md) _ZN8firebase4auth17signinmethodquery10GetFieldIdENS1_5FieldE

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
      "00bcca10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcc984"
      ]
    ],
    [
      "unmatched:00bcc97c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bcc980",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bcca10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcca20"
      ]
    ],
    [
      "00bcca18",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcca1c",
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
- 00bcc974 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bcc974 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bcca10 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bcca10 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bcc97c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bcc97c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc97c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc97c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc980 ["INT_ADD", "register:40f0:8", ["const:bcc980:8", "const:4:8"]]
- 00bcc980 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-564432103861caa3313a51dc0f3e388a"></a>

### [`00bcc99c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc99c.md) → [`00bcca38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcca38.md) _ZN8firebase4auth11jnilistener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bcca64",
      "incomplete_value": true,
      "site": "00bcca64",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc9c8",
      "incomplete_value": true,
      "site": "00bcc9c8",
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
            "const:7f0:8"
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
      "definition_site": "00bcca4c",
      "incomplete_value": true,
      "site": "00bcca4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc9b0",
      "incomplete_value": true,
      "site": "00bcc9b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcca58",
      "incomplete_value": false,
      "site": "00bcca5c",
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
      "definition_site": "00bcc9bc",
      "incomplete_value": false,
      "site": "00bcc9c0",
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
      "00bcca48",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcca58",
      "PARAM",
      [
        "storage",
        "002b5bda",
        null,
        "string"
      ]
    ],
    [
      "00bcca64",
      "WRITE",
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
      "00bcca48",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcca58",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcca64",
      "WRITE",
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
- 00bcc9c0 ["INT_ADD", "register:40f0:8", ["const:bcc9c0:8", "const:4:8"]]
- 00bcc9c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bcca5c ["INT_ADD", "register:40f0:8", ["const:bcca5c:8", "const:4:8"]]
+ 00bcca5c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcc9c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f0:8"]]
- 00bcc9c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcca64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00bcca64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc9ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f0:8"]]
- 00bcc9ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcca48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00bcca48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8199fd0a8cede92b874923581e9cd8a0"></a>

### [`00bcc9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcc9dc.md) → [`00bcca78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcca78.md) _ZN8firebase4auth11jnilistener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 43.75% / 新版 43.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcca8c",
      "incomplete_value": true,
      "site": "00bcca8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcc9f0",
      "incomplete_value": true,
      "site": "00bcc9f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bcca88",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcca8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bcca0c"
      ]
    ],
    [
      "unmatched:00bcc9f8",
      "PARAM",
      [
        "storage",
        "002b5bda",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcca88",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcca8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bccaa8"
      ]
    ],
    [
      "00bcca94",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc9f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcc9f0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bcca8c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bcca8c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bcc9ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f0:8"]]
- 00bcc9ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcca88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00bcca88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bcc9f8 ["COPY", "tmp:0:8", ["const:bda:8"]]
- 00bcc9f8 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc9f8 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bcc9f8 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-ddcc870def1bf538414c8f5b2a32f01d"></a>

### [`00bcca1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcca1c.md) → [`00bccab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccab8.md) _ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bccacc",
      "incomplete_value": true,
      "site": "00bccacc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcca30",
      "incomplete_value": true,
      "site": "00bcca30",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "unmatched:00bcca1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bcca20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccac8",
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
      "00bccab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bccabc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccac8",
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
- 00bcca30 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bcca30 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00bccacc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bccacc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bcca1c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bcca1c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bcca1c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bcca20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bcca20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bcca20 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bcca20 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7a31af082cb838f9657b9b516c1176b3"></a>

### [`00bcca60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bcca60.md) → [`00bccafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccafc.md) _ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bccb2c",
      "incomplete_value": true,
      "site": "00bccb2c",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcca90",
      "incomplete_value": true,
      "site": "00bcca90",
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
            "const:7f0:8"
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
      "definition_site": "00bccb10",
      "incomplete_value": true,
      "site": "00bccb10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bcca74",
      "incomplete_value": true,
      "site": "00bcca74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bccb18",
      "incomplete_value": false,
      "site": "00bccb24",
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
      "definition_site": "00bcca7c",
      "incomplete_value": false,
      "site": "00bcca88",
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
      "00bccb0c",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccb18",
      "PARAM",
      [
        "storage",
        "002b5bda",
        null,
        "string"
      ]
    ],
    [
      "00bccb2c",
      "WRITE",
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
      "00bccb0c",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccb18",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bccb2c",
      "WRITE",
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
- 00bcca88 ["INT_ADD", "register:40f0:8", ["const:bcca88:8", "const:4:8"]]
- 00bcca88 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bccb24 ["INT_ADD", "register:40f0:8", ["const:bccb24:8", "const:4:8"]]
+ 00bccb24 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bcca90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f0:8"]]
- 00bcca90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bccb2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00bccb2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcca70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f0:8"]]
- 00bcca70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bccb0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00bccb0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a775bfa83135a0e75e33fba3769e691c"></a>

### [`00bccab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccab0.md) → [`00bccb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccb4c.md) _ZN8firebase4auth11jnilistener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bccac4",
      "READ",
      [
        "storage",
        "011267f8",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bccae4",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bccb08",
      "WRITE",
      [
        "storage",
        "011267f8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bccb60",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bccb80",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccba4",
      "WRITE",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccac4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7f8:8"]]
- 00bccac4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bccac4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bccac8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bccac8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bccb64 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bccb64 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bccae4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:7f0:8"]]
- 00bccae4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6843d3a05a28c490c93fd379d3356331"></a>

### [`00bccb1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccb1c.md) → [`00bccbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccbb8.md) _ZN8firebase4auth11jnilistener12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bccbf4",
      "incomplete_value": true,
      "site": "00bccbf4",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccb58",
      "incomplete_value": true,
      "site": "00bccb58",
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
            "const:7f8:8"
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
      "definition_site": "00bccc14",
      "incomplete_value": true,
      "site": "00bccc14",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccb78",
      "incomplete_value": true,
      "site": "00bccb78",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bccbd0",
      "incomplete_value": true,
      "site": "00bccbd0",
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
      "definition_site": "00bccb34",
      "incomplete_value": true,
      "site": "00bccb34",
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
      "00bccbcc",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccbd8",
      "READ",
      [
        "storage",
        "011267f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bccbf4",
      "WRITE",
      [
        "storage",
        "011267f8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bccbcc",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bccbd8",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bccbf4",
      "WRITE",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccb58 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bccb58 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bccb58 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7f8:8"]]
- 00bccb58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bccbf4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bccbf4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bccbf4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8f8:8"]]
+ 00bccbf4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bccb74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bccb74 ["INT_ADD", "register:40f0:8", ["const:bccb74:8", "const:4:8"]]
- 00bccb74 ["CALLIND", null, ["register:0:8"]]
+ 00bccc10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bccc10 ["INT_ADD", "register:40f0:8", ["const:bccc10:8", "const:4:8"]]
+ 00bccc10 ["CALLIND", null, ["register:0:8"]]
- 00bccb78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f0:8"]]
- 00bccb78 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bccb78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bccc14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
+ 00bccc14 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bccc14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-de210cef450213c6dc0295eef149d7ee"></a>

### [`00bccb8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccb8c.md) → [`00bccc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccc28.md) _ZN8firebase4auth11jnilistener14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bccc50",
      "incomplete_value": true,
      "site": "00bccc60",
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
      "definition_site": "00bccc54",
      "incomplete_value": true,
      "site": "00bccc60",
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
      "definition_site": "00bccc4c",
      "incomplete_value": false,
      "site": "00bccc60",
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
      "unmatched:00bccb8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccb90",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccba0",
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
      "00bccc28",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bccc2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bccc3c",
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
- 00bccbc4 ["INT_ADD", "register:40f0:8", ["const:bccbc4:8", "const:4:8"]]
- 00bccbc4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bccc60 ["INT_ADD", "register:40f0:8", ["const:bccc60:8", "const:4:8"]]
+ 00bccc60 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bccb8c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bccb8c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bccb8c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bccb8c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bccb90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bccb90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bccb90 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bccb90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1b630de1dbf1878e9399e260b9255282"></a>

### [`00bccbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcc/00bccbfc.md) → [`00bccc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccc98.md) _ZN8firebase4auth11jnilistener11GetMethodIdENS1_6MethodE

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
      "unmatched:00bccbfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccc00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bccc10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bccc20"
      ]
    ]
  ],
  "added": [
    [
      "00bccc98",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bccc9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bcccac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bcccbc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccbfc ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bccbfc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bccbfc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bccc00 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bccc00 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bccc00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bccc00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bccc04 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bccc04 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bccc04 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bccc04 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


