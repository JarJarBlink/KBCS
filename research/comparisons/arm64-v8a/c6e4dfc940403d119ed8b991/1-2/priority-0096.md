# v16.0.2 → v16.0.3 · 最優先の変更候補 (96)

[一覧の目次](README.md)

<a id="compare-a90971b2093df9a7e3134edfb48e11a5"></a>

### [`00bd580c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd580c.md) → [`00bd6800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6800.md) _ZN8firebase4auth12facebookcred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd681c",
      "incomplete_value": false,
      "site": "00bd6820",
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
      "definition_site": "00bd5828",
      "incomplete_value": false,
      "site": "00bd582c",
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
      "00bd681c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd682c",
      "DATA",
      [
        "storage",
        "01126b98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd681c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd682c",
      "DATA",
      [
        "storage",
        "01127b58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd582c ["INT_ADD", "register:40f0:8", ["const:bd582c:8", "const:4:8"]]
- 00bd582c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6820 ["INT_ADD", "register:40f0:8", ["const:bd6820:8", "const:4:8"]]
+ 00bd6820 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5828 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd5828 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5828 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5828 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd681c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd681c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd681c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd681c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5830 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6824 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-26abc72ab68b7195207928f8420e5061"></a>

### [`00bd5848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5848.md) → [`00bd683c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd683c.md) _ZN8firebase4auth12facebookcred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd687c",
      "incomplete_value": true,
      "site": "00bd687c",
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
      "definition_site": "00bd5888",
      "incomplete_value": true,
      "site": "00bd5888",
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
            "const:b88:8"
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
      "definition_site": "00bd6860",
      "incomplete_value": false,
      "site": "00bd6874",
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
            "const:523:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6850",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6860",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd687c",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6850",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6860",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd687c",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5880 ["INT_ADD", "register:40f0:8", ["const:bd5880:8", "const:4:8"]]
- 00bd5880 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6874 ["INT_ADD", "register:40f0:8", ["const:bd6874:8", "const:4:8"]]
+ 00bd6874 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5888 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
- 00bd5888 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd687c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd687c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5854 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6848 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-76e90ad8a87b23bf5fe01e693d63d802"></a>

### [`00bd58b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd58b8.md) → [`00bd68ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd68ac.md) _ZN8firebase4auth12facebookcred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd68c8",
      "incomplete_value": false,
      "site": "00bd68cc",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd68d8",
      "incomplete_value": true,
      "site": "00bd68e4",
      "value": [
        "LOAD",
        "8",
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
      "00bd68c8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd68d8",
      "DATA",
      [
        "storage",
        "01126ba0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd68c8",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd68d8",
      "DATA",
      [
        "storage",
        "01127b60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd58d8 ["INT_ADD", "register:40f0:8", ["const:bd58d8:8", "const:4:8"]]
- 00bd58d8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd68cc ["INT_ADD", "register:40f0:8", ["const:bd68cc:8", "const:4:8"]]
+ 00bd68cc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd58d4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd58d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd58d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd58d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd68c8 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd68c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd68c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd68c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd58dc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd68d0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-2c9c4970b6ef74acefb2cf4fc95263d6"></a>

### [`00bd58f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd58f4.md) → [`00bd68e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd68e8.md) _ZN8firebase4auth10githubcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd6914",
      "incomplete_value": true,
      "site": "00bd6914",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd68fc",
      "incomplete_value": true,
      "site": "00bd68fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6908",
      "incomplete_value": false,
      "site": "00bd690c",
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
            "const:e6c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd68f8",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6908",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd6914",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd68f8",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6908",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd6914",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5918 ["INT_ADD", "register:40f0:8", ["const:bd5918:8", "const:4:8"]]
- 00bd5918 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd690c ["INT_ADD", "register:40f0:8", ["const:bd690c:8", "const:4:8"]]
+ 00bd690c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5920 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd5920 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6914 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd6914 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5900 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd68f4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-99e92d97b4f8f79dc53e7c5a7117396a"></a>

### [`00bd5934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5934.md) → [`00bd6928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6928.md) _ZN8firebase4auth10githubcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6954",
      "incomplete_value": true,
      "site": "00bd6954",
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
      "definition_site": "00bd5960",
      "incomplete_value": true,
      "site": "00bd5960",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd693c",
      "incomplete_value": true,
      "site": "00bd693c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bd5948"
      ],
      [
        "FALL_THROUGH",
        "00bd693c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd693c",
      "incomplete_value": true,
      "site": "00bd6954",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5948",
      "incomplete_value": true,
      "site": "00bd5960",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6938",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6944",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd6954",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6938",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6944",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd6954",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5960 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd5960 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6954 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd6954 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5940 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6934 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd5944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd5944 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6938 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd6938 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ee0ca64bd782071c7cb1ec2610163e5d"></a>

### [`00bd5974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5974.md) → [`00bd6968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6968.md) _ZN8firebase4auth10githubcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd6998",
      "incomplete_value": true,
      "site": "00bd6998",
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
      "definition_site": "00bd59a4",
      "incomplete_value": true,
      "site": "00bd59a4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd697c",
      "incomplete_value": true,
      "site": "00bd697c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5988",
      "incomplete_value": true,
      "site": "00bd5988",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd6988",
      "incomplete_value": false,
      "site": "00bd6990",
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
            "const:e6c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5994",
      "incomplete_value": false,
      "site": "00bd599c",
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
      "00bd6978",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6988",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd6998",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6978",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6988",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd6998",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd599c ["INT_ADD", "register:40f0:8", ["const:bd599c:8", "const:4:8"]]
- 00bd599c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6990 ["INT_ADD", "register:40f0:8", ["const:bd6990:8", "const:4:8"]]
+ 00bd6990 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd59a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd59a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6998 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd6998 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5980 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6974 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-690eee69ead38e9ac2f277c5f8e4f2ce"></a>

### [`00bd59b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd59b8.md) → [`00bd69ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd69ac.md) _ZN8firebase4auth10githubcred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd69dc",
      "incomplete_value": true,
      "site": "00bd69dc",
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
      "definition_site": "00bd59e8",
      "incomplete_value": true,
      "site": "00bd59e8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd69c0",
      "incomplete_value": true,
      "site": "00bd69c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bd59cc"
      ],
      [
        "FALL_THROUGH",
        "00bd69c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd69c0",
      "incomplete_value": true,
      "site": "00bd69dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd59cc",
      "incomplete_value": true,
      "site": "00bd59e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd69bc",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd69c8",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd69dc",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd69bc",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd69c8",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd69dc",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd59e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd59e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd69dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd69dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd59c4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd69b8 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd59c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
- 00bd59c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd69bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
+ 00bd69bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-432613379118d24150a2715340603e56"></a>

### [`00bd5a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5a08.md) → [`00bd69fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd69fc.md) _ZN8firebase4auth10githubcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6a54",
      "incomplete_value": true,
      "site": "00bd6a54",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6a30",
      "incomplete_value": true,
      "site": "00bd6a3c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "00bd6a10",
      "READ",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6a30",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6a54",
      "WRITE",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6a10",
      "READ",
      [
        "storage",
        "01127b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6a30",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6a54",
      "WRITE",
      [
        "storage",
        "01127b70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5a48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5a48 ["INT_ADD", "register:40f0:8", ["const:bd5a48:8", "const:4:8"]]
- 00bd5a48 ["CALLIND", null, ["register:0:8"]]
+ 00bd6a3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6a3c ["INT_ADD", "register:40f0:8", ["const:bd6a3c:8", "const:4:8"]]
+ 00bd6a3c ["CALLIND", null, ["register:0:8"]]
- 00bd5a60 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd5a60 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bb0:8"]]
- 00bd5a60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd6a54 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd6a54 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b70:8"]]
+ 00bd6a54 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd5a18 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd6a0c ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-8a4004759f2e98c2e52b629a42271847"></a>

### [`00bd5a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5a74.md) → [`00bd6a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6a68.md) _ZN8firebase4auth10githubcred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd6aa4",
      "incomplete_value": true,
      "site": "00bd6aa4",
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
      "definition_site": "00bd5ab0",
      "incomplete_value": true,
      "site": "00bd5ab0",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6ac4",
      "incomplete_value": true,
      "site": "00bd6ac4",
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
      "definition_site": "00bd5ad0",
      "incomplete_value": true,
      "site": "00bd5ad0",
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
            "const:ba8:8"
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
      "definition_site": "00bd6a80",
      "incomplete_value": true,
      "site": "00bd6a80",
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
      "00bd6a7c",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6a88",
      "READ",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6aa4",
      "WRITE",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6a7c",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6a88",
      "READ",
      [
        "storage",
        "01127b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6aa4",
      "WRITE",
      [
        "storage",
        "01127b70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ab0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5ab0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd5ab0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bb0:8"]]
- 00bd5ab0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6aa4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6aa4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6aa4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b70:8"]]
+ 00bd6aa4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd5acc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5acc ["INT_ADD", "register:40f0:8", ["const:bd5acc:8", "const:4:8"]]
- 00bd5acc ["CALLIND", null, ["register:0:8"]]
+ 00bd6ac0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6ac0 ["INT_ADD", "register:40f0:8", ["const:bd6ac0:8", "const:4:8"]]
+ 00bd6ac0 ["CALLIND", null, ["register:0:8"]]
- 00bd5ad0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00bd5ad0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd5ad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6ac4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00bd6ac4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6ac4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-a2a571ffea867c85453b83d12ffe9e98"></a>

### [`00bd5ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5ae4.md) → [`00bd6ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6ad8.md) _ZN8firebase4auth10githubcred14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

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
      "definition_site": "00bd5b24",
      "incomplete_value": true,
      "site": "00bd5b24",
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
            "const:ba8:8"
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
      "definition_site": "00bd6af4",
      "incomplete_value": true,
      "site": "00bd6af4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5b00",
      "incomplete_value": true,
      "site": "00bd5b00",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "guard": [
      [
        "FALL_THROUGH",
        "00bd5b00"
      ],
      [
        "FALL_THROUGH",
        "00bd6af4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd6af4",
      "incomplete_value": true,
      "site": "00bd6b18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5b00",
      "incomplete_value": true,
      "site": "00bd5b24",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6aec",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6afc",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd6b18",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6aec",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6afc",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd6b18",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5b24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00bd5b24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6b18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00bd6b18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5af0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6ae4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd5af8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00bd5af8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6aec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00bd6aec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-77ee945315ba509c4276ae6263cc9ebc"></a>

### [`00bd5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5b54.md) → [`00bd6b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6b48.md) _ZN8firebase4auth10githubcred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd6b64",
      "incomplete_value": false,
      "site": "00bd6b68",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd6b74",
      "incomplete_value": true,
      "site": "00bd6b80",
      "value": [
        "LOAD",
        "8",
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
      "00bd6b64",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6b74",
      "DATA",
      [
        "storage",
        "01126bb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6b64",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd6b74",
      "DATA",
      [
        "storage",
        "01127b78",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5b74 ["INT_ADD", "register:40f0:8", ["const:bd5b74:8", "const:4:8"]]
- 00bd5b74 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6b68 ["INT_ADD", "register:40f0:8", ["const:bd6b68:8", "const:4:8"]]
+ 00bd6b68 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5b70 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd5b70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5b70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5b70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6b64 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd6b64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6b64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6b64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5b78 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6b6c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-fe5f89314777d222015bd0863b658e77"></a>

### [`00bd5b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5b90.md) → [`00bd6b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6b84.md) _ZN8firebase4auth10githubcred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6bc4",
      "incomplete_value": true,
      "site": "00bd6bc4",
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
      "definition_site": "00bd5bd0",
      "incomplete_value": true,
      "site": "00bd5bd0",
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
            "const:ba8:8"
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
      "definition_site": "00bd6ba0",
      "incomplete_value": true,
      "site": "00bd6ba0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5bac",
      "incomplete_value": true,
      "site": "00bd5bac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd6ba8",
      "incomplete_value": false,
      "site": "00bd6bbc",
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
            "const:e6c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6b98",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6ba8",
      "PARAM",
      [
        "storage",
        "002c1e22",
        null,
        "string"
      ]
    ],
    [
      "00bd6bc4",
      "WRITE",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6b98",
      "READ",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6ba8",
      "PARAM",
      [
        "storage",
        "002c1e6c",
        null,
        "string"
      ]
    ],
    [
      "00bd6bc4",
      "WRITE",
      [
        "storage",
        "01127b68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5bc8 ["INT_ADD", "register:40f0:8", ["const:bd5bc8:8", "const:4:8"]]
- 00bd5bc8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6bbc ["INT_ADD", "register:40f0:8", ["const:bd6bbc:8", "const:4:8"]]
+ 00bd6bbc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5bd0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00bd5bd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6bc4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
+ 00bd6bc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5b9c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6b90 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-a1d54c112d6288a361deabe95f5bea99"></a>

### [`00bd5c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c00.md) → [`00bd6bf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6bf4.md) _ZN8firebase4auth10githubcred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd6c10",
      "incomplete_value": false,
      "site": "00bd6c14",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd6c20",
      "incomplete_value": true,
      "site": "00bd6c2c",
      "value": [
        "LOAD",
        "8",
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
      "00bd6c10",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6c20",
      "DATA",
      [
        "storage",
        "01126bc0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd6c10",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd6c20",
      "DATA",
      [
        "storage",
        "01127b80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5c20 ["INT_ADD", "register:40f0:8", ["const:bd5c20:8", "const:4:8"]]
- 00bd5c20 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6c14 ["INT_ADD", "register:40f0:8", ["const:bd6c14:8", "const:4:8"]]
+ 00bd6c14 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5c1c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd5c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c10 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd6c10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6c10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5c24 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6c18 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-1fbc820346fea785609e4006d751acad"></a>

### [`00bd5c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c3c.md) → [`00bd6c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6c30.md) _ZN8firebase4auth10googlecred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6c5c",
      "incomplete_value": true,
      "site": "00bd6c5c",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5c68",
      "incomplete_value": true,
      "site": "00bd5c68",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6c44",
      "incomplete_value": true,
      "site": "00bd6c44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5c50",
      "incomplete_value": true,
      "site": "00bd5c50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd6c50",
      "incomplete_value": false,
      "site": "00bd6c54",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5c5c",
      "incomplete_value": false,
      "site": "00bd5c60",
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
      "00bd6c40",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c50",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6c5c",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6c40",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c50",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6c5c",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5c60 ["INT_ADD", "register:40f0:8", ["const:bd5c60:8", "const:4:8"]]
- 00bd5c60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6c54 ["INT_ADD", "register:40f0:8", ["const:bd6c54:8", "const:4:8"]]
+ 00bd6c54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5c68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
- 00bd5c68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6c5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
+ 00bd6c5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5c48 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6c3c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a62300a22d02ff881db96e5a50ca61af"></a>

### [`00bd5c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5c7c.md) → [`00bd6c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6c70.md) _ZN8firebase4auth10googlecred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd6c9c",
      "incomplete_value": true,
      "site": "00bd6c9c",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6c84",
      "incomplete_value": true,
      "site": "00bd6c84",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6c8c",
      "incomplete_value": true,
      "site": "00bd6c94",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6c80",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c8c",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6c9c",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6c80",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6c8c",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6c9c",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ca0 ["INT_ADD", "register:40f0:8", ["const:bd5ca0:8", "const:4:8"]]
- 00bd5ca0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6c94 ["INT_ADD", "register:40f0:8", ["const:bd6c94:8", "const:4:8"]]
+ 00bd6c94 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5ca8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
- 00bd5ca8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6c9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
+ 00bd6c9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5c88 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6c7c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-71e0ae272b1d42ad87dad516803fd7ca"></a>

### [`00bd5cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5cbc.md) → [`00bd6cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6cb0.md) _ZN8firebase4auth10googlecred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd6ce0",
      "incomplete_value": true,
      "site": "00bd6ce0",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5cec",
      "incomplete_value": true,
      "site": "00bd5cec",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6cc4",
      "incomplete_value": true,
      "site": "00bd6cc4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6cd0",
      "incomplete_value": false,
      "site": "00bd6cd8",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5cdc",
      "incomplete_value": false,
      "site": "00bd5ce4",
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
      "00bd6cc0",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6cd0",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6ce0",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6cc0",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6cd0",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6ce0",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ce4 ["INT_ADD", "register:40f0:8", ["const:bd5ce4:8", "const:4:8"]]
- 00bd5ce4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6cd8 ["INT_ADD", "register:40f0:8", ["const:bd6cd8:8", "const:4:8"]]
+ 00bd6cd8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5cec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
- 00bd5cec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6ce0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
+ 00bd6ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5cc8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6cbc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3138c4715f1602ad131009c43fc08949"></a>

### [`00bd5d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5d00.md) → [`00bd6cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6cf4.md) _ZN8firebase4auth10googlecred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6d24",
      "incomplete_value": true,
      "site": "00bd6d24",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5d30",
      "incomplete_value": true,
      "site": "00bd5d30",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6d08",
      "incomplete_value": true,
      "site": "00bd6d08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6d10",
      "incomplete_value": false,
      "site": "00bd6d1c",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6d04",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d10",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6d24",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6d04",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d10",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6d24",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5d28 ["INT_ADD", "register:40f0:8", ["const:bd5d28:8", "const:4:8"]]
- 00bd5d28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6d1c ["INT_ADD", "register:40f0:8", ["const:bd6d1c:8", "const:4:8"]]
+ 00bd6d1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5d30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
- 00bd5d30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6d24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
+ 00bd6d24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5d0c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6d00 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a9cb43eafe4534af675dc0be47be51a6"></a>

### [`00bd5d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5d50.md) → [`00bd6d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6d44.md) _ZN8firebase4auth10googlecred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6d9c",
      "incomplete_value": true,
      "site": "00bd6d9c",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6d78",
      "incomplete_value": true,
      "site": "00bd6d84",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:b88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6d58",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6d78",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d9c",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6d58",
      "READ",
      [
        "storage",
        "01127b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6d78",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d9c",
      "WRITE",
      [
        "storage",
        "01127b90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5d90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5d90 ["INT_ADD", "register:40f0:8", ["const:bd5d90:8", "const:4:8"]]
- 00bd5d90 ["CALLIND", null, ["register:0:8"]]
+ 00bd6d84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6d84 ["INT_ADD", "register:40f0:8", ["const:bd6d84:8", "const:4:8"]]
+ 00bd6d84 ["CALLIND", null, ["register:0:8"]]
- 00bd5da8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd5da8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bd0:8"]]
- 00bd5da8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd6d9c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd6d9c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b90:8"]]
+ 00bd6d9c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd5d60 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd6d54 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-7099bdf4115dbd6fa84b3486b31385ba"></a>

### [`00bd5dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5dbc.md) → [`00bd6db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6db0.md) _ZN8firebase4auth10googlecred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd6dec",
      "incomplete_value": true,
      "site": "00bd6dec",
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
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6e0c",
      "incomplete_value": true,
      "site": "00bd6e0c",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6dc8",
      "incomplete_value": true,
      "site": "00bd6dc8",
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
      "00bd6dc4",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6dd0",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6dec",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6dc4",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6dd0",
      "READ",
      [
        "storage",
        "01127b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6dec",
      "WRITE",
      [
        "storage",
        "01127b90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5df8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5df8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd5df8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bd0:8"]]
- 00bd5df8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6dec ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6dec ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6dec ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b90:8"]]
+ 00bd6dec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd5e14 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5e14 ["INT_ADD", "register:40f0:8", ["const:bd5e14:8", "const:4:8"]]
- 00bd5e14 ["CALLIND", null, ["register:0:8"]]
+ 00bd6e08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6e08 ["INT_ADD", "register:40f0:8", ["const:bd6e08:8", "const:4:8"]]
+ 00bd6e08 ["CALLIND", null, ["register:0:8"]]
- 00bd5e18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
- 00bd5e18 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd5e18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6e0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
+ 00bd6e0c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6e0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8e5ca6ec7f4ed64eb664e09d406efcb6"></a>

### [`00bd5e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5e2c.md) → [`00bd6e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6e20.md) _ZN8firebase4auth10googlecred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6e60",
      "incomplete_value": true,
      "site": "00bd6e60",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5e6c",
      "incomplete_value": true,
      "site": "00bd5e6c",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6e44",
      "incomplete_value": false,
      "site": "00bd6e58",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6e34",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e44",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6e60",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6e34",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e44",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6e60",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5e64 ["INT_ADD", "register:40f0:8", ["const:bd5e64:8", "const:4:8"]]
- 00bd5e64 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6e58 ["INT_ADD", "register:40f0:8", ["const:bd6e58:8", "const:4:8"]]
+ 00bd6e58 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5e6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
- 00bd5e6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6e60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
+ 00bd6e60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5e38 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6e2c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-541baff27c21ced354d8e9d4ab03b6f3"></a>

### [`00bd5e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5e9c.md) → [`00bd6e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6e90.md) _ZN8firebase4auth10googlecred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd6eac",
      "incomplete_value": false,
      "site": "00bd6eb0",
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
      "definition_site": "00bd5eb8",
      "incomplete_value": false,
      "site": "00bd5ebc",
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
      "definition_site": "00bd6ebc",
      "incomplete_value": true,
      "site": "00bd6ec8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5ec8",
      "incomplete_value": true,
      "site": "00bd5ed4",
      "value": [
        "LOAD",
        "8",
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
      "00bd6eac",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6ebc",
      "DATA",
      [
        "storage",
        "01126bd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6eac",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd6ebc",
      "DATA",
      [
        "storage",
        "01127b98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5ebc ["INT_ADD", "register:40f0:8", ["const:bd5ebc:8", "const:4:8"]]
- 00bd5ebc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6eb0 ["INT_ADD", "register:40f0:8", ["const:bd6eb0:8", "const:4:8"]]
+ 00bd6eb0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5eb8 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd5eb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5eb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5eb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6eac ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd6eac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6eac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6eac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5ec0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6eb4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-39d971446842329a5e646897ab6e0db9"></a>

### [`00bd5ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5ed8.md) → [`00bd6ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6ecc.md) _ZN8firebase4auth10googlecred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6f0c",
      "incomplete_value": true,
      "site": "00bd6f0c",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6ee8",
      "incomplete_value": true,
      "site": "00bd6ee8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6ef0",
      "incomplete_value": false,
      "site": "00bd6f04",
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
            "const:e9c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6ee0",
      "READ",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6ef0",
      "PARAM",
      [
        "storage",
        "002c1e52",
        null,
        "string"
      ]
    ],
    [
      "00bd6f0c",
      "WRITE",
      [
        "storage",
        "01126bc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6ee0",
      "READ",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6ef0",
      "PARAM",
      [
        "storage",
        "002c1e9c",
        null,
        "string"
      ]
    ],
    [
      "00bd6f0c",
      "WRITE",
      [
        "storage",
        "01127b88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5f10 ["INT_ADD", "register:40f0:8", ["const:bd5f10:8", "const:4:8"]]
- 00bd5f10 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6f04 ["INT_ADD", "register:40f0:8", ["const:bd6f04:8", "const:4:8"]]
+ 00bd6f04 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5f18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
- 00bd5f18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6f0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
+ 00bd6f0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5ee4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6ed8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-53389d3f554692bad32fa28d453ac89b"></a>

### [`00bd5f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5f48.md) → [`00bd6f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6f3c.md) _ZN8firebase4auth10googlecred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd6f58",
      "incomplete_value": false,
      "site": "00bd6f5c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd6f68",
      "incomplete_value": true,
      "site": "00bd6f74",
      "value": [
        "LOAD",
        "8",
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
      "00bd6f58",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6f68",
      "DATA",
      [
        "storage",
        "01126be0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd6f58",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd6f68",
      "DATA",
      [
        "storage",
        "01127ba0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5f68 ["INT_ADD", "register:40f0:8", ["const:bd5f68:8", "const:4:8"]]
- 00bd5f68 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6f5c ["INT_ADD", "register:40f0:8", ["const:bd6f5c:8", "const:4:8"]]
+ 00bd6f5c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5f64 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd5f64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5f64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5f64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f58 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd6f58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5f6c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6f60 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-95a4d077811d14bdbbd5ea7b4fba92e6"></a>

### [`00bd5f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5f84.md) → [`00bd6f78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6f78.md) _ZN8firebase4auth13playgamescred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00bd6fa4",
      "incomplete_value": true,
      "site": "00bd6fa4",
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
      "definition_site": "00bd5fb0",
      "incomplete_value": true,
      "site": "00bd5fb0",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6f8c",
      "incomplete_value": true,
      "site": "00bd6f8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6f98",
      "incomplete_value": false,
      "site": "00bd6f9c",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5fa4",
      "incomplete_value": false,
      "site": "00bd5fa8",
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
      "00bd6f88",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6f98",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd6fa4",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6f88",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6f98",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd6fa4",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5fa8 ["INT_ADD", "register:40f0:8", ["const:bd5fa8:8", "const:4:8"]]
- 00bd5fa8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6f9c ["INT_ADD", "register:40f0:8", ["const:bd6f9c:8", "const:4:8"]]
+ 00bd6f9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5fb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00bd5fb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6fa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd6fa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5f90 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6f84 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8994fe1afc70e675234a056fa42fb8d8"></a>

### [`00bd5fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5fc4.md) → [`00bd6fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6fb8.md) _ZN8firebase4auth13playgamescred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00bd6fe4",
      "incomplete_value": true,
      "site": "00bd6fe4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd6fcc",
      "incomplete_value": true,
      "site": "00bd6fcc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd6fd4",
      "incomplete_value": false,
      "site": "00bd6fdc",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd6fc8",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6fd4",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd6fe4",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6fc8",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6fd4",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd6fe4",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5fe8 ["INT_ADD", "register:40f0:8", ["const:bd5fe8:8", "const:4:8"]]
- 00bd5fe8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6fdc ["INT_ADD", "register:40f0:8", ["const:bd6fdc:8", "const:4:8"]]
+ 00bd6fdc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5ff0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00bd5ff0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6fe4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd6fe4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5fd0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6fc4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e9616892d784f36b721ac82f5cdfcc6e"></a>

### [`00bd6004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6004.md) → [`00bd6ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6ff8.md) _ZN8firebase4auth13playgamescred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd7028",
      "incomplete_value": true,
      "site": "00bd7028",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd700c",
      "incomplete_value": true,
      "site": "00bd700c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7018",
      "incomplete_value": false,
      "site": "00bd7020",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7008",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7018",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd7028",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7008",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7018",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd7028",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd602c ["INT_ADD", "register:40f0:8", ["const:bd602c:8", "const:4:8"]]
- 00bd602c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7020 ["INT_ADD", "register:40f0:8", ["const:bd7020:8", "const:4:8"]]
+ 00bd7020 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6034 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00bd6034 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7028 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd7028 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6010 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7004 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7d414a802b99b304171191807315ad92"></a>

### [`00bd6048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6048.md) → [`00bd703c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd703c.md) _ZN8firebase4auth13playgamescred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd706c",
      "incomplete_value": true,
      "site": "00bd706c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7050",
      "incomplete_value": true,
      "site": "00bd7050",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7058",
      "incomplete_value": false,
      "site": "00bd7064",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd704c",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7058",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd706c",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd704c",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7058",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd706c",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6070 ["INT_ADD", "register:40f0:8", ["const:bd6070:8", "const:4:8"]]
- 00bd6070 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7064 ["INT_ADD", "register:40f0:8", ["const:bd7064:8", "const:4:8"]]
+ 00bd7064 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6078 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00bd6078 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd706c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00bd706c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6054 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7048 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d42d37ff7b23a42f2364b0e0262b4b94"></a>

### [`00bd6098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6098.md) → [`00bd708c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd708c.md) _ZN8firebase4auth13playgamescred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd70e4",
      "incomplete_value": true,
      "site": "00bd70e4",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd70c0",
      "incomplete_value": true,
      "site": "00bd70cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "00bd70a0",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd70c0",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd70e4",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd70a0",
      "READ",
      [
        "storage",
        "01127bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd70c0",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd70e4",
      "WRITE",
      [
        "storage",
        "01127bb0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd60d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd60d8 ["INT_ADD", "register:40f0:8", ["const:bd60d8:8", "const:4:8"]]
- 00bd60d8 ["CALLIND", null, ["register:0:8"]]
+ 00bd70cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd70cc ["INT_ADD", "register:40f0:8", ["const:bd70cc:8", "const:4:8"]]
+ 00bd70cc ["CALLIND", null, ["register:0:8"]]
- 00bd60f0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd60f0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf0:8"]]
- 00bd60f0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd70e4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd70e4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bb0:8"]]
+ 00bd70e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd60a8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd709c ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-1d72cc707b668d9ef69aab0aafb5eaed"></a>

### [`00bd6104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6104.md) → [`00bd70f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd70f8.md) _ZN8firebase4auth13playgamescred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd7134",
      "incomplete_value": true,
      "site": "00bd7134",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7154",
      "incomplete_value": true,
      "site": "00bd7154",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7110",
      "incomplete_value": true,
      "site": "00bd7110",
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
      "00bd710c",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7118",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7134",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd710c",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7118",
      "READ",
      [
        "storage",
        "01127bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7134",
      "WRITE",
      [
        "storage",
        "01127bb0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6140 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6140 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6140 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf0:8"]]
- 00bd6140 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd7134 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd7134 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd7134 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bb0:8"]]
+ 00bd7134 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd615c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd615c ["INT_ADD", "register:40f0:8", ["const:bd615c:8", "const:4:8"]]
- 00bd615c ["CALLIND", null, ["register:0:8"]]
+ 00bd7150 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7150 ["INT_ADD", "register:40f0:8", ["const:bd7150:8", "const:4:8"]]
+ 00bd7150 ["CALLIND", null, ["register:0:8"]]
- 00bd6160 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00bd6160 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd6160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7154 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00bd7154 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7154 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-58de50d1994fbb0142631838c61b3d63"></a>

### [`00bd6174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6174.md) → [`00bd7168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7168.md) _ZN8firebase4auth13playgamescred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd71a8",
      "incomplete_value": true,
      "site": "00bd71a8",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7184",
      "incomplete_value": true,
      "site": "00bd7184",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd718c",
      "incomplete_value": false,
      "site": "00bd71a0",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd717c",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd718c",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd71a8",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd717c",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd718c",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd71a8",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd61ac ["INT_ADD", "register:40f0:8", ["const:bd61ac:8", "const:4:8"]]
- 00bd61ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd71a0 ["INT_ADD", "register:40f0:8", ["const:bd71a0:8", "const:4:8"]]
+ 00bd71a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd61b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00bd61b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd71a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00bd71a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6180 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7174 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-c2b065539d755d1e95c9a839e4c2b73d"></a>

### [`00bd61e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd61e4.md) → [`00bd71d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd71d8.md) _ZN8firebase4auth13playgamescred11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd71f4",
      "incomplete_value": false,
      "site": "00bd71f8",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd7204",
      "incomplete_value": true,
      "site": "00bd7210",
      "value": [
        "LOAD",
        "8",
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
      "00bd71f4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7204",
      "DATA",
      [
        "storage",
        "01126bf8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd71f4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd7204",
      "DATA",
      [
        "storage",
        "01127bb8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6204 ["INT_ADD", "register:40f0:8", ["const:bd6204:8", "const:4:8"]]
- 00bd6204 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd71f8 ["INT_ADD", "register:40f0:8", ["const:bd71f8:8", "const:4:8"]]
+ 00bd71f8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6200 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd6200 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6200 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6200 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd71f4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd71f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd71f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd71f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6208 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd71fc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-2045ab2a177b14b3b7148e502ec690f2"></a>

### [`00bd6220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6220.md) → [`00bd7214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7214.md) _ZN8firebase4auth13playgamescred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7254",
      "incomplete_value": true,
      "site": "00bd7254",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7230",
      "incomplete_value": true,
      "site": "00bd7230",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7238",
      "incomplete_value": false,
      "site": "00bd724c",
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
            "const:812:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7228",
      "READ",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7238",
      "PARAM",
      [
        "storage",
        "002b37c8",
        null,
        "string"
      ]
    ],
    [
      "00bd7254",
      "WRITE",
      [
        "storage",
        "01126be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7228",
      "READ",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7238",
      "PARAM",
      [
        "storage",
        "002b3812",
        null,
        "string"
      ]
    ],
    [
      "00bd7254",
      "WRITE",
      [
        "storage",
        "01127ba8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6258 ["INT_ADD", "register:40f0:8", ["const:bd6258:8", "const:4:8"]]
- 00bd6258 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd724c ["INT_ADD", "register:40f0:8", ["const:bd724c:8", "const:4:8"]]
+ 00bd724c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6260 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00bd6260 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7254 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00bd7254 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd622c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7220 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-ef16282957dd7fb8f3e29c6725a7c691"></a>

### [`00bd6290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6290.md) → [`00bd7284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7284.md) _ZN8firebase4auth13playgamescred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd72a0",
      "incomplete_value": false,
      "site": "00bd72a4",
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
      "definition_site": "00bd62ac",
      "incomplete_value": false,
      "site": "00bd62b0",
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
      "00bd72a0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd72b0",
      "DATA",
      [
        "storage",
        "01126c00",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd72a0",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd72b0",
      "DATA",
      [
        "storage",
        "01127bc0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd62b0 ["INT_ADD", "register:40f0:8", ["const:bd62b0:8", "const:4:8"]]
- 00bd62b0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd72a4 ["INT_ADD", "register:40f0:8", ["const:bd72a4:8", "const:4:8"]]
+ 00bd72a4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd62ac ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd62ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd62ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd62ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd72a0 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd72a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd72a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd72a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd62b4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd72a8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-7b45b3087472382e4a245608f9d21334"></a>

### [`00bd62cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd62cc.md) → [`00bd72c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd72c0.md) _ZN8firebase4auth11twittercred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd72ec",
      "incomplete_value": true,
      "site": "00bd72ec",
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
      "definition_site": "00bd62f8",
      "incomplete_value": true,
      "site": "00bd62f8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd72d4",
      "incomplete_value": true,
      "site": "00bd72d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd72e0",
      "incomplete_value": false,
      "site": "00bd72e4",
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
            "const:d0b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd62ec",
      "incomplete_value": false,
      "site": "00bd62f0",
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
      "00bd72d0",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd72e0",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd72ec",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd72d0",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd72e0",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd72ec",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd62f0 ["INT_ADD", "register:40f0:8", ["const:bd62f0:8", "const:4:8"]]
- 00bd62f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd72e4 ["INT_ADD", "register:40f0:8", ["const:bd72e4:8", "const:4:8"]]
+ 00bd72e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd62f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
- 00bd62f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd72ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd72ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd62d8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd72cc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-615243e247fc680149a265540aa04831"></a>

### [`00bd630c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd630c.md) → [`00bd7300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7300.md) _ZN8firebase4auth11twittercred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd732c",
      "incomplete_value": true,
      "site": "00bd732c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7314",
      "incomplete_value": true,
      "site": "00bd7314",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd731c",
      "incomplete_value": false,
      "site": "00bd7324",
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
            "const:d0b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7310",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd731c",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd732c",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7310",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd731c",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd732c",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6330 ["INT_ADD", "register:40f0:8", ["const:bd6330:8", "const:4:8"]]
- 00bd6330 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7324 ["INT_ADD", "register:40f0:8", ["const:bd7324:8", "const:4:8"]]
+ 00bd7324 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6338 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
- 00bd6338 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd732c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd732c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6318 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd730c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-28099b384ad26ef4bc3cf071add664af"></a>

### [`00bd634c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd634c.md) → [`00bd7340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7340.md) _ZN8firebase4auth11twittercred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd7370",
      "incomplete_value": true,
      "site": "00bd7370",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7354",
      "incomplete_value": true,
      "site": "00bd7354",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7360",
      "incomplete_value": false,
      "site": "00bd7368",
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
            "const:d0b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7350",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7360",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd7370",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7350",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7360",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd7370",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6374 ["INT_ADD", "register:40f0:8", ["const:bd6374:8", "const:4:8"]]
- 00bd6374 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7368 ["INT_ADD", "register:40f0:8", ["const:bd7368:8", "const:4:8"]]
+ 00bd7368 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd637c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
- 00bd637c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7370 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd7370 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6358 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd734c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-bc7a18bdc7df6415a07cf6ad081c0d32"></a>

### [`00bd6390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6390.md) → [`00bd7384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7384.md) _ZN8firebase4auth11twittercred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd73b4",
      "incomplete_value": true,
      "site": "00bd73b4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7398",
      "incomplete_value": true,
      "site": "00bd7398",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd73a0",
      "incomplete_value": false,
      "site": "00bd73ac",
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
            "const:d0b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7394",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd73a0",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd73b4",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7394",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd73a0",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd73b4",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd63b8 ["INT_ADD", "register:40f0:8", ["const:bd63b8:8", "const:4:8"]]
- 00bd63b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd73ac ["INT_ADD", "register:40f0:8", ["const:bd73ac:8", "const:4:8"]]
+ 00bd73ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd63c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c08:8"]]
- 00bd63c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd73b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bc8:8"]]
+ 00bd73b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd639c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7390 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-f6575b6a1632b77c69d3550398b1d8c3"></a>

### [`00bd63e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd63e0.md) → [`00bd73d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd73d4.md) _ZN8firebase4auth11twittercred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd742c",
      "incomplete_value": true,
      "site": "00bd742c",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7408",
      "incomplete_value": true,
      "site": "00bd7414",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "00bd73e8",
      "READ",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7408",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd742c",
      "WRITE",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd73e8",
      "READ",
      [
        "storage",
        "01127bd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7408",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd742c",
      "WRITE",
      [
        "storage",
        "01127bd0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6420 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6420 ["INT_ADD", "register:40f0:8", ["const:bd6420:8", "const:4:8"]]
- 00bd6420 ["CALLIND", null, ["register:0:8"]]
+ 00bd7414 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7414 ["INT_ADD", "register:40f0:8", ["const:bd7414:8", "const:4:8"]]
+ 00bd7414 ["CALLIND", null, ["register:0:8"]]
- 00bd6438 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6438 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c10:8"]]
- 00bd6438 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd742c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd742c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bd0:8"]]
+ 00bd742c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd63f0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd73e4 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-a3acc96cb16daaabbcf22da0ab199b8a"></a>

### [`00bd644c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd644c.md) → [`00bd7440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7440.md) _ZN8firebase4auth11twittercred12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd747c",
      "incomplete_value": true,
      "site": "00bd747c",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd749c",
      "incomplete_value": true,
      "site": "00bd749c",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7458",
      "incomplete_value": true,
      "site": "00bd7458",
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
      "00bd7454",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7460",
      "READ",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd747c",
      "WRITE",
      [
        "storage",
        "01126c10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7454",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7460",
      "READ",
      [
        "storage",
        "01127bd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd747c",
      "WRITE",
      [
        "storage",
        "01127bd0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6488 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6488 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6488 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c10:8"]]
- 00bd6488 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd747c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd747c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd747c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bd0:8"]]
+ 00bd747c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd64a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd64a4 ["INT_ADD", "register:40f0:8", ["const:bd64a4:8", "const:4:8"]]
- 00bd64a4 ["CALLIND", null, ["register:0:8"]]
+ 00bd7498 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7498 ["INT_ADD", "register:40f0:8", ["const:bd7498:8", "const:4:8"]]
+ 00bd7498 ["CALLIND", null, ["register:0:8"]]
- 00bd64a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00bd64a8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd64a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd749c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd749c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd749c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-50deab5e632d81ca5fd5a32e15692660"></a>

### [`00bd64bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd64bc.md) → [`00bd74b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd74b0.md) _ZN8firebase4auth11twittercred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd74f0",
      "incomplete_value": true,
      "site": "00bd74f0",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd74cc",
      "incomplete_value": true,
      "site": "00bd74cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd74d4",
      "incomplete_value": false,
      "site": "00bd74e8",
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
            "const:d0b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd74c4",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74d4",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd74f0",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd74c4",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74d4",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd74f0",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd64f4 ["INT_ADD", "register:40f0:8", ["const:bd64f4:8", "const:4:8"]]
- 00bd64f4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd74e8 ["INT_ADD", "register:40f0:8", ["const:bd74e8:8", "const:4:8"]]
+ 00bd74e8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd64fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00bd64fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd74f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd74f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd64c8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd74bc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-3e2be5445437066a6a3278dce50c2598"></a>

### [`00bd6568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6568.md) → [`00bd755c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd755c.md) _ZN8firebase4auth11twittercred13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd759c",
      "incomplete_value": true,
      "site": "00bd759c",
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
      "definition_site": "00bd65a8",
      "incomplete_value": true,
      "site": "00bd65a8",
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
      "00bd7570",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7580",
      "PARAM",
      [
        "storage",
        "002a1ccb",
        null,
        "string"
      ]
    ],
    [
      "00bd759c",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7570",
      "READ",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7580",
      "PARAM",
      [
        "storage",
        "002a1d0b",
        null,
        "string"
      ]
    ],
    [
      "00bd759c",
      "WRITE",
      [
        "storage",
        "01127bc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd65a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00bd65a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd759c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd759c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6574 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7568 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd657c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00bd657c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7570 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
+ 00bd7570 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c58affb9fc806ed89558d10ffe944cef"></a>

### [`00bd65d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd65d8.md) → [`00bd75cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd75cc.md) _ZN8firebase4auth11twittercred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd75e8",
      "incomplete_value": true,
      "site": "00bd75ec",
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
    "old": {
      "definition_site": "00bd65f4",
      "incomplete_value": true,
      "site": "00bd65f8",
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
      "00bd75e8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd75f8",
      "DATA",
      [
        "storage",
        "01126c20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd75e8",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd75f8",
      "DATA",
      [
        "storage",
        "01127be0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd65f8 ["INT_ADD", "register:40f0:8", ["const:bd65f8:8", "const:4:8"]]
- 00bd65f8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd75ec ["INT_ADD", "register:40f0:8", ["const:bd75ec:8", "const:4:8"]]
+ 00bd75ec ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd65f4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd65f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd65f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd65f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd75e8 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd75e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd75e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd75e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd65fc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd75f0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-b4140dee514f051d66da5c0b5f5efc59"></a>

### [`00bd6614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6614.md) → [`00bd7608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7608.md) _ZN8firebase4auth13oauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7634",
      "incomplete_value": true,
      "site": "00bd7634",
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
      "definition_site": "00bd6640",
      "incomplete_value": true,
      "site": "00bd6640",
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
            "const:c28:8"
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
      "definition_site": "00bd761c",
      "incomplete_value": true,
      "site": "00bd761c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6628",
      "incomplete_value": true,
      "site": "00bd6628",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "guard": [
      [
        "FALL_THROUGH",
        "00bd6628"
      ],
      [
        "FALL_THROUGH",
        "00bd761c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd761c",
      "incomplete_value": true,
      "site": "00bd7634",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6628",
      "incomplete_value": true,
      "site": "00bd6640",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7618",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7628",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd7634",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7618",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7628",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd7634",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6640 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd6640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7634 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd7634 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6620 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7614 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd6624 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd6624 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7618 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd7618 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a58e1b2cb9bda24ecf90476d5cfbac48"></a>

### [`00bd6654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6654.md) → [`00bd7648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7648.md) _ZN8firebase4auth13oauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00bd7674",
      "incomplete_value": true,
      "site": "00bd7674",
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
      "definition_site": "00bd6680",
      "incomplete_value": true,
      "site": "00bd6680",
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
            "const:c28:8"
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
      "00bd7658",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7664",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd7674",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7658",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7664",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd7674",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6680 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd6680 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7674 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd7674 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6660 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7654 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd6664 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd6664 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7658 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd7658 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8adcbca6aff118de7cc1ed865738d5b1"></a>

### [`00bd6694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6694.md) → [`00bd7688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7688.md) _ZN8firebase4auth13oauthprovider10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd76b8",
      "incomplete_value": true,
      "site": "00bd76b8",
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
      "definition_site": "00bd66c4",
      "incomplete_value": true,
      "site": "00bd66c4",
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
            "const:c28:8"
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
      "00bd7698",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76a8",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd76b8",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7698",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76a8",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd76b8",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd66c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd66c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd76b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd76b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd66a0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7694 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd66a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd66a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7698 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd7698 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-be874c3e8147e9b98ac8f3e0c53d8b04"></a>

### [`00bd66d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd66d8.md) → [`00bd76cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd76cc.md) _ZN8firebase4auth13oauthprovider10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd76fc",
      "incomplete_value": true,
      "site": "00bd76fc",
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
      "definition_site": "00bd6708",
      "incomplete_value": true,
      "site": "00bd6708",
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
            "const:c28:8"
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
      "definition_site": "00bd76e0",
      "incomplete_value": true,
      "site": "00bd76e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd66ec",
      "incomplete_value": true,
      "site": "00bd66ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd76e8",
      "incomplete_value": false,
      "site": "00bd76f4",
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
            "const:dd2:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd76dc",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76e8",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd76fc",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd76dc",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76e8",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd76fc",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6700 ["INT_ADD", "register:40f0:8", ["const:bd6700:8", "const:4:8"]]
- 00bd6700 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd76f4 ["INT_ADD", "register:40f0:8", ["const:bd76f4:8", "const:4:8"]]
+ 00bd76f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6708 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c28:8"]]
- 00bd6708 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd76fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
+ 00bd76fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd66e4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd76d8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5338b7346443ffad496d49bab4bd8bf6"></a>

### [`00bd6728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6728.md) → [`00bd771c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd771c.md) _ZN8firebase4auth13oauthprovider15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7774",
      "incomplete_value": true,
      "site": "00bd7774",
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
      "definition_site": "00bd6780",
      "incomplete_value": true,
      "site": "00bd6780",
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
            "const:c30:8"
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
      "00bd7730",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7750",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7774",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7730",
      "READ",
      [
        "storage",
        "01127bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7750",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7774",
      "WRITE",
      [
        "storage",
        "01127bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6780 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6780 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c30:8"]]
- 00bd6780 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd7774 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd7774 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd7774 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6738 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd772c ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bd673c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c30:8"]]
- 00bd673c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd673c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd7730 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd7730 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7730 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-05e505864d329e0140d3fa4f100b11da"></a>

### [`00bd6794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6794.md) → [`00bd7788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7788.md) _ZN8firebase4auth13oauthprovider12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `branch_value` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd77c4",
      "incomplete_value": true,
      "site": "00bd77c4",
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
      "definition_site": "00bd67d0",
      "incomplete_value": true,
      "site": "00bd67d0",
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
            "const:c30:8"
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
      "definition_site": "00bd77e4",
      "incomplete_value": true,
      "site": "00bd77e4",
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
      "definition_site": "00bd67f0",
      "incomplete_value": true,
      "site": "00bd67f0",
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
            "const:c28:8"
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
      "definition_site": "00bd77a0",
      "incomplete_value": true,
      "site": "00bd77a0",
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
      "definition_site": "00bd67ac",
      "incomplete_value": true,
      "site": "00bd67ac",
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
      "00bd779c",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd77a8",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd77c4",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd779c",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd77a8",
      "READ",
      [
        "storage",
        "01127bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd77c4",
      "WRITE",
      [
        "storage",
        "01127bf0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd67d0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd67d0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd67d0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c30:8"]]
- 00bd67d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd77c4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd77c4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd77c4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf0:8"]]
+ 00bd77c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd67f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00bd67f0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd67f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd77e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd77e4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd77e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bd67a4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7798 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-d4d059f05afa64edd7a322db280cee3c"></a>

### [`00bd6804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6804.md) → [`00bd77f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd77f8.md) _ZN8firebase4auth13oauthprovider14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7838",
      "incomplete_value": true,
      "site": "00bd7838",
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
      "definition_site": "00bd6844",
      "incomplete_value": true,
      "site": "00bd6844",
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
            "const:c28:8"
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
      "00bd780c",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd781c",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd7838",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd780c",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd781c",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd7838",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6844 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00bd6844 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7838 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd7838 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6810 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7804 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd6818 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00bd6818 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd780c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd780c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-17304def01a290ff6cb0a224c666e328"></a>

### [`00bd6874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6874.md) → [`00bd7868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7868.md) _ZN8firebase4auth13oauthprovider11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd7884",
      "incomplete_value": false,
      "site": "00bd7888",
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
      "definition_site": "00bd6890",
      "incomplete_value": false,
      "site": "00bd6894",
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
      "00bd7884",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7894",
      "DATA",
      [
        "storage",
        "01126c38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7884",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd7894",
      "DATA",
      [
        "storage",
        "01127bf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6894 ["INT_ADD", "register:40f0:8", ["const:bd6894:8", "const:4:8"]]
- 00bd6894 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7888 ["INT_ADD", "register:40f0:8", ["const:bd7888:8", "const:4:8"]]
+ 00bd7888 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6890 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd6890 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6890 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6890 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7884 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd7884 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7884 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7884 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6898 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd788c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-57be416b821b95f5a019641124f70ae3"></a>

### [`00bd68b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd68b0.md) → [`00bd78a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd78a4.md) _ZN8firebase4auth13oauthprovider13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd78e4",
      "incomplete_value": true,
      "site": "00bd78e4",
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
      "definition_site": "00bd68f0",
      "incomplete_value": true,
      "site": "00bd68f0",
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
            "const:c28:8"
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
      "definition_site": "00bd78c0",
      "incomplete_value": true,
      "site": "00bd78c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd68cc",
      "incomplete_value": true,
      "site": "00bd68cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd78c8",
      "incomplete_value": false,
      "site": "00bd78dc",
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
            "const:dd2:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd78b8",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd78c8",
      "PARAM",
      [
        "storage",
        "002b9cf4",
        null,
        "string"
      ]
    ],
    [
      "00bd78e4",
      "WRITE",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd78b8",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd78c8",
      "PARAM",
      [
        "storage",
        "002b9dd2",
        null,
        "string"
      ]
    ],
    [
      "00bd78e4",
      "WRITE",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd68e8 ["INT_ADD", "register:40f0:8", ["const:bd68e8:8", "const:4:8"]]
- 00bd68e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd78dc ["INT_ADD", "register:40f0:8", ["const:bd78dc:8", "const:4:8"]]
+ 00bd78dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd68f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00bd68f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd78e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00bd78e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd68bc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd78b0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-c2b4bee796115ad6ad903989cbde9ab7"></a>

### [`00bd6920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6920.md) → [`00bd7914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7914.md) _ZN8firebase4auth13oauthprovider10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd7930",
      "incomplete_value": false,
      "site": "00bd7934",
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
      "definition_site": "00bd693c",
      "incomplete_value": false,
      "site": "00bd6940",
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
      "definition_site": "00bd7940",
      "incomplete_value": true,
      "site": "00bd794c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd694c",
      "incomplete_value": true,
      "site": "00bd6958",
      "value": [
        "LOAD",
        "8",
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
      "00bd7930",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd7940",
      "DATA",
      [
        "storage",
        "01126c50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd7930",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd7940",
      "DATA",
      [
        "storage",
        "01127c10",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6940 ["INT_ADD", "register:40f0:8", ["const:bd6940:8", "const:4:8"]]
- 00bd6940 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7934 ["INT_ADD", "register:40f0:8", ["const:bd7934:8", "const:4:8"]]
+ 00bd7934 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd693c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd693c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd693c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd693c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7930 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd7930 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7930 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7930 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6944 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd7938 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-9e54963fd838a858a105a813852bb858"></a>

### [`00bd695c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd695c.md) → [`00bd7950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7950.md) _ZN8firebase4auth8timeunit19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bd797c",
      "incomplete_value": true,
      "site": "00bd797c",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6988",
      "incomplete_value": true,
      "site": "00bd6988",
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
            "const:c58:8"
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
      "definition_site": "00bd7964",
      "incomplete_value": true,
      "site": "00bd7964",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7970",
      "incomplete_value": false,
      "site": "00bd7974",
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
            "const:845:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd697c",
      "incomplete_value": false,
      "site": "00bd6980",
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
      "00bd7960",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7970",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd797c",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7960",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7970",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd797c",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6980 ["INT_ADD", "register:40f0:8", ["const:bd6980:8", "const:4:8"]]
- 00bd6980 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7974 ["INT_ADD", "register:40f0:8", ["const:bd7974:8", "const:4:8"]]
+ 00bd7974 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6988 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd6988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd797c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd797c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6968 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd795c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2fea3496c27abfebf19ff16baf7035db"></a>

### [`00bd699c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd699c.md) → [`00bd7990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7990.md) _ZN8firebase4auth8timeunit19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd79bc",
      "incomplete_value": true,
      "site": "00bd79bc",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd69c8",
      "incomplete_value": true,
      "site": "00bd69c8",
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
            "const:c58:8"
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
      "definition_site": "00bd79a4",
      "incomplete_value": true,
      "site": "00bd79a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bd69b0"
      ],
      [
        "FALL_THROUGH",
        "00bd79a4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd79a4",
      "incomplete_value": true,
      "site": "00bd79bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd69b0",
      "incomplete_value": true,
      "site": "00bd69c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd79a0",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd79ac",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd79bc",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd79a0",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd79ac",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd79bc",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd69c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd69c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd79bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd79bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd69a8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd799c ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd69ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd69ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd79a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd79a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-36aa56038908f2fc0b8e36bd879209bf"></a>

### [`00bd69dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd69dc.md) → [`00bd79d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd79d0.md) _ZN8firebase4auth8timeunit10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd7a00",
      "incomplete_value": true,
      "site": "00bd7a00",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a0c",
      "incomplete_value": true,
      "site": "00bd6a0c",
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
            "const:c58:8"
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
      "definition_site": "00bd79e4",
      "incomplete_value": true,
      "site": "00bd79e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd69f0",
      "incomplete_value": true,
      "site": "00bd69f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd79f0",
      "incomplete_value": false,
      "site": "00bd79f8",
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
            "const:845:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd69fc",
      "incomplete_value": false,
      "site": "00bd6a04",
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
      "00bd79e0",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd79f0",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd7a00",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd79e0",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd79f0",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd7a00",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6a04 ["INT_ADD", "register:40f0:8", ["const:bd6a04:8", "const:4:8"]]
- 00bd6a04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd79f8 ["INT_ADD", "register:40f0:8", ["const:bd79f8:8", "const:4:8"]]
+ 00bd79f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6a0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd6a0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7a00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd7a00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd69e8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd79dc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-eb5fbeca89055e874c55f157d2b86051"></a>

### [`00bd6a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6a20.md) → [`00bd7a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7a14.md) _ZN8firebase4auth8timeunit10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7a44",
      "incomplete_value": true,
      "site": "00bd7a44",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6a50",
      "incomplete_value": true,
      "site": "00bd6a50",
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
            "const:c58:8"
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
      "00bd7a24",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7a30",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd7a44",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7a24",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7a30",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd7a44",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6a50 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd6a50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7a44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd7a44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6a2c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7a20 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd6a30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00bd6a30 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7a24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00bd7a24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-968dce2f04aa331ad70e1b55d6531b71"></a>

### [`00bd6a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6a70.md) → [`00bd7a64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7a64.md) _ZN8firebase4auth8timeunit15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7abc",
      "incomplete_value": true,
      "site": "00bd7abc",
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
            "const:c20:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7a98",
      "incomplete_value": true,
      "site": "00bd7aa4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:c18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7a78",
      "READ",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7a98",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7abc",
      "WRITE",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7a78",
      "READ",
      [
        "storage",
        "01127c20",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7a98",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7abc",
      "WRITE",
      [
        "storage",
        "01127c20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6ab0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6ab0 ["INT_ADD", "register:40f0:8", ["const:bd6ab0:8", "const:4:8"]]
- 00bd6ab0 ["CALLIND", null, ["register:0:8"]]
+ 00bd7aa4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7aa4 ["INT_ADD", "register:40f0:8", ["const:bd7aa4:8", "const:4:8"]]
+ 00bd7aa4 ["CALLIND", null, ["register:0:8"]]
- 00bd6ac8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6ac8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c60:8"]]
- 00bd6ac8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd7abc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd7abc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c20:8"]]
+ 00bd7abc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6a80 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd7a74 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-febae04fda6ccb6dda88f444f2976e4f"></a>

### [`00bd6adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6adc.md) → [`00bd7ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7ad0.md) _ZN8firebase4auth8timeunit12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd7b0c",
      "incomplete_value": true,
      "site": "00bd7b0c",
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
            "const:c20:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7b2c",
      "incomplete_value": true,
      "site": "00bd7b2c",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7ae8",
      "incomplete_value": true,
      "site": "00bd7ae8",
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
      "00bd7ae4",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7af0",
      "READ",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b0c",
      "WRITE",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7ae4",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7af0",
      "READ",
      [
        "storage",
        "01127c20",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b0c",
      "WRITE",
      [
        "storage",
        "01127c20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6b18 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6b18 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6b18 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c60:8"]]
- 00bd6b18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd7b0c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd7b0c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd7b0c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c20:8"]]
+ 00bd7b0c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd6b34 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6b34 ["INT_ADD", "register:40f0:8", ["const:bd6b34:8", "const:4:8"]]
- 00bd6b34 ["CALLIND", null, ["register:0:8"]]
+ 00bd7b28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7b28 ["INT_ADD", "register:40f0:8", ["const:bd7b28:8", "const:4:8"]]
+ 00bd7b28 ["CALLIND", null, ["register:0:8"]]
- 00bd6b38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00bd6b38 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd6b38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7b2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00bd7b2c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7b2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-4a22d7576e49a6de9f9c854743fa1f8f"></a>

### [`00bd6b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6b4c.md) → [`00bd7b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7b40.md) _ZN8firebase4auth8timeunit14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7b80",
      "incomplete_value": true,
      "site": "00bd7b80",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7b5c",
      "incomplete_value": true,
      "site": "00bd7b5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7b64",
      "incomplete_value": false,
      "site": "00bd7b78",
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
            "const:845:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7b54",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b64",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd7b80",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7b54",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b64",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd7b80",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6b84 ["INT_ADD", "register:40f0:8", ["const:bd6b84:8", "const:4:8"]]
- 00bd6b84 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7b78 ["INT_ADD", "register:40f0:8", ["const:bd7b78:8", "const:4:8"]]
+ 00bd7b78 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6b8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00bd6b8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7b80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00bd7b80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6b58 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7b4c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f4b647904f88ee5e32c9451909434d37"></a>

### [`00bd6bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6bbc.md) → [`00bd7bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7bb0.md) _ZN8firebase4auth8timeunit11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd7bcc",
      "incomplete_value": false,
      "site": "00bd7bd0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd7bdc",
      "incomplete_value": true,
      "site": "00bd7be8",
      "value": [
        "LOAD",
        "8",
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
      "00bd7bcc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7bdc",
      "DATA",
      [
        "storage",
        "01126c68",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd7bcc",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd7bdc",
      "DATA",
      [
        "storage",
        "01127c28",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6bdc ["INT_ADD", "register:40f0:8", ["const:bd6bdc:8", "const:4:8"]]
- 00bd6bdc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7bd0 ["INT_ADD", "register:40f0:8", ["const:bd7bd0:8", "const:4:8"]]
+ 00bd7bd0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6bd8 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd6bd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6bd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6bd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7bcc ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd7bcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7bcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7bcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6be0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd7bd4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-43922c5e616f492f8e778d2805457a1a"></a>

### [`00bd6bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6bf8.md) → [`00bd7bec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7bec.md) _ZN8firebase4auth8timeunit13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7c2c",
      "incomplete_value": true,
      "site": "00bd7c2c",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7c08",
      "incomplete_value": true,
      "site": "00bd7c08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7c10",
      "incomplete_value": false,
      "site": "00bd7c24",
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
            "const:845:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7c00",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7c10",
      "PARAM",
      [
        "storage",
        "002b37fb",
        null,
        "string"
      ]
    ],
    [
      "00bd7c2c",
      "WRITE",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7c00",
      "READ",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7c10",
      "PARAM",
      [
        "storage",
        "002b3845",
        null,
        "string"
      ]
    ],
    [
      "00bd7c2c",
      "WRITE",
      [
        "storage",
        "01127c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6c30 ["INT_ADD", "register:40f0:8", ["const:bd6c30:8", "const:4:8"]]
- 00bd6c30 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7c24 ["INT_ADD", "register:40f0:8", ["const:bd7c24:8", "const:4:8"]]
+ 00bd7c24 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6c38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00bd6c38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7c2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00bd7c2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6c04 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7bf8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-6162edb909fdd1d21f6117f2d10f8886"></a>

### [`00bd6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6c68.md) → [`00bd7c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7c5c.md) _ZN8firebase4auth8timeunit10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd7c78",
      "incomplete_value": false,
      "site": "00bd7c7c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd7c88",
      "incomplete_value": true,
      "site": "00bd7c94",
      "value": [
        "LOAD",
        "8",
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
      "00bd7c78",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd7c88",
      "DATA",
      [
        "storage",
        "01126c70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7c78",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd7c88",
      "DATA",
      [
        "storage",
        "01127c30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6c88 ["INT_ADD", "register:40f0:8", ["const:bd6c88:8", "const:4:8"]]
- 00bd6c88 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7c7c ["INT_ADD", "register:40f0:8", ["const:bd7c7c:8", "const:4:8"]]
+ 00bd7c7c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6c84 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd6c84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6c84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6c84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7c78 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd7c78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7c78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7c78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6c8c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd7c80 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-62a08d041aeeca18ec5e490ab4bac56e"></a>

### [`00bd6ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6ca4.md) → [`00bd7c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7c98.md) _ZN8firebase4auth26phone_auth_options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd7cc4",
      "incomplete_value": true,
      "site": "00bd7cc4",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7cac",
      "incomplete_value": true,
      "site": "00bd7cac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7cb8",
      "incomplete_value": false,
      "site": "00bd7cbc",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7ca8",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7cb8",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7cc4",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7ca8",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7cb8",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7cc4",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6cc8 ["INT_ADD", "register:40f0:8", ["const:bd6cc8:8", "const:4:8"]]
- 00bd6cc8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7cbc ["INT_ADD", "register:40f0:8", ["const:bd7cbc:8", "const:4:8"]]
+ 00bd7cbc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6cd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
- 00bd6cd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7cc4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c38:8"]]
+ 00bd7cc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6cb0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7ca4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a53a8f2657415ad5a36c01c71a6f8936"></a>

### [`00bd6ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6ce4.md) → [`00bd7cd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7cd8.md) _ZN8firebase4auth26phone_auth_options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd7d04",
      "incomplete_value": true,
      "site": "00bd7d04",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7cec",
      "incomplete_value": true,
      "site": "00bd7cec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd7cf4",
      "incomplete_value": false,
      "site": "00bd7cfc",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bd7ce8",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7cf4",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7d04",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7ce8",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7cf4",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7d04",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6d08 ["INT_ADD", "register:40f0:8", ["const:bd6d08:8", "const:4:8"]]
- 00bd6d08 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7cfc ["INT_ADD", "register:40f0:8", ["const:bd7cfc:8", "const:4:8"]]
+ 00bd7cfc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6d10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
- 00bd6d10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7d04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c38:8"]]
+ 00bd7d04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6cf0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7ce4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7815bca380e3c9cb41e3d72f393d2a15"></a>

### [`00bd6d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6d24.md) → [`00bd7d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7d18.md) _ZN8firebase4auth26phone_auth_options_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd7d48",
      "incomplete_value": true,
      "site": "00bd7d48",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d54",
      "incomplete_value": true,
      "site": "00bd6d54",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7d2c",
      "incomplete_value": true,
      "site": "00bd7d2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d38",
      "incomplete_value": true,
      "site": "00bd6d38",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd7d38",
      "incomplete_value": false,
      "site": "00bd7d40",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d44",
      "incomplete_value": false,
      "site": "00bd6d4c",
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
      "00bd7d28",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d38",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7d48",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7d28",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d38",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7d48",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6d4c ["INT_ADD", "register:40f0:8", ["const:bd6d4c:8", "const:4:8"]]
- 00bd6d4c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7d40 ["INT_ADD", "register:40f0:8", ["const:bd7d40:8", "const:4:8"]]
+ 00bd7d40 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6d54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
- 00bd6d54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7d48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c38:8"]]
+ 00bd7d48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6d30 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7d24 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c3671ea230e952566720943393bfa59c"></a>

### [`00bd6d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6d68.md) → [`00bd7d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7d5c.md) _ZN8firebase4auth26phone_auth_options_builder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7d8c",
      "incomplete_value": true,
      "site": "00bd7d8c",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d98",
      "incomplete_value": true,
      "site": "00bd6d98",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd7d70",
      "incomplete_value": true,
      "site": "00bd7d70",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d7c",
      "incomplete_value": true,
      "site": "00bd6d7c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd7d78",
      "incomplete_value": false,
      "site": "00bd7d84",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6d84",
      "incomplete_value": false,
      "site": "00bd6d90",
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
      "00bd7d6c",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d78",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7d8c",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7d6c",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d78",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7d8c",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6d90 ["INT_ADD", "register:40f0:8", ["const:bd6d90:8", "const:4:8"]]
- 00bd6d90 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7d84 ["INT_ADD", "register:40f0:8", ["const:bd7d84:8", "const:4:8"]]
+ 00bd7d84 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6d98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
- 00bd6d98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7d8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c38:8"]]
+ 00bd7d8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6d74 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7d68 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0eb8fe25a44fa9d01f5aa1f8fd6c5bc7"></a>

### [`00bd6db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6db8.md) → [`00bd7dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7dac.md) _ZN8firebase4auth26phone_auth_options_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd7e04",
      "incomplete_value": true,
      "site": "00bd7e04",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6e10",
      "incomplete_value": true,
      "site": "00bd6e10",
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
            "const:c80:8"
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
      "definition_site": "00bd7de0",
      "incomplete_value": true,
      "site": "00bd7dec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:c38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6dec",
      "incomplete_value": true,
      "site": "00bd6df8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
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
      "00bd7dc0",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7de0",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7e04",
      "WRITE",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7dc0",
      "READ",
      [
        "storage",
        "01127c40",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7de0",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7e04",
      "WRITE",
      [
        "storage",
        "01127c40",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6df8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6df8 ["INT_ADD", "register:40f0:8", ["const:bd6df8:8", "const:4:8"]]
- 00bd6df8 ["CALLIND", null, ["register:0:8"]]
+ 00bd7dec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7dec ["INT_ADD", "register:40f0:8", ["const:bd7dec:8", "const:4:8"]]
+ 00bd7dec ["CALLIND", null, ["register:0:8"]]
- 00bd6e10 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6e10 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c80:8"]]
- 00bd6e10 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd7e04 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd7e04 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c40:8"]]
+ 00bd7e04 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6dc8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd7dbc ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-a3e20372bd1318843e6b65978be7b544"></a>

### [`00bd6e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6e24.md) → [`00bd7e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7e18.md) _ZN8firebase4auth26phone_auth_options_builder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd7e54",
      "incomplete_value": true,
      "site": "00bd7e54",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6e60",
      "incomplete_value": true,
      "site": "00bd6e60",
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
            "const:c80:8"
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
      "definition_site": "00bd7e74",
      "incomplete_value": true,
      "site": "00bd7e74",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6e80",
      "incomplete_value": true,
      "site": "00bd6e80",
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
            "const:c78:8"
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
      "definition_site": "00bd7e30",
      "incomplete_value": true,
      "site": "00bd7e30",
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
      "definition_site": "00bd6e3c",
      "incomplete_value": true,
      "site": "00bd6e3c",
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
      "00bd7e2c",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7e38",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7e54",
      "WRITE",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7e2c",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7e38",
      "READ",
      [
        "storage",
        "01127c40",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7e54",
      "WRITE",
      [
        "storage",
        "01127c40",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6e60 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6e60 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6e60 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c80:8"]]
- 00bd6e60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd7e54 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd7e54 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd7e54 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c40:8"]]
+ 00bd7e54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd6e7c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6e7c ["INT_ADD", "register:40f0:8", ["const:bd6e7c:8", "const:4:8"]]
- 00bd6e7c ["CALLIND", null, ["register:0:8"]]
+ 00bd7e70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7e70 ["INT_ADD", "register:40f0:8", ["const:bd7e70:8", "const:4:8"]]
+ 00bd7e70 ["CALLIND", null, ["register:0:8"]]
- 00bd6e80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
- 00bd6e80 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd6e80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7e74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c38:8"]]
+ 00bd7e74 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7e74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-530899453334cf08105087c4238b47e2"></a>

### [`00bd6e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6e94.md) → [`00bd7e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7e88.md) _ZN8firebase4auth26phone_auth_options_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7ec8",
      "incomplete_value": true,
      "site": "00bd7ec8",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6ed4",
      "incomplete_value": true,
      "site": "00bd6ed4",
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
            "const:c78:8"
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
      "definition_site": "00bd7ea4",
      "incomplete_value": true,
      "site": "00bd7ea4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6eb0",
      "incomplete_value": true,
      "site": "00bd6eb0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd7eac",
      "incomplete_value": false,
      "site": "00bd7ec0",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6eb8",
      "incomplete_value": false,
      "site": "00bd6ecc",
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
      "00bd7e9c",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7eac",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7ec8",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7e9c",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7eac",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7ec8",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6ecc ["INT_ADD", "register:40f0:8", ["const:bd6ecc:8", "const:4:8"]]
- 00bd6ecc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7ec0 ["INT_ADD", "register:40f0:8", ["const:bd7ec0:8", "const:4:8"]]
+ 00bd7ec0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6ed4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
- 00bd6ed4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7ec8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c38:8"]]
+ 00bd7ec8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6ea0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7e94 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-e07bf5515455aadcd12d84fa7f0d0136"></a>

### [`00bd6f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6f04.md) → [`00bd7ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7ef8.md) _ZN8firebase4auth26phone_auth_options_builder11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd7f14",
      "incomplete_value": false,
      "site": "00bd7f18",
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
      "definition_site": "00bd6f20",
      "incomplete_value": false,
      "site": "00bd6f24",
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
      "definition_site": "00bd7f24",
      "incomplete_value": true,
      "site": "00bd7f30",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd6f30",
      "incomplete_value": true,
      "site": "00bd6f3c",
      "value": [
        "LOAD",
        "8",
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
      "00bd7f14",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7f24",
      "DATA",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7f14",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd7f24",
      "DATA",
      [
        "storage",
        "01127c48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6f24 ["INT_ADD", "register:40f0:8", ["const:bd6f24:8", "const:4:8"]]
- 00bd6f24 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7f18 ["INT_ADD", "register:40f0:8", ["const:bd7f18:8", "const:4:8"]]
+ 00bd7f18 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6f20 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd6f20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6f20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6f20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f14 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd7f14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6f28 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd7f1c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-c71cb0ce93b2e3660c404b7adcd77905"></a>

### [`00bd6f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6f40.md) → [`00bd7f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7f34.md) _ZN8firebase4auth26phone_auth_options_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd7f74",
      "incomplete_value": true,
      "site": "00bd7f74",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6f80",
      "incomplete_value": true,
      "site": "00bd6f80",
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
            "const:c78:8"
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
      "definition_site": "00bd7f50",
      "incomplete_value": true,
      "site": "00bd7f50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6f5c",
      "incomplete_value": true,
      "site": "00bd6f5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd7f58",
      "incomplete_value": false,
      "site": "00bd7f6c",
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
            "const:d24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd6f64",
      "incomplete_value": false,
      "site": "00bd6f78",
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
      "00bd7f48",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7f58",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd7f74",
      "WRITE",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7f48",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7f58",
      "PARAM",
      [
        "storage",
        "0029fd24",
        null,
        "string"
      ]
    ],
    [
      "00bd7f74",
      "WRITE",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6f78 ["INT_ADD", "register:40f0:8", ["const:bd6f78:8", "const:4:8"]]
- 00bd6f78 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd7f6c ["INT_ADD", "register:40f0:8", ["const:bd7f6c:8", "const:4:8"]]
+ 00bd7f6c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd6f80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
- 00bd6f80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7f74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c38:8"]]
+ 00bd7f74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6f4c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd7f40 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-307de3a620f56394096b2843400a4d25"></a>

### [`00bd6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6fb0.md) → [`00bd7fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7fa4.md) _ZN8firebase4auth26phone_auth_options_builder10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd7fc0",
      "incomplete_value": false,
      "site": "00bd7fc4",
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
      "definition_site": "00bd6fcc",
      "incomplete_value": false,
      "site": "00bd6fd0",
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
      "definition_site": "00bd7fd0",
      "incomplete_value": true,
      "site": "00bd7fdc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd6fdc",
      "incomplete_value": true,
      "site": "00bd6fe8",
      "value": [
        "LOAD",
        "8",
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
      "00bd7fc0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd7fd0",
      "DATA",
      [
        "storage",
        "01126cc8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd7fc0",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd7fd0",
      "DATA",
      [
        "storage",
        "01127c88",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd6fd0 ["INT_ADD", "register:40f0:8", ["const:bd6fd0:8", "const:4:8"]]
- 00bd6fd0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd7fc4 ["INT_ADD", "register:40f0:8", ["const:bd7fc4:8", "const:4:8"]]
+ 00bd7fc4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd6fcc ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd6fcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6fcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6fcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7fc0 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd7fc0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7fc0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7fc0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6fd4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd7fc8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-e4bff0bb3981706f2cf04c6a0768495d"></a>

### [`00bd6fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6fec.md) → [`00bd7fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd7/00bd7fe0.md) _ZN8firebase4auth17phoneauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bd800c",
      "incomplete_value": true,
      "site": "00bd800c",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7018",
      "incomplete_value": true,
      "site": "00bd7018",
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
      "definition_site": "00bd7ff4",
      "incomplete_value": true,
      "site": "00bd7ff4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7000",
      "incomplete_value": true,
      "site": "00bd7000",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8000",
      "incomplete_value": false,
      "site": "00bd8004",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd700c",
      "incomplete_value": false,
      "site": "00bd7010",
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
            "const:cfc:8"
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
      "00bd7ff0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8000",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd800c",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7ff0",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8000",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd800c",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7010 ["INT_ADD", "register:40f0:8", ["const:bd7010:8", "const:4:8"]]
- 00bd7010 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8004 ["INT_ADD", "register:40f0:8", ["const:bd8004:8", "const:4:8"]]
+ 00bd8004 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7018 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00bd7018 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd800c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c90:8"]]
+ 00bd800c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6ff8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd7fec ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-55d4b58b5439cc68e85b62f7ba7c523b"></a>

### [`00bd702c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd702c.md) → [`00bd8020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8020.md) _ZN8firebase4auth17phoneauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bd804c",
      "incomplete_value": true,
      "site": "00bd804c",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7058",
      "incomplete_value": true,
      "site": "00bd7058",
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
      "definition_site": "00bd8034",
      "incomplete_value": true,
      "site": "00bd8034",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7040",
      "incomplete_value": true,
      "site": "00bd7040",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd803c",
      "incomplete_value": false,
      "site": "00bd8044",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7048",
      "incomplete_value": false,
      "site": "00bd7050",
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
            "const:cfc:8"
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
      "00bd8030",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd803c",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd804c",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8030",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd803c",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd804c",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7050 ["INT_ADD", "register:40f0:8", ["const:bd7050:8", "const:4:8"]]
- 00bd7050 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8044 ["INT_ADD", "register:40f0:8", ["const:bd8044:8", "const:4:8"]]
+ 00bd8044 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7058 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00bd7058 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd804c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c90:8"]]
+ 00bd804c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7038 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd802c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3408fb1676f42e9e05ccd5481351eb49"></a>

### [`00bd706c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd706c.md) → [`00bd8060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8060.md) _ZN8firebase4auth17phoneauthprovider10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd8090",
      "incomplete_value": true,
      "site": "00bd8090",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd709c",
      "incomplete_value": true,
      "site": "00bd709c",
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
      "definition_site": "00bd8074",
      "incomplete_value": true,
      "site": "00bd8074",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7080",
      "incomplete_value": true,
      "site": "00bd7080",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8080",
      "incomplete_value": false,
      "site": "00bd8088",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd708c",
      "incomplete_value": false,
      "site": "00bd7094",
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
            "const:cfc:8"
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
      "00bd8070",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8080",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd8090",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8070",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8080",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd8090",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7094 ["INT_ADD", "register:40f0:8", ["const:bd7094:8", "const:4:8"]]
- 00bd7094 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8088 ["INT_ADD", "register:40f0:8", ["const:bd8088:8", "const:4:8"]]
+ 00bd8088 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd709c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00bd709c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8090 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c90:8"]]
+ 00bd8090 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7078 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd806c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ff73548738835111f79346d9a6c3271c"></a>

### [`00bd70b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd70b0.md) → [`00bd80a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd80a4.md) _ZN8firebase4auth17phoneauthprovider10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd80d4",
      "incomplete_value": true,
      "site": "00bd80d4",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd70e0",
      "incomplete_value": true,
      "site": "00bd70e0",
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
      "definition_site": "00bd80b8",
      "incomplete_value": true,
      "site": "00bd80b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd70c4",
      "incomplete_value": true,
      "site": "00bd70c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd80c0",
      "incomplete_value": false,
      "site": "00bd80cc",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd70cc",
      "incomplete_value": false,
      "site": "00bd70d8",
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
            "const:cfc:8"
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
      "00bd80b4",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd80c0",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd80d4",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd80b4",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd80c0",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd80d4",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd70d8 ["INT_ADD", "register:40f0:8", ["const:bd70d8:8", "const:4:8"]]
- 00bd70d8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd80cc ["INT_ADD", "register:40f0:8", ["const:bd80cc:8", "const:4:8"]]
+ 00bd80cc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd70e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
- 00bd70e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd80d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c90:8"]]
+ 00bd80d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd70bc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd80b0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-cb6b197ec4965f1a65480f8174df9fb0"></a>

### [`00bd7100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7100.md) → [`00bd80f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd80f4.md) _ZN8firebase4auth17phoneauthprovider15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd814c",
      "incomplete_value": true,
      "site": "00bd814c",
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
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7158",
      "incomplete_value": true,
      "site": "00bd7158",
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
      "definition_site": "00bd8128",
      "incomplete_value": true,
      "site": "00bd8134",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:c90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7134",
      "incomplete_value": true,
      "site": "00bd7140",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd8108",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8128",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd814c",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8108",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8128",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd814c",
      "WRITE",
      [
        "storage",
        "01127c98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7140 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7140 ["INT_ADD", "register:40f0:8", ["const:bd7140:8", "const:4:8"]]
- 00bd7140 ["CALLIND", null, ["register:0:8"]]
+ 00bd8134 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8134 ["INT_ADD", "register:40f0:8", ["const:bd8134:8", "const:4:8"]]
+ 00bd8134 ["CALLIND", null, ["register:0:8"]]
- 00bd7158 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd7158 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cd8:8"]]
- 00bd7158 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd814c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd814c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c98:8"]]
+ 00bd814c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7110 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd8104 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-90490eb31bdcf34f0d166365d95b1500"></a>

### [`00bd716c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd716c.md) → [`00bd8160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8160.md) _ZN8firebase4auth17phoneauthprovider12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd819c",
      "incomplete_value": true,
      "site": "00bd819c",
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
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd71a8",
      "incomplete_value": true,
      "site": "00bd71a8",
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
      "definition_site": "00bd81bc",
      "incomplete_value": true,
      "site": "00bd81bc",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd71c8",
      "incomplete_value": true,
      "site": "00bd71c8",
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
      "definition_site": "00bd8178",
      "incomplete_value": true,
      "site": "00bd8178",
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
      "definition_site": "00bd7184",
      "incomplete_value": true,
      "site": "00bd7184",
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
      "00bd8174",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8180",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd819c",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8174",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8180",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd819c",
      "WRITE",
      [
        "storage",
        "01127c98",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd71a8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd71a8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd71a8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cd8:8"]]
- 00bd71a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd819c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd819c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd819c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c98:8"]]
+ 00bd819c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd71c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd71c4 ["INT_ADD", "register:40f0:8", ["const:bd71c4:8", "const:4:8"]]
- 00bd71c4 ["CALLIND", null, ["register:0:8"]]
+ 00bd81b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd81b8 ["INT_ADD", "register:40f0:8", ["const:bd81b8:8", "const:4:8"]]
+ 00bd81b8 ["CALLIND", null, ["register:0:8"]]
- 00bd71c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00bd71c8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd71c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd81bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c90:8"]]
+ 00bd81bc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd81bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-36744174e1f9763513b81d6385af4e33"></a>

### [`00bd71dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd71dc.md) → [`00bd81d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd81d0.md) _ZN8firebase4auth17phoneauthprovider14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8210",
      "incomplete_value": true,
      "site": "00bd8210",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd721c",
      "incomplete_value": true,
      "site": "00bd721c",
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
      "definition_site": "00bd81ec",
      "incomplete_value": true,
      "site": "00bd81ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd71f8",
      "incomplete_value": true,
      "site": "00bd71f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd81f4",
      "incomplete_value": false,
      "site": "00bd8208",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7200",
      "incomplete_value": false,
      "site": "00bd7214",
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
            "const:cfc:8"
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
      "00bd81e4",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd81f4",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd8210",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd81e4",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd81f4",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd8210",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7214 ["INT_ADD", "register:40f0:8", ["const:bd7214:8", "const:4:8"]]
- 00bd7214 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8208 ["INT_ADD", "register:40f0:8", ["const:bd8208:8", "const:4:8"]]
+ 00bd8208 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd721c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00bd721c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8210 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c90:8"]]
+ 00bd8210 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd71e8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd81dc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f5c1ee3d06b472438da9bf4bdaa03785"></a>

### [`00bd724c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd724c.md) → [`00bd8240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8240.md) _ZN8firebase4auth17phoneauthprovider11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd825c",
      "incomplete_value": false,
      "site": "00bd8260",
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
      "definition_site": "00bd7268",
      "incomplete_value": false,
      "site": "00bd726c",
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
      "definition_site": "00bd826c",
      "incomplete_value": true,
      "site": "00bd8278",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7278",
      "incomplete_value": true,
      "site": "00bd7284",
      "value": [
        "LOAD",
        "8",
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
      "00bd825c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd826c",
      "DATA",
      [
        "storage",
        "01126ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd825c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd826c",
      "DATA",
      [
        "storage",
        "01127ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd726c ["INT_ADD", "register:40f0:8", ["const:bd726c:8", "const:4:8"]]
- 00bd726c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd8260 ["INT_ADD", "register:40f0:8", ["const:bd8260:8", "const:4:8"]]
+ 00bd8260 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd7268 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd7268 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7268 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7268 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd825c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd825c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd825c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd825c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7270 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8264 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-4234fc3f4941aea5f95e2b7ab3e86c97"></a>

### [`00bd7288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7288.md) → [`00bd827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd827c.md) _ZN8firebase4auth17phoneauthprovider13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd82bc",
      "incomplete_value": true,
      "site": "00bd82bc",
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
            "const:c90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd72c8",
      "incomplete_value": true,
      "site": "00bd72c8",
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
      "definition_site": "00bd8298",
      "incomplete_value": true,
      "site": "00bd8298",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd72a4",
      "incomplete_value": true,
      "site": "00bd72a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd82a0",
      "incomplete_value": false,
      "site": "00bd82b4",
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
            "const:d3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd72ac",
      "incomplete_value": false,
      "site": "00bd72c0",
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
            "const:cfc:8"
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
      "00bd8290",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd82a0",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd82bc",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8290",
      "READ",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd82a0",
      "PARAM",
      [
        "storage",
        "002a1d3c",
        null,
        "string"
      ]
    ],
    [
      "00bd82bc",
      "WRITE",
      [
        "storage",
        "01127c90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd72c0 ["INT_ADD", "register:40f0:8", ["const:bd72c0:8", "const:4:8"]]
- 00bd72c0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd82b4 ["INT_ADD", "register:40f0:8", ["const:bd82b4:8", "const:4:8"]]
+ 00bd82b4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd72c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
- 00bd72c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd82bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c90:8"]]
+ 00bd82bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7294 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8288 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-4c94774e37b3bb303677cdac11017c22"></a>

### [`00bd72f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd72f8.md) → [`00bd82ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd82ec.md) _ZN8firebase4auth17phoneauthprovider10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd8308",
      "incomplete_value": false,
      "site": "00bd830c",
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
      "definition_site": "00bd7314",
      "incomplete_value": false,
      "site": "00bd7318",
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
      "definition_site": "00bd8318",
      "incomplete_value": true,
      "site": "00bd8324",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7324",
      "incomplete_value": true,
      "site": "00bd7330",
      "value": [
        "LOAD",
        "8",
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
      "00bd8308",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd8318",
      "DATA",
      [
        "storage",
        "01126cf8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd8308",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd8318",
      "DATA",
      [
        "storage",
        "01127cb8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7318 ["INT_ADD", "register:40f0:8", ["const:bd7318:8", "const:4:8"]]
- 00bd7318 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd830c ["INT_ADD", "register:40f0:8", ["const:bd830c:8", "const:4:8"]]
+ 00bd830c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd7314 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd7314 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7314 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7314 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8308 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd8308 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8308 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8308 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd731c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8310 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ab5e5227b6129816036307c6e74de7e3"></a>

### [`00bd7334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7334.md) → [`00bd8328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8328.md) _ZN8firebase4auth21oauthprovider_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd8354",
      "incomplete_value": true,
      "site": "00bd8354",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7360",
      "incomplete_value": true,
      "site": "00bd7360",
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
            "const:d00:8"
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
      "definition_site": "00bd833c",
      "incomplete_value": true,
      "site": "00bd833c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7348",
      "incomplete_value": true,
      "site": "00bd7348",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8348",
      "incomplete_value": false,
      "site": "00bd834c",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7354",
      "incomplete_value": false,
      "site": "00bd7358",
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
            "const:d5a:8"
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
      "00bd8338",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8348",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd8354",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8338",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8348",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd8354",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7358 ["INT_ADD", "register:40f0:8", ["const:bd7358:8", "const:4:8"]]
- 00bd7358 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd834c ["INT_ADD", "register:40f0:8", ["const:bd834c:8", "const:4:8"]]
+ 00bd834c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7360 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bd7360 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8354 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cc0:8"]]
+ 00bd8354 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7340 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8334 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c1652972f1616b502f694d91ab7f7586"></a>

### [`00bd7374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7374.md) → [`00bd8368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8368.md) _ZN8firebase4auth21oauthprovider_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd8394",
      "incomplete_value": true,
      "site": "00bd8394",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd73a0",
      "incomplete_value": true,
      "site": "00bd73a0",
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
            "const:d00:8"
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
      "definition_site": "00bd837c",
      "incomplete_value": true,
      "site": "00bd837c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7388",
      "incomplete_value": true,
      "site": "00bd7388",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8384",
      "incomplete_value": false,
      "site": "00bd838c",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7390",
      "incomplete_value": false,
      "site": "00bd7398",
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
            "const:d5a:8"
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
      "00bd8378",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8384",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd8394",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8378",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8384",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd8394",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7398 ["INT_ADD", "register:40f0:8", ["const:bd7398:8", "const:4:8"]]
- 00bd7398 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd838c ["INT_ADD", "register:40f0:8", ["const:bd838c:8", "const:4:8"]]
+ 00bd838c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd73a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bd73a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8394 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cc0:8"]]
+ 00bd8394 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7380 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8374 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e595b6b4795628f80cc09b470e305093"></a>

### [`00bd73b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd73b4.md) → [`00bd83a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd83a8.md) _ZN8firebase4auth21oauthprovider_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd83d8",
      "incomplete_value": true,
      "site": "00bd83d8",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd73e4",
      "incomplete_value": true,
      "site": "00bd73e4",
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
            "const:d00:8"
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
      "definition_site": "00bd83bc",
      "incomplete_value": true,
      "site": "00bd83bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd73c8",
      "incomplete_value": true,
      "site": "00bd73c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd83c8",
      "incomplete_value": false,
      "site": "00bd83d0",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd73d4",
      "incomplete_value": false,
      "site": "00bd73dc",
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
            "const:d5a:8"
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
      "00bd83b8",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83c8",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd83d8",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd83b8",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83c8",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd83d8",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd73dc ["INT_ADD", "register:40f0:8", ["const:bd73dc:8", "const:4:8"]]
- 00bd73dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd83d0 ["INT_ADD", "register:40f0:8", ["const:bd83d0:8", "const:4:8"]]
+ 00bd83d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd73e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bd73e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd83d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cc0:8"]]
+ 00bd83d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd73c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd83b4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-dcfd3b1b002ad7250e2d7c9e67505fd7"></a>

### [`00bd73f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd73f8.md) → [`00bd83ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd83ec.md) _ZN8firebase4auth21oauthprovider_builder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd841c",
      "incomplete_value": true,
      "site": "00bd841c",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7428",
      "incomplete_value": true,
      "site": "00bd7428",
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
            "const:d00:8"
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
      "definition_site": "00bd8400",
      "incomplete_value": true,
      "site": "00bd8400",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd740c",
      "incomplete_value": true,
      "site": "00bd740c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8408",
      "incomplete_value": false,
      "site": "00bd8414",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7414",
      "incomplete_value": false,
      "site": "00bd7420",
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
            "const:d5a:8"
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
      "00bd83fc",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8408",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd841c",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd83fc",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8408",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd841c",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7420 ["INT_ADD", "register:40f0:8", ["const:bd7420:8", "const:4:8"]]
- 00bd7420 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8414 ["INT_ADD", "register:40f0:8", ["const:bd8414:8", "const:4:8"]]
+ 00bd8414 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7428 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bd7428 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd841c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cc0:8"]]
+ 00bd841c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7404 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd83f8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-02c106d92bc690c0152c7b5188ff2ff0"></a>

### [`00bd7448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7448.md) → [`00bd843c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd843c.md) _ZN8firebase4auth21oauthprovider_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd8494",
      "incomplete_value": true,
      "site": "00bd8494",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd74a0",
      "incomplete_value": true,
      "site": "00bd74a0",
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
            "const:d08:8"
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
      "definition_site": "00bd8470",
      "incomplete_value": true,
      "site": "00bd847c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "definition_site": "00bd747c",
      "incomplete_value": true,
      "site": "00bd7488",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
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
      "00bd8450",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8470",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8494",
      "WRITE",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8450",
      "READ",
      [
        "storage",
        "01127cc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8470",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8494",
      "WRITE",
      [
        "storage",
        "01127cc8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7488 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7488 ["INT_ADD", "register:40f0:8", ["const:bd7488:8", "const:4:8"]]
- 00bd7488 ["CALLIND", null, ["register:0:8"]]
+ 00bd847c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd847c ["INT_ADD", "register:40f0:8", ["const:bd847c:8", "const:4:8"]]
+ 00bd847c ["CALLIND", null, ["register:0:8"]]
- 00bd74a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd74a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d08:8"]]
- 00bd74a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd8494 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd8494 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cc8:8"]]
+ 00bd8494 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7458 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd844c ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-4eac3561d840fbd3b3448fa907e650fc"></a>

### [`00bd74b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd74b4.md) → [`00bd84a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd84a8.md) _ZN8firebase4auth21oauthprovider_builder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd84e4",
      "incomplete_value": true,
      "site": "00bd84e4",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd74f0",
      "incomplete_value": true,
      "site": "00bd74f0",
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
            "const:d08:8"
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
      "definition_site": "00bd8504",
      "incomplete_value": true,
      "site": "00bd8504",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7510",
      "incomplete_value": true,
      "site": "00bd7510",
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
            "const:d00:8"
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
      "definition_site": "00bd84c0",
      "incomplete_value": true,
      "site": "00bd84c0",
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
      "definition_site": "00bd74cc",
      "incomplete_value": true,
      "site": "00bd74cc",
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
      "00bd84bc",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd84c8",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd84e4",
      "WRITE",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd84bc",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd84c8",
      "READ",
      [
        "storage",
        "01127cc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd84e4",
      "WRITE",
      [
        "storage",
        "01127cc8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd74f0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd74f0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd74f0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d08:8"]]
- 00bd74f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd84e4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd84e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd84e4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cc8:8"]]
+ 00bd84e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd750c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd750c ["INT_ADD", "register:40f0:8", ["const:bd750c:8", "const:4:8"]]
- 00bd750c ["CALLIND", null, ["register:0:8"]]
+ 00bd8500 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8500 ["INT_ADD", "register:40f0:8", ["const:bd8500:8", "const:4:8"]]
+ 00bd8500 ["CALLIND", null, ["register:0:8"]]
- 00bd7510 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bd7510 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7510 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd8504 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
+ 00bd8504 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd8504 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-524a01570d475b152b9c340694933f82"></a>

### [`00bd7524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7524.md) → [`00bd8518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8518.md) _ZN8firebase4auth21oauthprovider_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8558",
      "incomplete_value": true,
      "site": "00bd8558",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7564",
      "incomplete_value": true,
      "site": "00bd7564",
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
            "const:d00:8"
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
      "definition_site": "00bd8534",
      "incomplete_value": true,
      "site": "00bd8534",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7540",
      "incomplete_value": true,
      "site": "00bd7540",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd853c",
      "incomplete_value": false,
      "site": "00bd8550",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7548",
      "incomplete_value": false,
      "site": "00bd755c",
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
            "const:d5a:8"
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
      "00bd852c",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd853c",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd8558",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd852c",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd853c",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd8558",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd755c ["INT_ADD", "register:40f0:8", ["const:bd755c:8", "const:4:8"]]
- 00bd755c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8550 ["INT_ADD", "register:40f0:8", ["const:bd8550:8", "const:4:8"]]
+ 00bd8550 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7564 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bd7564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8558 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
+ 00bd8558 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7530 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8524 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-469ea182ec2cf3203bafd5591c36c979"></a>

### [`00bd7594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7594.md) → [`00bd8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8588.md) _ZN8firebase4auth21oauthprovider_builder11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd85a4",
      "incomplete_value": false,
      "site": "00bd85a8",
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
      "definition_site": "00bd75b0",
      "incomplete_value": false,
      "site": "00bd75b4",
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
      "definition_site": "00bd85b4",
      "incomplete_value": true,
      "site": "00bd85c0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd75c0",
      "incomplete_value": true,
      "site": "00bd75cc",
      "value": [
        "LOAD",
        "8",
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
      "00bd85a4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd85b4",
      "DATA",
      [
        "storage",
        "01126d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd85a4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd85b4",
      "DATA",
      [
        "storage",
        "01127cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd75b4 ["INT_ADD", "register:40f0:8", ["const:bd75b4:8", "const:4:8"]]
- 00bd75b4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd85a8 ["INT_ADD", "register:40f0:8", ["const:bd85a8:8", "const:4:8"]]
+ 00bd85a8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd75b0 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd75b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd75b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd75b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd85a4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd85a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd85a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd85a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd75b8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd85ac ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-3c3cc8a5120d5b5e8bf46d2fdb727cf8"></a>

### [`00bd75d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd75d0.md) → [`00bd85c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd85c4.md) _ZN8firebase4auth21oauthprovider_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8604",
      "incomplete_value": true,
      "site": "00bd8604",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7610",
      "incomplete_value": true,
      "site": "00bd7610",
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
            "const:d00:8"
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
      "definition_site": "00bd85e0",
      "incomplete_value": true,
      "site": "00bd85e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd75ec",
      "incomplete_value": true,
      "site": "00bd75ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd85e8",
      "incomplete_value": false,
      "site": "00bd85fc",
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
            "const:da4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd75f4",
      "incomplete_value": false,
      "site": "00bd7608",
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
            "const:d5a:8"
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
      "00bd85d8",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd85e8",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd8604",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd85d8",
      "READ",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd85e8",
      "PARAM",
      [
        "storage",
        "002c0da4",
        null,
        "string"
      ]
    ],
    [
      "00bd8604",
      "WRITE",
      [
        "storage",
        "01127cc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7608 ["INT_ADD", "register:40f0:8", ["const:bd7608:8", "const:4:8"]]
- 00bd7608 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd85fc ["INT_ADD", "register:40f0:8", ["const:bd85fc:8", "const:4:8"]]
+ 00bd85fc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7610 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bd7610 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8604 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
+ 00bd8604 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd75dc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd85d0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-c0d5deb006491325aff56f8c3a4345f4"></a>

### [`00bd7640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7640.md) → [`00bd8634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8634.md) _ZN8firebase4auth21oauthprovider_builder10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd8650",
      "incomplete_value": false,
      "site": "00bd8654",
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
      "definition_site": "00bd765c",
      "incomplete_value": false,
      "site": "00bd7660",
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
      "definition_site": "00bd8660",
      "incomplete_value": true,
      "site": "00bd866c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd766c",
      "incomplete_value": true,
      "site": "00bd7678",
      "value": [
        "LOAD",
        "8",
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
      "00bd8650",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd8660",
      "DATA",
      [
        "storage",
        "01126d28",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd8650",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd8660",
      "DATA",
      [
        "storage",
        "01127ce8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7660 ["INT_ADD", "register:40f0:8", ["const:bd7660:8", "const:4:8"]]
- 00bd7660 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd8654 ["INT_ADD", "register:40f0:8", ["const:bd8654:8", "const:4:8"]]
+ 00bd8654 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd765c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd765c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd765c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd765c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8650 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd8650 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8650 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8650 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7664 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8658 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-8a2138a3707147208a4f4665397c7ff9"></a>

### [`00bd767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd767c.md) → [`00bd8670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8670.md) _ZN8firebase4auth31oauthprovider_credentialbuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
      "definition_site": "00bd869c",
      "incomplete_value": true,
      "site": "00bd869c",
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
    "old": {
      "definition_site": "00bd76a8",
      "incomplete_value": true,
      "site": "00bd76a8",
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
            "const:d30:8"
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
      "definition_site": "00bd8684",
      "incomplete_value": true,
      "site": "00bd8684",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7690",
      "incomplete_value": true,
      "site": "00bd7690",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8690",
      "incomplete_value": false,
      "site": "00bd8694",
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
            "const:29d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd769c",
      "incomplete_value": false,
      "site": "00bd76a0",
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
            "const:1bf:8"
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
      "00bd8680",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8690",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd869c",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8680",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8690",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd869c",
      "WRITE",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd76a0 ["INT_ADD", "register:40f0:8", ["const:bd76a0:8", "const:4:8"]]
- 00bd76a0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8694 ["INT_ADD", "register:40f0:8", ["const:bd8694:8", "const:4:8"]]
+ 00bd8694 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd76a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
- 00bd76a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd869c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
+ 00bd869c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7688 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd867c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-531e8fd2ad5d9e09e960fc54d0e98087"></a>

### [`00bd76bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd76bc.md) → [`00bd86b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd86b0.md) _ZN8firebase4auth31oauthprovider_credentialbuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
      "definition_site": "00bd86dc",
      "incomplete_value": true,
      "site": "00bd86dc",
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
    "old": {
      "definition_site": "00bd76e8",
      "incomplete_value": true,
      "site": "00bd76e8",
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
            "const:d30:8"
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
      "definition_site": "00bd86c4",
      "incomplete_value": true,
      "site": "00bd86c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd76d0",
      "incomplete_value": true,
      "site": "00bd76d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd86cc",
      "incomplete_value": false,
      "site": "00bd86d4",
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
            "const:29d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd76d8",
      "incomplete_value": false,
      "site": "00bd76e0",
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
            "const:1bf:8"
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
      "00bd86c0",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd86cc",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd86dc",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd86c0",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd86cc",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd86dc",
      "WRITE",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd76e0 ["INT_ADD", "register:40f0:8", ["const:bd76e0:8", "const:4:8"]]
- 00bd76e0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd86d4 ["INT_ADD", "register:40f0:8", ["const:bd86d4:8", "const:4:8"]]
+ 00bd86d4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd76e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
- 00bd76e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd86dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
+ 00bd86dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd76c8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd86bc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3c688de87056e263028e04ad4ae50354"></a>

### [`00bd76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd76fc.md) → [`00bd86f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd86f0.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd8720",
      "incomplete_value": true,
      "site": "00bd8720",
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
    "old": {
      "definition_site": "00bd772c",
      "incomplete_value": true,
      "site": "00bd772c",
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
            "const:d30:8"
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
      "definition_site": "00bd8704",
      "incomplete_value": true,
      "site": "00bd8704",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7710",
      "incomplete_value": true,
      "site": "00bd7710",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8710",
      "incomplete_value": false,
      "site": "00bd8718",
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
            "const:29d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd771c",
      "incomplete_value": false,
      "site": "00bd7724",
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
            "const:1bf:8"
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
      "00bd8700",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8710",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd8720",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8700",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8710",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd8720",
      "WRITE",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7724 ["INT_ADD", "register:40f0:8", ["const:bd7724:8", "const:4:8"]]
- 00bd7724 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8718 ["INT_ADD", "register:40f0:8", ["const:bd8718:8", "const:4:8"]]
+ 00bd8718 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd772c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
- 00bd772c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8720 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
+ 00bd8720 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7708 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd86fc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3e60526125173e28595a34c625284ea5"></a>

### [`00bd7740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7740.md) → [`00bd8734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8734.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8764",
      "incomplete_value": true,
      "site": "00bd8764",
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
    "old": {
      "definition_site": "00bd7770",
      "incomplete_value": true,
      "site": "00bd7770",
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
            "const:d30:8"
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
      "definition_site": "00bd8748",
      "incomplete_value": true,
      "site": "00bd8748",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7754",
      "incomplete_value": true,
      "site": "00bd7754",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bd8750",
      "incomplete_value": false,
      "site": "00bd875c",
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
            "const:29d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd775c",
      "incomplete_value": false,
      "site": "00bd7768",
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
            "const:1bf:8"
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
      "00bd8744",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8750",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd8764",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8744",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8750",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd8764",
      "WRITE",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7768 ["INT_ADD", "register:40f0:8", ["const:bd7768:8", "const:4:8"]]
- 00bd7768 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd875c ["INT_ADD", "register:40f0:8", ["const:bd875c:8", "const:4:8"]]
+ 00bd875c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7770 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
- 00bd7770 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8764 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf0:8"]]
+ 00bd8764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd774c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8740 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-01f62db29bc5149a260f09c312839d76"></a>

### [`00bd7790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7790.md) → [`00bd8784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8784.md) _ZN8firebase4auth31oauthprovider_credentialbuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd87dc",
      "incomplete_value": true,
      "site": "00bd87dc",
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
    "old": {
      "definition_site": "00bd77e8",
      "incomplete_value": true,
      "site": "00bd77e8",
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
            "const:d38:8"
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
      "definition_site": "00bd87b8",
      "incomplete_value": true,
      "site": "00bd87c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "definition_site": "00bd77c4",
      "incomplete_value": true,
      "site": "00bd77d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "00bd8798",
      "READ",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd87b8",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd87dc",
      "WRITE",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8798",
      "READ",
      [
        "storage",
        "01127cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd87b8",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd87dc",
      "WRITE",
      [
        "storage",
        "01127cf8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd77d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd77d0 ["INT_ADD", "register:40f0:8", ["const:bd77d0:8", "const:4:8"]]
- 00bd77d0 ["CALLIND", null, ["register:0:8"]]
+ 00bd87c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd87c4 ["INT_ADD", "register:40f0:8", ["const:bd87c4:8", "const:4:8"]]
+ 00bd87c4 ["CALLIND", null, ["register:0:8"]]
- 00bd77e8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd77e8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d38:8"]]
- 00bd77e8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd87dc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd87dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cf8:8"]]
+ 00bd87dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd77a0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd8794 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-74880157e6532ffabd523e9dd444a463"></a>

### [`00bd77fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd77fc.md) → [`00bd87f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd87f0.md) _ZN8firebase4auth31oauthprovider_credentialbuilder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bd882c",
      "incomplete_value": true,
      "site": "00bd882c",
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
    "old": {
      "definition_site": "00bd7838",
      "incomplete_value": true,
      "site": "00bd7838",
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
            "const:d38:8"
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
      "definition_site": "00bd884c",
      "incomplete_value": true,
      "site": "00bd884c",
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
    "old": {
      "definition_site": "00bd7858",
      "incomplete_value": true,
      "site": "00bd7858",
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
            "const:d30:8"
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
      "definition_site": "00bd8808",
      "incomplete_value": true,
      "site": "00bd8808",
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
      "definition_site": "00bd7814",
      "incomplete_value": true,
      "site": "00bd7814",
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
      "00bd8804",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8810",
      "READ",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd882c",
      "WRITE",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8804",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8810",
      "READ",
      [
        "storage",
        "01127cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd882c",
      "WRITE",
      [
        "storage",
        "01127cf8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7838 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7838 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7838 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d38:8"]]
- 00bd7838 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd882c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd882c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd882c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cf8:8"]]
+ 00bd882c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7854 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7854 ["INT_ADD", "register:40f0:8", ["const:bd7854:8", "const:4:8"]]
- 00bd7854 ["CALLIND", null, ["register:0:8"]]
+ 00bd8848 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8848 ["INT_ADD", "register:40f0:8", ["const:bd8848:8", "const:4:8"]]
+ 00bd8848 ["CALLIND", null, ["register:0:8"]]
- 00bd7858 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
- 00bd7858 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7858 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd884c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
+ 00bd884c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd884c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-af4f86411d787da6a4def2338efe55bb"></a>

### [`00bd786c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd786c.md) → [`00bd8860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8860.md) _ZN8firebase4auth31oauthprovider_credentialbuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd88a0",
      "incomplete_value": true,
      "site": "00bd88a0",
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
    "old": {
      "definition_site": "00bd78ac",
      "incomplete_value": true,
      "site": "00bd78ac",
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
            "const:d30:8"
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
      "definition_site": "00bd8884",
      "incomplete_value": false,
      "site": "00bd8898",
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
            "const:29d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7890",
      "incomplete_value": false,
      "site": "00bd78a4",
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
            "const:1bf:8"
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
      "00bd8874",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8884",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd88a0",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8874",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8884",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd88a0",
      "WRITE",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd78a4 ["INT_ADD", "register:40f0:8", ["const:bd78a4:8", "const:4:8"]]
- 00bd78a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8898 ["INT_ADD", "register:40f0:8", ["const:bd8898:8", "const:4:8"]]
+ 00bd8898 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd78ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
- 00bd78ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd88a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
+ 00bd88a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7878 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd886c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-cca5a79933804a9bfdd3ec1e726ded42"></a>

### [`00bd78dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd78dc.md) → [`00bd88d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd88d0.md) _ZN8firebase4auth31oauthprovider_credentialbuilder11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd88ec",
      "incomplete_value": false,
      "site": "00bd88f0",
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
      "definition_site": "00bd78f8",
      "incomplete_value": false,
      "site": "00bd78fc",
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
      "definition_site": "00bd88fc",
      "incomplete_value": true,
      "site": "00bd8908",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7908",
      "incomplete_value": true,
      "site": "00bd7914",
      "value": [
        "LOAD",
        "8",
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
      "00bd88ec",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd88fc",
      "DATA",
      [
        "storage",
        "01126d40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd88ec",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd88fc",
      "DATA",
      [
        "storage",
        "01127d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd78fc ["INT_ADD", "register:40f0:8", ["const:bd78fc:8", "const:4:8"]]
- 00bd78fc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd88f0 ["INT_ADD", "register:40f0:8", ["const:bd88f0:8", "const:4:8"]]
+ 00bd88f0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd78f8 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd78f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd78f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd78f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd88ec ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd88ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd88ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd88ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7900 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd88f4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


