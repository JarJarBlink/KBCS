# v16.0.1 → v16.0.2 · 最優先の変更候補 (81)

[一覧の目次](README.md)

<a id="compare-28b90b305d64729bdf63e921deeb8556"></a>

### [`00b4d250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d250.md) → [`00b4d2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d2ec.md) _ZN8firebase4util3set13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d290",
      "incomplete_value": true,
      "site": "00b4d290",
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
            "const:c88:8"
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
    "old": {
      "definition_site": "00b4d26c",
      "incomplete_value": true,
      "site": "00b4d26c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d274",
      "incomplete_value": false,
      "site": "00b4d288",
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
            "const:587:8"
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
      "00b4d300",
      "READ",
      [
        "storage",
        "01125c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d310",
      "PARAM",
      [
        "storage",
        "002b0587",
        null,
        "string"
      ]
    ],
    [
      "00b4d32c",
      "WRITE",
      [
        "storage",
        "01125c88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d300",
      "READ",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d310",
      "PARAM",
      [
        "storage",
        "002b052b",
        null,
        "string"
      ]
    ],
    [
      "00b4d32c",
      "WRITE",
      [
        "storage",
        "01125d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d288 ["INT_ADD", "register:40f0:8", ["const:b4d288:8", "const:4:8"]]
- 00b4d288 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d324 ["INT_ADD", "register:40f0:8", ["const:b4d324:8", "const:4:8"]]
+ 00b4d324 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d290 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00b4d290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d32c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00b4d32c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d264 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00b4d264 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d300 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00b4d300 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f4eb4d7636b38a76434892813211cab"></a>

### [`00b4d2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d2c0.md) → [`00b4d35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d35c.md) _ZN8firebase4util3set10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00b4d2dc",
      "incomplete_value": false,
      "site": "00b4d2e0",
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
    "old": {
      "definition_site": "00b4d2ec",
      "incomplete_value": true,
      "site": "00b4d2f8",
      "value": [
        "LOAD",
        "8",
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
      "00b4d378",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4d388",
      "DATA",
      [
        "storage",
        "01125ca0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d378",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4d388",
      "DATA",
      [
        "storage",
        "01125da0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d2e0 ["INT_ADD", "register:40f0:8", ["const:b4d2e0:8", "const:4:8"]]
- 00b4d2e0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4d37c ["INT_ADD", "register:40f0:8", ["const:b4d37c:8", "const:4:8"]]
+ 00b4d37c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4d2dc ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4d2dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d2dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d2dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d378 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4d378 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d378 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d378 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d2e8 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00b4d2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4d384 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00b4d384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1ae9c9296f057bb78369116244d22020"></a>

### [`00b4d2fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d2fc.md) → [`00b4d398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d398.md) _ZN8firebase4util11short_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4d328",
      "incomplete_value": true,
      "site": "00b4d328",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d310",
      "incomplete_value": true,
      "site": "00b4d310",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d31c",
      "incomplete_value": false,
      "site": "00b4d320",
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
            "const:81a:8"
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
      "00b4d3a8",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3b8",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d3c4",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d3a8",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3b8",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d3c4",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d320 ["INT_ADD", "register:40f0:8", ["const:b4d320:8", "const:4:8"]]
- 00b4d320 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d3bc ["INT_ADD", "register:40f0:8", ["const:b4d3bc:8", "const:4:8"]]
+ 00b4d3bc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d328 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d328 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d3c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d3c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d30c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d30c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d3a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d3a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1c81ca50879e5d6b892f114090da3ead"></a>

### [`00b4d33c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d33c.md) → [`00b4d3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d3d8.md) _ZN8firebase4util11short_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4d368",
      "incomplete_value": true,
      "site": "00b4d368",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d350",
      "incomplete_value": true,
      "site": "00b4d350",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d358",
      "incomplete_value": false,
      "site": "00b4d360",
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
            "const:81a:8"
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
      "00b4d3e8",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3f4",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d404",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d3e8",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3f4",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d404",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d360 ["INT_ADD", "register:40f0:8", ["const:b4d360:8", "const:4:8"]]
- 00b4d360 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d3fc ["INT_ADD", "register:40f0:8", ["const:b4d3fc:8", "const:4:8"]]
+ 00b4d3fc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d368 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d368 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d404 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d34c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d34c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d3e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d3e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e9aeaa15e4902948956d835fd6cd31c8"></a>

### [`00b4d37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d37c.md) → [`00b4d418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d418.md) _ZN8firebase4util11short_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
    "old": {
      "definition_site": "00b4d3ac",
      "incomplete_value": true,
      "site": "00b4d3ac",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d390",
      "incomplete_value": true,
      "site": "00b4d390",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d39c",
      "incomplete_value": false,
      "site": "00b4d3a4",
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
            "const:81a:8"
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
      "00b4d428",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d438",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d448",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d428",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d438",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d448",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d3a4 ["INT_ADD", "register:40f0:8", ["const:b4d3a4:8", "const:4:8"]]
- 00b4d3a4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d440 ["INT_ADD", "register:40f0:8", ["const:b4d440:8", "const:4:8"]]
+ 00b4d440 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d3ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d3ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d448 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d448 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d38c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d38c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d428 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d428 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-149981aebb795d65cb2ca64a4e0fcdaf"></a>

### [`00b4d3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d3c0.md) → [`00b4d45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d45c.md) _ZN8firebase4util11short_class10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d3f0",
      "incomplete_value": true,
      "site": "00b4d3f0",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d3d4",
      "incomplete_value": true,
      "site": "00b4d3d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d3dc",
      "incomplete_value": false,
      "site": "00b4d3e8",
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
            "const:81a:8"
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
      "00b4d46c",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d478",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d48c",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d46c",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d478",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d48c",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d3e8 ["INT_ADD", "register:40f0:8", ["const:b4d3e8:8", "const:4:8"]]
- 00b4d3e8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d484 ["INT_ADD", "register:40f0:8", ["const:b4d484:8", "const:4:8"]]
+ 00b4d484 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d3f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d3f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d48c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d48c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d3d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca8:8"]]
- 00b4d3d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d46c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:da8:8"]]
+ 00b4d46c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-791f8b00a1fcaa83cbe569256e8887f1"></a>

### [`00b4d410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d410.md) → [`00b4d4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d4ac.md) _ZN8firebase4util11short_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00b4d498",
      "incomplete_value": true,
      "site": "00b4d498",
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
            "const:cb0:8"
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
    "old": {
      "definition_site": "00b4d444",
      "incomplete_value": true,
      "site": "00b4d450",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
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
      "00b4d4c0",
      "READ",
      [
        "storage",
        "01125cb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d4e0",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d534",
      "WRITE",
      [
        "storage",
        "01125cb0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d4c0",
      "READ",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d4e0",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d534",
      "WRITE",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d450 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d450 ["INT_ADD", "register:40f0:8", ["const:b4d450:8", "const:4:8"]]
- 00b4d450 ["CALLIND", null, ["register:0:8"]]
+ 00b4d4ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d4ec ["INT_ADD", "register:40f0:8", ["const:b4d4ec:8", "const:4:8"]]
+ 00b4d4ec ["CALLIND", null, ["register:0:8"]]
- 00b4d498 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4d498 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cb0:8"]]
- 00b4d498 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4d534 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4d534 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:db0:8"]]
+ 00b4d534 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4d424 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:cb0:8"]]
- 00b4d424 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4d424 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4d4c0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:db0:8"]]
+ 00b4d4c0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d4c0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-be2b5f63f5ee437fab607fb018d68be5"></a>

### [`00b4d4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d4ac.md) → [`00b4d548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d548.md) _ZN8firebase4util11short_class12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00b4d4e8",
      "incomplete_value": true,
      "site": "00b4d4e8",
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
            "const:cb0:8"
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
    "old": {
      "definition_site": "00b4d538",
      "incomplete_value": true,
      "site": "00b4d538",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d4c4",
      "incomplete_value": true,
      "site": "00b4d4c4",
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
      "00b4d55c",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d568",
      "READ",
      [
        "storage",
        "01125cb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d584",
      "WRITE",
      [
        "storage",
        "01125cb0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d55c",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d568",
      "READ",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d584",
      "WRITE",
      [
        "storage",
        "01125db0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d4e8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4d4e8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4d4e8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cb0:8"]]
- 00b4d4e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4d584 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4d584 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4d584 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:db0:8"]]
+ 00b4d584 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4d534 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d534 ["INT_ADD", "register:40f0:8", ["const:b4d534:8", "const:4:8"]]
- 00b4d534 ["CALLIND", null, ["register:0:8"]]
+ 00b4d5d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d5d0 ["INT_ADD", "register:40f0:8", ["const:b4d5d0:8", "const:4:8"]]
+ 00b4d5d0 ["CALLIND", null, ["register:0:8"]]
- 00b4d538 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00b4d538 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4d538 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4d5d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00b4d5d4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4d5d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-d78c6af9db70ec492b9c9cb37a84ed7c"></a>

### [`00b4d54c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d54c.md) → [`00b4d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d5e8.md) _ZN8firebase4util11short_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d58c",
      "incomplete_value": true,
      "site": "00b4d58c",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d568",
      "incomplete_value": true,
      "site": "00b4d568",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d570",
      "incomplete_value": false,
      "site": "00b4d584",
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
            "const:81a:8"
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
      "00b4d5fc",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d60c",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d628",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d5fc",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d60c",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d628",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d584 ["INT_ADD", "register:40f0:8", ["const:b4d584:8", "const:4:8"]]
- 00b4d584 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d620 ["INT_ADD", "register:40f0:8", ["const:b4d620:8", "const:4:8"]]
+ 00b4d620 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d58c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00b4d58c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d628 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00b4d628 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d560 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00b4d560 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d5fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00b4d5fc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-609bf64e0d243df6b5f64f2b6d3309b6"></a>

### [`00b4d5bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d5bc.md) → [`00b4d658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d658.md) _ZN8firebase4util11short_class11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00b4d5d8",
      "incomplete_value": false,
      "site": "00b4d5dc",
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
    "old": {
      "definition_site": "00b4d5e8",
      "incomplete_value": true,
      "site": "00b4d5f4",
      "value": [
        "LOAD",
        "8",
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
      "00b4d674",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4d684",
      "DATA",
      [
        "storage",
        "01125cb8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d674",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4d684",
      "DATA",
      [
        "storage",
        "01125db8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d5dc ["INT_ADD", "register:40f0:8", ["const:b4d5dc:8", "const:4:8"]]
- 00b4d5dc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4d678 ["INT_ADD", "register:40f0:8", ["const:b4d678:8", "const:4:8"]]
+ 00b4d678 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4d5d8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4d5d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d5d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d5d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d674 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4d674 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d674 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d674 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d5e4 ["COPY", "tmp:0:8", ["const:cb8:8"]]
- 00b4d5e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d5e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d5e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4d680 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 00b4d680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5331838393f57c84c020a03ac0cdd224"></a>

### [`00b4d5f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d5f8.md) → [`00b4d694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d694.md) _ZN8firebase4util11short_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d638",
      "incomplete_value": true,
      "site": "00b4d638",
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
            "const:ca8:8"
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
    "old": {
      "definition_site": "00b4d614",
      "incomplete_value": true,
      "site": "00b4d614",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d61c",
      "incomplete_value": false,
      "site": "00b4d630",
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
            "const:81a:8"
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
      "00b4d6a8",
      "READ",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d6b8",
      "PARAM",
      [
        "storage",
        "002bf81a",
        null,
        "string"
      ]
    ],
    [
      "00b4d6d4",
      "WRITE",
      [
        "storage",
        "01125ca8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d6a8",
      "READ",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d6b8",
      "PARAM",
      [
        "storage",
        "002bf7c6",
        null,
        "string"
      ]
    ],
    [
      "00b4d6d4",
      "WRITE",
      [
        "storage",
        "01125da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d630 ["INT_ADD", "register:40f0:8", ["const:b4d630:8", "const:4:8"]]
- 00b4d630 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d6cc ["INT_ADD", "register:40f0:8", ["const:b4d6cc:8", "const:4:8"]]
+ 00b4d6cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d638 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00b4d638 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d6d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00b4d6d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d60c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00b4d60c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d6a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00b4d6a8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-98fb35603d58ef8a27f64f14ca70ba61"></a>

### [`00b4d668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d668.md) → [`00b4d704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d704.md) _ZN8firebase4util11short_class10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00b4d684",
      "incomplete_value": false,
      "site": "00b4d688",
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
    "old": {
      "definition_site": "00b4d694",
      "incomplete_value": true,
      "site": "00b4d6a0",
      "value": [
        "LOAD",
        "8",
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
      "00b4d720",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4d730",
      "DATA",
      [
        "storage",
        "01125cc8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d720",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4d730",
      "DATA",
      [
        "storage",
        "01125dc8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d688 ["INT_ADD", "register:40f0:8", ["const:b4d688:8", "const:4:8"]]
- 00b4d688 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4d724 ["INT_ADD", "register:40f0:8", ["const:b4d724:8", "const:4:8"]]
+ 00b4d724 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4d684 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4d684 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d684 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d684 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d720 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4d720 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d720 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d720 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d690 ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 00b4d690 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d690 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d690 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4d72c ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 00b4d72c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d72c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4d72c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1b59d6f25c7f0976b9d084c5b48feb2a"></a>

### [`00b4d6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d6a4.md) → [`00b4d740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d740.md) _ZN8firebase4util6string19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
    "old": {
      "definition_site": "00b4d6d0",
      "incomplete_value": true,
      "site": "00b4d6d0",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d6b8",
      "incomplete_value": true,
      "site": "00b4d6b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d6c4",
      "incomplete_value": false,
      "site": "00b4d6c8",
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
            "const:aa0:8"
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
      "00b4d750",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d760",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4d76c",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d750",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d760",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4d76c",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d6c8 ["INT_ADD", "register:40f0:8", ["const:b4d6c8:8", "const:4:8"]]
- 00b4d6c8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d764 ["INT_ADD", "register:40f0:8", ["const:b4d764:8", "const:4:8"]]
+ 00b4d764 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d6d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d6d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d76c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d76c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d6b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d6b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d750 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d750 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-61654ff655314cf6ef86e5371b00947c"></a>

### [`00b4d6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d6e4.md) → [`00b4d780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d780.md) _ZN8firebase4util6string19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4d710",
      "incomplete_value": true,
      "site": "00b4d710",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d6f8",
      "incomplete_value": true,
      "site": "00b4d6f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d700",
      "incomplete_value": false,
      "site": "00b4d708",
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
            "const:aa0:8"
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
      "00b4d790",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d79c",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4d7ac",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d790",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d79c",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4d7ac",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d708 ["INT_ADD", "register:40f0:8", ["const:b4d708:8", "const:4:8"]]
- 00b4d708 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d7a4 ["INT_ADD", "register:40f0:8", ["const:b4d7a4:8", "const:4:8"]]
+ 00b4d7a4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d710 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d710 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d7ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d7ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d6f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d6f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d790 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d790 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fae973941f08898884c18a59010fb60e"></a>

### [`00b4d724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d724.md) → [`00b4d7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d7c0.md) _ZN8firebase4util6string10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
    "old": {
      "definition_site": "00b4d754",
      "incomplete_value": true,
      "site": "00b4d754",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d738",
      "incomplete_value": true,
      "site": "00b4d738",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d744",
      "incomplete_value": false,
      "site": "00b4d74c",
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
            "const:aa0:8"
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
      "00b4d7d0",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d7e0",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4d7f0",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d7d0",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d7e0",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4d7f0",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d74c ["INT_ADD", "register:40f0:8", ["const:b4d74c:8", "const:4:8"]]
- 00b4d74c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d7e8 ["INT_ADD", "register:40f0:8", ["const:b4d7e8:8", "const:4:8"]]
+ 00b4d7e8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d754 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d754 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d7f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d7f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d734 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d734 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d7d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d7d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7d1bd135a4c7a5ff66866636d04ec5c3"></a>

### [`00b4d768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d768.md) → [`00b4d804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d804.md) _ZN8firebase4util6string10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d798",
      "incomplete_value": true,
      "site": "00b4d798",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d77c",
      "incomplete_value": true,
      "site": "00b4d77c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d784",
      "incomplete_value": false,
      "site": "00b4d790",
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
            "const:aa0:8"
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
      "00b4d814",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d820",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4d834",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d814",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d820",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4d834",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d790 ["INT_ADD", "register:40f0:8", ["const:b4d790:8", "const:4:8"]]
- 00b4d790 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d82c ["INT_ADD", "register:40f0:8", ["const:b4d82c:8", "const:4:8"]]
+ 00b4d82c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d798 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d798 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d834 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d834 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d778 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00b4d778 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d814 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd0:8"]]
+ 00b4d814 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9c085ff990d554bddafd42664e9e719c"></a>

### [`00b4d7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d7b8.md) → [`00b4d854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d854.md) _ZN8firebase4util6string15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00b4d840",
      "incomplete_value": true,
      "site": "00b4d840",
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
            "const:cd8:8"
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
    "old": {
      "definition_site": "00b4d7ec",
      "incomplete_value": true,
      "site": "00b4d7f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
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
      "00b4d868",
      "READ",
      [
        "storage",
        "01125cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d888",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8dc",
      "WRITE",
      [
        "storage",
        "01125cd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d868",
      "READ",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d888",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8dc",
      "WRITE",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d7f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d7f8 ["INT_ADD", "register:40f0:8", ["const:b4d7f8:8", "const:4:8"]]
- 00b4d7f8 ["CALLIND", null, ["register:0:8"]]
+ 00b4d894 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d894 ["INT_ADD", "register:40f0:8", ["const:b4d894:8", "const:4:8"]]
+ 00b4d894 ["CALLIND", null, ["register:0:8"]]
- 00b4d840 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4d840 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cd8:8"]]
- 00b4d840 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4d8dc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4d8dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:dd8:8"]]
+ 00b4d8dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4d7cc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:cd8:8"]]
- 00b4d7cc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4d7cc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4d868 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:dd8:8"]]
+ 00b4d868 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d868 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-61a0557905c5adb12849afe4f16593ed"></a>

### [`00b4d854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d854.md) → [`00b4d8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d8f0.md) _ZN8firebase4util6string12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00b4d890",
      "incomplete_value": true,
      "site": "00b4d890",
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
            "const:cd8:8"
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
    "old": {
      "definition_site": "00b4d8e0",
      "incomplete_value": true,
      "site": "00b4d8e0",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d86c",
      "incomplete_value": true,
      "site": "00b4d86c",
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
      "00b4d904",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d910",
      "READ",
      [
        "storage",
        "01125cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d92c",
      "WRITE",
      [
        "storage",
        "01125cd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d904",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d910",
      "READ",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d92c",
      "WRITE",
      [
        "storage",
        "01125dd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d890 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4d890 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4d890 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cd8:8"]]
- 00b4d890 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4d92c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4d92c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4d92c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:dd8:8"]]
+ 00b4d92c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4d8dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4d8dc ["INT_ADD", "register:40f0:8", ["const:b4d8dc:8", "const:4:8"]]
- 00b4d8dc ["CALLIND", null, ["register:0:8"]]
+ 00b4d978 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d978 ["INT_ADD", "register:40f0:8", ["const:b4d978:8", "const:4:8"]]
+ 00b4d978 ["CALLIND", null, ["register:0:8"]]
- 00b4d8e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00b4d8e0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4d8e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4d97c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00b4d97c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4d97c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-a2cf2d2b8c5d02c27db2d5c0c80416fe"></a>

### [`00b4d8f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d8f4.md) → [`00b4d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4d990.md) _ZN8firebase4util6string14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d934",
      "incomplete_value": true,
      "site": "00b4d934",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d910",
      "incomplete_value": true,
      "site": "00b4d910",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d918",
      "incomplete_value": false,
      "site": "00b4d92c",
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
            "const:aa0:8"
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
      "00b4d9a4",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d9b4",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4d9d0",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d9a4",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d9b4",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4d9d0",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d92c ["INT_ADD", "register:40f0:8", ["const:b4d92c:8", "const:4:8"]]
- 00b4d92c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4d9c8 ["INT_ADD", "register:40f0:8", ["const:b4d9c8:8", "const:4:8"]]
+ 00b4d9c8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d934 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00b4d934 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d9d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00b4d9d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d908 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00b4d908 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d9a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00b4d9a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6e2bafc39a3f362f42188f9900b3e9a9"></a>

### [`00b4d964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d964.md) → [`00b4da00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4da00.md) _ZN8firebase4util6string11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00b4d980",
      "incomplete_value": false,
      "site": "00b4d984",
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
    "old": {
      "definition_site": "00b4d990",
      "incomplete_value": true,
      "site": "00b4d99c",
      "value": [
        "LOAD",
        "8",
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
      "00b4da1c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4da2c",
      "DATA",
      [
        "storage",
        "01125ce0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4da1c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4da2c",
      "DATA",
      [
        "storage",
        "01125de0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d984 ["INT_ADD", "register:40f0:8", ["const:b4d984:8", "const:4:8"]]
- 00b4d984 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4da20 ["INT_ADD", "register:40f0:8", ["const:b4da20:8", "const:4:8"]]
+ 00b4da20 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4d980 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4d980 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d980 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4d980 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4da1c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4da1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4da1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4da1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4d98c ["COPY", "tmp:0:8", ["const:ce0:8"]]
- 00b4d98c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d98c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4d98c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4da28 ["COPY", "tmp:0:8", ["const:de0:8"]]
+ 00b4da28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4da28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4da28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-33e9504c71d8033ffe6455fb64461c38"></a>

### [`00b4d9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4d9a0.md) → [`00b4da3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4da3c.md) _ZN8firebase4util6string13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4d9e0",
      "incomplete_value": true,
      "site": "00b4d9e0",
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
            "const:cd0:8"
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
    "old": {
      "definition_site": "00b4d9bc",
      "incomplete_value": true,
      "site": "00b4d9bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4d9c4",
      "incomplete_value": false,
      "site": "00b4d9d8",
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
            "const:aa0:8"
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
      "00b4da50",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da60",
      "PARAM",
      [
        "storage",
        "002aeaa0",
        null,
        "string"
      ]
    ],
    [
      "00b4da7c",
      "WRITE",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4da50",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da60",
      "PARAM",
      [
        "storage",
        "002aea44",
        null,
        "string"
      ]
    ],
    [
      "00b4da7c",
      "WRITE",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4d9d8 ["INT_ADD", "register:40f0:8", ["const:b4d9d8:8", "const:4:8"]]
- 00b4d9d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4da74 ["INT_ADD", "register:40f0:8", ["const:b4da74:8", "const:4:8"]]
+ 00b4da74 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4d9e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00b4d9e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4da7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00b4da7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4d9b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00b4d9b4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4da50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00b4da50 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-92f7a325387887e1ee0758f6c2e097d8"></a>

### [`00b4da10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4da10.md) → [`00b4daac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4daac.md) _ZN8firebase4util6string10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00b4da2c",
      "incomplete_value": false,
      "site": "00b4da30",
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
    "old": {
      "definition_site": "00b4da3c",
      "incomplete_value": true,
      "site": "00b4da48",
      "value": [
        "LOAD",
        "8",
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
      "00b4dac8",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4dad8",
      "DATA",
      [
        "storage",
        "01125ce8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4dac8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4dad8",
      "DATA",
      [
        "storage",
        "01125de8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4da30 ["INT_ADD", "register:40f0:8", ["const:b4da30:8", "const:4:8"]]
- 00b4da30 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4dacc ["INT_ADD", "register:40f0:8", ["const:b4dacc:8", "const:4:8"]]
+ 00b4dacc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4da2c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4da2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4da2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4da2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4dac8 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4dac8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dac8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4dac8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4da38 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00b4da38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4da38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4da38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4dad4 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 00b4dad4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4dad4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4dad4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea858c7c667fdd4d828f20454df063e7"></a>

### [`00b4da4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4da4c.md) → [`00b4dae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dae8.md) _ZN8firebase4util9throwable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0

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
    "old": {
      "definition_site": "00b4da78",
      "incomplete_value": true,
      "site": "00b4da78",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4da60",
      "incomplete_value": true,
      "site": "00b4da60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4da6c",
      "incomplete_value": false,
      "site": "00b4da70",
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
            "const:9ad:8"
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
      "00b4daf8",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db08",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4db14",
      "WRITE",
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
      "00b4daf8",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db08",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4db14",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4da70 ["INT_ADD", "register:40f0:8", ["const:b4da70:8", "const:4:8"]]
- 00b4da70 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4db0c ["INT_ADD", "register:40f0:8", ["const:b4db0c:8", "const:4:8"]]
+ 00b4db0c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4da78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4da78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4db14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4db14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4da5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4da5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4daf8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4daf8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-33eee4244ac48a87955208b6974fcacb"></a>

### [`00b4da8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4da8c.md) → [`00b4db28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4db28.md) _ZN8firebase4util9throwable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4dab8",
      "incomplete_value": true,
      "site": "00b4dab8",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4daa0",
      "incomplete_value": true,
      "site": "00b4daa0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4daa8",
      "incomplete_value": false,
      "site": "00b4dab0",
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
            "const:9ad:8"
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
      "00b4db38",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db44",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4db54",
      "WRITE",
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
      "00b4db38",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db44",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4db54",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dab0 ["INT_ADD", "register:40f0:8", ["const:b4dab0:8", "const:4:8"]]
- 00b4dab0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4db4c ["INT_ADD", "register:40f0:8", ["const:b4db4c:8", "const:4:8"]]
+ 00b4db4c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dab8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4dab8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4db54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4db54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4da9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4da9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4db38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4db38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fe17ddc031858901c4230e96e28a4fe3"></a>

### [`00b4dacc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dacc.md) → [`00b4db68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4db68.md) _ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
    "old": {
      "definition_site": "00b4dafc",
      "incomplete_value": true,
      "site": "00b4dafc",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4dae0",
      "incomplete_value": true,
      "site": "00b4dae0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4daec",
      "incomplete_value": false,
      "site": "00b4daf4",
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
            "const:9ad:8"
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
      "00b4db78",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db88",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4db98",
      "WRITE",
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
      "00b4db78",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db88",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4db98",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4daf4 ["INT_ADD", "register:40f0:8", ["const:b4daf4:8", "const:4:8"]]
- 00b4daf4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4db90 ["INT_ADD", "register:40f0:8", ["const:b4db90:8", "const:4:8"]]
+ 00b4db90 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dafc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4dafc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4db98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4db98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dadc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4dadc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4db78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4db78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a9dcc1fe4505cb2be099ffc03a0eb0b5"></a>

### [`00b4db10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4db10.md) → [`00b4dbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dbac.md) _ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4db40",
      "incomplete_value": true,
      "site": "00b4db40",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4db24",
      "incomplete_value": true,
      "site": "00b4db24",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4db2c",
      "incomplete_value": false,
      "site": "00b4db38",
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
            "const:9ad:8"
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
      "00b4dbbc",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dbc8",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4dbdc",
      "WRITE",
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
      "00b4dbbc",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dbc8",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4dbdc",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4db38 ["INT_ADD", "register:40f0:8", ["const:b4db38:8", "const:4:8"]]
- 00b4db38 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4dbd4 ["INT_ADD", "register:40f0:8", ["const:b4dbd4:8", "const:4:8"]]
+ 00b4dbd4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4db40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4db40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dbdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4dbdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4db20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
- 00b4db20 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dbbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:df0:8"]]
+ 00b4dbbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d9a3600d7401079c5acc1e340775694f"></a>

### [`00b4db60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4db60.md) → [`00b4dbfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dbfc.md) _ZN8firebase4util9throwable15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00b4dbe8",
      "incomplete_value": true,
      "site": "00b4dbe8",
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
            "const:cf8:8"
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
    "old": {
      "definition_site": "00b4db94",
      "incomplete_value": true,
      "site": "00b4dba0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf0:8"
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
      "00b4dc10",
      "READ",
      [
        "storage",
        "01125cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dc30",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc84",
      "WRITE",
      [
        "storage",
        "01125cf8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4dc10",
      "READ",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dc30",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dc84",
      "WRITE",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dba0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4dba0 ["INT_ADD", "register:40f0:8", ["const:b4dba0:8", "const:4:8"]]
- 00b4dba0 ["CALLIND", null, ["register:0:8"]]
+ 00b4dc3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4dc3c ["INT_ADD", "register:40f0:8", ["const:b4dc3c:8", "const:4:8"]]
+ 00b4dc3c ["CALLIND", null, ["register:0:8"]]
- 00b4dbe8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4dbe8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cf8:8"]]
- 00b4dbe8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4dc84 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4dc84 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:df8:8"]]
+ 00b4dc84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4db74 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:cf8:8"]]
- 00b4db74 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4db74 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4dc10 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:df8:8"]]
+ 00b4dc10 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dc10 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c2ad815a20f1e23f7d7e4f19189fac43"></a>

### [`00b4dbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dbfc.md) → [`00b4dc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dc98.md) _ZN8firebase4util9throwable12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00b4dc38",
      "incomplete_value": true,
      "site": "00b4dc38",
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
            "const:cf8:8"
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
    "old": {
      "definition_site": "00b4dc88",
      "incomplete_value": true,
      "site": "00b4dc88",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4dc14",
      "incomplete_value": true,
      "site": "00b4dc14",
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
      "00b4dcac",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dcb8",
      "READ",
      [
        "storage",
        "01125cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dcd4",
      "WRITE",
      [
        "storage",
        "01125cf8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4dcac",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dcb8",
      "READ",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dcd4",
      "WRITE",
      [
        "storage",
        "01125df8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dc38 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4dc38 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4dc38 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cf8:8"]]
- 00b4dc38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4dcd4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4dcd4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4dcd4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:df8:8"]]
+ 00b4dcd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4dc84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4dc84 ["INT_ADD", "register:40f0:8", ["const:b4dc84:8", "const:4:8"]]
- 00b4dc84 ["CALLIND", null, ["register:0:8"]]
+ 00b4dd20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4dd20 ["INT_ADD", "register:40f0:8", ["const:b4dd20:8", "const:4:8"]]
+ 00b4dd20 ["CALLIND", null, ["register:0:8"]]
- 00b4dc88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00b4dc88 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4dc88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4dd24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00b4dd24 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4dd24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-fb20efd2a2b7b62a34b044ced61b75dc"></a>

### [`00b4dc9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dc9c.md) → [`00b4dd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dd38.md) _ZN8firebase4util9throwable14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4dcdc",
      "incomplete_value": true,
      "site": "00b4dcdc",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4dcb8",
      "incomplete_value": true,
      "site": "00b4dcb8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4dcc0",
      "incomplete_value": false,
      "site": "00b4dcd4",
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
            "const:9ad:8"
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
      "00b4dd4c",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dd5c",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4dd78",
      "WRITE",
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
      "00b4dd4c",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dd5c",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4dd78",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dcd4 ["INT_ADD", "register:40f0:8", ["const:b4dcd4:8", "const:4:8"]]
- 00b4dcd4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4dd70 ["INT_ADD", "register:40f0:8", ["const:b4dd70:8", "const:4:8"]]
+ 00b4dd70 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dcdc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00b4dcdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dd78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00b4dd78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dcb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00b4dcb0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dd4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00b4dd4c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f86a7b0173c9c14851242b3107e81d23"></a>

### [`00b4dd0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dd0c.md) → [`00b4dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dda8.md) _ZN8firebase4util9throwable11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00b4dd28",
      "incomplete_value": false,
      "site": "00b4dd2c",
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
    "old": {
      "definition_site": "00b4dd38",
      "incomplete_value": true,
      "site": "00b4dd44",
      "value": [
        "LOAD",
        "8",
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
      "00b4ddc4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4ddd4",
      "DATA",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ddc4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4ddd4",
      "DATA",
      [
        "storage",
        "01125e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dd2c ["INT_ADD", "register:40f0:8", ["const:b4dd2c:8", "const:4:8"]]
- 00b4dd2c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4ddc8 ["INT_ADD", "register:40f0:8", ["const:b4ddc8:8", "const:4:8"]]
+ 00b4ddc8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4dd28 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4dd28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4dd28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4dd28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ddc4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4ddc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ddc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ddc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4dd34 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 00b4dd34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4dd34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4dd34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4ddd0 ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 00b4ddd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ddd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4ddd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfc36090cd667ccc710365703efc07f6"></a>

### [`00b4dd48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dd48.md) → [`00b4dde4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dde4.md) _ZN8firebase4util9throwable13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4dd88",
      "incomplete_value": true,
      "site": "00b4dd88",
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
            "const:cf0:8"
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
    "old": {
      "definition_site": "00b4dd64",
      "incomplete_value": true,
      "site": "00b4dd64",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4dd6c",
      "incomplete_value": false,
      "site": "00b4dd80",
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
            "const:9ad:8"
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
      "00b4ddf8",
      "READ",
      [
        "storage",
        "01125cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4de08",
      "PARAM",
      [
        "storage",
        "002b99ad",
        null,
        "string"
      ]
    ],
    [
      "00b4de24",
      "WRITE",
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
      "00b4ddf8",
      "READ",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4de08",
      "PARAM",
      [
        "storage",
        "002b9959",
        null,
        "string"
      ]
    ],
    [
      "00b4de24",
      "WRITE",
      [
        "storage",
        "01125df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dd80 ["INT_ADD", "register:40f0:8", ["const:b4dd80:8", "const:4:8"]]
- 00b4dd80 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4de1c ["INT_ADD", "register:40f0:8", ["const:b4de1c:8", "const:4:8"]]
+ 00b4de1c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dd88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00b4dd88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4de24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00b4de24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dd5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00b4dd5c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4ddf8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00b4ddf8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6c84b432cbe58d0e4de2ae54564ced5b"></a>

### [`00b4ddb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4ddb8.md) → [`00b4de54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4de54.md) _ZN8firebase4util9throwable10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00b4ddd4",
      "incomplete_value": false,
      "site": "00b4ddd8",
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
    "old": {
      "definition_site": "00b4dde4",
      "incomplete_value": true,
      "site": "00b4ddf0",
      "value": [
        "LOAD",
        "8",
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
      "00b4de70",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4de80",
      "DATA",
      [
        "storage",
        "01125d18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4de70",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4de80",
      "DATA",
      [
        "storage",
        "01125e18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ddd8 ["INT_ADD", "register:40f0:8", ["const:b4ddd8:8", "const:4:8"]]
- 00b4ddd8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4de74 ["INT_ADD", "register:40f0:8", ["const:b4de74:8", "const:4:8"]]
+ 00b4de74 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4ddd4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4ddd4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ddd4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ddd4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4de70 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4de70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4de70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4de70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4dde0 ["COPY", "tmp:0:8", ["const:d18:8"]]
- 00b4dde0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4dde0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4dde0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4de7c ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 00b4de7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4de7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4de7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a47bbf6d0122b5e2ad78a0431e056f95"></a>

### [`00b4ddf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4ddf4.md) → [`00b4de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4de90.md) _ZN8firebase4util3uri19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

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
    "old": {
      "definition_site": "00b4de20",
      "incomplete_value": true,
      "site": "00b4de20",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4de08",
      "incomplete_value": true,
      "site": "00b4de08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4de14",
      "incomplete_value": false,
      "site": "00b4de18",
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
            "const:175:8"
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
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deb0",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4debc",
      "WRITE",
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
      "00b4dea0",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deb0",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4debc",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4de18 ["INT_ADD", "register:40f0:8", ["const:b4de18:8", "const:4:8"]]
- 00b4de18 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4deb4 ["INT_ADD", "register:40f0:8", ["const:b4deb4:8", "const:4:8"]]
+ 00b4deb4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4de20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4de20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4debc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4debc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4de04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4de04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dea0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4dea0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-32ec96074851a83574d7bcc931dba312"></a>

### [`00b4de34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4de34.md) → [`00b4ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4ded0.md) _ZN8firebase4util3uri19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4de60",
      "incomplete_value": true,
      "site": "00b4de60",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4de48",
      "incomplete_value": true,
      "site": "00b4de48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4de50",
      "incomplete_value": false,
      "site": "00b4de58",
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
            "const:175:8"
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
      "00b4dee0",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deec",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4defc",
      "WRITE",
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
      "00b4dee0",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4deec",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4defc",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4de58 ["INT_ADD", "register:40f0:8", ["const:b4de58:8", "const:4:8"]]
- 00b4de58 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4def4 ["INT_ADD", "register:40f0:8", ["const:b4def4:8", "const:4:8"]]
+ 00b4def4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4de60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4de60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4defc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4defc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4de44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4de44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dee0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4dee0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a677de2458b6603761e7fa1a40f0ec17"></a>

### [`00b4de74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4de74.md) → [`00b4df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4df10.md) _ZN8firebase4util3uri10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
    "old": {
      "definition_site": "00b4dea4",
      "incomplete_value": true,
      "site": "00b4dea4",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4de88",
      "incomplete_value": true,
      "site": "00b4de88",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4de94",
      "incomplete_value": false,
      "site": "00b4de9c",
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
            "const:175:8"
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
      "00b4df20",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df30",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4df40",
      "WRITE",
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
      "00b4df20",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df30",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4df40",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4de9c ["INT_ADD", "register:40f0:8", ["const:b4de9c:8", "const:4:8"]]
- 00b4de9c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4df38 ["INT_ADD", "register:40f0:8", ["const:b4df38:8", "const:4:8"]]
+ 00b4df38 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dea4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4dea4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4df40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4df40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4de84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4de84 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4df20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4df20 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-70c786499e58e25ededddd6f3188eeea"></a>

### [`00b4deb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4deb8.md) → [`00b4df54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4df54.md) _ZN8firebase4util3uri10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4dee8",
      "incomplete_value": true,
      "site": "00b4dee8",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4decc",
      "incomplete_value": true,
      "site": "00b4decc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4ded4",
      "incomplete_value": false,
      "site": "00b4dee0",
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
            "const:175:8"
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
      "00b4df64",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df70",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4df84",
      "WRITE",
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
      "00b4df64",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4df70",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4df84",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dee0 ["INT_ADD", "register:40f0:8", ["const:b4dee0:8", "const:4:8"]]
- 00b4dee0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4df7c ["INT_ADD", "register:40f0:8", ["const:b4df7c:8", "const:4:8"]]
+ 00b4df7c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4dee8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4dee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4df84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4df84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4dec8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00b4dec8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4df64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00b4df64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6cbbdf46a2f2dc46737ad46059f6035f"></a>

### [`00b4df08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4df08.md) → [`00b4dfa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4d/00b4dfa4.md) _ZN8firebase4util3uri15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00b4df90",
      "incomplete_value": true,
      "site": "00b4df90",
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
            "const:d28:8"
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
    "old": {
      "definition_site": "00b4df3c",
      "incomplete_value": true,
      "site": "00b4df48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d20:8"
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
      "00b4dfb8",
      "READ",
      [
        "storage",
        "01125d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dfd8",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e02c",
      "WRITE",
      [
        "storage",
        "01125d28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4dfb8",
      "READ",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4dfd8",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e02c",
      "WRITE",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4df48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4df48 ["INT_ADD", "register:40f0:8", ["const:b4df48:8", "const:4:8"]]
- 00b4df48 ["CALLIND", null, ["register:0:8"]]
+ 00b4dfe4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4dfe4 ["INT_ADD", "register:40f0:8", ["const:b4dfe4:8", "const:4:8"]]
+ 00b4dfe4 ["CALLIND", null, ["register:0:8"]]
- 00b4df90 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4df90 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d28:8"]]
- 00b4df90 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4e02c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4e02c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e28:8"]]
+ 00b4e02c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4df1c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d28:8"]]
- 00b4df1c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4df1c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4dfb8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e28:8"]]
+ 00b4dfb8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dfb8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-470ef0f3a30fe4aaaf6a2c6e784172fd"></a>

### [`00b4dfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4d/00b4dfa4.md) → [`00b4e040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e040.md) _ZN8firebase4util3uri12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00b4dfe0",
      "incomplete_value": true,
      "site": "00b4dfe0",
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
            "const:d28:8"
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
    "old": {
      "definition_site": "00b4e030",
      "incomplete_value": true,
      "site": "00b4e030",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4dfbc",
      "incomplete_value": true,
      "site": "00b4dfbc",
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
      "00b4e054",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e060",
      "READ",
      [
        "storage",
        "01125d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e07c",
      "WRITE",
      [
        "storage",
        "01125d28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e054",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e060",
      "READ",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e07c",
      "WRITE",
      [
        "storage",
        "01125e28",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4dfe0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4dfe0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4dfe0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d28:8"]]
- 00b4dfe0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4e07c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4e07c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4e07c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e28:8"]]
+ 00b4e07c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4e02c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4e02c ["INT_ADD", "register:40f0:8", ["const:b4e02c:8", "const:4:8"]]
- 00b4e02c ["CALLIND", null, ["register:0:8"]]
+ 00b4e0c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4e0c8 ["INT_ADD", "register:40f0:8", ["const:b4e0c8:8", "const:4:8"]]
+ 00b4e0c8 ["CALLIND", null, ["register:0:8"]]
- 00b4e030 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00b4e030 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4e030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4e0cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00b4e0cc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4e0cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-349a7ce01d6d3b4e32a6116ae9e85867"></a>

### [`00b4e044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e044.md) → [`00b4e0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e0e0.md) _ZN8firebase4util3uri14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4e084",
      "incomplete_value": true,
      "site": "00b4e084",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4e060",
      "incomplete_value": true,
      "site": "00b4e060",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e068",
      "incomplete_value": false,
      "site": "00b4e07c",
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
            "const:175:8"
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
      "00b4e0f4",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e104",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4e120",
      "WRITE",
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
      "00b4e0f4",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e104",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4e120",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e07c ["INT_ADD", "register:40f0:8", ["const:b4e07c:8", "const:4:8"]]
- 00b4e07c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e118 ["INT_ADD", "register:40f0:8", ["const:b4e118:8", "const:4:8"]]
+ 00b4e118 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e084 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00b4e084 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e120 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00b4e120 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e058 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00b4e058 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e0f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00b4e0f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a335735d17ca1777d28972a36977f0da"></a>

### [`00b4e0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e0b4.md) → [`00b4e150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e150.md) _ZN8firebase4util3uri11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00b4e0d0",
      "incomplete_value": false,
      "site": "00b4e0d4",
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
    "old": {
      "definition_site": "00b4e0e0",
      "incomplete_value": true,
      "site": "00b4e0ec",
      "value": [
        "LOAD",
        "8",
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
      "00b4e16c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4e17c",
      "DATA",
      [
        "storage",
        "01125d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e16c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4e17c",
      "DATA",
      [
        "storage",
        "01125e30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e0d4 ["INT_ADD", "register:40f0:8", ["const:b4e0d4:8", "const:4:8"]]
- 00b4e0d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4e170 ["INT_ADD", "register:40f0:8", ["const:b4e170:8", "const:4:8"]]
+ 00b4e170 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4e0d0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4e0d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e0d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e0d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e16c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4e16c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e16c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e16c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e0dc ["COPY", "tmp:0:8", ["const:d30:8"]]
- 00b4e0dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4e0dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4e0dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4e178 ["COPY", "tmp:0:8", ["const:e30:8"]]
+ 00b4e178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4e178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4e178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfbf585d9c1d7d461045989b60349ffb"></a>

### [`00b4e0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e0f0.md) → [`00b4e18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e18c.md) _ZN8firebase4util3uri13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4e130",
      "incomplete_value": true,
      "site": "00b4e130",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00b4e10c",
      "incomplete_value": true,
      "site": "00b4e10c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e114",
      "incomplete_value": false,
      "site": "00b4e128",
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
            "const:175:8"
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
      "00b4e1a0",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e1b0",
      "PARAM",
      [
        "storage",
        "002a7175",
        null,
        "string"
      ]
    ],
    [
      "00b4e1cc",
      "WRITE",
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
      "00b4e1a0",
      "READ",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e1b0",
      "PARAM",
      [
        "storage",
        "002a7119",
        null,
        "string"
      ]
    ],
    [
      "00b4e1cc",
      "WRITE",
      [
        "storage",
        "01125e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e128 ["INT_ADD", "register:40f0:8", ["const:b4e128:8", "const:4:8"]]
- 00b4e128 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e1c4 ["INT_ADD", "register:40f0:8", ["const:b4e1c4:8", "const:4:8"]]
+ 00b4e1c4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e130 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00b4e130 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e1cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00b4e1cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e104 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00b4e104 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e1a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00b4e1a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3b86632f992e48ae6a494aa31fe9a453"></a>

### [`00b4e160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e160.md) → [`00b4e1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e1fc.md) _ZN8firebase4util3uri10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00b4e17c",
      "incomplete_value": false,
      "site": "00b4e180",
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
    "old": {
      "definition_site": "00b4e18c",
      "incomplete_value": true,
      "site": "00b4e198",
      "value": [
        "LOAD",
        "8",
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
      "00b4e218",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b4e228",
      "DATA",
      [
        "storage",
        "01125d40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4e218",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4e228",
      "DATA",
      [
        "storage",
        "01125e40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e180 ["INT_ADD", "register:40f0:8", ["const:b4e180:8", "const:4:8"]]
- 00b4e180 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b4e21c ["INT_ADD", "register:40f0:8", ["const:b4e21c:8", "const:4:8"]]
+ 00b4e21c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b4e17c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4e17c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e17c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e17c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4e218 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b4e218 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e218 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4e218 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e188 ["COPY", "tmp:0:8", ["const:d40:8"]]
- 00b4e188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4e188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4e188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4e224 ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00b4e224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4e224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4e224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-618531e74a795f5f70885082448bfa07"></a>

### [`00b4e19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e19c.md) → [`00b4e238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e238.md) _ZN8firebase4util6object19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
    "old": {
      "definition_site": "00b4e1c8",
      "incomplete_value": true,
      "site": "00b4e1c8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00b4e1b0",
      "incomplete_value": true,
      "site": "00b4e1b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e1bc",
      "incomplete_value": false,
      "site": "00b4e1c0",
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
            "const:151:8"
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
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e258",
      "PARAM",
      [
        "storage",
        "002ae151",
        null,
        "string"
      ]
    ],
    [
      "00b4e264",
      "WRITE",
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
      "00b4e248",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e258",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4e264",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e1c0 ["INT_ADD", "register:40f0:8", ["const:b4e1c0:8", "const:4:8"]]
- 00b4e1c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e25c ["INT_ADD", "register:40f0:8", ["const:b4e25c:8", "const:4:8"]]
+ 00b4e25c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e1c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e1c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e264 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e264 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e1ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e1ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e248 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e248 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-83d4f3bbf663ee5f0f543abf676f5217"></a>

### [`00b4e1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e1dc.md) → [`00b4e278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e278.md) _ZN8firebase4util6object19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00b4e208",
      "incomplete_value": true,
      "site": "00b4e208",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00b4e1f0",
      "incomplete_value": true,
      "site": "00b4e1f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e1f8",
      "incomplete_value": false,
      "site": "00b4e200",
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
            "const:151:8"
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
      "00b4e288",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e294",
      "PARAM",
      [
        "storage",
        "002ae151",
        null,
        "string"
      ]
    ],
    [
      "00b4e2a4",
      "WRITE",
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
      "00b4e288",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e294",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4e2a4",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e200 ["INT_ADD", "register:40f0:8", ["const:b4e200:8", "const:4:8"]]
- 00b4e200 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e29c ["INT_ADD", "register:40f0:8", ["const:b4e29c:8", "const:4:8"]]
+ 00b4e29c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e208 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e208 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e2a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e2a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e1ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e1ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e288 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e288 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-81e3de74135d60a91facbe83d8cba3c1"></a>

### [`00b4e21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e21c.md) → [`00b4e2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e2b8.md) _ZN8firebase4util6object10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
    "old": {
      "definition_site": "00b4e24c",
      "incomplete_value": true,
      "site": "00b4e24c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00b4e230",
      "incomplete_value": true,
      "site": "00b4e230",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e23c",
      "incomplete_value": false,
      "site": "00b4e244",
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
            "const:151:8"
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
      "00b4e2c8",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e2d8",
      "PARAM",
      [
        "storage",
        "002ae151",
        null,
        "string"
      ]
    ],
    [
      "00b4e2e8",
      "WRITE",
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
      "00b4e2c8",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e2d8",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4e2e8",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e244 ["INT_ADD", "register:40f0:8", ["const:b4e244:8", "const:4:8"]]
- 00b4e244 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e2e0 ["INT_ADD", "register:40f0:8", ["const:b4e2e0:8", "const:4:8"]]
+ 00b4e2e0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e24c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e24c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e2e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e2e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e22c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e22c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e2c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e2c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1381d6890a4bb27c2b6daf35ee295883"></a>

### [`00b4e260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e260.md) → [`00b4e2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e2fc.md) _ZN8firebase4util6object10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b4e290",
      "incomplete_value": true,
      "site": "00b4e290",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00b4e274",
      "incomplete_value": true,
      "site": "00b4e274",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00b4e27c",
      "incomplete_value": false,
      "site": "00b4e288",
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
            "const:151:8"
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
      "00b4e30c",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e318",
      "PARAM",
      [
        "storage",
        "002ae151",
        null,
        "string"
      ]
    ],
    [
      "00b4e32c",
      "WRITE",
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
      "00b4e30c",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e318",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4e32c",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e288 ["INT_ADD", "register:40f0:8", ["const:b4e288:8", "const:4:8"]]
- 00b4e288 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e324 ["INT_ADD", "register:40f0:8", ["const:b4e324:8", "const:4:8"]]
+ 00b4e324 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4e32c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e32c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4e270 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
- 00b4e270 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e30c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e48:8"]]
+ 00b4e30c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-12802f08bf7662a2b9be54c95a02230d"></a>

### [`00b4e2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e2b0.md) → [`00b4e34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e34c.md) _ZN8firebase4util6object15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4e360",
      "READ",
      [
        "storage",
        "01125d50",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b4e2e4",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4e338",
      "WRITE",
      [
        "storage",
        "01125d50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e360",
      "READ",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4e380",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e3d4",
      "WRITE",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e2c4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d50:8"]]
- 00b4e2c4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4e2c4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b4e360 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e50:8"]]
+ 00b4e360 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b4e360 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b4e2d0 ["BRANCH", null, ["local:b6:8"]]
+ 00b4e36c ["BRANCH", null, ["local:b8:8"]]
- 00b4e2e4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d48:8"]]
- 00b4e2e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8a4ce860857eaf1063acff05491a72ce"></a>

### [`00b4e34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e34c.md) → [`00b4e3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e3e8.md) _ZN8firebase4util6object12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4e360",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4e364",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4e3dc"
      ]
    ],
    [
      "unmatched:00b4e36c",
      "READ",
      [
        "storage",
        "01125d50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4e3fc",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e400",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4e478"
      ]
    ],
    [
      "00b4e408",
      "READ",
      [
        "storage",
        "01125e50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e360 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
- 00b4e360 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4e364 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b4e364 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00b4e368 ["COPY", "register:40a8:8", ["const:1125000:8"]]
~~~


<a id="compare-1e0771c9e468a828adf6063904e8f76a"></a>

### [`00b4e3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e3ec.md) → [`00b4e488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e488.md) _ZN8firebase4util6object14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b4e410",
      "incomplete_value": true,
      "site": "00b4e424",
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
            "const:151:8"
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
      "unmatched:00b4e3ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4e3f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4e400",
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
      "00b4e488",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4e48c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b4e49c",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e424 ["INT_ADD", "register:40f0:8", ["const:b4e424:8", "const:4:8"]]
- 00b4e424 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e4c0 ["INT_ADD", "register:40f0:8", ["const:b4e4c0:8", "const:4:8"]]
+ 00b4e4c0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e3ec ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b4e3ec ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b4e3ec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4e3ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b4e3f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b4e3f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b4e3f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b4e3f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bdf452ca63c7a9cdf842ad08d8f9d43c"></a>

### [`00b4e45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e45c.md) → [`00b4e4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e4f8.md) _ZN8firebase4util6object11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4e50c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4e480"
      ]
    ],
    [
      "unmatched:00b4e478",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b4e47c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b4e50c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4e51c"
      ]
    ],
    [
      "00b4e514",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4e518",
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
- 00b4e470 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b4e470 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b4e50c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b4e50c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b4e478 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b4e478 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e478 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4e478 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4e47c ["INT_ADD", "register:40f0:8", ["const:b4e47c:8", "const:4:8"]]
- 00b4e47c ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-3bea37cbc2370373ad06ceb4494c9417"></a>

### [`00b4e498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e498.md) → [`00b4e534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e534.md) _ZN8firebase4util6object13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b4e4bc",
      "incomplete_value": false,
      "site": "00b4e4d0",
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
            "const:151:8"
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
      "unmatched:00b4e4ac",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4e4bc",
      "PARAM",
      [
        "storage",
        "002ae151",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b4e4d8",
      "WRITE",
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
      "00b4e548",
      "READ",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4e558",
      "PARAM",
      [
        "storage",
        "002ae0f5",
        null,
        "string"
      ]
    ],
    [
      "00b4e574",
      "WRITE",
      [
        "storage",
        "01125e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e4d0 ["INT_ADD", "register:40f0:8", ["const:b4e4d0:8", "const:4:8"]]
- 00b4e4d0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4e56c ["INT_ADD", "register:40f0:8", ["const:b4e56c:8", "const:4:8"]]
+ 00b4e56c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4e4ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
- 00b4e4ac ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4e4b0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-af4c9989ab425ea4cdd56c8aafcea19e"></a>

### [`00b4e508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e508.md) → [`00b4e5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5a4.md) _ZN8firebase4util6object10GetFieldIdENS1_5FieldE

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
      "unmatched:00b4e508",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4e50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b4e5b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4e52c"
      ]
    ]
  ],
  "added": [
    [
      "00b4e5a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4e5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b4e5b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4e5c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e508 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b4e508 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4e508 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b4e50c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b4e50c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b4e50c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b4e50c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b4e510 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b4e510 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b4e510 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b4e510 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-414d3238553d4af2293059bb7ebe46a9"></a>

### [`00b4e544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e544.md) → [`00b4e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5e0.md) _ZN8firebase4util25InitializeActivityClassesEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4f0.md) · 呼出先 9件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00b4eab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4eab4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5b5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5c0.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b4eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4eb50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.50% / 新版 47.50%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 17件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4e75c",
      "incomplete_value": true,
      "site": "00b4e75c",
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
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e6c0",
      "incomplete_value": true,
      "site": "00b4e6c0",
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
            "const:d68:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4e85c",
      "incomplete_value": true,
      "site": "00b4e85c",
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
      "definition_site": "00b4e7c0",
      "incomplete_value": true,
      "site": "00b4e7c0",
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
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4e660",
      "incomplete_value": false,
      "site": "00b4e674",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4e5c4",
      "incomplete_value": false,
      "site": "00b4e5d8",
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
            "const:980:8"
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
      "unmatched:00b4e564",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:00b4e570",
      "WRITE",
      [
        "storage",
        "01125d68",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:00b4e588",
      "READ",
      [
        "storage",
        "011257c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4e600",
      "READ",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4e60c",
      "WRITE",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4e624",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e5d8 ["INT_ADD", "register:40f0:8", ["const:b4e5d8:8", "const:4:8"]]
- 00b4e5d8 ["CALL", null, ["callee:00c5b000:8"]]
+ 00b4e674 ["INT_ADD", "register:40f0:8", ["const:b4e674:8", "const:4:8"]]
+ 00b4e674 ["CALL", null, ["callee:00c5b000:8"]]
- 00b4e630 ["INT_ADD", "register:40f0:8", ["const:b4e630:8", "const:4:8"]]
- 00b4e630 ["CALL", null, ["callee:00c5b000:8"]]
+ 00b4e6cc ["INT_ADD", "register:40f0:8", ["const:b4e6cc:8", "const:4:8"]]
+ 00b4e6cc ["CALL", null, ["callee:00c5b000:8"]]
+ 00b4e630 ["COPY", "register:4018:8", ["const:2be000:8"]]
~~~


<a id="compare-27fa0c6611d49333b262bd2e5d6b8787"></a>

### [`00b4e904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e904.md) → [`00b4e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e9a0.md) _ZN8firebase4util24TerminateActivityClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b4e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4e0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5b5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5b0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 36.11% / 新版 36.11%

優先判定に残った影響 `branch_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 6件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4e9e4",
      "incomplete_value": true,
      "site": "00b4e9e4",
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
      "definition_site": "00b4e948",
      "incomplete_value": true,
      "site": "00b4e948",
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
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4eadc",
      "incomplete_value": true,
      "site": "00b4eadc",
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
      "definition_site": "00b4ea40",
      "incomplete_value": true,
      "site": "00b4ea40",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4eb14",
      "incomplete_value": true,
      "site": "00b4eb14",
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
      "definition_site": "00b4ea78",
      "incomplete_value": true,
      "site": "00b4ea78",
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
      "00b4e9b4",
      "READ",
      [
        "storage",
        "01125d68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4e9bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4e934"
      ]
    ],
    [
      "unmatched:00b4e928",
      "PARAM",
      [
        "storage",
        "002bd0fe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4e9b4",
      "READ",
      [
        "storage",
        "01125e68",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4e9bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4e9d0"
      ]
    ],
    [
      "00b4e9c4",
      "PARAM",
      [
        "storage",
        "002bd0aa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4e9e4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4e9e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4e9e4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:630:8"]]
- 00b4e9e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4ea40 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b4ea40 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
+ 00b4eadc ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b4eadc ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
+ 00b4ea40 ["COPY", "tmp:0:8", ["register:4098:8"]]
+ 00b4ea40 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-64e4f1602260f2e0261343402521e54f"></a>

### [`00b4eab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4eab4.md) → [`00b4eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4eb50.md) FUN_00b4eb50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b4e544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4e544.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b4e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4e5e0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment

命令の説明率　旧版 85.29% / 新版 85.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00b4eb30",
      "incomplete_value": true,
      "site": "00b4eb30",
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00b4ead8",
      "incomplete_value": true,
      "site": "00b4eadc",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ebbc",
      "incomplete_value": true,
      "site": "00b4ebc0",
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
      "00b4eb64",
      "READ",
      [
        "storage",
        "01125d70",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4eaf8",
      "READ",
      [
        "storage",
        "01125d70",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4eb04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4eb80"
      ]
    ]
  ],
  "added": [
    [
      "00b4eb64",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eb94",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4eba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4eb80"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4eadc ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00b4eb78 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00b4eb24 ["INT_ADD", "register:40f0:8", ["const:b4eb24:8", "const:4:8"]]
- 00b4eb24 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b4ebc0 ["INT_ADD", "register:40f0:8", ["const:b4ebc0:8", "const:4:8"]]
+ 00b4ebc0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b4eb30 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d70:8"]]
- 00b4eb30 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4eb30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4ebcc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e70:8"]]
+ 00b4ebcc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4ebcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-55660248efd36b6626e27142171c598d"></a>

### [`00b4eb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4eb3c.md) → [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) _ZN8firebase4util10InitializeEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aea0.md) · 呼出先 13件 [`00b4fbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4f/00b4fbc0.md) [`00b50de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b50/00b50de4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md) · 呼出先 13件 [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 29.90% / 新版 29.90%

優先判定に残った影響 `call_argument_candidate` 48件, `store_condition` 4件, `store_destination` 12件, `unresolved_branch_alignment` 62件, `unresolved_call_alignment` 57件, `unresolved_store_alignment` 30件

アドレスに依存する影響 `branch_value` 4件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00b4eb74",
      "incomplete_value": true,
      "site": "00b4eb74",
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
            "const:d78:8"
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
      "definition_site": "00b4f190",
      "incomplete_value": true,
      "site": "00b4f190",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ee24",
      "incomplete_value": true,
      "site": "00b4ee24",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4f8ac",
      "incomplete_value": true,
      "site": "00b4f8ac",
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
    "old": {
      "definition_site": "00b4f810",
      "incomplete_value": true,
      "site": "00b4f810",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 1
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
        "01125d78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4ec10",
      "WRITE",
      [
        "storage",
        "01125d78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4ec30",
      "READ",
      [
        "storage",
        "01125830",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ec04",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4ec10",
      "WRITE",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b4ec30",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4eb74 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d78:8"]]
- 00b4eb74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b4ec10 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e78:8"]]
+ 00b4ec10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b4ec10 ["COPY", "register:4008:8", ["register:4000:8"]]
- 00b4ec38 ["INT_ADD", "register:40f0:8", ["const:b4ec38:8", "const:4:8"]]
- 00b4ec38 ["CALL", null, ["callee:00c5b000:8"]]
+ 00b4ecd4 ["INT_ADD", "register:40f0:8", ["const:b4ecd4:8", "const:4:8"]]
+ 00b4ecd4 ["CALL", null, ["callee:00c5b000:8"]]
~~~


<a id="compare-1da461f7d07a539bddd6163714f19472"></a>

### [`00b4fbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4f/00b4fbc0.md) → [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) FUN_00b4fc5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00b4eb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4eb3c.md) [`00b50de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b50/00b50de4.md) · 呼出先 1件 [`00c5b380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b380.md)
- 新版 呼出元 2件 [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) · 呼出先 1件 [`00c5b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b450.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 22.31% / 新版 22.31%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `unresolved_branch_alignment` 84件, `unresolved_call_alignment` 148件, `unresolved_store_alignment` 60件

アドレスに依存する影響 `branch_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4fce8",
      "incomplete_value": true,
      "site": "00b4fce8",
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
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4fe3c",
      "incomplete_value": true,
      "site": "00b4fe3c",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4fc78",
      "incomplete_value": true,
      "site": "00b4fc78",
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
      "definition_site": "00b4fbdc",
      "incomplete_value": true,
      "site": "00b4fbdc",
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
      "definition_site": "00b50248",
      "incomplete_value": true,
      "site": "00b50248",
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
      "definition_site": "00b4fd50",
      "incomplete_value": true,
      "site": "00b4fd50",
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
    "ordinal": 9,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4fc70",
      "READ",
      [
        "storage",
        "01125860",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fc78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4fc50"
      ]
    ],
    [
      "00b4fc80",
      "READ",
      [
        "storage",
        "01125868",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4fc70",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4fc78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4fcec"
      ]
    ],
    [
      "00b4fc80",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4fc78 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4fc78 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4fc78 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:838:8"]]
- 00b4fc78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4fd50 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b4fd50 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00b50248 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b50248 ["CBRANCH", null, ["local:b80:8", "tmp:0:1"]]
- 00b4fdcc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b4fdcc ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
+ 00b50a08 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b50a08 ["CBRANCH", null, ["local:b177:8", "tmp:0:1"]]
~~~


<a id="compare-70f0f5f7414b36dc5e9c531c9d0a286e"></a>

### [`00b50de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b50/00b50de4.md) → [`00b50e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50e80.md) _ZN8firebase4util9TerminateEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b4eb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4e/00b4eb3c.md) [`00c5afd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afd0.md) · 呼出先 10件 [`00b4fbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b4f/00b4fbc0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5af00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af00.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b240.md)
- 新版 呼出元 2件 [`00b4ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4e/00b4ebd8.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md) · 呼出先 10件 [`00b4fc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4f/00b4fc5c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)

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
    "old": {
      "definition_site": "00b50e18",
      "incomplete_value": true,
      "site": "00b50e18",
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
            "const:d78:8"
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
    "old": {
      "definition_site": "00b50e7c",
      "incomplete_value": true,
      "site": "00b50e7c",
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
            "const:d80:8"
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
    "old": {
      "definition_site": "00b50e38",
      "incomplete_value": true,
      "site": "00b50e38",
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
      "00b50e94",
      "READ",
      [
        "storage",
        "01125d78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b50ea4",
      "PARAM",
      [
        "storage",
        "002a0ab8",
        null,
        "string"
      ]
    ],
    [
      "00b50eac",
      "READ",
      [
        "storage",
        "01125d78",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b50e94",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ],
    [
      "00b50ea4",
      "PARAM",
      [
        "storage",
        "002a0a6b",
        null,
        "string"
      ]
    ],
    [
      "00b50eac",
      "READ",
      [
        "storage",
        "01125e78",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b50df8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d78:8"]]
- 00b50df8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00b50df8 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
+ 00b50e94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e78:8"]]
+ 00b50e94 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 00b50e94 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 00b50e08 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 00b50e08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b50e08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b50e08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b50ea4 ["COPY", "tmp:0:8", ["const:a6b:8"]]
+ 00b50ea4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b50ea4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b50ea4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b50e0c ["INT_ADD", "register:40f0:8", ["const:b50e0c:8", "const:4:8"]]
- 00b50e0c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b50ea8 ["INT_ADD", "register:40f0:8", ["const:b50ea8:8", "const:4:8"]]
+ 00b50ea8 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-8e687575e1ed528e466da95e4a8f49b0"></a>

### [`00b50efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b50/00b50efc.md) → [`00b50f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b50/00b50f98.md) _ZN8firebase4util18CacheEmbeddedFilesEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3a0.md) · 呼出先 6件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md)
- 新版 呼出元 1件 [`00c5b470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b470.md) · 呼出先 6件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md)

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
    "old": {
      "definition_site": "00b50f20",
      "incomplete_value": true,
      "site": "00b50f28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b50f80",
      "incomplete_value": false,
      "site": "00b50f84",
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
            "const:4ae:8"
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
    "old": {
      "definition_site": "00b50fa0",
      "incomplete_value": true,
      "site": "00b50fbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b50fbc",
      "READ",
      [
        "storage",
        "011257e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5101c",
      "PARAM",
      [
        "storage",
        "002b34ae",
        null,
        "string"
      ]
    ],
    [
      "00b5103c",
      "READ",
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
      "00b50fbc",
      "READ",
      [
        "storage",
        "011258e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5101c",
      "PARAM",
      [
        "storage",
        "002b34df",
        null,
        "string"
      ]
    ],
    [
      "00b5103c",
      "READ",
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
- 00b50f20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7e0:8"]]
- 00b50f20 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b50fbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8e0:8"]]
+ 00b50fbc ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b50f28 ["INT_ADD", "register:40f0:8", ["const:b50f28:8", "const:4:8"]]
- 00b50f28 ["CALL", null, ["callee:00497874:8"]]
+ 00b50fc4 ["INT_ADD", "register:40f0:8", ["const:b50fc4:8", "const:4:8"]]
+ 00b50fc4 ["CALL", null, ["callee:00497874:8"]]
- 00b50f84 ["INT_ADD", "register:40f0:8", ["const:b50f84:8", "const:4:8"]]
- 00b50f84 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b51020 ["INT_ADD", "register:40f0:8", ["const:b51020:8", "const:4:8"]]
+ 00b51020 ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-6a854893355c984a9da58145a39d3b5a"></a>

### [`00b5139c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b5139c.md) → [`00b51438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51438.md) _ZN8firebase4util17JavaThreadContext10InitializeEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b350.md) · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b420.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

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
    "old": {
      "definition_site": "00b513e8",
      "incomplete_value": true,
      "site": "00b513e8",
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
            "const:678:8"
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
    "old": {
      "definition_site": "00b51488",
      "incomplete_value": true,
      "site": "00b51488",
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
            "const:680:8"
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
    "old": {
      "definition_site": "00b514d4",
      "incomplete_value": true,
      "site": "00b514d4",
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
            "const:6b0:8"
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
      "00b51454",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51468",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ],
    [
      "00b51484",
      "WRITE",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b51454",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51468",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b51484",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b513e0 ["INT_ADD", "register:40f0:8", ["const:b513e0:8", "const:4:8"]]
- 00b513e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b5147c ["INT_ADD", "register:40f0:8", ["const:b5147c:8", "const:4:8"]]
+ 00b5147c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b513e8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:678:8"]]
- 00b513e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b51484 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:778:8"]]
+ 00b51484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b51410 ["INT_ADD", "register:40f0:8", ["const:b51410:8", "const:4:8"]]
- 00b51410 ["CALL", null, ["callee:00c5b000:8"]]
+ 00b514ac ["INT_ADD", "register:40f0:8", ["const:b514ac:8", "const:4:8"]]
+ 00b514ac ["CALL", null, ["callee:00c5b000:8"]]
~~~


<a id="compare-092585d3b8ad8c05a007bbd2b06b219a"></a>

### [`00b51510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51510.md) → [`00b515ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b515ac.md) _ZN8firebase4util15CancelCallbacksEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5af00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af00.md) · 呼出先 7件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5b600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b600.md)
- 新版 呼出元 1件 [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) · 呼出先 7件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.80% / 新版 92.80%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b51548",
      "incomplete_value": true,
      "site": "00b5154c",
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
            "const:79c:8"
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
    "old": {
      "definition_site": "00b51694",
      "incomplete_value": true,
      "site": "00b516a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:668:8"
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
      "00b515e0",
      "PARAM",
      [
        "storage",
        "002bd11b",
        null,
        "string"
      ]
    ],
    [
      "00b515e4",
      "PARAM",
      [
        "storage",
        "002bf79c",
        null,
        "string"
      ]
    ],
    [
      "00b51614",
      "PARAM",
      [
        "storage",
        "01125d88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b515e0",
      "PARAM",
      [
        "storage",
        "002bd0c7",
        null,
        "string"
      ]
    ],
    [
      "00b515e4",
      "PARAM",
      [
        "storage",
        "002bf748",
        null,
        "string"
      ]
    ],
    [
      "00b51614",
      "PARAM",
      [
        "storage",
        "01125e88",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5154c ["INT_ADD", "register:40f0:8", ["const:b5154c:8", "const:4:8"]]
- 00b5154c ["CALL", null, ["callee:00c5b200:8"]]
+ 00b515e8 ["INT_ADD", "register:40f0:8", ["const:b515e8:8", "const:4:8"]]
+ 00b515e8 ["CALL", null, ["callee:00c5b200:8"]]
- 00b516a0 ["INT_ADD", "register:40f0:8", ["const:b516a0:8", "const:4:8"]]
- 00b516a0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b5173c ["INT_ADD", "register:40f0:8", ["const:b5173c:8", "const:4:8"]]
+ 00b5173c ["CALL", null, ["callee:00574d2c:8"]]
- 00b51534 ["COPY", "tmp:0:8", ["const:11b:8"]]
- 00b51534 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b51534 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b51534 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b515d0 ["COPY", "tmp:0:8", ["const:c7:8"]]
+ 00b515d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b515d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b515d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff5b740992cfb6b06a54f3dff4e3784b"></a>

### [`00b51704`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51704.md) → [`00b517a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b517a0.md) _ZN7_JNIEnv20CallStaticVoidMethodEP7_jclassP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b240.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 64.10% / 新版 64.10%

アドレスに依存する影響 `store_value` 4件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b517f0",
      "incomplete_value": true,
      "site": "00b517f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:1660:8"
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
    "old": {
      "definition_site": "00b51754",
      "incomplete_value": true,
      "site": "00b51754",
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
      "definition_site": "00b517f4",
      "incomplete_value": true,
      "site": "00b517f4",
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
      "definition_site": "00b51758",
      "incomplete_value": true,
      "site": "00b51758",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b517f4",
      "incomplete_value": false,
      "site": "00b517f4",
      "value": [
        "INT_OR",
        "8",
        [
          [
            "INT_AND",
            "8",
            [
              [
                "leaf",
                "const:ffffffffffffffd8:8"
              ],
              [
                "leaf",
                "const:ffff0000ffffffff:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:ff8000000000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b51758",
      "incomplete_value": true,
      "site": "00b51758",
      "value": [
        "INT_OR",
        "8",
        [
          [
            "INT_AND",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "leaf",
                "const:ffff0000ffffffff:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:ff8000000000:8"
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
      "unmatched:00b51714",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b51718",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5171c",
      "WRITE",
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
      "00b517b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00b517b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00b517b8",
      "WRITE",
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
- 00b51710 ["COPY", "tmp:0:8", ["const:110:8"]]
- 00b51710 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b51710 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b51710 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b51714 ["COPY", "tmp:0:8", ["register:4018:8"]]
- 00b51714 ["COPY", "tmp:1:8", ["register:4020:8"]]
- 00b51714 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:88:8"]]
- 00b51714 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b51718 ["COPY", "tmp:0:8", ["register:4028:8"]]
- 00b51718 ["COPY", "tmp:1:8", ["register:4030:8"]]
- 00b51718 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:98:8"]]
- 00b51718 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-270fd2c5f0c7532414b1772cdcd19c1a"></a>

### [`00b51838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51838.md) → [`00b518d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b518d4.md) _ZN8firebase4util19StdVectorToJavaListEP7_JNIEnvRKNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_ISA_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b420.md) · 呼出先 2件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md)
- 新版 呼出元 1件 [`00c5b4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4f0.md) · 呼出先 2件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b5185c",
      "incomplete_value": true,
      "site": "00b51868",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:830:8"
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
    "old": {
      "definition_site": "00b51860",
      "incomplete_value": true,
      "site": "00b51868",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:840:8"
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
      "00b518f8",
      "READ",
      [
        "storage",
        "01125830",
        null,
        "undefined8"
      ]
    ],
    [
      "00b518fc",
      "READ",
      [
        "storage",
        "01125840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51918",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b518f8",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b518fc",
      "READ",
      [
        "storage",
        "01125940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51918",
      "READ",
      [
        "storage",
        "01125950",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51868 ["INT_ADD", "register:40f0:8", ["const:b51868:8", "const:4:8"]]
- 00b51868 ["CALL", null, ["callee:00589734:8"]]
+ 00b51904 ["INT_ADD", "register:40f0:8", ["const:b51904:8", "const:4:8"]]
+ 00b51904 ["CALL", null, ["callee:00589734:8"]]
- 00b51854 ["COPY", "tmp:0:8", ["const:840:8"]]
- 00b51854 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 00b51854 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 00b51854 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 00b518f0 ["COPY", "tmp:0:8", ["const:940:8"]]
+ 00b518f0 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 00b518f0 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 00b518f0 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
- 00b5185c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:830:8"]]
- 00b5185c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b518f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:930:8"]]
+ 00b518f8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c21ae674ad23792710c12c0e27eb4a31"></a>

### [`00b51940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51940.md) → [`00b519dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b519dc.md) _ZN8firebase4util25StdUnorderedSetToJavaListEP7_JNIEnvRKNSt6__ndk113unordered_setINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b51964",
      "incomplete_value": true,
      "site": "00b51970",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:830:8"
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
    "old": {
      "definition_site": "00b51968",
      "incomplete_value": true,
      "site": "00b51970",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:840:8"
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
      "00b51a00",
      "READ",
      [
        "storage",
        "01125830",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51a04",
      "READ",
      [
        "storage",
        "01125840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51a1c",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b51a00",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51a04",
      "READ",
      [
        "storage",
        "01125940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51a1c",
      "READ",
      [
        "storage",
        "01125950",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51970 ["INT_ADD", "register:40f0:8", ["const:b51970:8", "const:4:8"]]
- 00b51970 ["CALL", null, ["callee:00589734:8"]]
+ 00b51a0c ["INT_ADD", "register:40f0:8", ["const:b51a0c:8", "const:4:8"]]
+ 00b51a0c ["CALL", null, ["callee:00589734:8"]]
- 00b5195c ["COPY", "tmp:0:8", ["const:840:8"]]
- 00b5195c ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00b5195c ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00b5195c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00b519f8 ["COPY", "tmp:0:8", ["const:940:8"]]
+ 00b519f8 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00b519f8 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00b519f8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
- 00b51964 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:830:8"]]
- 00b51964 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b51a00 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:930:8"]]
+ 00b51a00 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-489653c58b42663e7a522d10be86d812"></a>

### [`00b51a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51a38.md) → [`00b51ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51ad4.md) _ZN8firebase4util19VariantMapToJavaMapEP7_JNIEnvRKNSt6__ndk13mapINS_7VariantES5_NS3_4lessIS5_EENS3_9allocatorINS3_4pairIKS5_S5_EEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b430.md) · 呼出先 3件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b440.md)
- 新版 呼出元 1件 [`00c5b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b500.md) · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b510.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.85% / 新版 97.85%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b51a5c",
      "incomplete_value": true,
      "site": "00b51a68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b51a60",
      "incomplete_value": true,
      "site": "00b51a68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b20:8"
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
      "00b51af8",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51afc",
      "READ",
      [
        "storage",
        "01125b20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51b0c",
      "READ",
      [
        "storage",
        "01125c48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b51af8",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51afc",
      "READ",
      [
        "storage",
        "01125c20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51b0c",
      "READ",
      [
        "storage",
        "01125d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51a68 ["INT_ADD", "register:40f0:8", ["const:b51a68:8", "const:4:8"]]
- 00b51a68 ["CALL", null, ["callee:00589734:8"]]
+ 00b51b04 ["INT_ADD", "register:40f0:8", ["const:b51b04:8", "const:4:8"]]
+ 00b51b04 ["CALL", null, ["callee:00589734:8"]]
- 00b51b04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b51b04 ["INT_ADD", "register:40f0:8", ["const:b51b04:8", "const:4:8"]]
- 00b51b04 ["CALLIND", null, ["register:0:8"]]
+ 00b51ba0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b51ba0 ["INT_ADD", "register:40f0:8", ["const:b51ba0:8", "const:4:8"]]
+ 00b51ba0 ["CALLIND", null, ["register:0:8"]]
- 00b51a5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b10:8"]]
- 00b51a5c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b51af8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c10:8"]]
+ 00b51af8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b40330be0a3addaae296cc6a38e5a968"></a>

### [`00b51bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b51bac.md) → [`00b51c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b51c48.md) _ZN8firebase4util19VariantToJavaObjectEP7_JNIEnvRKNS_7VariantE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b440.md) · 呼出先 7件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5ab00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab00.md) [`00c5ab20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab20.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b430.md)
- 新版 呼出元 1件 [`00c5b510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b510.md) · 呼出先 7件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b500.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.09% / 新版 92.09%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b51db8",
      "incomplete_value": false,
      "site": "00b51dbc",
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
            "const:3a7:8"
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
      "00b51c78",
      "DATA",
      [
        "storage",
        "0030b5fa",
        "switchD_00b51be8::switchdataD_0030b5fa",
        "byte"
      ]
    ],
    [
      "00b51ccc",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51cd0",
      "READ",
      [
        "storage",
        "01125c20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b51c78",
      "DATA",
      [
        "storage",
        "0030b63a",
        "switchD_00b51c84::switchdataD_0030b63a",
        "byte"
      ]
    ],
    [
      "00b51ccc",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b51cd0",
      "READ",
      [
        "storage",
        "01125d20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b51dbc ["INT_ADD", "register:40f0:8", ["const:b51dbc:8", "const:4:8"]]
- 00b51dbc ["CALL", null, ["callee:00c5aeb0:8"]]
+ 00b51e58 ["INT_ADD", "register:40f0:8", ["const:b51e58:8", "const:4:8"]]
+ 00b51e58 ["CALL", null, ["callee:00c5aeb0:8"]]
- 00b51bd4 ["COPY", "tmp:0:8", ["const:5fa:8"]]
- 00b51bd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b51bd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b51bd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b51c70 ["COPY", "tmp:0:8", ["const:63a:8"]]
+ 00b51c70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b51c70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b51c70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b51bd8 ["COPY", "register:4050:8", ["const:b51bec:8"]]
~~~


<a id="compare-e24d07e3cdb6984f4687c8348516ca81"></a>

### [`00b520d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b520d8.md) → [`00b52174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52174.md) _ZN8firebase4util15JavaMapToStdMapEP7_JNIEnvPNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0046d5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d5a8.md) [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

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
    "old": {
      "definition_site": "00b52118",
      "incomplete_value": true,
      "site": "00b52120",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
    "old": {
      "definition_site": "00b52164",
      "incomplete_value": true,
      "site": "00b52170",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00b521b4",
      "incomplete_value": true,
      "site": "00b521c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
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
      "00b521b4",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52200",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52250",
      "READ",
      [
        "storage",
        "01125bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b521b4",
      "READ",
      [
        "storage",
        "01125d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52200",
      "READ",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52250",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b52120 ["INT_ADD", "register:40f0:8", ["const:b52120:8", "const:4:8"]]
- 00b52120 ["CALL", null, ["callee:00497874:8"]]
+ 00b521bc ["INT_ADD", "register:40f0:8", ["const:b521bc:8", "const:4:8"]]
+ 00b521bc ["CALL", null, ["callee:00497874:8"]]
- 00b52170 ["INT_ADD", "register:40f0:8", ["const:b52170:8", "const:4:8"]]
- 00b52170 ["CALL", null, ["callee:00497874:8"]]
+ 00b5220c ["INT_ADD", "register:40f0:8", ["const:b5220c:8", "const:4:8"]]
+ 00b5220c ["CALL", null, ["callee:00497874:8"]]
- 00b521c4 ["INT_ADD", "register:40f0:8", ["const:b521c4:8", "const:4:8"]]
- 00b521c4 ["CALL", null, ["callee:00497a88:8"]]
+ 00b52260 ["INT_ADD", "register:40f0:8", ["const:b52260:8", "const:4:8"]]
+ 00b52260 ["CALL", null, ["callee:00497a88:8"]]
~~~


<a id="compare-7f9af2d3767a7fc641e8a1cf16e8114f"></a>

### [`00b52594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b52594.md) → [`00b52630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52630.md) _ZN8firebase4util15JStringToStringEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b526c4",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b5267c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b526c4",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00b52718",
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
- 00b525cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b525cc ["INT_ADD", "register:40f0:8", ["const:b525cc:8", "const:4:8"]]
- 00b525cc ["CALLIND", null, ["register:0:8"]]
+ 00b52668 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b52668 ["INT_ADD", "register:40f0:8", ["const:b52668:8", "const:4:8"]]
+ 00b52668 ["CALLIND", null, ["register:0:8"]]
- 00b525dc ["INT_ADD", "register:40f0:8", ["const:b525dc:8", "const:4:8"]]
- 00b525dc ["CALL", null, ["callee:00c580b0:8"]]
+ 00b52678 ["INT_ADD", "register:40f0:8", ["const:b52678:8", "const:4:8"]]
+ 00b52678 ["CALL", null, ["callee:00c580b0:8"]]
- 00b525e4 ["CBRANCH", null, ["local:b10:8", "register:102:1"]]
+ 00b52680 ["CBRANCH", null, ["local:b11:8", "register:102:1"]]
~~~


<a id="compare-1e248403227ea24168bd1403debcacfb"></a>

### [`00b526b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b526b0.md) → [`00b5274c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b5274c.md) FUN_00b5274c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b526ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b526ac.md) [`00b529b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b529b4.md) · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 2件 [`00b52748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52748.md) [`00b52a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52a50.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)

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
    "old": {
      "definition_site": "00b526f0",
      "incomplete_value": true,
      "site": "00b526f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
    "old": {
      "definition_site": "00b5273c",
      "incomplete_value": true,
      "site": "00b52748",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00b5278c",
      "incomplete_value": true,
      "site": "00b5279c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
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
      "00b5278c",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b527d8",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52828",
      "READ",
      [
        "storage",
        "01125bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5278c",
      "READ",
      [
        "storage",
        "01125d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b527d8",
      "READ",
      [
        "storage",
        "01125d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52828",
      "READ",
      [
        "storage",
        "01125cc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b526f8 ["INT_ADD", "register:40f0:8", ["const:b526f8:8", "const:4:8"]]
- 00b526f8 ["CALL", null, ["callee:00497874:8"]]
+ 00b52794 ["INT_ADD", "register:40f0:8", ["const:b52794:8", "const:4:8"]]
+ 00b52794 ["CALL", null, ["callee:00497874:8"]]
- 00b52748 ["INT_ADD", "register:40f0:8", ["const:b52748:8", "const:4:8"]]
- 00b52748 ["CALL", null, ["callee:00497874:8"]]
+ 00b527e4 ["INT_ADD", "register:40f0:8", ["const:b527e4:8", "const:4:8"]]
+ 00b527e4 ["CALL", null, ["callee:00497874:8"]]
- 00b5279c ["INT_ADD", "register:40f0:8", ["const:b5279c:8", "const:4:8"]]
- 00b5279c ["CALL", null, ["callee:00497a88:8"]]
+ 00b52838 ["INT_ADD", "register:40f0:8", ["const:b52838:8", "const:4:8"]]
+ 00b52838 ["CALL", null, ["callee:00497a88:8"]]
~~~


<a id="compare-5718319c6f412101d12073810bdeadc5"></a>

### [`00b529b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b52/00b529b4.md) → [`00b52a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b52/00b52a50.md) _ZN8firebase4util19JavaObjectToVariantEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b410.md) · 呼出先 19件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`0057be0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057b/0057be0c.md) [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md)
- 新版 呼出元 1件 [`00c5b4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4e0.md) · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`0057be4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057be4c.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.02% / 新版 85.02%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b529ec",
      "incomplete_value": true,
      "site": "00b529fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
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
    "old": {
      "definition_site": "00b52a48",
      "incomplete_value": true,
      "site": "00b52a58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b52ad4",
      "incomplete_value": true,
      "site": "00b52ae4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:880:8"
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
      "00b52a88",
      "READ",
      [
        "storage",
        "01125cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52ae4",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52b04",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b52a88",
      "READ",
      [
        "storage",
        "01125dd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52ae4",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b52b04",
      "READ",
      [
        "storage",
        "01125b30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b529fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b529fc ["INT_ADD", "register:40f0:8", ["const:b529fc:8", "const:4:8"]]
- 00b529fc ["CALLIND", null, ["register:0:8"]]
+ 00b52a98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b52a98 ["INT_ADD", "register:40f0:8", ["const:b52a98:8", "const:4:8"]]
+ 00b52a98 ["CALLIND", null, ["register:0:8"]]
- 00b52a48 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a10:8"]]
- 00b52a48 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b52ae4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b10:8"]]
+ 00b52ae4 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b52a58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b52a58 ["INT_ADD", "register:40f0:8", ["const:b52a58:8", "const:4:8"]]
- 00b52a58 ["CALLIND", null, ["register:0:8"]]
+ 00b52af4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b52af4 ["INT_ADD", "register:40f0:8", ["const:b52af4:8", "const:4:8"]]
+ 00b52af4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3a5909c1d7eec780a681b83aa6f6b92a"></a>

### [`00b530cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b530cc.md) → [`00b53168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53168.md) _ZN8firebase4util24JavaSetToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_ISA

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4d0.md) · 呼出先 9件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5a0.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.62% / 新版 65.62%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5315c",
      "incomplete_value": true,
      "site": "00b53164",
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
      "definition_site": "00b5321c",
      "incomplete_value": true,
      "site": "00b53224",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b53220",
      "incomplete_value": true,
      "site": "00b53224",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 13,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b530d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b530d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b530f0",
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
      "00b5316c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b53170",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b5318c",
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
- 00b53164 ["INT_ADD", "register:40f0:8", ["const:b53164:8", "const:4:8"]]
- 00b53164 ["CALL", null, ["callee:00497a88:8"]]
+ 00b53200 ["INT_ADD", "register:40f0:8", ["const:b53200:8", "const:4:8"]]
+ 00b53200 ["CALL", null, ["callee:00497a88:8"]]
- 00b53224 ["INT_ADD", "register:40f0:8", ["const:b53224:8", "const:4:8"]]
- 00b53224 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b532c0 ["INT_ADD", "register:40f0:8", ["const:b532c0:8", "const:4:8"]]
+ 00b532c0 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b53224 ["INT_ADD", "register:40f0:8", ["const:b53224:8", "const:4:8"]]
+ 00b53224 ["CALL", null, ["callee:00497a88:8"]]
~~~


<a id="compare-bb72e430cb9c783a2ebf8a20e6098fc5"></a>

### [`00b5334c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b5334c.md) → [`00b533e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b533e8.md) _ZN8firebase4util17JniStringToStringEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md) · 呼出先 1件 [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md)
- 新版 呼出元 1件 [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md) · 呼出先 1件 [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 53.85% / 新版 53.85%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b5334c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53350",
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
      "00b533e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b533ec",
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
- 00b5334c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b5334c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b5334c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b5334c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b53350 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b53350 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b53350 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b53350 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b53354 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b53354 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b53354 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b53354 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-0e7f6bc4dcf31767cab5da58d35ccaf2"></a>

### [`00b53380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53380.md) → [`00b5341c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b5341c.md) _ZN8firebase4util23VariantVectorToJavaListEP7_JNIEnvRKNSt6__ndk16vectorINS_7VariantENS3_9allocatorIS5_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4c0.md) · 呼出先 3件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5b440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b440.md)
- 新版 呼出元 1件 [`00c5b590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b590.md) · 呼出先 3件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b510.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.45% / 新版 53.45%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53444",
      "incomplete_value": true,
      "site": "00b5344c",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b533d4",
      "incomplete_value": true,
      "site": "00b533dc",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5348c",
      "incomplete_value": true,
      "site": "00b53494",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b53380",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53384",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53388",
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
      "00b5341c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b53420",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b53424",
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
- 00b533b0 ["INT_ADD", "register:40f0:8", ["const:b533b0:8", "const:4:8"]]
- 00b533b0 ["CALL", null, ["callee:00589734:8"]]
+ 00b5344c ["INT_ADD", "register:40f0:8", ["const:b5344c:8", "const:4:8"]]
+ 00b5344c ["CALL", null, ["callee:00589734:8"]]
- 00b533dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b533dc ["INT_ADD", "register:40f0:8", ["const:b533dc:8", "const:4:8"]]
- 00b533dc ["CALLIND", null, ["register:0:8"]]
+ 00b53478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b53478 ["INT_ADD", "register:40f0:8", ["const:b53478:8", "const:4:8"]]
+ 00b53478 ["CALLIND", null, ["register:0:8"]]
- 00b533f8 ["INT_ADD", "register:40f0:8", ["const:b533f8:8", "const:4:8"]]
- 00b533f8 ["CALL", null, ["callee:00c5b510:8"]]
+ 00b53494 ["INT_ADD", "register:40f0:8", ["const:b53494:8", "const:4:8"]]
+ 00b53494 ["CALL", null, ["callee:00c5b510:8"]]
~~~


<a id="compare-e3aaf4ee08d4c8d5abad2692e9482aba"></a>

### [`00b53468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53468.md) → [`00b53504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53504.md) _ZN8firebase4util25JavaListToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS8_IS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5abb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abb0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b53514",
      "incomplete_value": true,
      "site": "00b53518",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b535c0",
      "incomplete_value": true,
      "site": "00b535c8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b53610",
      "incomplete_value": true,
      "site": "00b5361c",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b53478",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5347c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53498",
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
      "00b53514",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b53518",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b53534",
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
- 00b53518 ["INT_ADD", "register:40f0:8", ["const:b53518:8", "const:4:8"]]
- 00b53518 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b535b4 ["INT_ADD", "register:40f0:8", ["const:b535b4:8", "const:4:8"]]
+ 00b535b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b53518 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 00b53518 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 00b53518 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
+ 00b53518 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b5352c ["INT_ADD", "register:40f0:8", ["const:b5352c:8", "const:4:8"]]
- 00b5352c ["CALL", null, ["callee:00c5ac80:8"]]
+ 00b535c8 ["INT_ADD", "register:40f0:8", ["const:b535c8:8", "const:4:8"]]
+ 00b535c8 ["CALL", null, ["callee:00c5ac80:8"]]
~~~


<a id="compare-ba480d3b922b26267f8d39617414e58b"></a>

### [`00b53640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53640.md) → [`00b536dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b536dc.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5abb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abb0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b536ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b537c0"
      ]
    ]
  ],
  "added": [
    [
      "00b53788",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b537c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5369c ["INT_ADD", "register:40f0:8", ["const:b5369c:8", "const:4:8"]]
- 00b5369c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b53738 ["INT_ADD", "register:40f0:8", ["const:b53738:8", "const:4:8"]]
+ 00b53738 ["CALL", null, ["callee:00c57f60:8"]]
- 00b536e8 ["INT_LESSEQUAL", "register:105:1", ["register:4098:8", "register:4058:8"]]
- 00b536e8 ["INT_SBORROW", "register:106:1", ["register:4058:8", "register:4098:8"]]
- 00b536e8 ["INT_SUB", "tmp:0:8", ["register:4058:8", "register:4098:8"]]
- 00b536e8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b536ec ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
~~~


<a id="compare-a357cc191c9338621d74a21e3c6a119f"></a>

### [`00b53750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53750.md) → [`00b537ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b537ec.md) _ZN8firebase4util31JavaObjectListToStdStringVectorEP7_JNIEnvPNSt6__ndk16vectorINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5abb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abb0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.89% / 新版 83.89%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b5378c",
      "incomplete_value": true,
      "site": "00b53794",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c00:8"
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
      "definition_site": "00b538ac",
      "incomplete_value": true,
      "site": "00b538b4",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b538a8",
      "incomplete_value": true,
      "site": "00b538b4",
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
      "00b53828",
      "READ",
      [
        "storage",
        "01125c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b538cc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b53874"
      ]
    ],
    [
      "unmatched:00b53870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53a0c"
      ]
    ]
  ],
  "added": [
    [
      "00b53828",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b538cc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53910"
      ]
    ],
    [
      "00b5390c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53a0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53794 ["INT_ADD", "register:40f0:8", ["const:b53794:8", "const:4:8"]]
- 00b53794 ["CALL", null, ["callee:005762f8:8"]]
+ 00b53830 ["INT_ADD", "register:40f0:8", ["const:b53830:8", "const:4:8"]]
+ 00b53830 ["CALL", null, ["callee:005762f8:8"]]
- 00b53818 ["INT_ADD", "register:40f0:8", ["const:b53818:8", "const:4:8"]]
- 00b53818 ["CALL", null, ["callee:00c5ac80:8"]]
+ 00b538b4 ["INT_ADD", "register:40f0:8", ["const:b538b4:8", "const:4:8"]]
+ 00b538b4 ["CALL", null, ["callee:00c5ac80:8"]]
- 00b53830 ["BRANCH", null, ["local:b16:8"]]
+ 00b538cc ["BRANCH", null, ["local:b14:8"]]
~~~


<a id="compare-39e3dc208be61e25e7eed1b28c6f7099"></a>

### [`00b539a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b539a4.md) → [`00b53a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53a40.md) _ZN8firebase4util17JniObjectToStringEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md) [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.55% / 新版 79.55%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53a5c",
      "incomplete_value": true,
      "site": "00b53a64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b539c0",
      "incomplete_value": true,
      "site": "00b539c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b539a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b539a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b539ac",
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
      "00b53a40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b53a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b53a48",
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
- 00b539c8 ["INT_ADD", "register:40f0:8", ["const:b539c8:8", "const:4:8"]]
- 00b539c8 ["CALL", null, ["callee:00497874:8"]]
+ 00b53a64 ["INT_ADD", "register:40f0:8", ["const:b53a64:8", "const:4:8"]]
+ 00b53a64 ["CALL", null, ["callee:00497874:8"]]
- 00b539a4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b539a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b539a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b539a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b539a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b539a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b539a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-860b6d56106a684fc3daad4f3ca7e29c"></a>

### [`00b53a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53a54.md) → [`00b53af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53af0.md) _ZN8firebase4util21JavaListToVariantListEP7_JNIEnvPNSt6__ndk16vectorINS_7VariantENS3_9allocatorIS5_EEEEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4a0.md) · 呼出先 8件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00c5b570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b570.md) · 呼出先 8件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.88% / 新版 82.88%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b53a84",
      "incomplete_value": true,
      "site": "00b53a98",
      "value": [
        "live",
        "register:4010:8"
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
      "definition_site": "00b53a90",
      "incomplete_value": true,
      "site": "00b53a98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c00:8"
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
    "old": {
      "definition_site": "00b53b58",
      "incomplete_value": true,
      "site": "00b53b68",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:bf0:8"
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
      "unmatched:00b53a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b53b2c",
      "READ",
      [
        "storage",
        "01125c00",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b53ab4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53b74"
      ]
    ]
  ],
  "added": [
    [
      "00b53b24",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b53b2c",
      "READ",
      [
        "storage",
        "01125d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53b50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53b74"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53a98 ["INT_ADD", "register:40f0:8", ["const:b53a98:8", "const:4:8"]]
- 00b53a98 ["CALL", null, ["callee:005762f8:8"]]
+ 00b53b34 ["INT_ADD", "register:40f0:8", ["const:b53b34:8", "const:4:8"]]
+ 00b53b34 ["CALL", null, ["callee:005762f8:8"]]
- 00b53b68 ["INT_ADD", "register:40f0:8", ["const:b53b68:8", "const:4:8"]]
- 00b53b68 ["CALL", null, ["callee:00497874:8"]]
+ 00b53c04 ["INT_ADD", "register:40f0:8", ["const:b53c04:8", "const:4:8"]]
+ 00b53c04 ["CALL", null, ["callee:00497874:8"]]
- 00b53a84 ["COPY", "register:4008:8", ["register:4098:8"]]
~~~


<a id="compare-2e541bec7fff0dbacac9f948a3ffa359"></a>

### [`00b53c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53c10.md) → [`00b53cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53cac.md) _ZNSt6__ndk16vectorIN8firebase7VariantENS_9allocatorIS2_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b630.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b700.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 77.46% / 新版 77.46%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53d08",
      "incomplete_value": true,
      "site": "00b53d0c",
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
                "register:4008:8"
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
      "definition_site": "00b53c6c",
      "incomplete_value": true,
      "site": "00b53c70",
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
      "unmatched:00b53c44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53db0"
      ]
    ],
    [
      "unmatched:00b53c58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53dc4"
      ]
    ],
    [
      "unmatched:00b53cdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53d94"
      ]
    ]
  ],
  "added": [
    [
      "00b53ce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53db0"
      ]
    ],
    [
      "00b53cf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53dc4"
      ]
    ],
    [
      "00b53d78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b53d94"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53c70 ["INT_ADD", "register:40f0:8", ["const:b53c70:8", "const:4:8"]]
- 00b53c70 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b53d0c ["INT_ADD", "register:40f0:8", ["const:b53d0c:8", "const:4:8"]]
+ 00b53d0c ["CALL", null, ["callee:00c57f60:8"]]
- 00b53c20 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00b53c20 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b53c20 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b53c20 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b53c38 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
~~~


<a id="compare-d15436ff269ed233979405ec3b8a77c1"></a>

### [`00b53d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53d2c.md) → [`00b53dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53dc8.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2IDnEEPKc

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b53d2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53d30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53d34",
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
      "00b53dc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b53dcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b53dd0",
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
- 00b53d2c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b53d2c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b53d2c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b53d2c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b53d30 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b53d30 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b53d30 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b53d30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b53d34 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b53d34 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b53d34 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b53d34 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-002de4af12e6c07935ff39fc5bd62da3"></a>

### [`00b53dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53dc0.md) → [`00b53e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53e5c.md) _ZN8firebase4util8IsJArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 85.37% / 新版 85.37%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b53dec",
      "incomplete_value": true,
      "site": "00b53df4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53e8c",
      "incomplete_value": true,
      "site": "00b53e90",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00b53df0",
      "incomplete_value": true,
      "site": "00b53df4",
      "value": [
        "live",
        "register:4000:8"
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
      "definition_site": "00b53de4",
      "incomplete_value": true,
      "site": "00b53df4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b53e80",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b53e20",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b53e4c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b53e80",
      "READ",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b53ebc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b53ee8",
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
- 00b53df4 ["INT_ADD", "register:40f0:8", ["const:b53df4:8", "const:4:8"]]
- 00b53df4 ["CALL", null, ["callee:00497a88:8"]]
+ 00b53e90 ["INT_ADD", "register:40f0:8", ["const:b53e90:8", "const:4:8"]]
+ 00b53e90 ["CALL", null, ["callee:00497a88:8"]]
- 00b53ddc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b53ddc ["INT_ADD", "register:40f0:8", ["const:b53ddc:8", "const:4:8"]]
- 00b53ddc ["CALLIND", null, ["register:0:8"]]
+ 00b53e78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b53e78 ["INT_ADD", "register:40f0:8", ["const:b53e78:8", "const:4:8"]]
+ 00b53e78 ["CALLIND", null, ["register:0:8"]]
- 00b53de4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 00b53de4 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b53e80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 00b53e80 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f74a5d298672c71e6ac8fdf79e63d514"></a>

### [`00b53e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53e64.md) → [`00b53f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53f00.md) _ZN8firebase4util16JObjectClassNameEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53f28",
      "incomplete_value": true,
      "site": "00b53f34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b53e8c",
      "incomplete_value": true,
      "site": "00b53e98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:970:8"
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
      "definition_site": "00b53edc",
      "incomplete_value": true,
      "site": "00b53ee4",
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
      "00b53f28",
      "READ",
      [
        "storage",
        "01125970",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b53f28",
      "READ",
      [
        "storage",
        "01125a70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53e98 ["INT_ADD", "register:40f0:8", ["const:b53e98:8", "const:4:8"]]
- 00b53e98 ["CALL", null, ["callee:00497874:8"]]
+ 00b53f34 ["INT_ADD", "register:40f0:8", ["const:b53f34:8", "const:4:8"]]
+ 00b53f34 ["CALL", null, ["callee:00497874:8"]]
- 00b53ee4 ["INT_ADD", "register:40f0:8", ["const:b53ee4:8", "const:4:8"]]
- 00b53ee4 ["CALL", null, ["callee:00c5aff0:8"]]
+ 00b53f80 ["INT_ADD", "register:40f0:8", ["const:b53f80:8", "const:4:8"]]
+ 00b53f80 ["CALL", null, ["callee:00c5aff0:8"]]
- 00b53e84 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b53e84 ["INT_ADD", "register:40f0:8", ["const:b53e84:8", "const:4:8"]]
- 00b53e84 ["CALLIND", null, ["register:0:8"]]
+ 00b53f20 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b53f20 ["INT_ADD", "register:40f0:8", ["const:b53f20:8", "const:4:8"]]
+ 00b53f20 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d6e14359839f699a858e475a28556ea0"></a>

### [`00b53f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53f08.md) → [`00b53fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53fa4.md) _ZN8firebase4util14JBooleanToBoolEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b2e0.md) · 呼出先 1件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md)
- 新版 呼出元 1件 [`00c5b3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3b0.md) · 呼出先 1件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 48.15% / 新版 48.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b53fb4",
      "incomplete_value": true,
      "site": "00b53fbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:998:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b53f18",
      "incomplete_value": true,
      "site": "00b53f20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:898:8"
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
      "unmatched:00b53f08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b53fb4",
      "READ",
      [
        "storage",
        "01125898",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b53fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b53fa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b53fb4",
      "READ",
      [
        "storage",
        "01125998",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b53f20 ["INT_ADD", "register:40f0:8", ["const:b53f20:8", "const:4:8"]]
- 00b53f20 ["CALL", null, ["callee:00497a88:8"]]
+ 00b53fbc ["INT_ADD", "register:40f0:8", ["const:b53fbc:8", "const:4:8"]]
+ 00b53fbc ["CALL", null, ["callee:00497a88:8"]]
- 00b53f08 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b53f08 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b53f08 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b53f08 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b53f0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b53f0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b53f0c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b53f0c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-15a92375d8513963f979c5eca362d3ba"></a>

### [`00b53f74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53f74.md) → [`00b54010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54010.md) _ZN8firebase4util12JByteToUInt8EP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b200.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54020",
      "incomplete_value": true,
      "site": "00b54028",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b53f84",
      "incomplete_value": true,
      "site": "00b53f8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:920:8"
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
      "00b54020",
      "READ",
      [
        "storage",
        "01125920",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b53fa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b53fcc"
      ]
    ],
    [
      "unmatched:00b53fcc",
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
      "00b54020",
      "READ",
      [
        "storage",
        "01125a20",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54044",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b54068"
      ]
    ],
    [
      "00b54068",
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
- 00b53f8c ["INT_ADD", "register:40f0:8", ["const:b53f8c:8", "const:4:8"]]
- 00b53f8c ["CALL", null, ["callee:00c5b2d0:8"]]
+ 00b54028 ["INT_ADD", "register:40f0:8", ["const:b54028:8", "const:4:8"]]
+ 00b54028 ["CALL", null, ["callee:00c5b2d0:8"]]
- 00b53f84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:920:8"]]
- 00b53f84 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b54020 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a20:8"]]
+ 00b54020 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b53f9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:720:8"]]
- 00b53f9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e1454f4b4905559d6ba0b7fa340f865d"></a>

### [`00b53fdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b53/00b53fdc.md) → [`00b54078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54078.md) _ZN7_JNIEnv14CallByteMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b200.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2d0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 56.41% / 新版 56.41%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b540e0",
      "incomplete_value": true,
      "site": "00b540ec",
      "value": [
        "INT_SUB",
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
    "old": {
      "definition_site": "00b54044",
      "incomplete_value": true,
      "site": "00b54050",
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
      "unmatched:00b53fe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b53fe4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5402c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b5407c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b54080",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b540c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b54050 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54050 ["INT_ADD", "register:40f0:8", ["const:b54050:8", "const:4:8"]]
- 00b54050 ["CALLIND", null, ["register:0:8"]]
+ 00b540ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b540ec ["INT_ADD", "register:40f0:8", ["const:b540ec:8", "const:4:8"]]
+ 00b540ec ["CALLIND", null, ["register:0:8"]]
- 00b53fdc ["INT_SUB", "register:8:8", ["register:8:8", "const:120:8"]]
- 00b53fe0 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b53fe0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b53fe0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:100:8"]]
- 00b53fe0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d11735143d85641de6591b06f4cf1a46"></a>

### [`00b54078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54078.md) → [`00b54114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54114.md) _ZN8firebase4util11JCharToCharEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_call_alignment` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54124",
      "incomplete_value": true,
      "site": "00b5412c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54088",
      "incomplete_value": true,
      "site": "00b54090",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:948:8"
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
      "00b54124",
      "READ",
      [
        "storage",
        "01125948",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b540a4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b540bc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54124",
      "READ",
      [
        "storage",
        "01125a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54140",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b54158",
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
- 00b54090 ["INT_ADD", "register:40f0:8", ["const:b54090:8", "const:4:8"]]
- 00b54090 ["CALL", null, ["callee:00c5b2e0:8"]]
+ 00b5412c ["INT_ADD", "register:40f0:8", ["const:b5412c:8", "const:4:8"]]
+ 00b5412c ["CALL", null, ["callee:00c5b2e0:8"]]
- 00b54088 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:948:8"]]
- 00b54088 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b54124 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a48:8"]]
+ 00b54124 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b540a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:720:8"]]
- 00b540a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b63fb0b8c4dff7d8a4f8f70c6af6b6bf"></a>

### [`00b540e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b540e0.md) → [`00b5417c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b5417c.md) _ZN7_JNIEnv14CallCharMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b210.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2e0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_target, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

アドレスに依存する影響 `call_target` 1件, `store_value` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b541e0",
      "incomplete_value": true,
      "site": "00b541ec",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54144",
      "incomplete_value": true,
      "site": "00b54150",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b541e0",
      "incomplete_value": true,
      "site": "00b541ec",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
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
      "definition_site": "00b54144",
      "incomplete_value": true,
      "site": "00b54150",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "00b541f0",
      "incomplete_value": true,
      "site": "00b541f0",
      "value": [
        "LOAD",
        "8",
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
                "const:160:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54154",
      "incomplete_value": true,
      "site": "00b54154",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:160:8"
              ]
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
      "unmatched:00b54130",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54134",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54138",
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
      "00b541cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b541d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b541d4",
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
- 00b54154 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54154 ["INT_ADD", "register:40f0:8", ["const:b54154:8", "const:4:8"]]
- 00b54154 ["CALLIND", null, ["register:0:8"]]
+ 00b541f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b541f0 ["INT_ADD", "register:40f0:8", ["const:b541f0:8", "const:4:8"]]
+ 00b541f0 ["CALLIND", null, ["register:0:8"]]
- 00b54118 ["COPY", "register:4048:8", ["register:8:8"]]
- 00b5411c ["COPY", "tmp:0:8", ["const:88:8"]]
- 00b5411c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b5411c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b5411c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-535cfea1758a77cc981797fba9a7dc87"></a>

### [`00b5417c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b5417c.md) → [`00b54218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54218.md) _ZN8firebase4util13JShortToInt16EP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b220.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2f0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b5418c",
      "incomplete_value": true,
      "site": "00b54194",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
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
      "00b54228",
      "READ",
      [
        "storage",
        "01125cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b541a8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b541c0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54228",
      "READ",
      [
        "storage",
        "01125dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b54244",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b5425c",
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
- 00b54194 ["INT_ADD", "register:40f0:8", ["const:b54194:8", "const:4:8"]]
- 00b54194 ["CALL", null, ["callee:00c5b2f0:8"]]
+ 00b54230 ["INT_ADD", "register:40f0:8", ["const:b54230:8", "const:4:8"]]
+ 00b54230 ["CALL", null, ["callee:00c5b2f0:8"]]
- 00b5418c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc0:8"]]
- 00b5418c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b54228 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc0:8"]]
+ 00b54228 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00b541a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b541a8 ["INT_ADD", "register:40f0:8", ["const:b541a8:8", "const:4:8"]]
- 00b541a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-add14ca2590310acdda3e3392bdb39b0"></a>

### [`00b541e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b541e4.md) → [`00b54280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54280.md) _ZN7_JNIEnv15CallShortMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b220.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2f0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 41.03% / 新版 41.03%

アドレスに依存する影響 `store_destination` 2件, `store_value` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b542a8",
      "incomplete_value": true,
      "site": "00b542a8",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54238",
      "incomplete_value": true,
      "site": "00b54238",
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
            "const:ffffffffffffffd8:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b542a8",
      "value": [
        "live",
        "register:50c0:16"
      ]
    },
    "old": {
      "definition_site": "00b54238",
      "incomplete_value": true,
      "site": "00b54238",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b542a8",
      "incomplete_value": true,
      "site": "00b542a8",
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
                "const:60:8"
              ]
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
      "definition_site": "00b54238",
      "incomplete_value": true,
      "site": "00b54238",
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffd8:8"
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
    "ordinal": 19,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b541f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b541f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b541fc",
      "WRITE",
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
      "00b54290",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00b54294",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "00b54298",
      "WRITE",
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
- 00b54238 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00b54238 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00b54238 ["INT_ADD", "tmp:2:8", ["register:40e8:8", "const:ffffffffffffffd8:8"]]
- 00b54238 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 00b542a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:60:8"]]
+ 00b542a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:50c0:16"]]
+ 00b542a8 ["INT_ADD", "tmp:1:8", ["tmp:0:8", "const:10:8"]]
+ 00b542a8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "register:50e0:16"]]
- 00b541f4 ["COPY", "tmp:0:8", ["register:4018:8"]]
- 00b541f4 ["COPY", "tmp:1:8", ["register:4020:8"]]
- 00b541f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:88:8"]]
- 00b541f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b541f8 ["COPY", "tmp:0:8", ["register:4028:8"]]
- 00b541f8 ["COPY", "tmp:1:8", ["register:4030:8"]]
- 00b541f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:98:8"]]
- 00b541f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-435fe391068b079f26c91ca143810b92"></a>

### [`00b544cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b544cc.md) → [`00b54568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54568.md) _ZN8firebase4util15IsJBooleanArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment

命令の説明率　旧版 76.67% / 新版 76.67%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b545cc",
      "incomplete_value": true,
      "site": "00b545dc",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b544e8",
      "PARAM",
      [
        "storage",
        "002abf8e",
        null,
        null
      ]
    ],
    [
      "unmatched:00b544f4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54584",
      "PARAM",
      [
        "storage",
        "002abf32",
        null,
        null
      ]
    ],
    [
      "00b545ac",
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
- 00b544e8 ["COPY", "tmp:0:8", ["const:f8e:8"]]
- 00b544e8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b544e8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b544e8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b544ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 00b544ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b544f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b544f4 ["INT_ADD", "register:40f0:8", ["const:b544f4:8", "const:4:8"]]
- 00b544f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ec26f2065d3f171cb2f8cc913f4df816"></a>

### [`00b54544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54544.md) → [`00b545e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b545e0.md) _ZN8firebase4util12IsJByteArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 76.67% / 新版 76.67%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b54560",
      "incomplete_value": false,
      "site": "00b5456c",
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
            "const:db4:8"
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
      "unmatched:00b54560",
      "PARAM",
      [
        "storage",
        "002bbdb4",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54588",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b545a4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b545fc",
      "PARAM",
      [
        "storage",
        "002bbd60",
        null,
        null
      ]
    ],
    [
      "00b54624",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b54640",
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
- 00b5456c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5456c ["INT_ADD", "register:40f0:8", ["const:b5456c:8", "const:4:8"]]
- 00b5456c ["CALLIND", null, ["register:0:8"]]
+ 00b54608 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54608 ["INT_ADD", "register:40f0:8", ["const:b54608:8", "const:4:8"]]
+ 00b54608 ["CALLIND", null, ["register:0:8"]]
- 00b54560 ["COPY", "tmp:0:8", ["const:db4:8"]]
- 00b54560 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b54560 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b54560 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54580 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:100:8"]]
- 00b54580 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c697709b2a932a445e7456ab6ce8de20"></a>

### [`00b545bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b545bc.md) → [`00b54658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54658.md) _ZN8firebase4util12IsJCharArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b545bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b545c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b545d8",
      "PARAM",
      [
        "storage",
        "002b6c11",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54658",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b5465c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b54674",
      "PARAM",
      [
        "storage",
        "002b6c51",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b545bc ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b545bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b545bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b545c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b545c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b545c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b545c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b545d8 ["COPY", "tmp:0:8", ["const:c11:8"]]
- 00b545d8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b545d8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b545d8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-845244b361fee5981125a6b05399050e"></a>

### [`00b54634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54634.md) → [`00b546d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b546d0.md) _ZN8firebase4util13IsJShortArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00b54650",
      "incomplete_value": false,
      "site": "00b5465c",
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
      "unmatched:00b54650",
      "PARAM",
      [
        "storage",
        "002b45cb",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b546ec",
      "PARAM",
      [
        "storage",
        "002b45fc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5465c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5465c ["INT_ADD", "register:40f0:8", ["const:b5465c:8", "const:4:8"]]
- 00b5465c ["CALLIND", null, ["register:0:8"]]
+ 00b546f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b546f8 ["INT_ADD", "register:40f0:8", ["const:b546f8:8", "const:4:8"]]
+ 00b546f8 ["CALLIND", null, ["register:0:8"]]
- 00b54650 ["COPY", "tmp:0:8", ["const:5cb:8"]]
- 00b54650 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b54650 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b54650 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54678 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54678 ["INT_ADD", "register:40f0:8", ["const:b54678:8", "const:4:8"]]
- 00b54678 ["CALLIND", null, ["register:0:8"]]
+ 00b54714 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54714 ["INT_ADD", "register:40f0:8", ["const:b54714:8", "const:4:8"]]
+ 00b54714 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-529a339473acfbf24e47f1f46366af8d"></a>

### [`00b546ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b546ac.md) → [`00b54748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54748.md) _ZN8firebase4util11IsJIntArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b546c8",
      "PARAM",
      [
        "storage",
        "002bad96",
        null,
        null
      ]
    ],
    [
      "unmatched:00b546d4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54764",
      "PARAM",
      [
        "storage",
        "002bad42",
        null,
        null
      ]
    ],
    [
      "00b54770",
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
- 00b546c8 ["COPY", "tmp:0:8", ["const:d96:8"]]
- 00b546c8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b546c8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b546c8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b546cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 00b546cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b546d0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-dc939d619f421175f31280f4c4977bc4"></a>

### [`00b54724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54724.md) → [`00b547c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b547c0.md) _ZN8firebase4util12IsJLongArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 56.67% / 新版 56.67%

優先判定に残った影響 `unresolved_call_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b54740",
      "PARAM",
      [
        "storage",
        "002a83a4",
        null,
        null
      ]
    ],
    [
      "unmatched:00b5474c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b54768",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b547dc",
      "PARAM",
      [
        "storage",
        "002a8348",
        null,
        null
      ]
    ],
    [
      "00b547e8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b54804",
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
- 00b54730 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00b54730 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b54730 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b54730 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b54734 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00b54734 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b54738 ["COPY", "register:40a0:8", ["register:4008:8"]]
~~~


<a id="compare-50188de413aa61d32695983e77fb9a98"></a>

### [`00b5479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b5479c.md) → [`00b54838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54838.md) _ZN8firebase4util13IsJFloatArrayEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b547b8",
      "PARAM",
      [
        "storage",
        "002aa784",
        null,
        null
      ]
    ],
    [
      "unmatched:00b547c4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b547e0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b54854",
      "PARAM",
      [
        "storage",
        "002aa728",
        null,
        null
      ]
    ],
    [
      "00b54860",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b5487c",
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
- 00b547b8 ["COPY", "tmp:0:8", ["const:784:8"]]
- 00b547b8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b547b8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b547b8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b547bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:30:8"]]
- 00b547bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b547c0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-1ba8d9e1725bbecb74c8e04f453095eb"></a>

### [`00b54814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54814.md) → [`00b548b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b548b0.md) _ZN8firebase4util14IsJDoubleArrayEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00b54830",
      "incomplete_value": false,
      "site": "00b5483c",
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
            "const:532:8"
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
      "00b548cc",
      "PARAM",
      [
        "storage",
        "002a9532",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b548cc",
      "PARAM",
      [
        "storage",
        "002a9561",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5483c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5483c ["INT_ADD", "register:40f0:8", ["const:b5483c:8", "const:4:8"]]
- 00b5483c ["CALLIND", null, ["register:0:8"]]
+ 00b548d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b548d8 ["INT_ADD", "register:40f0:8", ["const:b548d8:8", "const:4:8"]]
+ 00b548d8 ["CALLIND", null, ["register:0:8"]]
- 00b54830 ["COPY", "tmp:0:8", ["const:532:8"]]
- 00b54830 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b54830 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b54830 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b548cc ["COPY", "tmp:0:8", ["const:561:8"]]
+ 00b548cc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b548cc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b548cc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b54858 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54858 ["INT_ADD", "register:40f0:8", ["const:b54858:8", "const:4:8"]]
- 00b54858 ["CALLIND", null, ["register:0:8"]]
+ 00b548f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b548f4 ["INT_ADD", "register:40f0:8", ["const:b548f4:8", "const:4:8"]]
+ 00b548f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9e5b269e68b59da8739b0641f956431c"></a>

### [`00b54a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54a10.md) → [`00b54aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54aac.md) _ZN8firebase4util19JByteArrayToVariantEP7_JNIEnvP11_jbyteArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3d0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4a0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.58% / 新版 91.58%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b54b14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b54b70"
      ]
    ],
    [
      "unmatched:00b54b58",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54b60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b54c20"
      ]
    ]
  ],
  "added": [
    [
      "00b54bb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b54b70"
      ]
    ],
    [
      "00b54bf4",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b54bfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b54c20"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b54a50 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54a50 ["INT_ADD", "register:40f0:8", ["const:b54a50:8", "const:4:8"]]
- 00b54a50 ["CALLIND", null, ["register:0:8"]]
+ 00b54aec ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b54aec ["INT_ADD", "register:40f0:8", ["const:b54aec:8", "const:4:8"]]
+ 00b54aec ["CALLIND", null, ["register:0:8"]]
- 00b54a6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54a6c ["INT_ADD", "register:40f0:8", ["const:b54a6c:8", "const:4:8"]]
- 00b54a6c ["CALLIND", null, ["register:0:8"]]
+ 00b54b08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54b08 ["INT_ADD", "register:40f0:8", ["const:b54b08:8", "const:4:8"]]
+ 00b54b08 ["CALLIND", null, ["register:0:8"]]
- 00b54a78 ["INT_ADD", "register:40f0:8", ["const:b54a78:8", "const:4:8"]]
- 00b54a78 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54b14 ["INT_ADD", "register:40f0:8", ["const:b54b14:8", "const:4:8"]]
+ 00b54b14 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-485657702eda38b186beaf2ae6edde44"></a>

### [`00b54b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54b8c.md) → [`00b54c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54c28.md) _ZN8firebase4util19JCharArrayToVariantEP7_JNIEnvP11_jcharArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3e0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4b0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b54bf0",
      "incomplete_value": false,
      "site": "00b54bf4",
      "value": [
        "leaf",
        "const:18:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54cb4",
      "incomplete_value": true,
      "site": "00b54cb8",
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
      "definition_site": "00b54c18",
      "incomplete_value": true,
      "site": "00b54c1c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b54d10",
      "incomplete_value": true,
      "site": "00b54d14",
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
                "register:40b8:8"
              ]
            ]
          ],
          [
            "live",
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b54c74",
      "incomplete_value": true,
      "site": "00b54c78",
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
            "register:40c0:8"
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
      "unmatched:00b54b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54b94",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54b98",
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
      "00b54c2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b54c30",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b54c34",
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
- 00b54bf4 ["INT_ADD", "register:40f0:8", ["const:b54bf4:8", "const:4:8"]]
- 00b54bf4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54c90 ["INT_ADD", "register:40f0:8", ["const:b54c90:8", "const:4:8"]]
+ 00b54c90 ["CALL", null, ["callee:00c57f60:8"]]
- 00b54c1c ["INT_ADD", "register:40f0:8", ["const:b54c1c:8", "const:4:8"]]
- 00b54c1c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54cb8 ["INT_ADD", "register:40f0:8", ["const:b54cb8:8", "const:4:8"]]
+ 00b54cb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54c40 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 00b54c40 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 00b54c40 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
+ 00b54c40 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ce8830ee21836200f46096e72984b7bd"></a>

### [`00b54d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54d0c.md) → [`00b54da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54da8.md) _ZN8firebase4util20JShortArrayToVariantEP7_JNIEnvP12_jshortArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b460.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b530.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.53% / 新版 90.53%

優先判定に残った影響 `unresolved_store_alignment` 13件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b54d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54d14",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b54d18",
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
      "00b54dac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b54db0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b54db4",
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
- 00b54d0c ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 00b54d10 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b54d10 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 00b54d10 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b54d10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b54d14 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b54d14 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b54d14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00b54d14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


