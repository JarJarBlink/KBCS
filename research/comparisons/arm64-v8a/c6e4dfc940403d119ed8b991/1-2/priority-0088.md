# v16.0.2 → v16.0.3 · 最優先の変更候補 (88)

[一覧の目次](README.md)

<a id="compare-12be63f1630cf529d454f6c8cfc8aea4"></a>

### [`00b4cc0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cc0c.md) → [`00b4dc00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dc00.md) _ZN8firebase4util3map10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4dc1c",
      "incomplete_value": false,
      "site": "00b4dc20",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cc28",
      "incomplete_value": false,
      "site": "00b4cc2c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4dc2c",
      "incomplete_value": true,
      "site": "00b4dc38",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4cc38",
      "incomplete_value": true,
      "site": "00b4cc44",
      "value": [
        "LOAD",
        "8",
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
      "00b4dc1c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4dc2c",
      "DATA",
      [
        "storage",
        "01125d60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4dc1c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4dc2c",
      "DATA",
      [
        "storage",
        "01126d20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cc2c ["INT_ADD", "register:40f0:8", ["const:b4cc2c:8", "const:4:8"]]
- 00b4cc2c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4dc20 ["INT_ADD", "register:40f0:8", ["const:b4dc20:8", "const:4:8"]]
+ 00b4dc20 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4cc28 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4cc28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cc28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cc28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4dc1c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4dc1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dc1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dc1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4cc30 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4dc24 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-9ef34464c7771a6bb206204ee8cf87e5"></a>

### [`00b4cc48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cc48.md) → [`00b4dc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dc3c.md) _ZN8firebase4util22parcel_file_descriptor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4dc68",
      "incomplete_value": true,
      "site": "00b4dc68",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cc74",
      "incomplete_value": true,
      "site": "00b4cc74",
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
            "const:d68:8"
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
      "definition_site": "00b4dc50",
      "incomplete_value": true,
      "site": "00b4dc50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4cc5c",
      "incomplete_value": true,
      "site": "00b4cc5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dc5c",
      "incomplete_value": false,
      "site": "00b4dc60",
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
            "const:bad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cc68",
      "incomplete_value": false,
      "site": "00b4cc6c",
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
            "const:ae2:8"
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
      "00b4dc4c",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc5c",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4dc68",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dc4c",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc5c",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4dc68",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cc6c ["INT_ADD", "register:40f0:8", ["const:b4cc6c:8", "const:4:8"]]
- 00b4cc6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4dc60 ["INT_ADD", "register:40f0:8", ["const:b4dc60:8", "const:4:8"]]
+ 00b4dc60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4cc74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00b4cc74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dc68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00b4dc68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cc54 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4dc48 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-aa8af8f93a22800e42a091b12421abc1"></a>

### [`00b4cc88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cc88.md) → [`00b4dc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dc7c.md) _ZN8firebase4util22parcel_file_descriptor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4dca8",
      "incomplete_value": true,
      "site": "00b4dca8",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ccb4",
      "incomplete_value": true,
      "site": "00b4ccb4",
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
            "const:d68:8"
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
      "00b4dc8c",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc98",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4dca8",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dc8c",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc98",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4dca8",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ccb4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00b4ccb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dca8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00b4dca8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cc94 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4dc88 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b4cc98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00b4cc98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dc8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00b4dc8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0fe1951a00694b47f1bcb98b9f9b6aa6"></a>

### [`00b4ccc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4ccc8.md) → [`00b4dcbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dcbc.md) _ZN8firebase4util22parcel_file_descriptor10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4dcec",
      "incomplete_value": true,
      "site": "00b4dcec",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ccf8",
      "incomplete_value": true,
      "site": "00b4ccf8",
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
            "const:d68:8"
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
      "definition_site": "00b4dcd0",
      "incomplete_value": true,
      "site": "00b4dcd0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ccdc",
      "incomplete_value": true,
      "site": "00b4ccdc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dcdc",
      "incomplete_value": false,
      "site": "00b4dce4",
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
            "const:bad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cce8",
      "incomplete_value": false,
      "site": "00b4ccf0",
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
            "const:ae2:8"
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
      "00b4dccc",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dcdc",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4dcec",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dccc",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dcdc",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4dcec",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ccf0 ["INT_ADD", "register:40f0:8", ["const:b4ccf0:8", "const:4:8"]]
- 00b4ccf0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4dce4 ["INT_ADD", "register:40f0:8", ["const:b4dce4:8", "const:4:8"]]
+ 00b4dce4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ccf8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00b4ccf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dcec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00b4dcec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ccd4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4dcc8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-dd267d76b23f6c7eeeb6653dae3c585a"></a>

### [`00b4cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cd0c.md) → [`00b4dd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dd00.md) _ZN8firebase4util22parcel_file_descriptor10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4dd30",
      "incomplete_value": true,
      "site": "00b4dd30",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cd3c",
      "incomplete_value": true,
      "site": "00b4cd3c",
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
            "const:d68:8"
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
      "definition_site": "00b4dd14",
      "incomplete_value": true,
      "site": "00b4dd14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4cd20",
      "incomplete_value": true,
      "site": "00b4cd20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dd1c",
      "incomplete_value": false,
      "site": "00b4dd28",
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
            "const:bad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cd28",
      "incomplete_value": false,
      "site": "00b4cd34",
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
            "const:ae2:8"
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
      "00b4dd10",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dd1c",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4dd30",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dd10",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dd1c",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4dd30",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cd34 ["INT_ADD", "register:40f0:8", ["const:b4cd34:8", "const:4:8"]]
- 00b4cd34 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4dd28 ["INT_ADD", "register:40f0:8", ["const:b4dd28:8", "const:4:8"]]
+ 00b4dd28 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4cd3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00b4cd3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dd30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00b4dd30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cd18 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4dd0c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-2c82f2d9930df90a8d210b3abd620106"></a>

### [`00b4cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cd5c.md) → [`00b4dd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dd50.md) _ZN8firebase4util22parcel_file_descriptor15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4ddd8",
      "incomplete_value": true,
      "site": "00b4ddd8",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cde4",
      "incomplete_value": true,
      "site": "00b4cde4",
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
            "const:d70:8"
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
      "definition_site": "00b4dd84",
      "incomplete_value": true,
      "site": "00b4dd90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cd90",
      "incomplete_value": true,
      "site": "00b4cd9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d68:8"
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
      "00b4dd64",
      "READ",
      [
        "storage",
        "01125d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dd84",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ddd8",
      "WRITE",
      [
        "storage",
        "01125d70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4dd64",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dd84",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ddd8",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cd9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4cd9c ["INT_ADD", "register:40f0:8", ["const:b4cd9c:8", "const:4:8"]]
- 00b4cd9c ["CALLIND", null, ["register:0:8"]]
+ 00b4dd90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4dd90 ["INT_ADD", "register:40f0:8", ["const:b4dd90:8", "const:4:8"]]
+ 00b4dd90 ["CALLIND", null, ["register:0:8"]]
- 00b4cde4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4cde4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d70:8"]]
- 00b4cde4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4ddd8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4ddd8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d30:8"]]
+ 00b4ddd8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4cd6c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4dd60 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-1121d6dfa1c22bd1b47be7b1d076f1e7"></a>

### [`00b4cdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cdf8.md) → [`00b4ddec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4ddec.md) _ZN8firebase4util22parcel_file_descriptor12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4de28",
      "incomplete_value": true,
      "site": "00b4de28",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ce34",
      "incomplete_value": true,
      "site": "00b4ce34",
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
            "const:d70:8"
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
      "definition_site": "00b4de78",
      "incomplete_value": true,
      "site": "00b4de78",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ce84",
      "incomplete_value": true,
      "site": "00b4ce84",
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
            "const:d68:8"
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
      "definition_site": "00b4de04",
      "incomplete_value": true,
      "site": "00b4de04",
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
      "definition_site": "00b4ce10",
      "incomplete_value": true,
      "site": "00b4ce10",
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
      "00b4de00",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4de0c",
      "READ",
      [
        "storage",
        "01125d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4de28",
      "WRITE",
      [
        "storage",
        "01125d70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4de00",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4de0c",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4de28",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ce34 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4ce34 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4ce34 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d70:8"]]
- 00b4ce34 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4de28 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4de28 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4de28 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d30:8"]]
+ 00b4de28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4ce80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4ce80 ["INT_ADD", "register:40f0:8", ["const:b4ce80:8", "const:4:8"]]
- 00b4ce80 ["CALLIND", null, ["register:0:8"]]
+ 00b4de74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4de74 ["INT_ADD", "register:40f0:8", ["const:b4de74:8", "const:4:8"]]
+ 00b4de74 ["CALLIND", null, ["register:0:8"]]
- 00b4ce84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00b4ce84 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4ce84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4de78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00b4de78 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4de78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-9627da94bda8d68f1649ea67eeff1f47"></a>

### [`00b4ce98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4ce98.md) → [`00b4de8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4de8c.md) _ZN8firebase4util22parcel_file_descriptor14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4decc",
      "incomplete_value": true,
      "site": "00b4decc",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ced8",
      "incomplete_value": true,
      "site": "00b4ced8",
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
            "const:d68:8"
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
      "definition_site": "00b4dea8",
      "incomplete_value": true,
      "site": "00b4dea8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ceb4",
      "incomplete_value": true,
      "site": "00b4ceb4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4deb0",
      "incomplete_value": false,
      "site": "00b4dec4",
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
            "const:bad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cebc",
      "incomplete_value": false,
      "site": "00b4ced0",
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
            "const:ae2:8"
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
      "00b4dea0",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deb0",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4decc",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dea0",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deb0",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4decc",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ced0 ["INT_ADD", "register:40f0:8", ["const:b4ced0:8", "const:4:8"]]
- 00b4ced0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4dec4 ["INT_ADD", "register:40f0:8", ["const:b4dec4:8", "const:4:8"]]
+ 00b4dec4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ced8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00b4ced8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4decc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00b4decc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cea4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4de98 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-dff0deeaa5ebee87c402e9e39066c244"></a>

### [`00b4cf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cf08.md) → [`00b4defc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4defc.md) _ZN8firebase4util22parcel_file_descriptor11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4df18",
      "incomplete_value": false,
      "site": "00b4df1c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cf24",
      "incomplete_value": false,
      "site": "00b4cf28",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4df28",
      "incomplete_value": true,
      "site": "00b4df34",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4cf34",
      "incomplete_value": true,
      "site": "00b4cf40",
      "value": [
        "LOAD",
        "8",
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
      "00b4df18",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4df28",
      "DATA",
      [
        "storage",
        "01125d78",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4df18",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4df28",
      "DATA",
      [
        "storage",
        "01126d38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cf28 ["INT_ADD", "register:40f0:8", ["const:b4cf28:8", "const:4:8"]]
- 00b4cf28 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4df1c ["INT_ADD", "register:40f0:8", ["const:b4df1c:8", "const:4:8"]]
+ 00b4df1c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4cf24 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4cf24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cf24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cf24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4df18 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4df18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4df18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4df18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4cf2c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4df20 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-8a00bb2c8c569234f1c432b0cee06ab2"></a>

### [`00b4cf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cf44.md) → [`00b4df38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4df38.md) _ZN8firebase4util22parcel_file_descriptor13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4df78",
      "incomplete_value": true,
      "site": "00b4df78",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cf84",
      "incomplete_value": true,
      "site": "00b4cf84",
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
            "const:d68:8"
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
      "definition_site": "00b4df54",
      "incomplete_value": true,
      "site": "00b4df54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4cf60",
      "incomplete_value": true,
      "site": "00b4cf60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4df5c",
      "incomplete_value": false,
      "site": "00b4df70",
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
            "const:bad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cf68",
      "incomplete_value": false,
      "site": "00b4cf7c",
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
            "const:ae2:8"
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
      "00b4df4c",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df5c",
      "PARAM",
      [
        "storage",
        "002a3ae2",
        null,
        "string"
      ]
    ],
    [
      "00b4df78",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4df4c",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df5c",
      "PARAM",
      [
        "storage",
        "002a3bad",
        null,
        "string"
      ]
    ],
    [
      "00b4df78",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cf7c ["INT_ADD", "register:40f0:8", ["const:b4cf7c:8", "const:4:8"]]
- 00b4cf7c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4df70 ["INT_ADD", "register:40f0:8", ["const:b4df70:8", "const:4:8"]]
+ 00b4df70 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4cf84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00b4cf84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4df78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00b4df78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cf50 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4df44 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e131eb2f691fcfae5380b4b9bf285d12"></a>

### [`00b4cfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cfb4.md) → [`00b4dfa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dfa8.md) _ZN8firebase4util22parcel_file_descriptor10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4dfc4",
      "incomplete_value": false,
      "site": "00b4dfc8",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cfd0",
      "incomplete_value": false,
      "site": "00b4cfd4",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4dfd4",
      "incomplete_value": true,
      "site": "00b4dfe0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4cfe0",
      "incomplete_value": true,
      "site": "00b4cfec",
      "value": [
        "LOAD",
        "8",
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
      "00b4dfc4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4dfd4",
      "DATA",
      [
        "storage",
        "01125d80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4dfc4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4dfd4",
      "DATA",
      [
        "storage",
        "01126d40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cfd4 ["INT_ADD", "register:40f0:8", ["const:b4cfd4:8", "const:4:8"]]
- 00b4cfd4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4dfc8 ["INT_ADD", "register:40f0:8", ["const:b4dfc8:8", "const:4:8"]]
+ 00b4dfc8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4cfd0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4cfd0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cfd0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cfd0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4dfc4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4dfc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dfc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dfc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4cfd8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4dfcc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-6fc9c73201e7e74f0db3de4f4b278e77"></a>

### [`00b4cff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cff0.md) → [`00b4dfe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dfe4.md) _ZN8firebase4util3set19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e010",
      "incomplete_value": true,
      "site": "00b4e010",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d01c",
      "incomplete_value": true,
      "site": "00b4d01c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4dff8",
      "incomplete_value": true,
      "site": "00b4dff8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d004",
      "incomplete_value": true,
      "site": "00b4d004",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e004",
      "incomplete_value": false,
      "site": "00b4e008",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d010",
      "incomplete_value": false,
      "site": "00b4d014",
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
            "const:52b:8"
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
      "00b4dff4",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e004",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e010",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dff4",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e004",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e010",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d014 ["INT_ADD", "register:40f0:8", ["const:b4d014:8", "const:4:8"]]
- 00b4d014 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e008 ["INT_ADD", "register:40f0:8", ["const:b4e008:8", "const:4:8"]]
+ 00b4e008 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d01c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00b4d01c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e010 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00b4e010 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cffc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4dff0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3416efa874b6bc05c145e61465019689"></a>

### [`00b4d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d030.md) → [`00b4e024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e024.md) _ZN8firebase4util3set19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e050",
      "incomplete_value": true,
      "site": "00b4e050",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d05c",
      "incomplete_value": true,
      "site": "00b4d05c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4e038",
      "incomplete_value": true,
      "site": "00b4e038",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d044",
      "incomplete_value": true,
      "site": "00b4d044",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e040",
      "incomplete_value": false,
      "site": "00b4e048",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d04c",
      "incomplete_value": false,
      "site": "00b4d054",
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
            "const:52b:8"
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
      "00b4e034",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e040",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e050",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e034",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e040",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e050",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d054 ["INT_ADD", "register:40f0:8", ["const:b4d054:8", "const:4:8"]]
- 00b4d054 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e048 ["INT_ADD", "register:40f0:8", ["const:b4e048:8", "const:4:8"]]
+ 00b4e048 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d05c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00b4d05c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e050 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00b4e050 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d03c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e030 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-72bffcdd42ea32cdf643b100bee22040"></a>

### [`00b4d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d070.md) → [`00b4e064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e064.md) _ZN8firebase4util3set10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e094",
      "incomplete_value": true,
      "site": "00b4e094",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d0a0",
      "incomplete_value": true,
      "site": "00b4d0a0",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4e078",
      "incomplete_value": true,
      "site": "00b4e078",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d084",
      "incomplete_value": true,
      "site": "00b4d084",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e084",
      "incomplete_value": false,
      "site": "00b4e08c",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d090",
      "incomplete_value": false,
      "site": "00b4d098",
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
            "const:52b:8"
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
      "00b4e074",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e084",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e094",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e074",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e084",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e094",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d098 ["INT_ADD", "register:40f0:8", ["const:b4d098:8", "const:4:8"]]
- 00b4d098 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e08c ["INT_ADD", "register:40f0:8", ["const:b4e08c:8", "const:4:8"]]
+ 00b4e08c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d0a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00b4d0a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e094 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00b4e094 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d07c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e070 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-15200cef833f3510cbfc400b6cc7645f"></a>

### [`00b4d0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d0b4.md) → [`00b4e0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e0a8.md) _ZN8firebase4util3set10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e0d8",
      "incomplete_value": true,
      "site": "00b4e0d8",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d0e4",
      "incomplete_value": true,
      "site": "00b4d0e4",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4e0bc",
      "incomplete_value": true,
      "site": "00b4e0bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d0c8",
      "incomplete_value": true,
      "site": "00b4d0c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e0c4",
      "incomplete_value": false,
      "site": "00b4e0d0",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d0d0",
      "incomplete_value": false,
      "site": "00b4d0dc",
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
            "const:52b:8"
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
      "00b4e0b8",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e0c4",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e0d8",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e0b8",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e0c4",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e0d8",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d0dc ["INT_ADD", "register:40f0:8", ["const:b4d0dc:8", "const:4:8"]]
- 00b4d0dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e0d0 ["INT_ADD", "register:40f0:8", ["const:b4e0d0:8", "const:4:8"]]
+ 00b4e0d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d0e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00b4d0e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e0d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00b4e0d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d0c0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e0b4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5f3c116640c8eaa860d54f64e6c10f1a"></a>

### [`00b4d104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d104.md) → [`00b4e0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e0f8.md) _ZN8firebase4util3set15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4e180",
      "incomplete_value": true,
      "site": "00b4e180",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d18c",
      "incomplete_value": true,
      "site": "00b4d18c",
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
            "const:d90:8"
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
      "definition_site": "00b4e12c",
      "incomplete_value": true,
      "site": "00b4e138",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d138",
      "incomplete_value": true,
      "site": "00b4d144",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
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
      "00b4e10c",
      "READ",
      [
        "storage",
        "01125d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e12c",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e180",
      "WRITE",
      [
        "storage",
        "01125d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e10c",
      "READ",
      [
        "storage",
        "01126d50",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e12c",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e180",
      "WRITE",
      [
        "storage",
        "01126d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d144 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d144 ["INT_ADD", "register:40f0:8", ["const:b4d144:8", "const:4:8"]]
- 00b4d144 ["CALLIND", null, ["register:0:8"]]
+ 00b4e138 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e138 ["INT_ADD", "register:40f0:8", ["const:b4e138:8", "const:4:8"]]
+ 00b4e138 ["CALLIND", null, ["register:0:8"]]
- 00b4d18c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4d18c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d90:8"]]
- 00b4d18c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4e180 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4e180 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d50:8"]]
+ 00b4e180 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4d114 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4e108 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0cdc96241f0b1c6a8b1e09489738c173"></a>

### [`00b4d1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d1a0.md) → [`00b4e194`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e194.md) _ZN8firebase4util3set12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4e1d0",
      "incomplete_value": true,
      "site": "00b4e1d0",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d1dc",
      "incomplete_value": true,
      "site": "00b4d1dc",
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
            "const:d90:8"
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
      "definition_site": "00b4e220",
      "incomplete_value": true,
      "site": "00b4e220",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d22c",
      "incomplete_value": true,
      "site": "00b4d22c",
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
            "const:d88:8"
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
      "definition_site": "00b4e1ac",
      "incomplete_value": true,
      "site": "00b4e1ac",
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
      "definition_site": "00b4d1b8",
      "incomplete_value": true,
      "site": "00b4d1b8",
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
      "00b4e1a8",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e1b4",
      "READ",
      [
        "storage",
        "01125d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e1d0",
      "WRITE",
      [
        "storage",
        "01125d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e1a8",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e1b4",
      "READ",
      [
        "storage",
        "01126d50",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e1d0",
      "WRITE",
      [
        "storage",
        "01126d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d1dc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4d1dc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4d1dc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d90:8"]]
- 00b4d1dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4e1d0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4e1d0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4e1d0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d50:8"]]
+ 00b4e1d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4d228 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d228 ["INT_ADD", "register:40f0:8", ["const:b4d228:8", "const:4:8"]]
- 00b4d228 ["CALLIND", null, ["register:0:8"]]
+ 00b4e21c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e21c ["INT_ADD", "register:40f0:8", ["const:b4e21c:8", "const:4:8"]]
+ 00b4e21c ["CALLIND", null, ["register:0:8"]]
- 00b4d22c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00b4d22c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4d22c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4e220 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00b4e220 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4e220 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-273fad3e314c3e4f48177a8cc2caadcf"></a>

### [`00b4d240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d240.md) → [`00b4e234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e234.md) _ZN8firebase4util3set14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e274",
      "incomplete_value": true,
      "site": "00b4e274",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d280",
      "incomplete_value": true,
      "site": "00b4d280",
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
            "const:d88:8"
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
      "definition_site": "00b4e250",
      "incomplete_value": true,
      "site": "00b4e250",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d25c",
      "incomplete_value": true,
      "site": "00b4d25c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e258",
      "incomplete_value": false,
      "site": "00b4e26c",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d264",
      "incomplete_value": false,
      "site": "00b4d278",
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
            "const:52b:8"
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
      "00b4e248",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e258",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e274",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e248",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e258",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e274",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d278 ["INT_ADD", "register:40f0:8", ["const:b4d278:8", "const:4:8"]]
- 00b4d278 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e26c ["INT_ADD", "register:40f0:8", ["const:b4e26c:8", "const:4:8"]]
+ 00b4e26c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d280 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00b4d280 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e274 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00b4e274 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d24c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4e240 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-6a43a526aa8664ca3921cd47de63ad04"></a>

### [`00b4d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d2b0.md) → [`00b4e2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e2a4.md) _ZN8firebase4util3set11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5d0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5a0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4e2c0",
      "incomplete_value": false,
      "site": "00b4e2c4",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d2cc",
      "incomplete_value": false,
      "site": "00b4d2d0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4e2d0",
      "incomplete_value": true,
      "site": "00b4e2dc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4d2dc",
      "incomplete_value": true,
      "site": "00b4d2e8",
      "value": [
        "LOAD",
        "8",
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
      "00b4e2c0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4e2d0",
      "DATA",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e2c0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4e2d0",
      "DATA",
      [
        "storage",
        "01126d58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d2d0 ["INT_ADD", "register:40f0:8", ["const:b4d2d0:8", "const:4:8"]]
- 00b4d2d0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4e2c4 ["INT_ADD", "register:40f0:8", ["const:b4e2c4:8", "const:4:8"]]
+ 00b4e2c4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4d2cc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4d2cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d2cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d2cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e2c0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4e2c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e2c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e2c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d2d4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4e2c8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-7399980db0d58cec39ba373ae12a09bc"></a>

### [`00b4d2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d2ec.md) → [`00b4e2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e2e0.md) _ZN8firebase4util3set13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e320",
      "incomplete_value": true,
      "site": "00b4e320",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d32c",
      "incomplete_value": true,
      "site": "00b4d32c",
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
            "const:d88:8"
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
      "definition_site": "00b4e2fc",
      "incomplete_value": true,
      "site": "00b4e2fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d308",
      "incomplete_value": true,
      "site": "00b4d308",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e304",
      "incomplete_value": false,
      "site": "00b4e318",
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
            "const:602:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d310",
      "incomplete_value": false,
      "site": "00b4d324",
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
            "const:52b:8"
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
      "00b4e2f4",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e304",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4e320",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e2f4",
      "READ",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e304",
      "PARAM",
      [
        "storage",
        "002b0602",
        null,
        "string"
      ]
    ],
    [
      "00b4e320",
      "WRITE",
      [
        "storage",
        "01126d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d324 ["INT_ADD", "register:40f0:8", ["const:b4d324:8", "const:4:8"]]
- 00b4d324 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e318 ["INT_ADD", "register:40f0:8", ["const:b4e318:8", "const:4:8"]]
+ 00b4e318 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d32c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00b4d32c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e320 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00b4e320 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d2f8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4e2ec ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-bc331a1cf2e6d135334ec8a8e115d887"></a>

### [`00b4d35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d35c.md) → [`00b4e350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e350.md) _ZN8firebase4util3set10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4e36c",
      "incomplete_value": false,
      "site": "00b4e370",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d378",
      "incomplete_value": false,
      "site": "00b4d37c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4e37c",
      "incomplete_value": true,
      "site": "00b4e388",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4d388",
      "incomplete_value": true,
      "site": "00b4d394",
      "value": [
        "LOAD",
        "8",
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
      "00b4e36c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4e37c",
      "DATA",
      [
        "storage",
        "01125da0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4e36c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4e37c",
      "DATA",
      [
        "storage",
        "01126d60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d37c ["INT_ADD", "register:40f0:8", ["const:b4d37c:8", "const:4:8"]]
- 00b4d37c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4e370 ["INT_ADD", "register:40f0:8", ["const:b4e370:8", "const:4:8"]]
+ 00b4e370 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4d378 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4d378 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d378 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d378 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e36c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4e36c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e36c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e36c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d380 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4e374 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-55be90bdaaf9df3d19775b437a03dc92"></a>

### [`00b4d398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d398.md) → [`00b4e38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e38c.md) _ZN8firebase4util11short_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e3b8",
      "incomplete_value": true,
      "site": "00b4e3b8",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d3c4",
      "incomplete_value": true,
      "site": "00b4d3c4",
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
            "const:da8:8"
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
      "definition_site": "00b4e3a0",
      "incomplete_value": true,
      "site": "00b4e3a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d3ac",
      "incomplete_value": true,
      "site": "00b4d3ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e3ac",
      "incomplete_value": false,
      "site": "00b4e3b0",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d3b8",
      "incomplete_value": false,
      "site": "00b4d3bc",
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
            "const:7c6:8"
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
      "00b4e39c",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e3ac",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e3b8",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e39c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e3ac",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e3b8",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d3bc ["INT_ADD", "register:40f0:8", ["const:b4d3bc:8", "const:4:8"]]
- 00b4d3bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e3b0 ["INT_ADD", "register:40f0:8", ["const:b4e3b0:8", "const:4:8"]]
+ 00b4e3b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d3c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
- 00b4d3c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e3b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00b4e3b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d3a4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e398 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c4fb0fcc57a9f7d8c855d1dd303031c4"></a>

### [`00b4d3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d3d8.md) → [`00b4e3cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e3cc.md) _ZN8firebase4util11short_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e3f8",
      "incomplete_value": true,
      "site": "00b4e3f8",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d404",
      "incomplete_value": true,
      "site": "00b4d404",
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
            "const:da8:8"
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
      "definition_site": "00b4e3e0",
      "incomplete_value": true,
      "site": "00b4e3e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d3ec",
      "incomplete_value": true,
      "site": "00b4d3ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e3e8",
      "incomplete_value": false,
      "site": "00b4e3f0",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d3f4",
      "incomplete_value": false,
      "site": "00b4d3fc",
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
            "const:7c6:8"
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
      "00b4e3dc",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e3e8",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e3f8",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e3dc",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e3e8",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e3f8",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d3fc ["INT_ADD", "register:40f0:8", ["const:b4d3fc:8", "const:4:8"]]
- 00b4d3fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e3f0 ["INT_ADD", "register:40f0:8", ["const:b4e3f0:8", "const:4:8"]]
+ 00b4e3f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d404 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
- 00b4d404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e3f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00b4e3f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d3e4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e3d8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b9bbb0e3a9d193a8846a136a3b8410c1"></a>

### [`00b4d418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d418.md) → [`00b4e40c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e40c.md) _ZN8firebase4util11short_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e43c",
      "incomplete_value": true,
      "site": "00b4e43c",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d448",
      "incomplete_value": true,
      "site": "00b4d448",
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
            "const:da8:8"
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
      "definition_site": "00b4e420",
      "incomplete_value": true,
      "site": "00b4e420",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d42c",
      "incomplete_value": true,
      "site": "00b4d42c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e42c",
      "incomplete_value": false,
      "site": "00b4e434",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d438",
      "incomplete_value": false,
      "site": "00b4d440",
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
            "const:7c6:8"
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
      "00b4e41c",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e42c",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e43c",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e41c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e42c",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e43c",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d440 ["INT_ADD", "register:40f0:8", ["const:b4d440:8", "const:4:8"]]
- 00b4d440 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e434 ["INT_ADD", "register:40f0:8", ["const:b4e434:8", "const:4:8"]]
+ 00b4e434 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d448 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
- 00b4d448 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e43c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00b4e43c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d424 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e418 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-9bbefdb31b5a633e708bd0343173e988"></a>

### [`00b4d45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d45c.md) → [`00b4e450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e450.md) _ZN8firebase4util11short_class10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e480",
      "incomplete_value": true,
      "site": "00b4e480",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d48c",
      "incomplete_value": true,
      "site": "00b4d48c",
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
            "const:da8:8"
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
      "definition_site": "00b4e464",
      "incomplete_value": true,
      "site": "00b4e464",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d470",
      "incomplete_value": true,
      "site": "00b4d470",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e46c",
      "incomplete_value": false,
      "site": "00b4e478",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d478",
      "incomplete_value": false,
      "site": "00b4d484",
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
            "const:7c6:8"
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
      "00b4e460",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e46c",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e480",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e460",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e46c",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e480",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d484 ["INT_ADD", "register:40f0:8", ["const:b4d484:8", "const:4:8"]]
- 00b4d484 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e478 ["INT_ADD", "register:40f0:8", ["const:b4e478:8", "const:4:8"]]
+ 00b4e478 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d48c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
- 00b4d48c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e480 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00b4e480 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d468 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e45c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-16fdbe472d8f1143ae5377b754757785"></a>

### [`00b4d4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d4ac.md) → [`00b4e4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e4a0.md) _ZN8firebase4util11short_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4e528",
      "incomplete_value": true,
      "site": "00b4e528",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d534",
      "incomplete_value": true,
      "site": "00b4d534",
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
            "const:db0:8"
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
      "definition_site": "00b4e4d4",
      "incomplete_value": true,
      "site": "00b4e4e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d4e0",
      "incomplete_value": true,
      "site": "00b4d4ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da8:8"
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
      "00b4e4b4",
      "READ",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e4d4",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e528",
      "WRITE",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e4b4",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e4d4",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e528",
      "WRITE",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d4ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d4ec ["INT_ADD", "register:40f0:8", ["const:b4d4ec:8", "const:4:8"]]
- 00b4d4ec ["CALLIND", null, ["register:0:8"]]
+ 00b4e4e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e4e0 ["INT_ADD", "register:40f0:8", ["const:b4e4e0:8", "const:4:8"]]
+ 00b4e4e0 ["CALLIND", null, ["register:0:8"]]
- 00b4d534 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4d534 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:db0:8"]]
- 00b4d534 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4e528 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4e528 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d70:8"]]
+ 00b4e528 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4d4bc ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4e4b0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-93db0896986aa3bb784d75c1b2c4d11f"></a>

### [`00b4d548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d548.md) → [`00b4e53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e53c.md) _ZN8firebase4util11short_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4e578",
      "incomplete_value": true,
      "site": "00b4e578",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d584",
      "incomplete_value": true,
      "site": "00b4d584",
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
            "const:db0:8"
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
      "definition_site": "00b4e5c8",
      "incomplete_value": true,
      "site": "00b4e5c8",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d5d4",
      "incomplete_value": true,
      "site": "00b4d5d4",
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
            "const:da8:8"
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
      "definition_site": "00b4e554",
      "incomplete_value": true,
      "site": "00b4e554",
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
      "definition_site": "00b4d560",
      "incomplete_value": true,
      "site": "00b4d560",
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
      "00b4e550",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e55c",
      "READ",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e578",
      "WRITE",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e550",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e55c",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e578",
      "WRITE",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d584 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4d584 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4d584 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:db0:8"]]
- 00b4d584 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4e578 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4e578 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4e578 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d70:8"]]
+ 00b4e578 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4d5d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d5d0 ["INT_ADD", "register:40f0:8", ["const:b4d5d0:8", "const:4:8"]]
- 00b4d5d0 ["CALLIND", null, ["register:0:8"]]
+ 00b4e5c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e5c4 ["INT_ADD", "register:40f0:8", ["const:b4e5c4:8", "const:4:8"]]
+ 00b4e5c4 ["CALLIND", null, ["register:0:8"]]
- 00b4d5d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
- 00b4d5d4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4d5d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4e5c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00b4e5c8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4e5c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-af7f916f5b598fbb1310a7ad71df991b"></a>

### [`00b4d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d5e8.md) → [`00b4e5dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e5dc.md) _ZN8firebase4util11short_class14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e61c",
      "incomplete_value": true,
      "site": "00b4e61c",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d628",
      "incomplete_value": true,
      "site": "00b4d628",
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
            "const:da8:8"
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
      "definition_site": "00b4e5f8",
      "incomplete_value": true,
      "site": "00b4e5f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d604",
      "incomplete_value": true,
      "site": "00b4d604",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e600",
      "incomplete_value": false,
      "site": "00b4e614",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d60c",
      "incomplete_value": false,
      "site": "00b4d620",
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
            "const:7c6:8"
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
      "00b4e5f0",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e600",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e61c",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e5f0",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e600",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e61c",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d620 ["INT_ADD", "register:40f0:8", ["const:b4d620:8", "const:4:8"]]
- 00b4d620 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e614 ["INT_ADD", "register:40f0:8", ["const:b4e614:8", "const:4:8"]]
+ 00b4e614 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d628 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
- 00b4d628 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e61c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00b4e61c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d5f4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4e5e8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e5206af85b24fed6b684fa162080da37"></a>

### [`00b4d658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d658.md) → [`00b4e64c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e64c.md) _ZN8firebase4util11short_class11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4e668",
      "incomplete_value": false,
      "site": "00b4e66c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d674",
      "incomplete_value": false,
      "site": "00b4d678",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4e678",
      "incomplete_value": true,
      "site": "00b4e684",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4d684",
      "incomplete_value": true,
      "site": "00b4d690",
      "value": [
        "LOAD",
        "8",
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
      "00b4e668",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4e678",
      "DATA",
      [
        "storage",
        "01125db8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4e668",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4e678",
      "DATA",
      [
        "storage",
        "01126d78",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d678 ["INT_ADD", "register:40f0:8", ["const:b4d678:8", "const:4:8"]]
- 00b4d678 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4e66c ["INT_ADD", "register:40f0:8", ["const:b4e66c:8", "const:4:8"]]
+ 00b4e66c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4d674 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4d674 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d674 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d674 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e668 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4e668 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e668 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e668 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d67c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4e670 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-18d0e2ecf495efb02ca29cff932b1569"></a>

### [`00b4d694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d694.md) → [`00b4e688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e688.md) _ZN8firebase4util11short_class13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e6c8",
      "incomplete_value": true,
      "site": "00b4e6c8",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d6d4",
      "incomplete_value": true,
      "site": "00b4d6d4",
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
            "const:da8:8"
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
      "definition_site": "00b4e6a4",
      "incomplete_value": true,
      "site": "00b4e6a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d6b0",
      "incomplete_value": true,
      "site": "00b4d6b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e6ac",
      "incomplete_value": false,
      "site": "00b4e6c0",
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
            "const:8a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d6b8",
      "incomplete_value": false,
      "site": "00b4d6cc",
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
            "const:7c6:8"
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
      "00b4e69c",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e6ac",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4e6c8",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e69c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e6ac",
      "PARAM",
      [
        "storage",
        "002bf8a4",
        null,
        "string"
      ]
    ],
    [
      "00b4e6c8",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d6cc ["INT_ADD", "register:40f0:8", ["const:b4d6cc:8", "const:4:8"]]
- 00b4d6cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e6c0 ["INT_ADD", "register:40f0:8", ["const:b4e6c0:8", "const:4:8"]]
+ 00b4e6c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d6d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
- 00b4d6d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e6c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00b4e6c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d6a0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4e694 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-397a57212b3d716107c7ef3193c11023"></a>

### [`00b4d704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d704.md) → [`00b4e6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e6f8.md) _ZN8firebase4util11short_class10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4e714",
      "incomplete_value": false,
      "site": "00b4e718",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d720",
      "incomplete_value": false,
      "site": "00b4d724",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4e724",
      "incomplete_value": true,
      "site": "00b4e730",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4d730",
      "incomplete_value": true,
      "site": "00b4d73c",
      "value": [
        "LOAD",
        "8",
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
      "00b4e714",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4e724",
      "DATA",
      [
        "storage",
        "01125dc8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4e714",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4e724",
      "DATA",
      [
        "storage",
        "01126d88",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d724 ["INT_ADD", "register:40f0:8", ["const:b4d724:8", "const:4:8"]]
- 00b4d724 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4e718 ["INT_ADD", "register:40f0:8", ["const:b4e718:8", "const:4:8"]]
+ 00b4e718 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4d720 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4d720 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d720 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d720 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e714 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4e714 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e714 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e714 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d728 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4e71c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-18f08fe57bea30f1696e785643364466"></a>

### [`00b4d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d740.md) → [`00b4e734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e734.md) _ZN8firebase4util6string19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e760",
      "incomplete_value": true,
      "site": "00b4e760",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d76c",
      "incomplete_value": true,
      "site": "00b4d76c",
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
            "const:dd0:8"
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
      "definition_site": "00b4e748",
      "incomplete_value": true,
      "site": "00b4e748",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d754",
      "incomplete_value": true,
      "site": "00b4d754",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e754",
      "incomplete_value": false,
      "site": "00b4e758",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d760",
      "incomplete_value": false,
      "site": "00b4d764",
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
            "const:a44:8"
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
      "00b4e744",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e754",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4e760",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e744",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e754",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4e760",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d764 ["INT_ADD", "register:40f0:8", ["const:b4d764:8", "const:4:8"]]
- 00b4d764 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e758 ["INT_ADD", "register:40f0:8", ["const:b4e758:8", "const:4:8"]]
+ 00b4e758 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d76c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
- 00b4d76c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e760 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d90:8"]]
+ 00b4e760 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d74c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e740 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-e588a39686d67de67f9395db8c39dad9"></a>

### [`00b4d780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d780.md) → [`00b4e774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e774.md) _ZN8firebase4util6string19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e7a0",
      "incomplete_value": true,
      "site": "00b4e7a0",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d7ac",
      "incomplete_value": true,
      "site": "00b4d7ac",
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
            "const:dd0:8"
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
      "definition_site": "00b4e788",
      "incomplete_value": true,
      "site": "00b4e788",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d794",
      "incomplete_value": true,
      "site": "00b4d794",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e790",
      "incomplete_value": false,
      "site": "00b4e798",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d79c",
      "incomplete_value": false,
      "site": "00b4d7a4",
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
            "const:a44:8"
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
      "00b4e784",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e790",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4e7a0",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e784",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e790",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4e7a0",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d7a4 ["INT_ADD", "register:40f0:8", ["const:b4d7a4:8", "const:4:8"]]
- 00b4d7a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e798 ["INT_ADD", "register:40f0:8", ["const:b4e798:8", "const:4:8"]]
+ 00b4e798 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d7ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
- 00b4d7ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e7a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d90:8"]]
+ 00b4e7a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d78c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e780 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-9b1cb8f2cbfc94538d7612e8c953cc7a"></a>

### [`00b4d7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d7c0.md) → [`00b4e7b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e7b4.md) _ZN8firebase4util6string10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e7e4",
      "incomplete_value": true,
      "site": "00b4e7e4",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d7f0",
      "incomplete_value": true,
      "site": "00b4d7f0",
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
            "const:dd0:8"
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
      "definition_site": "00b4e7c8",
      "incomplete_value": true,
      "site": "00b4e7c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d7d4",
      "incomplete_value": true,
      "site": "00b4d7d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e7d4",
      "incomplete_value": false,
      "site": "00b4e7dc",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d7e0",
      "incomplete_value": false,
      "site": "00b4d7e8",
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
            "const:a44:8"
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
      "00b4e7c4",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e7d4",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4e7e4",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e7c4",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e7d4",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4e7e4",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d7e8 ["INT_ADD", "register:40f0:8", ["const:b4d7e8:8", "const:4:8"]]
- 00b4d7e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e7dc ["INT_ADD", "register:40f0:8", ["const:b4e7dc:8", "const:4:8"]]
+ 00b4e7dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d7f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
- 00b4d7f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e7e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d90:8"]]
+ 00b4e7e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d7cc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e7c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5854569ff3413efede993164c363b3fd"></a>

### [`00b4d804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d804.md) → [`00b4e7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e7f8.md) _ZN8firebase4util6string10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4e828",
      "incomplete_value": true,
      "site": "00b4e828",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d834",
      "incomplete_value": true,
      "site": "00b4d834",
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
            "const:dd0:8"
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
      "definition_site": "00b4e80c",
      "incomplete_value": true,
      "site": "00b4e80c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d818",
      "incomplete_value": true,
      "site": "00b4d818",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e814",
      "incomplete_value": false,
      "site": "00b4e820",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d820",
      "incomplete_value": false,
      "site": "00b4d82c",
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
            "const:a44:8"
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
      "00b4e808",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e814",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4e828",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e808",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e814",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4e828",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d82c ["INT_ADD", "register:40f0:8", ["const:b4d82c:8", "const:4:8"]]
- 00b4d82c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e820 ["INT_ADD", "register:40f0:8", ["const:b4e820:8", "const:4:8"]]
+ 00b4e820 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d834 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
- 00b4d834 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e828 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d90:8"]]
+ 00b4e828 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d810 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4e804 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b9b662bf785c4e8b87e98aa0356bbde4"></a>

### [`00b4d854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d854.md) → [`00b4e848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e848.md) _ZN8firebase4util6string15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4e8d0",
      "incomplete_value": true,
      "site": "00b4e8d0",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d8dc",
      "incomplete_value": true,
      "site": "00b4d8dc",
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
            "const:dd8:8"
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
      "definition_site": "00b4e87c",
      "incomplete_value": true,
      "site": "00b4e888",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d888",
      "incomplete_value": true,
      "site": "00b4d894",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
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
      "00b4e85c",
      "READ",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e87c",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e8d0",
      "WRITE",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e85c",
      "READ",
      [
        "storage",
        "01126d98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e87c",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e8d0",
      "WRITE",
      [
        "storage",
        "01126d98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d894 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d894 ["INT_ADD", "register:40f0:8", ["const:b4d894:8", "const:4:8"]]
- 00b4d894 ["CALLIND", null, ["register:0:8"]]
+ 00b4e888 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e888 ["INT_ADD", "register:40f0:8", ["const:b4e888:8", "const:4:8"]]
+ 00b4e888 ["CALLIND", null, ["register:0:8"]]
- 00b4d8dc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4d8dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:dd8:8"]]
- 00b4d8dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4e8d0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4e8d0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d98:8"]]
+ 00b4e8d0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4d864 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4e858 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0e6721dd86b5b3d702b445a7b359676a"></a>

### [`00b4d8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d8f0.md) → [`00b4e8e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e8e4.md) _ZN8firebase4util6string12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4e920",
      "incomplete_value": true,
      "site": "00b4e920",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d92c",
      "incomplete_value": true,
      "site": "00b4d92c",
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
            "const:dd8:8"
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
      "definition_site": "00b4e970",
      "incomplete_value": true,
      "site": "00b4e970",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d97c",
      "incomplete_value": true,
      "site": "00b4d97c",
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
            "const:dd0:8"
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
      "definition_site": "00b4e8fc",
      "incomplete_value": true,
      "site": "00b4e8fc",
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
      "definition_site": "00b4d908",
      "incomplete_value": true,
      "site": "00b4d908",
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
      "00b4e8f8",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e904",
      "READ",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e920",
      "WRITE",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e8f8",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e904",
      "READ",
      [
        "storage",
        "01126d98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e920",
      "WRITE",
      [
        "storage",
        "01126d98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d92c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4d92c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4d92c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:dd8:8"]]
- 00b4d92c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4e920 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4e920 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4e920 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d98:8"]]
+ 00b4e920 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4d978 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d978 ["INT_ADD", "register:40f0:8", ["const:b4d978:8", "const:4:8"]]
- 00b4d978 ["CALLIND", null, ["register:0:8"]]
+ 00b4e96c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e96c ["INT_ADD", "register:40f0:8", ["const:b4e96c:8", "const:4:8"]]
+ 00b4e96c ["CALLIND", null, ["register:0:8"]]
- 00b4d97c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
- 00b4d97c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4d97c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4e970 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d90:8"]]
+ 00b4e970 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4e970 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-77099ccbf4de0d8d164e4ae9eafc4d4e"></a>

### [`00b4d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d990.md) → [`00b4e984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e984.md) _ZN8firebase4util6string14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e9c4",
      "incomplete_value": true,
      "site": "00b4e9c4",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d9d0",
      "incomplete_value": true,
      "site": "00b4d9d0",
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
            "const:dd0:8"
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
      "definition_site": "00b4e9a0",
      "incomplete_value": true,
      "site": "00b4e9a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4d9ac",
      "incomplete_value": true,
      "site": "00b4d9ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e9a8",
      "incomplete_value": false,
      "site": "00b4e9bc",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4d9b4",
      "incomplete_value": false,
      "site": "00b4d9c8",
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
            "const:a44:8"
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
      "00b4e998",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e9a8",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4e9c4",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e998",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e9a8",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4e9c4",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d9c8 ["INT_ADD", "register:40f0:8", ["const:b4d9c8:8", "const:4:8"]]
- 00b4d9c8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4e9bc ["INT_ADD", "register:40f0:8", ["const:b4e9bc:8", "const:4:8"]]
+ 00b4e9bc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4d9d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
- 00b4d9d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e9c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d90:8"]]
+ 00b4e9c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d99c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4e990 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e1af4daf426a011b4bdfd9a73ae69a71"></a>

### [`00b4da00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4da00.md) → [`00b4e9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4e9f4.md) _ZN8firebase4util6string11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ea10",
      "incomplete_value": false,
      "site": "00b4ea14",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4da1c",
      "incomplete_value": false,
      "site": "00b4da20",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4ea20",
      "incomplete_value": true,
      "site": "00b4ea2c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4da2c",
      "incomplete_value": true,
      "site": "00b4da38",
      "value": [
        "LOAD",
        "8",
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
      "00b4ea10",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4ea20",
      "DATA",
      [
        "storage",
        "01125de0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ea10",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4ea20",
      "DATA",
      [
        "storage",
        "01126da0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4da20 ["INT_ADD", "register:40f0:8", ["const:b4da20:8", "const:4:8"]]
- 00b4da20 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4ea14 ["INT_ADD", "register:40f0:8", ["const:b4ea14:8", "const:4:8"]]
+ 00b4ea14 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4da1c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4da1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4da1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4da1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ea10 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4ea10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ea10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ea10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4da24 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4ea18 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-ab81ab35012b6fe43733ece69056fdb6"></a>

### [`00b4da3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4da3c.md) → [`00b4ea30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ea30.md) _ZN8firebase4util6string13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4ea70",
      "incomplete_value": true,
      "site": "00b4ea70",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4da7c",
      "incomplete_value": true,
      "site": "00b4da7c",
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
            "const:dd0:8"
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
      "definition_site": "00b4ea4c",
      "incomplete_value": true,
      "site": "00b4ea4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4da58",
      "incomplete_value": true,
      "site": "00b4da58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ea54",
      "incomplete_value": false,
      "site": "00b4ea68",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4da60",
      "incomplete_value": false,
      "site": "00b4da74",
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
            "const:a44:8"
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
      "00b4ea44",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ea54",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4ea70",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ea44",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ea54",
      "PARAM",
      [
        "storage",
        "002aeb11",
        null,
        "string"
      ]
    ],
    [
      "00b4ea70",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4da74 ["INT_ADD", "register:40f0:8", ["const:b4da74:8", "const:4:8"]]
- 00b4da74 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ea68 ["INT_ADD", "register:40f0:8", ["const:b4ea68:8", "const:4:8"]]
+ 00b4ea68 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4da7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
- 00b4da7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ea70 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d90:8"]]
+ 00b4ea70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4da48 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ea3c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-b14fe5955a9a5cffb79c750bfacc2b26"></a>

### [`00b4daac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4daac.md) → [`00b4eaa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eaa0.md) _ZN8firebase4util6string10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4eabc",
      "incomplete_value": false,
      "site": "00b4eac0",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dac8",
      "incomplete_value": false,
      "site": "00b4dacc",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4eacc",
      "incomplete_value": true,
      "site": "00b4ead8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4dad8",
      "incomplete_value": true,
      "site": "00b4dae4",
      "value": [
        "LOAD",
        "8",
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
      "00b4eabc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4eacc",
      "DATA",
      [
        "storage",
        "01125de8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4eabc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4eacc",
      "DATA",
      [
        "storage",
        "01126da8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dacc ["INT_ADD", "register:40f0:8", ["const:b4dacc:8", "const:4:8"]]
- 00b4dacc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4eac0 ["INT_ADD", "register:40f0:8", ["const:b4eac0:8", "const:4:8"]]
+ 00b4eac0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4dac8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4dac8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4dac8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4dac8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4eabc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4eabc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4eabc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4eabc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4dad0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4eac4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-dcac4dd4701956f8d25171b6cf0c3178"></a>

### [`00b4dae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dae8.md) → [`00b4eadc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eadc.md) _ZN8firebase4util9throwable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4eb08",
      "incomplete_value": true,
      "site": "00b4eb08",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db14",
      "incomplete_value": true,
      "site": "00b4db14",
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
            "const:df0:8"
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
      "definition_site": "00b4eaf0",
      "incomplete_value": true,
      "site": "00b4eaf0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dafc",
      "incomplete_value": true,
      "site": "00b4dafc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4eafc",
      "incomplete_value": false,
      "site": "00b4eb00",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db08",
      "incomplete_value": false,
      "site": "00b4db0c",
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
            "const:959:8"
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
      "00b4eaec",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eafc",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4eb08",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4eaec",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eafc",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4eb08",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4db0c ["INT_ADD", "register:40f0:8", ["const:b4db0c:8", "const:4:8"]]
- 00b4db0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4eb00 ["INT_ADD", "register:40f0:8", ["const:b4eb00:8", "const:4:8"]]
+ 00b4eb00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4db14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
- 00b4db14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4eb08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00b4eb08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4daf4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4eae8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c121c2ed27cd9c6e2f56687836c14abb"></a>

### [`00b4db28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4db28.md) → [`00b4eb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eb1c.md) _ZN8firebase4util9throwable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4eb48",
      "incomplete_value": true,
      "site": "00b4eb48",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db54",
      "incomplete_value": true,
      "site": "00b4db54",
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
            "const:df0:8"
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
      "definition_site": "00b4eb30",
      "incomplete_value": true,
      "site": "00b4eb30",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4db3c",
      "incomplete_value": true,
      "site": "00b4db3c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4eb38",
      "incomplete_value": false,
      "site": "00b4eb40",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db44",
      "incomplete_value": false,
      "site": "00b4db4c",
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
            "const:959:8"
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
      "00b4eb2c",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eb38",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4eb48",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4eb2c",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eb38",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4eb48",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4db4c ["INT_ADD", "register:40f0:8", ["const:b4db4c:8", "const:4:8"]]
- 00b4db4c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4eb40 ["INT_ADD", "register:40f0:8", ["const:b4eb40:8", "const:4:8"]]
+ 00b4eb40 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4db54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
- 00b4db54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4eb48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00b4eb48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4db34 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4eb28 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-87e27719a025a3c9cfb5cf8437e4026b"></a>

### [`00b4db68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4db68.md) → [`00b4eb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eb5c.md) _ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4eb8c",
      "incomplete_value": true,
      "site": "00b4eb8c",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db98",
      "incomplete_value": true,
      "site": "00b4db98",
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
            "const:df0:8"
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
      "definition_site": "00b4eb70",
      "incomplete_value": true,
      "site": "00b4eb70",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4db7c",
      "incomplete_value": true,
      "site": "00b4db7c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4eb7c",
      "incomplete_value": false,
      "site": "00b4eb84",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4db88",
      "incomplete_value": false,
      "site": "00b4db90",
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
            "const:959:8"
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
      "00b4eb6c",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eb7c",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4eb8c",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4eb6c",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eb7c",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4eb8c",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4db90 ["INT_ADD", "register:40f0:8", ["const:b4db90:8", "const:4:8"]]
- 00b4db90 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4eb84 ["INT_ADD", "register:40f0:8", ["const:b4eb84:8", "const:4:8"]]
+ 00b4eb84 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4db98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
- 00b4db98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4eb8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00b4eb8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4db74 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4eb68 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-21b8ec428375ade1638e198ef92c29ff"></a>

### [`00b4dbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dbac.md) → [`00b4eba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eba0.md) _ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4ebd0",
      "incomplete_value": true,
      "site": "00b4ebd0",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dbdc",
      "incomplete_value": true,
      "site": "00b4dbdc",
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
            "const:df0:8"
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
      "definition_site": "00b4ebb4",
      "incomplete_value": true,
      "site": "00b4ebb4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dbc0",
      "incomplete_value": true,
      "site": "00b4dbc0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ebbc",
      "incomplete_value": false,
      "site": "00b4ebc8",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dbc8",
      "incomplete_value": false,
      "site": "00b4dbd4",
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
            "const:959:8"
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
      "00b4ebb0",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ebbc",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4ebd0",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ebb0",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ebbc",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4ebd0",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dbd4 ["INT_ADD", "register:40f0:8", ["const:b4dbd4:8", "const:4:8"]]
- 00b4dbd4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ebc8 ["INT_ADD", "register:40f0:8", ["const:b4ebc8:8", "const:4:8"]]
+ 00b4ebc8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4dbdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
- 00b4dbdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ebd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00b4ebd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dbb8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ebac ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bd335e0f8469a67a512ee10fef881cf3"></a>

### [`00b4dbfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dbfc.md) → [`00b4ebf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ebf0.md) _ZN8firebase4util9throwable15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4ec78",
      "incomplete_value": true,
      "site": "00b4ec78",
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
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dc84",
      "incomplete_value": true,
      "site": "00b4dc84",
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
            "const:df8:8"
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
      "definition_site": "00b4ec24",
      "incomplete_value": true,
      "site": "00b4ec30",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dc30",
      "incomplete_value": true,
      "site": "00b4dc3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df0:8"
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
      "00b4ec04",
      "READ",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ec24",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ec78",
      "WRITE",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4ec04",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ec24",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ec78",
      "WRITE",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dc3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4dc3c ["INT_ADD", "register:40f0:8", ["const:b4dc3c:8", "const:4:8"]]
- 00b4dc3c ["CALLIND", null, ["register:0:8"]]
+ 00b4ec30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4ec30 ["INT_ADD", "register:40f0:8", ["const:b4ec30:8", "const:4:8"]]
+ 00b4ec30 ["CALLIND", null, ["register:0:8"]]
- 00b4dc84 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4dc84 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:df8:8"]]
- 00b4dc84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4ec78 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4ec78 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:db8:8"]]
+ 00b4ec78 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4dc0c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4ec00 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-8ba2e5b63fa276a65dcf3d2cf13d58d1"></a>

### [`00b4dc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dc98.md) → [`00b4ec8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ec8c.md) _ZN8firebase4util9throwable12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4ecc8",
      "incomplete_value": true,
      "site": "00b4ecc8",
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
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dcd4",
      "incomplete_value": true,
      "site": "00b4dcd4",
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
            "const:df8:8"
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
      "definition_site": "00b4ed18",
      "incomplete_value": true,
      "site": "00b4ed18",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dd24",
      "incomplete_value": true,
      "site": "00b4dd24",
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
            "const:df0:8"
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
      "definition_site": "00b4eca4",
      "incomplete_value": true,
      "site": "00b4eca4",
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
      "definition_site": "00b4dcb0",
      "incomplete_value": true,
      "site": "00b4dcb0",
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
      "00b4eca0",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ecac",
      "READ",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ecc8",
      "WRITE",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4eca0",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ecac",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4ecc8",
      "WRITE",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dcd4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4dcd4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4dcd4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:df8:8"]]
- 00b4dcd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4ecc8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4ecc8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4ecc8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:db8:8"]]
+ 00b4ecc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4dd20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4dd20 ["INT_ADD", "register:40f0:8", ["const:b4dd20:8", "const:4:8"]]
- 00b4dd20 ["CALLIND", null, ["register:0:8"]]
+ 00b4ed14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4ed14 ["INT_ADD", "register:40f0:8", ["const:b4ed14:8", "const:4:8"]]
+ 00b4ed14 ["CALLIND", null, ["register:0:8"]]
- 00b4dd24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
- 00b4dd24 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4dd24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4ed18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00b4ed18 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4ed18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-aa643f801170c79829d6a049111fd19d"></a>

### [`00b4dd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dd38.md) → [`00b4ed2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ed2c.md) _ZN8firebase4util9throwable14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4ed6c",
      "incomplete_value": true,
      "site": "00b4ed6c",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dd78",
      "incomplete_value": true,
      "site": "00b4dd78",
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
            "const:df0:8"
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
      "definition_site": "00b4ed48",
      "incomplete_value": true,
      "site": "00b4ed48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dd54",
      "incomplete_value": true,
      "site": "00b4dd54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ed50",
      "incomplete_value": false,
      "site": "00b4ed64",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dd5c",
      "incomplete_value": false,
      "site": "00b4dd70",
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
            "const:959:8"
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
      "00b4ed40",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ed50",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4ed6c",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ed40",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ed50",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4ed6c",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dd70 ["INT_ADD", "register:40f0:8", ["const:b4dd70:8", "const:4:8"]]
- 00b4dd70 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ed64 ["INT_ADD", "register:40f0:8", ["const:b4ed64:8", "const:4:8"]]
+ 00b4ed64 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4dd78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
- 00b4dd78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ed6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00b4ed6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dd44 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ed38 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d0463f19d3926d775c5ac3be7752d615"></a>

### [`00b4dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dda8.md) → [`00b4ed9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ed9c.md) _ZN8firebase4util9throwable11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4edb8",
      "incomplete_value": false,
      "site": "00b4edbc",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ddc4",
      "incomplete_value": false,
      "site": "00b4ddc8",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4edc8",
      "incomplete_value": true,
      "site": "00b4edd4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4ddd4",
      "incomplete_value": true,
      "site": "00b4dde0",
      "value": [
        "LOAD",
        "8",
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
      "00b4edb8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4edc8",
      "DATA",
      [
        "storage",
        "01125e00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4edb8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4edc8",
      "DATA",
      [
        "storage",
        "01126dc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ddc8 ["INT_ADD", "register:40f0:8", ["const:b4ddc8:8", "const:4:8"]]
- 00b4ddc8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4edbc ["INT_ADD", "register:40f0:8", ["const:b4edbc:8", "const:4:8"]]
+ 00b4edbc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4ddc4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4ddc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ddc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ddc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4edb8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4edb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4edb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4edb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4ddcc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4edc0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0c820212cca2377324f8403142690aaf"></a>

### [`00b4dde4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dde4.md) → [`00b4edd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4edd8.md) _ZN8firebase4util9throwable13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4ee18",
      "incomplete_value": true,
      "site": "00b4ee18",
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
            "const:db0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4de24",
      "incomplete_value": true,
      "site": "00b4de24",
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
            "const:df0:8"
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
      "definition_site": "00b4edf4",
      "incomplete_value": true,
      "site": "00b4edf4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4de00",
      "incomplete_value": true,
      "site": "00b4de00",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4edfc",
      "incomplete_value": false,
      "site": "00b4ee10",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4de08",
      "incomplete_value": false,
      "site": "00b4de1c",
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
            "const:959:8"
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
      "00b4edec",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4edfc",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4ee18",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4edec",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4edfc",
      "PARAM",
      [
        "storage",
        "002b9a37",
        null,
        "string"
      ]
    ],
    [
      "00b4ee18",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4de1c ["INT_ADD", "register:40f0:8", ["const:b4de1c:8", "const:4:8"]]
- 00b4de1c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ee10 ["INT_ADD", "register:40f0:8", ["const:b4ee10:8", "const:4:8"]]
+ 00b4ee10 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4de24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
- 00b4de24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ee18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00b4ee18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ddf0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ede4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-be2c0dce973e554ca62ad5dba99da78a"></a>

### [`00b4de54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4de54.md) → [`00b4ee48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ee48.md) _ZN8firebase4util9throwable10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ee64",
      "incomplete_value": false,
      "site": "00b4ee68",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4de70",
      "incomplete_value": false,
      "site": "00b4de74",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4ee74",
      "incomplete_value": true,
      "site": "00b4ee80",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4de80",
      "incomplete_value": true,
      "site": "00b4de8c",
      "value": [
        "LOAD",
        "8",
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
      "00b4ee64",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4ee74",
      "DATA",
      [
        "storage",
        "01125e18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ee64",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4ee74",
      "DATA",
      [
        "storage",
        "01126dd8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4de74 ["INT_ADD", "register:40f0:8", ["const:b4de74:8", "const:4:8"]]
- 00b4de74 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4ee68 ["INT_ADD", "register:40f0:8", ["const:b4ee68:8", "const:4:8"]]
+ 00b4ee68 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4de70 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4de70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4de70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4de70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ee64 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4ee64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ee64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ee64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4de78 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4ee6c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-f8972fc187534e15e214d5fa344df03e"></a>

### [`00b4de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4de90.md) → [`00b4ee84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ee84.md) _ZN8firebase4util3uri19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4eeb0",
      "incomplete_value": true,
      "site": "00b4eeb0",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4debc",
      "incomplete_value": true,
      "site": "00b4debc",
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
            "const:e20:8"
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
      "definition_site": "00b4ee98",
      "incomplete_value": true,
      "site": "00b4ee98",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dea4",
      "incomplete_value": true,
      "site": "00b4dea4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4eea4",
      "incomplete_value": false,
      "site": "00b4eea8",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4deb0",
      "incomplete_value": false,
      "site": "00b4deb4",
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
            "const:119:8"
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
      "00b4ee94",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eea4",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4eeb0",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ee94",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eea4",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4eeb0",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4deb4 ["INT_ADD", "register:40f0:8", ["const:b4deb4:8", "const:4:8"]]
- 00b4deb4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4eea8 ["INT_ADD", "register:40f0:8", ["const:b4eea8:8", "const:4:8"]]
+ 00b4eea8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4debc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00b4debc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4eeb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00b4eeb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4de9c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ee90 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f3c6f52483e0c871a8b54681adbcda03"></a>

### [`00b4ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4ded0.md) → [`00b4eec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4eec4.md) _ZN8firebase4util3uri19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4eef0",
      "incomplete_value": true,
      "site": "00b4eef0",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4defc",
      "incomplete_value": true,
      "site": "00b4defc",
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
            "const:e20:8"
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
      "definition_site": "00b4eed8",
      "incomplete_value": true,
      "site": "00b4eed8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4dee4",
      "incomplete_value": true,
      "site": "00b4dee4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4eee0",
      "incomplete_value": false,
      "site": "00b4eee8",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4deec",
      "incomplete_value": false,
      "site": "00b4def4",
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
            "const:119:8"
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
      "00b4eed4",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eee0",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4eef0",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4eed4",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eee0",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4eef0",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4def4 ["INT_ADD", "register:40f0:8", ["const:b4def4:8", "const:4:8"]]
- 00b4def4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4eee8 ["INT_ADD", "register:40f0:8", ["const:b4eee8:8", "const:4:8"]]
+ 00b4eee8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4defc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00b4defc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4eef0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00b4eef0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dedc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4eed0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0c6007eebb8cc61717cf7c29dbc1d4ef"></a>

### [`00b4df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4df10.md) → [`00b4ef04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ef04.md) _ZN8firebase4util3uri10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4ef34",
      "incomplete_value": true,
      "site": "00b4ef34",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4df40",
      "incomplete_value": true,
      "site": "00b4df40",
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
            "const:e20:8"
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
      "definition_site": "00b4ef18",
      "incomplete_value": true,
      "site": "00b4ef18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4df24",
      "incomplete_value": true,
      "site": "00b4df24",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ef24",
      "incomplete_value": false,
      "site": "00b4ef2c",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4df30",
      "incomplete_value": false,
      "site": "00b4df38",
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
            "const:119:8"
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
      "00b4ef14",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ef24",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4ef34",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ef14",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ef24",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4ef34",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4df38 ["INT_ADD", "register:40f0:8", ["const:b4df38:8", "const:4:8"]]
- 00b4df38 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ef2c ["INT_ADD", "register:40f0:8", ["const:b4ef2c:8", "const:4:8"]]
+ 00b4ef2c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4df40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00b4df40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ef34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00b4ef34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4df1c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ef10 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-261828dc58bfac186999d4c53d43a1f0"></a>

### [`00b4df54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4df54.md) → [`00b4ef48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ef48.md) _ZN8firebase4util3uri10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4ef78",
      "incomplete_value": true,
      "site": "00b4ef78",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4df84",
      "incomplete_value": true,
      "site": "00b4df84",
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
            "const:e20:8"
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
      "definition_site": "00b4ef5c",
      "incomplete_value": true,
      "site": "00b4ef5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4df68",
      "incomplete_value": true,
      "site": "00b4df68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4ef64",
      "incomplete_value": false,
      "site": "00b4ef70",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4df70",
      "incomplete_value": false,
      "site": "00b4df7c",
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
            "const:119:8"
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
      "00b4ef58",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ef64",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4ef78",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ef58",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ef64",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4ef78",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4df7c ["INT_ADD", "register:40f0:8", ["const:b4df7c:8", "const:4:8"]]
- 00b4df7c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ef70 ["INT_ADD", "register:40f0:8", ["const:b4ef70:8", "const:4:8"]]
+ 00b4ef70 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4df84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00b4df84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ef78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00b4ef78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4df60 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ef54 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-fe7c8036ed6db2c5ad490b0d01ea1c23"></a>

### [`00b4dfa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dfa4.md) → [`00b4ef98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4e/00b4ef98.md) _ZN8firebase4util3uri15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4f020",
      "incomplete_value": true,
      "site": "00b4f020",
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
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e02c",
      "incomplete_value": true,
      "site": "00b4e02c",
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
            "const:e28:8"
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
      "definition_site": "00b4efcc",
      "incomplete_value": true,
      "site": "00b4efd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4dfd8",
      "incomplete_value": true,
      "site": "00b4dfe4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e20:8"
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
      "00b4efac",
      "READ",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4efcc",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f020",
      "WRITE",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4efac",
      "READ",
      [
        "storage",
        "01126de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4efcc",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f020",
      "WRITE",
      [
        "storage",
        "01126de8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dfe4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4dfe4 ["INT_ADD", "register:40f0:8", ["const:b4dfe4:8", "const:4:8"]]
- 00b4dfe4 ["CALLIND", null, ["register:0:8"]]
+ 00b4efd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4efd8 ["INT_ADD", "register:40f0:8", ["const:b4efd8:8", "const:4:8"]]
+ 00b4efd8 ["CALLIND", null, ["register:0:8"]]
- 00b4e02c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4e02c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e28:8"]]
- 00b4e02c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4f020 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4f020 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:de8:8"]]
+ 00b4f020 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4dfb4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4efa8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-934282d59b418833067d27eb49f63a9a"></a>

### [`00b4e040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e040.md) → [`00b4f034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f034.md) _ZN8firebase4util3uri12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4f070",
      "incomplete_value": true,
      "site": "00b4f070",
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
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e07c",
      "incomplete_value": true,
      "site": "00b4e07c",
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
            "const:e28:8"
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
      "definition_site": "00b4f0c0",
      "incomplete_value": true,
      "site": "00b4f0c0",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e0cc",
      "incomplete_value": true,
      "site": "00b4e0cc",
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
            "const:e20:8"
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
      "definition_site": "00b4f04c",
      "incomplete_value": true,
      "site": "00b4f04c",
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
      "definition_site": "00b4e058",
      "incomplete_value": true,
      "site": "00b4e058",
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
      "00b4f048",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f054",
      "READ",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f070",
      "WRITE",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4f048",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f054",
      "READ",
      [
        "storage",
        "01126de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f070",
      "WRITE",
      [
        "storage",
        "01126de8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e07c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4e07c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4e07c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e28:8"]]
- 00b4e07c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4f070 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4f070 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4f070 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:de8:8"]]
+ 00b4f070 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4e0c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4e0c8 ["INT_ADD", "register:40f0:8", ["const:b4e0c8:8", "const:4:8"]]
- 00b4e0c8 ["CALLIND", null, ["register:0:8"]]
+ 00b4f0bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4f0bc ["INT_ADD", "register:40f0:8", ["const:b4f0bc:8", "const:4:8"]]
+ 00b4f0bc ["CALLIND", null, ["register:0:8"]]
- 00b4e0cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00b4e0cc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4e0cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4f0c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00b4f0c0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4f0c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-aed95253b9fc6360688b919dd6ad99c0"></a>

### [`00b4e0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e0e0.md) → [`00b4f0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f0d4.md) _ZN8firebase4util3uri14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f114",
      "incomplete_value": true,
      "site": "00b4f114",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e120",
      "incomplete_value": true,
      "site": "00b4e120",
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
            "const:e20:8"
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
      "definition_site": "00b4f0f0",
      "incomplete_value": true,
      "site": "00b4f0f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e0fc",
      "incomplete_value": true,
      "site": "00b4e0fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f0f8",
      "incomplete_value": false,
      "site": "00b4f10c",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e104",
      "incomplete_value": false,
      "site": "00b4e118",
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
            "const:119:8"
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
      "00b4f0e8",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f0f8",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4f114",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f0e8",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f0f8",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4f114",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e118 ["INT_ADD", "register:40f0:8", ["const:b4e118:8", "const:4:8"]]
- 00b4e118 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f10c ["INT_ADD", "register:40f0:8", ["const:b4f10c:8", "const:4:8"]]
+ 00b4f10c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e120 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00b4e120 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f114 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00b4f114 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e0ec ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4f0e0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-95267396779ca16fd900362a62f649d9"></a>

### [`00b4e150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e150.md) → [`00b4f144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f144.md) _ZN8firebase4util3uri11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4f160",
      "incomplete_value": false,
      "site": "00b4f164",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e16c",
      "incomplete_value": false,
      "site": "00b4e170",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4f170",
      "incomplete_value": true,
      "site": "00b4f17c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4e17c",
      "incomplete_value": true,
      "site": "00b4e188",
      "value": [
        "LOAD",
        "8",
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
      "00b4f160",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4f170",
      "DATA",
      [
        "storage",
        "01125e30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f160",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4f170",
      "DATA",
      [
        "storage",
        "01126df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e170 ["INT_ADD", "register:40f0:8", ["const:b4e170:8", "const:4:8"]]
- 00b4e170 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4f164 ["INT_ADD", "register:40f0:8", ["const:b4f164:8", "const:4:8"]]
+ 00b4f164 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4e16c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4e16c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e16c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e16c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4f160 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4f160 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f160 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f160 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e174 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4f168 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c10087894a29b09f264680b3af5e58bb"></a>

### [`00b4e18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e18c.md) → [`00b4f180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f180.md) _ZN8firebase4util3uri13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f1c0",
      "incomplete_value": true,
      "site": "00b4f1c0",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e1cc",
      "incomplete_value": true,
      "site": "00b4e1cc",
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
            "const:e20:8"
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
      "definition_site": "00b4f19c",
      "incomplete_value": true,
      "site": "00b4f19c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e1a8",
      "incomplete_value": true,
      "site": "00b4e1a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f1a4",
      "incomplete_value": false,
      "site": "00b4f1b8",
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
            "const:271:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e1b0",
      "incomplete_value": false,
      "site": "00b4e1c4",
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
            "const:119:8"
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
      "00b4f194",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f1a4",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4f1c0",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f194",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f1a4",
      "PARAM",
      [
        "storage",
        "002a7271",
        null,
        "string"
      ]
    ],
    [
      "00b4f1c0",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e1c4 ["INT_ADD", "register:40f0:8", ["const:b4e1c4:8", "const:4:8"]]
- 00b4e1c4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f1b8 ["INT_ADD", "register:40f0:8", ["const:b4f1b8:8", "const:4:8"]]
+ 00b4f1b8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e1cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00b4e1cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f1c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00b4f1c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e198 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4f18c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-354bc25543f31311f3a37689251b87ea"></a>

### [`00b4e1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e1fc.md) → [`00b4f1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f1f0.md) _ZN8firebase4util3uri10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4f20c",
      "incomplete_value": false,
      "site": "00b4f210",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e218",
      "incomplete_value": false,
      "site": "00b4e21c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4f21c",
      "incomplete_value": true,
      "site": "00b4f228",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4e228",
      "incomplete_value": true,
      "site": "00b4e234",
      "value": [
        "LOAD",
        "8",
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
      "00b4f20c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4f21c",
      "DATA",
      [
        "storage",
        "01125e40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4f20c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4f21c",
      "DATA",
      [
        "storage",
        "01126e00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e21c ["INT_ADD", "register:40f0:8", ["const:b4e21c:8", "const:4:8"]]
- 00b4e21c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4f210 ["INT_ADD", "register:40f0:8", ["const:b4f210:8", "const:4:8"]]
+ 00b4f210 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4e218 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4e218 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e218 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e218 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4f20c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4f20c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f20c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f20c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e220 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4f214 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-7c0771b4ace92e15a40f20c123a1b21f"></a>

### [`00b4e238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e238.md) → [`00b4f22c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f22c.md) _ZN8firebase4util6object19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4f258",
      "incomplete_value": true,
      "site": "00b4f258",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e264",
      "incomplete_value": true,
      "site": "00b4e264",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4f240",
      "incomplete_value": true,
      "site": "00b4f240",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e24c",
      "incomplete_value": true,
      "site": "00b4e24c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f24c",
      "incomplete_value": false,
      "site": "00b4f250",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e258",
      "incomplete_value": false,
      "site": "00b4e25c",
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
            "const:f5:8"
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
      "00b4f23c",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f24c",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f258",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f23c",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f24c",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f258",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e25c ["INT_ADD", "register:40f0:8", ["const:b4e25c:8", "const:4:8"]]
- 00b4e25c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f250 ["INT_ADD", "register:40f0:8", ["const:b4f250:8", "const:4:8"]]
+ 00b4f250 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e264 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
- 00b4e264 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f258 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e08:8"]]
+ 00b4f258 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e244 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4f238 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f777917fe5df283ce9baa8c83d26fe1d"></a>

### [`00b4e278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e278.md) → [`00b4f26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f26c.md) _ZN8firebase4util6object19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4f298",
      "incomplete_value": true,
      "site": "00b4f298",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e2a4",
      "incomplete_value": true,
      "site": "00b4e2a4",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4f280",
      "incomplete_value": true,
      "site": "00b4f280",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e28c",
      "incomplete_value": true,
      "site": "00b4e28c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f288",
      "incomplete_value": false,
      "site": "00b4f290",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e294",
      "incomplete_value": false,
      "site": "00b4e29c",
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
            "const:f5:8"
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
      "00b4f27c",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f288",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f298",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f27c",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f288",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f298",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e29c ["INT_ADD", "register:40f0:8", ["const:b4e29c:8", "const:4:8"]]
- 00b4e29c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f290 ["INT_ADD", "register:40f0:8", ["const:b4f290:8", "const:4:8"]]
+ 00b4f290 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e2a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
- 00b4e2a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f298 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e08:8"]]
+ 00b4f298 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e284 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4f278 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a6bfc0ae9d011844f2bbaac88a1703bc"></a>

### [`00b4e2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e2b8.md) → [`00b4f2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f2ac.md) _ZN8firebase4util6object10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4f2dc",
      "incomplete_value": true,
      "site": "00b4f2dc",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e2e8",
      "incomplete_value": true,
      "site": "00b4e2e8",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4f2c0",
      "incomplete_value": true,
      "site": "00b4f2c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e2cc",
      "incomplete_value": true,
      "site": "00b4e2cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f2cc",
      "incomplete_value": false,
      "site": "00b4f2d4",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e2d8",
      "incomplete_value": false,
      "site": "00b4e2e0",
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
            "const:f5:8"
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
      "00b4f2bc",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f2cc",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f2dc",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f2bc",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f2cc",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f2dc",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e2e0 ["INT_ADD", "register:40f0:8", ["const:b4e2e0:8", "const:4:8"]]
- 00b4e2e0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f2d4 ["INT_ADD", "register:40f0:8", ["const:b4f2d4:8", "const:4:8"]]
+ 00b4f2d4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e2e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
- 00b4e2e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f2dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e08:8"]]
+ 00b4f2dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e2c4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4f2b8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-eb17b7a85f963bcdad13783584268c58"></a>

### [`00b4e2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e2fc.md) → [`00b4f2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f2f0.md) _ZN8firebase4util6object10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

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
      "definition_site": "00b4f320",
      "incomplete_value": true,
      "site": "00b4f320",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e32c",
      "incomplete_value": true,
      "site": "00b4e32c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4f304",
      "incomplete_value": true,
      "site": "00b4f304",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4e310",
      "incomplete_value": true,
      "site": "00b4e310",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b4f30c",
      "incomplete_value": false,
      "site": "00b4f318",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e318",
      "incomplete_value": false,
      "site": "00b4e324",
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
            "const:f5:8"
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
      "00b4f300",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f30c",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f320",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f300",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f30c",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f320",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e324 ["INT_ADD", "register:40f0:8", ["const:b4e324:8", "const:4:8"]]
- 00b4e324 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f318 ["INT_ADD", "register:40f0:8", ["const:b4f318:8", "const:4:8"]]
+ 00b4f318 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e32c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
- 00b4e32c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f320 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e08:8"]]
+ 00b4f320 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e308 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4f2fc ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-72893e62eb9df444f7bc28925e7f5a70"></a>

### [`00b4e34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e34c.md) → [`00b4f340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f340.md) _ZN8firebase4util6object15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4f3c8",
      "incomplete_value": true,
      "site": "00b4f3c8",
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
            "const:e10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e3d4",
      "incomplete_value": true,
      "site": "00b4e3d4",
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
            "const:e50:8"
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
      "definition_site": "00b4f374",
      "incomplete_value": true,
      "site": "00b4f380",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e380",
      "incomplete_value": true,
      "site": "00b4e38c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e48:8"
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
      "00b4f354",
      "READ",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f374",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f3c8",
      "WRITE",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4f354",
      "READ",
      [
        "storage",
        "01126e10",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f374",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f3c8",
      "WRITE",
      [
        "storage",
        "01126e10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e38c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4e38c ["INT_ADD", "register:40f0:8", ["const:b4e38c:8", "const:4:8"]]
- 00b4e38c ["CALLIND", null, ["register:0:8"]]
+ 00b4f380 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4f380 ["INT_ADD", "register:40f0:8", ["const:b4f380:8", "const:4:8"]]
+ 00b4f380 ["CALLIND", null, ["register:0:8"]]
- 00b4e3d4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4e3d4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e50:8"]]
- 00b4e3d4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4f3c8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4f3c8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e10:8"]]
+ 00b4f3c8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4e35c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4f350 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-5a8bb995fdb7a450ae16c4043e97fad9"></a>

### [`00b4e3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e3e8.md) → [`00b4f3dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f3dc.md) _ZN8firebase4util6object12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f418",
      "incomplete_value": true,
      "site": "00b4f418",
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
            "const:e10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e424",
      "incomplete_value": true,
      "site": "00b4e424",
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
            "const:e50:8"
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
      "definition_site": "00b4f468",
      "incomplete_value": true,
      "site": "00b4f468",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e474",
      "incomplete_value": true,
      "site": "00b4e474",
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
            "const:e48:8"
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
      "definition_site": "00b4f3f4",
      "incomplete_value": true,
      "site": "00b4f3f4",
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
      "definition_site": "00b4e400",
      "incomplete_value": true,
      "site": "00b4e400",
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
      "00b4f3f0",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f3fc",
      "READ",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f418",
      "WRITE",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4f3f0",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f3fc",
      "READ",
      [
        "storage",
        "01126e10",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4f418",
      "WRITE",
      [
        "storage",
        "01126e10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e424 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4e424 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4e424 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e50:8"]]
- 00b4e424 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4f418 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4f418 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4f418 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e10:8"]]
+ 00b4f418 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4e470 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4e470 ["INT_ADD", "register:40f0:8", ["const:b4e470:8", "const:4:8"]]
- 00b4e470 ["CALLIND", null, ["register:0:8"]]
+ 00b4f464 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4f464 ["INT_ADD", "register:40f0:8", ["const:b4f464:8", "const:4:8"]]
+ 00b4f464 ["CALLIND", null, ["register:0:8"]]
- 00b4e474 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e48:8"]]
- 00b4e474 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4e474 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4f468 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e08:8"]]
+ 00b4f468 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4f468 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ebebb05eb93d676a5ccd63363a280f90"></a>

### [`00b4e488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e488.md) → [`00b4f47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f47c.md) _ZN8firebase4util6object14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f4bc",
      "incomplete_value": true,
      "site": "00b4f4bc",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e4c8",
      "incomplete_value": true,
      "site": "00b4e4c8",
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
            "const:e48:8"
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
      "definition_site": "00b4f4a0",
      "incomplete_value": false,
      "site": "00b4f4b4",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e4ac",
      "incomplete_value": false,
      "site": "00b4e4c0",
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
            "const:f5:8"
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
      "00b4f490",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f4a0",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f4bc",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f490",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f4a0",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f4bc",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e4c0 ["INT_ADD", "register:40f0:8", ["const:b4e4c0:8", "const:4:8"]]
- 00b4e4c0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f4b4 ["INT_ADD", "register:40f0:8", ["const:b4f4b4:8", "const:4:8"]]
+ 00b4f4b4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e4c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e48:8"]]
- 00b4e4c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f4bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e08:8"]]
+ 00b4f4bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e494 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4f488 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-a3235ba81b64d024887d0651bd06e712"></a>

### [`00b4e4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e4f8.md) → [`00b4f4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f4ec.md) _ZN8firebase4util6object11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4f508",
      "incomplete_value": false,
      "site": "00b4f50c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e514",
      "incomplete_value": false,
      "site": "00b4e518",
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
      "00b4f508",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4f518",
      "DATA",
      [
        "storage",
        "01125e58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f508",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4f518",
      "DATA",
      [
        "storage",
        "01126e18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e518 ["INT_ADD", "register:40f0:8", ["const:b4e518:8", "const:4:8"]]
- 00b4e518 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4f50c ["INT_ADD", "register:40f0:8", ["const:b4f50c:8", "const:4:8"]]
+ 00b4f50c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4e514 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4e514 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e514 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e514 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4f508 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4f508 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f508 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f508 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e51c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4f510 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-75f37f7ae2b814f9e35866d914495f24"></a>

### [`00b4e534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e534.md) → [`00b4f528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f528.md) _ZN8firebase4util6object13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f568",
      "incomplete_value": true,
      "site": "00b4f568",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e574",
      "incomplete_value": true,
      "site": "00b4e574",
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
            "const:e48:8"
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
      "definition_site": "00b4f54c",
      "incomplete_value": false,
      "site": "00b4f560",
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
            "const:1c2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e558",
      "incomplete_value": false,
      "site": "00b4e56c",
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
            "const:f5:8"
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
      "00b4f53c",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f54c",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4f568",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f53c",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4f54c",
      "PARAM",
      [
        "storage",
        "002ae1c2",
        null,
        "string"
      ]
    ],
    [
      "00b4f568",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e56c ["INT_ADD", "register:40f0:8", ["const:b4e56c:8", "const:4:8"]]
- 00b4e56c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f560 ["INT_ADD", "register:40f0:8", ["const:b4f560:8", "const:4:8"]]
+ 00b4f560 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e574 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e48:8"]]
- 00b4e574 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f568 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e08:8"]]
+ 00b4f568 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e540 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4f534 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-01dbfd418fe568473f15ef8634974d61"></a>

### [`00b4e5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5a4.md) → [`00b4f598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f598.md) _ZN8firebase4util6object10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4f5b4",
      "incomplete_value": false,
      "site": "00b4f5b8",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e5c0",
      "incomplete_value": false,
      "site": "00b4e5c4",
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
      "00b4f5b4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4f5c4",
      "DATA",
      [
        "storage",
        "01125e60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4f5b4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4f5c4",
      "DATA",
      [
        "storage",
        "01126e20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e5c4 ["INT_ADD", "register:40f0:8", ["const:b4e5c4:8", "const:4:8"]]
- 00b4e5c4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4f5b8 ["INT_ADD", "register:40f0:8", ["const:b4f5b8:8", "const:4:8"]]
+ 00b4f5b8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4e5c0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4e5c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e5c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e5c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4f5b4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4f5b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f5b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4f5b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e5c8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4f5bc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-32e42b3a6fdd0a56198053de8cda872b"></a>

### [`00b4e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5e0.md) → [`00b4f5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f5d4.md) _ZN8firebase4util25InitializeActivityClassesEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5c0.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b4eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4eb50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5c590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c590.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00b4fb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4fb44.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.08% / 新版 87.08%

優先判定に残った影響 `branch_value` 4件, `call_argument_candidate` 10件, `store_condition` 2件, `store_destination` 9件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f600",
      "incomplete_value": false,
      "site": "00b4f600",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e60c",
      "incomplete_value": false,
      "site": "00b4e60c",
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
            "const:e68:8"
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
      "definition_site": "00b4f644",
      "incomplete_value": true,
      "site": "00b4f644",
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
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e650",
      "incomplete_value": true,
      "site": "00b4e650",
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
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f69c",
      "incomplete_value": true,
      "site": "00b4f69c",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e6a8",
      "incomplete_value": true,
      "site": "00b4e6a8",
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
            "const:728:8"
          ]
        ]
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
      "00b4f5f4",
      "READ",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f600",
      "WRITE",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f618",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4f5f4",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f600",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f618",
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
- 00b4e60c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:e68:8"]]
- 00b4e60c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b4f600 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:e28:8"]]
+ 00b4f600 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b4e648 ["INT_ADD", "register:40f0:8", ["const:b4e648:8", "const:4:8"]]
- 00b4e648 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4f63c ["INT_ADD", "register:40f0:8", ["const:b4f63c:8", "const:4:8"]]
+ 00b4f63c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4e650 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:8c8:8"]]
- 00b4e650 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4f644 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:888:8"]]
+ 00b4f644 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-324b4701db44dea0825daf0dd986dca1"></a>

### [`00b4e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e9a0.md) → [`00b4f994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f994.md) _ZN8firebase4util24TerminateActivityClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5b0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c580.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 3件, `store_destination` 6件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f9c8",
      "incomplete_value": true,
      "site": "00b4f9c8",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e9d4",
      "incomplete_value": true,
      "site": "00b4e9d4",
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
            "const:e68:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f9f8",
      "incomplete_value": true,
      "site": "00b4f9f8",
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
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ea04",
      "incomplete_value": true,
      "site": "00b4ea04",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4fa48",
      "incomplete_value": true,
      "site": "00b4fa48",
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
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ea54",
      "incomplete_value": true,
      "site": "00b4ea54",
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
            "const:8c8:8"
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
      "00b4f9a8",
      "READ",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f9b8",
      "PARAM",
      [
        "storage",
        "002bd0aa",
        null,
        "string"
      ]
    ],
    [
      "00b4f9c0",
      "READ",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b4f9a8",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4f9b8",
      "PARAM",
      [
        "storage",
        "002bd188",
        null,
        "string"
      ]
    ],
    [
      "00b4f9c0",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e9c8 ["INT_ADD", "register:40f0:8", ["const:b4e9c8:8", "const:4:8"]]
- 00b4e9c8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4f9bc ["INT_ADD", "register:40f0:8", ["const:b4f9bc:8", "const:4:8"]]
+ 00b4f9bc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4e9d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e68:8"]]
- 00b4e9d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b4f9c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e28:8"]]
+ 00b4f9c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b4ea04 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4ea04 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4ea04 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8d0:8"]]
- 00b4ea04 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4f9f8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4f9f8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4f9f8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:890:8"]]
+ 00b4f9f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-29e2ffc4e91e3754b0a2a1aae14e6ab0"></a>

### [`00b4eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4eb50.md) → [`00b4fb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4fb44.md) FUN_00b4fb44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b4e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5e0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b4f5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4f5d4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4fbc0",
      "incomplete_value": true,
      "site": "00b4fbc0",
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
            "const:e30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ebcc",
      "incomplete_value": true,
      "site": "00b4ebcc",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4fb68",
      "incomplete_value": true,
      "site": "00b4fb6c",
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
      "definition_site": "00b4eb74",
      "incomplete_value": true,
      "site": "00b4eb78",
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
      "00b4fb58",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fb88",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fbc0",
      "WRITE",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4fb58",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fb88",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fbc0",
      "WRITE",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ebcc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e70:8"]]
- 00b4ebcc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4ebcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4fbc0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e30:8"]]
+ 00b4fbc0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4fbc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b4eb60 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4fb54 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b4eb64 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e70:8"]]
- 00b4eb64 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4fb58 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e30:8"]]
+ 00b4fb58 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b0c1166097206764443b1a0fddc79639"></a>

### [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) → [`00b4fbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4fbcc.md) _ZN8firebase4util10InitializeEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md) · 呼出先 13件 [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5bf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf40.md) · 呼出先 13件 [`00b50c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b50/00b50c50.md) [`00b51e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b51/00b51e74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 80.42% / 新版 80.42%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 120件, `store_condition` 1件, `store_destination` 46件

アドレスに依存する影響 `branch_value` 33件, `store_condition` 33件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4fc04",
      "incomplete_value": true,
      "site": "00b4fc04",
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
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ec10",
      "incomplete_value": true,
      "site": "00b4ec10",
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
            "const:e78:8"
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
      "definition_site": "00b4fc4c",
      "incomplete_value": true,
      "site": "00b4fc4c",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ec58",
      "incomplete_value": true,
      "site": "00b4ec58",
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
            "const:930:8"
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
      "definition_site": "00b4fca4",
      "incomplete_value": true,
      "site": "00b4fca4",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ecb0",
      "incomplete_value": true,
      "site": "00b4ecb0",
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
            "const:960:8"
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
      "00b4fbf8",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4fc04",
      "WRITE",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4fc24",
      "READ",
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
      "00b4fbf8",
      "READ",
      [
        "storage",
        "01126e38",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4fc04",
      "WRITE",
      [
        "storage",
        "01126e38",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4fc24",
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
- 00b4ec10 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e78:8"]]
- 00b4ec10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b4fc04 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e38:8"]]
+ 00b4fc04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b4ec58 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:930:8"]]
- 00b4ec58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4fc4c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:8f0:8"]]
+ 00b4fc4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ecb0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:960:8"]]
- 00b4ecb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4fca4 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:920:8"]]
+ 00b4fca4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-e0307260cba7b6a656fe3d14700aba9e"></a>

### [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) → [`00b50c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b50/00b50c50.md) FUN_00b50c50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) · 呼出先 1件 [`00c5b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b450.md)
- 新版 呼出元 2件 [`00b4fbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4fbcc.md) [`00b51e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b51/00b51e74.md) · 呼出先 1件 [`00c5c420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c420.md)

変更の種類 branch_value, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 12.06% / 新版 12.06%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件, `unresolved_branch_alignment` 94件, `unresolved_call_alignment` 167件, `unresolved_store_alignment` 68件

アドレスに依存する影響 `branch_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b512ac",
      "incomplete_value": true,
      "site": "00b512ac",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b502b8",
      "incomplete_value": true,
      "site": "00b502b8",
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
    "ordinal": 31,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b512d8",
      "incomplete_value": true,
      "site": "00b512d8",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b502e4",
      "incomplete_value": true,
      "site": "00b502e4",
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
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b51328",
      "incomplete_value": true,
      "site": "00b51328",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b50334",
      "incomplete_value": true,
      "site": "00b50334",
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
    "ordinal": 33,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b50c64",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b50c6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4fcec"
      ]
    ],
    [
      "00b50c74",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b50c64",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b50c6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b50ce0"
      ]
    ],
    [
      "00b50c74",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b502b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b502b4 ["INT_ADD", "register:40f0:8", ["const:b502b4:8", "const:4:8"]]
- 00b502b4 ["CALLIND", null, ["register:0:8"]]
+ 00b512a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b512a8 ["INT_ADD", "register:40f0:8", ["const:b512a8:8", "const:4:8"]]
+ 00b512a8 ["CALLIND", null, ["register:0:8"]]
- 00b502b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00b502b8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b502b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b512ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b00:8"]]
+ 00b512ac ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b512ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b502e4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b502e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b502e4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b70:8"]]
- 00b502e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b512d8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b512d8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b512d8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b30:8"]]
+ 00b512d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-f3b9ab24f82f7e338c59255fc9edd762"></a>

### [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) → [`00b51e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b51/00b51e74.md) _ZN8firebase4util9TerminateEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md) · 呼出先 10件 [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)
- 新版 呼出元 2件 [`00b4fbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4f/00b4fbcc.md) [`00c5c070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c070.md) · 呼出先 10件 [`00b50c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b50/00b50c50.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfa0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2e0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.14% / 新版 87.14%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b51ea8",
      "incomplete_value": true,
      "site": "00b51ea8",
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
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b50eb4",
      "incomplete_value": true,
      "site": "00b50eb4",
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
            "const:e78:8"
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
      "definition_site": "00b51f0c",
      "incomplete_value": true,
      "site": "00b51f0c",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b50f18",
      "incomplete_value": true,
      "site": "00b50f18",
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
            "const:e80:8"
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
      "definition_site": "00b51ec8",
      "incomplete_value": true,
      "site": "00b51ec8",
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
      "definition_site": "00b50ed4",
      "incomplete_value": true,
      "site": "00b50ed4",
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
      "00b51e88",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b51e98",
      "PARAM",
      [
        "storage",
        "002a0a6b",
        null,
        "string"
      ]
    ],
    [
      "00b51ea0",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b51e88",
      "READ",
      [
        "storage",
        "01126e38",
        null,
        "undefined4"
      ]
    ],
    [
      "00b51e98",
      "PARAM",
      [
        "storage",
        "002a0aab",
        null,
        "string"
      ]
    ],
    [
      "00b51ea0",
      "READ",
      [
        "storage",
        "01126e38",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b50ea8 ["INT_ADD", "register:40f0:8", ["const:b50ea8:8", "const:4:8"]]
- 00b50ea8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b51e9c ["INT_ADD", "register:40f0:8", ["const:b51e9c:8", "const:4:8"]]
+ 00b51e9c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b50eb4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e78:8"]]
- 00b50eb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b51ea8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e38:8"]]
+ 00b51ea8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b50eec ["INT_ADD", "register:40f0:8", ["const:b50eec:8", "const:4:8"]]
- 00b50eec ["CALL", null, ["callee:00c5c740:8"]]
+ 00b51ee0 ["INT_ADD", "register:40f0:8", ["const:b51ee0:8", "const:4:8"]]
+ 00b51ee0 ["CALL", null, ["callee:00c5c740:8"]]
~~~


<a id="compare-f37516d0b17aff8bbcf57505d890779d"></a>

### [`00b50f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50f98.md) → [`00b51f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b51/00b51f8c.md) _ZN8firebase4util18CacheEmbeddedFilesEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b470.md) · 呼出先 6件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md)
- 新版 呼出元 1件 [`00c5c440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c440.md) · 呼出先 6件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b51fb0",
      "incomplete_value": true,
      "site": "00b51fb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b50fbc",
      "incomplete_value": true,
      "site": "00b50fc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b52010",
      "incomplete_value": false,
      "site": "00b52014",
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
            "const:529:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5101c",
      "incomplete_value": false,
      "site": "00b51020",
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
            "const:4df:8"
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
      "definition_site": "00b52030",
      "incomplete_value": true,
      "site": "00b5204c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5103c",
      "incomplete_value": true,
      "site": "00b51058",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b51fb0",
      "READ",
      [
        "storage",
        "011258e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52010",
      "PARAM",
      [
        "storage",
        "002b34df",
        null,
        "string"
      ]
    ],
    [
      "00b52030",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b51fb0",
      "READ",
      [
        "storage",
        "011268a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52010",
      "PARAM",
      [
        "storage",
        "002b3529",
        null,
        "string"
      ]
    ],
    [
      "00b52030",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b50fc4 ["INT_ADD", "register:40f0:8", ["const:b50fc4:8", "const:4:8"]]
- 00b50fc4 ["CALL", null, ["callee:00497b94:8"]]
+ 00b51fb8 ["INT_ADD", "register:40f0:8", ["const:b51fb8:8", "const:4:8"]]
+ 00b51fb8 ["CALL", null, ["callee:00497b94:8"]]
- 00b51020 ["INT_ADD", "register:40f0:8", ["const:b51020:8", "const:4:8"]]
- 00b51020 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b52014 ["INT_ADD", "register:40f0:8", ["const:b52014:8", "const:4:8"]]
+ 00b52014 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b51058 ["INT_ADD", "register:40f0:8", ["const:b51058:8", "const:4:8"]]
- 00b51058 ["CALL", null, ["callee:00589a54:8"]]
+ 00b5204c ["INT_ADD", "register:40f0:8", ["const:b5204c:8", "const:4:8"]]
+ 00b5204c ["CALL", null, ["callee:00589a54:8"]]
~~~


<a id="compare-5e6155e7d0b4d6ddddc4ffce7b8d7221"></a>

### [`00b51438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51438.md) → [`00b5242c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b5242c.md) _ZN8firebase4util17JavaThreadContext10InitializeEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b420.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5c3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3f0.md) · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 7件, `store_condition` 1件, `store_destination` 3件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b52478",
      "incomplete_value": true,
      "site": "00b52478",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51484",
      "incomplete_value": true,
      "site": "00b51484",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b52518",
      "incomplete_value": true,
      "site": "00b52518",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51524",
      "incomplete_value": true,
      "site": "00b51524",
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
            "const:780:8"
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
      "definition_site": "00b52564",
      "incomplete_value": true,
      "site": "00b52564",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51570",
      "incomplete_value": true,
      "site": "00b51570",
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
            "const:7b0:8"
          ]
        ]
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
      "00b52448",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5245c",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b52478",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b52448",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5245c",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b52478",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5147c ["INT_ADD", "register:40f0:8", ["const:b5147c:8", "const:4:8"]]
- 00b5147c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b52470 ["INT_ADD", "register:40f0:8", ["const:b52470:8", "const:4:8"]]
+ 00b52470 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b51484 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:778:8"]]
- 00b51484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b52478 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:738:8"]]
+ 00b52478 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b514ac ["INT_ADD", "register:40f0:8", ["const:b514ac:8", "const:4:8"]]
- 00b514ac ["CALL", null, ["callee:00c5bfd0:8"]]
+ 00b524a0 ["INT_ADD", "register:40f0:8", ["const:b524a0:8", "const:4:8"]]
+ 00b524a0 ["CALL", null, ["callee:00c5bfd0:8"]]
~~~


<a id="compare-114c30b2f555b836ac959818b7848d69"></a>

### [`00b515ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b515ac.md) → [`00b525a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b525a0.md) _ZN8firebase4util15CancelCallbacksEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) · 呼出先 7件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6d0.md)
- 新版 呼出元 1件 [`00c5bfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfa0.md) · 呼出先 7件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5c6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.80% / 新版 92.80%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b525d8",
      "incomplete_value": true,
      "site": "00b525dc",
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
            "const:826:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b515e4",
      "incomplete_value": true,
      "site": "00b515e8",
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
            "const:748:8"
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
      "definition_site": "00b52724",
      "incomplete_value": true,
      "site": "00b52730",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
    "old": {
      "definition_site": "00b51730",
      "incomplete_value": true,
      "site": "00b5173c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
      "00b525d4",
      "PARAM",
      [
        "storage",
        "002bd0c7",
        null,
        "string"
      ]
    ],
    [
      "00b525d8",
      "PARAM",
      [
        "storage",
        "002bf748",
        null,
        "string"
      ]
    ],
    [
      "00b52608",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b525d4",
      "PARAM",
      [
        "storage",
        "002bd1a5",
        null,
        "string"
      ]
    ],
    [
      "00b525d8",
      "PARAM",
      [
        "storage",
        "002bf826",
        null,
        "string"
      ]
    ],
    [
      "00b52608",
      "PARAM",
      [
        "storage",
        "01126e48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b515e8 ["INT_ADD", "register:40f0:8", ["const:b515e8:8", "const:4:8"]]
- 00b515e8 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b525dc ["INT_ADD", "register:40f0:8", ["const:b525dc:8", "const:4:8"]]
+ 00b525dc ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b5173c ["INT_ADD", "register:40f0:8", ["const:b5173c:8", "const:4:8"]]
- 00b5173c ["CALL", null, ["callee:0057504c:8"]]
+ 00b52730 ["INT_ADD", "register:40f0:8", ["const:b52730:8", "const:4:8"]]
+ 00b52730 ["CALL", null, ["callee:0057504c:8"]]
- 00b515d0 ["COPY", "tmp:0:8", ["const:c7:8"]]
- 00b515d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b515d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b515d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b525c4 ["COPY", "tmp:0:8", ["const:1a5:8"]]
+ 00b525c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b525c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b525c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-27b1d0e3129ea4189130fce00b36088f"></a>

### [`00b518d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b518d4.md) → [`00b528c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b528c8.md) _ZN8firebase4util19StdVectorToJavaListEP7_JNIEnvRKNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_ISA_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4f0.md) · 呼出先 2件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)
- 新版 呼出元 1件 [`00c5c4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4c0.md) · 呼出先 2件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b528ec",
      "incomplete_value": true,
      "site": "00b528f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b518f8",
      "incomplete_value": true,
      "site": "00b51904",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b528f0",
      "incomplete_value": true,
      "site": "00b528f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b518fc",
      "incomplete_value": true,
      "site": "00b51904",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:940:8"
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
      "00b528ec",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b528f0",
      "READ",
      [
        "storage",
        "01125940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5290c",
      "READ",
      [
        "storage",
        "01125950",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b528ec",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b528f0",
      "READ",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5290c",
      "READ",
      [
        "storage",
        "01126910",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51904 ["INT_ADD", "register:40f0:8", ["const:b51904:8", "const:4:8"]]
- 00b51904 ["CALL", null, ["callee:00589a54:8"]]
+ 00b528f8 ["INT_ADD", "register:40f0:8", ["const:b528f8:8", "const:4:8"]]
+ 00b528f8 ["CALL", null, ["callee:00589a54:8"]]
- 00b518e8 ["COPY", "register:40b0:8", ["const:1125000:8"]]
+ 00b528dc ["COPY", "register:40b0:8", ["const:1126000:8"]]
- 00b518ec ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b528e0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-519ed57be79e71c2884398f39966169b"></a>

### [`00b519dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b519dc.md) → [`00b529d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b529d0.md) _ZN8firebase4util25StdUnorderedSetToJavaListEP7_JNIEnvRKNSt6__ndk113unordered_setINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b529f4",
      "incomplete_value": true,
      "site": "00b52a00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b51a00",
      "incomplete_value": true,
      "site": "00b51a0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b529f8",
      "incomplete_value": true,
      "site": "00b52a00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b51a04",
      "incomplete_value": true,
      "site": "00b51a0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:940:8"
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
      "00b529f4",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b529f8",
      "READ",
      [
        "storage",
        "01125940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52a10",
      "READ",
      [
        "storage",
        "01125950",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b529f4",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b529f8",
      "READ",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52a10",
      "READ",
      [
        "storage",
        "01126910",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51a0c ["INT_ADD", "register:40f0:8", ["const:b51a0c:8", "const:4:8"]]
- 00b51a0c ["CALL", null, ["callee:00589a54:8"]]
+ 00b52a00 ["INT_ADD", "register:40f0:8", ["const:b52a00:8", "const:4:8"]]
+ 00b52a00 ["CALL", null, ["callee:00589a54:8"]]
- 00b519f0 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b529e4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b519f4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b529e8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-72b5c31724b6aed6d02ad746eb9314be"></a>

### [`00b51ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51ad4.md) → [`00b52ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52ac8.md) _ZN8firebase4util19VariantMapToJavaMapEP7_JNIEnvRKNSt6__ndk13mapINS_7VariantES5_NS3_4lessIS5_EENS3_9allocatorINS3_4pairIKS5_S5_EEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b500.md) · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b510.md)
- 新版 呼出元 1件 [`00c5c4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4d0.md) · 呼出先 3件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5c4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.85% / 新版 97.85%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b52aec",
      "incomplete_value": true,
      "site": "00b52af8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51af8",
      "incomplete_value": true,
      "site": "00b51b04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00b52af0",
      "incomplete_value": true,
      "site": "00b52af8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51afc",
      "incomplete_value": true,
      "site": "00b51b04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c20:8"
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
      "00b52aec",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52af0",
      "READ",
      [
        "storage",
        "01125c20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52b00",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b52aec",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52af0",
      "READ",
      [
        "storage",
        "01126be0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52b00",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51b04 ["INT_ADD", "register:40f0:8", ["const:b51b04:8", "const:4:8"]]
- 00b51b04 ["CALL", null, ["callee:00589a54:8"]]
+ 00b52af8 ["INT_ADD", "register:40f0:8", ["const:b52af8:8", "const:4:8"]]
+ 00b52af8 ["CALL", null, ["callee:00589a54:8"]]
- 00b51aec ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b52ae0 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b51af0 ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b52ae4 ["COPY", "register:4048:8", ["const:1126000:8"]]
~~~


<a id="compare-a73ca008b6014a0be3d19139c1c378b1"></a>

### [`00b51c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51c48.md) → [`00b52c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52c3c.md) _ZN8firebase4util19VariantToJavaObjectEP7_JNIEnvRKNS_7VariantE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b510.md) · 呼出先 7件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b500.md)
- 新版 呼出元 1件 [`00c5c4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4e0.md) · 呼出先 7件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bba0.md) [`00c5bbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bbc0.md) [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5c4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.09% / 新版 92.09%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b52e48",
      "incomplete_value": false,
      "site": "00b52e4c",
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
            "const:4a3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51e54",
      "incomplete_value": false,
      "site": "00b51e58",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b52c6c",
      "DATA",
      [
        "storage",
        "0030b63a",
        "switchD_00b51c84::switchdataD_0030b63a",
        "byte"
      ]
    ],
    [
      "00b52cc0",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52cc4",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b52c6c",
      "DATA",
      [
        "storage",
        "0030b67a",
        "switchD_00b52c78::switchdataD_0030b67a",
        "byte"
      ]
    ],
    [
      "00b52cc0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52cc4",
      "READ",
      [
        "storage",
        "01126ce0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51e58 ["INT_ADD", "register:40f0:8", ["const:b51e58:8", "const:4:8"]]
- 00b51e58 ["CALL", null, ["callee:00c5be80:8"]]
+ 00b52e4c ["INT_ADD", "register:40f0:8", ["const:b52e4c:8", "const:4:8"]]
+ 00b52e4c ["CALL", null, ["callee:00c5be80:8"]]
- 00b51c70 ["COPY", "tmp:0:8", ["const:63a:8"]]
- 00b51c70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b51c70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b51c70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b52c64 ["COPY", "tmp:0:8", ["const:67a:8"]]
+ 00b52c64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b52c64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b52c64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b51c74 ["COPY", "register:4050:8", ["const:b51c88:8"]]
~~~


<a id="compare-eadcfb209c66a4fe1d87fda95c0f235a"></a>

### [`00b52174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52174.md) → [`00b53168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b53168.md) _ZN8firebase4util15JavaMapToStdMapEP7_JNIEnvPNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.34% / 新版 99.34%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b531a8",
      "incomplete_value": true,
      "site": "00b531b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b521b4",
      "incomplete_value": true,
      "site": "00b521bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
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
      "definition_site": "00b531f4",
      "incomplete_value": true,
      "site": "00b53200",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52200",
      "incomplete_value": true,
      "site": "00b5220c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d98:8"
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
      "definition_site": "00b53244",
      "incomplete_value": true,
      "site": "00b53254",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52250",
      "incomplete_value": true,
      "site": "00b52260",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "00b531a8",
      "READ",
      [
        "storage",
        "01125d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b531f4",
      "READ",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53244",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b531a8",
      "READ",
      [
        "storage",
        "01126d18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b531f4",
      "READ",
      [
        "storage",
        "01126d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53244",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b521bc ["INT_ADD", "register:40f0:8", ["const:b521bc:8", "const:4:8"]]
- 00b521bc ["CALL", null, ["callee:00497b94:8"]]
+ 00b531b0 ["INT_ADD", "register:40f0:8", ["const:b531b0:8", "const:4:8"]]
+ 00b531b0 ["CALL", null, ["callee:00497b94:8"]]
- 00b5220c ["INT_ADD", "register:40f0:8", ["const:b5220c:8", "const:4:8"]]
- 00b5220c ["CALL", null, ["callee:00497b94:8"]]
+ 00b53200 ["INT_ADD", "register:40f0:8", ["const:b53200:8", "const:4:8"]]
+ 00b53200 ["CALL", null, ["callee:00497b94:8"]]
- 00b52260 ["INT_ADD", "register:40f0:8", ["const:b52260:8", "const:4:8"]]
- 00b52260 ["CALL", null, ["callee:00497da8:8"]]
+ 00b53254 ["INT_ADD", "register:40f0:8", ["const:b53254:8", "const:4:8"]]
+ 00b53254 ["CALL", null, ["callee:00497da8:8"]]
~~~


<a id="compare-4e94ae963b1275920fadbd0d0096ad53"></a>

### [`00b5274c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b5274c.md) → [`00b53740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b53740.md) FUN_00b53740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b52748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52748.md) [`00b52a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52a50.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)
- 新版 呼出元 2件 [`00b5373c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b5373c.md) [`00b53a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b53a44.md) · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b990.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.45% / 新版 98.45%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53780",
      "incomplete_value": true,
      "site": "00b53788",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5278c",
      "incomplete_value": true,
      "site": "00b52794",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
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
      "definition_site": "00b537cc",
      "incomplete_value": true,
      "site": "00b537d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b527d8",
      "incomplete_value": true,
      "site": "00b527e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d98:8"
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
      "definition_site": "00b5381c",
      "incomplete_value": true,
      "site": "00b5382c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52828",
      "incomplete_value": true,
      "site": "00b52838",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "00b53780",
      "READ",
      [
        "storage",
        "01125d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b537cc",
      "READ",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5381c",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b53780",
      "READ",
      [
        "storage",
        "01126d18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b537cc",
      "READ",
      [
        "storage",
        "01126d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5381c",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b52794 ["INT_ADD", "register:40f0:8", ["const:b52794:8", "const:4:8"]]
- 00b52794 ["CALL", null, ["callee:00497b94:8"]]
+ 00b53788 ["INT_ADD", "register:40f0:8", ["const:b53788:8", "const:4:8"]]
+ 00b53788 ["CALL", null, ["callee:00497b94:8"]]
- 00b527e4 ["INT_ADD", "register:40f0:8", ["const:b527e4:8", "const:4:8"]]
- 00b527e4 ["CALL", null, ["callee:00497b94:8"]]
+ 00b537d8 ["INT_ADD", "register:40f0:8", ["const:b537d8:8", "const:4:8"]]
+ 00b537d8 ["CALL", null, ["callee:00497b94:8"]]
- 00b52838 ["INT_ADD", "register:40f0:8", ["const:b52838:8", "const:4:8"]]
- 00b52838 ["CALL", null, ["callee:00497da8:8"]]
+ 00b5382c ["INT_ADD", "register:40f0:8", ["const:b5382c:8", "const:4:8"]]
+ 00b5382c ["CALL", null, ["callee:00497da8:8"]]
~~~


<a id="compare-e614c20f826e7bc6f77c17f0b971c170"></a>

### [`00b52a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52a50.md) → [`00b53a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b53/00b53a44.md) _ZN8firebase4util19JavaObjectToVariantEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4e0.md) · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`0057be4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057be4c.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md)
- 新版 呼出元 1件 [`00c5c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4b0.md) · 呼出先 19件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`0057c16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c16c.md) [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.56% / 新版 99.56%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53a7c",
      "incomplete_value": true,
      "site": "00b53a8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52a88",
      "incomplete_value": true,
      "site": "00b52a98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
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
      "definition_site": "00b53ad8",
      "incomplete_value": true,
      "site": "00b53ae8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52ae4",
      "incomplete_value": true,
      "site": "00b52af4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53b64",
      "incomplete_value": true,
      "site": "00b53b74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:940:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b52b70",
      "incomplete_value": true,
      "site": "00b52b80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:980:8"
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
      "00b53a7c",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53ad8",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53af8",
      "READ",
      [
        "storage",
        "01125b30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b53a7c",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53ad8",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53af8",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b52a98 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b52a98 ["INT_ADD", "register:40f0:8", ["const:b52a98:8", "const:4:8"]]
- 00b52a98 ["CALLIND", null, ["register:0:8"]]
+ 00b53a8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b53a8c ["INT_ADD", "register:40f0:8", ["const:b53a8c:8", "const:4:8"]]
+ 00b53a8c ["CALLIND", null, ["register:0:8"]]
- 00b52af4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b52af4 ["INT_ADD", "register:40f0:8", ["const:b52af4:8", "const:4:8"]]
- 00b52af4 ["CALLIND", null, ["register:0:8"]]
+ 00b53ae8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b53ae8 ["INT_ADD", "register:40f0:8", ["const:b53ae8:8", "const:4:8"]]
+ 00b53ae8 ["CALLIND", null, ["register:0:8"]]
- 00b52b80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b52b80 ["INT_ADD", "register:40f0:8", ["const:b52b80:8", "const:4:8"]]
- 00b52b80 ["CALLIND", null, ["register:0:8"]]
+ 00b53b74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b53b74 ["INT_ADD", "register:40f0:8", ["const:b53b74:8", "const:4:8"]]
+ 00b53b74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c223103f2e8fede29d02f4d90850b9be"></a>

### [`00b53168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53168.md) → [`00b5415c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b5415c.md) _ZN8firebase4util24JavaSetToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_ISA

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5a0.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c570.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.12% / 新版 98.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5419c",
      "incomplete_value": true,
      "site": "00b541a4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b531a8",
      "incomplete_value": true,
      "site": "00b531b0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
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
      "00b5419c",
      "READ",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b541e8",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5420c",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5419c",
      "READ",
      [
        "storage",
        "01126d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b541e8",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5420c",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b531b0 ["INT_ADD", "register:40f0:8", ["const:b531b0:8", "const:4:8"]]
- 00b531b0 ["CALL", null, ["callee:00497b94:8"]]
+ 00b541a4 ["INT_ADD", "register:40f0:8", ["const:b541a4:8", "const:4:8"]]
+ 00b541a4 ["CALL", null, ["callee:00497b94:8"]]
- 00b531a4 ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b54198 ["COPY", "register:4048:8", ["const:1126000:8"]]
- 00b531a8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d98:8"]]
- 00b531a8 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5419c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d58:8"]]
+ 00b5419c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-192a63704eb99531be5ef94d9ca44a5f"></a>

### [`00b53504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53504.md) → [`00b544f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b544f8.md) _ZN8firebase4util25JavaListToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_IS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.15% / 新版 99.15%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54600",
      "incomplete_value": true,
      "site": "00b54610",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
    "old": {
      "definition_site": "00b5360c",
      "incomplete_value": true,
      "site": "00b5361c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
      "00b54530",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54600",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b54530",
      "READ",
      [
        "storage",
        "01126cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54600",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5361c ["INT_ADD", "register:40f0:8", ["const:b5361c:8", "const:4:8"]]
- 00b5361c ["CALL", null, ["callee:00497b94:8"]]
+ 00b54610 ["INT_ADD", "register:40f0:8", ["const:b54610:8", "const:4:8"]]
+ 00b54610 ["CALL", null, ["callee:00497b94:8"]]
- 00b53538 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b5452c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b5353c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d00:8"]]
- 00b5353c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b54530 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc0:8"]]
+ 00b54530 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f87ad2770bcb0d37f33b9f6ffe873416"></a>

### [`00b537ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b537ec.md) → [`00b547e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b547e0.md) _ZN8firebase4util31JavaObjectListToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5481c",
      "incomplete_value": true,
      "site": "00b54824",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b53828",
      "incomplete_value": true,
      "site": "00b53830",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
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
      "definition_site": "00b54904",
      "incomplete_value": true,
      "site": "00b54914",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d8:8"
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
    "old": {
      "definition_site": "00b53910",
      "incomplete_value": true,
      "site": "00b53920",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d8:8"
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
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54958",
      "incomplete_value": true,
      "site": "00b54964",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b53964",
      "incomplete_value": true,
      "site": "00b53970",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
              ],
              [
                "leaf",
                "const:e58:8"
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
      "00b5481c",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54904",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54958",
      "READ",
      [
        "storage",
        "01125e58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5481c",
      "READ",
      [
        "storage",
        "01126cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54904",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54958",
      "READ",
      [
        "storage",
        "01126e18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53830 ["INT_ADD", "register:40f0:8", ["const:b53830:8", "const:4:8"]]
- 00b53830 ["CALL", null, ["callee:00576618:8"]]
+ 00b54824 ["INT_ADD", "register:40f0:8", ["const:b54824:8", "const:4:8"]]
+ 00b54824 ["CALL", null, ["callee:00576618:8"]]
- 00b53920 ["INT_ADD", "register:40f0:8", ["const:b53920:8", "const:4:8"]]
- 00b53920 ["CALL", null, ["callee:00497b94:8"]]
+ 00b54914 ["INT_ADD", "register:40f0:8", ["const:b54914:8", "const:4:8"]]
+ 00b54914 ["CALL", null, ["callee:00497b94:8"]]
- 00b53970 ["INT_ADD", "register:40f0:8", ["const:b53970:8", "const:4:8"]]
- 00b53970 ["CALL", null, ["callee:00497b94:8"]]
+ 00b54964 ["INT_ADD", "register:40f0:8", ["const:b54964:8", "const:4:8"]]
+ 00b54964 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-ae65d6652ee68ce0fc5e4d9ad5d31b2b"></a>

### [`00b53af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53af0.md) → [`00b54ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b54ae4.md) _ZN8firebase4util21JavaListToVariantListEP7_JNIEnvPNSt6__ndk16vectorINS_7VariantENS3_9allocatorIS5_EEEEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b570.md) · 呼出先 8件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)
- 新版 呼出元 1件 [`00c5c540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c540.md) · 呼出先 8件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.10% / 新版 99.10%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54be8",
      "incomplete_value": true,
      "site": "00b54bf8",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
    "old": {
      "definition_site": "00b53bf4",
      "incomplete_value": true,
      "site": "00b53c04",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
    "ordinal": 9,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b54b20",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54be8",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b54b20",
      "READ",
      [
        "storage",
        "01126cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54be8",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53c04 ["INT_ADD", "register:40f0:8", ["const:b53c04:8", "const:4:8"]]
- 00b53c04 ["CALL", null, ["callee:00497b94:8"]]
+ 00b54bf8 ["INT_ADD", "register:40f0:8", ["const:b54bf8:8", "const:4:8"]]
+ 00b54bf8 ["CALL", null, ["callee:00497b94:8"]]
- 00b53b28 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b54b1c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b53b2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d00:8"]]
- 00b53b2c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b54b20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc0:8"]]
+ 00b54b20 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-40c9d230eed71083e7562ea4ed968a2f"></a>

### [`00b545e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b545e0.md) → [`00b555d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b555d4.md) _ZN8firebase4util12IsJByteArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b555f0",
      "incomplete_value": false,
      "site": "00b555fc",
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
            "const:e3e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b545fc",
      "incomplete_value": false,
      "site": "00b54608",
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
            "const:d60:8"
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
      "00b555f0",
      "PARAM",
      [
        "storage",
        "002bbd60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b555f0",
      "PARAM",
      [
        "storage",
        "002bbe3e",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b54608 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54608 ["INT_ADD", "register:40f0:8", ["const:b54608:8", "const:4:8"]]
- 00b54608 ["CALLIND", null, ["register:0:8"]]
+ 00b555fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b555fc ["INT_ADD", "register:40f0:8", ["const:b555fc:8", "const:4:8"]]
+ 00b555fc ["CALLIND", null, ["register:0:8"]]
- 00b545fc ["COPY", "tmp:0:8", ["const:d60:8"]]
- 00b545fc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b545fc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b545fc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b555f0 ["COPY", "tmp:0:8", ["const:e3e:8"]]
+ 00b555f0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b555f0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b555f0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54624 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54624 ["INT_ADD", "register:40f0:8", ["const:b54624:8", "const:4:8"]]
- 00b54624 ["CALLIND", null, ["register:0:8"]]
+ 00b55618 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55618 ["INT_ADD", "register:40f0:8", ["const:b55618:8", "const:4:8"]]
+ 00b55618 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c0b62127acf22987c2bf759033d70c3"></a>

### [`00b546d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b546d0.md) → [`00b556c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b556c4.md) _ZN8firebase4util13IsJShortArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b556e0",
      "incomplete_value": false,
      "site": "00b556ec",
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
            "const:6da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b546ec",
      "incomplete_value": false,
      "site": "00b546f8",
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
      "00b556e0",
      "PARAM",
      [
        "storage",
        "002b45fc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b556e0",
      "PARAM",
      [
        "storage",
        "002b46da",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b546f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b546f8 ["INT_ADD", "register:40f0:8", ["const:b546f8:8", "const:4:8"]]
- 00b546f8 ["CALLIND", null, ["register:0:8"]]
+ 00b556ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b556ec ["INT_ADD", "register:40f0:8", ["const:b556ec:8", "const:4:8"]]
+ 00b556ec ["CALLIND", null, ["register:0:8"]]
- 00b546ec ["COPY", "tmp:0:8", ["const:5fc:8"]]
- 00b546ec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b546ec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b546ec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b556e0 ["COPY", "tmp:0:8", ["const:6da:8"]]
+ 00b556e0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b556e0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b556e0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54714 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54714 ["INT_ADD", "register:40f0:8", ["const:b54714:8", "const:4:8"]]
- 00b54714 ["CALLIND", null, ["register:0:8"]]
+ 00b55708 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55708 ["INT_ADD", "register:40f0:8", ["const:b55708:8", "const:4:8"]]
+ 00b55708 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9640a9ab244d74e84dca4f76e775d46b"></a>

### [`00b54748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54748.md) → [`00b5573c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b5573c.md) _ZN8firebase4util11IsJIntArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b55758",
      "incomplete_value": false,
      "site": "00b55764",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54764",
      "incomplete_value": false,
      "site": "00b54770",
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
      "00b55758",
      "PARAM",
      [
        "storage",
        "002bad42",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b55758",
      "PARAM",
      [
        "storage",
        "002bae20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b54770 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54770 ["INT_ADD", "register:40f0:8", ["const:b54770:8", "const:4:8"]]
- 00b54770 ["CALLIND", null, ["register:0:8"]]
+ 00b55764 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55764 ["INT_ADD", "register:40f0:8", ["const:b55764:8", "const:4:8"]]
+ 00b55764 ["CALLIND", null, ["register:0:8"]]
- 00b54764 ["COPY", "tmp:0:8", ["const:d42:8"]]
- 00b54764 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b54764 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b54764 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b55758 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 00b55758 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b55758 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b55758 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b5478c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5478c ["INT_ADD", "register:40f0:8", ["const:b5478c:8", "const:4:8"]]
- 00b5478c ["CALLIND", null, ["register:0:8"]]
+ 00b55780 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55780 ["INT_ADD", "register:40f0:8", ["const:b55780:8", "const:4:8"]]
+ 00b55780 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8de1427a9d05608506fcf1f190856c5e"></a>

### [`00b547c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b547c0.md) → [`00b557b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b557b4.md) _ZN8firebase4util12IsJLongArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b557d0",
      "incomplete_value": false,
      "site": "00b557dc",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b547dc",
      "incomplete_value": false,
      "site": "00b547e8",
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
            "const:348:8"
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
      "00b557d0",
      "PARAM",
      [
        "storage",
        "002a8348",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b557d0",
      "PARAM",
      [
        "storage",
        "002a84a0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b547e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b547e8 ["INT_ADD", "register:40f0:8", ["const:b547e8:8", "const:4:8"]]
- 00b547e8 ["CALLIND", null, ["register:0:8"]]
+ 00b557dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b557dc ["INT_ADD", "register:40f0:8", ["const:b557dc:8", "const:4:8"]]
+ 00b557dc ["CALLIND", null, ["register:0:8"]]
- 00b547dc ["COPY", "tmp:0:8", ["const:348:8"]]
- 00b547dc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b547dc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b547dc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b557d0 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 00b557d0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b557d0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b557d0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54804 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54804 ["INT_ADD", "register:40f0:8", ["const:b54804:8", "const:4:8"]]
- 00b54804 ["CALLIND", null, ["register:0:8"]]
+ 00b557f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b557f8 ["INT_ADD", "register:40f0:8", ["const:b557f8:8", "const:4:8"]]
+ 00b557f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d021f21356b1573b2cc84a72b9040c11"></a>

### [`00b548b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b548b0.md) → [`00b558a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b558a4.md) _ZN8firebase4util14IsJDoubleArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b558c0",
      "incomplete_value": false,
      "site": "00b558cc",
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
            "const:62e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b548cc",
      "incomplete_value": false,
      "site": "00b548d8",
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
            "const:561:8"
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
      "00b558c0",
      "PARAM",
      [
        "storage",
        "002a9561",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b558c0",
      "PARAM",
      [
        "storage",
        "002a962e",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b548d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b548d8 ["INT_ADD", "register:40f0:8", ["const:b548d8:8", "const:4:8"]]
- 00b548d8 ["CALLIND", null, ["register:0:8"]]
+ 00b558cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b558cc ["INT_ADD", "register:40f0:8", ["const:b558cc:8", "const:4:8"]]
+ 00b558cc ["CALLIND", null, ["register:0:8"]]
- 00b548cc ["COPY", "tmp:0:8", ["const:561:8"]]
- 00b548cc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b548cc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b548cc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b558c0 ["COPY", "tmp:0:8", ["const:62e:8"]]
+ 00b558c0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b558c0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b558c0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b548f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b548f4 ["INT_ADD", "register:40f0:8", ["const:b548f4:8", "const:4:8"]]
- 00b548f4 ["CALLIND", null, ["register:0:8"]]
+ 00b558e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b558e8 ["INT_ADD", "register:40f0:8", ["const:b558e8:8", "const:4:8"]]
+ 00b558e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a790ac61e8aae13978c6bc16931f1b5b"></a>

### [`00b55670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55670.md) → [`00b56664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56664.md) _ZN8firebase4util15JArrayToVariantEP7_JNIEnvP7_jarray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3d0.md) · 呼出先 11件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b480.md) [`00c5b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4a0.md) [`00c5b4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4b0.md)
- 新版 呼出元 1件 [`00c5c3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3a0.md) · 呼出先 11件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c450.md) [`00c5c470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c470.md) [`00c5c480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c480.md)

変更の種類 call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.31% / 新版 96.31%

優先判定に残った影響 `call_argument_candidate` 9件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56694",
      "incomplete_value": true,
      "site": "00b566a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b56704",
      "incomplete_value": false,
      "site": "00b56708",
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
            "const:e0a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55710",
      "incomplete_value": false,
      "site": "00b55714",
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
            "const:d3f:8"
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
      "definition_site": "00b56714",
      "incomplete_value": false,
      "site": "00b56720",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:fff:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b55720",
      "incomplete_value": false,
      "site": "00b5572c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:f32:8"
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
      "00b56694",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b566fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b55718"
      ]
    ],
    [
      "00b56704",
      "PARAM",
      [
        "storage",
        "002a4d3f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b56694",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b566fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b5670c"
      ]
    ],
    [
      "00b56704",
      "PARAM",
      [
        "storage",
        "002a4e0a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b556b0 ["INT_ADD", "register:40f0:8", ["const:b556b0:8", "const:4:8"]]
- 00b556b0 ["CALL", null, ["callee:00497da8:8"]]
+ 00b566a4 ["INT_ADD", "register:40f0:8", ["const:b566a4:8", "const:4:8"]]
+ 00b566a4 ["CALL", null, ["callee:00497da8:8"]]
- 00b55714 ["INT_ADD", "register:40f0:8", ["const:b55714:8", "const:4:8"]]
- 00b55714 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b56708 ["INT_ADD", "register:40f0:8", ["const:b56708:8", "const:4:8"]]
+ 00b56708 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5572c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5572c ["INT_ADD", "register:40f0:8", ["const:b5572c:8", "const:4:8"]]
- 00b5572c ["CALLIND", null, ["register:0:8"]]
+ 00b56720 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56720 ["INT_ADD", "register:40f0:8", ["const:b56720:8", "const:4:8"]]
+ 00b56720 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a6392369349f3528fe37817f46d59049"></a>

### [`00b55f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55f40.md) → [`00b56f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56f34.md) _ZN8firebase4util22RegisterCallbackOnTaskEP7_JNIEnvP8_jobjectPFvS2_S4_NS0_12FutureResultEPKcPvES8_S7_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b010.md) · 呼出先 6件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)
- 新版 呼出元 1件 [`00c5bfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfe0.md) · 呼出先 6件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b56f80",
      "incomplete_value": true,
      "site": "00b56f80",
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
      "definition_site": "00b55f8c",
      "incomplete_value": true,
      "site": "00b55f8c",
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
      "definition_site": "00b56f58",
      "incomplete_value": false,
      "site": "00b56f6c",
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
            "const:e48:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57084",
      "incomplete_value": false,
      "site": "00b57088",
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
            "const:e48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56090",
      "incomplete_value": false,
      "site": "00b56094",
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
      "00b56f58",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ],
    [
      "00b56f74",
      "READ",
      [
        "storage",
        "01125e80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57084",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b56f58",
      "PARAM",
      [
        "storage",
        "01126e48",
        null,
        null
      ]
    ],
    [
      "00b56f74",
      "READ",
      [
        "storage",
        "01126e40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57084",
      "PARAM",
      [
        "storage",
        "01126e48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b55f78 ["INT_ADD", "register:40f0:8", ["const:b55f78:8", "const:4:8"]]
- 00b55f78 ["CALL", null, ["callee:00c5c740:8"]]
+ 00b56f6c ["INT_ADD", "register:40f0:8", ["const:b56f6c:8", "const:4:8"]]
+ 00b56f6c ["CALL", null, ["callee:00c5c740:8"]]
- 00b56094 ["INT_ADD", "register:40f0:8", ["const:b56094:8", "const:4:8"]]
- 00b56094 ["CALL", null, ["callee:00c5c750:8"]]
+ 00b57088 ["INT_ADD", "register:40f0:8", ["const:b57088:8", "const:4:8"]]
+ 00b57088 ["CALL", null, ["callee:00c5c750:8"]]
- 00b560b8 ["INT_ADD", "register:40f0:8", ["const:b560b8:8", "const:4:8"]]
- 00b560b8 ["CALL", null, ["callee:00589a54:8"]]
+ 00b570ac ["INT_ADD", "register:40f0:8", ["const:b570ac:8", "const:4:8"]]
+ 00b570ac ["CALL", null, ["callee:00589a54:8"]]
~~~


<a id="compare-eaa7c132dd51783a95c9b9bd59ec1498"></a>

### [`00b56148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56148.md) → [`00b5713c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b5713c.md) _ZN8firebase4util32JniResultCallback_nativeOnResultEP7_JNIEnvP8_jobjectS4_hhP8_jstringll

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfc0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5716c",
      "incomplete_value": true,
      "site": "00b5718c",
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
            "const:e48:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00b5716c",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ],
    [
      "00b571d8",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b5716c",
      "PARAM",
      [
        "storage",
        "01126e48",
        null,
        null
      ]
    ],
    [
      "00b571d8",
      "PARAM",
      [
        "storage",
        "01126e48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b56198 ["INT_ADD", "register:40f0:8", ["const:b56198:8", "const:4:8"]]
- 00b56198 ["CALL", null, ["callee:00c5c740:8"]]
+ 00b5718c ["INT_ADD", "register:40f0:8", ["const:b5718c:8", "const:4:8"]]
+ 00b5718c ["CALL", null, ["callee:00c5c740:8"]]
- 00b56174 ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b57168 ["COPY", "register:4000:8", ["const:1126000:8"]]
- 00b56178 ["COPY", "tmp:0:8", ["const:e88:8"]]
- 00b56178 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b56178 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b56178 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b5716c ["COPY", "tmp:0:8", ["const:e48:8"]]
+ 00b5716c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5716c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5716c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-08b85a4c47e4b57bcbee188d09919f32"></a>

### [`00b563fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b563fc.md) → [`00b573f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b573f0.md) _ZN8firebase4util17JavaThreadContext9TerminateEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b450.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5c420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c420.md) · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 91.55% / 新版 91.55%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 4件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5742c",
      "incomplete_value": true,
      "site": "00b5742c",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56438",
      "incomplete_value": true,
      "site": "00b56438",
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
            "const:780:8"
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
      "definition_site": "00b5747c",
      "incomplete_value": true,
      "site": "00b5747c",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56488",
      "incomplete_value": true,
      "site": "00b56488",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b574a8",
      "incomplete_value": true,
      "site": "00b574a8",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b564b4",
      "incomplete_value": true,
      "site": "00b564b4",
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
            "const:7b8:8"
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
      "00b57404",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57414",
      "READ",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ],
    [
      "00b5742c",
      "WRITE",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b57404",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57414",
      "READ",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ],
    [
      "00b5742c",
      "WRITE",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b56438 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b56438 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b56438 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:780:8"]]
- 00b56438 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b5742c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b5742c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b5742c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:740:8"]]
+ 00b5742c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b56484 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b56484 ["INT_ADD", "register:40f0:8", ["const:b56484:8", "const:4:8"]]
- 00b56484 ["CALLIND", null, ["register:0:8"]]
+ 00b57478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b57478 ["INT_ADD", "register:40f0:8", ["const:b57478:8", "const:4:8"]]
+ 00b57478 ["CALLIND", null, ["register:0:8"]]
- 00b56488 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00b56488 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b56488 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b5747c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00b5747c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b5747c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


