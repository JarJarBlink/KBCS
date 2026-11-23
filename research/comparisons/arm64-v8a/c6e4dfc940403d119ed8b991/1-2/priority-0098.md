# v16.0.2 → v16.0.3 · 最優先の変更候補 (98)

[一覧の目次](README.md)

<a id="compare-a23aee396b741d467bb603337e6b6673"></a>

### [`00bdd7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd7a4.md) → [`00bde798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde798.md) _ZN8firebase4auth8userinfo11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bde7b4",
      "incomplete_value": false,
      "site": "00bde7b8",
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
      "definition_site": "00bdd7c0",
      "incomplete_value": false,
      "site": "00bdd7c4",
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
      "definition_site": "00bde7c4",
      "incomplete_value": true,
      "site": "00bde7d0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd7d0",
      "incomplete_value": true,
      "site": "00bdd7dc",
      "value": [
        "LOAD",
        "8",
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
      "00bde7b4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bde7c4",
      "DATA",
      [
        "storage",
        "01126ec0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde7b4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bde7c4",
      "DATA",
      [
        "storage",
        "01127e80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd7c4 ["INT_ADD", "register:40f0:8", ["const:bdd7c4:8", "const:4:8"]]
- 00bdd7c4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde7b8 ["INT_ADD", "register:40f0:8", ["const:bde7b8:8", "const:4:8"]]
+ 00bde7b8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd7c0 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bdd7c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd7c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd7c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde7b4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bde7b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde7b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde7b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd7c8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde7bc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ca979e12e6418a7838182b4eb8aaabb0"></a>

### [`00bdd7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd7e0.md) → [`00bde7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde7d4.md) _ZN8firebase4auth8userinfo13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde814",
      "incomplete_value": true,
      "site": "00bde814",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd820",
      "incomplete_value": true,
      "site": "00bdd820",
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
            "const:eb0:8"
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
      "definition_site": "00bde7f0",
      "incomplete_value": true,
      "site": "00bde7f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd7fc",
      "incomplete_value": true,
      "site": "00bdd7fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bde7f8",
      "incomplete_value": false,
      "site": "00bde80c",
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
            "const:7f7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd804",
      "incomplete_value": false,
      "site": "00bdd818",
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
            "const:720:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde7e8",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde7f8",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde814",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde7e8",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde7f8",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde814",
      "WRITE",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd818 ["INT_ADD", "register:40f0:8", ["const:bdd818:8", "const:4:8"]]
- 00bdd818 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde80c ["INT_ADD", "register:40f0:8", ["const:bde80c:8", "const:4:8"]]
+ 00bde80c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd820 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
- 00bdd820 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde814 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e70:8"]]
+ 00bde814 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd7ec ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde7e0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-51e5125f1a88641017945ebf39c2201b"></a>

### [`00bdd850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd850.md) → [`00bde844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde844.md) _ZN8firebase4auth8userinfo10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bde860",
      "incomplete_value": false,
      "site": "00bde864",
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
      "definition_site": "00bdd86c",
      "incomplete_value": false,
      "site": "00bdd870",
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
      "definition_site": "00bde870",
      "incomplete_value": true,
      "site": "00bde87c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd87c",
      "incomplete_value": true,
      "site": "00bdd888",
      "value": [
        "LOAD",
        "8",
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
      "00bde860",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bde870",
      "DATA",
      [
        "storage",
        "01126ef8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bde860",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bde870",
      "DATA",
      [
        "storage",
        "01127eb8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd870 ["INT_ADD", "register:40f0:8", ["const:bdd870:8", "const:4:8"]]
- 00bdd870 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde864 ["INT_ADD", "register:40f0:8", ["const:bde864:8", "const:4:8"]]
+ 00bde864 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd86c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bdd86c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd86c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd86c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde860 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bde860 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde860 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde860 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd874 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde868 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-51b438863819186584fd605771697a86"></a>

### [`00bdd88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd88c.md) → [`00bde880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde880.md) _ZN8firebase4auth8metadata19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bde8ac",
      "incomplete_value": true,
      "site": "00bde8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8b8",
      "incomplete_value": true,
      "site": "00bdd8b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f00:8"
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
      "definition_site": "00bde894",
      "incomplete_value": true,
      "site": "00bde894",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8a0",
      "incomplete_value": true,
      "site": "00bdd8a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bde8a0",
      "incomplete_value": false,
      "site": "00bde8a4",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8ac",
      "incomplete_value": false,
      "site": "00bdd8b0",
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
      "00bde890",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde8a0",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bde8ac",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde890",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde8a0",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bde8ac",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd8b0 ["INT_ADD", "register:40f0:8", ["const:bdd8b0:8", "const:4:8"]]
- 00bdd8b0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde8a4 ["INT_ADD", "register:40f0:8", ["const:bde8a4:8", "const:4:8"]]
+ 00bde8a4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd8b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
- 00bdd8b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde8ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ec0:8"]]
+ 00bde8ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd898 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde88c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a7905bf875ea5e6a86afa84221b28805"></a>

### [`00bdd8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd8cc.md) → [`00bde8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde8c0.md) _ZN8firebase4auth8metadata19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bde8ec",
      "incomplete_value": true,
      "site": "00bde8ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8f8",
      "incomplete_value": true,
      "site": "00bdd8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f00:8"
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
      "definition_site": "00bde8d4",
      "incomplete_value": true,
      "site": "00bde8d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8e0",
      "incomplete_value": true,
      "site": "00bdd8e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bde8dc",
      "incomplete_value": false,
      "site": "00bde8e4",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd8e8",
      "incomplete_value": false,
      "site": "00bdd8f0",
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
      "00bde8d0",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde8dc",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bde8ec",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde8d0",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde8dc",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bde8ec",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd8f0 ["INT_ADD", "register:40f0:8", ["const:bdd8f0:8", "const:4:8"]]
- 00bdd8f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde8e4 ["INT_ADD", "register:40f0:8", ["const:bde8e4:8", "const:4:8"]]
+ 00bde8e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd8f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
- 00bdd8f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde8ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ec0:8"]]
+ 00bde8ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd8d8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde8cc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3637aad8449c27098b40e4d22ee5d0b4"></a>

### [`00bdd90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd90c.md) → [`00bde900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde900.md) _ZN8firebase4auth8metadata10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bde930",
      "incomplete_value": true,
      "site": "00bde930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd93c",
      "incomplete_value": true,
      "site": "00bdd93c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f00:8"
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
      "definition_site": "00bde914",
      "incomplete_value": true,
      "site": "00bde914",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd920",
      "incomplete_value": true,
      "site": "00bdd920",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bde920",
      "incomplete_value": false,
      "site": "00bde928",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd92c",
      "incomplete_value": false,
      "site": "00bdd934",
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
      "00bde910",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde920",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bde930",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde910",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde920",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bde930",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd934 ["INT_ADD", "register:40f0:8", ["const:bdd934:8", "const:4:8"]]
- 00bdd934 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde928 ["INT_ADD", "register:40f0:8", ["const:bde928:8", "const:4:8"]]
+ 00bde928 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd93c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
- 00bdd93c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde930 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ec0:8"]]
+ 00bde930 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd918 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde90c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0e96e9cfa03ebe71d608b1b41cf602b0"></a>

### [`00bdd950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd950.md) → [`00bde944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde944.md) _ZN8firebase4auth8metadata10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde974",
      "incomplete_value": true,
      "site": "00bde974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd980",
      "incomplete_value": true,
      "site": "00bdd980",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f00:8"
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
      "definition_site": "00bde958",
      "incomplete_value": true,
      "site": "00bde958",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd964",
      "incomplete_value": true,
      "site": "00bdd964",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bde960",
      "incomplete_value": false,
      "site": "00bde96c",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd96c",
      "incomplete_value": false,
      "site": "00bdd978",
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
      "00bde954",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde960",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bde974",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde954",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde960",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bde974",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd978 ["INT_ADD", "register:40f0:8", ["const:bdd978:8", "const:4:8"]]
- 00bdd978 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde96c ["INT_ADD", "register:40f0:8", ["const:bde96c:8", "const:4:8"]]
+ 00bde96c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd980 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
- 00bdd980 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde974 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ec0:8"]]
+ 00bde974 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd95c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde950 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-09654627e0e0863fd12eb15fc112e7e3"></a>

### [`00bdd9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd9a0.md) → [`00bde994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde994.md) _ZN8firebase4auth8metadata15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bde9ec",
      "incomplete_value": true,
      "site": "00bde9ec",
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
            "const:ec8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd9f8",
      "incomplete_value": true,
      "site": "00bdd9f8",
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
            "const:f08:8"
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
      "00bde9a8",
      "READ",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde9c8",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde9ec",
      "WRITE",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bde9a8",
      "READ",
      [
        "storage",
        "01127ec8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde9c8",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde9ec",
      "WRITE",
      [
        "storage",
        "01127ec8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd9f8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd9f8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:f08:8"]]
- 00bdd9f8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bde9ec ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bde9ec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ec8:8"]]
+ 00bde9ec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdd9b0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bde9a4 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bdd9b4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:f08:8"]]
- 00bdd9b4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdd9b4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bde9a8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ec8:8"]]
+ 00bde9a8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bde9a8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-1eb13c5f1aebaa5470c309419f5a281d"></a>

### [`00bdda0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdda0c.md) → [`00bdea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdea00.md) _ZN8firebase4auth8metadata12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bdea3c",
      "incomplete_value": true,
      "site": "00bdea3c",
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
            "const:ec8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdda48",
      "incomplete_value": true,
      "site": "00bdda48",
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
            "const:f08:8"
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
      "definition_site": "00bdea5c",
      "incomplete_value": true,
      "site": "00bdea5c",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdda68",
      "incomplete_value": true,
      "site": "00bdda68",
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
            "const:f00:8"
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
      "definition_site": "00bdea18",
      "incomplete_value": true,
      "site": "00bdea18",
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
      "definition_site": "00bdda24",
      "incomplete_value": true,
      "site": "00bdda24",
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
      "00bdea14",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdea20",
      "READ",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdea3c",
      "WRITE",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bdea14",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdea20",
      "READ",
      [
        "storage",
        "01127ec8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdea3c",
      "WRITE",
      [
        "storage",
        "01127ec8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdda48 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdda48 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdda48 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:f08:8"]]
- 00bdda48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdea3c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdea3c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdea3c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ec8:8"]]
+ 00bdea3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdda64 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdda64 ["INT_ADD", "register:40f0:8", ["const:bdda64:8", "const:4:8"]]
- 00bdda64 ["CALLIND", null, ["register:0:8"]]
+ 00bdea58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdea58 ["INT_ADD", "register:40f0:8", ["const:bdea58:8", "const:4:8"]]
+ 00bdea58 ["CALLIND", null, ["register:0:8"]]
- 00bdda68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
- 00bdda68 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdda68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdea5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ec0:8"]]
+ 00bdea5c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdea5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-c29733d81f2e0bc1931d60a22d26da12"></a>

### [`00bdda7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdda7c.md) → [`00bdea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdea70.md) _ZN8firebase4auth8metadata14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bdeab0",
      "incomplete_value": true,
      "site": "00bdeab0",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddabc",
      "incomplete_value": true,
      "site": "00bddabc",
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
            "const:f00:8"
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
      "definition_site": "00bdea8c",
      "incomplete_value": true,
      "site": "00bdea8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdda98",
      "incomplete_value": true,
      "site": "00bdda98",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdea94",
      "incomplete_value": false,
      "site": "00bdeaa8",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddaa0",
      "incomplete_value": false,
      "site": "00bddab4",
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
      "00bdea84",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdea94",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bdeab0",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdea84",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdea94",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bdeab0",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddab4 ["INT_ADD", "register:40f0:8", ["const:bddab4:8", "const:4:8"]]
- 00bddab4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdeaa8 ["INT_ADD", "register:40f0:8", ["const:bdeaa8:8", "const:4:8"]]
+ 00bdeaa8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddabc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
- 00bddabc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdeab0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ec0:8"]]
+ 00bdeab0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdda88 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bdea7c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-4f7d2190852b5db850f572e82b1bb594"></a>

### [`00bddaec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddaec.md) → [`00bdeae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdeae0.md) _ZN8firebase4auth8metadata11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bdeafc",
      "incomplete_value": false,
      "site": "00bdeb00",
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
      "definition_site": "00bddb08",
      "incomplete_value": false,
      "site": "00bddb0c",
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
      "definition_site": "00bdeb0c",
      "incomplete_value": true,
      "site": "00bdeb18",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bddb18",
      "incomplete_value": true,
      "site": "00bddb24",
      "value": [
        "LOAD",
        "8",
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
      "00bdeafc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdeb0c",
      "DATA",
      [
        "storage",
        "01126f10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdeafc",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bdeb0c",
      "DATA",
      [
        "storage",
        "01127ed0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddb0c ["INT_ADD", "register:40f0:8", ["const:bddb0c:8", "const:4:8"]]
- 00bddb0c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdeb00 ["INT_ADD", "register:40f0:8", ["const:bdeb00:8", "const:4:8"]]
+ 00bdeb00 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bddb08 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bddb08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bddb08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bddb08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdeafc ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bdeafc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeafc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeafc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bddb10 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bdeb04 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-eaad0acaa75d330f2e35467696910217"></a>

### [`00bddb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddb28.md) → [`00bdeb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdeb1c.md) _ZN8firebase4auth8metadata13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bdeb5c",
      "incomplete_value": true,
      "site": "00bdeb5c",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddb68",
      "incomplete_value": true,
      "site": "00bddb68",
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
            "const:f00:8"
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
      "definition_site": "00bdeb38",
      "incomplete_value": true,
      "site": "00bdeb38",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddb44",
      "incomplete_value": true,
      "site": "00bddb44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdeb40",
      "incomplete_value": false,
      "site": "00bdeb54",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddb4c",
      "incomplete_value": false,
      "site": "00bddb60",
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
      "00bdeb30",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeb40",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bdeb5c",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdeb30",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeb40",
      "PARAM",
      [
        "storage",
        "002bea37",
        null,
        "string"
      ]
    ],
    [
      "00bdeb5c",
      "WRITE",
      [
        "storage",
        "01127ec0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddb60 ["INT_ADD", "register:40f0:8", ["const:bddb60:8", "const:4:8"]]
- 00bddb60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdeb54 ["INT_ADD", "register:40f0:8", ["const:bdeb54:8", "const:4:8"]]
+ 00bdeb54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddb68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
- 00bddb68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdeb5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ec0:8"]]
+ 00bdeb5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddb34 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bdeb28 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-25e437d0dfe9f5309be016611a1d5c8d"></a>

### [`00bddb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddb98.md) → [`00bdeb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdeb8c.md) _ZN8firebase4auth8metadata10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bdeba8",
      "incomplete_value": false,
      "site": "00bdebac",
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
      "definition_site": "00bddbb4",
      "incomplete_value": false,
      "site": "00bddbb8",
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
      "definition_site": "00bdebb8",
      "incomplete_value": true,
      "site": "00bdebc4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bddbc4",
      "incomplete_value": true,
      "site": "00bddbd0",
      "value": [
        "LOAD",
        "8",
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
      "00bdeba8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bdebb8",
      "DATA",
      [
        "storage",
        "01126f20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdeba8",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bdebb8",
      "DATA",
      [
        "storage",
        "01127ee0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddbb8 ["INT_ADD", "register:40f0:8", ["const:bddbb8:8", "const:4:8"]]
- 00bddbb8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdebac ["INT_ADD", "register:40f0:8", ["const:bdebac:8", "const:4:8"]]
+ 00bdebac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bddbb4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bddbb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bddbb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bddbb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdeba8 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bdeba8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeba8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeba8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bddbbc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bdebb0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-35a5ca1d7cef5bf5e43e2f9cfc0097b9"></a>

### [`00bddbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddbd4.md) → [`00bdebc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdebc8.md) _ZN8firebase4auth18userprofilebuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00bdebf4",
      "incomplete_value": true,
      "site": "00bdebf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc00",
      "incomplete_value": true,
      "site": "00bddc00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "00bdebdc",
      "incomplete_value": true,
      "site": "00bdebdc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddbe8",
      "incomplete_value": true,
      "site": "00bddbe8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdebe8",
      "incomplete_value": false,
      "site": "00bdebec",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddbf4",
      "incomplete_value": false,
      "site": "00bddbf8",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdebd8",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdebe8",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdebf4",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdebd8",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdebe8",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdebf4",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddbf8 ["INT_ADD", "register:40f0:8", ["const:bddbf8:8", "const:4:8"]]
- 00bddbf8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdebec ["INT_ADD", "register:40f0:8", ["const:bdebec:8", "const:4:8"]]
+ 00bdebec ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddc00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
- 00bddc00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdebf4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ee8:8"]]
+ 00bdebf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddbe0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bdebd4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a68ef869f45a283e0fedc2bea48c3e24"></a>

### [`00bddc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc14.md) → [`00bdec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdec08.md) _ZN8firebase4auth18userprofilebuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00bdec34",
      "incomplete_value": true,
      "site": "00bdec34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc40",
      "incomplete_value": true,
      "site": "00bddc40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "00bdec1c",
      "incomplete_value": true,
      "site": "00bdec1c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc28",
      "incomplete_value": true,
      "site": "00bddc28",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdec24",
      "incomplete_value": false,
      "site": "00bdec2c",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc30",
      "incomplete_value": false,
      "site": "00bddc38",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdec18",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdec24",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdec34",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdec18",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdec24",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdec34",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddc38 ["INT_ADD", "register:40f0:8", ["const:bddc38:8", "const:4:8"]]
- 00bddc38 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdec2c ["INT_ADD", "register:40f0:8", ["const:bdec2c:8", "const:4:8"]]
+ 00bdec2c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddc40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
- 00bddc40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdec34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ee8:8"]]
+ 00bdec34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddc20 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bdec14 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a0a18daec6b1dc34a107efd615eed603"></a>

### [`00bddc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc54.md) → [`00bdec48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdec48.md) _ZN8firebase4auth18userprofilebuilder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bdec78",
      "incomplete_value": true,
      "site": "00bdec78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc84",
      "incomplete_value": true,
      "site": "00bddc84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "00bdec5c",
      "incomplete_value": true,
      "site": "00bdec5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc68",
      "incomplete_value": true,
      "site": "00bddc68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdec68",
      "incomplete_value": false,
      "site": "00bdec70",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddc74",
      "incomplete_value": false,
      "site": "00bddc7c",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdec58",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdec68",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdec78",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdec58",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdec68",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdec78",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddc7c ["INT_ADD", "register:40f0:8", ["const:bddc7c:8", "const:4:8"]]
- 00bddc7c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdec70 ["INT_ADD", "register:40f0:8", ["const:bdec70:8", "const:4:8"]]
+ 00bdec70 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddc84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
- 00bddc84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdec78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ee8:8"]]
+ 00bdec78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddc60 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bdec54 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-9c6c18c19395bff6dd3ffa341e4344a1"></a>

### [`00bddc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc98.md) → [`00bdec8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdec8c.md) _ZN8firebase4auth18userprofilebuilder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bdecbc",
      "incomplete_value": true,
      "site": "00bdecbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddcc8",
      "incomplete_value": true,
      "site": "00bddcc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "00bdeca0",
      "incomplete_value": true,
      "site": "00bdeca0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddcac",
      "incomplete_value": true,
      "site": "00bddcac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdeca8",
      "incomplete_value": false,
      "site": "00bdecb4",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddcb4",
      "incomplete_value": false,
      "site": "00bddcc0",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdec9c",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeca8",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdecbc",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdec9c",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeca8",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdecbc",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddcc0 ["INT_ADD", "register:40f0:8", ["const:bddcc0:8", "const:4:8"]]
- 00bddcc0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdecb4 ["INT_ADD", "register:40f0:8", ["const:bdecb4:8", "const:4:8"]]
+ 00bdecb4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddcc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
- 00bddcc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdecbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ee8:8"]]
+ 00bdecbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddca4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bdec98 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e1c298f82c8d9d45ef8d47f07bfa84b5"></a>

### [`00bddce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddce8.md) → [`00bdecdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdecdc.md) _ZN8firebase4auth18userprofilebuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bded34",
      "incomplete_value": true,
      "site": "00bded34",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddd40",
      "incomplete_value": true,
      "site": "00bddd40",
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
            "const:f30:8"
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
      "definition_site": "00bded10",
      "incomplete_value": true,
      "site": "00bded1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ee8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddd1c",
      "incomplete_value": true,
      "site": "00bddd28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f28:8"
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
      "00bdecf0",
      "READ",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bded10",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bded34",
      "WRITE",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bdecf0",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bded10",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bded34",
      "WRITE",
      [
        "storage",
        "01127ef0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddd28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bddd28 ["INT_ADD", "register:40f0:8", ["const:bddd28:8", "const:4:8"]]
- 00bddd28 ["CALLIND", null, ["register:0:8"]]
+ 00bded1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bded1c ["INT_ADD", "register:40f0:8", ["const:bded1c:8", "const:4:8"]]
+ 00bded1c ["CALLIND", null, ["register:0:8"]]
- 00bddd40 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bddd40 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:f30:8"]]
- 00bddd40 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bded34 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bded34 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ef0:8"]]
+ 00bded34 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bddcf8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bdecec ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-cd21f27595b64345cdae6a83e7e1305d"></a>

### [`00bddd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddd54.md) → [`00bded48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bded48.md) _ZN8firebase4auth18userprofilebuilder12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bded84",
      "incomplete_value": true,
      "site": "00bded84",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddd90",
      "incomplete_value": true,
      "site": "00bddd90",
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
            "const:f30:8"
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
      "definition_site": "00bdeda4",
      "incomplete_value": true,
      "site": "00bdeda4",
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
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdddb0",
      "incomplete_value": true,
      "site": "00bdddb0",
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
            "const:f28:8"
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
      "definition_site": "00bded60",
      "incomplete_value": true,
      "site": "00bded60",
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
      "definition_site": "00bddd6c",
      "incomplete_value": true,
      "site": "00bddd6c",
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
      "00bded5c",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bded68",
      "READ",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bded84",
      "WRITE",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bded5c",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bded68",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bded84",
      "WRITE",
      [
        "storage",
        "01127ef0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddd90 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bddd90 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bddd90 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:f30:8"]]
- 00bddd90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bded84 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bded84 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bded84 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ef0:8"]]
+ 00bded84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdddac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdddac ["INT_ADD", "register:40f0:8", ["const:bdddac:8", "const:4:8"]]
- 00bdddac ["CALLIND", null, ["register:0:8"]]
+ 00bdeda0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdeda0 ["INT_ADD", "register:40f0:8", ["const:bdeda0:8", "const:4:8"]]
+ 00bdeda0 ["CALLIND", null, ["register:0:8"]]
- 00bdddb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
- 00bdddb0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdddb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdeda4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ee8:8"]]
+ 00bdeda4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdeda4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-b9af46344420b71a5bf8188f4c8b4383"></a>

### [`00bdddc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdddc4.md) → [`00bdedb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdedb8.md) _ZN8firebase4auth18userprofilebuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bdedf8",
      "incomplete_value": true,
      "site": "00bdedf8",
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
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdde04",
      "incomplete_value": true,
      "site": "00bdde04",
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
            "const:f28:8"
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
      "definition_site": "00bdedd4",
      "incomplete_value": true,
      "site": "00bdedd4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddde0",
      "incomplete_value": true,
      "site": "00bddde0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdeddc",
      "incomplete_value": false,
      "site": "00bdedf0",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddde8",
      "incomplete_value": false,
      "site": "00bdddfc",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdedcc",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeddc",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdedf8",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdedcc",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdeddc",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdedf8",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdddfc ["INT_ADD", "register:40f0:8", ["const:bdddfc:8", "const:4:8"]]
- 00bdddfc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdedf0 ["INT_ADD", "register:40f0:8", ["const:bdedf0:8", "const:4:8"]]
+ 00bdedf0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdde04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
- 00bdde04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdedf8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ee8:8"]]
+ 00bdedf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdddd0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bdedc4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-ff123ea9c0a70116681843ab0fb6448c"></a>

### [`00bdde34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdde34.md) → [`00bdee28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdee28.md) _ZN8firebase4auth18userprofilebuilder11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bdee44",
      "incomplete_value": false,
      "site": "00bdee48",
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
      "definition_site": "00bdde50",
      "incomplete_value": false,
      "site": "00bdde54",
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
      "definition_site": "00bdee54",
      "incomplete_value": true,
      "site": "00bdee60",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdde60",
      "incomplete_value": true,
      "site": "00bdde6c",
      "value": [
        "LOAD",
        "8",
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
      "00bdee44",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdee54",
      "DATA",
      [
        "storage",
        "01126f38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdee44",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bdee54",
      "DATA",
      [
        "storage",
        "01127ef8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdde54 ["INT_ADD", "register:40f0:8", ["const:bdde54:8", "const:4:8"]]
- 00bdde54 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdee48 ["INT_ADD", "register:40f0:8", ["const:bdee48:8", "const:4:8"]]
+ 00bdee48 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdde50 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bdde50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdde50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdde50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdee44 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bdee44 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdee44 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdee44 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdde58 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bdee4c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-aff6e94105afb2145030fa6d9fb74e5b"></a>

### [`00bdde70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdde70.md) → [`00bdee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdee64.md) _ZN8firebase4auth18userprofilebuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bdeea4",
      "incomplete_value": true,
      "site": "00bdeea4",
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
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddeb0",
      "incomplete_value": true,
      "site": "00bddeb0",
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
            "const:f28:8"
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
      "definition_site": "00bdee80",
      "incomplete_value": true,
      "site": "00bdee80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdde8c",
      "incomplete_value": true,
      "site": "00bdde8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "definition_site": "00bdee88",
      "incomplete_value": false,
      "site": "00bdee9c",
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
            "const:4f9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdde94",
      "incomplete_value": false,
      "site": "00bddea8",
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
            "const:42c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdee78",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdee88",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdeea4",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdee78",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdee88",
      "PARAM",
      [
        "storage",
        "002ad4f9",
        null,
        "string"
      ]
    ],
    [
      "00bdeea4",
      "WRITE",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddea8 ["INT_ADD", "register:40f0:8", ["const:bddea8:8", "const:4:8"]]
- 00bddea8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdee9c ["INT_ADD", "register:40f0:8", ["const:bdee9c:8", "const:4:8"]]
+ 00bdee9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddeb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
- 00bddeb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdeea4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ee8:8"]]
+ 00bdeea4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdde7c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bdee70 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-aec6d6ec59a2512a4fb01e8989307c17"></a>

### [`00bddee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddee0.md) → [`00bdeed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdeed4.md) _ZN8firebase4auth18userprofilebuilder10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bdeef0",
      "incomplete_value": false,
      "site": "00bdeef4",
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
      "definition_site": "00bddefc",
      "incomplete_value": false,
      "site": "00bddf00",
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
      "definition_site": "00bdef00",
      "incomplete_value": true,
      "site": "00bdef0c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bddf0c",
      "incomplete_value": true,
      "site": "00bddf18",
      "value": [
        "LOAD",
        "8",
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
      "00bdeef0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bdef00",
      "DATA",
      [
        "storage",
        "01126f58",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdeef0",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bdef00",
      "DATA",
      [
        "storage",
        "01127f18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddf00 ["INT_ADD", "register:40f0:8", ["const:bddf00:8", "const:4:8"]]
- 00bddf00 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdeef4 ["INT_ADD", "register:40f0:8", ["const:bdeef4:8", "const:4:8"]]
+ 00bdeef4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bddefc ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bddefc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bddefc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bddefc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdeef0 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bdeef0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeef0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdeef0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bddf04 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bdeef8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-81b8c594ec11562e0c521e3d151b3e67"></a>

### [`00bddf1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddf1c.md) → [`00bdef10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bdef10.md) _ZN8firebase4auth18CacheUserMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd20.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5ecf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecf0.md) · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 78.05% / 新版 78.05%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 17件, `store_condition` 1件, `store_destination` 5件

アドレスに依存する影響 `branch_value` 4件, `store_condition` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bdef54",
      "incomplete_value": true,
      "site": "00bdef54",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddf60",
      "incomplete_value": true,
      "site": "00bddf60",
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
            "const:e00:8"
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
      "definition_site": "00bdefac",
      "incomplete_value": true,
      "site": "00bdefac",
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
            "const:de0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bddfb8",
      "incomplete_value": true,
      "site": "00bddfb8",
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00bdf004",
      "incomplete_value": true,
      "site": "00bdf004",
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
      "definition_site": "00bde010",
      "incomplete_value": true,
      "site": "00bde010",
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
            "const:eb0:8"
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
      "00bdef28",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdef38",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdef54",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdef28",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdef38",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bdef54",
      "WRITE",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddf58 ["INT_ADD", "register:40f0:8", ["const:bddf58:8", "const:4:8"]]
- 00bddf58 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bdef4c ["INT_ADD", "register:40f0:8", ["const:bdef4c:8", "const:4:8"]]
+ 00bdef4c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bddf60 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e00:8"]]
- 00bddf60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdef54 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:dc0:8"]]
+ 00bdef54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddf84 ["INT_ADD", "register:40f0:8", ["const:bddf84:8", "const:4:8"]]
- 00bddf84 ["CALL", null, ["callee:00c5bfd0:8"]]
+ 00bdef78 ["INT_ADD", "register:40f0:8", ["const:bdef78:8", "const:4:8"]]
+ 00bdef78 ["CALL", null, ["callee:00c5bfd0:8"]]
~~~


<a id="compare-af84ab670b729cf297d45e6c5dafcbf0"></a>

### [`00bde108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde108.md) → [`00bdf0fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdf0fc.md) _ZN8firebase4auth18ReleaseUserClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd40.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ed10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed10.md) · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.58% / 新版 85.58%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 10件

アドレスに依存する影響 `branch_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bdf138",
      "incomplete_value": true,
      "site": "00bdf138",
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
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bde144",
      "incomplete_value": true,
      "site": "00bde144",
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
            "const:e08:8"
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
      "definition_site": "00bdf158",
      "incomplete_value": true,
      "site": "00bdf158",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bde164",
      "incomplete_value": true,
      "site": "00bde164",
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
            "const:e00:8"
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
      "definition_site": "00bdf184",
      "incomplete_value": true,
      "site": "00bdf184",
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
      "definition_site": "00bde190",
      "incomplete_value": true,
      "site": "00bde190",
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
      "00bdf110",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdf120",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdf138",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bdf110",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdf120",
      "READ",
      [
        "storage",
        "01127dc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdf138",
      "WRITE",
      [
        "storage",
        "01127dc8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bde144 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bde144 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bde144 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e08:8"]]
- 00bde144 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdf138 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdf138 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdf138 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:dc8:8"]]
+ 00bdf138 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bde160 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bde160 ["INT_ADD", "register:40f0:8", ["const:bde160:8", "const:4:8"]]
- 00bde160 ["CALLIND", null, ["register:0:8"]]
+ 00bdf154 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdf154 ["INT_ADD", "register:40f0:8", ["const:bdf154:8", "const:4:8"]]
+ 00bdf154 ["CALLIND", null, ["register:0:8"]]
- 00bde164 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bde164 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bde164 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdf158 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00bdf158 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdf158 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-abd2c6f9f3ee38a3fec5c3b0b0915d76"></a>

### [`00bde740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde740.md) → [`00bdf734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdf734.md) _ZN8firebase4auth15ReadTokenResultEP8_jobjectPNS0_18FutureCallbackDataINSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00bdf8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdf8a8.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf7b8",
      "incomplete_value": false,
      "site": "00bdf7bc",
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
            "const:ffe:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bde7c4",
      "incomplete_value": false,
      "site": "00bde7c8",
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
            "const:f2f:8"
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
      "definition_site": "00bdf7c4",
      "incomplete_value": true,
      "site": "00bdf7d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bde7d0",
      "incomplete_value": true,
      "site": "00bde7dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e10:8"
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
      "00bdf7b8",
      "PARAM",
      [
        "storage",
        "002b6f2f",
        null,
        "string"
      ]
    ],
    [
      "00bdf7c4",
      "READ",
      [
        "storage",
        "01126e10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdf7b8",
      "PARAM",
      [
        "storage",
        "002b6ffe",
        null,
        "string"
      ]
    ],
    [
      "00bdf7c4",
      "READ",
      [
        "storage",
        "01127dd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bde7c8 ["INT_ADD", "register:40f0:8", ["const:bde7c8:8", "const:4:8"]]
- 00bde7c8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdf7bc ["INT_ADD", "register:40f0:8", ["const:bdf7bc:8", "const:4:8"]]
+ 00bdf7bc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bde7dc ["INT_ADD", "register:40f0:8", ["const:bde7dc:8", "const:4:8"]]
- 00bde7dc ["CALL", null, ["callee:00497b94:8"]]
+ 00bdf7d0 ["INT_ADD", "register:40f0:8", ["const:bdf7d0:8", "const:4:8"]]
+ 00bdf7d0 ["CALL", null, ["callee:00497b94:8"]]
- 00bde784 ["INT_ADD", "register:40f0:8", ["const:bde784:8", "const:4:8"]]
- 00bde784 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bdf778 ["INT_ADD", "register:40f0:8", ["const:bdf778:8", "const:4:8"]]
+ 00bdf778 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-f214658bbb2c92e2b38b2e5228697c05"></a>

### [`00bdec18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bdec18.md) → [`00bdfc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdfc0c.md) _ZNK8firebase4auth4User13provider_dataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab80.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5bb50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb50.md) · 呼出先 14件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.98% / 新版 98.98%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be01a8",
      "incomplete_value": true,
      "site": "00be01ac",
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
      "definition_site": "00bdf1b4",
      "incomplete_value": true,
      "site": "00bdf1b8",
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
    "ordinal": 102,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdfc6c",
      "incomplete_value": true,
      "site": "00bdfc7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdec78",
      "incomplete_value": true,
      "site": "00bdec88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e40:8"
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
      "definition_site": "00bdfe58",
      "incomplete_value": true,
      "site": "00bdfe64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ea8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdee64",
      "incomplete_value": true,
      "site": "00bdee70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ee8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdfc6c",
      "READ",
      [
        "storage",
        "01126e40",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdfcbc",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bdfcc4",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bdfc6c",
      "READ",
      [
        "storage",
        "01127e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdfcbc",
      "READ",
      [
        "storage",
        "00c9cb00",
        null,
        "pointer"
      ]
    ],
    [
      "00bdfcc4",
      "READ",
      [
        "storage",
        "00c9ca68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdec88 ["INT_ADD", "register:40f0:8", ["const:bdec88:8", "const:4:8"]]
- 00bdec88 ["CALL", null, ["callee:00497b94:8"]]
+ 00bdfc7c ["INT_ADD", "register:40f0:8", ["const:bdfc7c:8", "const:4:8"]]
+ 00bdfc7c ["CALL", null, ["callee:00497b94:8"]]
- 00bdee70 ["INT_ADD", "register:40f0:8", ["const:bdee70:8", "const:4:8"]]
- 00bdee70 ["CALL", null, ["callee:00497b94:8"]]
+ 00bdfe64 ["INT_ADD", "register:40f0:8", ["const:bdfe64:8", "const:4:8"]]
+ 00bdfe64 ["CALL", null, ["callee:00497b94:8"]]
- 00bdef14 ["INT_ADD", "register:40f0:8", ["const:bdef14:8", "const:4:8"]]
- 00bdef14 ["CALL", null, ["callee:00497b94:8"]]
+ 00bdff08 ["INT_ADD", "register:40f0:8", ["const:bdff08:8", "const:4:8"]]
+ 00bdff08 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-42d1d890230fbfee5adbca461b004818"></a>

### [`00bdf324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf324.md) → [`00be0318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be0318.md) _ZNSt6__ndk16vectorIN8firebase4auth17UserInfoInterfaceENS_9allocatorIS3_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfa0.md) · 呼出先 4件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5df70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df70.md)
- 新版 呼出元 1件 [`00c5ef70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef70.md) · 呼出先 4件 [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.57% / 新版 98.57%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be0428",
      "incomplete_value": false,
      "site": "00be042c",
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
            "const:777:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf434",
      "incomplete_value": false,
      "site": "00bdf438",
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
      "00be0428",
      "PARAM",
      [
        "storage",
        "002a861f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be0428",
      "PARAM",
      [
        "storage",
        "002a8777",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf438 ["INT_ADD", "register:40f0:8", ["const:bdf438:8", "const:4:8"]]
- 00bdf438 ["CALL", null, ["callee:00b41350:8"]]
+ 00be042c ["INT_ADD", "register:40f0:8", ["const:be042c:8", "const:4:8"]]
+ 00be042c ["CALL", null, ["callee:00b41350:8"]]
- 00bdf394 ["INT_ADD", "register:40f0:8", ["const:bdf394:8", "const:4:8"]]
- 00bdf394 ["CALL", null, ["callee:00c58f30:8"]]
+ 00be0388 ["INT_ADD", "register:40f0:8", ["const:be0388:8", "const:4:8"]]
+ 00be0388 ["CALL", null, ["callee:00c58f30:8"]]
- 00bdf3b8 ["INT_ADD", "register:40f0:8", ["const:bdf3b8:8", "const:4:8"]]
- 00bdf3b8 ["CALL", null, ["callee:00c5ef40:8"]]
+ 00be03ac ["INT_ADD", "register:40f0:8", ["const:be03ac:8", "const:4:8"]]
+ 00be03ac ["CALL", null, ["callee:00c5ef40:8"]]
~~~


<a id="compare-09e0b799a37af5057f66bf9d45024535"></a>

### [`00bdf578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf578.md) → [`00be056c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be056c.md) _ZNK8firebase4auth22AndroidWrappedUserInfo12display_nameEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be0598",
      "incomplete_value": true,
      "site": "00be05a4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf5a4",
      "incomplete_value": true,
      "site": "00bdf5b0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ed0:8"
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
      "00be0598",
      "READ",
      [
        "storage",
        "01126ed0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00be0598",
      "READ",
      [
        "storage",
        "01127e90",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf5b0 ["INT_ADD", "register:40f0:8", ["const:bdf5b0:8", "const:4:8"]]
- 00bdf5b0 ["CALL", null, ["callee:00497b94:8"]]
+ 00be05a4 ["INT_ADD", "register:40f0:8", ["const:be05a4:8", "const:4:8"]]
+ 00be05a4 ["CALL", null, ["callee:00497b94:8"]]
- 00bdf594 ["INT_ADD", "register:40f0:8", ["const:bdf594:8", "const:4:8"]]
- 00bdf594 ["CALL", null, ["callee:00c5c120:8"]]
+ 00be0588 ["INT_ADD", "register:40f0:8", ["const:be0588:8", "const:4:8"]]
+ 00be0588 ["CALL", null, ["callee:00c5c120:8"]]
- 00bdf5a0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00be0594 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-633f29d6f7bcd9cfe2610f5ee3181bde"></a>

### [`00bdf5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf5fc.md) → [`00be05f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be05f0.md) _ZNK8firebase4auth22AndroidWrappedUserInfo9photo_urlEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c390.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be061c",
      "incomplete_value": true,
      "site": "00be0628",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ea0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf628",
      "incomplete_value": true,
      "site": "00bdf634",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ee0:8"
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
      "00be061c",
      "READ",
      [
        "storage",
        "01126ee0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00be061c",
      "READ",
      [
        "storage",
        "01127ea0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf634 ["INT_ADD", "register:40f0:8", ["const:bdf634:8", "const:4:8"]]
- 00bdf634 ["CALL", null, ["callee:00497b94:8"]]
+ 00be0628 ["INT_ADD", "register:40f0:8", ["const:be0628:8", "const:4:8"]]
+ 00be0628 ["CALL", null, ["callee:00497b94:8"]]
- 00bdf618 ["INT_ADD", "register:40f0:8", ["const:bdf618:8", "const:4:8"]]
- 00bdf618 ["CALL", null, ["callee:00c5c120:8"]]
+ 00be060c ["INT_ADD", "register:40f0:8", ["const:be060c:8", "const:4:8"]]
+ 00be060c ["CALL", null, ["callee:00c5c120:8"]]
- 00bdf624 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00be0618 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-1e52e9afb8201636fa7458a2a31c834a"></a>

### [`00bdf788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf788.md) → [`00be077c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be077c.md) _ZN8firebase4auth22AndroidWrappedUserInfoD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5ec20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be0798",
      "incomplete_value": true,
      "site": "00be079c",
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
      "definition_site": "00bdf7a4",
      "incomplete_value": true,
      "site": "00bdf7a8",
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
      "00be0790",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00be079c",
      "DATA",
      [
        "storage",
        "00c929e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00be0790",
      "READ",
      [
        "storage",
        "00c9cb00",
        null,
        "pointer"
      ]
    ],
    [
      "00be079c",
      "DATA",
      [
        "storage",
        "00c939b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf794 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00be0788 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00bdf79c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b30:8"]]
- 00bdf79c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00be0790 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b00:8"]]
+ 00be0790 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdf7b0 ["INT_ADD", "register:40f0:8", ["const:bdf7b0:8", "const:4:8"]]
- 00bdf7b0 ["CALL", null, ["callee:00c5c120:8"]]
+ 00be07a4 ["INT_ADD", "register:40f0:8", ["const:be07a4:8", "const:4:8"]]
+ 00be07a4 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-fa5d166a6aad9ec06e176ee6bbb2f020"></a>

### [`00bdfa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdfa14.md) → [`00be0a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be0/00be0a08.md) _ZN8firebase4auth4User17UpdateUserProfileERKNS1_11UserProfileE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bd1550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1550.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be0a98",
      "incomplete_value": true,
      "site": "00be0aa8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ef8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdfaa4",
      "incomplete_value": true,
      "site": "00bdfab4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:f38:8"
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
      "definition_site": "00be0d50",
      "incomplete_value": true,
      "site": "00be0d60",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:ab8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdfd5c",
      "incomplete_value": true,
      "site": "00bdfd6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ae8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00be0a94",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00be0a98",
      "READ",
      [
        "storage",
        "01126f38",
        null,
        "undefined8"
      ]
    ],
    [
      "00be0acc",
      "READ",
      [
        "storage",
        "01126f40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00be0a94",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00be0a98",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined8"
      ]
    ],
    [
      "00be0acc",
      "READ",
      [
        "storage",
        "01127f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdfab4 ["INT_ADD", "register:40f0:8", ["const:bdfab4:8", "const:4:8"]]
- 00bdfab4 ["CALL", null, ["callee:00589a54:8"]]
+ 00be0aa8 ["INT_ADD", "register:40f0:8", ["const:be0aa8:8", "const:4:8"]]
+ 00be0aa8 ["CALL", null, ["callee:00589a54:8"]]
- 00bdfd6c ["INT_ADD", "register:40f0:8", ["const:bdfd6c:8", "const:4:8"]]
- 00bdfd6c ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00be0d60 ["INT_ADD", "register:40f0:8", ["const:be0d60:8", "const:4:8"]]
+ 00be0d60 ["CALL", null, ["callee:00c5bfe0:8"]]
- 00bdfa74 ["INT_ADD", "register:40f0:8", ["const:bdfa74:8", "const:4:8"]]
- 00bdfa74 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00be0a68 ["INT_ADD", "register:40f0:8", ["const:be0a68:8", "const:4:8"]]
+ 00be0a68 ["CALL", null, ["callee:00c5bee0:8"]]
~~~


<a id="compare-49475db1f6214776cf7f4078ff50f6ca"></a>

### [`00be0014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be0014.md) → [`00be1008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be1008.md) _ZNK8firebase4auth4User16LinkWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be1044",
      "incomplete_value": false,
      "site": "00be1048",
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
            "const:cd1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be0050",
      "incomplete_value": false,
      "site": "00be0054",
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
      "00be1044",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be1044",
      "PARAM",
      [
        "storage",
        "002b5cd1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be0054 ["INT_ADD", "register:40f0:8", ["const:be0054:8", "const:4:8"]]
- 00be0054 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00be1048 ["INT_ADD", "register:40f0:8", ["const:be1048:8", "const:4:8"]]
+ 00be1048 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00be0050 ["COPY", "tmp:0:8", ["const:c02:8"]]
- 00be0050 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00be0050 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00be0050 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00be1044 ["COPY", "tmp:0:8", ["const:cd1:8"]]
+ 00be1044 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00be1044 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00be1044 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00be0060 ["INT_ADD", "register:40f0:8", ["const:be0060:8", "const:4:8"]]
- 00be0060 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be1054 ["INT_ADD", "register:40f0:8", ["const:be1054:8", "const:4:8"]]
+ 00be1054 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-495583918c2c8748a3411120f5644fd7"></a>

### [`00be02a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be02a0.md) → [`00be1294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be1294.md) _ZN8firebase4auth4User27UpdatePhoneNumberCredentialERKNS0_19PhoneAuthCredentialE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd01a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd01a8.md) [`00bd4cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4cd8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bd119c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd119c.md) [`00bd5ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5ccc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be1390",
      "incomplete_value": true,
      "site": "00be1390",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
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
    "old": {
      "definition_site": "00be039c",
      "incomplete_value": true,
      "site": "00be039c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af8:8"
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
      "definition_site": "00be132c",
      "incomplete_value": true,
      "site": "00be133c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be0338",
      "incomplete_value": true,
      "site": "00be0348",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e70:8"
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
      "definition_site": "00be13dc",
      "incomplete_value": false,
      "site": "00be13f0",
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
            "const:903:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be03e8",
      "incomplete_value": false,
      "site": "00be03fc",
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
            "const:82c:8"
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
      "00be132c",
      "READ",
      [
        "storage",
        "01126e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00be138c",
      "READ",
      [
        "storage",
        "00c9baf8",
        null,
        "pointer"
      ]
    ],
    [
      "00be1390",
      "DATA",
      [
        "storage",
        "00bd4cd8",
        "firebase::auth::ReadUserFromAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00be132c",
      "READ",
      [
        "storage",
        "01127e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00be138c",
      "READ",
      [
        "storage",
        "00c9cac8",
        null,
        "pointer"
      ]
    ],
    [
      "00be1390",
      "DATA",
      [
        "storage",
        "00bd5ccc",
        "firebase::auth::ReadUserFromAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00be0348 ["INT_ADD", "register:40f0:8", ["const:be0348:8", "const:4:8"]]
- 00be0348 ["CALL", null, ["callee:00497b94:8"]]
+ 00be133c ["INT_ADD", "register:40f0:8", ["const:be133c:8", "const:4:8"]]
+ 00be133c ["CALL", null, ["callee:00497b94:8"]]
- 00be03fc ["INT_ADD", "register:40f0:8", ["const:be03fc:8", "const:4:8"]]
- 00be03fc ["CALL", null, ["callee:00c5ec80:8"]]
+ 00be13f0 ["INT_ADD", "register:40f0:8", ["const:be13f0:8", "const:4:8"]]
+ 00be13f0 ["CALL", null, ["callee:00c5ec80:8"]]
- 00be0424 ["INT_ADD", "register:40f0:8", ["const:be0424:8", "const:4:8"]]
- 00be0424 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00be1418 ["INT_ADD", "register:40f0:8", ["const:be1418:8", "const:4:8"]]
+ 00be1418 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-771ec16c61259959504484f63682cad1"></a>

### [`00be0aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be0aac.md) → [`00be1aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be1/00be1aa0.md) _ZNK8firebase4auth4User26ReauthenticateWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be1adc",
      "incomplete_value": false,
      "site": "00be1ae0",
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
            "const:cd1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be0ae8",
      "incomplete_value": false,
      "site": "00be0aec",
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
      "00be1adc",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be1adc",
      "PARAM",
      [
        "storage",
        "002b5cd1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be0aec ["INT_ADD", "register:40f0:8", ["const:be0aec:8", "const:4:8"]]
- 00be0aec ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00be1ae0 ["INT_ADD", "register:40f0:8", ["const:be1ae0:8", "const:4:8"]]
+ 00be1ae0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00be0ae8 ["COPY", "tmp:0:8", ["const:c02:8"]]
- 00be0ae8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00be0ae8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00be0ae8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00be1adc ["COPY", "tmp:0:8", ["const:cd1:8"]]
+ 00be1adc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00be1adc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00be1adc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00be0af8 ["INT_ADD", "register:40f0:8", ["const:be0af8:8", "const:4:8"]]
- 00be0af8 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00be1aec ["INT_ADD", "register:40f0:8", ["const:be1aec:8", "const:4:8"]]
+ 00be1aec ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-29ada1f9212044d0200c0f07db4fdff8"></a>

### [`00be1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1140.md) → [`00be2134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2134.md) _ZNK8firebase4auth4User8metadataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be2168",
      "incomplete_value": true,
      "site": "00be2174",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be1174",
      "incomplete_value": true,
      "site": "00be1180",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ea0:8"
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
      "definition_site": "00be2190",
      "incomplete_value": true,
      "site": "00be219c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be119c",
      "incomplete_value": true,
      "site": "00be11a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f10:8"
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
      "00be2168",
      "READ",
      [
        "storage",
        "01126ea0",
        null,
        "undefined8"
      ]
    ],
    [
      "00be2190",
      "READ",
      [
        "storage",
        "01126f10",
        null,
        "undefined8"
      ]
    ],
    [
      "00be21a0",
      "READ",
      [
        "storage",
        "01126f18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00be2168",
      "READ",
      [
        "storage",
        "01127e60",
        null,
        "undefined8"
      ]
    ],
    [
      "00be2190",
      "READ",
      [
        "storage",
        "01127ed0",
        null,
        "undefined8"
      ]
    ],
    [
      "00be21a0",
      "READ",
      [
        "storage",
        "01127ed8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be1180 ["INT_ADD", "register:40f0:8", ["const:be1180:8", "const:4:8"]]
- 00be1180 ["CALL", null, ["callee:00497b94:8"]]
+ 00be2174 ["INT_ADD", "register:40f0:8", ["const:be2174:8", "const:4:8"]]
+ 00be2174 ["CALL", null, ["callee:00497b94:8"]]
- 00be11a8 ["INT_ADD", "register:40f0:8", ["const:be11a8:8", "const:4:8"]]
- 00be11a8 ["CALL", null, ["callee:0058f8fc:8"]]
+ 00be219c ["INT_ADD", "register:40f0:8", ["const:be219c:8", "const:4:8"]]
+ 00be219c ["CALL", null, ["callee:0058f8fc:8"]]
- 00be1168 ["INT_ADD", "register:40f0:8", ["const:be1168:8", "const:4:8"]]
- 00be1168 ["CALL", null, ["callee:00c5c120:8"]]
+ 00be215c ["INT_ADD", "register:40f0:8", ["const:be215c:8", "const:4:8"]]
+ 00be215c ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-5da5f014e01da14b1a28f22c09965544"></a>

### [`00be12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be12cc.md) → [`00be22c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be22c0.md) _ZN8firebase4auth22AndroidWrappedUserInfoD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5ec20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be22dc",
      "incomplete_value": true,
      "site": "00be22e0",
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
      "definition_site": "00be12e8",
      "incomplete_value": true,
      "site": "00be12ec",
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
      "00be22d4",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00be22e0",
      "DATA",
      [
        "storage",
        "00c929e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00be22d4",
      "READ",
      [
        "storage",
        "00c9cb00",
        null,
        "pointer"
      ]
    ],
    [
      "00be22e0",
      "DATA",
      [
        "storage",
        "00c939b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be12d8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00be22cc ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00be12e0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b30:8"]]
- 00be12e0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00be22d4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b00:8"]]
+ 00be22d4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00be12f4 ["INT_ADD", "register:40f0:8", ["const:be12f4:8", "const:4:8"]]
- 00be12f4 ["CALL", null, ["callee:00c5c120:8"]]
+ 00be22e8 ["INT_ADD", "register:40f0:8", ["const:be22e8:8", "const:4:8"]]
+ 00be22e8 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-a869a6c83c2a87bbccd2480621e22c7f"></a>

### [`00be1348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1348.md) → [`00be233c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be233c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allo

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5df60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ef30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef30.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be23a0",
      "incomplete_value": false,
      "site": "00be23a4",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be13ac",
      "incomplete_value": false,
      "site": "00be13b0",
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
      "00be23a0",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be23a0",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be13b0 ["INT_ADD", "register:40f0:8", ["const:be13b0:8", "const:4:8"]]
- 00be13b0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00be23a4 ["INT_ADD", "register:40f0:8", ["const:be23a4:8", "const:4:8"]]
+ 00be23a4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00be1374 ["INT_ADD", "register:40f0:8", ["const:be1374:8", "const:4:8"]]
- 00be1374 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be2368 ["INT_ADD", "register:40f0:8", ["const:be2368:8", "const:4:8"]]
+ 00be2368 ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1380 ["INT_ADD", "register:40f0:8", ["const:be1380:8", "const:4:8"]]
- 00be1380 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00be2374 ["INT_ADD", "register:40f0:8", ["const:be2374:8", "const:4:8"]]
+ 00be2374 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-dd67772ddafa0873e398785016c1a445"></a>

### [`00be1524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1524.md) → [`00be2518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be2/00be2518.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEZNS_4auth14Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df50.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ef20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef20.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be2584",
      "incomplete_value": false,
      "site": "00be2588",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be1590",
      "incomplete_value": false,
      "site": "00be1594",
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
      "00be2584",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be2584",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be1594 ["INT_ADD", "register:40f0:8", ["const:be1594:8", "const:4:8"]]
- 00be1594 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00be2588 ["INT_ADD", "register:40f0:8", ["const:be2588:8", "const:4:8"]]
+ 00be2588 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00be1558 ["INT_ADD", "register:40f0:8", ["const:be1558:8", "const:4:8"]]
- 00be1558 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00be254c ["INT_ADD", "register:40f0:8", ["const:be254c:8", "const:4:8"]]
+ 00be254c ["CALL", null, ["callee:00c5baa0:8"]]
- 00be1564 ["INT_ADD", "register:40f0:8", ["const:be1564:8", "const:4:8"]]
- 00be1564 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00be2558 ["INT_ADD", "register:40f0:8", ["const:be2558:8", "const:4:8"]]
+ 00be2558 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-c6dd61be06978b0b9432d5e2d22f5eae"></a>

### [`00be21c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be21c0.md) → [`00be31b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00be3/00be31b4.md) _ZN8firebase4auth17UserInfoInterfaceD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5dc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc40.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00c5ec10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec10.md) [`00c5ec20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec20.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be31d0",
      "incomplete_value": true,
      "site": "00be31d4",
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
      "definition_site": "00be21dc",
      "incomplete_value": true,
      "site": "00be21e0",
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
      "00be31c8",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ],
    [
      "00be31d4",
      "DATA",
      [
        "storage",
        "00c92a48",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00be31c8",
      "READ",
      [
        "storage",
        "00c9ca68",
        null,
        "pointer"
      ]
    ],
    [
      "00be31d4",
      "DATA",
      [
        "storage",
        "00c93a18",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be21cc ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00be31c0 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00be21d4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a98:8"]]
- 00be21d4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00be31c8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a68:8"]]
+ 00be31c8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00be2220 ["INT_ADD", "register:40f0:8", ["const:be2220:8", "const:4:8"]]
- 00be2220 ["CALL", null, ["callee:00c58f50:8"]]
+ 00be3214 ["INT_ADD", "register:40f0:8", ["const:be3214:8", "const:4:8"]]
+ 00be3214 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b8826eb78b21bcfd14d477105e3c09b2"></a>

### [`00bef9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef9f0.md) → [`00bf09e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf09e4.md) _ZNSt6__ndk16chrono12system_clock3nowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)
- 新版 呼出元 1件 [`00c59620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59620.md) · 呼出先 3件 [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5a7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf0a50",
      "incomplete_value": false,
      "site": "00bf0a54",
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
            "const:aec:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00befa5c",
      "incomplete_value": false,
      "site": "00befa60",
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
            "const:a0e:8"
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
      "00bf0a50",
      "PARAM",
      [
        "storage",
        "002b4a0e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf0a50",
      "PARAM",
      [
        "storage",
        "002b4aec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00befa60 ["INT_ADD", "register:40f0:8", ["const:befa60:8", "const:4:8"]]
- 00befa60 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bf0a54 ["INT_ADD", "register:40f0:8", ["const:bf0a54:8", "const:4:8"]]
+ 00bf0a54 ["CALL", null, ["callee:00c591c0:8"]]
- 00befa08 ["INT_ADD", "register:40f0:8", ["const:befa08:8", "const:4:8"]]
- 00befa08 ["CALL", null, ["callee:00c5a7a0:8"]]
+ 00bf09fc ["INT_ADD", "register:40f0:8", ["const:bf09fc:8", "const:4:8"]]
+ 00bf09fc ["CALL", null, ["callee:00c5a7a0:8"]]
- 00befa50 ["INT_ADD", "register:40f0:8", ["const:befa50:8", "const:4:8"]]
- 00befa50 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf0a44 ["INT_ADD", "register:40f0:8", ["const:bf0a44:8", "const:4:8"]]
+ 00bf0a44 ["CALL", null, ["callee:00c59160:8"]]
~~~


<a id="compare-4f84bc13e870928a66d909437b869ffc"></a>

### [`00befaa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befaa4.md) → [`00bf0a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0a98.md) _ZNSt6__ndk16chrono12steady_clock3nowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f90.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)
- 新版 呼出元 1件 [`00c58f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f60.md) · 呼出先 3件 [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5a7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a7a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf0ae4",
      "incomplete_value": false,
      "site": "00bf0ae8",
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
            "const:20e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00befaf0",
      "incomplete_value": false,
      "site": "00befaf4",
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
            "const:143:8"
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
      "00bf0ae4",
      "PARAM",
      [
        "storage",
        "002a5143",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf0ae4",
      "PARAM",
      [
        "storage",
        "002a520e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00befaf4 ["INT_ADD", "register:40f0:8", ["const:befaf4:8", "const:4:8"]]
- 00befaf4 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bf0ae8 ["INT_ADD", "register:40f0:8", ["const:bf0ae8:8", "const:4:8"]]
+ 00bf0ae8 ["CALL", null, ["callee:00c591c0:8"]]
- 00befabc ["INT_ADD", "register:40f0:8", ["const:befabc:8", "const:4:8"]]
- 00befabc ["CALL", null, ["callee:00c5a7a0:8"]]
+ 00bf0ab0 ["INT_ADD", "register:40f0:8", ["const:bf0ab0:8", "const:4:8"]]
+ 00bf0ab0 ["CALL", null, ["callee:00c5a7a0:8"]]
- 00befae4 ["INT_ADD", "register:40f0:8", ["const:befae4:8", "const:4:8"]]
- 00befae4 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf0ad8 ["INT_ADD", "register:40f0:8", ["const:bf0ad8:8", "const:4:8"]]
+ 00bf0ad8 ["CALL", null, ["callee:00c59160:8"]]
~~~


<a id="compare-2c590e6a652c0aed0ee04744fa3868a6"></a>

### [`00befba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befba8.md) → [`00bf0b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0b9c.md) _ZNSt16nested_exceptionC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5efe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5efe0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf0bb8",
      "incomplete_value": true,
      "site": "00bf0bbc",
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
      "definition_site": "00befbc4",
      "incomplete_value": true,
      "site": "00befbc8",
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
      "00bf0bb4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0bbc",
      "DATA",
      [
        "storage",
        "00c92aa8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf0bb4",
      "READ",
      [
        "storage",
        "00c9cb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0bbc",
      "DATA",
      [
        "storage",
        "00c93a78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00befbb8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bf0bac ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00befbc0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b40:8"]]
- 00befbc0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf0bb4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b10:8"]]
+ 00bf0bb4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00befbcc ["INT_ADD", "register:40f0:8", ["const:befbcc:8", "const:4:8"]]
- 00befbcc ["CALL", null, ["callee:00c5efe0:8"]]
+ 00bf0bc0 ["INT_ADD", "register:40f0:8", ["const:bf0bc0:8", "const:4:8"]]
+ 00bf0bc0 ["CALL", null, ["callee:00c5efe0:8"]]
~~~


<a id="compare-8e9474813f9d78025519784d0930db59"></a>

### [`00befcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcc4.md) → [`00bf0cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0cb8.md) _ZNSt6__ndk112__next_primeEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md) · 呼出先 1件 [`00bf03e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf03e4.md)
- 新版 呼出元 1件 [`00c5b8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8c0.md) · 呼出先 1件 [`00bf13d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf13d8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.90% / 新版 98.90%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf13d0",
      "incomplete_value": false,
      "site": "00bf13d4",
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
            "const:31a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf03dc",
      "incomplete_value": false,
      "site": "00bf03e0",
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
            "const:23c:8"
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
      "00bf0ce8",
      "READ",
      [
        "storage",
        "00310368",
        null,
        "undefined4"
      ]
    ],
    [
      "00bf0ce8",
      "READ",
      [
        "storage",
        "00310338",
        null,
        "undefined4"
      ]
    ],
    [
      "00bf0cfc",
      "READ",
      [
        "storage",
        "00310308",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00bf0ce8",
      "READ",
      [
        "storage",
        "003103a8",
        null,
        "undefined4"
      ]
    ],
    [
      "00bf0ce8",
      "READ",
      [
        "storage",
        "00310378",
        null,
        "undefined4"
      ]
    ],
    [
      "00bf0cfc",
      "READ",
      [
        "storage",
        "00310348",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf03e0 ["INT_ADD", "register:40f0:8", ["const:bf03e0:8", "const:4:8"]]
- 00bf03e0 ["CALL", null, ["callee:00bf13d8:8"]]
+ 00bf13d4 ["INT_ADD", "register:40f0:8", ["const:bf13d4:8", "const:4:8"]]
+ 00bf13d4 ["CALL", null, ["callee:00bf13d8:8"]]
- 00befcdc ["COPY", "tmp:0:8", ["const:308:8"]]
- 00befcdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00befcdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00befcdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bf0cd0 ["COPY", "tmp:0:8", ["const:348:8"]]
+ 00bf0cd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf0cd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf0cd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00befd48 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 00befd48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00befd48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00befd48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00bf0d3c ["COPY", "tmp:0:8", ["const:408:8"]]
+ 00bf0d3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00bf0d3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00bf0d3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1d80de73d387811b441bf63abea7d7d2"></a>

### [`00bf03e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf03e4.md) → [`00bf13d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf13d8.md) FUN_00bf13d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00befcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcc4.md) · 呼出先 4件 [`00bf0438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0438.md) [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00bf0cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf0/00bf0cb8.md) · 呼出先 4件 [`00bf142c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf142c.md) [`00c38dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38dec.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf140c",
      "incomplete_value": true,
      "site": "00bf1414",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:b18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0418",
      "incomplete_value": true,
      "site": "00bf0420",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
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
      "definition_site": "00bf1410",
      "incomplete_value": true,
      "site": "00bf1414",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
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
    "old": {
      "definition_site": "00bf041c",
      "incomplete_value": true,
      "site": "00bf0420",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b50:8"
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
      "00bf140c",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00bf140c",
      "PARAM",
      [
        "storage",
        "00c96980",
        "std::overflow_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf1410",
      "READ",
      [
        "storage",
        "00c9bb50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf140c",
      "READ",
      [
        "storage",
        "00c9cb18",
        null,
        "pointer"
      ]
    ],
    [
      "00bf140c",
      "PARAM",
      [
        "storage",
        "00c97950",
        "std::overflow_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf1410",
      "READ",
      [
        "storage",
        "00c9cb20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0420 ["INT_ADD", "register:40f0:8", ["const:bf0420:8", "const:4:8"]]
- 00bf0420 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bf1414 ["INT_ADD", "register:40f0:8", ["const:bf1414:8", "const:4:8"]]
+ 00bf1414 ["CALL", null, ["callee:00c58fb0:8"]]
- 00bf03fc ["INT_ADD", "register:40f0:8", ["const:bf03fc:8", "const:4:8"]]
- 00bf03fc ["CALL", null, ["callee:00c58f90:8"]]
+ 00bf13f0 ["INT_ADD", "register:40f0:8", ["const:bf13f0:8", "const:4:8"]]
+ 00bf13f0 ["CALL", null, ["callee:00c58f90:8"]]
- 00bf0408 ["INT_ADD", "register:40f0:8", ["const:bf0408:8", "const:4:8"]]
- 00bf0408 ["CALL", null, ["callee:00bf142c:8"]]
+ 00bf13fc ["INT_ADD", "register:40f0:8", ["const:bf13fc:8", "const:4:8"]]
+ 00bf13fc ["CALL", null, ["callee:00bf142c:8"]]
~~~


<a id="compare-caf9d708975a9f7a04851b6b1d3cc1e8"></a>

### [`00bf04a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04a4.md) → [`00bf1498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1498.md) _ZNKSt6__ndk112bad_weak_ptr4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf14a0",
      "incomplete_value": false,
      "site": "00bf14a4",
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
            "const:195:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf04ac",
      "incomplete_value": false,
      "site": "00bf04b0",
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
            "const:b7:8"
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
      "00bf14a0",
      "DATA",
      [
        "storage",
        "002bb0b7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf14a0",
      "DATA",
      [
        "storage",
        "002bb195",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf04ac ["COPY", "tmp:0:8", ["const:b7:8"]]
- 00bf04ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf04ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf04ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf14a0 ["COPY", "tmp:0:8", ["const:195:8"]]
+ 00bf14a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf14a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf14a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e0573b64f65a0ff727e50e17c44a0207"></a>

### [`00bf07b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf07b4.md) → [`00bf17a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf17a8.md) _ZSt17__throw_bad_allocv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md) · 呼出先 4件 [`00c37c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58b10.md)
- 新版 呼出元 1件 [`00c5f020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f020.md) · 呼出先 4件 [`00c38c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38c34.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c59ae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59ae0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf17d4",
      "incomplete_value": true,
      "site": "00bf17dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf07e0",
      "incomplete_value": true,
      "site": "00bf07e8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:eb8:8"
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
      "definition_site": "00bf17d8",
      "incomplete_value": true,
      "site": "00bf17dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf07e4",
      "incomplete_value": true,
      "site": "00bf07e8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:ec0:8"
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
      "00bf17d4",
      "READ",
      [
        "storage",
        "00c9aeb8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf17d4",
      "PARAM",
      [
        "storage",
        "00c96768",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf17d8",
      "READ",
      [
        "storage",
        "00c9aec0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf17d4",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00bf17d4",
      "PARAM",
      [
        "storage",
        "00c97738",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf17d8",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf07e8 ["INT_ADD", "register:40f0:8", ["const:bf07e8:8", "const:4:8"]]
- 00bf07e8 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bf17dc ["INT_ADD", "register:40f0:8", ["const:bf17dc:8", "const:4:8"]]
+ 00bf17dc ["CALL", null, ["callee:00c58fb0:8"]]
- 00bf07c8 ["INT_ADD", "register:40f0:8", ["const:bf07c8:8", "const:4:8"]]
- 00bf07c8 ["CALL", null, ["callee:00c58f90:8"]]
+ 00bf17bc ["INT_ADD", "register:40f0:8", ["const:bf17bc:8", "const:4:8"]]
+ 00bf17bc ["CALL", null, ["callee:00c58f90:8"]]
- 00bf07d0 ["INT_ADD", "register:40f0:8", ["const:bf07d0:8", "const:4:8"]]
- 00bf07d0 ["CALL", null, ["callee:00c59ae0:8"]]
+ 00bf17c4 ["INT_ADD", "register:40f0:8", ["const:bf17c4:8", "const:4:8"]]
+ 00bf17c4 ["CALL", null, ["callee:00c59ae0:8"]]
~~~


<a id="compare-1c5621b84e1589cea4264814c9db1512"></a>

### [`00bf07ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf07ec.md) → [`00bf17e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf17e0.md) _ZNSt11logic_errorC2ERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e060.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5f030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f030.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf1800",
      "incomplete_value": true,
      "site": "00bf1804",
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
      "definition_site": "00bf080c",
      "incomplete_value": true,
      "site": "00bf0810",
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
      "00bf17fc",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1804",
      "DATA",
      [
        "storage",
        "00c967a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf17fc",
      "READ",
      [
        "storage",
        "00c9cb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1804",
      "DATA",
      [
        "storage",
        "00c97778",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0800 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bf17f4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bf0808 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
- 00bf0808 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf17fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b30:8"]]
+ 00bf17fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf0828 ["INT_ADD", "register:40f0:8", ["const:bf0828:8", "const:4:8"]]
- 00bf0828 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf181c ["INT_ADD", "register:40f0:8", ["const:bf181c:8", "const:4:8"]]
+ 00bf181c ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-d71d294595bb2da0e21e59499a72f9e9"></a>

### [`00bf0880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0880.md) → [`00bf1874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1874.md) _ZNSt11logic_errorC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58000.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c58fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fd0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf1898",
      "incomplete_value": true,
      "site": "00bf189c",
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
      "definition_site": "00bf08a4",
      "incomplete_value": true,
      "site": "00bf08a8",
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
      "00bf1894",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00bf189c",
      "DATA",
      [
        "storage",
        "00c967a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf1894",
      "READ",
      [
        "storage",
        "00c9cb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bf189c",
      "DATA",
      [
        "storage",
        "00c97778",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0894 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bf1888 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bf08a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
- 00bf08a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf1894 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b30:8"]]
+ 00bf1894 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf08b0 ["INT_ADD", "register:40f0:8", ["const:bf08b0:8", "const:4:8"]]
- 00bf08b0 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf18a4 ["INT_ADD", "register:40f0:8", ["const:bf18a4:8", "const:4:8"]]
+ 00bf18a4 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-ef369ec26696a14df824cef166817227"></a>

### [`00bf099c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf099c.md) → [`00bf1990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1990.md) _ZNSt13runtime_errorC1ERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e070.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5f040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f040.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf19b0",
      "incomplete_value": true,
      "site": "00bf19b4",
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
      "definition_site": "00bf09bc",
      "incomplete_value": true,
      "site": "00bf09c0",
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
      "00bf19ac",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ],
    [
      "00bf19b4",
      "DATA",
      [
        "storage",
        "00c967d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf19ac",
      "READ",
      [
        "storage",
        "00c9cb38",
        null,
        "pointer"
      ]
    ],
    [
      "00bf19b4",
      "DATA",
      [
        "storage",
        "00c977a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf09b0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bf19a4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bf09b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
- 00bf09b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf19ac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b38:8"]]
+ 00bf19ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf09d8 ["INT_ADD", "register:40f0:8", ["const:bf09d8:8", "const:4:8"]]
- 00bf09d8 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf19cc ["INT_ADD", "register:40f0:8", ["const:bf19cc:8", "const:4:8"]]
+ 00bf19cc ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-24ba431b99875729e3b2a24dd8a525e5"></a>

### [`00bf0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0a30.md) → [`00bf1a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1a24.md) _ZNSt13runtime_errorC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9a0.md) [`00c5e090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e090.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00c5b970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b970.md) [`00c5f060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f060.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf1a48",
      "incomplete_value": true,
      "site": "00bf1a4c",
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
      "definition_site": "00bf0a54",
      "incomplete_value": true,
      "site": "00bf0a58",
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
      "00bf1a44",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1a4c",
      "DATA",
      [
        "storage",
        "00c967d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf1a44",
      "READ",
      [
        "storage",
        "00c9cb38",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1a4c",
      "DATA",
      [
        "storage",
        "00c977a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0a44 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bf1a38 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bf0a50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
- 00bf0a50 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf1a44 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b38:8"]]
+ 00bf1a44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf0a60 ["INT_ADD", "register:40f0:8", ["const:bf0a60:8", "const:4:8"]]
- 00bf0a60 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf1a54 ["INT_ADD", "register:40f0:8", ["const:bf1a54:8", "const:4:8"]]
+ 00bf1a54 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-c3b8b23c2b3a42d9547ccb18fc1d0ed6"></a>

### [`00bf0b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0b4c.md) → [`00bf1b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1b40.md) _ZNSt6__ndk121__throw_runtime_errorEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) · 呼出先 4件 [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e090.md)
- 新版 呼出元 1件 [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md) · 呼出先 4件 [`00c38dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38dec.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5f060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f060.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf1b74",
      "incomplete_value": true,
      "site": "00bf1b7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
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
      "definition_site": "00bf0b80",
      "incomplete_value": true,
      "site": "00bf0b88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b70:8"
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
      "definition_site": "00bf1b78",
      "incomplete_value": true,
      "site": "00bf1b7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
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
      "definition_site": "00bf0b84",
      "incomplete_value": true,
      "site": "00bf0b88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b78:8"
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
      "00bf1b74",
      "READ",
      [
        "storage",
        "00c9bb70",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1b74",
      "PARAM",
      [
        "storage",
        "00c96928",
        "std::runtime_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf1b78",
      "READ",
      [
        "storage",
        "00c9bb78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf1b74",
      "READ",
      [
        "storage",
        "00c9cb40",
        null,
        "pointer"
      ]
    ],
    [
      "00bf1b74",
      "PARAM",
      [
        "storage",
        "00c978f8",
        "std::runtime_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf1b78",
      "READ",
      [
        "storage",
        "00c9cb48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0b88 ["INT_ADD", "register:40f0:8", ["const:bf0b88:8", "const:4:8"]]
- 00bf0b88 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bf1b7c ["INT_ADD", "register:40f0:8", ["const:bf1b7c:8", "const:4:8"]]
+ 00bf1b7c ["CALL", null, ["callee:00c58fb0:8"]]
- 00bf0b64 ["INT_ADD", "register:40f0:8", ["const:bf0b64:8", "const:4:8"]]
- 00bf0b64 ["CALL", null, ["callee:00c58f90:8"]]
+ 00bf1b58 ["INT_ADD", "register:40f0:8", ["const:bf1b58:8", "const:4:8"]]
+ 00bf1b58 ["CALL", null, ["callee:00c58f90:8"]]
- 00bf0b70 ["INT_ADD", "register:40f0:8", ["const:bf0b70:8", "const:4:8"]]
- 00bf0b70 ["CALL", null, ["callee:00c5f060:8"]]
+ 00bf1b64 ["INT_ADD", "register:40f0:8", ["const:bf1b64:8", "const:4:8"]]
+ 00bf1b64 ["CALL", null, ["callee:00c5f060:8"]]
~~~


<a id="compare-261c310402c7efd34e1535bb52966e01"></a>

### [`00bf2140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2140.md) → [`00bf3134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3134.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf31dc",
      "incomplete_value": false,
      "site": "00bf31e0",
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
            "const:78f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf21e8",
      "incomplete_value": false,
      "site": "00bf21ec",
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
            "const:6b8:8"
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
      "00bf31dc",
      "PARAM",
      [
        "storage",
        "002af6b8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf31dc",
      "PARAM",
      [
        "storage",
        "002af78f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf21ec ["INT_ADD", "register:40f0:8", ["const:bf21ec:8", "const:4:8"]]
- 00bf21ec ["CALL", null, ["callee:00442c90:8"]]
+ 00bf31e0 ["INT_ADD", "register:40f0:8", ["const:bf31e0:8", "const:4:8"]]
+ 00bf31e0 ["CALL", null, ["callee:00442c90:8"]]
- 00bf21b8 ["INT_ADD", "register:40f0:8", ["const:bf21b8:8", "const:4:8"]]
- 00bf21b8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bf31ac ["INT_ADD", "register:40f0:8", ["const:bf31ac:8", "const:4:8"]]
+ 00bf31ac ["CALL", null, ["callee:00c590f0:8"]]
- 00bf21e8 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00bf21e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf21e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf21e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf31dc ["COPY", "tmp:0:8", ["const:78f:8"]]
+ 00bf31dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf31dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf31dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-422df6cc2b76c807db40496ef505617a"></a>

### [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) → [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) FUN_00bf3968

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 17件 [`00bf279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf279c.md) [`00bf2e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2e78.md) [`00bf30b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf30b8.md) [`00bf3100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3100.md) [`00bf32ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf32ac.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 17件 [`00bf3790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3790.md) [`00bf3e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3e6c.md) [`00bf40ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf40ac.md) [`00bf40f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf40f4.md) [`00bf42a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf42a0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf3978",
      "incomplete_value": false,
      "site": "00bf397c",
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
            "const:fad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf2984",
      "incomplete_value": false,
      "site": "00bf2988",
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
            "const:ecf:8"
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
      "00bf3978",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf3978",
      "PARAM",
      [
        "storage",
        "002b9fad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf2988 ["INT_ADD", "register:40f0:8", ["const:bf2988:8", "const:4:8"]]
- 00bf2988 ["CALL", null, ["callee:00442c90:8"]]
+ 00bf397c ["INT_ADD", "register:40f0:8", ["const:bf397c:8", "const:4:8"]]
+ 00bf397c ["CALL", null, ["callee:00442c90:8"]]
- 00bf2984 ["COPY", "tmp:0:8", ["const:ecf:8"]]
- 00bf2984 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf2984 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf2984 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf3978 ["COPY", "tmp:0:8", ["const:fad:8"]]
+ 00bf3978 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf3978 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf3978 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b05074f473301b8710cf871f80803f45"></a>

### [`00bf45ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf45ac.md) → [`00bf55a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf55a0.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00c5f0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf5650",
      "incomplete_value": false,
      "site": "00bf5654",
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
            "const:78f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf465c",
      "incomplete_value": false,
      "site": "00bf4660",
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
            "const:6b8:8"
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
      "00bf5650",
      "PARAM",
      [
        "storage",
        "002af6b8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5650",
      "PARAM",
      [
        "storage",
        "002af78f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4660 ["INT_ADD", "register:40f0:8", ["const:bf4660:8", "const:4:8"]]
- 00bf4660 ["CALL", null, ["callee:00442c90:8"]]
+ 00bf5654 ["INT_ADD", "register:40f0:8", ["const:bf5654:8", "const:4:8"]]
+ 00bf5654 ["CALL", null, ["callee:00442c90:8"]]
- 00bf4630 ["INT_ADD", "register:40f0:8", ["const:bf4630:8", "const:4:8"]]
- 00bf4630 ["CALL", null, ["callee:00c5f0e0:8"]]
+ 00bf5624 ["INT_ADD", "register:40f0:8", ["const:bf5624:8", "const:4:8"]]
+ 00bf5624 ["CALL", null, ["callee:00c5f0e0:8"]]
- 00bf465c ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00bf465c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf465c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf465c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf5650 ["COPY", "tmp:0:8", ["const:78f:8"]]
+ 00bf5650 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5650 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5650 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7615f7fd50fea074c315d7ebb85ff1c2"></a>

### [`00bf4c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c0c.md) → [`00bf5c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5c00.md) _ZNKSt6__ndk121__basic_string_commonILb1EE20__throw_length_errorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b160.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00c5c130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c130.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf5c10",
      "incomplete_value": false,
      "site": "00bf5c14",
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
            "const:fad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4c1c",
      "incomplete_value": false,
      "site": "00bf4c20",
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
            "const:ecf:8"
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
      "00bf5c10",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5c10",
      "PARAM",
      [
        "storage",
        "002b9fad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4c20 ["INT_ADD", "register:40f0:8", ["const:bf4c20:8", "const:4:8"]]
- 00bf4c20 ["CALL", null, ["callee:0043bad8:8"]]
+ 00bf5c14 ["INT_ADD", "register:40f0:8", ["const:bf5c14:8", "const:4:8"]]
+ 00bf5c14 ["CALL", null, ["callee:0043bad8:8"]]
- 00bf4c1c ["COPY", "tmp:0:8", ["const:ecf:8"]]
- 00bf4c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c10 ["COPY", "tmp:0:8", ["const:fad:8"]]
+ 00bf5c10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9084804563a034e70ec85b48189d3486"></a>

### [`00bf4c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c24.md) → [`00bf5c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5c18.md) _ZNKSt6__ndk121__basic_string_commonILb1EE20__throw_out_of_rangeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d520.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00c5e4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e4f0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf5c28",
      "incomplete_value": false,
      "site": "00bf5c2c",
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
            "const:fad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4c34",
      "incomplete_value": false,
      "site": "00bf4c38",
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
            "const:ecf:8"
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
      "00bf5c28",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5c28",
      "PARAM",
      [
        "storage",
        "002b9fad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4c38 ["INT_ADD", "register:40f0:8", ["const:bf4c38:8", "const:4:8"]]
- 00bf4c38 ["CALL", null, ["callee:00442c90:8"]]
+ 00bf5c2c ["INT_ADD", "register:40f0:8", ["const:bf5c2c:8", "const:4:8"]]
+ 00bf5c2c ["CALL", null, ["callee:00442c90:8"]]
- 00bf4c34 ["COPY", "tmp:0:8", ["const:ecf:8"]]
- 00bf4c34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4c34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4c34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c28 ["COPY", "tmp:0:8", ["const:fad:8"]]
+ 00bf5c28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf5c28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-782d12b83f5a5373a08cfeae46f807f3"></a>

### [`00bf4c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c3c.md) → [`00bf5c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5c30.md) _ZNSt6__ndk14stoiERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58130.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58660.md)
- 新版 呼出元 1件 [`00c59100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59100.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`004821e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004821e0.md) [`00bf920c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf920c.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59630.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5d50",
      "incomplete_value": true,
      "site": "00bf5d50",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4d5c",
      "incomplete_value": true,
      "site": "00bf4d5c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5d58",
      "incomplete_value": true,
      "site": "00bf5d58",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4d64",
      "incomplete_value": true,
      "site": "00bf4d64",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf5cfc",
      "incomplete_value": false,
      "site": "00bf5d0c",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4d08",
      "incomplete_value": false,
      "site": "00bf4d18",
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
            "const:d72:8"
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
      "00bf5cfc",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5d40",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5d44",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5cfc",
      "PARAM",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf5d40",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf5d44",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4d18 ["INT_ADD", "register:40f0:8", ["const:bf4d18:8", "const:4:8"]]
- 00bf4d18 ["CALL", null, ["callee:004821e0:8"]]
+ 00bf5d0c ["INT_ADD", "register:40f0:8", ["const:bf5d0c:8", "const:4:8"]]
+ 00bf5d0c ["CALL", null, ["callee:004821e0:8"]]
- 00bf4c8c ["INT_ADD", "register:40f0:8", ["const:bf4c8c:8", "const:4:8"]]
- 00bf4c8c ["CALL", null, ["callee:00c59160:8"]]
+ 00bf5c80 ["INT_ADD", "register:40f0:8", ["const:bf5c80:8", "const:4:8"]]
+ 00bf5c80 ["CALL", null, ["callee:00c59160:8"]]
- 00bf4ca8 ["INT_ADD", "register:40f0:8", ["const:bf4ca8:8", "const:4:8"]]
- 00bf4ca8 ["CALL", null, ["callee:00c59630:8"]]
+ 00bf5c9c ["INT_ADD", "register:40f0:8", ["const:bf5c9c:8", "const:4:8"]]
+ 00bf5c9c ["CALL", null, ["callee:00c59630:8"]]
~~~


<a id="compare-6e13eb1d70a60689b5770e5e017dfe6f"></a>

### [`00bf4d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4d98.md) → [`00bf5d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5d8c.md) _ZNSt6__ndk14stolERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`004821e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004821e0.md) [`00bf920c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf920c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.55% / 新版 98.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf5e50",
      "incomplete_value": false,
      "site": "00bf5e60",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4e5c",
      "incomplete_value": false,
      "site": "00bf4e6c",
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
            "const:d72:8"
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
      "00bf5e50",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5e50",
      "PARAM",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4e6c ["INT_ADD", "register:40f0:8", ["const:bf4e6c:8", "const:4:8"]]
- 00bf4e6c ["CALL", null, ["callee:004821e0:8"]]
+ 00bf5e60 ["INT_ADD", "register:40f0:8", ["const:bf5e60:8", "const:4:8"]]
+ 00bf5e60 ["CALL", null, ["callee:004821e0:8"]]
- 00bf4de8 ["INT_ADD", "register:40f0:8", ["const:bf4de8:8", "const:4:8"]]
- 00bf4de8 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf5ddc ["INT_ADD", "register:40f0:8", ["const:bf5ddc:8", "const:4:8"]]
+ 00bf5ddc ["CALL", null, ["callee:00c59160:8"]]
- 00bf4e04 ["INT_ADD", "register:40f0:8", ["const:bf4e04:8", "const:4:8"]]
- 00bf4e04 ["CALL", null, ["callee:00c59630:8"]]
+ 00bf5df8 ["INT_ADD", "register:40f0:8", ["const:bf5df8:8", "const:4:8"]]
+ 00bf5df8 ["CALL", null, ["callee:00c59630:8"]]
~~~


<a id="compare-efaba4d5a0bc0dbcdcaca8b4dd9c61ec"></a>

### [`00bf4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4eb0.md) → [`00bf5ea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5ea4.md) _ZNSt6__ndk15stoulERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ac0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 1件 [`00c59a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59a90.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5fa0",
      "incomplete_value": true,
      "site": "00bf5fa0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4fac",
      "incomplete_value": true,
      "site": "00bf4fac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5fa4",
      "incomplete_value": true,
      "site": "00bf5fa4",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4fb0",
      "incomplete_value": true,
      "site": "00bf4fb0",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
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
      "definition_site": "00bf5fe0",
      "incomplete_value": true,
      "site": "00bf5fe0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4fec",
      "incomplete_value": true,
      "site": "00bf4fec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf5f88",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5f8c",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5fc8",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5f88",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf5f8c",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf5fc8",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4f0c ["INT_ADD", "register:40f0:8", ["const:bf4f0c:8", "const:4:8"]]
- 00bf4f0c ["CALL", null, ["callee:00c59160:8"]]
+ 00bf5f00 ["INT_ADD", "register:40f0:8", ["const:bf5f00:8", "const:4:8"]]
+ 00bf5f00 ["CALL", null, ["callee:00c59160:8"]]
- 00bf4f28 ["INT_ADD", "register:40f0:8", ["const:bf4f28:8", "const:4:8"]]
- 00bf4f28 ["CALL", null, ["callee:00c5f100:8"]]
+ 00bf5f1c ["INT_ADD", "register:40f0:8", ["const:bf5f1c:8", "const:4:8"]]
+ 00bf5f1c ["CALL", null, ["callee:00c5f100:8"]]
- 00bf4f58 ["INT_ADD", "register:40f0:8", ["const:bf4f58:8", "const:4:8"]]
- 00bf4f58 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf5f4c ["INT_ADD", "register:40f0:8", ["const:bf5f4c:8", "const:4:8"]]
+ 00bf5f4c ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-c636f3c6d4d19aa84d74e2cde912b8be"></a>

### [`00bf501c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf501c.md) → [`00bf6010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6010.md) _ZNSt6__ndk15stollERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58300.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58670.md)
- 新版 呼出元 1件 [`00c592d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592d0.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59640.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf610c",
      "incomplete_value": true,
      "site": "00bf610c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5118",
      "incomplete_value": true,
      "site": "00bf5118",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6110",
      "incomplete_value": true,
      "site": "00bf6110",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf511c",
      "incomplete_value": true,
      "site": "00bf511c",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
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
      "definition_site": "00bf614c",
      "incomplete_value": true,
      "site": "00bf614c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5158",
      "incomplete_value": true,
      "site": "00bf5158",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf60f4",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf60f8",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6134",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf60f4",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf60f8",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6134",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5078 ["INT_ADD", "register:40f0:8", ["const:bf5078:8", "const:4:8"]]
- 00bf5078 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf606c ["INT_ADD", "register:40f0:8", ["const:bf606c:8", "const:4:8"]]
+ 00bf606c ["CALL", null, ["callee:00c59160:8"]]
- 00bf5094 ["INT_ADD", "register:40f0:8", ["const:bf5094:8", "const:4:8"]]
- 00bf5094 ["CALL", null, ["callee:00c59640:8"]]
+ 00bf6088 ["INT_ADD", "register:40f0:8", ["const:bf6088:8", "const:4:8"]]
+ 00bf6088 ["CALL", null, ["callee:00c59640:8"]]
- 00bf50c4 ["INT_ADD", "register:40f0:8", ["const:bf50c4:8", "const:4:8"]]
- 00bf50c4 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf60b8 ["INT_ADD", "register:40f0:8", ["const:bf60b8:8", "const:4:8"]]
+ 00bf60b8 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-148a76757a3c9f930096d55cfee26740"></a>

### [`00bf5188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5188.md) → [`00bf617c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf617c.md) _ZNSt6__ndk16stoullERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58310.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 1件 [`00c592e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592e0.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.13% / 新版 89.13%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf627c",
      "incomplete_value": true,
      "site": "00bf627c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5288",
      "incomplete_value": true,
      "site": "00bf5288",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
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
      "definition_site": "00bf6280",
      "incomplete_value": true,
      "site": "00bf6280",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf528c",
      "incomplete_value": true,
      "site": "00bf528c",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
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
      "definition_site": "00bf62bc",
      "incomplete_value": true,
      "site": "00bf62bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf52c8",
      "incomplete_value": true,
      "site": "00bf52c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6264",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6268",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf62a4",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6264",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6268",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf62a4",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf51e8 ["INT_ADD", "register:40f0:8", ["const:bf51e8:8", "const:4:8"]]
- 00bf51e8 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf61dc ["INT_ADD", "register:40f0:8", ["const:bf61dc:8", "const:4:8"]]
+ 00bf61dc ["CALL", null, ["callee:00c59160:8"]]
- 00bf5204 ["INT_ADD", "register:40f0:8", ["const:bf5204:8", "const:4:8"]]
- 00bf5204 ["CALL", null, ["callee:00c5f110:8"]]
+ 00bf61f8 ["INT_ADD", "register:40f0:8", ["const:bf61f8:8", "const:4:8"]]
+ 00bf61f8 ["CALL", null, ["callee:00c5f110:8"]]
- 00bf5234 ["INT_ADD", "register:40f0:8", ["const:bf5234:8", "const:4:8"]]
- 00bf5234 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6228 ["INT_ADD", "register:40f0:8", ["const:bf6228:8", "const:4:8"]]
+ 00bf6228 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-f31501aebfda06028d40e19ce783de6a"></a>

### [`00bf52f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf52f8.md) → [`00bf62ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf62ec.md) _ZNSt6__ndk14stofERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c586b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586b0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58680.md)
- 新版 呼出元 1件 [`00c59680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59680.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59650.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf63c8",
      "incomplete_value": true,
      "site": "00bf63c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf53d4",
      "incomplete_value": true,
      "site": "00bf53d4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf63d0",
      "incomplete_value": true,
      "site": "00bf63d0",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf53dc",
      "incomplete_value": true,
      "site": "00bf53dc",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
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
      "definition_site": "00bf6400",
      "incomplete_value": true,
      "site": "00bf6400",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf540c",
      "incomplete_value": true,
      "site": "00bf540c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf63b8",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf63bc",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf63f0",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf63b8",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf63bc",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf63f0",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5344 ["INT_ADD", "register:40f0:8", ["const:bf5344:8", "const:4:8"]]
- 00bf5344 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6338 ["INT_ADD", "register:40f0:8", ["const:bf6338:8", "const:4:8"]]
+ 00bf6338 ["CALL", null, ["callee:00c59160:8"]]
- 00bf535c ["INT_ADD", "register:40f0:8", ["const:bf535c:8", "const:4:8"]]
- 00bf535c ["CALL", null, ["callee:00c59650:8"]]
+ 00bf6350 ["INT_ADD", "register:40f0:8", ["const:bf6350:8", "const:4:8"]]
+ 00bf6350 ["CALL", null, ["callee:00c59650:8"]]
- 00bf538c ["INT_ADD", "register:40f0:8", ["const:bf538c:8", "const:4:8"]]
- 00bf538c ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6380 ["INT_ADD", "register:40f0:8", ["const:bf6380:8", "const:4:8"]]
+ 00bf6380 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-1d0592b50fb488f58cef642585669dcc"></a>

### [`00bf5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5440.md) → [`00bf6434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6434.md) _ZNSt6__ndk14stodERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58320.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md)
- 新版 呼出元 1件 [`00c592f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592f0.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59660.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6510",
      "incomplete_value": true,
      "site": "00bf6510",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf551c",
      "incomplete_value": true,
      "site": "00bf551c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6518",
      "incomplete_value": true,
      "site": "00bf6518",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5524",
      "incomplete_value": true,
      "site": "00bf5524",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
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
      "definition_site": "00bf6548",
      "incomplete_value": true,
      "site": "00bf6548",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5554",
      "incomplete_value": true,
      "site": "00bf5554",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6500",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6504",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6538",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6500",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6504",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6538",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf548c ["INT_ADD", "register:40f0:8", ["const:bf548c:8", "const:4:8"]]
- 00bf548c ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6480 ["INT_ADD", "register:40f0:8", ["const:bf6480:8", "const:4:8"]]
+ 00bf6480 ["CALL", null, ["callee:00c59160:8"]]
- 00bf54a4 ["INT_ADD", "register:40f0:8", ["const:bf54a4:8", "const:4:8"]]
- 00bf54a4 ["CALL", null, ["callee:00c59660:8"]]
+ 00bf6498 ["INT_ADD", "register:40f0:8", ["const:bf6498:8", "const:4:8"]]
+ 00bf6498 ["CALL", null, ["callee:00c59660:8"]]
- 00bf54d4 ["INT_ADD", "register:40f0:8", ["const:bf54d4:8", "const:4:8"]]
- 00bf54d4 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf64c8 ["INT_ADD", "register:40f0:8", ["const:bf64c8:8", "const:4:8"]]
+ 00bf64c8 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-45eb2dcc91a550783a6a60b5f5cb675b"></a>

### [`00bf5588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5588.md) → [`00bf657c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf657c.md) _ZNSt6__ndk15stoldERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.76% / 新版 88.76%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6670",
      "incomplete_value": true,
      "site": "00bf6670",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf567c",
      "incomplete_value": true,
      "site": "00bf567c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6674",
      "incomplete_value": true,
      "site": "00bf6674",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5680",
      "incomplete_value": true,
      "site": "00bf5680",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
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
      "definition_site": "00bf66b0",
      "incomplete_value": true,
      "site": "00bf66b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf56bc",
      "incomplete_value": true,
      "site": "00bf56bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6658",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf665c",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6698",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6658",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf665c",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6698",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf55e0 ["INT_ADD", "register:40f0:8", ["const:bf55e0:8", "const:4:8"]]
- 00bf55e0 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf65d4 ["INT_ADD", "register:40f0:8", ["const:bf65d4:8", "const:4:8"]]
+ 00bf65d4 ["CALL", null, ["callee:00c59160:8"]]
- 00bf55f8 ["INT_ADD", "register:40f0:8", ["const:bf55f8:8", "const:4:8"]]
- 00bf55f8 ["CALL", null, ["callee:00c5f120:8"]]
+ 00bf65ec ["INT_ADD", "register:40f0:8", ["const:bf65ec:8", "const:4:8"]]
+ 00bf65ec ["CALL", null, ["callee:00c5f120:8"]]
- 00bf5628 ["INT_ADD", "register:40f0:8", ["const:bf5628:8", "const:4:8"]]
- 00bf5628 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf661c ["INT_ADD", "register:40f0:8", ["const:bf661c:8", "const:4:8"]]
+ 00bf661c ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-d9e85fd812e5d66c3e25460fb9c6b630"></a>

### [`00bf56ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf56ec.md) → [`00bf66e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf66e0.md) _ZNSt6__ndk14stoiERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`004821e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004821e0.md) [`00bf920c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf920c.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.41% / 新版 92.41%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6808",
      "incomplete_value": true,
      "site": "00bf6808",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5814",
      "incomplete_value": true,
      "site": "00bf5814",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6810",
      "incomplete_value": true,
      "site": "00bf6810",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf581c",
      "incomplete_value": true,
      "site": "00bf581c",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf67b4",
      "incomplete_value": false,
      "site": "00bf67c4",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf57c0",
      "incomplete_value": false,
      "site": "00bf57d0",
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
            "const:d72:8"
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
      "00bf67b4",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf67f8",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf67fc",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf67b4",
      "PARAM",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf67f8",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf67fc",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf57d0 ["INT_ADD", "register:40f0:8", ["const:bf57d0:8", "const:4:8"]]
- 00bf57d0 ["CALL", null, ["callee:004821e0:8"]]
+ 00bf67c4 ["INT_ADD", "register:40f0:8", ["const:bf67c4:8", "const:4:8"]]
+ 00bf67c4 ["CALL", null, ["callee:004821e0:8"]]
- 00bf5740 ["INT_ADD", "register:40f0:8", ["const:bf5740:8", "const:4:8"]]
- 00bf5740 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6734 ["INT_ADD", "register:40f0:8", ["const:bf6734:8", "const:4:8"]]
+ 00bf6734 ["CALL", null, ["callee:00c59160:8"]]
- 00bf575c ["INT_ADD", "register:40f0:8", ["const:bf575c:8", "const:4:8"]]
- 00bf575c ["CALL", null, ["callee:00c5f130:8"]]
+ 00bf6750 ["INT_ADD", "register:40f0:8", ["const:bf6750:8", "const:4:8"]]
+ 00bf6750 ["CALL", null, ["callee:00c5f130:8"]]
~~~


<a id="compare-7ed80426c28643fe67d291db79061a44"></a>

### [`00bf5850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5850.md) → [`00bf6844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6844.md) _ZNSt6__ndk14stolERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`004821e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004821e0.md) [`00bf920c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf920c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf6910",
      "incomplete_value": false,
      "site": "00bf6920",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf591c",
      "incomplete_value": false,
      "site": "00bf592c",
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
            "const:d72:8"
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
      "00bf6910",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6910",
      "PARAM",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf592c ["INT_ADD", "register:40f0:8", ["const:bf592c:8", "const:4:8"]]
- 00bf592c ["CALL", null, ["callee:004821e0:8"]]
+ 00bf6920 ["INT_ADD", "register:40f0:8", ["const:bf6920:8", "const:4:8"]]
+ 00bf6920 ["CALL", null, ["callee:004821e0:8"]]
- 00bf58a4 ["INT_ADD", "register:40f0:8", ["const:bf58a4:8", "const:4:8"]]
- 00bf58a4 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6898 ["INT_ADD", "register:40f0:8", ["const:bf6898:8", "const:4:8"]]
+ 00bf6898 ["CALL", null, ["callee:00c59160:8"]]
- 00bf58c0 ["INT_ADD", "register:40f0:8", ["const:bf58c0:8", "const:4:8"]]
- 00bf58c0 ["CALL", null, ["callee:00c5f130:8"]]
+ 00bf68b4 ["INT_ADD", "register:40f0:8", ["const:bf68b4:8", "const:4:8"]]
+ 00bf68b4 ["CALL", null, ["callee:00c5f130:8"]]
~~~


<a id="compare-c9901dc629c46cc6e71b907b1e8f3787"></a>

### [`00bf5970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5970.md) → [`00bf6964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6964.md) _ZNSt6__ndk15stoulERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6a68",
      "incomplete_value": true,
      "site": "00bf6a68",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5a74",
      "incomplete_value": true,
      "site": "00bf5a74",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
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
      "definition_site": "00bf6a6c",
      "incomplete_value": true,
      "site": "00bf6a6c",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5a78",
      "incomplete_value": true,
      "site": "00bf5a78",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6aa8",
      "incomplete_value": true,
      "site": "00bf6aa8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5ab4",
      "incomplete_value": true,
      "site": "00bf5ab4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6a50",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6a58",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6a90",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6a50",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6a58",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6a90",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf59c8 ["INT_ADD", "register:40f0:8", ["const:bf59c8:8", "const:4:8"]]
- 00bf59c8 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf69bc ["INT_ADD", "register:40f0:8", ["const:bf69bc:8", "const:4:8"]]
+ 00bf69bc ["CALL", null, ["callee:00c59160:8"]]
- 00bf59e4 ["INT_ADD", "register:40f0:8", ["const:bf59e4:8", "const:4:8"]]
- 00bf59e4 ["CALL", null, ["callee:00c5f140:8"]]
+ 00bf69d8 ["INT_ADD", "register:40f0:8", ["const:bf69d8:8", "const:4:8"]]
+ 00bf69d8 ["CALL", null, ["callee:00c5f140:8"]]
- 00bf5a20 ["INT_ADD", "register:40f0:8", ["const:bf5a20:8", "const:4:8"]]
- 00bf5a20 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6a14 ["INT_ADD", "register:40f0:8", ["const:bf6a14:8", "const:4:8"]]
+ 00bf6a14 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-e2008ba44a305fab2761b08ba374dd3b"></a>

### [`00bf5aec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5aec.md) → [`00bf6ae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6ae0.md) _ZNSt6__ndk15stollERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6be4",
      "incomplete_value": true,
      "site": "00bf6be4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5bf0",
      "incomplete_value": true,
      "site": "00bf5bf0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
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
      "definition_site": "00bf6be8",
      "incomplete_value": true,
      "site": "00bf6be8",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5bf4",
      "incomplete_value": true,
      "site": "00bf5bf4",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6c24",
      "incomplete_value": true,
      "site": "00bf6c24",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5c30",
      "incomplete_value": true,
      "site": "00bf5c30",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6bcc",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6bd4",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6c0c",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6bcc",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6bd4",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6c0c",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5b44 ["INT_ADD", "register:40f0:8", ["const:bf5b44:8", "const:4:8"]]
- 00bf5b44 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6b38 ["INT_ADD", "register:40f0:8", ["const:bf6b38:8", "const:4:8"]]
+ 00bf6b38 ["CALL", null, ["callee:00c59160:8"]]
- 00bf5b60 ["INT_ADD", "register:40f0:8", ["const:bf5b60:8", "const:4:8"]]
- 00bf5b60 ["CALL", null, ["callee:00c5f150:8"]]
+ 00bf6b54 ["INT_ADD", "register:40f0:8", ["const:bf6b54:8", "const:4:8"]]
+ 00bf6b54 ["CALL", null, ["callee:00c5f150:8"]]
- 00bf5b9c ["INT_ADD", "register:40f0:8", ["const:bf5b9c:8", "const:4:8"]]
- 00bf5b9c ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6b90 ["INT_ADD", "register:40f0:8", ["const:bf6b90:8", "const:4:8"]]
+ 00bf6b90 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-2b9b62ddacdec77cfcb4f3250329b695"></a>

### [`00bf5c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5c68.md) → [`00bf6c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6c5c.md) _ZNSt6__ndk16stoullERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6d64",
      "incomplete_value": true,
      "site": "00bf6d64",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5d70",
      "incomplete_value": true,
      "site": "00bf5d70",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6d68",
      "incomplete_value": true,
      "site": "00bf6d68",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5d74",
      "incomplete_value": true,
      "site": "00bf5d74",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
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
      "definition_site": "00bf6da4",
      "incomplete_value": true,
      "site": "00bf6da4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5db0",
      "incomplete_value": true,
      "site": "00bf5db0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6d4c",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6d54",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6d8c",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6d4c",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6d54",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6d8c",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5cc4 ["INT_ADD", "register:40f0:8", ["const:bf5cc4:8", "const:4:8"]]
- 00bf5cc4 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6cb8 ["INT_ADD", "register:40f0:8", ["const:bf6cb8:8", "const:4:8"]]
+ 00bf6cb8 ["CALL", null, ["callee:00c59160:8"]]
- 00bf5ce0 ["INT_ADD", "register:40f0:8", ["const:bf5ce0:8", "const:4:8"]]
- 00bf5ce0 ["CALL", null, ["callee:00c5f160:8"]]
+ 00bf6cd4 ["INT_ADD", "register:40f0:8", ["const:bf6cd4:8", "const:4:8"]]
+ 00bf6cd4 ["CALL", null, ["callee:00c5f160:8"]]
- 00bf5d1c ["INT_ADD", "register:40f0:8", ["const:bf5d1c:8", "const:4:8"]]
- 00bf5d1c ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6d10 ["INT_ADD", "register:40f0:8", ["const:bf6d10:8", "const:4:8"]]
+ 00bf6d10 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-9df35b9843d01e30d6e1d67c64b92d89"></a>

### [`00bf5de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5de8.md) → [`00bf6ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6ddc.md) _ZNSt6__ndk14stofERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6ec0",
      "incomplete_value": true,
      "site": "00bf6ec0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5ecc",
      "incomplete_value": true,
      "site": "00bf5ecc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6ec8",
      "incomplete_value": true,
      "site": "00bf6ec8",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5ed4",
      "incomplete_value": true,
      "site": "00bf5ed4",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
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
      "definition_site": "00bf6ef8",
      "incomplete_value": true,
      "site": "00bf6ef8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5f04",
      "incomplete_value": true,
      "site": "00bf5f04",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6eb0",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6eb4",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf6ee8",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6eb0",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf6eb4",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf6ee8",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5e38 ["INT_ADD", "register:40f0:8", ["const:bf5e38:8", "const:4:8"]]
- 00bf5e38 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6e2c ["INT_ADD", "register:40f0:8", ["const:bf6e2c:8", "const:4:8"]]
+ 00bf6e2c ["CALL", null, ["callee:00c59160:8"]]
- 00bf5e50 ["INT_ADD", "register:40f0:8", ["const:bf5e50:8", "const:4:8"]]
- 00bf5e50 ["CALL", null, ["callee:00c5f170:8"]]
+ 00bf6e44 ["INT_ADD", "register:40f0:8", ["const:bf6e44:8", "const:4:8"]]
+ 00bf6e44 ["CALL", null, ["callee:00c5f170:8"]]
- 00bf5e84 ["INT_ADD", "register:40f0:8", ["const:bf5e84:8", "const:4:8"]]
- 00bf5e84 ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6e78 ["INT_ADD", "register:40f0:8", ["const:bf6e78:8", "const:4:8"]]
+ 00bf6e78 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-62ed58bbf357a767716cc560253edadd"></a>

### [`00bf5f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5f40.md) → [`00bf6f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6f34.md) _ZNSt6__ndk14stodERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf7018",
      "incomplete_value": true,
      "site": "00bf7018",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf6024",
      "incomplete_value": true,
      "site": "00bf6024",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf7020",
      "incomplete_value": true,
      "site": "00bf7020",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf602c",
      "incomplete_value": true,
      "site": "00bf602c",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
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
      "definition_site": "00bf7050",
      "incomplete_value": true,
      "site": "00bf7050",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf605c",
      "incomplete_value": true,
      "site": "00bf605c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf7008",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf700c",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf7040",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf7008",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf700c",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf7040",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5f90 ["INT_ADD", "register:40f0:8", ["const:bf5f90:8", "const:4:8"]]
- 00bf5f90 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf6f84 ["INT_ADD", "register:40f0:8", ["const:bf6f84:8", "const:4:8"]]
+ 00bf6f84 ["CALL", null, ["callee:00c59160:8"]]
- 00bf5fa8 ["INT_ADD", "register:40f0:8", ["const:bf5fa8:8", "const:4:8"]]
- 00bf5fa8 ["CALL", null, ["callee:00c5f180:8"]]
+ 00bf6f9c ["INT_ADD", "register:40f0:8", ["const:bf6f9c:8", "const:4:8"]]
+ 00bf6f9c ["CALL", null, ["callee:00c5f180:8"]]
- 00bf5fdc ["INT_ADD", "register:40f0:8", ["const:bf5fdc:8", "const:4:8"]]
- 00bf5fdc ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf6fd0 ["INT_ADD", "register:40f0:8", ["const:bf6fd0:8", "const:4:8"]]
+ 00bf6fd0 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-3013ad21d289fdb5219706dd75773905"></a>

### [`00bf6098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf6/00bf6098.md) → [`00bf708c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf7/00bf708c.md) _ZNSt6__ndk15stoldERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf7180",
      "incomplete_value": true,
      "site": "00bf7180",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf618c",
      "incomplete_value": true,
      "site": "00bf618c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
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
      "definition_site": "00bf7184",
      "incomplete_value": true,
      "site": "00bf7184",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf6190",
      "incomplete_value": true,
      "site": "00bf6190",
      "value": [
        "LOAD",
        "8",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf71c0",
      "incomplete_value": true,
      "site": "00bf71c0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:606:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf61cc",
      "incomplete_value": true,
      "site": "00bf61cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf7168",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf7170",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf71a8",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf7168",
      "READ",
      [
        "storage",
        "002b9e50",
        null,
        "string"
      ]
    ],
    [
      "00bf7170",
      "READ",
      [
        "storage",
        "002b9e56",
        null,
        "string"
      ]
    ],
    [
      "00bf71a8",
      "READ",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf60e8 ["INT_ADD", "register:40f0:8", ["const:bf60e8:8", "const:4:8"]]
- 00bf60e8 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf70dc ["INT_ADD", "register:40f0:8", ["const:bf70dc:8", "const:4:8"]]
+ 00bf70dc ["CALL", null, ["callee:00c59160:8"]]
- 00bf6100 ["INT_ADD", "register:40f0:8", ["const:bf6100:8", "const:4:8"]]
- 00bf6100 ["CALL", null, ["callee:00c5f190:8"]]
+ 00bf70f4 ["INT_ADD", "register:40f0:8", ["const:bf70f4:8", "const:4:8"]]
+ 00bf70f4 ["CALL", null, ["callee:00c5f190:8"]]
- 00bf613c ["INT_ADD", "register:40f0:8", ["const:bf613c:8", "const:4:8"]]
- 00bf613c ["CALL", null, ["callee:00c5f0f0:8"]]
+ 00bf7130 ["INT_ADD", "register:40f0:8", ["const:bf7130:8", "const:4:8"]]
+ 00bf7130 ["CALL", null, ["callee:00c5f0f0:8"]]
~~~


<a id="compare-7c703d54aa9c0c7f1be9e6c9f97d965a"></a>

### [`00bf7e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf7/00bf7e50.md) → [`00bf8e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf8/00bf8e44.md) _ZNSt6__ndk110to_wstringEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b930.md) [`00c5f1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1b0.md) [`00c5f1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1c0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf8e80",
      "incomplete_value": true,
      "site": "00bf8e88",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf7e8c",
      "incomplete_value": true,
      "site": "00bf7e94",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:2c0:8"
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
      "00bf8e80",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf8ee8",
      "PARAM",
      [
        "storage",
        "00310534",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf8e80",
      "READ",
      [
        "storage",
        "002c3310",
        null,
        null
      ]
    ],
    [
      "00bf8ee8",
      "PARAM",
      [
        "storage",
        "00310574",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf7e7c ["INT_ADD", "register:40f0:8", ["const:bf7e7c:8", "const:4:8"]]
- 00bf7e7c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf8e70 ["INT_ADD", "register:40f0:8", ["const:bf8e70:8", "const:4:8"]]
+ 00bf8e70 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf7e8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
- 00bf7e8c ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf7e8c ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf7e8c ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf8e80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 00bf8e80 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf8e80 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf8e80 ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf7eb4 ["INT_ADD", "register:40f0:8", ["const:bf7eb4:8", "const:4:8"]]
- 00bf7eb4 ["CALL", null, ["callee:00c5b930:8"]]
+ 00bf8ea8 ["INT_ADD", "register:40f0:8", ["const:bf8ea8:8", "const:4:8"]]
+ 00bf8ea8 ["CALL", null, ["callee:00c5b930:8"]]
~~~


<a id="compare-b9aac91cfeefe7fe5bd7be34d3f2977a"></a>

### [`00bf7f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf7/00bf7f98.md) → [`00bf8f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf8/00bf8f8c.md) _ZNSt6__ndk110to_wstringEd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b930.md) [`00c5f1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1b0.md) [`00c5f1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1c0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.95% / 新版 95.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf8fc8",
      "incomplete_value": true,
      "site": "00bf8fd0",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf7fd4",
      "incomplete_value": true,
      "site": "00bf7fdc",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:2c0:8"
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
      "00bf8fc8",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf902c",
      "PARAM",
      [
        "storage",
        "00310534",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf8fc8",
      "READ",
      [
        "storage",
        "002c3310",
        null,
        null
      ]
    ],
    [
      "00bf902c",
      "PARAM",
      [
        "storage",
        "00310574",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf7fc4 ["INT_ADD", "register:40f0:8", ["const:bf7fc4:8", "const:4:8"]]
- 00bf7fc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf8fb8 ["INT_ADD", "register:40f0:8", ["const:bf8fb8:8", "const:4:8"]]
+ 00bf8fb8 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf7fd4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
- 00bf7fd4 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf7fd4 ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf7fd4 ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf8fc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 00bf8fc8 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf8fc8 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf8fc8 ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf7ffc ["INT_ADD", "register:40f0:8", ["const:bf7ffc:8", "const:4:8"]]
- 00bf7ffc ["CALL", null, ["callee:00c5b930:8"]]
+ 00bf8ff0 ["INT_ADD", "register:40f0:8", ["const:bf8ff0:8", "const:4:8"]]
+ 00bf8ff0 ["CALL", null, ["callee:00c5b930:8"]]
~~~


<a id="compare-e4b8f5832b3e05e64ff9fdd7c2b7a36e"></a>

### [`00bf80dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf80dc.md) → [`00bf90d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf90d0.md) _ZNSt6__ndk110to_wstringEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b930.md) [`00c5f1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1b0.md) [`00c5f1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f1c0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf9108",
      "incomplete_value": true,
      "site": "00bf9110",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8114",
      "incomplete_value": true,
      "site": "00bf811c",
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
                "leaf",
                "const:2c3000:8"
              ],
              [
                "leaf",
                "const:2c0:8"
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
      "00bf9108",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf916c",
      "PARAM",
      [
        "storage",
        "003105a4",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf9108",
      "READ",
      [
        "storage",
        "002c3310",
        null,
        null
      ]
    ],
    [
      "00bf916c",
      "PARAM",
      [
        "storage",
        "003105e4",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8104 ["INT_ADD", "register:40f0:8", ["const:bf8104:8", "const:4:8"]]
- 00bf8104 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf90f8 ["INT_ADD", "register:40f0:8", ["const:bf90f8:8", "const:4:8"]]
+ 00bf90f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf8114 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
- 00bf8114 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf8114 ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf8114 ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf9108 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 00bf9108 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf9108 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf9108 ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf813c ["INT_ADD", "register:40f0:8", ["const:bf813c:8", "const:4:8"]]
- 00bf813c ["CALL", null, ["callee:00c5b930:8"]]
+ 00bf9130 ["INT_ADD", "register:40f0:8", ["const:bf9130:8", "const:4:8"]]
+ 00bf9130 ["CALL", null, ["callee:00c5b930:8"]]
~~~


<a id="compare-85d8d2b71a4ada13f0120f3bb6947eb8"></a>

### [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) → [`00bf920c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf920c.md) FUN_00bf920c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00bf4c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c3c.md) [`00bf4d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4d98.md) [`00bf56ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf56ec.md) [`00bf5850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5850.md) · 呼出先 4件 [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)
- 新版 呼出元 4件 [`00bf5c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5c30.md) [`00bf5d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5d8c.md) [`00bf66e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf66e0.md) [`00bf6844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6844.md) · 呼出先 4件 [`004821e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004821e0.md) [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c5f0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9224",
      "incomplete_value": false,
      "site": "00bf9230",
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
            "const:606:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8230",
      "incomplete_value": false,
      "site": "00bf823c",
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
            "const:4ae:8"
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
      "00bf9224",
      "PARAM",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf9224",
      "PARAM",
      [
        "storage",
        "002a7606",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf823c ["INT_ADD", "register:40f0:8", ["const:bf823c:8", "const:4:8"]]
- 00bf823c ["CALL", null, ["callee:004821e0:8"]]
+ 00bf9230 ["INT_ADD", "register:40f0:8", ["const:bf9230:8", "const:4:8"]]
+ 00bf9230 ["CALL", null, ["callee:004821e0:8"]]
- 00bf8230 ["COPY", "tmp:0:8", ["const:4ae:8"]]
- 00bf8230 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8230 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8230 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bf9224 ["COPY", "tmp:0:8", ["const:606:8"]]
+ 00bf9224 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf9224 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf9224 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00bf8250 ["INT_ADD", "register:40f0:8", ["const:bf8250:8", "const:4:8"]]
- 00bf8250 ["CALL", null, ["callee:00bf925c:8"]]
+ 00bf9244 ["INT_ADD", "register:40f0:8", ["const:bf9244:8", "const:4:8"]]
+ 00bf9244 ["CALL", null, ["callee:00bf925c:8"]]
~~~


<a id="compare-cebb4e661768a1fb3627370faaa6a921"></a>

### [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) → [`00bf925c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf925c.md) FUN_00bf925c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 13件 [`00bf4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4eb0.md) [`00bf501c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf501c.md) [`00bf5188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5188.md) [`00bf52f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf52f8.md) [`00bf5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5440.md) · 呼出先 4件 [`00bf82bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf82bc.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 13件 [`00bf5ea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5ea4.md) [`00bf6010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6010.md) [`00bf617c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf617c.md) [`00bf62ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf62ec.md) [`00bf6434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf6/00bf6434.md) · 呼出先 4件 [`00bf92b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf92b0.md) [`00c38d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38d5c.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9290",
      "incomplete_value": true,
      "site": "00bf9298",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
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
    "old": {
      "definition_site": "00bf829c",
      "incomplete_value": true,
      "site": "00bf82a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b88:8"
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
      "definition_site": "00bf9294",
      "incomplete_value": true,
      "site": "00bf9298",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:b60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf82a0",
      "incomplete_value": true,
      "site": "00bf82a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b90:8"
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
      "00bf9290",
      "READ",
      [
        "storage",
        "00c9bb88",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9290",
      "PARAM",
      [
        "storage",
        "00c96868",
        "std::invalid_argument::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf9294",
      "READ",
      [
        "storage",
        "00c9bb90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf9290",
      "READ",
      [
        "storage",
        "00c9cb58",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9290",
      "PARAM",
      [
        "storage",
        "00c97838",
        "std::invalid_argument::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf9294",
      "READ",
      [
        "storage",
        "00c9cb60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf82a4 ["INT_ADD", "register:40f0:8", ["const:bf82a4:8", "const:4:8"]]
- 00bf82a4 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bf9298 ["INT_ADD", "register:40f0:8", ["const:bf9298:8", "const:4:8"]]
+ 00bf9298 ["CALL", null, ["callee:00c58fb0:8"]]
- 00bf8280 ["INT_ADD", "register:40f0:8", ["const:bf8280:8", "const:4:8"]]
- 00bf8280 ["CALL", null, ["callee:00c58f90:8"]]
+ 00bf9274 ["INT_ADD", "register:40f0:8", ["const:bf9274:8", "const:4:8"]]
+ 00bf9274 ["CALL", null, ["callee:00c58f90:8"]]
- 00bf828c ["INT_ADD", "register:40f0:8", ["const:bf828c:8", "const:4:8"]]
- 00bf828c ["CALL", null, ["callee:00bf92b0:8"]]
+ 00bf9280 ["INT_ADD", "register:40f0:8", ["const:bf9280:8", "const:4:8"]]
+ 00bf9280 ["CALL", null, ["callee:00bf92b0:8"]]
~~~


<a id="compare-8592930ba0b6a74546a3907d756534fe"></a>

### [`00bf86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf86ac.md) → [`00bf96a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf96a0.md) FUN_00bf96a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00bf87e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf87e0.md) [`00bf88a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf88a8.md) [`00bfaf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaf14.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)
- 新版 呼出元 3件 [`00bf97d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf97d4.md) [`00bf989c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf989c.md) [`00bfbf08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbf08.md) · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.26% / 新版 97.26%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9710",
      "incomplete_value": false,
      "site": "00bf9724",
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
            "const:f6a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf871c",
      "incomplete_value": false,
      "site": "00bf8730",
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
            "const:e9b:8"
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
      "00bf9704",
      "READ",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9710",
      "PARAM",
      [
        "storage",
        "002b7e9b",
        null,
        "string"
      ]
    ],
    [
      "00bf9728",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf9704",
      "READ",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9710",
      "PARAM",
      [
        "storage",
        "002b7f6a",
        null,
        "string"
      ]
    ],
    [
      "00bf9728",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8730 ["INT_ADD", "register:40f0:8", ["const:bf8730:8", "const:4:8"]]
- 00bf8730 ["CALL", null, ["callee:00c5f1a0:8"]]
+ 00bf9724 ["INT_ADD", "register:40f0:8", ["const:bf9724:8", "const:4:8"]]
+ 00bf9724 ["CALL", null, ["callee:00c5f1a0:8"]]
- 00bf86d0 ["INT_ADD", "register:40f0:8", ["const:bf86d0:8", "const:4:8"]]
- 00bf86d0 ["CALL", null, ["callee:00c59160:8"]]
+ 00bf96c4 ["INT_ADD", "register:40f0:8", ["const:bf96c4:8", "const:4:8"]]
+ 00bf96c4 ["CALL", null, ["callee:00c59160:8"]]
- 00bf86ec ["INT_ADD", "register:40f0:8", ["const:bf86ec:8", "const:4:8"]]
- 00bf86ec ["CALL", null, ["callee:00c5f230:8"]]
+ 00bf96e0 ["INT_ADD", "register:40f0:8", ["const:bf96e0:8", "const:4:8"]]
+ 00bf96e0 ["CALL", null, ["callee:00c5f230:8"]]
~~~


<a id="compare-2edf6b59f10a6b5402bf7400a182e9aa"></a>

### [`00bf8848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8848.md) → [`00bf983c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf983c.md) _ZNSt6__ndk116generic_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9870",
      "incomplete_value": false,
      "site": "00bf9874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf887c",
      "incomplete_value": false,
      "site": "00bf8880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:460:8"
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
      "definition_site": "00bf9880",
      "incomplete_value": false,
      "site": "00bf9884",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf888c",
      "incomplete_value": false,
      "site": "00bf8890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf985c",
      "incomplete_value": false,
      "site": "00bf9868",
      "value": [
        "leaf",
        "const:ca5888:8"
      ]
    },
    "old": {
      "definition_site": "00bf8868",
      "incomplete_value": false,
      "site": "00bf8874",
      "value": [
        "leaf",
        "const:ca48b8:8"
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
      "00bf9850",
      "READ",
      [
        "storage",
        "01127460",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf985c",
      "DATA",
      [
        "storage",
        "00ca48b8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9870",
      "PARAM",
      [
        "storage",
        "01127460",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf9850",
      "READ",
      [
        "storage",
        "01128420",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf985c",
      "DATA",
      [
        "storage",
        "00ca5888",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9870",
      "PARAM",
      [
        "storage",
        "01128420",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8880 ["INT_ADD", "register:40f0:8", ["const:bf8880:8", "const:4:8"]]
- 00bf8880 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bf9874 ["INT_ADD", "register:40f0:8", ["const:bf9874:8", "const:4:8"]]
+ 00bf9874 ["CALL", null, ["callee:00c58ef0:8"]]
- 00bf8890 ["INT_ADD", "register:40f0:8", ["const:bf8890:8", "const:4:8"]]
- 00bf8890 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bf9884 ["INT_ADD", "register:40f0:8", ["const:bf9884:8", "const:4:8"]]
+ 00bf9884 ["CALL", null, ["callee:00c58f10:8"]]
- 00bf8854 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00bf9848 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-145c9a4abba47c1ac36be692efb3568d"></a>

### [`00bf8930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8930.md) → [`00bf9924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf9924.md) _ZNSt6__ndk115system_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9958",
      "incomplete_value": false,
      "site": "00bf995c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8964",
      "incomplete_value": false,
      "site": "00bf8968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:468:8"
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
      "definition_site": "00bf9968",
      "incomplete_value": false,
      "site": "00bf996c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8974",
      "incomplete_value": false,
      "site": "00bf8978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf9944",
      "incomplete_value": false,
      "site": "00bf9950",
      "value": [
        "leaf",
        "const:ca5890:8"
      ]
    },
    "old": {
      "definition_site": "00bf8950",
      "incomplete_value": false,
      "site": "00bf895c",
      "value": [
        "leaf",
        "const:ca48c0:8"
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
      "00bf9938",
      "READ",
      [
        "storage",
        "01127468",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9944",
      "DATA",
      [
        "storage",
        "00ca48c0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9958",
      "PARAM",
      [
        "storage",
        "01127468",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf9938",
      "READ",
      [
        "storage",
        "01128428",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9944",
      "DATA",
      [
        "storage",
        "00ca5890",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9958",
      "PARAM",
      [
        "storage",
        "01128428",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8968 ["INT_ADD", "register:40f0:8", ["const:bf8968:8", "const:4:8"]]
- 00bf8968 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bf995c ["INT_ADD", "register:40f0:8", ["const:bf995c:8", "const:4:8"]]
+ 00bf995c ["CALL", null, ["callee:00c58ef0:8"]]
- 00bf8978 ["INT_ADD", "register:40f0:8", ["const:bf8978:8", "const:4:8"]]
- 00bf8978 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bf996c ["INT_ADD", "register:40f0:8", ["const:bf996c:8", "const:4:8"]]
+ 00bf996c ["CALL", null, ["callee:00c58f10:8"]]
- 00bf893c ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00bf9930 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-a862d1b56ca99ed88887650dcc6ccdd1"></a>

### [`00bf8ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8ab0.md) → [`00bf9aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf9aa4.md) FUN_00bf9aa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00bf89b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf89b8.md) [`00bf8b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8b84.md) [`00bf8d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8d98.md) [`00bf8ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8ea4.md) · 呼出先 3件 [`007dcf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dc/007dcf74.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)
- 新版 呼出元 4件 [`00bf99ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf99ac.md) [`00bf9b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf9b78.md) [`00bf9d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf9d8c.md) [`00bf9e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf9e98.md) · 呼出先 3件 [`007dded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007dd/007dded8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9aec",
      "incomplete_value": false,
      "site": "00bf9af4",
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
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8af8",
      "incomplete_value": false,
      "site": "00bf8b00",
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
            "const:71a:8"
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
      "00bf9aec",
      "PARAM",
      [
        "storage",
        "002bd71a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf9aec",
      "PARAM",
      [
        "storage",
        "002bd7f8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8b00 ["INT_ADD", "register:40f0:8", ["const:bf8b00:8", "const:4:8"]]
- 00bf8b00 ["CALL", null, ["callee:00c59010:8"]]
+ 00bf9af4 ["INT_ADD", "register:40f0:8", ["const:bf9af4:8", "const:4:8"]]
+ 00bf9af4 ["CALL", null, ["callee:00c59010:8"]]
- 00bf8af8 ["COPY", "tmp:0:8", ["const:71a:8"]]
- 00bf8af8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8af8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8af8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bf9aec ["COPY", "tmp:0:8", ["const:7f8:8"]]
+ 00bf9aec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf9aec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf9aec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00bf8b18 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bf8b18 ["INT_ADD", "register:40f0:8", ["const:bf8b18:8", "const:4:8"]]
- 00bf8b18 ["CALLIND", null, ["register:0:8"]]
+ 00bf9b0c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bf9b0c ["INT_ADD", "register:40f0:8", ["const:bf9b0c:8", "const:4:8"]]
+ 00bf9b0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c7e48c2bdfc19aaa7e63f7089ab15f5b"></a>

### [`00bf9124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9124.md) → [`00bfa118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa118.md) FUN_00bfa118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bf9104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9104.md) · 呼出先 4件 [`00bf90d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf90d0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e280.md)
- 新版 呼出元 1件 [`00bfa0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa0f8.md) · 呼出先 4件 [`00bfa0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa0c4.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f250.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa160",
      "incomplete_value": true,
      "site": "00bfa168",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:b80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf916c",
      "incomplete_value": true,
      "site": "00bf9174",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
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
      "definition_site": "00bfa164",
      "incomplete_value": true,
      "site": "00bfa168",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:b78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf9170",
      "incomplete_value": true,
      "site": "00bf9174",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
      "00bfa160",
      "READ",
      [
        "storage",
        "00c9bbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfa160",
      "PARAM",
      [
        "storage",
        "00c92c70",
        "std::__ndk1::system_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bfa164",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfa160",
      "READ",
      [
        "storage",
        "00c9cb80",
        null,
        "pointer"
      ]
    ],
    [
      "00bfa160",
      "PARAM",
      [
        "storage",
        "00c93c40",
        "std::__ndk1::system_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bfa164",
      "READ",
      [
        "storage",
        "00c9cb78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9174 ["INT_ADD", "register:40f0:8", ["const:bf9174:8", "const:4:8"]]
- 00bf9174 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bfa168 ["INT_ADD", "register:40f0:8", ["const:bfa168:8", "const:4:8"]]
+ 00bfa168 ["CALL", null, ["callee:00c58fb0:8"]]
- 00bf9148 ["INT_ADD", "register:40f0:8", ["const:bf9148:8", "const:4:8"]]
- 00bf9148 ["CALL", null, ["callee:00c58f90:8"]]
+ 00bfa13c ["INT_ADD", "register:40f0:8", ["const:bfa13c:8", "const:4:8"]]
+ 00bfa13c ["CALL", null, ["callee:00c58f90:8"]]
- 00bf915c ["INT_ADD", "register:40f0:8", ["const:bf915c:8", "const:4:8"]]
- 00bf915c ["CALL", null, ["callee:00c5f250:8"]]
+ 00bfa150 ["INT_ADD", "register:40f0:8", ["const:bfa150:8", "const:4:8"]]
+ 00bfa150 ["CALL", null, ["callee:00c5f250:8"]]
~~~


<a id="compare-d0270ba30ffbca25f4b03346466ce99c"></a>

### [`00bf95f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf95f8.md) → [`00bfa5ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa5ec.md) _ZNSt6__ndk115future_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c583e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583e0.md) · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c593b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593b0.md) · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa620",
      "incomplete_value": false,
      "site": "00bfa624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf962c",
      "incomplete_value": false,
      "site": "00bf9630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:470:8"
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
      "definition_site": "00bfa630",
      "incomplete_value": false,
      "site": "00bfa634",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf963c",
      "incomplete_value": false,
      "site": "00bf9640",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bfa60c",
      "incomplete_value": false,
      "site": "00bfa618",
      "value": [
        "leaf",
        "const:ca5898:8"
      ]
    },
    "old": {
      "definition_site": "00bf9618",
      "incomplete_value": false,
      "site": "00bf9624",
      "value": [
        "leaf",
        "const:ca48c8:8"
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
      "00bfa600",
      "READ",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfa60c",
      "DATA",
      [
        "storage",
        "00ca48c8",
        null,
        null
      ]
    ],
    [
      "00bfa620",
      "PARAM",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bfa600",
      "READ",
      [
        "storage",
        "01128430",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfa60c",
      "DATA",
      [
        "storage",
        "00ca5898",
        null,
        null
      ]
    ],
    [
      "00bfa620",
      "PARAM",
      [
        "storage",
        "01128430",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9630 ["INT_ADD", "register:40f0:8", ["const:bf9630:8", "const:4:8"]]
- 00bf9630 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bfa624 ["INT_ADD", "register:40f0:8", ["const:bfa624:8", "const:4:8"]]
+ 00bfa624 ["CALL", null, ["callee:00c58ef0:8"]]
- 00bf9640 ["INT_ADD", "register:40f0:8", ["const:bf9640:8", "const:4:8"]]
- 00bf9640 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bfa634 ["INT_ADD", "register:40f0:8", ["const:bfa634:8", "const:4:8"]]
+ 00bfa634 ["CALL", null, ["callee:00c58f10:8"]]
- 00bf9604 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00bfa5f8 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-43f74062764d7bc20437fd90b0ee5a1a"></a>

### [`00bf9aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9aac.md) → [`00bfaaa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfaaa0.md) _ZNSt6__ndk117__assoc_sub_state10__sub_waitERNS_11unique_lockINS_5mutexEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58570.md) · 呼出先 3件 [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)
- 新版 呼出元 1件 [`00c59540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59540.md) · 呼出先 3件 [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfab24",
      "incomplete_value": false,
      "site": "00bfab2c",
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
            "const:aa5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf9b30",
      "incomplete_value": false,
      "site": "00bf9b38",
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
            "const:9c7:8"
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
      "00bfab24",
      "PARAM",
      [
        "storage",
        "002be9c7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfab24",
      "PARAM",
      [
        "storage",
        "002beaa5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9b38 ["INT_ADD", "register:40f0:8", ["const:bf9b38:8", "const:4:8"]]
- 00bf9b38 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfab2c ["INT_ADD", "register:40f0:8", ["const:bfab2c:8", "const:4:8"]]
+ 00bfab2c ["CALL", null, ["callee:00c591c0:8"]]
- 00bf9ad8 ["INT_ADD", "register:40f0:8", ["const:bf9ad8:8", "const:4:8"]]
- 00bf9ad8 ["CALL", null, ["callee:00c59520:8"]]
+ 00bfaacc ["INT_ADD", "register:40f0:8", ["const:bfaacc:8", "const:4:8"]]
+ 00bfaacc ["CALL", null, ["callee:00c59520:8"]]
- 00bf9b08 ["INT_ADD", "register:40f0:8", ["const:bf9b08:8", "const:4:8"]]
- 00bf9b08 ["CALL", null, ["callee:00c59190:8"]]
+ 00bfaafc ["INT_ADD", "register:40f0:8", ["const:bfaafc:8", "const:4:8"]]
+ 00bfaafc ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-e957b5fbf5c4644812453a09236a4cf1"></a>

### [`00bf9d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9d40.md) → [`00bfad34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfad34.md) _ZNSt6__ndk17promiseIvEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfad64",
      "incomplete_value": true,
      "site": "00bfad64",
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
      "definition_site": "00bf9d70",
      "incomplete_value": true,
      "site": "00bf9d70",
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
      "00bfad58",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "00bfad64",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfad58",
      "READ",
      [
        "storage",
        "00c9bcf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfad64",
      "DATA",
      [
        "storage",
        "00c93d78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9d58 ["INT_ADD", "register:40f0:8", ["const:bf9d58:8", "const:4:8"]]
- 00bf9d58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bfad4c ["INT_ADD", "register:40f0:8", ["const:bfad4c:8", "const:4:8"]]
+ 00bfad4c ["CALL", null, ["callee:00c58f30:8"]]
- 00bf9d5c ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 00bfad50 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 00bf9d64 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
- 00bf9d64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfad58 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cf0:8"]]
+ 00bfad58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cd5ba5e2ea3b116ace3f476e5d78fbf4"></a>

### [`00bf9d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9d94.md) → [`00bfad88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfad88.md) _ZNSt6__ndk17promiseIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0045a708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a708.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0045aa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa28.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.11% / 新版 90.11%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfadf4",
      "incomplete_value": false,
      "site": "00bfadf4",
      "value": [
        "leaf",
        "const:ca5898:8"
      ]
    },
    "old": {
      "definition_site": "00bf9e00",
      "incomplete_value": false,
      "site": "00bf9e00",
      "value": [
        "leaf",
        "const:ca48c8:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfae30",
      "incomplete_value": true,
      "site": "00bfae38",
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
      "definition_site": "00bf9e3c",
      "incomplete_value": true,
      "site": "00bf9e44",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfae4c",
      "incomplete_value": true,
      "site": "00bfae54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf9e58",
      "incomplete_value": true,
      "site": "00bf9e60",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9a000:8"
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
      "00bfade0",
      "READ",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfadf4",
      "DATA",
      [
        "storage",
        "00ca48c8",
        null,
        null
      ]
    ],
    [
      "00bfae28",
      "READ",
      [
        "storage",
        "00c9ad30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfade0",
      "READ",
      [
        "storage",
        "01128430",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfadf4",
      "DATA",
      [
        "storage",
        "00ca5898",
        null,
        null
      ]
    ],
    [
      "00bfae28",
      "READ",
      [
        "storage",
        "00c9bd00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9e60 ["INT_ADD", "register:40f0:8", ["const:bf9e60:8", "const:4:8"]]
- 00bf9e60 ["CALL", null, ["callee:00c593d0:8"]]
+ 00bfae54 ["INT_ADD", "register:40f0:8", ["const:bfae54:8", "const:4:8"]]
+ 00bfae54 ["CALL", null, ["callee:00c593d0:8"]]
- 00bf9ee8 ["INT_ADD", "register:40f0:8", ["const:bf9ee8:8", "const:4:8"]]
- 00bf9ee8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bfaedc ["INT_ADD", "register:40f0:8", ["const:bfaedc:8", "const:4:8"]]
+ 00bfaedc ["CALL", null, ["callee:00c58ef0:8"]]
- 00bf9ef8 ["INT_ADD", "register:40f0:8", ["const:bf9ef8:8", "const:4:8"]]
- 00bf9ef8 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bfaeec ["INT_ADD", "register:40f0:8", ["const:bfaeec:8", "const:4:8"]]
+ 00bfaeec ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-408ff6980a277d58c7e1dcc7b9942212"></a>

### [`00bfa124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa124.md) → [`00bfb118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb118.md) FUN_00bfb118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfb140",
      "incomplete_value": true,
      "site": "00bfb140",
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
      "definition_site": "00bfa14c",
      "incomplete_value": true,
      "site": "00bfa14c",
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
      "00bfb134",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb140",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfb134",
      "READ",
      [
        "storage",
        "00c9bcf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb140",
      "DATA",
      [
        "storage",
        "00c93d78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa134 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 00bfb128 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 00bfa140 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
- 00bfa140 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfb134 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cf0:8"]]
+ 00bfb134 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfa150 ["INT_ADD", "register:40f0:8", ["const:bfa150:8", "const:4:8"]]
- 00bfa150 ["CALL", null, ["callee:00c59170:8"]]
+ 00bfb144 ["INT_ADD", "register:40f0:8", ["const:bfb144:8", "const:4:8"]]
+ 00bfb144 ["CALL", null, ["callee:00c59170:8"]]
~~~


<a id="compare-8b8f4d65a4a1442df25a6e8efc7186c1"></a>

### [`00bfa1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1cc.md) → [`00bfb1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb1c0.md) _ZNSt6__ndk15mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)
- 新版 呼出元 1件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) · 呼出先 2件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb1e4",
      "incomplete_value": false,
      "site": "00bfb1e8",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa1f0",
      "incomplete_value": false,
      "site": "00bfa1f4",
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
            "const:742:8"
          ]
        ]
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
      "00bfb1e4",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb1e4",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa1f4 ["INT_ADD", "register:40f0:8", ["const:bfa1f4:8", "const:4:8"]]
- 00bfa1f4 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb1e8 ["INT_ADD", "register:40f0:8", ["const:bfb1e8:8", "const:4:8"]]
+ 00bfb1e8 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa1d8 ["INT_ADD", "register:40f0:8", ["const:bfa1d8:8", "const:4:8"]]
- 00bfa1d8 ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb1cc ["INT_ADD", "register:40f0:8", ["const:bfb1cc:8", "const:4:8"]]
+ 00bfb1cc ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa1f0 ["COPY", "tmp:0:8", ["const:742:8"]]
- 00bfa1f0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa1f0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa1f0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfb1e4 ["COPY", "tmp:0:8", ["const:819:8"]]
+ 00bfb1e4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb1e4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb1e4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-20ddcc472e99c309bba5a0a2cc4e7aff"></a>

### [`00bfa240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa240.md) → [`00bfb234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb234.md) _ZNSt6__ndk115recursive_mutexC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a190.md) · 呼出先 6件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md) [`00c5bf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf50.md) [`00c5bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf60.md) [`00c5bf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf70.md)
- 新版 呼出元 1件 [`00c5b160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b160.md) · 呼出先 6件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5c730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c730.md) [`00c5cf20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf20.md) [`00c5cf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf30.md) [`00c5cf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb2d0",
      "incomplete_value": false,
      "site": "00bfb2d4",
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
            "const:9bf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa2dc",
      "incomplete_value": false,
      "site": "00bfa2e0",
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
            "const:867:8"
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
      "00bfb2d0",
      "PARAM",
      [
        "storage",
        "002a8867",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb2d0",
      "PARAM",
      [
        "storage",
        "002a89bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa2e0 ["INT_ADD", "register:40f0:8", ["const:bfa2e0:8", "const:4:8"]]
- 00bfa2e0 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb2d4 ["INT_ADD", "register:40f0:8", ["const:bfb2d4:8", "const:4:8"]]
+ 00bfb2d4 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa25c ["INT_ADD", "register:40f0:8", ["const:bfa25c:8", "const:4:8"]]
- 00bfa25c ["CALL", null, ["callee:00c5cf40:8"]]
+ 00bfb250 ["INT_ADD", "register:40f0:8", ["const:bfb250:8", "const:4:8"]]
+ 00bfb250 ["CALL", null, ["callee:00c5cf40:8"]]
- 00bfa26c ["INT_ADD", "register:40f0:8", ["const:bfa26c:8", "const:4:8"]]
- 00bfa26c ["CALL", null, ["callee:00c5cf50:8"]]
+ 00bfb260 ["INT_ADD", "register:40f0:8", ["const:bfb260:8", "const:4:8"]]
+ 00bfb260 ["CALL", null, ["callee:00c5cf50:8"]]
~~~


<a id="compare-5be23e0708695ff42fdb20cdbe568f62"></a>

### [`00bfa304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa304.md) → [`00bfb2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb2f8.md) _ZNSt6__ndk115recursive_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)
- 新版 呼出元 1件 [`00c5b180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b180.md) · 呼出先 2件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb31c",
      "incomplete_value": false,
      "site": "00bfb320",
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
            "const:616:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa328",
      "incomplete_value": false,
      "site": "00bfa32c",
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
            "const:4be:8"
          ]
        ]
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
      "00bfb31c",
      "PARAM",
      [
        "storage",
        "002a74be",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb31c",
      "PARAM",
      [
        "storage",
        "002a7616",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa32c ["INT_ADD", "register:40f0:8", ["const:bfa32c:8", "const:4:8"]]
- 00bfa32c ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb320 ["INT_ADD", "register:40f0:8", ["const:bfb320:8", "const:4:8"]]
+ 00bfb320 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa310 ["INT_ADD", "register:40f0:8", ["const:bfa310:8", "const:4:8"]]
- 00bfa310 ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb304 ["INT_ADD", "register:40f0:8", ["const:bfb304:8", "const:4:8"]]
+ 00bfb304 ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa328 ["COPY", "tmp:0:8", ["const:4be:8"]]
- 00bfa328 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa328 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa328 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfb31c ["COPY", "tmp:0:8", ["const:616:8"]]
+ 00bfb31c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb31c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb31c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-c460b0fac493a6d26ebb44095efb12df"></a>

### [`00bfa394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa394.md) → [`00bfb388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb388.md) _ZNSt6__ndk111timed_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb3cc",
      "incomplete_value": false,
      "site": "00bfb3d0",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa3d8",
      "incomplete_value": false,
      "site": "00bfa3dc",
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
            "const:742:8"
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
      "00bfb3cc",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb3cc",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa3dc ["INT_ADD", "register:40f0:8", ["const:bfa3dc:8", "const:4:8"]]
- 00bfa3dc ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb3d0 ["INT_ADD", "register:40f0:8", ["const:bfb3d0:8", "const:4:8"]]
+ 00bfb3d0 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa3a8 ["INT_ADD", "register:40f0:8", ["const:bfa3a8:8", "const:4:8"]]
- 00bfa3a8 ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb39c ["INT_ADD", "register:40f0:8", ["const:bfb39c:8", "const:4:8"]]
+ 00bfb39c ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa3b4 ["INT_ADD", "register:40f0:8", ["const:bfa3b4:8", "const:4:8"]]
- 00bfa3b4 ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb3a8 ["INT_ADD", "register:40f0:8", ["const:bfb3a8:8", "const:4:8"]]
+ 00bfb3a8 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-da7d9cf4c56d3b649174963851f8a834"></a>

### [`00bfa3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa3e8.md) → [`00bfb3dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb3dc.md) _ZNSt6__ndk111timed_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb460",
      "incomplete_value": false,
      "site": "00bfb464",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa46c",
      "incomplete_value": false,
      "site": "00bfa470",
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
            "const:742:8"
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
      "00bfb460",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb460",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa470 ["INT_ADD", "register:40f0:8", ["const:bfa470:8", "const:4:8"]]
- 00bfa470 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb464 ["INT_ADD", "register:40f0:8", ["const:bfb464:8", "const:4:8"]]
+ 00bfb464 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa40c ["INT_ADD", "register:40f0:8", ["const:bfa40c:8", "const:4:8"]]
- 00bfa40c ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb400 ["INT_ADD", "register:40f0:8", ["const:bfb400:8", "const:4:8"]]
+ 00bfb400 ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa424 ["INT_ADD", "register:40f0:8", ["const:bfa424:8", "const:4:8"]]
- 00bfa424 ["CALL", null, ["callee:00c59520:8"]]
+ 00bfb418 ["INT_ADD", "register:40f0:8", ["const:bfb418:8", "const:4:8"]]
+ 00bfb418 ["CALL", null, ["callee:00c59520:8"]]
~~~


<a id="compare-8345e3777fd66e3d0ed977a304b9e064"></a>

### [`00bfa4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa4d8.md) → [`00bfb4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb4cc.md) _ZNSt6__ndk111timed_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c591e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5a1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1b0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb510",
      "incomplete_value": false,
      "site": "00bfb514",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa51c",
      "incomplete_value": false,
      "site": "00bfa520",
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
            "const:742:8"
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
      "00bfb510",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb510",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa520 ["INT_ADD", "register:40f0:8", ["const:bfa520:8", "const:4:8"]]
- 00bfa520 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb514 ["INT_ADD", "register:40f0:8", ["const:bfb514:8", "const:4:8"]]
+ 00bfb514 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa4ec ["INT_ADD", "register:40f0:8", ["const:bfa4ec:8", "const:4:8"]]
- 00bfa4ec ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb4e0 ["INT_ADD", "register:40f0:8", ["const:bfb4e0:8", "const:4:8"]]
+ 00bfb4e0 ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa4fc ["INT_ADD", "register:40f0:8", ["const:bfa4fc:8", "const:4:8"]]
- 00bfa4fc ["CALL", null, ["callee:00c5a1b0:8"]]
+ 00bfb4f0 ["INT_ADD", "register:40f0:8", ["const:bfb4f0:8", "const:4:8"]]
+ 00bfb4f0 ["CALL", null, ["callee:00c5a1b0:8"]]
~~~


<a id="compare-41a6791d19712268d8aa665a383c235c"></a>

### [`00bfa548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa548.md) → [`00bfb53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb53c.md) _ZNSt6__ndk121recursive_timed_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb580",
      "incomplete_value": false,
      "site": "00bfb584",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa58c",
      "incomplete_value": false,
      "site": "00bfa590",
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
            "const:742:8"
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
      "00bfb580",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb580",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa590 ["INT_ADD", "register:40f0:8", ["const:bfa590:8", "const:4:8"]]
- 00bfa590 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb584 ["INT_ADD", "register:40f0:8", ["const:bfb584:8", "const:4:8"]]
+ 00bfb584 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa55c ["INT_ADD", "register:40f0:8", ["const:bfa55c:8", "const:4:8"]]
- 00bfa55c ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb550 ["INT_ADD", "register:40f0:8", ["const:bfb550:8", "const:4:8"]]
+ 00bfb550 ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa568 ["INT_ADD", "register:40f0:8", ["const:bfa568:8", "const:4:8"]]
- 00bfa568 ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb55c ["INT_ADD", "register:40f0:8", ["const:bfb55c:8", "const:4:8"]]
+ 00bfb55c ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-e0b0a45ac57c842c916473afa2187e45"></a>

### [`00bfa59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa59c.md) → [`00bfb590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb590.md) _ZNSt6__ndk121recursive_timed_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md) [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md) [`00c596c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596c0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb63c",
      "incomplete_value": false,
      "site": "00bfb640",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa648",
      "incomplete_value": false,
      "site": "00bfa64c",
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
            "const:742:8"
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
      "definition_site": "00bfb648",
      "incomplete_value": false,
      "site": "00bfb650",
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
            "const:e45:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa654",
      "incomplete_value": false,
      "site": "00bfa65c",
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
            "const:d7a:8"
          ]
        ]
      ]
    },
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
      "00bfb63c",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ],
    [
      "00bfb648",
      "PARAM",
      [
        "storage",
        "002a3d7a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb63c",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ],
    [
      "00bfb648",
      "PARAM",
      [
        "storage",
        "002a3e45",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa64c ["INT_ADD", "register:40f0:8", ["const:bfa64c:8", "const:4:8"]]
- 00bfa64c ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb640 ["INT_ADD", "register:40f0:8", ["const:bfb640:8", "const:4:8"]]
+ 00bfb640 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa65c ["INT_ADD", "register:40f0:8", ["const:bfa65c:8", "const:4:8"]]
- 00bfa65c ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb650 ["INT_ADD", "register:40f0:8", ["const:bfb650:8", "const:4:8"]]
+ 00bfb650 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa5b4 ["INT_ADD", "register:40f0:8", ["const:bfa5b4:8", "const:4:8"]]
- 00bfa5b4 ["CALL", null, ["callee:00c596c0:8"]]
+ 00bfb5a8 ["INT_ADD", "register:40f0:8", ["const:bfb5a8:8", "const:4:8"]]
+ 00bfb5a8 ["CALL", null, ["callee:00c596c0:8"]]
~~~


<a id="compare-05d8cac4cf95438f85d80c3a9afc5b95"></a>

### [`00bfa704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa704.md) → [`00bfb6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb6f8.md) _ZNSt6__ndk121recursive_timed_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c591e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5a1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1b0.md) [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb760",
      "incomplete_value": false,
      "site": "00bfb764",
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
            "const:819:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa76c",
      "incomplete_value": false,
      "site": "00bfa770",
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
            "const:742:8"
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
      "00bfb760",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb760",
      "PARAM",
      [
        "storage",
        "002b1819",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa770 ["INT_ADD", "register:40f0:8", ["const:bfa770:8", "const:4:8"]]
- 00bfa770 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb764 ["INT_ADD", "register:40f0:8", ["const:bfb764:8", "const:4:8"]]
+ 00bfb764 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa718 ["INT_ADD", "register:40f0:8", ["const:bfa718:8", "const:4:8"]]
- 00bfa718 ["CALL", null, ["callee:00c5c740:8"]]
+ 00bfb70c ["INT_ADD", "register:40f0:8", ["const:bfb70c:8", "const:4:8"]]
+ 00bfb70c ["CALL", null, ["callee:00c5c740:8"]]
- 00bfa734 ["INT_ADD", "register:40f0:8", ["const:bfa734:8", "const:4:8"]]
- 00bfa734 ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb728 ["INT_ADD", "register:40f0:8", ["const:bfb728:8", "const:4:8"]]
+ 00bfb728 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-b708f8d1d1c45ef2efed6787e635c534"></a>

### [`00bfa7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa7a0.md) → [`00bfb794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb794.md) _ZNSt6__ndk16thread4joinEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58240.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d710.md)
- 新版 呼出元 1件 [`00c59210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59210.md) · 呼出先 2件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5e6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e6e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb7d8",
      "incomplete_value": false,
      "site": "00bfb7dc",
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
            "const:3e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa7e4",
      "incomplete_value": false,
      "site": "00bfa7e8",
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
            "const:28b:8"
          ]
        ]
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
      "00bfb7d8",
      "PARAM",
      [
        "storage",
        "002a628b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb7d8",
      "PARAM",
      [
        "storage",
        "002a63e3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa7e8 ["INT_ADD", "register:40f0:8", ["const:bfa7e8:8", "const:4:8"]]
- 00bfa7e8 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb7dc ["INT_ADD", "register:40f0:8", ["const:bfb7dc:8", "const:4:8"]]
+ 00bfb7dc ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa7c0 ["INT_ADD", "register:40f0:8", ["const:bfa7c0:8", "const:4:8"]]
- 00bfa7c0 ["CALL", null, ["callee:00c5e6e0:8"]]
+ 00bfb7b4 ["INT_ADD", "register:40f0:8", ["const:bfb7b4:8", "const:4:8"]]
+ 00bfb7b4 ["CALL", null, ["callee:00c5e6e0:8"]]
- 00bfa7e4 ["COPY", "tmp:0:8", ["const:28b:8"]]
- 00bfa7e4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa7e4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa7e4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfb7d8 ["COPY", "tmp:0:8", ["const:3e3:8"]]
+ 00bfb7d8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb7d8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb7d8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-c1d6a1f9e4e37083ffb856431a10e0aa"></a>

### [`00bfa7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa7ec.md) → [`00bfb7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb7e0.md) _ZNSt6__ndk16thread6detachEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c585e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585e0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5e350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e350.md)
- 新版 呼出元 1件 [`00c595b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595b0.md) · 呼出先 2件 [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5f320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f320.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb820",
      "incomplete_value": false,
      "site": "00bfb824",
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
            "const:5bc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa82c",
      "incomplete_value": false,
      "site": "00bfa830",
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
            "const:4ef:8"
          ]
        ]
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
      "00bfb820",
      "PARAM",
      [
        "storage",
        "002ae4ef",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb820",
      "PARAM",
      [
        "storage",
        "002ae5bc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa830 ["INT_ADD", "register:40f0:8", ["const:bfa830:8", "const:4:8"]]
- 00bfa830 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb824 ["INT_ADD", "register:40f0:8", ["const:bfb824:8", "const:4:8"]]
+ 00bfb824 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa808 ["INT_ADD", "register:40f0:8", ["const:bfa808:8", "const:4:8"]]
- 00bfa808 ["CALL", null, ["callee:00c5f320:8"]]
+ 00bfb7fc ["INT_ADD", "register:40f0:8", ["const:bfb7fc:8", "const:4:8"]]
+ 00bfb7fc ["CALL", null, ["callee:00c5f320:8"]]
- 00bfa82c ["COPY", "tmp:0:8", ["const:4ef:8"]]
- 00bfa82c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa82c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa82c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfb820 ["COPY", "tmp:0:8", ["const:5bc:8"]]
+ 00bfb820 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb820 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfb820 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-164d35eebc888765829384a6e847550d"></a>

### [`00bfa8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa8e0.md) → [`00bfb8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb8d4.md) _ZNSt6__ndk119__thread_local_dataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) · 呼出先 3件 [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) · 呼出先 3件 [`00bfb958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb958.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfb934",
      "incomplete_value": true,
      "site": "00bfb934",
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
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa940",
      "incomplete_value": true,
      "site": "00bfa940",
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
            "const:480:8"
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
      "definition_site": "00bfb910",
      "incomplete_value": false,
      "site": "00bfb914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:448:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa91c",
      "incomplete_value": false,
      "site": "00bfa920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:488:8"
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
      "definition_site": "00bfb924",
      "incomplete_value": false,
      "site": "00bfb928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa930",
      "incomplete_value": false,
      "site": "00bfa934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:478:8"
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
      "00bfb8f0",
      "READ",
      [
        "storage",
        "01127488",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfb8f8",
      "READ",
      [
        "storage",
        "01127480",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb8f8",
      "DATA",
      [
        "storage",
        "01127478",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bfb8f0",
      "READ",
      [
        "storage",
        "01128448",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfb8f8",
      "READ",
      [
        "storage",
        "01128440",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb8f8",
      "DATA",
      [
        "storage",
        "01128438",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa920 ["INT_ADD", "register:40f0:8", ["const:bfa920:8", "const:4:8"]]
- 00bfa920 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bfb914 ["INT_ADD", "register:40f0:8", ["const:bfb914:8", "const:4:8"]]
+ 00bfb914 ["CALL", null, ["callee:00c58ef0:8"]]
- 00bfa934 ["INT_ADD", "register:40f0:8", ["const:bfa934:8", "const:4:8"]]
- 00bfa934 ["CALL", null, ["callee:00bfb958:8"]]
+ 00bfb928 ["INT_ADD", "register:40f0:8", ["const:bfb928:8", "const:4:8"]]
+ 00bfb928 ["CALL", null, ["callee:00bfb958:8"]]
- 00bfa940 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:480:8"]]
- 00bfa940 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00bfb934 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:440:8"]]
+ 00bfb934 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


